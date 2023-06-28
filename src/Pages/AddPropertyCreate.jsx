import React from "react";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PropertyCreate from "./PropertyCreate";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const AddPropertyCreate = () => {
  return (
    <Dashboard>
      {/* home section */}
      <div className=" w-full shadow-custom bg-[#FFF]">
        <div className="flex flex-wrap justify-between items-center px-6 py-4 ">
          <div className=" capitalize text-[#212529] text-xl w-80">
            add property
          </div>
          <div className="flex justify-between items-center gap-3 ml-auto">
            <Breadcrumbs
              separator={
                <NavigateNextIcon
                  fontSize="small"
                  className=" text-[#8d97ad]"
                />
              }
              aria-label="breadcrumb"
            >
              <Link to={"/"}>
                <p className=" capitalize cursor-pointer text-[#212529] text-[13px]">
                  home
                </p>
              </Link>
              <p className=" capitalize text-green-700 text-[13px]">
                add property
              </p>
            </Breadcrumbs>
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-7">
        {/* Start Write Here Add Property  */}
        <PropertyCreate />
      </div>

      {/* footer */}
      <Footer/>
    </Dashboard>
  );
};

export default AddPropertyCreate;
