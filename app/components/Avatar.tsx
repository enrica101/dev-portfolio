import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="sm:h-full z-1">
      <div className=" avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-64">
          <Image
            src={"/assets/enrica-photo-4.png"}
            alt="My Photo"
            width={100}
            height={100}
            style={{ objectFit: "cover", objectPosition: "center", zIndex: 1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
