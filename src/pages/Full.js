import React, { useState } from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import  axios  from 'axios';

export default function Full() {
  const id = useParams()
  const [movie , setMovies] = useState('');


  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id.id}`,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzJlOGJjMGUxNzhkOTQzZTljNzc5N2I1ZTRiNDU4MSIsInN1YiI6IjY2MGU2N2Q1ZDZkYmJhMDE2MzcwZTU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGgCe_BELYCrTju2dBel26b8WLi9DUN_xwaSGmWgDVA'
    }
  };
  
  const api = ()=>{
    axios
    .request(options)
    .then(function (response) {
      setMovies(response.data)
      console.log("full" , movie);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
  useEffect(()=>{
    api()
  },[])


  return (
    <div style={{
      color:'white',
    }}>
       
              <div>
                <div>
                  <div className="cardimg2">
                    <img className='mimg' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="" />
                  </div>
                  <div>
                    <h1>{movie.title}</h1>
                    {
                      movie?.genres?.map((e)=>{
                          return(
                            <span>{e.name}</span>
                          )
                      })
                    }
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                  </div>
                </div>
                <div></div>
              </div>
            
    </div>
  )
}
