import React from "react";
import ProjectCard from "../ProjectCard";
import { projects } from "../utlities/data";
import CTAButton from "../CTAButton";

const Projects = () => {
  return (
    <div className="w-full my-12" id="projects">
      <div className=" max-w-md mx-auto mt-14 mb-16 divider flexdivider-neutral md:max-w-lg">
        <h2 className="text-4xl text-white font-bold my-0">Projects</h2>
      </div>
      {projects.length == 0 ? (
        <div className="flex flex-col justify-center items-center">
          <h3 className="">This section is still under way!</h3>
          <p>In the meantime, you can check out my GitHub Account 😄</p>
          <br></br>
          <CTAButton
            name="Go to GitHub"
            href={"https://github.com/enrica101?tab=repositories"}
            newTab={true}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Projects;
