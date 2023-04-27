import React from "react";
import Image from "next/image";
import Link from "next/link";
import Evenement from "./components/Evenement";
import Evenements from "./components/Evenements";
import Hero from "./components/Hero";
import Partenaires from "./components/Partenaires";

const HomePage = () => {
  return (
    // Using tailwind:
    // <div className="flex flex-col items-center justify-center min-h-screen bg-crem">
    <div className="">
      <Hero />
      <Evenement />
      <Evenements />
      <Partenaires />
    </div>
  );
};

export default HomePage;
