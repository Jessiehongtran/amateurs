import React from 'react';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}