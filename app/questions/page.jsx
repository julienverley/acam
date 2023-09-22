import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Questions | Acam",
};

const QuestionsPage = () => {
  return (
    <div className="mt-24 mb-12 flex justify-center px-3 sm:px-0">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-center mb-24">
          Questions fréquentes
        </h1>
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
        {/* <ul>
          <li>
            <h2 className="text-2xl underline underline-offset-2">Question 1 :</h2>
            <br />
            <li>Réponse 1</li>
          </li>
          <br />
          <li>
            <h2 className="text-2xl underline underline-offset-2">Question 1 :</h2>
            <br />
            <li>Réponse 2</li>
          </li>
          <br />
          <li>
            <h2 className="text-2xl underline underline-offset-2">Question 1 :</h2>
            <br />
            <li>Réponse 3</li>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default QuestionsPage;
