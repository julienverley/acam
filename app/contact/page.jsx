import React from "react";
import ContactForm from "../components/ContactForm";
import Link from "next/link";

export const metadata = {
	title: "Contact | Acam",
};

const ContactPage = () => {
	return (
		// <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
		<div className="my-24 flex justify-center">
			<div className="max-w-md mx-7 md:mx-auto">
				<div className="text-center mb-12">
					{/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
					{/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
					<Link target="_blank" href="/pdf/adhesion.pdf" download>
						Télécharger le bulletin d&apos;adhésion à l&apos;Acam en PDF
					</Link>
				</div>
				<div className="text-center mb-12">
					{/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
					{/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
					<Link target="_blank" href="/pdf/inscription.pdf" download>
						Télécharger le bulletin d&apos;inscription aux cours en PDF
					</Link>
				</div>
				<ContactForm />
			</div>
		</div>
	);
};

export default ContactPage;
