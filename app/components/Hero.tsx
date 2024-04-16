import React from "react";
import Avatar from "./Avatar";

const Hero = () => {
  return (
    <div className="hero min-h-screen" id="home">
      <div className="hero-content text-center text-neutral-content">
        <div className="prose flex flex-col max-w-xl">
          <Avatar />
          <br></br>
          <h2 className="mb-5 text-4xl lg:text-5xl">Hey everyone, I'm </h2>
          <h1 className="mb-5 text-5xl text-accent font-bold lg:text-7xl">
            Enrica Jules Carpena
          </h1>
          <p className="mb-5 ">
            I'm all about creating engaging and user-friendly digital
            experiences. Whether it's crafting a sleek website or building a
            responsive app, I love the challenge of making technology work for
            people. Outside of work, you'll find me sitting in Starbucks
            enjoying my iced Caramel Machiatto with subsoy. I'm really thrilled
            to connect with you. Let's dive right into it!
          </p>
          <button className="btn btn-primary">Know more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
