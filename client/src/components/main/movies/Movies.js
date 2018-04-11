import React, { Component } from 'react';

class Movies extends Component{

    state = {};
     
    componentDidMount(){
        fetch( '/movies' ).then(( res ) => {
            return res.json();
        }).then(( data ) => {
            this.setState({
                "movies": data.movies
            });
        });
    }

    render(){
        return(
            <div className="conttainer">
                <h2>{ this.state.movies }</h2>
            </div>
        )
    }
}

export default Movies;