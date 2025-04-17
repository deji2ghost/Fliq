import Image from 'next/image'
import React from 'react'
import bigLogo from "../../public/fliq pictures/Big Logo.svg";

const BigLogo = () => {
  return (
    <div className="flex items-start mb-[25px]">
        <div>
          <Image src={bigLogo} alt="logo" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="font-[400] text-[128px]">Fliq</h1>
            <span className="rounded-full h-[10px] w-[10px] bg-foreground mt-20"></span>
          </div>
          <p className="font-[400] text-[24px] text-center">by Blend</p>
        </div>
      </div>
  )
}

export default BigLogo
