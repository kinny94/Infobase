import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './search/Search';
import Feed from './feed/Feed';

class Steam extends Component{

    key = "5A73D5947715DAECB09BBCE5C4948CC3";
    state = {
        showNews: false
    };

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

    renderComponent(){
        if( this.state.showNews ){
            return <Feed />
        }else{
            return <h2>I will show user stats here!!</h2>
        }
    }
    render(){
        return(
            <div className="container">
                <h2>{ this.state.steam }</h2>
                <div className="row">
                    <Search />
                </div>
                <div className="row">
                    { this.renderComponent() } 
                </div>
            </div>
        )
    }
}

export default Steam;