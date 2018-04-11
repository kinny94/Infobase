import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './search/Search';
import Feed from './feed/Feed';

class Steam extends Component{

    state = {};

    constructor( props ){
        super( props );
    }

    componentDidMount(){
        
        fetch( '/steam' ).then(( res ) => {
            return res.json();
        }).then(( data ) => {
            this.setState({
                steam: data.steam
            })
        })
    }

    render(){
        return(
            <div className="container">
                <h2>{ this.state.steam }</h2>
                <div className="row">
                    <Search />
                </div>
                <div className="row">
                    <Feed />
                </div>
            </div>
        )
    }
}

export default Steam;