import React from 'react'
import './Nav.css'

const Nav = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className="header">
      <nav className={`navbar ${isScrolling > 20 ? 'scrolling' : null}`}>
        <div className="navbar-logo" onClick={toTheTop}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.98438 0H10.4297V11.8125C10.4297 13.4688 9.96875 14.7969 9.04688 15.7969C8.125 16.7969 6.9375 17 5.48438 17C3.92188 17 2.70703 16.832 1.83984 15.9023C0.972656 14.9727 0.539062 13.6797 0.539062 12.0234H3.99609C3.99609 13.6328 4.49219 14.4375 5.48438 14.4375C6.48438 14.4375 6.98438 13.5078 6.98438 11.6484V0Z"
              fill="white"
            />
            <path
              d="M17.8008 10.1016H12.4453V17.0625H9V0H18.4453V2.87109H12.4453V7.24219H17.8008V10.1016Z"
              fill="#DB00FF"
            />
          </svg>
        </div>
      </nav>
    </div>
  )
}

export default Nav
