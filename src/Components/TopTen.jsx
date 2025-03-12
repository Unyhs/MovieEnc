import { Card, Row, Col, Tag, Divider} from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { genreids } from '../assets/data'

function TopTen() {
  const [movieArr,setMovieArr]=useState([]);

  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=47861ded497504804136dd8fb54aa932&language=en-US&page=1')
    .then(response=>{
      setMovieArr(response.data.results)
      console.log(response.data.results)
    })
    .catch(err=>{console.log(err)})
  },[])

  const getColors=()=>{
    const colors=['magenta','green','blue','red','volcano','orange']
    return colors[Math.floor(Math.random() * 6)]
  }

  return (
    <div className='topTen-container'>
      <div className='topTen-container-box'>
      <Row align="bottom" gutter={[16,24]}>
        {
          movieArr.map((movie,index)=>(
            <Col key={index}
            xs={24}
            sm={12}
            md={6}>
              <div className="card">
                <div className="card-header">
                  <span>{movie.title}</span>
                  <Divider className='m-2'></Divider>
                </div>
                <div className="card-main">
                  {movie.genre_ids.map((ele,idx)=>
                  (<Tag 
                    key={idx}
                    color={getColors()}>{genreids[ele]}</Tag>))
                  }
                </div>
                <div className="footer">Ratings: {movie.vote_average}</div>
              </div>
            
            </Col>
          ))
        }
      </Row>
      </div>
    </div>
  )
}

export default TopTen