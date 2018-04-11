import React, { Component } from 'react';

class Music extends Component{

    state = [];

    componentDidMount(){
        fetch( '/music' ).then(( res ) => {
            return res.json();
        }).then(( data ) => {
            this.setState({
                "music": data.music
            });
        })
    }
    render(){
        return(
            <div>
                <h2>{ this.state.music }</h2>
            </div>
        )
    }
}

export default Music;