import instantHero from './600png'
import './instantFilm.css'

export const InstantHero = () => {
    return (
        <>
            <div className="pola-container">
                <img src={instantHero} className="pola-hero" alt='hero' />
            </div>
        </>
    )
}