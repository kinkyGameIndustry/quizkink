import { quizData } from "./data.mjs";

const STORAGE_KEY = "kink-swipe-beta-v2";
const modes = ["basic", "extended", "disabled"];
const languages = {
  nl: "Nederlands",
  en: "English",
  fr: "Francais",
  de: "Deutsch"
};

const text = {
  nl: {
    hiddenBeta: "Verborgen beta",
    title: "Swipe quiz",
    settings: "Categorieen",
    reset: "Reset beta",
    basic: "Basis",
    extended: "Uitgebreid",
    disabled: "Uit",
    saved: "Opgeslagen op dit toestel",
    savedAt: "Opgeslagen {time}",
    saveError: "Opslaan lukt niet in deze browser",
    slidePrompt: "Schuif om te antwoorden",
    previous: "Vorige",
    next: "Volgende",
    done: "Klaar",
    skip: "Skip voor nu",
    skipped: "Geskipt",
    skippedReturn: "Geskipte vragen",
    resultsKicker: "Resultaten",
    resultsTitle: "Jouw antwoorden",
    resultsIntro: "Vergelijk per categorie wat ingevuld is.",
    backToQuiz: "Terug naar quiz",
    notAnswered: "Niet beantwoord",
    noResults: "Nog geen antwoorden om te tonen.",
    noteLabel: "Notitie",
    note: "Typ een notitie voor jezelf of partner...",
    emptyTitle: "Geen vragen actief",
    emptyHelp: "Zet minstens een categorie op Basis of Uitgebreid.",
    example: "Voorbeeld",
    hideExample: "Voorbeeld verbergen",
    confirmReset: "Alle beta-antwoorden en notities wissen?"
  },
  en: {
    hiddenBeta: "Hidden beta",
    title: "Swipe quiz",
    settings: "Categories",
    reset: "Reset beta",
    basic: "Basic",
    extended: "Extended",
    disabled: "Off",
    saved: "Saved on this device",
    savedAt: "Saved {time}",
    saveError: "Could not save in this browser",
    slidePrompt: "Slide to answer",
    previous: "Previous",
    next: "Next",
    done: "Done",
    skip: "Skip for now",
    skipped: "Skipped",
    skippedReturn: "Skipped questions",
    resultsKicker: "Results",
    resultsTitle: "Your answers",
    resultsIntro: "Compare what has been filled in by category.",
    backToQuiz: "Back to quiz",
    notAnswered: "Not answered",
    noResults: "No answers to show yet.",
    noteLabel: "Note",
    note: "Type a note for yourself or partner...",
    emptyTitle: "No active questions",
    emptyHelp: "Set at least one category to Basic or Extended.",
    example: "Example",
    hideExample: "Hide example",
    confirmReset: "Clear all beta answers and notes?"
  },
  fr: {
    hiddenBeta: "Beta cachee",
    title: "Quiz swipe",
    settings: "Categories",
    reset: "Reinitialiser",
    basic: "Base",
    extended: "Etendu",
    disabled: "Off",
    saved: "Enregistre sur cet appareil",
    savedAt: "Enregistre {time}",
    saveError: "Impossible d'enregistrer dans ce navigateur",
    slidePrompt: "Faites glisser pour repondre",
    previous: "Precedent",
    next: "Suivant",
    done: "Termine",
    skip: "Passer pour l'instant",
    skipped: "Passe",
    skippedReturn: "Questions passees",
    resultsKicker: "Resultats",
    resultsTitle: "Vos reponses",
    resultsIntro: "Comparez ce qui a ete rempli par categorie.",
    backToQuiz: "Retour au quiz",
    notAnswered: "Pas encore repondu",
    noResults: "Aucune reponse a afficher.",
    noteLabel: "Note",
    note: "Ecrivez une note pour vous ou votre partenaire...",
    emptyTitle: "Aucune question active",
    emptyHelp: "Activez au moins une categorie en Base ou Etendu.",
    example: "Exemple",
    hideExample: "Masquer l'exemple",
    confirmReset: "Effacer toutes les reponses et notes beta ?"
  },
  de: {
    hiddenBeta: "Versteckte Beta",
    title: "Swipe Quiz",
    settings: "Kategorien",
    reset: "Beta resetten",
    basic: "Basis",
    extended: "Erweitert",
    disabled: "Aus",
    saved: "Auf diesem Geraet gespeichert",
    savedAt: "Gespeichert {time}",
    saveError: "Speichern ist in diesem Browser nicht moglich",
    slidePrompt: "Zum Antworten schieben",
    previous: "Zuruck",
    next: "Weiter",
    done: "Fertig",
    skip: "Vorerst skippen",
    skipped: "Ubersprungen",
    skippedReturn: "Ubersprungene Fragen",
    resultsKicker: "Ergebnisse",
    resultsTitle: "Deine Antworten",
    resultsIntro: "Vergleiche nach Kategorie, was ausgefullt wurde.",
    backToQuiz: "Zuruck zur Quiz",
    notAnswered: "Nicht beantwortet",
    noResults: "Noch keine Antworten vorhanden.",
    noteLabel: "Notiz",
    note: "Notiz fur dich oder Partner eingeben...",
    emptyTitle: "Keine aktiven Fragen",
    emptyHelp: "Setze mindestens eine Kategorie auf Basis oder Erweitert.",
    example: "Beispiel",
    hideExample: "Beispiel ausblenden",
    confirmReset: "Alle Beta-Antworten und Notizen loschen?"
  }
};

const refs = {
  languageSelect: document.querySelector("#languageSelect"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsPanel: document.querySelector("#settingsPanel"),
  settingsTitle: document.querySelector("#settingsTitle"),
  resetButton: document.querySelector("#resetButton"),
  categoryModes: document.querySelector("#categoryModes"),
  cardStage: document.querySelector("#cardStage"),
  resultsView: document.querySelector("#resultsView"),
  resultsKicker: document.querySelector("#resultsKicker"),
  resultsTitle: document.querySelector("#resultsTitle"),
  resultsIntro: document.querySelector("#resultsIntro"),
  resultsList: document.querySelector("#resultsList"),
  backToQuizButton: document.querySelector("#backToQuizButton"),
  navRow: document.querySelector("#navRow"),
  progressText: document.querySelector("#progressText"),
  saveText: document.querySelector("#saveText"),
  progressBar: document.querySelector("#progressBar"),
  questionCard: document.querySelector("#questionCard"),
  categoryLabel: document.querySelector("#categoryLabel"),
  questionText: document.querySelector("#questionText"),
  infoButton: document.querySelector("#infoButton"),
  exampleText: document.querySelector("#exampleText"),
  answerLabel: document.querySelector("#answerLabel"),
  answerSlider: document.querySelector("#answerSlider"),
  answerTicks: document.querySelector("#answerTicks"),
  skipButton: document.querySelector("#skipButton"),
  previousButton: document.querySelector("#previousButton"),
  nextButton: document.querySelector("#nextButton"),
  noteInput: document.querySelector("#noteInput"),
  commentForm: document.querySelector("#commentForm")
};

const questionTranslations = buildQuestionTranslations();
let questions = [];
let activeQuestion = null;
let state = loadState();
let exampleOpen = false;
let showingResults = false;
let reviewingSkipped = false;
let transitionTimer = null;

init();

function init() {
  renderLanguageSelect();
  bindEvents();
  rebuildQuestions();
  render();
}

function bindEvents() {
  refs.languageSelect.addEventListener("change", () => {
    state.language = refs.languageSelect.value;
    saveState();
    render();
  });

  refs.settingsButton.addEventListener("click", () => {
    refs.settingsPanel.hidden = !refs.settingsPanel.hidden;
  });

  refs.resetButton.addEventListener("click", () => {
    if (!confirm(t("confirmReset"))) return;
    state = createDefaultState();
    showingResults = false;
    reviewingSkipped = false;
    saveState();
    rebuildQuestions();
    render();
  });

  refs.previousButton.addEventListener("click", () => move(-1));
  refs.nextButton.addEventListener("click", handleNext);
  refs.skipButton.addEventListener("click", skipCurrentQuestion);
  refs.backToQuizButton.addEventListener("click", () => {
    showingResults = false;
    reviewingSkipped = false;
    render();
  });

  refs.answerSlider.addEventListener("input", () => {
    if (!activeQuestion) return;
    const options = getAnswerOptions(activeQuestion);
    const selected = options[Number(refs.answerSlider.value)];
    if (!selected) return;
    setResponse(activeQuestion.id, { answer: selected.key, skipped: false });
    renderAnswer(activeQuestion);
  });

  refs.noteInput.addEventListener("input", () => {
    if (!activeQuestion) return;
    setResponse(activeQuestion.id, { note: refs.noteInput.value });
    autoSizeNote();
  });

  refs.commentForm.addEventListener("submit", (event) => event.preventDefault());

  refs.infoButton.addEventListener("click", () => {
    exampleOpen = !exampleOpen;
    renderExample(activeQuestion);
  });

  window.addEventListener("keydown", (event) => {
    if (event.target === refs.noteInput) return;
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") handleNext();
  });
}

function createDefaultState() {
  return {
    language: detectLanguage(),
    currentIndex: 0,
    categoryModes: quizData.categories.map(() => "basic"),
    responses: {}
  };
}

function loadState() {
  const fallback = createDefaultState();
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!parsed || typeof parsed !== "object") return fallback;
    return {
      ...fallback,
      ...parsed,
      categoryModes: normalizeCategoryModes(parsed.categoryModes),
      responses: parsed.responses && typeof parsed.responses === "object" ? parsed.responses : {}
    };
  } catch {
    return fallback;
  }
}

function saveState() {
  state.currentIndex = clamp(state.currentIndex, 0, Math.max(questions.length - 1, 0));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    refs.saveText.textContent = t("savedAt").replace("{time}", new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  } catch {
    refs.saveText.textContent = t("saveError");
  }
}

function normalizeCategoryModes(value) {
  return quizData.categories.map((_, index) => (modes.includes(value?.[index]) ? value[index] : "basic"));
}

function detectLanguage() {
  const preferred = (navigator.language || "").slice(0, 2).toLowerCase();
  return quizData.supportedLanguages.includes(preferred) ? preferred : "nl";
}

function renderLanguageSelect() {
  refs.languageSelect.innerHTML = quizData.supportedLanguages
    .map((language) => `<option value="${language}">${languages[language] || language}</option>`)
    .join("");
  refs.languageSelect.value = state.language;
}

function rebuildQuestions() {
  questions = quizData.categories.flatMap((category, categoryIndex) => {
    const mode = state.categoryModes[categoryIndex] || "basic";
    if (mode === "disabled") return [];

    const baseQuestions = category.questions.map((question, questionIndex) => ({
      id: `${categoryIndex}-${questionIndex}`,
      text: question,
      category: category.title,
      categoryIndex,
      questionIndex,
      base: true
    }));

    const expandedQuestions = mode === "extended"
      ? (quizData.expandedQuestionGroups[categoryIndex] || []).map((question, questionIndex) => ({
          id: `x-${categoryIndex}-${questionIndex}`,
          text: question,
          category: category.title,
          categoryIndex,
          questionIndex,
          base: false
        }))
      : [];

    return [...baseQuestions, ...expandedQuestions];
  });

  state.currentIndex = clamp(state.currentIndex, 0, Math.max(questions.length - 1, 0));
}

function render() {
  const labels = document.querySelectorAll(".eyebrow");
  labels.forEach((label) => {
    label.textContent = t("hiddenBeta");
  });
  document.querySelector(".topbar h1").textContent = t("title");
  refs.settingsTitle.textContent = t("settings");
  refs.settingsButton.setAttribute("aria-label", t("settings"));
  refs.resetButton.textContent = t("reset");
  refs.previousButton.textContent = t("previous");
  refs.skipButton.textContent = t("skip");
  refs.resultsKicker.textContent = t("resultsKicker");
  refs.resultsTitle.textContent = t("resultsTitle");
  refs.resultsIntro.textContent = t("resultsIntro");
  refs.backToQuizButton.textContent = t("backToQuiz");
  refs.saveText.textContent = refs.saveText.textContent || t("saved");
  refs.languageSelect.value = state.language;

  renderCategoryModes();
  if (showingResults) {
    renderResults();
  } else {
    showQuizView();
    renderQuestion();
  }
}

function renderCategoryModes() {
  refs.categoryModes.innerHTML = quizData.categories.map((category, categoryIndex) => {
    const mode = state.categoryModes[categoryIndex] || "basic";
    return `
      <div class="mode-row">
        <span class="mode-name">${escapeHtml(localizeCategoryTitle(category.title))}</span>
        <button class="mode-button" data-category="${categoryIndex}" data-mode="${mode}" type="button">${t(mode)}</button>
      </div>
    `;
  }).join("");

  refs.categoryModes.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const categoryIndex = Number(button.dataset.category);
      const currentMode = state.categoryModes[categoryIndex] || "basic";
      state.categoryModes[categoryIndex] = modes[(modes.indexOf(currentMode) + 1) % modes.length];
      rebuildQuestions();
      saveState();
      render();
    });
  });
}

function renderQuestion() {
  activeQuestion = questions[state.currentIndex] || null;
  refs.previousButton.disabled = state.currentIndex === 0 || questions.length === 0;
  refs.nextButton.disabled = questions.length === 0;
  refs.progressText.textContent = questions.length ? `${state.currentIndex + 1} / ${questions.length}` : "0 / 0";
  refs.progressBar.style.width = questions.length ? `${((state.currentIndex + 1) / questions.length) * 100}%` : "0%";
  refs.nextButton.textContent = state.currentIndex >= questions.length - 1 || reviewingSkipped ? t("done") : t("next");
  if (reviewingSkipped) {
    refs.progressText.textContent = `${t("skippedReturn")} ${getSkippedQuestions().length || 1}`;
  }

  if (!activeQuestion) {
    refs.questionCard.classList.add("empty-state");
    delete refs.questionCard.dataset.category;
    refs.categoryLabel.textContent = "";
    refs.questionText.textContent = t("emptyTitle");
    refs.exampleText.hidden = false;
    refs.exampleText.textContent = t("emptyHelp");
    refs.infoButton.hidden = true;
    refs.answerLabel.hidden = true;
    refs.answerSlider.hidden = true;
    refs.answerTicks.hidden = true;
    refs.skipButton.hidden = true;
    refs.noteInput.value = "";
    refs.noteInput.placeholder = t("note");
    return;
  }

  refs.questionCard.classList.remove("empty-state");
  refs.questionCard.dataset.category = String(activeQuestion.categoryIndex);
  refs.infoButton.hidden = false;
  refs.answerLabel.hidden = false;
  refs.answerSlider.hidden = false;
  refs.answerTicks.hidden = false;
  refs.skipButton.hidden = false;
  refs.categoryLabel.textContent = localizeCategoryTitle(activeQuestion.category);
  refs.questionText.textContent = localizeQuestion(activeQuestion);
  refs.noteInput.value = getResponse(activeQuestion.id).note || "";
  refs.noteInput.placeholder = getNotePlaceholder(activeQuestion);
  exampleOpen = false;
  renderExample(activeQuestion);
  renderAnswer(activeQuestion);
  autoSizeNote();
  saveState();
}

function renderAnswer(question) {
  const options = getAnswerOptions(question);
  const response = getResponse(question.id);
  const selectedIndex = Math.max(0, options.findIndex((option) => option.key === response.answer));
  refs.answerSlider.min = 0;
  refs.answerSlider.max = Math.max(options.length - 1, 0);
  refs.answerSlider.step = 1;
  refs.answerSlider.value = response.answer ? selectedIndex : Math.floor((options.length - 1) / 2);

  refs.answerLabel.textContent = response.answer ? localizeAnswerLabel(options[selectedIndex].label) : response.skipped ? t("skipped") : t("slidePrompt");
  refs.answerLabel.classList.toggle("is-empty", !response.answer);
  refs.skipButton.classList.toggle("is-skipped", Boolean(response.skipped && !response.answer));
  refs.skipButton.textContent = response.skipped && !response.answer ? t("skipped") : t("skip");
  refs.answerTicks.innerHTML = options.map(() => "<span></span>").join("");
}

function renderExample(question) {
  const example = question ? getQuestionExample(question) : "";
  refs.infoButton.hidden = !example;
  refs.infoButton.setAttribute("aria-expanded", String(exampleOpen));
  refs.infoButton.setAttribute("aria-label", exampleOpen ? t("hideExample") : t("example"));
  refs.exampleText.hidden = !example || !exampleOpen;
  refs.exampleText.textContent = example || "";
}

function handleNext() {
  if (!questions.length) return;

  if (reviewingSkipped) {
    goToNextSkippedOrResults();
    return;
  }

  if (state.currentIndex >= questions.length - 1) {
    goToNextSkippedOrResults();
    return;
  }

  move(1);
}

function skipCurrentQuestion() {
  if (!activeQuestion) return;
  setResponse(activeQuestion.id, { answer: "", skipped: true });
  renderAnswer(activeQuestion);

  if (reviewingSkipped) {
    goToNextSkippedOrResults(activeQuestion.id);
    return;
  }

  if (state.currentIndex >= questions.length - 1) {
    goToNextSkippedOrResults();
    return;
  }

  move(1);
}

function goToNextSkippedOrResults(previousSkippedId = "") {
  const skippedQuestions = getSkippedQuestions().filter((question) => question.id !== previousSkippedId);
  if (skippedQuestions.length > 0) {
    reviewingSkipped = true;
    const nextQuestion = skippedQuestions[0];
    const nextIndex = questions.findIndex((question) => question.id === nextQuestion.id);
    navigateToIndex(nextIndex, 1);
    return;
  }

  reviewingSkipped = false;
  showResults();
}

function move(direction) {
  if (!questions.length) return;
  const nextIndex = clamp(state.currentIndex + direction, 0, questions.length - 1);
  if (nextIndex === state.currentIndex && direction > 0) {
    goToNextSkippedOrResults();
    return;
  }
  navigateToIndex(nextIndex, direction);
}

function navigateToIndex(nextIndex, direction) {
  if (!questions.length || nextIndex < 0) return;
  clearTimeout(transitionTimer);
  refs.questionCard.style.setProperty("--slide-direction", direction >= 0 ? "24px" : "-24px");
  refs.questionCard.classList.remove("is-entering");
  refs.questionCard.classList.add("is-leaving");

  transitionTimer = window.setTimeout(() => {
    state.currentIndex = clamp(nextIndex, 0, questions.length - 1);
    saveState();
    renderQuestion();
    refs.questionCard.classList.remove("is-leaving");
    refs.questionCard.classList.add("is-entering");
    transitionTimer = window.setTimeout(() => {
      refs.questionCard.classList.remove("is-entering");
    }, 240);
  }, 160);
}

function getSkippedQuestions() {
  return questions.filter((question) => {
    const response = getResponse(question.id);
    return response.skipped && !response.answer;
  });
}

function showQuizView() {
  refs.resultsView.hidden = true;
  refs.cardStage.hidden = false;
  refs.navRow.hidden = false;
  refs.commentForm.hidden = false;
}

function showResults() {
  showingResults = true;
  renderResults();
}

function renderResults() {
  showingResults = true;
  refs.cardStage.hidden = true;
  refs.navRow.hidden = true;
  refs.commentForm.hidden = true;
  refs.resultsView.hidden = false;
  refs.progressText.textContent = t("resultsKicker");
  refs.progressBar.style.width = "100%";
  refs.resultsKicker.textContent = t("resultsKicker");
  refs.resultsTitle.textContent = t("resultsTitle");
  refs.resultsIntro.textContent = t("resultsIntro");
  refs.backToQuizButton.textContent = t("backToQuiz");
  refs.resultsList.innerHTML = buildResultsHtml();
  saveState();
}

function buildResultsHtml() {
  const cards = quizData.categories.map((category, categoryIndex) => {
    const categoryQuestions = questions.filter((question) => question.categoryIndex === categoryIndex);
    const items = categoryQuestions
      .map((question) => ({ question, response: getResponse(question.id) }))
      .filter(({ response }) => response.answer || response.note || response.skipped)
      .map(({ question, response }) => `
        <div class="result-item">
          <p class="result-question">${escapeHtml(localizeQuestion(question))}</p>
          <span class="result-answer">${escapeHtml(getAnswerLabel(question, response))}</span>
          ${response.note ? `<p class="result-note">${escapeHtml(t("noteLabel"))}: ${escapeHtml(response.note)}</p>` : ""}
        </div>
      `)
      .join("");

    if (!items) return "";

    return `
      <article class="result-card" data-category="${categoryIndex}">
        <h3>${escapeHtml(localizeCategoryTitle(category.title))}</h3>
        <div class="result-items">${items}</div>
      </article>
    `;
  }).join("");

  return cards || `<p class="result-empty">${escapeHtml(t("noResults"))}</p>`;
}

function getAnswerLabel(question, response) {
  if (response.answer) {
    const option = getAnswerOptions(question).find((answer) => answer.key === response.answer);
    return option ? localizeAnswerLabel(option.label) : response.answer;
  }
  return response.skipped ? t("skipped") : t("notAnswered");
}

function getResponse(id) {
  return state.responses[id] || {};
}

function setResponse(id, patch) {
  state.responses[id] = {
    ...getResponse(id),
    ...patch
  };
  saveState();
}

function buildQuestionTranslations() {
  const output = { en: {}, nl: {}, fr: {}, de: {} };

  quizData.categories.forEach((category, categoryIndex) => {
    category.questions.forEach((question, questionIndex) => {
      output.nl[`${categoryIndex}-${questionIndex}`] = question;
    });
  });

  Object.entries(quizData.translatedQuestionsByLanguage).forEach(([language, categoryGroups]) => {
    categoryGroups.forEach((questionsForCategory, categoryIndex) => {
      questionsForCategory.forEach((question, questionIndex) => {
        output[language][`${categoryIndex}-${questionIndex}`] = question;
      });
    });
  });

  Object.entries(quizData.expandedQuestionTranslations).forEach(([language, categoryGroups]) => {
    categoryGroups.forEach((questionsForCategory, categoryIndex) => {
      questionsForCategory.forEach((question, questionIndex) => {
        output[language][`x-${categoryIndex}-${questionIndex}`] = question;
      });
    });
  });

  Object.entries(quizData.manualQuestionTranslationOverrides).forEach(([language, overrides]) => {
    output[language] = {
      ...output[language],
      ...overrides
    };
  });

  return output;
}

function localizeQuestion(question) {
  return questionTranslations[state.language]?.[question.id] || questionTranslations.nl[question.id] || question.text;
}

function localizeCategoryTitle(title) {
  return quizData.categoryTitleTranslations[state.language]?.[title] || title;
}

function localizeAnswerLabel(label) {
  return quizData.answerLabelTranslations[state.language]?.[label] || label;
}

function getAnswerOptions(question) {
  const source = question?.text || "";

  if (source.includes("voorkeuren rond man, vrouw") || source.includes("voorkeuren rond mannen, vrouwen")) {
    return quizData.answerSets.genderPreference;
  }

  if (source.includes("publieke displays") || source.includes("publieke of semi-publieke") || source.includes("wettelijk, veilig en respectvol") || source.includes("openbare seksuele")) {
    return quizData.answerSets.softPublic;
  }

  if (source.includes("welke intensiteit") || source.includes("zachte impact") || source.includes("stevigere impact")) {
    return quizData.answerSets.intensity;
  }

  if (source.includes("waar ejaculatie wel en niet")) {
    return quizData.answerSets.location;
  }

  if (source.includes("meer dan twee mensen") || source.includes("meer dan vier personen")) {
    return quizData.answerSets.peopleCount;
  }

  if (source.includes("fantasie") || source.includes("mogelijke ervaring")) {
    return quizData.answerSets.fantasyReality;
  }

  if (isAgreementQuestion(source)) {
    return quizData.answerSets.agreement;
  }

  return quizData.answerSets.default;
}

function isAgreementQuestion(source) {
  const normalized = source.toLowerCase();
  const patterns = [
    "afspreken",
    "afspraken",
    "expliciet bespreken",
    "safeword",
    "stopteken",
    "stop-systeem",
    "check-in",
    "privacy",
    "discretie",
    "veilig",
    "bescherming",
    "condoom",
    "prep",
    "teststatus",
    "hygiene",
    "hygiëne",
    "glijmiddel",
    "nazorg",
    "vermijden",
    "alleen als",
    "alleen wanneer",
    "nooit",
    "altijd",
    "exitplan",
    "veiligheidsplan",
    "risicovol",
    "toestemming",
    "verwijderd",
    "opslag",
    "wachtwoorden",
    "nuchter",
    "medische",
    "professioneel advies"
  ];
  return patterns.some((pattern) => normalized.includes(pattern));
}

function getNotePlaceholder(question) {
  const translations = quizData.notePlaceholderTranslations[state.language] || quizData.notePlaceholderTranslations.nl;
  const answerType = getAnswerType(question);
  return translations[answerType] || translations.categories?.[question.categoryIndex] || translations.default || t("note");
}

function getQuestionExample(question) {
  const translations = quizData.questionExampleTranslations[state.language] || quizData.questionExampleTranslations.nl;
  const specific = translations.specific?.[question.id];
  if (specific) return specific;

  const source = question.text.toLowerCase();
  const patternDefinition = quizData.questionExamplePatternDefinitions.find((definition) => (
    definition.patterns.some((pattern) => source.includes(pattern.toLowerCase()))
  ));
  if (patternDefinition) {
    const patternText = quizData.questionExamplePatternTranslations[state.language]?.[patternDefinition.key];
    if (patternText) return patternText;
  }

  const answerType = getAnswerType(question);
  return translations[answerType] || translations.categories?.[question.categoryIndex] || translations.default || "";
}

function getAnswerType(question) {
  const source = question.text;
  if (source.includes("voorkeuren rond man, vrouw") || source.includes("voorkeuren rond mannen, vrouwen")) return "genderPreference";
  if (source.includes("publieke displays") || source.includes("publieke of semi-publieke") || source.includes("wettelijk, veilig en respectvol") || source.includes("openbare seksuele")) return "softPublic";
  if (source.includes("welke intensiteit") || source.includes("zachte impact") || source.includes("stevigere impact")) return "intensity";
  if (source.includes("waar ejaculatie wel en niet")) return "location";
  if (source.includes("meer dan twee mensen") || source.includes("meer dan vier personen")) return "peopleCount";
  if (source.includes("fantasie") || source.includes("mogelijke ervaring")) return "fantasyReality";
  if (isAgreementQuestion(source)) return "agreement";
  return "default";
}

function autoSizeNote() {
  refs.noteInput.style.height = "auto";
  refs.noteInput.style.height = `${refs.noteInput.scrollHeight}px`;
}

function t(key) {
  return text[state.language]?.[key] || text.nl[key] || key;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
