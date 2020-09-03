import React from 'react';
import './nav.scss'


export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="nav">
                <div className="logo">
                    <h1>Amateurs</h1>
                </div>
                <div className="navigation">
                    <a>How it works?</a>
                    <a href="/signup">Get started</a>
                    <button onClick={() => this.props.history.push('/createLive')}>Go Live</button>
                </div>
            </div>
        )
    }
}