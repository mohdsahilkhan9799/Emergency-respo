import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import "./Speakers.css";

const speakers = [

    {
        name: "Saeed Al Shehri",
        designation: "Director - Industrial Security & Safety, Royal Commission for Jubail",
        image: "https://erfl.org/demo2025.3/img/speakers/DSC_7917.png",
        description: "",
    },
    {
        name: "H.E. Mohammed Bin Al Habdan",
        designation: "Secretary General, HCIS",
        image: "https://erfl.org/demo2025.3/img/speakers/HCIS.png",
        description: "",
    },
    {
        name: "Khalid Khaleel",
        designation: "Chairman, JAMA’A",
        image: "https://erfl.org/demo2025.3/img/speakers/Khalid%20Khaleel%20-%20JAMA'A.png",
        description: "",
    },
    {
        name: "Deputy Chief Jeff Dulin (Ret.)",
        designation: "Strategic Advisor, International Association of Fire Chiefs",
        image: "https://erfl.org/demo2025.3/img/speakers/Jeff%20Dulin.png",
        description: "",
    },
    {
        name: "Anas Alzaid",
        designation: "Director - MENA Region, NFPA",
        image: "https://erfl.org/demo2025.3/img/speakers/anas.png",
        description: "",
    },
    {
        name: "Paul Michael Kudray",
        designation: "Head of Resilience, Royal Commission for Jubail",
        image: "https://erfl.org/demo2025.3/img/speakers/Paul%20Kudray%20MSc%20FICPEM%20MAICP%20CBCI.png",
        description: "",
    },
    {
        name: "Richard Reed",
        designation: "Head of Corporate Crisis & Continuity Management, Saudi Aramco",
        image: "https://erfl.org/demo2025.3/img/speakers/Richard%20Reed%20-%20ARAMCO.png",
        description: "",
    },
    {
        name: "Ahmed Khalil",
        designation: "HSE Director, BAPCO",
        image: "https://erfl.org/demo2025.3/img/speakers/Ahmed%20Khalil%20-%20BAPCO.png",
        description: "",
    },
    {
        name: "Abdulrahman D. Al-Zayedi",
        designation: "Manager-EHSS, TASNEE",
        image: "https://erfl.org/demo2025.3/img/speakers/abdulrahman-al-zayedi-co-chairman%20(1).png",
        description: "",
    },
    {
        name: "Eid S. Al-Juaid",
        designation: "General Manager - HSSE, Sipchem",
        image: "https://erfl.org/demo2025.3/img/speakers/eid-al-juaid.png",
        description: "",
    },
];


const Speakers = () => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const toggleAgenda = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
 
 <div className="main-speker">
 <section className="speakers-section">
             <div className="container">
                 <h2 className="section-title-ind" data-aos="fade-up">Our Speakers</h2>
 
                 <div className="row speakers-grid mt-3">
                     {speakers.map((speaker, index) => (
                         <div 
                             className="col-lg-4 col-md-6 col-sm-12 speaker-card" 
                             key={index} 
                             data-aos="fade-up" 
                             onClick={() => setSelectedSpeaker(speaker)}
                         >
                             <div className="speaker-image">
                                 <img src={speaker.image} alt={speaker.name} />
                             </div>
                             <div className="speaker-info">
                                 <h3>{speaker.name}</h3>
                                 <p>{speaker.designation}</p>
                             </div>
                             {/* Downward Arrow Icon */}
                             <div className="arrow-down">▼</div>
                         </div>
                     ))}
                 </div>
             </div>
 
             {/* Modal for Speaker Details */}
             {selectedSpeaker && (
                 <div className="modal-overlay" onClick={() => setSelectedSpeaker(null)}>
                     <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                         <span className="close-modal" onClick={() => setSelectedSpeaker(null)}>&times;</span>
                         <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="modal-image" />
                         <h3>{selectedSpeaker.name}</h3>
                         <p className="modal-designation">{selectedSpeaker.designation}</p>
                         <p className="modal-description">{selectedSpeaker.description}</p>
                     </div>
                 </div>
             )}
 
         </section>
 </div>

        </>
       
        
    );
}

export default Speakers;