import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`
    });

    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

export default router;
