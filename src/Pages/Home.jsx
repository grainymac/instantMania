import React from 'react'
import './pageStyles.css'

import { JokeBar } from '../Components/JokeBar'
import { NavBar } from '../Components/NavBar'
import { Hero } from '../Components/Hero'
import { Footer } from '../Components/Footer'
import { Film } from '../Components/Film'

export const Home = () => {
    return (
        <div className='app-container'>
            <JokeBar />
            <NavBar />
            <Hero />
            <Film />
            <Footer />
        </div>
    );
}