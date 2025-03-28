import {Modal,Card, Skeleton, ConfigProvider,theme,Carousel, Row, Col} from 'antd';
import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react'
import { MovieContext } from '../context/MovieContext';

import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaChevronCircleRight } from "react-icons/fa";
import TopTenMovieCard from './TopTenMovieCard';

function TopTen() {
  const [movieArr,setMovieArr]=useState([]);
  const [currIdx,setCurrIdx]=useState(0);
  const [selectedMovie,setSelectedMovie]=useState(null);
  const [isInfoModalOpen,setInfoModal]=useState(false);
  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchlist,isAddedtoWatchlist } = useContext(MovieContext);

  //useEffect for highlighting active tab
   useEffect(()=>{
        const active=document.getElementById("topten");
        active.classList.add("active");
    
        return()=>{
          active.classList.remove("active");
        }
      },[])

  //useEffect for fetching Top 20 movies
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=47861ded497504804136dd8fb54aa932&language=en-US&page=1')
    .then(response=>{
      setMovieArr(response.data.results)
    })
    .catch(err=>{console.log(err)})
  },[])

  //func for useState-movieSelection
  const selectMovie=(movie)=>{
    setSelectedMovie(movie);
    setInfoModal(true);
    const toptencontainerbox=document.querySelector(".topTen-container-box");
    toptencontainerbox.classList.add("dim");
  }

  //func for useState-carousel moveLeft
  const incIdx=()=>{
    if(currIdx<movieArr.length-5) setCurrIdx(idx=>idx+1)
  }

  //func for useState-carousel moveRight
  const decIdx=()=>{
    if(currIdx>0) setCurrIdx(idx=>idx-1)
  }

  const handleModalWatchlist=()=>{
      if(isAddedtoWatchlist(selectedMovie)) 
        removeFromWatchlist(selectedMovie)
      else 
        addToWatchlist(selectedMovie)
  }

  return (
    <div className='topTen-container'>
      <div className='topTen-container-box'> 
      <button className='left-btn' onClick={decIdx}><FaCircleChevronLeft /></button>
        {movieArr
        .filter((_,index)=>index>=currIdx && index<currIdx+5)
        .map((movie,index)=>
          {
            return (
                  <TopTenMovieCard movie={movie} movieArr={movieArr} key={movie.id}/>
                  )
          })
        }
      <button className='right-btn' onClick={incIdx}><FaChevronCircleRight /></button>  
      </div>
      <div className="topTen-container-box-portrait">
        {movieArr
        .map((movie,index)=>
          {
            return (
                  <TopTenMovieCard movie={movie} movieArr={movieArr} key={movie.id}/>
                  )
          })
        }
      </div>
      {selectedMovie && 
      <ConfigProvider theme={{
        token:{
          colorBgContainer:'#212121',
          colorText:'white',
          fontFamily:'Baloo 2',
        }
        }}>
        <Modal open={isInfoModalOpen}
                className='topTen-modal-container' 
                title={<div className='topTen-Modal-Title'>
                          <span>{selectedMovie.title}</span> 
                          <span> ({selectedMovie.release_date.substring(0,4)})</span>
                        </div>} 
                footer={null} 
                onCancel={()=>{
                    setSelectedMovie(null); 
                    setInfoModal(false);
                    const toptencontainerbox=document.querySelector(".topTen-container-box");
                    toptencontainerbox.classList.remove("dim");
                    }}>
                      <Card 
                      cover={
                        <img
                          alt="Movie Poster"
                          src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
                        />
                      }

                      actions={[
                        <button className='topTen-Modal-actions' onClick={handleModalWatchlist}><span>{isAddedtoWatchlist(selectedMovie)? "Remove from Watchlist": "Add to Watchlist"}</span></button>,
                        <span className='topTen-Modal-actions'>Rating: {Math.round(selectedMovie.vote_average*100)/100} ({selectedMovie.vote_count})</span>
                      ]}
                    >
                      {selectedMovie.overview}
                      </Card>
        </Modal>
      </ConfigProvider>
      }
    </div>
  )
}

export default TopTen