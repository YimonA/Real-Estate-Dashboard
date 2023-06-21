
import Clients from './Pages/Clients'
import ClientsDetails from './Pages/ClientsDetails';
import React from "react";
import { createTheme, ThemeProvider} from "@mui/material";

import PropertyList from "./Pages/PropertyList";
import SaleDetail from "./Pages/SaleDetail";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import RentDetail from "./Pages/RentDetail";
import SaleCreate from "./Pages/SaleCreate";
import RentCreate from "./Pages/RentCreate";


import 'animate.css';
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import PropertyListItem from "./Components/PropertyListItem";
import Error from "./Pages/Error";
import AddProperty from "./Pages/AddProperty";
import Customer from "./Pages/Customer";


const App = () => {
  const properties = [
    {
      id: "1",
      title: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
      image:
        "https://hously-react.vercel.app/static/media/1.bfd273967d5b93df7a02.jpg",
    },
    {
      id: "2",
      title: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
      image:
        "https://hously-react.vercel.app/static/media/2.e5bc3d17749573c2fd3e.jpg",
    },
    {
      id: "3",
      title: "3723 SANDBAR DR, Addis, LA 70710, USA",
      image:
        "https://hously-react.vercel.app/static/media/3.c799274c67ecb7c94a70.jpg",
    },
    {
      id: "4",
      title: "Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA",
      image:
        "https://hously-react.vercel.app/static/media/4.1cefc41c08f3161f9c19.jpg",
    },
    {
      id: "5",
      title: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA",
      image:
        "https://hously-react.vercel.app/static/media/5.289f490cebbaef2f5f58.jpg",
    },
    {
      id: "6",
      title: "5133 MCLAIN WAY, Baton Rouge, LA 70809, USA",
      image:
        "https://hously-react.vercel.app/static/media/6.e926f8483d02a9e86342.jpg",
    },
  ];

  const theme = createTheme({
    palette: {
      mode: "light",
      lightWhite: {
        main: "rgb(255,255,255,0.55)",
      },
      lightWhiteHover: {
        main: "rgb(255,255,255,0.75)",
      },
      caption: {
        fontSize: "14px",
      },
    },
    typography: {
      fontFamily: ["League Spartan", "sans-serif"].join(","),
    },
  });

  return (

    <div>
      <ThemeProvider theme={theme}>
        <Routes>
          
    <Route path='/clients' element={<Clients/>}/>
    <Route path='/clientsDetail/:id' element={<ClientsDetails/>}/>
   
  
        <Route path={"/property"} element={<PropertyList/>} />
        <Route path='/saledetail/:id' element={<SaleDetail/>} />
        <Route path='/rentdetail/:id' element={<RentDetail/>} />
        <Route path='/salecreate' element={<SaleCreate/>} />
        <Route path='/rentcreate' element={<RentCreate/>} />
        


          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/propertylist" element={<PropertyList />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </div>

  );
};

export default App;
//https://property-eof8.onrender.com/property
