import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* footer section */}
      <div className=" w-full shadow-custom bg-[#FFF]">
        <div className=" text-[var(--text-color)] text-md px-6 py-4">
          © 2021 Eliteadmin by themedesigner.in&nbsp;
          <Link to={"https://www.wrappixel.com/"}>
            <span className=" font-medium text-green-700 hover:text-green-800">
              WrapPixel
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
