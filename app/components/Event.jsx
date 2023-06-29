import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import dataEvents from "../mock/dataEvents";
import CardEventNext from "./CardEventNext";

const Event = () => {
  console.log(dataEvents);
  return (
    <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
      {/* 1 next event */}
      {dataEvents?.slice(0, 1).map((event) => (
        <CardEventNext
          src={event.src}
          alt={event.alt}
          key={event.id}
          link={event.link}
        />
      ))}
    </div>
  );
};

export default Event;
