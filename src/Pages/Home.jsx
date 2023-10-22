import React from 'react'
import './pageStyles.css'
import { Hero } from '../Components/Hero'
import { Film } from '../Components/Film'

export const Home = () => {
    return (
        <div className='app-container'>
            <Hero />
            <Film />
        </div>
    );
}