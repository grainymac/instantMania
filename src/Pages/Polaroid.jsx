import React from 'react'
import { PolaroidHero } from '../Components/PolaroidHero'
import { PolaroidCard } from '../Components/PolaroidCard'

export const Polaroid = () => {
  return (
    <div className='polaroid-page-container'>
      <PolaroidHero />
      <div className='polaroid-page-film'>
        <PolaroidCard />
      </div>
    </div>
  )
}