import {Modal,Card} from 'antd';
import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react'
import { MovieContext } from '../context/MovieContext';
import { FaCircleInfo } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoAddCircleOutline } from "react-icons/io5";

function TopTen() {
  const [movieArr,setMovieArr]=useState([]);
  const [selectedMovie,setSelectedMovie]=useState(null);
  const [isInfoModalOpen,setInfoModal]=useState(false);

  const selectMovie=(movie)=>{
    setSelectedMovie(movie);
    setInfoModal(true);
  }
  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchlist } = useContext(MovieContext);

   useEffect(()=>{
        const active=document.getElementById("topten");
        active.classList.add("active");
    
        return()=>{
          active.classList.remove("active");
        }
      },[])

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=47861ded497504804136dd8fb54aa932&language=en-US&page=1')
    .then(response=>{
      setMovieArr(response.data.results)
      console.log(response.data.results)
    })
    .catch(err=>{console.log(err)})
  },[])

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

  const getColors=()=>{
    const colors=['magenta','green','blue','red','volcano','orange']
    return colors[Math.floor(Math.random() * 6)]
  }

  return (
    <div className='topTen-container'>
      <div className='topTen-container-box'>  
        {movieArr.map((movie,index)=>(
          <div className='topTen-container-card'>
            <span className='topTen-container-card-span'>{index+1}</span>
            <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}}
            className='topTen-container-card-span-div'>
              <button className='topten-watchlist-button' onClick={()=>selectMovie(movie)}><FaCircleInfo /></button>
            </div>
          </div>))
        }
      </div>

      {selectedMovie && 
        <Modal open={isInfoModalOpen} title={<div><span>{selectedMovie.title}</span> <span> ({selectedMovie.release_date.substring(0,4)})</span></div>} 
        footer={null} onCancel={()=>{setSelectedMovie(null); setInfoModal(false);}}>
        <Card 
        cover={
          <img
            alt="example"
            src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
          />
        }

        actions={[
          <button disabled={isAddedtoWatchlist(selectedMovie)}  onClick={()=>addToWatchlist(selectedMovie)}><span>Add to Watchlist</span></button>,
          <span>Rating: {Math.round(selectedMovie.vote_average*100)/100} ({selectedMovie.vote_count})</span>
        ]}
      >
        {selectedMovie.overview}
      </Card>
        </Modal>
      }
    </div>
  )
}

export default TopTen