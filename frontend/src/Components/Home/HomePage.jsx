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
import Marquee from "react-fast-marquee";
import banner1 from "../../Photos/BANNER-1000X446PX.jpg"
import banner2 from "../../Photos/BANNER-1000X446PX_2.jpg"
import banner3 from "../../Photos/BANNER-1000X446PX_3.jpg"
import bgbanner from "../../Photos/BACKGROUND-BANNER.jpg"


const slides = [
  {
    id: 1,
    image: banner2,

        title: "Managing Fire & Emerngency Response",
    description:
      "Preparedness I Response I Recovery",
  },
  {
    id: 2,
    image:banner1,
  title: "KING ABDULLAH CULTURAL CENTER JUBAIL INDUSTRIAL CITY, KSA",
    description: "3 - 5 FEBRUARY 2026",
  },
  {
    id: 3,
    image:banner3,
    title:"MANAGING FIRE & EMERGENCY RESPONSE",
    description:
"PREPAREDNESS | RESPONSE | RECOVERY"
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


const industries = [
  { name: "Energy", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-01.png" },
  { name: "Construction & Infrastructure", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-02.png" },
  { name: "Mining", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-03.png" },
  { name: "Steel, Aluminium and Cement", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-04.png" },
  { name: "Academia", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-05.png" },
  { name: "Automobiles", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-06.png" },
  { name: "Telecom, Pharma & Aviation", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-07.png" },
  { name: "IT, Ports, Shipping & Marine", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-08.png" },
  { name: "Manufacturing", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-09.png" },
  { name: "Chemicals & Petrochemicals", icon: "https://erfl.org/demo2025.3/images/ICON%20300X300-10.png" },
];

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Custom Arrows for Slider

  const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-arrow-sh prev-arrow-sh" onClick={onClick}>
      <FaArrowLeft />
    </button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-arrow-sh next-arrow-sh" onClick={onClick}>
      <FaArrowRight />
    </button>
  );

 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: true,
          },
        },
      ],
    };




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


  return (
    <>
<div className="homepage-container-sh" style={{overflow:"hidden"}}>
      <Slider {...settings} className="slider-section-sh">
        {slides.map((slide) => (
          <div key={slide.id} className="slide-sh">
            <div className="image-wrapper-sh">
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image-sh"
                data-aos="fade-left"
              />
            </div>
            <div className="overlay-sh">
              <h1 className="hedertextchnage">
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
              <p>
                <Typewriter
                  words={[slide.description]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </p>
        
            </div>
          </div>
        ))}
      </Slider>
    </div>

        
    {/* count */}
    
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
    {/* count */}
       {/* About Section */}

<div className="bgad "style={{overflow:"hidden"}}>
       <section className="about-section" >
    <div className="container">
      <div className="row clearfix">
                
                <div className="content-column col-md-6 col-sm-12 col-xs-12"data-aos="fade-left" style={{overflow:"hidden"}} >
          <div className="inner-column">
            <div className="sec-title">
              <div className="title">About Us</div>
              <h2 style={{color:"white"}}>About ERFL Global Summit</h2>
            </div>
            <div className="text">
              <p>
                The <strong className="addstrong">Emergency Response & Fire Leadership Global Summit (ERFL)</strong> is an international platform dedicated to addressing research, innovations, and best practices in emergency response, crisis management, fire safety, and leadership.
              </p>
              <p>
                Bringing together <strong className="addstrong">experts, policymakers, and industry leaders</strong>, ERFL fosters collaboration and knowledge-sharing to tackle the evolving challenges in emergency response management.
              </p>
            </div>
            <a href="about.html" className="theme-btn btn-style-three">Read More</a>
          </div>
        </div>
        
        <div className="image-column col-md-6 col-sm-12 col-xs-12"style={{overflow:"hidden"}}>
          <div className="inner-column" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="image pt-2 ">
              <img 
                src="https://erfl.org/demo2025.3/img/H.E%20Khalid%20Al-Salem.png" 
                alt="H.E. Khalid Al Salime" 
                data-aos="fade-left"
              />
              <div className="overlay-box d-none d-lg-block"data-aos="fade-left">
                <h3>Under The Patronage of</h3>
                <p><strong>H.E. Khalid Al Salime</strong></p>
                <p>President, Royal Communication for Jubail and Yandu</p>
                <p>Kingdom of Bahrain</p>
              </div>
            </div>
            
          </div>
          <div className="desigtit d-lg-none d-block mx-4"data-aos="fade-left">
                <h2>Under The Patronage of</h2>
                <p><strong>H.E. Khalid Al Salime</strong></p>
                <p>President, Royal Communication for Jubail and Yandu</p>
                <p>Kingdom of Bahrain</p>
              </div>
        </div>
        
      </div>
    </div>
  </section>
  </div>

  
       {/* About Section */}
       <div className="container-fluid bgset">
      <div className="row align-items-center">
        {/* Content Section */}
        <div className="col-lg-6 col-md-12 text-content-here  "data-aos="fade-right">
          <h2 className="title">ABOUT <br /> ERFL GLOBAL SUMMIT</h2>
          <p className="sizeft" style={{textAlign:"justify"}} data-aos="fade-left"> 
            Emergency Response & Fire Leadership Global Summit (ERFL Global
            Summit) is an international platform that will address research and
            innovations in the field of emergency response, crisis management,
            fire and safety. The conference and exhibition will bring together a
            distinguished gathering of participants from all across the globe,
            sharing their expertise about the current and future challenges in
            the light of emergency response management and fire leadership.
          </p>
        </div>
        {/* Hidden Column on Small Screens */}
        <div className="col-lg-6 d-none d-lg-block"></div>
      </div>
    </div>

<section className="logo-slider-container-bh"style={{overflow:"hidden"}}>
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
    </section>

    <section className="event-overview" style={{overflow:"hidden"}}>
      {/* <h2 className="section-title" >Supported</h2> */}
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

    <div className="container-fluid industries-section" style={{overflow:"hidden"}}>
      <h2 className="section-title-ind">PARTICIPATING INDUSTRIES</h2>
      <div className="underline-ind"></div>
      <div className="row ro-ind">
        {industries.map((industry, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 industry-box" data-aos="fade-left">
            <div className="industry-item">
              <img src={industry.icon} alt={industry.name} className="industry-icon" data-aos="fade-right" />
              <p>{industry.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>



    <section className="unique-section" style={{overflow:"hidden"}}>
      <h1 className="section-title-unique text-center  " >
        Highlighted
      </h1>
      <div className="container mx-auto px-5 py-5" data-aos="fade-right">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="pb-10"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="unique-card" data-aos="fade-left" style={{overflow:"hidden"}}>
                <img src={card.img} alt={card.title} className="unique-card-img" />
                <div className="unique-card-content">
                  <h3 className="unique-card-title">{card.title}</h3>
                  <p className="unique-card-description">{card.description}</p>
                  <a href="http://" target="_blank" rel="noopener noreferrer" className="unique-button">
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  
    <section className="about-section-ads" data-aos="fade-up" style={{overflow:"hidden"}}>
  <div className="container-ads ">
    <div className="row-ads">
      <div className="col-ads">
        <div className="about-card-ads ">
          <img src="https://erfl.org/demo2025.3/img/about-conference-img.jpg" alt="Conference" />
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
        <div className="about-card-ads" data-aos="fade-down" style={{overflow:"hidden"}}>
          <img src="https://erfl.org/demo2025.3/img/about-exhibition-img.jpg" alt="Exhibition" />
          <div className="about-content-ads">
            <h3>About Exhibition</h3>
            <p>Explore  innovations and networking opportunities.</p>
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



    </>
  );
};



export default HomePage;
