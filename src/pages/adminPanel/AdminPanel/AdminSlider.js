
import React from 'react'
import {   FaCartPlus, FaEnvelopeOpenText } from 'react-icons/fa'
import {  AiFillHome } from 'react-icons/ai'
import {  IoIosPaper, IoMdHelpCircle, IoMdPeople } from "react-icons/io"

export const AdminSlider =  [
  {
      title: "Home",
      path: "/" ,
      icon: <AiFillHome />,
      cName: 'nav-text'
  },
  {
    title: "My Order",
    path: "/adminPanel" ,
    icon: <FaEnvelopeOpenText />,
    cName: 'nav-text'
},
  {
    title: "Add Blog",
    path: "/createBlog" ,
    icon: <FaEnvelopeOpenText />,
    cName: 'nav-text'
},

]