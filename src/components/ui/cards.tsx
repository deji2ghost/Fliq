import React from "react";
import { CardProps } from "./Types/card";

const Cards:React.FC<CardProps> = ({header, body, icon: Icon}) => {
  return (
    <div className="flex flex-col gap-[10px] md:w-[416px]">
      <div className="flex items-center gap-[8px]">
        <Icon className="text-[20px]" />
        <h1 className="text-[20px] md:text-[24px] font-[500]">{header}</h1>
      </div>
      <p className="text-[16px] font-[400] text-[#BDBDBD]">{body}</p>
    </div>
  );
};

export default Cards;
