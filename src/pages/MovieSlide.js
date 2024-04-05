import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import ReactSimplyCarousel from 'react-simply-carousel';

export default function MovieSlide({apiLink , name}) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const [movies , setMovies] = useState([]);

  const options = {
    method: 'GET',
    url: apiLink,
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
    <div className='slidBox'>
      <h1 className='heding'>{name}</h1>

      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 5,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {
        movies.map((e , indx)=>{
          return(
            <div >
              <Card imageUrl = {`https://image.tmdb.org/t/p/original/${e.poster_path}`}  e = {e} name = {e.original_title} date = {e.title}/>
            </div>
          )
        })
      }
      </ReactSimplyCarousel>
    </div>
  )
}
