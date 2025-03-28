import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";

function TopTenMovieCard({movie,movieArr}) {
  return (
                    <>
                    <div className='topTen-container-card' key={movie.id}>    
                        <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}}
                        className='topTen-container-card-span-div'>
                          <span className='topTen-container-card-span'>{ movieArr.findIndex(ele=>ele.id==movie.id)+1}</span>
                          <button className='topten-watchlist-button' onClick={()=>selectMovie(movie)}><FaCircleInfo /></button>
                          <span className='topTen-container-card-titlespan'>{movie.title}</span>
                        </div>
                    </div>
                    </>
                    )
}

export default TopTenMovieCard