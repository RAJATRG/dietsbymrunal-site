const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

function requiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function assertRealSmtpConfig() {
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const to = process.env.CONTACT_TO_EMAIL || user;

  if (
    user === "your-gmail@gmail.com" ||
    pass === "your-gmail-app-password" ||
    to === "your-gmail@gmail.com"
  ) {
    throw new Error(
      "SMTP is not configured yet. Replace the placeholder Gmail and App Password values in the .env file."
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildConsultationText(payload) {
  return [
    `New consultation enquiry for ${payload.practiceName || "Diets by Mrunal"}`,
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    `Focus: ${payload.focus}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

async function sendEmail(payload) {
  assertRealSmtpConfig();

  const transporter = nodemailer.createTransport({
    host: requiredEnv("SMTP_HOST"),
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || "false") === "true",
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASS"),
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || requiredEnv("SMTP_USER"),
    to: process.env.CONTACT_TO_EMAIL || requiredEnv("SMTP_USER"),
    replyTo: payload.email,
    subject: `New consultation enquiry for ${payload.practiceName || "Diets by Mrunal"}`,
    text: buildConsultationText(payload),
    html: `
      <h2>New consultation enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Focus:</strong> ${escapeHtml(payload.focus)}</p>
      <p><strong>Message:</strong><br />${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    `,
  });
}

app.post("/api/contact", async (req, res) => {
  const payload = {
    practiceName: String(req.body.practiceName || "").trim(),
    name: String(req.body.name || "").trim(),
    phone: String(req.body.phone || "").trim(),
    email: String(req.body.email || "").trim(),
    focus: String(req.body.focus || "").trim(),
    message: String(req.body.message || "").trim(),
  };

  if (!payload.name || !payload.phone || !payload.email || !payload.focus || !payload.message) {
    res.status(400).json({ ok: false, error: "Missing required form fields." });
    return;
  }

  try {
    await sendEmail(payload);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
});

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Diets by Mrunal site running on port ${port}`);
});
