import React from "react";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RentCreate from "./RentCreate";
import { Link } from "react-router-dom";

const AddRentProperty = () => {
  return (
    <Box sx={{ display: "flex", backgroundColor: "#EBEFF3",  }}>
        <Dashboard />
        <Box component="main" className=" pt-[57px] sm:pt-[63px]" sx={{ flex: "auto",  }} >
          {/* home section */}
          <div className=" w-full shadow-custom bg-[#FFF]">
          <div className="flex flex-wrap justify-between items-center px-6 py-4 ">
            <div className=" capitalize text-[#212529] text-xl w-80">
              add rent property
            </div>
            <div className="flex justify-between items-center gap-3 ml-auto">
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" className=" text-[#8d97ad]" />} aria-label="breadcrumb">
              <Link to={'/home'}>
                <p className=" capitalize cursor-pointer text-[#212529] text-[13px]">home</p>
              </Link>
                <p className=" capitalize text-green-700 text-[13px]">add property</p>
              </Breadcrumbs>
              <Link to={'/salecreate'}>
                <div className="hidden md:block">
                <button className=" px-3 py-2 bg-[#03a9f3] rounded text-white capitalize hover:bg-[#29b6f5] ">
                  <AddCircleIcon className="me-[2px] mb-[2px]" fontSize="14px"/>
                 <span className="text-[15px] font-medium"> create new</span>
                </button>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full px-6 py-7">
           {/* Start Write Here Add Property  */}
            <RentCreate/>
        </div>
        </Box>
    </Box>
  )
}

export default AddRentProperty