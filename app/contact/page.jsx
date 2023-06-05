import React from "react";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact | Acam",
};

const ContactPage = () => {
  return (
    // <div className="mb-24 mx-auto w-full lg:w-3/5 xl:w-2/5">
    <div className="my-24 flex justify-center">
      <div className="max-w-md">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
