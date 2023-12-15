import React from 'react'
import './instantFilm.css'
import { InstantHero } from './InstantHero'
import { InstantCard } from './InstantCard'
import { Footer } from '../../Components/Footer'

export const InstantFilm = () => {
  return (
    <>
      <div className='instant-film-container'>
        <div className='instant-card-film-container'>
          <InstantCard />
        </div>
      </div>
      <Footer />
    </>
  )
}

