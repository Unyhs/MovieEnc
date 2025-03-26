import React from 'react'
import { Link } from 'react-router-dom'
import {VideoCameraFilled} from '@ant-design/icons'
import {Divider} from 'antd'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar-menu'>
        <div className='logo'>
          <Link to="/">
            <span >MovieEnc <VideoCameraFilled /></span>
          </Link>
        </div>
        <Divider style={{margin:'8px',width:'0%'}}/>

        <div className='flex Navbar-items'>

            <Link to="/">
            <span id='home'>HOME</span>
            </Link>

            <Link to='/topten'>
            <span id='topten'>TOP 20</span>
            </Link>
          
            <Link to='/watchlist'>
            <span id='watchlist'>MY WATCHLIST</span>
            </Link> 
        </div>
      </div>

    </div>
  )
}

export default Navbar