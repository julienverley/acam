import React from "react";
import Link from "next/link";
import CardHomeEvents from "./CardHomeEvents";
import dataEvents from "../mock/dataEvents";
// import Image from "next/image";

const Events = () => {
	console.log(dataEvents);
	const numberOfEvents = dataEvents.filter((event) => !event.past).length;
	const isPlural = numberOfEvents !== 1;

	return (
		<div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
			<Link href="/evenements">
				{/* <div className="gap-y-6 justify-between max-h-auto mx-auto lg:h-64 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
				<div className="gap-y-6 justify-between max-h-auto mx-auto lg:h-64 lg:gap-6 grid grid-cols-1 lg:grid-cols-3">
					{/* Title & button */}
					<div className="flex flex-col justify-between h-48 col-span-1 lg:h-48">
						{/* <h2 className="text-3xl font-semibold text-center lg:text-left"> */}
						<h2 className="text-3xl font-semibold text-center">
							{/* {isPlural ? "Événements" : "Événement"} à venir */}
							Actuellement
						</h2>
						<button className="p-6 text-white bg-zinc-800/80 hover:bg-zinc-800">
							{isPlural
								? `Voir les ${numberOfEvents} événements`
								: "Voir l'événement"}
						</button>
					</div>
					{/* 2 next events */}
					<div className="h-auto flex gap-6 flex-col col-span-1 md:flex-row-reverse md:col-span-2 md:h-60">
						{dataEvents
							?.filter((event) => !event.past)
							// .slice(1, 3)
							.slice(0, 2)
							.map((event) => (
								<CardHomeEvents
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

export default Events;

// import React from "react";
// import Link from "next/link";
// import Card from "./Card";
// import dataEvents from "../mock/dataEvents";
// // import Image from "next/image";

// const Events = () => {
//   console.log(dataEvents);
//   return (
//     <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
//       <Link href="/evenements">
//         <div className="gap-y-6 justify-between max-h-auto mx-auto lg:h-64 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {/* Title & button */}
//           <div className="flex flex-col justify-between h-48 col-span-1 lg:h-48">
//             <h2 className="text-3xl font-semibold text-center lg:text-left">
//               Événement(s) à venir
//             </h2>
//             <button className="p-6 text-white bg-zinc-800/80 hover:bg-zinc-800">
//               Afficher tous les événements
//             </button>
//           </div>
//           {/* 2 next events */}
//           <div className="h-auto flex gap-6 flex-col col-span-1 md:flex-row-reverse md:col-span-2 md:h-60">
//             {dataEvents
//               ?.filter((event) => !event.past)
//               .slice(0, 2)
//               .map((event) => (
//                 <Card
//                   src={event.src}
//                   alt={event.alt}
//                   key={event.id}
//                   title={event.title}
//                   date={event.date}
//                 />
//               ))}
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default Events;
