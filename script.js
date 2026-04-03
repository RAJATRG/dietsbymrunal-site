const contactConfig = {
  practiceName: "Diets by Mrunal",
  email: "mrunalkudalkar2024@gmail.com",
  whatsappNumber: "919284919297",
  whatsappDisplay: "+91 92849 19297",
  instagramUrl: "https://www.instagram.com/dietsbymrunal/",
  linkedinUrl: "https://www.linkedin.com/in/mrunal-kudalkar-091531281/",
};

const consultationOptions = {
  clinical: {
    label: "Clinical Nutrition",
    description:
      "Therapeutic nutrition plans tailored to diagnosis, recovery, and condition-specific care.",
    items: [
      "PCOD / PCOS",
      "Obesity & Weight Loss",
      "CKD Nutrition",
      "Liver Cirrhosis Diet",
      "Therapeutic Meal Planning",
      "Respiratory Disorders / COPD",
      "Osteoporosis",
      "Restorative Nutrition Plan",
      "IBS / IBD / GERD / Ulcer",
      "Thyroid Nutrition",
      "Hyperlipidemia",
    ],
  },
  lifestyle: {
    label: "Lifestyle Management",
    description:
      "Everyday wellness support designed around routine, stress balance, and sustainable lifestyle change.",
    items: [
      "Stress, Sleep, and Mental Wellbeing",
      "Weight Management",
      "Hormonal Balance",
      "Skin and Hair",
    ],
  },
};

const emailLink = document.getElementById("email-link");
const whatsappLink = document.getElementById("whatsapp-link");
const instagramLink = document.getElementById("instagram-link");
const linkedinLink = document.getElementById("linkedin-link");
const form = document.getElementById("consultation-form");
const statusText = document.getElementById("form-status");
const revealItems = document.querySelectorAll(".reveal");
const specialityToggles = document.querySelectorAll("[data-speciality-tab]");
const specialityHeading = document.getElementById("speciality-heading");
const specialityDescription = document.getElementById("speciality-description");
const specialityList = document.getElementById("speciality-list");
const specialityPanel = document.querySelector(".speciality-panel");
const categorySelect = document.getElementById("consultation-category");
const focusSelect = document.getElementById("consultation-focus");
let activeSpecialityTab = "clinical";

emailLink.href = `mailto:${contactConfig.email}`;
emailLink.querySelector("strong").textContent = contactConfig.email;

whatsappLink.href = `https://wa.me/${contactConfig.whatsappNumber}`;
whatsappLink.querySelector("strong").textContent = contactConfig.whatsappDisplay;

instagramLink.href = contactConfig.instagramUrl;
linkedinLink.href = contactConfig.linkedinUrl;

const hasValidConfig =
  !contactConfig.email.includes("yourgmail") &&
  !contactConfig.whatsappNumber.includes("000000");

function getCategoryKey(value) {
  if (value === "Clinical Nutrition") {
    return "clinical";
  }

  if (value === "Lifestyle Management") {
    return "lifestyle";
  }

  return "";
}

function renderSpecialityTab(tabKey) {
  const activeConfig = consultationOptions[tabKey];

  if (!activeConfig) {
    return;
  }

  specialityHeading.textContent = activeConfig.label;
  specialityDescription.textContent = activeConfig.description;
  specialityList.innerHTML = "";

  activeConfig.items.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "speciality-item reveal reveal-pop";
    article.style.setProperty("--delay", `${60 + index * 60}ms`);
    article.textContent = item;
    specialityList.appendChild(article);
  });

  specialityList
    .querySelectorAll(".reveal")
    .forEach((item) => item.classList.add("is-visible"));

  specialityToggles.forEach((toggle) => {
    const isActive = toggle.dataset.specialityTab === tabKey;
    toggle.classList.toggle("is-active", isActive);
    toggle.setAttribute("aria-selected", String(isActive));
  });

  activeSpecialityTab = tabKey;
}

function populateFocusOptions(category) {
  const activeConfig = consultationOptions[getCategoryKey(category)];
  focusSelect.innerHTML = "";

  if (!activeConfig) {
    focusSelect.disabled = true;
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "- Select consultation type first -";
    focusSelect.appendChild(option);
    return;
  }

  focusSelect.disabled = false;

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = `- Select ${activeConfig.label.toLowerCase()} plan -`;
  focusSelect.appendChild(placeholder);

  activeConfig.items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    focusSelect.appendChild(option);
  });
}

renderSpecialityTab("clinical");
populateFocusOptions(categorySelect.value);

specialityToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const nextTab = toggle.dataset.specialityTab;

    if (nextTab === activeSpecialityTab) {
      return;
    }

    specialityPanel.classList.add("is-switching");

    window.setTimeout(() => {
      renderSpecialityTab(nextTab);
      specialityPanel.classList.remove("is-switching");
    }, 180);
  });
});

categorySelect.addEventListener("change", () => {
  populateFocusOptions(categorySelect.value);
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

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
    category: formData.get("category"),
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
        category: payload.category,
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
    populateFocusOptions("");
    window.location.href = "/thankyou.html";
  } catch (error) {
    statusText.textContent = error.message;
  }
});
