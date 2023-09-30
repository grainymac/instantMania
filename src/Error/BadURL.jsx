import React from 'react'
import { Link } from 'react-router-dom'
import './error.css'

export const BadURL = () => {
  return (
    <div className='badURL-container' id='blog'>
        <h2 className='badUrl-title'>You are on the wrong page!<p>Please click the button below to go back home.</p></h2>
        <Link to='/'><button className='homeButton'>HOME</button></Link>
    </div>
)
}