import React from 'react';
import './main.scss';
import LiveEvents from '../events/liveEvents';
import Players from '../players/players';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <div className="main_container">
                <div className="main">
                    <LiveEvents history={this.props.history}/>
                    <Players />
                </div>
            </div>
        )
    }
}