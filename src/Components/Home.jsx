import React from 'react'
import Banner from './Banner'
import Movies from './Movies'

const Home = () => {

  return (
    <div className='flex flex-col items-center'>
      <Banner />
      <Movies />
    </div>
  )
}

export default Home