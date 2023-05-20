import React from "react";
import Image from "next/image";

const Card = ({ title, date, src, alt }) => {
  return (
    <div className="h-60">
      <div className="">
        <Image
          className="h-48"
          src={src}
          alt={alt}
          width={900}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* <div className="text-white pt-1 pl-2"> */}
      <div className="text-black pt-1 pl-2">
        <h3 className="text-sm font-semibold m-1 md:text-base">{title}</h3>
        <h4 className="text-sm m-1 md:text-base">{date}</h4>
      </div>
    </div>
  );
};

export default Card;
