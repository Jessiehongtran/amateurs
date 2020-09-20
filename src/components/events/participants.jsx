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
        console.log('props in participants', this.props)
        console.log('eventId', this.props.eventId)
        axios.get(`${API_URL}/events/participants/${this.props.eventId}`)
            .then(res => {
                console.log('participants', res.data)
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
                {participants.length > 0
                ? participants.map(each => 
                    <img className="avatar" src={each.avatar}/>)
                : null} 
            </div>
        )
    }
}