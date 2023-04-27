import React from "react";
import Link from "next/link";
import Card from "./Card";
import data from "../mock/data";
import Image from "next/image";

const Evenements = () => {
  console.log(data);
  return (
    <>
      <Link href="/evenements">
        <div className="mb-24 w-3/5 grid grid-cols-3 gap-y-6 justify-between max-h-auto mx-auto grid grid-cols-1 lg:grid-cols-3 lg:h-64 lg:gap-6">
          {/* Title & button */}
          <div className="flex flex-col justify-between h-48 col-span-1 lg:h-48">
            <h2 className="text-3xl font-semibold text-center lg:text-left">
              Événements à venir
            </h2>
            <button className="p-6 text-white bg-zinc-800/80 hover:bg-zinc-800">
              Tout afficher
            </button>
          </div>
          {/* Cards */}
          {/* Faire un filter pour filtrer les deux futurs true, qui s'affichent normalement dans Evénements, des autres qui sont par exemple grisés ; faire un autre filter pour n'afficher que 2 futurs événements dans la page d'Accueil (mais tous dans la page Evénements) */}
          <div className="h-auto flex gap-6 flex flex-col col-span-1 md:flex-row-reverse md:col-span-2 md:h-60">
            {data?.map((event) => (
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
    </>
  );
};

export default Evenements;
