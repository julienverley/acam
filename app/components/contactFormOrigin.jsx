"use client";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
// import * as Yup from "yup";
import yupValidationSchema from "../schemas/yupValidationSchema";
// import CustomSelect from "./CustomSelect";

const ContactForm = () => {
  const [file, setFile] = useState(null);

  // React-select contact subjet list:
  const subjectOptions = [
    { value: "rejoindre", label: "Rejoindre l'association" },
    { value: "informations", label: "Obtenir plus d'informations" },
    { value: "autre", label: "Autre" },
  ];

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  // const handleSubmit = (values, { setSubmitting }) => {
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     setSubmitting(false);
  //   }, 400);
  // };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("firstname", values.firstname);
      formData.append("lastname", values.lastname);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("subject", values.subject);
      formData.append("message", values.message);
      formData.append("attachment", values.attachment);

      // Envoyer les données du formulaire à l'API ou au backend
      const response = await fetch("URL_DE_L_API", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Le formulaire a été soumis avec succès
        alert("Form submitted successfully");
        setSubmitting(false);
      } else {
        // Une erreur s'est produite lors de la soumission du formulaire
        throw new Error("Form submission failed");
      }
    } catch (error) {
      // Gérer les erreurs de soumission du formulaire
      console.error(error);
      setSubmitting(false);
    }
  };

  const handleChange = (value, formik) => {
    formik.setFieldValue("subject", value.value);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: yupValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <h1 className="text-2xl mb-12 text-center">Contacter l&apos;Acam</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={yupValidationSchema}
        onSubmit={handleSubmit}
      >
        {/* <Form className=""> */}
        <Form className="flex flex-col items-center">
          <div className="flex flex-col w-80">
            <label className="" htmlFor="firstname">
              Prénom
            </label>
            <Field type="text" id="firstname" name="firstname" />
            <ErrorMessage
              name="firstname"
              component="div"
              className="text-red-400 text-xs my-2"
            />
          </div>
          <div className="flex flex-col w-80">
            {" "}
            <label htmlFor="lastname">Nom</label>
            <Field type="text" id="lastname" name="lastname" />
            <ErrorMessage
              name="lastname"
              component="div"
              className="text-red-400 text-xs my-2"
            />
          </div>
          <div className="flex flex-col w-80">
            <label htmlFor="email">Courriel</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-400 text-xs my-2"
            />
          </div>
          <div className="flex flex-col w-80">
            <label htmlFor="phone">Numéro de téléphone</label>
            <Field type="text" id="phone" name="phone" />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-red-400 text-xs my-2"
            />
          </div>
          <div className="flex flex-col w-80">
            <label htmlFor="subject">Objet de la demande</label>
            {/* <CustomSelect
              options={subjectOptions}
              defaultValue={subjectOptions[0]}
              onChange={(value) => handleChange(value, formik)}
              type="text"
              id="subject"
              name="subject"
            /> */}
            <Field as="select" id="subject" name="subject">
              <option value="">Sélectionnez un sujet</option>
              <option value="join">Rejoindre l&apos;association</option>
              <option value="info">Obtenir plus d&apos;information</option>
              <option value="info">Autre</option>
            </Field>
            <ErrorMessage
              name="subject"
              component="div"
              className="text-red-400 text-xs my-2"
            />
          </div>
          <div className="flex flex-col w-80">
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-400 text-xs my-2"
            />
          </div>
          <div className="flex flex-col w-80">
            {/* <label htmlFor="attachment" className="custom-file-upload"> */}
            <label
              htmlFor="attachment"
              className="border-solid border-2 border-yellow-200 bg-yellow-200 cursor-pointer inline-block px-2 py-4"
            >
              Choisir une pièce jointe
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              accept=".png, .jpg, .jpeg, .pdf" //
              className="hidden" //
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
