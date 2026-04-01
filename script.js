const contactConfig = {
  practiceName: "Diets by Mrunal",
  email: "rajatgovekar@gmail.com",
  whatsappNumber: "919284919297",
  whatsappDisplay: "+91 92849 19297",
  instagramUrl: "https://www.instagram.com/dietsbymrunal/",
  linkedinUrl: "https://www.linkedin.com/in/mrunal-kudalkar-091531281/",
};

const emailLink = document.getElementById("email-link");
const whatsappLink = document.getElementById("whatsapp-link");
const instagramLink = document.getElementById("instagram-link");
const linkedinLink = document.getElementById("linkedin-link");
const form = document.getElementById("consultation-form");
const statusText = document.getElementById("form-status");

emailLink.href = `mailto:${contactConfig.email}`;
emailLink.querySelector("strong").textContent = contactConfig.email;

whatsappLink.href = `https://wa.me/${contactConfig.whatsappNumber}`;
whatsappLink.querySelector("strong").textContent = contactConfig.whatsappDisplay;

instagramLink.href = contactConfig.instagramUrl;
linkedinLink.href = contactConfig.linkedinUrl;

const hasValidConfig =
  !contactConfig.email.includes("yourgmail") &&
  !contactConfig.whatsappNumber.includes("000000");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!hasValidConfig) {
    statusText.textContent =
      "Add your real Gmail address and WhatsApp Business number in script.js before using the form.";
    return;
  }

  const formData = new FormData(form);
  const payload = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    focus: formData.get("focus"),
    message: formData.get("message"),
  };

  statusText.textContent = "Sending your request...";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        practiceName: contactConfig.practiceName,
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        focus: payload.focus,
        message: payload.message,
      }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      throw new Error(
        data && data.error ? data.error : "Unable to submit the form."
      );
    }

    statusText.textContent =
      "Your consultation request has been sent successfully.";
    form.reset();
    window.location.href = "/thankyou.html";
  } catch (error) {
    statusText.textContent = error.message;
  }
});
