import React from "react";
import CardMax from "../components/CardMax";
import CardMaxPast from "../components/CardMaxPast";
import data from "../mock/data";

export const metadata = {
  title: "Acam | événements",
};

const EvenementsPage = () => {
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-12 tracking-wide sm:text-4xl">
        Les événements de l&apos;Acam
      </h1>
      <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
        {data?.map((event) => (
          <div key={event.id} className="my-6">
            {event.past ? (
              // Affichage différent si past est true
              <div>
                <CardMaxPast
                  src={event.src}
                  alt={event.alt}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                />
              </div>
            ) : (
              // Affichage par défaut pour les événements futurs
              <div>
                <CardMax
                  src={event.src}
                  alt={event.alt}
                  title={event.title}
                  date={event.date}
                  description={event.description}
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
