import React from 'react'
import './Development.css'

export const Development = () => {
    return (
        <>
            <main className='dev-container'>
            <h1 className='dev-title'>instantMania was developed using:</h1>
            <div className='frontend-container'>
                <label>Frontend</label>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>

            <div className='dev-container'>
            <label>Project & Task Management</label>
                <ul>
                    <li>Trello</li>
                    <li>GitHub</li>
                </ul>
            </div>

            <div className='dev-container'>
            <label>Designs</label>
                <ul>
                    <li>Canva</li>
                    <li>Photoshop</li>
                </ul>
            </div>
            </main>
        </>
    )
}
