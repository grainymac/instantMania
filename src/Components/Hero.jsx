import hero from '../assets/hero.png'

export const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <img src={hero} className="hero-image" alt='hero' />
            </div>
        </>
    )
}