import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { RiTeamLine } from "react-icons/ri";
import { TbClockHour1 } from "react-icons/tb";
import { MdOutlineEditCalendar } from "react-icons/md";

export const SidebarData=[
  {
    icon: MdOutlineSpaceDashboard,
    navigate:'dashboard',
    heading: "Dashboard",
  },
  {
    icon: GoTasklist,
    navigate:'task',
    heading: "My Tasks",

  },
  {
    icon: RiTeamLine ,
    navigate:'team',
    heading: "Manage Team",

  },
  {
    icon: TbClockHour1,
    navigate:'report',
    heading: "Hours Reports",

  },
  {
    icon:  MdOutlineEditCalendar,
    navigate:'time',
    heading: "Edit Time",

  },
  {
    icon:  MdOutlineEditCalendar,
    navigate:'setting',
    heading: "Settings",

  }
]