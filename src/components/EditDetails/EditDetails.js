import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditDetails extends Component {

    //setting the state to empty in our fields so we can update
    // For Me:  We set the id to [0].id so that when we click the button it matches the property we gave it on when its originally rendered in the array
    state = {
        title:'',
        description:'',
        id: this.props.details[0].id
    }

    // this brings us back to our details page when clicked
    goDetails = () => {
        this.props.history.push('/details');
    }

    // this handles onclick set state and updates our states set above
    handleInputChange = (event, propertyName) => {
        console.log( event.target.value );
        this.setState({
           [propertyName]: event.target.value
        })
    }

    editDetails = (event, id) => {
        this.props.dispatch({ type: 'EDIT_DETAILS', payload: this.state });
        this.props.dispatch({ type: 'GET_DETAILS', payload: {id: this.state.id}});    
        this.props.history.push('/details');
    }



    render() {
        return (
            <div>
                <p>Updating: {this.props.details[0].title}</p>
                <input type= 'text' label = "movie title" placeholder='New Title' onChange={ (event) => this.handleInputChange( event, 'title')} />
                <input type= 'text' label = "movie description" placeholder='New Description' onChange={ (event) => this.handleInputChange( event, 'description')} />
                <br />
                <button onClick = {this.goDetails}>Back</button>
                <button onClick = {this.editDetails}>Save Changes</button>

            </div>
        )
    }

}
const putReduxStateOnProps = (reduxStore) => ({
    details: reduxStore.details
});

export default connect(putReduxStateOnProps)(EditDetails);