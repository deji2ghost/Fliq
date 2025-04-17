import React from 'react'
import { CardFooterProps } from './Types/cardfootertypes'

const Cardfooter:React.FC<CardFooterProps> = ({text}) => {
  return (
    <p className=''>{text}</p>
  )
}

export default Cardfooter
