import React from "react";
import { useState, useRef, useEffect } from "react";
import mainimg from "../assets/hero-img/Alpine_Green__1_-removebg-preview.png";
import mainimg2 from "../assets/hero-img/500_Internal_Server_Error-removebg-preview.png";
const slider = [
  {
    title: (
      <>
        Every Rep Counts— <br /> Start Simple Today, Grow Stronger for Life.
      </>
    ),
    subtitle:
      "Progress begins with a single movement. Whether you're just starting out or already deep into your training, each rep brings you closer to your goals. Build your foundation with simple, effective workouts, then push beyond limits with smarter training, expert tips, and a plan that grows with you.",
    img: mainimg,
    alt: "Gym equipment and workout scene",
  },
  {
    title: (
      <>
        Simple Fitness— <br /> For Everyone, At Every Stage.
      </>
    ),
    subtitle:
      "Fitness should never feel out of reach. Whether you're stepping into the gym for the very first time or refining years of experience, our approach makes every session clear and achievable. Start with easy, guided routines, progress with smarter strategies, and enjoy a journey built to grow with you.",
    img: mainimg2,
    alt: "People of all levels working out together",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slider.length);
    }, 10000);
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);
  return (
    <section className="hero">
      <div className="slide-wrapper">
        <div className="hero-slide">
          <div className="hero-content">
            <div className="hero-col">
              <h1 className="hero-title">{slider[current].title}</h1>
              <p className="hero-subtitle">{slider[current].subtitle}</p>
              <button className="hero-button">Get Started</button>
            </div>
            <div className="hero-col">
              <img
                src={slider[current].img}
                alt={slider[current].alt || "Workout visual"}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;
