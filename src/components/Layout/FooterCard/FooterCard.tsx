import React from 'react'
import { FooterCardProps } from './types'
import Cardfooter from '@/components/ui/cardfooter'

const FooterCard:React.FC<FooterCardProps> = ({header, data}) => {
  return (
    <div className='flex flex-col gap-4 md:w-[200px]'>
      <h1 className='font-[500] text-[20px]'>{header}</h1>
      <div className='font-[400] text-[16px] flex flex-col gap-3'>
        {
            data.map((item, index) => {
                return (
                    <Cardfooter key={index} text={item} />
                )
            })
        }
      </div>
    </div>
  )
}

export default FooterCard
