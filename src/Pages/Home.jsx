import React from 'react'
import './pageStyles.css'

import { Hero } from '../Components/Hero'
import { Footer } from '../Components/Footer'
import { Film } from '../Components/Film'

export const Home = () => {
    return (
        <div className='app-container'>
            <Hero />
            <Film />
            <Footer />
        </div>
    );
}