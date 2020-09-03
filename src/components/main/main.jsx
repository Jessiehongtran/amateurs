import React from 'react';
import './main.scss';
import LiveEvents from '../events/liveEvents';
import Players from '../players/players';

export default class Main extends React.Component {

    render(){
        return (
            <div className="main_container">
                <div className="main">
                    <LiveEvents />
                    <Players />
                </div>
            </div>
        )
    }
}