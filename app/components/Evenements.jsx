import React from "react";
import Link from "next/link";
import Card from "./Card";
import data from "../mock/data";
// import Image from "next/image";

const Evenements = () => {
  console.log(data);
  return (
    <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
      <Link href="/evenements">
        <div className="gap-y-6 justify-between max-h-auto mx-auto lg:h-64 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Title & button */}
          <div className="flex flex-col justify-between h-48 col-span-1 lg:h-48">
            <h2 className="text-3xl font-semibold text-center lg:text-left">
              Événements à venir :
            </h2>
            <button className="p-6 text-white bg-zinc-800/80 hover:bg-zinc-800">
              Tout afficher
            </button>
          </div>
          {/* 2 next events */}
          <div className="h-auto flex gap-6 flex-col col-span-1 md:flex-row-reverse md:col-span-2 md:h-60">
            {data?.slice(0, 2).map((event) => (
              <Card
                src={event.src}
                alt={event.alt}
                key={event.id}
                title={event.title}
                date={event.date}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Evenements;
