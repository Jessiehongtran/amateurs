import React from 'react';
import { players } from '../data/players';
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
                        <p>hahaha</p>
                    </div>
                    <div className="players">
                        {players.map(player => 
                            <div className="each_player">
                                <div className="avatar">
                                </div>
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
                                    <button>Invite</button>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
        )
    }
}