import React, { Component } from 'react';

class Github extends Component{

    constructor( props ){
        super( props );
        this.state = { };
    }

    componentWillMount(){
        console.log( this.state );
    }
    render(){
        return(
            <div className="container">
                <h2>Place github stuff here!!</h2>
            </div>
        )
    }

}

export default Github;