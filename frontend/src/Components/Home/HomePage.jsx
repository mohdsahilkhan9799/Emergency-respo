import React, { useEffect } from "react";
import CountUp from "react-countup";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/92498384/photo/firemen.jpg?s=2048x2048&w=is&k=20&c=zgoSYX4bFoCHiMDK4BlGX_hNfxzE6MMq9SzWrPmm-kY=",
    title: "Emergency Response & Fire Leadership",
    description:
      "Global Summit 2024 (ERFL Global Summit 2024) is an international platform that will address research and innovations in the field of emergency response, crisis management, fire and safety.",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1783069832/photo/firefighters-team-working.jpg?s=2048x2048&w=is&k=20&c=TTWOKDZbaNC5rJp0CfBx9qt8cpG2rKYwdPbkrSWi1dE=",
    title: "Managing Fire & Emergency Response",
    description: "Preparedness | Response | Recovery",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/92498384/photo/firemen.jpg?s=2048x2048&w=is&k=20&c=zgoSYX4bFoCHiMDK4BlGX_hNfxzE6MMq9SzWrPmm-kY=",
    title: "Emergency Response & Fire Leadership",
    description:
      "Global Summit 2024 (ERFL Global Summit 2024) is an international platform that will address research and innovations in the field of emergency response, crisis management, fire and safety.",
  },
];

const stats = [
  { id: 1, number: 18000, text: "Exhibition Attendees" },
  { id: 2, number: 20000, text: "Exhibition Space", suffix: " M²+" },
  { id: 3, number: 1400, text: "Conference Delegates" },
  { id: 4, number: 500, text: "Expert Speakers" },
  { id: 5, number: 120, text: "Conference Sessions" },
  { id: 6, number: 110, text: "Participating Countries" },
];

const sponsors = [
  { id: 1, src: "https://erfl.org/demo2025.3/img/gisco-logo.jpg", alt: "Saudi Sicli" },
  { id: 2, src: "https://erfl.org/demo2025.3/img/apsensing.jpg", alt: "Bayan" },
  { id: 3, src: "https://erfl.org/demo2025.3/img/bayan.jpg", alt: "International Technical Support" },
  { id: 4, src: "https://erfl.org/demo2025.3/img/its.jpg", alt: "Honeywell" },
  { id: 5, src: "https://erfl.org/demo2025.3/img/honeywell.jpg", alt: "Siemens" },
];

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
    <div className="homepage-container">
      <Slider {...settings} className="slider-section">
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="image-wrapper">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
            </div>
            <div className="overlay d-none d-lg-block" data-aos="fade-up">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <div className="buttons">
                <button className="btn btn-primary">Visitor Registration</button>
                <button className="btn btn-secondary">Book Your Delegate Pass</button>
                <button className="btn btn-success">Book a Stand</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="stats-section">
        {stats.map((stat) => (
          <div key={stat.id} className="stat-box" data-aos="fade-up">
            <h2>
              <CountUp
                start={0}
                end={stat.number}
                duration={3}
                separator=","
              />
              {stat.suffix || "+"}
            </h2>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
       {/* About Section */}
       <section className="about-section">
      <div className="about-container">
        {/* Image Section */}
        <div className="about-image" data-aos="fade-up">
          <img
            src="https://erfl.org/demo2025.3/img/H.E%20Khalid%20Al-Salem.png"
            alt="H.E. Khalid Al Salime"
          />
          <div className="patron-info" data-aos="fade-up">
            <h3>Under The Patronage of</h3>
            <p><strong>H.E. Khalid Al Salime</strong></p>
            <p>President, Royal Communication for Jubail and Yandu</p>
            <p>Kingdom of Bahrain</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="about-text" data-aos="fade-up">
          <h2>About ERFL Global Summit</h2>
          <p>
            The <strong>Emergency Response & Fire Leadership Global Summit (ERFL)</strong> is an international platform dedicated to addressing research, innovations, and best practices in emergency response, crisis management, fire safety, and leadership.
          </p>
          <p>
            Bringing together <strong>experts, policymakers, and industry leaders</strong> from across the world, ERFL fosters collaboration and knowledge-sharing to tackle the evolving challenges in emergency response management.
          </p>
          <div className="buttons">
            <button className="btn btn-primary">Learn More</button>
            <button className="btn btn-secondary">Register Now</button>
          </div>
        </div>
      </div>
    </section>


    <section class="past-exhibitors">
  <h2 className="text-center pt-3">Past Exhibitors</h2>
  <div className="carousel-container">
      <div className="carousel-track">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={index} className="carousel-card">
            <img src={sponsor.src} alt={sponsor.alt} />
          </div>
        ))}
      </div>
    </div>
</section>

    </>
  );
};

// Custom Arrows for Slider
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <FaArrowRight className="custom-arrow next" onClick={onClick} />;
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <FaArrowLeft className="custom-arrow prev" onClick={onClick} />;
};

export default HomePage;
