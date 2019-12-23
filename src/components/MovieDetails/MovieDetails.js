import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class MovieDetails  extends Component {
    handleDetailsClick = () => {
        this.props.dispatch({ type: `MOVIE_DETAILS`, payload: this.props.item.id });
        this.props.history.push('/details/' + this.props.item.id);
    }
    render() {

        // declaring this.props variables
        const movieTitle = this.props.item.title;
        const moviePoster = this.props.item.poster;
        const movieDesc = this.props.item.description;
      
        return(
            <div>
            <div>
                {JSON.stringify(this.props.item)}
                <h2>{movieTitle}</h2>
                <br/>   
                <img alt= {movieTitle} src= {moviePoster} onClick={this.handleDetailsClick}></img>
                <br/>
                <p>{movieDesc}</p>
            </div>
            </div>
        )
    }



}


export default withRouter(connect()(MovieDetails));