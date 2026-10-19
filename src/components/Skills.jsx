
import html from "../assets/image/html.png";
import css from "../assets/image/css.webp";
import javascript from "../assets/image/javascript.png";
import typescript from "../assets/image/typescript.png";
import react from "../assets/image/React-icon.svg.png";
import next from "../assets/image/nextjs.png";
import redux from "../assets/image/redux-icon.webp";
import reactRouter from "../assets/image/react-router.png";
import tailwind from "../assets/image/Tailwind.webp";
import node from "../assets/image/node.webp";
import express from "../assets/image/express.png";
import mongo from "../assets/image/mongodb.webp";
import mysql from "../assets/image/mysql.png";
import github from "../assets/image/git-hub.png";
import git from "../assets/image/Git.webp";
import post from "../assets/image/post.webp";
import bootstrap from "../assets/image/botstrap.png";
import php from "../assets/image/PHP.webp";
import c from "../assets/image/c.png";
import cpp from "../assets/image/cpp.webp";
import api from "../assets/image/api.png";

import Jwt from "../assets/image/jwt.webp";
import bycript from "../assets/image/bycript.png";
import axios from "../assets/image/axios.webp";
import claudinary from "../assets/image/claudinary.webp";
import dotenv from "../assets/image/dotenv.png";
import netlify from "../assets/image/netlify.png";
import nodemon from "../assets/image/nodemon.png";
import npm from "../assets/image/npm.png";
import render from "../assets/image/render-black.png";
import vercel from "../assets/image/vercel.png";
import vite from "../assets/image/vite.png";
import vs from "../assets/image/vs.webp";
import nodemailer from "../assets/image/nodemailer.png";



const skills = [
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: javascript },
    { name: "TypeScript", logo: typescript },
    { name: "React.js", logo: react },
    { name: "Next.js", logo: next },
    { name: "Redux Toolkit", logo: redux },
    { name: "React Router", logo: reactRouter },
    { name: "Tailwind CSS", logo: tailwind },
    { name: "Bootstrap", logo: bootstrap },
    { name: "Node.js", logo: node },
    { name: "Express.js", logo: express },
    { name: "MongoDB", logo: mongo },
    { name: "MySQL", logo: mysql },
    { name: "Git", logo: git },
    { name: "Git Hub", logo: github },
    { name: "Postman", logo: post },
    { name: "PHP", logo: php },
    { name: "C", logo: c },
    { name: "C++", logo: cpp },
    { name: "Rest API", logo: api },
    { name: "Nodemon ", logo: nodemon },
    { name: "Nodemailer ", logo: nodemailer },

    { name: "JWT", logo: Jwt },
    { name: "Bycript", logo: bycript },
    { name: "Axios.js", logo: axios },
    { name: "Claudinary", logo: claudinary },
    { name: "Dotenv", logo: dotenv },
    { name: "Npm", logo: npm },
    { name: "Vite", logo: vite },
    { name: "Vs Code", logo: vs },
    { name: "Netlify", logo: netlify },
    { name: "Render", logo: render },
    { name: "Vercel", logo: vercel },

];

const Skills = () => {
    return (
        <section className="skills-section" id="skill">
            <h2
                className="skills-title"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <span>MY</span> SKILLS
            </h2>

            <p
                className="skills-subtitle"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                Technologies I am learning and working with
            </p>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div
                        className="skill-item"
                        key={skill.name}
                        data-aos="fade-up"
                        data-aos-delay={(index % 5) * 70}
                    >
                        <div className="skill-logo">
                            <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                loading="lazy"
                            />
                        </div>

                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
