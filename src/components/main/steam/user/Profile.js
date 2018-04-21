import React, { Component } from 'react';

class Profile extends Component{

    state = {
        userprofile: this.props.profileData
    }
    componentWillMount(){
        document.body.classList.add( 'steam-background' );
    }
    
    componentWillUnmount(){
        document.body.classList.remove( 'steam-background' );
    }

    componentDidMount(){
        console.log( this.props.profileData );
    }

    render(){
        return(
            <div className="container">
                <div className="row steamuser">
                    <div className ="main-container">
                        <div className=" highlight">
                            <h2>{ this.state.userprofile.name }</h2>
                            <div className="row">
                                <img src ={ this.state.userprofile.avatar } /> 
                                <ul>
                                    <li>Realname: { this.state.userprofile.realname }</li>
                                    <li>Steam ID: { this.state.userprofile.steamID } </li>
                                    <li>Member Since: { this.state.userprofile.memberSince }</li>
                                    <li>Location: { this.state.userprofile.location }</li>
                                    <li>Vac Banned Status: { this.state.userprofile.vacBanned ? "Yes" : "No" }</li>
                                
                                </ul>
                            </div>
                            <div className="row text-center">
                                <h2>Summary</h2>
                            </div>
                            <div className="row text-center">
                                <h2>{ this.state.userprofile.summary.replace(/<\/?[^>]+(>|$)/g, "") }</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;