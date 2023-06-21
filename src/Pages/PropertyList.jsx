import React, { useEffect, useState } from "react";
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
import { Loader } from "@mantine/core";
//import { Button, IconButton } from "@material-tailwind/react";
//import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

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
  const { data: rentData, isLoading } = useGetRentQuery();
  const { data: saleData } = useGetSaleQuery();
  const [open, setOpen] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  //const [activePage, setPage] = useState(1);


  console.log("sd", saleData);
  console.log("rd", rentData);

  /*
  console.log("rd", rentData.slice(0, 5));
setInterval(()=>{
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = rentData?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(rentData.length / recordPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
},3000)
    
    

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
*/
  //console.log(rentData.length)

  //const totalPage = ([...rentData].length + [...saleData].length) / 4;
  //console.log("totalPage", totalPage);
  /*
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
*/
  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader variant="dots" />
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
          <button className=" flex justify-start my-5 py-2 px-3 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-sm border-none cursor-pointer">
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

          {/* Pagination Start

          <div className="flex items-center gap-4">
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-2"
              onClick={prev}
              disabled={active === 1}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
              <IconButton {...getItemProps(1)}>1</IconButton>
              <IconButton {...getItemProps(2)}>2</IconButton>
              <IconButton {...getItemProps(3)}>3</IconButton>
              <IconButton {...getItemProps(4)}>4</IconButton>
              <IconButton {...getItemProps(5)}>5</IconButton>
            </div>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-2"
              onClick={next}
              disabled={active === 5}
            >
              Next
              <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </Button>
          </div>
          
          Pagination End*/}
        </div>

        {/*Pagination*/}
        {/* 
        <nav>
          <ul>
            <li className=" page-item">
              <a href="#" className="page-link" onClick={prevPage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => {
              <li
                className={` page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a href="#" className="page-link" onClick={changeCPage(n)}>
                  {n}
                </a>
              </li>;
            })}
            <li>
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
        */}

        {/* Sale Card End*/}
      </div>
    </div>
  );
};

export default PropertyList;