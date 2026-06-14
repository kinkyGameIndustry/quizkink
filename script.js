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
    partnerLink: "Partner link",
    print: "Print",
    shareNote: "The partner link stores answers inside the link itself. Share it only with someone who may read these results.",
    note: "Note",
    copiedSummary: "Summary copied.",
    copiedPartner: "Partner link copied.",
    badLink: "This partner link could not be read.",
    clearConfirm: "Clear all local answers?",
    answered: "{answered} of {total}",
    notAnswered: "Not answered"
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
    partnerLink: "Partnerlink",
    print: "Print",
    shareNote: "De partnerlink bewaart antwoorden in de link zelf. Deel hem alleen met iemand die deze resultaten mag lezen.",
    note: "Notitie",
    copiedSummary: "Samenvatting gekopieerd.",
    copiedPartner: "Partnerlink gekopieerd.",
    badLink: "Deze partnerlink kon niet worden gelezen.",
    clearConfirm: "Alle lokale antwoorden wissen?",
    answered: "{answered} van {total}",
    notAnswered: "Niet beantwoord"
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
    partnerLink: "Lien partenaire",
    print: "Imprimer",
    shareNote: "Le lien partenaire stocke les réponses dans le lien lui-même. Partagez-le seulement avec une personne autorisée à lire ces résultats.",
    note: "Note",
    copiedSummary: "Résumé copié.",
    copiedPartner: "Lien partenaire copié.",
    badLink: "Ce lien partenaire n'a pas pu être lu.",
    clearConfirm: "Effacer toutes les réponses locales ?",
    answered: "{answered} sur {total}",
    notAnswered: "Sans réponse"
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
    partnerLink: "Partnerlink",
    print: "Drucken",
    shareNote: "Der Partnerlink speichert Antworten im Link selbst. Teile ihn nur mit jemandem, der diese Ergebnisse lesen darf.",
    note: "Notiz",
    copiedSummary: "Zusammenfassung kopiert.",
    copiedPartner: "Partnerlink kopiert.",
    badLink: "Dieser Partnerlink konnte nicht gelesen werden.",
    clearConfirm: "Alle lokalen Antworten löschen?",
    answered: "{answered} von {total}",
    notAnswered: "Nicht beantwortet"
  }
};

const answerLabelTranslations = {
  en: {
    "Ja": "Yes",
    "Nieuwsgierig": "Curious",
    "Alleen bespreken": "Discuss only",
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
  languageSelect: document.querySelector("#languageSelect"),
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
  applyLanguage();
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
      responses: saved?.responses || {}
    };
  } catch {
    return { allowed: false, language: defaultLanguage, responses: {} };
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
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
  elements.copyShareLink.textContent = t("partnerLink");
  elements.printResults.textContent = t("print");
  elements.shareNote.textContent = t("shareNote");
  document.querySelector(".results__head .kicker").textContent = t("summary");
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

function updateEnterButtonState() {
  elements.enterButton.disabled = !(elements.adultCheck.checked && elements.consentCheck.checked);
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
    fragment.querySelector(".category-button__name").textContent = localizeCategoryTitle(category.title);
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
      updateProgress();
    });
    elements.answerGrid.append(label);
  });
}

function renderQuestion() {
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
  const percent = Math.round((answered / flatQuestions.length) * 100);
  elements.progressLabel.textContent = t("answered", { answered, total: flatQuestions.length });
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
    const items = category.questions
      .map((question, questionIndex) => {
        const id = `${categoryIndex}-${questionIndex}`;
        const response = responses[id] || {};
        return { id, question, response };
      })
      .filter((item) => !sharedMode || item.response.answer || item.response.note);

    if (sharedMode && items.length === 0) return;

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

async function copyShareLink() {
  const payload = encodeSharePayload(state.responses);
  const url = `${location.origin}${location.pathname}${location.search}#share=${payload}`;
  await writeClipboard(url);
  showToast(t("copiedPartner"));
}

function buildResultsText(responses) {
  return categories
    .map((category, categoryIndex) => {
      const lines = category.questions.map((question, questionIndex) => {
        const id = `${categoryIndex}-${questionIndex}`;
        const response = responses[id] || {};
        const answer = getAnswerLabel({ id, text: question }, response.answer);
        const note = response.note ? ` | ${t("note")}: ${response.note}` : "";
        return `- ${localizeQuestion({ id, text: question })}: ${answer}${note}`;
      });
      return `${localizeCategoryTitle(category.title)}\n${lines.join("\n")}`;
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

function encodeSharePayload(responses) {
  const compactResponses = Object.fromEntries(
    Object.entries(responses)
      .filter(([, response]) => response?.answer || response?.note)
      .map(([id, response]) => [id, [response.answer || "", response.note || ""]])
  );
  const payload = JSON.stringify({ v: 1, lang: state.language, r: compactResponses });
  return toBase64Url(payload);
}

function readSharedResponsesFromHash() {
  if (!location.hash.startsWith("#share=")) return null;

  try {
    const payload = JSON.parse(fromBase64Url(location.hash.slice("#share=".length)));
    if (payload?.v !== 1 || !payload.r || typeof payload.r !== "object") return null;
    if (supportedLanguages.includes(payload.lang)) {
      state.language = payload.lang;
    }

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
