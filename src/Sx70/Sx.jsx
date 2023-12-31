import React from 'react'
import { Sx70Hero } from './Sx70Hero'
import { Sx70Card } from './Sx70Card'
import './sx70.css'

export const Sx = () => {
  return (
    <>
      <Sx70Hero />
      {/* <h1 className='sx-header'>Polaroid sx70 Film & Frames</h1> */}
      <div className='sx-page-container'>
        <div className='sx-page-film'>
          <Sx70Card />
        </div>
      </div>
    </>
  )
}