import Image from "next/image";
import React from "react";
import { ImagecardProps } from "./Types/imagecardtypes";

const ImageCard:React.FC<ImagecardProps> = ({item, alt}) => {
  return (
    <div className="w-[100px] md:w-[120px]" >
      <Image className="w-full" src={item} alt={alt} />
    </div>
  );
};

export default ImageCard;
