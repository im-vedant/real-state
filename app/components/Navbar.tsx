'use client'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({toggleSidebar} : {toggleSidebar : any}) => {
    const navlinks=["Properties","Home Search","Contact Us", "(760) 801-7993"]
  return (
    <div className='py-[5px] z-[30] bg-transparent fixed w-full'>
        <div className='px-5 mt-6 flex flex-row justify-between items-center'>
            <img className='max-h-[70px]' src={"https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/gslzsjkmloa31eadzsi7/logo-white"} alt="" />
            <div className='flex cursor-pointer flex-row capitalize items-center'>
                {
                    navlinks.map((link, index)=>{
                        return <div className='px-[10px] uppercase font-semibold font-serif text-white py-[19px] ' key={index}>{link}</div>
                    })
                }
                <div onClick={toggleSidebar} className='px-[10px] py-[19px]'>
                    <RxHamburgerMenu color='white'  size={24}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar