import React, { useState } from "react";
import PowerLifter from "../assets/About-img/download__14_-removebg-preview.png";
import OLYMPICWEIGHTLIFTERS from "../assets/About-img/009-removebg-preview.png";
import BodyBuilder from "../assets/About-img/Mike_Mentzer___Ironman_Magazine___May_1978-removebg-preview.png";
import CROSSFITATHLETES from "../assets/About-img/Emma_Tall__2023_CrossFit_Games__The_Alpaca_Redux-removebg-preview.png";
import Normal from "../assets/About-img/Black_and_Grey_Print_Workout_Outfit_Inspo_For_Men___SQUATWOLF-removebg-preview.png";

const athleteTypes = [
  {
    img: PowerLifter,
    alt: "Worlds Strongest Man",
    title: "POWERLIFTERS",
    subtitle: "STRENGTH SPECIALISTS",
    description:
      "Masters of the big three: squat, bench press, and deadlift. They train for pure strength with low reps and heavy weights, focusing on progressive overload and maximum force production.",
  },
  {
    img: OLYMPICWEIGHTLIFTERS,
    alt: "Olympic weightlifter",
    title: "OLYMPIC WEIGHTLIFTERS",
    subtitle: "TECHNICAL ATHLETES",
    description:
      "Technical athletes specializing in snatch and clean & jerk, combining explosive power with precise movement patterns. They emphasize mobility, speed, and perfect form.",
  },
  {
    img: BodyBuilder,
    alt: "Bodybuilder posing",
    title: "BODYBUILDERS",
    subtitle: "AESTHETIC FOCUSED",
    description:
      "Focused on muscle development and aesthetics, training with higher volume and isolation exercises for maximum hypertrophy. They prioritize symmetry, proportion, and definition.",
  },
  {
    img: CROSSFITATHLETES,
    alt: "CrossFit athlete training",
    title: "CROSSFIT ATHLETES",
    subtitle: "FUNCTIONAL FITNESS",
    description:
      "All-around fitness enthusiasts combining strength, cardio, and functional movements in high-intensity workouts. They train for general physical preparedness and varied challenges.",
  },
  {
    img: Normal,
    alt: "General strength training",
    title: "GENERAL TRAINEES",
    subtitle: "BALANCED APPROACH",
    description:
      "Everyday gym-goers focused on overall health and fitness, combining various training methods for balanced development. They prioritize consistency and long-term wellness.",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const handleDragStart = (e) => {
    setStartX(e.type === "mousedown" ? e.clientX : e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    const endX = e.type === "mouseup" ? e.clientX : e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((c) => (c + 1) % athleteTypes.length);
      } else {
        setCurrentIndex(
          (c) => (c - 1 + athleteTypes.length) % athleteTypes.length
        );
      }
    }
  };

  return (
    <section className="about">
      <div className="overlay">
        <h1>
          Focus on Your <span>Workout</span>, Not on Your{" "}
          <span> Own the Grind</span>. Conquer the Results
        </h1>
      </div>
      <div className="about-container">
        <div
          className="about-main"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          style={{ cursor: "grab", userSelect: "none" }}
        >
          <div className="about-image">
            <img
              src={athleteTypes[currentIndex].img}
              alt={athleteTypes[currentIndex].alt}
              draggable={false}
            />
          </div>

          <div className="about-content">
            <div className="about-counter">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(athleteTypes.length).padStart(2, "0")}
            </div>

            <div className="about-header">
              <h3 className="about-Title">
                {athleteTypes[currentIndex].title}
              </h3>
              <p className="about-details">
                {athleteTypes[currentIndex].description}
              </p>
              <button className="about-btn">Learn More</button>
            </div>

            <div className="about-nav">
              {athleteTypes.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`about-dot ${
                    dotIndex === currentIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(dotIndex)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
