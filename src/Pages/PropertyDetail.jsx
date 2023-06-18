import React from 'react'
import { HiLocationMarker } from "react-icons/hi";

import { Carousel } from "@material-tailwind/react";


const PropertyDetail = () => {
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
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="image 1"
                className="h-[450px] w-full object-center object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                alt="image 2"
                className="h-[450px] w-full object-center object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                alt="image 3"
                className=" h-[450px] w-full object-center object-cover"
              />
            </Carousel>

            <p className=" text-lg py-5" style={{ fontWeight: "550" }}>
              Florida 5, Pinecrest, FL
            </p>
            <p className=" flex justify-start gap-2 text-lg text-gray-500 mb-2 ">
              <HiLocationMarker className=" text-red-400" /> New York City /
              Brooklyn
            </p>
            <p className=" text-lg text-gray-500 border-t-2 border-gray-300 pt-5 pb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare
              lacus adipiscing, posuere lectus et, fringilla augue. Rorem psum
              dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt
              est vitae ultrices accumsan. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum tincidunt est vitae
              ultrices accumsan. Aliquam ornare lacus adipiscing, posuere.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-stretch lg:h-full gap-5">
            {/*  Amenties Start */}

            <div className="w-full lg:basis-6/12  px-5  pt-5 py-10 bg-white">
              <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
                Amenities
              </p>
              <ul className=" text-gray-500 ">
                <li className=" pb-2">Private Space</li>
                <li className=" pb-2">WiFi</li>
                <li className=" pb-2">Basketball Court</li>
                <li className=" pb-2">Fireplace</li>
                <li className=" pb-2">Doorman</li>
                <li className=" pb-2">Swimming Pool</li>
                <li className=" pb-2">Gym</li>
                <li className=" pb-2">Parking</li>
                <li className=" pb-2">Laundry</li>
              </ul>
            </div>
            {/*  Amenties End */}

            {/*  Room Dimension Start */}
            <div className="w-full lg:basis-6/12 px-5  pt-5 py-10 bg-white">
              <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 pb-5">
                Room Dimensions
              </p>
              <ul className=" text-gray-500 lg:flex flex-col gap-5">
                <li className=" flex justify-between items-center pb-2">
                  <span>Dining Room</span>
                  <span>8x8</span>
                </li>
                <li className=" flex justify-between items-center pb-2">
                  <span>Kitchen</span>
                  <span>10x12</span>
                </li>
                <li className=" flex justify-between items-center pb-2">
                  <span>Living Room</span>
                  <span>10x12</span>
                </li>
                <li className=" flex justify-between items-center pb-2">
                  <span>Master Bedroom</span>
                  <span>10x12</span>
                </li>
                <li className=" flex justify-between items-center pb-2">
                  <span>Bedroom2</span>
                  <span>10x12</span>
                </li>
                <li className=" flex justify-between items-center pb-2">
                  <span>Other Room1</span>
                  <span>10x12</span>
                </li>
              </ul>
            </div>
            {/*  Room Dimension Start */}
          </div>
          {/*  Location Start */}
          <div className=" py-5 px-5 mt-5 bg-white">
            <p className=" text-lg font-semibold mb-5">
              Location
            </p>
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
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Bedrooms</span>
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Bathrooms</span>
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Full Baths</span>
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Square Footage</span>
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Year Build</span>
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Type</span>
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Style</span>
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Status</span>
                <span>$220,000</span>
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
                <HiLocationMarker className=" text-red-400" /> 800-1800-24657
              </p>
              <p className="">jon@realestate.com</p>
            </div>
            <div>
            <p className=" text-lg mb-5 font-semibold border-b-2 border-gray-300 py-5">
              Request Inquiry
            </p>

            <button class=" py-3 px-5 leading-[24px] text-white bg-[#16a34a] hover:bg-[#138a3f] border rounded-full border-none cursor-pointer">Submit Request </button>
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
                <span>Florida 5, Pinecrest, FL</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>Price</span>
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>SubDivision</span>
                <span>$220,000</span>
              </li>
              <li className=" flex justify-between items-center pb-2">
                <span>City</span>
                <span>$220,000</span>
              </li>
            </ul>
          </div>
          {/*  Community  Information Start */}
        </div>
      </div>
    </div>
      )
}

export default PropertyDetail