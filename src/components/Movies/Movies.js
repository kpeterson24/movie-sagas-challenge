import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';


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
                    <li key ={item.id} item={item}>
                        {JSON.stringify(this.props.moviesRedux)}
                        {this.props.moviesRedux}
                    </li>
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

export default withRouter(connect(mapReduxStateToProps) (Movies) );