import React from 'react';
import '../styles/signup.scss';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
        //push this to backend
    }

    render(){
        return (
            <div className="signup">
                <div className="signup-box">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign Up Now</h3>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        <button className="signup-btn">Sign Up</button>
                    </form>
                    <p className="split"><span> Or </span></p>
                    <button className="google-btn">Log in with Google</button>
                    <p className="signin-ask">Do you have an account? <a href="#">Sign In</a></p>
                </div>
            </div>
        )
    }
}