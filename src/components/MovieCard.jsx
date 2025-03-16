import React, { useState } from 'react'

const MovieCard = ({ movie: {
  title,
  vote_average,
  poster_path,
  release_date,
  original_language,
  overview
}}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="movie-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`movie-card ${isHovered ? 'hovered' : ''}`}>
        <div className="poster">
          <img
            src={poster_path ?
              `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
            alt={title}
          />
          
          {isHovered && (
            <div className="hover-content">
              <h3>{title}</h3>
              
              <div className="meta-info">
                <div className="rating">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <span>{vote_average ? vote_average.toFixed(1) : 'N/A'}</span>
                </div>
                <span className="year">{release_date ? release_date.split('-')[0] : 'N/A'}</span>
                <span className="lang">{original_language.toUpperCase()}</span>
              </div>

              <p className="overview">{overview}</p>

              <div className="actions">
                <button className="play-btn">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Play
                </button>
                <button className="info-btn">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
