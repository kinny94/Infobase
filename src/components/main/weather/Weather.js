import React, { Component } from 'react';

class Weather extends Component{

    state = {};

    componentDidMount(){

        fetch('/weather').then(( res ) => {
            return res.json();
        }).then(( data ) => {
            this.setState({
                "weather": data.weather
            });
        });
    }

    render(){
        return(
            <div className="container">
                <h2>{ this.state.weather }</h2>
            </div>
        )
    }
}

export default Weather;