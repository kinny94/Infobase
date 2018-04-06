import React, { Component } from 'react';

class Landing extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg">
                            <img src="https://www.bleepstatic.com/content/hl-images/2016/12/23/Steam-Logo.jpg" alt="" />
                            <div className="overlay">
                                <h2>Steam Info<span></span></h2>
                                <p>this is some text.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg">
                            <img src="https://linuxforlyf.files.wordpress.com/2017/10/github-universe1.jpg" alt="" />
                            <div className="overlay">
                                <h2>Github Info <span>Coders!</span></h2>
                                <p>this is some text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;