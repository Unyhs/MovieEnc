import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios'
import {LeftCircleFilled,RightCircleFilled} from '@ant-design/icons'

const Banner = () => {

  const[bannerArr,setBannerArr]=useState([{url:'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',title:'Movie Name'}])
  const [currentItem,setCurrentItem]=useState(0)

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=47861ded497504804136dd8fb54aa932&language=en-US&page=1').
    then(response=>{

      const barr=response.data.results.map(ele=>{return {url:`https://image.tmdb.org/t/p/original/${ele.backdrop_path}`,title:ele.title}})
      setBannerArr(arr=>barr)
    }).catch(error=>{
      console.log(error)
    })
  },[])

  const nextItem=()=>{
    setCurrentItem((curr)=>(curr===bannerArr.length-1)? 0:curr+1);
  }

  const prevItem=()=>{
    setCurrentItem((curr)=>(curr===0)? bannerArr.length-1:curr-1);
  }

  useEffect(()=>{
    const interval=setInterval(()=>{
      nextItem();
    },3000)

    return ()=>{
      clearInterval(interval)
    }
    },[currentItem])

  return (
    <div className='banner'>
      <button className='arrow left-0' onClick={prevItem}><LeftCircleFilled/></button>
      <div className='bannerBox'
        style={{backgroundImage: `url(${bannerArr[currentItem].url})`}}>
        <div className='bannerBoxText'>
            {bannerArr[currentItem].title}
        </div>
      </div> 
      <button className='arrow right-0' onClick={nextItem}><RightCircleFilled/></button>
    </div>
    
  )
}

export default Banner