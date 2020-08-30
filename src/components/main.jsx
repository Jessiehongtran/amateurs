import React from 'react';
import { players } from '../data/players';
import { events } from '../data/events';
import '../styles/main.scss'

export default class Main extends React.Component {

    render(){
        const currentYear = (new Date()).getFullYear()
        console.log(currentYear)

        const currentMonth = (new Date()).getMonth() + 1

        const currentDate = (new Date()).getDate() 

        return (
            <div className="main_container">
                <div className="main">
                    <div className="live_events">
                        <h2 className="title"> Live sessions</h2>
                        <div className="events">
                            {events.map(event => 
                                <div className="each_event">
                                    <div className="icon_joins">
                                        <div className="icon">
                                            {event.icon}
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
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="players">
                        {players.map(player => 
                            <div className="each_player">
                                <img className="avatar" src={player.avatar}/>
                                <div className="info">
                                    <h4 className="username">
                                        <div className="status">
                                        </div>
                                        {player.username}
                                    </h4>
                                    <p className="age">
                                        Age: {currentYear - player.year_of_birth} yrs old
                                    </p>
                                    <p className="join_duration">
                                        Joined: {
                                            (currentYear - parseInt(player.date_joined.split("/")[2]))*365
                                            + (currentMonth - parseInt(player.date_joined.split("/")[0]))*30
                                            + (currentDate - parseInt(player.date_joined.split("/")[1]))
                                        } days
                                    </p>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }
}