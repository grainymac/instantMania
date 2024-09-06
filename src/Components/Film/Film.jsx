import React from 'react'
import './Film.css'
import { Link } from 'react-router-dom'

export const Film = () => {
    return (
        <>
            <div className='film-container'>
                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/polaroid' className='nav-links'><img src='https://images.pexels.com/photos/105040/pexels-photo-105040.jpeg?auto=compress&cs=tinysrgb&w=1600' className='polaroid-six polaroids' alt='polaroid 600' />
                        <div className='content-details'>
                            <h3>600 Film</h3>
                        </div>
                    </Link>
                </div>

                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/itype' className='nav-links'>
                        <img src='https://images.pexels.com/photos/1655309/pexels-photo-1655309.jpeg?auto=compress&cs=tinysrgb&w=1600' className='polaroid-itype polaroids' alt='polaroid itype' />
                        <div className='content-details'>
                            <h3>I-Type Film</h3>
                        </div>
                    </Link>
                </div>

                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/go' className='nav-links'>
                        <img src='https://imgix.bustle.com/uploads/image/2021/5/7/5bef6e2b-c7a0-4fbd-8177-e24d34c309db-polaroid-go-review-8.jpg?w=2000&h=1090&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.5613333333333334&fp-y=0.528&blend=000000&blendAlpha=45&blendMode=normal' className='polaroid-go polaroids' alt='polaroid go' />
                        <div className='content-details'>
                            <h3>Go Film</h3>
                        </div>
                    </Link>
                </div>

                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/sx' className='nav-links'>
                        <img src='https://hackaday.com/wp-content/uploads/2019/06/pi-sx70-featured.jpg?w=800' className='polaroid-sx polaroids' alt='polaroid sx70' />
                        <div className='content-details'>
                            <h3>SX-70 Film</h3>
                        </div>
                    </Link>
                </div>

                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/spectra' className='nav-links'>
                        <img src='https://casualphotophile.com/wp-content/uploads/2017/09/Minolta-Instant-Pro-product-shots-4.jpg' className='polaroid-spectra polaroids' alt='polaroid spectra' />
                        <div className='content-details'>
                            <h3>Spectra Film</h3>
                        </div>
                    </Link>
                </div>
                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/instax' className='nav-links'>
                        <img src='https://cdn.thewirecutter.com/wp-content/media/2023/10/instantcameras-2048px-02050-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp' className='instax' alt='instax' />
                        <div className='content-details'>
                            <h3>Instax Film</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}