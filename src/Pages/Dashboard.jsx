import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Box } from '@mui/material'
import CssBaseline from "@mui/material/CssBaseline";

import Cookies from "js-cookie";
import { useLogoutMutation } from '../redux/api/authApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/services/authSlice';


const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(false);

  const user = JSON.parse(Cookies.get("user"));
    const token = Cookies.get("token");
    // console.log(user);
    // console.log(token);

    const [logout] = useLogoutMutation();

    const nav = useNavigate();

    const dispatch = useDispatch();

    const logoutHandler = async () => {
      const {data} = await logout(token);
      dispatch(removeUser());
      if(data?.success) {
        nav("/");
      };
      console.log(data);
    };

  // useEffect(()=>{
  //   if(window.outerWidth === 390){
  //     return(

  //       setOpen(false)
  //     )
      
  //   }
  // },[window.outerWidth])

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar open={open} setOpen={setOpen} user={user} logoutHandler={logoutHandler}/>
      <Sidebar open={open} setOpen={setOpen} close={close} setClose={setClose} user={user} logoutHandler={logoutHandler}/>
    </Box>
  )
}

export default Dashboard