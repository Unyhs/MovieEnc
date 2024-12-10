import React from 'react'
import { Link } from 'react-router-dom'
import Watchlist from './Watchlist'
import Home from './Home'
import {HomeTwoTone,VideoCameraFilled} from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='flex justify-center space-x-8 fixed top-0 z-10 bg-gray-800 w-full py-4 opacity-90'>
      <div className='flex justify-center w-[80vw]'>
      <span>
      <Link to="/"
        className='text-pink-500 text-3xl font-bold opacity-100'>
        <span>MovieEnc <VideoCameraFilled /></span>
      </Link>
      </span> 
      </div>

    </div>
  )
}

export default Navbar