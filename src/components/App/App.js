import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import {HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movie time!</h1>
          <Router>
              <Route exact path='/'> <Movies  /> </Route>
          </Router>
       
      </div>
    );
  }
}

export default App;
