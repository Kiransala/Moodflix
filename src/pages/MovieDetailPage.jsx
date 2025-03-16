import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const MovieDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits,similar`,
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

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (!movieDetails || isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const backdropPath = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
  const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

  return (
    <main>
      <div className="pattern" />
      <div className="movie-detail-page">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Movies
        </button>
        
        <div className="backdrop" style={{ backgroundImage: `url(${backdropPath})` }} />
        
        <div className="wrapper">
          <div className="movie-info">
            <div className="flex flex-col md:flex-row gap-8">
              <img 
                src={posterPath} 
                alt={movieDetails.title}
                className="rounded-xl w-64 h-96 object-cover shadow-2xl"
              />
              
              <div className="flex-1">
                <h1>{movieDetails.title}</h1>
                
                <div className="meta-info">
                  <span className="pill">{new Date(movieDetails.release_date).getFullYear()}</span>
                  <span className="pill">{movieDetails.runtime} min</span>
                  <span className="pill rating">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    {movieDetails.vote_average.toFixed(1)}
                  </span>
                </div>
                
                <p className="overview">{movieDetails.overview}</p>
                
                <div className="additional-info">
                  <div className="info-grid">
                    <div>
                      <h3>Genres</h3>
                      <div className="flex flex-wrap gap-2">
                        {movieDetails.genres.map(genre => (
                          <span key={genre.id} className="tag">{genre.name}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3>Cast</h3>
                      <div className="cast-list">
                        {movieDetails.credits.cast.slice(0, 5).map(actor => (
                          <div key={actor.id} className="cast-item">
                            <img 
                              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                              alt={actor.name}
                              className="w-16 h-16 rounded-full object-cover"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/185x185?text=Actor';
                              }}
                            />
                            <span>{actor.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {movieDetails.similar.results.length > 0 && (
              <div className="similar-movies">
                <h2>Similar Movies</h2>
                <div className="similar-grid">
                  {movieDetails.similar.results.slice(0, 4).map(movie => (
                    <div 
                      key={movie.id} 
                      className="similar-movie-card"
                      onClick={() => navigate(`/movie/${movie.id}`)}
                    >
                      <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <h4>{movie.title}</h4>
                      <span>{new Date(movie.release_date).getFullYear()}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetailPage; 