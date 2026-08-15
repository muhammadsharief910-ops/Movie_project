import React from 'react'

const Moviecard = ({movie}) => {
    function favclick() {
        alert("clicked");
    }
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={movie.url} alt={movie.title} />
            <div className='overlay'>
                <button className='fav-button' onClick={favclick}>🤍</button>
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