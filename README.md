# Diets by Mrunal

Website for a clinical nutritionist / diet consultant with a small Node backend for direct SMTP email and WhatsApp API notifications.

## Files

- `index.html`: page structure and content
- `styles.css`: complete visual design
- `script.js`: client-side form submission and public contact links
- `server.js`: SMTP email sending and WhatsApp API integration
- `assets/mrunal-photo.jpg`: portrait used in the hero section
- `.env.example`: environment variables required for SMTP and WhatsApp API

## Before running

1. Open `script.js` and update the public `email` only if you want a different visible email address on the website.
2. Copy `.env.example` to `.env`.
3. Fill in your SMTP and WhatsApp API credentials in `.env`.
4. Run `npm start`.

## Required credentials

### SMTP

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_TO_EMAIL`

For Gmail SMTP, use an App Password instead of your normal Gmail password.

### WhatsApp Cloud API

- `WHATSAPP_ACCESS_TOKEN`
- `WHATSAPP_PHONE_NUMBER_ID`
- `WHATSAPP_RECIPIENT_NUMBER`
- `WHATSAPP_GRAPH_VERSION`

## Best low-cost deployment option

This project now has a backend, so GitHub Pages and Cloudflare Pages by themselves are not enough.

### Recommended: Render

- easiest fit for this exact Express app
- official pricing page shows web services starting from `$0/month` and Starter web services at `$7/month`
- supports custom domains

Official pricing: [Render pricing](https://render.com/pricing)

### Good alternative: Railway

- also a good fit for Node apps
- official pricing page shows a plan with `$5 minimum usage`
- supports custom domains

Official pricing: [Railway pricing](https://railway.com/pricing)

## Deployment flow

1. Create a GitHub repo with this folder.
2. Deploy it to Render or Railway as a Node web service.
3. Add the variables from `.env.example` in the hosting dashboard.
4. Add `dietsymrunal.in` as the custom domain in the hosting provider.
5. Update GoDaddy DNS records to point the domain to that provider.

## Form behavior

After successful submission, the backend:

- sends the lead by SMTP email
- sends the lead through the WhatsApp API

## Notes about WhatsApp API

This code sends a direct text message through Meta's WhatsApp Cloud API endpoint. Depending on your Meta setup, you may need to switch to a pre-approved template message for production use.

Official docs:

- [WhatsApp Cloud API overview](https://developers.facebook.com/docs/whatsapp/cloud-api)
- [WhatsApp messages reference](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages)
- [Nodemailer usage docs](https://nodemailer.com/usage)
- [Google App Passwords](https://support.google.com/accounts/answer/185833)
