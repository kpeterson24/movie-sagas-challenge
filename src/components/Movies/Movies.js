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
            <>
            {this.props.moviesRedux.map( (item) => {
                return (
                    <>
                
                        {/* {JSON.stringify(this.props.moviesRedux)} */}
                        <MovieDetails key ={item.id} item={item} />
                
                    </>
            )})}
            </>
        )
    }

}
//set a reduxstate to props...
const  mapReduxStateToProps = reduxState => ({
    moviesRedux: reduxState.movies
})

// export default withRouter(connect(mapReduxStateToProps) (Movies) );
export default connect(mapReduxStateToProps) (Movies);