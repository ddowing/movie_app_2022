import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css"

function Movie({title,year,summery,poster}){
    return (
        <div className='movie__data'>
            <img src={poster} alt={title} title={title} />
            <h3 className='movie__title'>{title}</h3>
            <h5 className='movie__year'>{year}</h5>
            <p className='movie__summery'>{summery}</p>
        </div>
    )
}
// title, summery, medium_cover_image->poster
Movie.propTypes={
    // id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summery: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,

};

export default Movie;