import Image from "next/image";
import React from "react";

const Partenaires = () => {
  return (
    <div className="mb-24 w-3/5 mx-auto flex flex-col border-solid border-2 border-black-100">
      <div className="">
        <h2 className="p-6 text-3xl font-semibold text-center lg:text-left">
          Partenaires de l&apos;Acam
        </h2>
      </div>
      <div className="">
        <Image
          src="/partenaires.png"
          alt="Partenaires"
          style={{ objectFit: "cover" }}
          width={3000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Partenaires;
