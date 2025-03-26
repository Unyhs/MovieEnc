import React, { useEffect, useState,useContext } from 'react'
import { genreids } from '../assets/data'
import { MovieContext } from '../context/MovieContext';
import { ConfigProvider, Table,Tag, Popover} from 'antd';
import { IoMdClose } from "react-icons/io";

const Watchlist = () => 
{
  const { watchlist, setWatchlist, addToWatchlist, removeFromWatchlist } =useContext(MovieContext);
  window.scrollTo({ top: 0, behavior: 'smooth' });

   useEffect(()=>{
        const active=document.getElementById("watchlist");
        active.classList.add("active");
    
        return()=>{
          active.classList.remove("active");
        }
      },[])

  const getColors=()=>{
    const colors=['magenta','green','blue','red','volcano','orange']
    return colors[Math.floor(Math.random() * 6)]
  }

  const columns=[
    //Movie Thumbnail
    {title:'Movie',dataIndex:'backdrop_path',render:((text,data)=>
      <div className='flex items-center gap-5'>
      <img className='watchlist-thumbnail' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt='Movie Poster' />
      <span>{data.title}</span>
      </div>)},
    
    //Movie Genres
    {title:'Genres',dataIndex:'genre_ids',render:((text,data)=>
    <div>
      {data.genre_ids.map((ele,idx)=>
                  (<Tag 
                    key={idx}
                    style={{
                      backgroundColor:'inherit',
                    }}
                    color={getColors()}>{genreids[ele]}
                    </Tag>))
                  }
    </div>
    )},

    //Movie Rating (Votes)
    {title:'Ratings',dataIndex:'vote_average', render:((text,data)=>
    <div className='watchlist-rating'>
      {Math.round(data.vote_average*100)/100} ({data.vote_count})
    </div>)},

    //Remove from Watchlist action
    {render:((text,data)=>
      <Popover content={(<span className='removeWatchlistPopover'>Remove from Watchlist</span>)} trigger='hover'>
      <button className='watchlist-button' onClick={()=>removeFromWatchlist(data)}><IoMdClose /></button>
      </Popover>
    )
    }
  ]
  
  return (
    <div className='watchlist-Container'>
      <ConfigProvider 
      theme={{
        token:{
          colorBgContainer:'#212121',
          colorText:'white',
          fontFamily:'Baloo 2',
        }
        }}>
      <Table dataSource={watchlist} columns={columns} className='watchlist-Table' />
      </ConfigProvider>
    </div> 
  );

}
    

export default Watchlist