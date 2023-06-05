import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <h1 className="hidden">
        L&apos;Acam : Association culturelle de Montagny en Vexin
      </h1>
      <Link href={"/rejoindre"}>
        {/* <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5"> */}
        <div className="mb-24 mx-auto w-full lg:w-3/5">
          {/* <div className="mb-24 mx-auto w-full lg:w-3/5"> */}
          <Image
            src="/images/global/hero.jpg"
            alt="hero"
            style={{ objectFit: "cover" }}
            width={3000}
            height={1000}
          />
        </div>
      </Link>
    </div>
  );
};

export default Hero;
