import React, { Component } from 'react';

class Github extends Component{

    constructor( props ){
        super( props );
        this.state = { };
    }

    componentDidMount(){
        fetch('/github').then(( res ) => {
           return res.json(); 
        }).then(( data ) => {
            this.setState({
                github: data.github
            });
        });
    }
    render(){
        return(
            <div className="container">
                <h2>{ this.state.github }</h2>
            </div>
        )
    }

}

export default Github;