import goHero from './assets/goHero.png'

export const GoHero = () => {
    return (
        <>
            <div className="hero-container">
                <img src={goHero} className="hero-image" alt='hero' />
            </div>
        </>
    )
}