
import React from "react";

const certificates = [
    {
        title: "Master AI for Web App Development",
        organization: "Simplilearn",
        date: "July 2026",
        type: "AI & Web Development",
        icon: "bi bi-patch-check",
    },
    {
        title: "Full Stack Development with MERN",
        organization: "Cisco ThingQbator RVCE",
        date: "June 2026",
        type: "Full Stack Development",
        icon: "bi bi-code-slash",
    },
    {
        title: "Full-Stack Web Development (MERN Stack)",
        organization: "Red & White Multimedia Education, Surat",
        date: "2025 – 2026",
        type: "Professional Course",
        icon: "bi bi-mortarboard",
    },
];

const Certificates = () => {
    return (
        <section className="certificates-section" id="certificates">
            <div className="certificates-container">

                {/* Section Heading */}
                <div className="certificates-heading">
                    <span
                        className="certificates-label"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        MY ACHIEVEMENTS
                    </span>

                    <h2
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        My <span>Certifications</span>
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Certifications and courses that support my
                        learning journey in web development.
                    </p>
                </div>

                {/* Certificate Cards */}
                <div className="certificates-grid">
                    {certificates.map((certificate, index) => (
                        <div
                            className="certificate-card"
                            key={certificate.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="certificate-card-top">
                                <div className="certificate-icon">
                                    <i className={certificate.icon}></i>
                                </div>

                                <span className="certificate-number">
                                    0{index + 1}
                                </span>
                            </div>

                            <span className="certificate-type">
                                {certificate.type}
                            </span>

                            <h3>{certificate.title}</h3>

                            <p className="certificate-organization">
                                <i className="bi bi-building"></i>
                                {certificate.organization}
                            </p>

                            <div className="certificate-footer">
                                <span>
                                    <i className="bi bi-calendar3"></i>
                                    {certificate.date}
                                </span>

                                {/* <i className="bi bi-arrow-up-right certificate-arrow"></i> */}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certificates;
