import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import VillaIcon from '@mui/icons-material/Villa';
import SellIcon from '@mui/icons-material/Sell';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { Link } from "react-router-dom";
import { useGetRentQuery } from "../redux/api/rentApi";
import { useGetSaleQuery } from "../redux/api/saleApi";

const Home = () => {

  const { data: rentData, isLoading } = useGetRentQuery();
  const { data: saleData } = useGetSaleQuery();
  // console.log("sd", saleData.length);
  // console.log("rd", rentData.length);

  const [total, setTotal] = useState(0);
  const [sale, setSale] = useState(0);
  const [rent, setRent] = useState(0);

  useEffect(() => {
    if ((saleData !== undefined && saleData?.length !== 0) && (rentData !== undefined && rentData?.length !== 0)) {
      setTotal(saleData.length + rentData.length);
      setSale(saleData.length);
      setRent(rentData.length);
    }
  });

  return (
    <Box sx={{ display: "flex", backgroundColor: "#EBEFF3", height: "100vh" }}>
      <Dashboard />
        <Box component="main" className=" pt-[57px] sm:pt-[63px]" sx={{ flex: "auto",}} >

        {/* home section */}
        <div className=" w-full shadow-custom bg-[#FFF]">
          <div className="flex flex-wrap justify-between items-center px-6 py-4 ">
            <div className=" capitalize text-[#212529] text-xl w-80">
              real estate dashboard
            </div>
            <div className="flex justify-between items-center gap-3 ml-auto">
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" className=" text-[#8d97ad]" />} aria-label="breadcrumb">
                <p className=" capitalize cursor-pointer text-[#212529] text-[13px]">home</p>
                <p className=" capitalize text-green-700 text-[13px]">real estate dashboard</p>
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

        {/* grid */}
        <div className="w-full px-6 py-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

            <div className="bg-white">
              <div className=" p-[20px]">
                <h1 className="uppercase text-[16px] font-semibold text-[#212529]">all properties</h1>
                <div className="flex-between-center mt-[10px] mb-[10px]">
                <VillaIcon sx={{ color: "#03a9f3", fontSize: "36px" }} />
                <p className=" text-[36px] text-[#6c757d]">{ total }</p>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div className=" p-[20px]">
                <h1 className="uppercase text-[16px] font-semibold text-[#212529]">properties for sale</h1>
                <div className="flex-between-center mt-[10px] mb-[10px]">
                <SellIcon className="rotate-[90deg]" sx={{ color: "#ab8ce4", fontSize: "36px" }} />
                <p className=" text-[36px] text-[#6c757d]">{sale}</p>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div className=" p-[20px]">
                <h1 className="uppercase text-[16px] font-semibold text-[#212529]">properties for rent</h1>
                <div className="flex-between-center mt-[10px] mb-[10px]">
                <ShoppingCartIcon sx={{ color: "#e46a76", fontSize: "36px" }} />
                <p className=" text-[36px] text-[#6c757d]">{rent}</p>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <div className=" p-[20px]">
                <h1 className="uppercase text-[16px] font-semibold text-[#212529]">total earnings</h1>
                <div className="flex-between-center mt-[10px] mb-[10px]">
                <AccountBalanceWalletIcon sx={{ color: "#15803d", fontSize: "36px" }} />
                <p className=" text-[36px] text-[#6c757d]">$8170</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Box>
    </Box>
  );
};

export default Home;
