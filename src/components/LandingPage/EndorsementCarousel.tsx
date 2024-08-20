import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EndorsementCard from "../EndorsementCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function EndorsementCarousel({
  endorsements,
}: {
  endorsements: any;
}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 464);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ButtonGroup = ({
    next,
    previous,
  }: {
    next: () => void;
    previous: () => void;
  }) => {
    return (
      <div className="carousel-button-group absolute top-1/2 w-full flex justify-center">
        <div className="flex w-full lg:w-1/2 uhd:w-2/3 justify-between mx-1">
          <button
            onClick={() => previous()}
            className="carousel-button bg-white rounded-full p-2"
          >
            <ChevronLeftIcon className="size-6 text-black" />
          </button>
          <button
            onClick={() => next()}
            className="carousel-button  bg-white rounded-full p-2"
          >
            <ChevronRightIcon className="size-6 text-black" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <Carousel
        responsive={responsive}
        containerClass=""
        infinite={true}
        centerMode={!isMobile}
        customButtonGroup={
          <ButtonGroup
            next={function (): void {
              throw new Error("Function not implemented.");
            }}
            previous={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
        arrows={false}
      >
        {endorsements.map((endorsement: any) => (
          <EndorsementCard
            home
            key={endorsement.sys.id}
            details={endorsement}
          />
        ))}
      </Carousel>
    </div>
  );
}
