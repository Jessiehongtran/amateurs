import React from 'react';

export default class CreateProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="create_profile">
                <input
                    name="nickname" 
                />
                <input
                    name="year_of_birth"
                />
                <input
                    name="avatar" 
                />
                <input
                    name="moto"
                />
                
            </div>
        )
    }
}