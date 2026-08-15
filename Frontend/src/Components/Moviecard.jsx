import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'

const Moviecard = ({movie}) => {
    const {isFavourite , addFavourite , removeFavourite} = useMovieContext();
    const favourite = isFavourite(movie.id);



    function favclick(e) {
        e.preventDefault();
        if(favourite) {
            removeFavourite(movie.id)
        } else {
            addFavourite(movie)
        }

        
    }
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className='overlay'>
                <button className={`fav-button ${favourite ? "active" : ""}`} onClick={favclick}>
                    {favourite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>

        <div className="movie-info">
            <h3>{movie.title}</h3>
            <h3>{movie.release_date}</h3>
            <div className=""></div>
        </div>


    </div>
  )
}

export default Moviecard