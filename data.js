// Leerstof: Blink Engels – Song 3, Lesson 2 (David Guetta, Alphaville & Ava Max – Forever young) – Words and phrases
window.LESSON = {
  groups: [
    { id: 'g1', name: 'Jong en oud', short: 'Groep 1', color: 'tomato' },
    { id: 'g2', name: 'Doen en laten', short: 'Groep 2', color: 'mustard' },
    { id: 'g3', name: 'Later als je groot bent', short: 'Groep 3', color: 'leaf' }
  ],
  words: [
    { id: 'forever', syl: 'for·ev·er', en: 'forever', nl: 'voor altijd', g: 'g1', pic: '♾️' },
    { id: 'young', en: 'young', nl: 'jong', g: 'g1', pic: '👶' },
    { id: 'old', en: 'old', nl: 'oud', g: 'g1', pic: '👴' },
    { id: 'healthier', syl: 'health·i·er', en: 'healthier', nl: 'gezonder', g: 'g1', pic: '🥦' },
    { id: 'fitter', syl: 'fit·ter', en: 'fitter', nl: 'fitter', g: 'g1', pic: '🏃' },
    { id: 'fear', en: 'fear', nl: 'angst', g: 'g1', pic: '😱', altNl: ['de angst'] },
    { id: 'job', en: 'job', nl: 'baan', g: 'g1', pic: '💼', altNl: ['een baan', 'de baan'] },
    { id: 'drive', syl: 'drive a car', en: 'drive a car', nl: 'autorijden', g: 'g1', pic: '🚗', altNl: ['auto rijden'] },
    { id: 'timetoplay', syl: 'time to play', en: 'time to play', nl: 'tijd om te spelen', g: 'g1', pic: '⚽' },

    { id: 'nothing', syl: 'do noth·ing', en: 'do nothing', nl: 'niets doen', g: 'g2', pic: '🛋️', altNl: ['niks doen'] },
    { id: 'change', en: 'change', nl: 'veranderen', g: 'g2', pic: '🔄' },
    { id: 'fizzy', syl: 'fiz·zy drink', en: 'fizzy drink', nl: 'frisdrank', g: 'g2', pic: '🥤' },
    { id: 'lookfwd', syl: 'look for·ward to', en: 'look forward to', nl: 'uitkijken naar', g: 'g2', pic: '🤩' },
    { id: 'decide', syl: 'de·cide', en: 'decide', nl: 'besluiten', g: 'g2', pic: '🤔', altNl: ['beslissen'] },
    { id: 'chore', en: 'chore', nl: 'klusje', g: 'g2', pic: '🧹', altNl: ['klus'] },
    { id: 'stayup', syl: 'stay up late', en: 'stay up late', nl: 'laat opblijven', g: 'g2', pic: '🌙' },

    { id: 'holiday', syl: 'go on hol·i·day a·lone', en: 'go on holiday alone', nl: 'alleen op vakantie gaan', g: 'g3', pic: '🧳' },
    { id: 'listen', syl: 'lis·ten to your par·ents', en: 'listen to your parents', nl: 'naar je ouders luisteren', g: 'g3', pic: '👂' },
    { id: 'takecare', syl: 'take care of ev·ery·thing', en: 'take care of everything', nl: 'overal voor zorgen', g: 'g3', pic: '🤲' },
    { id: 'liveown', syl: 'live on my own', en: 'live on my own', nl: 'op mezelf wonen', g: 'g3', pic: '🏠', altNl: ['op mijzelf wonen'] },
    { id: 'earn', syl: 'earn mon·ey', en: 'earn money', nl: 'geld verdienen', g: 'g3', pic: '💶' },
    { id: 'choices', syl: 'make choi·ces', en: 'make choices', nl: 'keuzes maken', g: 'g3', pic: '🔀' },
    { id: 'bills', syl: 'pay the bills', en: 'pay the bills', nl: 'de rekeningen betalen', g: 'g3', pic: '🧾', altNl: ['rekeningen betalen'] }
  ],
  // Zinnen: alleen Engels -> Nederlands
  phrases: [
    { id: 'p1', en: 'What do you like about being young?', nl: 'Wat vind je leuk aan jong zijn?', pic: '😊', tip: 'like = leuk vinden, being young = jong zijn' },
    { id: 'p2', en: "It's nice being young because you have a lot of free time.", nl: 'Het is leuk om jong te zijn, omdat je dan veel vrije tijd hebt.', pic: '🛝', tip: 'because = omdat, free time = vrije tijd' },
    { id: 'p3', en: "What don't you like about being young?", nl: 'Wat vind je niet leuk aan jong zijn?', pic: '😕', tip: "don't = niet" },
    { id: 'p4', en: 'What is your ideal age?', nl: 'Wat is jouw ideale leeftijd?', pic: '🎂', tip: 'age = leeftijd' },
    { id: 'p5', en: 'My ideal age is 24 years old.', nl: 'Mijn ideale leeftijd is 24.', pic: '2️⃣4️⃣', tip: 'years old = jaar oud' }
  ],
  // Grammatica: can / can't / have to / don't have to
  modals: [
    { en: 'can', nl1: 'mag', nl2: 'mag', key: 'can' },
    { en: "can't", nl1: 'mag niet', nl2: 'mag niet', key: 'cant' },
    { en: 'have to', nl1: 'moet', nl2: 'moet', key: 'have' },
    { en: "don't have to", nl1: 'hoef', nl2: 'hoeft', key: 'dont' }
  ],
  // can/have to: "Ik mag/moet + do" ; can't: "Ik + cant" ; don't have to: "Ik hoef + dont"
  acts: [
    { en: 'play outside', do: 'buitenspelen', cant: 'mag niet buitenspelen', dont: 'niet buiten te spelen', pic: '🌳' },
    { en: 'stay up late', do: 'laat opblijven', cant: 'mag niet laat opblijven', dont: 'niet laat op te blijven', pic: '🌙' },
    { en: 'go on holiday alone', do: 'alleen op vakantie gaan', cant: 'mag niet alleen op vakantie gaan', dont: 'niet alleen op vakantie te gaan', pic: '🧳' },
    { en: 'drive a car', do: 'autorijden', cant: 'mag niet autorijden', dont: 'niet auto te rijden', pic: '🚗' },
    { en: 'cook dinner', do: 'eten koken', cant: 'mag geen eten koken', dont: 'geen eten te koken', pic: '🍳' },
    { en: 'earn money', do: 'geld verdienen', cant: 'mag geen geld verdienen', dont: 'geen geld te verdienen', pic: '💶' },
    { en: 'pay the bills', do: 'de rekeningen betalen', cant: 'mag de rekeningen niet betalen', dont: 'de rekeningen niet te betalen', pic: '🧾' },
    { en: 'make choices', do: 'keuzes maken', cant: 'mag geen keuzes maken', dont: 'geen keuzes te maken', pic: '🔀' },
    { en: 'do my homework', you: 'do your homework', do: 'mijn huiswerk doen', youDo: 'je huiswerk doen', cant: 'mag mijn huiswerk niet doen', youCant: 'mag je huiswerk niet doen', dont: 'mijn huiswerk niet te doen', youDont: 'je huiswerk niet te doen', pic: '📚' },
    { en: 'drink fizzy drinks', do: 'frisdrank drinken', cant: 'mag geen frisdrank drinken', dont: 'geen frisdrank te drinken', pic: '🥤' }
  ],
  grammarBook: [
    { en: 'I can play outside.', nl: 'Ik mag buitenspelen.' },
    { en: "You can't eat what you like.", nl: 'Je mag niet eten wat je lekker vindt.' },
    { en: 'I have to do my homework.', nl: 'Ik moet mijn huiswerk doen.' },
    { en: "You don't have to cook dinner.", nl: 'Je hoeft geen eten te koken.' }
  ]
};

// Planning t/m toets (do 3 december 2026). Elke dag minimaal 10 min; soms 2 rondjes (r: 1 / r: 2).
window.PLAN = [
  { date: '2026-11-24', day: 'di 24 nov', min: 15, title: 'Kennismaken met Groep 1', note: 'Eerst de woorden rustig lezen en hardop zeggen. Daarna pas spelen.',
    tasks: [ { id: 'a1', text: 'Lees-lijst Groep 1', go: 'read:g1' }, { id: 'a2', text: 'Leer-kaarten Groep 1 (luister & zeg na)', go: 'learn:g1' }, { id: 'a3', text: 'Luister-spel Groep 1', go: 'listen:g1' } ] },
  { date: '2026-11-25', day: 'wo 25 nov', min: 20, r1: 10, r2: 10, title: 'Groep 1 vast, Groep 2 erbij', note: 'Rondje 1: Groep 1 herhalen en schrijven. Pauze. Rondje 2: de nieuwe woorden lezen.',
    tasks: [ { id: 'b1', r: 1, text: 'Lees-lijst Groep 1 (dek het Nederlands af)', go: 'read:g1' }, { id: 'b2', r: 1, text: 'Typ-tijger Groep 1 (NL → EN)', go: 'type:g1:nl' },
             { id: 'b3', r: 2, text: 'Lees-lijst Groep 2', go: 'read:g2' }, { id: 'b4', r: 2, text: 'Leer-kaarten Groep 2', go: 'learn:g2' } ] },
  { date: '2026-11-26', day: 'do 26 nov', min: 20, r1: 10, r2: 10, title: 'Groep 2 oefenen', note: 'Lees eerst, dan pas spelen. In rondje 2 knip je de woordkaartjes uit.',
    tasks: [ { id: 'c1', r: 1, text: 'Lees-lijst Groep 2 (dek het Nederlands af)', go: 'read:g2' }, { id: 'c2', r: 1, text: 'Luister-spel Groep 2', go: 'listen:g2' }, { id: 'c3', r: 1, text: 'Typ-tijger Groep 2 (NL → EN)', go: 'type:g2:nl' },
             { id: 'c4', r: 2, text: 'Printblad: woordkaartjes knippen + stapelspel Groep 1 en 2', go: 'print' }, { id: 'c5', r: 2, text: 'Typ-tijger Groep 1 (EN → NL)', go: 'type:g1:en' } ] },
  { date: '2026-11-27', day: 'vr 27 nov', min: 20, r1: 10, r2: 10, title: 'Groep 3 erbij', note: 'De lange woordjes. Lees ze in stukjes, zeg ze hardop en kijk goed hoe je ze schrijft.',
    tasks: [ { id: 'e1', r: 1, text: 'Lees-lijst Groep 3', go: 'read:g3' }, { id: 'e2', r: 1, text: 'Leer-kaarten Groep 3', go: 'learn:g3' },
             { id: 'e3', r: 2, text: 'Luister-spel Groep 3', go: 'listen:g3' }, { id: 'e4', r: 2, text: 'Typ-tijger Groep 3 (NL → EN)', go: 'type:g3:nl' } ] },
  { date: '2026-11-28', day: 'za 28 nov', min: 15, r1: 5, r2: 10, title: 'Alle woorden lezen + de zinnen', note: 'Rondje 1 is kort: alleen lezen. In rondje 2 komen de zinnen.',
    tasks: [ { id: 'f1', r: 1, text: 'Lees-lijst alle woorden', go: 'read:all' },
             { id: 'f2', r: 2, text: 'Zinnen luisteren en lezen', go: 'plearn' }, { id: 'f3', r: 2, text: 'Zinnen-puzzel 1–3', go: 'phrases:a' } ] },
  { date: '2026-11-29', day: 'zo 29 nov', min: 30, r1: 15, r2: 15, title: 'Alles schrijven + grammatica', note: 'Schrijven met de hand helpt onthouden. Neem een echte pauze tussen de rondjes.',
    tasks: [ { id: 'h1', r: 1, text: 'Lees-lijst alle woorden (dek het Engels af)', go: 'read:all' }, { id: 'h2', r: 1, text: 'Typ-tijger alle woorden (NL → EN)', go: 'type:all:nl' }, { id: 'h3', r: 1, text: 'Printblad: vouwblad NL → EN', go: 'print' },
             { id: 'h4', r: 2, text: 'Zinnen-puzzel 4–5', go: 'phrases:b' }, { id: 'h5', r: 2, text: 'Alle zinnen typen', go: 'phrases:all:type' }, { id: 'h6', r: 2, text: 'Grammatica: uitleg + spel', go: 'grammar' } ] },
  { date: '2026-11-30', day: 'ma 30 nov', min: 10, title: 'Kort herhalen', note: 'Vandaag kort: lezen en de lastige woordjes.',
    tasks: [ { id: 'i1', text: 'Lees-lijst alle woorden (dek het Nederlands af)', go: 'read:all' }, { id: 'i2', text: 'Lastige woordjes', go: 'tricky' } ] },
  { date: '2026-12-01', day: 'di 1 dec', min: 15, title: 'Grammatica en zinnen vastzetten', note: 'Mag het (can) of moet het (have to)? En daarna de woorden andersom.',
    tasks: [ { id: 'j1', text: 'Grammatica-spel', go: 'grammar' }, { id: 'j2', text: 'Zinnen-mix', go: 'phrases:all:mix' }, { id: 'j3', text: 'Typ-tijger alle woorden (EN → NL)', go: 'type:all:en' } ] },
  { date: '2026-12-02', day: 'wo 2 dec', min: 30, r1: 15, r2: 15, title: 'Proeftoets + generale repetitie', note: 'Zet de plaatjes uit, net als op de toets. In rondje 2 oefen je alleen wat nog lastig is. Op tijd naar bed.',
    tasks: [ { id: 'k1', r: 1, text: 'Lees-lijst alle woorden', go: 'read:all' }, { id: 'k2', r: 1, text: 'Proeftoets', go: 'test' },
             { id: 'k3', r: 2, text: 'Lastige woordjes', go: 'tricky' }, { id: 'k4', r: 2, text: 'Grammatica-spel', go: 'grammar' }, { id: 'k5', r: 2, text: '(Mag) Printblad: proeftoets op papier', go: 'print', optional: true } ] },
  { date: '2026-12-03', day: 'do 3 dec', min: 5, title: 'TOETSDAG', note: 'Ontbijten, nog 1 keer de woorden lezen en dan: jij kunt dit.', test: true,
    tasks: [ { id: 'l1', text: '(Mag) 5 min: lees-lijst alle woorden', go: 'read:all', optional: true } ] }
];
