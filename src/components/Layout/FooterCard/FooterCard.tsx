import React from 'react'
import { FooterCardProps } from './types'

const FooterCard:React.FC<FooterCardProps> = ({header, data}) => {
  return (
    <div>
      <h1>{header}</h1>
      <div>
        {
            data.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                )
            })
        }
      </div>
    </div>
  )
}

export default FooterCard
