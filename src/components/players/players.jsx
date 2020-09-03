import React from 'react';
import { players } from '../../data/players';
import './players.scss'

export default class Players extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){

        const currentYear = (new Date()).getFullYear()
        console.log(currentYear)

        const currentMonth = (new Date()).getMonth() + 1

        const currentDate = (new Date()).getDate() 
        
        return (
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
        )
    }
}