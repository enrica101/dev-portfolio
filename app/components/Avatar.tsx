import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="invisible h-0 sm:visible sm:h-full">
      <div className=" avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-56">
          <Image
            src={"/assets/enrica-photo.png"}
            alt="My Photo"
            width={100}
            height={100}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
