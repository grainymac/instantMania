import React from 'react'
import './About.css'
import { Footer } from '../../Components/Footer'

export const About = () => {
  return (
    <div className='about-page'>
      <main className='about-container'>
        <h1 className='about-title'>About InstantMania</h1>
        <p>
        Welcome to InstantMania, your ultimate destination for all things instant photography and Polaroid enthusiasts. Whether you're a seasoned pro or just starting your journey into the captivating world of instant film, InstantMania is your go-to hub for exploring, discovering, and learning more about different film types and film frames.
        </p>

        <h2 className='about-subtitle'>What InstantMania Hopes to Accomplish:</h2>
        <ul>
          <li>
          <b>Film Exploration:</b> Dive into a treasure trove of information about a wide variety of instant film types, from classic Polaroid to modern alternatives. Discover the unique characteristics, color palettes, and effects of each film type, helping you choose the perfect one for your next photo project.
          </li>

          <li>
          <b>Frame Your Memories:</b> Explore the world of instant film frames. Learn about different frame styles and their impact on the overall look of your photographs. Whether you're aiming for a vintage, retro feel or a modern, minimalistic look, we've got you covered.
          </li>

          <li>
          <b>Community Connection:</b> Connect with a passionate community of instant photography enthusiasts. Share your own creations, seek advice, and engage with fellow photographers who share your love for instant film.
          </li>

          <li>
          <b>Inspiration Galore:</b> Be inspired by a curated collection of stunning instant photography from other photographers around the world. Discover new techniques, projects, and trends that will ignite your creative spark.
          </li>

          <li>
          <b>Educational Resources:</b> Access in-depth articles, tutorials, and guides that will help you enhance your photography skills, master your instant camera, and achieve the best results with your chosen film and frames.
          </li>
        </ul>

        <h2 className='about-subtitle'>Why InstantMania</h2>
          <p>
          We created InstantMania because we understand the unique charm of instant photography and the desire to explore it further. In a world where digital reigns supreme, we celebrate the tangible, the immediate, and the one-of-a-kind beauty that instant film offers. Our mission is to foster a thriving community of like-minded individuals and help you make the most of your instant photography journey.

          So, whether you're an experienced instant photographer or a complete novice, InstantMania is here to fuel your passion, spark your creativity, and help you embark on an unforgettable journey through the world of instant film.

          Join us today and let's embark on an instant photographic adventure together!
          </p>
      </main>
      <Footer />
    </div>
  )
}
