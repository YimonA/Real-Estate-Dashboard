import React from "react";
import { createTheme, ThemeProvider} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import PropertyList from "./Pages/PropertyList";
import PropertyListItem from "./Components/PropertyListItem";
import Error from "./Pages/Error";
import Customer from "./Pages/Customer";
import ClientsDetails from "./Pages/ClientsDetails";
import AddPropertyCreate from "./Pages/AddPropertyCreate";

import "./index.css";
import 'animate.css';

const App = () => {

  const theme = createTheme({
    palette: {
      mode: "light",
      lightWhite: {
        main: 'rgb(255,255,255,0.55)',
      },
      lightWhiteHover: {
        main: 'rgb(255,255,255,0.75)'
      },
      caption: {
        fontSize: '14px',
        
      }
    },
    typography: {
      fontFamily: [
        'League Spartan',
        'sans-serif',
      ].join(','),
    }
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Routes>
        <Route path='/detail/:id' element={<SaleDetail/>} />
        <Route path='/create' element={<AddPropertyCreate/>} />
        <Route path='/property' element={<PropertyListItem/>} />

        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/propertylist' element={<PropertyList/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path="*" element={<Error/> }/>
        
        <Route path='/clientsDetail/:id' element={<ClientsDetails/>}/>
        </Routes>
        </ThemeProvider>
    </div>
  );
};

export default App;

//https://property-eof8.onrender.com/property
