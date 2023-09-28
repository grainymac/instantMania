import React from 'react'
import { SpectraHero } from './SpectraHero'
import { SpectraCard } from './SpectraCard'

export const Spectra = () => {
  return (
    <div className='spectra-page-container'>
      <SpectraHero />
      <div className='spectra-page-film'>
        <SpectraCard />
      </div>
    </div>
  )
}