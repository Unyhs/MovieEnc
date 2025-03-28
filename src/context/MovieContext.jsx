import React, { useState, useEffect } from "react";

export const MovieContext = React.createContext()

const MovieContextWrapper = ({children}) => {
  const [watchlist, setWatchlist] = useState([]);

   useEffect(()=>{
    const watchlist=localStorage.getItem("watchlist")
    if(watchlist) setWatchlist(JSON.parse(watchlist))
  },[])

   const addToWatchlist=(movie)=>{
    const updVal=[...watchlist,movie]
    localStorage.setItem("watchlist",JSON.stringify(updVal))
    setWatchlist(updVal)
  }

  const removeFromWatchlist=(movie)=>{
    const updVal=watchlist.filter((ele)=>movie.id!==ele.id)
    localStorage.setItem("watchlist",JSON.stringify(updVal))
    setWatchlist(updVal)
  }

  const isAddedtoWatchlist=(movie)=>{
    let flag=false

    for (let i=0;i<watchlist.length;i++)
    {
      if(watchlist[i].id===movie.id)
       {
        flag=true
        break
       } 
    }
    return flag
  }
  return <MovieContext.Provider value={{watchlist, setWatchlist,addToWatchlist, removeFromWatchlist,isAddedtoWatchlist}}>{children}</MovieContext.Provider>;
};

export default MovieContextWrapper;