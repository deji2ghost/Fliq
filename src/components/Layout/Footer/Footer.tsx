import React from "react";
import barcode from "../../../../public/fliq pictures/QR_code_for_mobile_English_Wikipedia 1 (1).svg";
import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import FooterCard from "../FooterCard/FooterCard";
import { FooterOne, FooterThree, FooterTwo } from "@/data/data";
import { BiChevronDown } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="px-6 md:px-[40px] mb-[31px] md:mb-[67px]">
      <div className="border-t border-borderGrey pt-[60px] md:flex md:justify-between">
        <div
          className="flex items-start gap-3 mb-[56px] py-5 px-4 rounded-lg"
          style={{
            border: "1px dotted white",
          }}
        >
          <div>
            <Image src={barcode} alt="barcode" />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-[400] text-[20px]">
              Hope your test is going well.
            </h1>
            <div className="flex items-center gap-3">
              <FaApple />
              <FaGooglePlay />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex md:items-start md:gap-[52px] gap-[48px] mb-[31px]">
          <FooterCard header="About us" data={FooterOne} />
          <FooterCard header="Legal" data={FooterTwo} />
          <FooterCard header="Support us" data={FooterThree} />
        </div>
      </div>
      <div className="flex items-center justify-between font-[400]">
        <div className="flex items-end gap-[18px]">
          <h1 className="text-[14px] md:text-[24px]">Goodluck on your Test</h1>
          <BiChevronDown />
        </div>
        <h2 className="text-[14px] md:text-[16px]">&copy; Fliq co, LLC.</h2>
      </div>
    </div>
  );
};

export default Footer;
