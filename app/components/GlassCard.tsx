import React from "react";
import Avatar from "./Avatar";

const GlassCard = () => {
  return (
    <div className="card w-96 glass">
      <figure>
        <img
          src="\assets\graduation-photo.png"
          alt="my photo
    "
        />
      </figure>
      <div className="card-body">
        {/* <Avatar /> */}
        <br></br>
        <h1 className="mb-5 text-5xl text-white font-bold">Hello there</h1>
        <p className="mb-5 text-gray-300">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
        {/* <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
      </div>
    </div>
  );
};

export default GlassCard;
