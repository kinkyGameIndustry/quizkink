const answers = [
  { key: "yes", label: "Ja" },
  { key: "curious", label: "Nieuwsgierig" },
  { key: "talk", label: "Alleen bespreken" },
  { key: "later", label: "Later bespreken" },
  { key: "no", label: "Nee" },
  { key: "limit", label: "Hard limit" }
];

const answerSets = {
  default: answers,
  genderPreference: [
    { key: "man", label: "Man" },
    { key: "woman", label: "Vrouw" },
    { key: "both", label: "Beide" },
    { key: "talk", label: "Bespreken" },
    { key: "later", label: "Later bespreken" }
  ],
  softPublic: [
    { key: "subtle", label: "Subtiel" },
    { key: "private", label: "Alleen privé" },
    { key: "talk", label: "Bespreken" },
    { key: "later", label: "Later bespreken" },
    { key: "no", label: "Nee" },
    { key: "limit", label: "Hard limit" }
  ],
  intensity: [
    { key: "yes", label: "Ja" },
    { key: "interest", label: "Interesse" },
    { key: "build", label: "Opbouwen" },
    { key: "later", label: "Later bespreken" },
    { key: "no", label: "Nee" },
    { key: "limit", label: "Hard limit" }
  ],
  location: [
    { key: "face", label: "Gezicht" },
    { key: "mouth", label: "Mond" },
    { key: "chest", label: "Borsten" },
    { key: "body", label: "Lichaam" },
    { key: "talk", label: "Bespreken" },
    { key: "later", label: "Later bespreken" }
  ],
  peopleCount: [
    { key: "two", label: "2+" },
    { key: "three", label: "3+" },
    { key: "four", label: "4+" },
    { key: "talk", label: "Bespreken" },
    { key: "later", label: "Later bespreken" },
    { key: "no", label: "Nee" }
  ]
};

const defaultLanguage = "en";
const supportedLanguages = ["en", "nl", "fr", "de"];

const uiText = {
  en: {
    documentTitle: "Intimate Boundaries | BDSM, Fetish & Kink Questionnaire",
    description: "A privacy-friendly BDSM, fetish and kink questionnaire for adults.",
    heroKicker: "Private, local, adult",
    heroTitle: "BDSM, Fetish & Kink Questionnaire",
    intro: "Explore desires, curiosity and boundaries with clear language. Your answers stay in this browser.",
    start: "Start questionnaire",
    reset: "Clear answers",
    adultKicker: "18+",
    adultTitle: "Adults only",
    adultCopy: "This questionnaire is about sexuality, power, play, boundaries and consent. Continue only if you are 18 or older and you want to fill this in voluntarily.",
    languageLabel: "Language",
    chooseCategories: "Choose categories",
    selectAllCategories: "Select all",
    adultCheck: "I am 18 years or older.",
    consentCheck: "I understand that consent, aftercare and clear boundaries are central.",
    continueButton: "Continue",
    progress: "Progress",
    categories: "Categories",
    questionFallback: "Question",
    answerHelp: "Choose what feels honest now. You can adjust everything later.",
    notesLabel: "Note for yourself or partner",
    notesPlaceholder: "For example: context, pace, words, triggers, aftercare...",
    previous: "Previous",
    next: "Next",
    viewResults: "View result",
    summary: "Summary",
    yourCard: "Your card",
    sharedCard: "Shared card",
    back: "Back",
    startOwn: "Start own list",
    copy: "Copy",
    quizLink: "Quiz link",
    partnerLink: "Partner link",
    print: "Print",
    shareNote: "The partner link stores answers inside the link itself. Share it only with someone who may read these results.",
    note: "Note",
    copiedSummary: "Summary copied.",
    copiedSetup: "Quiz link copied.",
    copiedPartner: "Partner link copied.",
    badLink: "This link could not be read.",
    clearConfirm: "Clear all local answers?",
    answered: "{answered} of {total}",
    notAnswered: "Not answered",
    expandedOff: "Basic",
    expandedOn: "Extended"
  },
  nl: {
    documentTitle: "Intieme Grenzen | BDSM, Fetish & Kink Vragenlijst",
    description: "Een privacyvriendelijke BDSM, fetish en kink vragenlijst voor volwassenen.",
    heroKicker: "Privé, lokaal, volwassen",
    heroTitle: "BDSM, Fetish & Kink Vragenlijst",
    intro: "Verken verlangens, nieuwsgierigheid en grenzen met duidelijke taal. Je antwoorden blijven in deze browser.",
    start: "Start vragenlijst",
    reset: "Wis antwoorden",
    adultKicker: "18+",
    adultTitle: "Alleen voor volwassenen",
    adultCopy: "Deze vragenlijst gaat over seksualiteit, macht, spel, grenzen en consent. Ga alleen verder als je 18 jaar of ouder bent en dit vrijwillig wilt invullen.",
    languageLabel: "Taal",
    chooseCategories: "Kies categorieën",
    selectAllCategories: "Alles selecteren",
    adultCheck: "Ik ben 18 jaar of ouder.",
    consentCheck: "Ik begrijp dat consent, nazorg en duidelijke grenzen centraal staan.",
    continueButton: "Ga verder",
    progress: "Voortgang",
    categories: "Categorieën",
    questionFallback: "Vraag",
    answerHelp: "Kies wat nu eerlijk voelt. Je kunt alles later aanpassen.",
    notesLabel: "Notitie voor jezelf of partner",
    notesPlaceholder: "Bijvoorbeeld: context, tempo, woorden, triggers, nazorg...",
    previous: "Vorige",
    next: "Volgende",
    viewResults: "Bekijk resultaat",
    summary: "Samenvatting",
    yourCard: "Jouw kaart",
    sharedCard: "Gedeelde kaart",
    back: "Terug",
    startOwn: "Start eigen lijst",
    copy: "Kopieer",
    quizLink: "Quizlink",
    partnerLink: "Partnerlink",
    print: "Print",
    shareNote: "De partnerlink bewaart antwoorden in de link zelf. Deel hem alleen met iemand die deze resultaten mag lezen.",
    note: "Notitie",
    copiedSummary: "Samenvatting gekopieerd.",
    copiedSetup: "Quizlink gekopieerd.",
    copiedPartner: "Partnerlink gekopieerd.",
    badLink: "Deze link kon niet worden gelezen.",
    clearConfirm: "Alle lokale antwoorden wissen?",
    answered: "{answered} van {total}",
    notAnswered: "Niet beantwoord",
    expandedOff: "Basis",
    expandedOn: "Uitgebreid"
  },
  fr: {
    documentTitle: "Limites Intimes | Questionnaire BDSM, fétiche & kink",
    description: "Un questionnaire BDSM, fétiche et kink respectueux de la vie privée pour adultes.",
    heroKicker: "Privé, local, adulte",
    heroTitle: "Questionnaire BDSM, fétiche & kink",
    intro: "Explorez désirs, curiosité et limites avec un langage clair. Vos réponses restent dans ce navigateur.",
    start: "Commencer",
    reset: "Effacer les réponses",
    adultKicker: "18+",
    adultTitle: "Adultes uniquement",
    adultCopy: "Ce questionnaire parle de sexualité, pouvoir, jeu, limites et consentement. Continuez seulement si vous avez 18 ans ou plus et si vous voulez le remplir volontairement.",
    languageLabel: "Langue",
    chooseCategories: "Choisir les catégories",
    selectAllCategories: "Tout sélectionner",
    adultCheck: "J'ai 18 ans ou plus.",
    consentCheck: "Je comprends que le consentement, l'aftercare et les limites claires sont essentiels.",
    continueButton: "Continuer",
    progress: "Progression",
    categories: "Catégories",
    questionFallback: "Question",
    answerHelp: "Choisissez ce qui vous semble honnête maintenant. Vous pourrez tout modifier plus tard.",
    notesLabel: "Note pour vous ou votre partenaire",
    notesPlaceholder: "Par exemple : contexte, rythme, mots, déclencheurs, aftercare...",
    previous: "Précédent",
    next: "Suivant",
    viewResults: "Voir le résultat",
    summary: "Résumé",
    yourCard: "Votre carte",
    sharedCard: "Carte partagée",
    back: "Retour",
    startOwn: "Commencer ma liste",
    copy: "Copier",
    quizLink: "Lien quiz",
    partnerLink: "Lien partenaire",
    print: "Imprimer",
    shareNote: "Le lien partenaire stocke les réponses dans le lien lui-même. Partagez-le seulement avec une personne autorisée à lire ces résultats.",
    note: "Note",
    copiedSummary: "Résumé copié.",
    copiedSetup: "Lien quiz copié.",
    copiedPartner: "Lien partenaire copié.",
    badLink: "Ce lien n'a pas pu être lu.",
    clearConfirm: "Effacer toutes les réponses locales ?",
    answered: "{answered} sur {total}",
    notAnswered: "Sans réponse",
    expandedOff: "Base",
    expandedOn: "Étendu"
  },
  de: {
    documentTitle: "Intime Grenzen | BDSM-, Fetisch- & Kink-Fragebogen",
    description: "Ein datenschutzfreundlicher BDSM-, Fetisch- und Kink-Fragebogen für Erwachsene.",
    heroKicker: "Privat, lokal, erwachsen",
    heroTitle: "BDSM-, Fetisch- & Kink-Fragebogen",
    intro: "Erkunde Wünsche, Neugier und Grenzen mit klarer Sprache. Deine Antworten bleiben in diesem Browser.",
    start: "Fragebogen starten",
    reset: "Antworten löschen",
    adultKicker: "18+",
    adultTitle: "Nur für Erwachsene",
    adultCopy: "Dieser Fragebogen behandelt Sexualität, Macht, Spiel, Grenzen und Consent. Fahre nur fort, wenn du mindestens 18 Jahre alt bist und ihn freiwillig ausfüllen möchtest.",
    languageLabel: "Sprache",
    chooseCategories: "Kategorien wählen",
    selectAllCategories: "Alle auswählen",
    adultCheck: "Ich bin 18 Jahre oder älter.",
    consentCheck: "Ich verstehe, dass Consent, Nachsorge und klare Grenzen zentral sind.",
    continueButton: "Weiter",
    progress: "Fortschritt",
    categories: "Kategorien",
    questionFallback: "Frage",
    answerHelp: "Wähle, was sich jetzt ehrlich anfühlt. Du kannst später alles ändern.",
    notesLabel: "Notiz für dich oder Partner",
    notesPlaceholder: "Zum Beispiel: Kontext, Tempo, Wörter, Trigger, Nachsorge...",
    previous: "Zurück",
    next: "Weiter",
    viewResults: "Ergebnis ansehen",
    summary: "Zusammenfassung",
    yourCard: "Deine Karte",
    sharedCard: "Geteilte Karte",
    back: "Zurück",
    startOwn: "Eigene Liste starten",
    copy: "Kopieren",
    quizLink: "Quizlink",
    partnerLink: "Partnerlink",
    print: "Drucken",
    shareNote: "Der Partnerlink speichert Antworten im Link selbst. Teile ihn nur mit jemandem, der diese Ergebnisse lesen darf.",
    note: "Notiz",
    copiedSummary: "Zusammenfassung kopiert.",
    copiedSetup: "Quizlink kopiert.",
    copiedPartner: "Partnerlink kopiert.",
    badLink: "Dieser Link konnte nicht gelesen werden.",
    clearConfirm: "Alle lokalen Antworten löschen?",
    answered: "{answered} von {total}",
    notAnswered: "Nicht beantwortet",
    expandedOff: "Basis",
    expandedOn: "Erweitert"
  }
};

const answerLabelTranslations = {
  en: {
    "Ja": "Yes",
    "Nieuwsgierig": "Curious",
    "Alleen bespreken": "Discuss only",
    "Later bespreken": "Discuss later",
    "Nee": "No",
    "Hard limit": "Hard limit",
    "Man": "Man",
    "Vrouw": "Woman",
    "Beide": "Both",
    "Bespreken": "Discuss",
    "Subtiel": "Subtle",
    "Alleen privé": "Private only",
    "Interesse": "Interested",
    "Opbouwen": "Build up",
    "Gezicht": "Face",
    "Mond": "Mouth",
    "Borsten": "Chest",
    "Lichaam": "Body",
    "Zacht": "Soft",
    "Middel": "Medium",
    "Stevig": "Firm"
  },
  nl: {},
  fr: {
    "Ja": "Oui",
    "Nieuwsgierig": "Curieux",
    "Alleen bespreken": "Discuter seulement",
    "Later bespreken": "Discuter plus tard",
    "Nee": "Non",
    "Hard limit": "Limite absolue",
    "Man": "Homme",
    "Vrouw": "Femme",
    "Beide": "Les deux",
    "Bespreken": "Discuter",
    "Subtiel": "Subtil",
    "Alleen privé": "Seulement en privé",
    "Interesse": "Intéressé",
    "Opbouwen": "Progressivement",
    "Gezicht": "Visage",
    "Mond": "Bouche",
    "Borsten": "Poitrine",
    "Lichaam": "Corps",
    "Zacht": "Doux",
    "Middel": "Moyen",
    "Stevig": "Intense"
  },
  de: {
    "Ja": "Ja",
    "Nieuwsgierig": "Neugierig",
    "Alleen bespreken": "Nur besprechen",
    "Later bespreken": "Später besprechen",
    "Nee": "Nein",
    "Hard limit": "Absolute Grenze",
    "Man": "Mann",
    "Vrouw": "Frau",
    "Beide": "Beide",
    "Bespreken": "Besprechen",
    "Subtiel": "Dezent",
    "Alleen privé": "Nur privat",
    "Interesse": "Interesse",
    "Opbouwen": "Langsam aufbauen",
    "Gezicht": "Gesicht",
    "Mond": "Mund",
    "Borsten": "Brust",
    "Lichaam": "Körper",
    "Zacht": "Sanft",
    "Middel": "Mittel",
    "Stevig": "Stark"
  }
};

const categoryTitleTranslations = {
  en: {
    "Consent & Communicatie": "Consent & Communication",
    "Dynamiek": "Dynamics",
    "Bondage & Beperking": "Bondage & Restraint",
    "Impact & Sensatie": "Impact & Sensation",
    "Fetish & Esthetiek": "Fetish & Aesthetics",
    "Anaal & Penetratie": "Anal & Penetration",
    "Orale Seks & Lichaamsvocht": "Oral Sex & Body Fluids",
    "Toys & Hulpmiddelen": "Toys & Tools",
    "Meer Personen": "More People",
    "Swingers & Open Relatie": "Swingers & Open Relationship",
    "Publiek & Locaties": "Public & Locations",
    "Foto, Video & Privacy": "Photo, Video & Privacy",
    "Middelen & Energie": "Substances & Energy",
    "Nazorg & Veiligheid": "Aftercare & Safety"
  },
  nl: {},
  fr: {
    "Consent & Communicatie": "Consentement & communication",
    "Dynamiek": "Dynamiques",
    "Bondage & Beperking": "Bondage & restriction",
    "Impact & Sensatie": "Impact & sensation",
    "Fetish & Esthetiek": "Fétiche & esthétique",
    "Anaal & Penetratie": "Anal & pénétration",
    "Orale Seks & Lichaamsvocht": "Sexe oral & fluides corporels",
    "Toys & Hulpmiddelen": "Jouets & accessoires",
    "Meer Personen": "Plusieurs personnes",
    "Swingers & Open Relatie": "Swingers & relation ouverte",
    "Publiek & Locaties": "Public & lieux",
    "Foto, Video & Privacy": "Photo, vidéo & confidentialité",
    "Middelen & Energie": "Substances & énergie",
    "Nazorg & Veiligheid": "Aftercare & sécurité"
  },
  de: {
    "Consent & Communicatie": "Consent & Kommunikation",
    "Dynamiek": "Dynamiken",
    "Bondage & Beperking": "Bondage & Einschränkung",
    "Impact & Sensatie": "Impact & Empfindung",
    "Fetish & Esthetiek": "Fetisch & Ästhetik",
    "Anaal & Penetratie": "Anal & Penetration",
    "Orale Seks & Lichaamsvocht": "Oralsex & Körperflüssigkeiten",
    "Toys & Hulpmiddelen": "Toys & Hilfsmittel",
    "Meer Personen": "Mehr Personen",
    "Swingers & Open Relatie": "Swinger & offene Beziehung",
    "Publiek & Locaties": "Öffentlichkeit & Orte",
    "Foto, Video & Privacy": "Foto, Video & Privatsphäre",
    "Middelen & Energie": "Substanzen & Energie",
    "Nazorg & Veiligheid": "Nachsorge & Sicherheit"
  }
};

const questionTranslations = {
  en: {},
  nl: {},
  fr: {},
  de: {}
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
let pendingSetup = readSetupFromHash();
let activeResultResponses = state.responses;
let sharedMode = false;

const expandedQuestionGroups = [
  [
    "Ik wil vooraf mijn harde grenzen (hard limits) en zachte grenzen (soft limits) duidelijk bespreken.",
    "Ik wil afspraken maken over aftercare (nazorg) – wat ik nodig heb en wat ik kan geven.",
    "Ik wil mijn triggers of trauma-gerelateerde dingen vooraf delen (indien relevant).",
    "Ik wil duidelijke afspraken over bescherming / veilige seks (condooms, PrEP, teststatus, etc.).",
    "Ik wil non-verbale stoptekens afspreken voor als praten moeilijk is (bijv. drie tikken, hand openen, etc.).",
    "Ik vind het belangrijk dat 'nee', 'stop' en 'niet nu' altijd direct gerespecteerd worden, ook zonder safeword.",
    "Ik wil van tevoren afspreken hoe we omgaan met onverwachte emotionele reacties.",
    "Ik wil dat we na een bepaalde tijd (bijv. na 30/60 minuten) een korte check-in doen, ook als alles goed gaat.",
    "Ik wil vooraf bespreken of foto's, video’s of audio-opnames gemaakt mogen worden en hoe die bewaard worden.",
    "Ik wil dat we na afloop ook een lichamelijke check doen (bijv. blauwe plekken, pijn, etc.).",
    "Ik heb behoefte aan een 'traffic light system' (groen = ga door, geel = langzaam/aanpassen, rood = stop).",
    "Ik wil dat we vooraf afspreken wie verantwoordelijk is voor hygiëne en schoonmaak.",
    "Ik wil duidelijkheid over hoe we omgaan met onvoorziene situaties (bijv. iemand voelt zich plots niet lekker).",
    "Ik wil dat we afspraken maken over hoe we communiceren als een van ons dronken of high is.",
    "Ik vind het belangrijk dat we elkaars energieniveau en mentale staat vooraf checken.",
    "Ik wil per sessie een korte 'intentie-check' doen: wat wil ik vandaag voelen/ervaren?",
    "Ik wil dat we achteraf evalueren wat we volgende keer anders of hetzelfde willen doen.",
    "Ik wil dat complimenten en positieve feedback tijdens en na het spel gestimuleerd worden.",
    "Ik wil afspreken dat we geen nieuwe activiteiten introduceren zonder voorafgaande toestemming.",
    "Ik wil dat we duidelijke afspraken maken over hoe lang een sessie ongeveer duurt."
  ],
  [
    "Ik wil experimenteren met een duidelijke hiërarchie of eigenaar/dier-dynamiek.",
    "Ik vind het fijn om regels en structuur te hebben tijdens een sessie.",
    "Ik wil spelen met straffen en beloningen als onderdeel van de dynamiek.",
    "Ik wil dat mijn partner mij begeleidt of commandeert tijdens het spel.",
    "Ik wil experimenteren met bondage of bewegingsbeperking binnen de machtsdynamiek.",
    "Ik ben benieuwd naar impact play (slaan, spanken, zweepjes) in combinatie met dominantie/onderdanigheid.",
    "Ik wil dat mijn partner mijn orgasmes controleert (edging, denial, ruined orgasms, etc.).",
    "Ik vind het spannend om taken of huishoudelijke dienstbaarheid te doen voor mijn partner.",
    "Ik wil afspreken hoe 'speels' versus 'serieus' de machtsdynamiek mag zijn.",
    "Ik wil de mogelijkheid hebben om tijdelijk in een 'drop' of aftercare-rol te vallen als de dynamiek te intens wordt.",
    "Ik ben geïnteresseerd in pet play, age play of roleplay binnen een dynamiek.",
    "Ik wil spelen met sensatie en zintuiglijke deprivatie (blinddoek, oordoppen, etc.).",
    "Ik wil dat mijn partner mij 'gebruikt' voor zijn/haar plezier binnen afgesproken grenzen.",
    "Ik vind het opwindend om te worden genegeerd of genegeerd te worden als vorm van machtsspel.",
    "Ik wil duidelijke signalen afspreken voor wanneer de dynamiek intenser of juist zachter mag worden.",
    "Ik wil experimenteren met langdurige machtsdynamiek (bijv. een hele avond of weekend).",
    "Ik wil dat mijn partner mij fysiek domineert (vasthouden, verplaatsen, vastbinden).",
    "Ik ben benieuwd naar verbal dominance (commanderen, bevelen, degradatie).",
    "Ik wil dat we na afloop de dynamiek duidelijk afsluiten (bijv. met een ritueel of knuffel).",
    "Ik vind het belangrijk dat de machtsdynamiek altijd vrijwillig en met plezier wordt beoefend."
  ],
  [
    "Ik wil experimenteren met shibari of touw-bondage (Japans/decoratief).",
    "Ik wil spreidstangen of positioneringstools gebruiken om mijn benen of armen open te houden.",
    "Ik wil bondage combineren met andere sensaties (teasing, ijs, impact, vibrators, etc.).",
    "Ik wil dat we altijd een veilige schaar of EMT-schaar binnen handbereik hebben.",
    "Ik wil tijdens bondage regelmatig gecheckt worden op tintelingen, kou of verkleuring van ledematen.",
    "Ik wil beginnen met eenvoudige restrictie en langzaam opbouwen naar meer complexe bondage.",
    "Ik wil afspraken maken over hoe strak iets mag zitten en hoe ik dat aangeef.",
    "Ik vind het spannend om volledig bewegingsloos gemaakt te worden (mummificatie of strakke fixatie).",
    "Ik wil leren hoe ik zelf veilige knopen leg en losmaak.",
    "Ik wil na afloop extra nazorg voor mijn gewrichten en spieren (massage, rekken, warmte).",
    "Ik wil bondage gebruiken als onderdeel van een langere power-exchange of controle-dynamiek.",
    "Ik wil experimenteren met ondergrondse bondage (floor work) of staande/hangende posities.",
    "Ik wil verschillende materialen uitproberen (leer, kettingen, tape, rubber, etc.).",
    "Ik wil dat mijn partner mij tijdens bondage complimenteert, vernedert of commandeert (afhankelijk van eerdere afspraken).",
    "Ik wil een signaal afspreken voor wanneer ik meer spanning of juist meer ruimte wil.",
    "Ik wil bondage alleen doen als we allebei nuchter zijn en goed uitgerust.",
    "Ik wil foto's of video maken van de bondage (alleen met expliciete voorafgaande toestemming).",
    "Ik wil experimenteren met zelf-bondage of partner-bondage via instructies.",
    "Ik vind het belangrijk dat we een 'escape plan' hebben voor onverwachte situaties (bijv. kramp, paniek, brandalarm).",
    "Ik wil de esthetiek en het visuele aspect van bondage belangrijk vinden."
  ],
  [
    "Ik wil een safeword of stop-systeem specifiek voor impact en sensatie (bijv. traffic light: groen/geel/rood).",
    "Ik wil vooraf afspreken welke lichaamsdelen wel en niet geraakt mogen worden.",
    "Ik wil langzaam opbouwen in intensiteit en regelmatig gecheckt worden tijdens het spel.",
    "Ik vind het fijn om impact en sensatie te combineren met bondage of machtsdynamiek.",
    "Ik wil experimenteren met verschillende soorten pijn (scherp, dof, brandend, stekend).",
    "Ik wil aftercare afspreken die specifiek gericht is op impact-plekken (koelen, masseren, verzorgen).",
    "Ik wil spelen met sensatie zonder pijn, zoals strelen met verschillende materialen (veren, leer, etc.).",
    "Ik wil dat we een signaal afspreken om de intensiteit te verhogen, verlagen of pauzeren.",
    "Ik wil geen blijvende sporen, maar tijdelijke rode plekken zijn oké.",
    "Ik wil vooraf testen hoe mijn huid reageert op bepaalde toys of technieken.",
    "Ik ben benieuwd naar elektrische stimulatie (TENS-unit of violet wand).",
    "Ik wil spelen met ademhalingscontrole of lichte verstikking (breath play) binnen veilige grenzen.",
    "Ik vind het spannend om vastgehouden of vastgepind te worden tijdens impact.",
    "Ik wil caning, spanking of flogging op specifieke zones (billen, dijen, rug, voetzolen).",
    "Ik wil sensatie spelen met krabben, haar trekken of drukpunten.",
    "Ik wil dat mijn partner mij vertelt wat hij/zij gaat doen vlak voordat het gebeurt (of juist verrassen).",
    "Ik wil verschillende intensiteitsniveaus uitproberen en die vooraf een cijfer geven (1-10).",
    "Ik wil impact als voorspel of als opbouw naar seks.",
    "Ik wil afspraken over hoe vaak en hoe hard er geslagen mag worden per zone.",
    "Ik vind het belangrijk om na afloop de impact-plekken te inspecteren samen."
  ],
  [
    "Ik wil vooraf bespreken welke fetisjen of esthetische elementen mij opwinden en welke een no-go zijn.",
    "Ik heb interesse in specifieke fetisjen zoals feet play, nylon, high heels, handschoenen of haarfetish.",
    "Ik wil crossdressing, feminisering of masculinisering verkennen binnen rollenspel.",
    "Ik wil collars dragen (of mijn partner een collar geven) als symbool van dynamiek.",
    "Ik wil dat we duidelijke afspraken maken over make-up, nagels, pruiken of tijdelijke tattoos.",
    "Ik wil lichaamsverzorging of shaving als onderdeel van de voorbereiding op de fetish-look.",
    "Ik wil dat fetish-kleding en accessoires altijd makkelijk uit te trekken zijn in noodgevallen.",
    "Ik wil vooraf checken op allergieën of huidreacties op materialen (latex, leer, etc.).",
    "Ik vind het belangrijk dat de esthetiek en fetish-elementen voor ons allebei plezierig blijven.",
    "Ik wil na afloop samen de outfits opruimen en verzorgen.",
    "Ik wil spelen met volledige encasement (latex catsuit, zentai, etc.).",
    "Ik wil objectificatie of human furniture als esthetisch/fetish element.",
    "Ik wil dat mijn partner mij aankleedt, uitkleedt of inspecteert als ritueel.",
    "Ik wil mirror play: mezelf of ons samen bekijken in de spiegel tijdens fetish-kleding.",
    "Ik wil specifieke geuren (parfum, leer, latex polish) gebruiken als trigger.",
    "Ik wil dat we een 'fetish-outfit' van tevoren samen uitzoeken of bestellen.",
    "Ik wil esthetische bondage of decorative rope als visueel element.",
    "Ik wil dat we afspraken maken over hoe publiek of privé de fetish-elementen mogen zijn (foto's, video, etc.).",
    "Ik wil dat comfort en mobiliteit altijd zwaarder wegen dan hoe 'perfect' iets eruitziet.",
    "Ik wil experimenteren met verschillende stijlen (gothic, military, bimbo, puppy, etc.)."
  ],
  [
    "Ik wil rimming (anilingus) geven of ontvangen.",
    "Ik wil prostaatstimulatie (P-spot) verkennen.",
    "Ik wil langzaam opbouwen met kleinere toys voordat we grotere dingen proberen.",
    "Ik wil dat we altijd veel glijmiddel gebruiken en regelmatig bijsmeren.",
    "Ik wil vooraf een hygiëne-routine afspreken (douchen, eventueel spoelen).",
    "Ik wil dat we verschillende posities uitproberen en kijken wat voor mij het prettigst voelt.",
    "Ik wil dat penetratie altijd op mijn tempo gebeurt en ik het initiatief kan nemen.",
    "Ik wil dat we stoppen en pauzeren zodra het oncomfortabel voelt, zonder vragen.",
    "Ik wil na afloop extra nazorg voor het anale gebied (reinigen, hydrateren, rust).",
    "Ik wil duidelijke afspraken over het gebruik van condooms bij anaal contact.",
    "Ik wil anaal spelen combineren met clitorale/vaginale stimulatie of andere sensaties.",
    "Ik wil een butt plug dragen als voorbereiding of als onderdeel van voorspel.",
    "Ik wil experimenteren met verschillende soorten toys (gebogen, vibrerend, etc.).",
    "Ik wil dat mijn partner mij ontspanningsoefeningen of ademhalingstechnieken geeft.",
    "Ik wil dat we een signaal of woord afspreken specifiek voor anaal ongemak.",
    "Ik wil anaal alleen doen als ik ontspannen en opgewonden ben.",
    "Ik wil geen dubbele penetratie of grote objecten zonder uitgebreide voorbereiding.",
    "Ik wil dat we na anaal contact niet direct overstappen op vaginale penetratie.",
    "Ik wil dat we de diepte en snelheid langzaam opbouwen en regelmatig checken.",
    "Ik vind het belangrijk dat anaal niet verplicht voelt en altijd een optie blijft, geen must."
  ],
  [
    "Ik wil orale seks geven en daarbij mijn tempo en diepte zelf bepalen.",
    "Ik wil dat mijn partner mijn hoofd vasthoudt of licht neukt tijdens orale seks (face fucking).",
    "Ik wil 69 positie proberen.",
    "Ik wil diep in mijn keel nemen (deepthroat) en dit rustig opbouwen.",
    "Ik wil ejaculatie in mijn mond en slikken als ik dat zelf wil.",
    "Ik wil mijn eigen vocht (squirting) verkennen of dat van mijn partner.",
    "Ik wil vooraf afspreken of speeksel, sperma of andere lichaamsvloeistoffen op mijn lichaam of gezicht mogen komen.",
    "Ik wil goede hygiëne (douchen, tanden poetsen, etc.) als voorwaarde voor orale seks.",
    "Ik wil dat orale seks meteen stopt bij kokhalzen, ongemak of pijn.",
    "Ik wil na orale seks samen spoelen of tanden poetsen voordat we verder zoenen.",
    "Ik wil orale seks ontvangen terwijl ik vastgebonden, geblinddoekt of in een andere dynamiek zit.",
    "Ik wil rimming (anilingus) geven of ontvangen.",
    "Ik wil dat mijn partner mij vertelt hoe lekker ik smaakt of eruitzie tijdens orale seks.",
    "Ik wil meerdere rondes orale seks, ook na ejaculatie (cum cleanup).",
    "Ik wil afspreken hoe ruw of zacht orale seks mag zijn.",
    "Ik wil dat we dental dams of andere bescherming gebruiken bij rimming.",
    "Ik vind het spannend om sperma van mijn partner te delen via zoenen (snowballing).",
    "Ik wil dat orale seks een groot deel van het voorspel of de hele sessie is.",
    "Ik wil duidelijke afspraken over gezichts- en haarcontact bij ejaculatie.",
    "Ik wil na afloop nazorg zoals water drinken, knuffelen of mond spoelen."
  ],
  [
    "Ik wil dat alle toys altijd grondig schoongemaakt worden voor en na gebruik.",
    "Ik wil samen nieuwe toys uitkiezen en online of in de winkel bespreken.",
    "Ik wil toys gebruiken in combinatie met bondage, impact of machtsdynamiek.",
    "Ik wil app-gestuurde of afstandsbedienbare toys proberen (met duidelijke afspraken over controle).",
    "Ik wil cock rings, suction toys, prostate massagers of andere gerichte toys verkennen.",
    "Ik wil dat we een veilige opbergplek afspreken voor alle toys (hygiëne en discretie).",
    "Ik wil nipple clamps, ball stretchers of andere klemmen rustig uitproberen.",
    "Ik wil dat we een maximum tijdsduur afspreken voor toys die gedragen worden (plugs, chastity, etc.).",
    "Ik wil nieuwe toys eerst solo testen voordat we ze samen gebruiken.",
    "Ik wil dat we een 'toy safe word' of signaal afspreken specifiek voor wanneer een toy niet goed voelt.",
    "Ik wil realistische dildo's, sleeves of masturbators uitproberen.",
    "Ik wil toys gebruiken voor edging, orgasm control of denial.",
    "Ik wil verschillende soorten glijmiddel testen per toy (waterbasis, siliconen, etc.).",
    "Ik wil dat we een inventaris of lijst bijhouden van onze toys met notities over gevoelens.",
    "Ik wil wanddildo's, fucking machines of andere handsfree opties overwegen (alleen met ervaring).",
    "Ik wil dat toys nooit gedeeld worden zonder nieuwe bescherming of grondige reiniging.",
    "Ik wil temperatuur-speelgoed (warm/koud) combineren met andere sensaties.",
    "Ik wil dat we na gebruik altijd controleren op irritatie of blessures.",
    "Ik wil rituelen rond toys, zoals mijn partner mij een plug inbrengt als voorbereiding.",
    "Ik wil dat comfort en plezier altijd boven de 'coole factor' van een toy gaan."
  ],
  [
    "Ik wil vooraf duidelijke regels afspreken over wat wel en niet mag bij meerdere personen.",
    "Ik wil dat we van tevoren een safeword of stop-systeem afspreken dat voor iedereen geldt.",
    "Ik wil dat we na afloop samen de ervaring nabespreken (inclusief gevoelens en jaloezie).",
    "Ik wil dat alle deelnemers vooraf expliciet consent geven en op de hoogte zijn van grenzen.",
    "Ik wil dat we alleen meer personen uitnodigen als we ons allebei comfortabel en opgewonden voelen.",
    "Ik wil afspraken over foto's, video's of opnames bij meerdere personen.",
    "Ik wil dat penetratie, orale seks of aanrakingen door anderen alleen gebeuren met expliciete toestemming op dat moment.",
    "Ik wil dat we een 'check-in-moment' inbouwen tijdens de ervaring.",
    "Ik wil dat we van tevoren afspreken hoe we omgaan met jaloezie of ongemakkelijke gevoelens.",
    "Ik wil dat iedereen betrokken is bij het kiezen van de extra persoon/personen.",
    "Ik ben meer geïnteresseerd in kijken dan zelf meedoen met meerdere personen.",
    "Ik wil experimenteren met een trio waarin ik centraal sta (MMF of FFM).",
    "Ik wil dat mijn vaste partner altijd de belangrijkste rol houdt, ook bij meerdere personen.",
    "Ik wil vooraf afspreken welke seksuele handelingen voorbehouden blijven aan ons twee.",
    "Ik vind het spannend om meerdere mensen tegelijk te plezieren.",
    "Ik wil duidelijke afspraken over hygiëne, douchen en volgorde van activiteiten.",
    "Ik wil dat we een plan hebben voor als een van ons zich tijdens de ervaring wil terugtrekken.",
    "Ik wil dat alle extra personen getest zijn op SOA’s en dat we recente testresultaten delen.",
    "Ik ben nieuwsgierig naar een orgie of grotere groep, maar alleen in een veilige, gecontroleerde setting.",
    "Ik wil dat de focus ligt op plezier voor iedereen, niet op presteren."
  ],
  [
    "Ik wil duidelijke afspraken over soft swap (alleen kijken, aanraken, orale seks) versus full swap (volledige penetratie).",
    "Ik wil dat we altijd samen naar een swingersclub of date gaan en samen beslissen wat er gebeurt.",
    "Ik wil vooraf SOA-testen en recente testresultaten verplicht stellen voor contact met anderen.",
    "Ik wil dat we een veto-recht hebben: als een van ons zich niet comfortabel voelt, gaat het niet door.",
    "Ik wil regelmatig (bijv. maandelijks) een 'relatie-check' doen over hoe de open relatie voelt.",
    "Ik wil dat alle dates, chats of ontmoetingen transparant zijn en we elkaar hierover vertellen.",
    "Ik wil afspraken over bescherming (condooms, PrEP, etc.) bij elke vorm van contact met anderen.",
    "Ik wil dat we na een ervaring altijd samen de nacht afsluiten en nabespreken.",
    "Ik wil dat onze primaire relatie altijd prioriteit heeft boven ervaringen met anderen.",
    "Ik wil duidelijke grenzen over verliefd worden of emotionele connecties met anderen.",
    "Ik wil dat we samen profielen aanmaken op dating-apps of swingersplatforms.",
    "Ik wil dat we eerst meerdere keren alleen kijken en praten voordat we meedoen.",
    "Ik wil afspraken over hoe we omgaan met afwijzingen of teleurstellingen bij anderen.",
    "Ik wil dat we een 'cool-off periode' kunnen inlassen als iets te intens voelt.",
    "Ik wil dat privacy en discretie ook geldt tegenover vrienden, familie en collega's.",
    "Ik wil experimenteren met alleen dates voor één van ons, mits we dit van tevoren afspreken.",
    "Ik vind het belangrijk dat we complimenten en positieve ervaringen ook delen.",
    "Ik wil dat we duidelijke afspraken maken over herhaling met dezelfde personen.",
    "Ik wil dat we een noodplan hebben als iemand zich onveilig of oncomfortabel voelt.",
    "Ik wil dat we de regels regelmatig evalueren en mogen aanpassen."
  ],
  [
    "Ik wil vooraf duidelijke grenzen afspreken over wat wel en niet mag in semi-publieke situaties.",
    "Ik wil dat we altijd discreet blijven en anderen nooit bewust blootstellen aan onze seksuele activiteiten.",
    "Ik wil experimenteren met seks in verschillende kamers van het huis (keuken, douche, balkon, etc.).",
    "Ik wil auto-seks of seks in de auto proberen op rustige locaties.",
    "Ik wil buiten seks hebben in de natuur, maar alleen op afgelegen plekken.",
    "Ik wil dat we een signaal of codewoord afspreken om meteen te stoppen bij risico.",
    "Ik wil na publieke of risicovolle seks altijd samen een veilige plek opzoeken voor aftercare.",
    "Ik wil dat we vooraf checken of een locatie echt veilig en privé genoeg is.",
    "Ik wil het spannend vinden om gefluisterde opdrachten of teasing te krijgen op publieke plekken.",
    "Ik wil dat publieke spelletjes altijd eindigen voordat we naar huis gaan, tenzij we allebei anders afspreken.",
    "Ik wil roleplay doen waarbij we doen alsof we vreemden zijn op een openbare plek.",
    "Ik wil lichte publieke spelletjes zoals geen ondergoed dragen, buttplug of vibrator op afstandsbediening.",
    "Ik wil afspraken over hoe ver we mogen gaan in een bioscoop, restaurant, park of lift.",
    "Ik wil dat we foto's of filmpjes maken op spannende locaties (alleen met expliciete toestemming).",
    "Ik wil dat we een balans vinden tussen spanning en echte veiligheid.",
    "Ik wil dat we nooit publieke seks doen op plekken waar kinderen, families of onschuldige mensen in de buurt zijn.",
    "Ik wil dat we een noodplan hebben (bijv. een deken, extra kleding, snel kunnen stoppen).",
    "Ik wil achteraf altijd bespreken wat lekker was en wat we nooit meer doen.",
    "Ik wil dat de focus ligt op de spanning en connectie, niet op het zo extreem mogelijk maken.",
    "Ik wil dat publieke activiteiten alleen gebeuren als we ons allebei ontspannen en opgewonden voelen."
  ],
  [
    "Ik wil dat alle gemaakte foto's en video's alleen op een beveiligd apparaat of versleutelde cloud staan.",
    "Ik wil vooraf expliciet afspreken welke lichaamsdelen of handelingen wel of niet gefilmd/fotografeerd mogen worden.",
    "Ik wil dat we een 'delete request' altijd onmiddellijk en zonder discussie uitvoeren.",
    "Ik wil duidelijke afspraken over wat er met de beelden gebeurt als de relatie eindigt.",
    "Ik wil geen live streaming of videobellen met seksuele inhoud, tenzij we dit expliciet afspreken.",
    "Ik wil dat we altijd toestemming vragen vlak voordat we een foto of video maken.",
    "Ik wil dat beelden nooit gebruikt worden om iemand onder druk te zetten of te chanteren.",
    "Ik wil dat we regelmatig samen de opgeslagen beelden doornemen en ongewenste verwijderen.",
    "Ik wil dat gezicht, tatoeages of andere herkenbare kenmerken standaard onherkenbaar gemaakt worden.",
    "Ik wil dat we geen AI-tools of deepfakes gebruiken op elkaars beelden.",
    "Ik wil dat we een apart, beveiligd mapje of app gebruiken voor al onze intieme media.",
    "Ik wil dat we afspreken hoe lang we beelden bewaren en wanneer we ze verwijderen.",
    "Ik wil dat het maken van foto's/video's altijd ondergeschikt blijft aan het plezier op dat moment.",
    "Ik vind het spannend om foto's te maken tijdens bondage, impact of fetish-kleding.",
    "Ik wil duidelijke afspraken over sexting en het versturen van foto's tijdens het chatten.",
    "Ik wil dat we een safeword hebben dat ook geldt voor het stoppen van het maken van beelden.",
    "Ik wil dat alle betrokkenen (bij meerdere personen) expliciet toestemming geven voor beelden.",
    "Ik wil dat we geen beelden maken in publieke of semi-publieke situaties.",
    "Ik wil dat we na afloop samen bekijken wat we gemaakt hebben en wat we bewaren.",
    "Ik wil dat privacy en vertrouwen altijd zwaarder wegen dan het maken van mooie beelden."
  ],
  [
    "Ik wil dat we altijd voldoende water, elektrolyten en snacks bij de hand hebben tijdens langere sessies.",
    "Ik wil vooraf checken op medicijninteracties of gezondheidsrisico’s bij het gebruik van middelen.",
    "Ik wil dat we onze energieniveau en mentale staat eerlijk delen voordat we beginnen.",
    "Ik wil dat alcohol of drugs nooit een vereiste zijn voor seksuele of kinky activiteiten.",
    "Ik wil poppers, cannabis, edibles of andere middelen alleen gebruiken met duidelijke afspraken en dosering.",
    "Ik wil dat we een maximum hoeveelheid alcohol/drugs afspreken per sessie.",
    "Ik wil dat we pauzes inbouwen om te hydrateren, te eten en te rusten.",
    "Ik wil dat we rekening houden met mijn menstruatiecyclus, vermoeidheid of stressniveau bij planning.",
    "Ik wil dat middelen nooit gebruikt worden om grenzen te pushen of consent te beïnvloeden.",
    "Ik wil na intensieve sessies extra aandacht voor herstel (slaap, voeding, rust).",
    "Ik wil dat we een 'sober first' regel hanteren bij nieuwe activiteiten.",
    "Ik wil supplementen zoals magnesium, L-arginine of libido-boosters alleen na overleg gebruiken.",
    "Ik wil dat we afspraken maken over roken/vapen (nicotine, cannabis) voor of tijdens spel.",
    "Ik wil dat we een noodplan hebben bij overmatig gebruik of een bad trip.",
    "Ik wil dat we onze dagelijkse energiepatronen (ochtendmens vs avondmens) respecteren.",
    "Ik wil dat we na gebruik van middelen altijd een duidelijke aftercare-fase inbouwen.",
    "Ik wil dat we eerlijk zijn over eventuele verslavingen, medicatie of chronische klachten.",
    "Ik vind het belangrijk dat goede seks ook zonder hulpmiddelen mogelijk en gewaardeerd is.",
    "Ik wil dat we een 'reset-dag' inplannen na een sessie met middelen.",
    "Ik wil dat we de combinatie van vermoeidheid + middelen vermijden."
  ],
  [
    "Ik wil specifieke aftercare die bij mij past (bijv. knuffelen, deken, iets zoets, stilte, praten, etc.).",
    "Ik wil dat we ook aandacht hebben voor mogelijke subdrop of domdrop, zelfs uren/dagen later.",
    "Ik wil een duidelijke aftercare-routine afspreken die we na elke sessie volgen.",
    "Ik wil dat we na afloop samen de ruimte opruimen en toys schoonmaken als ritueel.",
    "Ik wil een 'debriefing' doen: wat was goed, wat minder, wat willen we volgende keer anders?",
    "Ik wil dat we een noodplan hebben voor als iemand zich fysiek of emotioneel niet goed voelt.",
    "Ik wil dat we altijd een safeword en stop-systeem hebben dat ook buiten het spel om gerespecteerd wordt.",
    "Ik wil dat we rekening houden met mogelijke blauwe plekken, spierpijn of kleine blessures na afloop.",
    "Ik wil dat nazorg niet alleen direct na afloop gebeurt, maar ook de dagen erna.",
    "Ik wil dat we elkaars grenzen en triggers regelmatig evalueren en updaten.",
    "Ik wil dat we een 'aftercare kit' klaarzetten met water, snacks, crème, pleisters, etc.",
    "Ik wil dat mijn partner mij niet alleen laat direct na intens spel, tenzij we dat expliciet afspreken.",
    "Ik wil afspraken over hoe we omgaan met drop (emotionele crash) in de dagen na een sessie.",
    "Ik wil dat we een codewoord hebben voor 'ik heb nu extra nazorg nodig'.",
    "Ik wil dat we na een sessie geen belangrijke beslissingen nemen over onze relatie.",
    "Ik wil dat we fysieke nazorg combineren met emotionele check-ins (bijv. 'hoe voel je je nu op een schaal van 1-10?').",
    "Ik wil dat we afspraken maken over aftercare bij meerdere personen of met anderen.",
    "Ik wil dat veiligheid en nazorg altijd prioriteit hebben boven het 'afmaken' van een scène.",
    "Ik wil dat we een logboek of notities bijhouden over wat goed werkte qua nazorg.",
    "Ik vind het belangrijk dat nazorg ook geldt als een sessie niet doorgaat of vroegtijdig stopt."
  ]
];

const expandedQuestionTranslations = {
  nl: expandedQuestionGroups,
  en: [
  [
    "I want to clearly discuss my hard limits and soft limits in advance.",
    "I want to make agreements about aftercare – what I need and what I can provide.",
    "I want to share my triggers or trauma-related things in advance (if relevant).",
    "I want clear agreements about protection / safe sex (condoms, PrEP, test status, etc.).",
    "I want to agree on non-verbal stop signs for when talking is difficult (e.g. three taps, open hand, etc.).",
    "I think it is important that 'no', 'stop' and 'not now' are always immediately respected, even without a safe word.",
    "I want to agree in advance how we will deal with unexpected emotional reactions.",
    "I want us to do a quick check-in after a certain time (e.g. after 30/60 minutes), even if everything goes well.",
    "I would like to discuss in advance whether photos, videos or audio recordings may be taken and how they will be stored.",
    "I also want us to do a physical check afterwards (e.g. bruises, pain, etc.).",
    "I need a 'traffic light system' (green = continue, yellow = slow/adjust, red = stop).",
    "I want us to agree in advance who is responsible for hygiene and cleaning.",
    "I want clarity about how we deal with unforeseen situations (e.g. someone suddenly doesn't feel well).",
    "I want us to agree on how we communicate when one of us is drunk or high.",
    "I think it is important that we check each other's energy level and mental state in advance.",
    "I want to do a short 'intention check' per session: what do I want to feel/experience today?",
    "I want us to evaluate afterwards what we want to do differently or the same next time.",
    "I want compliments and positive feedback to be encouraged during and after the game.",
    "I would like to agree that we will not introduce new activities without prior permission.",
    "I want us to make clear agreements about approximately how long a session lasts."
  ],
  [
    "I want to experiment with a clear hierarchy or owner/animal dynamic.",
    "I like to have rules and structure during a session.",
    "I want to play with punishments and rewards as part of the dynamic.",
    "I want my partner to guide or command me during the game.",
    "I want to experiment with bondage or restriction of movement within the power dynamic.",
    "I'm curious about impact play (hitting, spanking, whipping) in combination with dominance/submission.",
    "I want my partner to control my orgasms (edging, denial, ruined orgasms, etc.).",
    "I find it exciting to do chores or domestic service for my partner.",
    "I want to agree on how 'playful' versus 'serious' the power dynamic should be.",
    "I want the ability to temporarily drop into a 'drop' or aftercare role if the dynamic gets too intense.",
    "I am interested in pet play, age play or role play within a dynamic.",
    "I want to play with sensation and sensory deprivation (blindfold, earplugs, etc.).",
    "I want my partner to 'use' me for his/her pleasure within agreed limits.",
    "I find it exciting to be ignored or disregarded as a form of power play.",
    "I want to agree on clear signals for when the dynamics can become more intense or softer.",
    "I want to experiment with long-term power dynamics (e.g. an entire evening or weekend).",
    "I want my partner to dominate me physically (hold, move, tie up).",
    "I'm curious about verbal dominance (commanding, ordering, degradation).",
    "I want us to conclude the dynamic clearly afterwards (e.g. with a ritual or hug).",
    "I think it is important that power dynamics are always practiced voluntarily and with pleasure."
  ],
  [
    "I want to experiment with shibari or rope bondage (Japanese/decorative).",
    "I want to use spreader bars or positioning tools to keep my legs or arms open.",
    "I want to combine bondage with other sensations (teasing, ice, impact, vibrators, etc.).",
    "I want us to always have a pair of safe scissors or EMT scissors within reach.",
    "I want to be regularly checked during bondage for tingling, cold or discoloration of limbs.",
    "I want to start with simple restraint and slowly build up to more complex bondage.",
    "I want to make agreements about how tight something can be and how I indicate this.",
    "I find it exciting to be made completely motionless (mummification or tight fixation).",
    "I want to learn how to tie and untie safe knots myself.",
    "I want extra aftercare for my joints and muscles afterwards (massage, stretching, heat).",
    "I want to use bondage as part of a longer power exchange or control dynamic.",
    "I want to experiment with underground bondage (floor work) or standing/hanging positions.",
    "I want to try different materials (leather, chains, tape, rubber, etc.).",
    "I want my partner to compliment, humiliate or command me during bondage (depending on previous agreements).",
    "I want to agree on a signal for when I want more tension or more space.",
    "I only want to do bondage when we are both sober and well rested.",
    "I want to take photos or video of the bondage (only with explicit prior consent).",
    "I want to experiment with self-bondage or partner bondage via instructions.",
    "I think it is important that we have an 'escape plan' for unexpected situations (e.g. cramps, panic, fire alarm).",
    "I want to consider the aesthetics and visual aspect of bondage important."
  ],
  [
    "I want a safe word or stop system specifically for impact and sensation (e.g. traffic light: green/yellow/red).",
    "I want to agree in advance which parts of the body may and may not be touched.",
    "I want to slowly build up the intensity and be checked regularly during the game.",
    "I like to combine impact and sensation with bondage or power dynamics.",
    "I want to experiment with different types of pain (sharp, dull, burning, stabbing).",
    "I want to arrange aftercare that is specifically aimed at impact areas (cooling, massaging, care).",
    "I want to play with sensation without pain, such as caressing with different materials (feathers, leather, etc.).",
    "I want us to agree on a signal to increase, decrease or pause the intensity.",
    "I don't want permanent marks, but temporary red marks are okay.",
    "I want to test in advance how my skin reacts to certain toys or techniques.",
    "I am curious about electrical stimulation (TENS unit or violet wand).",
    "I want to play with breath control or light choking (breath play) within safe limits.",
    "I find it exciting to be held or pinned during impact.",
    "I want caning, spanking or flogging on specific areas (buttocks, thighs, back, soles).",
    "I want to play sensation with scratching, hair pulling or pressure points.",
    "I want my partner to tell me what he/she is going to do right before it happens (or surprise it).",
    "I want to try different intensity levels and rate them in advance (1-10).",
    "I want impact as foreplay or as a build-up to sex.",
    "I want agreements on how often and how hard hitting is allowed per zone.",
    "I think it is important to inspect the impact areas together afterwards."
  ],
  [
    "I want to discuss in advance which fetishes or aesthetic elements turn me on and which are a no-go.",
    "I am interested in specific fetishes such as feet play, nylon, high heels, gloves or hair fetish.",
    "I want to explore crossdressing, feminization or masculinization within roleplay.",
    "I want to wear collars (or give my partner a collar) as a symbol of dynamism.",
    "I want us to make clear agreements about make-up, nails, wigs or temporary tattoos.",
    "I want body care or shaving as part of the preparation for the fetish look.",
    "I want fetish clothing and accessories to always be easy to remove in case of emergency.",
    "I want to check in advance for allergies or skin reactions to materials (latex, leather, etc.).",
    "I think it's important that the aesthetics and fetish elements remain enjoyable for both of us.",
    "I want to clean up and take care of the outfits together afterwards.",
    "I want to play with full encasement (latex catsuit, zentai, etc.).",
    "I want objectification or human furniture as an aesthetic/fetish element.",
    "I want my partner to dress, undress or inspect me as a ritual.",
    "I want mirror play: looking at myself or us together in the mirror while wearing fetish clothing.",
    "I want to use specific scents (perfume, leather, latex polish) as a trigger.",
    "I want us to select or order a 'fetish outfit' together in advance.",
    "I want aesthetic bondage or decorative rope as a visual element.",
    "I want us to agree on how public or private the fetish elements can be (photos, video, etc.).",
    "I always want comfort and mobility to outweigh how “perfect” something looks.",
    "I want to experiment with different styles (gothic, military, bimbo, puppy, etc.)."
  ],
  [
    "I want to give or receive rimming (anilingus).",
    "I want to explore prostate stimulation (P-spot).",
    "I want to build up slowly with smaller toys before we try bigger things.",
    "I want us to always use a lot of lube and reapply regularly.",
    "I want to agree on a hygiene routine in advance (shower, rinse if necessary).",
    "I want us to try different positions and see what feels most comfortable for me.",
    "I want penetration to always happen at my pace and I can take the initiative.",
    "I want us to stop and pause whenever it feels uncomfortable, no questions asked.",
    "I want extra aftercare for the anal area afterwards (cleansing, moisturizing, rest).",
    "I want clear agreements about the use of condoms during anal contact.",
    "I want to combine anal play with clitoral/vaginal stimulation or other sensations.",
    "I want to wear a butt plug in preparation or as part of foreplay.",
    "I want to experiment with different types of toys (curved, vibrating, etc.).",
    "I want my partner to give me relaxation exercises or breathing techniques.",
    "I want us to agree on a signal or word specifically for anal discomfort.",
    "I only want to do anal when I'm relaxed and excited.",
    "I don't want double penetration or large objects without extensive preparation.",
    "I don't want us to immediately switch to vaginal penetration after anal contact.",
    "I want us to build up the depth and speed slowly and check regularly.",
    "I think it is important that anal does not feel obligatory and always remains an option, not a must."
  ],
  [
    "I want to give oral sex and determine my own pace and depth.",
    "I want my partner to hold my head or lightly fuck me during oral sex (face fucking).",
    "I want to try 69 position.",
    "I want to take it deep into my throat (deepthroat) and build this up slowly.",
    "I want to ejaculate in my mouth and swallow if I want.",
    "I want to explore my own fluid (squirting) or that of my partner.",
    "I would like to agree in advance whether saliva, semen or other bodily fluids may come onto my body or face.",
    "I want good hygiene (showering, brushing teeth, etc.) as a prerequisite for oral sex.",
    "I want oral sex to stop immediately if gagging, discomfort or pain occurs.",
    "I want to rinse or brush my teeth after oral sex before we continue kissing.",
    "I want to receive oral sex while tied up, blindfolded, or in some other dynamic.",
    "I want to give or receive rimming (anilingus).",
    "I want my partner to tell me how good I taste or look during oral sex.",
    "I want multiple rounds of oral sex, including after ejaculation (cum cleanup).",
    "I want to agree on how rough or soft oral sex can be.",
    "I want us to use dental dams or other protection when rimming.",
    "I find it exciting to share my partner's sperm through kissing (snowballing).",
    "I want oral sex to be a big part of foreplay or the entire session.",
    "I want clear agreements about facial and hair contact during ejaculation.",
    "I want aftercare afterwards, such as drinking water, cuddling or rinsing my mouth."
  ],
  [
    "I always want all toys to be thoroughly cleaned before and after use.",
    "I want to choose new toys together and discuss them online or in the store.",
    "I want to use toys in combination with bondage, impact or power dynamics.",
    "I want to try app-controlled or remote-controlled toys (with clear agreements about control).",
    "I want to explore cock rings, suction toys, prostate massagers or other targeted toys.",
    "I want us to agree on a safe storage location for all toys (hygiene and discretion).",
    "I want to try out nipple clamps, ball stretchers or other clamps quietly.",
    "I want us to agree on a maximum amount of time for toys to be worn (plugs, chastity, etc.).",
    "I want to test new toys solo first before we use them together.",
    "I want us to agree on a 'toy safe word' or signal specifically for when a toy does not feel right.",
    "I want to try realistic dildos, sleeves or masturbators.",
    "I want to use toys for edging, orgasm control or denial.",
    "I want to test different types of lubricant per toy (water-based, silicone, etc.).",
    "I want us to keep an inventory or list of our toys with notes about feelings.",
    "I want to consider wand dildos, fucking machines or other hands-free options (only with experience).",
    "I never want toys to be shared without new protection or thorough cleaning.",
    "I want to combine temperature toys (hot/cold) with other sensations.",
    "I want us to always check for irritation or injuries after use.",
    "I want rituals around toys, like my partner inserting a plug into me in preparation.",
    "I always want comfort and fun to come before the 'cool factor' of a toy."
  ],
  [
    "I want to agree on clear rules in advance about what is and is not allowed for multiple people.",
    "I want us to agree in advance on a safe word or stop system that applies to everyone.",
    "I want us to discuss the experience together afterwards (including feelings and jealousy).",
    "I want all participants to give explicit consent in advance and to be aware of limits.",
    "I want us to invite more people only if we both feel comfortable and excited.",
    "I want agreements about photos, videos or recordings with multiple people.",
    "I want penetration, oral sex or touching by others to only happen with explicit consent at that moment.",
    "I want us to build a 'check-in moment' into the experience.",
    "I want us to agree in advance how to deal with jealousy or uncomfortable feelings.",
    "I want everyone to be involved in choosing the additional person(s).",
    "I'm more interested in watching than participating with several people.",
    "I want to experiment with a threesome in which I am the center (MMF or FFM).",
    "I want my permanent partner to always have the most important role, even with several people.",
    "I want to agree in advance which sexual acts will be reserved for the two of us.",
    "I find it exciting to please several people at the same time.",
    "I want clear agreements about hygiene, showering and order of activities.",
    "I want us to have a plan in place if either of us wants to withdraw during the experience.",
    "I want all additional people to be tested for STDs and for us to share recent test results.",
    "I'm curious about an orgy or larger group, but only in a safe, controlled setting.",
    "I want the focus to be on fun for everyone, not on performance."
  ],
  [
    "I want clear agreements about soft swap (only looking, touching, oral sex) versus full swap (complete penetration).",
    "I want us to always go to a swingers club or date together and decide together what happens.",
    "I want to make STD testing and recent test results mandatory before contact with others.",
    "I want us to have a veto: if one of us doesn't feel comfortable, it won't happen.",
    "I want to regularly (e.g. monthly) do a 'relationship check' about how the open relationship feels.",
    "I want all dates, chats or meetings to be transparent and we tell each other about it.",
    "I want agreements about protection (condoms, PrEP, etc.) for any form of contact with others.",
    "I always want us to end the night together after an experience and discuss it afterwards.",
    "I want our primary relationship to always take priority over experiences with others.",
    "I want clear boundaries about falling in love or emotional connections with others.",
    "I want us to create profiles together on dating apps or swingers platforms.",
    "I want us to watch and talk alone several times before joining in.",
    "I want agreements about how we deal with rejections or disappointments with others.",
    "I want us to be able to have a 'cool-off period' if something feels too intense.",
    "I want privacy and discretion to also apply to friends, family and colleagues.",
    "I want to experiment with dates only for one of us, as long as we agree in advance.",
    "I think it is important that we also share compliments and positive experiences.",
    "I want us to make clear agreements about repetition with the same people.",
    "I want us to have a contingency plan if anyone feels unsafe or uncomfortable.",
    "I want us to regularly evaluate and amend the rules."
  ],
  [
    "I want to agree on clear boundaries in advance about what is and is not allowed in semi-public situations.",
    "I want us to always remain discreet and never knowingly expose others to our sexual activities.",
    "I want to experiment with sex in different rooms of the house (kitchen, shower, balcony, etc.).",
    "I want to try car sex or sex in the car in quiet locations.",
    "I want to have sex outside in nature, but only in secluded places.",
    "I want us to agree on a signal or code word to stop immediately if there is a risk.",
    "After public or risky sex, I always want to find a safe place together for aftercare.",
    "I want us to check in advance whether a location is really safe and private enough.",
    "I want to find it exciting to receive whispered orders or teasing in public places.",
    "I always want public games to end before we go home, unless we both agree otherwise.",
    "I want to do roleplay where we pretend to be strangers in a public place.",
    "I want light public play like not wearing underwear, butt plug or remote control vibrator.",
    "I want agreements about how far we can go in a cinema, restaurant, park or elevator.",
    "I want us to take photos or videos in exciting locations (only with explicit permission).",
    "I want us to find a balance between excitement and true safety.",
    "I want us to never have public sex in places where children, families or innocent people are around.",
    "I want us to have a contingency plan (e.g. a blanket, extra clothes, being able to stop quickly).",
    "I always want to discuss afterwards what was tasty and what we will never do again.",
    "I want the focus to be on the tension and connection, not on making it as extreme as possible.",
    "I want public activities to only happen when we are both feeling relaxed and excited."
  ],
  [
    "I want all photos and videos taken to only be on a secure device or encrypted cloud.",
    "I want to explicitly agree in advance which body parts or actions may or may not be filmed/photographed.",
    "I want us to always execute a 'delete request' immediately and without discussion.",
    "I want clear agreements about what happens to the images if the relationship ends.",
    "I do not want live streaming or video calling with sexual content, unless we explicitly agree on this.",
    "I want us to always ask permission right before taking a photo or video.",
    "I never want images to be used to pressure or blackmail anyone.",
    "I want us to regularly review the saved images together and delete unwanted ones.",
    "I want face, tattoos or other recognizable features to be made unrecognizable by default.",
    "I don't want us to use AI tools or deepfakes on each other's images.",
    "I want us to use a separate, secure folder or app for all our intimate media.",
    "I want us to agree on how long we keep images and when we delete them.",
    "I want taking photos/videos to always be secondary to the pleasure of that moment.",
    "I find it exciting to take photos during bondage, impact or fetish clothing.",
    "I want clear agreements about sexting and sending photos while chatting.",
    "I want us to have a safe word that also applies to stopping the making of images.",
    "I want everyone involved (if several people) to give explicit permission for images.",
    "I want us not to make images in public or semi-public situations.",
    "Afterwards, I want us to look together at what we have made and what we are keeping.",
    "I want privacy and trust to always outweigh creating beautiful images."
  ],
  [
    "I want us to always have plenty of water, electrolytes, and snacks on hand during longer sessions.",
    "I want to check in advance for drug interactions or health risks when using substances.",
    "I want us to share our energy level and mental state honestly before we start.",
    "I want alcohol or drugs to never be a requirement for sexual or kinky activities.",
    "I only want to use poppers, cannabis, edibles or other substances with clear agreements and dosage.",
    "I want us to agree on a maximum amount of alcohol/drugs per session.",
    "I want us to build in breaks to hydrate, eat, and rest.",
    "I want us to take my menstrual cycle, fatigue or stress level into account when planning.",
    "I want resources never to be used to push boundaries or influence consent.",
    "After intensive sessions, I want extra attention for recovery (sleep, nutrition, rest).",
    "I want us to apply a 'sober first' rule to new activities.",
    "I only want to use supplements such as magnesium, L-arginine or libido boosters after consultation.",
    "I want us to make agreements about smoking/vaping (nicotine, cannabis) before or during play.",
    "I want us to have a contingency plan in case of overuse or a bad trip.",
    "I want us to respect our daily energy patterns (morning person vs. evening person).",
    "I want us to always include a clear aftercare phase after using substances.",
    "I want us to be honest about any addictions, medications or chronic complaints.",
    "I think it is important that good sex is possible and appreciated even without aids.",
    "I want us to schedule a “reset day” after a resource session.",
    "I want us to avoid the combination of fatigue + resources."
  ],
  [
    "I want specific aftercare that suits me (e.g. cuddling, blanket, something sweet, silence, talking, etc.).",
    "I want us to also pay attention to possible subdrop or domdrop, even hours/days later.",
    "I want to agree on a clear aftercare routine that we follow after each session.",
    "I want us to clean up the room together afterwards and clean toys as a ritual.",
    "I want to do a 'debriefing': what was good, what was less so, what do we want different next time?",
    "I want us to have a contingency plan for when someone is not feeling well physically or emotionally.",
    "I want us to always have a safe word and stop system that is respected outside of the game.",
    "I want us to take into account possible bruising, muscle soreness or minor injuries afterwards.",
    "I want aftercare to be done not only immediately afterwards, but also in the days afterwards.",
    "I want us to regularly evaluate and update each other's boundaries and triggers.",
    "I want us to prepare an 'aftercare kit' with water, snacks, cream, band-aids, etc.",
    "I don't want my partner to leave me alone immediately after intense play, unless we explicitly agree.",
    "I want agreements about how we deal with drop (emotional crash) in the days after a session.",
    "I want us to have a code word for 'I need extra aftercare now'.",
    "I don't want us to make any major decisions about our relationship after a session.",
    "I want us to combine physical aftercare with emotional check-ins (e.g. 'how are you feeling right now on a scale of 1-10?').",
    "I want us to make agreements about aftercare for several people or with others.",
    "I want safety and aftercare to always be a priority over \"finishing\" a scene.",
    "I want us to keep a log or notes about what worked well in terms of aftercare.",
    "I think it is important that aftercare also applies if a session is canceled or ends prematurely."
  ]
],
  fr: [
  [
    "Je souhaite discuter clairement à l’avance de mes limites strictes et de mes limites souples.",
    "Je veux conclure des accords sur le suivi – ce dont j’ai besoin et ce que je peux fournir.",
    "Je souhaite partager à l'avance mes déclencheurs ou mes éléments liés à un traumatisme (le cas échéant).",
    "Je veux des accords clairs sur la protection/les rapports sexuels protégés (préservatifs, PrEP, statut des tests, etc.).",
    "Je veux me mettre d'accord sur les panneaux d'arrêt non verbaux lorsque parler est difficile (par exemple, trois tapotements, main ouverte, etc.).",
    "Je pense qu'il est important que les « non », « stop » et « pas maintenant » soient toujours immédiatement respectés, même sans un mot de sécurité.",
    "Je souhaite convenir à l’avance de la manière dont nous gérerons les réactions émotionnelles inattendues.",
    "Je souhaite que nous fassions un enregistrement rapide après un certain temps (par exemple après 30/60 minutes), même si tout se passe bien.",
    "Je souhaite discuter à l'avance si des photos, des vidéos ou des enregistrements audio peuvent être pris et comment ils seront stockés.",
    "Je souhaite également que nous fassions un contrôle physique par la suite (par exemple des bleus, des douleurs, etc.).",
    "J'ai besoin d'un « système de feux tricolores » (vert = continuer, jaune = ralentir/ajuster, rouge = arrêter).",
    "Je veux que nous convenions à l'avance qui est responsable de l'hygiène et du nettoyage.",
    "Je veux des éclaircissements sur la façon dont nous gérons les situations imprévues (par exemple, quelqu'un ne se sent soudainement pas bien).",
    "Je veux que nous soyons d’accord sur la façon dont nous communiquons lorsque l’un de nous est ivre ou défoncé.",
    "Je pense qu'il est important que nous vérifiions à l'avance le niveau d'énergie et l'état mental de chacun.",
    "Je souhaite effectuer une courte « vérification d'intention » par séance : qu'est-ce que je veux ressentir/expérimenter aujourd'hui ?",
    "Je veux que nous évaluions ensuite ce que nous voulons faire différemment ou pareil la prochaine fois.",
    "Je veux que les compliments et les retours positifs soient encouragés pendant et après le match.",
    "J'accepte que nous n'introduisons pas de nouvelles activités sans autorisation préalable.",
    "Je veux que nous parvenions à des accords clairs sur la durée approximative d’une session."
  ],
  [
    "Je souhaite expérimenter une hiérarchie claire ou une dynamique propriétaire/animal.",
    "J'aime avoir des règles et une structure lors d'une séance.",
    "Je veux jouer avec les punitions et les récompenses dans le cadre de la dynamique.",
    "Je veux que mon partenaire me guide ou me commande pendant le jeu.",
    "Je veux expérimenter la servitude ou la restriction des mouvements dans le cadre de la dynamique du pouvoir.",
    "Je suis curieux de connaître les jeux d'impact (frapper, fesser, fouetter) en combinaison avec la domination/soumission.",
    "Je veux que mon partenaire contrôle mes orgasmes (bordure, déni, orgasmes gâchés, etc.).",
    "Je trouve passionnant de faire des tâches ménagères ou des travaux domestiques pour mon partenaire.",
    "Je veux être d’accord sur la mesure dans laquelle la dynamique du pouvoir devrait être « ludique » ou « sérieuse ».",
    "Je veux avoir la possibilité de passer temporairement à un rôle de « drop » ou de suivi si la dynamique devient trop intense.",
    "Je m'intéresse aux jeux d'animaux de compagnie, aux jeux d'âge ou aux jeux de rôle au sein d'une dynamique.",
    "Je veux jouer avec les sensations et la privation sensorielle (les yeux bandés, les bouchons d'oreilles, etc.).",
    "Je veux que mon partenaire m'utilise pour son plaisir dans des limites convenues.",
    "Je trouve excitant d’être ignoré ou ignoré comme une forme de jeu de pouvoir.",
    "Je veux me mettre d’accord sur des signaux clairs quant au moment où la dynamique peut devenir plus intense ou plus douce.",
    "Je souhaite expérimenter des dynamiques de pouvoir à long terme (par exemple une soirée ou un week-end entier).",
    "Je veux que mon partenaire me domine physiquement (tenir, bouger, attacher).",
    "Je suis curieux de connaître la domination verbale (commander, ordonner, dégradation).",
    "Je veux que nous concluions clairement la dynamique par la suite (par exemple avec un rituel ou un câlin).",
    "Je pense qu’il est important que la dynamique du pouvoir soit toujours pratiquée volontairement et avec plaisir."
  ],
  [
    "Je veux expérimenter le shibari ou le bondage par corde (japonais/décoratif).",
    "Je souhaite utiliser des barres d'écartement ou des outils de positionnement pour garder mes jambes ou mes bras ouverts.",
    "Je souhaite combiner le bondage avec d'autres sensations (teases, glace, impact, vibrateurs, etc.).",
    "Je veux que nous ayons toujours une paire de ciseaux sûrs ou des ciseaux EMT à portée de main.",
    "Je souhaite être régulièrement contrôlé pendant le bondage pour déceler des picotements, du froid ou une décoloration des membres.",
    "Je veux commencer par une simple contention et évoluer lentement vers un bondage plus complexe.",
    "Je veux parvenir à des accords sur la façon dont quelque chose peut être serré et comment je l'indique.",
    "Je trouve excitant d'être rendu complètement immobile (momification ou fixation serrée).",
    "Je veux apprendre à nouer et dénouer moi-même des nœuds sûrs.",
    "Je souhaite ensuite un suivi supplémentaire pour mes articulations et mes muscles (massage, étirements, chaleur).",
    "Je souhaite utiliser le bondage dans le cadre d’un échange de pouvoir ou d’une dynamique de contrôle plus long.",
    "Je souhaite expérimenter le bondage souterrain (travail au sol) ou les positions debout/suspendues.",
    "Je veux essayer différents matériaux (cuir, chaînes, ruban adhésif, caoutchouc, etc.).",
    "Je souhaite que mon partenaire me complimente, m'humilie ou me commande pendant le bondage (selon les accords préalables).",
    "Je veux me mettre d’accord sur un signal lorsque je veux plus de tension ou plus d’espace.",
    "Je veux seulement faire du bondage lorsque nous sommes à la fois sobres et bien reposés.",
    "Je souhaite prendre des photos ou des vidéos du bondage (uniquement avec mon consentement préalable explicite).",
    "Je souhaite expérimenter l'auto-bondage ou le bondage avec un partenaire via des instructions.",
    "Je pense qu'il est important que nous ayons un « plan d'évacuation » pour les situations inattendues (par exemple crampes, panique, alarme incendie).",
    "Je veux considérer l’esthétique et l’aspect visuel du bondage comme importants."
  ],
  [
    "Je veux un système de mot ou d'arrêt sûr spécifiquement pour l'impact et la sensation (par exemple feu de circulation : vert/jaune/rouge).",
    "Je veux convenir à l’avance des parties du corps qui peuvent ou non être touchées.",
    "Je veux monter lentement en intensité et être contrôlé régulièrement pendant le match.",
    "J'aime combiner impact et sensation avec du bondage ou des dynamiques de pouvoir.",
    "Je souhaite expérimenter différents types de douleur (aiguë, sourde, brûlante, lancinante).",
    "Je souhaite organiser un suivi spécifiquement destiné aux zones d'impact (rafraîchissement, massage, soin).",
    "Je veux jouer avec les sensations sans douleur, comme caresser avec différentes matières (plumes, cuir, etc.).",
    "Je veux que nous nous mettions d’accord sur un signal pour augmenter, diminuer ou mettre en pause l’intensité.",
    "Je ne veux pas de marques permanentes, mais les marques rouges temporaires sont acceptables.",
    "Je souhaite tester à l'avance comment ma peau réagit à certains jouets ou techniques.",
    "Je suis curieux de connaître la stimulation électrique (unité TENS ou baguette violette).",
    "Je veux jouer avec le contrôle de la respiration ou un léger étouffement (jeu de respiration) dans des limites sûres.",
    "Je trouve excitant d'être tenu ou épinglé pendant l'impact.",
    "Je souhaite la bastonnade, la fessée ou la flagellation sur des zones précises (fesses, cuisses, dos, semelles).",
    "Je veux jouer aux sensations avec des grattages, des tirages de cheveux ou des points de pression.",
    "Je veux que mon partenaire me dise ce qu'il va faire juste avant que cela n'arrive (ou qu'il ne le surprenne).",
    "Je veux essayer différents niveaux d'intensité et les évaluer à l'avance (1-10).",
    "Je veux un impact comme préliminaires ou comme préparation au sexe.",
    "Je veux des accords sur la fréquence et la force des frappes autorisées par zone.",
    "Je pense qu'il est important d'inspecter ensemble les zones d'impact par la suite."
  ],
  [
    "Je veux discuter à l’avance des fétiches ou des éléments esthétiques qui m’excitent et de ceux qui sont interdits.",
    "Je m'intéresse à des fétiches spécifiques tels que le jeu de pieds, le nylon, les talons hauts, les gants ou le fétichisme des cheveux.",
    "Je souhaite explorer le travestissement, la féminisation ou la masculinisation dans le jeu de rôle.",
    "Je veux porter des colliers (ou offrir un collier à mon partenaire) comme symbole de dynamisme.",
    "Je veux que nous fassions des accords clairs sur le maquillage, les ongles, les perruques ou les tatouages temporaires.",
    "Je souhaite des soins du corps ou un rasage dans le cadre de la préparation au look fétiche.",
    "Je veux que les vêtements et accessoires fétichistes soient toujours faciles à retirer en cas d'urgence.",
    "Je souhaite vérifier au préalable les allergies ou réactions cutanées aux matériaux (latex, cuir, etc.).",
    "Je pense qu'il est important que les éléments esthétiques et fétichistes restent agréables pour nous deux.",
    "Je veux nettoyer et prendre soin des tenues ensemble par la suite.",
    "Je veux jouer avec un habillage complet (catsuit en latex, zentai, etc.).",
    "Je veux l’objectivation ou le mobilier humain comme élément esthétique/fétiche.",
    "Je veux que mon partenaire m'habille, me déshabille ou m'inspecte comme un rituel.",
    "Je veux un jeu de miroir : me regarder ou nous regarder ensemble dans le miroir tout en portant des vêtements fétichistes.",
    "Je souhaite utiliser des parfums spécifiques (parfum, cuir, cirage au latex) comme déclencheur.",
    "Je souhaite que nous choisissions ou commandions ensemble une « tenue fétiche » à l'avance.",
    "Je veux du bondage esthétique ou une corde décorative comme élément visuel.",
    "Je veux que nous nous mettions d'accord sur le caractère public ou privé des éléments fétichistes (photos, vidéo, etc.).",
    "Je veux toujours que le confort et la mobilité l’emportent sur l’apparence « parfaite » d’un objet.",
    "Je souhaite expérimenter différents styles (gothique, militaire, bimbo, chiot, etc.)."
  ],
  [
    "Je veux donner ou recevoir du rimming (anilingus).",
    "Je souhaite explorer la stimulation de la prostate (point P).",
    "Je veux construire lentement avec des jouets plus petits avant d'essayer des choses plus grandes.",
    "Je veux que nous utilisions toujours beaucoup de lubrifiant et que nous en réappliquions régulièrement.",
    "Je souhaite convenir à l'avance d'une routine d'hygiène (douche, rinçage si nécessaire).",
    "Je veux que nous essayions différentes positions et voyons ce qui me semble le plus confortable.",
    "Je veux que la pénétration se fasse toujours à mon rythme et que je puisse prendre l'initiative.",
    "Je veux que nous nous arrêtions et que nous fassions une pause chaque fois que cela nous semble inconfortable, sans poser de questions.",
    "Je souhaite ensuite un suivi supplémentaire pour la zone anale (nettoyage, hydratation, repos).",
    "Je veux des accords clairs sur l’utilisation de préservatifs lors du contact anal.",
    "Je souhaite combiner le jeu anal avec une stimulation clitoridienne/vaginale ou d'autres sensations.",
    "Je souhaite porter un plug anal en préparation ou dans le cadre des préliminaires.",
    "Je souhaite expérimenter différents types de jouets (courbés, vibrants, etc.).",
    "Je souhaite que mon partenaire me fasse des exercices de relaxation ou des techniques de respiration.",
    "Je veux que nous nous mettions d'accord sur un signal ou un mot spécifiquement pour l'inconfort anal.",
    "Je veux seulement faire de l'anal lorsque je suis détendu et excité.",
    "Je ne veux pas de double pénétration ou d'objets volumineux sans préparation approfondie.",
    "Je ne veux pas qu'on passe immédiatement à la pénétration vaginale après un contact anal.",
    "Je veux que nous augmentions lentement la profondeur et la vitesse et que nous vérifiions régulièrement.",
    "Je pense qu'il est important que l'anal ne soit pas obligatoire et reste toujours une option, pas une nécessité."
  ],
  [
    "Je veux faire du sexe oral et déterminer mon propre rythme et ma profondeur.",
    "Je veux que mon partenaire me tienne la tête ou me baise légèrement pendant le sexe oral (face putain).",
    "Je veux essayer la position 69.",
    "Je veux le prendre profondément dans ma gorge (gorge profonde) et le construire lentement.",
    "J'ai envie d'éjaculer dans ma bouche et d'avaler si je veux.",
    "Je veux explorer mon propre fluide (gicler) ou celui de mon partenaire.",
    "Je souhaite convenir à l'avance si de la salive, du sperme ou d'autres fluides corporels peuvent pénétrer sur mon corps ou mon visage.",
    "Je souhaite une bonne hygiène (douche, brossage des dents, etc.) comme condition préalable au sexe oral.",
    "Je veux que le sexe oral s’arrête immédiatement en cas de haut-le-cœur, d’inconfort ou de douleur.",
    "Je veux me rincer ou me brosser les dents après un rapport sexuel oral avant de continuer à nous embrasser.",
    "Je veux recevoir du sexe oral en étant attaché, avec les yeux bandés ou dans une autre dynamique.",
    "Je veux donner ou recevoir du rimming (anilingus).",
    "Je veux que mon partenaire me dise à quel point mon goût ou mon apparence sont bons pendant le sexe oral.",
    "Je veux plusieurs cycles de sexe oral, y compris après l'éjaculation (nettoyage du sperme).",
    "Je veux être d'accord sur la façon dont le sexe oral peut être dur ou doux.",
    "Je veux que nous utilisions des digues dentaires ou une autre protection lors du rimming.",
    "Je trouve excitant de partager le sperme de mon partenaire par le biais de baisers (boule de neige).",
    "Je veux que le sexe oral soit une grande partie des préliminaires ou de toute la séance.",
    "Je veux des accords clairs sur le contact du visage et des cheveux pendant l'éjaculation.",
    "Je veux des soins ultérieurs, comme boire de l'eau, me faire des câlins ou me rincer la bouche."
  ],
  [
    "Je veux toujours que tous les jouets soient soigneusement nettoyés avant et après utilisation.",
    "Je souhaite choisir de nouveaux jouets ensemble et en discuter en ligne ou en magasin.",
    "Je souhaite utiliser des jouets en combinaison avec du bondage, de l'impact ou des dynamiques de pouvoir.",
    "Je veux essayer des jouets contrôlés par une application ou télécommandés (avec des accords clairs sur le contrôle).",
    "Je souhaite explorer les anneaux péniens, les jouets à succion, les masseurs de prostate ou d'autres jouets ciblés.",
    "Je souhaite que nous nous mettions d'accord sur un lieu de stockage sécurisé pour tous les jouets (hygiène et discrétion).",
    "J'ai envie d'essayer tranquillement les pinces à tétons, les extenseurs de couilles ou autres pinces.",
    "Je souhaite qu'on se mette d'accord sur une durée maximale de port des jouets (plugs, chasteté, etc.).",
    "Je veux d’abord tester de nouveaux jouets en solo avant de les utiliser ensemble.",
    "Je veux que nous nous mettions d'accord sur un « mot de sécurité pour les jouets » ou sur un signal spécifique lorsqu'un jouet ne semble pas bien.",
    "Je veux essayer des godes, des manchons ou des masturbateurs réalistes.",
    "Je veux utiliser des jouets pour le contrôle de l'orgasme ou le déni.",
    "Je souhaite tester différents types de lubrifiant par jouet (à base d'eau, de silicone, etc.).",
    "Je veux que nous gardions un inventaire ou une liste de nos jouets avec des notes sur les sentiments.",
    "Je souhaite envisager des godes à baguette, des machines à baiser ou d'autres options mains libres (uniquement avec de l'expérience).",
    "Je ne veux jamais que des jouets soient partagés sans une nouvelle protection ou un nettoyage approfondi.",
    "Je souhaite combiner des jouets à température (chaud/froid) avec d'autres sensations.",
    "Je veux que nous vérifiions toujours les irritations ou les blessures après utilisation.",
    "Je veux des rituels autour des jouets, comme si mon partenaire m'insérait un plug en préparation.",
    "Je veux toujours que le confort et le plaisir passent avant le « facteur cool » d'un jouet."
  ],
  [
    "Je souhaite convenir à l’avance de règles claires sur ce qui est autorisé ou non pour plusieurs personnes.",
    "Je souhaite que nous nous mettions d’accord à l’avance sur un mot de sécurité ou un système d’arrêt qui s’applique à tout le monde.",
    "Je veux que nous discutions ensuite de l'expérience ensemble (y compris les sentiments et la jalousie).",
    "Je souhaite que tous les participants donnent leur consentement explicite à l’avance et soient conscients des limites.",
    "Je veux que nous invitions plus de personnes seulement si nous nous sentons tous les deux à l’aise et excités.",
    "Je souhaite des accords concernant des photos, des vidéos ou des enregistrements avec plusieurs personnes.",
    "Je veux que la pénétration, le sexe oral ou les attouchements par d'autres ne se produisent qu'avec le consentement explicite à ce moment-là.",
    "Je veux que nous intégrions un « moment d'enregistrement » dans l'expérience.",
    "Je veux que nous nous mettions d’accord à l’avance sur la manière de gérer la jalousie ou les sentiments inconfortables.",
    "Je veux que tout le monde soit impliqué dans le choix de la ou des personnes supplémentaires.",
    "Je suis plus intéressé à regarder qu'à participer à plusieurs.",
    "Je souhaite expérimenter un trio dans lequel je suis le centre (MMF ou FFM).",
    "Je veux que mon partenaire permanent ait toujours le rôle le plus important, même avec plusieurs personnes.",
    "Je veux convenir à l'avance des actes sexuels qui seront réservés à nous deux.",
    "Je trouve passionnant de faire plaisir à plusieurs personnes en même temps.",
    "Je veux des accords clairs sur l’hygiène, la douche et l’ordre des activités.",
    "Je veux que nous ayons un plan en place si l'un de nous souhaite se retirer pendant l'expérience.",
    "Je veux que toutes les personnes supplémentaires soient testées pour les MST et que nous partagions les résultats des tests récents.",
    "Je suis curieux de voir une orgie ou un groupe plus important, mais uniquement dans un cadre sûr et contrôlé.",
    "Je veux que l’accent soit mis sur le plaisir pour tout le monde, pas sur la performance."
  ],
  [
    "Je veux des accords clairs sur l'échange doux (uniquement regarder, toucher, sexe oral) par rapport à l'échange complet (pénétration complète).",
    "Je veux que nous allions toujours dans un club échangiste ou que nous sortions ensemble et décidions ensemble de ce qui se passe.",
    "Je souhaite rendre obligatoires les tests MST et les résultats de tests récents avant tout contact avec autrui.",
    "Je veux que nous ayons un veto : si l'un de nous ne se sent pas à l'aise, cela n'arrivera pas.",
    "Je souhaite effectuer régulièrement (par exemple mensuellement) une « vérification de la relation » sur ce que ressent la relation ouverte.",
    "Je veux que toutes les dates, discussions ou réunions soient transparentes et que nous nous en parlions.",
    "Je veux des accords sur la protection (préservatifs, PrEP, etc.) pour toute forme de contact avec autrui.",
    "Je veux toujours que nous terminions la soirée ensemble après une expérience et que nous en discutions ensuite.",
    "Je veux que notre relation primaire ait toujours la priorité sur les expériences avec les autres.",
    "Je veux des limites claires concernant le fait de tomber amoureux ou les liens émotionnels avec les autres.",
    "Je souhaite que nous créions ensemble des profils sur des applications de rencontres ou des plateformes échangistes.",
    "Je veux que nous regardions et parlions seuls plusieurs fois avant de nous joindre.",
    "Je veux des accords sur la manière dont nous gérons les refus ou les déceptions des autres.",
    "Je veux que nous puissions avoir une « période de réflexion » si quelque chose nous semble trop intense.",
    "Je veux que la confidentialité et la discrétion s’appliquent également aux amis, à la famille et aux collègues.",
    "Je souhaite expérimenter des dates uniquement pour l'un de nous, à condition que nous soyons d'accord à l'avance.",
    "Je pense qu'il est important que nous partagions également des compliments et des expériences positives.",
    "Je veux que nous concluions des accords clairs sur la répétition avec les mêmes personnes.",
    "Je veux que nous ayons un plan d’urgence si quelqu’un ne se sent pas en sécurité ou mal à l’aise.",
    "Je veux que nous évaluions et modifiions régulièrement les règles."
  ],
  [
    "Je veux convenir à l’avance de limites claires sur ce qui est autorisé et ce qui n’est pas autorisé dans les situations semi-publiques.",
    "Je veux que nous restions toujours discrets et que nous n'exposions jamais sciemment les autres à nos activités sexuelles.",
    "Je souhaite expérimenter le sexe dans différentes pièces de la maison (cuisine, douche, balcon, etc.).",
    "Je veux essayer le sexe en voiture ou le sexe en voiture dans des endroits calmes.",
    "Je veux faire l'amour dehors, dans la nature, mais uniquement dans des endroits isolés.",
    "Je veux que nous nous mettions d'accord sur un signal ou un mot de code pour arrêter immédiatement s'il y a un risque.",
    "Après des relations sexuelles en public ou à risque, je veux toujours trouver un endroit sûr ensemble pour le suivi.",
    "Je veux que nous vérifiions à l’avance si un endroit est vraiment sûr et suffisamment privé.",
    "Je veux trouver excitant de recevoir des ordres chuchotés ou des taquineries dans les lieux publics.",
    "Je veux toujours que les matchs publics se terminent avant que nous rentrions à la maison, à moins que nous en convenions tous les deux autrement.",
    "Je veux faire des jeux de rôle dans lesquels nous faisons semblant d'être des étrangers dans un lieu public.",
    "Je veux un jeu public léger, comme ne pas porter de sous-vêtements, de plug anal ou de vibrateur télécommandé.",
    "Je veux des accords sur la distance que nous pouvons parcourir dans un cinéma, un restaurant, un parc ou un ascenseur.",
    "Je souhaite que nous prenions des photos ou des vidéos dans des endroits intéressants (uniquement avec autorisation explicite).",
    "Je veux que nous trouvions un équilibre entre l’enthousiasme et la véritable sécurité.",
    "Je veux que nous n’ayons jamais de relations sexuelles en public dans des endroits où se trouvent des enfants, des familles ou des innocents.",
    "Je veux que nous ayons un plan d'urgence (par exemple une couverture, des vêtements supplémentaires, pouvoir s'arrêter rapidement).",
    "J'ai toujours envie de discuter ensuite de ce qui était savoureux et de ce que nous ne ferons plus jamais.",
    "Je veux que l’accent soit mis sur la tension et la connexion, et non sur le fait de les rendre aussi extrêmes que possible.",
    "Je veux que les activités publiques n’aient lieu que lorsque nous nous sentons tous les deux détendus et excités."
  ],
  [
    "Je souhaite que toutes les photos et vidéos prises soient uniquement sur un appareil sécurisé ou dans un cloud crypté.",
    "Je souhaite convenir explicitement à l'avance des parties du corps ou des actions qui peuvent ou non être filmées/photographiées.",
    "Je veux que nous exécutions toujours une « demande de suppression » immédiatement et sans discussion.",
    "Je veux des accords clairs sur ce qu’il adviendra des images si la relation prend fin.",
    "Je ne veux pas de diffusion en direct ni d’appels vidéo à contenu sexuel, à moins que nous ne soyons explicitement d’accord sur ce point.",
    "Je veux que nous demandions toujours la permission juste avant de prendre une photo ou une vidéo.",
    "Je ne veux jamais que les images soient utilisées pour faire pression ou faire chanter qui que ce soit.",
    "Je souhaite que nous examinions régulièrement ensemble les images enregistrées et supprimions celles que nous ne souhaitons pas.",
    "Je souhaite que le visage, les tatouages ou autres caractéristiques reconnaissables soient rendus méconnaissables par défaut.",
    "Je ne veux pas que nous utilisions des outils d’IA ou des deepfakes sur les images des uns et des autres.",
    "Je souhaite que nous utilisions un dossier ou une application séparé et sécurisé pour tous nos médias intimes.",
    "Je veux que nous soyons d’accord sur la durée pendant laquelle nous conservons les images et quand nous les supprimons.",
    "Je veux que prendre des photos/vidéos soit toujours secondaire par rapport au plaisir de ce moment.",
    "Je trouve excitant de prendre des photos pendant le bondage, l'impact ou les vêtements fétichistes.",
    "Je veux des accords clairs sur le sexting et l’envoi de photos tout en discutant.",
    "Je veux que nous ayons un mot de sécurité qui s'applique également à l'arrêt de la fabrication d'images.",
    "Je veux que toutes les personnes impliquées (si plusieurs personnes) donnent leur autorisation explicite pour les images.",
    "Je veux que nous ne fassions pas d’images dans des situations publiques ou semi-publiques.",
    "Après, je souhaite que nous regardions ensemble ce que nous avons fait et ce que nous gardons.",
    "Je veux que la confidentialité et la confiance l’emportent toujours sur la création de belles images."
  ],
  [
    "Je veux que nous ayons toujours beaucoup d’eau, d’électrolytes et de collations à portée de main pendant les séances plus longues.",
    "Je souhaite vérifier à l’avance les interactions médicamenteuses ou les risques pour la santé liés à la consommation de substances.",
    "Je veux que nous partagions honnêtement notre niveau d’énergie et notre état mental avant de commencer.",
    "Je veux que l’alcool ou les drogues ne soient jamais une condition nécessaire aux activités sexuelles ou perverses.",
    "Je souhaite uniquement utiliser du poppers, du cannabis, des produits comestibles ou d'autres substances avec des accords et un dosage clairs.",
    "Je veux que nous nous mettions d’accord sur une quantité maximale d’alcool/drogues par séance.",
    "Je veux que nous prévoyions des pauses pour nous hydrater, manger et nous reposer.",
    "Je veux que nous tenions compte de mon cycle menstruel, de ma fatigue ou de mon niveau de stress lors de la planification.",
    "Je veux que les ressources ne soient jamais utilisées pour repousser les limites ou influencer le consentement.",
    "Après des séances intensives, je souhaite une attention particulière pour la récupération (sommeil, nutrition, repos).",
    "Je veux que nous appliquions la règle de la « sobriété d’abord » aux nouvelles activités.",
    "Je souhaite utiliser des suppléments tels que du magnésium, de la L-arginine ou des boosters de libido uniquement après consultation.",
    "Je veux que nous concluions des accords sur le fait de fumer/vapoter (nicotine, cannabis) avant ou pendant le jeu.",
    "Je veux que nous ayons un plan d’urgence en cas de surutilisation ou de bad trip.",
    "Je veux que nous respections nos schémas énergétiques quotidiens (personne du matin vs personne du soir).",
    "Je souhaite que nous incluions toujours une phase de suivi claire après la consommation de substances.",
    "Je veux que nous soyons honnêtes au sujet de toute dépendance, médicament ou maladie chronique.",
    "Je pense qu'il est important que du bon sexe soit possible et apprécié même sans aide.",
    "Je veux que nous planifiions une « journée de réinitialisation » après une session de ressources.",
    "Je veux qu’on évite la combinaison fatigue + ressources."
  ],
  [
    "Je souhaite un suivi spécifique qui me convient (par exemple un câlin, une couverture, quelque chose de sucré, du silence, une conversation, etc.).",
    "Je veux que nous prêtions également attention aux éventuels subdrops ou domdrops, même des heures/jours plus tard.",
    "Je souhaite me mettre d’accord sur une routine de suivi claire que nous suivons après chaque séance.",
    "Je veux que nous nettoyions la pièce ensemble après et que nous nettoyions les jouets comme un rituel.",
    "J'ai envie de faire un « débriefing » : qu'est-ce qui a été bien, qu'est-ce qui l'a moins bien, qu'est-ce qu'on veut différent la prochaine fois ?",
    "Je veux que nous ayons un plan d’urgence lorsque quelqu’un ne se sent pas bien physiquement ou émotionnellement.",
    "Je veux que nous ayons toujours un système de mots de sécurité et d’arrêt qui soit respecté en dehors du jeu.",
    "Je souhaite que nous prenions en compte d'éventuelles contusions, douleurs musculaires ou blessures mineures par la suite.",
    "Je souhaite que le suivi soit effectué non seulement immédiatement après, mais aussi dans les jours qui suivent.",
    "Je veux que nous évaluions et mettions régulièrement à jour les limites et les déclencheurs de chacun.",
    "Je veux que nous préparions un « kit de suivi » avec de l'eau, des collations, de la crème, des pansements, etc.",
    "Je ne veux pas que mon partenaire me laisse seul immédiatement après un jeu intense, sauf accord explicite de notre part.",
    "Je veux des accords sur la façon dont nous gérons les pertes (accidents émotionnels) dans les jours qui suivent une séance.",
    "Je veux que nous ayons un mot de code pour « J’ai besoin de soins supplémentaires maintenant ».",
    "Je ne veux pas que nous prenions des décisions importantes concernant notre relation après une séance.",
    "Je souhaite que nous combinions un suivi physique avec des enregistrements émotionnels (par exemple « comment vous sentez-vous en ce moment sur une échelle de 1 à 10 ? »).",
    "Je souhaite que nous concluions des accords sur le suivi pour plusieurs personnes ou avec d'autres.",
    "Je veux que la sécurité et le suivi soient toujours une priorité plutôt que de « terminer » une scène.",
    "Je veux que nous tenions un journal ou des notes sur ce qui a bien fonctionné en termes de suivi.",
    "Je pense qu'il est important que le suivi s'applique également si une séance est annulée ou se termine prématurément."
  ]
],
  de: [
  [
    "Ich möchte meine harten Grenzen und weichen Grenzen im Voraus klar besprechen.",
    "Ich möchte Vereinbarungen über die Nachsorge treffen – was ich brauche und was ich leisten kann.",
    "Ich möchte meine Auslöser oder traumabezogenen Dinge im Voraus mitteilen (falls relevant).",
    "Ich möchte klare Vereinbarungen zum Thema Schutz/Safer Sex (Kondome, PrEP, Teststatus etc.).",
    "Ich möchte mich auf nonverbale Stoppzeichen einigen, wenn das Sprechen schwierig ist (z. B. dreimaliges Klopfen, offene Hand usw.).",
    "Ich halte es für wichtig, dass „Nein“, „Stopp“ und „Nicht jetzt“ immer sofort respektiert werden, auch ohne sicheres Wort.",
    "Ich möchte vorab vereinbaren, wie wir mit unerwarteten emotionalen Reaktionen umgehen.",
    "Ich möchte, dass wir nach einer bestimmten Zeit (z. B. nach 30/60 Minuten) einen schnellen Check-in durchführen, auch wenn alles gut läuft.",
    "Ob Fotos, Videos oder Audioaufnahmen gemacht werden dürfen und wie diese gespeichert werden, bespreche ich gerne vorab.",
    "Ich möchte auch, dass wir im Anschluss eine körperliche Untersuchung durchführen (z. B. Prellungen, Schmerzen usw.).",
    "Ich brauche ein „Ampelsystem“ (grün = weiterfahren, gelb = langsamer/anpassen, rot = anhalten).",
    "Ich möchte, dass wir uns vorab darauf einigen, wer für Hygiene und Reinigung verantwortlich ist.",
    "Ich möchte Klarheit darüber, wie wir mit unvorhergesehenen Situationen umgehen (z. B. wenn es jemandem plötzlich nicht gut geht).",
    "Ich möchte, dass wir uns darauf einigen, wie wir kommunizieren, wenn einer von uns betrunken oder high ist.",
    "Ich halte es für wichtig, dass wir vorab das Energieniveau und den mentalen Zustand des anderen überprüfen.",
    "Ich möchte pro Sitzung einen kurzen „Absichtscheck“ durchführen: Was möchte ich heute fühlen/erleben?",
    "Ich möchte, dass wir im Nachhinein abwägen, was wir beim nächsten Mal anders oder gleich machen wollen.",
    "Ich möchte, dass man während und nach dem Spiel Komplimente und positives Feedback erhält.",
    "Ich stimme zu, dass wir ohne vorherige Genehmigung keine neuen Aktivitäten einführen werden.",
    "Ich möchte, dass wir klare Vereinbarungen darüber treffen, wie lange eine Sitzung ungefähr dauert."
  ],
  [
    "Ich möchte mit einer klaren Hierarchie oder einer Eigentümer-Tier-Dynamik experimentieren.",
    "Ich mag es, während einer Sitzung Regeln und Struktur zu haben.",
    "Ich möchte als Teil der Dynamik mit Strafen und Belohnungen spielen.",
    "Ich möchte, dass mein Partner mich während des Spiels anleitet oder befiehlt.",
    "Ich möchte mit Fesseln oder Bewegungseinschränkungen innerhalb der Machtdynamik experimentieren.",
    "Ich interessiere mich für Impact Play (Schlagen, Spanking, Auspeitschen) in Kombination mit Dominanz/Unterwerfung.",
    "Ich möchte, dass mein Partner meine Orgasmen kontrolliert (Edging, Verleugnung, ruinierte Orgasmen usw.).",
    "Ich finde es spannend, für meinen Partner Hausarbeiten oder Haushaltshilfen zu erledigen.",
    "Ich möchte mich darauf einigen, wie „spielerisch“ oder „ernsthaft“ die Machtdynamik sein sollte.",
    "Ich möchte die Möglichkeit haben, vorübergehend in eine „Drop“- oder Aftercare-Rolle zu schlüpfen, wenn die Dynamik zu intensiv wird.",
    "Ich interessiere mich für Haustierspiele, Altersspiele oder Rollenspiele innerhalb einer Dynamik.",
    "Ich möchte mit Empfindungen und Sinnesentzug spielen (Augenbinde, Ohrstöpsel usw.).",
    "Ich möchte, dass mein Partner mich innerhalb der vereinbarten Grenzen zu seinem/ihrem Vergnügen „ausnutzt“.",
    "Ich finde es spannend, als eine Form des Machtspiels ignoriert oder missachtet zu werden.",
    "Ich möchte mich auf klare Signale einigen, wann die Dynamik intensiver oder sanfter werden kann.",
    "Ich möchte mit langfristigen Leistungsdynamiken experimentieren (z. B. einen ganzen Abend oder ein ganzes Wochenende).",
    "Ich möchte, dass mein Partner mich körperlich dominiert (halten, bewegen, fesseln).",
    "Ich bin neugierig auf verbale Dominanz (Befehlen, Befehlen, Erniedrigung).",
    "Ich möchte, dass wir die Dynamik anschließend klar abschließen (z. B. mit einem Ritual oder einer Umarmung).",
    "Ich finde es wichtig, dass Kraftdynamik immer freiwillig und mit Freude geübt wird."
  ],
  [
    "Ich möchte mit Shibari oder Seilbondage (japanisch/dekorativ) experimentieren.",
    "Ich möchte Spreizstangen oder Positionierungshilfen verwenden, um meine Beine oder Arme offen zu halten.",
    "Ich möchte Bondage mit anderen Empfindungen kombinieren (Teasing, Eis, Stöße, Vibratoren usw.).",
    "Ich möchte, dass wir immer eine sichere Schere oder EMT-Schere in Reichweite haben.",
    "Ich möchte beim Fesseln regelmäßig auf Kribbeln, Kälte oder Verfärbungen der Gliedmaßen untersucht werden.",
    "Ich möchte mit einfacher Fesselung beginnen und mich langsam zu komplexeren Fesselungen steigern.",
    "Ich möchte Vereinbarungen darüber treffen, wie eng etwas sein darf und wie ich dies zeige.",
    "Ich finde es spannend, völlig bewegungslos gemacht zu werden (Mumifizierung oder feste Fixierung).",
    "Ich möchte lernen, selbst sichere Knoten zu knüpfen und zu lösen.",
    "Ich möchte meine Gelenke und Muskeln danach zusätzlich pflegen (Massage, Dehnübungen, Wärme).",
    "Ich möchte Bondage als Teil eines längeren Machtaustauschs oder einer Kontrolldynamik nutzen.",
    "Ich möchte mit Underground-Bondage (Bodenarbeit) oder stehenden/hängenden Positionen experimentieren.",
    "Ich möchte verschiedene Materialien ausprobieren (Leder, Ketten, Klebeband, Gummi usw.).",
    "Ich möchte, dass mein Partner mir beim Fesseln ein Kompliment macht, mich erniedrigt oder befiehlt (je nach vorheriger Absprache).",
    "Ich möchte mich auf ein Signal einigen, wenn ich mehr Spannung oder mehr Raum möchte.",
    "Ich möchte Fesselspiele nur machen, wenn wir beide nüchtern und ausgeruht sind.",
    "Ich möchte Fotos oder Videos von der Fesselung machen (nur mit ausdrücklicher vorheriger Zustimmung).",
    "Ich möchte per Anleitung Selbstbondage oder Partnerbondage ausprobieren.",
    "Ich halte es für wichtig, dass wir einen „Fluchtplan“ für unerwartete Situationen (z. B. Krämpfe, Panik, Feueralarm) haben.",
    "Ich möchte den ästhetischen und visuellen Aspekt des Fesselns als wichtig erachten."
  ],
  [
    "Ich möchte ein sicheres Wort oder Stoppsystem speziell für Aufprall und Empfindung (z. B. Ampel: grün/gelb/rot).",
    "Ich möchte vorab vereinbaren, welche Körperteile berührt werden dürfen und welche nicht.",
    "Ich möchte die Intensität langsam steigern und während des Spiels regelmäßig überprüft werden.",
    "Ich kombiniere gerne Impact und Sensation mit Bondage oder Power-Dynamik.",
    "Ich möchte mit verschiedenen Schmerzarten experimentieren (stechend, dumpf, brennend, stechend).",
    "Ich möchte eine gezielt auf die Belastungsbereiche abgestimmte Nachsorge gestalten (Kühlung, Massage, Pflege).",
    "Ich möchte schmerzfrei mit Empfindungen spielen, z. B. durch Streicheln mit verschiedenen Materialien (Federn, Leder usw.).",
    "Ich möchte, dass wir uns auf ein Signal einigen, um die Intensität zu erhöhen, zu verringern oder zu pausieren.",
    "Ich möchte keine bleibenden Flecken, aber vorübergehende rote Flecken sind in Ordnung.",
    "Ich möchte vorab testen, wie meine Haut auf bestimmte Spielzeuge oder Techniken reagiert.",
    "Ich interessiere mich für Elektrostimulation (TENS-Gerät oder Violettstab).",
    "Ich möchte innerhalb sicherer Grenzen mit Atemkontrolle oder leichtem Würgen (Atemspiel) spielen.",
    "Ich finde es spannend, beim Aufprall festgehalten oder festgenagelt zu werden.",
    "Ich möchte an bestimmten Stellen (Gesäß, Oberschenkel, Rücken, Fußsohlen) Prügel, Tracht Prügel oder Auspeitschung bekommen.",
    "Ich möchte Sensibilität mit Kratzen, Haarziehen oder Druckpunkten spielen.",
    "Ich möchte, dass mein Partner mir sagt, was er/sie tun wird, bevor es passiert (oder es überrascht).",
    "Ich möchte verschiedene Intensitätsstufen ausprobieren und diese vorab bewerten (1-10).",
    "Ich möchte Wirkung als Vorspiel oder als Vorbereitung auf den Sex.",
    "Ich möchte Vereinbarungen darüber, wie oft und wie stark pro Zone zugeschlagen werden darf.",
    "Ich halte es für wichtig, die Aufprallbereiche anschließend gemeinsam zu inspizieren."
  ],
  [
    "Ich möchte vorab besprechen, welche Fetische oder ästhetischen Elemente mich anmachen und welche ein No-Go sind.",
    "Ich interessiere mich für bestimmte Fetische wie Fußspiele, Nylon, High Heels, Handschuhe oder Haarfetisch.",
    "Ich möchte Crossdressing, Feminisierung oder Maskulinisierung im Rollenspiel erforschen.",
    "Ich möchte Halsbänder tragen (oder meinem Partner ein Halsband schenken) als Symbol für Dynamik.",
    "Ich möchte, dass wir klare Vereinbarungen über Make-up, Nägel, Perücken oder temporäre Tattoos treffen.",
    "Als Vorbereitung auf den Fetisch-Look wünsche ich mir Körperpflege oder Rasur.",
    "Ich möchte, dass Fetischkleidung und -accessoires im Notfall immer leicht auszuziehen sind.",
    "Ich möchte vorab prüfen, ob Allergien oder Hautreaktionen auf Materialien (Latex, Leder usw.) vorliegen.",
    "Ich denke, es ist wichtig, dass die Ästhetik und die Fetischelemente für uns beide Spaß machen.",
    "Ich möchte danach gemeinsam aufräumen und mich um die Outfits kümmern.",
    "Ich möchte mit vollständiger Umhüllung (Latex-Catsuit, Zentai usw.) spielen.",
    "Ich möchte Objektivierung oder menschliche Möbel als ästhetisches/fetischistisches Element.",
    "Ich möchte, dass mein Partner mich rituell an- und auszieht oder inspiziert.",
    "Ich möchte Spiegelspiele: mich selbst oder uns gemeinsam im Spiegel betrachten, während ich Fetischkleidung trage.",
    "Ich möchte bestimmte Düfte (Parfüm, Leder, Latexpolitur) als Auslöser verwenden.",
    "Ich möchte, dass wir vorab gemeinsam ein „Fetisch-Outfit“ auswählen oder bestellen.",
    "Ich möchte ästhetische Fesselungen oder dekorative Seile als visuelles Element.",
    "Ich möchte, dass wir uns darauf einigen, wie öffentlich oder privat die Fetischelemente sein können (Fotos, Videos usw.).",
    "Ich möchte immer, dass Komfort und Mobilität wichtiger sind als das „perfekte“ Aussehen einer Sache.",
    "Ich möchte mit verschiedenen Stilen experimentieren (Gothic, Military, Bimbo, Puppy usw.)."
  ],
  [
    "Ich möchte Rimming (Anilingus) geben oder erhalten.",
    "Ich möchte die Stimulation der Prostata (P-Punkt) erforschen.",
    "Ich möchte langsam mit kleineren Spielzeugen aufbauen, bevor wir größere Dinge ausprobieren.",
    "Ich möchte, dass wir immer viel Gleitmittel verwenden und es regelmäßig erneut auftragen.",
    "Ich möchte vorab eine Hygieneroutine vereinbaren (duschen, ggf. abspülen).",
    "Ich möchte, dass wir verschiedene Positionen ausprobieren und sehen, was sich für mich am angenehmsten anfühlt.",
    "Ich möchte, dass die Penetration immer in meinem Tempo erfolgt und ich die Initiative ergreifen kann.",
    "Ich möchte, dass wir innehalten und innehalten, wann immer es uns unangenehm ist, ohne dass Fragen gestellt werden.",
    "Ich wünsche mir im Anschluss eine zusätzliche Nachpflege für den Analbereich (Reinigung, Befeuchtung, Ruhe).",
    "Ich möchte klare Vereinbarungen über die Verwendung von Kondomen beim Analkontakt.",
    "Ich möchte Analspiele mit klitoraler/vaginaler Stimulation oder anderen Empfindungen kombinieren.",
    "Ich möchte zur Vorbereitung oder im Rahmen des Vorspiels einen Analplug tragen.",
    "Ich möchte mit verschiedenen Arten von Spielzeugen experimentieren (gebogen, vibrierend usw.).",
    "Ich möchte, dass mein Partner mir Entspannungsübungen oder Atemtechniken gibt.",
    "Ich möchte, dass wir uns auf ein Signal oder Wort speziell für Analbeschwerden einigen.",
    "Ich möchte Analsex nur machen, wenn ich entspannt und aufgeregt bin.",
    "Ich möchte keine Doppelpenetration oder große Objekte ohne umfangreiche Vorbereitung.",
    "Ich möchte nicht, dass wir nach dem Analkontakt sofort zur vaginalen Penetration wechseln.",
    "Ich möchte, dass wir die Tiefe und Geschwindigkeit langsam aufbauen und regelmäßig überprüfen.",
    "Ich denke, es ist wichtig, dass sich Analsex nicht obligatorisch anfühlt und immer eine Option und kein Muss bleibt."
  ],
  [
    "Ich möchte Oralsex geben und mein eigenes Tempo und meine eigene Tiefe bestimmen.",
    "Ich möchte, dass mein Partner meinen Kopf hält oder mich beim Oralsex leicht fickt (Gesichtsficken).",
    "Ich möchte Position 69 ausprobieren.",
    "Ich möchte es tief in meine Kehle nehmen (Deepthroat) und es langsam aufbauen.",
    "Ich möchte in meinen Mund ejakulieren und schlucken, wenn ich will.",
    "Ich möchte meine eigene Flüssigkeit (Spritzen) oder die meines Partners erforschen.",
    "Ich möchte vorab vereinbaren, ob Speichel, Sperma oder andere Körperflüssigkeiten auf meinen Körper oder mein Gesicht gelangen dürfen.",
    "Ich möchte eine gute Hygiene (Duschen, Zähneputzen etc.) als Voraussetzung für Oralsex.",
    "Ich möchte, dass der Oralsex sofort beendet wird, wenn Würgen, Unwohlsein oder Schmerzen auftreten.",
    "Ich möchte nach dem Oralsex meine Zähne ausspülen oder putzen, bevor wir uns weiter küssen.",
    "Ich möchte Oralsex gefesselt, mit verbundenen Augen oder in einer anderen Dynamik erhalten.",
    "Ich möchte Rimming (Anilingus) geben oder erhalten.",
    "Ich möchte, dass mein Partner mir sagt, wie gut ich beim Oralsex schmecke oder aussehe.",
    "Ich möchte mehrere Runden Oralsex, auch nach der Ejakulation (Spermareinigung).",
    "Ich möchte zustimmen, wie hart oder sanft Oralsex sein kann.",
    "Ich möchte, dass wir beim Rimming Kofferdam oder andere Schutzmaßnahmen verwenden.",
    "Ich finde es aufregend, das Sperma meines Partners durch Küssen (Snowballing) zu teilen.",
    "Ich möchte, dass Oralsex ein wichtiger Teil des Vorspiels oder der gesamten Sitzung ist.",
    "Ich möchte klare Vereinbarungen über Gesichts- und Haarkontakt während der Ejakulation.",
    "Ich möchte danach eine Nachsorge, wie zum Beispiel Wasser trinken, kuscheln oder den Mund ausspülen."
  ],
  [
    "Ich möchte immer, dass alle Spielzeuge vor und nach dem Gebrauch gründlich gereinigt werden.",
    "Ich möchte gemeinsam neue Spielzeuge auswählen und diese online oder im Laden besprechen.",
    "Ich möchte Toys in Kombination mit Bondage, Impact oder Power Dynamics nutzen.",
    "Ich möchte App-gesteuerte oder ferngesteuerte Spielzeuge (mit klaren Vereinbarungen zur Steuerung) ausprobieren.",
    "Ich möchte Penisringe, Saugspielzeuge, Prostatamassagegeräte oder andere gezielte Spielzeuge erkunden.",
    "Ich möchte, dass wir uns auf einen sicheren Aufbewahrungsort für alle Spielzeuge einigen (Hygiene und Diskretion).",
    "Ich möchte Nippelklemmen, Ballstretcher oder andere Klammern in Ruhe ausprobieren.",
    "Ich möchte, dass wir uns auf eine maximale Tragedauer von Spielzeugen (Plugs, Keuschheit usw.) einigen.",
    "Ich möchte neue Spielzeuge zunächst alleine testen, bevor wir sie gemeinsam verwenden.",
    "Ich möchte, dass wir uns auf ein „Spielzeug-Sicherheitswort“ oder ein Signal einigen, das speziell für den Fall gilt, dass sich ein Spielzeug nicht richtig anfühlt.",
    "Ich möchte realistische Dildos, Sleeves oder Masturbatoren ausprobieren.",
    "Ich möchte Spielzeug zur Reizung, Orgasmuskontrolle oder Verleugnung verwenden.",
    "Ich möchte pro Spielzeug verschiedene Arten von Gleitmitteln testen (auf Wasserbasis, Silikon usw.).",
    "Ich möchte, dass wir ein Inventar oder eine Liste unserer Spielzeuge mit Notizen zu Gefühlen führen.",
    "Ich möchte über Zauberstabdildos, Fickmaschinen oder andere freihändige Optionen nachdenken (nur mit Erfahrung).",
    "Ich möchte nie, dass Spielzeug ohne neuen Schutz oder gründliche Reinigung geteilt wird.",
    "Ich möchte Temperaturspielzeug (heiß/kalt) mit anderen Empfindungen kombinieren.",
    "Ich möchte, dass wir nach dem Gebrauch immer auf Irritationen oder Verletzungen achten.",
    "Ich möchte Rituale rund um Spielzeug, wie zum Beispiel, dass mein Partner als Vorbereitung einen Plug in mich einführt.",
    "Ich möchte immer, dass Komfort und Spaß vor dem „Coolness-Faktor“ eines Spielzeugs stehen."
  ],
  [
    "Ich möchte vorab klare Regeln vereinbaren, was für mehrere Personen erlaubt ist und was nicht.",
    "Ich möchte, dass wir uns im Vorfeld auf ein Safe-Word- oder Stop-System einigen, das für alle gilt.",
    "Ich möchte, dass wir das Erlebnis anschließend gemeinsam besprechen (einschließlich Gefühle und Eifersucht).",
    "Ich möchte, dass alle Teilnehmer vorab ihre ausdrückliche Zustimmung geben und sich über die Grenzen im Klaren sind.",
    "Ich möchte, dass wir nur dann mehr Leute einladen, wenn wir uns beide wohl und aufgeregt fühlen.",
    "Ich möchte Vereinbarungen über Fotos, Videos oder Aufnahmen mit mehreren Personen.",
    "Ich möchte, dass Penetration, Oralsex oder Berührungen durch andere nur mit ausdrücklicher Zustimmung in diesem Moment erfolgen.",
    "Ich möchte, dass wir einen „Check-in-Moment“ in das Erlebnis einbauen.",
    "Ich möchte, dass wir uns im Vorfeld darauf einigen, wie wir mit Eifersucht oder unangenehmen Gefühlen umgehen sollen.",
    "Ich möchte, dass alle an der Auswahl der zusätzlichen Person(en) beteiligt werden.",
    "Mich interessiert mehr das Zuschauen als das Mitmachen mit mehreren Leuten.",
    "Ich möchte mit einem Dreier experimentieren, bei dem ich im Mittelpunkt stehe (MMF oder FFM).",
    "Ich möchte, dass mein fester Partner auch bei mehreren Personen immer die wichtigste Rolle spielt.",
    "Ich möchte vorab vereinbaren, welche sexuellen Handlungen für uns beide reserviert sind.",
    "Ich finde es spannend, mehreren Menschen gleichzeitig eine Freude zu machen.",
    "Ich möchte klare Vereinbarungen zu Hygiene, Duschen und Reihenfolge der Aktivitäten.",
    "Ich möchte, dass wir einen Plan haben, falls sich einer von uns während des Erlebnisses zurückziehen möchte.",
    "Ich möchte, dass alle weiteren Personen auf sexuell übertragbare Krankheiten getestet werden und dass wir aktuelle Testergebnisse teilen.",
    "Ich bin neugierig auf eine Orgie oder eine größere Gruppe, aber nur in einer sicheren, kontrollierten Umgebung.",
    "Ich möchte, dass der Spaß für alle im Vordergrund steht und nicht die Leistung."
  ],
  [
    "Ich möchte klare Vereinbarungen über Soft-Swap (nur Schauen, Berühren, Oralsex) versus Full-Swap (vollständige Penetration).",
    "Ich möchte, dass wir immer zusammen in einen Swingerclub oder ein Date gehen und gemeinsam entscheiden, was passiert.",
    "Ich möchte, dass STD-Tests und aktuelle Testergebnisse vor dem Kontakt mit anderen obligatorisch sind.",
    "Ich möchte, dass wir ein Veto haben: Wenn sich einer von uns nicht wohl fühlt, wird es nicht passieren.",
    "Ich möchte regelmäßig (z. B. monatlich) einen „Beziehungscheck“ durchführen, um festzustellen, wie sich die offene Beziehung anfühlt.",
    "Ich möchte, dass alle Termine, Chats oder Meetings transparent sind und wir uns gegenseitig darüber informieren.",
    "Ich möchte Vereinbarungen zum Schutz (Kondome, PrEP etc.) für jede Form des Kontakts mit anderen.",
    "Ich möchte immer, dass wir nach einem Erlebnis den Abend gemeinsam ausklingen lassen und anschließend darüber sprechen.",
    "Ich möchte, dass unsere primäre Beziehung immer Vorrang vor Erfahrungen mit anderen hat.",
    "Ich möchte klare Grenzen für das Verlieben oder emotionale Verbindungen zu anderen setzen.",
    "Ich möchte, dass wir gemeinsam Profile auf Dating-Apps oder Swinger-Plattformen erstellen.",
    "Ich möchte, dass wir mehrmals alleine zuschauen und reden, bevor wir mitmachen.",
    "Ich möchte Vereinbarungen darüber, wie wir mit Ablehnungen oder Enttäuschungen mit anderen umgehen.",
    "Ich möchte, dass wir eine „Abkühlphase“ haben, wenn sich etwas zu intensiv anfühlt.",
    "Ich möchte, dass Privatsphäre und Diskretion auch für Freunde, Familie und Kollegen gelten.",
    "Ich möchte mit Terminen nur für einen von uns experimentieren, sofern wir uns vorher einigen.",
    "Ich finde es wichtig, dass wir auch Komplimente und positive Erfahrungen teilen.",
    "Ich möchte, dass wir mit denselben Leuten klare Vereinbarungen über Wiederholungen treffen.",
    "Ich möchte, dass wir einen Notfallplan haben, falls sich jemand unsicher oder unwohl fühlt.",
    "Ich möchte, dass wir die Regeln regelmäßig überprüfen und anpassen."
  ],
  [
    "Ich möchte vorab klare Grenzen vereinbaren, was in halböffentlichen Situationen erlaubt ist und was nicht.",
    "Ich möchte, dass wir immer diskret bleiben und andere niemals wissentlich unseren sexuellen Aktivitäten aussetzen.",
    "Ich möchte in verschiedenen Räumen des Hauses (Küche, Dusche, Balkon usw.) mit Sex experimentieren.",
    "Ich möchte Sex im Auto oder im Auto an ruhigen Orten ausprobieren.",
    "Ich möchte Sex draußen in der Natur haben, aber nur an abgelegenen Orten.",
    "Ich möchte, dass wir uns auf ein Signal oder Codewort einigen, um bei Gefahr sofort anzuhalten.",
    "Nach öffentlichem oder riskantem Sex möchte ich immer gemeinsam einen sicheren Ort für die Nachsorge finden.",
    "Ich möchte, dass wir vorab prüfen, ob ein Standort wirklich sicher und privat genug ist.",
    "Ich möchte es spannend finden, an öffentlichen Orten geflüsterte Befehle zu erhalten oder gehänselt zu werden.",
    "Ich möchte immer, dass öffentliche Spiele enden, bevor wir nach Hause gehen, es sei denn, wir vereinbaren etwas anderes.",
    "Ich möchte Rollenspiele machen, bei denen wir an einem öffentlichen Ort so tun, als wären wir Fremde.",
    "Ich möchte leichte öffentliche Spiele, zum Beispiel ohne Unterwäsche, Buttplug oder Fernbedienungsvibrator.",
    "Ich möchte Vereinbarungen darüber, wie weit wir in einem Kino, Restaurant, Park oder Aufzug gehen dürfen.",
    "Ich möchte, dass wir an spannenden Orten Fotos oder Videos machen (nur mit ausdrücklicher Genehmigung).",
    "Ich möchte, dass wir ein Gleichgewicht zwischen Spannung und echter Sicherheit finden.",
    "Ich möchte, dass wir niemals öffentlichen Sex an Orten haben, an denen sich Kinder, Familien oder unschuldige Menschen aufhalten.",
    "Ich möchte, dass wir einen Notfallplan haben (z. B. eine Decke, zusätzliche Kleidung, schnelles Anhalten).",
    "Ich möchte hinterher immer besprechen, was lecker war und was wir nie wieder machen werden.",
    "Ich möchte, dass der Fokus auf der Spannung und Verbindung liegt und nicht darauf, es so extrem wie möglich zu machen.",
    "Ich möchte, dass öffentliche Aktivitäten nur dann stattfinden, wenn wir uns beide entspannt und aufgeregt fühlen."
  ],
  [
    "Ich möchte, dass alle aufgenommenen Fotos und Videos nur auf einem sicheren Gerät oder einer verschlüsselten Cloud gespeichert werden.",
    "Ich möchte vorab ausdrücklich zustimmen, welche Körperteile oder Handlungen gefilmt/fotografiert werden dürfen und welche nicht.",
    "Ich möchte, dass wir einen „Löschauftrag“ immer sofort und ohne Diskussion ausführen.",
    "Ich möchte klare Vereinbarungen darüber, was mit den Bildern passiert, wenn die Beziehung endet.",
    "Ich möchte kein Livestreaming oder Videotelefonie mit sexuellen Inhalten, es sei denn, wir vereinbaren dies ausdrücklich.",
    "Ich möchte, dass wir immer um Erlaubnis bitten, bevor wir ein Foto oder Video aufnehmen.",
    "Ich möchte niemals, dass Bilder dazu verwendet werden, jemanden unter Druck zu setzen oder zu erpressen.",
    "Ich möchte, dass wir regelmäßig gemeinsam die gespeicherten Bilder überprüfen und unerwünschte Bilder löschen.",
    "Ich möchte, dass Gesicht, Tätowierungen oder andere erkennbare Merkmale standardmäßig unkenntlich gemacht werden.",
    "Ich möchte nicht, dass wir KI-Tools oder Deepfakes für die Bilder des anderen verwenden.",
    "Ich möchte, dass wir für alle unsere intimen Medien einen separaten, sicheren Ordner oder eine separate App verwenden.",
    "Ich möchte, dass wir uns darüber einigen, wie lange wir Bilder aufbewahren und wann wir sie löschen.",
    "Ich möchte, dass das Aufnehmen von Fotos/Videos immer zweitrangig gegenüber dem Vergnügen dieses Augenblicks ist.",
    "Ich finde es spannend, während der Fessel-, Stoß- oder Fetischkleidung zu fotografieren.",
    "Ich möchte klare Vereinbarungen zum Sexting und zum Versenden von Fotos beim Chatten.",
    "Ich möchte, dass wir ein sicheres Wort haben, das auch für die Unterbindung der Bildproduktion gilt.",
    "Ich möchte, dass alle Beteiligten (wenn mehrere Personen) für Bilder eine ausdrückliche Erlaubnis erteilen.",
    "Ich möchte, dass wir keine Bilder in öffentlichen oder halböffentlichen Situationen machen.",
    "Anschließend möchte ich, dass wir gemeinsam schauen, was wir gemacht haben und was wir behalten.",
    "Ich möchte, dass Privatsphäre und Vertrauen bei der Erstellung schöner Bilder immer Vorrang haben."
  ],
  [
    "Ich möchte, dass wir bei längeren Sitzungen immer ausreichend Wasser, Elektrolyte und Snacks zur Hand haben.",
    "Ich möchte vorab prüfen, ob beim Konsum von Substanzen Wechselwirkungen mit anderen Medikamenten oder gesundheitliche Risiken bestehen.",
    "Ich möchte, dass wir ehrlich unser Energieniveau und unseren Geisteszustand mitteilen, bevor wir beginnen.",
    "Ich möchte, dass Alkohol oder Drogen niemals eine Voraussetzung für sexuelle oder perverse Aktivitäten sind.",
    "Ich möchte Poppers, Cannabis, Esswaren oder andere Substanzen nur mit klaren Vereinbarungen und Dosierungen verwenden.",
    "Ich möchte, dass wir uns auf eine Höchstmenge an Alkohol/Drogen pro Sitzung einigen.",
    "Ich möchte, dass wir Pausen zum Trinken, Essen und Ausruhen einbauen.",
    "Ich möchte, dass wir bei der Planung meinen Menstruationszyklus, meine Müdigkeit oder mein Stresslevel berücksichtigen.",
    "Ich möchte, dass Ressourcen niemals dazu verwendet werden, Grenzen zu überschreiten oder die Zustimmung zu beeinflussen.",
    "Nach intensiven Sitzungen möchte ich der Erholung (Schlaf, Ernährung, Ruhe) besondere Aufmerksamkeit schenken.",
    "Ich möchte, dass wir bei neuen Aktivitäten die „Nüchternheit zuerst“-Regel anwenden.",
    "Nahrungsergänzungsmittel wie Magnesium, L-Arginin oder Libido-Booster möchte ich nur nach Rücksprache nutzen.",
    "Ich möchte, dass wir vor oder während des Spiels Vereinbarungen über das Rauchen/Dampfen (Nikotin, Cannabis) treffen.",
    "Ich möchte, dass wir einen Notfallplan für den Fall einer Überbeanspruchung oder einer schlechten Reise haben.",
    "Ich möchte, dass wir unsere täglichen Energiemuster respektieren (Morgenmensch vs. Abendmensch).",
    "Ich möchte, dass wir nach der Einnahme von Substanzen immer eine klare Nachsorgephase einbauen.",
    "Ich möchte, dass wir ehrlich sind, wenn es um Süchte, Medikamente oder chronische Beschwerden geht.",
    "Ich finde es wichtig, dass guter Sex auch ohne Hilfsmittel möglich ist und geschätzt wird.",
    "Ich möchte, dass wir nach einer Ressourcensitzung einen „Reset-Tag“ planen.",
    "Ich möchte, dass wir die Kombination aus Müdigkeit und Ressourcen vermeiden."
  ],
  [
    "Ich möchte eine spezifische Nachsorge, die zu mir passt (z. B. Kuscheln, Decke, etwas Süßes, Stille, Reden usw.).",
    "Ich möchte, dass wir auch Stunden/Tage später auf mögliche Subdrops oder Domdrops achten.",
    "Ich möchte mich auf eine klare Nachsorgeroutine einigen, die wir nach jeder Sitzung befolgen.",
    "Ich möchte, dass wir danach gemeinsam das Zimmer aufräumen und als Ritual Spielzeug reinigen.",
    "Ich möchte eine Nachbesprechung durchführen: Was war gut, was war weniger gut, was wollen wir beim nächsten Mal anders?",
    "Ich möchte, dass wir einen Notfallplan haben, wenn es jemandem körperlich oder emotional nicht gut geht.",
    "Ich möchte, dass wir immer ein sicheres Wort- und Stoppsystem haben, das auch außerhalb des Spiels respektiert wird.",
    "Ich möchte, dass wir mögliche Blutergüsse, Muskelkater oder kleinere Verletzungen im Nachhinein berücksichtigen.",
    "Ich möchte, dass die Nachsorge nicht nur unmittelbar danach erfolgt, sondern auch in den Tagen danach.",
    "Ich möchte, dass wir die Grenzen und Auslöser des anderen regelmäßig bewerten und aktualisieren.",
    "Ich möchte, dass wir ein „Nachsorgeset“ mit Wasser, Snacks, Creme, Pflaster usw. vorbereiten.",
    "Ich möchte nicht, dass mein Partner mich nach einem intensiven Spiel sofort allein lässt, es sei denn, wir stimmen ausdrücklich zu.",
    "Ich möchte Vereinbarungen darüber treffen, wie wir mit Drop (emotionalem Absturz) in den Tagen nach einer Sitzung umgehen.",
    "Ich möchte, dass wir ein Codewort für „Ich brauche jetzt zusätzliche Nachsorge“ haben.",
    "Ich möchte nicht, dass wir nach einer Sitzung wichtige Entscheidungen über unsere Beziehung treffen.",
    "Ich möchte, dass wir die körperliche Nachsorge mit emotionalen Check-ins kombinieren (z. B. „Wie fühlen Sie sich gerade auf einer Skala von 1-10?“).",
    "Ich möchte, dass wir Vereinbarungen über die Nachsorge für mehrere Personen oder mit anderen treffen.",
    "Ich möchte, dass Sicherheit und Nachsorge immer Vorrang vor dem „Abschließen“ einer Szene haben.",
    "Ich möchte, dass wir ein Protokoll oder Notizen darüber führen, was im Hinblick auf die Nachsorge gut funktioniert hat.",
    "Ich halte es für wichtig, dass die Nachsorge auch dann gilt, wenn eine Sitzung abgesagt wird oder vorzeitig beendet wird."
  ]
]
};

let flatQuestions = buildFlatQuestions();

function buildFlatQuestions() {
  return categories.flatMap((category, categoryIndex) => {
    if (state.selectedCategories?.[categoryIndex] === false) return [];

    const baseQuestions = category.questions.map((text, questionIndex) => ({
      id: `${categoryIndex}-${questionIndex}`,
      text,
      category: category.title,
      categoryIndex,
      base: true
    }));

    if (!state.expandedCategories?.[categoryIndex]) return baseQuestions;

    const expandedQuestions = (expandedQuestionGroups[categoryIndex] || []).map((text, questionIndex) => ({
      id: `x-${categoryIndex}-${questionIndex}`,
      text,
      category: category.title,
      categoryIndex,
      base: false
    }));

    return [...baseQuestions, ...expandedQuestions];
  });
}

const translatedQuestionsByLanguage = {
  en: [
    [
      "I want to explicitly discuss in advance what will and will not happen.",
      "I want to agree on a safeword or stop signal.",
      "I want to talk through the experience together afterwards.",
      "I want boundaries to be able to change during play without needing an explanation.",
      "I want clear agreements about privacy and discretion.",
      "I want a calm fantasy or conversation round before trying new things, without pressure.",
      "I want regular check-ins during play.",
      "I want a 'maybe' to always be treated as 'not yet'.",
      "I want to be able to mark each activity as fantasy only, discussable, or truly desired.",
      "I want to agree in advance which words may or may not be used."
    ],
    [
      "I am curious about a dominant role.",
      "I am curious about a submissive role.",
      "I find switching between roles interesting.",
      "I want to give up control within clearly agreed boundaries.",
      "I want to play with tasks, rituals, or protocols.",
      "I want my partner to physically hold me during sexual acts.",
      "I want my partner to decide when I may move, speak, or orgasm.",
      "I want to experiment with rewarding, teasing, or denial.",
      "I only want humiliation or teasing language if we have agreed the words beforehand.",
      "I want the power dynamic to stop as soon as I feel unsure, scared, or uncomfortable."
    ],
    [
      "I would like to be tied up during sex.",
      "I want to tie up my partner during sex.",
      "I want to try light bondage with hands, a scarf, cuffs, or rope.",
      "I want to use blindfolds as part of sensual play.",
      "I want to be gagged or try a gag, with extra clear stop agreements.",
      "I only want to try bondage if I can be released quickly and safely.",
      "I want to experiment with being restrained to a bed, chair, or other sturdy furniture.",
      "I only want suspension or partial lifting with experience, suitable materials, and a safety plan.",
      "I want to avoid positions that could affect breathing, circulation, or panic.",
      "I want agreements about duration and check-ins for every form of restraint."
    ],
    [
      "I am curious about soft impact or spanking.",
      "I am curious about firmer impact within clear boundaries.",
      "I want pain as part of our play, such as pinching, biting, or hitting.",
      "I want to experiment with whips, paddles, floggers, or other impact toys.",
      "I only want bite marks, biting, or sucking on places we choose in advance.",
      "I want to play with temperature, texture, or pressure.",
      "I want to explore sensory restriction, such as a blindfold, earplugs, or music.",
      "I only want to try wax play, ice, or hot/cold play with safe materials.",
      "I want to explicitly agree what intensity is safe and pleasant.",
      "I want to avoid bruises, visible marks, or pain afterwards."
    ],
    [
      "I feel interest in leather, latex, lingerie, or specific clothing.",
      "I want to explore roleplay or a persona.",
      "I want to use words, titles, or forms of address.",
      "I want to avoid certain smells, materials, or looks.",
      "I want appearance to remain secondary to comfort and consent.",
      "I want to experiment with masks, harnesses, collars, or cuffs.",
      "I want to use objects, outfits, or shoes as a fetish element.",
      "I want to take photos of outfits or poses without a sexual act.",
      "I want clothing or fetish material never to become more important than my physical comfort.",
      "I want to touch or smell certain materials before they are put on my body."
    ],
    [
      "May my partner touch my anus with fingers?",
      "May my partner penetrate my anus with fingers?",
      "I want anal stroking or trying anal as a beginner, calmly and without pressure.",
      "I want anal penetration with a toy.",
      "I want anal sex with a penis.",
      "I want double penetration as a fantasy or possible experience.",
      "I only want to feel a second penis or toy at the same time if preparation, safety, and consent are clear.",
      "I want agreements in advance about lubricant, hygiene, condoms, and stopping.",
      "I want anal activities to stop immediately with pain, panic, or doubt.",
      "I only want to try anal when I control the pace."
    ],
    [
      "I want to orally pleasure my partner while they hold me.",
      "I want my head, hands, or pace to be physically guided during oral sex.",
      "I may want to orally pleasure another woman someday.",
      "I want to receive oral sex from someone other than my regular partner.",
      "I want ejaculation on my face.",
      "I want ejaculation in or around my mouth.",
      "I want ejaculation on my chest or body.",
      "I want to agree in advance where ejaculation may and may not happen.",
      "I want to explicitly choose swallowing, spitting, or avoiding semen.",
      "I want to use condoms, dental dams, or other protection during oral sex."
    ],
    [
      "I want to gain experience with BDSM toys.",
      "I want to discover vibrators, plugs, dildos, or strokers together.",
      "I want to introduce restraints, blindfolds, clamps, or impact toys calmly.",
      "I want chastity or locking genitals as fantasy or play.",
      "I only want locks, cages, or keyholder dynamics with clear emergency agreements.",
      "I only want to share toys with others with hygiene, condoms, and clear consent.",
      "I want to avoid electrical, breath-related, or high-risk toys unless there is knowledge and a safety plan.",
      "I want to test new toys outside sex first.",
      "I want toys removed immediately if something feels numb, painful, or unsafe.",
      "I want to make a list together of toys that spark curiosity."
    ],
    [
      "Would you be open to a threesome?",
      "If a threesome is possible, do you want to indicate preferences around man, woman, or both?",
      "Would you be open to a threesome with someone we know?",
      "Would you be open to a threesome with someone we do not know yet?",
      "Would you be open to a group sex party with people we know?",
      "If group sex is possible, do you want to indicate preferences around men, women, or both?",
      "How do you feel about more than two people pleasuring, touching, or penetrating you at the same time?",
      "Would you want to be touched by more than four people at the same time?",
      "I want rules about who may touch me, where, and how.",
      "I want agreements in advance about condoms, STI testing, boundaries, and aftercare with multiple people."
    ],
    [
      "Would you be open to going to a swingers club together?",
      "I only want to visit swingers clubs to look around and feel the atmosphere.",
      "I want to meet new people without any obligation to sexual acts.",
      "I want to share sexual experiences with others within an open relationship situation.",
      "I want clear rules in advance about kissing, touching, oral sex, and penetration with others.",
      "I want to agree whether we always stay together or may also have separate contact.",
      "I want agreements about jealousy, stopping, and checking in afterwards.",
      "I only want dating, chatting, or flirting with others to happen transparently.",
      "I do not want open relationship experiences to be used to pressure me.",
      "I want our relationship agreements to be written down or made very explicit."
    ],
    [
      "How do you feel about public displays of affection in spaces where we are not alone?",
      "How do you feel about erotic tension in places where others may be nearby?",
      "I only want public or semi-public situations if nobody is unwillingly involved.",
      "I want to explore sex in kinky locations around the house.",
      "I want to look around the house for places for secret or playful sex adventures.",
      "I want to try sex outside the bedroom.",
      "I want to experiment with the risk of being caught only in private or agreed environments.",
      "I want to avoid public sexual acts if others could see them without consent.",
      "I want public eroticism to remain legal, safe, and respectful.",
      "I always want an exit plan for locations outside the bed or bedroom."
    ],
    [
      "How do you feel about exchanging sexual photos or videos with your partner?",
      "How do you feel about exchanging sexual photos or videos with others?",
      "I want to take erotic photos without a recognizable face.",
      "I want to make sexual videos only for private use between us.",
      "I want nude images never to be forwarded without explicit consent at that moment.",
      "I want to avoid sharing on websites or platforms, even without faces.",
      "I want to be able to mark anonymous publication as fantasy, possibility, or hard limit.",
      "I want agreements about deletion, storage, passwords, and cloud backups.",
      "I do not want images made when someone is under the influence, tired, or emotionally vulnerable.",
      "I want withdrawal of consent to mean that images are deleted."
    ],
    [
      "How do you feel about libido-enhancing substances?",
      "I only want to consider Viagra or similar substances after a medical check or professional advice.",
      "I want to avoid drugs or alcohol with new or intense BDSM experiences.",
      "I want to stay sober during bondage, impact, anal, or group sex.",
      "I want agreements about breaks, water, food, and sleep.",
      "I want to stop if substances could affect my boundaries, consent, or memory.",
      "I never want supplements, medication, or stimulants to be used as pressure.",
      "I want to share in advance which medication or health risks are relevant.",
      "I want sexual adventures to be allowed to be good enough without substances too.",
      "I want energy, cycle, stress, or mental state to be included in our planning."
    ],
    [
      "I want physical aftercare such as water, warmth, rest, or touch.",
      "I want emotional aftercare such as reassurance or silence.",
      "I want a check-in later that day or the next day.",
      "I want to be able to share medical, trauma, or trigger information in advance.",
      "I want a clear agreement for stopping, pausing, and cleaning up.",
      "I want agreements about what helps if I shut down, cry, or become overstimulated.",
      "I want disappointment never to be taken out on me when I say no.",
      "I want time after intense play without new sexual pressure.",
      "I want boundaries in this questionnaire to be revisited regularly.",
      "I want hard limits to always be respected without debate."
    ]
  ]
};

translatedQuestionsByLanguage.fr = [
  [
    "Je veux discuter explicitement à l’avance de ce qui arrivera et de ce qui n’arrivera pas.",
    "Je veux me mettre d'accord sur un mot de sécurité ou un signal d'arrêt.",
    "Je veux parler de cette expérience ensemble après.",
    "Je veux que les limites puissent changer pendant le jeu sans avoir besoin d'explication.",
    "Je veux des accords clairs sur la confidentialité et la discrétion.",
    "Je veux un fantasme calme ou une conversation avant d’essayer de nouvelles choses, sans pression.",
    "Je souhaite des enregistrements réguliers pendant le jeu.",
    "Je veux qu'un « peut-être » soit toujours traité comme « pas encore ».",
    "Je veux pouvoir marquer chaque activité comme étant uniquement fantastique, discutable ou vraiment souhaitée.",
    "Je veux convenir à l’avance des mots qui peuvent ou non être utilisés."
  ],
  [
    "Je suis curieux de connaître un rôle dominant.",
    "Je suis curieux de connaître un rôle de soumis.",
    "Je trouve intéressant de changer de rôle.",
    "Je veux abandonner le contrôle dans des limites clairement convenues.",
    "Je veux jouer avec des tâches, des rituels ou des protocoles.",
    "Je veux que mon partenaire me tienne physiquement pendant les actes sexuels.",
    "Je veux que mon partenaire décide quand je peux bouger, parler ou avoir un orgasme.",
    "Je veux expérimenter la récompense, la taquinerie ou le déni.",
    "Je ne veux de l'humiliation ou un langage taquin que si nous avons convenu des mots au préalable.",
    "Je veux que la dynamique de pouvoir s’arrête dès que je me sens incertain, effrayé ou mal à l’aise."
  ],
  [
    "J'aimerais être ligotée pendant les rapports sexuels.",
    "Je veux attacher mon partenaire pendant les rapports sexuels.",
    "Je veux essayer un bondage léger avec les mains, un foulard, des menottes ou une corde.",
    "Je veux utiliser les bandeaux dans le cadre d'un jeu sensuel.",
    "J'ai envie d'être bâillonné ou de tenter un bâillon, avec des accords d'arrêt très clairs.",
    "Je veux seulement essayer le bondage si je peux être libéré rapidement et en toute sécurité.",
    "Je veux expérimenter le fait d'être attaché à un lit, une chaise ou un autre meuble solide.",
    "Je souhaite uniquement une suspension ou un levage partiel avec de l'expérience, du matériel adapté et un plan de sécurité.",
    "Je veux éviter les positions qui pourraient affecter la respiration, la circulation ou la panique.",
    "Je veux des accords sur la durée et les enregistrements pour chaque forme de contrainte."
  ],
  [
    "Je suis curieux de connaître les impacts doux ou la fessée.",
    "Je suis curieux de connaître un impact plus ferme dans des limites claires.",
    "Je veux que la douleur fasse partie de notre jeu, comme pincer, mordre ou frapper.",
    "Je veux expérimenter avec des fouets, des pagaies, des floggers ou d'autres jouets à impact.",
    "Je veux seulement des marques de morsure, de morsure ou de succion à des endroits que nous choisissons à l'avance.",
    "Je veux jouer avec la température, la texture ou la pression.",
    "Je souhaite explorer les restrictions sensorielles, comme un bandeau sur les yeux, des bouchons d'oreilles ou de la musique.",
    "Je veux seulement essayer le jeu de cire, la glace ou le jeu chaud/froid avec des matériaux sûrs.",
    "Je veux explicitement convenir de quelle intensité est sûre et agréable.",
    "Je veux éviter les bleus, les marques visibles ou les douleurs par la suite."
  ],
  [
    "Je ressens un intérêt pour le cuir, le latex, la lingerie ou des vêtements spécifiques.",
    "Je veux explorer le jeu de rôle ou un personnage.",
    "Je souhaite utiliser des mots, des titres ou des formes d'adresse.",
    "Je veux éviter certaines odeurs, matériaux ou looks.",
    "Je veux que l’apparence reste secondaire par rapport au confort et au consentement.",
    "Je veux expérimenter avec des masques, des harnais, des colliers ou des manchettes.",
    "Je souhaite utiliser des objets, des tenues ou des chaussures comme élément fétichiste.",
    "Je veux prendre des photos de tenues ou de poses sans acte sexuel.",
    "Je veux que les vêtements ou le matériel fétichiste ne deviennent jamais plus importants que mon confort physique.",
    "Je veux toucher ou sentir certains matériaux avant de les appliquer sur mon corps."
  ],
  [
    "Mon partenaire peut-il toucher mon anus avec les doigts ?",
    "Mon partenaire peut-il pénétrer mon anus avec les doigts ?",
    "Je souhaite des caresses anales ou essayer l'anal en tant que débutant, calmement et sans pression.",
    "Je veux une pénétration anale avec un jouet.",
    "Je veux du sexe anal avec un pénis.",
    "Je souhaite la double pénétration comme fantasme ou expérience possible.",
    "Je veux seulement sentir un deuxième pénis ou un deuxième jouet en même temps si la préparation, la sécurité et le consentement sont clairs.",
    "Je veux des accords à l'avance sur le lubrifiant, l'hygiène, les préservatifs et l'arrêt.",
    "Je veux que les activités anales s'arrêtent immédiatement en cas de douleur, de panique ou de doute.",
    "Je veux seulement essayer l'anal lorsque je contrôle le rythme."
  ],
  [
    "Je veux faire plaisir oralement à mon partenaire pendant qu'il me tient.",
    "Je veux que ma tête, mes mains ou mon rythme soient physiquement guidés pendant le sexe oral.",
    "J'aurai peut-être envie de faire plaisir oralement à une autre femme un jour.",
    "Je souhaite recevoir du sexe oral de la part d'une personne autre que mon partenaire habituel.",
    "Je veux de l'éjaculation sur mon visage.",
    "Je veux de l'éjaculation dans ou autour de ma bouche.",
    "Je veux une éjaculation sur ma poitrine ou sur mon corps.",
    "Je veux convenir à l'avance des endroits où l'éjaculation peut ou non se produire.",
    "Je veux explicitement choisir d’avaler, de cracher ou d’éviter le sperme.",
    "Je souhaite utiliser des préservatifs, des digues dentaires ou toute autre protection pendant les relations sexuelles orales."
  ],
  [
    "Je souhaite acquérir de l'expérience avec les jouets BDSM.",
    "Je souhaite découvrir ensemble des vibromasseurs, des plugs, des godes ou des masturbateurs.",
    "Je souhaite introduire sereinement les contentions, les bandeaux, les pinces ou les jouets à impact.",
    "Je veux la chasteté ou le verrouillage des organes génitaux comme fantasme ou comme jeu.",
    "Je veux seulement des serrures, des cages ou des dynamiques de porte-clés avec des accords d'urgence clairs.",
    "Je veux seulement partager des jouets avec d'autres avec des mesures d'hygiène, des préservatifs et un consentement clair.",
    "Je veux éviter les jouets électriques, liés à la respiration ou à haut risque, à moins d'avoir des connaissances et un plan de sécurité.",
    "Je veux d’abord tester de nouveaux jouets en dehors du sexe.",
    "Je veux que les jouets soient retirés immédiatement si quelque chose semble engourdi, douloureux ou dangereux.",
    "Je veux dresser ensemble une liste de jouets qui suscitent la curiosité."
  ],
  [
    "Seriez-vous ouvert à un trio ?",
    "Si un plan à trois est possible, souhaitez-vous indiquer des préférences autour d'un homme, d'une femme ou des deux ?",
    "Seriez-vous ouvert à un plan à trois avec quelqu'un que nous connaissons ?",
    "Seriez-vous ouvert à un plan à trois avec quelqu'un que nous ne connaissons pas encore ?",
    "Seriez-vous ouvert à une soirée sexe en groupe avec des personnes que nous connaissons ?",
    "Si le sexe en groupe est possible, souhaitez-vous indiquer des préférences concernant les hommes, les femmes ou les deux ?",
    "Que pensez-vous du fait que plus de deux personnes vous font plaisir, vous touchent ou vous pénètrent en même temps ?",
    "Voudriez-vous être touché par plus de quatre personnes en même temps ?",
    "Je veux des règles sur qui peut me toucher, où et comment.",
    "Je veux des accords à l'avance sur les préservatifs, le dépistage des IST, les limites et le suivi avec plusieurs personnes."
  ],
  [
    "Seriez-vous disposé à aller ensemble dans un club échangiste ?",
    "Je veux seulement visiter les clubs échangistes pour regarder autour de moi et ressentir l'atmosphère.",
    "Je veux rencontrer de nouvelles personnes sans aucune obligation d'actes sexuels.",
    "Je souhaite partager des expériences sexuelles avec d'autres dans une situation de relation ouverte.",
    "Je veux des règles claires à l’avance concernant les baisers, les attouchements, le sexe oral et la pénétration avec les autres.",
    "Je veux convenir si nous restons toujours ensemble ou si nous pouvons également avoir des contacts séparés.",
    "Je veux des accords sur la jalousie, l'arrêt et l'enregistrement par la suite.",
    "Je veux seulement que les rencontres, les discussions ou les flirts avec les autres se déroulent de manière transparente.",
    "Je ne veux pas que les expériences de relations ouvertes soient utilisées pour me mettre la pression.",
    "Je veux que nos accords relationnels soient écrits ou rendus très explicites."
  ],
  [
    "Que pensez-vous des démonstrations publiques d’affection dans des espaces où nous ne sommes pas seuls ?",
    "Que pensez-vous de la tension érotique dans les endroits où d’autres peuvent se trouver à proximité ?",
    "Je ne veux que des situations publiques ou semi-publiques si personne n’est impliqué involontairement.",
    "Je veux explorer le sexe dans des endroits coquins autour de la maison.",
    "Je veux chercher dans la maison des endroits pour des aventures sexuelles secrètes ou ludiques.",
    "Je veux essayer le sexe en dehors de la chambre.",
    "Je veux expérimenter le risque d'être attrapé uniquement dans des environnements privés ou convenus.",
    "Je veux éviter les actes sexuels en public si d’autres peuvent les voir sans consentement.",
    "Je veux que l’érotisme public reste légal, sûr et respectueux.",
    "Je veux toujours un plan de sortie pour les endroits en dehors du lit ou de la chambre."
  ],
  [
    "Que pensez-vous de l’échange de photos ou de vidéos à caractère sexuel avec votre partenaire ?",
    "Que pensez-vous de l’échange de photos ou de vidéos à caractère sexuel avec d’autres ?",
    "Je veux prendre des photos érotiques sans visage reconnaissable.",
    "Je souhaite réaliser des vidéos sexuelles uniquement pour un usage privé entre nous.",
    "Je souhaite que les images de nus ne soient jamais transmises sans le consentement explicite du moment.",
    "Je veux éviter de partager sur des sites Web ou des plateformes, même sans visage.",
    "Je veux pouvoir marquer la publication anonyme comme un fantasme, une possibilité ou une limite stricte.",
    "Je veux des accords sur la suppression, le stockage, les mots de passe et les sauvegardes dans le cloud.",
    "Je ne veux pas d’images réalisées lorsque quelqu’un est sous influence, fatigué ou émotionnellement vulnérable.",
    "Je veux que le retrait du consentement signifie que les images sont supprimées."
  ],
  [
    "Que pensez-vous des substances qui augmentent la libido ?",
    "Je ne souhaite envisager le Viagra ou des substances similaires qu'après un contrôle médical ou un avis professionnel.",
    "Je veux éviter les drogues ou l'alcool lors d'expériences BDSM nouvelles ou intenses.",
    "Je veux rester sobre pendant le bondage, l'impact, le sexe anal ou en groupe.",
    "Je veux des accords sur les pauses, l’eau, la nourriture et le sommeil.",
    "Je veux arrêter si les substances pourraient affecter mes limites, mon consentement ou ma mémoire.",
    "Je ne veux jamais que des suppléments, des médicaments ou des stimulants soient utilisés comme pression.",
    "Je souhaite partager à l’avance quels médicaments ou quels risques pour la santé sont pertinents.",
    "Je veux que les aventures sexuelles puissent également être assez bonnes sans substances.",
    "Je veux que l’énergie, le cycle, le stress ou l’état mental soient inclus dans notre planification."
  ],
  [
    "Je veux des soins physiques comme de l’eau, de la chaleur, du repos ou du toucher.",
    "Je veux un suivi émotionnel comme du réconfort ou du silence.",
    "Je souhaite un enregistrement plus tard dans la journée ou le lendemain.",
    "Je veux pouvoir partager à l’avance des informations médicales, traumatiques ou déclencheurs.",
    "Je veux un accord clair pour l’arrêt, la pause et le nettoyage.",
    "Je veux des accords sur ce qui m'aide si je m'arrête, pleure ou suis trop stimulé.",
    "Je veux que je ne sois jamais déçu lorsque je dis non.",
    "Je veux du temps après un jeu intense sans nouvelle pression sexuelle.",
    "Je souhaite que les limites de ce questionnaire soient revues régulièrement.",
    "Je veux que des limites strictes soient toujours respectées sans débat."
  ]
];
translatedQuestionsByLanguage.de = [
  [
    "Ich möchte im Vorfeld explizit besprechen, was passieren wird und was nicht.",
    "Ich möchte mich auf ein Safeword oder Stoppsignal einigen.",
    "Ich möchte anschließend gemeinsam über das Erlebnis sprechen.",
    "Ich möchte, dass sich Grenzen während des Spiels ändern können, ohne dass es einer Erklärung bedarf.",
    "Ich möchte klare Vereinbarungen über Privatsphäre und Diskretion.",
    "Ich möchte eine ruhige Fantasie- oder Gesprächsrunde, bevor ich neue Dinge ausprobiere, ohne Druck.",
    "Ich möchte während des Spiels regelmäßig einchecken.",
    "Ich möchte, dass ein „vielleicht“ immer als „noch nicht“ behandelt wird.",
    "Ich möchte in der Lage sein, jede Aktivität als reine Fantasie, diskutierbar oder wirklich erwünscht zu kennzeichnen.",
    "Ich möchte vorab vereinbaren, welche Wörter verwendet werden dürfen und welche nicht."
  ],
  [
    "Ich bin neugierig auf eine dominante Rolle.",
    "Ich bin neugierig auf eine unterwürfige Rolle.",
    "Ich finde den Rollenwechsel interessant.",
    "Ich möchte innerhalb klar vereinbarter Grenzen die Kontrolle abgeben.",
    "Ich möchte mit Aufgaben, Ritualen oder Protokollen spielen.",
    "Ich möchte, dass mein Partner mich bei sexuellen Handlungen körperlich festhält.",
    "Ich möchte, dass mein Partner entscheidet, wann ich mich bewegen, sprechen oder zum Orgasmus kommen darf.",
    "Ich möchte mit Belohnen, Necken oder Verleugnen experimentieren.",
    "Demütigende oder neckende Sprache möchte ich nur, wenn wir die Worte vorher vereinbart haben.",
    "Ich möchte, dass die Kraftdynamik aufhört, sobald ich mich unsicher, ängstlich oder unwohl fühle."
  ],
  [
    "Ich möchte beim Sex gefesselt sein.",
    "Ich möchte meinen Partner beim Sex fesseln.",
    "Ich möchte leichtes Fesseln mit Händen, einem Schal, Handschellen oder einem Seil ausprobieren.",
    "Ich möchte Augenbinden als Teil eines sinnlichen Spiels verwenden.",
    "Ich möchte geknebelt werden oder es mit besonders klaren Stoppvereinbarungen versuchen.",
    "Ich möchte Fesseln nur ausprobieren, wenn ich schnell und sicher befreit werden kann.",
    "Ich möchte damit experimentieren, an einem Bett, einem Stuhl oder anderen stabilen Möbeln festgebunden zu sein.",
    "Ich möchte nur mit Erfahrung, geeigneten Materialien und einem Sicherheitsplan eine Aussetzung oder teilweise Anhebung.",
    "Ich möchte Positionen vermeiden, die die Atmung, den Kreislauf oder Panik beeinträchtigen könnten.",
    "Ich möchte Vereinbarungen über die Dauer und den Check-in für jede Art von Zurückhaltung."
  ],
  [
    "Ich bin neugierig auf Soft Impact oder Spanking.",
    "Ich bin neugierig auf eine stärkere Wirkung innerhalb klarer Grenzen.",
    "Ich möchte Schmerzen als Teil unseres Spiels, wie z. B. Kneifen, Beißen oder Schlagen.",
    "Ich möchte mit Peitschen, Paddeln, Peitschen oder anderen Schlagspielzeugen experimentieren.",
    "Ich möchte nur Bissspuren, Beißen oder Saugen an Stellen, die wir im Voraus auswählen.",
    "Ich möchte mit Temperatur, Textur oder Druck spielen.",
    "Ich möchte sensorische Einschränkungen erforschen, wie zum Beispiel eine Augenbinde, Ohrstöpsel oder Musik.",
    "Ich möchte nur Wachsspiele, Eis oder Heiß-/Kaltspiele mit sicheren Materialien ausprobieren.",
    "Ich möchte ausdrücklich zustimmen, welche Intensität sicher und angenehm ist.",
    "Ich möchte blaue Flecken, sichtbare Flecken oder Schmerzen im Nachhinein vermeiden."
  ],
  [
    "Ich interessiere mich für Leder, Latex, Dessous oder bestimmte Kleidung.",
    "Ich möchte Rollenspiele oder eine Persona erkunden.",
    "Ich möchte Wörter, Titel oder Anredeformen verwenden.",
    "Ich möchte bestimmte Gerüche, Materialien oder Optiken vermeiden.",
    "Ich möchte, dass das Aussehen gegenüber Trost und Zustimmung zweitrangig bleibt.",
    "Ich möchte mit Masken, Geschirren, Halsbändern oder Manschetten experimentieren.",
    "Ich möchte Gegenstände, Outfits oder Schuhe als Fetischelement verwenden.",
    "Ich möchte Outfits oder Posen ohne sexuellen Akt fotografieren.",
    "Ich möchte, dass Kleidung oder Fetischmaterial niemals wichtiger werden als mein körperliches Wohlbefinden.",
    "Ich möchte bestimmte Materialien berühren oder riechen, bevor sie auf meinen Körper aufgetragen werden."
  ],
  [
    "Darf mein Partner meinen Anus mit den Fingern berühren?",
    "Darf mein Partner mit den Fingern in meinen Anus eindringen?",
    "Ich möchte als Anfänger Anal streicheln oder Anal ausprobieren, ruhig und ohne Druck.",
    "Ich möchte eine anale Penetration mit einem Spielzeug.",
    "Ich möchte Analsex mit einem Penis.",
    "Ich möchte Doppelpenetration als Fantasie oder mögliches Erlebnis.",
    "Ich möchte nur dann gleichzeitig einen zweiten Penis oder ein zweites Spielzeug spüren, wenn Vorbereitung, Sicherheit und Zustimmung klar sind.",
    "Ich möchte vorab Absprachen über Gleitmittel, Hygiene, Kondome und Stoppen.",
    "Ich möchte, dass anale Aktivitäten bei Schmerzen, Panik oder Zweifeln sofort aufhören.",
    "Ich möchte es nur dann anal versuchen, wenn ich das Tempo kontrolliere."
  ],
  [
    "Ich möchte meinen Partner oral beglücken, während er mich festhält.",
    "Ich möchte, dass mein Kopf, meine Hände oder mein Tempo beim Oralsex körperlich gesteuert werden.",
    "Vielleicht möchte ich eines Tages eine andere Frau oral beglücken.",
    "Ich möchte Oralsex von jemand anderem als meinem regulären Partner erhalten.",
    "Ich möchte eine Ejakulation in meinem Gesicht.",
    "Ich möchte eine Ejakulation in oder um meinen Mund.",
    "Ich möchte eine Ejakulation auf meiner Brust oder meinem Körper.",
    "Ich möchte im Voraus vereinbaren, wo eine Ejakulation stattfinden darf und wo nicht.",
    "Ich möchte mich ausdrücklich für das Schlucken, Spucken oder das Vermeiden von Sperma entscheiden.",
    "Ich möchte beim Oralsex Kondome, Kofferdam oder andere Schutzmaßnahmen verwenden."
  ],
  [
    "Ich möchte Erfahrungen mit BDSM-Spielzeugen sammeln.",
    "Ich möchte gemeinsam Vibratoren, Plugs, Dildos oder Stroker entdecken.",
    "Ich möchte Fesseln, Augenbinden, Klammern oder Schlagspielzeuge in Ruhe einführen.",
    "Ich möchte Keuschheit oder das Sperren der Genitalien als Fantasie oder Spiel.",
    "Ich möchte nur Schlösser, Käfige oder Schlüsselanhänger-Dynamik mit klaren Notfallvereinbarungen.",
    "Ich möchte Spielzeug nur mit Hygiene, Kondomen und eindeutiger Zustimmung mit anderen teilen.",
    "Ich möchte elektrische, atembezogene oder risikoreiche Spielzeuge meiden, es sei denn, es liegen entsprechende Kenntnisse und ein Sicherheitsplan vor.",
    "Ich möchte zuerst neue Spielzeuge außerhalb des Sex testen.",
    "Ich möchte, dass Spielzeuge sofort entfernt werden, wenn sich etwas taub, schmerzhaft oder unsicher anfühlt.",
    "Ich möchte eine Liste mit Spielzeugen erstellen, die Neugier wecken."
  ],
  [
    "Wärst du offen für einen Dreier?",
    "Wenn ein Dreier möglich ist, möchten Sie Ihre Vorlieben bezüglich Mann, Frau oder beidem mitteilen?",
    "Wären Sie offen für einen Dreier mit jemandem, den wir kennen?",
    "Wären Sie offen für einen Dreier mit jemandem, den wir noch nicht kennen?",
    "Wären Sie offen für eine Gruppensexparty mit Leuten, die wir kennen?",
    "Wenn Gruppensex möglich ist, möchten Sie Ihre Präferenzen für Männer, Frauen oder beides angeben?",
    "Wie fühlen Sie sich, wenn mehr als zwei Menschen Sie gleichzeitig beglücken, berühren oder penetrieren?",
    "Möchten Sie von mehr als vier Menschen gleichzeitig berührt werden?",
    "Ich möchte Regeln darüber, wer mich wo und wie berühren darf.",
    "Ich möchte im Voraus Vereinbarungen über Kondome, STI-Tests, Grenzen und Nachsorge mit mehreren Personen treffen."
  ],
  [
    "Wären Sie bereit, gemeinsam in einen Swingerclub zu gehen?",
    "Ich möchte Swingerclubs nur besuchen, um mich umzusehen und die Atmosphäre zu spüren.",
    "Ich möchte neue Leute kennenlernen, ohne zu sexuellen Handlungen verpflichtet zu sein.",
    "Ich möchte sexuelle Erfahrungen in einer offenen Beziehungssituation mit anderen teilen.",
    "Ich möchte im Voraus klare Regeln für Küsse, Berührungen, Oralsex und Penetration mit anderen.",
    "Ich möchte vereinbaren, ob wir immer zusammen bleiben oder auch getrennten Kontakt haben.",
    "Ich möchte Vereinbarungen über Eifersucht, Anhalten und anschließendes Einchecken.",
    "Ich möchte nur, dass das Dating, Chatten oder Flirten mit anderen transparent geschieht.",
    "Ich möchte nicht, dass offene Beziehungserfahrungen dazu genutzt werden, Druck auf mich auszuüben.",
    "Ich möchte, dass unsere Beziehungsvereinbarungen niedergeschrieben oder sehr deutlich gemacht werden."
  ],
  [
    "Wie denkst du über öffentliche Zuneigungsbekundungen an Orten, an denen wir nicht allein sind?",
    "Wie stehen Sie zu erotischen Spannungen an Orten, an denen andere in der Nähe sein könnten?",
    "Ich möchte öffentliche oder halböffentliche Situationen nur dann, wenn niemand unfreiwillig involviert ist.",
    "Ich möchte Sex an perversen Orten im ganzen Haus erkunden.",
    "Ich möchte mich im Haus nach Orten für geheime oder spielerische Sexabenteuer umsehen.",
    "Ich möchte Sex außerhalb des Schlafzimmers ausprobieren.",
    "Ich möchte mit dem Risiko experimentieren, nur in privaten oder vereinbarten Umgebungen erwischt zu werden.",
    "Ich möchte öffentliche sexuelle Handlungen vermeiden, wenn andere sie ohne Zustimmung sehen könnten.",
    "Ich möchte, dass öffentliche Erotik legal, sicher und respektvoll bleibt.",
    "Ich möchte immer einen Fluchtplan für Orte außerhalb des Bettes oder Schlafzimmers."
  ],
  [
    "Was halten Sie davon, sexuelle Fotos oder Videos mit Ihrem Partner auszutauschen?",
    "Was halten Sie davon, sexuelle Fotos oder Videos mit anderen auszutauschen?",
    "Ich möchte erotische Fotos ohne erkennbares Gesicht machen.",
    "Ich möchte Sexvideos nur für den privaten Gebrauch zwischen uns machen.",
    "Ich möchte, dass Nacktbilder niemals ohne ausdrückliche Zustimmung zu diesem Zeitpunkt weitergeleitet werden.",
    "Ich möchte das Teilen auf Websites oder Plattformen vermeiden, auch ohne Gesichter.",
    "Ich möchte anonyme Veröffentlichungen als Fantasie, Möglichkeit oder feste Grenze markieren können.",
    "Ich möchte Vereinbarungen über Löschung, Speicherung, Passwörter und Cloud-Backups.",
    "Ich möchte nicht, dass Bilder gemacht werden, wenn jemand unter Einfluss steht, müde oder emotional verletzlich ist.",
    "Ich möchte, dass der Widerruf der Einwilligung zur Löschung der Bilder führt."
  ],
  [
    "Wie stehen Sie zu libidosteigernden Substanzen?",
    "Ich möchte Viagra oder ähnliche Substanzen nur nach einer ärztlichen Untersuchung oder professionellen Beratung in Betracht ziehen.",
    "Ich möchte Drogen oder Alkohol bei neuen oder intensiven BDSM-Erfahrungen vermeiden.",
    "Ich möchte beim Bondage-, Impact-, Anal- oder Gruppensex nüchtern bleiben.",
    "Ich möchte Vereinbarungen über Pausen, Wasser, Essen und Schlaf.",
    "Ich möchte aufhören, wenn Substanzen meine Grenzen, mein Einverständnis oder mein Gedächtnis beeinträchtigen könnten.",
    "Ich möchte niemals, dass Nahrungsergänzungsmittel, Medikamente oder Stimulanzien als Druckmittel eingesetzt werden.",
    "Ich möchte vorab mitteilen, welche Medikamente oder Gesundheitsrisiken relevant sind.",
    "Ich möchte, dass sexuelle Abenteuer auch ohne Substanzen gut genug sein dürfen.",
    "Ich möchte, dass Energie, Zyklus, Stress oder mentaler Zustand in unsere Planung einbezogen werden."
  ],
  [
    "Ich möchte körperliche Nachsorge wie Wasser, Wärme, Ruhe oder Berührung.",
    "Ich möchte eine emotionale Nachsorge wie Beruhigung oder Stille.",
    "Ich möchte später am Tag oder am nächsten Tag einchecken.",
    "Ich möchte in der Lage sein, medizinische, traumatische oder auslösende Informationen im Voraus weiterzugeben.",
    "Ich möchte eine klare Vereinbarung zum Anhalten, Innehalten und Aufräumen.",
    "Ich möchte Vereinbarungen darüber, was hilft, wenn ich abschalte, weine oder überreizt werde.",
    "Ich möchte, dass ich nie enttäuscht werde, wenn ich Nein sage.",
    "Ich möchte nach dem intensiven Spiel Zeit ohne neuen sexuellen Druck.",
    "Ich möchte, dass die Grenzen in diesem Fragebogen regelmäßig überprüft werden.",
    "Ich möchte, dass harte Grenzen immer ohne Debatte respektiert werden."
  ]
];
translatedQuestionsByLanguage.nl = categories.map((category) => category.questions);

Object.entries(translatedQuestionsByLanguage).forEach(([language, categoryGroups]) => {
  categoryGroups.forEach((questions, categoryIndex) => {
    questions.forEach((text, questionIndex) => {
      questionTranslations[language][`${categoryIndex}-${questionIndex}`] = text;
    });
  });
});

Object.entries(expandedQuestionTranslations).forEach(([language, categoryGroups]) => {
  categoryGroups.forEach((questions, categoryIndex) => {
    questions.forEach((text, questionIndex) => {
      questionTranslations[language][`x-${categoryIndex}-${questionIndex}`] = text;
    });
  });
});

const elements = {
  ageGate: document.querySelector("#ageGate"),
  adultCheck: document.querySelector("#adultCheck"),
  consentCheck: document.querySelector("#consentCheck"),
  languageSelect: document.querySelector("#languageSelect"),
  categoryPicker: document.querySelector("#categoryPicker"),
  categoryPickerGrid: document.querySelector("#categoryPickerGrid"),
  selectAllCategories: document.querySelector("#selectAllCategories"),
  enterButton: document.querySelector("#enterButton"),
  startButton: document.querySelector("#startButton"),
  resetButton: document.querySelector("#resetButton"),
  questionnaire: document.querySelector("#questionnaire"),
  categoryList: document.querySelector("#categoryList"),
  categoryTemplate: document.querySelector("#categoryButtonTemplate"),
  progressLabel: document.querySelector("#progressLabel"),
  progressBar: document.querySelector("#progressBar"),
  liveSummary: document.querySelector("#liveSummary"),
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
  copySetupLinks: document.querySelectorAll("[data-copy-setup-link]"),
  copyShareLink: document.querySelector("#copyShareLink"),
  printResults: document.querySelector("#printResults")
};

init();

function init() {
  applyLanguage();
  buildCategoryPicker();
  buildCategories();
  bindEvents();
  updateEnterButtonState();

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
      language: supportedLanguages.includes(saved?.language) ? saved.language : defaultLanguage,
      selectedCategories: normalizeSelectedCategories(saved?.selectedCategories),
      expandedCategories: saved?.expandedCategories || {},
      responses: saved?.responses || {}
    };
  } catch {
    return {
      allowed: false,
      language: defaultLanguage,
      selectedCategories: defaultSelectedCategories(),
      expandedCategories: {},
      responses: {}
    };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function defaultSelectedCategories() {
  return Object.fromEntries(categories.map((_, index) => [index, true]));
}

function normalizeSelectedCategories(selectedCategories) {
  const hasSavedChoice = selectedCategories && typeof selectedCategories === "object";
  return Object.fromEntries(categories.map((_, index) => [index, hasSavedChoice ? selectedCategories[index] !== false : true]));
}

function selectedCategoryIndexes() {
  return categories.map((_, index) => index).filter((index) => state.selectedCategories?.[index] !== false);
}

function hasSelectedCategory() {
  return selectedCategoryIndexes().length > 0;
}

function t(key, replacements = {}) {
  const value = uiText[state.language]?.[key] || uiText[defaultLanguage][key] || key;
  return Object.entries(replacements).reduce((text, [name, replacement]) => text.replaceAll(`{${name}}`, replacement), value);
}

function applyLanguage() {
  const language = supportedLanguages.includes(state.language) ? state.language : defaultLanguage;
  state.language = language;
  document.documentElement.lang = language;
  document.title = t("documentTitle");
  document.querySelector("meta[name='description']")?.setAttribute("content", t("description"));
  elements.languageSelect.value = language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelector(".hero .kicker").textContent = t("heroKicker");
  document.querySelector("#page-title").textContent = t("heroTitle");
  document.querySelector(".intro").textContent = t("intro");
  elements.startButton.textContent = t("start");
  elements.resetButton.textContent = t("reset");
  document.querySelector(".progress-card .kicker").textContent = t("progress");
  document.querySelector(".sidebar").setAttribute("aria-label", t("categories"));
  document.querySelector("#answerHelp").textContent = t("answerHelp");
  document.querySelector(".notes span").textContent = t("notesLabel");
  elements.noteInput.placeholder = t("notesPlaceholder");
  elements.prevButton.textContent = t("previous");
  elements.copyResults.textContent = t("copy");
  elements.copySetupLinks.forEach((button) => {
    button.textContent = t("quizLink");
  });
  elements.copyShareLink.textContent = t("partnerLink");
  elements.printResults.textContent = t("print");
  elements.shareNote.textContent = t("shareNote");
  document.querySelector(".results__head .kicker").textContent = t("summary");
  buildCategoryPicker();
  updateSetupUi();
}

function localizeAnswerLabel(label) {
  return answerLabelTranslations[state.language]?.[label] || label;
}

function localizeCategoryTitle(title) {
  return categoryTitleTranslations[state.language]?.[title] || title;
}

function localizeQuestion(question) {
  return questionTranslations[state.language]?.[question.id] || question.text;
}

function buildCategoryPicker() {
  elements.categoryPickerGrid.innerHTML = "";

  categories.forEach((category, index) => {
    const label = document.createElement("label");
    label.className = "category-choice";
    label.innerHTML = `<input type="checkbox" value="${index}"><span>${escapeHtml(localizeCategoryTitle(category.title))}</span>`;
    const checkbox = label.querySelector("input");
    checkbox.checked = state.selectedCategories?.[index] !== false;
    checkbox.addEventListener("change", () => {
      state.selectedCategories[index] = checkbox.checked;
      saveState();
      refreshQuestionSet();
      updateEnterButtonState();
    });
    elements.categoryPickerGrid.append(label);
  });
}

function updateSetupUi() {
  elements.categoryPicker.hidden = Boolean(pendingSetup);
}

function refreshQuestionSet() {
  flatQuestions = buildFlatQuestions();
  currentIndex = Math.max(0, Math.min(currentIndex, flatQuestions.length - 1));
  buildCategories();
  if (flatQuestions.length) {
    renderQuestion();
  } else {
    updateProgress();
  }
}

function bindEvents() {
  elements.languageSelect.addEventListener("change", () => {
    state.language = elements.languageSelect.value;
    saveState();
    applyLanguage();
    buildCategories();
    renderQuestion();
    if (!elements.results.hidden) {
      renderResults(activeResultResponses, { shared: sharedMode });
    }
    updateEnterButtonState();
  });

  elements.selectAllCategories.addEventListener("click", () => {
    state.selectedCategories = defaultSelectedCategories();
    saveState();
    refreshQuestionSet();
    buildCategoryPicker();
    updateEnterButtonState();
  });

  ["change", "input", "click"].forEach((eventName) => {
    [elements.adultCheck, elements.consentCheck].forEach((checkbox) => {
      checkbox.addEventListener(eventName, updateEnterButtonState);
    });
  });

  window.addEventListener("pageshow", updateEnterButtonState);

  elements.enterButton.addEventListener("click", () => {
    updateEnterButtonState();
    if (elements.enterButton.disabled) return;
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
      elements.ageGate.hidden = false;
      return;
    }
    showQuestionnaire();
  });

  elements.resetButton.addEventListener("click", () => {
    if (!confirm(t("clearConfirm"))) return;
    localStorage.removeItem(storageKey);
    state.allowed = false;
    state.language = defaultLanguage;
    state.selectedCategories = defaultSelectedCategories();
    state.expandedCategories = {};
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
  elements.copySetupLinks.forEach((button) => {
    button.addEventListener("click", copySetupLink);
  });
  elements.copyShareLink.addEventListener("click", copyShareLink);
}

function updateEnterButtonState() {
  elements.enterButton.disabled = !(elements.adultCheck.checked && elements.consentCheck.checked && hasSelectedCategory());
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
  document.body.classList.remove("is-shared-view");
  activeResultResponses = state.responses;
  if (location.hash.startsWith("#share=") || location.hash.startsWith("#setup=")) {
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
    if (state.selectedCategories?.[index] === false) return;

    const row = document.createElement("div");
    row.className = "category-row";
    const fragment = elements.categoryTemplate.content.cloneNode(true);
    const button = fragment.querySelector("button");
    const expanded = Boolean(state.expandedCategories?.[index]);
    const extraCount = expandedQuestionGroups[index]?.length || 0;
    const categoryQuestions = flatQuestions.filter((question) => question.categoryIndex === index);
    const answeredCount = categoryQuestions.filter((question) => state.responses[question.id]?.answer).length;
    button.dataset.category = String(index);
    fragment.querySelector(".category-button__name").textContent = localizeCategoryTitle(category.title);
    fragment.querySelector(".category-button__count").textContent = `${answeredCount}/${categoryQuestions.length || category.questions.length + (expanded ? extraCount : 0)}`;
    button.addEventListener("click", () => {
      currentIndex = flatQuestions.findIndex((question) => question.categoryIndex === index);
      if (currentIndex < 0) currentIndex = 0;
      renderQuestion();
    });
    row.append(fragment);

    if (extraCount) {
      const toggle = document.createElement("button");
      toggle.className = "category-expand";
      toggle.type = "button";
      toggle.setAttribute("aria-pressed", String(expanded));
      toggle.textContent = expanded ? t("expandedOn") : t("expandedOff");
      toggle.addEventListener("click", () => {
        state.expandedCategories[index] = !state.expandedCategories[index];
        saveState();
        flatQuestions = buildFlatQuestions();
        currentIndex = Math.max(0, flatQuestions.findIndex((question) => question.categoryIndex === index));
        buildCategories();
        renderQuestion();
      });
      row.append(toggle);
    }

    elements.categoryList.append(row);
  });
}

function buildAnswerOptions(question) {
  elements.answerGrid.innerHTML = "";
  const legend = document.createElement("legend");
  legend.className = "sr-only";
  legend.textContent = t("questionFallback");
  elements.answerGrid.append(legend);

  getAnswerOptions(question).forEach((answer) => {
    const label = document.createElement("label");
    label.className = "answer-option";
    label.innerHTML = `<input type="radio" name="answer" value="${answer.key}"><span>${localizeAnswerLabel(answer.label)}</span>`;
    label.querySelector("input").addEventListener("change", (event) => {
      const question = flatQuestions[currentIndex];
      const response = getResponse(question.id);
      response.answer = event.target.value;
      saveState();
      buildCategories();
      updateProgress();
    });
    elements.answerGrid.append(label);
  });
}

function renderQuestion() {
  if (!flatQuestions.length) {
    updateProgress();
    return;
  }

  const question = flatQuestions[currentIndex];
  const response = getResponse(question.id);

  buildAnswerOptions(question);
  elements.categoryKicker.textContent = localizeCategoryTitle(question.category);
  elements.title.textContent = localizeQuestion(question);
  elements.counter.textContent = `${currentIndex + 1} / ${flatQuestions.length}`;
  elements.noteInput.value = response.note || "";
  elements.prevButton.disabled = currentIndex === 0;
  elements.nextButton.textContent = currentIndex === flatQuestions.length - 1 ? t("viewResults") : t("next");

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
  const percent = flatQuestions.length ? Math.round((answered / flatQuestions.length) * 100) : 0;
  elements.progressLabel.textContent = t("answered", { answered, total: flatQuestions.length });
  elements.progressBar.style.width = `${percent}%`;
  renderLiveSummary();
}

function renderLiveSummary() {
  const summaryItems = buildSummaryItems(state.responses);
  elements.liveSummary.hidden = summaryItems.length === 0;
  elements.liveSummary.innerHTML = summaryItems
    .map((item) => `<span class="live-chip"><strong>${item.count}</strong>${escapeHtml(item.label)}</span>`)
    .join("");
}

function renderResults(responses = state.responses, options = {}) {
  flatQuestions = buildFlatQuestions();
  activeResultResponses = responses;
  sharedMode = Boolean(options.shared);
  document.body.classList.toggle("is-shared-view", sharedMode);
  elements.questionnaire.hidden = true;
  elements.ageGate.hidden = true;
  elements.results.hidden = false;
  elements.summaryStrip.innerHTML = "";
  elements.resultsGrid.innerHTML = "";
  document.querySelector("#results-title").textContent = sharedMode ? t("sharedCard") : t("yourCard");
  elements.backToQuestions.textContent = sharedMode ? t("startOwn") : t("back");
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
    const items = flatQuestions
      .filter((question) => question.categoryIndex === categoryIndex)
      .map((question) => ({
        id: question.id,
        question: question.text,
        response: responses[question.id] || {}
      }))
      .filter((item) => !sharedMode || item.response.answer || item.response.note);

    if (items.length === 0) return;

    elements.resultsGrid.append(buildResultCategory(localizeCategoryTitle(category.title), items, { expandable: sharedMode }));
  });

  elements.results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildResultCategory(title, items, options = {}) {
  const list = items
    .map(({ id, question, response }) => {
      const answer = getAnswerLabel({ id, text: question }, response.answer);
      const note = response.note ? `<span class="result-note"><strong>${t("note")}</strong> <span>${escapeHtml(response.note)}</span></span>` : "";
      return `<li><span>${escapeHtml(localizeQuestion({ id, text: question }))}</span><span class="result-answer">${answer}</span>${note}</li>`;
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
  showToast(t("copiedSummary"));
}

async function copySetupLink() {
  const payload = encodeSetupPayload();
  const url = `${location.origin}${location.pathname}${location.search}#setup=${payload}`;
  await writeClipboard(url);
  showToast(t("copiedSetup"));
}

async function copyShareLink() {
  const payload = encodeSharePayload(state.responses);
  const url = `${location.origin}${location.pathname}${location.search}#share=${payload}`;
  await writeClipboard(url);
  showToast(t("copiedPartner"));
}

function buildResultsText(responses) {
  return categories
    .map((category, categoryIndex) => {
      const lines = flatQuestions.filter((question) => question.categoryIndex === categoryIndex).map((question) => {
        const id = question.id;
        const response = responses[id] || {};
        const answer = getAnswerLabel(question, response.answer);
        const note = response.note ? ` | ${t("note")}: ${response.note}` : "";
        return `- ${localizeQuestion(question)}: ${answer}${note}`;
      });
      if (lines.length === 0) return "";
      return `${localizeCategoryTitle(category.title)}\n${lines.join("\n")}`;
    })
    .filter(Boolean)
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
  if (!key) return t("notAnswered");
  const legacyLabels = {
    soft: "Zacht",
    medium: "Middel",
    strong: "Stevig"
  };
  const label = getAnswerOptions(question).find((answer) => answer.key === key)?.label || answers.find((answer) => answer.key === key)?.label || legacyLabels[key] || key;
  return localizeAnswerLabel(label);
}

function buildSummaryItems(responses) {
  const counts = new Map();

  flatQuestions.forEach((question) => {
    const label = getAnswerLabel(question, responses[question.id]?.answer);
    if (label === t("notAnswered")) return;
    counts.set(label, (counts.get(label) || 0) + 1);
  });

  const preferredOrder = [
    "Ja",
    "Nieuwsgierig",
    "Interesse",
    "Opbouwen",
    "Alleen bespreken",
    "Bespreken",
    "Later bespreken",
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
    .map((label) => localizeAnswerLabel(label))
    .filter((label) => counts.has(label))
    .map((label) => ({ label, count: counts.get(label) }));
}

function encodeSetupPayload() {
  return toBase64Url(
    JSON.stringify({
      v: 1,
      lang: state.language,
      c: state.selectedCategories || defaultSelectedCategories(),
      x: state.expandedCategories || {}
    })
  );
}

function encodeSharePayload(responses) {
  const compactResponses = Object.fromEntries(
    Object.entries(responses)
      .filter(([, response]) => response?.answer || response?.note)
      .map(([id, response]) => [id, [response.answer || "", response.note || ""]])
  );
  const payload = JSON.stringify({
    v: 1,
    lang: state.language,
    c: state.selectedCategories || defaultSelectedCategories(),
    x: state.expandedCategories || {},
    r: compactResponses
  });
  return toBase64Url(payload);
}

function readSetupFromHash() {
  if (!location.hash.startsWith("#setup=")) return false;

  try {
    const payload = JSON.parse(fromBase64Url(location.hash.slice("#setup=".length)));
    if (payload?.v !== 1) return false;

    if (supportedLanguages.includes(payload.lang)) {
      state.language = payload.lang;
    }

    state.selectedCategories =
      payload.c && typeof payload.c === "object" ? normalizeSelectedCategories(payload.c) : defaultSelectedCategories();
    state.expandedCategories = payload.x && typeof payload.x === "object" ? payload.x : {};
    state.responses = {};
    currentIndex = 0;

    if (!hasSelectedCategory()) {
      state.selectedCategories = defaultSelectedCategories();
    }

    saveState();
    return true;
  } catch {
    showToast(t("badLink"));
    return false;
  }
}

function readSharedResponsesFromHash() {
  if (!location.hash.startsWith("#share=")) return null;

  try {
    const payload = JSON.parse(fromBase64Url(location.hash.slice("#share=".length)));
    if (payload?.v !== 1 || !payload.r || typeof payload.r !== "object") return null;
    if (supportedLanguages.includes(payload.lang)) {
      state.language = payload.lang;
    }
    state.selectedCategories =
      payload.c && typeof payload.c === "object"
        ? normalizeSelectedCategories(payload.c)
        : Object.fromEntries(categories.map((_, index) => [index, false]));
    state.expandedCategories = payload.x && typeof payload.x === "object" ? payload.x : {};

    const responses = Object.fromEntries(
      Object.entries(payload.r).map(([id, value]) => [
        id,
        {
          answer: typeof value?.[0] === "string" ? value[0] : "",
          note: typeof value?.[1] === "string" ? value[1] : ""
        }
      ])
    );
    Object.keys(responses).forEach((id) => {
      const match = id.match(/^x-(\d+)-/);
      if (match) state.expandedCategories[match[1]] = true;
      const categoryMatch = id.match(/^(?:x-)?(\d+)-/);
      if (!payload.c && categoryMatch) state.selectedCategories[categoryMatch[1]] = true;
    });
    if (!hasSelectedCategory()) {
      state.selectedCategories = defaultSelectedCategories();
    }
    return responses;
  } catch {
    showToast(t("badLink"));
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
