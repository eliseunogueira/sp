var oPath = '',
  oPath2 = '../',
  pre = '../';
'androidSTORE' == osType &&
  ((oPath =
    'https://www.eliseunogueira.com.br/app/' +
    lessonLanguage +
    '/verb/' +
    lessonNumber +
    '/'),
  (oPath2 =
    'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/verb/'),
  (pre = 'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/verb/'));
var currentSection = 'Verbs',
  currentSecShort = 'verb',
  quizTitle1 = 'LISTENING PRACTICE',
  quizTitle2 = 'CONJUGATION MATCH',
  quizTitle3 = 'BY THE BOOK',
  quizTitle4 = 'WRITE IT OUT',
  currentProgram = 'Complete',
  errors = [],
  errorMode = !1,
  btnColor = [
    'rgba(10, 10, 10,0.7)',
    'rgba(20, 20, 20,0.9)',
    'rgba(19, 23, 23,0.95)',
    'rgba(10, 10, 10,0.95)',
  ];
function loadAudioCourse() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      window.location = '../../audio/index.html?verb=' + lessonNumber;
    }, 100));
}
String.prototype.replaceLast ||
  (String.prototype.replaceLast = function (e, t) {
    var s = this.lastIndexOf(e);
    return s >= 0
      ? this.substring(0, s) + t + this.substring(s + e.length)
      : this.toString();
  });
var loCh = !1;
0 == lessonNumber && (btnColor = ['#0a5d90', '#063561', '#0a5d90', '#063561']);
var conjShuffle,
  caNum,
  soundTime,
  focused,
  conjAlt,
  conjAltNum,
  conjAlt2,
  conjAltNum2,
  sType = soundType,
  cardCate = '|b',
  cardRaw = [],
  extraTime = !1,
  irregSpan = !0,
  swipeDis = !1;
function togFlash() {
  var e = caNum;
  e % 2 == 0 && e++;
  var t = lessonNumber + '|' + (parseInt(e) + 1) + cardCate;
  if ('undefined' != typeof imageBonus) {
    var s = imageArray[currentWordNum].split('/'),
      n = s[s.length - 1].split('pic').join('').split('.jpg').join('');
    n = 2 * parseInt(n);
    var r = parseInt(s[s.length - 3]);
    t = caNum % 2 == 0 ? r + '|2' + cardCate : r + '|' + n + cardCate;
  }
  var o = !1;
  for (i = 0; i < cardRaw.length; i++) {
    var a = cardRaw[i].split('|');
    (a = a[0] + '|' + a[1] + '|' + a[2]) == t && (o = !0);
  }
  o
    ? ($('#flashCard').hide(), $('#flashCard2').show())
    : ($('#flashCard2').hide(), $('#flashCard').show());
}
var conjID,
  puzzPron,
  writeArr,
  presType,
  conjAlt3 = 'zhdse',
  conjAltNum3 = 'dsdc';
if ('Italian' == lessonLanguage)
  ((conjAlt = '(lei)'),
    (conjAltNum = 4),
    (conjID = [
      '(io)',
      '(tu)',
      '(Lei)',
      '(lui)',
      '(noi)',
      '(voi)',
      '(Loro)',
      '(loro)',
    ]),
    (puzzPron = [
      '(io) ',
      '(tu) ',
      '(lui/lei) ',
      '(noi) ',
      '(voi) ',
      '(loro) ',
    ]),
    (writeArr = [
      'ho',
      'hai',
      'ha',
      'abbiamo',
      'avete',
      'hanno',
      'sto',
      'stai',
      'sta',
      'stiamo',
      'state',
      'stanno',
      'sono',
      'sei',
      'è',
      'siamo',
      'siete',
      'mi',
      'ti',
      'le',
      'gli',
      'le',
      'ci',
      'vi',
    ]));
else if ('Spanish' == lessonLanguage)
  ((conjAlt = '(Ella)'),
    (conjAltNum = 4),
    (conjAlt2 = '(Ellas)'),
    (conjAltNum2 = 7),
    (conjAlt3 = '(Nosotras)'),
    (conjAltNum3 = 5),
    (conjID = [
      '(Yo)',
      '(Tú)',
      '(Usted)',
      '(Él)',
      '(Nosotros)',
      '(Ustedes)',
      '(Ellos)',
    ]),
    (puzzPron = [
      '(yo) ',
      '(tú) ',
      '(él/ella/usted) ',
      '(nosotros) ',
      '(ustedes) ',
      '(ellos/ellas) ',
    ]),
    (writeArr = [
      'me',
      'te',
      'le',
      'nos',
      'les',
      'tengo',
      'tienes',
      'tiene',
      'tenemos',
      'tienen',
      'tienen',
      'tuve',
      'tuviste',
      'tuvo',
      'tuvimos',
      'tuvieron',
      'tuvieron',
      'tenía',
      'tenías',
      'tenía',
      'teníamos',
      'tenían',
      'tenían',
      'tendré',
      'tendrás',
      'tendrá',
      'tendremos',
      'tendrán',
      'tendrán',
      'tendría',
      'tendrías',
      'tendría',
      'tendríamos',
      'tendrían',
      'tendrían',
      'tener',
    ]));
else if ('Portuguese' == lessonLanguage)
  ((conjAlt = '(Ela)'),
    (conjAltNum = 4),
    (conjAlt2 = '(Elas)'),
    (conjAltNum2 = 7),
    (conjAlt3 = '(Nós)'),
    (conjAltNum3 = 5),
    (conjID = [
      '(Eu)',
      '(Tu)',
      '(Você)',
      '(Ele)',
      '(Nós)',
      '(Vocês)',
      '(Eles)',
    ]),
    (puzzPron = [
      '(eu) ',
      '(tu) ',
      '(ele/ela/você) ',
      '(nós) ',
      '(vocês) ',
      '(eles/elas) ',
    ]),
    (writeArr = [
      'me',
      'te',
      'se',
      'nos',
      'tenho',
      'tens',
      'tem',
      'temos',
      'têm',
      'estou',
      'estás',
      'está',
      'estamos',
      'estão',
      'tive',
      'tiveste',
      'teve',
      'tivemos',
      'tiveram',
      'tiveram',
      'tinha',
      'tinhas',
      'tinha',
      'tínhamos',
      'tinham',
      'tinham',
      'terei',
      'terás',
      'terá',
      'teremos',
      'terão',
      'terão',
      'teria',
      'terias',
      'teria',
      'teríamos',
      'teriam',
      'teriam',
      'vou',
      'vais',
      'vai',
      'vamos',
      'vão',
    ]));
else if ('French' == lessonLanguage)
  ((conjAlt = 'elle'),
    (conjAltNum = 3),
    (conjAlt2 = 'elles'),
    (conjAltNum2 = 6),
    (conjID = ['je', 'tu', 'il', 'nous', 'vous', 'ils']),
    (puzzPron = ['je ', 'tu ', 'il/elle ', 'nous ', 'vous ', 'ils/elles ']),
    (writeArr = [
      'ai',
      'as',
      'a',
      'avons',
      'avez',
      'ont',
      'suis',
      'es',
      'est',
      'sommes',
      'êtes',
      'etes',
      'sont',
    ]));
else if ('German' == lessonLanguage) {
  ((conjAlt = 'sie'),
    (conjAltNum = 3),
    (conjAlt2 = 'es'),
    (conjAltNum2 = 3),
    (conjID = ['ich', 'du', 'er', 'wir', 'ihr', 'Sie', 'sie']),
    (puzzPron = ['ich ', 'du ', 'er/sie/es ', 'wir ', 'ihr ', 'sie ']),
    (writeArr = [
      'habe',
      'hast',
      'hat',
      'haben',
      'habt',
      'haben',
      'bin',
      'bist',
      'ist',
      'sind',
      'seid',
    ]));
  var writeArr2 = [
      ' werden</strong>',
      ' werde</strong>',
      ' wirst</strong>',
      ' wird</strong>',
      ' werdet</strong>',
      ' wurde</strong>',
      ' wurdest</strong>',
      ' wurden</strong>',
      ' wurdet</strong>',
      ' würde</strong>',
      ' würdest</strong>',
      ' würden</strong>',
      ' würdet</strong>',
      '<strong>werden ',
      '<strong>werde ',
      '<strong>wirst ',
      '<strong>wird ',
      '<strong>werdet ',
      '<strong>wurde ',
      '<strong>wurdest ',
      '<strong>wurden ',
      '<strong>wurdet ',
      '<strong>würde ',
      '<strong>würdest ',
      '<strong>würden ',
      '<strong>würdet ',
      ' werden ',
      ' werde ',
      ' wirst ',
      ' wird ',
      ' werdet ',
      ' wurde ',
      ' wurdest ',
      ' wurden ',
      ' wurdet ',
      ' würde ',
      ' würdest ',
      ' würden ',
      ' würdet ',
      '<strong>werden</strong>',
      '<strong>werde</strong>',
      '<strong>wirst</strong>',
      '<strong>wird</strong>',
      '<strong>werdet</strong>',
      '<strong>wurde</strong>',
      '<strong>wurdest</strong>',
      '<strong>wurden</strong>',
      '<strong>wurdet</strong>',
      '<strong>würde</strong>',
      '<strong>würdest</strong>',
      '<strong>würden</strong>',
      '<strong>würdet</strong>',
    ],
    writeArr3 = [
      ' ______</strong>',
      ' _____</strong>',
      ' _____</strong>',
      ' ____</strong>',
      ' ______</strong>',
      ' _____</strong>',
      ' _______</strong>',
      ' ______</strong>',
      ' ______</strong>',
      ' _____</strong>',
      ' _______</strong>',
      ' ______</strong>',
      ' ______</strong>',
      '<strong>_____ ',
      '<strong>_____ ',
      '<strong>_____ ',
      '<strong>____ ',
      '<strong>______ ',
      '<strong>_____ ',
      '<strong>_______ ',
      '<strong>______ ',
      '<strong>______ ',
      '<strong>_____ ',
      '<strong>_______ ',
      '<strong>______ ',
      '<strong>______ ',
      ' _____ ',
      ' _____ ',
      ' _____ ',
      ' ____ ',
      ' ______ ',
      ' _____ ',
      ' _______ ',
      ' ______ ',
      ' ______ ',
      ' _____ ',
      ' _______ ',
      ' ______ ',
      ' ______ ',
      '<strong>_____</strong>',
      '<strong>_____</strong>',
      '<strong>_____</strong>',
      '<strong>____</strong>',
      '<strong>______</strong>',
      '<strong>_____</strong>',
      '<strong>_______</strong>',
      '<strong>______</strong>',
      '<strong>______</strong>',
      '<strong>_____</strong>',
      '<strong>_______</strong>',
      '<strong>______</strong>',
      '<strong>______</strong>',
    ];
}
if (-1 != lessonTitle.indexOf('ubjunctive')) {
  var subWord = 'que ',
    subWord2 = "qu'";
  ('Italian' == lessonLanguage && ((subWord = 'che '), (subWord2 = 'che ')),
    'Spanish' == lessonLanguage && (subWord2 = 'que '),
    'Portuguese' == lessonLanguage && (subWord2 = 'que '),
    (puzzPron[0] = subWord + puzzPron[0]),
    (puzzPron[1] = subWord + puzzPron[1]),
    (puzzPron[2] = subWord2 + puzzPron[2]),
    (puzzPron[3] = subWord + puzzPron[3]),
    (puzzPron[4] = subWord + puzzPron[4]),
    (puzzPron[5] = subWord2 + puzzPron[5]));
}
-1 != lessonTitle.indexOf('mperative') &&
  ('French' == lessonLanguage
    ? (puzzPron = [
        '(tu) ',
        '(tu) ',
        '(nous) ',
        '(nous) ',
        '(vous) ',
        '(vous) ',
      ])
    : 'Spanish' == lessonLanguage
      ? (puzzPron = [
          '(tú) ',
          '(tú) ',
          '(tú) no ',
          '(usted) ',
          '(nosotros) ',
          '(ustedes) ',
        ])
      : 'Portuguese' == lessonLanguage
        ? (puzzPron = [
            '(tu) ',
            '(tu) ',
            '(tu) não ',
            '(você) ',
            '(nós) ',
            '(vocês) ',
          ])
        : 'Italian' == lessonLanguage
          ? (puzzPron = [
              '(tu) ',
              '(tu) non ',
              '(noi) ',
              '(noi) ',
              '(voi) ',
              '(voi) ',
            ])
          : 'German' == lessonLanguage &&
            (puzzPron = [
              '(du) ',
              '(du) ',
              '(ihr) ',
              '(ihr) ',
              '(wir) ',
              '(Sie) ',
            ]));
var conjTitles,
  conjTitlesPuzz,
  slidesPres = [6, 7, 8, 9];
function conjugationTitles() {
  var e = [];
  if (conjNum.length < 15) {
    if ('Italian' == lessonLanguage)
      conjTitles = [
        'Infinito',
        'Presente',
        'Passato&nbsp;Prossimo',
        'Imperfetto',
        'Futuro&nbsp;Semplice',
        'Condizionale',
      ];
    else if ('Spanish' == lessonLanguage) {
      ((conjTitles = [
        'Infinitive',
        'Present',
        'Preterite',
        'Imperfect',
        'Future',
        'Conditional',
      ]),
        (t = quizConj1[0].split(' ')).length > 1 &&
          'undefined' == typeof extraNote &&
          !pronominal &&
          (conjTitles[1] = 'Present&nbsp;(Progressive)'),
        t.length > 2 &&
          'undefined' == typeof extraNote &&
          pronominal &&
          (conjTitles[1] = 'Present&nbsp;(Progressive)'));
    } else if ('Portuguese' == lessonLanguage) {
      var t;
      ((conjTitles = [
        'Infinitive',
        'Present',
        'Preterite',
        'Imperfect',
        'Future',
        'Conditional',
      ]),
        (t = quizConj1[0].split(' ')).length > 1 &&
          'undefined' == typeof extraNote &&
          !pronominal &&
          -1 == forExamples[2].indexOf('senhor') &&
          57 != lessonNumber &&
          (conjTitles[1] = 'Present&nbsp;(Progressive)'),
        t.length > 2 &&
          'undefined' == typeof extraNote &&
          pronominal &&
          57 != lessonNumber &&
          (conjTitles[1] = 'Present&nbsp;(Progressive)'));
    } else
      'French' == lessonLanguage
        ? (conjTitles = [
            'Infinitif',
            'Présent',
            'Passé&nbsp;Composé',
            'Imparfait',
            'Futur&nbsp;Simple',
            'Conditionnel',
          ])
        : 'German' == lessonLanguage &&
          (conjTitles = [
            'Infinitive',
            'Present',
            'Conversational&nbsp;Past',
            'Narrative&nbsp;Past',
            'Future',
            'Conditional',
          ]);
    conjTitlesPuzz = conjTitles.slice();
    for (var s = 0; s < conjNum.length; s++)
      (e.push(conjTitles[conjNum[s]]), s++);
    ('Italian' == lessonLanguage && 20 == lessonNumber
      ? (e = ['io', 'tu', 'lei', 'noi', 'voi', 'loro'])
      : 'Italian' == lessonLanguage &&
        21 == lessonNumber &&
        (e = ['io', 'tu', 'lui', 'noi', 'voi', 'loro']),
      'German' == lessonLanguage &&
        lessonNumber >= 22 &&
        lessonNumber <= 29 &&
        (e = [
          'example 1',
          'example 2',
          'example 3',
          'example 4',
          'example 5',
          'example 6',
        ]),
      (conjTitles = e));
  } else
    ('Italian' == lessonLanguage
      ? (conjTitles = [
          'Infinito',
          'io',
          'io',
          'tu',
          'tu',
          'Lei',
          'lui',
          'lei',
          'noi',
          'noi',
          'voi',
          'voi',
          'loro',
          'loro',
        ])
      : 'Spanish' == lessonLanguage
        ? (conjTitles = [
            'Infinitive',
            'yo',
            'yo',
            'tú',
            'tú',
            'usted',
            'él',
            'ella',
            'nosotros',
            'nosotros',
            'ustedes',
            'ustedes',
            'ellos',
            'ellas',
          ])
        : 'Portuguese' == lessonLanguage
          ? (conjTitles = [
              'Infinitive',
              'eu',
              'eu',
              'tu',
              'você',
              'o senhor',
              'ele',
              'ela',
              'nós',
              'nós',
              'vocês',
              'vocês',
              'eles',
              'elas',
            ])
          : 'French' == lessonLanguage
            ? (conjTitles = [
                'Infinitif',
                'je',
                'je',
                'tu',
                'tu',
                'il',
                'elle',
                'nous',
                'nous',
                'vous',
                'vous',
                'ils',
                'elles',
              ])
            : 'German' == lessonLanguage &&
              (conjTitles = [
                'Infinitive',
                'ich',
                'ich',
                'du',
                'du',
                'er',
                'sie',
                'wir',
                'wir',
                'ihr',
                'ihr',
                'Sie',
                'sie',
                'sie',
              ]),
      (conjTitlesPuzz = conjTitles.slice()));
  if ('undefined' != typeof expressVerb) {
    conjTitles = puzzPron;
    for (var n = 0; n < forExamples.length; n++)
      (-1 == forExamples[n].indexOf('<strong>') &&
        (forExamples[n] = '<strong>' + forExamples[n] + '</strong>'),
        n++);
  }
  if ('undefined' != typeof imageBonus) {
    var i;
    presType = 'bonus';
    for (n = 0; n < forExamples.length; n++)
      (-1 == forExamples[n].indexOf('<strong>') &&
        (forExamples[n] = '<strong>' + forExamples[n] + '</strong>'),
        n++);
    for (e = [], i = 1; i <= forExamples.length; i++) e.push('Verb ' + i);
    for (conjShuffle = [], i = 1; i <= 0.5 * forExamples.length; i++)
      conjShuffle.push(i);
    (shuffle(conjShuffle),
      setTimeout(function () {
        $('#verbBanner').addClass('express1');
      }, 1e3),
      (conjTitles = e));
  }
}
(conjNum.length > 15
  ? ((presType = 'keyPres'), (slidesPres = [6, 7, 8, 9]))
  : 0 == conjNum[0]
    ? ((presType = 'individual'), (slidesPres = [5, 6, 7, 8, 9]))
    : 2 == conjNum[0]
      ? ((presType = 'keyPast'), (slidesPres = [6, 7, 8, 9]))
      : 4 == conjNum[0] &&
        ((quizNumQues = 'keyFuture'), (slidesPres = [6, 7, 8, 9])),
  'French' == lessonLanguage &&
    10 == lessonNumber &&
    ((presType = 'keyPres'), (slidesPres = [6, 7, 8, 9])),
  conjugationTitles());
var quizCombinedArray,
  quizMoreArray,
  FrenchArticles = [
    'Le ',
    'La ',
    "L'",
    'Les ',
    'Un ',
    'Une ',
    'Des ',
    'Du ',
    'De la ',
    "De l'",
  ],
  SpanishArticles = [
    'El ',
    'La ',
    'Los ',
    'Las ',
    'Un ',
    'Unos ',
    'Una ',
    'Unas ',
  ],
  ItalianArticles = [
    'Il ',
    'Lo ',
    "L'",
    'I ',
    'Gli ',
    'Le ',
    'La ',
    'Un ',
    'Uno ',
    'Una',
    "Un'",
  ],
  GermanArticles = ['ein ', 'eine ', 'der ', 'das ', 'die ', 'einen ', 'den '],
  allChars = [
    'À',
    'Á',
    'Â',
    'Ã',
    'Ä',
    'Ç',
    'È',
    'É',
    'Ê',
    'Ë',
    'Ì',
    'Í',
    'Î',
    'Ï',
    'Ñ',
    'Ò',
    'Ó',
    'Ô',
    'Õ',
    'Ö',
    'Ù',
    'Ú',
    'Û',
    'Ü',
    'ß',
    'à',
    'á',
    'â',
    'ã',
    'ä',
    'ç',
    'è',
    'é',
    'ê',
    'ë',
    'ì',
    'í',
    'î',
    'ï',
    'ñ',
    'ò',
    'ó',
    'ô',
    'õ',
    'ö',
    'ù',
    'ú',
    'û',
    'ü',
    'ß',
  ],
  FrenchChars = ['é', 'è', 'ê', 'ë', 'à', 'ç'],
  SpanishChars = ['á', 'é', 'í', 'ó', 'ú', 'ñ'],
  ItalianChars = ['à', 'é', 'è', 'ì', 'ò', 'ù'],
  GermanChars = ['ß', 'ä', 'ö', 'ü', 'ï', 'ë'],
  PortugueseArticles = [
    'O ',
    'A ',
    'Os ',
    'As ',
    'Um ',
    'Uma ',
    'Uns ',
    'Umas ',
  ],
  PortugueseChars = [
    'á',
    'â',
    'ã',
    'à',
    'ç',
    'é',
    'ê',
    'í',
    'ó',
    'ô',
    'õ',
    'ú',
  ],
  articleArray = window[lessonLanguage + 'Articles'],
  specialChars = window[lessonLanguage + 'Chars'],
  quizDescription1 =
    'Listen carefully and click on the image (and tense) corresponding to the sentence you hear. Train your ear to understand sentences without reading them.',
  quizDescription2 =
    'Drag the conjugation puzzle pieces over to the correct subject pronoun. Each right answer will unlock a part of the picture hidden by puzzle pieces.',
  quizDescription3 =
    'Conjugations can look and sound VERY similar between tenses and it can be tricky to know the correct conjugation. Drag the books (conjugations) on their matching shelves (tenses).',
  quizDescription4 =
    'Type in the correct conjugation corresponding to the sentence. No more guessing here, you have to know the conjugation to get the right answer! Hints are available, but be careful, they cost valuable points...',
  numWords = engExamples.length,
  quizMapArray = [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
  ];
((quizMapArray = quizMapArray.slice(0, 0.5 * numWords)),
  0 === lessonNumber &&
    ((lessonTitle = 'Verbs: Extra Practice'),
    (presType = 'individual'),
    (quizMapArray = (quizMapArray = [
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
      40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74,
      76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
    ]).slice(0, 0.5 * numWords))),
  'keyPres' == presType
    ? (quizMoreArray = shuffle((quizMoreArray = [1, 2, 3, 4, 5, 6])))
    : 'individual' != presType &&
      (quizMoreArray = shuffle((quizMoreArray = [1, 2, 3, 4]))),
  6 == engExamples.length &&
    (quizMoreArray = shuffle((quizMoreArray = [1, 2]))),
  'Italian' == lessonLanguage &&
    lessonNumber < 22 &&
    lessonNumber > 19 &&
    (quizMoreArray = []));
var userName,
  currQuizNum,
  resetCode,
  userEmail,
  userEmail2,
  engExamplesQuiz,
  storeInfo,
  tuvm58dj,
  tuvm58dj2,
  fieldToUpdate,
  infoToUpdate,
  quizQuesNum,
  currentPts,
  currentErrors,
  puzzleArray,
  userInfo,
  timerTime,
  soundRepeated,
  closeWin =
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25" xml:space="preserve"><g id="Ellipse_1_13_"><g><circle fill-rule="evenodd" clip-rule="evenodd" fill="#666" cx="12.5" cy="12.7" r="11.9"/></g></g><path fill="#FFFFFF" d="M14.8,12.7L18.5,9c0.3-0.3,0.3-0.8,0-1l-1.2-1.2c-0.3-0.3-0.8-0.3-1,0l-3.7,3.7L8.8,6.7c-0.3-0.3-0.8-0.3-1,0L6.5,7.9c-0.3,0.3-0.3,0.8,0,1l3.7,3.7l-3.7,3.7c-0.3,0.3-0.3,0.8,0,1l1.2,1.2c0.3,0.3,0.8,0.3,1,0l3.7-3.7l3.7,3.7c0.3,0.3,0.8,0.3,1,0l1.2-1.2c0.3-0.3,0.3-0.8,0-1L14.8,12.7z"/></svg>';
function loadPresentation() {
  ((fastSounds = []), (slowSounds = []), (quizSounds = []));
  var e = 1;
  if (0 !== lessonNumber) {
    for (var t = 1; t <= 2 * numWords; t++)
      (fastSounds.push(oPath + 'sounds/sound' + e + soundType),
        e++,
        slowSounds.push(oPath + 'sounds/sound' + e + soundType),
        e++);
    if ('individual' != presType)
      for (var s = 1; s <= quizForExamples.length; s++)
        quizSounds.push(oPath + 'sounds/quiz' + s + soundType);
  } else
    for (t = 0; t < 0.5 * numWords; t++)
      (fastSounds.push(''),
        fastSounds.push(
          oPath2 + nums1[t] + '/sounds/sound' + (2 * nums2[t] + 1) + soundType,
        ));
}
function buttonClicked() {
  ((picControl = 'picFade'),
    (currentWordNum =
      2 * parseInt($(this).attr('id').split('verbBtn').join('')) - 2),
    changeWord());
}
function resizeQuiz() {
  if (!focused || 'mobile' != currentDevice) {
    ((viewportHeight = $('body').height() - 45),
      $('body').hasClass('notch') && (viewportHeight -= 45),
      $('body').hasClass('android') && (viewportHeight -= 20),
      $('.menuBtnContainer').show(),
      $('.menuTitleContainer').hide(),
      $('body').hasClass('notch') &&
        ($('#quizTxt1').show(), $('#quizTxt2').show()),
      (viewportWidth = $('html').innerWidth()),
      (screenRatio = $('html').width() / $('html').height()),
      viewportWidth >= 800
        ? ($('#quizBannerItem3').show(), $('#quizBannerItem2').show())
        : viewportWidth < 800 && viewportWidth >= 700
          ? ($('#quizBannerItem3').hide(), $('#quizBannerItem2').show())
          : viewportWidth < 500
            ? ($('#quizBannerItem3').hide(),
              $('#quizBannerItem2').hide(),
              $('#quizTxt1').hide(),
              $('#quizTxt2').hide())
            : ($('#quizBannerItem3').hide(), $('#quizBannerItem2').hide()),
      viewportWidth < 500
        ? ($('#lineBreak').html('<br>'),
          $('#quizTxt1').hide(),
          $('#quizTxt2').hide())
        : ($('#lineBreak').html('&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;'),
          $('#quizTxt1').show(),
          $('#quizTxt2').show()),
      viewportHeight < 655 || screenRatio <= 1
        ? $('#quizContent').css({ height: viewportHeight - 45 + 'px' })
        : $('#quizContent').css({ height: '630px' }));
    var e = $('#quizContent').width(),
      t = $('#quizContent').height();
    (screenRatio >= 0.85
      ? $('.chooseQuizIcon').css({ height: 0.4 * t - 75 + 'px', width: 'auto' })
      : $('.chooseQuizIcon').css({ width: 0.35 * e + 'px', height: 'auto' }),
      (viewportHeight = $('body').height() - 45),
      (spaceLeft =
        viewportHeight > 650 && screenRatio > 1 ? 520 : viewportHeight - 130),
      $('body').hasClass('notch') &&
        ($('#quizTxt1').show(), $('#quizTxt2').show()),
      $('body').hasClass('notch') && (spaceLeft -= 45),
      $('body').hasClass('android') && (spaceLeft -= 20),
      1 == currentQuiz &&
        (screenRatio <= 1
          ? ($('.quizItems').css({
              height: spaceLeft / 3 - 67 + 'px',
              top: '25px',
            }),
            $('.quizItems').addClass('quizItemsPortrait'))
          : ($('.quizItems').css({
              height: spaceLeft / 2 - 67 + 'px',
              top: '25px',
            }),
            $('.quizItems').removeClass('quizItemsPortrait'))),
      viewportHeight <= 700
        ? $('#lightTimerDiv').css({ width: viewportHeight / 4 + 'px' })
        : $('#lightTimerDiv').css({ width: '190px' }),
      viewportHeight <= 400
        ? $('#quizDonePts').hide()
        : $('#quizDonePts').show(),
      viewportHeight <= 500
        ? $('#quizPreloadDescription').hide()
        : $('#quizPreloadDescription').show(),
      2 == currentQuiz &&
        ($('.puzzAnswer').css({ right: '3%', left: 'auto' }),
        $('#puzzle1B').css({ top: puzzPos[0] }),
        $('#puzzle2B').css({ top: puzzPos[1] }),
        $('#puzzle3B').css({ top: puzzPos[2] }),
        $('#puzzle4B').css({ top: puzzPos[3] }),
        $('#puzzle5B').css({ top: puzzPos[4] }),
        $('#puzzle6B').css({ top: puzzPos[5] }),
        (spaceLeft += 20),
        screenRatio > 1
          ? (viewportWidth > 700
              ? ($('#quizMultiImg').css({ width: '37%' }),
                $('#quizAllItemsB').css({ width: '58%' }))
              : ($('#quizAllItemsB').css({ width: '64%' }),
                $('#quizMultiImg').css({ width: '27%' })),
            viewportHeight > 700
              ? $('#quizAllItemsB, #quizMultiImg').css({
                  height: '500px',
                  top: '50px',
                })
              : $('#quizAllItemsB, #quizMultiImg').css({
                  height: spaceLeft + 'px',
                  top: '25px',
                }))
          : ($('#quizMultiImg').css({ height: 0.34 * spaceLeft + 'px' }),
            $('#quizAllItemsB').css({ height: 0.62 * spaceLeft + 'px' }),
            $('#quizAllItemsB').css({ width: '96%', top: '30px' }),
            $('#quizMultiImg').css({ width: '94%', top: '50px' }))),
      3 == currentQuiz &&
        ($('#book1').css({
          top: 'auto',
          bottom: '6%',
          left: '2%',
          right: 'auto',
        }),
        $('#book2').css({
          top: 'auto',
          bottom: '17%',
          left: '7%',
          right: 'auto',
        }),
        $('#book3').css({
          top: 'auto',
          bottom: '12%',
          left: '37%',
          right: 'auto',
        }),
        $('#book4').css({
          top: 'auto',
          bottom: '17%',
          left: 'auto',
          right: '7%',
        }),
        $('#book5').css({
          top: 'auto',
          bottom: '6%',
          left: 'auto',
          right: '2%',
        })),
      4 == currentQuiz &&
        (screenRatio > 1
          ? ((spaceLeft -= 20),
            $('#quizAllItemsC, #quizWriteImg').css({
              height: 0.95 * spaceLeft + 'px',
              'margin-top': '28px',
            }),
            $('#quizWriteImg').css({
              'margin-right': '2%',
              'margin-left': '1%',
              width: '45%',
              'max-width': '5000px',
              bottom: 'auto',
            }),
            $('#quizAllItemsC').css({
              'margin-left': '2%',
              'margin-right': '1%',
              width: '49%',
              'max-width': '5000px',
              'padding-top': '0',
            }),
            $('#writeAnswerBoard').css({ height: 0.6 * spaceLeft + 'px' }))
          : ((spaceLeft -= 50),
            $('#quizAllItemsC, #quizWriteImg').css({
              width: '96%',
              'margin-left': '2%',
            }),
            $('#quizWriteImg').css({
              height: 0.44 * spaceLeft + 'px',
              bottom: '10px',
            }),
            $('#quizAllItemsC').css({
              height: 0.54 * spaceLeft + 'px',
              'margin-top': '30px',
            }),
            $('#writeAnswerBoard').css({
              height: 0.54 * spaceLeft - 160 + 'px',
            })),
        $('body').hasClass('notch') &&
          $('#quizWriteImg').css({ bottom: '0px' })),
      setTimeout(function () {
        (resizeButtonQuizText(), resizeQuizText());
      }, 20));
  }
}
function resizeButtonQuizText() {
  for (var e = 1; e <= 6; e++) {
    ($('.textWrap5').css({ fontSize: '13px' }),
      $('#quizEng' + e).css({ fontSize: '13px' }),
      $('.textWrap5').text($('#quizEng' + e).text()));
    for (
      var t = $('.textWrap5').width(), s = $('#quizEng' + e).width(), n = 13;
      t > s && n > 0.3;
    )
      ((n -= 0.5),
        $('.textWrap5').css({ fontSize: n + 'px' }),
        $('#quizEng' + e).css({ fontSize: n + 'px' }),
        (t = $('.textWrap5').width()),
        (s = $('#quizEng' + e).width()));
  }
  for (e = 1; e <= 4; e++) {
    $('#quizItem' + e + 'B').css({ fontSize: '22px' });
    for (
      var i = $('#quizMultiImg').width() - 20,
        r = $('#quizItem' + e + 'B').width(),
        o = 22;
      r > i && o > 0.3;
    )
      ((o -= 0.5),
        $('#quizItem' + e + 'B').css({ fontSize: o + 'px' }),
        (r = $('#quizItem' + e + 'B').width()));
  }
}
function resizePage() {
  if (
    ($('html').innerWidth() < 550
      ? ($('body').addClass('notch'),
        $('#startCover').is(':visible')
          ? ($('.menuBar').addClass('noBack'),
            $('.menuBtnContainer, .menuTitleContainer').hide())
          : $('#slideCont').is(':visible')
            ? $('.menuBar').addClass('noBack')
            : $('.menuBtnContainer, .menuTitleContainer').show())
      : ($('body').removeClass('notch'),
        $('.menuBtnContainer, .menuTitleContainer').show()),
    $('#quizContent').is(':visible'))
  )
    resizeQuiz();
  else {
    $('#startCover').css({ height: $('html').innerHeight() + 'px' });
    var e = 0.5 * numWords,
      t = 1,
      s = 1100;
    if ((e < 7 && (s = 150 * e * 1.07), $('html').innerWidth() <= s)) {
      $('.verbButtons').css({ width: '150px' });
      for (var n = 1; n <= e; n++)
        ($('#verbBtn' + n).css({ left: t + 'px' }), (t += 153));
    } else {
      var i = (100 / (0.5 * numWords)) * 0.01 * $('.ouinoContent').width();
      ((i -= 3), $('.verbButtons').css({ width: i + 'px' }));
      for (n = 1; n <= e; n++)
        ($('#verbBtn' + n).css({ left: t + 'px' }), (t = t + i + 3));
    }
    ((viewportHeight = $('body').height() - 45),
      (viewportWidth = $('html').innerWidth()),
      (screenRatio = $('html').width() / $('html').height()));
    var r = viewportHeight - 40;
    if (
      ($('body').hasClass('notch') && (r -= 45),
      $('body').hasClass('android') && (r -= 20),
      (theFont = viewportHeight > 600 ? 38 : viewportHeight < 450 ? 27 : 33),
      viewportWidth < 600
        ? ($('.menuItem').css({ 'font-size': '15px' }),
          $('.menuItemDescription').css({ 'font-size': '11px' }))
        : ($('.menuItem').css({ 'font-size': '17px' }),
          $('.menuItemDescription').css({ 'font-size': '14px' })),
      viewportWidth >= 850 ? $('.menuLogo').show() : $('.menuLogo').hide(),
      screenRatio < 1 && $('html').width() != $('html').height())
    ) {
      ($('.ouinoContent').addClass('portrait'),
        (vertSwipe = !0),
        $('.ouinoContent').css({ height: r + 'px' }),
        $('.conjContainer').css({
          width: '100%',
          height: r - 70 + 'px',
          top: '60px',
          right: '0',
        }),
        $('.menuConj').removeClass('centerDiv'));
      var o = r - 330 - $('#conjEnglish').height();
      $('.shinyPicture').css({ height: o + 'px' });
    } else
      ($('body').removeClass('vert'),
        (vertSwipe = !1),
        $('.verbButtons').css({ 'font-size': '13px' }),
        $('.ouinoContent').removeClass('portrait'),
        $('.ouinoContent').css({ height: r + 'px' }),
        $('.shinyPicture').css({ width: '54%', height: '64%' }),
        $('.conjContainer').css({ width: '45%', height: '64%' }),
        $('.wordSentence').css({ width: '100%', height: '26%' }),
        viewportHeight <= 495 &&
          $('.shinyPicture, .conjContainer').css({ height: '58%' }),
        viewportHeight <= 535
          ? $('.shinyPicture, .conjContainer').css({ height: '59%' })
          : viewportHeight <= 560
            ? $('.shinyPicture, .conjContainer').css({ height: '60%' })
            : viewportHeight <= 600
              ? $('.shinyPicture, .conjContainer').css({ height: '61%' })
              : viewportHeight <= 675
                ? $('.shinyPicture, .conjContainer').css({ height: '62%' })
                : viewportHeight <= 730 &&
                  $('.shinyPicture, .conjContainer').css({ height: '63%' }),
        viewportHeight >= 700
          ? $('#conjEnglish, #conjForeign').css({ top: '6%', bottom: 'auto' })
          : $('#conjEnglish, #conjForeign').css({ top: '3%', bottom: 'auto' }),
        viewportHeight >= 600
          ? $('#conjForeign, #conjEnglish').css({ opacity: '1' })
          : $('#conjForeign, #conjEnglish').css({ opacity: '0' }));
    ($('.ouinoContent').outerHeight(), $('.verbButtonOn').outerHeight());
    ($('#verbQuestion').css({
      top: $('.verbButtonOn').outerHeight() + 5 + 'px',
    }),
      $('#endWrap').is(':visible') &&
        (viewportHeight >= 720
          ? $('#learningTip').show()
          : $('#learningTip').hide()),
      resizeTitle(),
      resizeVerbMenu(),
      resizeText(),
      setTimeout(function () {
        resizeText();
      }, 500),
      $('.wordSentence, .wordSentenceB').removeClass('disa'),
      currentWordNum % 2 == 0
        ? $('.ouinoContent').hasClass('portrait') &&
          $('.wordSentence').addClass('disa')
        : $('.ouinoContent').hasClass('portrait') &&
          $('.wordSentenceB').addClass('disa'));
  }
}
function resizeTitle() {
  if (
    ($('.menuTitleContainer').text(lessonTitle), $('html').innerWidth() < 550)
  )
    lessonTitle.length > 41 &&
      $('.menuTitleContainer').text(lessonTitle.slice(0, 36) + '...');
  else {
    var e = $('.menuBtnContainer').width(),
      t = $('.menuTitleContainer').width(),
      s = $('.smallLogo').width(),
      n = viewportWidth - (s + t + e);
    for (
      n > 1100
        ? ($('.verbBannerItem').show(), $('#verbBanner5').hide())
        : ($('.verbBannerItem').hide(), $('#verbBanner5').show());
      n < 60 && $('.menuTitleContainer').text().length > 6;
    ) {
      var i = $('.menuTitleContainer').text().slice(0, -4);
      ((i = (i = i.concat('...')).split(' ...').join('...')),
        $('.menuTitleContainer').html(i),
        (t = $('.menuTitleContainer').width()),
        (n = viewportWidth - (s + t + e)));
    }
    $('#volDiv').is(':visible')
      ? $('#verbBanner').css({ right: e + 28 + 'px' })
      : $('#verbBanner').css({ right: e + 2 + 'px' });
  }
}
var knowledgeStars,
  restartedLesson,
  quizScores,
  pauseTwo,
  registerLoaded,
  audioSprite,
  passwordLoaded,
  viewportHeight,
  screenRatio,
  viewportWidth,
  currentMusic,
  picControl,
  wordTimer,
  mySound,
  madeError,
  theFont,
  fastSounds,
  slowSounds,
  foundArticle,
  quizGoodAnswer,
  quizGoodPunct,
  arrowClicks,
  writtenString,
  timerWait,
  charsToAdd,
  selectPuzz,
  puzzContent,
  wArr,
  allLetters,
  scrambled,
  letterArray,
  letterArrayNum,
  currentQuiz,
  pastQuizScore,
  quizNumArray,
  pastQuizScoreAll,
  timerDelay,
  dragPosX,
  dragPosY,
  mouseIsDown,
  currentSprite,
  onTimeUpdate,
  submitted,
  quizNumQues,
  LOrR,
  fastOverwrite = !1,
  currentWordNum = 0,
  picToggle = 1,
  soundPlaying = !1,
  soundLessonEvent = !1,
  soundQuizEvent = !1,
  soundSlideEvent = !1,
  checkAccent = !1,
  quizPtsCount = 65,
  vowels = ['a', 'e', 'i', 'o', 'u', 'h'],
  puzzPos = ['12%', '27%', '42%', '57%', '72%', '87%'],
  infVerb = lessonTitle.split(' (');
infVerb = infVerb[0];
var fastOrSlow,
  disableTimer = !1,
  quizLoaded = !1,
  timerLength = 3e3,
  numberLength = 7e3,
  lessonInit = 'true',
  wtZGh = '/php/',
  ETTNv = 'www.',
  MJhei = 'resetCode',
  cWbBT = '.php',
  jGWFQ = 'getContent',
  KsXgx = 'update',
  MTixn = 'updateAll',
  rvUnf = 'eliseunogueira',
  QjSKe = 'sendReset',
  PbWjZ = 'register',
  YLtLU = 'https://',
  OGXpV = '.com.br';
loadPresentation();
var loginAppend =
    '<header id="loginCover" class="wrapper"><div id="loginCenter" class="optionsIn gradientColor alignVerticalWin"><img class="letterLogo" src="../../common/letterLogo.svg"><form autocomplete="off" id="loginForm"><table class="loginTable"><tr><th colspan="2"><h3 id="loginTitle" class="loginTitle">Ouino Account Login</h3></th></tr><tr><td colspan="2"><input type="email" id="emailField" required class="loginField" placeholder="Email Address"/></td></tr><tr><td colspan="2"><input type="password" id="jguyr4" required class="loginField" maxlength="12" placeholder="Password"/><h5 id="loginForgot" class="smallerUnderline">Forgot password?</h5></td></tr><tr><td><h5 id="loginRemember" class="loginRemember"><img src="../../common/checkOff.svg" id="rememberCheck" class="rememberCheck"/>Remember me</h5></td><td><input type="submit" class= "loginOptions gradientColor2 loginSubmit" value="Log in"></td></tr><tr><td colspan="2"><h5 id="loginBottom" class="smallUnderline">Don\'t have an account yet? Create one.</h5></td></tr></table></form></div><div id="loginOffline" class="optionsIn gradientColor alignVerticalWin"><table class="offlineTable"><tr><th width="15%"><img class="warningLogo" src="../../common/warning.svg"></th><td colspan="2"><h3 class="offlineTitle">CURRENTLY OFFLINE</h3><p class="offlineWord">You are currently offline. An internet connection is required to sync progress between devices. Your progress will be saved locally for now. Simply restart the program when an internet connection is available in order to sync your progress with the server.</td></tr></table><table class="offlineTable2"><tr><td width="60%"><h5 id="offlineRemember" class="loginRemember"><img src="../../common/checkOff.svg" id="offlineCheck" class="rememberCheck"/>Do not show again.</h5></td><td><input type="submit" class= "loginOptions gradientColor2" value="Start Lesson" id="offlineButton"></td></tr></table></div></header><div id="warningWrap" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><table class="messageTable"><tr><td><h2 class="messageTitle"><img class="messageCheck" src="../../common/success.svg">Account Created!</h2></td></tr><tr><td><h4 id="accountsLeft"></h4><p id="accountsText"></p></td></tr><tr><td><h5 id="loginRemember2" class="loginRemember"><img src="../../common/checkOff.svg" id="rememberCheck2"/>Remember new account on this computer.</h5></td></tr></table><table class="registerButtons tenPxPad"><tr><td class="registerButton"><input type="button" class= "loginOptions gradientColor2" value="Go back" id="doneRegisterBtn2"></td><td><input type="submit" class= "loginOptions gradientColor2" value="Log in" id="doneLogInBtn"></td></tr></table></div></div><header id="registerCover" class="wrapper2"> <div id="registerCenter" class="optionsIn gradientColor alignVerticalWin"><h2 class="registerTitle">Create a Ouino Account</h2><form autocomplete="off" id="registerForm"><table class="registerTable"><tr><td colspan="3"><h2 id="activationText" class="centerMenuItems registerText">Enter your activation key.<a name="You should have received an email with your activation key at the time of purchase. If you\'ve purchased the retail box, your activation key should be located in your package." class="tooltip"><img src="../../common/question.svg" class="questionMark" /></a></h2><input type="input" id="activationField" required class="registerField activationField" placeholder="Activation Key"/></td></tr><tr><td colspan="3"><h2 id="accountCreateText" class="centerMenuItems registerText">Create your login information.<a name="Enter the information you want to use to log into your Ouino Languages account." class="tooltip"><img src="../../common/question.svg" class="questionMark" /></a></h2><input type="name" id="nameFieldSet" required class="registerField" placeholder="Full Name"/></td></tr><tr><td><input type="email" id="emailFieldSet" required class="rgField1" placeholder="Email Address"/></td><td><input type="password" id="jguyr4Set" required class="rgField1" maxlength="12" placeholder="Create a password"/></td></tr><tr><td><input type="email" id="emailFieldSet2" required class="rgField2" placeholder="Confirm Email"/></td><td><input type="password" id="jguyr4Set2" required class="rgField2" maxlength="12" placeholder="Confirm password"/></td></tr></table><table class="registerTable"><tr><td><input type="button" id="doneRegisterBtn" class="loginOptions gradientColor2" value="Go back"></td><td><input type="submit" class="loginOptions gradientColor2" value="Create Account"></td></tr></table></form></div></header><div id="passwordWrap" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><form autocomplete="off" id="passwordForm" class="alignVerticalItem"><table height="50%" class="messageTable"><tr><td colspan="2"><h3 id="passwordTitle" class="loginTitle">Account Password Reset</h3><input type="email" id="emailFieldReset" required class="loginField" placeholder="Enter your registered email address"/></td></tr><tr><td class="registerButton"><input type="button" class="loginOptions gradientColor2" value="Go back" id="hidePasswordBtn"></td><td><input type="submit" class= "loginOptions gradientColor2" value="Get Reset Code"></td></tr><tr><td colspan="2"><h5 id="passwordSkipBtn" class="smallUnderline">Already have a reset code? Skip this step.</h5></td></tr></table></form></div></div><div id="passwordReset" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><form autocomplete="off" id="passwordForm2" class="alignVerticalItem"><table class="messageTable"><tr><td colspan="2"><h3 id="passwordTitle2" class="loginTitle">Account Password Reset</h3><p>Email with reset code sent successfully! Please enter the reset code in the field below, followed by your new password.</p></td></tr><tr><td colspan="2"><input type="input" id="resetCodeField" required class="registerField" placeholder="Enter the reset code"/></td></tr><tr><td><input type="password" id="jguyr4Reset" required class="rgField2" maxlength="12" placeholder="Create a password"/></td><td><input type="password" id="jguyr4Reset2" required class="rgField2" maxlength="12" placeholder="Confirm password"/></td></tr><tr><td class="registerButton"><input type="button" class="loginOptions gradientColor2" value="Go back" id="hidePasswordBtn2"></td><td><input type="submit" class= "loginOptions gradientColor2" value="Reset Password"></td></tr></table></form></div></div><div id="warningWrap2" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><table class="messageTable alignVerticalItem max300"><tr><td colspan="3"><h2 class="messageTitle"><img class="messageCheck" src="../../common/success.svg">Password updated!</h2></td></tr><tr><td colspan="3"><p>Your password has been updated successfully and a confirmation email has been sent.</p></td></tr><tr><td width="35%"></td><td><input type="button" class="loginOptions gradientColor2" value="Okay" id="doneRegisterBtn3"></td><td width="35%"></td></tr></table></div></div>',
  mainHTML =
    '<div id="loadLogo" style="display: none; opacity: 0.9; border-radius: 10px; cursor: default; padding: 40px; background: black; z-index: 2000; position: fixed; width: 100px; height: 30px; margin: auto auto; left:0; right: 0; top: 0; bottom:0; font-size: 22px; font-weight: bold; color: white;">LOADING...</div><section id="slideCont"><img id="slideImg" src=""/><div id="slideText"></div><div class="slideBtn1">Okay</div><div class="slideBtn2">Don\'t show me tips</div></section><div id="starConjWarn"><img src="../../common/iconStar2.svg">Always the same conjugation (Click to learn more)</div><div id="pronounWarn"></div><div id="fontPreload1"></div><div id="fontPreload2"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel">RESTART LESSON</b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><div id="titleLogo"><span class="menuTitleContainer alignVerticalItem"></span></div><div id="verbBanner"><div id="verbBanner5"><img class="verbBannerImage" src="../../common/iconInfo.svg"></div><div id="verbBanner1" class="verbBannerItem"><img class="verbBannerImage" src="../../common/puzzle1.svg"><b id="verbText1" class="verbTXT"></b><b id="verbTextB1" class="yellowText verbTXT2"></b><b class="verbTXT"> verb</b></div><div id="verbBanner2" class="verbBannerItem"><img class="verbBannerImage" src="../../common/verbLogo1.svg"><b id="verbText2" class="verbTXT"></b><b id="verbTextB2" class="yellowText verbTXT2"></b></div><div id="verbBanner3" class="verbBannerItem"><img class="verbBannerImage" src="../../common/verbLogo2.svg"><b class="verbTXT">Stem: </b><b id="verbTextB3" class="yellowText verbTXT2"></b></div><div id="verbBanner4"><img class="verbBannerImage" src="../../common/verbLogo3.svg"><b class="verbTXT">Pronominal</b></div></div><span class="menuBtnContainer"><img id="keyboardBtn" src="../../common/keyboard2.svg" class="smallIcon" style="display:none;"/><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I\'m confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoVerb.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><div id="verbBannerMenu"><div id="verbBanner1B" class="verbBannerItem2"></div><div id="verbBanner2B" class="verbBannerItem2"></div><div id="verbBanner3B" class="verbBannerItem2"></div><div id="verbBanner4B"></div><div class="closeWinBtn2"></div></div><div id="verbWrap"></div><div class="menuVerb"><div class="closeWinBtn"></div><div id="menuVerbContent"></div></div><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio>',
  lessonAppend =
    '<div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><main class="ouinoContent selectOff"><img id="verbQuestion" src="../../common/iconQues.svg"><div id="backIn"></div><div id="backInLeft"></div><div id="backInRight"></div><div class="menuConj"><div id="menuVerbSec1"></div><div id="menuVerbSec2"></div><div class="closeWinBtn3"></div></div><figure class="shinyPicture"><div class="engToggle"></div><div class="insight"></div><div id="flashCard"></div><div id="flashCard2"></div><div id="sideNote"></div><figure class="arrowControl"><div class="leftArrow"></div><div class="rightArrow"></div><div id="middleSwipe"></div></figure><figure class="mainPic2" alt="mainImage"></figure><figure class="mainPic1" alt="mainImage"></figure><img class="whiteBack" src="../../common/white.jpg" alt="mainImage"></figure><section class="wordSentence"><div class="wordSentenceIn alignVerticalItem"><div id="slowBubble1" class="slowBubble"></div><div class="textWrap3"><h6 class="disSentence">-Text Disabled-</h6></div><div class="textWrap"><h6 class="forSentence"></h6></div><br><div class="textWrap2"><h6 class="engSentence"></h6></div></div></section><aside class="conjContainer"><div id="conjOpen"><img class="progIcon" src="../../common/conjOpen.svg">SEE FULL CONJUGATION</div><div id="conjForeign"><div><p id="conjTitleFor" class="conjTitle"><img class="flagIcon" src="../../common/flagIcon.svg"></p></div><div id="conjSpan"><img id="starQues1" class="starQuestion" src="../../common/iconStar.svg"><img id="starQues2" class="starQuestion" src="../../common/iconStar.svg"><div id="conjItem1" class="conjItems"></div><div id="conjItem2" class="conjItems"></div><div id="conjItem3" class="conjItems"></div><div id="conjItem4" class="conjItems"></div><div id="conjItem5" class="conjItems"></div><div id="conjItem6" class="conjItems"></div><div id="conjItem7" class="conjItems"></div><div id="conjItem8" class="conjItems"></div></div></div><div id="conjEnglish"><div><p class="conjTitle"><img class="flagIcon" src="../../common/flagIcon2.svg">English</p></div><div id="conjSpan2"><div id="conjItemB1" class="conjItems"></div><div id="conjItemB2" class="conjItems"></div><div id="conjItemB3" class="conjItems"></div><div id="conjItemB4" class="conjItems"></div><div id="conjItemB5" class="conjItems"></div><div id="conjItemB6" class="conjItems"></div><div id="conjItemB7" class="conjItems"></div><div id="conjItemB8" class="conjItems"></div></div></div><section class="wordSentenceB"><div class="wordSentenceInB alignVerticalItem"><div id="slowBubble2" class="slowBubble"></div><div class="textWrap3B"><h6 class="disSentenceB">-Text Disabled-</h6></div><div class="textWrapB"><h6 class="forSentenceB"></h6></div><br><div class="textWrap2B"><h6 class="engSentenceB"></h6></div></div></section></aside><div class="buttonWrap"></div></main>',
  quizAppend =
    '<div id="wrongAnswerPic"> <div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"> <div id="goodAnswerIn"></div></div><div id="goodAnswerPic2"><div id="goodAnswerIn2"></div></div><img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><div id="puzzleBack"></div><img id="quizGoBack" src="../../common/menuIcon1.svg"> <table id="quizDone" > <tr> <th colspan="2" id="quizDoneTitle"></th> </tr><tr> <td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr> <td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp; <p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr> <td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div><span class="addQuizFlash"><img src="../../flash/images/cards.svg"/> Add Errors to Flash Cards</span></td></tr></table> <div id="quizScoreBack"> <div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"><div id="quizTimerPointer"><img id="quizTimerImage" src="../../common/timerPointer.svg"></div><div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizTimer2"> <div id="quizTimerGood2"></div><div id="quizTimerBar"></div><div id="quizTimerBad2"></div></div><div id="quizItself"> <div id="quizSentenceContainer"> <div class="quizSentenceWrap"> <span id="quizSentenceFor"></span><br> <span id="quizSentenceEng">This is a long test for the quiz.</span> </div></div><div class="textWrap5"></div><div id="quizAllItems"><div class="engRepeat engDisabled"></div> <div id="quizItem1" class="quizItems"> <p id="quizEng1" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem2" class="quizItems"> <p id="quizEng2" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem3" class="quizItems"> <p id="quizEng3" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem4" class="quizItems"> <p id="quizEng4" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem5" class="quizItems"> <p id="quizEng5" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem6" class="quizItems"> <p id="quizEng6" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div></div><div id="quizAllItemsB"></div><div id="textureIn"></div><div id="quizAllItemsD"></div><div id="quizMultiImg"><div id="topPuzzle"></div></div><div id="quizAllItemsC"><div id="hintTable"> <div id="hint1" class="boardBottom"> </div><div id="hint2" class="boardBottom"> </div><div id="hint3" class="boardBottom"> </div></div> <form id="answerForm" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" novalidate> </form> <div id="writeAnswerBoard"> <table id="boardTable"> <tr id="specialChars"> <td id="char1" class="boardChar"></td><td id="char2" class="boardChar"></td><td id="char3" class="boardChar"></td><td id="char4" class="boardChar"></td><td id="char5" class="boardChar"></td><td id="char6" class="boardChar"></td></tr><tr> <td colspan="6" id="writeError"></td></tr><tr> <td colspan="6" id="boardMain"><span id="writtenAnswer"></span></td></tr><tr> <td colspan="6" id="writeError2">CONTINUE</td></tr></table> </div></div><div id="noteBook"></div><div id="quizWriteImg"> <div id="picFrame"></div><div id="picFrameIn"></div><img id="wrongLogo1" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo2" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo3" class="wrongLogo" src="../../common/strike.svg"></div></div><table id="quizPreload"> <tr> <th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th> </tr><tr> <td id="quizPreloadMedal"></td></tr><tr> <td id="quizPreloadStart">START NOW</td></tr></table> <div id="quizStart"> <div id="quizStartImg"> <div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div><table id="quizMenu"> <tr> <th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th></tr><tr> <td id="quizBtn1" class="quizType"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">LISTENING <br>PRACTICE</h2> <img class="chooseQuizIcon" src="../../common/quizverb1.svg"/> <h2 class="chooseQuizText2">Auditory Training</h2></td><td id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">CONJUGATION <br>MATCH</h2> <img class="chooseQuizIcon" src="../../common/quizverb2.svg"/> <h2 class="chooseQuizText2">Difficulty: Average</h2></td></tr><tr> <td id="quizBtn3" class="quizType"><div id="sMedal3" class="smallMedal"></div><h2 class="chooseQuizText">BY THE BOOK</h2> <img class="chooseQuizIcon" src="../../common/quizverb3.svg"/> <h2 class="chooseQuizText2">Difficulty: Hard</h2></td><td id="quizBtn4" class="quizType"><div id="sMedal4" class="smallMedal"></div><h2 class="chooseQuizText">WRITE IT OUT</h2> <img class="chooseQuizIcon" src="../../common/quizverb4.svg"/> <h2 class="chooseQuizText2">Difficulty: Very Hard</h2></td></tr></table></main>',
  imageArray = [],
  imageArray2 = [];
if (0 !== lessonNumber) {
  for (var num = 1; num <= 0.5 * numWords; num++)
    (imageArray.push(oPath + 'images/pic' + num + '.jpg'),
      imageArray.push(oPath + 'images/pic' + num + '.jpg'));
  if (
    (6 == imageArray.length &&
      (imageArray.push(oPath + 'images/quiz1.jpg'),
      imageArray.push(''),
      imageArray.push(oPath + 'images/quiz2.jpg'),
      imageArray.push(''),
      imageArray.push(oPath + 'images/pic7.jpg'),
      imageArray.push('')),
    'individual' != presType)
  )
    for (num = 1; num <= quizForExamples.length; num++)
      imageArray2.push(oPath + 'images/quiz' + num + '.jpg');
} else
  for (num = 0; num < 0.5 * numWords; num++)
    (imageArray.push(
      oPath2 +
        nums1[num] +
        '/images/pic' +
        Math.ceil(0.5 * nums2[num]) +
        '.jpg',
    ),
      imageArray.push(''));
if (
  ((vowels = ['a', 'e', 'i', 'o', 'u', 'h', 'é']),
  'undefined' != typeof imageBonus)
) {
  var rr;
  for (imageArray = imageBonus.splice(0), rr = 0; rr < fastBonus.length; rr++)
    fastBonus[rr] = fastBonus[rr] + sType;
  for (fastSounds = fastBonus.splice(0), rr = 0; rr < slowBonus.length; rr++)
    slowBonus[rr] = slowBonus[rr] + sType;
  slowSounds = slowBonus.splice(0);
}
for (xx = 0; xx < imageArray.length; xx++)
  -1 != imageArray[xx].indexOf('../') &&
    (imageArray[xx] = imageArray[xx].split('../').join(pre));
for (xx = 0; xx < imageArray2.length; xx++)
  -1 != imageArray2[xx].indexOf('../') &&
    (imageArray2[xx] = imageArray2[xx].split('../').join(pre));
function loadFastSound() {
  ((fastOrSlow = 'fast'),
    clearTimeout(wordTimer),
    $('#mainSound').trigger('pause'));
  var e = fastSounds[currentWordNum];
  (-1 != e.indexOf('../') && (e = e.split('../').join(pre)),
    $('#mainSound').attr('src', e),
    document.getElementById('mainSound').load(),
    document.getElementById('mainSound').addEventListener('canplay', playSound),
    (soundPlaying = !0));
}
function loadSlowSound() {
  ((fastOrSlow = 'slow'),
    clearTimeout(wordTimer),
    $('#mainSound').trigger('pause'));
  var e = slowSounds[currentWordNum];
  (-1 != e.indexOf('../') && (e = e.split('../').join(pre)),
    $('#mainSound').attr('src', e),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playSound));
}
function playSound() {
  ($('.timerMeter > .timerSpan').stop(),
    $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() }),
    setTimeout(function () {
      document
        .getElementById('mainSound')
        .removeEventListener('canplay', playSound);
      try {
        document
          .getElementById('mainSound')
          .play()
          .then(function () {})
          .catch(function (e) {
            console.error('Playback failed because: ', e);
          });
      } catch (e) {
        console.error('Playback failed because: ', e);
      }
    }, 800),
    (soundPlaying = !0));
}
function playMusic() {
  (document
    .getElementById('mainMusic')
    .removeEventListener('canplay', playMusic),
    (document.getElementById('mainMusic').volume =
      0.4 * document.getElementById('mainSound').volume));
  try {
    document
      .getElementById('mainMusic')
      .play()
      .then(function () {})
      .catch(function (e) {
        console.error('Playback failed because: ', e);
      });
  } catch (e) {
    console.error('Playback failed because: ', e);
  }
}
function swapImages() {
  if (restartedLesson)
    return (
      $('.mainPic2, .mainPic1').css({
        'background-image': 'url(' + imageArray[0] + ')',
      }),
      void (restartedLesson = !1)
    );
  $('.mainPic2').width();
  'picNext' == picControl
    ? ((arrowClicks = 'disable'),
      $('.rightArrow').css({ opacity: '0' }),
      1 == picToggle
        ? ($('.mainPic2').css({
            opacity: '0',
            display: 'block',
            '-webkit-transform': 'translate3d(100%, 0, 0)',
            transform: 'translate3d(100%, 0, 0)',
            'background-image': 'url(' + imageArray[currentWordNum] + ')',
          }),
          $('.mainPic2').transition(
            {
              '-webkit-transform': 'translate3d(0%, 0, 0)',
              transform: 'translate3d(0%, 0, 0)',
              opacity: '1',
            },
            800,
            'easeOutExpo',
            function () {
              ((arrowClicks = 'enable'),
                $('.rightArrow').css({ opacity: '1' }),
                (picToggle = 2),
                $('.mainPic1').css({ 'z-index': '5', display: 'none' }),
                $('.mainPic2').css({ 'z-index': '4' }));
            },
          ))
        : ($('.mainPic1').css({
            opacity: '0',
            display: 'block',
            '-webkit-transform': 'translate3d(100%, 0, 0)',
            transform: 'translate3d(100%, 0, 0)',
            'background-image': 'url(' + imageArray[currentWordNum] + ')',
          }),
          $('.mainPic1').transition(
            {
              '-webkit-transform': 'translate3d(0%, 0, 0)',
              transform: 'translate3d(0%, 0, 0)',
              opacity: '1',
            },
            800,
            'easeOutExpo',
            function () {
              ((arrowClicks = 'enable'),
                $('.rightArrow').css({ opacity: '1' }),
                (picToggle = 1),
                $('.mainPic2').css({ 'z-index': '5', display: 'none' }),
                $('.mainPic1').css({ 'z-index': '4' }));
            },
          )))
    : 'picPrev' == picControl
      ? ((arrowClicks = 'disable'),
        $('.leftArrow').css({ opacity: '0' }),
        1 == picToggle
          ? ($('.mainPic2').css({
              opacity: '0',
              display: 'block',
              '-webkit-transform': 'translate3d(-100%, 0, 0)',
              transform: 'translate3d(-100%, 0, 0)px',
              'background-image': 'url(' + imageArray[currentWordNum] + ')',
            }),
            $('.mainPic2').transition(
              {
                '-webkit-transform': 'translate3d(0%, 0, 0)',
                transform: 'translate3d(0%, 0, 0)',
                opacity: '1',
              },
              800,
              'easeOutExpo',
              function () {
                ((arrowClicks = 'enable'),
                  $('.leftArrow').css({ opacity: '1' }),
                  (picToggle = 2),
                  $('.mainPic1').css({ 'z-index': '5', display: 'none' }),
                  $('.mainPic2').css({ 'z-index': '4' }));
              },
            ))
          : ($('.mainPic1').css({
              opacity: '0',
              display: 'block',
              '-webkit-transform': 'translate3d(-100%, 0, 0)',
              transform: 'translate3d(-100%, 0, 0)px',
              'background-image': 'url(' + imageArray[currentWordNum] + ')',
            }),
            $('.mainPic1').transition(
              {
                '-webkit-transform': 'translate3d(0%, 0, 0)',
                transform: 'translate3d(0%, 0, 0)',
                opacity: '1',
              },
              800,
              'easeOutExpo',
              function () {
                ((arrowClicks = 'enable'),
                  $('.leftArrow').css({ opacity: '1' }),
                  (picToggle = 1),
                  $('.mainPic2').css({ 'z-index': '5', display: 'none' }),
                  $('.mainPic1').css({ 'z-index': '4' }));
              },
            )))
      : 0 == $('#button' + currentWordNum).hasClass('buttonOn') &&
        (1 == picToggle
          ? ((arrowClicks = 'disable'),
            $('.mainPic2').css({
              'background-image': 'url(' + imageArray[currentWordNum] + ')',
            }),
            $('.mainPic2').fadeIn(500, function () {
              ((arrowClicks = 'enable'),
                (picToggle = 2),
                $('.mainPic1').css({ 'z-index': '5', display: 'none' }),
                $('.mainPic2').css({ 'z-index': '4' }));
            }))
          : ((arrowClicks = 'disable'),
            $('.mainPic1').css({
              'background-image': 'url(' + imageArray[currentWordNum] + ')',
            }),
            $('.mainPic1').fadeIn(500, function () {
              ((arrowClicks = 'enable'),
                (picToggle = 1),
                $('.mainPic2').css({ 'z-index': '5', display: 'none' }),
                $('.mainPic1').css({ 'z-index': '4' }));
            })));
}
function nextImage() {
  'disable' != arrowClicks &&
    (currentWordNum != numWords - 1
      ? ((picControl = 'picNext'), currentWordNum++, changeWord())
      : ((soundPlaying = !1),
        $('#pauseBtn').attr('src', '../../common/play.svg'),
        $('#pauseBtn, #verbBanner').hide(),
        $('.wrapper3').css({ background: 'rgba(0,0,0,0)' }),
        $('#starConjWarn').fadeOut(1e3),
        $('#endWrap').fadeIn(1e3, function () {
          $('.ouinoContent').fadeOut(1e3);
        }),
        $('body').hasClass('notch') && $('.menuBtnContainer').fadeOut(),
        $('body').height() >= 700 && $('#learningTip').fadeIn(1e3),
        (currentWordNum = 0),
        $('#mainSound').trigger('pause'),
        $('#mainSound').attr('src', '../../common/endSound' + soundType),
        document.getElementById('mainSound').load(),
        document
          .getElementById('mainSound')
          .addEventListener('canplay', playSound),
        (soundPlaying = !0)));
}
function prevImage() {
  'disable' != arrowClicks &&
    ((picControl = 'picPrev'),
    currentWordNum >= 2 &&
      (currentWordNum % 2 != 0 && currentWordNum--,
      currentWordNum--,
      currentWordNum--,
      changeWord()));
}
function changeWord() {
  var e;
  (localStorage.getItem(storeInfo + 'insight') ||
    (currentWordNum > 2 &&
      0 == $('.insightLabel').length &&
      currentWordNum % 2 != 0 &&
      ($('.shinyPicture').append('<div class="insightLabel"></div>'),
      $('.insight').addClass('fullOpacity'))),
  currentWordNum % 2 == 0
    ? $('.insight, .insightLabel').addClass('disInsight')
    : $('.insight, .insightLabel').removeClass('disInsight'),
  saveLeftOff(forExamples.length - 2),
  loCh || (currentWordNum % 2 != 0 && currentWordNum--, (loCh = !0)),
  (soundRepeated = 0),
  $('#pauseBtn').attr('src', '../../common/pause.svg'),
  'f' == $('#selectPlayback').val().charAt(0))
    ? 'true' == lessonInit
      ? ((fastOrSlow = 'fast'),
        $('.timerMeter > .timerSpan').stop(),
        $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() }),
        $('#mainSound').trigger('pause'),
        -1 != (e = fastSounds[0]).indexOf('../') &&
          (e = e.split('../').join(pre)),
        $('#mainSound').attr('src', e),
        'undefined' != typeof imageBonus
          ? $('#mainSound').attr('src', e)
          : $('#mainSound').attr('src', oPath + 'sounds/sound1' + soundType),
        setTimeout(function () {
          $('#mainSound').trigger('play');
        }, 1e3),
        (soundPlaying = !0),
        toggleMusic(),
        (lessonInit = 'false'))
      : loadFastSound()
    : 'true' == lessonInit
      ? ((fastOrSlow = 'slow'),
        $('.timerMeter > .timerSpan').stop(),
        $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() }),
        $('#mainSound').trigger('pause'),
        -1 != (e = fastSounds[1]).indexOf('../') &&
          (e = e.split('../').join(pre)),
        $('#mainSound').attr('src', e),
        'undefined' != typeof imageBonus
          ? $('#mainSound').attr('src', e)
          : $('#mainSound').attr('src', oPath + 'sounds/sound2' + soundType),
        setTimeout(function () {
          $('#mainSound').trigger('play');
        }, 1e3),
        (soundPlaying = !0),
        toggleMusic(),
        (lessonInit = 'false'))
      : loadSlowSound();
  if (
    (currentWordNum <= 1
      ? ($('.leftArrow').hide(), $('.rightArrow').show())
      : (currentWordNum >= numWords - 2 &&
            !$('.ouinoContent').hasClass('portrait')) ||
          (currentWordNum >= numWords - 1 &&
            $('.ouinoContent').hasClass('portrait'))
        ? ($('.leftArrow').show(), $('.rightArrow').hide())
        : ($('.leftArrow').show(), $('.rightArrow').show()),
    currentWordNum % 2 == 0)
  ) {
    $('.ouinoContent').hasClass('portrait')
      ? ($('.wordSentenceB').removeClass('disa'),
        $('.wordSentence').addClass('disa'))
      : ($('.wordSentenceIn').css({ opacity: '0.3' }),
        $('.wordSentence, .wordSentenceB').removeClass('disa'));
    var t = conjNum[currentWordNum];
    (0 == t && (t = 1),
      2 == t || 3 == t ? $('#verbQuestion').show() : $('#verbQuestion').hide(),
      'undefined' != typeof expressVerb &&
        (0 == currentWordNum || 1 == currentWordNum
          ? (t = 0)
          : 2 == currentWordNum || 3 == currentWordNum
            ? (t = 1)
            : 4 == currentWordNum || 5 == currentWordNum
              ? (t = 2)
              : 6 == currentWordNum || 7 == currentWordNum
                ? (t = 3)
                : 8 == currentWordNum || 9 == currentWordNum
                  ? (t = 4)
                  : (10 != currentWordNum && 11 != currentWordNum) || (t = 5)));
    var s = 0.5 * currentWordNum + 1;
    ($('#backIn').css({ 'border-radius': '5px' }),
      $('.verbButtons').removeClass('verbButtonOn'),
      $('#verbBtn' + s).addClass('verbButtonOn'),
      $('#btnWrap').scrollTo('#verbBtn' + s, 500, { offset: -50 }),
      $('#menuVerbSec1').html(''),
      $('#menuVerbSec2').html(''),
      $('.conjItems').text(''),
      $('.conjItems').removeClass('hilite'));
    for (var n = 1; n <= window['forConj' + t].length; n++)
      ($('#conjItem' + n).append(window['forConj' + t][n - 1]),
        $('#conjItemB' + n).append(window['engConj' + t][n - 1]));
    var r = forExamples[currentWordNum].split("j'").join('je ').split(' ');
    if (
      ('undefined' != typeof imageBonus &&
        (r = personPos[currentWordNum].split("j'").join('je ').split(' ')),
      (r =
        (r = r[0]) == conjAlt
          ? conjAltNum
          : r == conjAlt2
            ? conjAltNum2
            : r == conjAlt3
              ? conjAltNum3
              : conjID.indexOf(r) + 1),
      'German' == lessonLanguage)
    ) {
      var o = engExamples[currentWordNum].split(' ');
      'they' == (o = o[0]) && (r = 7);
    }
    if (
      ('undefined' != typeof expressVerb &&
        (0 == currentWordNum || 1 == currentWordNum
          ? $('#conjItem1, #conjItemB1').addClass('hilite')
          : (2 != currentWordNum && 3 != currentWordNum) ||
            $('#conjItem2, #conjItemB2').addClass('hilite'),
        'French' == lessonLanguage
          ? 4 == currentWordNum || 5 == currentWordNum
            ? $('#conjItem3, #conjItemB3').addClass('hilite')
            : 6 == currentWordNum || 7 == currentWordNum
              ? $('#conjItem4, #conjItemB4').addClass('hilite')
              : 8 == currentWordNum || 9 == currentWordNum
                ? $('#conjItem5, #conjItemB5').addClass('hilite')
                : currentWordNum >= 10 &&
                  $('#conjItem6, #conjItemB6').addClass('hilite')
          : 'Spanish' == lessonLanguage || 'Portuguese' == lessonLanguage
            ? 4 == currentWordNum || 5 == currentWordNum
              ? $('#conjItem3, #conjItemB3,#conjItem4, #conjItemB4').addClass(
                  'hilite',
                )
              : 6 == currentWordNum || 7 == currentWordNum
                ? $('#conjItem5, #conjItemB5').addClass('hilite')
                : currentWordNum >= 8 &&
                  $(
                    '#conjItem6, #conjItemB6, #conjItem7, #conjItemB7',
                  ).addClass('hilite')
            : 'Italian' == lessonLanguage
              ? 4 == currentWordNum || 5 == currentWordNum
                ? $('#conjItem3, #conjItemB3,#conjItem4, #conjItemB4').addClass(
                    'hilite',
                  )
                : 6 == currentWordNum || 7 == currentWordNum
                  ? $('#conjItem5, #conjItemB5').addClass('hilite')
                  : 8 == currentWordNum || 9 == currentWordNum
                    ? $('#conjItem6, #conjItemB6').addClass('hilite')
                    : currentWordNum >= 10 &&
                      $(
                        '#conjItem7, #conjItemB7, #conjItem8, #conjItemB8',
                      ).addClass('hilite')
              : 'German' == lessonLanguage &&
                (4 == currentWordNum || 5 == currentWordNum
                  ? $('#conjItem3, #conjItemB3').addClass('hilite')
                  : 6 == currentWordNum || 7 == currentWordNum
                    ? $('#conjItem4, #conjItemB4').addClass('hilite')
                    : 8 == currentWordNum || 9 == currentWordNum
                      ? $('#conjItem5, #conjItemB5').addClass('hilite')
                      : currentWordNum >= 10 &&
                        $(
                          '#conjItem6, #conjItemB6,#conjItem7, #conjItemB7',
                        ).addClass('hilite'))),
      -1 != lessonTitle.indexOf('mperative') &&
        ($('.conjItems').removeClass('hilite'),
        'French' == lessonLanguage
          ? (currentWordNum >= 0 &&
              currentWordNum <= 3 &&
              $('#conjItem2, #conjItemB2').addClass('hilite'),
            currentWordNum >= 4 && currentWordNum <= 7
              ? $('#conjItem4, #conjItemB4').addClass('hilite')
              : currentWordNum >= 8 &&
                $('#conjItem5, #conjItemB5').addClass('hilite'))
          : 'Spanish' == lessonLanguage || 'Portuguese' == lessonLanguage
            ? 0 == currentWordNum ||
              1 == currentWordNum ||
              2 == currentWordNum ||
              3 == currentWordNum
              ? $('#conjItem2, #conjItemB2').addClass('hilite')
              : 4 == currentWordNum || 5 == currentWordNum
                ? $('#conjItem3, #conjItemB3').addClass('hilite')
                : 6 == currentWordNum || 7 == currentWordNum
                  ? $('#conjItem4, #conjItemB4').addClass('hilite')
                  : 8 == currentWordNum || 9 == currentWordNum
                    ? $('#conjItem5, #conjItemB5').addClass('hilite')
                    : currentWordNum >= 10 &&
                      $('#conjItem6, #conjItemB6').addClass('hilite')
            : 'Italian' == lessonLanguage
              ? (0 == currentWordNum || 1 == currentWordNum
                  ? $('#conjItem1, #conjItemB1').addClass('hilite')
                  : (2 != currentWordNum && 3 != currentWordNum) ||
                    $('#conjItem2, #conjItemB2').addClass('hilite'),
                currentWordNum >= 4 && currentWordNum <= 7
                  ? $('#conjItem3, #conjItemB3').addClass('hilite')
                  : currentWordNum >= 8 &&
                    $('#conjItem4, #conjItemB4').addClass('hilite'))
              : 'German' == lessonLanguage &&
                (currentWordNum >= 0 &&
                  currentWordNum <= 3 &&
                  $('#conjItem1, #conjItemB1').addClass('hilite'),
                currentWordNum >= 4 && currentWordNum <= 7
                  ? $('#conjItem3, #conjItemB3').addClass('hilite')
                  : 8 == currentWordNum || 9 == currentWordNum
                    ? $('#conjItem2, #conjItemB2').addClass('hilite')
                    : currentWordNum >= 10 &&
                      $('#conjItem4, #conjItemB4').addClass('hilite'))),
      'undefined' != typeof imageBonus && 'German' == lessonLanguage)
    ) {
      var a = engExamples[currentWordNum + 1];
      3 == r &&
        (-1 != a.indexOf('<em>They') || -1 != a.indexOf('<em>they')
          ? (r = 7)
          : (-1 == a.indexOf('<em>You ') && -1 == a.indexOf('<em>you ')) ||
            (r = 6));
    }
    if ('Portuguese' == lessonLanguage)
      -1 == forExamples[currentWordNum].indexOf(' senhor')
        ? ($('#conjItem3').html(
            $('#conjItem3').html().split('o senhor ').join('você '),
          ),
          $('#conjItemB3').html(
            $('#conjItemB3').html().split('(formal)').join('(BR)'),
          ))
        : ((r = 3),
          $('#conjItem3').html(
            $('#conjItem3').html().split('você ').join('o senhor '),
          ),
          $('#conjItemB3').html(
            $('#conjItemB3').html().split('(BR)').join('(formal)'),
          ));
    if (
      (0 != r &&
        ($('#conjItem' + r).addClass('hilite'),
        $('#conjItemB' + r).addClass('hilite')),
      $('#menuVerbSec1').html($('#conjForeign').html()),
      $('#menuVerbSec2').html($('#conjEnglish').html()),
      swapImages(),
      ')' ==
        engExamples[currentWordNum + 1].charAt(
          engExamples[currentWordNum + 1].length - 1,
        ))
    ) {
      var l = engExamples[currentWordNum + 1].replaceLast(
        '(',
        "<span style='color: #707070; font-size: 0.8em;'>(",
      );
      ((l = l.replaceLast(')', ')</span>')), $('.engSentence').html(l));
    } else $('.engSentence').html(engExamples[currentWordNum + 1]);
    $('.engSentenceB').html(engExamples[currentWordNum]);
    var u = forExamples[currentWordNum + 1];
    if ('%' == u.charAt(0)) {
      var c = (u = u.split('%'))[1].split('strong>').join('b>');
      ((u = u[2]),
        'undefined' != typeof imageBonus
          ? ('German' != lessonLanguage
              ? $('#sideNote').html(
                  '<strong>IRREGULAR VERB</strong><br><span>' +
                    c +
                    "</span><img src='../../search/common/arrBlackDown.svg'>",
                )
              : 'German' == lessonLanguage && -1 == c.indexOf('strong')
                ? $('#sideNote').html(
                    '<strong>IMPORTANT NOTE</strong><br><span>' +
                      c +
                      "</span><img src='../../search/common/arrBlackDown.svg'>",
                  )
                : 'German' == lessonLanguage &&
                  -1 != c.indexOf('strong') &&
                  $('#sideNote').html(
                    '<strong>STRONG VERB</strong><br><span>' +
                      c +
                      "</span><img src='../../search/common/arrBlackDown.svg'>",
                  ),
            irregSpan &&
              ($('#sideNote span').show(),
              $('#sideNote img').attr(
                'src',
                '../../search/common/arrBlackUp.svg',
              )))
          : ($('#sideNote').html(
              '<strong>IMPORTANT NOTE</strong><br><span>' +
                c +
                "</span><img src='../../search/common/arrBlackDown.svg'>",
            ),
            irregSpan &&
              ($('#sideNote span').show(),
              $('#sideNote img').attr(
                'src',
                '../../search/common/arrBlackUp.svg',
              ))),
        $('#sideNote').hide(),
        setTimeout(function () {
          $('#sideNote').fadeIn();
        }, 100));
    } else $('#sideNote').hide();
    ($('.forSentence').html(u),
      $('.forSentenceB').html(forExamples[currentWordNum]),
      resizeText());
  } else
    $('.ouinoContent').hasClass('portrait')
      ? ($('.wordSentenceB').addClass('disa'),
        $('.wordSentence').removeClass('disa'))
      : ($('.wordSentenceIn').animate({ opacity: '1' }),
        $('.wordSentence, .wordSentenceB').removeClass('disa'));
  if (cardRaw.length > 0) {
    var d = currentWordNum;
    d % 2 == 0 && d++;
    var m = lessonNumber + '|' + (parseInt(d) + 1) + cardCate;
    if ('undefined' != typeof imageBonus) {
      var p = imageArray[currentWordNum].split('/'),
        h = p[p.length - 1].split('pic').join('').split('.jpg').join('');
      h = 2 * parseInt(h);
      var g = parseInt(p[p.length - 3]);
      m =
        currentWordNum % 2 == 0 ? g + '|2' + cardCate : g + '|' + h + cardCate;
    }
    var b = !1;
    for (i = 0; i < cardRaw.length; i++) {
      var v = cardRaw[i].split('|');
      (v = v[0] + '|' + v[1] + '|' + v[2]) == m && (b = !0);
    }
    b
      ? ($('#flashCard').hide(), $('#flashCard2').show())
      : ($('#flashCard2').hide(), $('#flashCard').show());
  } else ($('#flashCard2').hide(), $('#flashCard').show());
}
function resizeText() {
  ($('#conjForeign #conjSpan').width() + 10 >= $('#conjForeign').width() &&
    $('#conjForeign').scrollLeft(150),
    $('#conjEnglish #conjSpan2').width() + 10 >= $('#conjEnglish').width() &&
      $('#conjEnglish').scrollLeft(150));
  var e = 29;
  ($('body').hasClass('notch') && (e = 25),
    0 == conjNum[currentWordNum] && screenRatio >= 1
      ? ($('#conjForeign, #conjEnglish, #conjOpen').hide(),
        viewportHeight >= 600
          ? $('.wordSentenceB').css({ top: '34%' })
          : $('.wordSentenceB').css({ top: '29%' }))
      : ($('#conjForeign, #conjEnglish, #conjOpen').show(),
        screenRatio < 1
          ? $('.wordSentenceB').css({ top: '0' })
          : viewportHeight >= 600
            ? $('.wordSentenceB').css({ top: '61.5%' })
            : $('.wordSentenceB').css({ top: '29%' })),
    $('.forSentenceB').css({ fontSize: e + 'px' }),
    $('.engSentenceB').hasClass('engSentenceOnly')
      ? $('.engSentenceB').css({ fontSize: e + 'px' })
      : $('.engSentenceB').css({ fontSize: '21px' }));
  for (
    var t = $('.textWrapB').width(),
      s = 0.92 * $('.conjContainer').width(),
      n = $('.textWrap2B').width(),
      i = e;
    t > s;
    i--
  ) {
    t = $('.textWrapB').width();
    var r = i;
    $('.forSentenceB').css({ fontSize: r + 'px' });
  }
  if ($('.engSentenceB').hasClass('engSentenceOnly'))
    for (var o = e; n > s; o--) {
      n = $('.textWrap2B').width();
      var a = o;
      $('.engSentenceB').css({ fontSize: a + 'px' });
    }
  else
    for (o = 21; n > s; o--) {
      n = $('.textWrap2B').width();
      a = o;
      $('.engSentenceB').css({ fontSize: a + 'px' });
    }
  ($('.forSentence').css({ fontSize: e + 'px' }),
    $('.engSentence').hasClass('engSentenceOnly')
      ? $('.engSentence').css({ fontSize: e + 'px' })
      : $('.engSentence').css({ fontSize: '21px' }),
    $('.forSentence, .engSentence, .disSentence').css({
      'max-width': '3000px',
      'white-space': 'nowrap',
      'line-height': 'normal',
      margin: '0',
    }),
    $('.forSentence').css({ 'margin-top': '-10px' }));
  for (
    t = $('.textWrap').width(),
      s = 0.91 * $('.wordSentence').width(),
      n = $('.textWrap2').width(),
      i = e;
    t > s;
    i--
  ) {
    if (((t = $('.textWrap').width()), (r = i) < 25)) {
      ((r = 24),
        $('.forSentence').css({
          'font-size': r + 'px',
          'max-width': s - 20,
          'white-space': 'normal',
          'line-height': r + 1 + 'px',
          margin: '0 0 6px 0',
        }));
      break;
    }
    $('.forSentence').css({ fontSize: r + 'px' });
  }
  if ($('.engSentence').hasClass('engSentenceOnly'))
    for (o = e; n > s; o--) {
      if (((n = $('.textWrap2').width()), (a = o) < 20)) {
        ((a = 23),
          $('.engSentence').css({
            'font-size': a + 'px',
            'max-width': s - 20,
            'white-space': 'normal',
            'line-height': a + 1 + 'px',
          }));
        break;
      }
      $('.engSentence').css({ fontSize: a + 'px' });
    }
  else
    for (o = 21; n > s; o--) {
      if (((n = $('.textWrap2').width()), (a = o) < 18)) {
        ((a = 20),
          $('.engSentence').css({
            'font-size': a + 'px',
            'max-width': s - 20,
            'white-space': 'normal',
            'line-height': a + 1 + 'px',
          }));
        break;
      }
      $('.engSentence').css({ fontSize: a + 'px' });
    }
}
function closest(e, t) {
  for (var s = Math.max.apply(null, e), n = 0; n < e.length; n++)
    e[n] >= t && e[n] < s && (s = e[n]);
  return s;
}
function resizeQuizText() {
  var e, t, s;
  if (
    ((theFont = 23),
    (e = $('#quizSentenceFor').width()),
    (t = $('#quizContent').width() - 40),
    $('#quizSentenceFor').css({ 'max-width': t }),
    $('#quizSentenceEng').css({ 'max-width': t }),
    2 == currentQuiz)
  ) {
    var n = $('#quizAllItemsB').height();
    n > 480
      ? ($('.puzzTXT, .puzzTXT2').css({
          'line-height': '60px',
          fontSize: '16px',
          'min-width': '30px',
        }),
        $('.puzzTXT2').css({ margin: '0 10px 0 30px' }),
        $('#puzzleTitle').css({ fontSize: '22px' }))
      : n <= 480 && n > 380
        ? ($('.puzzTXT, .puzzTXT2').css({
            'line-height': '50px',
            fontSize: '18px',
            'min-width': '20px',
          }),
          $('.puzzTXT2').css({ margin: '0 8px 0 25px' }),
          $('#puzzleTitle').css({ fontSize: '20px' }))
        : n <= 380 && n > 280
          ? ($('.puzzTXT, .puzzTXT2').css({
              'line-height': '39px',
              fontSize: '16px',
              'min-width': '20px',
            }),
            $('.puzzTXT2').css({ margin: '0 8px 0 25px' }),
            $('#puzzleTitle').css({ fontSize: '18px' }))
          : n <= 280 && n > 220
            ? ($('.puzzTXT, .puzzTXT2').css({
                'line-height': '30px',
                fontSize: '13px',
                'min-width': '15px',
              }),
              $('.puzzTXT2').css({ margin: '0 6px 0 15px' }),
              $('#puzzleTitle').css({ fontSize: '15px' }))
            : n <= 220 &&
              ($('.puzzTXT, .puzzTXT2').css({
                'line-height': '22px',
                fontSize: '12px',
                'min-width': '10px',
              }),
              $('.puzzTXT2').css({ margin: '0 2px 0 10px' }),
              $('#puzzleTitle').css({ fontSize: '14px' }));
  }
  if (3 == currentQuiz) {
    ($('#boardMain').css({ fontSize: '23px' }),
      (e = $('#writtenAnswer').width()),
      (t = $('#writeAnswerField').width() - 30));
    for (var i = 23; e > t && i > 1; i--)
      ((e = $('#writtenAnswer').width()),
        (s = i),
        $('#boardMain').css({ fontSize: s + 'px' }));
  }
}
if (-1 != osType.indexOf('droid')) {
  var meta = document.createElement('meta');
  ((meta.httpEquiv = 'Content-Security-Policy'),
    (meta.content =
      "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'"),
    document.head.appendChild(meta));
}
var sNext,
  brColor = document.createElement('meta');
(brColor.setAttribute('name', 'theme-color'),
  (brColor.content = '#202020'),
  document.getElementsByTagName('head')[0].appendChild(brColor));
var userPress = !1,
  appSuspended = !1;
if ('iOS' == osType || -1 != osType.indexOf('droid')) {
  var phoneG = document.createElement('script');
  (phoneG.setAttribute('src', '../../cordova.js'),
    document.head.appendChild(phoneG));
}
function onDeviceReady() {
  if (
    ('androidSTORE' == osType &&
      document.addEventListener(
        'offline',
        function () {
          null == sessionStorage.OFFLINEALERT &&
            (alert(
              'You are currently OFFLINE, sounds and other assets may not be able to load. Please connect to the internet to use the program. If you are frequently OFFLINE, please uninstall this version and reinstall our full OFFLINE version at OUINO.com/mobile.',
            ),
            (sessionStorage.OFFLINEALERT = 'alerted'));
        },
        !1,
      ),
    ('iOS' != osType && -1 == osType.indexOf('droid')) ||
      (($('html').innerWidth() < 590 || $('html').innerHeight() < 590) &&
        screen.orientation.lock('portrait')),
    ('iOS' != osType && -1 == osType.indexOf('droid')) ||
      ('object' == typeof cordova && window.plugins.insomnia.keepAwake(),
      window.MobileAccessibility &&
        window.MobileAccessibility.usePreferredTextZoom(!1),
      -1 != osType.indexOf('droid') &&
        navigator.app.overrideButton('menubutton', !0),
      document.removeEventListener('backbutton', onBackbutton, !1),
      document.removeEventListener('menubutton', onMenubutton, !1),
      document.removeEventListener('pause', onPause, !1),
      document.removeEventListener('resume', onResume, !1),
      document.addEventListener('backbutton', onBackbutton, !1),
      document.addEventListener('menubutton', onMenubutton, !1),
      document.addEventListener('pause', onPause, !1),
      document.addEventListener('resume', onResume, !1)),
    null == sessionStorage.userEmailSTORE)
  )
    return (
      sessionStorage.clear(),
      $('#loadLogo').show(),
      void setTimeout(function () {
        (sessionStorage.clear(), (window.location = '../../index.html'));
      }, 100)
    );
  ((userEmail = sessionStorage.userEmailSTORE),
    (tuvm58dj = sessionStorage.tuvm58djSTORE),
    (storeInfo = langShort + userEmail),
    'undefined' != typeof imageBonus && $('#verbQuestion').addClass('noFlash'),
    localStorage.getItem(storeInfo + 'cardsSTORE') &&
      (cardRaw = (cardRaw = localStorage.getItem(
        storeInfo + 'cardsSTORE',
      )).split(':')),
    $('body').append(
      '<img id="flashNotice" src="../../flash/images/notice3.svg"/><img id="flashNotice2" src="../../flash/images/notice4.svg"/>',
    ),
    $('.engToggle').on('click', function () {
      'both' == $('#selectText').val()
        ? ($('#selectText').val('foreign'), toggleText2())
        : ($('#selectText').val('both'), toggleText2());
    }),
    $('.engRepeat').on('touchend mouseup', function (e) {
      (e.preventDefault(),
        (disableTimer = !0),
        loadQuizSound2(),
        $('.engRepeat').addClass('engDisabled'));
    }),
    'mobile' != currentDevice &&
      ($('.engRepeat').hover(function () {
        ($('.engRepeat').toggleClass('engHover2'),
          $('#arrowLabel').text('REPEAT SOUND'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $('.engToggle').hover(function () {
        ($('.engToggle').toggleClass('engHover'),
          $('#arrowLabel').text('ENGLISH TRANSLATION ON/OFF'),
          $('.instructions').toggleClass('showDiv'));
      })),
    $('.insight').on('click', loadInsight),
    'mobile' != currentDevice &&
      $('.insight').hover(function () {
        ($('.insight').toggleClass('insightHover'),
          $('#arrowLabel').text('SHOW SENTENCE EXPLANATION'),
          $('.instructions').toggleClass('showDiv'));
      }),
    $('.addQuizFlash').on('touchend mouseup', function (e) {
      if ((e.preventDefault(), 2 != currentQuiz && 3 != currentQuiz)) {
        for (i = 0; i < errors.length; i++) {
          var t = parseInt(errors[i]);
          t % 2 != 0 && t++;
          var s,
            n = lessonNumber + '|' + parseInt(t) + cardCate;
          if ('undefined' != typeof imageBonus) {
            var r = (o = imageArray[parseInt(errors[i]) - 1].split('/'))[
              o.length - 1
            ]
              .split('pic')
              .join('')
              .split('.jpg')
              .join('');
            ((r = 2 * parseInt(r)),
              (n = parseInt(o[o.length - 3]) + '|' + r + cardCate));
          }
          if (0 == lessonNumber) {
            var o;
            r = (o = imageArray[parseInt(errors[i]) - 2].split('/'))[
              o.length - 1
            ]
              .split('pic')
              .join('')
              .split('.jpg')
              .join('');
            ((r = 2 * parseInt(r)),
              (n = parseInt(o[o.length - 3]) + '|' + r + cardCate));
          }
          var a = !1;
          for (s = 0; s < cardRaw.length; s++) {
            var l = cardRaw[s].split('|');
            (l = l[0] + '|' + l[1] + '|' + l[2]) == n && (a = !0);
          }
          a || cardRaw.push(n);
        }
        ($('#flashNotice').show(),
          setTimeout(function () {
            ($('#flashNotice').fadeOut(), $('#flashCard2').fadeIn());
          }, 700),
          $('.addQuizFlash').addClass('disableFlash'),
          localStorage.setItem(storeInfo + 'cardsSTORE', cardRaw.join(':')),
          (infoToUpdate = cardRaw.join(':')),
          (fieldToUpdate = 'cards'),
          updateDatabase());
      }
    }),
    $('#flashCard').on('click', function () {
      ('mobile' != currentDevice && playSprite('shimmer'),
        $('#flashNotice').show(),
        setTimeout(function () {
          $('#flashNotice').fadeOut();
        }, 700),
        $('#flashCard').hide(),
        $('#flashCard2').fadeIn(1e3));
      var e = currentWordNum;
      e % 2 == 0 && e++;
      var t = lessonNumber + '|' + (parseInt(e) + 1) + cardCate;
      if ('undefined' != typeof imageBonus) {
        var s = imageArray[currentWordNum].split('/'),
          n = s[s.length - 1].split('pic').join('').split('.jpg').join('');
        n = 2 * parseInt(n);
        var i = parseInt(s[s.length - 3]);
        t =
          currentWordNum % 2 == 0
            ? i + '|2' + cardCate
            : i + '|' + n + cardCate;
      }
      (cardRaw.push(t),
        localStorage.setItem(storeInfo + 'cardsSTORE', cardRaw.join(':')),
        (infoToUpdate = cardRaw.join(':')),
        (fieldToUpdate = 'cards'),
        updateDatabase());
    }),
    $('#flashCard2').on('click', function () {
      ('mobile' != currentDevice && playSprite('quizBad'),
        $('#flashNotice2').show(),
        setTimeout(function () {
          $('#flashNotice2').fadeOut();
        }, 700),
        $('#flashCard2').hide(),
        $('#flashCard').fadeIn(1e3));
      var e = currentWordNum;
      e % 2 == 0 && e++;
      var t = lessonNumber + '|' + (parseInt(e) + 1) + cardCate;
      if ('undefined' != typeof imageBonus) {
        var s = imageArray[currentWordNum].split('/'),
          n = s[s.length - 1].split('pic').join('').split('.jpg').join('');
        n = 2 * parseInt(n);
        var i = parseInt(s[s.length - 3]);
        t =
          currentWordNum % 2 == 0
            ? i + '|2' + cardCate
            : i + '|' + n + cardCate;
      }
      var r,
        o = [];
      for (r = 0; r < cardRaw.length; r++) {
        var a = cardRaw[r].split('|');
        (a = a[0] + '|' + a[1] + '|' + a[2]) != t && o.push(cardRaw[r]);
      }
      ((cardRaw = o.slice(0)),
        localStorage.setItem(storeInfo + 'cardsSTORE', cardRaw.join(':')),
        (infoToUpdate = cardRaw.join(':')),
        (fieldToUpdate = 'cards'),
        updateDatabase());
    }),
    'mobile' != currentDevice &&
      ($('#flashCard').hover(function () {
        ($('#arrowLabel').text('ADD TO FLASH CARD FOR REVIEW'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $('#flashCard2').hover(function () {
        ($('#arrowLabel').text('REMOVE FROM FLASH CARDS'),
          $('.instructions').toggleClass('showDiv'));
      })),
    $('.wordSentence').on('click', function () {
      cardRaw.length > 0 &&
        ((caNum = parseInt(currentWordNum)) % 2 == 0 && caNum++, togFlash());
    }),
    $('.wordSentenceB').on('click', function () {
      cardRaw.length > 0 &&
        ((caNum = parseInt(currentWordNum)) % 2 != 0 && caNum--, togFlash());
    }),
    $('#sideNote').on('click', function () {
      $('#sideNote span').is(':visible')
        ? ($('#sideNote span').slideUp(),
          $('#sideNote img').attr(
            'src',
            '../../search/common/arrBlackDown.svg',
          ),
          (irregSpan = !1),
          localStorage.setItem(storeInfo + 'irregSTORE', 'OFF'))
        : ($('#sideNote span').slideDown(),
          $('#sideNote img').attr('src', '../../search/common/arrBlackUp.svg'),
          (irregSpan = !0),
          localStorage.removeItem(storeInfo + 'irregSTORE'));
    }),
    initiate());
}
function loadQuiz() {
  ($('#backBtn, #menuMain2').removeClass('darker'),
    $('.menuBar').hasClass('noBack') && $('.menuBar').removeClass('noBack'),
    0 == errorMode
      ? ($('.addQuizFlash').removeClass('disableFlash'),
        $('.addQuizFlash').show())
      : ($('.addQuizFlash').addClass('disableFlash'),
        $('.addQuizFlash').hide()),
    $('#dictBtn').hide(),
    localStorage.getItem(storeInfo + 'externalKeyboard') &&
      ($('#keyboardBtn').attr('src', '../../common/keyboard.svg'),
      (externalKeyboard = !0)),
    $('#puzzleBack').hide(),
    playSprite('transition'),
    0 == errorMode
      ? ($('.quizTitle').text('CHOOSE YOUR LEARNING ACTIVITY'),
        $('#quizPreloadStart').html('<span class="wrapBtn">START NOW</span>'),
        $(
          '.smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
        ).css({ opacity: '1' }),
        $('.gradientColor3').css({
          background:
            'url(../../common/black.svg), linear-gradient(' +
            btnColor[4] +
            ',' +
            btnColor[5] +
            ')',
        }))
      : ($('.quizTitle').text('CHOOSE THE ACTIVITY TO REVISE ERRORS'),
        $('#quizPreloadStart').html(
          '<span class="wrapBtn">REVISE ERRORS</span>',
        ),
        $(
          '.smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
        ).css({ opacity: '0' }),
        $('.gradientColor3').css({
          background:
            'url(../../common/black.svg), linear-gradient(#45484d,black)',
        })),
    $('#slideCont').hide(),
    'individual' != presType &&
      ($('#quizBtn3').hide(), $('#quizBtn4').attr('colspan', 2)),
    $('#verbBanner').css({ display: 'none' }),
    $('#pronounWarn, #starConjWarn').hide(),
    (pastQuizScoreAll =
      null != quizScores ? quizScores[lessonNumber - 1] : '0|0|0|0'),
    0 === lessonNumber &&
      ((pastQuizScoreAll = '0|0|0|0'),
      $(
        '#quizGoBack, .smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
      ).css({ opacity: '0' })),
    '0' == pastQuizScoreAll && (pastQuizScoreAll = '0|0|0|0'),
    (pastQuizScoreAll = pastQuizScoreAll.split('|')));
  for (var e = 1; e <= 4; e++)
    (pastQuizScore = pastQuizScoreAll[e - 1]) >= 70 && pastQuizScore < 80
      ? ($('#sMedal' + e).css({
          'background-image': 'url(../../common/medalIcon1.svg)',
        }),
        $('#sMedal' + e).attr('name', 'Won: Bronze Medal'))
      : pastQuizScore >= 80 && pastQuizScore < 90
        ? ($('#sMedal' + e).css({
            'background-image': 'url(../../common/medalIcon2.svg)',
          }),
          $('#sMedal' + e).attr('name', 'Won: Silver Medal'))
        : pastQuizScore >= 90 && pastQuizScore < 100
          ? ($('#sMedal' + e).css({
              'background-image': 'url(../../common/medalIcon3.svg)',
            }),
            $('#sMedal' + e).attr('name', 'Won: Gold Medal'))
          : 100 == pastQuizScore
            ? ($('#sMedal' + e).css({
                'background-image': 'url(../../common/medalIcon4.svg)',
              }),
              $('#sMedal' + e).attr('name', 'Won: Fluency Award'))
            : pastQuizScore <= 70 &&
              ($('#sMedal' + e).css({
                'background-image': 'url(../../common/medalIcon0.svg)',
              }),
              $('#sMedal' + e).attr('name', 'No prize won yet.'));
  ($('#quizTimerPointer').is(':visible') &&
    ($('#quizTimerPointer').stop(!0, !0), clearTimeout(timerDelay)),
    $('#goodAnswer').transition({ opacity: '0' }),
    $('#quizBanner').hide(),
    $('#newHighScore').transition({ y: '100%' }),
    $('#newScoreUpdate').transition({ x: '-100%' }),
    1 == soundLessonEvent &&
      (document
        .getElementById('mainSound')
        .removeEventListener('ended', setTimer),
      (soundLessonEvent = !1)),
    1 != soundQuizEvent &&
      (document
        .getElementById('mainSound')
        .addEventListener('ended', afterSoundAction),
      (soundQuizEvent = !0)),
    (currQuizNum = 1),
    (currentPts = 0),
    (currentErrors = 0),
    $('#currentScore').text(currentPts),
    $('#currentErrors').text(currentErrors),
    $('#questionNum').text(1),
    $(
      '.menuTitleContainer, #pauseBtn, #optionBtn, #quizPreload, #quizGoBack, #quizStart, #quizItself, #quizTimer, #quizTimer2, #quizTimerPointer, #quizDone',
    ).hide(),
    $('#quizMenu').show(),
    (currentMusic = quizMusicFile),
    toggleMusic(),
    $('#starWrap').is(':visible') && $('#starWrap').hide(),
    $('#endWrap').is(':visible') && $('#endWrap, #learningTip').hide(),
    $('#optionWrap').is(':visible') && $('#optionWrap').hide(),
    $('#menuWrap').is(':visible') && $('#menuWrap').hide(),
    $('.wrapper3').css({ background: 'rgba(0,0,0,0.7)' }),
    $('.ouinoContent').is(':visible') && $('.ouinoContent').hide(),
    $('#startCover').is(':visible') && $('#startCover').hide(),
    clearTimeout(wordTimer),
    $('#mainSound').trigger('pause'),
    resizeQuiz(),
    $('.timerMeter > .timerSpan').hide(),
    $('#quizContent').is(':hidden') && $('#quizContent').show(),
    loadButtonsQuiz(),
    0 === lessonNumber && loadQuiz4(),
    1 == errorMode &&
      0 !== lessonNumber &&
      (1 === currentQuiz
        ? loadQuiz1()
        : 2 === currentQuiz
          ? loadQuiz2()
          : 3 === currentQuiz
            ? loadQuiz3()
            : 4 === currentQuiz && loadQuiz4()));
}
function loadQuiz1() {
  if (
    ($('#keyboardBtn').hide(),
    (quizCombinedArray = shuffle(quizMapArray)),
    'undefined' != typeof expressVerb)
  ) {
    quizCombinedArray = shuffle([1, 3, 5, 7, 9, 11]);
  }
  (6 == (engExamplesQuiz = engExamples.join('%%%').split('%%%')).length &&
    (engExamplesQuiz.push('THEY WILL WANT'),
    engExamplesQuiz.push(''),
    engExamplesQuiz.push('HE WILL WANT'),
    engExamplesQuiz.push(''),
    engExamplesQuiz.push('SHE WILL WANT'),
    engExamplesQuiz.push('')),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong2.svg)',
    }),
    $('#quizTimerImage').attr('src', '../../common/timerPointer.svg'),
    (disableTimer = !0),
    $('#quizAllItems').show(),
    $(
      '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #quizAllItemsB, #quizMultiImg, #noteBook, #hintTable, #quizAllItemsD, #textureIn',
    ).hide(),
    $('#quizMenu').hide(),
    (timerTime = 6e3),
    (timerWait = 100),
    (quizNumQues = quizCombinedArray.length),
    1 == errorMode && (quizNumQues = errors.length),
    $('#numberOfQues').text(quizNumQues),
    $('.quizPreloadTitle').text(quizTitle1),
    $('#quizPreloadDescription').text(quizDescription1),
    $('#quizStartImg, #quizPreloadMedal').css({
      'background-image': 'url(../../common/quiz' + currentSecShort + '1.svg)',
    }),
    (currentQuiz = 1),
    preLoadQuiz());
}
function loadQuiz2() {
  ($('#keyboardBtn').hide(),
    (quizCombinedArray = shuffle(quizMapArray)),
    $('#topPuzzle').html(puzzleMaker),
    (puzzleArray = shuffle(
      (puzzleArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ]),
    )),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong2.svg)',
    }),
    'undefined' == typeof expressVerb &&
      'undefined' == typeof imageBonus &&
      (conjNum.length < 15
        ? $('#quizMultiImg, #topPuzzle').css({
            'background-image': 'url(' + oPath + 'images/pic7.jpg)',
          })
        : $('#quizMultiImg, #topPuzzle').css({
            'background-image': 'url(' + oPath + 'images/picB.jpg)',
          })),
    $(
      '#quizSentenceContainer, #quizAllItemsC, #quizWriteImg, #quizAllItems, #noteBook, #hintTable, #quizAllItemsD, #textureIn',
    ).hide(),
    $('#quizAllItemsB, #quizMultiImg').show(),
    $('#quizMenu').hide(),
    (timerTime = 7e3),
    (quizNumQues =
      conjNum.length > 15 || conjNum[0] == conjNum[9]
        ? 6
        : 0 == conjNum[0]
          ? 30
          : 12),
    6 == engExamples.length && (quizNumQues = 6),
    'French' == lessonLanguage && 10 == lessonNumber && (quizNumQues = 6),
    'undefined' != typeof expressVerb && (quizNumQues = 36),
    'undefined' != typeof imageBonus && (quizNumQues = 36),
    1 == errorMode && (quizNumQues = errors.length),
    $('#numberOfQues').text(quizNumQues),
    $('.quizPreloadTitle').html(quizTitle2),
    $('#quizPreloadDescription').text(quizDescription2),
    $('#quizStartImg, #quizPreloadMedal').css({
      'background-image': 'url(../../common/quiz' + currentSecShort + '2.svg)',
    }),
    (currentQuiz = 2),
    preLoadQuiz());
}
function loadQuiz3() {
  ($('#keyboardBtn').hide(),
    (quizCombinedArray = shuffle(quizMapArray)),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong2.svg)',
    }),
    $(
      '#quizSentenceContainer, #quizAllItemsC, #quizWriteImg, #quizAllItems, #noteBook, #hintTable, #quizAllItemsB, #quizMultiImg',
    ).hide(),
    $('#quizAllItemsD, #textureIn').show(),
    $('#quizMenu').hide(),
    (timerTime = 7e3),
    (quizNumQues = 30),
    1 == errorMode && (quizNumQues = errors.length),
    $('#numberOfQues').text(quizNumQues),
    $('.quizPreloadTitle').text(quizTitle3),
    $('#quizPreloadDescription').text(quizDescription3),
    $('#quizStartImg, #quizPreloadMedal').css({
      'background-image': 'url(../../common/quiz' + currentSecShort + '3.svg)',
    }),
    (currentQuiz = 3),
    preLoadQuiz());
}
function loadQuiz4() {
  ($('#keyboardBtn').show(),
  (quizCombinedArray = shuffle(quizMapArray)),
  'individual' != presType &&
    (quizCombinedArray = quizCombinedArray.concat(quizMoreArray)),
  'undefined' != typeof expressVerb) &&
    (quizCombinedArray = shuffle(
      (t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    ));
  if ('undefined' != typeof imageBonus) {
    var e,
      t = [];
    for (e = 2; e <= forExamples.length; e++) (t.push(e), e++);
    quizCombinedArray = shuffle(t);
  }
  ($('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong3.svg)',
  }),
    findAccents(),
    $(
      '#quizAllItemsB, #quizMultiImg, #quizAllItems, #quizAllItemsD, #textureIn',
    ).hide(),
    $(
      '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #noteBook, #hintTable',
    ).show(),
    (disableTimer = !0),
    $('#quizMenu').hide(),
    (timerTime = 2e4),
    'Spanish' == lessonLanguage &&
      57 == lessonNumber &&
      (quizCombinedArray = [4, 6, 8, 10, 12]),
    'Portuguese' == lessonLanguage &&
      57 == lessonNumber &&
      (quizCombinedArray = [4, 6, 8, 10, 12]),
    (quizNumQues = quizCombinedArray.length),
    1 == errorMode && (quizNumQues = errors.length),
    $('#numberOfQues').text(quizNumQues),
    $('.quizPreloadTitle').text(quizTitle4),
    $('#quizPreloadDescription').text(quizDescription4),
    $('#quizStartImg, #quizPreloadMedal').css({
      'background-image': 'url(../../common/quiz' + currentSecShort + '4.svg)',
    }),
    (currentQuiz = 4),
    preLoadQuiz());
}
function preLoadQuiz() {
  (0 != (pastQuizScore = pastQuizScoreAll[currentQuiz - 1])
    ? ($('#bestScore, #bestScore2').text(pastQuizScore + '%'),
      pastQuizScore >= 70 && pastQuizScore < 80
        ? ($('#bestMedal, #bestMedal2').text('Bronze'),
          $('#bannerMedal').attr('src', '../../common/medalIcon1.svg'))
        : pastQuizScore >= 80 && pastQuizScore < 90
          ? ($('#bestMedal, #bestMedal2').text('Silver'),
            $('#bannerMedal').attr('src', '../../common/medalIcon2.svg'))
          : pastQuizScore >= 90 && pastQuizScore < 100
            ? ($('#bestMedal, #bestMedal2').text('Gold'),
              $('#bannerMedal').attr('src', '../../common/medalIcon3.svg'))
            : 100 == pastQuizScore
              ? ($('#bestMedal, #bestMedal2').text('Fluent'),
                $('#bannerMedal').attr('src', '../../common/medalIcon4.svg'))
              : pastQuizScore > 0 &&
                pastQuizScore <= 70 &&
                ($('#bestMedal, #bestMedal2').text('None'),
                $('#bannerMedal').attr('src', '../../common/medalIcon0.svg')))
    : ($('#bestScore, #bestScore2, #bestMedal, #bestMedal2').text('None'),
      $('#bannerMedal').attr('src', '../../common/medalIcon0.svg')),
    0 === lessonNumber
      ? $('#quizPreload, #quizGoBack').fadeIn(1e3)
      : $('#quizPreload, #quizGoBack').show(),
    $('#quizBanner').show());
}
function startQuiz() {
  $('#backBtn, #menuMain2').addClass('darker');
  var e = window.location.href;
  if (
    ((e = e.split(currentSecShort + '/')),
    (e = currentSecShort + '/' + e[1]),
    localStorage.setItem(storeInfo + 'saved', e),
    clearTimeout(saveTime),
    (saveTime = setTimeout(savePosition, 3e3)),
    localStorage.setItem(storeInfo + 'savedMenu', sessionStorage.menuType),
    localStorage.getItem(storeInfo + 'goalsSTORE'))
  ) {
    var t = new Date();
    t = t.getDate() + t.format('mmmm') + t.getFullYear();
    var s = [];
    if (
      -1 ===
      (s = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')).indexOf(t)
    ) {
      for (s.push(t), i = 1; i <= 5; i++) s.push('0');
      (s.push('1'),
        localStorage.setItem(storeInfo + 'goalsSTORE', s.join(':')),
        (infoToUpdate = s.join(':')),
        (fieldToUpdate = 'goals'),
        updateDatabase());
    }
  }
  if (
    localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    null == localStorage.getItem(storeInfo + 'goalsSTORE')
  ) {
    var n = new Date(),
      r = [
        (n = n.getDate() + n.format('mmmm') + n.getFullYear()),
        '0',
        '0',
        '0',
        '0',
        '0',
        '1',
      ];
    (localStorage.setItem(storeInfo + 'goalsSTORE', r.join(':')),
      (infoToUpdate = r.join(':')),
      (fieldToUpdate = 'goals'),
      updateDatabase());
  }
  (resizeQuiz(),
    $('#quizPreload, #quizGoBack').hide(),
    $('#quizStart').show(),
    $('#quizStart').css({ opacity: '1' }),
    playSprite('blank'),
    setTimeout(function () {
      $('#quizStart').animate({ opacity: '0' }, 300, function () {
        ($('#quizStart').hide(),
          $('#quizItself').show(),
          4 != currentQuiz && $('#quizTimerPointer').show(),
          (currentQuiz <= 2 || 3 == currentQuiz) && $('#quizTimer').show(),
          resizeButtonQuizText(),
          resizeQuizText(),
          firstLoad());
      });
    }, 1e3));
}
function firstLoad() {
  ($('#quizTimer, #quizTimer2, #quizTimerPointer, #quizItself').css({
    opacity: '0',
  }),
    loadQuestion(),
    playSprite('blank'),
    setTimeout(function () {
      ($('#quizTimer, #quizTimer2, #quizItself').transition({ opacity: '1' }),
        1 == currentQuiz &&
          ((disableTimer = !1),
          setTimeout(function () {
            loadQuizSound();
          }, 1e3)));
    }, 500));
}
function loadQuestion() {
  ((madeError = !1),
    2 != currentQuiz &&
      setTimeout(function () {
        $('#quizTimerPointer').css({ opacity: '0' });
      }, 200),
    $('#questionNum').text(currQuizNum),
    (quizQuesNum = quizCombinedArray[currQuizNum - 1]),
    1 == errorMode && (quizQuesNum = errors[currQuizNum - 1]),
    (quizNumArray = (quizNumArray = [
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
    ]).slice(0, 0.5 * numWords)),
    6 == engExamples.length && (quizNumArray = [2, 4, 6, 8, 10, 12]),
    'undefined' != typeof expressVerb &&
      1 == currentQuiz &&
      (quizNumArray = [1, 3, 5, 7, 9, 11]),
    0 === lessonNumber &&
      (quizNumArray = (quizNumArray = [
        2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
        40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74,
        76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
      ]).slice(0, 0.5 * numWords)),
    'keyPres' == presType && 'French' == lessonLanguage && 10 != lessonNumber
      ? (quizNumArray = [2, 12, 14, 22, 24, 26])
      : ('keyPres' == presType && 'Spanish' == lessonLanguage) ||
          ('keyPres' == presType && 'Portuguese' == lessonLanguage)
        ? (quizNumArray = [2, 12, 14, 16, 26, 28])
        : 'keyPres' == presType && 'Italian' == lessonLanguage
          ? (quizNumArray = [2, 12, 14, 16, 24, 26])
          : 'keyPres' == presType &&
            'German' == lessonLanguage &&
            (quizNumArray = [2, 12, 14, 22, 24, 26]));
  var e = quizNumArray.indexOf(quizQuesNum);
  (~e && quizNumArray.splice(e, 1),
    setTimeout(function () {
      (resizeButtonQuizText(), resizeQuizText());
    }, 1),
    1 == currentQuiz
      ? quizActions1()
      : 2 == currentQuiz
        ? quizActions2()
        : 3 == currentQuiz
          ? quizActions3()
          : 4 == currentQuiz && quizActions4());
}
function quizActions1() {
  (setTimeout(function () {
    ((maxScore = 65),
      (quizPtsCount = 65),
      $('#goodAnswerIn').css({
        'background-image': 'url(../../common/score4.svg)',
      }),
      $('#quizScoreImg').attr('src', '../../common/score4.svg'));
  }, 2e3),
    $('#englishWrite2').is(':visible') && $('#englishWrite2').hide());
  var e = shuffle(quizNumArray);
  ((e = e.slice(0, 5)).push(quizQuesNum),
    (e = shuffle(e)),
    $('#quizItem1').val(e[0]),
    $('#quizItem2').val(e[1]),
    $('#quizItem3').val(e[2]),
    $('#quizItem4').val(e[3]),
    $('#quizItem5').val(e[4]),
    $('#quizItem6').val(e[5]));
  var t = forExamples.join('%%%').split('%%%');
  (6 == t.length && 'Spanish' == lessonLanguage
    ? (t.push('(ELLOS) QUERRÁN'),
      t.push(''),
      t.push('(ÉL) QUERRÁ'),
      t.push(''),
      t.push('(ELLA) QUERRÁ'),
      t.push(''))
    : 6 == t.length &&
      (t.push(''), t.push(''), t.push(''), t.push(''), t.push(''), t.push('')),
    'undefined' == typeof expressVerb
      ? ($('#quizItem1').css({
          'background-image': 'url(' + imageArray[e[0] - 2] + ')',
        }),
        $('#quizItem2').css({
          'background-image': 'url(' + imageArray[e[1] - 2] + ')',
        }),
        $('#quizItem3').css({
          'background-image': 'url(' + imageArray[e[2] - 2] + ')',
        }),
        $('#quizItem4').css({
          'background-image': 'url(' + imageArray[e[3] - 2] + ')',
        }),
        $('#quizItem5').css({
          'background-image': 'url(' + imageArray[e[4] - 2] + ')',
        }),
        $('#quizItem6').css({
          'background-image': 'url(' + imageArray[e[5] - 2] + ')',
        }),
        $('#quizEng1').html(
          t[e[0] - 2] +
            "<br><span style='font-size: 14px; color:grey;'>" +
            engExamplesQuiz[e[0] - 2] +
            '</span>',
        ),
        $('#quizEng2').html(
          t[e[1] - 2] +
            "<br><span style='font-size: 14px; color:grey;'>" +
            engExamplesQuiz[e[1] - 2] +
            '</span>',
        ),
        $('#quizEng3').html(
          t[e[2] - 2] +
            "<br><span style='font-size: 14px; color:grey;'>" +
            engExamplesQuiz[e[2] - 2] +
            '</span>',
        ),
        $('#quizEng4').html(
          t[e[3] - 2] +
            "<br><span style='font-size: 14px; color:grey;'>" +
            engExamplesQuiz[e[3] - 2] +
            '</span>',
        ),
        $('#quizEng5').html(
          t[e[4] - 2] +
            "<br><span style='font-size: 14px; color:grey;'>" +
            engExamplesQuiz[e[4] - 2] +
            '</span>',
        ),
        $('#quizEng6').html(
          t[e[5] - 2] +
            "<br><span style='font-size: 14px; color:grey;'>" +
            engExamplesQuiz[e[5] - 2] +
            '</span>',
        ))
      : ($('#quizEng1').html(engExamplesQuiz[e[0] - 1]),
        $('#quizEng2').html(engExamplesQuiz[e[1] - 1]),
        $('#quizEng3').html(engExamplesQuiz[e[2] - 1]),
        $('#quizEng4').html(engExamplesQuiz[e[3] - 1]),
        $('#quizEng5').html(engExamplesQuiz[e[4] - 1]),
        $('#quizEng6').html(engExamplesQuiz[e[5] - 1]),
        $('#quizItem1').css({
          'background-image': 'url(' + imageArray[e[0] - 1] + ')',
        }),
        $('#quizItem2').css({
          'background-image': 'url(' + imageArray[e[1] - 1] + ')',
        }),
        $('#quizItem3').css({
          'background-image': 'url(' + imageArray[e[2] - 1] + ')',
        }),
        $('#quizItem4').css({
          'background-image': 'url(' + imageArray[e[3] - 1] + ')',
        }),
        $('#quizItem5').css({
          'background-image': 'url(' + imageArray[e[4] - 1] + ')',
        }),
        $('#quizItem6').css({
          'background-image': 'url(' + imageArray[e[5] - 1] + ')',
        })));
}
function quizActions2() {
  if (
    ($('#puzzleBack').is(':visible') || $('#puzzleBack').fadeIn(),
    0 == extraTime)
  ) {
    if (
      7 == currQuizNum ||
      13 == currQuizNum ||
      19 == currQuizNum ||
      25 == currQuizNum ||
      31 == currQuizNum
    )
      return (
        (extraTime = !0),
        setTimeout(function () {
          (quizActions2(),
            $('.timerMeter > .timerSpan').stop(),
            $('.timerMeter > .timerSpan').css({ width: 0 }),
            setTimeout(resizeQuizText, 10));
        }, 2e3),
        $('.timerMeter > .timerSpan').css({ height: '20px' }),
        void $('.timerMeter > .timerSpan').each(function () {
          $(this)
            .width(0)
            .animate({ width: $('.timerMeter').width() }, 2e3);
        })
      );
    extraTime = !1;
  } else extraTime = !1;
  (setTimeout(function () {
    ((maxScore = 65),
      (quizPtsCount = 65),
      $('#goodAnswerIn').css({
        'background-image': 'url(../../common/score4.svg)',
      }),
      $('#quizScoreImg').attr('src', '../../common/score4.svg'));
  }, 1e3),
    'undefined' != typeof imageBonus
      ? 1 == currQuizNum
        ? ((theConj = conjShuffle[0]),
          $('#quizMultiImg').css({
            'background-image': 'url(' + imageArray[2 * theConj - 2] + ')',
          }),
          placePuzzle())
        : 7 == currQuizNum
          ? ((theConj = conjShuffle[1]),
            $('#quizMultiImg').css({
              'background-image': 'url(' + imageArray[2 * theConj - 2] + ')',
            }),
            placePuzzle())
          : 13 == currQuizNum
            ? ((theConj = conjShuffle[2]),
              $('#quizMultiImg').css({
                'background-image': 'url(' + imageArray[2 * theConj - 2] + ')',
              }),
              placePuzzle())
            : 19 == currQuizNum
              ? ((theConj = conjShuffle[3]),
                $('#quizMultiImg').css({
                  'background-image':
                    'url(' + imageArray[2 * theConj - 2] + ')',
                }),
                placePuzzle())
              : 25 == currQuizNum
                ? ((theConj = conjShuffle[4]),
                  $('#quizMultiImg').css({
                    'background-image':
                      'url(' + imageArray[2 * theConj - 2] + ')',
                  }),
                  placePuzzle())
                : 31 == currQuizNum
                  ? ((theConj = conjShuffle[5]),
                    $('#quizMultiImg').css({
                      'background-image':
                        'url(' + imageArray[2 * theConj - 2] + ')',
                    }),
                    placePuzzle())
                  : (timerWait = 500)
      : 'undefined' == typeof expressVerb
        ? 1 == currQuizNum
          ? ((theConj = conjNum[2]), placePuzzle())
          : 7 == currQuizNum
            ? (0 == conjNum[0] ? (theConj = 2) : (theConj = conjNum[8]),
              placePuzzle())
            : 13 == currQuizNum
              ? ((theConj = 3), placePuzzle())
              : 19 == currQuizNum
                ? ((theConj = 4), placePuzzle())
                : 25 == currQuizNum
                  ? ((theConj = 5), placePuzzle())
                  : (timerWait = 500)
        : 1 == currQuizNum
          ? ((theConj = 0),
            $('#quizMultiImg').css({
              'background-image': 'url(' + oPath + 'images/pic1.jpg)',
            }),
            placePuzzle())
          : 7 == currQuizNum
            ? ((theConj = 1),
              $('#quizMultiImg').css({
                'background-image': 'url(' + oPath + 'images/pic2.jpg)',
              }),
              placePuzzle())
            : 13 == currQuizNum
              ? ((theConj = 2),
                $('#quizMultiImg').css({
                  'background-image': 'url(' + oPath + 'images/pic3.jpg)',
                }),
                placePuzzle())
              : 19 == currQuizNum
                ? ((theConj = 3),
                  $('#quizMultiImg').css({
                    'background-image': 'url(' + oPath + 'images/pic4.jpg)',
                  }),
                  placePuzzle())
                : 25 == currQuizNum
                  ? ((theConj = 4),
                    $('#quizMultiImg').css({
                      'background-image': 'url(' + oPath + 'images/pic5.jpg)',
                    }),
                    placePuzzle())
                  : 31 == currQuizNum
                    ? ((theConj = 5),
                      $('#quizMultiImg').css({
                        'background-image': 'url(' + oPath + 'images/pic6.jpg)',
                      }),
                      placePuzzle())
                    : (timerWait = 500),
    quizTimerAnimate());
}
function placePuzzle() {
  if (
    ((timerWait = 3e3),
    $('#quizAllItemsB').css({ opacity: 0 }),
    $('#quizAllItemsB').html(puzzHTML),
    'undefined' == typeof imageBonus)
  ) {
    var e = '';
    (-1 != lessonTitle.indexOf(' (') &&
      (e =
        ' (' +
        (e = (e = (e = lessonTitle.split(' ('))[1]).split(
          ')',
        ))[0].toLowerCase() +
        ')'),
      conjNum.length < 15
        ? $('#puzzleTitle').html(infVerb + e + ': ' + conjTitlesPuzz[theConj])
        : $('#puzzleTitle').html(infVerb + e + ': Present'));
  } else
    ($('#puzzleTitle').html(
      forExamples[2 * theConj - 2] + ' (' + engExamples[2 * theConj - 2] + ')',
    ),
      $('g g').css({ opacity: '1' }),
      (puzArr = puzzleArray.slice()));
  ('undefined' != typeof expressVerb &&
    ($('g g').css({ opacity: '1' }),
    (puzArr = puzzleArray.slice()),
    1 == currQuizNum
      ? $('#puzzleTitle').html(
          forExamples[0].split('</strong>').join('').split('<strong>').join(''),
        )
      : 7 == currQuizNum
        ? $('#puzzleTitle').html(
            forExamples[2]
              .split('</strong>')
              .join('')
              .split('<strong>')
              .join(''),
          )
        : 13 == currQuizNum
          ? $('#puzzleTitle').html(
              forExamples[4]
                .split('</strong>')
                .join('')
                .split('<strong>')
                .join(''),
            )
          : 19 == currQuizNum
            ? $('#puzzleTitle').html(
                forExamples[6]
                  .split('</strong>')
                  .join('')
                  .split('<strong>')
                  .join(''),
              )
            : 25 == currQuizNum
              ? $('#puzzleTitle').html(
                  forExamples[8]
                    .split('</strong>')
                    .join('')
                    .split('<strong>')
                    .join(''),
                )
              : 31 == currQuizNum &&
                $('#puzzleTitle').html(
                  forExamples[10]
                    .split('</strong>')
                    .join('')
                    .split('<strong>')
                    .join(''),
                )),
    $('#quizAllItemsB').animate({ opacity: 1 }),
    loadDrag(),
    'French' == lessonLanguage &&
    -1 != vowels.indexOf(window['quizConj' + theConj][0].charAt(0))
      ? $('#puzz1AText').text("j'")
      : $('#puzz1AText').text(puzzPron[0]),
    -1 != lessonTitle.indexOf('mperative') &&
      'French' == lessonLanguage &&
      $('#puzz1AText').text(puzzPron[0]),
    $('#puzz2AText').text(puzzPron[1]),
    $('#puzz3AText').text(puzzPron[2]),
    $('#puzz4AText').text(puzzPron[3]),
    $('#puzz5AText').text(puzzPron[4]),
    $('#puzz6AText').text(puzzPron[5]),
    $('.puzzLeft1').css({ 'background-position': 'left 66.666666%' }),
    $('.puzzLeft2').css({ 'background-position': 'right 0%', right: '110px' }),
    $('.puzzRight1').css({ 'background-position': 'left 0%' }),
    $('.puzzRight2').css({ 'background-position': 'right 66.666666%' }),
    $('.puzzQues').droppable('option', 'disabled', !1),
    $('.puzzAnswer').show(),
    $('#puzzle1A').val(window['quizConj' + theConj][0]),
    $('#puzzle2A').val(window['quizConj' + theConj][1]),
    $('#puzzle3A').val(window['quizConj' + theConj][2]),
    $('#puzzle4A').val(window['quizConj' + theConj][3]),
    $('#puzzle5A').val(window['quizConj' + theConj][4]),
    $('#puzzle6A').val(window['quizConj' + theConj][5]),
    (puzzPos = shuffle(puzzPos)),
    $('#puzzle1B').css({ top: puzzPos[0] }),
    $('#puzzle2B').css({ top: puzzPos[1] }),
    $('#puzzle3B').css({ top: puzzPos[2] }),
    $('#puzzle4B').css({ top: puzzPos[3] }),
    $('#puzzle5B').css({ top: puzzPos[4] }),
    $('#puzzle6B').css({ top: puzzPos[5] }),
    $('#puzz1BText').text(window['quizConj' + theConj][0]),
    $('#puzz2BText').text(window['quizConj' + theConj][1]),
    $('#puzz3BText').text(window['quizConj' + theConj][2]),
    $('#puzz4BText').text(window['quizConj' + theConj][3]),
    $('#puzz5BText').text(window['quizConj' + theConj][4]),
    $('#puzz6BText').text(window['quizConj' + theConj][5]));
}
function removePuzzle() {
  if ('undefined' == typeof expressVerb && 'undefined' == typeof imageBonus) {
    var e,
      t = 30 % quizNumQues;
    (0 == t ? (t = e = 30 / quizNumQues) : (e = (30 - t) / quizNumQues),
      1 == currQuizNum && (e = t));
    for (var s = 1; s <= e; s++) {
      var n = puzzleArray.pop();
      $('#puz' + n).css({ opacity: '0' });
    }
  } else
    for (s = 1; s <= 5; s++) {
      n = puzArr.pop();
      $('#puz' + n).css({ opacity: '0' });
    }
}
function quizActions3() {
  if (0 == extraTime) {
    if (
      6 == currQuizNum ||
      11 == currQuizNum ||
      16 == currQuizNum ||
      21 == currQuizNum ||
      26 == currQuizNum
    )
      return (
        (extraTime = !0),
        setTimeout(function () {
          (quizActions3(),
            $('.timerMeter > .timerSpan').stop(),
            $('.timerMeter > .timerSpan').css({ width: 0 }),
            setTimeout(resizeQuizText, 10));
        }, 2500),
        $('.timerMeter > .timerSpan').css({ height: '20px' }),
        void $('.timerMeter > .timerSpan').each(function () {
          $(this)
            .width(0)
            .animate({ width: $('.timerMeter').width() }, 2500);
        })
      );
    extraTime = !1;
  } else extraTime = !1;
  (setTimeout(function () {
    ((maxScore = 65),
      (quizPtsCount = 65),
      $('#goodAnswerIn').css({
        'background-image': 'url(../../common/score4.svg)',
      }),
      $('#quizScoreImg').attr('src', '../../common/score4.svg'));
  }, 1e3),
    1 == currQuizNum
      ? ((theConj = 0), placeBooks())
      : 6 == currQuizNum
        ? ((theConj = 1), placeBooks())
        : 11 == currQuizNum
          ? ((theConj = 2), placeBooks())
          : 16 == currQuizNum
            ? ((theConj = 3), placeBooks())
            : 21 == currQuizNum
              ? ((theConj = 4), placeBooks())
              : 26 == currQuizNum
                ? ((theConj = 5), placeBooks())
                : (timerWait = 1e3),
    quizTimerAnimate());
}
function placeBooks() {
  ((timerWait = 3e3),
    $('#quizAllItemsD').css({ opacity: 0 }),
    $('#quizAllItemsD').animate({ opacity: 1 }),
    $('#quizAllItemsD').html(bookHTML),
    $('#shelf1 .shelvesLabel').html(conjTitles[1]),
    $('#shelf2 .shelvesLabel').html(conjTitles[2]),
    $('#shelf3 .shelvesLabel').html(conjTitles[3]),
    $('#shelf4 .shelvesLabel').html(conjTitles[4]),
    $('#shelf5 .shelvesLabel').html(conjTitles[5]),
    loadDrag2(),
    $('.shelves').droppable('option', 'disabled', !1),
    $('.books').show(),
    (shelfArray = ['1', '2', '3', '4', '5']),
    (shelfArray = shuffle(shelfArray)),
    $('#shelf1').val(forConj1[theConj]),
    $('#shelf2').val(forConj2[theConj]),
    $('#shelf3').val(forConj3[theConj]),
    $('#shelf4').val(forConj4[theConj]),
    $('#shelf5').val(forConj5[theConj]),
    $('#book1').html(window['forConj' + shelfArray[0]][theConj]),
    $('#book2').html(window['forConj' + shelfArray[1]][theConj]),
    $('#book3').html(window['forConj' + shelfArray[2]][theConj]),
    $('#book4').html(window['forConj' + shelfArray[3]][theConj]),
    $('#book5').html(window['forConj' + shelfArray[4]][theConj]),
    $('#book1B').html(forConj1[theConj]),
    $('#book2B').html(forConj2[theConj]),
    $('#book3B').html(forConj3[theConj]),
    $('#book4B').html(forConj4[theConj]),
    $('#book5B').html(forConj5[theConj]),
    $('#book' + shelfArray[0] + 'B').css({
      'background-image': 'url(../../common/book1.svg)',
    }),
    $('#book' + shelfArray[1] + 'B').css({
      'background-image': 'url(../../common/book2.svg)',
    }),
    $('#book' + shelfArray[2] + 'B').css({
      'background-image': 'url(../../common/book3.svg)',
    }),
    $('#book' + shelfArray[3] + 'B').css({
      'background-image': 'url(../../common/book4.svg)',
    }),
    $('#book' + shelfArray[4] + 'B').css({
      'background-image': 'url(../../common/book5.svg)',
    }));
}
function quizActions4() {
  var e, t;
  if (
    ($('#quizSentenceFor, #quizSentenceEng').hide(),
    setTimeout(function () {
      ((maxScore = 65), (quizPtsCount = 65));
    }, 2e3),
    (submitted = !1),
    $('#specialChars').show(),
    $('#hintTable').show(),
    $('#boardMain').removeClass('topAlign'),
    viewportHeight < 630 || viewportWidth < 450
      ? $('.boardTop').hide()
      : $('.boardTop').show(),
    $('#writeError, #writeError2').closest('tr').hide(),
    $('#writeAnswerField').val(''),
    $('.wrongLogo').hide(),
    $('#hint1, #hint2, #hint3').css({ visibility: 'visible' }),
    (foundArticle = ''),
    currQuizNum <= 0.5 * forExamples.length ||
      'undefined' != typeof expressVerb)
  ) {
    var s = forExamples[quizQuesNum - 1]
      .split('<strong></strong>')
      .join('')
      .split('<strong> </strong>')
      .join('')
      .split('</strong> <strong>')
      .join(' ');
    ('%' == s.charAt(0) && (s = (s = s.split('%'))[2]),
      (e = (e = (e = (e = s.split('</strong>'))[e.length - 2])
        .split("j'")
        .join("j' ")
        .split("J'")
        .join("J' ")
        .split('<strong>'))[e.length - 1].split(' ')));
    var n = '',
      i = '',
      r = Math.floor(2 * Math.random());
    if (
      (conjNum[quizQuesNum - 1] < 4 && (r = 0),
      'German' == lessonLanguage && 1 == r)
    )
      for (var o = writeArr2.length - 1; o >= 0; --o)
        -1 != s.indexOf(writeArr2[o]) &&
          ((n = writeArr2[o]), (i = writeArr3[o]));
    (e.length > 1 &&
      -1 != writeArr.indexOf(e[e.length - 2].toLowerCase()) &&
      (e[e.length - 1] = e[e.length - 2] + ' ' + e[e.length - 1]),
      (e = (e = e[e.length - 1].split('<strong>').join(''))
        .replace('¡', '')
        .replace('¿', '')),
      '' != n && (e = n.split('<strong>').join('').split('</strong>').join('')),
      (writtenString = e),
      (t = ''));
    for (var a = 0; a < e.length; a++)
      ' ' != e.charAt(a) ? (t += '_') : (t += ' ');
    ($('#quizSentenceFor').html(s.split(e + '</strong>').join(t + '</strong>')),
      '' != n && $('#quizSentenceFor').html(s.split(n).join(i)));
    var l = '';
    (('German' == lessonLanguage && lessonNumber >= 22 && lessonNumber <= 29) ||
      (3 != conjNum[quizQuesNum - 1] && 2 != conjNum[quizQuesNum - 1]) ||
      (l = ' (' + conjTitles[conjNum[quizQuesNum - 1]] + ')'),
      'undefined' != typeof imageBonus && (l = ''),
      0 == lessonNumber &&
        ')' ==
          engExamples[quizQuesNum - 1].charAt(
            engExamples[quizQuesNum - 1].length - 1,
          ) &&
        (l = ''),
      $('#quizSentenceEng').html(engExamples[quizQuesNum - 1] + l));
  } else
    ((e = (e = (e = (e = quizForExamples[quizQuesNum - 1]
      .split('<strong></strong>')
      .join('')
      .split('<strong> </strong>')
      .join('')
      .split('</strong> <strong>')
      .join(' ')
      .split('</strong>'))[e.length - 2])
      .split("j'")
      .join("j' ")
      .split("J'")
      .join("J' ")
      .split('<strong>'))[e.length - 1].split(' ')).length > 1 &&
      -1 != writeArr.indexOf(e[e.length - 2].toLowerCase()) &&
      (e[e.length - 1] = e[e.length - 2] + ' ' + e[e.length - 1]),
      (e = (e = e[e.length - 1].split('<strong>').join(''))
        .replace('¡', '')
        .replace('¿', '')),
      (writtenString = e),
      (t = Array(e.length + 1).join('_')),
      $('#quizSentenceFor').html(
        quizForExamples[quizQuesNum - 1]
          .split(e + '</strong>')
          .join(t + '</strong>'),
      ),
      $('#quizSentenceEng').html(quizEngExamples[quizQuesNum - 1]));
  $('em, strong').css({ color: '#ebbc31' });
  for (a = 0; a < articleArray.length; a++)
    0 == writtenString.indexOf(articleArray[a]) &&
      (foundArticle = articleArray[a]);
  ('' != foundArticle
    ? ((quizGoodAnswer = writtenString.split(foundArticle).join('')),
      (wArr = quizGoodAnswer.split('')))
    : ((quizGoodAnswer = writtenString), (wArr = writtenString.split(''))),
    (quizGoodPunct = quizGoodAnswer
      .split('.')
      .join('')
      .split('?')
      .join('')
      .split('!')
      .join('')
      .split("'")
      .join('')
      .split('¡')
      .join('')
      .split('¿')
      .join('')
      .split(',')
      .join('')
      .split('_')
      .join('')
      .split('-')
      .join('')),
    (allLetters = quizGoodPunct.split(' ').join('').split('')),
    (timerTime = 8e3 + 800 * allLetters.length));
  for (a = 0; a < allChars.length; a++)
    -1 != quizGoodPunct.indexOf(allChars[a]) && (timerTime += 3e3);
  letterArray = [];
  for (a = 0; a < allLetters.length; a++) letterArray.push(a);
  ((letterArray = shuffle(letterArray)), (letterArrayNum = 0));
  var u = wArr.length;
  quizDisplayAnswer = '';
  var c = 0;
  for (a = 0; a < u; a++)
    ' ' == wArr[a]
      ? (quizDisplayAnswer += '<span class="spanBlank">&nbsp;</span>')
      : '.' == wArr[a] ||
          '?' == wArr[a] ||
          '!' == wArr[a] ||
          "'" == wArr[a] ||
          ',' == wArr[a] ||
          '¡' == wArr[a] ||
          '¿' == wArr[a] ||
          '-' == wArr[a] ||
          '_' == wArr[a]
        ? (quizDisplayAnswer =
            quizDisplayAnswer +
            '<span class="spanBlank">' +
            wArr[a] +
            '</span>')
        : 'i' == wArr[a] || 'I' == wArr[a] || 'l' == wArr[a]
          ? ((quizDisplayAnswer =
              quizDisplayAnswer +
              '<span id="letter' +
              c +
              '" class="allLetters"><i class="invisible">' +
              wArr[a] +
              '&nbsp;</i></span>'),
            c++)
          : ((quizDisplayAnswer =
              quizDisplayAnswer +
              '<span id="letter' +
              c +
              '" class="allLetters"><i class="invisible">' +
              wArr[a] +
              '</i></span>'),
            c++);
  ((quizDisplayAnswer =
    '' != foundArticle
      ? foundArticle +
        '<span class="spanBlank"></span><b >' +
        quizDisplayAnswer +
        '</b>'
      : '<b >' + quizDisplayAnswer + '</b>'),
    $('#writtenAnswer').html(quizDisplayAnswer),
    $('#englishWrite').html(engExamples[quizQuesNum - 1]),
    'undefined' == typeof expressVerb
      ? currQuizNum <= 0.5 * forExamples.length
        ? $('#quizWriteImg').css({
            'background-image': 'url(' + imageArray[quizQuesNum - 2] + ')',
          })
        : $('#quizWriteImg').css({
            'background-image': 'url(' + imageArray2[quizQuesNum - 1] + ')',
          })
      : $('#quizWriteImg').css({
          'background-image': 'url(' + imageArray[quizQuesNum - 1] + ')',
        }),
    ('mobile' == currentDevice && 1 != externalKeyboard) ||
      ((focused = !0), $('#writeAnswerField').focus()),
    1 == checkAccent && findAccent(),
    setTimeout(resizeQuizText, 10),
    $('#quizSentenceFor, #quizSentenceEng').fadeIn(),
    (scrambled = quizGoodPunct.split(' ')));
  for (a = 0; a < scrambled.length; a++) {
    var d = scrambled[a].split('');
    scrambled[a] = shuffle(d);
  }
  ((scrambled = scrambled.join().split(',')),
    'ON' == localStorage.getItem(storeInfo + 'noGap') &&
      $('#writtenAnswer span').addClass('noGap'));
}
function showHint1(e) {
  var t = allLetters[letterArray[letterArrayNum]],
    s = scrambled[letterArray[letterArrayNum]];
  if (
    (t != s && (scrambled[scrambled.indexOf(t)] = s),
    'visible' == $('#hint2').css('visibility'))
  )
    ($('#letter' + letterArray[letterArrayNum]).text(t),
      (scrambled[letterArray[letterArrayNum]] =
        '<b class="redText">' + t + '</b>'),
      letterArrayNum++);
  else {
    scrambled[letterArray[letterArrayNum]] = '<b class="redText">' + t + '</b>';
    for (var n = 0; n < scrambled.length; n++)
      $('#letter' + n).html(scrambled[n]);
    letterArrayNum++;
  }
  (letterArrayNum == letterArray.length &&
    $('#hint1').css({ visibility: 'hidden' }),
    (currentPts -= 5),
    $('#currentScore').text(currentPts),
    (madeError || 'clicked' == e) &&
      ($('#hintPts1').stop(!0, !0),
      $('#hintPts1').css({ opacity: '1' }),
      setTimeout(function () {
        $('#hintPts1').transition({ opacity: '0' });
      }, 2e3)));
}
function showHint2() {
  quizDisplayAnswer = '';
  for (var e = 0; e < scrambled.length; e++)
    $('#letter' + e).html(scrambled[e]);
  ($('#hint2').css({ visibility: 'hidden' }),
    (currentPts -= 10),
    $('#currentScore').text(currentPts),
    $('#hintPts2').addClass('opacityAnimate'),
    setTimeout(function () {
      $('#hintPts2').removeClass('opacityAnimate');
    }, 2100));
}
function showHint3() {
  ($('#hint3').css({ visibility: 'hidden' }),
    (currentPts -= 20),
    $('#currentScore').text(currentPts),
    $('#hintPts3').addClass('opacityAnimate'),
    setTimeout(function () {
      $('#hintPts3').removeClass('opacityAnimate');
    }, 2100),
    (disableTimer = !0),
    loadQuizSound2());
}
function addCharacter() {
  if (-1 != osType.indexOf('droid')) {
    var e = $('#writeAnswerField').val();
    ($('#writeAnswerField').val(e + charToAdd),
      (focused = !0),
      $('#writeAnswerField').focus());
  } else {
    var t = $('#writeAnswerField').caret();
    ((e = [
      (e = $('#writeAnswerField').val()).slice(0, t),
      charToAdd,
      e.slice(t),
    ].join('')),
      $('#writeAnswerField').val(e),
      (focused = !0),
      $('#writeAnswerField').focus(),
      $('#writeAnswerField').caret(t + 1));
  }
}
function findAccents() {
  for (var e = forExamples.join(''), t = [], s = 0; s < allChars.length; s++)
    if (-1 != e.indexOf(allChars[s])) {
      var n = allChars[s].toLowerCase();
      t.push(n);
    }
  if (t.length <= 6) {
    ((charsToAdd = t.concat(specialChars)),
      (charsToAdd = (charsToAdd = (charsToAdd = unique(charsToAdd)).splice(
        0,
        6,
      )).sort()));
    for (s = 0; s < 6; s++) $('#char' + (s + 1)).html(charsToAdd[s]);
  } else checkAccent = !0;
}
function findAccent() {
  for (var e = quizGoodPunct, t = [], s = 0; s < allChars.length; s++)
    if (-1 != e.indexOf(allChars[s])) {
      var n = allChars[s].toLowerCase();
      t.push(n);
    }
  ((charsToAdd = t.concat(specialChars)),
    (charsToAdd = (charsToAdd = (charsToAdd = unique(charsToAdd)).splice(
      0,
      6,
    )).sort()));
  for (s = 0; s < 6; s++) $('#char' + (s + 1)).html(charsToAdd[s]);
}
function removeAccent(e) {
  return e
    .replace(/À|Á|Â|Ã|Ä|Å/g, 'A')
    .replace(/Ç/g, 'C')
    .replace(/È|É|Ê|Ë/g, 'E')
    .replace(/Ì|Í|Î|Ï/g, 'I')
    .replace(/Ò|Ó|Ô|Ö|Õ|Ø/g, 'O')
    .replace(/Ù|Ú|Û|Ü/g, 'U')
    .replace(/Ñ/g, 'N')
    .replace(/à|á|â|ã|ä|å/g, 'a')
    .replace(/ç/g, 'c')
    .replace(/è|é|ê|ë/g, 'e')
    .replace(/ì|í|î|ï/g, 'i')
    .replace(/ò|ó|ô|ö|õ|ø/g, 'o')
    .replace(/ù|ú|û|ü/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/ß/g, 'ss');
}
function checkClickAnswer(e) {
  (setTimeout(function () {
    (e.addClass('mobileClick'),
      setTimeout(function () {
        e.removeClass('mobileClick');
      }, 200));
  }, 1),
    clearTimeout(soundTime),
    e.val() == quizQuesNum
      ? ($('#mainSound').trigger('pause'),
        $('#quizItself').css({ 'pointer-events': 'none' }),
        setTimeout(function () {
          $('#quizItself').css({ 'pointer-events': 'auto' });
        }, 500),
        $('#quizTimerPointer').stop(),
        clearTimeout(timerDelay),
        setTimeout(function () {
          ($('#quizTimerPointer').stop(), clearTimeout(timerDelay));
        }, 200),
        (currentPts += quizPtsCount),
        $('#currentScore').text(currentPts),
        $('#quizItself').css({ opacity: '0' }),
        $('#quizTimerPointer').css({ opacity: '0' }),
        currQuizNum++,
        playSprite('quizGood'),
        $('#wrongAnswer, #goodAnswer, #goodAnswerPic').stop(!0, !0),
        $('#wrongAnswer').css({ opacity: '0' }),
        $('#goodAnswerPic, #goodAnswer').css({ opacity: '1' }),
        currQuizNum != quizNumQues + 1
          ? (loadQuestion(),
            setTimeout(function () {
              $('#quizItself').animate({ opacity: '1' });
            }, 100),
            setTimeout(function () {
              ((disableTimer = !1),
                loadQuizSound(),
                $('#goodAnswerPic, #goodAnswer').animate({ opacity: '0' }));
            }, 700))
          : (setTimeout(function () {
              $('#goodAnswerPic, #goodAnswer').css({ opacity: '0' });
            }, 1e3),
            4 == currentQuiz
              ? $('#quizDoneSentence').hide()
              : $('#quizDoneSentence').show(),
            doneQuiz()))
      : (1 == currentQuiz &&
          ((disableTimer = !0),
          (soundTime = setTimeout(function () {
            loadQuizSound();
          }, 1e3))),
        currentErrors++,
        -1 == errors.indexOf(quizQuesNum) && errors.push(quizQuesNum),
        $('#currentErrors').text(currentErrors),
        madeError ||
          ((currentPts -= 50),
          $('#wrongAnswerPic').addClass('opacityAnimate'),
          setTimeout(function () {
            $('#wrongAnswerPic').removeClass('opacityAnimate');
          }, 2100),
          $('#currentScore').text(currentPts),
          (madeError = !0)),
        playSprite('quizBad'),
        $('#wrongAnswer, #goodAnswer').stop(!0, !0),
        $('#goodAnswer').css({ opacity: '0' }),
        $('#wrongAnswer').css({ opacity: '1' }),
        setTimeout(function () {
          $('#wrongAnswer').transition({ opacity: '0' });
        }, 1e3)));
}
function checkWrittenAnswer() {
  if ('' != $('#writeAnswerField').val() || '' == quizGoodAnswer) {
    $('#writeError2').is(':visible') &&
      $('#writeAnswerField').val(quizGoodAnswer);
    for (
      var e = quizGoodPunct
          .toLowerCase()
          .split(' ')
          .join('')
          .split('î')
          .join('i')
          .split('Î')
          .join('I')
          .split('ß')
          .join('ss')
          .split('’')
          .join(''),
        t = removeAccent(e),
        s = $('#writeAnswerField')
          .val()
          .toLowerCase()
          .split(' ')
          .join('')
          .split('.')
          .join('')
          .split('?')
          .join('')
          .split('!')
          .join('')
          .split("'")
          .join('')
          .split('¡')
          .join('')
          .split('¿')
          .join('')
          .split(',')
          .join('')
          .split('-')
          .join('')
          .split('_')
          .join('')
          .split('î')
          .join('i')
          .split('Î')
          .join('I')
          .split('ß')
          .join('ss')
          .split('’')
          .join(''),
        n = removeAccent(s),
        i = [],
        r = e.length,
        o = 0;
      o < r;
      o++
    )
      e.charAt(o) != s.charAt(o) && i.push(o);
    if (s.length <= r - 1) {
      var a = i[0],
        l = e.slice(a);
      ((m = 0 != a ? s.slice(a + -1) : '%' + s), (i = []));
      for (o = 0; o < l.length; o++)
        l.charAt(o) != m.charAt(o) && i.push(o + a);
    }
    if (s.length == r - 2) {
      var u,
        c = i[1],
        d = e.slice(c);
      ((u = 0 != c ? s.slice(c - 2) : '%' + s), (i = i.slice(0, 1)));
      for (o = 0; o < l.length; o++)
        d.charAt(o) != u.charAt(o) && i.push(o + c);
    }
    if (s.length == r + 1) {
      var m;
      ((a = i[0]), (l = e.slice(a)));
      ((m = s.slice(a + 1)), (i = []));
      for (o = 0; o < l.length; o++)
        l.charAt(o) != m.charAt(o) && i.push(o + a);
    }
    var p = i.length,
      h = (r - p) / r,
      g = 1;
    if (
      ((lessonNumber < 1 ||
        'undefined' != typeof expressVerb ||
        'undefined' != typeof imageBonus) &&
        (g = 0.8),
      e == s)
    ) {
      if (
        ('mobile' == currentDevice &&
          0 == externalKeyboard &&
          ((focused = !1), $('#writeAnswerField').blur()),
        submitted)
      )
        return;
      if (
        ((submitted = !0),
        currQuizNum <= 0.5 * forExamples.length ||
          'undefined' != typeof expressVerb)
      )
        ('%' == (z = forExamples[quizQuesNum - 1]).charAt(0) &&
          (z = (z = z.split('%'))[2]),
          $('#quizSentenceFor').html(z),
          resizeQuizText());
      else
        ($('#quizSentenceFor').html(quizForExamples[quizQuesNum - 1]),
          resizeQuizText());
      ($('strong').css({ color: '#ebbc31' }),
        (currentPts += 65),
        $('#currentScore').text(currentPts),
        currQuizNum++,
        playSprite('quizGood'),
        $('#wrongAnswer, #goodAnswer').stop(!0, !0),
        $('#wrongAnswer').css({ opacity: '0' }),
        $('#wrongAnswerPic').removeClass('opacityAnimate'),
        $('#goodAnswer').css({ opacity: '1' }),
        setTimeout(function () {
          ($('#goodAnswer').transition({ opacity: '0' }),
            (disableTimer = !1),
            loadQuizSound());
        }, 700));
      var b = quizGoodPunct.split(' ').join('');
      for (o = 0; o < b.length; o++) $('#letter' + o).html(b[o]);
    } else if (t == n) {
      if (
        ('mobile' == currentDevice &&
          0 == externalKeyboard &&
          ((focused = !1), $('#writeAnswerField').blur()),
        currQuizNum <= 0.5 * forExamples.length ||
          'undefined' != typeof expressVerb)
      )
        ('%' == (z = forExamples[quizQuesNum - 1]).charAt(0) &&
          (z = (z = z.split('%'))[2]),
          $('#quizSentenceFor').html(z),
          resizeQuizText());
      else
        ($('#quizSentenceFor').html(quizForExamples[quizQuesNum - 1]),
          resizeQuizText());
      ($('strong').css({ color: '#ebbc31' }),
        (currentPts -= 5),
        $('#currentScore').text(currentPts),
        $('#hintPts1').stop(!0, !0),
        $('#hintPts1').css({ opacity: '1' }),
        setTimeout(function () {
          $('#hintPts1').transition({ opacity: '0' });
        }, 2e3),
        playSprite('pause'),
        $('#boardMain').addClass('topAlign'),
        $('#writeError').html('Good!&nbsp;But&nbsp;watch the&nbsp;accents...'),
        $('#hintTable, .boardTop, #specialChars').hide(),
        $('#writeError, #writeError2').closest('tr').show());
      for (
        var v = quizGoodPunct.split(' ').join('').split('').join('%'), f = 0;
        f < 6;
        f++
      )
        v = v
          .split(charsToAdd[f])
          .join('<b class="redText">' + charsToAdd[f] + '</b>');
      v = v.split('%');
      for (o = 0; o < v.length; o++) $('#letter' + o).html(v[o]);
    } else if (h >= g) {
      var z;
      if (
        ('mobile' == currentDevice &&
          0 == externalKeyboard &&
          ((focused = !1), $('#writeAnswerField').blur()),
        currQuizNum <= 0.5 * forExamples.length ||
          'undefined' != typeof expressVerb)
      )
        ('%' == (z = forExamples[quizQuesNum - 1]).charAt(0) &&
          (z = (z = z.split('%'))[2]),
          $('#quizSentenceFor').html(z),
          resizeQuizText());
      else
        ($('#quizSentenceFor').html(quizForExamples[quizQuesNum - 1]),
          resizeQuizText());
      ($('strong').css({ color: '#ebbc31' }),
        (currentPts -= 5),
        $('#currentScore').text(currentPts),
        $('#hintPts1').stop(!0, !0),
        $('#hintPts1').css({ opacity: '1' }),
        setTimeout(function () {
          $('#hintPts1').transition({ opacity: '0' });
        }, 2e3),
        playSprite('pause'),
        $('#boardMain').addClass('topAlign'),
        $('#writeError').html(
          'Very&nbsp;close! But&nbsp;watch&nbsp;your&nbsp;spelling...',
        ),
        $('#hintTable, .boardTop, #specialChars').hide(),
        $('#writeError, #writeError2').closest('tr').show());
      for (
        var w = quizGoodPunct.split(' ').join('').split(''), y = 0;
        y < p;
        y++
      )
        w[i[y]] = '<b class="redText">' + w[i[y]] + '</b>';
      for (o = 0; o < w.length; o++) $('#letter' + o).html(w[o]);
    } else {
      if (
        (playSprite('quizBad'),
        currentErrors++,
        'undefined' != typeof expressVerb
          ? -1 == errors.indexOf(quizQuesNum) && errors.push(quizQuesNum)
          : -1 == errors.indexOf(quizQuesNum) &&
            currQuizNum <= 0.5 * forExamples.length &&
            errors.push(quizQuesNum),
        $('#currentErrors').text(currentErrors),
        $('#goodAnswer').stop(!0, !0),
        $('#goodAnswer').css({ opacity: '0' }),
        $('#wrongLogo2').is(':visible'))
      ) {
        (showHint1(),
          $('#boardMain').addClass('topAlign'),
          $('#writeError').html(
            'Oops!&nbsp;Here&nbsp;is&nbsp;the right&nbsp;answer...',
          ),
          $('#hintTable, .boardTop, #specialChars').hide(),
          $('#writeError, #writeError2').closest('tr').show(),
          'mobile' == currentDevice &&
            0 == externalKeyboard &&
            ((focused = !1), $('#writeAnswerField').blur()),
          $('#wrongLogo3').show());
        for (b = quizGoodPunct.split(' ').join(''), o = 0; o < b.length; o++)
          $('#letter' + o).html(b[o]);
      } else
        $('#wrongLogo1').is(':visible')
          ? ($('#wrongLogo2').show(),
            letterArrayNum < letterArray.length
              ? showHint1()
              : ((currentPts -= 5), $('#currentScore').text(currentPts)))
          : ($('#wrongLogo1').show(),
            letterArrayNum < letterArray.length
              ? showHint1()
              : ((currentPts -= 5), $('#currentScore').text(currentPts)));
      madeError ||
        ((currentPts -= 50),
        $('#wrongAnswerPic, #wrongAnswer').addClass('opacityAnimate'),
        setTimeout(function () {
          $('#wrongAnswerPic, #wrongAnswer').removeClass('opacityAnimate');
        }, 2100),
        $('#currentScore').text(currentPts),
        (madeError = !0));
    }
  }
}
function startLesson() {
  ($('.menuBar').hasClass('noBack') && $('.menuBar').removeClass('noBack'),
    $('#backBtn, #menuMain2').removeClass('darker'),
    findLeftOff(),
    $('#dictBtn').show(),
    $('#keyboardBtn').hide(),
    playSprite('blank'));
  var e = window.location.href;
  if (
    ((e = e.split(currentSecShort + '/')),
    (e = currentSecShort + '/' + e[1]),
    localStorage.setItem(storeInfo + 'saved', e),
    localStorage.setItem(storeInfo + 'savedMenu', sessionStorage.menuType),
    localStorage.getItem(storeInfo + 'goalsSTORE'))
  ) {
    var t = new Date();
    t = t.getDate() + t.format('mmmm') + t.getFullYear();
    var s = [];
    if (
      -1 ===
      (s = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')).indexOf(t)
    ) {
      for (s.push(t), i = 1; i <= 5; i++) s.push('0');
      (s.push('1'),
        localStorage.setItem(storeInfo + 'goalsSTORE', s.join(':')),
        (infoToUpdate = s.join(':')),
        (fieldToUpdate = 'goals'),
        updateDatabase());
    }
  }
  if (
    localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    null == localStorage.getItem(storeInfo + 'goalsSTORE')
  ) {
    var n = new Date(),
      r = [
        (n = n.getDate() + n.format('mmmm') + n.getFullYear()),
        '0',
        '0',
        '0',
        '0',
        '0',
        '1',
      ];
    (localStorage.setItem(storeInfo + 'goalsSTORE', r.join(':')),
      (infoToUpdate = r.join(':')),
      (fieldToUpdate = 'goals'),
      updateDatabase());
  }
  if (
    ($('#pronounWarn').hide(),
    'French' == lessonLanguage &&
      ($('#starConjWarn').html(
        "<img src='../../common/warning.svg' style='width: 25px;'>Learn more about the French impersonal pronoun.",
      ),
      $('.starQuestion').attr('src', '../../common/warning.svg')),
    $('#starConjWarn').show(),
    -1 != lessonTitle.indexOf('mperative') &&
      $('.starQuestion, #pronounWarn, #starConjWarn').hide(),
    $('#pauseWrap').is(':visible') && $('#pauseWrap').hide(),
    $('#verbBanner').css({ display: 'inline-block' }),
    $('.closeWinBtn, .closeWinBtn2, .closeWinBtn3').html(closeWin),
    $('#conjTitleFor').html(
      '<img class="flagIcon" src="../../common/flagIcon.svg">' + lessonLanguage,
    ),
    $('#quizTimerPointer').is(':visible') &&
      ($('#quizTimerPointer').stop(!0, !0), clearTimeout(timerDelay)),
    $('#newHighScore').transition({ y: '100%' }),
    $('#newScoreUpdate').transition({ x: '-100%' }),
    $('.menuTitleContainer').show(),
    $('#pauseBtn').show(),
    $('#optionBtn').show(),
    $('#menuMain2').show(),
    $('#quizBanner').hide(),
    1 != soundLessonEvent &&
      (document.getElementById('mainSound').addEventListener('ended', setTimer),
      (soundLessonEvent = !0)),
    1 == soundQuizEvent &&
      (document
        .getElementById('mainSound')
        .removeEventListener('ended', afterSoundAction),
      (soundQuizEvent = !1)),
    (currentMusic = lessonMusicFile),
    toggleMusic(),
    $('.timerMeter > .timerSpan').show(),
    $('#quizContent').is(':visible') && $('#quizContent').hide(),
    $('#starWrap').is(':visible') && $('#starWrap').hide(),
    $('#endWrap').is(':visible') && $('#endWrap, #learningTip').hide(),
    $('#optionWrap').is(':visible') && $('#optionWrap').hide(),
    $('#menuWrap').is(':visible') && $('#menuWrap').hide(),
    $('.wrapper3').css({ background: 'rgba(0,0,0,0.7)' }),
    1 == slideOn)
  )
    return (
      $('#startCover').hide(),
      $('.slideBtn1, #slideImg, #slideText').on('click', function () {
        ((slidesNum[currSlide - 1] = '1'),
          (localStorage[storeInfo + 'slideInfo'] = slidesNum.join(':')),
          loadSlide());
      }),
      $('.slideBtn2').on('click', function () {
        ((slidesNum = [
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
          '1',
        ]),
          (localStorage[storeInfo + 'slideInfo'] = slidesNum.join(':')),
          loadSlide());
      }),
      'mobile' != currentDevice &&
        $('.slideBtn1, .slideBtn2').hover(function () {
          $(this).toggleClass('fullOpacity');
        }),
      0 == soundSlideEvent &&
        (document
          .getElementById('mainSound')
          .addEventListener('ended', animateOkay),
        (soundSlideEvent = !0)),
      1 == soundLessonEvent &&
        (document
          .getElementById('mainSound')
          .removeEventListener('ended', setTimer),
        (soundLessonEvent = !1)),
      $('#slideCont').show(),
      void loadSlide()
    );
  (1 == soundSlideEvent &&
    (document
      .getElementById('mainSound')
      .removeEventListener('ended', animateOkay),
    (soundSlideEvent = !1)),
    $('#startCover').is(':visible')
      ? ($('#startCover').hide(),
        $('.ouinoContent').css({ visibility: 'visible', opacity: '0.001' }),
        setTimeout(function () {
          $('.ouinoContent').animate({ opacity: '1' }, 400);
        }, 400),
        setTimeout(function () {
          $('.ouinoContent').css({ opacity: '1' });
        }, 1e3))
      : ((restartedLesson = !0),
        resizeTitle(),
        $('#endWrap').stop(),
        $('#endWrap').hide(),
        $('.ouinoContent').stop().animate({ opacity: '1' }, 2),
        $('.ouinoContent').show(),
        $('.ouinoContent').css({ visibility: 'visible' }),
        playSprite('transition'),
        (currentWordNum = 0)),
    changeWord(),
    resizePage());
}
function loadButtonsMain() {
  ('desktop' == currentDevice
    ? ($('#keyboardBtn').addClass('forceHide'),
      $('#volDiv').slider({
        orientation: 'horizontal',
        value: mainSound.volume,
        min: 0,
        max: 1,
        range: 'min',
        animate: !0,
        step: 0.1,
        slide: function (e, t) {
          ((mainSound.volume = t.value),
            (mainMusic.volume = t.value),
            (sfxSprite.volume = t.value),
            (localStorage.programVolume = t.value));
        },
      }),
      null != localStorage.programVolume &&
        ((mainSound.volume = localStorage.programVolume),
        (mainMusic.volume = localStorage.programVolume),
        (sfxSprite.volume = localStorage.programVolume),
        $('#volDiv').slider('value', localStorage.programVolume)))
    : $('#volDiv').addClass('forceHide'),
    $('#middleSwipe').hide(),
    addSwipePic('mainPic1'),
    addSwipePic('mainPic2'),
    $('#conjOpen').on('click', function () {
      $('.menuConj').toggleClass('centerDiv');
    }),
    $('.closeWinBtn3').on('click', function () {
      $('.menuConj').removeClass('centerDiv');
    }),
    $('.closeWinBtn, #verbWrap').on('click', function () {
      ($('.menuVerb').removeClass('centerDiv'),
        $('#verbWrap').hide(),
        playPres());
    }),
    $('#verbBanner1, #verbBanner1B').on('click', function () {
      ($('#menuVerbContent').html(typeText),
        resizeVerbMenu(),
        $('#menuVerbContent').hasClass('centerDiv') ||
          ($('.menuVerb').addClass('centerDiv'),
          $('#verbWrap').show(),
          pausePres()));
    }),
    $('#verbBanner2, #verbBanner2B').on('click', function () {
      ($('#menuVerbContent').html(addText),
        resizeVerbMenu(),
        $('#menuVerbContent').hasClass('centerDiv') ||
          ($('.menuVerb').addClass('centerDiv'),
          $('#verbWrap').show(),
          pausePres()));
    }),
    $('#verbBanner3, #verbBanner3B').on('click', function () {
      ($('#menuVerbContent').html(stemText),
        resizeVerbMenu(),
        $('#menuVerbContent').hasClass('centerDiv') ||
          ($('.menuVerb').addClass('centerDiv'),
          $('#verbWrap').show(),
          pausePres()));
    }),
    $('#verbBanner4, #verbBanner4B').on('click', function () {
      ($('#menuVerbContent').html(pronoText),
        resizeVerbMenu(),
        $('#menuVerbContent').hasClass('centerDiv') ||
          ($('.menuVerb').addClass('centerDiv'),
          $('#verbWrap').show(),
          pausePres()));
    }),
    $('#verbQuestion').on('click', function () {
      (2 == conjNum[currentWordNum]
        ? $('#menuVerbContent').html(pastText1)
        : 3 == conjNum[currentWordNum] && $('#menuVerbContent').html(pastText2),
        resizeVerbMenu(),
        $('#menuVerbContent').hasClass('centerDiv') ||
          ($('.menuVerb').addClass('centerDiv'),
          $('#verbWrap').show(),
          pausePres()));
    }),
    $('.starQuestion, #starConjWarn').on('click', function () {
      ($('#menuVerbContent').html(personText),
        resizeVerbMenu(),
        $('#menuVerbContent').hasClass('centerDiv') ||
          ($('.menuVerb').addClass('centerDiv'),
          $('#verbWrap').show(),
          pausePres()));
    }),
    $('#verbBanner5').on('click', function () {
      $('#verbBannerMenu').is(':visible')
        ? $('#verbBannerMenu').slideUp(200)
        : $('#verbBannerMenu').slideDown(200);
    }),
    $('.verbBannerItem2, .closeWinBtn2').on('click', function () {
      $('#verbBannerMenu').hide();
    }),
    $('#middleSwipe').hide(),
    addSwipePic('mainPic1'),
    addSwipePic('mainPic2'),
    $('#starConjWarn').hide(),
    'mobile' == currentDevice
      ? $('.wordSentence, .wordSentenceB')
          .on('touchstart', function (e) {
            $(e.target).hasClass('slowBubble') || $(this).addClass('hilite2');
          })
          .on('touchend touchcancel', function () {
            $(this).removeClass('hilite2');
          })
      : $('.wordSentence, .wordSentenceB')
          .on('mouseover', function (e) {
            $(e.target).hasClass('slowBubble') || $(this).addClass('hilite3');
          })
          .on('mouseout mouseleave', function () {
            $(this).removeClass('hilite3');
          }),
    $('.wordSentence').on('click', function (e) {
      ($('.wordSentenceIn').css({ opacity: '1' }),
        $(e.target).hasClass('slowBubble') ||
          ((disableTimer = !0),
          currentWordNum % 2 == 0 && currentWordNum++,
          loadFastSound(),
          $('.insight, .insightLabel').removeClass('disInsight')));
    }),
    $('.wordSentenceB').on('click', function (e) {
      ($('.ouinoContent').hasClass('portrait') ||
        $('.wordSentenceIn').css({ opacity: '0.3' }),
        $(e.target).hasClass('slowBubble') ||
          ((disableTimer = !0),
          currentWordNum % 2 != 0 && currentWordNum--,
          loadFastSound()));
    }),
    $('#slowBubble1, #slowBubble2')
      .on('touchstart', function () {
        $(this).css({
          '-webkit-transform': 'scale(1.2)',
          transform: 'scale(1.2)',
        });
      })
      .on('touchend touchcancel', function () {
        $(this).css({ '-webkit-transform': 'scale(1)', transform: 'scale(1)' });
      }),
    $('#slowBubble1').on('click', function () {
      ((disableTimer = !0),
        currentWordNum % 2 == 0 && currentWordNum++,
        loadSlowSound());
    }),
    $('#slowBubble2').on('click', function () {
      ((disableTimer = !0),
        currentWordNum % 2 != 0 && currentWordNum--,
        loadSlowSound());
    }),
    $('.selectOptions').addClass('fullOpacity'),
    $('.wrapper, .wrapper2, .wrapper3').on('click', function (e) {
      e.target == this && $('input').blur();
    }),
    $('#optionWrap').on('click', function (e) {
      e.target == this && toggleOptions();
    }),
    $('#optionBtn').on('click', toggleOptions),
    $('#menuOptions').on('click', function () {
      (disableTouch(), toggleOptions());
    }),
    $('#menuWrap').on('click', function (e) {
      e.target == this && toggleMenu();
    }),
    $('#menuBtn').on('click', toggleMenu),
    $('#pauseBtn').on('click', togglePause),
    $('#pauseWrap').on('click', togglePause),
    $('.verbButtons').on('click', buttonClicked),
    $('.rightArrow').on('click', function (e) {
      (currentWordNum % 2 != 0 || $('.ouinoContent').hasClass('portrait')
        ? currentWordNum % 2 == 0 && e.isTrigger && currentWordNum++
        : currentWordNum++,
        nextImage());
    }),
    $('.leftArrow').on('click', prevImage),
    0 !== lessonNumber && $('.menuTitleContainer').on('click', startLesson),
    $('#menuRestart').on('click', startLesson),
    $('#menuRestart2').on('click', startLesson),
    $('#menuNext, #menuNext2').on('click', nextLesson),
    $('#menuPrevious').on('click', previousLesson),
    $('#menuHome').on('click', homeMenu),
    $('#menuMain2').on('touchstart mousedown', function (e) {
      (e.preventDefault(), homeMenu());
    }),
    $('#menuMain').on('click', mainMenu),
    $('#menuQuiz').on('click', function () {
      ((errors = []), (errorMode = !1), loadQuiz());
    }),
    $('#menuQuiz2').on('click', function () {
      ((errors = []), (errorMode = !1), loadQuiz());
    }),
    $('.starSelect').on('click', selectKnowledge),
    $('.starSelect').on('click', function () {
      playSprite('shimmer');
    }),
    $('#starWrap').on('click', function (e) {
      e.target == this && $('#starWrap').hide();
    }),
    $('.knowledgeBox').on('click', function () {
      (playSprite('transition'), $('#starWrap').show());
    }),
    'desktop' == currentDevice &&
      ($('.wordSentence, .wordSentenceB').hover(function () {
        $(this).toggleClass('whiteHover');
      }),
      $('.slowBubble').hover(function () {
        $(this).toggleClass('bitDark');
      }),
      $('.ouinoButton').hover(function () {
        $(this).toggleClass('fullOpacity');
      }),
      $('#optionBtn').hover(function () {
        ($('#arrowLabel').text('SETTINGS MENU'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $('#menuBtn').hover(function () {
        ($('#arrowLabel').text('NAVIGATION MENU'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $('#pauseBtn').hover(function () {
        ($('#arrowLabel').text('PLAY / PAUSE'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $('.menuTitleContainer').hover(function () {
        ($('#arrowLabel').text('RESTART LESSON'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $('#menuMain2').hover(function () {
        ($('#arrowLabel').text('BACK TO HOME MENU'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $(
        '.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .menuTitleContainer, #verbBanner5,#verbQuestion,.slowBubble',
      ).hover(function () {
        $(this).toggleClass('fullOpacity');
      }),
      $('.starSelect').hover(function () {
        $(this).toggleClass('starSelectHover');
      }),
      $('.knowledgeBox').hover(
        function () {
          $(this).addClass('menuBoxHover');
        },
        function () {
          $(this).removeClass('menuBoxHover');
        },
      ),
      $('.menuBox').hover(
        function () {
          $(this).addClass('menuBoxHover');
          var e = $(this).children('img').attr('src');
          $('#menuSideLogo').attr('src', e);
        },
        function () {
          ($(this).removeClass('menuBoxHover'),
            $('#menuSideLogo').attr('src', '../../common/blank.svg'));
        },
      ),
      $('.menuBox2').hover(
        function () {
          $(this).addClass('menuBoxHover');
          var e = $(this).children('img').attr('src');
          $('#endSideLogo').attr('src', e);
        },
        function () {
          ($(this).removeClass('menuBoxHover'),
            $('#endSideLogo').attr('src', '../../common/blank.svg'));
        },
      ),
      $('.selectOptions').hover(function () {
        $(this).toggleClass('fullOpacity');
      }),
      $('.leftArrow, .rightArrow').hover(function () {
        $(this).toggleClass('arrowHover');
      }),
      $('.quizType').hover(function () {
        ($(this).toggleClass('quizTypeHover'),
          $(this).children('img').toggleClass('quizIconHover'));
      })));
}
function loadButtonsQuiz() {
  1 != quizLoaded &&
    ($('#practiceErrors div').on('touchend mouseup', function (e) {
      (e.preventDefault(), (errorMode = !0), loadQuiz());
    }),
    (quizLoaded = !0),
    /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
      $('#quizContent').on('touchstart', function (e) {
        e.preventDefault();
      }),
    $('#answerForm').submit(function (e) {
      (e.preventDefault(), checkWrittenAnswer());
    }),
    $('.quizItemsB').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    }),
    $('#writtenAnswer').on('click', function () {
      $('#writtenAnswer span').hasClass('noGap')
        ? ($('#writtenAnswer span').removeClass('noGap'),
          localStorage.removeItem(storeInfo + 'noGap'))
        : ($('#writtenAnswer span').addClass('noGap'),
          localStorage.setItem(storeInfo + 'noGap', 'ON'));
    }),
    'mobile' == currentDevice
      ? ($('#writeAnswerField').on('touchstart', function () {
          ((focused = !0), $('#writeAnswerField').focus());
        }),
        $('#writeAnswerField').on('focus', function (e) {
          (e.preventDefault(), e.stopPropagation(), window.scrollTo(0, 0));
        }),
        $('#writeAnswerField').on('blur', function () {
          ((focused = !1),
            setTimeout(function () {
              resizeQuiz();
            }, 500));
        }),
        $('#quizBtn1').on('touchstart mousedown', function (e) {
          (e.preventDefault(), loadQuiz1());
        }),
        $('#quizBtn2').on('touchstart mousedown', function (e) {
          (e.preventDefault(), loadQuiz2());
        }),
        $('#quizBtn3').on('touchstart mousedown', function (e) {
          (e.preventDefault(), loadQuiz3());
        }),
        $('#quizBtn4').on('touchstart mousedown', function (e) {
          (e.preventDefault(), loadQuiz4());
        }),
        $('.quizItems, .quizItemsB').on('touchmove', function (e) {
          e.preventDefault();
        }),
        $('#quizGoBack').on('click', function () {
          ((errors = []), (errorMode = !1), loadQuiz());
        }),
        $('#quizPreloadStart').on('touchstart mousedown', function (e) {
          (e.preventDefault(),
            setTimeout(function () {
              startQuiz();
            }, 100));
        }),
        $('#quizDoneContinue').on('touchstart mousedown', function (e) {
          (e.preventDefault(),
            setTimeout(function () {
              toggleMenu();
            }, 100));
        }),
        $('.boardChar').on('touchend mouseup', function (e) {
          (e.preventDefault(), (charToAdd = $(this).text()), addCharacter());
        }),
        $('#hint1').on('touchstart mousedown', function (e) {
          (e.preventDefault(), showHint1('clicked'), playSprite('shimmer'));
        }),
        $('#hint2').on('touchstart mousedown', function (e) {
          (e.preventDefault(), showHint2(), playSprite('shimmer'));
        }),
        $('#hint3').on('touchstart mousedown', function (e) {
          (e.preventDefault(), showHint3(), playSprite('shimmer'));
        }),
        $('#writeError2').on('touchstart mousedown', function (e) {
          (e.preventDefault(),
            $('#writeAnswerField').val(quizGoodAnswer),
            checkWrittenAnswer());
        }),
        $('.quizItems, .quizItemsB').on('touchstart mousedown', function (e) {
          (e.preventDefault(), checkClickAnswer($(this)));
        }),
        $('.boardBottom, .boardChar')
          .on('touchstart', function () {
            $(this).addClass('quizIconBig');
          })
          .on('touchend touchcancel', function () {
            $(this).removeClass('quizIconBig');
          }),
        $('#writeError2')
          .on('touchstart', function () {
            $(this).addClass('fullOpacity');
          })
          .on('touchend touchcancel', function () {
            $(this).removeClass('fullOpacity');
          }))
      : ($('.boardBottom,.boardChar').hover(function () {
          $(this).toggleClass('quizIconBig');
        }),
        $('#writeError2').hover(function () {
          $(this).toggleClass('fullOpacity');
        }),
        $('#quizBtn1').on('click', loadQuiz1),
        $('#quizBtn2').on('click', loadQuiz2),
        $('#quizBtn3').on('click', loadQuiz3),
        $('#quizBtn4').on('click', loadQuiz4),
        $('#quizGoBack').on('click', function () {
          ((errors = []), (errorMode = !1), loadQuiz());
        }),
        $('#quizPreloadStart').on('click', startQuiz),
        $('#quizDoneContinue').on('click', toggleMenu),
        $('.boardChar').on('click', function () {
          ((charToAdd = $(this).text()), addCharacter());
        }),
        $('#hint1').on('click', function () {
          (showHint1('clicked'), playSprite('shimmer'));
        }),
        $('#hint2').on('click', function () {
          (showHint2(), playSprite('shimmer'));
        }),
        $('#hint3').on('click', function () {
          (showHint3(), playSprite('shimmer'));
        }),
        $('#writeError2').on('click', function () {
          ($('#writeAnswerField').val(quizGoodAnswer), checkWrittenAnswer());
        }),
        $('#quizDoneContinue, #practiceErrors, #quizPreloadStart')
          .on('mouseover', function () {
            $(this).css({
              'text-shadow': '2px 1px 0px #ebbc31, rgb(0, 0, 0) 3px 2px 0px',
            });
          })
          .on('mouseout', function () {
            $(this).css({ 'text-shadow': 'rgb(0, 0, 0) 3px 2px 0px' });
          }),
        $('.quizItems').hover(function () {
          $(this).children('.quizItemsTop').toggleClass('quizItemsHover');
        }),
        $('.quizItems, .quizItemsB').on('click', function () {
          checkClickAnswer($(this));
        }),
        $('.quizItemsB').hover(function () {
          $(this).toggleClass('fullOpacity');
        })));
}
function loadDrag() {
  ($('.puzzAnswer').draggable({ revert: !0, stack: '.puzzAnswer', opacity: 1 }),
    $('.puzzAnswer').on('dragstart', function () {
      ($(this).css({ right: 'auto' }),
        (selectPuzz = $(this).attr('id')),
        (puzzContent = $(this).text()),
        $(this)
          .children('.puzzRight1')
          .css({ 'background-position': 'left 33.333333%' }),
        $(this)
          .children('.puzzRight2')
          .css({ 'background-position': 'right 100%' }));
    }),
    $('.puzzAnswer').on('dragstop', function () {
      ($('.puzzRight1').css({ 'background-position': 'left 0%' }),
        $('.puzzRight2').css({ 'background-position': 'right 66.666666%' }));
    }),
    $('.puzzQues').droppable({ accept: '.puzzAnswer' }),
    $('.puzzQues').on('drop', function () {
      if (
        $(this).val().split(' ').join('') == puzzContent.split(' ').join('')
      ) {
        $(this)
          .children('span')
          .text($(this).children('span').text() + puzzContent);
        var e = puzzContent.length + $(this).text().length;
        (e < 15
          ? $(this).children('.puzzLeft2').css({
              'background-position': 'right 100%',
              right: '125px',
              width: '30%',
            })
          : e >= 22
            ? $(this).children('.puzzLeft2').css({
                'background-size': '100% 400%',
                'background-position': 'right 100%',
                right: '125px',
                width: '50%',
              })
            : e < 22 &&
              $(this).children('.puzzLeft2').css({
                'background-position': 'right 100%',
                right: '125px',
                width: '40%',
              }),
          $(this).droppable('option', 'disabled', !0),
          removePuzzle(),
          $('#' + selectPuzz).hide(),
          $('#quizTimerPointer').stop(),
          clearTimeout(timerDelay),
          (currentPts += quizPtsCount),
          $('#currentScore').text(currentPts),
          $('#quizTimerPointer').css({ opacity: '0' }),
          currQuizNum++,
          playSprite('quizGood'),
          $('#wrongAnswer, #goodAnswer, #goodAnswerPic').stop(!0, !0),
          $('#wrongAnswer').css({ opacity: '0' }),
          $('#goodAnswer, #goodAnswerPic').css({ opacity: '1' }),
          setTimeout(function () {
            $('#goodAnswer, #goodAnswerPic').transition({ opacity: '0' });
          }, 500),
          currQuizNum != quizNumQues + 1
            ? loadQuestion()
            : setTimeout(function () {
                (4 == currentQuiz
                  ? $('#quizDoneSentence').hide()
                  : $('#quizDoneSentence').show(),
                  $('#puzzleBack').hide(),
                  doneQuiz());
              }, 2e3));
      } else
        ($(this).css({ opacity: '.9' }),
          $(this)
            .children('.puzzLeft1')
            .css({ 'background-position': 'left 66.666666%' }),
          $(this)
            .children('.puzzLeft2')
            .css({ 'background-position': 'right 0%' }),
          currentErrors++,
          -1 == errors.indexOf(quizQuesNum) && errors.push(quizQuesNum),
          $('#currentErrors').text(currentErrors),
          madeError ||
            ((currentPts -= 50),
            $('#wrongAnswerPic').css({ opacity: '1' }),
            setTimeout(function () {
              $('#wrongAnswerPic').transition({ opacity: '0' });
            }, 500),
            $('#currentScore').text(currentPts),
            (madeError = !0)),
          playSprite('quizBad'),
          $('#wrongAnswer, #goodAnswer, #goodAnswerPic').stop(!0, !0),
          $('#goodAnswer, #goodAnswerPic').css({ opacity: '0' }),
          $('#wrongAnswer').css({ opacity: '1' }),
          setTimeout(function () {
            $('#wrongAnswer').transition({ opacity: '0' });
          }, 500));
    }),
    $('.puzzQues').on('dropout', function () {
      ($(this).css({ opacity: '.9' }),
        $(this)
          .children('.puzzLeft1')
          .css({ 'background-position': 'left 66.66666%' }),
        $(this)
          .children('.puzzLeft2')
          .css({ 'background-position': 'right 0%' }));
    }),
    $('.puzzQues').on('dropover', function () {
      ($(this).css({ opacity: '1' }),
        $(this)
          .children('.puzzLeft1')
          .css({ 'background-position': 'left 100%' }),
        $(this)
          .children('.puzzLeft2')
          .css({ 'background-position': 'right 33.33333%' }));
    }));
}
function loadDrag2() {
  ($('.books').draggable({ revert: !0, stack: '.books', opacity: 1 }),
    $('.books').on('dragstart', function () {
      ($(this).css({ right: 'auto', bottom: 'auto' }),
        (selectPuzz = $(this).attr('id')),
        (puzzContent = $(this).html()));
    }),
    $('.books').on('dragstop', function () {}),
    $('.shelves').droppable({ accept: '.books' }),
    $('.shelves').on('drop', function () {
      if (
        ($(this).children('.shelvesLabel').css({ color: '#FFF' }),
        $(this).val().split(' ').join('') == puzzContent.split(' ').join(''))
      ) {
        ($(this).droppable('option', 'disabled', !0),
          $('#' + selectPuzz).hide(),
          $(this).children('.booksB').show(),
          $('#quizTimerPointer').stop(),
          clearTimeout(timerDelay),
          (currentPts += quizPtsCount),
          $('#currentScore').text(currentPts),
          $('#quizTimerPointer').css({ opacity: '0' }),
          currQuizNum++,
          playSprite('quizGood'),
          $('#wrongAnswer, #goodAnswer').stop(!0, !0),
          $('#wrongAnswer').css({ opacity: '0' }),
          $('#goodAnswer, #goodAnswerPic3').css({ opacity: '1' }),
          setTimeout(function () {
            $('#goodAnswer, #goodAnswerPic3').transition({ opacity: '0' });
          }, 500));
        var e = 1e3;
        (currQuizNum % 5 == 1 && (e = 2e3),
          setTimeout(function () {
            currQuizNum != quizNumQues + 1
              ? loadQuestion()
              : setTimeout(function () {
                  (4 == currentQuiz
                    ? $('#quizDoneSentence').hide()
                    : $('#quizDoneSentence').show(),
                    $('#puzzleBack').hide(),
                    doneQuiz());
                }, 2e3);
          }, e));
      } else
        ($(this).css({ opacity: '.9' }),
          currentErrors++,
          -1 == errors.indexOf(quizQuesNum) && errors.push(quizQuesNum),
          $('#currentErrors').text(currentErrors),
          madeError ||
            ((currentPts -= 50),
            $('#wrongAnswerPic').css({ opacity: '1' }),
            setTimeout(function () {
              $('#wrongAnswerPic').transition({ opacity: '0' });
            }, 500),
            $('#currentScore').text(currentPts),
            (madeError = !0)),
          playSprite('quizBad'),
          $('#wrongAnswer, #goodAnswer').stop(!0, !0),
          $('#goodAnswer, #goodAnswerPic3').css({ opacity: '0' }),
          $('#wrongAnswer').css({ opacity: '1' }),
          setTimeout(function () {
            $('#wrongAnswer').transition({ opacity: '0' });
          }, 500));
    }),
    $('.shelves').on('dropout', function () {
      ($(this).css({ opacity: '.9' }),
        $(this).children('.shelvesLabel').css({ color: '#FFF' }));
    }),
    $('.shelves').on('dropover', function () {
      ($(this).css({ opacity: '1' }),
        $(this).children('.shelvesLabel').css({ color: '#ebbc31' }));
    }));
}
function loadQuizSound() {
  var e;
  (1 === currentQuiz && $('.engRepeat').addClass('engDisabled'),
    $('#mainSound').trigger('pause'),
    -1 !=
      (e =
        currQuizNum <= 0.5 * forExamples.length + 1 ||
        'undefined' != typeof expressVerb
          ? fastSounds[quizQuesNum - 1]
          : quizSounds[quizQuesNum - 1]).indexOf('../') &&
      (e = e.split('../').join(pre)),
    $('#mainSound').attr('src', e),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playQuizSound));
}
function loadQuizSound2() {
  var e;
  ($('#mainSound').trigger('pause'),
    -1 !=
      (e =
        currQuizNum <= 0.5 * forExamples.length ||
        'undefined' != typeof expressVerb
          ? fastSounds[quizQuesNum - 1]
          : quizSounds[quizQuesNum - 1]).indexOf('../') &&
      (e = e.split('../').join(pre)),
    $('#mainSound').attr('src', e),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playQuizSound));
}
function playQuizSound() {
  var e;
  ((e = currentQuiz <= 2 ? 400 : 300),
    setTimeout(function () {
      document
        .getElementById('mainSound')
        .removeEventListener('canplay', playQuizSound);
      try {
        document
          .getElementById('mainSound')
          .play()
          .then(function () {})
          .catch(function (e) {
            console.error('Playback failed because: ', e);
          });
      } catch (e) {
        console.error('Playback failed because: ', e);
      }
    }, e));
}
function loadFirstSound() {
  ($('#mainSound').attr('src', '../../common/blank' + soundType),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playQuizSound));
}
function afterSoundAction() {
  if (!disableTimer)
    return currentQuiz >= 3
      ? currQuizNum != quizNumQues + 1
        ? (setTimeout(function () {
            (loadQuestion(),
              $('.timerMeter > .timerSpan').stop(),
              $('.timerMeter > .timerSpan').css({ width: 0 }));
          }, 2e3),
          $('.timerMeter > .timerSpan').css({ height: '20px' }),
          void $('.timerMeter > .timerSpan').each(function () {
            $(this)
              .width(0)
              .animate({ width: $('.timerMeter').width() }, 2e3);
          }))
        : (4 == currentQuiz
            ? $('#quizDoneSentence').hide()
            : $('#quizDoneSentence').show(),
          void setTimeout(function () {
            doneQuiz();
          }, 1500))
      : void (currentQuiz <= 2 && quizTimerAnimate());
}
function quizTimerAnimate() {
  (1 === currentQuiz && $('.engRepeat').removeClass('engDisabled'),
    clearTimeout(timerDelay),
    $('#quizTimerPointer').stop(!0, !0),
    localStorage.getItem(storeInfo + 'quizTimer') ||
      (timerDelay = setTimeout(function () {
        var e = $('#quizTimer').width() - 20;
        ($('#quizTimerImage').css({
          '-webkit-transform': 'translateX(0%)',
          transform: 'translateX(0%)',
        }),
          $('#quizTimerPointer').stop(!0, !0),
          $('#quizTimerPointer').css({ left: '-23px' }),
          $('#quizTimerPointer')
            .clearQueue()
            .animate({ opacity: '1' }, 200, function () {
              $('#quizTimerPointer').animate(
                { left: 0.333 * e + 'px' },
                0.333 * timerTime,
                'linear',
                function () {
                  ((quizPtsCount = 60),
                    $('#quizScoreImg').attr('src', '../../common/score3.svg'),
                    $('#goodAnswerIn, #goodAnswerIn2').css({
                      'background-image': 'url(../../common/score3.svg)',
                    }),
                    $('#quizTimerImage').css({
                      '-webkit-transform': 'translateX(-25%)',
                      transform: 'translateX(-25%)',
                    }),
                    $('#quizTimerPointer').animate(
                      { left: 0.666 * e + 'px' },
                      0.333 * timerTime,
                      'linear',
                      function () {
                        ((quizPtsCount = 55),
                          $('#quizScoreImg').attr(
                            'src',
                            '../../common/score2.svg',
                          ),
                          $('#goodAnswerIn, #goodAnswerIn2').css({
                            'background-image': 'url(../../common/score2.svg)',
                          }),
                          $('#quizTimerImage').css({
                            '-webkit-transform': 'translateX(-50%)',
                            transform: 'translateX(-50%)',
                          }),
                          $('#quizTimerPointer').animate(
                            { left: e + 'px' },
                            0.333 * timerTime,
                            'linear',
                            function () {
                              ((quizPtsCount = 50),
                                $('#quizScoreImg').attr(
                                  'src',
                                  '../../common/score1.svg',
                                ),
                                $('#goodAnswerIn, #goodAnswerIn2').css({
                                  'background-image':
                                    'url(../../common/score1.svg)',
                                }),
                                $('#quizTimerImage').css({
                                  '-webkit-transform': 'translateX(-75%)',
                                  transform: 'translateX(-75%)',
                                }));
                            },
                          ));
                      },
                    ));
                },
              );
            }));
      }, timerWait)));
}
function shuffle(e) {
  for (
    var t, s, n = e.length;
    n;
    t = Math.floor(Math.random() * n), s = e[--n], e[n] = e[t], e[t] = s
  );
  return e;
}
function resizeVerbMenu() {
  $('.menuVerb').css({
    height: $('#menuVerbContent').outerHeight() + 45 + 'px',
  });
}
((window.onload = function () {
  'iOS' == osType || -1 != osType.indexOf('droid')
    ? document.addEventListener('deviceready', onDeviceReady, !1)
    : onDeviceReady();
}),
  $(document).ready(function () {
    ((viewport = document.querySelector('meta[name=viewport]')),
      $('html').innerWidth() < 350 || $('html').innerHeight() < 350
        ? viewport.setAttribute(
            'content',
            'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.7,minimum-scale=0.7,viewport-fit=cover',
          )
        : $('html').innerWidth() < 450 || $('html').innerHeight() < 450
          ? $('html').innerWidth() > 760 || $('html').innerHeight() > 760
            ? (viewport.setAttribute(
                'content',
                'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.9,minimum-scale=0.9,viewport-fit=cover',
              ),
              -1 != osType.indexOf('droid') && $('body').addClass('android'))
            : viewport.setAttribute(
                'content',
                'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.8,minimum-scale=0.8,viewport-fit=cover',
              )
          : viewport.setAttribute(
              'content',
              'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=1,minimum-scale=1,viewport-fit=cover',
            ),
      $('#background').css({
        'background-image': 'url(' + oPath + 'images/background.png)',
      }),
      loginAppend.length > numberLength &&
        ($('body').append(mainHTML),
        $('body').append(lessonAppend),
        $('body').append(quizAppend)),
      'iOS' == osType &&
        ($('html').innerWidth() < 500 || $('html').innerHeight() < 500) &&
        $('.menuTitleContainer').addClass('forceHide'),
      $('title').text(''),
      $('#foreignText').text(lessonLanguage),
      $('#foreignText2').text(currentSection.toUpperCase() + ' SETTINGS'),
      $('#menuTitleSection').html(currentSection + '<br>Menu'),
      (audioSprite = document.getElementById('sfxSprite')).addEventListener(
        'timeupdate',
        onTimeUpdate,
        !1,
      ),
      $('#answerForm').append(
        '<input type="text" id="writeAnswerField" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type Answer Here"/>',
      ),
      null == sessionStorage.LOGGEDIN && loadLogIn(),
      $('.timerMeter > .timerSpan').css({ background: '#8c170b', width: 0 }),
      'undefined' != typeof imageBonus
        ? ((presType = 'bonus'),
          $('.mainPic1').css({
            'background-image': 'url(' + imageArray[0] + ')',
          }))
        : 0 !== lessonNumber &&
          $('.mainPic1').css({
            'background-image': 'url(' + oPath + 'images/pic1.jpg)',
          }),
      localStorage.getItem(storeInfo + 'irregSTORE') && (irregSpan = !1),
      $('#verbBanner1 img').attr(
        'src',
        '../../common/puzzle' + verbTypeNum + '.svg',
      ),
      $('#verbText1').text(verbTypeArray[verbTypeNum - 1]),
      $('#verbTextB1').text(verbType),
      'Italian' == lessonLanguage &&
        'IRE' == verbType &&
        $('#verbTextB1').append(IREType),
      $('#verbTextB2').text(forConj6),
      'undefined' != typeof expressVerb &&
        $('#verbBanner').addClass('express1'),
      'undefined' != typeof imageBonus ||
        $('#verbTextB3').html(
          forConj7.split('+').join("<b style='font-family: arial;'> + </b>"),
        ),
      'Italian' == lessonLanguage
        ? $('#verbText2').text('Gerund: ')
        : 'Spanish' == lessonLanguage || 'Portuguese' == lessonLanguage
          ? $('#verbText2').text('Present Participle: ')
          : ('French' != lessonLanguage && 'German' != lessonLanguage) ||
            $('#verbText2').text('Auxiliary Verb: '),
      $('#verbBanner1B').html($('#verbBanner1').html()),
      $('#verbBanner2B').html($('#verbBanner2').html()),
      $('#verbBanner3B').html($('#verbBanner3').html()),
      $('#verbBanner4B').html($('#verbBanner4').html()),
      $('#pronounWarn').html(proWarning),
      'French' == lessonLanguage
        ? ($('#starQues2, #pronounWarn').hide(),
          $('#starQues1').css({ top: '33%', width: '13px' }))
        : 'Italian' == lessonLanguage
          ? ($('#starQues1').css({ top: '30%' }),
            $('#starQues2').css({ top: '79%' }))
          : 'German' == lessonLanguage && $('#starQues1, #pronounWarn').hide(),
      pronominal
        ? ($('#verbBanner4').addClass('verbBannerItem'),
          $('#verbBanner4B').addClass('verbBannerItem2'))
        : $('#verbBanner4, #verbBanner4B').hide());
    for (var e = '', t = 0.5 * numWords, s = 100 / t, n = 1; n <= t; n++)
      e =
        e +
        '<div id="verbBtn' +
        n +
        '" class="verbButtons">' +
        conjTitles[n - 1] +
        '</div>';
    if (
      ($('.ouinoContent').append($("<div id='btnWrap'>" + e + '</div>')),
      $('html').innerWidth() <= 850)
    ) {
      $('.verbButtons').css({ width: '150px' });
      var i = 0;
      for (n = 1; n <= t; n++)
        ($('#verbBtn' + n).css({ left: i + 'px' }), (i += 150));
    } else {
      $('.verbButtons').css({ width: 100 / (0.5 * numWords) + '%' });
      for (n = 1; n <= t; n++)
        $('#verbBtn' + n).css({ left: s * (n - 1) + '%' });
    }
    ($('.gradientColor').css({
      background:
        'url(../../common/black.svg), linear-gradient(' +
        btnColor[0] +
        ',' +
        btnColor[1] +
        ')',
    }),
      $('.gradientColor2').css({
        background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
      }),
      $('.gradientColor3').css({
        background:
          'url(../../common/black.svg), linear-gradient(' +
          btnColor[2] +
          ',' +
          btnColor[3] +
          ')',
      }),
      loadButtonsMain(),
      localStorage.getItem(storeInfo + 'externalKeyboard') &&
        ($('#keyboardBtn').attr('src', '../../common/keyboard.svg'),
        (externalKeyboard = !0)),
      $('#keyboardBtn').on('click', function () {
        ($('body').append(
          '<a href="#" id="kPrompt" onclick="$(\'#kPrompt\').hide(); $(\'#kPrompt\').remove();" style="padding: 10px 20px; width: 290px; height: 240px; background: #101010; top: 0; right: 0; left: 0; bottom: 0; position: absolute; margin: auto; z-index: 9999999; border-radius: 10px; text-align:center; text-decoration:none; color: white;"><h2>External Keyboard?</h2>This option allows you to keep the answer field selected at all times while taking the exercise. This is helpful if you are using an external keyboard.<div style="padding: 10px 20px; width: 70px; color: black; background: #ffb700; position: absolute; bottom: 20px; left: 0; right: 0; margin: 0 auto; font-weight: bold; border-radius: 5px">Okay</div></a>',
        ),
          localStorage.getItem(storeInfo + 'externalKeyboard')
            ? ($('#keyboardBtn').attr('src', '../../common/keyboard2.svg'),
              localStorage.removeItem(storeInfo + 'externalKeyboard'),
              (externalKeyboard = !1))
            : ($('#keyboardBtn').attr('src', '../../common/keyboard.svg'),
              localStorage.setItem(storeInfo + 'externalKeyboard', 'on'),
              (externalKeyboard = !0)));
      }),
      $(window).resize(function () {
        (resizePage(),
          setTimeout(function () {
            resizePage();
          }, 200));
      }),
      $(window).load(function () {
        resizePage();
      }),
      ($.fn.preload = function () {
        this.each(function () {
          $('<img/>')[0].src = this;
        });
      }),
      $(imageArray).preload(),
      $('#selectSound').change(function () {
        toggleMusic();
      }),
      $('#selectPlayback').change(function () {
        togglePlayback();
      }),
      $('#selectInterval').change(function () {
        toggleInterval();
      }),
      $('#selectText').change(function () {
        toggleText2();
      }),
      $(document).on('blur', 'input, textarea', function () {
        setTimeout(function () {
          (window.scrollTo(document.body.scrollLeft, document.body.scrollTop),
            window.AndroidFullScreen &&
              window.AndroidFullScreen.immersiveMode());
        }, 0);
      }),
      $('#learningTip').html(
        '<img src="../../common/tip.svg" class="imageAlign"/>' +
          lessonLanguage +
          ' Learning Tip<p id="endTip">',
      ),
      $('#endTip').text(allLearningTips[tipNum]));
  }));
var pronoText,
  addText,
  verbTypes,
  pastEx,
  pastEx2,
  pastText1,
  stemText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo2.svg">What is the stem of a verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> The stem of a verb is the part of the verb that never changes when being conjugated. <br><b class="bullet">&bull;</b> Once you know the endings of regular verbs, the stem is all you need to remember to fully conjugate it. <br><b class="bullet">&bull;</b> The stem is identified in blue letters in the conjugation below. <br><b class="bullet">&bull;</b> The endings are identified in red letters in the conjugation below.</p>';
'(none)' == forConj7 &&
  (stemText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo2.svg">What is the stem of a verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> The stem of a verb is the part of the verb that never changes when being conjugated. <br><b class="bullet">&bull;</b> Once you know the endings of regular verbs, the stem is all you need to remember to fully conjugate it. <br><b class="bullet">&bull;</b> This verb is one of the very few that does not have a repeating stem.</p>');
var personText = '';
'Italian' == lessonLanguage
  ? ((pastEx2 = '(Io) andavo al negozio.'),
    (verbTypes = ['IRE', 'ARE', 'ERE']),
    (addText =
      '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is the Gerund?</h3><p><b class="bullet">&bull;</b> The gerund is used to conjugate the present progressive, which is used when you need to specify that you are doing something right now.<br><b class="bullet">&bull;</b> In English, the gerund is simply the -ING form of the verb. The Italian construction of the present progressive is the same as in English, but we use the verb "Stare", not "Essere".</p><p>E.G. Stare + Gerund = To be + Gerund<br><span class="textSpace">E.G.</span> (io) sto mangiando = I am eating</p><p><b class="bullet">&bull;</b> When it is not necessary to specify that you are doing something right now, the present is used instead...</p><p>E.G. (io) mangio = I eat</p><p><b class="bullet">&bull;</b> You can take the endings lessons to learn how to conjugate both forms.</p>'),
    (pronoText =
      '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "Si" at the end of the infinitive form means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in front of it.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.</p><p>E.G. "Lavare" means "To Wash"<br><span class="textSpace">E.G.</span> "Lavarsi" means "To Wash Oneself".</p><p><b class="bullet">&bull;</b> In Italian, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "Si" is at the end of a verb, it has to be conjugated with a reflexive pronoun in front of the verb.</p>'),
    (pastText1 =
      '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the "Passato Prossimo" tense?</h3><p><b class="bullet">&bull;</b> In most cases, the "passato prossimo" is the equivalent of two English tenses...</p><p>The simple past;&nbsp;&nbsp;&nbsp;&nbsp;(io) ho accettato = I accepted<br>The present perfect;&nbsp;&nbsp;&nbsp;&nbsp;(io) ho accettato =  I have accepted</p><p><b class="bullet">&bull;</b> Please note that Italian past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context. The "passato prossimo" is used when referring to something that has already happened.</p>'),
    (personText =
      '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Italian Conjugation with <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b></h3><p><b class="bullet">&bull;</b> The Italian subject pronoun <b class="yellowText">Lei</b> is the singular formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The Italian subject pronoun <b class="yellowText">Loro</b>, is the plural formal "you". It is used when talking to more than one person in a VERY formal manner.<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Lei</b> is conjugated to the third person singular and <b class="yellowText">Loro</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course, the third person conjugation is simply copied for <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b> are conjugated to the third person.<br><b class="bullet">&bull;</b> Note that <b class="yellowText">Lei</b> also means "she" and that <b class="yellowText">Loro</b> also means "they", but that they are capitalized when they are the equivalent of "you", even in the middle of a sentence.<br></p>'))
  : 'Spanish' == lessonLanguage
    ? ((pastEx2 = '(Yo) iba a la tienda.'),
      (verbTypes = ['IR', 'AR', 'ER']),
      (addText =
        '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is the Present Participle?</h3><p><b class="bullet">&bull;</b> The present participle is used to conjugate the present progressive.<br><b class="bullet">&bull;</b> The present progressive is used when you need to specify that you are doing something right now. In English, the present participle is simply the -ING form of the verb. The Spanish construction of the present progressive is the same as in English.</p><p>E.G. Estar + Present Participle = To be + Present Participle<br><span class="textSpace">E.G.</span> (yo) estoy comiendo = I am eating</p><p><b class="bullet">&bull;</b> When it is not necessary to specify that you are doing something right now, the present is used instead...</p><p>E.G. (yo) como = I eat</p><p><b class="bullet">&bull;</b> You can take the endings lessons to learn how to conjugate both forms.</p>'),
      (pronoText =
        '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "Se" at the end of the infinitive form means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in front of it.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.</p><p>E.G. "Lavar" means "To Wash"<br><span class="textSpace">E.G.</span> "Lavarse" means "To Wash Oneself".</p><p><b class="bullet">&bull;</b> In Spanish, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "Se" is at the end of a verb, it has to be conjugated with a reflexive pronoun in front of the verb.</p>'),
      (pastText1 =
        '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the preterite tense?</h3><p><b class="bullet">&bull;</b> In most cases, the preterite is the equivalent of two English tenses...</p><p>The simple past;&nbsp;&nbsp;&nbsp;&nbsp;(yo) acepté = I accepted<br>The present perfect;&nbsp;&nbsp;&nbsp;&nbsp;(yo) acepté =  I have accepted</p><p><b class="bullet">&bull;</b> Please note that Spanish past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context. The preterite is used when referring to something that has already happened.</p>'),
      (personText =
        '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Spanish Conjugation with <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b></h3><p><b class="bullet">&bull;</b> The Spanish subject pronoun <b class="yellowText">Usted</b> is the formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The Spanish subject pronoun <b class="yellowText">Ustedes</b>, is the plural "you". It is used when talking to more than one person.<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Usted</b> is conjugated to the third person singular and <b class="yellowText">Ustedes</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course the third person conjugation is simply copied for <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b> are conjugated to the third person.</p>'))
    : 'Portuguese' == lessonLanguage
      ? ((pastEx2 = '(Eu) estava indo para a loja.'),
        (verbTypes = ['IR', 'AR', 'ER']),
        (addText =
          '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is the Present Participle?</h3><p><b class="bullet">&bull;</b> The present participle is used to conjugate the present progressive.<br><b class="bullet">&bull;</b> The present progressive is used when you need to specify that you are doing something right now. In English, the present participle is simply the -ING form of the verb. The Portuguese construction of the present progressive is the same as in English.</p><p>E.G. Estar + Present Participle = To be + Present Participle<br><span class="textSpace">E.G.</span> (eu) estou comendo = I am eating</p><p><b class="bullet">&bull;</b> When it is not necessary to specify that you are doing something right now, the present is used instead...</p><p>E.G. (eu) como = I eat</p><p><b class="bullet">&bull;</b> You can take the endings lessons to learn how to conjugate both forms.</p>'),
        (pronoText =
          '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "-se" at the end of the infinitive form means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in the conjugation.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.</p><p>E.G. "Lavar" means "To Wash"<br><span class="textSpace">E.G.</span> "Lavar-se" means "To Wash Oneself".</p><p><b class="bullet">&bull;</b> In Portuguese, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "-se" is at the end of a verb, it has to be conjugated with a reflexive pronoun.</p>'),
        (pastText1 =
          '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the preterite tense?</h3><p><b class="bullet">&bull;</b> In most cases, the preterite (pretérito perfeito) is the equivalent of two English tenses...</p><p>The simple past;&nbsp;&nbsp;&nbsp;&nbsp;(eu) aceitei = I accepted<br>The present perfect;&nbsp;&nbsp;&nbsp;&nbsp;(eu) aceitei =  I have accepted</p><p><b class="bullet">&bull;</b> Please note that Portuguese past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context. The preterite is used when referring to something that has already happened.</p>'),
        (personText =
          '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Portuguese Conjugation with <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b></h3><p><b class="bullet">&bull;</b> The Portuguese subject pronoun <b class="yellowText">Você</b> is the most common "you" in Brazil. It is used when talking to one person.<br><b class="bullet">&bull;</b> However, in Portugal, the pronoun <b class="yellowText">Tu</b> is the most common informal form when talking to one person.<br><b class="bullet">&bull;</b> If you wish to keep it very formal, you can use <b class="yellowText">O senhor</b> (to a man) or <b class="yellowText">A senhora</b> (to a woman) instead of <b class="yellowText">Você</b> in both Portugal and Brazil.<br><b class="bullet">&bull;</b> The Portuguese subject pronoun <b class="yellowText">Vocês</b> is the plural "you". It is used when talking to more than one person.<br><b class="bullet">&bull;</b> Even though <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Você</b> is conjugated to the third person singular and <b class="yellowText">Vocês</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course the third person conjugation is simply copied for <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b> are conjugated to the third person.</p>'))
      : 'French' == lessonLanguage
        ? ((pastEx2 = "J'allais au magasin."),
          (verbTypes = ['RE', 'ER', 'IR']),
          (addText =
            '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is an auxiliary verb?</h3><p><b class="bullet">&bull;</b> An auxiliary verb accompanies the main verb to make a new meaning.<br><b class="bullet">&bull;</b> E.G. In the English "I am eating", "to eat" is the main verb, while "to be" is the auxiliary verb.<br><b class="bullet">&bull;</b> Auxiliary verbs are mainly used in the past tense "passé composé". <br><b class="bullet">&bull;</b> In French, there are two auxiliary verbs; "Être" (To be) and "Avoir" (To have).<br><b class="bullet">&bull;</b> However, the auxiliary verb "Avoir" is used a lot more than "Être".<br><b class="bullet">&bull;</b> A few verbs can use both auxiliary verbs depending on the sentence structure.<br><b class="bullet">&bull;</b> Learning these two verbs is an essential part of French conjugation.<br></p>'),
          (pronoText =
            '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "Se" before an infinitive verb means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in front of it.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.</p><p>E.G. "Laver" means "To Wash"<br><span class="textSpace">E.G.</span> "Se laver" means "To Wash Oneself".</p><p><b class="bullet">&bull;</b> In French, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "Se" is in front of a verb, it has to be conjugated with a reflexive pronoun.</p>'),
          (pastText1 =
            '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the "passé composé" tense?</h3><p><b class="bullet">&bull;</b> In most cases, the "passé composé" is the equivalent of two English tenses...</p><p>The simple past;&nbsp;&nbsp;&nbsp;&nbsp;J\'ai accepté = I accepted<br>The present perfect;&nbsp;&nbsp;&nbsp;&nbsp;J\'ai accepté =  I have accepted</p><p><b class="bullet">&bull;</b> Please note that French past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context. The "passé composé" is used when referring to something that has already happened.</p>'),
          (personText =
            '<h3><img id="menuVerbImage" src="../../common/warning.svg">French Conjugation with <b class="yellowText">On</b></h3><p><b class="bullet">&bull;</b> The French subject pronoun <b class="yellowText">On</b> is the impersonal pronoun. It is important to understand that it is not the equivalent of "it".<br><b class="bullet">&bull;</b> The pronoun <b class="yellowText">On</b> acts as the passive voice. There is no true equivalent in English, but it is similar to "one".<br><b class="bullet">&bull;</b> E.G. <b class="yellowText">On</b> ne devrait pas fumer. / <b class="yellowText">One</b> should not smoke.<br><b class="bullet">&bull;</b> In spoken informal French, <b class="yellowText">On</b> is frequently used as the direct translation of "we". <br><b class="bullet">&bull;</b> It is an alternate way of speaking for a group of people, just like "nous".<br><b class="bullet">&bull;</b> Using <b class="yellowText">On</b> this way is (technically) grammatically incorrect, but it is a very common way of speaking.</p>'))
        : 'German' == lessonLanguage &&
          ((pastEx2 = "J'allais au magasin."),
          (verbTypes = ['', '', '']),
          (addText =
            '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is an auxiliary verb?</h3><p><b class="bullet">&bull;</b> An auxiliary verb accompanies the main verb to make a new meaning.<br><b class="bullet">&bull;</b> E.G. In the English "I am eating", "to eat" is the main verb, while "to be" is the auxiliary verb.<br><b class="bullet">&bull;</b> Auxiliary verbs are used in the conversational (perfekt) past. <br><b class="bullet">&bull;</b> In German, there are two auxiliary verbs; "Sein" (To be) and "Haben" (To have).<br><b class="bullet">&bull;</b> However, the auxiliary verb "Haben" is used a lot more than "Sein".<br><b class="bullet">&bull;</b> A few verbs can use both auxiliary verbs depending on the sentence structure.<br><b class="bullet">&bull;</b> Learning these two verbs is an essential part of German conjugation.<br></p>'),
          (pronoText =
            '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "Sich" before an infinitive verb means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in front of it.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.<br><b class="bullet">&bull;</b> In German, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "sich" is in front of a verb, it has to be conjugated with a reflexive pronoun.</p>'),
          (pastText1 =
            '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the conversational (perfekt) tense?</h3><p><b class="bullet">&bull;</b> The conversational past is also known as "the compound past" and "the present perfect".<br><b class="bullet">&bull;</b> The conversational past is primarily used in conversational, spoken German.<br><b class="bullet">&bull;</b> It is a compound tense formed by combining an auxiliary verb with the past participle.<br><b class="bullet">&bull;</b> The conversational past is the equivalent of all kinds of English forms.<br><b class="bullet">&bull;</b> For example, it could replace "I was eating," "I used the eat," "I ate," or "I did eat" depending on the context.<br><b class="bullet">&bull;</b> Please note that German past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context.</p>'),
          (personText =
            '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">German Conjugation with <b class="yellowText">Sie</b> and <b class="yellowText">sie</b></h3><p><b class="bullet">&bull;</b> The German subject pronoun <b class="yellowText">Sie</b> (uppercase S) is the formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The German subject pronoun <b class="yellowText">sie</b> (lowercase S), is the equivalent of "they" and "she".<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Sie</b> is the equivalent of "you", it is conjugated to the third person plural, not the second person. This can be confusing for English speakers, therefore, in this course the third person plural conjugation is simply copied for <b class="yellowText">Sie</b> and <b class="yellowText">sie</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Sie</b> is conjugated to the third person plural.</p>'));
var typeText,
  verbType = verbTypes[verbTypeNum % 3],
  verbTypeArray = [
    'Regular ',
    'Regular ',
    'Regular ',
    'Irregular ',
    'Irregular ',
    'Irregular ',
    'Slightly Irregular ',
    'Slightly Irregular ',
    'Slightly Irregular ',
    'Highly Irregular ',
    'Highly Irregular ',
    'Highly Irregular ',
  ];
if (void 0 === irregReason) var irregReason = [''];
('' == irregReason[0] &&
  (irregReason[0] =
    'This verb has an irregular conjugation pattern, please take more time to learn it.'),
  (typeText =
    verbTypeNum <= 3
      ? '<h3><img id="menuVerbImage" src="../../common/puzzle' +
        verbTypeNum +
        '.svg">' +
        verbTypeArray[verbTypeNum - 1] +
        verbType +
        ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> There are 3 main types of ' +
        lessonLanguage +
        ' verbs; verbs ending in ' +
        verbTypes[1] +
        ', in ' +
        verbTypes[2] +
        ', and ' +
        verbTypes[0] +
        '.<br><b class="bullet">&bull;</b> Regular verbs follow the regular rules of conjugation.<br><b class="bullet">&bull;</b> The endings are the same for every regular ' +
        verbType +
        ' verbs.<br><b class="bullet">&bull;</b> Learning the regular endings of ' +
        verbType +
        ' verbs is very powerful because it allows you to easily conjugate hundreds of verbs.</p>'
      : verbTypeNum >= 10
        ? '<h3><img id="menuVerbImage" src="../../common/puzzle' +
          verbTypeNum +
          '.svg">' +
          verbTypeArray[verbTypeNum - 1] +
          verbType +
          ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> There are 3 main types of ' +
          lessonLanguage +
          ' verbs; verbs ending in ' +
          verbTypes[1] +
          ', in ' +
          verbTypes[2] +
          ', and ' +
          verbTypes[0] +
          '.<br><b class="bullet">&bull;</b> Highly irregular verbs are by far the most challenging verbs to learn.<br><b class="bullet">&bull;</b> They do not follow the regular rules of conjugation, and do not have a repeating stem throughout the conjugation.<br><b class="bullet">&bull;</b> They have to be learned in detail, however, there are very few verbs like this.<br><b class="bullet">&bull;</b> Most highly irregular verbs are covered in detail in this course.</p>'
        : '<h3><img id="menuVerbImage" src="../../common/puzzle' +
          verbTypeNum +
          '.svg">' +
          verbTypeArray[verbTypeNum - 1] +
          verbType +
          ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> There are 3 main types of ' +
          lessonLanguage +
          ' verbs; verbs ending in ' +
          verbTypes[1] +
          ', in ' +
          verbTypes[2] +
          ', and ' +
          verbTypes[0] +
          '.<br><b class="bullet">&bull;</b> Regular verbs follow the regular rules of conjugation and endings are the same for all verbs of the same type.<br><b class="bullet">&bull;</b> ' +
          irregReason +
          '</p>'),
  'German' == lessonLanguage &&
    ((verbTypeArray = [
      'Regular (weak)',
      'Auxiliary',
      'Modal',
      'Irregular (mixed)',
      'Irregular (mixed)',
      'Irregular (mixed)',
      'Irregular (strong) ',
      'Irregular (strong) ',
      'Irregular (strong) ',
      'Highly Irregular ',
      'Highly Irregular ',
      'Highly Irregular ',
    ]),
    1 == verbTypeNum
      ? (typeText =
          '<h3><img id="menuVerbImage" src="../../common/puzzle' +
          verbTypeNum +
          '.svg">' +
          verbTypeArray[verbTypeNum - 1] +
          ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Regular verbs are also known as German weak verbs.<br><b class="bullet">&bull;</b> Weak verbs follow the regular rules of conjugation.<br><b class="bullet">&bull;</b> The endings are the same for every weak German verbs.<br><b class="bullet">&bull;</b> Learning the regular endings of German verbs is very powerful because it allows you to easily conjugate hundreds of verbs.</p>')
      : 2 == verbTypeNum
        ? (typeText =
            '<h3><img id="menuVerbImage" src="../../common/puzzle' +
            verbTypeNum +
            '.svg">' +
            verbTypeArray[verbTypeNum - 1] +
            ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Just like in English, the German language has a few “Auxiliary” verbs.<br><b class="bullet">&bull;</b> Auxiliary verbs are often used to modify another main verb and can even change the tense entirely.<br><b class="bullet">&bull;</b> In English, these verbs include “to have” (I have done) , “to be” (I am walking) and “to do” (I do agree).<br><b class="bullet">&bull;</b> All the important German Auxiliary verbs are covered in the “key verb” section of this course.<br><b class="bullet">&bull;</b> Unfortunately, these verbs are conjugated differently and must be learned separately.</p>')
        : 3 == verbTypeNum
          ? (typeText =
              '<h3><img id="menuVerbImage" src="../../common/puzzle' +
              verbTypeNum +
              '.svg">' +
              verbTypeArray[verbTypeNum - 1] +
              ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Just like in English, the German language has several “modal” verbs.<br><b class="bullet">&bull;</b> Modal verbs are often used to modify another main verb.<br><b class="bullet">&bull;</b> In English, these verbs include “can”, “could”, “may”, “might”, “will” and “would”.<br><b class="bullet">&bull;</b> Modal verbs are used to form all kinds of new meanings to the accompanied verb.<br><b class="bullet">&bull;</b> All the important German modal verbs are covered in the “key verb” section of this course.<br><b class="bullet">&bull;</b> Unfortunately, these verbs are conjugated differently and must be learned separately.</p>')
          : 4 == verbTypeNum
            ? (typeText =
                '<h3><img id="menuVerbImage" src="../../common/puzzle' +
                verbTypeNum +
                '.svg">' +
                verbTypeArray[verbTypeNum - 1] +
                ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Mixed verbs, like strong verbs, have changing vowels in the conjugation.<br><b class="bullet">&bull;</b> This is similar to English verbs like "to speak" which becomes "spoke" in the past instead of "speaked".<br><b class="bullet">&bull;</b> The changes in vowels are unpredictable in most mixed verbs, you will therefore need to learn each of those small changes for each individual mixed verb.<br><b class="bullet">&bull;</b> However, unlike strong verbs, the rest of the endings are the same as weak verbs.<br><b class="bullet">&bull;</b> Luckily there are very few mixed verbs in the German language.</p>')
            : 7 == verbTypeNum &&
              (typeText =
                '<h3><img id="menuVerbImage" src="../../common/puzzle' +
                verbTypeNum +
                '.svg">' +
                verbTypeArray[verbTypeNum - 1] +
                ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Irregular verbs are also known as German strong verbs.<br><b class="bullet">&bull;</b> Verbs of this group will have changing vowels in the conjugation.<br><b class="bullet">&bull;</b> This is similar to English verbs like "to speak" which becomes "spoke" in the past instead of "speaked".<br><b class="bullet">&bull;</b> The changes in vowels are unpredictable in most strong verbs, you will therefore need to learn each of those small changes for each individual strong verb.<br><b class="bullet">&bull;</b> A few other changes happens in the conjugation when the verbs are strong.<br><b class="bullet">&bull;</b> It is important to note that the past participle ends in "en" instead of the normal "t" ending of weak verbs.<br><b class="bullet">&bull;</b> There is also no endings for the first and third person of the narrative past.</p>')));
var pastText2 =
  '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the imperfect tense?</h3><p><b class="bullet">&bull;</b> In most cases, the imperfect is used when referring to something that was happening; it is the equivalent of the English Past Progressive (Continuous).</p><p>E.G. ' +
  pastEx2 +
  ' = I was going to the store.</p><p><b class="bullet">&bull;</b> It can also be used when referring to something that "used to be".</p><p>E.G. ' +
  pastEx2 +
  ' = I used to go to the store.</p><p><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change slightly with a different context.</p>';
'German' == lessonLanguage &&
  (pastText2 =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the narrative past (präteritum) tense?</h3><p><b class="bullet">&bull;</b> The narrative past is also known as "the simple past", "the imperfect" and "the preterite" tense.<br><b class="bullet">&bull;</b> The narrative past is primarily used in books, newspapers, and written texts.<br><b class="bullet">&bull;</b> The narrative past is the equivalent of all kinds of English forms.<br><b class="bullet">&bull;</b> For example, it could replace "I was eating," "I used the eat," "I ate," or "I did eat" depending on the context.<br><b class="bullet">&bull;</b> Please note that German past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context.</p>');
var proWarning =
    'Note:&nbsp;' +
    lessonLanguage +
    '&nbsp;subject&nbsp;pronouns&nbsp;are&nbsp;often&nbsp;omitted. However,&nbsp;to&nbsp;facilitate&nbsp;learning, ' +
    lessonLanguage +
    '&nbsp;subject&nbsp;pronouns are used more in this course than they would be used in real life.',
  puzzHTML =
    '<div id="puzzleTitle" class="selectOff"></div><div id="puzzle1A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz1AText" class="puzzTXT"></span></div><div id="puzzle1B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz1BText" class="puzzTXT2"></span></div><div id="puzzle2A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz2AText" class="puzzTXT"></span></div><div id="puzzle2B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz2BText" class="puzzTXT2"></span></div><div id="puzzle3A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz3AText" class="puzzTXT"></span></div><div id="puzzle3B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz3BText" class="puzzTXT2"></span></div><div id="puzzle4A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz4AText" class="puzzTXT"></span></div><div id="puzzle4B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz4BText" class="puzzTXT2"></span></div><div id="puzzle5A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz5AText" class="puzzTXT"></span></div><div id="puzzle5B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz5BText" class="puzzTXT2"></span></div><div id="puzzle6A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz6AText" class="puzzTXT"></span></div><div id="puzzle6B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz6BText" class="puzzTXT2"></span></div>',
  bookHTML =
    '<div class="books selectOff" id="book1"></div><div class="books selectOff" id="book2"></div><div class="books selectOff" id="book3"></div><div class="books selectOff" id="book4"></div><div class="books selectOff" id="book5"></div><div class="shelves" id="shelf1"><div class="booksB" id="book1B"></div><div class="shelvesLabel selectOff"></div></div><div class="shelves" id="shelf2"><div class="booksB" id="book2B"></div><div class="shelvesLabel selectOff"></div></div><div class="shelves" id="shelf3"><div class="booksB" id="book3B"></div><div class="shelvesLabel selectOff"></div></div><div class="shelves" id="shelf4"><div class="booksB" id="book4B"></div><div class="shelvesLabel selectOff"></div></div><div class="shelves" id="shelf5"><div class="booksB" id="book5B"></div><div class="shelvesLabel selectOff"></div></div>',
  dateFormat = (function () {
    var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
      t =
        /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      s = /[^-+\dA-Z]/g,
      n = function (e, t) {
        for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e;
        return e;
      };
    return function (i, r, o) {
      var a = dateFormat;
      if (
        (1 != arguments.length ||
          '[object String]' != Object.prototype.toString.call(i) ||
          /\d/.test(i) ||
          ((r = i), (i = void 0)),
        (i = i ? new Date(i) : new Date()),
        isNaN(i))
      )
        throw SyntaxError('invalid date');
      'UTC:' == (r = String(a.masks[r] || r || a.masks.default)).slice(0, 4) &&
        ((r = r.slice(4)), (o = !0));
      var l = o ? 'getUTC' : 'get',
        u = i[l + 'Date'](),
        c = i[l + 'Day'](),
        d = i[l + 'Month'](),
        m = i[l + 'FullYear'](),
        p = i[l + 'Hours'](),
        h = i[l + 'Minutes'](),
        g = i[l + 'Seconds'](),
        b = i[l + 'Milliseconds'](),
        v = o ? 0 : i.getTimezoneOffset(),
        f = {
          d: u,
          dd: n(u),
          ddd: a.i18n.dayNames[c],
          dddd: a.i18n.dayNames[c + 7],
          m: d + 1,
          mm: n(d + 1),
          mmm: a.i18n.monthNames[d],
          mmmm: a.i18n.monthNames[d + 12],
          yy: String(m).slice(2),
          yyyy: m,
          h: p % 12 || 12,
          hh: n(p % 12 || 12),
          H: p,
          HH: n(p),
          M: h,
          MM: n(h),
          s: g,
          ss: n(g),
          l: n(b, 3),
          L: n(b > 99 ? Math.round(b / 10) : b),
          t: 12 > p ? 'a' : 'p',
          tt: 12 > p ? 'am' : 'pm',
          T: 12 > p ? 'A' : 'P',
          TT: 12 > p ? 'AM' : 'PM',
          Z: o ? 'UTC' : (String(i).match(t) || ['']).pop().replace(s, ''),
          o:
            (v > 0 ? '-' : '+') +
            n(100 * Math.floor(Math.abs(v) / 60) + (Math.abs(v) % 60), 4),
          S: ['th', 'st', 'nd', 'rd'][
            u % 10 > 3 ? 0 : (((u % 100) - (u % 10) != 10) * u) % 10
          ],
        };
      return r.replace(e, function (e) {
        return e in f ? f[e] : e.slice(1, e.length - 1);
      });
    };
  })();
((dateFormat.masks = {
  default: 'ddd mmm dd yyyy HH:MM:ss',
  shortDate: 'm/d/yy',
  mediumDate: 'mmm d, yyyy',
  longDate: 'mmmm d, yyyy',
  fullDate: 'dddd, mmmm d, yyyy',
  shortTime: 'h:MM TT',
  mediumTime: 'h:MM:ss TT',
  longTime: 'h:MM:ss TT Z',
  isoDate: 'yyyy-mm-dd',
  isoTime: 'HH:MM:ss',
  isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
}),
  (dateFormat.i18n = {
    dayNames: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    monthNames: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  }),
  (Date.prototype.format = function (e, t) {
    return dateFormat(this, e, t);
  }),
  (function (e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'undefined' != typeof module && module.exports
        ? (module.exports = e(require('jquery')))
        : e(jQuery);
  })(function (e) {
    'use strict';
    function t(t) {
      return (
        !t.nodeName ||
        -1 !==
          e.inArray(t.nodeName.toLowerCase(), [
            'iframe',
            '#document',
            'html',
            'body',
          ])
      );
    }
    function s(t) {
      return e.isFunction(t) || e.isPlainObject(t) ? t : { top: t, left: t };
    }
    var n = (e.scrollTo = function (t, s, n) {
      return e(window).scrollTo(t, s, n);
    });
    return (
      (n.defaults = { axis: 'xy', duration: 0, limit: !0 }),
      (e.fn.scrollTo = function (i, r, o) {
        ('object' == typeof r && ((o = r), (r = 0)),
          'function' == typeof o && (o = { onAfter: o }),
          'max' === i && (i = 9e9),
          (o = e.extend({}, n.defaults, o)),
          (r = r || o.duration));
        var a = o.queue && 1 < o.axis.length;
        return (
          a && (r /= 2),
          (o.offset = s(o.offset)),
          (o.over = s(o.over)),
          this.each(function () {
            function l(t) {
              var s = e.extend({}, o, {
                queue: !0,
                duration: r,
                complete:
                  t &&
                  function () {
                    t.call(d, p, o);
                  },
              });
              m.animate(h, s);
            }
            if (null !== i) {
              var u,
                c = t(this),
                d = c ? this.contentWindow || window : this,
                m = e(d),
                p = i,
                h = {};
              switch (typeof p) {
                case 'number':
                case 'string':
                  if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                    p = s(p);
                    break;
                  }
                  p = c ? e(p) : e(p, d);
                case 'object':
                  if (0 === p.length) return;
                  (p.is || p.style) && (u = (p = e(p)).offset());
              }
              var g = (e.isFunction(o.offset) && o.offset(d, p)) || o.offset;
              (e.each(o.axis.split(''), function (e, t) {
                var s = 'x' === t ? 'Left' : 'Top',
                  i = s.toLowerCase(),
                  r = 'scroll' + s,
                  b = m[r](),
                  v = n.max(d, t);
                (u
                  ? ((h[r] = u[i] + (c ? 0 : b - m.offset()[i])),
                    o.margin &&
                      ((h[r] -= parseInt(p.css('margin' + s), 10) || 0),
                      (h[r] -=
                        parseInt(p.css('border' + s + 'Width'), 10) || 0)),
                    (h[r] += g[i] || 0),
                    o.over[i] &&
                      (h[r] += p['x' === t ? 'width' : 'height']() * o.over[i]))
                  : ((s = p[i]),
                    (h[r] =
                      s.slice && '%' === s.slice(-1)
                        ? (parseFloat(s) / 100) * v
                        : s)),
                  o.limit &&
                    /^\d+$/.test(h[r]) &&
                    (h[r] = 0 >= h[r] ? 0 : Math.min(h[r], v)),
                  !e &&
                    1 < o.axis.length &&
                    (b === h[r]
                      ? (h = {})
                      : a && (l(o.onAfterFirst), (h = {}))));
              }),
                l(o.onAfter));
            }
          })
        );
      }),
      (n.max = function (s, n) {
        var i = 'scroll' + (r = 'x' === n ? 'Width' : 'Height');
        if (!t(s)) return s[i] - e(s)[r.toLowerCase()]();
        var r = 'client' + r,
          o = (a = s.ownerDocument || s.document).documentElement,
          a = a.body;
        return Math.max(o[i], a[i]) - Math.min(o[r], a[r]);
      }),
      (e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop =
        {
          get: function (t) {
            return e(t.elem)[t.prop]();
          },
          set: function (t) {
            var s = this.get(t);
            if (t.options.interrupt && t._last && t._last !== s)
              return e(t.elem).stop();
            var n = Math.round(t.now);
            s !== n && (e(t.elem)[t.prop](n), (t._last = this.get(t)));
          },
        }),
      n
    );
  }));
