import React, { Component } from 'react';
import fetchData from '../api/fetchData';

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

    render(){
        
        return(
            <div>

            </div>
        )
    }
}

export default SearchResults;