import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class MovieDetails  extends Component {

    handleDetailsClick = (event, id) => {
        this.props.dispatch({ type: 'GET_DETAILS', payload: {id: id} });
        this.props.dispatch({ type: 'GET_GENRES', payload: {id: id} });
    }
    render() {
      
        return(
            
            <div>
                {/* {JSON.stringify(this.props.reduxStore.movies)} */}
                <h2>{this.props.item.title}</h2> 
                <Link to="/details">
                <img alt= {this.props.item.title} src= {this.props.item.poster} 
                onClick={ ( event ) => this.handleDetailsClick(event, this.props.item.id)} />
                </Link>
                <h3>Movie Description</h3>
                <p>{this.props.item.description}</p>
            </div>
        )
    }



}

const  putReduxStateOnProps = ( reduxStore ) => ({
    reduxStore,
})

export default connect(putReduxStateOnProps)(MovieDetails);