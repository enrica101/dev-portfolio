import React from "react";
import Avatar from "./Avatar";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(-50deg, #132043 17%, #1F4172 55%, #F1B4BB 120%)",
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Avatar />
          <br></br>
          <h1 className="mb-5 text-5xl text-white font-bold">Hello there</h1>
          <p className="mb-5 text-gray-300">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
