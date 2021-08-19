import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          expedita vero, sit cum dolor quidem amet nisi! Repellat voluptate esse
          quaerat nostrum ad sapiente voluptas, natus quod. Aliquam, similique
          exercitationem.
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
