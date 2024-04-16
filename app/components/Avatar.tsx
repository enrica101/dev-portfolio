import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-42">
          {/* <span className="flex justify-center items-center text-3xl"> */}
          <Image
            src={"/assets/graduation-photo.png"}
            alt="My Photo"
            width={100}
            height={100}
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
