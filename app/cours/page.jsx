import React from "react";
import CardCourse from "../components/CardCourse";
import CardCourseFull from "../components/CardCourseFull";
import dataCourses from "../mock/dataCourses";
import Link from "next/link";

export const metadata = {
	title: "Cours | Acam",
};

const CoursPage = () => {
	return (
		<div>
			<h1 className="text-2xl text-center font-bold my-24 tracking-wide sm:text-4xl">
				Cours proposés par l&apos;Acam
			</h1>
			<div className="mb-24">
				<div className="text-center mb-12 px-3 sm:px-0">
					{/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
					{/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
					<Link
						target="_blank"
						href="/pdf/adhesion.pdf"
						className="opacity-75 z-10 bg-yellow-300 py-8 px-6 drop-shadow-2xl items-center"
						download
					>
						Télécharger le bulletin d&apos;adhésion
					</Link>
				</div>
				<br />
				<div className="text-center mb-12 sm:px-0">
					{/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
					{/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
					<Link
						target="_blank"
						href="/pdf/inscription.pdf"
						className="opacity-75 z-10 bg-yellow-300 py-8 px-6 drop-shadow-2xl items-center"
						download
					>
						Télécharger le bulletin d&apos;inscription{" "}
					</Link>
				</div>
			</div>
			<div className="mb-24 mx-auto w-full lg:w-4/5 xl:w-3/5">
				{dataCourses?.map((course) => (
					<div key={course.id} className="my-6">
						{course.full ? (
							// Affichage différent si full est true, qu'il n'y a plus de place dans le cours
							<div>
								<CardCourseFull
									src={course.src}
									alt={course.alt}
									title={course.title}
									date1={course.date1}
									date2={course.date2}
									date3={course.date3}
									location={course.location}
									description={course.description}
								/>
							</div>
						) : (
							// Affichage par défaut pour cours avec des places disponibles
							<div>
								<CardCourse
									src={course.src}
									alt={course.alt}
									title={course.title}
									date1={course.date1}
									date2={course.date2}
									date3={course.date3}
									location={course.location}
									description={course.description}
								/>
							</div>
						)}
					</div>
				))}
			</div>
			<div className="mb-24">
				<div className="text-center mb-12 px-3 sm:px-0">
					{/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
					{/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
					<Link
						target="_blank"
						href="/pdf/adhesion.pdf"
						className="opacity-75 z-10 bg-yellow-300 py-8 px-6 drop-shadow-2xl items-center"
						download
					>
						Télécharger le bulletin d&apos;adhésion
					</Link>
				</div>
				<br />
				<div className="text-center mb-12 sm:px-0">
					{/* <h1>Bulletin d&apos;adhésion à télécharger</h1> */}
					{/* <p>Voici un lien pour télécharger le fichier PDF :</p> */}
					<Link
						target="_blank"
						href="/pdf/inscription.pdf"
						className="opacity-75 z-10 bg-yellow-300 py-8 px-6 drop-shadow-2xl items-center"
						download
					>
						Télécharger le bulletin d&apos;inscription
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CoursPage;
