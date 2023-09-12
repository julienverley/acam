import React from "react";
import ContactForm from "../components/ContactForm";
export const metadata = {
  title: "Rejoindre | Acam",
};

const RejoindrePage = () => {
  return (
    <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
      <h1 className="text-2xl text-center font-bold my-24 tracking-wide sm:text-4xl">
        Rejoindre l&apos;Acam
      </h1>
      <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
        <div className="">
          L&apos;Acam, Association Culturelle et Artistique de
          Montagny-en-Vexin, existe depuis 1997.
        </div>
        <br />
        <div className="my-24 flex justify-center">
          <div className="max-w-md">
            <ContactForm />
          </div>
        </div>
        {/* <div>Redirection vers le formulaire de contact</div> */}
      </div>
    </div>
  );
};

export default RejoindrePage;
