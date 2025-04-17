import ImageCard from '@/components/ui/ImageCard'
import { ImageData } from '@/data/data'
import React from 'react'

const Featured = () => {
  return (
    <div className="mb-[90px] md:mb-[178px] flex flex-col gap-[28px] md:gap-[48px]">
        <h1 className="text-[16px] md:text-[20px] font-[500] text-center text-commonGrey">
          Featured and seen in
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-[80px]">
          {ImageData.map((item, index) => (
            <ImageCard item={item} alt="images" key={index} />        
          ))}
        </div>
      </div>
  )
}

export default Featured
