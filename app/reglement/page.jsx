import Link from "next/link";
import React from "react";

export const metadata = {
	title: "Règlement | Acam",
};

const ReglementPage = () => {
	return (
		<div className="mt-24 mb-12 flex justify-center px-3 sm:px-0">
			<div className="max-w-md">
				<p className="text-xs text-center">Mis à jour le 13 février 2025</p>
				<h1 className="text-3xl font-bold text-center mb-24">
					Règlement de l&apos;association
				</h1>
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
				<ul>
					<li>
						<h2 className="text-2xl underline underline-offset-2">
							Ateliers et cours
						</h2>
						<br />
						<br />
						<h3 className="text-lg underline underline-offset-2">
							Inscription
						</h3>
						<br />
						<ul>
							<li>
								<p>
									L&apos;inscription aux ateliers se fait, pour les anciens qui
									le désirent, à l’assemblée générale, et pour tous au forum des
									associations ou au premier cours de l&apos;atelier choisi pour
									une année scolaire.
								</p>
								<br />
								<p>
									Pour les cours individuels, chaque trimestre comporte 10 cours
									en moyenne. L’année comprend 30 cours.
								</p>
								<br />
								<p>
									Les orchestres sont des ateliers qui viennent en complément
									d’un cours particulier pour appliquer collectivement un
									travail instrumental. Ils ont lieu une semaine sur 2.
								</p>
								<br />
								<p>
									L’atelier de formation musicale, est obligatoire pour tous les
									élèves d’élémentaire, collège et lycée et donne accès aux
									ateliers d’orchestre, il a lieu toutes les semaines.
								</p>
								<br />
								<p>
									Aucune Inscription ne sera prise en compte sans un dossier
									complet
									<br />
									<br />
									1) Le bulletin d&apos;adhésion dûment rempli, daté et signé
									<br />
									<br />
									2) Le bulletin d&apos;inscription aux ateliers complété et
									signé
									<br />
									<br />
									3) L’accord signé du règlement intérieur
									<br />
									<br />
									4) Le paiement : il se fait à l&apos;inscription pour tous les
									ateliers, pour l&apos;année scolaire, par quatre chèques
									déposés en même temps, ou par carte, pour l&apos;année
									complète.
								</p>
								<br />
								<p>
									Les chèques seront encaissés :<br />
									 Au début novembre + chèque d’adhésion
									<br />
									 Au début février
									<br /> Au début avril
								</p>
								<br />
								<p>
									Une réduction sera applicable à partir de 3 cours individuels
									dans le même foyer, soit - 25 € / trimestre pour chaque cours.
									Cette réduction peut être cumulable avec le tarif du quotient
									familial, si demandé.
									<br />
									QF1 : - 25 € / trimestre
									<br />
									QF2 : - 50 € / trimestre
								</p>
								<br />
								<p>
									Les habitants des communes qui subventionnent l&apos;ACAM
									bénéficient du tarif A. Les habitants des autres communes
									paient le tarif B.
								</p>
							</li>
						</ul>
						<br />
						<br />
						<h3 className="text-lg underline underline-offset-2">
							Remboursement
						</h3>
						<br />
						<ul>
							<li>
								<p>
									Tous les cours sont dus : les professeurs prévoient de venir
									en fonction du nombre d’élèves et d’horaires bien définis, et
									leur présence est effective même si l’élève est absent. Un
									cours annulé par l’élève ne pourra pas être reporté. A
									l’inverse les professeurs sont priés de prévenir leurs élèves
									en cas d’impondérable et de rattraper les cours le cas
									échéant.
								</p>
								<br />
								<p>
									Seuls les motifs suivants, à condition d&apos;avoir été
									signalés par courrier, permettront un remboursement partiel:
									<br />
									 Déménagement
									<br />
									 Longue maladie
									<br />
									 Accident
									<br /> Hospitalisation
								</p>
							</li>
						</ul>
						<br />
						<br />
						<h3 className="text-lg underline underline-offset-2">
							Responsabilité
						</h3>
						<br />
						<ul>
							<li>
								<p>
									L&apos;association n&apos;est responsable des participants que
									pendant la durée des ateliers. Aucun enfant ne sera autorisé à
									quitter seul un atelier sauf autorisation parentale écrite.
								</p>
								<br />
								<p>
									Vous vous engagez à suivre toute l&apos;année et régulièrement
									les cours et ateliers auxquels vous êtes inscrits, à vous y
									présenter à l&apos;heure et en tenue convenue, à prévenir en
									cas d&apos;absence ou de retard.
								</p>
							</li>
						</ul>
						<br />
						<br />
						<h3 className="text-lg underline underline-offset-2">
							Vacances – Congés scolaires
						</h3>
						<br />
						<ul>
							<li>
								<p>
									Pour une gestion administrative logique des salaires des
									professeurs, et du temps de vacances des élèves, il est établi
									une fois pour toute qu&apos;il n&apos;y a pas cours pendant
									les vacances de la Zone B – Amiens (Hauts de France)
								</p>
							</li>
						</ul>
					</li>
					<br />
					<li>
						<h2 className="text-2xl underline underline-offset-2">
							Les j&apos;ARTdins
						</h2>
						<br />
						<ul>
							<li>
								<p>
									Les artistes exposants doivent adhérer à l&apos;association
									dès leur demande d’inscription à l’évènement (afin d’être
									assurés sur la durée de la manifestation) et s&apos;engager à
									respecter la Charte des j&apos;ARTdins.
								</p>
								<br />
								<p>
									Les œuvres ne peuvent pas être assurées par l’ACAM. Elles
									doivent pouvoir supporter la météo, les tonnelles sont
									proscrites.
								</p>
								<br />
								<p>
									Des remboursements de frais de transport peuvent être
									consentis aux artistes sur accord préalable et présentation de
									factures, dans un délai d&apos;un mois après la manifestation.
								</p>
								<br />
								<p>
									Chaque adhérent s&apos;engage à respecter le présent
									règlement.
								</p>
							</li>
						</ul>
					</li>
				</ul>
				<div className="text-center mb-12 mt-24">
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
			</div>
		</div>
	);
};

export default ReglementPage;
