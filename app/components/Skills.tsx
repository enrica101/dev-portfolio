import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="hero min-h-32">
      <div className="hero-content text-center">
        <div className="prose">
          <h2 className="mb-5 text-4xl text-white font-bold">Skills</h2>
          <br></br>
          <div className="flex justify-center items-center max-w-md flex-wrap w-full gap-8 mb-5 ">
            <Image
              src={"/assets/skills/html.png"}
              alt="HTML5"
              width={80}
              height={80}
            />
            <Image
              src={"/assets/skills/css3.png"}
              alt="HTML5"
              width={80}
              height={80}
            />
            <Image
              src={"/assets/skills/tailwindcss.png"}
              alt="HTML5"
              width={80}
              height={80}
            />
            <Image
              src={"/assets/skills/sass.png"}
              alt="HTML5"
              width={80}
              height={80}
            />
            <Image
              src={"/assets/skills/react.png"}
              alt="HTML5"
              width={80}
              height={80}
            />
            <Image
              src={"/assets/skills/nextjs.png"}
              alt="HTML5"
              width={80}
              height={80}
            />
            <Image
              src={"/assets/skills/laravel.png"}
              alt="HTML5"
              width={80}
              height={80}
            />
            <Image
              src={"/assets/skills/php.png"}
              alt="HTML5"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
