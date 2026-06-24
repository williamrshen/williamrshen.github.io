import './Hero.css'
import hero from '../../assets/water.png'
import resume from "../../assets/Resume.pdf"


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={hero} alt=""></img>
        <h1>hi. i'm <span>william shen</span></h1>
        <h2>aka uselessleaf</h2>
        <p>part time - coder, cuber, athlete, musician, gamer</p>
        
        <div className="hero-action" aria-label="Hero links">
            <a className="hero-btn hero-btn--primary" href="/#portfolio">
                see my works
            </a>
            <a className="hero-btn hero-btn--secondary" href="/hobbies">
                explore hobbies
            </a>
            <a className="hero-btn hero-btn--secondary" href={resume} download="William Shen - Resume">
                resume
            </a>
        </div>
    </div>
  )
}

export default Hero
