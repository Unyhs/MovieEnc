import React from 'react'
import { Link } from 'react-router-dom'
import {VideoCameraFilled} from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='Navbar bg-gray-800'>
      <div className='Navbar-menu'>
        <div className='logo text-pink-500'>
          <Link to="/">
            <span>MovieEnc <VideoCameraFilled /></span>
          </Link>
        </div>

        <div className='flex Navbar-items'>
          <div className='text-red-500'>
            <Link to='/topten'>
            <span>TOP 20</span>
            </Link>
          </div>

          <div className='text-red-500'>
            <Link to='/watchlist'>
          <span>My Watchlist</span>
            </Link>
          </div>
          </div>
      </div>

    </div>
  )
}

export default Navbar