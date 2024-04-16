import React from "react";

const ProjectCard = ({
  title = "Project title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  tags = ["Next.js", "TailwindCSS"],
}: {
  title: string;
  description: string | null;
  tags: string[];
}) => {
  const tagsList = tags.map((tag) => (
    <div className="badge badge-outline">{tag}</div>
  ));
  return (
    <div className="card w-96 bg-neutral shadow-xl rounded-md">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">{tagsList}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
