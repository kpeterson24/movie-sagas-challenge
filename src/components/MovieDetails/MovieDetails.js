import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieDetails  extends Component {

    //button nav

    // home page
    goHome = () => {
        this.props.history.push('/');
    }

    // edit page
    goEdit = (event, id) => {
        this.props.history.push('/edit');
    }

    render() {
      
        return(
            <div>
                <button onClick = {this.goHome}>Go Home</button>
                <button onClick ={(event) => this.goEdit(event, this.props.details[0].id)}>Edit Movie</button>
                {this.props.details.map( (details, i) => {
                    return (
                        <div key={i}>
                            <h2>{details.title}</h2>
                            <p>{details.description}</p>
                        </div>    
                    )
                })}
                <h3>Genres</h3>
                    <ul>
                        {this.props.genres.map( (genre, i) => {
                        return <li key={i}>{genre.name}</li>
                    })}
                    </ul>
           
        </div>
        )
    }



}

const  putReduxStateOnProps = ( reduxStore ) => ({
    details: reduxStore.details,
    genres: reduxStore.genres
})

export default connect(putReduxStateOnProps)(MovieDetails);