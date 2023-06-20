import React from "react";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";

import { Chip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDeleteSaleMutation } from "../redux/api/saleApi";

const SaleCard = (saleProperty) => {
  const [deleteSale] = useDeleteSaleMutation();

  const scrollYHandler = () => {
    window.scroll(0, 0);
  };

  const deleteHandler = (id) => {
    const { data } = deleteSale({ id });
    console.log(data);
  };
  //console.log('length',saleProperty?.image)
  return (
    <div className=" w-full bg-white flex flex-col lg:flex-row justify-start items-center relative">
      <Chip
        className=" absolute top-2 left-0 font-normal text-base bg-green-500 normal-case rounded-none pb-0 z-20"
        color="green"
        value="For Sale"
      />

      {/*   */}

      <img
        src={
          saleProperty?.image[0]=== ""
            ? "https://v.seloger.com/s/width/600/visuels/1/s/6/b/1s6b3fma3h9vu5ueyi9inszasue2vptqg11m2r6y8.jpg"
            : saleProperty?.image[0]
        }
        className=" w-full h-52 lg:w-56 lg:h-56 object-center object-cover"
        alt=""
        loading="lazy"
      />

      <div className="w-full h-fit md:basis-8/12 md:h-56 px-3 flex flex-col  bg-white ">
        <div className=" w-full md:basis-8/12 flex flex-col lg:flex-row md:justify-between items-center">
          <div className=" w-full md:basis-8/12 h-full md:px-5 py-5">
            <Link to={`/saledetail/${saleProperty?.id}`}>
              <p
                onClick={scrollYHandler}
                className="font-semibold hover:text-green-600"
              >
                {saleProperty?.addressLine1}{" "}
              </p>
            </Link>
            <p className=" text-red-300">$ {saleProperty?.price}</p>
            <button onClick={() => deleteHandler(saleProperty?.id)} className="hidden">
              delete
            </button>
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
  );
};

export default SaleCard;
