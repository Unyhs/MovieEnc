import React, { useEffect, useState,useContext } from 'react'
import { genreids } from '../assets/data'
import { MovieContext } from '../context/MovieContext';

const Watchlist = () => 
{
  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchlist } =
  useContext(MovieContext);
  const[sortStyle,setSortStyle]=useState("asc")
  const[search,setSearch]=useState("")
  const[currGenres,setCurrGenres]=useState("All")
  const[genres,setGenres]=useState(["All"])
  window.scrollTo({ top: 0, behavior: 'smooth' });


  useEffect(()=>{
    let newgenres=[];

    watchlist.forEach(movie=>{
      for (let i=0;i<movie.genre_ids.length;i++)
      {
        let g=genreids[movie.genre_ids[i]]
            newgenres.push(g)
      }
    })
    newgenres=new Set(newgenres)
    setGenres(["All",...newgenres])
  },[watchlist])

  const sortChange=()=>{
    (sortStyle==="asc")? setSortStyle("desc"):setSortStyle("asc")
    sort()
  }

  const sort=()=>{
    let sorted;
      if(sortStyle==="asc")
        sorted=watchlist.sort((m1,m2)=>{
      return m1.vote_average-m2.vote_average})
      else
      sorted=watchlist.sort((m1,m2)=>{
        return m2.vote_average-m1.vote_average})

      setWatchlist([...sorted])
  }

  const getGenres=(genres)=>{
    let res='';
    for (let i=0;i<genres.length;i++)
    {
      let gen=genreids[genres[i]]
      res=`${res} ${gen}`

      if(i!==genres.length-1)
        res=`${res},`
    }
    return res
  }

  
  return (
    <div className='flex flex-col items-center h-full'>
      <div className='flex justify-center flex-wrap mt-20 w-[90vw] md:w-[70vw]'>
        {
        genres.map(genre=>
          (
            <span
              className={
                currGenres === genre ?
                "m-2 md:m-3 flex justify-center items-center bg-pink-400 text-white border rounded-xl p-2 md:p-4 hover:cursor-pointer" :
                "m-2 md:m-3 flex justify-center items-center bg-gray-400/50 rounded-xl text-white p-2 md:p-4 hover:cursor-pointer"
              }
              onClick={e=>setCurrGenres(e.target.innerText)}>
              {genre}
            </span>
          )
          )
        }
      </div>
      <div>
        <label>Search Movies by Name: </label>
        <input
        className='border border-slate-600' 
        type="text"
        value={search}
        onChange={e=>setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[90vw] md:w-[70vw]">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 align-middle">
            <thead>
              <tr className="bg-pink-50">
                <th className="px-6 py-4 font-medium text-gray-900">
                  <div>Name</div>
                </th>
                <th>
                  <div className="flex justify-center">
                        {`   Ratings`}  
                  <div className='hover:cursor-pointer'
                  onClick={sortChange}>↕️</div>
                  </div>
                </th>
                <th>
                  <div className="flex">
                    <div>Genre</div>
                  </div>
                </th>
                <th>
                  <div className="flex">
                    <div>Delete</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {watchlist.filter((movie,index)=>{
                  if(currGenres==="All")
                    return true
                  else
                  {
                    return getGenres(movie.genre_ids).toLowerCase().includes(currGenres.toLowerCase())
                  }
              })
              .filter((movie,index)=>{
                return movie.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((movie, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                    <img
                      className="h-[3rem] md:h-[6rem] w-[5rem] md:w-[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt=""
                    />
                    <div className="ml-4">
                      <div className="font-medium text-gray-700 text-sm">{movie.title}</div>
                    </div>
                  </td>
                  <td className="pl-6 py-4 justify-center">{`${movie.vote_average.toFixed(2)} (${Math.round(movie.popularity)})`}</td>
                  <td className="pl-2 py-4 overflow-auto">{getGenres(movie.genre_ids)}</td>
                  <td className="pl-2 py-4 hover:cursor-pointer" onClick={()=>removeFromWatchlist(movie)}>❌</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div> 
    </div> 
  );

}
    

export default Watchlist