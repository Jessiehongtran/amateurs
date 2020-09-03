import React from 'react';
import { events } from '../../data/events';
import './liveEvents.scss'

export default class LiveEvents extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="live_events">
                <h2 className="title"> Live sessions</h2>
                <div className="events">
                    {events.map(event => 
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
                                    #{event.id}
                                </div>
                                <div className="created_by">
                                    Created by {event.host.name}
                                </div>
                                <div className="who_joined">
                                    {event.participants.map(each => 
                                        <img className="avatar" src={each.avatar}/>)}
                                </div>
                                <div className="how_long">
                                    played for 3 hours
                                </div>
                            </div>
                            <div className="join-btn">
                                <a href={`https://client-a008qpss6.vercel.app/room/${event.id}`}>Join</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}