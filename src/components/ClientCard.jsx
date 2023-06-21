import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ClientCard = ({client}) => {
    console.log(client);
  const scrollTop=()=>{
    window.scroll(0,0);
  }
  return (
    <div className=" w-full ">
    <Link to={`/clientsDetail/${client?.id}` } state={client}>
    <Card onClick={scrollTop}
       shadow={true} 
       className=" hover:shadow-xl transition-all bg-[#fafafa] rounded-none  flex flex-col px-8 py-2 w-52 h-72"
     >
       <CardHeader
         color="transparent"
         floated={false}
         shadow={false}
         className="mx-0 flex justify-center gap-4 pt-0 pb-8"
       >
         <Avatar
           className=""
           size="xl"
           variant="circular"
           src={client?.image}
           alt="image"
         />
       </CardHeader>
       <CardBody className="mb-3 p-0 justify-center">
         <div className="flex w-full flex-col justify-center items-center gap-0.5">
           <Typography variant="h3" className="text-green-600">
             {client?.firstName}
           </Typography>
           <Typography className="text-green-500 text-sm">
             {client?.company?.title.slice(0, 15)}
           </Typography>
         </div>
       </CardBody>
     </Card>
    </Link>
   </div>
  )
}

export default ClientCard
