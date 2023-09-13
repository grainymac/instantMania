import React, { useEffect, useState } from 'react'

import { jokes } from '../jokeData'

import flash from '../assets/flash.gif'

export const JokeBar = () => {
    const [randomJoke, setRandomJoke] = useState('')

    const getRandomJoke = () => {
        const randomIndex = Math.floor(Math.random() * jokes.length)
        return jokes[randomIndex].joke
    }

    const handleNewJokeClick = () => {
        setRandomJoke(getRandomJoke())
    }

    useEffect(() => {
        setRandomJoke(getRandomJoke())
    }, [])

    return (
        <>
            <div className='joke-container'>
                <div>{randomJoke}</div>
                <button className='newJoke-button' onClick={handleNewJokeClick}>
                    <img src={flash} className='flash-icon' alt='flash' />
                </button>
            </div>
        </>
    )
}
