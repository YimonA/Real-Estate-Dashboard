import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";

import { Chip } from "@material-tailwind/react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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

const PropertyList = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className=" bg-[#EDF1F5] ">
      <div className=" container mx-auto px-7 flex flex-col lg:flex-row justify-start gap-5 items-start py-5 pb-20">
        <div className="w-full lg:basis-4/12 bg-white px-5 py-5">
          <h1 className=" px-3 mb-2 font-semibold text-xl">Search</h1>

          <Fragment>
            <Accordion
              open={open === 1}
              icon={<Icon id={1} open={open} className=" py-2" />}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className=" py-2 border-2 px-3"
              >
                <p>Status</p>
              </AccordionHeader>
              <AccordionBody className=" border-2 pb-0">
                <ul>
                  <li className=" py-1 px-3 text-gray-500">Status</li>
                  <li className=" py-1 px-3 hover:bg-green-600 hover:text-white">
                    Rent
                  </li>
                  <li className=" py-1 px-3  hover:bg-green-600 hover:text-white">
                    Sale
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={<Icon id={2} open={open} className=" py-2" />}
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className=" py-2 border-2 px-3 mt-3"
              >
                <p>City</p>
              </AccordionHeader>
              <AccordionBody className=" border-2 pb-0 ">
                <ul>
                  <li className=" py-1 px-3 text-gray-500">City</li>
                  <li className="  py-1 px-3 hover:bg-green-600 hover:text-white">
                    US
                  </li>
                  <li className="  py-1 px-3 hover:bg-green-600 hover:text-white">
                    CA
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={<Icon id={3} open={open} className=" py-2" />}
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className=" py-2  border-2 px-3 mt-3"
              >
                <p className=" ">Property Type</p>
              </AccordionHeader>
              <AccordionBody className=" border-2 pb-0 ">
                <ul>
                  <li className=" py-1 px-3 text-gray-500">Property Type</li>
                  <li className="  py-1 px-3 hover:bg-green-600 hover:text-white">
                    Apartment
                  </li>
                  <li className="  py-1 px-3 hover:bg-green-600 hover:text-white">
                    Villa/Mansion
                  </li>
                  <li className="  py-1 px-3 hover:bg-green-600 hover:text-white">
                    Cottage
                  </li>
                  <li className="  py-1 px-3 hover:bg-green-600 hover:text-white">
                    Flat
                  </li>
                  <li className="  py-1 px-3 hover:bg-green-600 hover:text-white">
                    House
                  </li>
                </ul>
              </AccordionBody>
            </Accordion>
          </Fragment>
          <button className="btn flex-center-center gap-1 px-4 py-2 mt-6">
            <BiSearchAlt className="xs:mb-[4px] md:mb-1 sm:text-lg" />
            Search
          </button>
        </div>
        {/* Card Section Start */}
        <div className="w-full  lg:basis-8/12  bg-white flex flex-col lg:flex-row justify-start items-center relative">
          <Chip
            className=" absolute top-2 left-0 font-normal text-base bg-red-700 normal-case rounded-none pb-0"
            color="red"
            value="For Rent"
          />
          <img
            src="https://hously-react.vercel.app/static/media/1.bfd273967d5b93df7a02.jpg"
            className=" w-full h-52 lg:w-56 lg:h-56 object-center object-cover"
            alt=""
          />

          <div className="w-full h-fit md:basis-8/12 md:h-56 px-3 flex flex-col  bg-white ">
            <div className=" w-full md:basis-8/12 flex flex-col lg:flex-row md:justify-between items-center">
              <div className=" w-full md:basis-8/12 h-full md:px-5 py-5">
                <p className="font-semibold">Florida 5, Pinecrest, FL </p>
                <p className=" text-red-300">$ 220,000</p>
              </div>
              <div className=" w-full md:basis-8/12 text-gray-500 border-t-2 lg:border-t-0 lg:border-l-2 border-gray-300 md:px-5 py-5 h-full">
                <p className=" flex justify-start items-center gap-4">
                  <LuBath size={"1.7rem"} />{" "}
                  <span className=" text-gray-500	">Bathrooms</span>
                </p>
                <p className="	 flex justify-start items-center gap-4">
                  <LuBed size={"1.7rem"} />
                  Beds
                </p>
                <p className=" flex justify-start items-center gap-4">
                  <GiHomeGarage size={"1.7rem"} />
                  Garages
                </p>
              </div>
            </div>
            <div className=" w-full md:basis-4/12 flex gap-2 md:gap-5   justify-start items-center md:px-5 py-5 h-full border-t-2 lg::border-t-0  border-gray-300 ">
              <div className=" basis-2/12">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://hously-react.vercel.app/static/media/01.6ac85de7298319b1f8d5.jpg"
                  alt=""
                />
              </div>
              <div className="w-full flex justify-between items-center">
                <div>
                  <p className=" font-semibold">Jon Doe</p>
                  <p className="  text-gray-500 ">5 Property</p>
                </div>

                <p className=" flex justify-start gap-2  text-gray-500  ">
                  <HiLocationMarker className=" text-red-400" /> New York City
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Card Section End */}
      </div>
    </div>
  );
};

export default PropertyList;
