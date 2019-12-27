import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditDetails from '../EditDetails/EditDetails';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
          <Router>
            <h1>Movie time!</h1>
            <Route exact path="/" component={Movies} />
            <Route path="/details" component={MovieDetails} />
            <Route path="/edit" component={EditDetails}/>
          </Router>
      </div>
    );
  }
}

export default App;
