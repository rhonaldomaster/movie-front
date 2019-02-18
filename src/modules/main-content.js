import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieList from './movie-list/movie-list';

class MainContent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      movies: [],
      cache: []
    };
    this.cacheMovie = this.cacheMovie.bind(this);
  }

  cacheMovie() {}
  
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={(props) => <MovieList {...this.state} {...props} />} />
        </Router>
        <Router>
          <Route exact path="/catalog" render={(props) => <MovieList {...this.state} {...props} />} />
        </Router>
      </div>
    );
  }
}

export default MainContent;