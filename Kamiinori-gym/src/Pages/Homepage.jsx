import React from "react";
import Hero from "../component/Hero";
import Service from "../component/Service";
import About from "../component/About";
import Testimonial from "../component/Testimonial";
import FAQ from "../component/FAQ .JSX";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Homepage;
