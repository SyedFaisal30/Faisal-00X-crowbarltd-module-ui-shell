import { useState } from "react";
import "./Services.css";

const services = [
  {
    icon: "🌐",
    title: "Platform Strategy",
    description: "Helping ventures scale with robust and secure architectures.",
    detail:
      "Our platform strategy focuses on designing scalable, secure, and flexible technology infrastructures to support long-term business growth. We assess existing systems, recommend modern solutions, and help with implementation.",
  },
  {
    icon: "🔐",
    title: "Security Oversight",
    description: "Implementing enterprise-grade security for digital assets.",
    detail:
      "We provide end-to-end security audits, implement best practices like zero-trust models, and ensure compliance with modern cybersecurity standards for your business-critical systems.",
  },
  {
    icon: "📊",
    title: "Operational Management",
    description: "Streamlining backend systems for maximum efficiency.",
    detail:
      "We help automate and optimize backend operations, cloud infrastructure, and DevOps pipelines to enhance business agility and reduce operational costs.",
  },
  {
    icon: "🤝",
    title: "Venture Partnerships",
    description: "Strategic collaborations and digital investment readiness.",
    detail:
      "We work with startups and investors to ensure product-market fit, technical validation, and readiness for scaling or pitching to potential stakeholders.",
  },
];

const Services = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpenModal = (index) => {
    setOpenModalIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModalIndex(null);
  };

  return (
    <section className="services">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-flex">
        {services.map((service, index) => (
          <div className="service-card-wrapper" key={index}>
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button
                className="service-button"
                onClick={() => handleOpenModal(index)}
              >
                Learn More
              </button>
            </div>

            {openModalIndex === index && (
              <div className="modal-overlay" onClick={handleCloseModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2>{service.title}{service.icon}</h2>
                  <p>{service.detail}</p>
                  <button className="close-button" onClick={handleCloseModal}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
