import React from 'react'
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VillaIcon from '@mui/icons-material/Villa';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import { NavLink } from 'react-router-dom';

const SidebarItems = ({open, close}) => {
    const personalItem = [
        {
            path: '/home',
            icon: <SpeedIcon/>,
            name: 'dashboard',
        },
        {
            path: '/customer',
            icon: <PeopleAltIcon/>,
            name: 'customer',
        },
        // {
        //   path: '/clientsDetail',
        //   icon: <PeopleAltIcon/>,
        //   name: 'customer detail',
        // }
    ]

    const propertyListItem = [
      {
        path: '/propertylist',
        icon: <VillaIcon/>,
        name: 'property list',
      },
      // {
      //   path: '/rentdetail',
      //   icon: <TaskAltIcon/>,
      //   name: 'property rent detail',
      // },
      // {
      //   path: '/saledetail',
      //   icon: <TaskAltIcon/>,
      //   name: 'property sale detail',
      // },
      {
        path: '/rentcreate',
        icon: <AddHomeWorkIcon/>,
        name: 'add rent property',
      },
      {
        path: '/salecreate',
        icon: <AddHomeWorkIcon/>,
        name: 'add sale property',
      },
    ]

  return (
    <div className=' '> 

      {/* divider */}
      {open ? ( <div className="mb-4">
       <h1 className="text-[#6c757d] uppercase pt-[30px] pr-[14px] pb-[14px] pl-0 text-[12px] font-semibold">---personal</h1>
      </div>) : ""}

      {/* Dashboard, Customer  */} 
      <div className=" ">
        {personalItem?.map((item, i) => {
            return(
             <div className=" hover:bg-[#0000000a]" key={i}> {/* text-[#8d97ad] text-green-700 */}
               <NavLink to={item.path} className={`flex py-[10px] px-[20px] gap-[15px] text-[16px] transition-all duration-[0.5s] text-[#8d97ad] ${({ isActive })=> (isActive? "active": " border-l-4 border-transparent")}`}>
                  <div className={` me-2 ${ open ? " ": " -ml-[4px] py-2" } `}>{item.icon}</div>
                  <div className={`${ open ? " capitalize mt-[2px] " : "hidden"} `}>{item.name}</div> 
              </NavLink>
             </div>
            )
        })}
      </div>

      {/* divider */}
      {open ? ( <div className="mb-4">
       <h1 className="text-[#6c757d] uppercase pt-[30px] pr-[14px] pb-[14px] pl-0 text-[12px] font-semibold">---professional</h1>
      </div>) : ""}

      {/* Property */}
      <div className=" ">
        {propertyListItem?.map((item, i) => {
            return(
             <div className=" hover:bg-[#0000000a]" key={i}> {/* text-[#8d97ad] text-green-700 */}
               <NavLink to={item.path} className={`flex py-[10px] px-[20px] gap-[15px] text-[16px] transition-all duration-[0.5s] text-[#8d97ad] ${({ isActive })=> (isActive? "active": " border-l-4 border-transparent")}`}>
               <div className={` me-2 ${ open ? " ": " -ml-[4px] py-2" } `}>{item.icon}</div>
                  <div className={`${ open ? " capitalize mt-[2px] " : "hidden"} `}>{item.name}</div> 
              </NavLink>
             </div>
            )
        })}
      </div>
      
    </div>
  )
}

export default SidebarItems