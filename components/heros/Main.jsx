import React from "react";
import Greeting from "../sections/Greeting";
import ScrollRedLine from "../scroll/ScrollRedLine";
import WhatWeDo from "../sections/WhatWeDo";

export const Main = () => {
  return (
    <>
      <ScrollRedLine />
        <Greeting />
        <WhatWeDo />
        <Greeting />
    </>
  );
};
