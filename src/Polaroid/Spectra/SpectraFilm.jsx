import React from 'react'
import { SpectraCard } from './SpectraCard'
import './Spectra.css'

export const SpectraFilm = () => {
  return (
    <>
      <div className='spectra-page-container'>
        <div className='spectra-page-film'>
          <SpectraCard />
        </div>
      </div>
    </>
  )
}