import React from 'react'
import barcode from "../../../../public/fliq pictures/QR_code_for_mobile_English_Wikipedia 1 (1).svg"
import Image from 'next/image'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import FooterCard from '../FooterCard/FooterCard'
import { FooterOne, FooterThree, FooterTwo } from '@/data/data'

const Footer = () => {
  return (
    <div className='border-t border-borderGrey'>
        <div>
            <div>
                <Image src={barcode} alt="barcode"/>
            </div>
            <div>
                <h1>Hope your test is going well.</h1>
                <div>
                <FaApple />
                <FaGooglePlay />
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2'>
            <FooterCard 
            header='About us'
            data={FooterOne}
            />
            <FooterCard 
            header='Legal'
            data={FooterTwo}
            />
            <FooterCard 
            header='Support us'
            data={FooterThree}
            />
        </div>
        <div className='flex items-center justify-between'>
            <h1>Goodluck on your Test</h1>
            <h2>Fliq co, LLC.</h2>
        </div>
    </div>
  )
}

export default Footer
