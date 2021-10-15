import React from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.mp4'
import Typewriter from 'typewriter-effect'
//import Typical from 'react-typical'

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <div>
        <div className="glitch" data-text="JavierFuentes">
          JavierFuentes
        </div>
        <div className="glow">JavierFuentes</div>
      </div>

      <p>
        I am a
        <Typewriter
          options={{
            strings: ['Developer', 'Designer', 'Creative'],
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
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/javier545"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook facebook"></i>
          </a>
          <a href="https://twitter.com/Jav545" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cover
