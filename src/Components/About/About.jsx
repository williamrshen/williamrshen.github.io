import React, { useState } from 'react'
import './About.css'
import me from '../../assets/lobster.jpg'
import { FaChevronDown } from 'react-icons/fa'
import { about_rows } from '../../assets/mywork_data'

const About = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>about me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={me} alt="william shen" />
        </div>
        <div className="about-right">
          <div className="accordion">
            {about_rows.map(({ Icon, label, stat, detail, link, linkLabel }, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={label}
                  className={`accordion-row${isOpen ? ' accordion-row--open' : ''}${i === 0 ? ' accordion-row--intro' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="accordion-header">
                    <Icon className="accordion-icon" />
                    <span className="accordion-name">{label}</span>
                    <span className="accordion-stat">{stat}</span>
                    <FaChevronDown className="accordion-chevron" />
                  </div>
                  <div className={`accordion-body${isOpen ? ' accordion-body--open' : ''}`} aria-hidden={!isOpen}>
                    <div className="accordion-body-inner">
                      <p>{detail}</p>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className="accordion-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {linkLabel} ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
