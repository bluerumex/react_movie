import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster poster={poster}/>
            <h1>{title}</h1>
        </div>        
    )
}

// Stateless state가 없기 때문에 업데이트같은 기능은 없어진다.
function MoviePoster({poster}) {
    return (
        <img src={poster} alt="Movie Poster" />
    ) 
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie