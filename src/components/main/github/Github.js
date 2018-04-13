import React, { Component } from 'react';
import Main from './components/Main';
class Github extends Component{

    componentWillMount(){
        document.body.classList.add( 'github-background' );
    }

    componentWillUnmount(){
        document.body.classList.remove( 'github-background' );
    }

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