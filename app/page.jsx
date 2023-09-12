import React from "react";
import Event from "./components/Event";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Partners from "./components/Partners";

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
