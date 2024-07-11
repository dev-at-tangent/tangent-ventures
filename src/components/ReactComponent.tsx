import React from "react";
import Lottie from "lottie-react";
import data from "../assets/lotties/holo9.json";
import data2 from "../assets/lotties/holo12.json";
import data3 from "../assets/lotties/holo11.json";

export default function ReactComponent() {
  return (
    <div className="relative">
      <Lottie animationData={data} />
      <Lottie animationData={data3} />
      <Lottie animationData={data2} />
    </div>
  );
}
