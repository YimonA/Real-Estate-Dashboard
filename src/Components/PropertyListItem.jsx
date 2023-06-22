import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
//import { Fragment } from "react";
//import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
import RentCard from "./RentCard";
import SaleCard from "./SaleCard";
import { useGetSaleQuery } from "../redux/api/saleApi";
import { useGetRentQuery } from "../redux/api/rentApi";
import { Loader, Select } from "@mantine/core";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const PropertyListItem = () => {
  const { data: rentData, isLoading } = useGetRentQuery();
  const { data: saleData } = useGetSaleQuery();
  const [open, setOpen] = useState(0);
  //console.log("sd", saleData);
  //console.log("rd", rentData);

  const [rValue, setRValue] = useState(null);
  const [tValue, setTValue] = useState(null);
  const [R, setR] = useState(rentData);
  const [S, setS] = useState(saleData);

  useEffect(() => {
    console.log(rentData);
    console.log("Rval", rValue, "tval", tValue);
  }, [rValue, tValue]);
  //const rents = useSelector((state) => state.rentSlice);

  const SearchHandler = () => {
    setR([]);
    setS([]);
    if (rValue === "sale" && tValue !== "") {
      //saleData.filter(a=>a.propertyType===tValue).map(b=>b.addressLine1);
      const aa = saleData.filter(
        (a) => a.propertyType.toLowerCase() === tValue
      );
      //console.log("aa", aa);
      setS(aa);
      setRValue("");
      setTValue("");
    } else if (rValue === "rent" && tValue !== "") {
      const bb = rentData.filter(
        (b) => b.propertyType.toLowerCase() === tValue
      );
      //console.log("bb", bb);
      setR(bb);
      setRValue("");
      setTValue("");
    }
    scrollYHandler();
  };
  //console.log("R", R);
  //console.log("S", S);

  const SeeAllHandler = () => {
    setR(rentData);
    setS(saleData);
    scrollYHandler()
  };

  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: active === index ? "blue" : "blue-gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader variant="dots" color="green" />
      </div>
    );
  }

  const scrollYHandler = () => {
    window.scroll(0, 0);
  };

  return (
    <div className={` bg-[#EDF1F5]`}>
      <div className=" flex flex-col lg:flex-row justify-start gap-5 items-start py-5 pb-20">
        <div className="w-full lg:basis-4/12 bg-white px-5 py-5 sticky top-20 left-0 z-30">
          <Select
            placeholder="Status"
            value={rValue}
            onChange={setRValue}
            data={[
              { value: "rent", label: "Rent" },
              { value: "sale", label: "Sale" },
            ]}
          />
          <Select
            className=" my-5"
            placeholder="Type"
            value={tValue}
            onChange={setTValue}
            data={[
              { value: "apartment", label: "Apartment" },
              { value: "villa", label: "Villa/Mansion" },
              { value: "cottage", label: "Cottage" },
              { value: "flat", label: "Flat" },
              { value: "house", label: "House" },
            ]}
          />
          <button
            onClick={SearchHandler}
            className="w-full flex justify-center my-5 py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded border-none cursor-pointer"
          >
            <BiSearchAlt className="xs:mb-[4px] md:mb-1 sm:text-lg me-1 mt-[2px]" />
            Search
          </button>
          <button
            onClick={SeeAllHandler}
            className="w-full mb-5 py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded border-none cursor-pointer"
          >
            See all
          </button>
        </div>

        {/* Rent Card Start*/}
        <div className="w-full lg:basis-8/12 flex flex-wrap gap-0 sm:gap-5 justify-center items-center">
          {R === []
            ? rentData?.map((rentProperty) => {
                return <RentCard key={rentProperty.id} {...rentProperty} />;
              })
            : R?.map((rentProperty) => {
                return <RentCard key={rentProperty.id} {...rentProperty} />;
              })}
          {/* Rent Card End*/}

          {/* Sale Card Start*/}

          {S === []
            ? saleData?.map((saleProperty) => {
                return <SaleCard key={saleProperty.id} {...saleProperty} />;
              })
            : S?.map((saleProperty) => {
                return <SaleCard key={saleProperty.id} {...saleProperty} />;
              })}
          {/* Pagination Start*/}

          <div className="my-10 flex flex-wrap items-center gap-1 sm:gap-4">
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-0 sm:gap-2"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-3 w-3" />
              <span className=" hidden sm:block">Previous</span>
            </Button>

            <div className="flex items-center gap-0 sm:gap-2">
              <IconButton {...getItemProps(1)}>1</IconButton>
              <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
              <IconButton {...getItemProps(4)}>4</IconButton>
              <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-0 sm:gap-2"
              onClick={next}
              disabled={active === 5}
            >
              <span className="hidden sm:block">Next</span>
              <ArrowRightIcon strokeWidth={2} className="h-3 w-3" />
            </Button>
          </div>
          {/* Pagination End*/}
        </div>
        {/* Sale Card End*/}
      </div>
    </div>
  );
};

export default PropertyListItem;
