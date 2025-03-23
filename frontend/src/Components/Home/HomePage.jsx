import React, { useEffect } from "react";
import CountUp from "react-countup";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const slides = [
  {
    id: 1,
    image:
        "https://img.freepik.com/premium-photo/firefighters-fighting-fire_35672-1137.jpg?w=996",

        title: "Emergency Response & Fire Leadership",
    description:
      "Global Summit 2024 (ERFL Global Summit 2024) is an international platform that will address research and innovations in the field of emergency response, crisis management, fire and safety.",
  },
  {
    id: 2,
    image:
    "https://img.freepik.com/premium-photo/brave-firefighter-battling-flames_1287196-7105.jpg?w=1060",
  title: "Managing Fire & Emergency Response",
    description: "Preparedness | Response | Recovery",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-psd/firefighter-works-fire-fireman-walks-inside-burning-building-generative-ai_587448-2245.jpg?t=st=1742711910~exp=1742715510~hmac=0f9730a01b6c9e4e84574dc3b126da8efba7fb4077e7b7276dc183f864358edf&w=1380",
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


const supported = [
  { id: 1, src: "https://erfl.org/demo2025.3/images/randum/ERFL_EVENT_BROCHURE.png", alt: "Saudi Sicli",
    title:"Event Brochure",
    description: "Download ERFL Global Summit 2023 Event Brochure"
   },
  { id: 2, src: "https://erfl.org/demo2025.3/images/randum/ERFL_EVENT_BROCHURE.png", alt: "Bayan",
    title:"Call For Papers",
    description: "Don't miss the opportunity to present your latest research & expertise"
   },
  { id: 2, src: "https://erfl.org/demo2025.3/images/randum/ERFL_EVENT_BROCHURE.png", alt: "Bayan" ,
    title:"Sponsorship Opportunities",
    description: "Advance and reinfroce your brand"
  },
  { id: 2, src: "https://erfl.org/demo2025.3/images/randum/ERFL_EVENT_BROCHURE.png", alt: "Bayan",
    title:"Exhibitor Registration",
    description: "A unique platform to showcase your brand"
   },
  
];

const pastExhibation = [
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

  // Custom Arrows for Slider
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <FaArrowRight className="custom-arrow next" onClick={onClick} />;
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <FaArrowLeft className="custom-arrow prev" onClick={onClick} />;
};
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };



  const cards = [
    {
      id: 1,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
      title: "Burgundy Flemming",
      subtitle: "Advertising",
    },
    {
      id: 2,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
      title: "Nigel Nigel",
      subtitle: "Sound & Vision",
    },
    {
      id: 3,
      image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
      title: "Caspian Bellevedere",
      subtitle: "Accounting",
    },
  ];



  return (
    <>
    <div className="homepage-container"style={{overflow:"hidden"}}>
      <Slider {...settings} className="slider-section">
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="image-wrapper">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
                data-aos="fade-left"
              />
            </div>
            <div className="overlay d-none d-lg-block" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
  <h1>
  <Typewriter
          words={[slide.title]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
        </h1>
  <p><Typewriter
          words={[slide.description]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        /></p>
  <div className="buttons">
    <button className="btn btn-primary">Visitor Registration</button>
    <button className="btn btn-danger">Book Your Delegate Pass</button>
    <button className="btn btn-primary">Book a Stand</button>
  </div>
</div>

<div className="overlay d-block d-lg-none" style={{overflow:"hidden"}}>
<h1>
  <Typewriter
          words={[slide.title]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={2000}
        />
        </h1>
  <p className="d-none ">{slide.description}</p>
  <div className="buttons">
    <button className="btn btn-primary">Visitor Registration</button>
    <button className="btn btn-secondary d-none">Book Your Delegate Pass</button>
    <button className="btn btn-success d-none ">Book a Stand</button>
  </div>
</div>
          </div>
        ))}
      </Slider>

      <div className="stats-section" style={{overflow:"hidden"}}>
        {stats.map((stat) => (
          <div key={stat.id} className="stat-box" data-aos="fade-up">
            <h2 data-aos="fade-left" >
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
       {/* <section className="about-section" style={{overflow:"hidden"}}>
      <div className="about-container">
        
        <div className="about-image" data-aos="fade-up">
          <img
            src="https://erfl.org/demo2025.3/img/H.E%20Khalid%20Al-Salem.png"
            alt="H.E. Khalid Al Salime"
            data-aos="fade-left"
          />
          <div className="patron-info" data-aos="fade-up">
            <h2>Under The Patronage of</h2>
            <p><strong>H.E. Khalid Al Salime</strong></p>
            <p>President, Royal Communication for Jubail and Yandu</p>
            <p>Kingdom of Bahrain</p>
          </div>
        </div>

        <div className="about-text d-none d-lg-block" data-aos="fade-up">
          <h2>About ERFL Global Summit</h2>
          <p className="fontDes" data-aos="fade-left">
            The <strong>Emergency Response & Fire Leadership Global Summit (ERFL)</strong> 
            is an international platform dedicated to addressing research, innovations, and 
            best practices in emergency response, crisis management, fire safety, and leadership.
          </p>
          <p className="fontDes" data-aos="fade-right">
            Bringing together <strong>experts, policymakers, and industry leaders</strong> 
            from across the world, ERFL fosters collaboration and knowledge-sharing to tackle 
            the evolving challenges in emergency response management.
          </p>
          <div className="buttons">
            <button className="btn btn-secondary">Learn More</button>
            <button className="btn btn-success">Register Now</button>
          </div>
        </div>
        
      </div>
    </section> */}


    <section className="event-overview" style={{overflow:"hidden"}}>
      <h2 className="section-title" >Supported</h2>
      <div className="past-exhibition">
        {supported.map((event, index) => (
          <div key={index} className="event-card" data-aos="fade-left">
            <img src={event.src} alt={event.title} className="event-img"  data-aos="fade-right" />
            
            <div className="event-overlay">
              <h3 className="text-center">
                {event.title} <i className="fa-solid fa-arrow-right"></i>
              </h3>
              
              {/* Show date if available */}
              
              <p>{event.description}</p>
              <button className="view-btn">View</button>
            </div>
          </div>
        ))}
      </div>
    </section>



    </>
  );
};



export default HomePage;
