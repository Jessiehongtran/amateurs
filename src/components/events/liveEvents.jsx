import React from 'react';
import { events } from '../../data/events';
import './liveEvents.scss';
import { API_URL } from '../../config';
import axios from 'axios';
import Event from './event';

export default class LiveEvents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount(){
        axios.get(`${API_URL}/events`)
             .then(res => {
                this.setState({events: res.data})
             })
             .catch(err => {
                console.log(err)
             })
    }

    convertDateToNum(m, d, y){
        return (y-1970)*365 + m*30 + d
    }


    render(){
        const { events } = this.state


        return (
            <div className="live_events">
                <h2 className="title"> Live sessions</h2>
                <div className="events">
                    {events && events.length > 0
                    ? events.map(function(event){ 
                        const YMD = event.start_date.split('-')
                        console.log('herrrr', this.convertDateToNum(parseInt(YMD[1]), parseInt(YMD[2]), parseInt(YMD[0])), this.convertDateToNum((new Date()).getMonth() + 1, (new Date()).getDate(), (new Date()).getFullYear()))
                        if (this.convertDateToNum(parseInt(YMD[1]), parseInt(YMD[2]), parseInt(YMD[0])) >= this.convertDateToNum((new Date()).getMonth() + 1, (new Date()).getDate(), (new Date()).getFullYear())){
                            return <div key={event.id}><Event eventId={event.id} history={this.props.history}/></div>
                        }
                    }, this)
                    : null}
                </div>
            </div>
        )
    }
}