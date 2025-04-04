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
        <Divider style={{margin:'8px',color:'#db2777'}}/>

        <div className='flex Navbar-items'>

            <Link to="/">
            <span id='home' className='Navbar-items-span'>HOME</span>
            </Link>

            <Link to='/topten'>
            <span id='topten' className='Navbar-items-span'>TOP 20</span>
            </Link>
          
            <Link to='/watchlist'>
            <span id='watchlist' className='Navbar-items-span'>MY WATCHLIST</span>
            </Link> 
        </div>
      </div>

    </div>
  )
}

export default Navbar