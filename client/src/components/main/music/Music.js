import React, { Component } from 'react';

import Main from './components/Main';

class Music extends Component{

    state = {};

    componentWillMount(){
        document.body.classList.add( 'music-background' );
    }

    componentWillUnmount(){
        document.body.classList.remove( 'music-background' );
    }

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
            <div style={ {backgroundImage: `url(require("image.jpg"))`}}className="container">
                <Main />
            </div>
        )
    }
}

export default Music;