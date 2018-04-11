import React, { Component } from 'react';
import Main from './components/Main';
class Github extends Component{

    constructor( props ){
        super( props );
        this.state = { };
    }

    render(){
        return(
            <div className="container">
                <Main />
            </div>
        )
    }

}

export default Github;