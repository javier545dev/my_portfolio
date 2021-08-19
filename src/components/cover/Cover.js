import React from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.mp4'
import Typical from 'react-typical'

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>
        Javier
        <span className="ln"> Fuentes</span>
      </h1>
      <p>
        I am a
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            ' <Developer/>',
            2000,
            ' <Designer/>',
            2000,
            ' <Musician/>',
            2000
          ]}
        />
      </p>
    </div>
  )
}

export default Cover
