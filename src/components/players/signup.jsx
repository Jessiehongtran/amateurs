import React from 'react';
import './signup.scss';
import axios from 'axios';
import { API_URL } from '../../config';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                nick_name: "",
                email: "",
                password: "",
                year_of_birth: 0,
                moto: "",
                avatar: ""
            }
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    postUser(user){
        axios.post(`${API_URL}/users`, user, { withCredentials: true })
             .then(res => {
                console.log(res.data)
                //update user_id on localStorage
                localStorage.setItem('user_id', res.data.id)
                //push to go back
                this.props.history.goBack()
             })
             .catch(err => {
                 console.log(err)
             })
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.state.user)
        //push this to backend
        this.postUser(this.state.user)
            
    }

    render(){
        return (
            <div className="signup">
                <div className="image">
                    <img src="https://i.pinimg.com/originals/ce/e2/8a/cee28aab91ad2893db9d7150ffef605e.jpg"/>
                </div>
                <div className="profile">
                    <form onSubmit={this.handleSubmit}>
                        <h1 className="title">Sign Up</h1>
                        <input
                            name="nick_name"
                            type="text"
                            placeholder="Nick name"
                            onChange={this.handleChange}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        <input
                            name="year_of_birth"
                            type="number"
                            placeholder="Year Of Birth"
                            onChange={this.handleChange}
                        />
                        <input
                            name="avatar"
                            placeholder="Avatar"
                            type="file" 
                            onChange={this.handleChange}
                        />
                        <input
                            name="moto"
                            type="text"
                            placeholder="Your moto"
                            onChange={this.handleChange}
                        />
                        <button>SignUp</button>
                        <p className="remind">Already have an account? <a href="/signin">Sign In</a></p>
                    </form>
                    
                </div>
            </div>
        )
    }
}