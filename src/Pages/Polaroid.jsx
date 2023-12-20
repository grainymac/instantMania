import React from 'react'
import { PolaroidHero } from '../Components/PolaroidHero'
import { PolaroidCard } from '../Components/PolaroidCard'
import './pageStyles.css'

export const Polaroid = () => {
  return (
    <>
      <PolaroidHero />
      <main className='polaroid-page-container'>
        <div className='polaroid-page-film'>
          <PolaroidCard />
        </div>
      </main>
    </>
  )
}