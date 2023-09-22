import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Mentions légales | Acam",
};

const LegalPage = () => {
  return (
    <div className="mt-24 mb-12 flex justify-center px-3 sm:px-0">
      <div className="max-w-md">
        <h1 className="text-3xl font-bold text-center mb-24">
          Mentions légales
        </h1>
        <div className="text-center mb-12">
          {/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
          {/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
          <Link target="_blank" href="/pdf/2023_adhesion.pdf" download>
            Télécharger le bulletin d&apos;adhésion à l&apos;Acam en PDF
          </Link>
        </div>
        <ul>
          <li>
            <h2 className="text-2xl underline underline-offset-2">
              Informations générales sur l&apos;association
            </h2>
            <br />
            <ul>
              <li>Statut juridique de l&apos;Acam : association loi 1901</li>
              <li>
                Nom de l&apos;association : Acam (Association Culturelle et
                Artistique de Montagny)
              </li>
              <li>
                Siège social : 3 rue de la Molière 60240 Montagny-en-Vexin{" "}
              </li>
              <li>Numéro de téléphone : 0344499807</li>
              <li>Adresse e-mail : a.c.a.montagny60240@gmail.com</li>
              <li>
                Numéro d&apos;identification de l&apos;association (SIRET) :
                44101106100013
              </li>
              <li>Code APE : 8552Z</li>
              <li>Immatriculation en préfecture : W60100 1607</li>
              <li>Journal officiel : 28/11/97</li>
              <li>Agrément JEP: 17/12/2008</li>
              <li>INPI : 20221959</li>
              <li>Nom de la présidente : Elisabeth Taillebrest</li>
            </ul>
          </li>
          <br />
          <li>
            <h2 className="text-2xl underline underline-offset-2">
              Hébergement
            </h2>
            <br />
            <ul>
              <li>Nom de l&apos;hébergeur du site internet : LWS</li>
              <li>
                Adresse de l&apos;hébergeur du site internet : 10 Rue de
                Penthièvre, 75008 Paris
              </li>
              <li>Adresse e-mail de l&apos;hébergeur : https://www.lws.fr/</li>
            </ul>
          </li>
          <br />
          <li>
            <h2 className="text-2xl underline underline-offset-2">
              Propriété intellectuelle :
            </h2>
            <br />
            <ul>
              <li>Tous les droits de reproduction sont réservés </li>
              <li>
                Les logos et les marques sont la propriété de l&apos;association
              </li>
              <li>
                Les photos, les textes et les images ne peuvent pas être
                utilisés sans autorisation
              </li>
            </ul>
          </li>
          <br />
          <li>
            <h2 className="text-2xl underline underline-offset-2">
              Protection des données personnelles :
            </h2>
            <br />
            <ul>
              <li>
                L&apos;Acam prend la confidentialité de vos données personnelles
                très au sérieux. Voici un bref aperçu de notre politique.
                <br />
                <br />
                Collecte de Données : nous collectons uniquement les
                informations nécessaires à votre participation et à la
                fourniture de nos services.
                <br />
                <br />
                Utilisation des Données : vos données servent à vous informer
                sur nos activités, à traiter vos adhésions et dons, et ne sont
                pas partagées à des fins commerciales sans votre consentement.
                <br />
                <br />
                Droit d&apos;Accès et de Rectification : vous avez le droit
                d&apos;accéder à vos données personnelles et de demander des
                corrections en nous contactant à a.c.a.montagny60240@gmail.com.
                <br />
                <br />
                Sécurité des Données : nous prenons des mesures de sécurité pour
                protéger vos données, mais aucune méthode n&apos;est totalement
                infaillible.
                <br />
                <br />
                Cookies : notre site peut utiliser des cookies pour améliorer
                votre expérience en ligne. Vous pouvez les désactiver dans les
                paramètres de votre navigateur.
                <br />
                <br />
                Liens hypertexte : les liens vers d&apos;autres sites internet
                sont proposés à titre informatif et l&apos;association ne peut
                pas être tenue responsable de leur contenu
                <br />
                <br />
                <br />
                Pour plus de détails, contactez-nous à
                a.c.a.montagny60240@gmail.com.
              </li>
            </ul>
          </li>
          <br />
          <br />
        </ul>
      </div>
    </div>
  );
};

export default LegalPage;
