import React, { Component } from 'react';

import fetchData from '../api/fetchData';
import User from './user/User';
import Repos from './repos/Repos';

class SearchResults extends Component{

    state = {
        userdata: this.props.userdata,
        reposdata: ''
    }

    constructor( props ){
        super( props );
    }

    componentDidMount(){
        
        fetchData.getUserRepos( this.props.userdata.login ).then(( reposdata ) => {
            console.log( this.props.userdata.login );
            this.setState({
                reposdata: reposdata
            });
            
        }, ( errorMessage ) => {
           
            this.setState({
                isLoading: false
            });

            console.log( errorMessage );
        });
    }

    renderData(){

        const margin = {
            marginTop: "5px"
        }
        
        if( this.state.reposdata === '' ){
            return <h2>Fetchin user repositories...</h2>
        }else{
            return(
                <div className="container-fluid">
                    <div><User userdata={ this.state.userdata }/></div>
                    <div style={ margin }><Repos reposdata={ this.state.reposdata }/></div>
                </div>
            )
        }
    }

    render(){
        
        const margin = {
            marginTop: "10px"
        }

        return(
            <div style={ margin }>
                { this.renderData() }
            </div>
        )
    }
}

export default SearchResults;