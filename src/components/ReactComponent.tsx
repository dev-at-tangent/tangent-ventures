import React from "react";
import Lottie from "lottie-react";
import data from "./holo.json";

export default function ReactComponent() {
  return (
    <div className="bg-black">
      <Lottie animationData={data} />
    </div>
  );
}
