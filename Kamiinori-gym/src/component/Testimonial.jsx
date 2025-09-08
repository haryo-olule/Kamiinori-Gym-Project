import React from "react";
import image from "../assets/Testiominal-img/Damson Idris.jpg";
import image1 from "../assets/Testiominal-img/digi cam realness.jpg";
import image2 from "../assets/Testiominal-img/download (15).jpg";
import image3 from "../assets/Testiominal-img/Portrait of a confident young smart looking man _ Premium AI-generated image.jpg";

const TestimonialData = [
  {
    quote: "This gym completely changed my life! The trainers are amazing.",
    img: image,
    name: "John Doe",
    title: "Fitness Enthusiast",
  },
  {
    quote: "Great community, supportive environment, and fantastic equipment.",
    img: image1,
    name: "Jane Smith",
    title: "Athlete",
  },
  {
    quote:
      "I've never felt stronger or more confident. The results speak for themselves!",
    img: image2,
    name: "Mike Johnson",
    title: "Personal Trainer",
  },
  {
    quote:
      "The variety of classes and personal attention make this place special.",
    img: image3,
    name: "Sarah Wilson",
    title: "Yoga Instructor",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="service-header">
        <div className="service-row">
          <div className="service-col">
            <div className="about-header">
              <h3 className="about-subtitle">Testimonials</h3>
              <h2 className="about-title">
                Don't Take Our Word For It. Hear Theirs
              </h2>
            </div>
          </div>
        </div>

        <div className="testimonial-row">
          {TestimonialData.map((data, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-line">
                <div className="quote-icon">"</div>
                <p className="testimonial-quote">{data.quote}</p>
                <div className="quote-icon">"</div>
              </div>

              <div className="testimonial-author">
                <div className="author-info">
                  <img src={data.img} alt={data.name} className="author-img" />
                  <div className="author-line">
                    <h4 className="author-name">
                      {data.name} <br /> {data.title}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
