import React, {  useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import RentCard from "../Components/RentCard";
import SaleCard from "../Components/SaleCard";
import { useGetSaleQuery } from "../redux/api/saleApi";
import { useGetRentQuery } from "../redux/api/rentApi";

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
  const { data: rentData, isLoading } = useGetRentQuery();
  const { data: saleData } = useGetSaleQuery();
  console.log("rd", saleData);

  if (isLoading) {
    return (
      <div className=" flex justify-center item-center h-screen">
        Loading...
      </div>
    );
  }

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
        {/* Rent Card Start*/}
        <div className="w-full  lg:basis-8/12 flex flex-wrap gap-5 justify-center align-center">
          {rentData?.map((rentProperty) => {
            return <RentCard key={rentProperty.id} {...rentProperty} />;
          })}
          {/* Rent Card End*/}

          {/* Sale Card Start*/}
          {saleData?.map((saleProperty) => {
            return <SaleCard key={saleProperty.id} {...saleProperty} />;
          })}
        </div>
        {/* Sale Card End*/}
      </div>
    </div>
  );
};

export default PropertyList;
