import React from 'react'

import { PolaroidCard } from './PolaroidCard'
import '../pageStyles.css'

export const Polaroid = () => {
  return (
    <>
      <main className='polaroid-page-container'>
        <div className='polaroid-page-film'>
          <PolaroidCard />
        </div>
      </main>
    </>
  )
}