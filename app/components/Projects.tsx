import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-full my-12" id="projects">
      <div className=" max-w-md mx-auto mt-14 mb-16 divider flexdivider-neutral md:max-w-lg">
        <h2 className="text-4xl text-white font-bold my-0">Projects</h2>
      </div>
      <ul className="flex flex-wrap justify-center items-center w-1/3 gap-6 mx-auto md:justify-start md:items-start">
        <li>
          <ProjectCard title="Dashboard" tags={["PHP", "Laravel", "MySQL"]} />
        </li>
        <li>
          <ProjectCard title="E-commerce" tags={["React", "TailwindCSS"]} />
        </li>
        <li>
          <ProjectCard
            title="Not Starbucks!"
            tags={["PHP", "Laravel", "TailwindCSS"]}
          />
        </li>
      </ul>
    </div>
  );
};

export default Projects;
