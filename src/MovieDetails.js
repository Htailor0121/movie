import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movies } from './moviesData';
import './MovieDetails.css'; // Make sure to include this CSS file

const MovieDetails = () => {
    const { title } = useParams();
    const navigate = useNavigate();
    const movie = movies.find((movie) => movie.title === decodeURIComponent(title));

    if (!movie) {
        return <h2>Movie not found!</h2>;
    }

    const handleBookNow = () => {
        navigate(`/seat-selection/${encodeURIComponent(movie.title)}/${movie.price}`);
    };

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <p className="movie-genre">Genre: {movie.genre}</p>
            <p className="movie-price">Price: ₹{movie.price}</p>
            <button onClick={handleBookNow} className="book-now-button">Book Now</button>
        </div>
    );
};

export default MovieDetails;
