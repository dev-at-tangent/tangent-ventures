import Lottie from "lottie-react";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import data3 from "../assets/lotties/holo.json";

export default function ReactComponent() {
  return (
    <div className="relative">
      <Lottie animationData={data3} />

    </div>
  );
}
