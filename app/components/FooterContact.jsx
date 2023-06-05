"use client";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="container-none h-44 py-2 mx-auto flex flex-col justify-between items-center px-6 bg-caribbean text-white text-xs md:space-y-0 md:flex-row md:h-24 md:text-base">
      <Link href="/contact" className="flex gap-2">
        <div className="w-6 h-10 flex items-center">
          <MailOutlineIcon />
        </div>
        <div className="flex items-center">Formulaire de contact</div>
      </Link>

      <a className="flex gap-2" href="tel:0344499807">
        <div className="w-6 h-10 flex items-center">
          <PhoneIcon />
        </div>
        <div className="flex items-center">0344499807</div>
      </a>
      <a
        className="flex gap-2"
        target="_blank"
        href="https://goo.gl/maps/A5vKhbrMamkwFPz76"
      >
        <div className="w-6 h-10 flex items-center">
          <PlaceIcon />
        </div>
        <div className="flex items-center">3 Rue de la Molière</div>
      </a>
      <a
        className="flex gap-2"
        target="_blank"
        href="https://m.facebook.com/people/ACAM-Montagny/100063693005219/"
      >
        <div className="w-6 h-10 flex items-center">
          <FacebookIcon />
        </div>
        <div className="flex items-center">Facebook</div>
      </a>
    </div>
  );
};

export default Contact;
