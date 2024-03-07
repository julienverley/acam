import React from "react";
import CardEvent from "../components/CardEvent";
import CardEventPast from "../components/CardEventPast";
import dataEvents from "../mock/dataEvents";

export const metadata = {
  title: "Evénements | Acam",
};

const EvenementsPage = () => {
  console.log(dataEvents);
  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-24 tracking-wide sm:text-4xl">
        Les événements de l&apos;Acam
      </h1>
      <div className="mb-24 mx-auto w-full lg:w-4/5 xl:w-3/5">
        {dataEvents?.map((event) => (
          <div key={event.id} className="my-6">
            {event.past ? (
              // Affichage différent si past est true
              <div>
                <CardEventPast
                  src={event.src}
                  alt={event.alt}
                  link={event.link}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                />
              </div>
            ) : (
              // Affichage par défaut pour les événements futurs
              <div>
                <CardEvent
                  src={event.src}
                  alt={event.alt}
                  link={event.link}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  src_qrcode={event.src_qrcode}
                  alt_qrcode={event.alt_qrcode}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvenementsPage;
