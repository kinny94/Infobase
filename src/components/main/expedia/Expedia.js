import React, { Component } from 'react';

class Expedia extends Component{

    state = {};

    componentDidMount(){

        fetch( '/expedia ').then(( res ) => {
            return res.json();
        }).then(( data ) => {
            this.setState({
                expedia: data.expedia
            });
        })
    }

    render(){
        return(
            <div>
                <h2>{ this.state.expedia }</h2>
            </div>
        )
    }
}

export default Expedia;