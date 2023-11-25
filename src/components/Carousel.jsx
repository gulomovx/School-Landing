import React from 'react'
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import VideCart from './VideCart';
// import video from "../../public/video.mp4";
// import video1 from "../../public/video1.mp4";
// import video2 from "../../public/video2.mp4";


const Carousel = () => {
  return (
      <div className="w-full mx-auto mt-8">
          <div className="flex justify-between items-center">
              <div className="">
                  <CiCircleChevLeft size={30}/>
              </div>
              <div className="flex gap-4">
                  <VideCart video={video}/>
                  <VideCart video={video1}/>
                  <VideCart video={video2}/>
              </div>
              <div className="">
                  <CiCircleChevRight size={30}/>
              </div>
          </div>
    </div>
  )
}

export default Carousel