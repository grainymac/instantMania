import hero from '../assets/instantmania.png'

export const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <img src={hero} className="hero-image" alt='hero' />
            </div>
        </>
    )
}