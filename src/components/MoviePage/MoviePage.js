import React, {Component} from 'react';
import {connect} from 'react-redux';
-
class MoviePage extends Component {

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
        <div>
            {this.props.reduxStore.details.map( (item, i) => {
                return (
                    <div key={i}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>    
                )
            })}
            <h3>Genres</h3>
            {this.props.reduxStore.genres.map( (item, i) => {
                return (
                    <li key={i}>{item.name}</li>
                )
            })}
            <button onClick = {this.goHome}>Go Home</button>
            <button onClick ={(event) => this.goEdit(event, this.props.details)} >Edit Movie</button>
        </div>
    }

}


//set a reduxstate to props...
const  putReduxStateOnProps = reduxStore => ({
    reduxStore
})

export default connect(putReduxStateOnProps)(MoviePage);