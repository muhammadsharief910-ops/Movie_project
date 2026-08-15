import React, { useEffect, useState } from "react";
import Moviecard from "../Components/Moviecard";
import { searchMovies, getPopularMovies } from "../services/api";



const Home = () => {
    const [movies ,setMovies] = useState([])
    const [search, setSearch] = useState("");
    const [error , setError] = useState([]);
    const [loading , setLoading] = useState(true);




    useEffect(() => {
      const loadPopularMovies = async () => {
        try {
          const popularMovies = await getPopularMovies();
          setMovies(popularMovies)
        } catch(err) {
          setError("failed to load")
        }
        finally {
          setLoading(false);
        }
      }
      loadPopularMovies()
    },[])


    function handlesearch(e) {
        e.preventDefault();
        alert(`You searched: ${search}`)
    }
  return (
    <div className="home">
      <form onSubmit={handlesearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="Search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((m) => {
          return m.title.toLowerCase().startsWith(search) && (
          <Moviecard movie={m} key={m.id} /> )
        })}
      </div>
    </div>
  );
};

export default Home;
