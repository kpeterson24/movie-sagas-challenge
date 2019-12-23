import React, {Component} from 'react';
// import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import MovieDetails from '../MovieDetails/MovieDetails';


class Movies extends Component {

    componentDidMount() {
        this.props.dispatch({type: "GET_MOVIES"});
    }
    render() {
        return (
            //make sure you actually place your .map into a holding container and not an empty one dumb dumb
            <div>
                {this.props.moviesRedux.map( (item) => {
                    return (
                        <MovieDetails key ={item.id} item={item} />
                )})}
            </div>
        )
    }

}
//set a reduxstate to props...
const  mapReduxStateToProps = reduxState => ({
    moviesRedux: reduxState.movies
})

// export default withRouter(connect(mapReduxStateToProps) (Movies) );
export default connect(mapReduxStateToProps) (Movies);