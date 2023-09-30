import React from 'react'
import { Link } from 'react-router-dom'
import { SpectraHero } from './SpectraHero'
import { SpectraCard } from './SpectraCard'

export const Spectra = () => {
  return (
    <div className='spectra-page-container'>
      <SpectraHero />
      <Link className='gallery-link' to='/spectragallery'>Gallery</Link>
      <div className='spectra-page-film'>
        <SpectraCard />
      </div>
    </div>
  )
}