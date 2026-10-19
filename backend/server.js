const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        process.env.FRONTEND_URL
    ].filter(Boolean)
}));

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
    res.send("Portfolio Backend is Live 🚀");
});

app.post("/api/contact", async (req, res) => {
    try {
        const {
            user_name,
            user_email,
            user_phone,
            subject,
            message
        } = req.body;

        if (!user_name || !user_email || !subject || !message) {
            return res.status(400).json({
                message: "Please fill all required fields."
            });
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [process.env.CONTACT_RECEIVER_EMAIL],
            replyTo: user_email,
            subject: `Portfolio Contact: ${subject}`,
            text: `
Name: ${user_name}
Email: ${user_email}
Phone: ${user_phone || "Not provided"}

Message:
${message}
            `
        });

        if (error) {
            console.error("Resend error:", error);

            return res.status(500).json({
                message: "Failed to send email."
            });
        }

        return res.status(200).json({
            message: "Email sent successfully!",
            id: data.id
        });

    } catch (error) {
        console.error("Email error:", error.message);

        return res.status(500).json({
            message: "Failed to send email."
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});