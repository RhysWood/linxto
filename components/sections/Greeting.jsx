import React from "react";

export default function Greeting() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="col-span-1">
        {/* Your content for the left-hand side goes here */}
      </div>
      <div className="col-span-1 flex flex-col items-center justify-end h-[calc(100vh-450px)] linx_welcome">
        <h1 className="linx_welcome_title">
          Professional Project Controls, Forensic Delay Analysis and Expert
          Witness Services
        </h1>
      </div>
    </div>
  );
};
