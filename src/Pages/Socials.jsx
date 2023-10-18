import React from 'react'
import './pageStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'



export const Socials = () => {

    return (
        <main className='socials-container'>
            <div className='social-card card0'>
                <div className='social-border'>
                    <h1 className='social-title'>Ian Mac</h1>
                    <div className='social-icons'>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </div>
                </div>
            </div>
        </main>
    )
}