import React from 'react'
import { Link } from 'react-router-dom'
import {VideoCameraFilled} from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-menu'>
        <div className='logo'>
          <Link to="/">
            <span id='logo'>MovieEnc <VideoCameraFilled /></span>
          </Link>
        </div>

        <div className='flex Navbar-items'>
          <div>
            <Link to='/topten'>
            <span id='topten'>TOP 20</span>
            </Link>
          </div>

          <div>
            <Link to='/watchlist'>
          <span id='watchlist'>My Watchlist</span>
            </Link>
          </div>
          </div>
      </div>

    </div>
  )
}

export default Navbar