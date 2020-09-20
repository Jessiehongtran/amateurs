import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './createLive.scss'
import Axios from 'axios';
import { API_URL } from '../../config';

export default class CreateLive extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            totalEvents: 0,
            event: {
                start_time: "",
                start_date: "",
                title: "",
                description: "",
                joined: 0,
                host_id: 0,
                banner_img: "",
            },
            afterToday: false,
            posted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        Axios.get(`${API_URL}/events`)
             .then(res => {
                 this.setState({totalEvents: res.data.length})
             })
             .catch(err => {
                 console.log(err)
             })
    }

    postEvent(event){
        Axios.post(`${API_URL}/events`, event)
             .then(res => {
                 console.log(res.data)
                 this.setState({posted: true})
                 this.props.history.push('/')
             })
             .catch(err => {
                 console.log(err)
             })
    }

    startAfterToday(time){
        const curYear = (new Date()).getUTCFullYear()
        const curMonth = (new Date()).getUTCMonth() + 1
        const curDate = (new Date()).getUTCDate()
        const year = parseInt(time.split("-")[0])
        const month = parseInt(time.split("-")[1])
        const date = parseInt(time.split("-")[2])

        if (year >= curYear && month >= curMonth && date >= curDate){
            return true
        }
        return false
    }

    handleChange(e){
        console.log(e.target.name, e.target.value)
        if (e.target.name == "start_date"){
            if (this.startAfterToday(e.target.value)){
                this.setState({afterToday: true})
            } else {
                this.setState({afterToday: false})
            }
        }
        this.setState({
            event: {
                ...this.state.event,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const host_id = localStorage.getItem('user_id')
        const eventToPost = this.state.event
        if (host_id){
            eventToPost.host_id = host_id
            console.log(eventToPost)
            this.postEvent(eventToPost)
        } else {
            alert('Please create a user account to create event')
            //push to sign up/sign in
            this.props.history.push('/signup')
        }
    }

    render(){
        const {totalEvents} = this.state
        return (
            <div className="create_live">
                <div className="box">
                    <h3 className="id">Live #{(totalEvents + 1)*1234} </h3>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            name="title"
                            placeholder="Title"
                            className="title"
                            onChange={this.handleChange}
                        />
                        <input
                            name="description"
                            placeholder="Description" 
                            className="description"
                            onChange={this.handleChange}
                        />
                        <input
                            name="start_date"
                            type="date"
                            placeholder="Date"
                            className="date"
                            onChange={this.handleChange}
                        />
                        {this.state.afterToday
                        ? null
                        : <p className="remind">Date has to be after today</p>}
                        <input
                            name="start_time" 
                            placeholder="Start Time"
                            className="start_time"
                            type="time"
                            onChange={this.handleChange}
                        />
                        <input
                            type="file"
                            name="banner_img" 

                        />
                        <button>Create</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}