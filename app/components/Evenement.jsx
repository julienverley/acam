import React from "react";
import Image from "next/image";
import Link from "next/link";

const Evenement = () => {
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-6 tracking-wide">
        L&apos;événement :
      </h2>
      <Link href={"https://www.lesjartdinsdemontagny.fr/index.html"}>
        <div className="mb-24 w-3/5 mx-auto">
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
