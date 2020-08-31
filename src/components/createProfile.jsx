import React from 'react';
import '../styles/createProfile.scss'

export default class CreateProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="create_profile">
                <div className="image">
                    <img src="https://i.pinimg.com/originals/ce/e2/8a/cee28aab91ad2893db9d7150ffef605e.jpg"/>
                </div>
                <div className="profile">
                    <form>
                        <h1 className="title">Create profile</h1>
                        <input
                            name="nickname"
                            placeholder="Nick Name"
                        />
                        <input
                            name="year_of_birth"
                            placeholder="Year Of Birth"
                        />
                        <input
                            name="avatar"
                            placeholder="Avatar"
                            type="file" 
                        />
                        <input
                            name="moto"
                            placeholder="Your moto"
                        />
                        <button>Yah, it's me</button>
                    </form>
                </div>
            </div>
        )
    }
}