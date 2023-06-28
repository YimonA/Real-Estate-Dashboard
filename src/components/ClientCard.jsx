import React from "react";
import { Card, Avatar } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ClientCard = ({ client }) => {
  console.log(client);
  const scrollTop = () => {
    window.scroll(0, 0);
  };
  return (
    <div className=" w-full ">
      <Link to={`/clientsDetail/${client?.id}`} state={client}>
        <Card
          onClick={scrollTop}
          href="#"
          className="flex flex-row items-center bg-[#fafafa]   rounded-none shadow hover:shadow-md transition-all w-72 md:w-96   hover:bg-gray-100 "
        >
          <Avatar
            className=""
            size="xxl"
            variant="circular"
            src={client?.image}
            alt="image"
          />
          <div className="flex flex-col  p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {client?.firstName + " " + client?.lastName}
            </h5>
            <p className="mb-3 text-xs text-gray-700  ">
              {client?.company?.title}
            </p>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default ClientCard;
