import React from 'react'

import { PolaroidCard } from '../../Pages/Polaroid/PolaroidCard'
import './SixHundred.css'

export const SixHundred = () => {
  return (
    <>
      <main className='sixHundred-page-container'>
        <div className='polaroid-page-film'>
          <PolaroidCard />
        </div>
      </main>
    </>
  )
}