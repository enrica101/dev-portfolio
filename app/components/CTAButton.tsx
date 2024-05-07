import React from "react";

const CTAButton = ({
  name,
  href = "#",
  state = "btn-primary",
  newTab = false,
  onClick,
}: any) => {
  return onClick == undefined ? (
    <a className={`btn ${state}`} href={href} target={newTab ? "_blank" : ""}>
      {name}
    </a>
  ) : (
    <button className={`btn ${state}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default CTAButton;
