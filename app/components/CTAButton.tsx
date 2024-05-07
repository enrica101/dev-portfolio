import React from "react";

const CTAButton = ({
  name,
  href = "#",
  state = "btn-primary",
  newTab = false,
}: any) => {
  return (
    <a className={`btn ${state}`} href={href} target={newTab ? "_blank" : ""}>
      {name}
    </a>
  );
};

export default CTAButton;
