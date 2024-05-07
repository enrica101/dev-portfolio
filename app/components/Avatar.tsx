import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="invisible h-0 sm:visible sm:h-full">
      <div className=" avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-56">
          {/* <span className="flex justify-center items-center text-3xl"> */}
          <Image
            src={"/assets/enrica-photo.png"}
            alt="My Photo"
            width={100}
            height={100}
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
          {/* </span> */}
        </div>
      </div>
      {/* <div className="avatar online placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-16">
          <span className="text-xl">AI</span>
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-12">
          <span>SY</span>
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-8">
          <span className="text-xs">UI</span>
        </div>
      </div> */}
    </div>
  );
};

export default Avatar;
