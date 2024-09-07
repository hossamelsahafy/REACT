import React from "react";
import "./WatchList.css";

export function WatchList({ watchList = [] }) {
  return (
    <div className="watch-list">
      <h2>Watch List</h2>
      {watchList.length === 0 ? (
        <p>No movies added to the watch list.</p>
      ) : (
        <div className="watch-list-movies">
          {watchList.map((movie) => (
            <div className="watch-list-card" key={movie.name}>
              <img src={movie.image} alt={movie.name} />
              <div className="watch-list-content">
                <h3>{movie.name}</h3>
                <p>IMDB Rating: {movie.imdbRating}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
