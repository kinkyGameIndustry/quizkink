const answers = [
  { key: "yes", label: "Ja" },
  { key: "curious", label: "Nieuwsgierig" },
  { key: "talk", label: "Alleen bespreken" },
  { key: "no", label: "Nee" },
  { key: "limit", label: "Hard limit" }
];

const categories = [
  {
    title: "Consent & Communicatie",
    questions: [
      "Ik wil vooraf expliciet bespreken wat er wel en niet gebeurt.",
      "Ik wil een safeword of stopteken afspreken.",
      "Ik wil na afloop samen de ervaring nabespreken.",
      "Ik wil dat grenzen tussendoor zonder uitleg kunnen veranderen.",
      "Ik wil duidelijke afspraken over privacy en discretie."
    ]
  },
  {
    title: "Dynamiek",
    questions: [
      "Ik ben benieuwd naar een dominante rol.",
      "Ik ben benieuwd naar een onderdanige rol.",
      "Ik vind switchen tussen rollen interessant.",
      "Ik wil controle overgeven binnen strak afgesproken grenzen.",
      "Ik wil spelen met opdrachten, rituelen of protocollen."
    ]
  },
  {
    title: "Sensatie",
    questions: [
      "Ik ben nieuwsgierig naar zachte impact of tikken.",
      "Ik ben nieuwsgierig naar stevigere impact binnen duidelijke grenzen.",
      "Ik wil spelen met temperatuur, textuur of druk.",
      "Ik wil zintuiglijke beperking verkennen, zoals blinddoek of geluid.",
      "Ik wil expliciet afspreken welke intensiteit veilig en prettig is."
    ]
  },
  {
    title: "Fixatie & Ruimte",
    questions: [
      "Ik ben benieuwd naar lichte bondage of beperkt bewegen.",
      "Ik wil vooraf testen of materiaal comfortabel en veilig zit.",
      "Ik wil altijd zelfstandig kunnen aangeven dat iets stopt.",
      "Ik wil posities vermijden die ademhaling, circulatie of paniek kunnen raken.",
      "Ik wil afspraken over tijdsduur en check-ins."
    ]
  },
  {
    title: "Fetish & Esthetiek",
    questions: [
      "Ik voel interesse in leer, latex, lingerie of specifieke kleding.",
      "Ik wil rollenspel of een persona verkennen.",
      "Ik wil woorden, titels of aanspreekvormen bespreken.",
      "Ik wil bepaalde geuren, materialen of looks juist vermijden.",
      "Ik wil dat uiterlijk vertoon ondergeschikt blijft aan comfort en consent."
    ]
  },
  {
    title: "Nazorg & Veiligheid",
    questions: [
      "Ik wil fysieke nazorg zoals water, warmte, rust of aanraking.",
      "Ik wil emotionele nazorg zoals geruststelling of stilte.",
      "Ik wil een check-in later op de dag of de volgende dag.",
      "Ik wil medische, trauma- of triggerinformatie vooraf kunnen delen.",
      "Ik wil een duidelijke afspraak voor stoppen, pauzeren en opruimen."
    ]
  }
];

const storageKey = "kink-questionnaire-v1";
const state = loadState();
let currentIndex = 0;

const flatQuestions = categories.flatMap((category, categoryIndex) =>
  category.questions.map((text, questionIndex) => ({
    id: `${categoryIndex}-${questionIndex}`,
    text,
    category: category.title,
    categoryIndex
  }))
);

const elements = {
  ageGate: document.querySelector("#ageGate"),
  adultCheck: document.querySelector("#adultCheck"),
  consentCheck: document.querySelector("#consentCheck"),
  enterButton: document.querySelector("#enterButton"),
  startButton: document.querySelector("#startButton"),
  resetButton: document.querySelector("#resetButton"),
  questionnaire: document.querySelector("#questionnaire"),
  categoryList: document.querySelector("#categoryList"),
  categoryTemplate: document.querySelector("#categoryButtonTemplate"),
  progressLabel: document.querySelector("#progressLabel"),
  progressBar: document.querySelector("#progressBar"),
  categoryKicker: document.querySelector("#categoryKicker"),
  title: document.querySelector("#questionnaire-title"),
  counter: document.querySelector("#questionCounter"),
  answerGrid: document.querySelector("#answerGrid"),
  noteInput: document.querySelector("#noteInput"),
  prevButton: document.querySelector("#prevButton"),
  nextButton: document.querySelector("#nextButton"),
  results: document.querySelector("#results"),
  summaryStrip: document.querySelector("#summaryStrip"),
  resultsGrid: document.querySelector("#resultsGrid"),
  backToQuestions: document.querySelector("#backToQuestions"),
  copyResults: document.querySelector("#copyResults"),
  printResults: document.querySelector("#printResults")
};

init();

function init() {
  buildCategories();
  buildAnswerOptions();
  bindEvents();

  if (state.allowed) {
    showQuestionnaire();
  }

  renderQuestion();
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return {
      allowed: Boolean(saved?.allowed),
      responses: saved?.responses || {}
    };
  } catch {
    return { allowed: false, responses: {} };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function bindEvents() {
  [elements.adultCheck, elements.consentCheck].forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      elements.enterButton.disabled = !(elements.adultCheck.checked && elements.consentCheck.checked);
    });
  });

  elements.enterButton.addEventListener("click", () => {
    state.allowed = true;
    saveState();
    showQuestionnaire();
  });

  elements.startButton.addEventListener("click", () => {
    if (!state.allowed) {
      elements.ageGate.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    showQuestionnaire();
  });

  elements.resetButton.addEventListener("click", () => {
    if (!confirm("Alle lokale antwoorden wissen?")) return;
    localStorage.removeItem(storageKey);
    state.allowed = false;
    state.responses = {};
    currentIndex = 0;
    location.reload();
  });

  elements.prevButton.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    renderQuestion();
  });

  elements.nextButton.addEventListener("click", () => {
    if (currentIndex === flatQuestions.length - 1) {
      renderResults();
      return;
    }
    currentIndex += 1;
    renderQuestion();
  });

  elements.noteInput.addEventListener("input", () => {
    const question = flatQuestions[currentIndex];
    const response = getResponse(question.id);
    response.note = elements.noteInput.value;
    saveState();
  });

  elements.backToQuestions.addEventListener("click", showQuestionnaire);
  elements.printResults.addEventListener("click", () => window.print());
  elements.copyResults.addEventListener("click", copyResults);
}

function showQuestionnaire() {
  elements.ageGate.hidden = true;
  elements.results.hidden = true;
  elements.questionnaire.hidden = false;
  renderQuestion();
  elements.questionnaire.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildCategories() {
  elements.categoryList.innerHTML = "";
  categories.forEach((category, index) => {
    const fragment = elements.categoryTemplate.content.cloneNode(true);
    const button = fragment.querySelector("button");
    button.dataset.category = String(index);
    fragment.querySelector(".category-button__name").textContent = category.title;
    fragment.querySelector(".category-button__count").textContent = `${category.questions.length}`;
    button.addEventListener("click", () => {
      currentIndex = flatQuestions.findIndex((question) => question.categoryIndex === index);
      renderQuestion();
    });
    elements.categoryList.append(fragment);
  });
}

function buildAnswerOptions() {
  elements.answerGrid.innerHTML = "";
  const legend = document.createElement("legend");
  legend.className = "sr-only";
  legend.textContent = "Antwoord";
  elements.answerGrid.append(legend);

  answers.forEach((answer) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    label.innerHTML = `<input type="radio" name="answer" value="${answer.key}"><span>${answer.label}</span>`;
    label.querySelector("input").addEventListener("change", (event) => {
      const question = flatQuestions[currentIndex];
      const response = getResponse(question.id);
      response.answer = event.target.value;
      saveState();
      updateProgress();
    });
    elements.answerGrid.append(label);
  });
}

function renderQuestion() {
  const question = flatQuestions[currentIndex];
  const response = getResponse(question.id);

  elements.categoryKicker.textContent = question.category;
  elements.title.textContent = question.text;
  elements.counter.textContent = `${currentIndex + 1} / ${flatQuestions.length}`;
  elements.noteInput.value = response.note || "";
  elements.prevButton.disabled = currentIndex === 0;
  elements.nextButton.textContent = currentIndex === flatQuestions.length - 1 ? "Bekijk resultaat" : "Volgende";

  document.querySelectorAll("[name='answer']").forEach((input) => {
    input.checked = input.value === response.answer;
  });

  document.querySelectorAll(".category-button").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.category) === question.categoryIndex);
  });

  updateProgress();
}

function getResponse(id) {
  state.responses[id] ||= { answer: "", note: "" };
  return state.responses[id];
}

function updateProgress() {
  const answered = flatQuestions.filter((question) => state.responses[question.id]?.answer).length;
  const percent = Math.round((answered / flatQuestions.length) * 100);
  elements.progressLabel.textContent = `${answered} van ${flatQuestions.length}`;
  elements.progressBar.style.width = `${percent}%`;
}

function renderResults() {
  elements.questionnaire.hidden = true;
  elements.results.hidden = false;
  elements.summaryStrip.innerHTML = "";
  elements.resultsGrid.innerHTML = "";

  answers.forEach((answer) => {
    const count = flatQuestions.filter((question) => state.responses[question.id]?.answer === answer.key).length;
    const item = document.createElement("div");
    item.className = "summary-pill";
    item.innerHTML = `<strong>${count}</strong><span>${answer.label}</span>`;
    elements.summaryStrip.append(item);
  });

  categories.forEach((category, categoryIndex) => {
    const card = document.createElement("article");
    card.className = "result-card";
    const list = category.questions
      .map((question, questionIndex) => {
        const id = `${categoryIndex}-${questionIndex}`;
        const response = state.responses[id] || {};
        const answer = answers.find((item) => item.key === response.answer)?.label || "Niet beantwoord";
        const note = response.note ? `<span class="result-note">${escapeHtml(response.note)}</span>` : "";
        return `<li><span>${escapeHtml(question)}</span><span class="result-answer">${answer}</span>${note}</li>`;
      })
      .join("");

    card.innerHTML = `<h3>${category.title}</h3><ul class="result-list">${list}</ul>`;
    elements.resultsGrid.append(card);
  });

  elements.results.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function copyResults() {
  const text = categories
    .map((category, categoryIndex) => {
      const lines = category.questions.map((question, questionIndex) => {
        const id = `${categoryIndex}-${questionIndex}`;
        const response = state.responses[id] || {};
        const answer = answers.find((item) => item.key === response.answer)?.label || "Niet beantwoord";
        const note = response.note ? ` | Notitie: ${response.note}` : "";
        return `- ${question}: ${answer}${note}`;
      });
      return `${category.title}\n${lines.join("\n")}`;
    })
    .join("\n\n");

  await navigator.clipboard.writeText(text);
  showToast("Samenvatting gekopieerd.");
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  existing?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.append(toast);
  setTimeout(() => toast.remove(), 2600);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return entities[character];
  });
}
