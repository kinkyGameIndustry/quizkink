const answers = [
  { key: "yes", label: "Ja" },
  { key: "curious", label: "Nieuwsgierig" },
  { key: "talk", label: "Alleen bespreken" },
  { key: "no", label: "Nee" },
  { key: "limit", label: "Hard limit" }
];

const answerSets = {
  default: answers,
  genderPreference: [
    { key: "man", label: "Man" },
    { key: "woman", label: "Vrouw" },
    { key: "both", label: "Beide" },
    { key: "talk", label: "Bespreken" }
  ],
  softPublic: [
    { key: "subtle", label: "Subtiel" },
    { key: "private", label: "Alleen privé" },
    { key: "talk", label: "Bespreken" },
    { key: "no", label: "Nee" },
    { key: "limit", label: "Hard limit" }
  ],
  intensity: [
    { key: "yes", label: "Ja" },
    { key: "interest", label: "Interesse" },
    { key: "build", label: "Opbouwen" },
    { key: "no", label: "Nee" },
    { key: "limit", label: "Hard limit" }
  ],
  location: [
    { key: "face", label: "Gezicht" },
    { key: "mouth", label: "Mond" },
    { key: "chest", label: "Borsten" },
    { key: "body", label: "Lichaam" },
    { key: "talk", label: "Bespreken" }
  ],
  peopleCount: [
    { key: "two", label: "2+" },
    { key: "three", label: "3+" },
    { key: "four", label: "4+" },
    { key: "talk", label: "Bespreken" },
    { key: "no", label: "Nee" }
  ]
};

const categories = [
  {
    title: "Consent & Communicatie",
    questions: [
      "Ik wil vooraf expliciet bespreken wat er wel en niet gebeurt.",
      "Ik wil een safeword of stopteken afspreken.",
      "Ik wil na afloop samen de ervaring nabespreken.",
      "Ik wil dat grenzen tussendoor zonder uitleg kunnen veranderen.",
      "Ik wil duidelijke afspraken over privacy en discretie.",
      "Ik wil voor nieuwe dingen eerst een rustige fantasie- of gesprekronde zonder druk.",
      "Ik wil dat er tijdens het spel regelmatig wordt ingecheckt.",
      "Ik wil dat een 'misschien' altijd als 'nog niet' wordt behandeld.",
      "Ik wil per activiteit kunnen aangeven of het alleen fantasie, bespreekbaar of echt wenselijk is.",
      "Ik wil vooraf woorden afspreken die wel of juist niet gebruikt mogen worden."
    ]
  },
  {
    title: "Dynamiek",
    questions: [
      "Ik ben benieuwd naar een dominante rol.",
      "Ik ben benieuwd naar een onderdanige rol.",
      "Ik vind switchen tussen rollen interessant.",
      "Ik wil controle overgeven binnen strak afgesproken grenzen.",
      "Ik wil spelen met opdrachten, rituelen of protocollen.",
      "Ik wil dat mijn partner mij fysiek vasthoudt tijdens seksuele handelingen.",
      "Ik wil dat mijn partner bepaalt wanneer ik mag bewegen, spreken of klaarkomen.",
      "Ik wil experimenteren met belonen, plagen of ontzeggen.",
      "Ik wil vernedering of plagerige taal alleen als we de woorden vooraf hebben afgesproken.",
      "Ik wil dat machtsdynamiek stopt zodra ik onzeker, bang of ongemakkelijk word."
    ]
  },
  {
    title: "Bondage & Beperking",
    questions: [
      "Ik wil graag vastgebonden worden tijdens seks.",
      "Ik wil mijn partner vastbinden tijdens seks.",
      "Ik wil lichte bondage proberen met handen, sjaal, cuffs of touw.",
      "Ik wil blinddoeken gebruiken als onderdeel van sensuele spelletjes.",
      "Ik wil gekneveld worden of een gag proberen, met extra duidelijke stopafspraken.",
      "Ik wil bondage alleen proberen als ik snel en veilig losgemaakt kan worden.",
      "Ik wil experimenteren met vastgezet worden aan bed, stoel of ander stevig meubel.",
      "Ik wil suspensie of gedeeltelijk opgetild worden alleen met ervaring, geschikte materialen en een veiligheidsplan.",
      "Ik wil posities vermijden die ademhaling, circulatie of paniek kunnen raken.",
      "Ik wil afspraken over tijdsduur en check-ins bij elke vorm van fixatie."
    ]
  },
  {
    title: "Impact & Sensatie",
    questions: [
      "Ik ben nieuwsgierig naar zachte impact of tikken.",
      "Ik ben nieuwsgierig naar stevigere impact binnen duidelijke grenzen.",
      "Ik wil pijn als onderdeel van ons spel, zoals knijpen, bijten of slaan.",
      "Ik wil experimenteren met zweepjes, paddles, floggers of andere impact-toys.",
      "Ik wil tandafdrukken, bijten of zuigen alleen op plekken die we vooraf kiezen.",
      "Ik wil spelen met temperatuur, textuur of druk.",
      "Ik wil zintuiglijke beperking verkennen, zoals blinddoek, oordoppen of muziek.",
      "Ik wil waxplay, ijs of warm/koud spel alleen met veilige materialen proberen.",
      "Ik wil expliciet afspreken welke intensiteit veilig en prettig is.",
      "Ik wil blauwe plekken, zichtbare sporen of pijn achteraf vermijden."
    ]
  },
  {
    title: "Fetish & Esthetiek",
    questions: [
      "Ik voel interesse in leer, latex, lingerie of specifieke kleding.",
      "Ik wil rollenspel of een persona verkennen.",
      "Ik wil woorden, titels of aanspreekvormen gebruiken.",
      "Ik wil bepaalde geuren, materialen of looks juist vermijden.",
      "Ik wil dat uiterlijk vertoon ondergeschikt blijft aan comfort en consent.",
      "Ik wil experimenteren met maskers, harnassen, collars of cuffs.",
      "Ik wil objecten, outfits of schoenen gebruiken als fetish onderdeel.",
      "Ik wil foto's maken van outfits of poses zonder seksuele handeling.",
      "Ik wil dat kleding of fetishmateriaal nooit belangrijker wordt dan mijn fysieke comfort.",
      "Ik wil bepaalde materialen eerst aanraken of ruiken voordat ze op mijn lichaam komen."
    ]
  },
  {
    title: "Anaal & Penetratie",
    questions: [
      "Mag mijn partner mijn anus aanraken met vingers?",
      "Mag mijn partner mijn anus penetreren met vingers?",
      "Ik wil anaal strelen of proberen als beginner, rustig en zonder druk.",
      "Ik wil anale penetratie met een toy.",
      "Ik wil anale seks met een penis.",
      "Ik wil dubbele penetratie als fantasie of mogelijke ervaring.",
      "Ik wil een tweede penis of toy tegelijkertijd voelen alleen als voorbereiding, veiligheid en consent duidelijk zijn.",
      "Ik wil vooraf afspraken over glijmiddel, hygiëne, condooms en stoppen.",
      "Ik wil dat anale handelingen meteen stoppen bij pijn, paniek of twijfel.",
      "Ik wil anaal alleen proberen wanneer ik zelf het tempo bepaal."
    ]
  },
  {
    title: "Orale Seks & Lichaamsvocht",
    questions: [
      "Ik wil mijn partner oraal bevredigen terwijl die mij vasthoudt.",
      "Ik wil dat mijn hoofd, handen of tempo bij orale seks fysiek begeleid wordt.",
      "Ik wil ooit een andere vrouw oraal bevredigen.",
      "Ik wil orale seks ontvangen van iemand anders dan mijn vaste partner.",
      "Ik wil ejaculatie op mijn gezicht.",
      "Ik wil ejaculatie in of rond mijn mond.",
      "Ik wil ejaculatie op mijn borsten of lichaam.",
      "Ik wil vooraf afspreken waar ejaculatie wel en niet mag plaatsvinden.",
      "Ik wil slikken, spugen of vermijden van sperma expliciet kiezen.",
      "Ik wil condooms, dental dams of andere bescherming gebruiken bij orale seks."
    ]
  },
  {
    title: "Toys & Hulpmiddelen",
    questions: [
      "Ik wil ervaring opdoen met BDSM-toys.",
      "Ik wil vibrators, plugs, dildo's of strokers samen ontdekken.",
      "Ik wil restraints, blinddoeken, klemmen of impact-toys rustig introduceren.",
      "Ik wil chastity of afsluiten van geslachtsdelen als fantasie of spel.",
      "Ik wil slotjes, cages of keyholder-dynamiek alleen met duidelijke noodafspraken.",
      "Ik wil toys delen met anderen alleen met hygiëne, condooms en duidelijke toestemming.",
      "Ik wil elektrische, ademhalings- of risicovolle toys vermijden tenzij er kennis en veiligheidsplan is.",
      "Ik wil nieuwe toys eerst buiten seks testen.",
      "Ik wil dat toys direct verwijderd worden als iets gevoelloos, pijnlijk of onveilig voelt.",
      "Ik wil samen een lijst maken van toys die nieuwsgierig maken."
    ]
  },
  {
    title: "Meer Personen",
    questions: [
      "Zou je openstaan voor een trio?",
      "Als een trio mogelijk is, wil je dan voorkeuren rond man, vrouw of beide aangeven?",
      "Zou je openstaan voor een trio met een bekende?",
      "Zou je openstaan voor een trio met iemand die we nog niet kennen?",
      "Zou je openstaan voor een groepsseksfeest met bekenden?",
      "Als groepsseks mogelijk is, wil je dan voorkeuren rond mannen, vrouwen of beide aangeven?",
      "Wat vind je ervan om meer dan twee mensen jou tegelijk te laten plezieren, aaien of penetreren?",
      "Zou je aangeraakt willen worden door meer dan vier personen tegelijk?",
      "Ik wil regels afspreken over wie mij mag aanraken, waar en hoe.",
      "Ik wil vooraf afspraken over condooms, SOA-testen, grenzen en nazorg bij meerdere personen."
    ]
  },
  {
    title: "Swingers & Open Relatie",
    questions: [
      "Zou je openstaan om samen naar een swingersclub te gaan?",
      "Ik wil swingersclubs alleen bezoeken om te kijken en sfeer te proeven.",
      "Ik wil nieuwe mensen ontmoeten zonder verplichting tot seksuele handelingen.",
      "Ik wil seksuele ervaringen met anderen delen binnen een open relatie-situatie.",
      "Ik wil vooraf duidelijke regels over zoenen, aanraken, orale seks en penetratie met anderen.",
      "Ik wil afspreken of we altijd samen blijven of ook apart contact mogen hebben.",
      "Ik wil afspraken over jaloezie, stoppen en achteraf checken.",
      "Ik wil daten, chatten of flirten met anderen alleen transparant doen.",
      "Ik wil dat open relatie-ervaringen niet worden gebruikt om druk op mij te zetten.",
      "Ik wil onze relatieafspraken schriftelijk of heel expliciet vastleggen."
    ]
  },
  {
    title: "Publiek & Locaties",
    questions: [
      "Hoe voel je over publieke displays van affectie in ruimtes waar we niet alleen zijn?",
      "Hoe voel je over erotische spanning op plekken waar anderen in de buurt kunnen zijn?",
      "Ik wil publieke of semi-publieke situaties alleen als niemand ongewild betrokken raakt.",
      "Ik wil seks op kinky locaties in huis verkennen.",
      "Ik wil in huis zoeken naar plekken voor stiekeme of speelse seksavonturen.",
      "Ik wil seks buiten de slaapkamer proberen.",
      "Ik wil experimenteren met risico op betrapt worden alleen in privé- of afgesproken omgevingen.",
      "Ik wil openbare seksuele handelingen vermijden als anderen dit ongevraagd kunnen zien.",
      "Ik wil dat publieke erotiek wettelijk, veilig en respectvol blijft.",
      "Ik wil altijd een exitplan hebben voor locaties buiten bed of slaapkamer."
    ]
  },
  {
    title: "Foto, Video & Privacy",
    questions: [
      "Hoe denk je over het uitwisselen van seksuele foto's of video's met je partner?",
      "Hoe denk je over het uitwisselen van seksuele foto's of video's met anderen?",
      "Ik wil erotische foto's maken zonder herkenbaar gezicht.",
      "Ik wil seksuele video's maken alleen voor privégebruik tussen ons.",
      "Ik wil dat naaktbeelden nooit doorgestuurd worden zonder expliciete toestemming op dat moment.",
      "Ik wil delen op websites of platforms vermijden, ook zonder gezichten.",
      "Ik wil anonieme publicatie als fantasie, mogelijkheid of harde grens kunnen aangeven.",
      "Ik wil afspraken over verwijderen, opslag, wachtwoorden en cloudbackups.",
      "Ik wil geen beelden maken wanneer iemand onder invloed, moe of emotioneel kwetsbaar is.",
      "Ik wil dat het intrekken van toestemming betekent dat beelden worden verwijderd."
    ]
  },
  {
    title: "Middelen & Energie",
    questions: [
      "Hoe voel je over libido-verhogende middelen?",
      "Ik wil Viagra of vergelijkbare middelen alleen overwegen na medische check of professioneel advies.",
      "Ik wil drugs of alcohol vermijden bij nieuwe of intensieve BDSM-ervaringen.",
      "Ik wil nuchter blijven bij bondage, impact, anaal of groepsseks.",
      "Ik wil afspraken over pauzes, water, eten en slaap.",
      "Ik wil stoppen als middelen mijn grenzen, consent of herinnering kunnen beïnvloeden.",
      "Ik wil supplementen, medicatie of stimulerende middelen nooit als drukmiddel gebruiken.",
      "Ik wil vooraf delen welke medicatie of gezondheidsrisico's relevant zijn.",
      "Ik wil dat seksuele avonturen ook zonder middelen goed genoeg mogen zijn.",
      "Ik wil energie, cyclus, stress of mentale toestand meenemen in onze planning."
    ]
  },
  {
    title: "Nazorg & Veiligheid",
    questions: [
      "Ik wil fysieke nazorg zoals water, warmte, rust of aanraking.",
      "Ik wil emotionele nazorg zoals geruststelling of stilte.",
      "Ik wil een check-in later op de dag of de volgende dag.",
      "Ik wil medische, trauma- of triggerinformatie vooraf kunnen delen.",
      "Ik wil een duidelijke afspraak voor stoppen, pauzeren en opruimen.",
      "Ik wil afspraken over wat helpt als ik dichtklap, huil of overprikkeld raak.",
      "Ik wil dat teleurstelling nooit wordt afgereageerd als ik nee zeg.",
      "Ik wil na intens spel tijd zonder nieuwe seksuele druk.",
      "Ik wil grenzen die in deze vragenlijst staan regelmatig opnieuw kunnen herzien.",
      "Ik wil dat hard limits altijd zonder discussie worden gerespecteerd."
    ]
  }
];

const storageKey = "kink-questionnaire-v1";
const state = loadState();
let currentIndex = 0;
let pendingSharedResponses = readSharedResponsesFromHash();
let activeResultResponses = state.responses;
let sharedMode = false;

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
  shareNote: document.querySelector("#shareNote"),
  backToQuestions: document.querySelector("#backToQuestions"),
  copyResults: document.querySelector("#copyResults"),
  copyShareLink: document.querySelector("#copyShareLink"),
  printResults: document.querySelector("#printResults")
};

init();

function init() {
  buildCategories();
  bindEvents();

  if (pendingSharedResponses && state.allowed) {
    renderResults(pendingSharedResponses, { shared: true });
    return;
  }

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
    if (pendingSharedResponses) {
      renderResults(pendingSharedResponses, { shared: true });
      return;
    }
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

  elements.noteInput.addEventListener("input", saveCurrentNote);
  elements.noteInput.addEventListener("change", saveCurrentNote);
  elements.noteInput.addEventListener("blur", saveCurrentNote);

  elements.backToQuestions.addEventListener("click", showQuestionnaire);
  elements.printResults.addEventListener("click", () => window.print());
  elements.copyResults.addEventListener("click", copyResults);
  elements.copyShareLink.addEventListener("click", copyShareLink);
}

function saveCurrentNote() {
  if (!flatQuestions[currentIndex]) return;
  const question = flatQuestions[currentIndex];
  const response = getResponse(question.id);
  response.note = elements.noteInput.value;
  saveState();
}

function showQuestionnaire() {
  sharedMode = false;
  activeResultResponses = state.responses;
  if (location.hash.startsWith("#share=")) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  }
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

function buildAnswerOptions(question) {
  elements.answerGrid.innerHTML = "";
  const legend = document.createElement("legend");
  legend.className = "sr-only";
  legend.textContent = "Antwoord";
  elements.answerGrid.append(legend);

  getAnswerOptions(question).forEach((answer) => {
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

  buildAnswerOptions(question);
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

function renderResults(responses = state.responses, options = {}) {
  activeResultResponses = responses;
  sharedMode = Boolean(options.shared);
  document.body.classList.toggle("is-shared-view", sharedMode);
  elements.questionnaire.hidden = true;
  elements.ageGate.hidden = true;
  elements.results.hidden = false;
  elements.summaryStrip.innerHTML = "";
  elements.resultsGrid.innerHTML = "";
  document.querySelector("#results-title").textContent = sharedMode ? "Gedeelde kaart" : "Jouw kaart";
  elements.backToQuestions.textContent = sharedMode ? "Start eigen lijst" : "Terug";
  elements.copyShareLink.hidden = sharedMode;
  elements.shareNote.hidden = sharedMode;

  const summaryItems = buildSummaryItems(responses);
  elements.summaryStrip.hidden = sharedMode && summaryItems.length === 0;

  summaryItems.forEach((answer) => {
    const item = document.createElement("div");
    item.className = "summary-pill";
    item.innerHTML = `<strong>${answer.count}</strong><span>${answer.label}</span>`;
    elements.summaryStrip.append(item);
  });

  categories.forEach((category, categoryIndex) => {
    const items = category.questions
      .map((question, questionIndex) => {
        const id = `${categoryIndex}-${questionIndex}`;
        const response = responses[id] || {};
        return { question, response };
      })
      .filter((item) => !sharedMode || item.response.answer || item.response.note);

    if (sharedMode && items.length === 0) return;

    elements.resultsGrid.append(buildResultCategory(category.title, items, { expandable: sharedMode }));
  });

  elements.results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildResultCategory(title, items, options = {}) {
  const list = items
    .map(({ question, response }) => {
      const answer = getAnswerLabel({ text: question }, response.answer);
      const note = response.note ? `<span class="result-note"><strong>Notitie</strong> <span>${escapeHtml(response.note)}</span></span>` : "";
      return `<li><span>${escapeHtml(question)}</span><span class="result-answer">${answer}</span>${note}</li>`;
    })
    .join("");

  if (options.expandable) {
    const details = document.createElement("details");
    details.className = "result-card result-card--expandable";
    details.open = true;
    details.innerHTML = `<summary><span>${escapeHtml(title)}</span><small>${items.length}</small></summary><ul class="result-list">${list}</ul>`;
    return details;
  }

  const card = document.createElement("article");
  card.className = "result-card";
  card.innerHTML = `<h3>${escapeHtml(title)}</h3><ul class="result-list">${list}</ul>`;
  return card;
}

async function copyResults() {
  const text = buildResultsText(activeResultResponses);
  await writeClipboard(text);
  showToast("Samenvatting gekopieerd.");
}

async function copyShareLink() {
  const payload = encodeSharePayload(state.responses);
  const url = `${location.origin}${location.pathname}${location.search}#share=${payload}`;
  await writeClipboard(url);
  showToast("Partnerlink gekopieerd.");
}

function buildResultsText(responses) {
  return categories
    .map((category, categoryIndex) => {
      const lines = category.questions.map((question, questionIndex) => {
        const id = `${categoryIndex}-${questionIndex}`;
        const response = responses[id] || {};
        const answer = getAnswerLabel({ text: question }, response.answer);
        const note = response.note ? ` | Notitie: ${response.note}` : "";
        return `- ${question}: ${answer}${note}`;
      });
      return `${category.title}\n${lines.join("\n")}`;
    })
    .join("\n\n");
}

function getAnswerOptions(question) {
  const text = question?.text || "";

  if (text.includes("voorkeuren rond man, vrouw") || text.includes("voorkeuren rond mannen, vrouwen")) {
    return answerSets.genderPreference;
  }

  if (text.includes("publieke displays") || text.includes("publieke of semi-publieke") || text.includes("wettelijk, veilig en respectvol")) {
    return answerSets.softPublic;
  }

  if (text.includes("welke intensiteit") || text.includes("zachte impact") || text.includes("stevigere impact")) {
    return answerSets.intensity;
  }

  if (text.includes("waar ejaculatie wel en niet")) {
    return answerSets.location;
  }

  if (text.includes("meer dan twee mensen") || text.includes("meer dan vier personen")) {
    return answerSets.peopleCount;
  }

  return answerSets.default;
}

function getAnswerLabel(question, key) {
  if (!key) return "Niet beantwoord";
  const legacyLabels = {
    soft: "Zacht",
    medium: "Middel",
    strong: "Stevig"
  };
  return getAnswerOptions(question).find((answer) => answer.key === key)?.label || answers.find((answer) => answer.key === key)?.label || legacyLabels[key] || key;
}

function buildSummaryItems(responses) {
  const counts = new Map();

  flatQuestions.forEach((question) => {
    const label = getAnswerLabel(question, responses[question.id]?.answer);
    if (label === "Niet beantwoord") return;
    counts.set(label, (counts.get(label) || 0) + 1);
  });

  const preferredOrder = [
    "Ja",
    "Nieuwsgierig",
    "Interesse",
    "Opbouwen",
    "Alleen bespreken",
    "Bespreken",
    "Man",
    "Vrouw",
    "Beide",
    "Subtiel",
    "Alleen privé",
    "Zacht",
    "Middel",
    "Stevig",
    "Gezicht",
    "Mond",
    "Borsten",
    "Lichaam",
    "2+",
    "3+",
    "4+",
    "Nee",
    "Hard limit"
  ];

  return preferredOrder
    .filter((label) => counts.has(label))
    .map((label) => ({ label, count: counts.get(label) }));
}

function encodeSharePayload(responses) {
  const compactResponses = Object.fromEntries(
    Object.entries(responses)
      .filter(([, response]) => response?.answer || response?.note)
      .map(([id, response]) => [id, [response.answer || "", response.note || ""]])
  );
  const payload = JSON.stringify({ v: 1, r: compactResponses });
  return toBase64Url(payload);
}

function readSharedResponsesFromHash() {
  if (!location.hash.startsWith("#share=")) return null;

  try {
    const payload = JSON.parse(fromBase64Url(location.hash.slice("#share=".length)));
    if (payload?.v !== 1 || !payload.r || typeof payload.r !== "object") return null;

    return Object.fromEntries(
      Object.entries(payload.r).map(([id, value]) => [
        id,
        {
          answer: typeof value?.[0] === "string" ? value[0] : "",
          note: typeof value?.[1] === "string" ? value[1] : ""
        }
      ])
    );
  } catch {
    showToast("Deze partnerlink kon niet worden gelezen.");
    return null;
  }
}

function toBase64Url(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function fromBase64Url(value) {
  const base64 = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(base64);
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function writeClipboard(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
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
