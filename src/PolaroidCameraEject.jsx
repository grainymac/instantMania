import React from 'react'
import './PolaroidCameraEject.css'

const PolaroidCameraEject = () => {
    return (
        <main className='main-polaroid'>
            <div className='polaroid-camera'>
                <button className='polaroid-button'></button>
                <div className='polaroid-circle'></div>
                <div className='polaroid-lens'>
                    <div className='polaroid-lens-reflection'></div>
                </div>
            </div>
        </main>
    )
}

export default PolaroidCameraEject