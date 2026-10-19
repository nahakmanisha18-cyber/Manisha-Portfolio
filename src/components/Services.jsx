
import React from "react";
import {
    FaCode,
    FaServer,
    FaLayerGroup,
    FaMobileAlt,
    FaDatabase,
    FaPlug
} from "react-icons/fa";

const Services = () => {
    const serviceData = [
        {
            icon: <FaCode />,
            number: "01",
            title: "Frontend Development",
            description:
                "Building modern, interactive, and user-friendly interfaces using React.js, Next.js, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS."
        },
        {
            icon: <FaServer />,
            number: "02",
            title: "Backend Development",
            description:
                "Developing secure and scalable server-side applications using Node.js, Express.js, REST APIs, authentication, and middleware."
        },
        {
            icon: <FaLayerGroup />,
            number: "03",
            title: "Full Stack MERN Development",
            description:
                "Creating complete web applications using MongoDB, Express.js, React.js, and Node.js, from frontend interfaces to backend functionality."
        },
        {
            icon: <FaMobileAlt />,
            number: "04",
            title: "Responsive Web Design",
            description:
                "Developing responsive websites that deliver a consistent and smooth user experience across mobile phones, tablets, and desktops."
        },
        {
            icon: <FaDatabase />,
            number: "05",
            title: "Database Development",
            description:
                "Managing application data with MongoDB, Mongoose, and basic MySQL, including data modeling and CRUD operations."
        },
        {
            icon: <FaPlug />,
            number: "06",
            title: "API Integration",
            description:
                "Integrating REST APIs, authentication systems, and third-party services to connect frontend interfaces with backend applications."
        }
    ];

    return (
        <section className="services-section" id="service">
            <div className="services-header">
                <span
                    className="services-eyebrow"
                    data-aos="fade-up"
                >
                    WHAT I DO
                </span>

                <h2
                    className="services-heading"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    My <span>Services</span>
                </h2>

                <p
                    className="services-subtitle"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Full Stack Web Development solutions to build
                    modern, responsive, and functional web applications.
                </p>
            </div>

            <div className="services-container">
                {serviceData.map((item, index) => (
                    <div
                        className="service-card"
                        key={item.number}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="service-card-top">
                            <div className="icon-box">
                                {item.icon}
                            </div>

                            <span className="service-number">
                                {item.number}
                            </span>
                        </div>

                        <h3 className="service-title">
                            {item.title}
                        </h3>

                        <p className="service-desc">
                            {item.description}
                        </p>

                        <div className="service-bottom-line"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
