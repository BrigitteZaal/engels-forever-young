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

// Planning t/m toets (do 3 december 2026)
window.PLAN = [
  { date: '2026-11-23', day: 'ma 23 nov', min: 10, title: 'Kennismaken met Groep 1', note: 'Rustig beginnen. Alleen kijken, luisteren en nazeggen.',
    tasks: [ { id: 'd1a', text: 'Leer-kaarten Groep 1 (luister & zeg na)', go: 'learn:g1' }, { id: 'd1b', text: 'Luister-spel Groep 1', go: 'listen:g1' } ] },
  { date: '2026-11-24', day: 'di 24 nov', min: 15, title: 'Groep 2 erbij', note: 'Eerst Groep 1 even typen, dan de nieuwe woorden.',
    tasks: [ { id: 'd2a', text: 'Typ-tijger Groep 1 (NL → EN)', go: 'type:g1:nl' }, { id: 'd2b', text: 'Leer-kaarten Groep 2', go: 'learn:g2' } ] },
  { date: '2026-11-25', day: 'wo 25 nov', min: 15, title: 'Groep 2 oefenen', note: 'Knip ook de woordkaartjes uit. Handig voor in de auto of aan tafel.',
    tasks: [ { id: 'd3a', text: 'Luister-spel Groep 2', go: 'listen:g2' }, { id: 'd3b', text: 'Typ-tijger Groep 2 (NL → EN)', go: 'type:g2:nl' }, { id: 'd3c', text: 'Printblad: woordkaartjes knippen', go: 'print' } ] },
  { date: '2026-11-26', day: 'do 26 nov', min: 10, title: 'Kort rondje (\'s avonds)', note: 'Middag druk: alleen 10 minuten, mag ook op de bank op de tablet.', busy: true,
    tasks: [ { id: 'd4a', text: 'Luister-spel Groep 1 en 2', go: 'listen:all' } ] },
  { date: '2026-11-27', day: 'vr 27 nov', min: 0, title: 'Vrije dag', note: 'Geen Engels nodig. Wil je toch? 3 minuten luisteren mag.', rest: true,
    tasks: [ { id: 'd5a', text: '(Mag) 3 min luisteren naar Groep 2', go: 'learn:g2', optional: true } ] },
  { date: '2026-11-28', day: 'za 28 nov', min: 15, title: 'Groep 3 erbij', note: 'De lange woordjes. Zeg ze hardop na, dat helpt.',
    tasks: [ { id: 'd6a', text: 'Leer-kaarten Groep 3', go: 'learn:g3' }, { id: 'd6b', text: 'Luister-spel Groep 3', go: 'listen:g3' } ] },
  { date: '2026-11-29', day: 'zo 29 nov', min: 15, title: 'Alle woorden schrijven', note: 'Schrijven met de hand helpt onthouden.',
    tasks: [ { id: 'd7a', text: 'Typ-tijger alle woorden (NL → EN)', go: 'type:all:nl' }, { id: 'd7b', text: 'Printblad: vouwblad NL → EN', go: 'print' } ] },
  { date: '2026-11-30', day: 'ma 30 nov', min: 15, title: 'De zinnen', note: 'Zinnen hoef je alleen van Engels naar Nederlands te kennen. Eerst puzzelen, dan zelf typen.',
    tasks: [ { id: 'd8a', text: 'Zinnen-puzzel 1–3', go: 'phrases:a' }, { id: 'd8b', text: 'Zinnen-puzzel 4–5', go: 'phrases:b' }, { id: 'd8c', text: 'Alle zinnen typen', go: 'phrases:all:type' } ] },
  { date: '2026-12-01', day: 'di 1 dec', min: 15, title: 'Grammatica: can of have to?', note: 'Mag het, of moet het? Eerst de uitleg, dan het spel.',
    tasks: [ { id: 'd9a', text: 'Grammatica-uitleg + spel', go: 'grammar' }, { id: 'd9b', text: 'Typ-tijger alle woorden (EN → NL)', go: 'type:all:en' } ] },
  { date: '2026-12-02', day: 'wo 2 dec', min: 20, title: 'Proeftoets + generale repetitie', note: 'Zet de plaatjes uit, net als op de toets. Daarna alleen wat nog lastig is. Op tijd naar bed.',
    tasks: [ { id: 'd10a', text: 'Proeftoets', go: 'test' }, { id: 'd10b', text: 'Lastige woordjes', go: 'tricky' }, { id: 'd10c', text: '(Mag) Grammatica-spel', go: 'grammar', optional: true }, { id: 'd10d', text: '(Mag) Printblad: proeftoets op papier', go: 'print', optional: true } ] },
  { date: '2026-12-03', day: 'do 3 dec', min: 5, title: 'TOETSDAG', note: 'Ontbijten, 5 minuten warm draaien en dan: jij kunt dit.', test: true,
    tasks: [ { id: 'd11a', text: '(Mag) 5 min warm draaien: luister-spel', go: 'listen:all', optional: true } ] }
];
