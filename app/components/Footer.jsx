"use client";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import PolicyIcon from "@mui/icons-material/Policy";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import BalanceIcon from "@mui/icons-material/Balance";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      {/* <div className="container-none h-24 mx-auto flex flex-col justify-between items-center px-6 bg-yellow-300 text-black sm:flex-row sm:space-y-0"> */}
      <div className="container-none h-44 py-2 mx-auto flex flex-col justify-between items-center px-6 bg-yellow-300 text-black text-xs sm:flex-row sm:space-y-0 sm:h-24">
        {/* Copyright */}
        <Link href="/legal">
          <div className="flex items-center gap-2">
            <CopyrightIcon />
            {/* <div className="w-48">Copyright 2023</div> */}
            <div className="">Mentions légales</div>
          </div>
        </Link>
        {/* Mentions légales */}
        <Link href="/reglement">
          <div className="flex items-center gap-2">
            <BalanceIcon />
            {/* <div className="w-48">Copyright 2023</div> */}
            <div className="">Règlement intérieur</div>
          </div>
        </Link>
        {/* FAQ */}
        <Link href="/questions">
          <div className="flex items-center gap-2">
            <HelpCenterIcon />
            {/* <div className="w-48">Copyright 2023</div> */}
            <div className="">Questions fréquentes</div>
          </div>
        </Link>
        <a className="flex items-center" href="https://vexinweb.fr/">
          <div>Réalisé par</div>
          <div>
            <Image
              href="https://vexinweb.fr/"
              src="/logo_vexinweb.png"
              alt="Logo VexinWEB"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              width={50}
              height={50}
            ></Image>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
