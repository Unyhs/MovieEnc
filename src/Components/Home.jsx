import React,{useEffect} from 'react'
import Banner from './Banner'
import Movies from './Movies'


const Home = () => {

  useEffect(()=>{
    const active=document.getElementById("home");
    active.classList.add("active");

    return()=>{
      active.classList.remove("active");
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