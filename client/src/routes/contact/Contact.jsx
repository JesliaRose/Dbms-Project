import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-image">
          <img src="/contactbg.png" alt="" width={200} />
        </div>
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p>
            <b>We're Here to Help!</b>
            <br />
            Whether you're looking for a hostel, PG accommodation, or have any
            questions or suggestions, feel free to reach out to us. Our team is
            dedicated to making your accommodation search as smooth as possible!
            <br />
            <br />
            Get in Touch Customer Support For inquiries, assistance, or general
            support:
            <br />
            📧 Email: support@hostelpgfinder.com
            <br /> 
            📞 Phone: +123-456-7890
            <br />
            <br />
            Partner with Us If you're a hostel or PG owner and would like to
            list your property, collaborate, or advertise with us: 
            <br />📧 Email:
            partners@hostelpgfinder.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
