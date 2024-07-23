import sxHero from './assets/sx70Hero.png'
import './sx70.css'

export const Sx70Hero = () => {
    return (
        <>
            <div className="hero-container">
                <img src={sxHero} className="sx-hero" alt='hero' />
            </div>
        </>
    )
}