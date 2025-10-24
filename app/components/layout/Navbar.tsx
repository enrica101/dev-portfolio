"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import CTAButton from "../CTAButton";
import ContactInfoDialog from "../ContactInfoDialog";

const navbar = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 right-0 left-0 z-99 px-4">
      <div className="navbar-start">

        <a className="btn btn-ghost text-xl" href="/">
          <Logo dark={false} />
        </a>
      </div>
      <div className="navbar-end">
        <CTAButton name="Contact" href="#contactModal" />
      </div>
      <ContactInfoDialog />
    </div>
  );
};

export default navbar;
