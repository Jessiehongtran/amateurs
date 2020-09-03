import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './createLive.scss'

export default class CreateLive extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="create_live">
                <div className="box">
                    <h3 className="id">Live #{uuidv4()} </h3>
                    <input
                        name="title"
                        placeholder="Title"
                        className="title"
                    />
                    <input
                        name="description"
                        placeholder="Description" 
                        className="description"
                    />
                    <input
                        name="date"
                        type="date"
                        placeholder="Date"
                        className="date"
                    />
                    <input
                        name="start_time" 
                        placeholder="Start Time"
                        className="start_time"
                        type="time"
                    />
                    <button>Create</button>
                </div>
            </div>
        )
    }
}