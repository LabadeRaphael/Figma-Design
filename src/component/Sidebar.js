import React, { useEffect } from 'react'
import '../styles/Sidebar.css'
import {SidebarData} from './SidebarData'
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { PiSignOut } from 'react-icons/pi';
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { useState} from 'react';
import { delay, motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';


const Sidebar = (props) => {
    const [selected, setselected] = useState(0)
    const [expanded, setexpanded] = useState(true)
    const navigate=useNavigate()
    const [isActive,setisActive] = useState(false)

    const handleNavigate=(item,index)=>{
        setselected(index)
        navigate(item.navigate)
        setexpanded(false)
        setisActive(true)
    }

    const sideBarVariants ={
        true:{
            left:0,
        },
        false:{
            left:'-60%'
            
        }
    }
  return (
    <>
        
        <div className='bars bg-light shadow-lg' style={expanded?{left:'55%'}:{left:'1%'}} onClick={()=>setexpanded(!expanded)}>
            <FaArrowsLeftRight size={35}/>

            </div>
        <motion.div className="Sidebar"
            variants={sideBarVariants}
            animate={window.innerWidth<=768?`${expanded}`:''}
        >
            {/* logo */}
            <div className="logo">
                <div>Peak</div>
            </div>
            {/* menu */}
            <div className="menu">
                {SidebarData.map((item,index)=>{
                    return(
                        <div className={selected===index?'menuItem active':'menuItem'} key={index} onClick={()=>handleNavigate(item,index)}>
                            <item.icon size={30}/>
                            <span>
                                {item.heading}
                            </span>
                            <div className='arrow float-end ps-4'>
                                <IconButton  size='medium'>
                                    <RiArrowDropRightLine/>
                                </IconButton>
                            </div>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <Button className='rounded-pill btn' variant="outlined"  endIcon={<PiSignOut/>}>Signout</Button>
                </div>
            </div>
        </motion.div>
    </>
  );
}

export default Sidebar