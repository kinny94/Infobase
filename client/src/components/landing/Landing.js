import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg">
                            <img src="https://www.bleepstatic.com/content/hl-images/2016/12/23/Steam-Logo.jpg" alt="" />
                            <div className="overlay">
                                <Link to= { '/steam' } className="custombutton custombutton-white custombutton-big">Steam Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg">
                            <img src="https://linuxforlyf.files.wordpress.com/2017/10/github-universe1.jpg" alt="" />
                            <div className="overlay">
                                <Link to={ '/github' }  className="custombutton custombutton-white custombutton-big">Github Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="bg">
                            <img src="http://essayden.com/wp-content/uploads/2017/12/movies.jpg" alt="" />
                            <div className="overlay">
                                <Link to= { '/movies' } className="custombutton custombutton-white custombutton-big">Movies Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg">
                            <img src="https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0PGGM81.png?v=1.0" alt="" />
                            <div className="overlay">
                                <Link to={ '/music' }  className="custombutton custombutton-white custombutton-big">Music Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="bg">
                            <img src="http://www.nasa.gov/sites/default/files/thumbnails/image/smap-weather.jpg" alt="" />
                            <div className="overlay">
                                <Link to= { '/weather' } className="custombutton custombutton-white custombutton-big">Wheather Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg">
                            <img src="https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0PGGM81.png?v=1.0" alt="" />
                            <div className="overlay">
                                <Link to={ '/music' }  className="custombutton custombutton-white custombutton-big">Music Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Landing;