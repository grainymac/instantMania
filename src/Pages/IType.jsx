import React from 'react'
import { ItypeHero } from '../iType/ItypeHero'
import { ItypeCard } from '../iType/ItypeCard'

export const IType = () => {
    return (
        <div className='itype-page-container'>
            <ItypeHero />
            <div className='itype-page-film'>
                <ItypeCard />
            </div>
        </div>
    )
}
