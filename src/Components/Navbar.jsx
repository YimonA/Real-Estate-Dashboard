import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

import { IconButton, Toolbar } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import TheatersIcon from "@mui/icons-material/Theaters";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";

import { FaLink } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { SlSettings } from "react-icons/sl";
import { TfiUser, TfiEmail } from "react-icons/tfi";
import { MdChevronRight } from "react-icons/md";
import TheaterImageLists from "./TheaterImageLists";
import ProfileMenuItems from "./ProfileMenuItems";

const drawerWidth = 240;
const drawerSmallWidth = 57;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  // zIndex: theme.zIndex.drawer + 1,
  width: `calc(100% - ${drawerSmallWidth}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function NavList({ user, logoutHandler }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const [noti, setNoti] = useState(false);
  const [theater, setTheater] = useState(false);

  const notiItems = [
    {
      icon: <FaLink />,
      color: "#e46a76",
      title: "Lunch Admin",
      p1: "Just see the my new admin!",
      p2: "9:30 AM",
    },
    {
      icon: <AiOutlineCalendar />,
      color: "#15803d",
      title: "Event today",
      p1: "Just a reminder that you have event",
      p2: "9:10 AM",
    },
    {
      icon: <SlSettings />,
      color: "#03a9f3",
      title: "Settings",
      p1: "You can customize this template as you want",
      p2: "9:08 AM",
    },
    {
      icon: <TfiUser />,
      color: "#fb9678",
      title: "Pavan kumar",
      p1: "Just see the my admin!",
      p2: "9:02 AM",
    },
  ];
  return (
    <ul className="my-2 mb-0 mt-0 flex flex-wrap items-center gap-6 me-5">
      <div className="relative flex">
        <TfiEmail
          className="text-[21px] text-[rgba(255,255,255,.55)] cursor-pointer hover:text-[#ffffffbf]"
          onClick={() => setNoti(!noti)}
        />
        <span className="animate-ping absolute w-[16px] h-[16px] border border-5 border-[#d32f2f] rounded-full -top-[10px] -right-[4px] bg-[#d32f2f] z-10 "></span>
        <span className="relative w-[8px] h-[8px] border border-5 border-[#d32f2f] rounded-full -top-[5px] right-[1px] bg-[#d32f2f]"></span>

        <div
          className={
            noti
              ? "relative animate__animated animate__bounceInDown"
              : " hidden"
          }
        >
          <div className=" w-[300px] h-[428] bg-white absolute top-[48px] -right-[15px] border border-[#e9ecef] rounded z-10 text-black">
            <ul>
              <li className=" px-[20px] py-[15px] text-[15px] font-semibold border-b border-b-[#e9ecef]">
                Notification
              </li>
              <li>
                <div className="h-[317px] overflow-y-scroll overflow-x-hidden">
                  {notiItems.map((item, i) => {
                    return (
                      <div className="flex border-b border-b-[#e9ecef] " key={i}>
                        <div className="flex items-center py-[9px] px-[15px] gap-4">
                          <div
                            className={` bg-[${item.color}] border-[${item.color}] rounded-full w-[40px] h-[40px] p-[10px]`}
                          >
                            <div className="z-20 text-white text-center text-[14px] font-extrabold m-[2px]">
                              {item.icon}
                            </div>
                          </div>
                          <div className="text-[#212529]">
                            <h1 className=" tracking-wide text-[18px] font-medium ">
                              {item.title}
                            </h1>
                            <p className="text-[14px] truncate">
                              <span>{item.p1} </span>
                            </p>
                            <p className="text-[14px]">{item.p2}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </li>
              <li className=" flex justify-center items-center px-[20px] py-[15px] text-[15px] font-semibold border-b border-b-[#e9ecef] cursor-pointer hover:text-green-700">
                <p className="">Check all Notifications </p>
                <MdChevronRight className=" font-bold" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative flex">
        <EditNoteIcon className="text-[30px] text-[rgba(255,255,255,.55)] cursor-pointer hover:text-[#ffffffbf]" />
        <span className="animate-ping absolute w-[16px] h-[16px] border border-5 border-[#d32f2f] rounded-full -top-[6px] right-[5px] bg-[#d32f2f] z-10 "></span>
        <span className="relative w-[8px] h-[8px] border border-5 border-[#d32f2f] rounded-full -top-[2px] right-[9px] bg-[#d32f2f]"></span>
      </div>

      <div className="relative">
        <TheatersIcon
          color="lightWhite"
          className="cursor-pointer hover:text-[#ffffffbf]"
          onClick={() => setTheater(!theater)}
        />

        <div className={theater ? " relative" : "hidden"}>
          <div className="w-[1500px] h-[400px] bg-white absolute top-[18px] -right-[150px] overflow-y-scroll py-5">
            <TheaterImageLists />
          </div>
        </div>
      </div>

      <ProfileMenuItems
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        closeMenu={closeMenu}
        user={user}
        logoutHandler={logoutHandler}
      />
    </ul>
  );
}

const Navbar = (props) => {
  const { open, setOpen, user, logoutHandler } = props;
  const theme = useTheme();

  const reload = () => window.location.reload(true);

  const [oWidth, setOWidth] = useState(window.outerWidth);

  useEffect(() => {
    if (
      window.outerWidth < 400 ||
      window.outerWidth < 510 ||
      window.outerWidth < 830
    ) {
      return setOpen(false);
    }
    console.log(oWidth);
  }, [oWidth]);

  return (
    <AppBar
      position="fixed"
      open={open}
      className=" w-[80%] md:w-full"
      sx={{ backgroundColor: "rgb(21, 128, 61)" }}
    >
      <div className="flex items-center justify-between gap-5">
        <div className="flex flex-wrap items-center gap-4">
          <Toolbar>
            <IconButton
              color="lightWhite"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
              sx={{ mr: 2, ...open }}
            >
              <MenuIcon className="hover:text-[#ffffffbf]" />
            </IconButton>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search & enter"
              className=" ps-5 py-1 border-dark-900 border rounded-full focus:outline-none text-black hidden md:block"
            />
          </Toolbar>
        </div>
        <div className="">
          <NavList user={user} logoutHandler={logoutHandler} />
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
