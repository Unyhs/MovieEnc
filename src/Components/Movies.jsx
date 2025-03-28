import React, { useState } from 'react'
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { useEffect,useContext } from 'react';
import axios from 'axios';
import { MovieContext } from '../context/MovieContext';
import { FloatButton,Divider } from 'antd';
import {UpCircleFilled, UpOutlined} from '@ant-design/icons'

const Movies = () => {
  const[pageNo,setPageNo]=useState(1);
  const[movies,setMovies]=useState([
    {
      url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title:"Movie 1"
    },
    {
      url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title:"Movie 2"
    },
    {
      url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title:"Movie 3"
    },
    {
      url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title:"Movie 4"
    },
    {
      url:"https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title:"Movie 5"
    }]);
  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchlist,isAddedtoWatchlist } = useContext(MovieContext);

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=47861ded497504804136dd8fb54aa932&language=en-US&page=${pageNo}`).
    then(response=>{
      setMovies(response.data.results)
    }).catch(error=>{
      console.log(error)
    })
  },[pageNo])

  const handleNext=()=>{
    if(pageNo<500)
    setPageNo(pageNo+1);
  }

  const handlePrevious=()=>{
    if(pageNo>1)
    setPageNo(pageNo-1);
  }

  return (
      <div className='movies-Container' >
         <Divider/>
        <div className='movies-title'>
          <h1>Trending Movies</h1>
        </div>
        <FloatButton icon={<UpOutlined />} onClick={()=>{ window.scrollTo({ top: 0, behavior: 'smooth' });}}>Go to Top </FloatButton>
        <div className='movies-Container-box'>
          {
          movies.map((movie,index)=>{
            return(
                <MovieCard key={index} movie={movie}  isAddedtoWatchlistFlag={isAddedtoWatchlist(movie)} />
                )    
          })
          }  
        </div>
        
        <Pagination pageNo={pageNo} setPageNo={setPageNo} handleNext={handleNext} handlePrevious={handlePrevious}/>
      </div>
  )
}

export default Movies