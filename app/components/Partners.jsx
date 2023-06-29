import Image from "next/image";
import React from "react";

const Partners = () => {
  const images = [
    { src: "/images/partners/artension.png", alt: "Artension" },
    { src: "/images/partners/aupres.png", alt: "Auprès de mon arbre" },
    {
      src: "/images/partners/courcelles_les_gisors4.png",
      alt: "Auprès de mon arbre",
    },
    {
      src: "/images/partners/dumas.png",
      alt: "Dumas piano",
    },
    {
      src: "/images/partners/guillemette.png",
      alt: "Yann Guillemette",
    },
    { src: "/images/partners/hauts.png", alt: "Hauts de France" },
    { src: "/images/partners/leclerc.png", alt: "E Leclerc" },
    { src: "/images/partners/montagny.png", alt: "Montagny en Vexin" },
    { src: "/images/partners/montjavoult2.png", alt: "Montjavoult" },
    { src: "/images/partners/oise.png", alt: "Département de l'Oise" },
    { src: "/images/partners/parnes.png", alt: "Parnes" },
    {
      src: "/images/partners/sacem_auteurs.png",
      alt: "Sacem société des auteurs",
    },
    { src: "/images/partners/vexinweb.png", alt: "Agence VexinWEB" },
  ];

  // Tri des images par ordre alphabétique en fonction du nom de fichier
  images.sort((a, b) => {
    const nameA = a.src.split("/").pop().toLowerCase();
    const nameB = b.src.split("/").pop().toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const renderImages = () => {
    const rows = [];
    const numRows = Math.ceil(images.length / 5);

    for (let i = 0; i < numRows; i++) {
      const row = (
        <div key={i} className="flex justify-center space-x-4 mt-4">
          {images.slice(i * 5, (i + 1) * 5).map((image, index) => (
            <div key={index} className="w-1/5 relative flex items-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={150}
                height={150}
                // layout="fill"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      );
      rows.push(row);
    }

    return rows;
  };

  return (
    <div className="mb-24 w-full mx-auto flex flex-col border-solid border-2 border-black-100 lg:w-3/5 xl:w-2/5">
      <div className="">
        <h2 className="p-6 text-2xl font-semibold text-center lg:text-left sm:text-4xl">
          Partenaires de l&apos;Acam
        </h2>
      </div>
      <div className="flex flex-col items-center">{renderImages()}</div>
    </div>
  );
};

export default Partners;

// import Image from "next/image";
// import React from "react";

// const Partners = () => {
//   return (
//     <div className="mb-24 w-full mx-auto flex flex-col border-solid border-2 border-black-100 lg:w-3/5 xl:w-2/5">
//       <div className="">
//         <h2 className="p-6 text-3xl font-semibold text-center lg:text-left">
//           Partenaires de l&apos;Acam
//         </h2>
//       </div>
//       <div className="">
//         <Image
//           src="/images/global/partenaires.png"
//           alt="Partenaires"
//           style={{ objectFit: "cover" }}
//           width={3000}
//           height={1000}
//         />
//       </div>
//     </div>
//   );
// };

// export default Partners;
