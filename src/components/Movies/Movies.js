import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Movies extends Component {

    componentDidMount() {
        this.props.dispatch({type: "GET_MOVIES"});
    }

    handleDetailsClick = (event, id) => {
        this.props.dispatch({ type: 'GET_DETAILS', payload: {id: id} });
        this.props.dispatch({ type: 'GET_GENRES', payload: {id: id} });
    }
    render() {
        return (
            <div>
                {this.props.movies.map(( movies, i) => {
                    return(
                        <div key={i}>
                            <h2>{movies.title}</h2> 
                            <Link to='/details'>
                            <img onClick={(event) => this.handleDetailsClick(event, movies.id)}
                            alt= {movies.title} src= {movies.poster} 
                             />
                            </Link>
                            <h3>Movie Description</h3>
                            <p>{movies.description}</p>
                    </div>
                    )
                })}
            </div>
        )
    }

}
//set a reduxstate to props...
const  putReduxStateOnProps = ( reduxStore ) => ({
    movies: reduxStore.movies
})

export default connect(putReduxStateOnProps)(Movies);