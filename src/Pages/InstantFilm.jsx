import React from 'react'
import instantHero from '../assets/instantHero.png'
import { InstantCard } from '../Components/InstantCard'

export const InstantFilm = () => {
  return (
      <div className='instant-container'>
        <div className='instant-hero'>
          <img src={instantHero} alt='instant hero' className='instant-hero-image' />
        </div>
        <div className='instantCard-container'>
          <InstantCard />
        </div>
      </div>
  )
}

