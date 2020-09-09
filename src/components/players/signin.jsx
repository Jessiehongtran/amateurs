import React from 'react';
import './signin.scss';
import Axios from 'axios';
import { API_URL } from '../../config';

export default class SignIn extends React.Component {
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
        Axios.post(`${API_URL}/users/login`, this.state, { withCredentials: true })
             .then(res => {
                 console.log(res.data)
                 console.log('cookie check', document.cookie)
                 this.props.history.push('/')
             })
             .catch(err => {
                 console.log(err)
             })

    }

    render(){
        return (
            <div className="signin">
                <div className="signin-box">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign In Now</h3>
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
                        <button className="signin-btn">Sign In</button>
                    </form>
                    <p className="split"><span> Or </span></p>
                    <button className="google-btn">Log in with Google</button>
                    <p className="signup-ask">New user? <a href="#">Sign Up</a></p>
                </div>
            </div>
        )
    }
}