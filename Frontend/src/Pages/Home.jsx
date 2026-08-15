import React, { useEffect, useState } from "react";
import Moviecard from "../Components/Moviecard";
import { searchMovies, getPopularMovies } from "../services/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setError("failed to load");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);



  async function  handlesearch (e) {
    e.preventDefault();
    if(!search.trim()) return
    if(loading) return
    setLoading(true)

    try {
      const searchResults = await searchMovies(search);
      setMovies(searchResults)
      setError(null);
    } catch(err) {
      setError("failed to search movies")
      console.log(err);

    } finally {
      setLoading(false)
    }
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

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((m) => {
            return (
              m.title.toLowerCase().startsWith(search) && (
                <Moviecard movie={m} key={m.id} />
              )
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
