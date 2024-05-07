import React from "react";
import Image from "next/image";
import { skills } from "../utlities/data";

const Skills = () => {
  return (
    <div className="hero min-h-32">
      <div className="hero-content text-center  text-neutral-content">
        <div className="prose">
          <div className=" mb-5  divider flex justify-center items-center divider-neutral">
            <h2 className="text-4xl text-white font-bold my-0">
              Skills & Tools
            </h2>
          </div>
          <br></br>
          <div className="flex justify-center items-center max-w-md flex-wrap w-full gap-8 mb-5 ">
            {skills.map((skill, key) => (
              <div className="flex flex-col h-50" key={key}>
                <p className="m-auto">{skill.title}</p>
                <Image
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  src={skill.src}
                  alt={skill.alt}
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
