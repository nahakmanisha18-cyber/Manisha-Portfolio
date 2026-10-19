
import React from "react";


const educationData = [
    {
        id: 1,
        title: "Full Stack Development (MERN Stack)",
        institute: "Red & White Multimedia Education, Surat",
        duration: "2025 – 2026",
        description:
            "Learning full-stack web development, including React.js, Next.js, Node.js, Express.js, MongoDB, REST APIs, and responsive web design.",
        type: "Professional Course",
        icon: "bi bi-code-slash",
    },
    {
        id: 2,
        title: "Higher Secondary (12th)",
        institute: "Jivandeep Vidhyalay",
        duration: "2024 – 2025",
        description:
            "Completed Higher Secondary education and built a foundation for further learning and professional development.",
        type: "Higher Secondary",
        icon: "bi bi-mortarboard",
    },
];

function Education() {
    return (
        <section className="education-section" id="education">
            <div className="education-container">
                <h2 className="education-title">
                    My <span>Education</span>
                </h2>

                <p className="education-subtitle">
                    My academic background and professional learning journey
                </p>

                <div className="education-timeline">
                    {educationData.map((item) => (
                        <div className="education-item" key={item.id}>
                            <div className="education-timeline-icon">
                                <i className={item.icon}></i>
                            </div>

                            <article className="education-card">
                                <div className="education-card-top">
                                    <span className="education-type">
                                        {item.type}
                                    </span>

                                    <span className="education-duration">
                                        <i className="bi bi-calendar3"></i>
                                        {item.duration}
                                    </span>
                                </div>

                                <h3 className="education-card-title">
                                    {item.title}
                                </h3>

                                <h4 className="education-institute">
                                    <i className="bi bi-geo-alt"></i>
                                    {item.institute}
                                </h4>

                                <p className="education-description">
                                    {item.description}
                                </p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
