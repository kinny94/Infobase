import React, { Component } from 'react';

class SteamUser extends Component{

    componentDidMount(){
        console.log( " I moiunted!! " );
    }

    render(){
        return(
            <div>
                <h3>Will display a user stats here!!!</h3>
            </div>
        )
    }
}

export default SteamUser;