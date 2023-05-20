import React from "react";
import Image from "next/image";
import Link from "next/link";

const Evenement = () => {
  return (
    <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
      <Link href={"https://www.lesjartdinsdemontagny.fr/index.html"}>
        <h2 className="text-2xl text-center font-bold mb-12 tracking-wide sm:text-4xl">
          L&apos;événement :
        </h2>
        <div className="">
          <Image
            src="/202305_jartdins.jpeg"
            alt="JARTdins 2023"
            width={3000}
            height={1000}
          />
        </div>
      </Link>
    </div>
  );
};

export default Evenement;
