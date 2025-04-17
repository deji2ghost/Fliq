import Cards from "@/components/ui/cards";
import { options } from "@/data/data";
import React from "react";

const Options = () => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-8 md:gap-6 mb-[69px] lg:flex-row lg:w-[1296px] md:mx-auto">
      {options.map((item, index) => (
        <Cards
          key={index}
          icon={item.icons}
          header={item.header}
          body={item.body}
        />
      ))}
    </div>
  );
};

export default Options;
