import React from "react";
import Herosection from "./Herosection";
import Featured from "./Featured";
import IntroducingCards from "./IntroducingCards";
import ImageCards from "./ImageCards";
import BigLogo from "./BigLogo";
import Options from "./Options";
import CardImage from "./CardImage";

const Homepage = () => {
  return (
    <div className="mt-[86px] md:mt-[100px] md:px-[40px] px-6">
      <Herosection />
      <ImageCards />
      <Featured />
      <IntroducingCards />
      <CardImage />
      <Options />
      <BigLogo />
    </div>
  );
};

export default Homepage;
