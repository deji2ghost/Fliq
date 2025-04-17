import Image from 'next/image'
import React from 'react'
import card from "../../public/fliq pictures/card.svg";

const CardImage = () => {
  return (
    <div className="mb-[101.39px] w-[350px] px-7 md:px-0 mx-auto">
        <Image className="w-full" src={card} alt="" />
      </div>
  )
}

export default CardImage
