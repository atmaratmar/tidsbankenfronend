import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Request",
    path: "/AddingRequest",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Calendar",
    path: "/Calendar",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Profile",
    path: "/UserProfile",
    icon: <IoIcons.IoIosPaper />,


  },

  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  }
];

export const SidebarDataAdmin = [

  {
    title: "Admin",
    path: "/AddInigiblP",
    icon: <IoIcons.IoMdPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Users",
    path: "UserList",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Status",
    path: "ListOfRequestAdmin",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Rejester",
    path: "UserForm",
    icon: <IoIcons.IoIosPaper />,
  },
  {
    title: "Settings",
    path: "SettingList",
    icon: <IoIcons.IoIosPaper />,
  },
];
