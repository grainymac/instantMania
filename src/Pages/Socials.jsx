import React from 'react'
import './pageStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faSquareThreads, faSquareInstagram, faReddit } from '@fortawesome/free-brands-svg-icons'



export const Socials = () => {

    return (
        <main className='socials-container'>
            <div className='social-card card0'>
                <div className='social-border'>
                    <h1 className='social-title'>Ian Mac</h1>
                    <h2 className='social-role'> Creator of InstantMania</h2>
                    <div className='social-icons'>
                        <a className='social-link' rel="noreferrer" target='_blank' href='https://x.com/ianmac__'>
                            <FontAwesomeIcon icon={faXTwitter} />
                        </a>

                        <a className='social-link' rel="noreferrer" target='_blank' href='https://www.threads.net/@___ianmac___'>
                            <FontAwesomeIcon icon={faSquareThreads} />
                        </a>

                        <a className='social-link' rel="noreferrer" target='_blank' href='https://www.instagram.com/___ianmac___/'>
                            <FontAwesomeIcon icon={faSquareInstagram} />
                        </a>

                        <a className='social-link' rel="noreferrer" target='_blank' href='https://www.reddit.com/user/ianmac__'>
                            <FontAwesomeIcon icon={faReddit} />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}