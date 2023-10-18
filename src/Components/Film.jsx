import React from 'react'
import '../Pages/pageStyles.css'
import { Link } from 'react-router-dom'

export const Film = () => {
    return (
        <>
            <div className='film-container'>
                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/polaroid' className='nav-links'><img src='https://images.pexels.com/photos/3945344/pexels-photo-3945344.jpeg?auto=compress&cs=tinysrgb&w=400' className='polaroid-six polaroids' alt='polaroid 600' />
                        <div className='content-details'>
                            <h3>600 Film</h3>
                        </div>
                    </Link>
                </div>

                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/itype' className='nav-links'>
                        <img src='https://images.pexels.com/photos/3779497/pexels-photo-3779497.jpeg?auto=compress&cs=tinysrgb&w=400' className='polaroid-itype polaroids' alt='polaroid itype' />
                        <div className='content-details'>
                            <h3>I-Type Film</h3>
                        </div>
                    </Link>
                </div>

                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/go' className='nav-links'>
                        <img src='https://i5.walmartimages.com/asr/54b1a29c-2086-4768-956e-bd9fad391e54.7ebbcfdb8294de77a92bac7c8e8383ad.jpeg' className='polaroid-go polaroids' alt='polaroid go' />
                        <div className='content-details'>
                            <h3>Go Film</h3>
                        </div>
                    </Link>
                </div>

                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/sx' className='nav-links'>
                        <img src='https://www.acmebrooklyn.com/wp-content/uploads/2020/09/VC065-alt-852x1280.jpg' className='polaroid-sx polaroids' alt='polaroid sx70' />
                        <div className='content-details'>
                            <h3>SX-70 Film</h3>
                        </div>
                    </Link>
                </div>

                <div className='content'>
                    <div className='content-overlay'></div>
                    <Link to='/spectra' className='nav-links'>
                        <img src='https://retrospekt.com/cdn/shop/articles/3C1B9BA3-D932-4A50-A317-3746515A7999.JPG?crop=center&height=1200&v=1570055259&width=1200' className='polaroid-spectra polaroids' alt='polaroid spectra' />
                        <div className='content-details'>
                            <h3>Spectra Film</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}