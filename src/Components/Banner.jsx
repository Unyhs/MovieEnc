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
    <div className='w-[70vw] mt-20 flex justify-center relative'>
      <button className='absolute left-0 inset-y-1/3 p-5 text-2xl' onClick={prevItem}><LeftCircleFilled className='text-pink-600'/></button>
      <div className='w-[70vw] h-[20vh] md:h-[50vh] bg-cover bg-center flex justify-center items-end '
        style={{backgroundImage: `url(${bannerArr[currentItem].url})`}}>
        <div className='text-white w-full text-center text-2xl'>
            {bannerArr[currentItem].title}
        </div>
      </div> 
      <button className='absolute right-0 inset-y-1/3 p-5 text-2xl'  onClick={nextItem}><RightCircleFilled className='text-pink-600'/></button>
    </div>
    
  )
}

export default Banner