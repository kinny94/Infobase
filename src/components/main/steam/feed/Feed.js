import React, { Component } from 'react';
import './Feed.css';

class Feed extends Component{

    renderWindowsFeatured(){
        const windowsFeaturedData = this.props.featuredData.featured_win;

        return windowsFeaturedData.map( game => {
            return (
                <div className="steam-card" key={ game.id }>
                    <img src={ game.header_image }/> 
                    <div>
                        <a href={`http://store.steampowered.com/app/${ game.id }`}><h4 className="float-left steam-card-text">{ game.name }</h4></a>     
                        <h4 className="float-right steam-card-text">{ game.final_price !== 0 ? "$" + ( game.final_price / 100 ) : "Free to Play" }</h4>
                    </div>
                </div>
            )
        });
    }

    renderedLinuxFeatured(){

        const linuxFeaturedData = this.props.featuredData.featured_linux;
        return linuxFeaturedData.map( game => {
            return (
                <div className="steam-card" key={ game.id }>
                    <img src={ game.header_image }/>
                    <div>
                        <a href={`http://store.steampowered.com/app/${ game.id }`}><h4 className="float-left steam-card-text">{ game.name }</h4></a>     
                        <h4 className="float-right steam-card-text">{ game.final_price !== 0 ? "$" + ( game.final_price / 100 ) : "Free to Play" }</h4>
                    </div>
                </div>
            )
        });
    }

    renderMacFeatured(){

        const macFeaturedData = this.props.featuredData.featured_mac;
        return macFeaturedData.map( game => {
            return (
                <div className="steam-card" key={ game.id }>
                    <img src={ game.header_image }/>
                    <div>
                        <a href={`http://store.steampowered.com/app/${ game.id }`}><h4 className="float-left steam-card-text">{ game.name }</h4></a>     
                        <h4 className="float-right steam-card-text">{ game.final_price !== 0 ? "$" + ( game.final_price / 100 ) : "Free to Play" }</h4>
                    </div>
                </div>
            )
        });
    }

    componentDidMount(){
        const feedData = this.props.featuredData;
        console.log( this.props.featuredData );
        
    }
    
    render(){

        return(   
            <div className="container">
                <div className="col text-center featured-heading">
                    <h5>Featured games for windows.</h5> 
                </div>   
                <div className="steam-row">
                    { this.renderWindowsFeatured() }
                </div>
                <div className="col text-center featured-heading">
                    <h5>Featured games for Linux.</h5> 
                </div>
                <div className="steam-row">
                    { this.renderedLinuxFeatured() }
                </div>
                <div className="col text-center featured-heading">
                    <h5>Featured games for Mac.</h5> 
                </div>
                <div className="steam-row">
                    { this.renderMacFeatured() }
                </div>
            </div>
        )
    }
}

export default Feed;