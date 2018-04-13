import React, { Component } from 'react';

class GooglePlus extends Component{

    state = {};

    componentDidMount(){

        fetch( '/googleplus' ).then(( res ) => {
            return res.json();
        }).then(( data ) => {
            this.setState({
                googleplus: data.googleplus
            });
        });
    }

    render(){
        return(
            <div>
                <h2>{ this.state.googleplus }</h2>
            </div>
        )
    }
}

export default GooglePlus;