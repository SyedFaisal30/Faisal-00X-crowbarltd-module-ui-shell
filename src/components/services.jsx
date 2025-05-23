import './Services.css';

const services = [
  {
    icon: "🌐",
    title: "Platform Strategy",
    description: "Helping ventures scale with robust and secure architectures.",
  },
  {
    icon: "🔐",
    title: "Security Oversight",
    description: "Implementing enterprise-grade security for digital assets.",
  },
  {
    icon: "📊",
    title: "Operational Management",
    description: "Streamlining backend systems for maximum efficiency.",
  },
  {
    icon: "🤝",
    title: "Venture Partnerships",
    description: "Strategic collaborations and digital investment readiness.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-flex">
        {services.map((service, index) => (
          <div className="service-card-wrapper" key={index}>
            <div className="card-bg"></div> {/* Floating background */}
            <div className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
