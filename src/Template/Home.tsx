/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import mobileview from "../../public/fliq pictures/mobilePic.svg";
import dextopview from "../../public/fliq pictures/dextopPic.svg";
import bigLogo from "../../public/fliq pictures/Big Logo.svg";
// import blurredmobile from "../../public/fliq pictures/blurred mobile.svg"
// import blurreddextop from "../../public/fliq pictures/blurred dextop.svg"
import card from "../../public/fliq pictures/card.svg";
import { ImageData, options } from "@/data/data";
import Cards from "@/components/ui/cards";
import { BiChevronRight } from "react-icons/bi";

const Homepage = () => {
  return (
    <div className="mt-[86px] md:mt-[100px] md:1px-[40px] px-6">
      <div className="flex flex-col gap-6 mb-[70px] items-center md:w-[896px] md:mx-auto">
        {/* <Image src={blurredmobile} /> */}
        <div className="flex flex-col gap-4 items-center">
          <Button
            className="flex justify-between items-center text-[14px] md:hidden font-[400] md:text-[16px]"
            variant="secondary"
          >
            <span>Introducing Fliq Cards</span><BiChevronRight className="w-5 h-5" />
          </Button>
          <Button
            className="hidden items-center text-[14px] md:flex justify-between font-[400] md:text-[16px]"
            variant="secondary"
          >
            <span>Introducing Fliq Mobile banking App</span> <BiChevronRight className="w-5 h-5" />
          </Button>
          <h1 className="text-[40px] text-center font-[400] md:text-[96px]">
            Building the future of banking.
          </h1>
          <p className="text-center text-[16px] md:text-[24px] font-[400] md:w-[668px] text-commonGrey">
            Experience the future of banking with RAFT. Were here to empower
            your financial journey
          </p>
        </div>
        <Button className="text-[16px]">Get Started</Button>
      </div>
      <div className="md:hidden mb-[60px] mx-auto w-full">
        <Image className="w-full" src={mobileview} alt="" />
      </div>
      <div className="hidden md:block mb-[107px]">
        <Image src={dextopview} alt="" />
      </div>
      <div className="mb-[90px] md:mb-[178px] flex flex-col gap-[28px] md:gap-[48px]">
        <h1 className="text-[16px] md:text-[20px] font-[500] text-center text-commonGrey">
          Featured and seen in
        </h1>
        <div className="flex items-center justify-center gap-[80px]">
          {ImageData.map((item, index) => (
            <div key={index}>
              <Image src={item} alt="images" />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-[89px] md:mb-[102px] flex flex-col gap-[16px] md:gap-[24px] md:w-[896px] md:mx-auto">
        <h3 className="text-[16px] md:text-[18px] font-[500] text-customPurple text-center">
          INTRODUCING
        </h3>
        <h1 className="text-[36px] md:text-[76px] font-[400] text-center">
          Introducing Fliq's Next-Gen Cards
        </h1>
        <p className="text-[16px] md:text-[20px] font-[400] text-commonGrey text-center md:w-[668px] md:mx-auto">
          Discover Fliq’s latest innovation – our new cards. Elevate your
          banking experience with cutting-edge features, security, and
          unprecedented convenience.
        </p>
      </div>
      <div className="mb-[101.39px] w-[350px] px-7 md:px-0 mx-auto">
        <Image className="w-full" src={card} alt="" />
      </div>
      <div className="flex flex-col gap-8 md:gap-6 mb-[69px] md:flex-row md:w-[1296px] md:mx-auto">
        {options.map((item, index) => (
          <Cards key={index} header={item.header} body={item.body} />
        ))}
      </div>
      <div className="flex items-start mb-[25px]">
        <div>
          <Image src={bigLogo} alt="logo" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="font-[400] text-[128px]">Fliq</h1>
            <span className="rounded-full h-[10px] w-[10px] bg-foreground mt-20"></span>
          </div>
          <p className="font-[400] text-[24px] text-center">by Blend</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
