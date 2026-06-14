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
