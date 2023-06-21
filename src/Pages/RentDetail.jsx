import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

import { Carousel } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useGetDetailRentQuery } from "../redux/api/rentApi";

import { Input, Loader, Textarea } from "@mantine/core";

const RentDetail = () => {
  const { id } = useParams();
  const { data: rentDetailData, isLoading } = useGetDetailRentQuery(id);

  if (isLoading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader variant="dots" />
      </div>
    );
  }

  console.log("id", id);
  console.log("p", rentDetailData);
  return (
    <div className=" bg-[#EDF1F5] ">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-5 px-5 ">
        <div className="basis-8/12 ">
          <div className=" mb-5 px-5 py-5 bg-white">
            <Carousel
              className="rounded-none "
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {rentDetailData?.image.map((image,i) => {
                return (
                  <img
                    src={image}
                    alt="image 1"
                    key={i}
                    className="h-[450px] w-full object-center object-cover"
                  />
                );
              })}
            </Carousel>

            <p className=" text-lg py-5" style={{ fontWeight: "550" }}>
              {rentDetailData?.formattedAddress}
            </p>
            <p className=" flex justify-start gap-2 text-lg text-gray-500 mb-2 ">
              <HiLocationMarker className=" text-red-400" />{" "}
              {rentDetailData?.city} / {rentDetailData?.state} /{" "}
              {rentDetailData?.county}
            </p>
            <p className=" text-lg text-gray-500 border-t-2 border-gray-300 pt-5 pb-10">
              {rentDetailData?.description}
            </p>
          </div>
          {/*  360 degree View Start */}
          <div className=" py-5 px-5 my-5 bg-white">
            <p className=" text-lg font-semibold mb-5">360° View</p>
            <iframe
              src={rentDetailData?.permalink}
              width="100%"
              height="500px"
              style={{ border: "0" }}
              allowFullScreen=""
            ></iframe>
          </div>
          {/*  360 degree View End */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-stretch lg:h-full gap-5">
            {/*  Amenties Start */}

            <div className="w-full lg:basis-6/12  px-5  pt-5 py-10 bg-white">
              <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
                Amenities
              </p>
              <ul className=" text-gray-500 ">
                {rentDetailData?.bullet.map((tag) => {
                  return (
                    <li className=" pb-2 flex gap-2 justify-start items-center">
                      <BsCheckCircleFill className=" text-green-600 bg-white rounded-full" />
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/*  Amenties End */}

            {/*  Room Dimension Start */}
            <div className="w-full lg:basis-6/12 px-5  pt-5 py-10 bg-white">
              <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
                Room Dimensions
              </p>
              <ul className=" text-gray-500 lg:flex flex-col gap-2">
                <li className=" flex justify-between items-center pb-2">
                  <span>Living Room</span>
                  <span>{rentDetailData?.roomDimensions?.livingRoom=== null
                      ? "9x10"
                      : rentDetailData?.roomDimensions?.livingRoom}</span>
                </li>
                <li className=" flex justify-between items-center pb-2">
                  <span>Bedroom</span>
                  <span>{rentDetailData?.roomDimensions?.bedRoom=== null
                      ? "12x10"
                      : rentDetailData?.roomDimensions?.bedRoom}</span>
                </li>
                <li className=" flex justify-between items-center pb-2">
                  <span>Dining Room</span>
                  <span>{rentDetailData?.roomDimensions?.diningRoom=== null
                      ? "15x10"
                      : rentDetailData?.roomDimensions?.diningRoom}</span>
                </li>
                <li className=" flex justify-between items-center pb-2">
                  <span>Kitchen</span>
                  <span>{rentDetailData?.roomDimensions?.kitchen=== null
                      ? "9x7"
                      : rentDetailData?.roomDimensions?.kitchen}</span>
                </li>
              </ul>
            </div>
            {/*  Room Dimension End */}
          </div>
          {/*  Location Start */}
          <div className=" py-5 px-5 my-5 bg-white">
            <p className=" text-lg font-semibold mb-5">Location</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117506.98606137399!2d72.5797426!3d23.020345749999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1476988114677"
              width="100%"
              height="244"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
            ></iframe>
          </div>
          {/*  Location End */}
        </div>
        <div className="w-full lg:basis-4/12">
          {/*  Essential Information Start */}
          <div className="w-full lg:basis-6/12 px-5  pt-5 py-10 bg-white">
            <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
              Essential Information
            </p>
            <ul className=" text-gray-500">
              <li className=" flex justify-between items-center pb-2">
                <span>MLS</span>
                <span>V254680</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Price</span>
                <span>$ {rentDetailData?.price}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Bedrooms</span>
                <span>{rentDetailData?.bedrooms === null
                    ? "1"
                    : rentDetailData?.bedrooms}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Bathrooms</span>
                <span>{rentDetailData?.bathrooms === null
                    ? "1"
                    : rentDetailData?.bathrooms}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Square Footage</span>
                <span>{rentDetailData?.squareFootage}</span>
              </li>

              <li className=" flex justify-between items-center pb-2">
                <span>lotSize</span>
                <span>{rentDetailData?.lotSize}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Year Build</span>
                <span>{rentDetailData?.yearBuilt}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Type</span>
                <span>{rentDetailData?.propertyType}</span>
              </li>

              <li className=" flex justify-between items-center pb-2">
                <span>Status</span>
                <span>{rentDetailData?.status}</span>
              </li>
            </ul>
          </div>
          {/*  Essential Information Start */}

          {/*  Request inquiry Start */}
          <div className="w-full lg:basis-6/12 flex flex-col px-5  pt-5 py-10 bg-white mt-5">
            <div className="flex flex-col items-center mb-5">
              <img
                className="w-20 h-20 rounded-full"
                src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/agent.jpg"
                alt=""
              />
              <p className=" text-xl pt-3">Jon Doe</p>
              <p className=" text-gray-800 ">Agent of Property</p>
            </div>
            <div className="flex flex-col items-center border-y-2 border-gray-400 py-5 text-gray-800">
              <p className=" flex justify-start gap-2">
                <AiOutlinePhone className=" text-red-400" /> 800-1800-24657
              </p>
              <p className="">jon@realestate.com</p>
            </div>
            <div>
              <p className=" text-lg mb-3 font-semibold border-b-2 border-gray-300 py-5">
                Request Inquiry
              </p>
              <div className=" flex flex-col gap-4 mt-5">
                <Input placeholder="Name" size="md" />
                <Input placeholder="Phone" size="md" />
                <Input placeholder="Email" size="md" />
                <Textarea placeholder="Message" size="md" withAsterisk />
              </div>

              <button className="py-2 px-3 my-5 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-full border-none cursor-pointer">
                Submit Request{" "}
              </button>
            </div>
          </div>
          {/*  Request Inquiry Start */}

          {/*  Community  Information Start */}
          <div className="w-full lg:basis-6/12 px-5  pt-5 py-10 bg-white mt-5">
            <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
              Community Information
            </p>
            <ul className=" text-gray-500">
              <li className=" flex justify-between items-center pb-2">
                <span>Address</span>
                <span>{rentDetailData?.addressLine1}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Price</span>
                <span>{rentDetailData?.price}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>State</span>
                <span>{rentDetailData?.state}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>City</span>
                <span>{rentDetailData?.city}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Create Date</span>
                <span>{rentDetailData?.createdDate.substring(0, 10)}</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Listed Date</span>
                <span>{rentDetailData?.listedDate.substring(0, 10)}</span>
              </li>
            </ul>
          </div>
          {/*  Community  Information Start */}
        </div>
      </div>
    </div>
  );
};

export default RentDetail;
