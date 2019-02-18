import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const key = '475d960c7374b0d07a51bf9f1e9cfd03';
const endpoints = {
  discover: '/discover/movie',
  genres: '/genre/movie/list',
  genreList: '/discover/movie?with_genres='
};

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      genres: null
    };
  }

  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.loadPopular();
    } else if (this.props.location.pathname === '/catalog') {
      this.loadGenres();
    }
  }

  loadPopular() {
    axios
      .get(baseUrl + endpoints.discover + '?api_key=' + key)
      .then(({ data }) => {
        this.setState(state => ({ movies: data.results, genres: null }))
      });
  }

  loadGenres() {
    axios
      .get(baseUrl + endpoints.genres + '?api_key=' + key)
      .then(({ data }) => {
        this.setState(state => ({ movies: null, genres: data.genres }))
      });
  }

  getPopular() {
    return (
      <div className="container">
        <ul className="row movie-list">{this.state.movies.map(movie => (
          <li key={movie.id} className="col-xs-12 col-md-4">
            <div className="movie-list__item">
              <Link to={'/' + movie.id}>{movie.title}</Link>
              <p>{movie.overview}</p>
            </div>
          </li>
        ))}</ul>
      </div>
    );
  }

  getGenres() {
    return (<div className="container">
      <ul className="row genre-list">{this.state.genres.map(genre => (
        <li key={genre.id} className="col-xs-12 col-md-4">
          <div className="genre-list__item">
            <Link to={'/catalog/' + genre.id}>{genre.name}</Link>
          </div>
        </li>
      ))}</ul>
    </div>);
  }

  render () {
    let component = (
      <div></div>
    );
    if (this.state.movies) {
      component = this.getPopular();
    } else if (this.state.genres) {
      component = this.getGenres();
    }
    return component;
  }
}