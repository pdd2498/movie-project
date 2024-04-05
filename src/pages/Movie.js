import Nave from './Nave'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

export default function Movie() {

  const [movies , setMovies] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzJlOGJjMGUxNzhkOTQzZTljNzc5N2I1ZTRiNDU4MSIsInN1YiI6IjY2MGU2N2Q1ZDZkYmJhMDE2MzcwZTU0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGgCe_BELYCrTju2dBel26b8WLi9DUN_xwaSGmWgDVA'
    }
  };
  
  const api = ()=>{
    axios
    .request(options)
    .then(function (response) {
      setMovies(response.data.results)
      console.log(response.data);
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
      backgroundColor:'#04152d'
    }}>
      <Nave/>

      <div className='main-pag'>
          <h1 >Explore Movies</h1>
          <div className='hero'>
              {
                movies.map((e , indx)=>{
                  return(
                    <div >
                      <Card imageUrl = {`https://image.tmdb.org/t/p/original/${e.poster_path}`}  e = {e} name = {e.original_title} date = {e.title}/>
                    </div>
                  )
                })
              }
          </div>
           
      </div>
        
    </div>
  )
}
