import React, { useEffect, useState } from 'react'

import { jokes } from '../jokeData'

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
                {randomJoke}
                <button className='newJoke-button' onClick={handleNewJokeClick}>+</button>
            </div>
        </>
    )
}