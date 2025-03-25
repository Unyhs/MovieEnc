import React, { useState, useEffect } from 'react';

function Loader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading or delay to show the animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // 3 seconds delay for projector effect
  }, []);

  return (
    <div className="projector-container">
      {!isLoaded ? (
        <div className="projector">
          <div className="wheel wheel-left"></div>
          <div className="reel"></div>
          <div className="wheel wheel-right"></div>
        </div>
      ) : (
        <div className="content">
          <h1>Movie Title</h1>
          <img src="movie-poster.jpg" alt="Movie Poster" />
        </div>
      )}
    </div>
  );
}

export default Loader;

