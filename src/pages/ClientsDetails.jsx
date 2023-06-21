import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Typography } from "@material-tailwind/react";
import { AiFillStar } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import BgBlockCard from "../Components/BgBlockCard";

import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ClientsDetails = () => {
  const location = useLocation();
  const clientData = location.state;
  console.log(clientData);
  return (
    <Dashboard>
      {/* home section */}
      <div className=" w-full shadow-custom bg-[#FFF]">
        <div className="flex flex-wrap justify-between items-center px-6 py-4 ">
          <div className=" capitalize text-[#212529] text-xl w-80">
            customer detail
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
              <Link to={"/home"}>
                <p className=" capitalize cursor-pointer text-[#212529] text-[13px]">
                  home
                </p>
              </Link>
              <Link to={"/customer"}>
                <p
                  // onClick={() => handler()}
                  className=" capitalize cursor-pointer text-[#212529] text-[13px]"
                >
                  customer
                </p>
              </Link>

              <p className=" capitalize text-green-700  text-[13px]">
                {clientData?.firstName + " " + clientData?.lastName}
              </p>
            </Breadcrumbs>
            {/* <Link to={"/salecreate"}>
                <div className="hidden md:block">
                  <button className=" px-3 py-2 bg-[#03a9f3] rounded text-white capitalize hover:bg-[#29b6f5] ">
                    <AddCircleIcon
                      className="me-[2px] mb-[2px]"
                      fontSize="14px"
                    />
                    <span className="text-[15px] font-medium"> create new</span>
                  </button>
                </div>
              </Link> */}
          </div>
        </div>
      </div>

      <div className=" container mx-auto my-5 ">
        <Link to={"/customer"}>
          <div className=" px-8 md:px-0">
            <MdArrowBack className="w-7 h-7" />
          </div>
        </Link>
        <div className=" flex flex-col md:flex-row gap-3">
          <div className=" basis-1/2 md:basis-1/4 mx-auto my-5 ">
            <BgBlockCard clientData={clientData} />
          </div>
          <Card
            shadow={false}
            className=" basic-1/2 md:basis-3/4 mx-auto my-5 w-72 lg:w-96"
          >
            <div className="flex flex-col lg:flex-row">
              <div className=" basis-1/2 px-4 py-2">
                <p className=" text-sm text-gray-600">Full Name</p>
                <p className=" font-semibold">
                  {clientData?.firstName + " " + clientData?.lastName}
                </p>
              </div>
              <div className=" basis-1/2 px-4 py-2">
                <p className=" text-sm text-gray-600">Phone </p>
                <p className=" font-semibold">{clientData?.phone}</p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className=" basis-1/2 px-4 py-2">
                <p className=" text-sm text-gray-600">Email</p>
                <p className=" font-semibold">{clientData?.email}</p>
              </div>
              <div className=" basis-1/2 px-4 py-2">
                <p className=" text-sm text-gray-600">Address </p>
                <p className=" font-semibold">
                  {" "}
                  {clientData?.address?.address}
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className=" basis-1/2 px-4 py-2">
                <p className=" text-sm text-gray-600">Job </p>
                <p className=" font-semibold">{clientData?.company?.title}</p>
              </div>
              <div className=" basis-1/2 px-4 py-2">
                <p className=" text-sm text-gray-600">Company</p>
                <p className=" font-semibold">{clientData?.company?.name}</p>
              </div>
            </div>
          </Card>
        </div>
        <div className=" flex flex-col md:flex-row gap-x-7">
          <div className=" basis-1/2 lg:basis-1/4 mx-auto my-5  ">
            <Card shadow={false} className="w-72 lg:w-96">
              <Typography variant="h4" className="lg:text-center px-4">
                {" "}
                Transaction History
              </Typography>
              <div className="flex flex-col ">
                <div className="basis-1/2 px-4 py-2">
                  <p className="text-sm text-gray-600">Transaction date</p>
                  <p className=" font-semibold">
                    {clientData?.company?.transactionDate}
                  </p>
                </div>
                <div className="basis-1/2 px-4 py-2">
                  <p className="text-sm text-gray-600">Bank Account</p>
                  <p className=" font-semibold">
                    {clientData?.company?.cardNumber}
                  </p>
                </div>
                <div className="basis-1/2 px-4 py-2">
                  <p className="text-sm text-gray-600">
                    Deal Status - currently
                  </p>
                  <p className=" font-semibold">
                    {clientData?.company?.dealStatus}
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className=" basic-1/2 lg:basis-3/4 mx-auto my-5">
            <Card shadow={false} className="w-72 lg:w-96">
              <Typography variant="h4" className="lg:text-center px-4">
                {" "}
                Reviewed by {clientData?.firstName}
              </Typography>
              <div className="flex flex-col ">
                <div className="basis-1/2 px-4 py-2">
                  <p className=" flex flex-row gap-2">
                    <span>
                      <AiFillStar className="text-yellow-600 mt-1" />
                    </span>
                    <span className=" font-semibold">
                      {clientData?.review?.rating}/5
                    </span>
                  </p>
                </div>
                <div className="basis-1/2 px-4 py-2">
                  <p className=" italic">
                    <span>` {clientData?.review?.written}`</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default ClientsDetails;
