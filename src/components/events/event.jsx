import React from 'react';
import { API_URL } from '../../config';
import axios from 'axios';
import './event.scss';
import Participants from './participants'

export default class Event extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            event: {},
            eventId: this.props.eventId,
            host: {}
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
            })
            .catch(err => {
                console.log(err)
                })
        //update join count in event
        axios.patch(`${API_URL}/events/${this.state.eventId}`, 
                {
                    joined: this.state.event.joined + 1
                }
             )
             .then(res => {
                 console.log(res.data)
             })
             .catch(err => {
                console.log(err)
                })
    }


    render(){
        const {event, host} = this.state
        console.log('event', event)
        console.log(this.props.eventId)

        return (
            <div className="each_event" onClick={() => this.props.history.push(`/eventDetails/${this.state.eventId}`)}>
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
                    <Participants eventId = {this.state.eventId}/>
                    <div className="how_long">
                        played for 3 hours
                    </div>
                </div>
                <div className="join-btn">
                    <a 
                    href={`https://client-a008qpss6.vercel.app/room/${event.id}`}
                    onClick={() => this.updateJoin()}
                    >Join</a>
                </div>
            </div>
        
        )
    }
}