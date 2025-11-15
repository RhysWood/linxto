"use client";
import React from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Greeting() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className="h-screen">
      <div
        className="flex flex-col items-center w-1/2 linx_welcome"
        style={{ position: "absolute", top: y }}
      >
        <h1 className="linx_welcome_title">
          WE ARE <span className="text-linx-red text">LINXTO</span>, offering
          solutions to Project Controls, Forensic Delay Analysis and Expert
          Witness Services
        </h1>
      </div>
    </div>
  );
}
