import React from 'react'
import { SpectraHero } from './SpectraHero'
import { SpectraCard } from './SpectraCard'
import './spectra.css'

export const Spectra = () => {
  return (
    <>
      <SpectraHero />
      <div className='spectra-page-container'>
        <div className='spectra-page-film'>
          <SpectraCard />
        </div>
      </div>
    </>
  )
}