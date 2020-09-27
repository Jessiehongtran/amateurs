import React from 'react';
import axios from 'axios';
import './eventDetails.scss';
import { API_URL } from '../../config';

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

    getComments(){
        axios.get(`${API_URL}/comments/${this.props.match.params.eventId}`)
             .then(res => {
                 this.setState({comments: res.data})
             })
             .catch(err => {
                 console.log(err)
             })
    }

    componentDidMount(){
        //get comments
        this.getComments()
    }

    handleChange(e){
        this.setState({comment: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({comments: [...this.state.comments, this.state.comment]})
        //post comment
        axios.post(`${API_URL}/comments`, {
            event_id: this.props.match.params.eventId,
            user_id: localStorage.getItem('user_id') ? localStorage.getItem('user_id') : 1,
            comment: this.state.comment
        })
             .then(res => {
                 console.log(res.data)
                 this.getComments()
             })
             .catch(err => {
                 console.log(err)
             })
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
                        {this.state.comments.map(each => 
                            <div className="comment">
                                <img className="avatar" src={each.avatar ? each.avatar : "https://res.cloudinary.com/zofuku/image/upload/v1600635037/Profile-PNG-Icon_wdgkjg.png"}/>
                                <div className="text">
                                    <p className="name">{each.nick_name ? each.nick_name : "Anonymous" }</p>
                                    <p className="content">{each.comment}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}