import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          Innovative Front End Developer with experience building and
          maintaining responsive websites in the recruiting industry. Proficient
          in HTML, CSS, JavaScript and React; plus modern libraries and
          frameworks. Passionate about usability and possess working knowledge
          of Adobe XD & Figma.
        </p>
      </div>
      <div>
        <img
          className="about-img"
          src="https://cdn.pixabay.com/photo/2017/07/31/11/44/laptop-2557576_960_720.jpg"
          alt="coding"
        />
      </div>
    </div>
  )
}

export default About
