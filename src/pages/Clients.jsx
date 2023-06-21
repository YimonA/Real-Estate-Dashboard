import axios from "axios";
import React, { useState, useEffect } from "react";
import ClientCard from "../Components/ClientCard";

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
    <div className=" ">
    <div className=" flex flex-wrap justify-center sm:justify-between gap-4">
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
