import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3 className="contact">Contact Me</h3>
        <p>And let get dowm to work</p>
      </div>
      <div className="footer-sns1">
        <div className="design-by">Design for me XD</div>
        <div className="sns-links">
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
    </footer>
  )
}

export default Footer
