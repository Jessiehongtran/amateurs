import React from 'react';
import './eventDetails.scss'

export default class EventDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: ["very nice guys", "ok ok"],
            comment: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({comment: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({comments: [...this.state.comments, this.state.comment]})
    }

    render(){
        return (
            <div className="event-details">
                <div className="quick-info">
                    <h2>Event #</h2>
                    <p>Created by</p>
                    <p>Played for how long</p>
                </div>
                <div className="access">
                    <p className="banner">Join event</p>
                    <div className="comments">
                        <form onSubmit={this.handleSubmit}>
                            <input
                                placeholder="Leave a comment"
                                onChange={this.handleChange} 
                            />
                        </form>
                        {this.state.comments.map(text => 
                            <div className="comment">
                                <img className="avatar" src="https://res.cloudinary.com/zofuku/image/upload/v1600635037/Profile-PNG-Icon_wdgkjg.png"/>
                                <p className="text">{text}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}