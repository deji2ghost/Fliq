import { Button } from "@/components/ui/Button";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Herosection = () => {
  return (
    <div className="flex flex-col gap-6 mb-[70px] items-center lg:w-[896px] md:mx-auto bg-hero-mobile md:bg-hero-desktop">
      <div className="flex flex-col gap-4 items-center">
        <Button
          className="flex justify-center gap-2 items-center text-[14px] md:hidden font-[400] md:text-[16px]"
          variant="secondary"
        >
          <span>Introducing Fliq Cards</span>
          <BiChevronRight className=" h-5" />
        </Button>
        <Button
          className="hidden items-center text-[14px] md:flex justify-center gap-2 font-[400] md:text-[16px]"
          variant="secondary"
        >
          <span>Introducing Fliq Mobile banking App</span>{" "}
          <BiChevronRight className=" h-5" />
        </Button>
        <h1 className="text-[40px] text-center font-[400] md:text-[96px]">
          Building the future of banking.
        </h1>
        <p className="text-center text-[16px] md:text-[24px] font-[400] md:w-[668px] text-commonGrey">
          Experience the future of banking with RAFT. Were here to empower your
          financial journey
        </p>
      </div>
      <Button className="text-[16px]">Get Started</Button>
    </div>
  );
};

export default Herosection;
