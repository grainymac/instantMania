import React from 'react'
import { Link } from 'react-router-dom'
import { Sx70Hero } from './Sx70Hero'
import { Sx70Card } from './Sx70Card'
import './sx70.css'

export const Sx = () => {
  return (
    <div className='sx-page-container'>
    <Sx70Hero />
    <Link className='gallery-link' to='/sx70gallery'>Gallery</Link>
    <div className='sx-page-film'>
      <Sx70Card />
    </div>
  </div>
  )
}