const express = require("express");
const https = require("https");
const path = require("path");
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

// function assertRealResendConfig() {
//   const apiKey = requiredEnv("RESEND_API_KEY");
//   const from = requiredEnv("RESEND_FROM_EMAIL");
//   const to = requiredEnv("RESEND_TO_EMAIL");
//   console.log(apiKey);
//   console.log(from)
//   console.log(to)
//   if (
//     apiKey !== "re_N6HuARLq_KZEjSRh5hyqARDvMDrWfESLb" ||
//     from !== "hello@dietsbymrunal.in" ||
//     to !== "rajatgovekar@gmail.com"
//   ) {
//     throw new Error(
//       "Resend is not configured yet. Replace the placeholder Resend values in the .env file."
//     );
//   }
// }

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
    `Consultation Type: ${payload.category}`,
    `Plan / Focus: ${payload.focus}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");
}

async function sendEmail(payload) {
  // assertRealResendConfig();

  const requestBody = JSON.stringify({
    from: process.env.RESEND_FROM_LABEL
      ? `${process.env.RESEND_FROM_LABEL} <${requiredEnv("RESEND_FROM_EMAIL")}>`
      : requiredEnv("RESEND_FROM_EMAIL"),
    to: [requiredEnv("RESEND_TO_EMAIL")],
    cc: process.env.RESEND_CC_EMAIL ? [process.env.RESEND_CC_EMAIL] : undefined,
    subject: `New consultation enquiry for ${payload.practiceName || "Diets by Mrunal"}`,
    text: buildConsultationText(payload),
    html: `
      <h2>New consultation enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Consultation Type:</strong> ${escapeHtml(payload.category)}</p>
      <p><strong>Plan / Focus:</strong> ${escapeHtml(payload.focus)}</p>
      <p><strong>Message:</strong><br />${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    `,
    replyTo: payload.email,
  });

  await new Promise((resolve, reject) => {
    const request = https.request(
      {
        hostname: "api.resend.com",
        path: "/emails",
        method: "POST",
        headers: {
          Authorization: `Bearer ${requiredEnv("RESEND_API_KEY")}`,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(requestBody),
          "User-Agent": "dietsbymrunal-site/1.0",
        },
      },
      (response) => {
        let raw = "";

        response.on("data", (chunk) => {
          raw += chunk;
        });

        response.on("end", () => {
          if (response.statusCode >= 200 && response.statusCode < 300) {
            resolve(raw);
            return;
          }

          reject(
            new Error(
              `Resend API request failed with status ${response.statusCode}: ${raw}`
            )
          );
        });
      }
    );

    request.on("error", reject);
    request.write(requestBody);
    request.end();
  });
}

app.post("/api/contact", async (req, res) => {
  const payload = {
    practiceName: String(req.body.practiceName || "").trim(),
    name: String(req.body.name || "").trim(),
    phone: String(req.body.phone || "").trim(),
    email: String(req.body.email || "").trim(),
    category: String(req.body.category || "").trim(),
    focus: String(req.body.focus || "").trim(),
    message: String(req.body.message || "").trim(),
  };

  if (
    !payload.name ||
    !payload.phone ||
    !payload.email ||
    !payload.category ||
    !payload.focus ||
    !payload.message
  ) {
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
