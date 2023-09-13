import React from 'react'

import { jokes } from '../jokeData'

export const JokeBar = () => {
    return (
        <>
            <div className='joke-container'>
                {jokes[0].joke}
            </div>
        </>
    )
}