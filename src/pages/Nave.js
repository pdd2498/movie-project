import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nave() {
  return (
    <div className='flex padding nav'>
        <div>
          <NavLink to='/'>
          <img style={{
            width:'10rem',
          }} src="https://moviex-olive.vercel.app/assets/movix-logo-d720c325.svg" alt="" />
          </NavLink>
        </div>
        <div className='naveSearch'>
          <NavLink to='/movie' >
          <span>Movies</span>
          </NavLink>
          <NavLink to='/tvshow'>
          <span>Tv Shows</span>
          </NavLink>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
