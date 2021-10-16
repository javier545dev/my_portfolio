import React from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.gif'
import Typewriter from 'typewriter-effect'

const Cover = () => {
  return (
    <div className="cover-container">
      <img className="video" alt="video cover" src={coverVideo} />
      <div className="title">
        <div className="glitch" data-text="Javier">
          Javier
        </div>
        <div className="glow">Javier</div>
      </div>

      <div>
        <div className="glitch" data-text="Fuentes">
          Fuentes
        </div>
        <div className="glow">Fuentes</div>
      </div>
      <p>
        I am a
        <Typewriter
          options={{
            strings: ['Developer', 'Designer', 'Musician'],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 100
          }}
        />
      </p>
      <div className="cover-sns">
        <div className="cover-links">
          <a
            href="https://www.linkedin.com/in/javier545dev/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin1"></i>
          </a>
          <a
            href="https://www.facebook.com/javier545"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook facebook1"></i>
          </a>
          <a href="https://twitter.com/Jav545" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter1"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cover
