import React, { useContext } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import Moviecard from "../Components/Moviecard";

const Favourites = () => {
  const { favourites } = useMovieContext();

  if (favourites) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
        
      <div className="movies-grid">
        {favourites.map((m) => {
          return (
            <Moviecard movie={m} key={m.id} />
          );
        })}
      </div>
      </div>
    );
  }

  return (
    <div>
      <div className="favourite-empty">
        <h2>No Favourite Movies Yet</h2>
        <p>start adding movies to your favourite and they will appear here</p>
      </div>
    </div>
  );
};

export default Favourites;
