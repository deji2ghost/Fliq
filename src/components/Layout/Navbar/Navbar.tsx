import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/fliq pictures/logo.svg"
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-3 px-6'>
      <div className='flex items-center'>
        <Image src={logo} alt='' />
        <h1>FLIQ</h1>
      </div>
      <RxHamburgerMenu />
    </div>
  )
}

export default Navbar
