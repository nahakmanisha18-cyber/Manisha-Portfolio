import { useState, useEffect } from "react";
import aboutImag from "../assets/image/aboutImage.png"
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "PHP", "C", "C++", "Node.js", "Express", "MongoDB", "MySql", "Git", "Git Hub", "Postman", "Bootstrap", "Tailwind"];


const AboutMe = () => {
    const [activeSkill, setActiveSkill] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        
            <section className="about-root" id="about">
                <h2 className="about-title" data-aos="fade-up" data-aos-delay="100"><span>ABOUT</span> ME</h2>
                <div className={`about-inner ${visible ? "visible" : ""}`}>
                    <div className="left-col">
                        
                        <h2 className="big-title" data-aos="fade-up" data-aos-delay="100">
                            Learning to build<br />
                            full stack web <em>passion.</em>
                        </h2>
                        <p className="about-bio" data-aos="fade-up" data-aos-delay="100">
                            Hi, I'm <strong>Manisha</strong>, a passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications. I work with technologies like HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB. I enjoy developing interactive user interfaces, building RESTful APIs, and working on full-stack projects such as chat applications, e-commerce platforms, and video meeting applications. I am continuously improving my technical skills and looking forward to applying my knowledge to real-world projects and growing as a developer.
                        </p>
                        <div className="skills-row" data-aos="fade-up" data-aos-delay="100" >
                            {skills.map((s) => (
                                <span
                                    key={s}
                                    className={`skill-pill ${activeSkill === s ? "active" : ""}`}
                                    onMouseEnter={() => setActiveSkill(s)}
                                    onMouseLeave={() => setActiveSkill(null)}
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                        <div className="cta-row">
                            <button className="about-btn" data-aos="fade-up" data-aos-delay="100" >View Projects →</button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="right-col">
                        <div className="photo-frame">
                            <div className="corner corner-tl" />
                            <div className="corner corner-tr" />
                            <div className="corner corner-bl" />
                            <div className="corner corner-br" />

                            <div className="photo-shadow-card" />

                            <img
                                src={aboutImag}
                                // src="https://wordpress.validthemes.net/visaco/wp-content/uploads/2025/07/17-1.png"
                                alt="Manisha - Frontend Developer"
                                className="photo-img"
                                data-aos="zoom-in" data-aos-delay="200"
                            />

                            <div className="stat-card stat-card-a">
                                <div className="stat-num">FRESHER </div>
                                <div className="stat-label">DEVELOPER</div>
                            </div>

                            <div className="stat-card stat-card-b">
                                <div className="stat-num">10+</div>
                                <div className="stat-label">MINI PROJECTS</div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutMe;
