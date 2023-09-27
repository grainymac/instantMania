import React from 'react'
import { SpectraHero } from '../Spectra/SpectraHero'
import { SpectraCard } from '../Spectra/SpectraCard'

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