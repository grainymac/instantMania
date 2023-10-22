import React from 'react'
import { Link } from 'react-router-dom'
import { PolaroidHero } from '../Components/PolaroidHero'
import { PolaroidCard } from '../Components/PolaroidCard'

export const Polaroid = () => {
  return (
    <>
      <main className='polaroid-page-container'>
        <PolaroidHero />
        <Link className='gallery-link' to='/polaroidgallery'>Gallery</Link>
        <div className='polaroid-page-film'>
          <PolaroidCard />
        </div>
      </main>
    </>
  )
}