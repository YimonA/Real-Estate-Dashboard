import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import RentCard from "./RentCard";
import SaleCard from "./SaleCard";
import AllCard from "./AllCard";
import { useGetSaleQuery } from "../redux/api/saleApi";
import { useGetRentQuery } from "../redux/api/rentApi";
import { Loader, Select } from "@mantine/core";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const PropertyListItem = () => {
  const { data: rentData, isLoading } = useGetRentQuery();
  const { data: saleData } = useGetSaleQuery();
  const [rValue, setRValue] = useState(null);
  const [tValue, setTValue] = useState(null);
  const [R, setR] = useState(rentData);
  const [S, setS] = useState(saleData);
  const [currentPage, setCurrentPage] = useState(1);
   const [records, setRecords] = useState([]);
   const [npage, setNpage] = useState();
   const [numbers, setNumbers] = useState([]);
  
  const [all, setAll] = useState();
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);

  const SeeAllHandler = () => {
    setSearchToggle(false);
    setR(rentData);
    setS(saleData);
    pagi();
  };

  useEffect(() => {
    SeeAllHandler();
    setToggle(true);
  }, []);

  useEffect(() => {
    pagi();
  }, [toggle === true]);

  const pagi = () => {
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    
    const allD = rentData.concat(saleData);
    const records = allD.slice(firstIndex, lastIndex);
    const npage = Math.ceil(allD.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    setAll(allD);
    setRecords(records);
    setNpage(npage);
    setNumbers(numbers);
    console.log("all", allD);
  console.log("record", records);
  console.log("num", numbers);
  };

  useEffect(() => {
    console.log(rentData);
    console.log("Rval", rValue, "tval", tValue);
  }, [rValue, tValue]);

  const SearchHandler = () => {
    setSearchToggle(true);
    setR([]);
    setS([]);
    if (rValue === "sale" && tValue !== "") {
      //saleData.filter(a=>a.propertyType===tValue).map(b=>b.addressLine1);
      const aa = saleData.filter(
        (a) => a.propertyType.toLowerCase() === tValue
      );
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
    } else if (rValue === "sale" && tValue === "") {
      setS(saleData);
      setRValue("");
      setTValue("");
    } else if (rValue === "rent" && tValue === "") {
      setR(rentData);
      setRValue("");
      setTValue("");
    } else if (rValue === null && tValue !== "") {
      const aa = saleData.filter(
        (a) => a.propertyType.toLowerCase() === tValue
      );
      const bb = rentData.filter(
        (b) => b.propertyType.toLowerCase() === tValue
      );
      setS(aa);
      setR(bb);
      setRValue("");
      setTValue("");
    }
    scrollYHandler();
  };

  console.log("R", R);
  console.log("S", S);
  

  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      pagi();
    }
    scrollYHandler
  }
  function changeCPage(id) {
    setCurrentPage(id);
    pagi();
    scrollYHandler
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      pagi();
    }
    scrollYHandler
  }

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
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor: theme.colors.green[8],
                    color: theme.white,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                "&[data-hovered]": {},
              },
            })}
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
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                "&[data-selected]": {
                  "&, &:hover": {
                    backgroundColor: theme.colors.green[8],
                    color: theme.white,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                "&[data-hovered]": {},
              },
            })}
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
        <div className=" w-full lg:basis-8/12">
                {/* All Card Start*/}
        <div className={` ${searchToggle?'hidden':'flex'} w-full flex flex-wrap gap-0 sm:gap-5 justify-center items-center`}>
          {records?.map((allProperty) => {
                return <AllCard key={allProperty.id} searchToggle={searchToggle} {...allProperty} />;
              })}
        </div>
                {/* All Card End*/}
 

        {/* Rent Card Start*/}
        <div className={`  ${searchToggle?'flex':'hidden'} w-full flex flex-wrap gap-0 sm:gap-5 justify-center items-center`}>
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
        </div>
        {/* Sale Card End*/}

        {/* Pagination Start*/}
        <div className=" my-5 flex flex-wrap items-center gap-1 sm:gap-4">
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-0 sm:gap-2"
              onClick={prevPage}
            >
              <ArrowLeftIcon strokeWidth={2} className="h-3 w-3" />
              <span className=" hidden sm:block">Previous</span>
            </Button>
            <div className="flex items-center gap-0 sm:gap-2">
              {numbers?.map((n, i) => {
                return (
                  <li
                    className={`${currentPage === n ? "active" : ""}`}
                    key={i}
                  >
                    <a href="#" onClick={() => changeCPage(n)}>
                      {n}
                    </a>
                  </li>
                )
              })}
            </div>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-0 sm:gap-2"
              onClick={nextPage}
            >
              <span className="hidden sm:block">Next</span>
              <ArrowRightIcon strokeWidth={2} className="h-3 w-3" />
            </Button>
          </div>
                  {/* Pagination Start*/}

          </div>
      </div>
    </div>
  );
};

export default PropertyListItem;
