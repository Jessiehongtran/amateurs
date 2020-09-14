import React from 'react';
import { players } from '../../data/players';
import './players.scss';
import axios from 'axios';
import { API_URL } from '../../config';

export default class Players extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            players: []
        }
    }

    componentDidMount(){
        axios.get(`${API_URL}/users`, { withCredentials: true })
             .then(res => {
                 console.log('users', res.data)
                 this.setState({players: res.data})
             })
             .catch(err => {
                 console.log(err.message)
             })
    }

    render(){

        const currentYear = (new Date()).getFullYear()
        console.log(currentYear)
        console.log(this.state.players)

        const currentMonth = (new Date()).getMonth() + 1

        const currentDate = (new Date()).getDate() 
        
        
        return (
            <div className="players">
                {this.state.players.map(player => 
                    <div className="each_player">
                        <img className="avatar" src={player.avatar}/>
                        <div className="info">
                            <h4 className="username">
                                <div className="status">
                                </div>
                                {player.nick_name}
                            </h4>
                            <p className="age">
                                Age: {player.year_of_birth === null ? 'unknown' : (currentYear - parseInt(player.year_of_birth)) + "yrs old"} 
                            </p>
                            {/* <p className="join_duration">
                                Joined: {
                                    (currentYear - parseInt(player.date_joined.split("/")[2]))*365
                                    + (currentMonth - parseInt(player.date_joined.split("/")[0]))*30
                                    + (currentDate - parseInt(player.date_joined.split("/")[1]))
                                } days
                            </p> */}
                        </div>
                    </div>)}
            </div>
        )
    }
}