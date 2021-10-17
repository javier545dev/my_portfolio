import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import { slidesToShowPlugin, autoplayPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import './Slider.css'
import Slides from './Slides'

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>
      <Carousel
        plugins={[
          'arrows',
          'infinite',
          'centered',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3
            }
          },
          {
            resolve: autoplayPlugin,
            options: {
              interval: 2000
            }
          }
        ]}
        animationSpeed={1000}
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            itemWidth: 250
          }
        }}
      />
    </div>
  )
}

export default Slider
