import { useEffect, useState } from 'react';

const MovieDetail = ({ movieId, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?append_to_response=videos,credits`,
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
            }
          }
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  if (!movieDetails || isLoading) {
    return (
      <div className="movie-detail-overlay">
        <div className="movie-detail-container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  const backdropPath = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

  return (
    <div className="movie-detail-overlay">
      <div className="movie-detail-container">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        
        <div className="movie-detail-content">
          <div className="backdrop" style={{ backgroundImage: `url(${backdropPath})` }} />
          
          <div className="movie-info">
            <h2>{movieDetails.title}</h2>
            
            <div className="meta-info">
              <span>{new Date(movieDetails.release_date).getFullYear()}</span>
              <span>{movieDetails.runtime} min</span>
              <span>{movieDetails.vote_average.toFixed(1)} ⭐</span>
            </div>
            
            <p className="overview">{movieDetails.overview}</p>
            
            <div className="additional-info">
              <p><strong>Genre:</strong> {movieDetails.genres.map(g => g.name).join(', ')}</p>
              <p><strong>Cast:</strong> {movieDetails.credits.cast.slice(0, 5).map(actor => actor.name).join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail; 