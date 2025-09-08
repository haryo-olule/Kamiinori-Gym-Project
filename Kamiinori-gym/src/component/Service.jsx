import React from "react";
import serviceImg from "../assets/service-img/Endorphin_ Performance Meets Passion.jpg";
import serviceImg1 from "../assets/service-img/Gymshark - Show up daily 💪 _ Facebook.jpg";
import serviceImg2 from "../assets/service-img/Meal Prep Sunday.jpg";
import serviceImg3 from "../assets/service-img/Its giving pilates princess 🩰 Our best selling oasis shilouettes in soft pink_ 💕.jpg";

const serviceData = [
  {
    img: serviceImg,
    alt: "Fitness training service",
    title: "Personal Training",
    description:
      "Get personalized workout plans and one-on-one coaching to achieve your fitness goals faster and more effectively.",
  },
  {
    img: serviceImg1,
    alt: "Fitness training service",
    title: "Group Classes",
    description:
      "Stay motivated in a fun environment with people who share the same fitness goals.",
  },
  {
    img: serviceImg2,
    alt: "Fitness training service",
    title: "Nutrition Coaching",
    description:
      "Learn how to fuel your body properly with expert diet and lifestyle advice.",
  },
  {
    img: serviceImg3, // Different cardio image
    alt: "Cardio fitness service",
    title: "Cardio Training",
    description:
      "High-intensity cardio workouts designed to improve cardiovascular health, burn calories, and boost endurance levels.",
  },
];
const Service = () => {
  return (
    <section className="service">
      <div className="service-header">
        <div className="service-row">
          <div className="service-col">
            <div className="about-header">
              <h3 className="about-subtitle">Our Service</h3>
              <h2 className="about-title">
                Boost Your Health and Fitness with Our Experience
              </h2>
            </div>
          </div>
          {/* Removed the <Link> */}
        </div>

        <div className="service-row">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card">
              <img
                src={service.img}
                alt={service.alt || service.title}
                className="service-img"
              />
              <div className="service-content">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
                <button className="service-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Service;
