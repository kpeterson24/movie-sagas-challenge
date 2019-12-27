import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieDetails from '../MovieDetails/MovieDetails';


class Movies extends Component {

    componentDidMount() {
        this.props.dispatch({type: "GET_MOVIES"});
    }
    render() {
        return (
            <div>
                {this.props.reduxStore.movies.map( (item) => {
                    return (
                        <MovieDetails key ={item.id} item={item} />
                )})}
            </div>
        )
    }

}
//set a reduxstate to props...
const  putReduxStateOnProps = ( reduxStore ) => ({
    reduxStore,
})

// export default withRouter(connect(mapReduxStateToProps) (Movies) );
export default connect(putReduxStateOnProps)(Movies);