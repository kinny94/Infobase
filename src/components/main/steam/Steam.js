import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Search from './search/Search';
import Feed from './feed/Feed';
import 'bootstrap/dist/css/bootstrap.min.css';

class Steam extends Component{

    key = "5A73D5947715DAECB09BBCE5C4948CC3";
    state = {
        showNews: false
    };

    constructor( props ){
        super( props );
    }

    componentDidMount(){

    fetch('https://store.steampowered.com/api/featured/', {mode: 'no-cors'})
    

        .then(function(response) {
            console.log( response );
        }).catch(function(error) {  
            console.log('Request failed', error)  
        });
    }

    componentWillMount(){
        document.body.classList.add( 'steam-background' );
    }

    componentWillUnmount(){
        document.body.classList.remove( 'steam-background' );
    }

    render(){
        return(
            <div className="container">
               <div>
                    <Search />
               </div>
                <div>
                    <Feed />
                </div>
            </div>
        )
    }
}

export default Steam;