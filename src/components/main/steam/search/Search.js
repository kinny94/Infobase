import React, { Component } from 'react';

class Search extends Component{


    state = {
    };

    constructor( props ){
        super( props );
    }

    render(){

        const margin = {
            marginTop: "10%"
        }

        return(
            <div style={ margin } className="row">
                <div className="col">
                    <h2>Search for a username...!!</h2>
                </div>
                <div className="col">
                    <h2>Search for a game...!!</h2>
                </div>
            </div>
        )
    }
}

export default Search;