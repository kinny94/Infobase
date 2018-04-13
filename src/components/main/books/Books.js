import React, { Component } from 'react';

class Books extends Component{

    state = {};

    componentDidMount(){

        fetch( '/books' ).then(( res ) => {
            return res.json();
        }).then(( data ) => {
            this.setState({
                books: data.books
            });
        });
    }

    render(){
        return(
            <div className="container">
                <h2>{ this.state.books }</h2>
            </div>
        )
    }
}

export default Books;