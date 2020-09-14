import React from 'react';
import './signup.scss';
import axios from 'axios';
import { API_URL } from '../../config';

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                nick_name: "No name",
                email: "",
                password: "",
                year_of_birth: null,
                moto: "",
                avatar: "https://img.favpng.com/10/3/18/string-instrument-music-musical-instrument-string-instrument-violin-png-favpng-s9QvWhFjHrdkCsPQZ5SKySfJY.jpg"
            },
            image: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        if (e.target.name == "avatar"){
            //post image here to cloudinary then return url and update state
            const files = Array.from(e.target.files)

            var reader = new FileReader();
            files.forEach(img => {
                reader.readAsDataURL(img)

                reader.onloadend = () => {
                    this.setState({image: reader.result})
                }
            })

            
            const formData = new FormData()

            files.forEach((file, i) => {
                formData.append(i, file)
            })

            fetch(`${API_URL}/images`, {
                method: 'POST',
                body: formData
              })
              .then(res => res.json())
              .then(imgUrl => {
                console.log('imgUrl', imgUrl)
                this.setState({
                    user: {
                        ...this.state.user,
                        avatar: imgUrl
                    }
                })
              })
              .catch(err => {
                  console.log(err.message)
              })
            
            
        }
        else {
            this.setState({
                user: {
                    ...this.state.user,
                    [e.target.name]: e.target.value
                }
            })
        }
    }

    postUser(user){
        console.log('user', user)
        axios.post(`${API_URL}/users`, user, { withCredentials: true })
             .then(res => {
                console.log(res.data)
                //update user_id on localStorage
                localStorage.setItem('user_id', res.data.id)
                //push to go back
                // this.props.history.goBack()
             })
             .catch(err => {
                 console.log(err)
             })
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('handlesubmit')
        console.log(this.state.user)
        //push this to backend
        setTimeout(() => this.postUser(this.state.user), 3000)
            
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
                            name="moto"
                            type="text"
                            placeholder="Your moto"
                            onChange={this.handleChange}
                        />
                        <p>Your avatar</p>
                        {this.state.image.length == 0
                        ? 
                        <>
                            <label htmlFor='image'>
                                <span className="ava_icon"><i class="far fa-image"></i></span>
                            </label>
                            <input
                                name="avatar"
                                placeholder="Avatar"
                                id="image"
                                type="file" 
                                onChange={this.handleChange}
                            />
                        </>
                        : <img className="avatar" src={this.state.image} alt=""/>
                        }
                       
                        <button>SignUp</button>
                        <p className="remind">Already have an account? <a href="/signin">Sign In</a></p>
                    </form>
                    
                </div>
            </div>
        )
    }
}