import React from 'react';
import { API_URL } from '../../config';
import axios from 'axios';
import './participants.scss';

export default class Participants extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            participants: [],
        }
    }

    componentDidMount(){
        axios.get(`${API_URL}/events/participants/${this.state.eventId}`)
            .then(res => {
                this.setState({participants: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }


    render(){
        const {participants} = this.state

        return (  
            <div className="who_joined">
                {participants.map(each => 
                    <img className="avatar" src={each.avatar}/>)} 
            </div>
        )
    }
}