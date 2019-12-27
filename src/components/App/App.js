import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

import Movies from '../Movies/Movies';
import MovieDetails from '../MovieDetails/MovieDetails';
// import EditDetails from '../EditDetails/EditDetails';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movie time!</h1>
          <Router>
              <Route exact path='/'> <Movies /> </Route>
              <Route path='/details'> <MovieDetails /> </Route>
              {/* <Route path='/edit'> <EditDetails /> </Route> */}
          </Router>
       
      </div>
    )
  }
}

export default App;
