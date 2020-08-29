import React from 'react';
import '../styles/nav.scss'


export default class Nav extends React.Component {

    render(){
        return (
            <div className="nav">
                <div className="logo">
                    <h1>Amateurs</h1>
                </div>
                <div className="navigation">
                    <a>How it works?</a>
                    <a>Get started</a>
                    <button>Go Live</button>
                </div>
            </div>
        )
    }
}