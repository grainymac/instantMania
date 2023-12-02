import newsHero from './assets/newshero.png'
import './News.css'

export const NewsHero = () => {
    return (
        <>
            <div className="news-hero-container">
                <img src={newsHero} className="news-hero" alt='hero' />
            </div>
        </>
    )
}