import React from 'react';
import { events } from '../../data/events';
import './liveEvents.scss';
import { API_URL } from '../../config';
import axios from 'axios';
import Event from './event';

export default class LiveEvents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        axios.get(`${API_URL}/events`)
             .then(res => {
                 console.log(res.data)
                this.setState({events: res.data})
             })
             .catch(err => {
                 console.log(err)
             })
    }


    render(){
        console.log('events', this.state.events)
        const { events } = this.state

        console.log('events', events)

        return (
            <div className="live_events">
                <h2 className="title"> Live sessions</h2>
                <div className="events">
                    {events && events.length > 0
                    ? events.map(event => 
                        <div key={event.id}><Event eventId={event.id}/></div>
                        )
                    : null}
                </div>
            </div>
        )
    }
}