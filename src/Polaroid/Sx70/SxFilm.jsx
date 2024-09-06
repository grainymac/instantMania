import React from 'react'
import { Sx70Card } from './Sx70Card'
import './Sx70.css'

export const SxFilm = () => {
  return (
    <>
      {/* <h1 className='sx-header'>Polaroid sx70 Film & Frames</h1> */}
      <div className='sx-page-container'>
        <div className='sx-page-film'>
          <Sx70Card />
        </div>
      </div>
    </>
  )
}