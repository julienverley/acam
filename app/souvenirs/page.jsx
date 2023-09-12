// "use client";
import React from "react";
import Carousel from "../components/Carousel";
import dataEvents from "../mock/dataEvents"; //
// import YouTube from "react-youtube";
// import Image from "next/image";

export const metadata = {
  title: "Souvenirs | Acam",
};

const SouvenirsPage = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-2xl text-center font-bold my-24 tracking-wide sm:text-4xl">
          Souvenirs de l&apos;Acam
        </h1>
        <div className="mb-24 mx-auto w-full lg:w-4/5 xl:w-3/5">
          {dataEvents?.map((event) => (
            <div key={event.id} className="my-6">
              {event.souvenirs ? (
                // Affichage différent si past est true
                <div>
                  <h2 className="mb-3 text-md font-bold sm:text-2xl text-center">
                    {event.title}
                  </h2>
                  {/* <Carousel images={images20230422} /> */}
                  <Carousel images={event.medias} />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))}
        </div>
        {/* YouTube localhost:3000 ? */}
        {/* <div>
          <iframe
            width="400"
            height="400"
            src="https://www.youtube.com/watch?v=8BB0oTH3Ee4&ab_channel=Cin%C3%A9macam"
            title="YouTube Video"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}
        {/* <div>
          <h2 className="text-xl text-center">On purge bébé</h2>
          <Carousel images={images20230422} />
        </div> */}
      </div>
    </div>
  );
};

export default SouvenirsPage;
