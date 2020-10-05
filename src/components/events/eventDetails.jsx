import React from 'react';
import axios from 'axios';
import './eventDetails.scss';
import { API_URL } from '../../config';
import Participants from './participants';

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
        if (localStorage.getItem('user_id')){
            this.setState({comments: [...this.state.comments, this.state.comment]})
            //post comment
            axios.post(`${API_URL}/comments`, {
                event_id: this.props.match.params.eventId,
                user_id: localStorage.getItem('user_id') ? localStorage.getItem('user_id') : 1,
                comment: this.state.comment
            })
                .then(res => {
                    this.getComments()
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            if (this.props.location.query){
                this.props.location.query.history.push('/signup')
            }
        }
    }

    render(){
        const {query} = this.props.location
        let hours = null
        if (query){
            const curM = parseInt(query.start_date.split('-')[1])
            const curD = parseInt(query.start_date.split('-')[2])
            const curY = parseInt(query.start_date.split('-')[0])
            console.log('check current datetime', (new Date()).getDate(), (new Date()).getHours())
            //if same day 
            if (curD === (new Date()).getDate() && curM === (new Date()).getMonth()+ 1 && curY === (new Date()).getFullYear()){
                //get how many hours someone has played
                let curH = 0
                let curMn = 0
                if (query.start_time.split(' ')[1] == 'PM' && query.start_time.split(' ')[0].split(':')[0] != '12'){
                    curH = parseInt(query.start_time.split(' ')[0].split(':')[0]) + 12
                    curMn = parseInt(query.start_time.split(' ')[0].split(':')[1])
                } else {
                    curH = parseInt(query.start_time.split(' ')[0].split(':')[0])
                    curMn = parseInt(query.start_time.split(' ')[0].split(':')[1])
                }

                console.log('in', (new Date()).getHours(), curH)

                if ((new Date()).getHours() > curH){
                    hours = (((new Date()).getHours() - curH)*60 +  (new Date()).getMinutes())/60
                } 
            }
        }

        console.log('hours', hours)

        return (
            <div className="event-details">
                <div className="quick-info">
                    <h2>Event #{this.props.match.params.eventId*1234}</h2>
                    {query ? <p>Created by {query.nick_name}</p> : null}
                    {hours ? <p className="played">Played for {Math.round((hours*100)/100)} hrs </p> : <p className="not_played">Currently not playing</p>}
                </div>
                <div className="access">
                    <a 
                        className="banner"
                        href={`https://client-a008qpss6.vercel.app/room/${this.props.match.params.eventId}`}
                    >Join live</a>
                    <div className="participants">
                        <Participants participants = {this.props.location.query ? this.props.location.query.participants : []}/>
                    </div>
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