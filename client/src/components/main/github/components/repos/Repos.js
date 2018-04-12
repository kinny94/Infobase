import React, { Component } from 'react';

class Repos extends Component{

    constructor( props ){
        super( props );
    }

   
    renderDescription( desc ){
        if( desc !== null ){
            return <p>{ desc }</p>
        }else{
            return <p>This repo has no description.</p>
        }
    }
    renderComponent(){
        return (
                this.props.reposdata.map(( repo ) => {
                return (
                    <div key={ repo.id }className="card w-100">
                        <div className="card-header">
                            <h4>{ repo.name }</h4>
                        </div>
                        <div className="card-body">
                            <h5>Description</h5>
                            { this.renderDescription( repo.description ) }
                            <a href={ repo.html_url } className="btn btn-primary">Go to Repo</a>
                        </div>
                    </div>
                )
            })
        );
    }

    render(){
        return(
            <div className="row">
                { this.renderComponent() }
            </div>
        )
    }
}

export default Repos;