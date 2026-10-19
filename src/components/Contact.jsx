
import { useState } from "react";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            user_name: formData.get("user_name"),
            user_email: formData.get("user_email"),
            user_phone: formData.get("user_phone"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Email send nahi hua.");
            }

            setStatus("Message sent successfully!");
            form.reset();
        } catch (error) {
            console.error("Contact form error:", error);
            setStatus(
                error.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-container" id="contact">
            <div
                className="contact-glass-card"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="contact-info">
                    <h1>
                        Schedule a call with me to see how{" "}
                        <span className="highlight-text">
                            I can help you.
                        </span>
                    </h1>

                    <p className="sub-text">
                        I am a beginner full stack developer, ready to learn
                        and build clean and responsive websites.
                    </p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="icon-circle">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <p className="label">E-mail :</p>
                                <p className="value">
                                    nahakmanisha18@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">
                                <i className="bi bi-telephone-fill"></i>
                            </div>
                            <div>
                                <p className="label">Contact :</p>
                                <p className="value">+91 89804 14670</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <p className="label">Location :</p>
                                <p className="value">
                                    Surat, Gujarat, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h2 className="form-title">
                        <span className="highlight-text">CONTACT</span> ME
                    </h2>

                    <form
                        className="actual-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-row">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                            />

                            <input
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="form-row">
                            <input
                                type="tel"
                                name="user_phone"
                                placeholder="Phone Number"
                            />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="send-btn"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                            {" "}
                            <i className="fas fa-arrow-right"></i>
                        </button>

                        {status && (
                            <p
                                className={`SentMsg ${status.includes("successfully") ? "success" : "error"
                                    }`}
                                role="status"
                                aria-live="polite"
                            >
                                {status}
                        </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
