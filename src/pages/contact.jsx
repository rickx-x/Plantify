import React from "react";
import "./contact.css";

export const Contact = () => {
  return(
    <section className="contact-page">
      <div className="container">
        <h2>Contact Us</h2>
        <p>
          Have any questions or inquiries? We'd love to hear from you! Fill out
          the form below or reach out to us through the provided contact
          information.
        </p>
        <form method="post" action="mailto:@youremail.com" >

        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </div>
          </form>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <strong>Address:</strong> 123 Green Street, Plant City
          </p>
          <p>
            <strong>Email:</strong> info@plantwebsite.com
          </p>
          <p>
            <strong>Phone:</strong> +91 1234567890  (Mon-Fri, 9am-5pm)
          </p>
        </div>
      </div>
    </section>
  );
};
