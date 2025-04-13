import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (

    <>
    <div className="maiher">
    <div className="about-container">
        <div className="about-header">
          <h1 className="section-title-ind ">ABOUT ERFL GLOBAL SUMMIT</h1>
          <p className="fs-3 ftc">
            Emergency Response & Fire Leadership Global Summit 2024 (ERFL Global
            Summit 2024) is an international platform that will address research
            and innovations in the field of emergency response, crisis
            management, fire and safety. The conference and exhibition will
            bring together a distinguished gathering of participants from all
            across the globe, sharing their expertise about the current and
            future challenges in the light of emergency response management and
            fire leadership.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title-ind text-center">OBJECTIVES</h2>
            <ul>
              <li style={{textAlign:"justify"}}>
              To provide an opportunity for scientific and industrial communities to meet and share their research and innovations in the field of emergency response, crisis management, fire and safety along with learning and understanding various international fire and safety standards

              </li>
              <li style={{textAlign:"justify"}}>
              It will be a platform for exchanging ideas and enhance knowledge sharing between the fire engineers, stakeholders, academic scientists, researchers and scholars on all aspects of fire safety
              </li>
              <li>
              The prime focus shall be to bring together regional and international experts from the civil defense force, industrial emergency response leaders, fire operators & experts to share best practices to operate effectively and emphasize on latest global trends
              </li>
              <li style={{textAlign:"justify"}}>
              It will educate and train the stakeholders and introduce new technologies and advancements to ensure that adequate measures are undertaken to safeguard against loss of life and property by fire
              </li>
            </ul>
          </div>
          <div className="about-image">
            <img
              src="https://erfl.org/demo2025.3/img/erfl-img1.png"
              alt="ERFL Global Summit"
              height={420}
            />
          </div>
        </div>

        <h2 className="attendee-title">ATTENDEE PROFILE</h2>

        <div className="attendee-container mt-3">
          <div className="attendee-card">
            <h3>CXO / EXECUTIVE <br /> SENIOR MANAGEMENT</h3>
            <p style={{textAlign:"justify"}}>
            As an industry leader, I’ve researched a lot about the different phases of emergency management. Representing subject experts and thought leaders at this platform gives me immense pleasure and opportunity to grow my network and subject knowledge. It provides me with the chance of connecting with other leaders and policy makers who have introduced and implemented new & affective techniques, theories and services to fight against any fire emergency situation.

</p>
          </div>
          <div className="attendee-card">
            <h3>DEPARTMENTAL HEAD <br /> TECHNICAL AUDIENCE</h3>
            <p style={{textAlign:"justify"}}>
            Being a stakeholder of this industry, I’m always looking forward to the opportunities and occasions when and where I can learn about new techniques, researches, business opportunities & international policies in the field fire emergency and leadership. ERFL platform gives me the chance to address and get involved with all my interest areas and subject matter experts. By being a part of this conference, I’ll meet other like-minded peers and get to learn a lot from their experiences and case studies.


            </p>
          </div>
          <div className="attendee-card">
            <h3>INDUSTRY PROFESSIONALS <br /> & MANAGERS</h3>
            <p style={{textAlign:"justify"}}>
            I belong to the industry and represent the products/services provider community. I believe ERFL will give me the absolute platform to exhibit my product/services while I enjoy an opportunity to express my thoughts about industry among its peers. I can also look forward to productive business leads and explore fresh opportunities with companies from the Kingdom of Saudi Arabia.


            </p>
          </div>
          <div className="attendee-card">
            <h3>THE GULF</h3>
            <p style={{textAlign:"justify"}}>
            Since the event is based out in the Kingdom of Saudi Arabia, it will give me a great opportunity to network with the thought leaders of the leading oil and gas companies of the world. I’ll also benefit hearing from them about their initiatives and experiences on the subject of fire emergencies and the beforehand preparedness, the response and recovery.
            </p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default AboutPage;
