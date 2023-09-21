import newsHero from '../assets/newsHero.png'

export const NewsHero = () => {
    return (
        <>
            <div className="hero-container">
                <img src={newsHero} className="hero-image" alt='hero' />
            </div>
        </>
    )
}