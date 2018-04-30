import React, { Component } from 'react';

class FriendList extends Component{

    componentDidMount(){
        console.log( this.props.list );
    }
    render(){
        return(
            <div>
                <div className="container">
                  <div className="card-group">
                        <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">Card 1</h4>
                            <p className="card-text">Text 1</p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">Card 2</h4>
                            <p className="card-text">Text 2</p>
                            <p className="card-text">More text 2</p>
                            <p className="card-text">More text 2</p>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-block">
                            <h4 className="card-title">Card 3</h4>
                            <p className="card-text">Text 3</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FriendList;
