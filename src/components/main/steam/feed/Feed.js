import React, { Component } from 'react';

class Feed extends Component{

    
    render(){
        const img = {
            height: "200px"
        }

        const margin = {
            marginTop: "20px"
        }

        return(    
            <div className="container">
                <div className="col">
                    <h2>Featured Windows items...</h2>
                </div>
                <div className="col" style={ margin } >
                    <div className="container-fluid"> 
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner row w-100 mx-auto">
                                <div className="carousel-item col-md-4 active">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img }src="http://placehold.it/800x600/f44242/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 1</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/418cf4/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 2</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/3ed846/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 3</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/42ebf4/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 4</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/f49b41/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 5</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/f4f141/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 6</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/8e41f4/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 7</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h2>Featured Linux items...</h2>
                </div>
                <div className="col" style={ margin }>
                    <div className="container-fluid"> 
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner row w-100 mx-auto">
                                <div className="carousel-item col-md-4 active">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img }src="http://placehold.it/800x600/f44242/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 1</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/418cf4/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 2</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/3ed846/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 3</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/42ebf4/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 4</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/f49b41/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 5</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/f4f141/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 6</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/8e41f4/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 7</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h2>Featured Macos items...</h2>
                </div>
                <div className="col" style={ margin }>
                    <div className="container-fluid"> 
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner row w-100 mx-auto">
                                <div className="carousel-item col-md-4 active">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img }src="http://placehold.it/800x600/f44242/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 1</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/418cf4/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 2</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/3ed846/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 3</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/42ebf4/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 4</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/f49b41/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 5</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/f4f141/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 6</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                                <div className="carousel-item col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" style={ img } src="http://placehold.it/800x600/8e41f4/fff" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h4 className="card-title">Card 7</h4>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Feed;