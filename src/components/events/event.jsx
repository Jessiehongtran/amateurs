import React from 'react';
import { API_URL } from '../../config';
import axios from 'axios';
import './event.scss';
import { Link } from 'react-router-dom';
import Participants from './participants'

export default class Event extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            event: {},
            eventId: this.props.eventId,
            host: {},
            participants: []
        }
    }

    componentDidMount(){
        axios.get(`${API_URL}/events/${this.state.eventId}`)
             .then(res => {
                 this.setState({event: res.data})
                 const hostId = res.data.host_id
                 axios.get(`${API_URL}/users/${hostId}`)
                      .then(newres => {
                         this.setState({host: newres.data})
                      })
                      .catch(err => {
                        console.log(err)
                    })
             })
             .catch(err => {
                 console.log(err)
             })
        axios.get(`${API_URL}/events/participants/${this.props.eventId}`)
            .then(res => {
                this.setState({participants: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    updateJoin(){
        //update event_participant table to connect user and event
        axios.post(`${API_URL}/events/participants`, 
                {
                    event_id: this.state.eventId,
                    participant_id: localStorage.getItem('user_id')
                }
            )
            .then(res => {
                console.log(res.data)
                 //update join count in event
                axios.patch(`${API_URL}/events/${this.state.eventId}`, 
                    {
                        joined: this.state.event.joined + 1
                    }
                )
                    .then(res => {
                        
                    })
                    .catch(err => {
                        console.log(err)
                        })
            })
            .catch(err => {
                console.log(err)
                })
       
    }


    render(){
        const {event, host} = this.state
        const {participants} = this.state
        let list_participants = participants

        if (participants.length > 10){
            list_participants = participants.slice(0,10)
        }

        return (
            <div className="each_event">
                <div className="icon_joins">
                    <div className="icon">
                        <span className="music-icon"><i class="fas fa-music"></i></span>
                    </div>
                    <div className="joins">
                        {event.joined} 
                    </div>
                </div>
                <div className="info">
                    <div className="id">
                        #{event.id*1234}
                    </div>
                    <div className="created_by">
                        Created by {host.nick_name} 
                    </div>
                    <Participants participants = {list_participants}/>
                    <div className="date_time">
                        <div className="date">
                            {event.start_date}
                        </div>
                        {event.start_time
                        ? <div className="time">
                            {event.start_time}
                          </div>
                        : null}
                    </div>
                </div>
                <div className="join-btn">
                    <Link
                    class="join" 
                    to={{
                        pathname: `/eventDetails/${this.state.eventId}`, 
                        query: {
                            nick_name: host.nick_name, 
                            start_time: event.start_time,
                            start_date: event.start_date,
                            title: event.title,
                            description: event.description,
                            history: this.props.history,
                            participants: list_participants
                        } 
                    }}
                    onClick={() => this.updateJoin()}
                    >Checkout</Link>
                </div>
            </div>
        
        )
    }
}