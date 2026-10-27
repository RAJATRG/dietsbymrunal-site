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

const healthPrograms = [
  {
    slug: "weight-management",
    name: "Weight Management",
    kicker: "14-Day Reset Program",
    tagline: "Healthy, sustainable weight loss and obesity management, guided one-on-one.",
    risksTitle: "What happens if it's left unmanaged?",
    risks: [
      ["Type 2 diabetes risk", "Extra weight makes it harder for the body to use insulin."],
      ["High blood pressure", "The heart works harder, raising heart disease risk."],
      ["Joint pain", "Knees, hips and back carry extra load every single day."],
      ["Poor sleep, low energy", "Linked to snoring, sleep apnoea and daytime fatigue."],
    ],
  },
  {
    slug: "diabetes-management",
    name: "Diabetes Management",
    kicker: "14-Day Reset Program",
    tagline: "Personal nutrition support to help bring your blood sugar under control.",
    risksTitle: "What happens if it's left unmanaged?",
    risks: [
      ["Nerve damage", "Tingling, numbness and burning in the hands and feet."],
      ["Kidney damage", "High sugar strains the kidneys' filters over time."],
      ["Eye problems", "Damage to the retina can blur and threaten vision."],
      ["Heart attack & stroke", "Risk rises as blood vessels get damaged."],
    ],
  },
  {
    slug: "pcos-pcod",
    name: "PCOS / PCOD Nutrition",
    kicker: "14-Day Reset Program",
    tagline: "Nutrition and lifestyle support to bring your hormones back into balance.",
    risksTitle: "What happens if it's left unmanaged?",
    risks: [
      ["Irregular periods", "Cycles can become unpredictable or skipped altogether."],
      ["Fertility challenges", "Ovulation problems can make conceiving harder."],
      ["Insulin resistance", "Higher risk of weight gain and type 2 diabetes."],
      ["Acne & hair changes", "Hormonal acne, hair thinning or excess facial hair."],
    ],
  },
  {
    slug: "thyroid",
    name: "Thyroid Nutrition",
    kicker: "14-Day Reset Program",
    tagline: "Expert nutrition guidance for people living with thyroid disorders.",
    risksTitle: "What happens if it's left unmanaged?",
    risks: [
      ["Constant tiredness", "Low energy, sluggishness and brain fog through the day."],
      ["Weight changes", "Unexplained gain or loss that's hard to control."],
      ["Hair fall & dry skin", "Thinning hair, brittle nails and rough, dry skin."],
      ["Mood & heart effects", "Low mood or anxiety, plus changes in heart rate and cholesterol."],
    ],
  },
  {
    slug: "gut-health",
    name: "Gut Health",
    kicker: "14-Day Reset Program",
    tagline: "Nutrition support for constipation, bloating and everyday digestive trouble.",
    risksTitle: "What happens if it's left unmanaged?",
    risks: [
      ["Chronic constipation", "Infrequent, hard stools slowly become the norm."],
      ["Persistent bloating", "Daily gas, discomfort and a heavy, swollen stomach."],
      ["Piles & fissures", "Straining over time can lead to painful complications."],
      ["Low energy & mood", "Poor digestion can affect nutrient absorption and how you feel."],
    ],
  },
  {
    slug: "heart-health",
    name: "Heart Health",
    kicker: "14-Day Reset Program",
    tagline: "Nutrition support for managing cholesterol and blood pressure.",
    risksTitle: "What happens if it's left unmanaged?",
    risks: [
      ["Clogged arteries", "High LDL cholesterol builds plaque inside blood vessels."],
      ["Heart attack risk", "Narrowed arteries cut blood flow to the heart."],
      ["Stroke risk", "High blood pressure can damage vessels in the brain."],
      ["Kidney strain", "Uncontrolled BP slowly damages the kidneys."],
    ],
  },
  {
    slug: "pregnancy-postpartum",
    name: "Pregnancy & Postpartum",
    kicker: "14-Day Nutrition Program",
    tagline: "Nutritional support for mothers, and for their babies.",
    risksTitle: "What happens without proper nutrition?",
    risks: [
      ["Anaemia & fatigue", "Low iron leaves mothers tired, dizzy and breathless."],
      ["Pregnancy complications", "Higher risk of gestational diabetes and high BP."],
      ["Baby's growth", "Poor nutrition is linked to low birth weight."],
      ["Slower recovery", "Postpartum healing, energy and feeding can suffer."],
    ],
  },
  {
    slug: "hair-skin",
    name: "Hair & Skin Nutrition",
    kicker: "14-Day Reset Program",
    tagline: "Nutrition support for hair health, acne-prone skin and skin recovery.",
    risksTitle: "What happens if it's ignored?",
    risks: [
      ["Hair fall & thinning", "More shedding, breakage and slower regrowth."],
      ["Recurring breakouts", "Acne that keeps coming back and leaves marks."],
      ["Dull, dry skin", "Loss of glow, uneven texture and poor hydration."],
      ["Slower skin recovery", "Marks and post-procedure skin take longer to heal."],
    ],
  },
  {
    slug: "sleep-recovery",
    name: "Sleep Recovery",
    kicker: "14-Day Reset Program",
    tagline: "Nutrition and routine support for deeper, more restful sleep.",
    risksTitle: "What happens if poor sleep continues?",
    risks: [
      ["Fatigue & brain fog", "Poor focus, memory and productivity through the day."],
      ["Cravings & weight gain", "Short sleep disturbs hunger hormones and appetite."],
      ["Stress & low mood", "More irritability, anxiety and emotional burnout."],
      ["Weaker immunity", "Falling sick more often and recovering more slowly."],
    ],
  },
  {
    slug: "body-detox",
    name: "Body Detox",
    kicker: "14-Day Reset Program",
    tagline: "A guided reset to help you feel lighter, more energetic and back on track.",
    risksTitle: "What happens when unhealthy habits pile up?",
    risks: [
      ["Bloating & heaviness", "Sluggish digestion leaves you feeling heavy and uneasy."],
      ["Constant low energy", "Feeling tired and drained even after rest."],
      ["Dull skin & breakouts", "Lifestyle strain often shows up on your skin first."],
      ["Cravings & weight creep", "Irregular habits make cravings harder to control."],
    ],
  },
];

consultationOptions.program = {
  label: "14-Day Program",
  description: "A guided 14-day trial program at ₹1,499 with 1:1 support from Mrunal.",
  items: healthPrograms.map((program) => program.name),
};

const emailLink = document.getElementById("email-link");
const whatsappLink = document.getElementById("whatsapp-link");
const instagramLink = document.getElementById("instagram-link");
const linkedinLink = document.getElementById("linkedin-link");
const form = document.getElementById("consultation-form");
const statusText = document.getElementById("form-status");
const specialityToggles = document.querySelectorAll("[data-speciality-tab]");
const specialityHeading = document.getElementById("speciality-heading");
const specialityDescription = document.getElementById("speciality-description");
const specialityList = document.getElementById("speciality-list");
const specialityPanel = document.querySelector(".speciality-panel");
const categorySelect = document.getElementById("consultation-category");
const focusSelect = document.getElementById("consultation-focus");
let activeSpecialityTab = "clinical";

if (emailLink) {
  emailLink.href = `mailto:${contactConfig.email}`;
  emailLink.querySelector("strong").textContent = contactConfig.email;
}

if (whatsappLink) {
  whatsappLink.href = `https://wa.me/${contactConfig.whatsappNumber}`;
  whatsappLink.querySelector("strong").textContent = contactConfig.whatsappDisplay;
}

if (instagramLink) {
  instagramLink.href = contactConfig.instagramUrl;
}

if (linkedinLink) {
  linkedinLink.href = contactConfig.linkedinUrl;
}

const hasValidConfig =
  !contactConfig.email.includes("yourgmail") &&
  !contactConfig.whatsappNumber.includes("000000");

function getCategoryKey(value) {
  return (
    Object.keys(consultationOptions).find(
      (key) => consultationOptions[key].label === value
    ) || ""
  );
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

function validateConsultationPayload(payload) {
  const name = payload.name.trim();

  if (!name) {
    return "Please enter your name.";
  }

  if (name.length < 2) {
    return "Name should be at least 2 characters.";
  }

  return "";
}

if (specialityList) {
  renderSpecialityTab("clinical");
}

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
    }, 260);
  });
});

categorySelect.addEventListener("change", () => {
  populateFocusOptions(categorySelect.value);
});

const programGrid = document.getElementById("program-grid");
const programDialog = document.getElementById("program-dialog");
const programSummary = document.getElementById("program-summary");
let programAutofillMessage = "";

function getProgramBySlug(slug) {
  return healthPrograms.find((program) => program.slug === slug);
}

function getSelectedProgram() {
  if (categorySelect.value !== consultationOptions.program.label) {
    return undefined;
  }

  return healthPrograms.find((program) => program.name === focusSelect.value);
}

function renderProgramCards() {
  programGrid.innerHTML = healthPrograms
    .map(
      (program, index) => `
        <article class="program-card reveal reveal-pop" style="--delay: ${60 + (index % 5) * 70}ms;" data-program="${program.slug}">
          <button class="program-card-media" type="button" data-program-open="${program.slug}" aria-label="View the ${program.name} program">
            <img src="./assets/programs/${program.slug}-sm.jpg" alt="${program.name} 14-day program poster" width="600" height="750" loading="lazy" />
            <span class="program-card-zoom" aria-hidden="true">View details</span>
          </button>
          <div class="program-card-body">
            <span class="program-kicker">${program.kicker}</span>
            <strong>${program.name}</strong>
            <span>${program.tagline}</span>
            <div class="program-card-actions">
              <span class="program-price-tag">₹1,499 <small>/ 14 days</small></span>
              <button class="program-select" type="button" data-program-select="${program.slug}">Select</button>
            </div>
          </div>
        </article>`
    )
    .join("");
}

function openProgramDialog(slug) {
  const program = getProgramBySlug(slug);

  if (!program) {
    return;
  }

  programDialog.querySelector("[data-dialog-image]").src = `./assets/programs/${program.slug}.jpg`;
  programDialog.querySelector("[data-dialog-image]").alt = `${program.name} 14-day program poster`;
  programDialog.querySelector("[data-dialog-kicker]").textContent = program.kicker;
  programDialog.querySelector("[data-dialog-title]").textContent = program.name;
  programDialog.querySelector("[data-dialog-tagline]").textContent = program.tagline;
  programDialog.querySelector("[data-dialog-risks-title]").textContent = program.risksTitle;
  programDialog.querySelector("[data-dialog-risks]").innerHTML = program.risks
    .map(([title, detail]) => `<li><strong>${title}</strong><span>${detail}</span></li>`)
    .join("");
  programDialog.querySelector("[data-dialog-select]").dataset.programSelect = program.slug;
  programDialog.showModal();
}

function syncSelectedProgram() {
  const program = getSelectedProgram();

  programGrid.querySelectorAll(".program-card").forEach((card) => {
    card.classList.toggle("is-selected", Boolean(program) && card.dataset.program === program.slug);
  });

  programSummary.classList.toggle("is-empty", !program);

  if (!program) {
    return;
  }

  const messageField = form.elements.message;
  if (!messageField.value.trim() || messageField.value === programAutofillMessage) {
    programAutofillMessage = `Hi Mrunal, I'd like to start the 14-day ${program.name} program.`;
    messageField.value = programAutofillMessage;
  }

  programSummary.querySelector("img").src = `./assets/programs/${program.slug}-sm.jpg`;
  programSummary.querySelector("img").alt = `${program.name} 14-day program poster`;
  programSummary.querySelector("[data-summary-name]").textContent = program.name;
  programSummary.querySelector("[data-summary-tagline]").textContent = program.tagline;
}

function selectProgram(slug, shouldScroll) {
  const program = getProgramBySlug(slug);

  if (!program) {
    return;
  }

  categorySelect.value = consultationOptions.program.label;
  populateFocusOptions(categorySelect.value);
  focusSelect.value = program.name;
  syncSelectedProgram();
  window.history.replaceState(null, "", `?program=${program.slug}#booking`);

  if (shouldScroll) {
    document.getElementById("booking").scrollIntoView({ behavior: "smooth", block: "start" });
    const focusLabel = focusSelect.closest("label");
    focusLabel.classList.remove("is-highlighted");
    void focusLabel.offsetWidth;
    focusLabel.classList.add("is-highlighted");
  }
}

if (programGrid) {
  renderProgramCards();

  programGrid.addEventListener("click", (event) => {
    const selectButton = event.target.closest("[data-program-select]");
    const openButton = event.target.closest("[data-program-open]");

    if (selectButton) {
      selectProgram(selectButton.dataset.programSelect, true);
    } else if (openButton) {
      openProgramDialog(openButton.dataset.programOpen);
    }
  });

  programDialog.addEventListener("click", (event) => {
    const selectButton = event.target.closest("[data-dialog-select]");

    if (selectButton) {
      programDialog.close();
      selectProgram(selectButton.dataset.programSelect, true);
    } else if (event.target === programDialog || event.target.closest("[data-dialog-close]")) {
      programDialog.close();
    }
  });

  categorySelect.addEventListener("change", syncSelectedProgram);
  focusSelect.addEventListener("change", syncSelectedProgram);

  const initialProgram = new URLSearchParams(window.location.search).get("program");
  if (initialProgram) {
    selectProgram(initialProgram, false);
  } else {
    syncSelectedProgram();
  }
}

const interactiveCards = document.querySelectorAll(
  ".condition-card, .feature-card, .connect-card, .speciality-item, .faq-card, .program-card"
);

interactiveCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--y", `${event.clientY - rect.top}px`);
  });
});

const revealItems = document.querySelectorAll(".reveal");

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

const heroHeading = document.querySelector(".hero-copy h1");

if (heroHeading) {
  const words = heroHeading.textContent.trim().split(/\s+/);
  heroHeading.innerHTML = words
    .map((word, index) => {
      const delay = 90 + index * 42;
      return `<span class="word-mask"><span class="word-inner" style="animation-delay:${delay}ms">${word}</span></span>`;
    })
    .join(" ");
}

const scrollProgress = document.getElementById("scrollProgress");
const navIndicator = document.querySelector(".nav-indicator");
const navSections = [
  { link: document.querySelector('.site-nav a[href="#top"]'), target: document.querySelector(".hero-section") },
  { link: document.querySelector('.site-nav a[href="#specialities"]'), target: document.getElementById("specialities") },
  { link: document.querySelector('.site-nav a[href="#booking"]'), target: document.getElementById("booking") },
  { link: document.querySelector('.site-nav a[href="#contact-options"]'), target: document.getElementById("contact-options") },
].filter((entry) => entry.link && entry.target);

function moveNavIndicator(link) {
  if (!navIndicator || !link) {
    return;
  }

  navIndicator.style.width = `${link.offsetWidth}px`;
  navIndicator.style.transform = `translateX(${link.offsetLeft}px)`;
  navIndicator.style.opacity = "1";
}

function setActiveNavLink(target) {
  navSections.forEach(({ link, target: sectionTarget }) => {
    const isActive = sectionTarget === target;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      moveNavIndicator(link);
    }
  });
}

if ("IntersectionObserver" in window && navSections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNavLink(entry.target);
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  navSections.forEach(({ target }) => navObserver.observe(target));
}

window.addEventListener("resize", () => {
  const activeLink = document.querySelector(".site-nav a.is-active");
  if (activeLink) {
    moveNavIndicator(activeLink);
  }
});

let scrollTicking = false;

function updateScrollProgress() {
  if (!scrollProgress) {
    return;
  }

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
  scrollTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScrollProgress);
      scrollTicking = true;
    }
  },
  { passive: true }
);

updateScrollProgress();

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!hasValidConfig) {
    statusText.textContent =
      "Add your real Gmail address and WhatsApp Business number in script.js before using the form.";
    return;
  }

  const formData = new FormData(form);
  const payload = {
    name: String(formData.get("name") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    category: String(formData.get("category") || "").trim(),
    focus: String(formData.get("focus") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  };

  const validationError = validateConsultationPayload(payload);

  if (validationError) {
    statusText.textContent = validationError;
    return;
  }

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
