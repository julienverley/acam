"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import yupValidationSchema from "../schemas/yupValidationSchema";
import CustomSelect from "./CustomSelect";

// EmployeeCreateForm gets values from the form, using Formik
const EmployeeCreateForm = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  // React-select contact subjet list:
  const subjectOptions = [
    { value: "rejoindre l'association", label: "Rejoindre l'association" },
    { value: "rejoindre un cours", label: "Rejoindre un cours" },
    { value: "association", label: "Informations sur l'association" },
    { value: "cours", label: "Informations sur les cours" },
    { value: "concerts", label: "Informations sur les concerts" },
    { value: "jartdins", label: "Informations sur les jARTdins" },
    { value: "autre", label: "Autre sujet" },
  ];

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      subject: "rejoindre",
      message: "",
      file: null,
    },
    validationSchema: yupValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);

      // ChatGPT :
      // Vous pouvez accéder au fichier sélectionné via la variable `file`
      // const { file, ...formData } = values; //
      // Envoyer le fichier et les autres données
      // Utilisez votre méthode préférée ici (par exemple, une requête Axios ou une API fetch)

      // Accédez au tableau de fichiers sélectionnés
      const selectedFiles = Array.from(files);
      // Envoyez les fichiers et les autres données au serveur
      // Utilisez votre méthode préférée ici (par exemple, une requête Axios ou une API fetch)

      resetForm();

      // resetForm({ values: "" }); //
    },
  });

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-24">
        Formulaire de contact
      </h1>
      <form onSubmit={formik.handleSubmit} autoComplete="off" className="">
        {/* First name */}
        <div className=" mb-3">
          <div className="flex flex-col w-80">
            {" "}
            <label htmlFor="firstName" className="mb-2">
              Prénom
            </label>
            <input
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="firstname"
              name="firstname"
              className={
                formik.errors.firstname && formik.touched.firstname
                  ? "focus:outline-none h-8 border-2 border-rose-400"
                  : "focus:outline-none border-2 border-white"
              }
            />
          </div>
          {formik.errors.firstname && formik.touched.firstname && (
            <p className="text-rose-400 text-xs my-2">
              {formik.errors.firstname}
            </p>
          )}
        </div>

        {/* Last name */}
        <div className=" mb-3">
          <div className="flex flex-col w-80">
            {" "}
            <label htmlFor="lastname" className="mb-2">
              Nom
            </label>
            <input
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="lastname"
              name="lastname"
              className={
                formik.errors.lastname && formik.touched.lastname
                  ? "focus:outline-none h-8 border-2 border-rose-400"
                  : "focus:outline-none border-2 border-white"
              }
            />
          </div>
          {formik.errors.lastname && formik.touched.lastname && (
            <p className="text-rose-400 text-xs my-2">
              {formik.errors.lastname}
            </p>
          )}
        </div>

        {/* Email */}
        <div className=" mb-3">
          <div className="flex flex-col w-80">
            {" "}
            <label htmlFor="email" className="mb-2">
              Courriel
            </label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="email"
              name="email"
              className={
                formik.errors.email && formik.touched.email
                  ? "focus:outline-none h-8 border-2 border-rose-400"
                  : "focus:outline-none border-2 border-white"
              }
            />
          </div>
          {formik.errors.email && formik.touched.email && (
            <p className="text-rose-400 text-xs my-2">{formik.errors.email}</p>
          )}
        </div>

        {/* Phone number */}
        <div className=" mb-3">
          <div className="flex flex-col w-80">
            <label htmlFor="phone" className="mb-2">
              Numéro de téléphone
            </label>
            <input
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              id="phone"
              name="phone"
              className={
                formik.errors.phone && formik.touched.phone
                  ? "focus:outline-none h-8 border-2 border-rose-400"
                  : "focus:outline-none h-8 border-2 border-white"
              }
            />
          </div>
          {formik.errors.phone && formik.touched.phone && (
            <p className="text-rose-400 text-xs my-2">{formik.errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-9">
          {/* Subject message */}
          <div className="flex flex-col w-80 mb-3">
            <label htmlFor="subject" className="mb-2">
              Sujet du message
            </label>
            <CustomSelect
              options={subjectOptions}
              values={formik.values.subject}
              value={formik.values.subject}
              defaultValue={subjectOptions[0]}
              onChange={(value) => formik.setFieldValue("subject", value.value)}
              onBlur={formik.handleBlur}
              type="text"
              id="subject"
              name="subject"
            />
          </div>
          {/* Input message */}
          <div className="flex flex-col w-80 mb-3">
            <label htmlFor="message" className="mb-2">
              Message
            </label>
            <textarea
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="message"
              name="message"
              rows="5"
              className={
                formik.errors.message && formik.touched.message
                  ? "focus:outline-none border-2 border-rose-400"
                  : "focus:outline-none border-2 border-white"
              }
            />
          </div>
          {formik.errors.message && formik.touched.message && (
            <p className="text-rose-400 text-xs my-2">
              {formik.errors.message}
            </p>
          )}
        </div>

        {/* File */}
        <div className="flex flex-col w-80 mb-12">
          <label htmlFor="file" className="mb-2">
            Envoyer des pièces jointes (optionnel)
          </label>
          <input
            onChange={(event) => setFiles(event.target.files[0])}
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png, .pdf"
            multiple
            // Cf. global.css for file-input
            className="file-input appearance-none"
          />
        </div>
        {/*  */}
        {/* Afficher la liste des fichiers sélectionnés */}
        {files.length > 0 && (
          <div>
            <p>Fichiers sélectionnés :</p>
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Submission button */}
        <div>
          <button
            className="w-80 p-5 text-white bg-zinc-800/80 hover:bg-zinc-800"
            disabled={formik.isSubmitting}
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
};

export default EmployeeCreateForm;
