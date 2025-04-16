import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'
import mobileview from "../../public/fliq pictures/mobilePic.svg"
import dextopview from "../../public/fliq pictures/dextopPic.svg"
import bigLogo from "../../public/fliq pictures/Big Logo.svg"
// import blurredmobile from "../../public/fliq pictures/blurred mobile.svg"
// import blurreddextop from "../../public/fliq pictures/blurred dextop.svg"
import card from "../../public/fliq pictures/card.svg"
import { options } from '@/data/data'
import { FaAddressCard } from 'react-icons/fa'

const Homepage = () => {
  return (
    <div className='mt-[86px]'>
      <div className='flex flex-col gap-6'>
        {/* <Image src={blurredmobile} /> */}
        <div className='flex flex-col gap-4'>
            <Button>Introducing Fliq Cards</Button>
            <h1>
                Building the future of banking.
            </h1>
            <p>Experience the future of banking with RAFT. Were here to empower your financial journey</p>
        </div>
        <Button>Get Started</Button>
      </div>
      <div className="md:hidden">
        <Image src={mobileview} alt="" />
      </div>
      <div className="hidden md:block">
        <Image src={dextopview} alt="" />
      </div>
      <div>
        <h1>Featured and seen in</h1>
      </div>
      <div>
        <h3>INTRODUCING</h3>
        <h1>Introducing Fliq's Next-Gen Cards</h1>
        <p>
        Discover Fliq’s latest innovation – our new cards. Elevate your banking experience with cutting-edge features, security, and unprecedented convenience.
        </p>
      </div>
      <div>
        <Image src={card} alt="" />
      </div>
      <div>
        {
            options.map((item, index) => (
                <div className='flex flex-col gap-[10px]' key={index}>
                    <div className='flex items-center'>
                        <FaAddressCard />
                        <h1>{item.header}</h1>
                    </div>
                    <p>{item.body}</p>
                </div>
            ))
        }
      </div>
      <div className='flex items-center'>
        <div><Image src={bigLogo} alt='logo' /></div>
        <h1>Fliq</h1>
      </div>
    </div>
  )
}

export default Homepage
