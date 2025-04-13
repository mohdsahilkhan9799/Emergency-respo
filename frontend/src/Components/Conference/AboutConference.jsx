import React from "react";
import "./AboutConference.css"; // Import the CSS file

const AboutConference = () => {
  return (
    <div className="main-conf">
      <div className="about_container_conf">
        {/* About Section */}
        <div className="about_section_conf mt-5">
          <h1 className="section-title-ind text-white">ABOUT THE CONFERENCE</h1>
          <p className="about_text_conf">
            Revolving around the theme of <strong>"Managing Fire & Emergency Response: Preparedness | Response | Recovery"</strong>, the conference Programme will focus on highlighting the latest trends and technologies while offering insights & solutions based on case studies and real-time experiences of the speakers.
            The conference will be an absolute forum for the subject matter experts to exchange knowledge as well as experiences with the industry stakeholders who are working towards fire safety, emergency medical services and emergency response management.
            <br /> <br />
            The two-day conference will feature <strong>two panel discussions</strong>, <strong>keynote addresses</strong>, by industry experts and intellectuals. The conference will also have three parallel sessions comprising of nine tracks highlighting the current and future issues faced by the fire service and emergency response departments globally.
          </p>
        </div>

        {/* Cards Section */}
        <div className="cards_container_conf">
          <div className="card_conf">
            <img src="https://erfl.org/demo2025.3/img/attend-icon1.jpg" alt="Networking" className="card_image_conf" />
            <h2 className="card_title_conf">NETWORKING</h2>
            <ul className="card_list_conf">
              <li>Meet and Greet Industry’s most knowledgeable and prominent personalities
              </li>
              <li>Explore business opportunities while you engross yourself in meeting industry thought leaders from all across the globe
              </li>
            </ul>
          </div>

          <div className="card_conf">
            <img src="https://erfl.org/demo2025.3/img/attend-icon2.jpg" alt="Knowledge Sharing" className="card_image_conf" />
            <h2 className="card_title_conf">KNOWLEDGE SHARING</h2>
            <ul className="card_list_conf">
              <li>Get practical guidance and supervision on new technologies by engaging face to face with subject matter experts
              </li>
              <li>Attend technical sessions and workshops presented by industry’s most influential and conversant speakers
              </li>
            </ul>
          </div>

          <div className="card_conf">
            <img src="https://erfl.org/demo2025.3/img/attend-icon3.jpg" alt="Innovation & Technology" className="card_image_conf" />
            <h2 className="card_title_conf">INNOVATION & TECHNOLOGY</h2>
            <ul className="card_list_conf">
              <li>Update yourself on the current and imperative technologies and its use cases in the related fields
              </li>
              <li>Explore fresh initiatives in the industry as you can also engage with rising leaders having exceptional vision towards industry development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;
