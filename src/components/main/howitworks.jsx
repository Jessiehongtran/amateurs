import React from 'react';
import './howitworks.scss'

export default class HowItWorks extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="how-works">
                <p>If you are either a beginner or pro in playing violin, this is your corner :)</p>
                <p>You can either <a href="/createLive">create a live event</a> to invite others to play in a session with you and <a href="/">join events</a> that are already created by someone else.</p>
                <p>Before that, you are expected to <a href="/signup">create an account</a> or <a href="/signin">sign in</a> so others know who you are. </p>
            </div>
        )
    }
}