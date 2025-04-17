"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../../../public/fliq pictures/logo.svg"
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavData } from '@/data/data'
import { Button } from '@/components/ui/Button'
import { BiX } from 'react-icons/bi'

const Navbar = () => {
  const [toggle, setToggled] = useState(false);

  const handleNavDrop = () => {
    setToggled(!toggle)
  }
  return (
    <div className='flex items-center justify-between py-3 px-6 md:px-[40px] md:py-4 md:border-b-[0.5px] md:border-borderGrey'>
      <div className='flex items-center'>
        <Image src={logo} alt='' />
        <h1>FLIQ</h1>
      </div>
      <div className={`${toggle ? "max-h-[500px]" : "max-h-0"} absolute left-0 top-[60px] bg-background w-full overflow-hidden transition-max-height duration-500 ease-in-out md:hidden flex-col`}>
        <div className="flex flex-col md:flex-row items-center text-grey gap-[10px]">
        {
          NavData.map((item, index) => (
            <p className='text-[16px] cursor-pointer hover:text-foreground font-[400] text-commonGrey' key={index}>{item}</p>
          ))
        }
        </div>
        <Button className='text-[16px] font-[600] mx-auto flex justify-center my-[10px]' variant='outline'>Join the waitlist</Button>
      </div>
      <div className='hidden md:flex md:flex-row items-center gap-[60px]'>
        {
          NavData.map((item, index) => (
            <p className='text-[16px] cursor-pointer hover:text-foreground font-[400] text-commonGrey' key={index}>{item}</p>
          ))
        }
      </div>
      <Button className='text-[16px] font-[600] hidden md:block' variant='outline'>Join the waitlist</Button>
      {toggle ? <BiX size={30} onClick={handleNavDrop} /> : <RxHamburgerMenu size={30} onClick={handleNavDrop} className='md:hidden' />}
    </div>
  )
}

export default Navbar
