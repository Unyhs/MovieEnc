import {Modal,Card, Skeleton, ConfigProvider,theme,Carousel} from 'antd';
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
    const toptencontainerbox=document.querySelector(".topTen-container-box");
    toptencontainerbox.classList.add("dim");
  }
  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchlist } = useContext(MovieContext);

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

  //func to check if the movie is added to watchlist
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


  return (
    <div className='topTen-container'>
      <div className='topTen-container-box'> 
        <Carousel arrows infinite={false}>
        {movieArr.map((movie,index)=>{
          if(movieArr.length==0)
          {return (<>
                    <ConfigProvider theme={{algorithm:theme.darkAlgorithm}}><Skeleton active /></ConfigProvider>
                  </>)}
          else
          {
            return (
                  <>
                  <div className='topTen-container-card'>
                    <span className='topTen-container-card-span'>{index+1}</span>
                    <div style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}}
                    className='topTen-container-card-span-div'>
                      <button className='topten-watchlist-button' onClick={()=>selectMovie(movie)}><FaCircleInfo /></button>
                    </div>
                  </div>
                  </>
                  )
          }
          })
        }
        </Carousel> 
        
      </div>
      {selectedMovie && 
      <ConfigProvider theme={{
        token:{
          colorBgContainer:'#111827',
          colorText:'white',
          fontFamily:'Playfair Display',
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
                          alt="example"
                          src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}
                        />
                      }

                      actions={[
                        <button className='topTen-Modal-actions' disabled={isAddedtoWatchlist(selectedMovie)}  onClick={()=>addToWatchlist(selectedMovie)}><span>Add to Watchlist</span></button>,
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