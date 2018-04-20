import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SteamUser extends Component{


    state = {
        username: this.props.match.params.id,
        steamID: "",
        userProfile: {}
    }
    
    redirect = () => {
        setTimeout(() => { return <Redirect to="/steam" /> }, 3000);
    }

    componentWillMount(){

        console.log( this.state.steamID );

        var proxyUrl = 'https://glacial-eyrie-67068.herokuapp.com/';
        let targetUrl = `http://steamid.co/php/api.php?action=steamID&id=${ this.state.username }&key=5A73D5947715DAECB09BBCE5C4948CC3`;


        fetch(proxyUrl + targetUrl)
        .then(blob => blob.json())
        .then(data => {
            this.setState({
                steamID: data.steamID64,
                userProfile: {
                    name: data.steamID,
                    onlineState: data.onlineState,
                    stateMessage: data.stateMessage,
                    avatar: data.avatarFull,
                    groups: data.groups,
                    location: data.location,
                    memberSince: data.memberSince,
                    privacyState: data.privacyState,
                    realname: data.realname,
                    summary: data.summary,
                    vacBanned: data.vacBanned,
                    tradeBanState: data.tradeBanState
                }
            });
            console.log( this.state.userProfile );
        })
        .catch(e => {
            console.log(e);
            return e;
        });

    }

    renderContent = () => {
        if( Object.keys(this.state.userProfile).length === 0 || this.state.steamID === "" ){
            return <h3>Getting data for { this.state.username }</h3>
        }else{

            if( this.state.steamID === undefined ){
                return <h3>No user found with username { this.state.username }. Rerouting to the search page.{ this.redirect() }</h3>
            }
            return <h3>Got all the data. Check console </h3>
        }
    }

    render(){
        return(
            <div>
                { this.renderContent() }
            </div>
        )
    }
}

export default SteamUser;