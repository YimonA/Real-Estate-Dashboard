import React from "react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@mui/material";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";


const ProfileMenuItems = (props) => {

  const {isMenuOpen, setIsMenuOpen, closeMenu, user, logoutHandler } = props;
  
  return (
   <div className=" hidden sm:block">
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end" >
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className=" p-0.5"
            src="http://eliteadmin.themedesigner.in/demos/bt4/assets/images/users/1.jpg"
          />
          <Typography className=" hidden md:block text-sm capitalize text-[#ffffff8c] hover:text-[#ffffffbf]">
            {(user?.name).slice(0,5)}
          </Typography>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform text-[#ffffff8c] hover:text-[#ffffffbf] ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 z-[1300]">
        <MenuItem
          onClick={''}
          className="flex items-center gap-2 rounded"
        >
          <UserCircleIcon className="w-4 h-4" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color={"inherit"}
          >
            My Profile
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={''}
          className="flex items-center gap-2 rounded"
        >
          <InboxArrowDownIcon className="w-4 h-4" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color={"inherit"}
          >
            Inbox
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={''}
          className="flex items-center gap-2 rounded"
        >
          <Cog6ToothIcon className="w-4 h-4" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color={"inherit"}
          >
            Account Setting
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={logoutHandler}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <PowerIcon className="w-4 h-4 text-red-500" />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color={"red"}
          >
            Log Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
    </div>
  
  );
};

export default ProfileMenuItems;
