import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";
import banner1 from "../../Photos/BANNER-1000X446PX.jpg";
import banner2 from "../../Photos/BANNER-1000X446PX_2.jpg";
import banner3 from "../../Photos/BANNER-1000X446PX_3.jpg";
import patron from "../../Photos/H.E Khalid Al-Salem.png";

import logopartner1 from "../../Photos/RCJY Horizontal Lockup.png";
import logopartner2 from "../../Photos//Saudi_Vision_2030_logo.svg.png";
import logopartner3 from "../../Photos/IAFC_Logo (1).png";
import logopartner4 from "../../Photos/Jamaa-01.png";
import logopartner5 from "../../Photos/Nexus _ Events _ Vertical _ blue.png";
import { TiLeaf } from "react-icons/ti";

const slides = [
  {
    id: 1,
    image: banner1,

    title:
      "ERFL 2026 | 3–5 February 2026 | King Abdullah Cultural Center, Jubail, KSA",
  },
  {
    id: 2,
    image: banner2,
    title: "KING ABDULLAH CULTURAL CENTER JUBAIL INDUSTRIAL CITY, KSA",
  },
  {
    id: 3,
    image: banner3,
    title: "2nd International Conference On Fire Emergency Response",
  },
];

const supported = [
  {
    id: 1,
    src: "https://erfl.org/demo2025.3/images/randum/ERFL_EVENT_BROCHURE.png",
    alt: "Saudi Sicli",
    title: "Event Brochure",
    description: "Download ERFL Global Summit 2023 Event Brochure",
  },
  {
    id: 2,
    src: "https://erfl.org/demo2025.3/images/randum/ERFL_EVENT_BROCHURE.png",
    alt: "Bayan",
    title: "Call For Papers",
    description:
      "Don't miss the opportunity to present your latest research & expertise",
  },
  {
    id: 2,
    src: "https://erfl.org/demo2025.3/images/randum/ERFL_EVENT_BROCHURE.png",
    alt: "Bayan",
    title: "Sponsorship Opportunities",
    description: "Advance and reinfroce your brand",
  },
  {
    id: 2,
    src: "https://erfl.org/demo2025.3/images/randum/ERFL_EVENT_BROCHURE.png",
    alt: "Bayan",
    title: "Exhibitor Registration",
    description: "A unique platform to showcase your brand",
  },
];

const pastExhibation = [
  {
    id: 1,
    src: "https://erfl.org/demo2025.3/img/gisco-logo.jpg",
    alt: "Saudi Sicli",
  },
  { id: 2, src: "https://erfl.org/demo2025.3/img/apsensing.jpg", alt: "Bayan" },
  {
    id: 3,
    src: "https://erfl.org/demo2025.3/img/bayan.jpg",
    alt: "International Technical Support",
  },
  { id: 4, src: "https://erfl.org/demo2025.3/img/its.jpg", alt: "Honeywell" },
  {
    id: 5,
    src: "https://erfl.org/demo2025.3/img/honeywell.jpg",
    alt: "Siemens",
  },
];

const industries = [
  {
    name: "Energy",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-01.png",
  },
  {
    name: "Construction & Infrastructure",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-02.png",
  },
  {
    name: "Mining",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-03.png",
  },
  {
    name: "Steel, Aluminium and Cement",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-04.png",
  },
  {
    name: "Academia",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-05.png",
  },
  {
    name: "Automobiles",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-06.png",
  },
  {
    name: "Telecom, Pharma & Aviation",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-07.png",
  },
  {
    name: "IT, Ports, Shipping & Marine",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-08.png",
  },
  {
    name: "Manufacturing",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-09.png",
  },
  {
    name: "Chemicals & Petrochemicals",
    icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-10.png",
  },
];

const cards = [
  {
    title: "Card One",
    description: "This is the first card description.",
    img: "https://img.freepik.com/free-photo/firefighter-ready-his-mission_23-2149237387.jpg?t=st=1742809987~exp=1742813587~hmac=407a4dc5faf3c0f7e9d76b5a37e5d4ce109574288ed03e57fa2417674789f685&w=996",
  },
  {
    title: "Card TWO",
    description: "This is the first card description.",
    img: "https://img.freepik.com/free-photo/firefighter-ready-his-mission_23-2149237382.jpg?t=st=1742810013~exp=1742813613~hmac=f523eee9060151a81ca272753c697d279ed1a416800f6298bb72ca74b670501c&w=996",
  },
  {
    title: "Card Three",
    description: "This is the first card description.",
    img: "https://img.freepik.com/free-photo/firefighters-ready-his-mission_23-2149237373.jpg?t=st=1742810045~exp=1742813645~hmac=fc8922861a3971b25c2eb22a049b4e4859ffa60c34faaa90bf06e7c3330bb537&w=996",
  },
  {
    title: "Card One",
    description: "This is the first card description.",
    img: "https://img.freepik.com/free-photo/firefighters-ready-his-mission_23-2149237360.jpg?t=st=1742810069~exp=1742813669~hmac=a991b2ae8b7a566e52de1476c55c70ae7bf2ddb0f24c5a245f4de512cea0739a&w=996",
  },
];

const HomePage = () => {
  
  const [activeSlide, setActiveSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
  };

  const partnerLogos = [
    {
      id: 1,
      src: logopartner1,
      alt: "Partner 1",
      title: "EXCLUSIVE HOST",
      width: 450,
      height: 80,
    },
    {
      id: 2,
      src: logopartner2,
      alt: "Partner 2",
      title: "IN SUPPORT OF",
      width: 350,
      height: 80,
    },
    {
      id: 3,
      src: logopartner3,
      alt: "Partner 3",
      title: "TECHNICAL PARTNER",
      width: 350,
      height: 80,
    },
    {
      id: 4,
      src: logopartner4,
      alt: "Partner 4",
      title: "OFFICIAL ORGANISER",
      width: 350,
      height: 80,
    },
    {
      id: 5,
      src: logopartner5,
      alt: "Partner 5",
      title: "ORGANISING PARTNER",
      width: 350,
      height: 80,
    },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);
  const stats = [
    { id: 1, number: 2000, text: "Delegates", suffix: "+" },
    { id: 2, number: 50, text: "Exhibitors", suffix: "+" },
    { id: 3, number: 30, text: "Countries", suffix: "+" },
    { id: 4, number: 60, text: "Speakers", suffix: "+" },
  ];

  return (
    <>
      <div className="fixed-socials">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram />
        </a>
      </div>

      <section className="slider-fullscreen" style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="fullscreen-slide">
              <div
                className="background-image"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="fullscreen-overlay">
                  <div className="slide-content">
                    {/* 📝 Typewriter Effect Title */}
                    <h5 className="transparent-outline-textss textreposibe">
                      <Typewriter
                        words={[slide.title]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={2000}
                      />
                    </h5>

                    {/* 📍 Static Buttons */}
                    <div className="button-wrapper">
                      <button className="slide-button" data-aos="fade-left">
                        Register Now
                      </button>
                      <button className="slide-button1" data-aos="fade-right">
                        Become an Exhibitor
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <div
        className="container-fluid partners-section"
        style={{ overflow: "hidden" }}
        data-aos="fade-right"
       
      >
        <div className="partner-logo-container">
          <div className="">
            <p className="partner-title">EXCLUSIVE HOST</p>
            <img
              src={logopartner1}
              alt="Partner 1"
              className="partner-logo1"
              style={{ width: "320px", height: "100px" }}
            />
          </div>
          <div className="partner-logo-wrapper">
            <p className="partner-title">IN SUPPORT OF</p>
            <img
              src={logopartner2}
              alt="Partner 2"
              className="partner-logo"
              style={{ width: "300px", height: "100px" }}
            />
          </div>
          <div className="partner-logo-wrapper">
            <p className="partner-title">TECHNICAL PARTNER</p>
            <img
              src={logopartner3}
              alt="Partner 3"
              className="partner-logo"
              style={{ width: "300px", height: "120px" }}
            />
          </div>
          <div className="partner-logo-wrapper">
            <p className="partner-title">OFFICIAL ORGANISER</p>
            <img
              src={logopartner4}
              alt="Partner 4"
              className="partner-logo1"
              style={{ width: "290px", height: "100px" }}
            />
          </div>
          <div className="partner-logo-wrapper">
            <p className="partner-title">ORGANISING PARTNER</p>
            <img
              src={logopartner5}
              alt="Partner 5"
              className="partner-logo"
              style={{ width: "300px", height: "100px" }}
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section" ref={sectionRef}  >
        <div className="stats-wrapper">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-box" data-aos="fade-left">
              <div className="stat-number">
                {visible ? (
                  <>
                    <CountUp start={0} end={stat.number} duration={2} />
                    <span className="suffix">{stat.suffix}</span>
                  </>
                ) : (
                  "0"
                )}
              </div>
              <p className="stat-label">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="patro-bg" style={{ overflow: "hidden" }}>
        <section
          className="patro-section "
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="container">
            {/* Image Column */}
            <div className="patro-image-container" data-aos="fade-right">
              <img
                src={patron}
                alt="H.E. Khalid Al Salem"
                className="patro-image"
              />
            </div>

            {/* Content Column */}
            <div className="patro-content mx-5" data-aos="fade-left">
              <h2 className="patro-title">UNDER THE PATRONAGE OF</h2>
              <h1 className="patro-name">
                HIS EXCELLENCY ENG. KHALID MOHAMMED AL SALEM
              </h1>
              <p className="patro-position">
                PRESIDENT <br />
                ROYAL COMMISSION FOR JUBAIL AND YANBU <br />
                KINGDOM OF SAUDI ARABIA
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <div
        className="container-fluid bgset"
        data-aos="fade-left"
        style={{ overflow: "hidden" }}
      >
        <div
          className="row align-items-center py-5"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          {/* Content Section */}
          <div
            className="col-lg-6 col-md-12 text-content-here"
            data-aos="fade-right"
          >
            <h2 className="title px-3">
              ABOUT <br /> ERFL GLOBAL SUMMIT
            </h2>
            <p
              className="sizeft px-3"
              style={{ textAlign: "justify" }}
              data-aos="fade-left"
            >
              The Emergency Response & Fire Leadership Global Summit (ERFL 2026)
              is the Middle East’s leading platform focused on preparedness,
              crisis response, and recovery strategies. Organised under the
              esteemed patronage of H.E. Eng. Khalid Mohammed Al Salem, ERFL
              brings together global leaders and emergency professionals to
              shape the future of fire safety.
            </p>
            <div className="px-3 mt-3">
              <button className="learn-more-btn" data-aos="zoom-in">
                Learn More
              </button>
            </div>
          </div>

          {/* Hidden Column on Small Screens */}
          <div className="col-lg-6 d-none d-lg-block"  style={{ overflow: "hidden" }}></div>
        </div>
      </div>

      <section className="event-overview" style={{ overflow: "hidden" }}>
        {/* <h2 className="section-title" >Supported</h2> */}
        <div className="past-exhibition">
          {supported.map((event, index) => (
            <div key={index} className="event-card" data-aos="fade-left">
              <img
                src={event.src}
                alt={event.title}
                className="event-img"
                data-aos="fade-right"
              />

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

  

      <div className="industries-section"  style={{ overflow: "hidden" }}>
        <h2 className="industries-heading">Participating Industries</h2>
        <div className="industries-cards-wrapper">
          {industries.map((industry, index) => (
            <div className="industry-box" data-aos="zoom-in" key={index} style={{ overflow: "hidden" }} >
              <div className="industry-img">
                <img src={industry.icon} alt={industry.name} />
              </div>
              <div className="industry-label">{industry.name}</div>
            </div>
          ))}
        </div>
      </div>

      <section
        className="unique-section  "
        data-aos="flip-right"
        style={{ overflow: "hidden" }}
      >
        <h1 className="section-title-unique text-center  pt-5  ">
          Testimonial
        </h1>
        <div className="container-fluid mx-auto  mb-5 m " data-aos="fade-right">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className=""
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className=" unique-card mx-4 my-5"
                  data-aos="zoom-in"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="unique-card-img  "
                  />
                  <div className="unique-card-content">
                    <h3 className="unique-card-title">{card.title}</h3>
                    <p className="unique-card-description">
                      {card.description}
                    </p>
                    <a
                      href="aboutus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="unique-button"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section
        className="about-section-ads"
        data-aos="flip-left"
        style={{ overflow: "hidden" }}
      >
        <div className="container-ads ">
          <div className="row-ads">
            <div className="col-ads">
              <div className="about-card-ads ">
                <img
                  src="https://erfl.org/demo2025.3/img/about-conference-img.jpg"
                  alt="Conference"
                />
                <div className="about-content-ads ">
                  <h3>About Conference</h3>
                  <p>Join industry leaders in the latest tech innovations.</p>
                  <button className="about-button-ads">
                    Learn More
                    <span className="arrow-icon-ads">→</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-ads">
              <div
                className="about-card-ads"
                data-aos="fade-down"
                style={{ overflow: "hidden" }}
              >
                <img
                  src="https://erfl.org/demo2025.3/img/about-exhibition-img.jpg"
                  alt="Exhibition"
                />
                <div className="about-content-ads">
                  <h3>About Exhibition</h3>
                  <p>Explore innovations and networking opportunities.</p>
                  <button className="about-button-ads">
                    Learn More
                    <span className="arrow-icon-ads">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="logo-slider-container-bh"style={{overflow:"hidden"}}>
<h1 className="section-title-unique text-center ">partners</h1>

      <div className="logo-slider-wrapper-bh py-4 " >
      <Marquee gradient={false} speed={50} pauseOnHover>
  {pastExhibation.map((item) => (
    
    <div key={item.id} className="logo-item-bh">
      <img src={item.src} alt={item.alt} className="logo-image-bh" />
    </div>
  ))}
</Marquee>

      </div>
    </section> */}
    </>
  );
};

export default HomePage;
