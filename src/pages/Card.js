import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({ imageUrl, e  , name , date}) {
  return (
    <NavLink to={`/full/${e.id}`}>
    <div style={{
        margin:'10px',
    }}>
        <div className="cardimg">
            <img className='mimg' src={imageUrl} alt="" />
        </div>
        <div className='cardDit'>
            <div className='rating'>
                <img className='mimg'  src="https://www.freeiconspng.com/uploads/black-transparent-screens-png-25.png" alt="" />
                <p className='score'>{e.vote_average}</p>
            </div>
            <span className='movieTitle'>{name}</span>
            <p className='date'>{date}</p>
            
        </div>
       
    </div>
    </NavLink>
  )
}
