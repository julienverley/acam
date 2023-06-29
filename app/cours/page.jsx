import React from "react";
import CardCourse from "../components/CardCourse";
import CardCourseFull from "../components/CardCourseFull";
import dataCourses from "../mock/dataCourses";

export const metadata = {
  title: "Cours | Acam",
};

const CoursPage = () => {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold my-24 tracking-wide sm:text-4xl">
        Cours proposés par l&apos;Acam
      </h1>
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
    </div>
  );
};

export default CoursPage;
