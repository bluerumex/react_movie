import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

/* 
const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Old Boy",
  "Start wars"
]

const movieImages = [
  "http://ticketimage.interpark.com/Movie/still_image/V16/V1601447p_s01.gif",
  "http://image.cine21.com/cine21/poster/2005/0607/M0010102_.jpg",
  "http://image.cine21.com/cine21/poster/2013/1114/10_42_00__52842a68c7fda.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpffCAnV8696o7ppd4KB3rOdUOsLFbu_PeOqWWqA5FZXvYW9b"
]
*/

class App extends Component {
  // Render: componentWillMount() -> Render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate() 
  
  state = {

  }

  componentDidMount() {
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  }

  _renderMovies = () => { 
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    )
  }
}

export default App;
