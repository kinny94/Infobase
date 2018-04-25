import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Profile from './Profile';
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

        document.body.classList.add( 'steam-background' );

        let targetUrl;

        if( isNaN( this.props.match.params.id ) ){
            targetUrl = `http://steamid.co/php/api.php?action=steamID&id=${ this.state.username }&key=5A73D5947715DAECB09BBCE5C4948CC3`;
        }else{
            targetUrl = `https://steamid.co/php/api.php?action=steamID64&id=${ this.state.username }`;
        }

        var proxyUrl = 'https://glacial-eyrie-67068.herokuapp.com/';

        fetch(proxyUrl + targetUrl)
        .then(blob => blob.json())
        .then(data => {
            this.setState({
                steamID: data.steamID64,
                userProfile: {
                    steamID: data.steamID64, 
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
        })
        .catch(e => {
            console.log(e);
            return e;
        }).then(() => {
            let targetUrl2 = `http://steamrep.com/util.php?op=getSteamProfileInfo&id=${ this.state.username }&tm=1524624416`;
            var proxyUrl2 = 'https://glacial-eyrie-67068.herokuapp.com/';

            fetch( proxyUrl2 + targetUrl2 )
            .then(blob => blob.json())
            .then(data => {
                console.log( data );
            })
            .catch(e => {
                console.log(e);
                return e;
            });
        });

        

    }

    renderContent = () => {
        if( Object.keys(this.state.userProfile).length === 0 || this.state.steamID === "" ){
            return <h2>Getting data for { this.state.username }</h2>
        }else{

            if( this.state.steamID === undefined ){
                return <h3>No user found with username { this.state.username }. Rerouting to the search page.{ this.redirect() }</h3>
            }
            return <h2><Profile profileData={ this.state.userProfile }/></h2>
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