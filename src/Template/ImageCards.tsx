import Image from "next/image";
import React from "react";

import mobileview from "../../public/fliq pictures/mobilePic.svg";
import dextopview from "../../public/fliq pictures/dextopPic.svg";

const ImageCards = () => {
  return (
    <>
      <div className="md:hidden mb-[60px] mx-auto w-full">
        <Image className="w-full" src={mobileview} alt="" />
      </div>
      <div className="hidden md:block mb-[107px]">
        <Image src={dextopview} alt="" />
      </div>
    </>
  );
};

export default ImageCards;
