import React from "react";
import Greeting from "../sections/Greeting";
import ScrollIndicator from "../scroll/ScrollIndicator";
import ScrollRedLine from "../scroll/ScrollRedLine";


export const Main = () => {
  return (
    <>
      <ScrollRedLine />
        <Greeting />
        <Greeting />
        <Greeting />

    </>
  );
};
