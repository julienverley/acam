import React from "react";
import Image from "next/image";

const Card = ({ title, date, src, alt }) => {
  return (
    // <div className="bg-minuit h-60">
    <div className="h-60">
      <div>
        <Image
          className="h-48"
          src={src}
          alt={alt}
          width={800}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* <div className="text-white pt-1 pl-2"> */}
      <div className="text-black pt-1 pl-2">
        <h3 className="text-sm font-semibold m-1">{title}</h3>
        <h4 className="text-xs m-1">{date}</h4>
      </div>
    </div>
  );
};

export default Card;
