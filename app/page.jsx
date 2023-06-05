import React from "react";
import Image from "next/image";
import Link from "next/link";
import Event from "./components/Event";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Event />
      <Events />
      <Partners />
    </div>
  );
};

export default HomePage;
