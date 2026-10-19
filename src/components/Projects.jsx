import Watch from "../assets/image/Watch.png";
import food from "../assets/image/food.png";
import secure from "../assets/image/secure.png";
import product from "../assets/image/product.png";
import note from "../assets/image/note.png";
import car from "../assets/image/car.png";
import jumys from "../assets/image/jumys.png";
import meet from "../assets/image/meet.png";
import shopmart from "../assets/image/shopmart.png";
import chatmsg from "../assets/image/chatmsg.png";
import Dashboard from "../assets/image/dashboard.png";

const Projects = () => {
    const projectList = [
        {
            title: "Shopmart",
            desc: "A full-stack e-commerce platform featuring product browsing, cart, wishlist, secure authentication, online payments, and order management.",
            image: shopmart,
            live: "https://shop-mart-ecommerce-rho.vercel.app/",
            github: "https://github.com/nahakmanisha18-cyber/shop-mart-ecommerce"
        },

        {
            title: "Chatmsg",
            desc: "A real-time chat application enabling users to communicate instantly with a responsive interface and seamless messaging experience.",
            image: chatmsg,
            live: "https://chatmsg-chat-application-jyiq.vercel.app",
            github: "https://github.com/nahakmanisha18-cyber/chatmsg-chat-application"
        },

        {
            title: "Jumys",
            desc: "A responsive ice cream e-commerce website featuring product browsing, search, filtering, shopping cart, and wishlist functionality.",
            image: jumys,
            live: "https://dashboard-c593a5.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/jumys-ice-cream"
        },

        {
            title: "Meet Sphere",
            desc: "A real-time video conferencing application inspired by Google Meet, featuring meeting rooms, user authentication, participant management, and audio-video communication.",
            image: meet,
            live: "https://meet-sphere-opal.vercel.app/",
            github: "https://github.com/nahakmanisha18-cyber/meet-sphere"
        },

        {
            title: "Moto Watch Store",
            desc: "A modern smartwatch e-commerce website with responsive design and stylish product showcase features.",
            image: Watch,
            live: "https://watch-d45c49.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/Watch_web"
        },

        {
            title: "TastyBite Food App",
            desc: "A responsive food delivery web app with interactive menu, online ordering, and clean user interface.",
            image: food,
            live: "https://food-09d930.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/food_web"
        },

        {
            title: "Secure Cam Web App",
            desc: "A security monitoring website designed to showcase smart surveillance solutions with modern UI.",
            image: secure,
            live: "https://secure-com-60d1bb.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/SecureCam_web"
        },

        {
            title: "MORENT",
            desc: "A modern car rental platform featuring vehicle browsing, rental details, and an intuitive interface for exploring and booking cars with ease.",
            image: car,
            live: "https://dashboard-c593a5.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/morent-car-rental"
        },

        {
            title: "Product Management App",
            desc: "A product management application for organizing, tracking, and managing products efficiently.",
            image: product,
            live: "https://product-management-879d7d.netlify.app/",
            github: "https://github.com/nahakmanisha18-cyber/product-management-app"
        },

        
        
    ];
    const displayProjects = [...projectList];

    return (
        <section className="projects-section" id="project">
            <h2 className="projects-title" data-aos="fade-up" data-aos-delay="100" ><span>MY</span> PROJECTS</h2>

            <div className="projects-grid">
                {displayProjects.map((project, index) => (
                    <div className="project-card" key={index} data-aos="fade-up" data-aos-delay="300">
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="project-links">
                                <a href={project.live} className="link-item">View Live Demo</a>
                                <span className="separator">|</span>
                                <a href={project.github} className="link-item">View on Github</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;