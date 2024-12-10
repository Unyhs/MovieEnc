import React from 'react'
import { MovieContext } from '../context/MovieContext';
import { useContext } from 'react';

const MovieCard = ({movie,isAddedtoWatchlistFlag}) => {

  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchlist } =
  useContext(MovieContext);

  return (
    <>
        <div className='h-[40vh] w-[200px] rounded-xl hover:scale-110 duration-300 
             bg-cover bg-center flex flex-col justify-between items-end'
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}}>

            {
              (isAddedtoWatchlistFlag===true)?
              (<div className='p-2 hover:scale-150 hover:cursor-pointer'
              onClick={()=>removeFromWatchlist(movie)}>❌</div>)
              :
              (<div className='p-2 hover:scale-150 hover:cursor-pointer'
              onClick={()=>addToWatchlist(movie)}>❤️</div>)
            }
            
            <div className='text-white w-full text-center text-xl p-2 bg-gray-900 rounded-xl opacity-70'>
            {movie.title}
            </div>
        </div>
    </>
  )
}

export default MovieCard