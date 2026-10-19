import React from "react";
import heroImg from "../assets/image/heroImage.png";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-left">
                    <p className="intro" data-aos="fade-right" data-aos-delay="100">
                        Hi, I'm Manisha 👋
                    </p>
                    <h1 className="hero-title" data-aos="fade-right" data-aos-delay="100">
                        DESIGNING & DEVELOPING <br />
                        WEB <span>EXPERIENCES</span>
                    </h1>
                    <p className="hero-desc" data-aos="fade-right" data-aos-delay="100">
                        Full-Stack React Developer | Building clean,
                        responsive & high-performance apps.
                    </p>
                    <button className="hero-btn" data-aos="fade-right" data-aos-delay="100">
                        <a href="#project" className="text-decoration-none pro" target="_blank" rel="noopener noreferrer">
                            View My Work ↓
                        </a>
                    </button>
                </div>
                <div className="hero-right" data-aos="fade-left" data-aos-delay="100">
                    <img src={heroImg} alt="hero" />
                </div>
            </div>
        </section>
    );
};

export default Hero;