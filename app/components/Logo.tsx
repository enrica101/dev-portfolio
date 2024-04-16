import React from "react";
import Image from "next/image";

const Logo = ({ dark = false }: { dark: boolean }) => {
  return (
    <div>
      <Image
        src={dark ? "/assets/logo/logo-dark.svg" : "/assets/logo/logo.svg"}
        alt="logo"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Logo;
