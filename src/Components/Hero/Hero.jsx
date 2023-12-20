import React, { useState } from 'react'
import './Hero.css'

const heroImages = [
    'https://images.pexels.com/photos/3419719/pexels-photo-3419719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4340919/pexels-photo-4340919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1071816/pexels-photo-1071816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1655309/pexels-photo-1655309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2780553/pexels-photo-2780553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2119598/pexels-photo-2119598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3417667/pexels-photo-3417667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2983398/pexels-photo-2983398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3839767/pexels-photo-3839767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2961978/pexels-photo-2961978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3945348/pexels-photo-3945348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2567984/pexels-photo-2567984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
]

export const Hero = () => {

    const [currentImage, setCurrentImage] = useState(0)

    const totalSlides = heroImages.length

    const next = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % totalSlides)
    }

    const previous = () => {
        setCurrentImage((prevImage) => (prevImage - 1 + totalSlides) % totalSlides)
    }

    return (
        <>
            <div className="hero-container">
                <img src={heroImages[currentImage]} className="hero-image" alt={`hero-${currentImage}`} />
                <div className="carousel-controls">
                    <button onClick={previous}>←</button>
                    <button onClick={next}>→</button>
                </div>
            </div>
        </>
    )
}