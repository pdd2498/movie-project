import React, { useEffect, useState } from 'react'
import Todo from '../Todo'
import UseStore from '../UseStore'
import Nave from './Nave'
import { apiCall}  from '../apicall/apiCall'
import axios from 'axios'
import Card from './Card'
import ReactSimplyCarousel from 'react-simply-carousel';
import MovieSlide from './MovieSlide'
import { NavLink } from 'react-router-dom'


export default function Home() {
  const [input , setInput] = useState('');
  return (
    <div>
        <Nave />

      <div className='searchBar'>
      <img style={{
        opacity:'0.4'
      }} className='mimg' src="https://image.tmdb.org/t/p/original/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg" alt="" />
      </div>
      <div className='searchText'>
          <h1 style={{
            fontSize: '7rem',
            fontWeight: '800',
          }}>Welocme</h1>
          <span style={{
            fontSize:'xx-large',
          }}>Millions of movies, TV shows and people to discover. Explore now.</span>
          <div style={{
            marginTop:'3rem',
          }}>
            <input type="text" className='inputBox' onChange={(e) => setInput(e.target.value)} value={input}/>
            <NavLink to={`/searchpage/${input}`}>
                <button className='button'>Search</button>
            </NavLink> 
          </div>
      </div>
      <div className='uper'></div>
      <MovieSlide apiLink={'https://api.themoviedb.org/3/trending/'} name={"Trending"} typ = "day" show = "Movie" show2 = "TV_Show"/>
      <MovieSlide apiLink={'https://api.themoviedb.org/3/'} name={"What's Popular"} typ = "popular" show = "Movie" show2 = "TV_Show"/>
      <MovieSlide apiLink={'https://api.themoviedb.org/3/'} name={"Top Rated"} typ = "top_rated" show = "Movie" show2 = "TV-Show"/>

    </div>
  )
}
