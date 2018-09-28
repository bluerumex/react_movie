import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Geres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie__Sysnopsis">{synopsis}</p>
            </div>
        </div>         
    )
}

// Stateless state가 없기 때문에 업데이트같은 기능은 없어진다.
function MoviePoster({poster, alt}) {
    return (
        <img className="Movie__Poster" src={poster} alt={alt} title={alt} />
    ) 
}

function MovieGenre({genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Movie