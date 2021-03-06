import React, { Component } from 'react';
import FriendList from './FriendList';

class Profile extends Component{

    state = {
        userprofile: this.props.profileData,
        friendList: ''
    }
    componentWillMount(){
        document.body.classList.add( 'steam-background' );
    }
    
    componentWillUnmount(){
        document.body.classList.remove( 'steam-background' );
    }

    componentDidMount(){
        console.log( this.props.profileData );

        var proxyUrl = 'https://glacial-eyrie-67068.herokuapp.com/';
        let targetUrl = `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=5A73D5947715DAECB09BBCE5C4948CC3&steamid=${ this.props.profileData.steamID }&relationship=friend`;
        fetch( proxyUrl + targetUrl )
        .then(( data ) => {
            return data.json()
        }).then(( res ) => {
            this.setState({
                friendList: res
            })
        });
    }

    renderComponent(){
        if( this.state.friendList === '' ){
            return <h2>Getting Friend User List...</h2>
        }else{
            return <FriendList list={ this.state.friendList } />
        }
    }

    render(){

        const style = {
            background: "#00000036"
        }

        const p = {
            color: "white",
            fontSize: "0.6em"
        }
        return(
            <div className="container">
                <div className="row steamuser"> 
                    <div className="col">
                        <div style={ style } className="card flex-row flex-wrap">
                            <div className="card-header border-0">
                                <img src={ this.state.userprofile.avatar } alt="" />
                            </div>
                            <div className="card-block px-2">
                                <h4 className="card-title">Username: { this.state.userprofile.name }</h4>
                                <p className="card-text">Steam Id: { this.state.userprofile.steamID }</p>
                                <p className="card-text">Member Since: : { this.state.userprofile.memberSince }</p>
                                <p className="card-text no-wrap">Location: { this.state.userprofile.location }</p>
                                <a href={`https://steamcommunity.com/id/${ this.state.userprofile}`} className="btn btn-primary">Steam Profile</a>
                            </div>
                            <div className="w-100">
                                <h4 className="text-center">Summary</h4>
                            </div>
                            <div className="card-footer w-100 text-muted">
                                <p style={ p } className="text-center no-wrap">{ this.state.userprofile.summary.replace(/<\/?[^>]+(>|$)/g, "") }</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    { this.renderComponent() }
                </div>
            </div>
        )
    }
}

export default Profile;