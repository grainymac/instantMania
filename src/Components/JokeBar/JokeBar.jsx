import React from 'react'
import pola from './assets/polaroid.svg'
import './JokeBar.css'

export const JokeBar = () => {
    /*
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
    */

    return (
        <>
            <div className='joke-container'>
                <div className='joke-text-container'>
                    <p className='joke-text'></p>
                </div>
                <button className='newJoke-button'>
                    <img src={pola} alt='pola button' className='pola-button'/>
                </button>
            </div>
        </>
    )
}
