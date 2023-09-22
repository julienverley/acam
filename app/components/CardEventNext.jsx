import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardEventNext = ({ src, alt, link }) => {
  return (
    <div>
      <Link href={link} target="blank">
        <h2 className="text-3xl text-center font-bold mb-12 tracking-wide sm:text-4xl">
          Prochain événement
        </h2>
        <div className="">
          <Image src={src} alt={alt} width={1200} height={2000} />
        </div>
      </Link>
    </div>
  );
};

export default CardEventNext;
