import React, { Component } from 'react';

import fetchData from '../api/fetchData';
import Search from './Search';
import SearchResults from './SearchResults';

class Main extends Component{

    state = { 
    
        isLoading: '',
        userdata: '',
        heading: 'Search for any github user!!',
        initialState: true,
        reposdata: ''
    
    };

    getInitialState = () => {
        return{
            isLoading: false
        }
    }

    changeHeading = ( username ) => {
        this.setState({
            heading: `Showing results for ${ username }..`
        });
    }

    handleSearch = ( username ) => {
        this.setState({
            isLoading: true
        });

        fetchData.getUserData( username ).then(( userdata ) => {
            
            this.setState({
                initialState: false,
                userdata: userdata,
                isLoading: false
            });

        }, ( errorMessage ) => {
           
            this.setState({
                isLoading: false
            });

            console.log( errorMessage );
        });
    }

    render(){

        var { isLoading, userdata, initialState, reposdata } = this.state;

        function renderMessage(){
            if( isLoading ){
                return <h2>Fetching Data...</h2>
            }else{
                if( userdata === null ){
                    return <h2>No Records found!!</h2>
                }else{
                    return <SearchResults userdata={ userdata } reposdata={ reposdata }/>
                }
            }
        }

        return(
            <div>
                <div>   
                    <h1 className="heading-padding">{ this.state.heading }</h1>
                    <Search onSearch={ this.handleSearch } handleHeading={ this.changeHeading.bind(this) }/>
                </div>
                <div>
                    { renderMessage() }
                </div>
            </div>
        )
    }
}

export default Main;