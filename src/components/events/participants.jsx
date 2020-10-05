import React from 'react';
import { API_URL } from '../../config';
import axios from 'axios';
import './participants.scss';

export default class Participants extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    render(){
        
        return (  
            <div className="who_joined">
                {this.props.participants.length > 0
                ? this.props.participants.map(each => 
                    <img className="avatar" src={each.avatar}/>)
                : null} 
            </div>
        )
    }
}