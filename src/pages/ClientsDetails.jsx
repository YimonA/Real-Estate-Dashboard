import React from "react";
import { useLocation } from "react-router-dom";
import {  Card, Typography } from "@material-tailwind/react";
import {AiFillStar} from "react-icons/ai"
import {MdArrowBack} from "react-icons/md"
import { Link } from "react-router-dom";
import BgBlockCard from "../Components/BgBlockCard";

const ClientsDetails = () => {
    const location = useLocation();
  const clientData = location.state;
  console.log(clientData);
  return (
    <div className=" container mx-auto my-5 ">
    <Link to={"/clients"}>
    <div className=" px-8 md:px-0">
    <MdArrowBack className="w-7 h-7"/>
    </div>
    </Link>
    <div className=" flex flex-col md:flex-row gap-3">
       <div className=" basis-1/2 md:basis-1/4 mx-auto my-5 ">
        <BgBlockCard clientData={clientData}/>
       </div>
       <Card shadow={false} className=" basic-1/2 md:basis-3/4 mx-auto my-5 w-72 lg:w-96">
         <div className="flex flex-col lg:flex-row">
           <div className=" basis-1/2 px-4 py-2">
             <p className=" text-sm text-gray-600">
               Full Name 
             </p>
             <p className=" font-semibold">
             {clientData?.firstName + " " + clientData?.lastName}
             </p>
           </div>
           <div className=" basis-1/2 px-4 py-2">
             <p className=" text-sm text-gray-600">Phone  </p>
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
             <p className=" font-semibold"> {clientData?.address?.address}</p>
           </div>
         </div>
         <div className="flex flex-col lg:flex-row">
           <div className=" basis-1/2 px-4 py-2">
             <p className=" text-sm text-gray-600">Job  </p>
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
        <Typography variant="h4" className="lg:text-center px-4"> Transaction History</Typography>
         <div className="flex flex-col ">
           <div className="basis-1/2 px-4 py-2">
           <p className="text-sm text-gray-600">Transaction date</p>
           <p className=" font-semibold">{clientData?.company?.transactionDate}</p>
           </div>
           <div className="basis-1/2 px-4 py-2">
           <p className="text-sm text-gray-600">Bank Account</p>
           <p className=" font-semibold">{clientData?.company?.cardNumber}</p>
           </div>
           <div className="basis-1/2 px-4 py-2">
           <p className="text-sm text-gray-600">Deal Status - currently</p>
           <p className=" font-semibold">{clientData?.company?.dealStatus}</p>
           </div>

         </div>
        </Card>
       </div>
       <div className=" basic-1/2 lg:basis-3/4 mx-auto my-5">
       <Card shadow={false} className="w-72 lg:w-96">
        <Typography variant="h4" className="lg:text-center px-4"> Reviewed by {clientData?.firstName}</Typography>
         <div className="flex flex-col ">
           <div className="basis-1/2 px-4 py-2">
           <p className=" flex flex-row gap-2">
             <span><AiFillStar className="text-yellow-600 mt-1"/></span>
              <span className=" font-semibold">{clientData?.review?.rating}/5</span></p>

           </div>
           <div className="basis-1/2 px-4 py-2">
           <p className=" italic">
             <span>
            
             ` {clientData?.review?.written}`
            
             </span>
           </p>

           </div>
          

         </div>
        </Card>
       </div>
     </div>
    

   </div>
  )
}

export default ClientsDetails
