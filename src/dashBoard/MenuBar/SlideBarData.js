import React from 'react'
import {   FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa'
import {  AiFillHome } from 'react-icons/ai'
import {  IoIosPaper, IoMdHelpCircle, IoMdPeople } from "react-icons/io"

export const SlideBarData = [
  {
      title: "Home",
      path: "/" ,
      icon: <AiFillHome />,
      cName: 'nav-text'
  },
   {
    title: "Add Service",
    path: "/addBlog" ,
    icon: <IoMdPeople />,
    cName: 'nav-text'
},
  
{
      title: "Manage Service",
      path: "/manageService" ,
      icon: <IoIosPaper />,
      cName: 'nav-text'
  },
  {
      title: "Manage Blog",
      path: "/manageBlog" ,
      icon: <FaCartPlus />,
      cName: 'nav-text'
  },
  {
      title: "Admin Role",
      path: "/makeAdmin" ,
      icon: <IoMdHelpCircle />,
      cName: 'nav-text'
  }
]