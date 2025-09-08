import React from "react";

const FAQ = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-content">
          <div className="service-col">
            <div className="about-header">
              <h3 className="about-subtitle">
                Any questions? <br />
                We got you.
              </h3>
              <p className="QUESTION-Quote">
                Yet best any for assistance indulgence unpleasing. Not thoughts
                all exercise blessing. Indulgence way everything joy alteration
                boisterous the attachment.
              </p>

              <a href="/" className="more-faqs-link">
                More FAQs →
              </a>
            </div>
          </div>

          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-question">How this work?</summary>
              <div className="faq-answer">
                <p>
                  Yet best any for assistance indulgence unpleasing. Not
                  thoughts all exercise blessing. Indulgence way everything joy
                  alteration boisterous the attachment.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                Are there any additional fee?
              </summary>
              <div className="faq-answer">
                <p>
                  Our pricing is transparent with no hidden fees. All costs are
                  clearly outlined in your membership agreement, and we'll
                  always notify you of any changes in advance.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">How can I get the app?</summary>
              <div className="faq-answer">
                <p>
                  You can download our mobile app from the App Store or Google
                  Play Store. Simply search for our gym name and install the app
                  to access class schedules, book sessions, and track your
                  progress.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-question">
                What features do you offer and other not?
              </summary>
              <div className="faq-answer">
                <p>
                  We offer 24/7 access, personal training, group classes,
                  nutritional guidance, and modern equipment. Unlike other gyms,
                  we provide personalized meal plans and one-on-one coaching at
                  no extra cost.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
