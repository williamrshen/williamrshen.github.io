import './About.css'
import me from '../../assets/lobster.jpg'
import resume from '../../assets/Resume.pdf'
import { FaCube, FaTableTennis } from 'react-icons/fa'
import { LuBlocks, LuPickaxe } from 'react-icons/lu'

const currentItems = [
  'computational mathematics specialization',
  'combinatorics & optimization minor',
  'building personal projects',
]

const hobbyCards = [
  {
    Icon: FaCube,
    title: 'Speedcubing',
    detail: '3×3 stats, comp history, and notes',
  },
  {
    Icon: FaTableTennis,
    title: 'Table Tennis',
    detail: 'ratings, match history, and reflections',
  },
  {
    Icon: LuPickaxe,
    title: 'MCSR',
    detail: 'ranked stats, runs, and guides',
  },
  {
    Icon: LuBlocks,
    title: 'TETR.IO',
    detail: 'league profile, sprints, and stats',
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
            systems, games, and tiny optimizations — especially when there is room to build,
            compete, or improve at something over time.
          </p>

          <div className="about-currently">
            <p>currently</p>
            <ul>
              {currentItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-actions" aria-label="About links">
            <a href={resume} className="about-action about-action--primary" download="William Shen - Resume">
              resume ↗
            </a>
            <a href="/#portfolio" className="about-action">
              works →
            </a>
            <a href="/hobbies" className="about-action">
              hobbies →
            </a>
            <a href="/#contact" className="about-action">
              contact →
            </a>
          </div>
        </div>

        <div className="about-hobby-strip" aria-label="Outside of school">
          <div className="about-strip-heading">
            <p>outside of school</p>
            <h3>hobbies</h3>
          </div>
          <div className="about-hobby-grid">
            {hobbyCards.map(({ Icon, title, detail }) => (
              <a key={title} href="/hobbies" className="about-hobby-card">
                <Icon className="about-hobby-icon" />
                <span className="about-hobby-title">{title}</span>
                <span className="about-hobby-detail">{detail}</span>
                <span className="about-hobby-link">explore →</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
