import React, { Component } from 'react';

class FriendList extends Component{

    componentDidMount(){
        console.log( this.props.list );
    }
    render(){
        return(
            <div>
                <h2>
                    I'll render List here!!
                </h2>
            </div>
        )
    }
}

export default FriendList;
