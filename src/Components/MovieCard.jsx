import React from 'react'
import { MovieContext } from '../context/MovieContext';
import { useContext } from 'react';
import { IoMdClose } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";

const MovieCard = ({movie,isAddedtoWatchlistFlag}) => {

  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchlist } =
  useContext(MovieContext);

  return (
    <>
        <div className='movieCard'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}}>

            {
              (isAddedtoWatchlistFlag===true)?
              (<div className='movieCardIcon'
              onClick={()=>removeFromWatchlist(movie)}><IoMdClose /></div>)
              :
              (<div className='movieCardIcon'
              onClick={()=>addToWatchlist(movie)}><IoAddCircleOutline /></div>)
            }
            
            <div className='text-white w-full text-center text-xl p-2 bg-gray-900 rounded-xl opacity-70'>
            {movie.title}
            </div>
        </div>
    </>
  )
}

export default MovieCard