
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/api/contact", async (req, res) => {
    try {
        const { user_name, user_email, user_phone, subject, message } = req.body;

        if (!user_name || !user_email || !subject || !message) {
            return res.status(400).json({
                message: "Please fill all required fields."
            });
        }

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            replyTo: user_email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${subject}`,
            text: `
Name: ${user_name}
Email: ${user_email}
Phone: ${user_phone || "Not provided"}

Message:
${message}
            `,
        });

        res.status(200).json({
            message: "Email sent successfully!"
        });
    } catch (error) {
        console.error("Email error:", error);
        res.status(500).json({
            message: "Failed to send email."
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
