import React, { Component } from 'react';
import { url } from 'inspector';

class Steam extends Component{

    componentDidMount(){
        console.log("Hello");
    }

    render(){

        console.log("Helli");
        return(
            <div>
                <h2>Place Steam Stuff here!!</h2>
            </div>
        )
    }
}

export default Steam;