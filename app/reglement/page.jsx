import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Règlement | Acam",
};

const ReglementPage = () => {
  return (
    <div className="my-24 flex justify-center px-3 sm:px-0">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-center mb-24">Règlement</h1>
        <div className="text-center mb-12">
          {/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
          {/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
          <Link target="_blank" href="/pdf/2023_adhesion.pdf" download>
            Télécharger le bulletin d&apos;adhésion à l&apos;Acam en PDF
          </Link>
        </div>
        <div className="text-center mb-12">
          {/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
          {/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
          <Link target="_blank" href="/pdf/2023_inscription.pdf" download>
            Télécharger le bulletin d&apos;inscription aux cours en PDF
          </Link>
        </div>
        <ul>
          <li>
            <h2 className="text-lg">Paragraphe 1</h2>
            <br />
            <li>
              La réponse Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nostrum hic libero eos. Eligendi errorequatur quas facere
              praesentium. Nam esse rem eveniet. Optio assumenda placeat eius
              cum.
            </li>
          </li>
          <br />
          <li>
            <h2 className="text-lg">Paragraphe 2</h2>
            <br />
            <li>
              La réponse Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nostrum hic libero eos. Eligendi error cumque eum
              praesentium? Ducimus dolorem molestias facilis dicta praesentium.
              Distinctio in id explicabo atque voluptatem excepturi dignissimos
              maiores neque omnis enim. Delectus ab est aliquid, doloremque
              inventore aut at adipisci quaerat tempore ipsa earum totam
              repellendus veri esse rem eveniet. Optio assumenda placeat eius
              cum.
            </li>
          </li>
          <br />
          <li>
            <h2 className="text-lg">Paragraphe 3</h2>
            <br />
            <li>
              La réponse Lorem ipsum dolor sit is facere asperiores? Quia at
              dicta magni atque cupiditate possimus ducimus voluptatem. Incidunt
              quos odio nemo harum labore velit placeat consequatur quas facere
              praesentium. Nam esse rem eveniet. Optio assumenda placeat eius
              cum.
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReglementPage;
