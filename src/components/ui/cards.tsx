import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { CardProps } from "./Types/card";

const Cards:React.FC<CardProps> = ({header, body}) => {
  return (
    <div className="flex flex-col gap-[10px] md:w-[416px]">
      <div className="flex items-center gap-[8px]">
        <FaAddressCard />
        <h1 className="text-[20px] md:text-[24px] font-[500]">{header}</h1>
      </div>
      <p className="text-[16px] font-[400] text-[#BDBDBD]">{body}</p>
    </div>
  );
};

export default Cards;
