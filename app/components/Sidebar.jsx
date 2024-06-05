'use client'
// src/components/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = ({toggleSidebar, isOpen}) => {
  
const list =["Home", "Meet the Team", "Properties", "Home Search","Home Valuation","Neighbourhood","Staging Services","Contact Us"];
  return (
    <div className="relative z-[60] h-0 w-full">
      

      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-black text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
       <div className='mt-[100px] px-5'>
       <button
          className=" text-right pr-9 w-full text-4xl"
          onClick={toggleSidebar}
        >
          &times;
        </button>
       <div className=''>
        {
          list.map((l,i)=>{return <p key={i} className='text-center text-white font-serif text-[23px] uppercase py-[5px]  cursor-pointer'>{l}</p>})
        }
       </div>
       </div>
      </div>
    </div>
  );
};

export default Sidebar;


