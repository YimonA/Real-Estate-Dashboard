import axios from "axios";
import React, { useState, useEffect } from "react";
import ClientCard from "./ClientCard";

const Clients = () => {
    const [clients, setClients] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("https://client-data.onrender.com/client");
    //console.log(data);
    setClients(data);
  };
  console.log(clients);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" container mx-auto my-5 ">
    <div className=" flex flex-wrap justify-center">
      {clients?.map((client) => {
        return (
          <div key={client?.id} className="  items-center gap-2 my-3 px-10">
            <ClientCard client={client} />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Clients
