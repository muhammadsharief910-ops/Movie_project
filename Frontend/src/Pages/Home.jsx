import React from "react";
import Moviecard from "../Components/Moviecard";

const Home = () => {
  return (
    <div className="home">
        <form onSubmit={} className="search-form" >
            <input type="text" placeholder="Search for movies" className="Search" />
        </form>
      <div className="movies-grid">
        {movies.map((m) => {
          return <moviecad movie={m} key={m.id} />;
          
        })}
      </div>
    </div>
  );
};

export default Home;
