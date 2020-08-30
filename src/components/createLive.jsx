import React from 'react';

export default class CreateLive extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <input
                    name="id" 
                />
                <input
                    name="title"
                />
                <input
                    name="description" 
                />
                <input
                    name="date"
                />
                <input
                    name="start_time" 
                />
                <input
                    name="end_time" 
                />
            </div>
        )
    }
}