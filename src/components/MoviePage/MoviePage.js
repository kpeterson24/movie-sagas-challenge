import React, {Component} from 'react';
import {connect} from 'react-redux';
-
class MoviePage extends Component {

//mounting
componentDidMount() {
    const selectedId = this.props.match.params.selectedId
    this.props.dispatch({ type: 'SELECTED_MOVIE', payload: selectedId });
}

    render() {
        <div>
            {this.props.moviesRedux.map( (movieItem, i) => 
                <div key={i} >
                    <h2>{movieItem.title}</h2>
                    <img alt={movieItem.title} src={movieItem.poster} />
                    <p>{movieItem.description}</p>
                    <p>Genre: {movieItem.name}</p>
                </div>
            )}
            <button onClick={ () => this.props.history.push('/')}>Back to Movies</button>
            {/* Do edit button last */}
            <button>Edit</button> 
        </div>
    }

}


//set a reduxstate to props...
const  mapReduxStateToProps = reduxState => ({
    moviesRedux: reduxState.genres
})

export default connect(mapReduxStateToProps)(MoviePage);