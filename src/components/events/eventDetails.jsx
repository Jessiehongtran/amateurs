import React from 'react';
import './eventDetails.scss'

export default class EventDetails extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="event-details">
                <div className="quick-info">
                    <h1>Event #</h1>
                    <p>Created by</p>
                    <p>Played for how long</p>
                </div>
                <div className="access">
                    <p className="banner">Join event</p>
                    <div className="comments">
                        <input
                            placeholder="Leave a comment" 
                        />
                        <div className="comment">
                            <img className="avatar" src="https://res.cloudinary.com/zofuku/image/upload/v1600635037/Profile-PNG-Icon_wdgkjg.png"/>
                            <p>hahaha</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}