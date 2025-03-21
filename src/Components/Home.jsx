import React,{useEffect} from 'react'
import Banner from './Banner'
import Movies from './Movies'


const Home = () => {

  useEffect(()=>{
    const active=document.getElementById("logo");
    active.classList.add("logoactive");

    return()=>{
      active.classList.remove("logoactive");
    }
  },[])

  return (
    <div className='home-Container flex flex-col items-center'>
      <Banner />
      <Movies />
    </div>
  )
}

export default Home