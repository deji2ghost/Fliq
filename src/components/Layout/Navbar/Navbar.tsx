import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/fliq pictures/logo.svg"
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavData } from '@/data/data'
import { Button } from '@/components/ui/Button'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-3 px-6 md:px-[40px] md:py-4'>
      <div className='flex items-center'>
        <Image src={logo} alt='' />
        <h1>FLIQ</h1>
      </div>
      <div className='hidden md:flex items-center gap-[60px]'>
        {
          NavData.map((item, index) => (
            <p className='text-[16px] cursor-pointer hover:text-foreground font-[400] text-commonGrey' key={index}>{item}</p>
          ))
        }
      </div>
      <Button className='text-[16px] font-[600]' variant='outline'>Join the waitlist</Button>
      <RxHamburgerMenu className='md:hidden' />
    </div>
  )
}

export default Navbar
