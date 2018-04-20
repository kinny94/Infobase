import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component{


    state = {
        username: ""
    };

    handleUserChange = ( event ) => {
        this.setState({
            username: event.target.value
        });
        console.log( this.state.username );
    }

    handleSubmit = ( event ) => {
        console.log( this.state.username );
    }

    render(){

        const margin = {
            marginTop: "10%"
        }

        return(
            <div style={ margin } className="row">
                <div className="col">
                    <h2>Search for a username...!!</h2>
                    <div className="col">
                        <form>
                            <div className="input-group">
                                <input className="form-control form-control-lg" placeholder="Search for a user..." type="text" value={ this.state.value } onChange={ this.handleUserChange }/>
                                <span className="input-group-btn">
                                    <Link to={ `/steam/${ this.state.username }` }><button className="btn btn-outline-secondary" type="submit">
                                        <i className="fas fa-2x fa-search"></i>
                                    </button></Link>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col">
                    <h2>Search for a game...!!</h2>
                    <div className="col">
                        <form onSubmit={ this.handleSubmit }>
                            <div className="input-group">
                                <input className="form-control form-control-lg" placeholder="Search for a game..." type="text" value={ this.state.value } onChange={ this.handleChange }/>
                                <span className="input-group-btn">
                                    <button className="btn btn-outline-secondary" type="submit">
                                        <i className="fas fa-2x fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;