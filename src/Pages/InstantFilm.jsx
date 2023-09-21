import React from 'react'
import './pageStyles.css'
import { InstantHero } from '../Components/InstantHero'
import { InstantCard } from '../Components/InstantCard'

export const InstantFilm = () => {
  return (
      <div className='instant-container'>
        <InstantHero />
        <div className='instantCard-container'>
          <InstantCard />
        </div>
      </div>
  )
}

