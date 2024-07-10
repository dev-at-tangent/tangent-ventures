import React from "react";
import Lottie from "lottie-react";
import data from "../assets/lotties/test.json";

export default function ReactComponent() {
  return (
    <div className="bg-[url('/contactBG.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Lottie animationData={data} />
    </div>
  );
}
