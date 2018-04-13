import React, { Component } from 'react';

class User extends Component{

    state = {};

    constructor( props ){
        super( props );
        console.log( this.props.userdata );
    }

    render(){

        var { userdata } = this.props;

        return( 
            <div className="row">
                <div className="card text-center w-100">
                    <div className="card-header">
                        <h6>{ userdata.name }</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="profile-img img-thumbnail" src= { userdata.avatar_url } /><br/>
                                <a href= { userdata.html_url } target="_blank">
                                    <button type="button" className="user-button btn btn-primary btn-sm container-fluid">View Profile</button>
                                </a>
                            </div>
                            <div className="col-md-8">
                                <div className="stats">
                                    <span className="badge badge-primary">{ userdata.public_repos } Public Repos &nbsp;</span>
                                    <span className="badge badge-success">{ userdata.gists } Public Repos &nbsp;</span>
                                    <span className="badge badge-info">{ userdata.followers } Public Repos &nbsp;</span>
                                    <span className="badge badge-warning">{ userdata.following } Public Repos &nbsp;</span>
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item"><strong>Username: { userdata.login } </strong></li>
                                    <li className="list-group-item"><strong>Location: { userdata.location } </strong></li>
                                    <li className="list-group-item"><strong>Email: { userdata.Email } </strong></li>
                                    <li className="list-group-item"><strong>Member Since: { userdata.created_at } </strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;