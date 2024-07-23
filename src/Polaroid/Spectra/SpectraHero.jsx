import spectraHero from './assets/spectraHero.png'

export const SpectraHero = () => {
    return (
        <>
            <div className="hero-container">
                <img src={spectraHero} className="hero-image" alt='hero' />
            </div>
        </>
    )
}