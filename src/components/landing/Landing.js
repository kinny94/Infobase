import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg">
                            <img className="image" src="https://www.bleepstatic.com/content/hl-images/2016/12/23/Steam-Logo.jpg" alt="" />
                            <div className="overlay">
                                <Link to= { '/steam' } className="custombutton custombutton-white custombutton-big">Steam Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg">
                            <img className="image" src="https://linuxforlyf.files.wordpress.com/2017/10/github-universe1.jpg" alt="" />
                            <div className="overlay">
                                <Link to={ '/github' }  className="custombutton custombutton-white custombutton-big">Github Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="bg">
                            <img className="image" src="https://essayden.com/wp-content/uploads/2017/12/movies.jpg" alt="" />
                            <div className="overlay">
                                <Link to= { '/movies' } className="custombutton custombutton-white custombutton-big">Movies Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg">
                            <img className="image" src="https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0PGGM81.png?v=1.0" alt="" />
                            <div className="overlay">
                                <Link to={ '/music' }  className="custombutton custombutton-white custombutton-big">Music Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="bg">
                            <img className="image" src="https://www.nasa.gov/sites/default/files/thumbnails/image/smap-weather.jpg" alt="" />
                            <div className="overlay">
                                <Link to= { '/weather' } className="custombutton custombutton-white custombutton-big">Wheather Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg">
                            <img className="image" src="https://studybreaks.com/wp-content/uploads/2017/08/books.jpg" alt="" />
                            <div className="overlay">
                                <Link to={ '/books' }  className="custombutton custombutton-white custombutton-big">Books Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="bg">
                            <img className="image" src="https://cdn.ndtv.com/tech/images/gadgets/google-plus.jpg" alt="" />
                            <div className="overlay">
                                <Link to= { '/googleplus' } className="custombutton custombutton-white custombutton-big">Google Plus Info</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg">
                            <img className="image" src="https://www.affirm.com/images/buy-with-affirm/featured-stores/expedia.png" alt="" />
                            <div className="overlay">
                                <Link to={ '/expedia' }  className="custombutton custombutton-white custombutton-big">Expedia Info</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Landing;