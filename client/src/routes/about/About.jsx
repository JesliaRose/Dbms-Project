import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img src="/aboutbg.png" alt="" width={200} />
        </div>
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            At Hostel and PG Finder, we understand how important it is to find
            the right place to stay, whether you're moving to a new city for
            work, studies, or travel. Our mission is to simplify your search for
            the perfect PG or hostel by offering a comprehensive, user-friendly
            platform that connects you to safe, affordable, and comfortable
            accommodations.
            <br />
            <br />
            We provide detailed listings with verified photos, transparent
            pricing, and honest reviews to help you make informed decisions.
            Whether you're looking for a shared room, a private space, or a
            hostel with added amenities, Hostel and PG Finder makes the process
            hassle-free and efficient.
            <br />
            <br />
            With a focus on convenience, trust, and variety, we're here to help
            you find a home that suits your lifestyle and budget. Welcome to a
            smarter way to find your stay - welcome to Hostel and PG Finder.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
