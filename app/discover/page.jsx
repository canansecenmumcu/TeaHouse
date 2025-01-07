import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Herr_Von_Muellerhoff } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const herrVonMuellerhoff = Herr_Von_Muellerhoff({
  subsets: ["latin"],
  weight: "400",
});

const images = [
  /* { src: "/img/11.jpg", alt: "11" },
  { src: "/img/12.jpg", alt: "12" },
  { src: "/img/13.jpg", alt: "13" },
  { src: "/img/14.jpg", alt: "14" }, */
  { src: "/img/15.jpg", alt: "15" },
  { src: "/img/16.jpg", alt: "16" },
  { src: "/img/18.jpg", alt: "18" },
  { src: "/img/17.jpg", alt: "17" },
];

const DiscoverPage = () => {
  return (
    <div className="pb-14">
      {/* About Title */}
      <div className="flex flex-col items-center justify-center gap-3 m-14 ">
        <h2
          className={`text-3xl uppercase font-semibold text-darkBrown ${poppins.className} `}
        >
          our journey
        </h2>
        <div className="h-1 w-10 bg-darkBrown " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-[150px] mb-14 ">
        {/* Text Container */}
        <div className="flex flex-col items-center justify-center px-32 ">
          <h4
            className={`uppercase text-6xl my-[25px] text-brown ${herrVonMuellerhoff.className} `}
          >
            menu
          </h4>
          <div className="my-[25px]">
            <FontAwesomeIcon icon={faAsterisk} />
          </div>
          <p className="font-times text-[15px] text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            explicabo, nobis, tempora itaque aliquid, voluptatem sint distinctio
            labore maxime deleniti iste consectetur. Omnis, cum. Accusamus animi
            id atque qui unde? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sit cum tempore mollitia? Quod, placeat
            asperiores, nam quasi impedit quas adipisci accusantium vero
            consequatur, error exercitationem ea! Dignissimos rem ipsa harum?
          </p>
        </div>
        {/* Image Container */}
        {/* <div className="flex items-center justify-center">
          <Image src="/menu.jpg" alt="About" width={500} height={500} />
        </div> */}
        <div className="grid grid-cols-2 w-full h-auto ">
        {images.map((image, index) => (
          <div key={index} className="portfolio-item ">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="image  "
            />
            {image.alt % 2 === 0 ? (
              <div className="overlay">
                {" "}
                <FontAwesomeIcon icon={faMugHot} />{" "}
              </div>
            ) : (
              <div className="overlay">
                {" "}
                <FontAwesomeIcon icon={faCookieBite} />{" "}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
      {/* Portfolio Container */}
      {/* <div className="flex flex-wrap cursor-pointer ">
        {images.map((image, index) => (
          <div key={index} className="portfolio-item ">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={300}
              className="image  "
            />
            {image.alt % 2 === 0 ? (
              <div className="overlay">
                {" "}
                <FontAwesomeIcon icon={faMugHot} />{" "}
              </div>
            ) : (
              <div className="overlay">
                {" "}
                <FontAwesomeIcon icon={faCookieBite} />{" "}
              </div>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DiscoverPage;
