var axios = require( 'axios' );

const GITHUB_USER_API_URL = 'https://api.github.com/users/';
const GITHUB_CLIENT_ID = 'Iv1.44ef32c73adc3386';
const GITHUB_CLIENT_SECRET = 'e7d88b105d5f6a5ca002b61ff53008ebeab9bf7d';
module.exports = {

    getUserData( username ){
        var encodedUsername = encodeURIComponent( username );
        var requestUrl = `${GITHUB_USER_API_URL}${ encodedUsername }?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET }`;
        return axios.get( requestUrl ).then(( res ) => {
            
            if( res.data ){
                var user = res.data;
                return user;
            }else{
                return null;
            }
        }, ( res ) => {
            return null;
        });
    },

    getUserRepos( username ){
        var encodedUsername = encodeURIComponent( username );
        var requestUrl = `https://api.github.com/users/${ username }/repos?client_id=${ GITHUB_CLIENT_ID }&client_secret=${ GITHUB_CLIENT_SECRET }&sort=created`;
        
        return axios.get( requestUrl ).then(( res ) => {
            if( res.data ){
                var repos = res.data;
                return repos;
            }else{
                throw new Error( "No Repos" )
            }
        }, ( res ) => {
            throw new Error( "No data!" );
        })
    }
}