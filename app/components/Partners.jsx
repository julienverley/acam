import Image from "next/image";
import React from "react";
import Link from "next/link";

const Partners = () => {
  const images = [
    { src: "/images/partners/artension.png", alt: "Artension", link: "" },
    {
      src: "/images/partners/aupres.png",
      alt: "Auprès de mon arbre",
      link: "",
    },
    {
      src: "/images/partners/courcelles_les_gisors4.png",
      alt: "Auprès de mon arbre",
      link: "",
    },
    {
      src: "/images/partners/dumas.png",
      alt: "Dumas piano",
      link: "",
    },
    {
      src: "/images/partners/guillemette.png",
      alt: "Yann Guillemette",
      link: "",
    },
    { src: "/images/partners/hauts.png", alt: "Hauts de France", link: "" },
    { src: "/images/partners/leclerc.png", alt: "E Leclerc", link: "" },
    {
      src: "/images/partners/montagny.png",
      alt: "Montagny en Vexin",
      link: "",
    },
    { src: "/images/partners/montjavoult2.png", alt: "Montjavoult", link: "" },
    {
      src: "/images/partners/oise.png",
      alt: "Département de l'Oise",
      link: "",
    },
    { src: "/images/partners/parnes.png", alt: "Parnes", link: "" },
    {
      src: "/images/partners/sacem_auteurs.png",
      alt: "Sacem société des auteurs",
      link: "https://www.sacem.fr/",
    },
    {
      src: "/images/partners/vexinweb.png",
      alt: "Agence VexinWEB",
      link: "https://vexinweb.fr",
    },
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
            <Link
              href={image.link}
              key={index}
              className="w-1/5 relative flex items-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={150}
                height={150}
                // layout="fill"
                style={{ objectFit: "cover" }}
              />
            </Link>
          ))}
        </div>
      );
      rows.push(row);
    }

    return rows;
  };

  return (
    <div className="mb-24 pb-6 w-full mx-auto flex flex-col border-solid border-2 border-black-100 lg:w-3/5 xl:w-2/5">
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
