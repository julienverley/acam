import React from "react";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Rejoindre | Acam",
};

const RejoindrePage = () => {
  return (
    <div className="my-24 flex justify-center px-3 sm:px-0">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-center mb-24">L&apos;Acam</h1>
        <div className="mb-24 text-left mx-auto w-full lg:w-3/5 xl:w-2/5">
          <p className="">
            L&apos;Acam, Association Culturelle et Artistique de
            Montagny-en-Vexin, existe depuis 1997.
          </p>
          <br />
          <p>
            L&apos;Acam a pour but de faire découvrir et pratiquer des activités
            culturelles et artistiques.
            <br />
            Nous proposons des cours de piano, guitare, violon, alto, batterie,
            flûte irlandaise, saxophone, clarinette, cornemuse et trompette.
            Mais aussi des ateliers d’ensemble musicaux, une pratique musicale
            et de l’épanouissement corporel.
            <br />
            Une saison culturelle complète les actions de l’association avec
            notamment l’organisation de concerts : l’après-midi Irlandais, une
            soirée théâtre, une soirée piano-cabaret, une soirée
            guitare-cabaret, les auditions des différents cours…
            <br />
            Le festival d’arts « les jARTdins de Montagny » est depuis 2002 un
            temps fort culturel de notre territoire ; cette manifestation
            accueille, suivant les années, près de cinq mille visiteurs.
            <br />
            Cet événement est pluridisciplinaire et intergénérationnel avec une
            exposition d’art contemporain (50 artistes plasticiens ;
            installations, sculptures, peintures…), des spectacles variés
            (théâtre, danse, cinéma…), des concerts, impromptus, récitals de
            piano, cornemuse, guitare, violon, batterie par les professeurs de
            l’Acam, chorales…
            <br />
            L&apos;Acam réalise également des interventions scolaires et
            périscolaires pour que les enfants de l&apos;école puissent
            découvrir les arts et la culture.
            <br />
            Depuis l&apos;ouverture de la Mam (Maisons des assistantes
            maternelles de Montagny), l&apos;Acam propose également des ateliers
            de découverte artistique auprès des plus jeunes, qui peuvent ainsi
            explorer le monde des arts.
            <br />
            Notre association a également à coeur de proposer une offre
            culturelle et artistique de qualité dans une ambiance conviviale.
          </p>
          <br />
          <div className="my-24 flex justify-center">
            <div className="max-w-md">
              <div className="text-center mb-12">
                {/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
                {/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
                <Link target="_blank" href="/pdf/2023_adhesion.pdf" download>
                  Télécharger le bulletin d&apos;adhésion à l&apos;Acam en PDF
                </Link>
              </div>
              <ContactForm />
            </div>
          </div>
          {/* <div>Redirection vers le formulaire de contact</div> */}
        </div>
      </div>
    </div>
  );
};

export default RejoindrePage;
