import React from "react";
export const metadata = {
  title: "Acam | mentions légales",
};

const LegalPage = () => {
  return (
    <div className="mb-24 flex justify-center">
      <div className="max-w-md">
        <h1 className="text-2xl">Mentions légales</h1>
        <br />
        <ul>
          <li>
            <h2 className="text-lg">
              Informations générales sur l&apos;association :
            </h2>
            <br />
            <ul>
              <li>Nom de l&apos;association </li>
              <li>Siège social </li>
              <li>Numéro de téléphone </li>
              <li>Adresse e-mail </li>
              <li>
                Numéro d&apos;identification de l&apos;association (SIREN ou
                SIRET)
              </li>
              <li>Code APE ou NAF</li>
              <li>Nom du président ou du responsable de la publication</li>
            </ul>
          </li>
          <br />
          <li>
            <h2 className="text-lg">Hébergement :</h2>
            <br />
            <ul>
              <li>Nom et adresse de l&apos;hébergeur du site internet</li>
              <li>Adresse e-mail de l&apos;hébergeur</li>
            </ul>
          </li>
          <br />
          <li>
            <h2 className="text-lg">Propriété intellectuelle :</h2>
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
            <h2 className="text-lg">Protection des données personnelles :</h2>
            <br />
            <ul>
              <li>La politique de confidentialité de l&apos;association </li>
              <li>
                Le droit d&apos;accès et de rectification des données
                personnelles.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <h2 className="text-lg">Liens hypertextes :</h2>
            <br />
            <ul>
              <li>
                Les liens vers d&apos;autres sites internet sont proposés à
                titre informatif et l&apos;association ne peut pas être tenue
                responsable de leur contenu
              </li>
            </ul>
          </li>
          <br />
          <li>
            <h2 className="text-lg">Cookies :</h2>
            <br />
            <ul>
              <li>
                L&apos;information sur l&apos;utilisation des cookies sur le
                site internet
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LegalPage;
