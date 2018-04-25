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
                    <div className="col">
                        <div className="col">
                            <img src={ this.state.userprofile.avatar }/><h2 className="float-left">{ this.state.userprofile.name }</h2>
                        </div>
                        <h2 className="float-right">{ this.state.userprofile.steamID }</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;