import React from "react";

const VideCart = ({video}) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <video width={320} height={240} controls src={video} onPlay></video>
        <h1 className="text-3xl font-semibold">Video title</h1>
        <p className="">
          Short description. Nullam id dolor id nibh ultricies vehicula ut id
          elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        </p>
      </div>
    </div>
  );
};

export default VideCart;
