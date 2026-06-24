import './About.css'
import me from '../../assets/lobster.jpg'
import { FaCube, FaTableTennis } from 'react-icons/fa'
import { LuBlocks, LuPickaxe } from 'react-icons/lu'

const currentItems = [
  'computational mathematics specialization',
  'combinatorics & optimization minor',
  'working at Geotab as a Software Development Intern',
  `reading through the book of Galatians`,
]

const hobbyCards = [
  {
    Icon: FaCube,
    title: 'Speedcubing',
  },
  {
    Icon: FaTableTennis,
    title: 'Table Tennis',
  },
  {
    Icon: LuPickaxe,
    title: 'MCSR',
  },
  {
    Icon: LuBlocks,
    title: 'TETR.IO',
  },
]

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>about me</h1>
      </div>

      <div className="about-editorial">
        <div className="about-photo-card">
          <img src={me} alt="william shen" />
        </div>

        <div className="about-bio-card">
          <p className="about-kicker">aka uselessleaf</p>
          <h2>hi, i'm william.</h2>
          <p className="about-bio-text">
            i'm a third year mathematics student at the university of waterloo. i like algorithms,
            games, and learning! always excited to eat food, chat about random topics, and go on adventures
          </p>

          <div className="about-currently">
            <p>currently</p>
            <ul>
              {currentItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        <div className="about-hobby-strip" aria-label="Outside of school">
          <div className="about-strip-heading">
            <p>outside of school</p>
            <h3>explore my hobbies</h3>
          </div>
          <div className="about-hobby-grid">
            {hobbyCards.map(({ Icon, title }) => (
              <a key={title} href="/hobbies" className="about-hobby-card">
                <Icon className="about-hobby-icon" />
                <span className="about-hobby-title">{title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
