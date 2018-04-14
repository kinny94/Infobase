import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './search/Search';
import Feed from './feed/Feed';
import 'bootstrap/dist/css/bootstrap.min.css';

class Steam extends Component{
    
    key = "5A73D5947715DAECB09BBCE5C4948CC3";
    state = {
        featuredData: ''
    };
    
    constructor( props ){
        super( props );
    }
    
    componentDidMount(){
        
        var proxyUrl = 'https://glacial-eyrie-67068.herokuapp.com/';
        let targetUrl = 'https://store.steampowered.com/api/featured';

        fetch(proxyUrl + targetUrl)
        .then(blob => blob.json())
        .then(data => {
            this.setState({
                featuredData: data
            });
        })
        .catch(e => {
            console.log(e);
            return e;
        });
    }
    
    componentWillMount(){
        document.body.classList.add( 'steam-background' );
    }
    
    componentWillUnmount(){
        document.body.classList.remove( 'steam-background' );
    }
    
    renderComponent(){
        if( this.state.featuredData === '' ){
            return <h2>Getting featured items....</h2>
        }else{
            return <Feed featuredData={ this.state.featuredData }/>
        }
    }

    render(){
        return(
            <div className="container">
                <div>
                    <Search />
                </div>
                <div>
                    { this.renderComponent() }
                </div>
            </div>
        )
    }
}

export default Steam;