import React from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video1 from '../videos/video.mp4'
import video2 from '../videos/video1.mp4'
import video3 from '../videos/video2.mp4'
const videos=[video1, video2, video3]
const SliderVideo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
      {videos.map((video, index) => (
        <div key={index}>
          <video controls width="100%" height="auto">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </Slider>
    </div>
  )
}

export default SliderVideo