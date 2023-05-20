import React from "react";
import Image from "next/image";

const CardMax = ({ title, date, src, alt, description }) => {
  const descriptionWithLineBreaks = description
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  return (
    // <div className="bg-minuit h-60">
    <div>
      <div className="h-auto flex flex-col my-6 bg-gray-200 p-6 md:flex-row">
        <div className="flex items-center border-4 border-white md:w-1/2">
          <Image
            className="h-96 grayscale"
            src={src}
            alt={alt}
            width={800}
            height={500}
            style={{ objectFit: "contain" }}
          />
        </div>
        {/* <div className="text-white pt-1 pl-2"> */}
        <div className="text-black px-3 mt-3 md:mt-0 md:w-1/2">
          <h3 className="text-md font-bold sm:text-lg">{title}</h3>
          <h4 className="text-md my-3 sm:text-lg">{date}</h4>
          <p className="text-sm sm:text-lg">{descriptionWithLineBreaks}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMax;
