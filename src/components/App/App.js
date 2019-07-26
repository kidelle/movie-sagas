import React, { Component } from 'react';
import './App.css';

// Set up routes
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {

  
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <MovieList />

      </div>
    );
  }
}

export default App;
