var loadingTime,
  oPath = '',
  oPath2 = '../',
  pre = '../../';
'androidSTORE' == osType &&
  ((oPath =
    'https://www.eliseunogueira.com.br/app/' +
    lessonLanguage +
    '/block/' +
    lessonNumber +
    '/'),
  (oPath2 =
    'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/block/'),
  (pre = 'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/'));
var buttonCreate3,
  forExamplesQuiz2 = [],
  engExamplesQuiz2 = [],
  imageArrayQuiz2 = [],
  quizSounds2 = [],
  quizMapArray2 = [],
  extraExamples = !0;
'OFF' ==
  localStorage.getItem(sessionStorage.userEmailSTORE + 'extraExamples') &&
  (extraExamples = !1);
var sType = soundType,
  cardCate = '|a',
  cardRaw = [],
  irregSpan = !0,
  prevBlockOn = !1;
if (void 0 !== forExamples) var forCopy = forExamples.join('#%#').split('#%#');
0 == lessonNumber && (btnColor = ['#118000', '#203e00', '#118000', '#203e00']);
var focused,
  alternateA1 = [
    'ça',
    'parceque',
    'parcequ’',
    'donc',
    'ensuite',
    'quand',
    'quand',
    'ma',
    'eccetto',
    'allora',
    'tra',
    'checosa',
    'cosa',
    'che',
    'después',
    'entre',
    'sobre',
    'deshalb',
    'deswegen',
    'darum',
    'weil',
    'da',
    'denn',
    'wieso',
    'incluso',
    'überallhin',
    'gar',
    'estceque',
    'que',
    'em cima',
    'mesmo',
    'logo',
    'oseu',
    'osseus',
    'asua',
    'assuas',
    'oteu',
    'osteus',
    'atua',
    'astuas',
    'omeu',
    'osmeus',
    'aminha',
    'asminhas',
    'onosso',
    'osnossos',
    'anossa',
    'asnossas',
    'ovosso',
    'osvossos',
    'avossa',
    'asvossas',
    'ceci',
    'cela',
  ],
  alternateA2 = [
    'cela',
    'car',
    'car',
    'alors',
    'puis',
    'lorsque',
    'lorsqu’',
    'però',
    'tranne',
    'dunque',
    'fra',
    'cosa',
    'che',
    'checosa',
    'luego',
    'en medio de',
    'en',
    'deswegen',
    'darum',
    'deshalb',
    'da',
    'denn',
    'weil',
    'warum',
    'aun',
    'überall',
    'überhaupt',
    'estcequ’',
    'qu’',
    'sobre',
    'até',
    'depois',
    'seu',
    'seus',
    'sua',
    'suas',
    'teu',
    'teus',
    'tua',
    'tuas',
    'meu',
    'meus',
    'minha',
    'minhas',
    'nosso',
    'nossos',
    'nossa',
    'nossas',
    'vosso',
    'vossos',
    'vossa',
    'vossas',
    'ça',
    'ça',
  ],
  alternateA3 = [
    'ceci',
    'parceque',
    "parcequ'",
    'donc',
    'ensuite',
    'quand',
    'ma',
    'eccetto',
    'allora',
    'tra',
    'checosa',
    'cosa',
    'che',
    'después',
    'entre',
    'sobre',
    'deshalb',
    'deswegen',
    'darum',
    'weil',
    'da',
    'denn',
    'wieso',
    'incluso',
    'überallhin',
    'gar',
    'em cima',
    'mesmo',
    'logo',
    'car',
    'alors',
    'puis',
    'lorsque',
    "lorsqu'",
    'però',
    'tranne',
    'dunque',
    'fra',
    'luego',
    'en medio de',
    'en',
    'deswegen',
    'darum',
    'deshalb',
    'da',
    'denn',
    'weil',
    'warum',
    'aun',
    'überall',
    'überhaupt',
    'sobre',
    'até',
    'depois',
    'puisque',
    "puisqu'",
  ];
function loadAudioCourse() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      window.location = '../../audio/index.html?block=' + lessonNumber;
    }, 100));
}
var quizPartI = [],
  quizPartII = [];
'Spanish' === lessonLanguage
  ? ((quizPartI = [4, 5, 6, 7, 14, 15, 16]),
    (quizPartII = [9, 10, 11, 12, 18, 19, 20]))
  : 'Portuguese' === lessonLanguage
    ? ((quizPartI = [5, 6, 7, 8, 15, 16, 17]),
      (quizPartII = [10, 11, 12, 13, 19, 20, 21]))
    : 'French' === lessonLanguage
      ? ((quizPartI = [5, 6, 7, 8, 15, 16, 17, 18, 19]),
        (quizPartII = [10, 11, 12, 13, 21, 22, 23, 24]))
      : 'Italian' === lessonLanguage
        ? ((quizPartI = [8, 9, 10, 11, 12, 19, 20, 21, 22]),
          (quizPartII = [14, 15, 16, 17, 23, 24, 25]))
        : 'German' === lessonLanguage &&
          ((quizPartI = [11, 12, 13, 14]), (quizPartII = [16, 17, 18]));
var greenBub = [],
  redBub = [],
  blueBub = [],
  orangeBub = [],
  yellowBub = [],
  violetBub = [],
  purpleBub = [],
  turquoiseBub = [],
  greyBub = [];
if (
  ('Spanish' === lessonLanguage
    ? ((greenBub = [
        1, 2, 4, 9, 14, 18, 22, 26, 31, 35, 39, 40, 43, 46, 50, 52, 56, 58, 60,
        66, 70, 71, 80, 89,
      ]),
      (blueBub = [
        3, 5, 10, 15, 19, 23, 27, 32, 36, 47, 51, 53, 61, 64, 65, 67, 76, 77,
        84, 85, 59, 82, 88,
      ]),
      (redBub = [
        6, 11, 16, 20, 24, 28, 33, 37, 45, 48, 49, 54, 62, 68, 73, 74, 79, 42,
        63,
      ]),
      (orangeBub = [12]),
      (yellowBub = [8, 13, 30, 34, 41, 57, 69, 72]),
      (violetBub = [7, 17, 21, 25, 29, 38, 55, 75, 81]),
      (purpleBub = [44, 83, 86, 87]),
      (turquoiseBub = [78]),
      (greyBub = []))
    : 'Portuguese' === lessonLanguage
      ? ((greenBub = [
          1, 2, 4, 5, 10, 15, 19, 23, 26, 31, 35, 39, 40, 41, 44, 47, 51, 53,
          57, 58, 60, 62, 68, 69, 73, 74, 83, 92,
        ]),
        (blueBub = [
          3, 6, 11, 16, 20, 24, 27, 32, 36, 45, 48, 52, 54, 61, 63, 66, 67, 70,
          79, 80, 85, 86, 87, 88,
        ]),
        (redBub = [
          7, 12, 17, 21, 28, 33, 37, 39, 43, 49, 50, 55, 64, 65, 71, 76, 77, 82,
        ]),
        (orangeBub = [13]),
        (yellowBub = [9, 14, 30, 34, 42, 46, 59, 72, 75]),
        (violetBub = [8, 18, 22, 25, 29, 38, 56, 78, 84]),
        (purpleBub = [89, 90, 91]),
        (turquoiseBub = [81]),
        (greyBub = []))
      : 'French' === lessonLanguage
        ? ((greenBub = [
            1, 3, 5, 10, 15, 21, 26, 31, 36, 40, 43, 46, 50, 53, 55, 58, 64, 72,
            73, 76, 82, 68, 72, 81, 90, 100,
          ]),
          (blueBub = [
            4, 6, 11, 16, 22, 27, 32, 37, 41, 47, 51, 52, 56, 59, 62, 65, 69,
            71, 74, 75, 79, 95, 96, 93,
          ]),
          (redBub = [
            7, 12, 17, 23, 28, 33, 38, 42, 48, 49, 54, 57, 60, 63, 70, 78, 85,
            89,
          ]),
          (orangeBub = [13, 29, 77, 44, 84]),
          (yellowBub = [2, 9, 14, 18, 24, 39, 67, 83, 20, 35, 45, 91, 99]),
          (violetBub = [8, 19, 25, 30, 34, 61, 86, 98, 66, 92]),
          (purpleBub = [80, 94, 97, 98]),
          (turquoiseBub = [87, 88]),
          (greyBub = []))
        : 'Italian' === lessonLanguage
          ? ((greenBub = [
              1, 14, 19, 23, 27, 30, 31, 37, 39, 44, 47, 50, 53, 59, 63, 64, 72,
              82, 83, 86, 3, 8, 58,
            ]),
            (blueBub = [
              4, 9, 15, 20, 24, 28, 32, 36, 40, 45, 51, 54, 60, 65, 70, 71, 73,
              77, 84, 88, 90, 91, 92, 94,
            ]),
            (redBub = [
              5, 10, 16, 21, 25, 29, 33, 41, 46, 52, 55, 61, 66, 74, 79, 85, 2,
            ]),
            (orangeBub = [17, 42, 48, 67, 80]),
            (yellowBub = [6, 22, 26, 35, 38, 49, 56, 69, 75, 81, 11, 13]),
            (violetBub = [7, 12, 18, 34, 43, 57, 62, 68, 76, 78, 87]),
            (purpleBub = [89, 92, 93]),
            (turquoiseBub = []),
            (greyBub = []))
          : 'German' === lessonLanguage &&
            ((greenBub = [
              1, 5, 9, 11, 16, 20, 23, 27, 31, 34, 37, 41, 45, 49, 52, 58, 63,
              69, 75, 76, 81, 82, 89, 90, 98, 102,
            ]),
            (blueBub = [
              2, 6, 10, 12, 17, 21, 24, 28, 32, 35, 38, 42, 46, 50, 53, 59, 64,
              70, 77, 84, 91, 92, 99, 101, 103, 105, 106, 108,
            ]),
            (redBub = [
              3, 7, 13, 18, 22, 25, 29, 33, 36, 39, 43, 47, 51, 54, 60, 65, 71,
              78, 85, 93, 100,
            ]),
            (yellowBub = [
              4, 8, 14, 19, 26, 30, 40, 44, 48, 55, 57, 61, 66, 68, 72, 74, 79,
              86, 87, 94,
            ]),
            (orangeBub = [95]),
            (violetBub = [15, 56, 62, 67, 73, 80, 88, 96, 97]),
            (turquoiseBub = [83]),
            (purpleBub = [104, 107]),
            (greyBub = [])),
  -1 !== greenBub.indexOf(lessonNumber))
)
  var btnColor = ['#118000', '#203e00', '#118000', '#203e00'];
else if (-1 !== orangeBub.indexOf(lessonNumber))
  btnColor = ['#bd5822', '#802a11', '#bd5822', '#802a11'];
else if (-1 !== yellowBub.indexOf(lessonNumber)) {
  btnColor = [
    '#2d3436',
    'rgba(15, 15, 15,0.9)',
    'rgba(19, 23, 23,0.95)',
    'rgba(10, 10, 10,0.95)',
  ];
  setTimeout(function () {
    ($('.ouinoButton2').addClass('makeYellow'),
      $('.ouinoButton').addClass('makeYellow2'),
      $('.timerMeter > .timerSpan').css({ background: '#f39c12', width: 0 }));
  }, 1e3);
} else if (-1 !== redBub.indexOf(lessonNumber))
  btnColor = ['#b51f1f', '#6e1313', '#b51f1f', '#6e1313'];
else if (-1 !== blueBub.indexOf(lessonNumber))
  btnColor = ['#0a5d90', '#063561', '#0a5d90', '#063561'];
else if (-1 !== violetBub.indexOf(lessonNumber))
  btnColor = ['#603273', '#31193b', '#603273', '#31193b'];
else if (-1 !== purpleBub.indexOf(lessonNumber))
  btnColor = ['#27488a', '#102557', '#27488a', '#102557'];
else if (-1 !== turquoiseBub.indexOf(lessonNumber))
  btnColor = ['#206d8a', '#0e3236', '#206d8a', '#0e3236'];
else if (-1 !== greyBub.indexOf(lessonNumber))
  btnColor = ['#474f52', '#2a3133', '#474f52', '#2a3133'];
if ('quiz' == quizLessonBoth) {
  var forExamples = forExamples1.slice(),
    engExamples = engExamples1.slice(),
    examplesNum = [];
  (examplesNum.push(forExamples1.length),
    'undefined' != typeof forExamples2 &&
      (examplesNum.push(forExamples2.length),
      (forExamples = forExamples.concat(forExamples2)),
      (engExamples = engExamples.concat(engExamples2))),
    'undefined' != typeof forExamples3 &&
      (examplesNum.push(forExamples3.length),
      (forExamples = forExamples.concat(forExamples3)),
      (engExamples = engExamples.concat(engExamples3))),
    'undefined' != typeof forExamples4 &&
      (examplesNum.push(forExamples4.length),
      (forExamples = forExamples.concat(forExamples4)),
      (engExamples = engExamples.concat(engExamples4))),
    'undefined' != typeof forExamples5 &&
      (examplesNum.push(forExamples5.length),
      (forExamples = forExamples.concat(forExamples5)),
      (engExamples = engExamples.concat(engExamples5))),
    'undefined' != typeof forExamples6 &&
      (examplesNum.push(forExamples6.length),
      (forExamples = forExamples.concat(forExamples6)),
      (engExamples = engExamples.concat(engExamples6))),
    'undefined' != typeof forExamples7 &&
      (examplesNum.push(forExamples7.length),
      (forExamples = forExamples.concat(forExamples7)),
      (engExamples = engExamples.concat(engExamples7))),
    'undefined' != typeof forExamples8 &&
      (examplesNum.push(forExamples8.length),
      (forExamples = forExamples.concat(forExamples8)),
      (engExamples = engExamples.concat(engExamples8))),
    'undefined' != typeof forExamples9 &&
      (examplesNum.push(forExamples9.length),
      (forExamples = forExamples.concat(forExamples9)),
      (engExamples = engExamples.concat(engExamples9))),
    'undefined' != typeof forExamples10 &&
      (examplesNum.push(forExamples10.length),
      (forExamples = forExamples.concat(forExamples10)),
      (engExamples = engExamples.concat(engExamples10))));
}
var wordChangeNum,
  wordChangeNum2,
  currentSection = 'Building Blocks',
  currentSecShort = 'block',
  quizTitle1 = 'MULTIPLE CHOICE',
  quizTitle2 = 'WRITE-A-WORD',
  quizTitle3 = 'FLUENCY SPRINT',
  currentProgram = 'Complete',
  errors = [],
  errorMode = !1,
  slidesPres = [10, 11, 12, 13, 14],
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
  ],
  FrenchChars = ['é', 'è', 'ê', 'ë', 'à', 'ç'],
  SpanishChars = ['á', 'é', 'í', 'ó', 'ú', 'ñ'],
  ItalianChars = ['à', 'é', 'è', 'ì', 'ò', 'ù'],
  GermanChars = ['ß', 'ä', 'ö', 'ü', 'ï', 'ë'],
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
  specialChars = window[lessonLanguage + 'Chars'],
  theExFl = forExamples.slice();
0 == lessonNumber && (theExFl = nums1);
var forExamplesQuiz = forExamples.slice(),
  engExamplesQuiz = engExamples.slice();
if ('both' == quizLessonBoth && 'undefined' != typeof forExamples1)
  ((forExamplesQuiz = forExamples1.slice()),
    (engExamplesQuiz = engExamples1.slice()));
for (
  var quizPossible = [],
    quizDescription1 =
      'This writing exercise is assisted. Choose a word in the list corresponding to the missing word in the sentence and type it in the field.',
    quizDescription2 =
      'Type in the word corresponding to the one missing in the sentence. No more guessing! Hints are available, but be careful, they cost valuable points...',
    quizDescription3 =
      'WARNING: This exercise is very difficult! Complete each question within the time given, no hints, no second chances. If you get a Fluency Award in this exercise, you are a real expert in this category!',
    numWords = engExamples.length,
    quizMapArray = [],
    numTT = 1;
  numTT <= forExamplesQuiz.length;
  numTT++
)
  quizMapArray.push(numTT);
quizMapArray = shuffle(quizMapArray);
for (var num = 0; num < quesToRemove.length; num++) {
  var position = quizMapArray.indexOf(quesToRemove[num]);
  ~position && quizMapArray.splice(position, 1);
}
var userName,
  currQuizNum,
  resetCode,
  userEmail,
  userEmail2,
  storeInfo,
  tuvm58dj,
  tuvm58dj2,
  fieldToUpdate,
  infoToUpdate,
  quizQuesNum,
  currentPts,
  quizCombinedArray = quizMapArray;
function loadQuizPrep() {
  var e;
  quizSounds = [];
  var t = lessonNumber - examplesNum.length;
  e = 1;
  for (var n = 1; n <= forExamples1.length; n++)
    (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  if (examplesNum.length >= 2) {
    ((t = lessonNumber - examplesNum.length + 1), (e = 1));
    for (n = 1; n <= forExamples2.length; n++)
      (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  }
  if (examplesNum.length >= 3) {
    ((t = lessonNumber - examplesNum.length + 2), (e = 1));
    for (n = 1; n <= forExamples3.length; n++)
      (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  }
  if (examplesNum.length >= 4) {
    ((t = lessonNumber - examplesNum.length + 3), (e = 1));
    for (n = 1; n <= forExamples4.length; n++)
      (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  }
  if (examplesNum.length >= 5) {
    ((t = lessonNumber - examplesNum.length + 4), (e = 1));
    for (n = 1; n <= forExamples5.length; n++)
      (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  }
  if (examplesNum.length >= 6) {
    ((t = lessonNumber - examplesNum.length + 5), (e = 1));
    for (n = 1; n <= forExamples6.length; n++)
      (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  }
  if (examplesNum.length >= 7) {
    ((t = lessonNumber - examplesNum.length + 6), (e = 1));
    for (n = 1; n <= forExamples7.length; n++)
      (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  }
  if (examplesNum.length >= 8) {
    ((t = lessonNumber - examplesNum.length + 7), (e = 1));
    for (n = 1; n <= forExamples8.length; n++)
      (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  }
  if (examplesNum.length >= 9) {
    ((t = lessonNumber - examplesNum.length + 8), (e = 1));
    for (n = 1; n <= forExamples9.length; n++)
      (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  }
  if (examplesNum.length >= 10) {
    ((t = lessonNumber - examplesNum.length + 9), (e = 1));
    for (n = 1; n <= forExamples10.length; n++)
      (quizSounds.push(oPath2 + t + '/sounds/sound' + e + soundType), e++, e++);
  }
  numWords = forExamples.length;
}
function loadPresentation() {
  ((buttonCreate = ''), (buttonCreate2 = ''));
  var e = 0;
  ((wordChangeNum = []), (wordChangeNum2 = []));
  for (var t = 0; t < forTitles.length; t++)
    ((buttonCreate =
      buttonCreate +
      '<button class="ouinoButton" id="buttonB' +
      e +
      '">' +
      forTitles[t] +
      '<br><i style="font-size:15px; font-weight: 300;">' +
      engTitles[t] +
      '</i></button>'),
      wordChangeNum.push(e),
      wordChangeNum2.push(e + exampleNums[t]),
      (e = e + exampleNums[t] + 1));
  ((fastSounds = []), (slowSounds = []), (quizSounds = []));
  for (var n = 1, o = 0; o < numWords; o++)
    (fastSounds.push(oPath + 'sounds/sound' + n + soundType),
      n++,
      slowSounds.push(oPath + 'sounds/sound' + n + soundType),
      n++);
  ((quizSounds = fastSounds.slice()), (n = 2));
  for (var r = 1, s = 0; s < forTitles.length; s++) {
    forExamples.splice(
      wordChangeNum[s],
      0,
      '<strong>' +
        forSideTitles[s]
          .split('<br>')
          .join("<em style='color: #333;'> / </em>") +
        '</strong>',
    );
    var a = engSideTitles[s].split('<br>').join(' / ');
    (')' == a.charAt(a.length - 1) &&
      (a = a
        .split('(')
        .join(
          "<span style='color: #505050; font-size: 0.8em; font-weight: 400;'>(",
        )
        .split(')')
        .join(')</span>')),
      engExamples.splice(wordChangeNum[s], 0, '<em>' + a + '</em>'),
      imageArray.splice(
        wordChangeNum[s],
        0,
        oPath + 'images/pic' + (wordChangeNum[s] + r) + '.jpg',
      ),
      r--,
      fastSounds.splice(
        wordChangeNum[s],
        0,
        oPath + 'sounds/title' + n + soundType,
      ),
      n++,
      slowSounds.splice(
        wordChangeNum[s],
        0,
        oPath + 'sounds/title' + n + soundType,
      ),
      n++);
  }
  0 === lessonNumber && (imageArray = combImage.slice());
  var l = [],
    u = [],
    c = [],
    d = [],
    m = 0,
    p = wordChangeNum.slice();
  if (
    (exampleNums.length >= 1 && (m = m + exampleNums[0] + 1),
    'undefined' != typeof forExtra1)
  )
    for (
      l = l.concat(forExtra1),
        u = u.concat(engExtra1),
        d = d.concat(imageExtra1),
        c = c.concat(fastExtra1),
        i = 0;
      i < forExtra1.length;
      i++
    ) {
      for (
        forExamples.splice(m, 0, forExtra1[i]),
          engExamples.splice(m, 0, engExtra1[i]),
          imageArray.splice(m, 0, imageExtra1[i]),
          fastSounds.splice(m, 0, fastExtra1[i] + sType),
          slowSounds.splice(m, 0, slowExtra1[i] + sType),
          m++,
          exampleNums[0] = exampleNums[0] + 1,
          g = 1;
        g < wordChangeNum.length;
        g++
      )
        wordChangeNum[g] = wordChangeNum[g] + 1;
      for (g = 0; g < wordChangeNum2.length; g++)
        wordChangeNum2[g] = wordChangeNum2[g] + 1;
    }
  if (
    (exampleNums.length >= 2 && (m = m + exampleNums[1] + 1),
    'undefined' != typeof forExtra2)
  )
    for (
      l = l.concat(forExtra2),
        u = u.concat(engExtra2),
        d = d.concat(imageExtra2),
        c = c.concat(fastExtra2),
        i = 0;
      i < forExtra2.length;
      i++
    ) {
      for (
        forExamples.splice(m, 0, forExtra2[i]),
          engExamples.splice(m, 0, engExtra2[i]),
          imageArray.splice(m, 0, imageExtra2[i]),
          fastSounds.splice(m, 0, fastExtra2[i] + sType),
          slowSounds.splice(m, 0, slowExtra2[i] + sType),
          m++,
          exampleNums[1] = exampleNums[1] + 1,
          g = 2;
        g < wordChangeNum.length;
        g++
      )
        wordChangeNum[g] = wordChangeNum[g] + 1;
      for (g = 1; g < wordChangeNum2.length; g++)
        wordChangeNum2[g] = wordChangeNum2[g] + 1;
    }
  if (
    (exampleNums.length >= 3 && (m = m + exampleNums[2] + 1),
    'undefined' != typeof forExtra3)
  )
    for (
      l = l.concat(forExtra3),
        u = u.concat(engExtra3),
        d = d.concat(imageExtra3),
        c = c.concat(fastExtra3),
        i = 0;
      i < forExtra3.length;
      i++
    ) {
      for (
        forExamples.splice(m, 0, forExtra3[i]),
          engExamples.splice(m, 0, engExtra3[i]),
          imageArray.splice(m, 0, imageExtra3[i]),
          fastSounds.splice(m, 0, fastExtra3[i] + sType),
          slowSounds.splice(m, 0, slowExtra3[i] + sType),
          m++,
          exampleNums[2] = exampleNums[2] + 1,
          g = 3;
        g < wordChangeNum.length;
        g++
      )
        wordChangeNum[g] = wordChangeNum[g] + 1;
      for (g = 2; g < wordChangeNum2.length; g++)
        wordChangeNum2[g] = wordChangeNum2[g] + 1;
    }
  if (
    (exampleNums.length >= 4 && (m = m + exampleNums[3] + 1),
    'undefined' != typeof forExtra4)
  )
    for (
      l = l.concat(forExtra4),
        u = u.concat(engExtra4),
        d = d.concat(imageExtra4),
        c = c.concat(fastExtra4),
        i = 0;
      i < forExtra4.length;
      i++
    ) {
      for (
        forExamples.splice(m, 0, forExtra4[i]),
          engExamples.splice(m, 0, engExtra4[i]),
          imageArray.splice(m, 0, imageExtra4[i]),
          fastSounds.splice(m, 0, fastExtra4[i] + sType),
          slowSounds.splice(m, 0, slowExtra4[i] + sType),
          m++,
          exampleNums[3] = exampleNums[3] + 1,
          g = 4;
        g < wordChangeNum.length;
        g++
      )
        wordChangeNum[g] = wordChangeNum[g] + 1;
      for (g = 3; g < wordChangeNum2.length; g++)
        wordChangeNum2[g] = wordChangeNum2[g] + 1;
    }
  if (
    (exampleNums.length >= 5 && (m = m + exampleNums[4] + 1),
    'undefined' != typeof forExtra5)
  )
    for (
      l = l.concat(forExtra5),
        u = u.concat(engExtra5),
        d = d.concat(imageExtra5),
        c = c.concat(fastExtra5),
        i = 0;
      i < forExtra5.length;
      i++
    ) {
      for (
        forExamples.splice(m, 0, forExtra5[i]),
          engExamples.splice(m, 0, engExtra5[i]),
          imageArray.splice(m, 0, imageExtra5[i]),
          fastSounds.splice(m, 0, fastExtra5[i] + sType),
          slowSounds.splice(m, 0, slowExtra5[i] + sType),
          m++,
          exampleNums[4] = exampleNums[4] + 1,
          g = 5;
        g < wordChangeNum.length;
        g++
      )
        wordChangeNum[g] = wordChangeNum[g] + 1;
      for (g = 4; g < wordChangeNum2.length; g++)
        wordChangeNum2[g] = wordChangeNum2[g] + 1;
    }
  if (
    (exampleNums.length >= 6 && (m = m + exampleNums[5] + 1),
    'undefined' != typeof forExtra6)
  )
    for (
      l = l.concat(forExtra6),
        u = u.concat(engExtra6),
        d = d.concat(imageExtra6),
        c = c.concat(fastExtra6),
        i = 0;
      i < forExtra6.length;
      i++
    ) {
      for (
        forExamples.splice(m, 0, forExtra6[i]),
          engExamples.splice(m, 0, engExtra6[i]),
          imageArray.splice(m, 0, imageExtra6[i]),
          fastSounds.splice(m, 0, fastExtra6[i] + sType),
          slowSounds.splice(m, 0, slowExtra6[i] + sType),
          m++,
          exampleNums[5] = exampleNums[5] + 1,
          g = 6;
        g < wordChangeNum.length;
        g++
      )
        wordChangeNum[g] = wordChangeNum[g] + 1;
      for (g = 5; g < wordChangeNum2.length; g++)
        wordChangeNum2[g] = wordChangeNum2[g] + 1;
    }
  if (
    (exampleNums.length >= 7 && (m = m + exampleNums[6] + 1),
    'undefined' != typeof forExtra7)
  )
    for (
      l = l.concat(forExtra7),
        u = u.concat(engExtra7),
        d = d.concat(imageExtra7),
        c = c.concat(fastExtra7),
        i = 0;
      i < forExtra7.length;
      i++
    ) {
      for (
        forExamples.splice(m, 0, forExtra7[i]),
          engExamples.splice(m, 0, engExtra7[i]),
          imageArray.splice(m, 0, imageExtra7[i]),
          fastSounds.splice(m, 0, fastExtra7[i] + sType),
          slowSounds.splice(m, 0, slowExtra7[i] + sType),
          m++,
          exampleNums[6] = exampleNums[6] + 1,
          g = 7;
        g < wordChangeNum.length;
        g++
      )
        wordChangeNum[g] = wordChangeNum[g] + 1;
      for (g = 6; g < wordChangeNum2.length; g++)
        wordChangeNum2[g] = wordChangeNum2[g] + 1;
    }
  if (
    (exampleNums.length >= 8 && (m = m + exampleNums[7] + 1),
    'undefined' != typeof forExtra8)
  )
    for (
      l = l.concat(forExtra8),
        u = u.concat(engExtra8),
        d = d.concat(imageExtra8),
        c = c.concat(fastExtra8),
        i = 0;
      i < forExtra8.length;
      i++
    ) {
      for (
        forExamples.splice(m, 0, forExtra8[i]),
          engExamples.splice(m, 0, engExtra8[i]),
          imageArray.splice(m, 0, imageExtra8[i]),
          fastSounds.splice(m, 0, fastExtra8[i] + sType),
          slowSounds.splice(m, 0, slowExtra8[i] + sType),
          m++,
          exampleNums[7] = exampleNums[7] + 1,
          g = 8;
        g < wordChangeNum.length;
        g++
      )
        wordChangeNum[g] = wordChangeNum[g] + 1;
      for (g = 7; g < wordChangeNum2.length; g++)
        wordChangeNum2[g] = wordChangeNum2[g] + 1;
    }
  for (var g = wordChangeNum.length - 1; g >= 0; g--)
    buttonCreate = buttonCreate
      .split('id="buttonB' + p[g] + '"')
      .join('id="buttonB' + wordChangeNum[g] + '"');
  for (g = 0; g < c.length; g++) c[g] = c[g] + sType;
  ((forExamplesQuiz2 = l.slice()),
    (engExamplesQuiz2 = u.slice()),
    (imageArrayQuiz2 = d.slice()),
    (quizSounds2 = c.slice()),
    (numWords = forExamples.length));
  for (var h = 0; h < forTitles.length; h++)
    '' != narration[h] &&
      (buttonCreate2 =
        buttonCreate2 +
        '<div id="narraBtn' +
        wordChangeNum[h] +
        '" class="ouinoButton2 narraBtns"></div>');
  buttonCreate3 = '';
  for (t = 0; t < forExamples.length; t++)
    -1 == l.indexOf(forExamples[t])
      ? ((buttonCreate2 =
          buttonCreate2 +
          '<div id="button' +
          t +
          '" class="ouinoButton2"></div>'),
        !0)
      : (buttonCreate3 =
          buttonCreate3 +
          '<div id="button' +
          t +
          '" class="ouinoButton2 extraBtn"></div>');
}
function buttonClicked() {
  ((sideClicked = !1),
    (picControl = 'picFade'),
    (narrPlayed =
      'n' != $(this).attr('id').charAt(0) &&
      'B' != $(this).attr('id').charAt(6)),
    (currentWordNum = $(this)
      .attr('id')
      .split('narraBtn')
      .join('')
      .split('buttonB')
      .join('')
      .split('button')
      .join('')),
    (currentWordNum = parseInt(currentWordNum)),
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
        : $('#quizContent').css({ height: '610px' }));
    var e = $('#quizContent').width(),
      t = $('#quizContent').height();
    if (
      (screenRatio >= 0.85
        ? $('.chooseQuizIcon').css({
            height: 0.4 * t - 75 + 'px',
            width: 'auto',
          })
        : $('.chooseQuizIcon').css({ width: 0.35 * e + 'px', height: 'auto' }),
      (viewportHeight = $('body').height() - 45) > 650 && screenRatio > 1
        ? (spaceLeft = 520)
        : (spaceLeft = viewportHeight - 130),
      viewportHeight <= 700
        ? $('#lightTimerDiv').css({ width: viewportHeight / 4 + 'px' })
        : $('#lightTimerDiv').css({ width: '190px' }),
      $('body').hasClass('notch') &&
        ($('#quizTxt1').show(), $('#quizTxt2').show()),
      $('body').hasClass('notch') && (spaceLeft -= 45),
      $('body').hasClass('android') && (spaceLeft -= 20),
      screenRatio > 1
        ? ((spaceLeft -= 20),
          $('#quizAllItemsC, #quizWriteImg').css({
            height: 0.95 * spaceLeft + 'px',
            'margin-top': '28px',
            position: 'relative',
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
            'margin-right': '2%',
            'margin-left': '2%',
          }),
          $('#quizWriteImg').css({
            height: 0.47 * spaceLeft + 'px',
            bottom: '5px',
            position: 'absolute',
          }),
          $('#quizAllItemsC').css({
            height: 0.52 * spaceLeft + 'px',
            'margin-top': '30px',
          }),
          $('#writeAnswerBoard').css({
            height: 0.54 * spaceLeft - 160 + 'px',
          })),
      1 == currentQuiz)
    ) {
      $('.possWord').css({ width: 0.99 * $('#quizAllItemsC').width() + 'px' });
      var n =
        $('#quizSentenceEng').outerHeight() +
        $('#quizSentenceFor').outerHeight();
      $('body').hasClass('notch') && n > 90
        ? ($('.possWord').css({
            height: $('#quizAllItemsC').height() / 4 - 12 + 'px',
          }),
          $('#quizAllItemsC').css({ 'margin-top': '12px' }))
        : ($('.possWord').css({
            height: $('#quizAllItemsC').height() / 4 - 4 + 'px',
          }),
          $('#quizAllItemsC').css({ 'margin-top': '28px' }));
    }
    ($('body').hasClass('notch') && $('#quizWriteImg').css({ bottom: '-5px' }),
      setTimeout(function () {
        resizeQuizText();
      }, 20));
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
    var e;
    ($('#startCover').css({ height: $('html').innerHeight() + 'px' }),
      resizeBlockMenu(),
      (viewportHeight = $('body').height() - 45),
      (viewportWidth = $('html').innerWidth()),
      (e = $('html').width() / $('html').height()));
    var t = viewportHeight - 30;
    ($('body').hasClass('notch') && (t -= 50),
      $('body').hasClass('android') && (t -= 20),
      $('body').hasClass('notch') &&
        $('.menuBlock').css({ height: t - 15 + 'px' }),
      viewportWidth < 600
        ? ($('.menuItem').css({ 'font-size': '15px' }),
          $('.menuItemDescription').css({ 'font-size': '11px' }))
        : ($('.menuItem').css({ 'font-size': '17px' }),
          $('.menuItemDescription').css({ 'font-size': '14px' })),
      viewportWidth >= 850 ? $('.menuLogo').show() : $('.menuLogo').hide(),
      e < 1 && $('html').width() != $('html').height()
        ? ($('.ouinoContent').addClass('portrait'),
          $('.ouinoContent').css({ height: t + 'px' }),
          $('.ouinoButton').css({ height: '50px' }),
          $('.ouinoButton i').hide(),
          $('.buttonContainer').css({ height: '56px' }),
          $('.shinyPicture').css({ width: '100%', height: t - 475 + 'px' }),
          $('.wordSentenceB').css({
            width: '100%',
            height: '190px',
            top: t - 207 + 'px',
          }),
          $('.shinyPicture').addClass('noMaxHeight'))
        : e >= 1 &&
          ($('.shinyPicture').removeClass('noMaxHeight'),
          $('.shinyPicture').css({ width: '58%' }),
          $('.wordSentenceB').css({ width: '41.2%' }),
          $('.ouinoContent').removeClass('portrait'),
          $('.ouinoContent').css({ height: t + 'px' }),
          viewportHeight >= 730
            ? ($('.shinyPicture').css({
                height: '400px',
                top: '105px',
                bottom: 'auto',
              }),
              $('.wordSentenceB').css({
                height: '390px',
                top: '105px',
                bottom: 'auto',
                left: 'auto',
                right: '0',
                'max-height': '440px',
              }),
              $('.buttonContainer').css({ height: '96px' }),
              $('.ouinoButton').css({ height: '90px' }),
              $('.ouinoButton i').show())
            : viewportHeight >= 705
              ? ($('.shinyPicture').css({
                  height: t - 300 + 'px',
                  top: '105px',
                  bottom: 'auto',
                }),
                $('.wordSentenceB').css({
                  height: t - 310 + 'px',
                  top: '105px',
                  bottom: 'auto',
                  left: 'auto',
                  right: '0',
                  'max-height': '440px',
                }),
                $('.buttonContainer').css({ height: '96px' }),
                $('.ouinoButton').css({ height: '90px' }),
                $('.ouinoButton i').show())
              : ($('.shinyPicture').css({
                  height: t - 280 + 'px',
                  top: '85px',
                  bottom: 'auto',
                }),
                $('.wordSentenceB').css({
                  height: t - 290 + 'px',
                  top: '85px',
                  bottom: 'auto',
                  left: 'auto',
                  right: '0',
                  'max-height': 'none',
                }),
                $('.buttonContainer').css({ height: '86px' }),
                $('.ouinoButton').css({ height: '70px' }),
                $('.ouinoButton i').hide())),
      $('#endWrap').is(':visible') &&
        (viewportHeight >= 700
          ? $('#learningTip').show()
          : $('#learningTip').hide()),
      resizeText(),
      resizeTitle());
  }
}
function resizeTitle() {
  if (
    ($('.menuTitleContainer').text(lessonTitle), $('html').innerWidth() < 550)
  )
    lessonTitle.length > 41 &&
      $('.menuTitleContainer').text(lessonTitle.slice(0, 36) + '...');
  else
    for (
      var e = $('.menuBtnContainer').width(),
        t = $('.menuTitleContainer').width(),
        n = $('.smallLogo').width(),
        o = viewportWidth - (n + t + e);
      o < 60 && $('.menuTitleContainer').text().length > 6;
    ) {
      var i = $('.menuTitleContainer').text().slice(0, -4);
      ((i = (i = i.concat('...')).split(' ...').join('...')),
        $('.menuTitleContainer').html(i),
        (t = $('.menuTitleContainer').width()),
        (o = viewportWidth - (n + t + e)));
    }
}
var currentErrors,
  userInfo,
  timerTime,
  soundRepeated,
  blockExNum,
  knowledgeStars,
  restartedLesson,
  quizScores,
  pauseTwo,
  theFont,
  registerLoaded,
  passwordLoaded,
  viewportHeight,
  viewportWidth,
  currentMusic,
  picControl,
  wordTimer,
  mySound,
  madeError,
  buttonCreate,
  buttonCreate2,
  fastSounds,
  slowSounds,
  quizSounds,
  foundArticle,
  quizGoodAnswer,
  quizGoodPunct,
  arrowClicks,
  writtenString,
  timerWait,
  charsToAdd,
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
  audioSprite,
  currentSprite,
  onTimeUpdate,
  submitted,
  quizNumQues,
  playSprite,
  fastOrSlow,
  imageArrayQuiz,
  titlePlay = !0,
  fastOverwrite = !1,
  sideClicked = !1,
  narrPlayed = !1,
  tabletMusic = !1,
  currentWordNum = 0,
  picToggle = 1,
  soundPlaying = !1,
  soundLessonEvent = !1,
  soundQuizEvent = !1,
  soundSlideEvent = !1,
  checkAccent = !1,
  quizPtsCount = 65,
  disableTimer = !1,
  quizLoaded = !1,
  timerLength = 3e3,
  numberLength = 7e3,
  blockTitle = !1,
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
  OGXpV = '.com.br',
  loginAppend =
    '<header id="loginCover" class="wrapper"><div id="loginCenter" class="optionsIn gradientColor alignVerticalWin"><img class="letterLogo" src="../../common/letterLogo.svg"><form autocomplete="off" id="loginForm"><table class="loginTable"><tr><th colspan="2"><h3 id="loginTitle" class="loginTitle">Ouino Account Login</h3></th></tr><tr><td colspan="2"><input type="email" id="emailField" required class="loginField" placeholder="Email Address"/></td></tr><tr><td colspan="2"><input type="password" id="jguyr4" required class="loginField" maxlength="12" placeholder="Password"/><h5 id="loginForgot" class="smallerUnderline">Forgot password?</h5></td></tr><tr><td><h5 id="loginRemember" class="loginRemember"><img src="../../common/checkOff.svg" id="rememberCheck" class="rememberCheck"/>Remember me</h5></td><td><input type="submit" class= "loginOptions gradientColor2 loginSubmit" value="Log in"></td></tr><tr><td colspan="2"><h5 id="loginBottom" class="smallUnderline">Don\'t have an account yet? Create one.</h5></td></tr></table></form></div><div id="loginOffline" class="optionsIn gradientColor alignVerticalWin"><table class="offlineTable"><tr><th width="15%"><img class="warningLogo" src="../../common/warning.svg"></th><td colspan="2"><h3 class="offlineTitle">CURRENTLY OFFLINE</h3><p class="offlineWord">You are currently offline. An internet connection is required to sync progress between devices. Your progress will be saved locally for now. Simply restart the program when an internet connection is available in order to sync your progress with the server.</td></tr></table><table class="offlineTable2"><tr><td width="60%"><h5 id="offlineRemember" class="loginRemember"><img src="../../common/checkOff.svg" id="offlineCheck" class="rememberCheck"/>Do not show again.</h5></td><td><input type="submit" class= "loginOptions gradientColor2" value="Start Lesson" id="offlineButton"></td></tr></table></div></header><div id="warningWrap" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><table class="messageTable"><tr><td><h2 class="messageTitle"><img class="messageCheck" src="../../common/success.svg">Account Created!</h2></td></tr><tr><td><h4 id="accountsLeft"></h4><p id="accountsText"></p></td></tr><tr><td><h5 id="loginRemember2" class="loginRemember"><img src="../../common/checkOff.svg" id="rememberCheck2"/>Remember new account on this computer.</h5></td></tr></table><table class="registerButtons tenPxPad"><tr><td class="registerButton"><input type="button" class= "loginOptions gradientColor2" value="Go back" id="doneRegisterBtn2"></td><td><input type="submit" class= "loginOptions gradientColor2" value="Log in" id="doneLogInBtn"></td></tr></table></div></div><header id="registerCover" class="wrapper2"> <div id="registerCenter" class="optionsIn gradientColor alignVerticalWin"><h2 class="registerTitle">Create a Ouino Account</h2><form autocomplete="off" id="registerForm"><table class="registerTable"><tr><td colspan="3"><h2 id="activationText" class="centerMenuItems registerText">Enter your activation key.<a name="You should have received an email with your activation key at the time of purchase. If you\'ve purchased the retail box, your activation key should be located in your package." class="tooltip"><img src="../../common/question.svg" class="questionMark" /></a></h2><input type="input" id="activationField" required class="registerField activationField" placeholder="Activation Key"/></td></tr><tr><td colspan="3"><h2 id="accountCreateText" class="centerMenuItems registerText">Create your login information.<a name="Enter the information you want to use to log into your Ouino Languages account." class="tooltip"><img src="../../common/question.svg" class="questionMark" /></a></h2><input type="name" id="nameFieldSet" required class="registerField" placeholder="Full Name"/></td></tr><tr><td><input type="email" id="emailFieldSet" required class="rgField1" placeholder="Email Address"/></td><td><input type="password" id="jguyr4Set" required class="rgField1" maxlength="12" placeholder="Create a password"/></td></tr><tr><td><input type="email" id="emailFieldSet2" required class="rgField2" placeholder="Confirm Email"/></td><td><input type="password" id="jguyr4Set2" required class="rgField2" maxlength="12" placeholder="Confirm password"/></td></tr></table><table class="registerTable"><tr><td><input type="button" id="doneRegisterBtn" class="loginOptions gradientColor2" value="Go back"></td><td><input type="submit" class="loginOptions gradientColor2" value="Create Account"></td></tr></table></form></div></header><div id="passwordWrap" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><form autocomplete="off" id="passwordForm" class="alignVerticalItem"><table height="50%" class="messageTable"><tr><td colspan="2"><h3 id="passwordTitle" class="loginTitle">Account Password Reset</h3><input type="email" id="emailFieldReset" required class="loginField" placeholder="Enter your registered email address"/></td></tr><tr><td class="registerButton"><input type="button" class="loginOptions gradientColor2" value="Go back" id="hidePasswordBtn"></td><td><input type="submit" class= "loginOptions gradientColor2" value="Get Reset Code"></td></tr><tr><td colspan="2"><h5 id="passwordSkipBtn" class="smallUnderline">Already have a reset code? Skip this step.</h5></td></tr></table></form></div></div><div id="passwordReset" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><form autocomplete="off" id="passwordForm2" class="alignVerticalItem"><table class="messageTable"><tr><td colspan="2"><h3 id="passwordTitle2" class="loginTitle">Account Password Reset</h3><p>Email with reset code sent successfully! Please enter the reset code in the field below, followed by your new password.</p></td></tr><tr><td colspan="2"><input type="input" id="resetCodeField" required class="registerField" placeholder="Enter the reset code"/></td></tr><tr><td><input type="password" id="jguyr4Reset" required class="rgField2" maxlength="12" placeholder="Create a password"/></td><td><input type="password" id="jguyr4Reset2" required class="rgField2" maxlength="12" placeholder="Confirm password"/></td></tr><tr><td class="registerButton"><input type="button" class="loginOptions gradientColor2" value="Go back" id="hidePasswordBtn2"></td><td><input type="submit" class= "loginOptions gradientColor2" value="Reset Password"></td></tr></table></form></div></div><div id="warningWrap2" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><table class="messageTable alignVerticalItem max300"><tr><td colspan="3"><h2 class="messageTitle"><img class="messageCheck" src="../../common/success.svg">Password updated!</h2></td></tr><tr><td colspan="3"><p>Your password has been updated successfully and a confirmation email has been sent.</p></td></tr><tr><td width="35%"></td><td><input type="button" class="loginOptions gradientColor2" value="Okay" id="doneRegisterBtn3"></td><td width="35%"></td></tr></table></div></div>',
  mainHTML =
    '<div id="loadLogo" style="display: none; opacity: 0.9; border-radius: 10px; cursor: default; padding: 40px; background: black; z-index: 2000; position: fixed; width: 100px; height: 30px; margin: auto auto; left:0; right: 0; top: 0; bottom:0; font-size: 22px; font-weight: bold; color: white;">LOADING...</div><section id="slideCont"><img id="slideImg" src=""/><div id="slideText"></div><div class="slideBtn1">Okay</div><div class="slideBtn2">Don\'t show me tips</div></section><div id="fontPreload1"></div><div id="fontPreload2"></div><div id="fontPreload3"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel"></b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><span class="menuTitleContainer alignVerticalItem"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><img id="keyboardBtn" src="../../common/keyboard2.svg" class="smallIcon" style="display:none;"/><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I\'m confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoBlock.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><div class="menuBlock"><div class="closeWinBtn"></div><div id="menuBlockContent"></div></div><div id="menuBlockWrap"></div><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio>',
  lessonAppend =
    '<div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><div id="extraSwitch"><label class="toggle-control"><input type="checkbox"><span class="control"></span></label><p>Extra Examples?</p></div><main class="ouinoContent"><section class="wordSentenceB"><div id="extraOn"></div><div id="extraOff"></div><div class="wordSentenceInB alignVerticalItem"> <div id="slowBubble2" class="slowBubble"></div><div class="textWrap3B"> <h6 class="disSentenceB">-Text Disabled-</h6> </div><div class="textWrapB"> <h6 class="forSentenceB"></h6> </div><div class="textWrap2B"> <h6 class="engSentenceB">When</h6> </div></div><div id="roundButtonsOut"> <div id="roundButtons"></div><br><div id="roundButtons2"></div></div></section> <section class="wordSentence"> <h6 class="narrSentence alignVerticalItem"></h6> <div class="wordSentenceIn alignVerticalItem"> <div id="slowBubble1" class="slowBubble"></div><div class="textWrap3"> <h6 class="disSentence">-Text Disabled-</h6> </div><div class="textWrap"> <h6 class="forSentence"></h6> </div><br><div class="textWrap2"> <h6 class="engSentence"></h6> </div></div></section> <figure class="shinyPicture"><div class="engToggle"></div><div class="insight"></div><div id="flashCard"></div><div id="flashCard2"></div><div id="sideNote"></div><figure class="arrowControl"> <div class="leftArrow"></div><div class="rightArrow"></div><div id="middleSwipe"></div></figure> <figure class="mainPic2" alt="mainImage"></figure> <figure class="mainPic1" alt="mainImage"></figure> <img class="whiteBack" src="../../common/white.jpg" alt="mainImage"></figure> <aside class="buttonContainer" style="-webkit-overflow-scrolling: touch;"></aside> <div class="buttonWrap"></div></main>',
  quizAppend =
    '<div id="wrongAnswerPic"> <div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"> <div id="goodAnswerIn"></div></div><img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><table id="quizBlock" class="gradientColor"> <tr> <th colspan="2" style="font-size:30px;">Building Blocks Quiz</th> </tr><tr> <td id="sideQuizIcon"></td><td style="padding: 20px 10px 20px 30px;">This&nbsp;quiz&nbsp;contains&nbsp;questions&nbsp;for&nbsp;all<br><b id="typeOfBlock" class="yellowText">conjunctions</b>&nbsp;lessons.<br><br>It&nbsp;is&nbsp;recommended&nbsp;that&nbsp;you&nbsp;take&nbsp;all<br>these&nbsp;lessons&nbsp;before&nbsp;taking&nbsp;the&nbsp;quiz.<br><br>If you are ready for this challenge, click&nbsp;on&nbsp;"continue"&nbsp;below!</td></tr><tr> <td id="quizBlockContinue" colspan="2"><div class="wrapBtn">CONTINUE</div></td></tr></table><img id="quizGoBack" src="../../common/menuIcon1.svg"> <table id="quizDone" > <tr> <th colspan="2" id="quizDoneTitle"></th> </tr><tr> <td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr> <td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp; <p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr> <td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div><span class="addQuizFlash"><img src="../../flash/images/cards.svg"/> Add Errors to Flash Cards</span></td></tr></table> <div id="quizScoreBack"> <div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"> <div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizItself"> <div id="quizSentenceContainer"> <div class="quizSentenceWrap"> <span id="quizSentenceFor"></span><br> <span id="quizSentenceEng"></span> </div></div><div class="textWrap5"></div><div id="quizAllItemsC"><div id="possibleDiv"><span id="possibleDivIn"></span></div> <div id="quizTimer2"><div id="quizTimerPointer2"><img id="quizTimerImage2" src="../../common/timerPointer2.svg"></div><div id="quizTimerGood2"></div><div id="quizTimerBad2"></div></div><div id="hintTable"> <div id="hint1" class="boardBottom"> </div><div id="hint2" class="boardBottom"> </div><div id="hint3" class="boardBottom"> </div></div> <form id="answerForm" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" novalidate></form> <div id="writeAnswerBoard"> <table id="boardTable" style="margin-top: 10px;"><tr id="specialChars"> <td id="char1" class="boardChar"></td><td id="char2" class="boardChar"></td><td id="char3" class="boardChar"></td><td id="char4" class="boardChar"></td><td id="char5" class="boardChar"></td><td id="char6" class="boardChar"></td></tr><tr> <td colspan="6" id="writeError"></td></tr><tr> <td colspan="6" id="boardMain"><span id="writtenAnswer"></span></td></tr><tr> <td colspan="6" id="writeError2">CONTINUE</td></tr></table> </div></div><div id="quizWriteImg"><b></b><img id="wrongLogo1" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo2" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo3" class="wrongLogo" src="../../common/strike.svg"></div></div><table id="quizPreload"> <tr> <th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th> </tr><tr> <td id="quizPreloadMedal"></td></tr><tr> <td id="quizPreloadStart">START NOW</td></tr></table> <div id="quizStart"> <div id="quizStartImg"> <div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div><table id="quizMenu"> <tr> <th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th> </tr><tr> <td id="quizBtn1" class="quizType"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">MULTIPLE CHOICE</h2> <img class="chooseQuizIcon" src="../../common/quizblock1.svg"/> <h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">WRITE-A-WORD</h2> <img class="chooseQuizIcon" src="../../common/quizblock2.svg"/> <h2 class="chooseQuizText2">Difficulty: Challenging</h2></td></tr><tr> <td colspan="2" id="quizBtn3" class="quizType"><div id="sMedal3" class="smallMedal"></div><h2 class="chooseQuizText">FLUENCY SPRINT</h2> <img class="chooseQuizIcon" src="../../common/quizblock3.svg"/> <h2 class="chooseQuizText2">Difficulty: Fluent</h2></td></tr></table></main>',
  imageArray = [];
if ('quiz' != quizLessonBoth) {
  imageArray = [oPath + 'images/pic1.jpg'];
  for (num = 2; num < numWords + 1; num++)
    imageArray.push(oPath + 'images/pic' + num + '.jpg');
  if (
    ((imageArrayQuiz = imageArray.slice()),
    'Le preposizioni articolate (Prepositional contractions)' == lessonTitle)
  ) {
    imageArrayQuiz = [];
    for (var numW = 1; numW <= imageArray.length; numW++)
      imageArrayQuiz.push(oPath + 'images/pic0.jpg');
  }
} else {
  imageArray = [];
  var getLesson = lessonNumber - examplesNum.length;
  for (num = 1; num <= forExamples1.length; num++)
    imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  if (examplesNum.length >= 2) {
    getLesson = lessonNumber - examplesNum.length + 1;
    for (num = 1; num <= forExamples2.length; num++)
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  if (examplesNum.length >= 3) {
    getLesson = lessonNumber - examplesNum.length + 2;
    for (num = 1; num <= forExamples3.length; num++)
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  if (examplesNum.length >= 4) {
    getLesson = lessonNumber - examplesNum.length + 3;
    for (num = 1; num <= forExamples4.length; num++)
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  if (examplesNum.length >= 5) {
    getLesson = lessonNumber - examplesNum.length + 4;
    for (num = 1; num <= forExamples5.length; num++)
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  if (examplesNum.length >= 6) {
    getLesson = lessonNumber - examplesNum.length + 5;
    for (num = 1; num <= forExamples6.length; num++)
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  if (examplesNum.length >= 7) {
    getLesson = lessonNumber - examplesNum.length + 6;
    for (num = 1; num <= forExamples7.length; num++)
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  if (examplesNum.length >= 8) {
    getLesson = lessonNumber - examplesNum.length + 7;
    for (num = 1; num <= forExamples8.length; num++)
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  if (examplesNum.length >= 9) {
    getLesson = lessonNumber - examplesNum.length + 8;
    for (num = 1; num <= forExamples9.length; num++)
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  if (examplesNum.length >= 10) {
    getLesson = lessonNumber - examplesNum.length + 9;
    for (num = 1; num <= forExamples10.length; num++)
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  imageArrayQuiz = imageArray.slice();
}
if ('quiz' != quizLessonBoth) loadPresentation();
else {
  if (extraExamples) {
    var allExtra = [],
      allEnglish = [],
      allSounds = [],
      allImages = [];
    for (
      'undefined' != typeof forExtra1 &&
        ((allExtra = allExtra.concat(forExtra1)),
        (allEnglish = allEnglish.concat(engExtra1)),
        (allImages = allImages.concat(imageExtra1)),
        (allSounds = allSounds.concat(fastExtra1))),
        'undefined' != typeof forExtra2 &&
          ((allExtra = allExtra.concat(forExtra2)),
          (allEnglish = allEnglish.concat(engExtra2)),
          (allImages = allImages.concat(imageExtra2)),
          (allSounds = allSounds.concat(fastExtra2))),
        'undefined' != typeof forExtra3 &&
          ((allExtra = allExtra.concat(forExtra3)),
          (allEnglish = allEnglish.concat(engExtra3)),
          (allImages = allImages.concat(imageExtra3)),
          (allSounds = allSounds.concat(fastExtra3))),
        'undefined' != typeof forExtra4 &&
          ((allExtra = allExtra.concat(forExtra4)),
          (allEnglish = allEnglish.concat(engExtra4)),
          (allImages = allImages.concat(imageExtra4)),
          (allSounds = allSounds.concat(fastExtra4))),
        'undefined' != typeof forExtra5 &&
          ((allExtra = allExtra.concat(forExtra5)),
          (allEnglish = allEnglish.concat(engExtra5)),
          (allImages = allImages.concat(imageExtra5)),
          (allSounds = allSounds.concat(fastExtra5))),
        'undefined' != typeof forExtra6 &&
          ((allExtra = allExtra.concat(forExtra6)),
          (allEnglish = allEnglish.concat(engExtra6)),
          (allImages = allImages.concat(imageExtra6)),
          (allSounds = allSounds.concat(fastExtra6))),
        'undefined' != typeof forExtra7 &&
          ((allExtra = allExtra.concat(forExtra7)),
          (allEnglish = allEnglish.concat(engExtra7)),
          (allImages = allImages.concat(imageExtra7)),
          (allSounds = allSounds.concat(fastExtra7))),
        'undefined' != typeof forExtra8 &&
          ((allExtra = allExtra.concat(forExtra8)),
          (allEnglish = allEnglish.concat(engExtra8)),
          (allImages = allImages.concat(imageExtra8)),
          (allSounds = allSounds.concat(fastExtra8))),
        'undefined' != typeof forExtra9 &&
          ((allExtra = allExtra.concat(forExtra9)),
          (allEnglish = allEnglish.concat(engExtra9)),
          (allImages = allImages.concat(imageExtra9)),
          (allSounds = allSounds.concat(fastExtra8))),
        xx = 0;
      xx < allSounds.length;
      xx++
    )
      allSounds[xx] = allSounds[xx] + sType;
    ((forExamplesQuiz2 = allExtra.slice()),
      (engExamplesQuiz2 = allEnglish.slice()),
      (imageArrayQuiz2 = allImages.slice()),
      (quizSounds2 = allSounds.slice()));
  }
  loadQuizPrep();
}
for (xx = 0; xx < imageArray.length; xx++)
  -1 != imageArray[xx].indexOf('../../') &&
    (imageArray[xx] = imageArray[xx].split('../../').join(pre));
for (xx = 0; xx < imageArrayQuiz.length; xx++)
  -1 != imageArrayQuiz[xx].indexOf('../../') &&
    (imageArrayQuiz[xx] = imageArrayQuiz[xx].split('../../').join(pre));
for (xx = 0; xx < imageArrayQuiz2.length; xx++)
  -1 != imageArrayQuiz2[xx].indexOf('../../') &&
    (imageArrayQuiz2[xx] = imageArrayQuiz2[xx].split('../../').join(pre));
function loadFastSound() {
  if ($('.narraBtns').hasClass('buttonOn') && 0 == narrPlayed)
    return ((narrPlayed = !0), void changeWord());
  var e;
  ((fastOrSlow = 'fast'),
    clearTimeout(wordTimer),
    $('#mainSound').trigger('pause'),
    -1 !=
      (e = sideClicked
        ? fastSounds[wordChangeNum[blockExNum]]
        : fastSounds[currentWordNum]).indexOf('../../') &&
      (e = e.split('../../').join(pre)),
    sideClicked
      ? ($('#mainSound').attr('src', e), (sideClicked = !1))
      : $('#mainSound').attr('src', e),
    document.getElementById('mainSound').load(),
    document.getElementById('mainSound').addEventListener('canplay', playSound),
    (soundPlaying = !0));
}
function loadSlowSound() {
  if ($('.narraBtns').hasClass('buttonOn') && 0 == narrPlayed)
    return ((narrPlayed = !0), void changeWord());
  var e;
  1 != titlePlay
    ? ((fastOrSlow = 'slow'),
      clearTimeout(wordTimer),
      $('#mainSound').trigger('pause'),
      -1 !=
        (e = sideClicked
          ? slowSounds[wordChangeNum[blockExNum]]
          : slowSounds[currentWordNum]).indexOf('../../') &&
        (e = e.split('../../').join(pre).split('.ogg').join(soundType)),
      sideClicked
        ? ($('#mainSound').attr('src', e), (sideClicked = !1))
        : $('#mainSound').attr('src', e),
      document.getElementById('mainSound').load(),
      document
        .getElementById('mainSound')
        .addEventListener('canplay', playSound))
    : changeWord();
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
    }, 500),
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
  if (prevBlockOn)
    return (
      1 == picToggle
        ? $('.mainPic2').css({
            'background-image': 'url(' + imageArray[currentWordNum] + ')',
          })
        : $('.mainPic1').css({
            'background-image': 'url(' + imageArray[currentWordNum] + ')',
          }),
      void (prevBlockOn = !1)
    );
  if (restartedLesson)
    return (
      $('.mainPic2, .mainPic1').css({
        'background-image': 'url(' + imageArray[0] + ')',
      }),
      void (restartedLesson = !1)
    );
  var e;
  1 == picToggle
    ? (e = (e = $('.mainPic1').css('background-image').split('images/'))[1]
        .split(')')
        .join(''))
    : (e = (e = $('.mainPic2').css('background-image').split('images/'))[1]
        .split(')')
        .join(''));
  if (e != imageArray[currentWordNum].split(oPath + 'images/').join('')) {
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
        : 1 == picToggle
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
            }));
  }
}
function nextImage() {
  if ($('#mainSound').attr('src') == oPath + 'sounds/title1' + soundType)
    return ((picControl = 'picNext'), void changeWord());
  if ('disable' != arrowClicks) {
    if (((narrPlayed = !1), $('.narraBtns').hasClass('buttonOn')))
      return (
        $('.narraBtns').removeClass('buttonOn'),
        (narrPlayed = !0),
        (picControl = 'picNext'),
        void changeWord()
      );
    currentWordNum != numWords - 1
      ? ((picControl = 'picNext'), currentWordNum++, changeWord())
      : currentWordNum == numWords - 1 &&
          '' != narration[narration.length - 1] &&
          $('.narrSentence').is(':hidden')
        ? finalWord()
        : ((soundPlaying = !1),
          $('#pauseBtn').attr('src', '../../common/play.svg'),
          $('#pauseBtn').hide(),
          $('.wrapper3').css({ background: 'rgba(0,0,0,0)' }),
          $('#endWrap').fadeIn(1e3, function () {
            $('.ouinoContent').fadeOut(1e3);
          }),
          $('body').height() >= 700 && $('#learningTip').fadeIn(1e3),
          (currentWordNum = 0),
          $('#mainSound').trigger('pause'),
          $('#mainSound').attr('src', '../../common/endSound' + soundType),
          document.getElementById('mainSound').load(),
          document
            .getElementById('mainSound')
            .addEventListener('canplay', playSound),
          (soundPlaying = !0));
  }
}
function prevImage() {
  ((blockExNum = wordChangeNum.indexOf(currentWordNum)),
    'disable' != arrowClicks &&
      ((picControl = 'picPrev'),
      currentWordNum != wordChangeNum[blockExNum] ||
      $('.narraBtns').hasClass('buttonOn') ||
      '' == narration[blockExNum]
        ? (currentWordNum--, (narrPlayed = !0), changeWord())
        : ((narrPlayed = !1), (picControl = 'picFade'), changeWord())));
}
function nextBlockWord() {
  if (
    ($('.ouinoButton').removeClass('buttonOn'),
    $('.ouinoButton').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    }),
    $('#buttonB' + currentWordNum).addClass('buttonOn'),
    $('#btnWrap').scrollTo('#buttonB' + currentWordNum, 500, { offset: -50 }),
    $('#buttonB' + currentWordNum).css({
      background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
    }),
    $('.ouinoButton2').hide(),
    (blockExNum = wordChangeNum.indexOf(currentWordNum)),
    '' != narration[blockExNum])
  ) {
    var e = '#narraBtn' + wordChangeNum[blockExNum];
    ($(e).show(), $('#slowBubble1').hide());
  } else narrPlayed = !0;
  (0 == narrPlayed &&
    ($('.narraBtns').addClass('buttonOn'),
    $('.narraBtns').css({
      background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
    })),
    titleSkip[blockExNum]
      ? $('#slowBubble2').hide()
      : ($('#button' + currentWordNum).show(),
        $('#button' + currentWordNum).html('T'),
        $('#slowBubble2').show()));
  for (var t = 0; t < exampleNums[blockExNum]; t++)
    ($('#button' + (currentWordNum + t + 1)).show(),
      $('#button' + (currentWordNum + t + 1)).html(t + 1));
  var n = forSideTitles[blockExNum].split(' ').join('&nbsp;');
  if (3 == n.split('<br>').length - 1) {
    var o = 0;
    n = n.replace(/<br>/g, function (e) {
      return 2 === ++o ? 'ZZZ' : e;
    });
  }
  $('.forSentenceB').html(
    n
      .split('<br>')
      .join("<b style='color: #333;'> /&nbsp;</b>")
      .split('ZZZ')
      .join('<br>'),
  );
  var i = engSideTitles[blockExNum];
  if (')' == i.charAt(i.length - 1)) {
    var r = i
      .split('(')
      .join(
        "<span style='color: #505050; font-size: 0.8em; font-weight: 400;'>(",
      )
      .split(')')
      .join(')</span>');
    ($('.engSentenceB').html(r),
      $('.engSentenceB span').html(
        $('.engSentenceB span').html().replace(/ /g, '&nbsp;'),
      ));
  } else $('.engSentenceB').html(i);
}
function prevBlockWord() {
  if (
    ($('.ouinoButton').removeClass('buttonOn'),
    $('.ouinoButton').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    }),
    (blockExNum = wordChangeNum2.indexOf(currentWordNum)),
    $('#buttonB' + wordChangeNum[blockExNum]).addClass('buttonOn'),
    $('#btnWrap').scrollTo('#buttonB' + wordChangeNum[blockExNum], 500, {
      offset: -50,
    }),
    $('#buttonB' + wordChangeNum[blockExNum]).css({
      background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
    }),
    $('.ouinoButton2').hide(),
    '' != narration[blockExNum])
  ) {
    var e = '#narraBtn' + wordChangeNum[blockExNum];
    ($(e).show(), $('#slowBubble1').hide());
  } else ($('.narraBtns').removeClass('buttonOn'), (narrPlayed = !0));
  titleSkip[blockExNum]
    ? $('#slowBubble2').hide()
    : ($('#button' + (currentWordNum - exampleNums[blockExNum])).show(),
      $('#button' + (currentWordNum - exampleNums[blockExNum])).html('T'),
      $('#slowBubble2').show());
  for (var t = 0; t < exampleNums[blockExNum]; t++)
    ($('#button' + (currentWordNum - exampleNums[blockExNum] + t + 1)).show(),
      $('#button' + (currentWordNum - exampleNums[blockExNum] + t + 1)).html(
        t + 1,
      ));
  var n = forSideTitles[blockExNum].split(' ').join('&nbsp;');
  if (3 == n.split('<br>').length - 1) {
    var o = 0;
    n = n.replace(/<br>/g, function (e) {
      return 2 === ++o ? 'ZZZ' : e;
    });
  }
  $('.forSentenceB').html(
    n
      .split('<br>')
      .join("<b style='color: #333;'> /&nbsp;</b>")
      .split('ZZZ')
      .join('<br>'),
  );
  var i = engSideTitles[blockExNum];
  if (')' == i.charAt(i.length - 1)) {
    var r = i
      .split('(')
      .join(
        "<span style='color: #505050; font-size: 0.8em; font-weight: 400;'>(",
      )
      .split(')')
      .join(')</span>');
    ($('.engSentenceB').html(r),
      $('.engSentenceB span').html(
        $('.engSentenceB span').html().replace(/ /g, '&nbsp;'),
      ));
  } else $('.engSentenceB').html(i);
}
function changeSound() {
  'true' == lessonInit
    ? ((fastOrSlow = 'fast'),
      $('.timerMeter > .timerSpan').stop(),
      $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() }),
      $('#mainSound').trigger('pause'),
      narration.length >= 1
        ? ($('#mainSound').attr(
            'src',
            oPath + 'sounds/narra' + (blockExNum + 1) + soundType,
          ),
          (sideClicked = !1))
        : $('#mainSound').attr('src', '../../common/blank' + soundType),
      setTimeout(function () {
        $('#mainSound').trigger('play');
      }, 1e3),
      (soundPlaying = !0),
      toggleMusic(),
      (lessonInit = 'false'))
    : ((fastOrSlow = 'fast'),
      clearTimeout(wordTimer),
      $('#mainSound').trigger('pause'),
      $('#mainSound').attr(
        'src',
        oPath + 'sounds/narra' + (blockExNum + 1) + soundType,
      ),
      (sideClicked = !1),
      document.getElementById('mainSound').load(),
      document
        .getElementById('mainSound')
        .addEventListener('canplaythrough', playSound2),
      (soundPlaying = !0));
}
function changeSound2() {
  if (
    ((titlePlay = !0),
    (sideClicked = !1),
    $('#pauseBtn').attr('src', '../../common/pause.svg'),
    $('#roundButtons, #roundButtons2, #slowBubble1').hide(),
    $('.forSentence, .engSentence').html(''),
    $('.wordSentence, .wordSentenceB, .shinyPicture').addClass('disabledMouse'),
    $('.ouinoContent').css({ cursor: 'not-allowed' }),
    $('.forSentenceB').html(forSideTitles[0]),
    $('.engSentenceB').html(engSideTitles[0]),
    $('.narrSentence').html(lessonTitle),
    $('.narrSentence').show(),
    $('.ouinoButton, .ouinoButton2').removeClass('buttonOn'),
    $('.ouinoButton, .ouinoButton2').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    }),
    'true' == lessonInit)
  )
    ((fastOrSlow = 'fast'),
      $('.timerMeter > .timerSpan').stop(),
      $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() }),
      $('#mainSound').trigger('pause'),
      $('#mainSound').attr('src', oPath + 'sounds/title1' + soundType),
      (sideClicked = !1),
      setTimeout(function () {
        $('#mainSound').trigger('play');
      }, 1e3),
      (soundPlaying = !0),
      toggleMusic(),
      (lessonInit = 'false'));
  else if ('' != lastNum) {
    ((narrPlayed = !0), (sideClicked = !1), (picControl = 'picFade'));
    for (var e = wordChangeNum.length - 1; e >= 0; e--)
      lastNum > wordChangeNum[e] &&
        ((currentWordNum = wordChangeNum[e]), (e = -2));
    (changeWord(), (currentWordNum = lastNum), changeWord());
  } else
    ((fastOrSlow = 'fast'),
      clearTimeout(wordTimer),
      $('#mainSound').trigger('pause'),
      $('#mainSound').attr('src', oPath + 'sounds/title1' + soundType),
      (sideClicked = !1),
      document.getElementById('mainSound').load(),
      document
        .getElementById('mainSound')
        .addEventListener('canplaythrough', playSound2),
      (soundPlaying = !0));
}
function playSound2() {
  ($('.timerMeter > .timerSpan').stop(),
    $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() }),
    setTimeout(function () {
      (document
        .getElementById('mainSound')
        .removeEventListener('canplaythrough', playSound2),
        $('#mainSound').trigger('play'));
    }, 500),
    (soundPlaying = !0));
}
function finalWord() {
  ($('#slowBubble1').hide(),
    $('.ouinoButton, .ouinoButton2').removeClass('buttonOn'),
    $('.ouinoButton, .ouinoButton2').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    }),
    $('.narrSentence').html(narration[narration.length - 1]),
    $('.narrSentence').show(),
    $('.insight, .insightLabel').addClass('disInsight'),
    $('.engSentence, .forSentence').html(''),
    $('#mainSound').trigger('pause'),
    $('#mainSound').attr(
      'src',
      oPath + 'sounds/narra' + narration.length + soundType,
    ),
    (sideClicked = !1),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplaythrough', playSound2),
    (soundPlaying = !0));
}
function changeWord() {
  if (!localStorage.getItem(storeInfo + 'insight')) {
    var e = (forExamples[currentWordNum].match(/ /g) || []).length;
    currentWordNum > 0 &&
      0 == $('.insightLabel').length &&
      e > 1 &&
      ($('.shinyPicture').append('<div class="insightLabel"></div>'),
      $('.insight').addClass('fullOpacity'));
  }
  if (
    (saveLeftOff(forExamples.length - 1),
    !extraExamples &&
      'picPrev' != picControl &&
      'roundButtons2' ==
        $('#button' + currentWordNum)
          .parent()
          .attr('id'))
  ) {
    var t = parseInt(
      $('.extraBtn:visible:last').attr('id').split('button').join(''),
    );
    if (!isNaN(t))
      return void ((currentWordNum = t) != numWords - 1
        ? ((picControl = 'picNext'), currentWordNum++, changeWord())
        : currentWordNum == numWords - 1 &&
            '' != narration[narration.length - 1] &&
            $('.narrSentence').is(':hidden')
          ? finalWord()
          : ((soundPlaying = !1),
            $('#pauseBtn').attr('src', '../../common/play.svg'),
            $('#pauseBtn').hide(),
            $('.wrapper3').css({ background: 'rgba(0,0,0,0)' }),
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
  (extraExamples &&
    'roundButtons2' ==
      $('#button' + currentWordNum)
        .parent()
        .attr('id') &&
    !localStorage.getItem(storeInfo + 'tipNote1') &&
    ($('body').append(
      '<div class="tipCont"><img src="../../common/tips1.png" class="tipImages"></div>',
    ),
    $('.tipCont').on('click', function () {
      ($('.tipCont').fadeOut(500),
        setTimeout(function () {
          $('.tipCont').remove();
        }, 500),
        togglePause());
    }),
    localStorage.setItem(storeInfo + 'tipNote1', 'ON'),
    togglePause()),
    $('#flashCard2, #flashCard').hide());
  var n = forExamples[currentWordNum];
  if (-1 != (n = forCopy.indexOf(n)))
    if (cardRaw.length > 0) {
      var o = lessonNumber + '|' + (n + 1) + cardCate,
        r = !1;
      for (i = 0; i < cardRaw.length; i++) {
        var s = cardRaw[i].split('|');
        (s = s[0] + '|' + s[1] + '|' + s[2]) == o && (r = !0);
      }
      r
        ? ($('#flashCard').hide(), $('#flashCard2').show())
        : ($('#flashCard2').hide(), $('#flashCard').show());
    } else ($('#flashCard2').hide(), $('#flashCard').show());
  if (
    ((soundRepeated = 0),
    1 == titlePlay &&
      ((titlePlay = !1),
      $('.menuBlock').removeClass('centerDiv'),
      $('#menuBlockWrap, .menuBlock').hide(),
      $('.ouinoContent').show(),
      $('#roundButtons, #roundButtons2, #slowBubble1').show(),
      $('.wordSentence, .wordSentenceB, .shinyPicture').removeClass(
        'disabledMouse',
      ),
      $('.ouinoContent').css({ cursor: 'default' })),
    (sideClicked = !1),
    $('#pauseBtn').attr('src', '../../common/pause.svg'),
    $('.ouinoButton2').removeClass('buttonOn'),
    $('.ouinoButton2').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    }),
    -1 != wordChangeNum.indexOf(currentWordNum) && 'picPrev' != picControl)
  ) {
    if ((nextBlockWord(), titleSkip[blockExNum] && 1 == narrPlayed))
      return (currentWordNum++, void changeWord());
  } else if (
    -1 != wordChangeNum.indexOf(currentWordNum) &&
    'picPrev' == picControl
  ) {
    if (titleSkip[blockExNum] && 1 == narrPlayed)
      return (currentWordNum++, void changeWord());
    if (!$('.narraBtns').hasClass('buttonOn')) {
      if (titleSkip[blockExNum] && '' == narration[blockExNum])
        return (currentWordNum--, void changeWord());
      titleSkip[blockExNum] &&
        '' != narration[blockExNum] &&
        ($('#slowBubble1').hide(),
        $('.narraBtns').addClass('buttonOn'),
        $('.narraBtns').css({
          background:
            'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
        }));
    }
  }
  if (
    (-1 != wordChangeNum2.indexOf(currentWordNum) &&
      'picPrev' == picControl &&
      prevBlockWord(),
    $('.narraBtns').hasClass('buttonOn') ||
      ($('#button' + currentWordNum).addClass('buttonOn'),
      $('#btnWrap').scrollTo('#buttonB' + currentWordNum, 500, { offset: -50 }),
      $('#button' + currentWordNum).css({
        background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
      })),
    $('.narraBtns').hasClass('buttonOn') && 1 == narrPlayed)
  )
    ($('.ouinoButton2').removeClass('buttonOn'),
      $('.ouinoButton2').css({
        background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
      }));
  else if ($('.narraBtns').hasClass('buttonOn') && 0 == narrPlayed)
    return (
      $('.narrSentence').html(narration[blockExNum]),
      $('.narrSentence').show(),
      $('.insight, .insightLabel').addClass('disInsight'),
      $('.engSentence, .forSentence').html(''),
      changeSound(),
      swapImages(),
      void verifyArrows()
    );
  ($('.narrSentence').hide(),
    $('#slowBubble1').show(),
    'f' == $('#selectPlayback').val().charAt(0)
      ? 'true' == lessonInit
        ? ((fastOrSlow = 'fast'),
          $('.timerMeter > .timerSpan').stop(),
          $('.timerMeter > .timerSpan').css({
            width: $('.timerMeter').width(),
          }),
          $('#mainSound').trigger('pause'),
          $('#mainSound').attr('src', fastSounds[currentWordNum]),
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
          $('.timerMeter > .timerSpan').css({
            width: $('.timerMeter').width(),
          }),
          $('#mainSound').trigger('pause'),
          $('#mainSound').attr('src', slowSounds[currentWordNum]),
          setTimeout(function () {
            $('#mainSound').trigger('play');
          }, 1e3),
          (soundPlaying = !0),
          toggleMusic(),
          (lessonInit = 'false'))
        : loadSlowSound(),
    swapImages(),
    verifyArrows());
  var a = engExamples[currentWordNum];
  if (')' == a.charAt(a.length - 1)) {
    var l = a
      .split('(')
      .join(
        "<span style='color: #505050; font-size: 0.8em; font-weight: 400;'>(",
      )
      .split(')')
      .join(')</span>');
    ($('.engSentence').html(l),
      $('.engSentence span').html(
        $('.engSentence span').html().replace(/ /g, '&nbsp;'),
      ));
  } else $('.engSentence').html(a);
  if ('%' == (a = forExamples[currentWordNum]).charAt(0)) {
    var u = (a = a.split('%'))[1];
    ((a = a[2]),
      $('#sideNote').html(
        '<strong>IMPORTANT NOTE</strong><br><span>' +
          u +
          "</span><img src='../../search/common/arrBlackDown.svg'>",
      ),
      irregSpan &&
        ($('#sideNote span').show(),
        $('#sideNote img').attr('src', '../../search/common/arrBlackUp.svg')),
      setTimeout(function () {
        $('#sideNote').fadeIn();
      }, 100));
  } else $('#sideNote').hide();
  if (')' == a.charAt(a.length - 1) && -1 != a.indexOf('+')) {
    l = a
      .split('(')
      .join("<span style='color: #707070; font-size: 0.7em;'>(")
      .split(')')
      .join(')</span>');
    ($('.forSentence').html(l),
      -1 !== $('.forSentence span').html().indexOf(' ') &&
        $('.forSentence span').html(
          $('.forSentence span').html().replace(/ /g, '&nbsp;'),
        ));
  } else $('.forSentence').html(a);
  if (
    -1 != a.indexOf("<em style='color: #333;'> / </em>") &&
    $('.ouinoContent').hasClass('portrait')
  ) {
    var c = a
      .split("<em style='color: #333;'> / </em>")
      .join('<br>')
      .split(' ')
      .join('&nbsp;');
    if (3 == c.split('<br>').length - 1) {
      var d = 0;
      c = c.replace(/<br>/g, function (e) {
        return 2 === ++d ? 'ZZZ' : e;
      });
    }
    $('.forSentence').html(
      c
        .split('<br>')
        .join("<b style='color: #333;'> /&nbsp;</b>")
        .split('ZZZ')
        .join('<br>'),
    );
  }
  if (
    (resizeText(),
    !extraExamples &&
      'picPrev' == picControl &&
      'roundButtons2' ==
        $('#button' + currentWordNum)
          .parent()
          .attr('id'))
  ) {
    t = parseInt(
      $('.extraBtn:visible:first').attr('id').split('button').join(''),
    );
    if (!isNaN(t))
      return void (
        (currentWordNum = t) != numWords - 1 &&
        ((picControl = 'picPrev'),
        currentWordNum--,
        (prevBlockOn = !0),
        changeWord())
      );
  }
}
function verifyArrows() {
  ($('middleSwipe').show(),
    (currentWordNum <= 0 && $('.narraBtns').hasClass('buttonOn')) ||
    (currentWordNum <= 0 && $('#button0').hasClass('buttonOn'))
      ? ($('.leftArrow').hide(), $('.rightArrow').show())
      : currentWordNum <= 0 && !$('.narraBtns').hasClass('buttonOn')
        ? ($('.leftArrow').show(), $('.rightArrow').show())
        : currentWordNum == numWords - 1 ||
            ($('#roundButtons .ouinoButton2:last').hasClass('buttonOn') &&
              0 == extraExamples)
          ? ($('.leftArrow').show(), $('.rightArrow').hide())
          : ($('.leftArrow').show(), $('.rightArrow').show()));
}
function closest(e, t) {
  for (var n = Math.max.apply(null, e), o = 0; o < e.length; o++)
    e[o] >= t && e[o] < n && (n = e[o]);
  return n;
}
function resizeText() {
  ('' == strip2($('.forSentence').html()) ||
  strip2($('.forSentence').html()) == strip2($('.forSentenceB').html())
    ? $('.insight, .insightLabel').addClass('disInsight')
    : $('.insight, .insightLabel').removeClass('disInsight'),
    (theFont = 29),
    $('body').hasClass('notch') && (theFont = 25),
    $('.forSentence').css({ fontSize: theFont + 'px' }),
    $('.engSentence').hasClass('engSentenceOnly')
      ? $('.engSentence').css({ fontSize: theFont + 'px' })
      : $('.engSentence').css({ fontSize: '21px' }),
    $('.forSentence, .engSentence, .disSentence').css({
      'max-width': '3000px',
      'white-space': 'nowrap',
      'line-height': 'normal',
      margin: '0',
    }),
    $('.forSentence').css({ 'margin-top': '-10px' }));
  for (
    var e = $('.textWrap').width(),
      t = 0.91 * $('.wordSentence').width(),
      n = $('.textWrap2').width(),
      o = theFont;
    e > t;
    o--
  ) {
    e = $('.textWrap').width();
    var i = o;
    if (i < 25) {
      ((i = 24),
        $('.forSentence').css({
          'font-size': i + 'px',
          'max-width': t - 20,
          'white-space': 'normal',
          'line-height': i + 1 + 'px',
          margin: '0 0 6px 0',
        }));
      break;
    }
    $('.forSentence').css({ fontSize: i + 'px' });
  }
  if ($('.engSentence').hasClass('engSentenceOnly'))
    for (var r = theFont; n > t; r--) {
      if (((n = $('.textWrap2').width()), (s = r) < 20)) {
        ((s = 23),
          $('.engSentence').css({
            'font-size': s + 'px',
            'max-width': t - 20,
            'white-space': 'normal',
            'line-height': s + 1 + 'px',
          }));
        break;
      }
      $('.engSentence').css({ fontSize: s + 'px' });
    }
  else
    for (r = 21; n > t; r--) {
      var s;
      if (((n = $('.textWrap2').width()), (s = r) < 18)) {
        ((s = 20),
          $('.engSentence').css({
            'font-size': s + 'px',
            'max-width': t - 20,
            'white-space': 'normal',
            'line-height': s + 1 + 'px',
          }));
        break;
      }
      $('.engSentence').css({ fontSize: s + 'px' });
    }
}
function resizeQuizText() {
  var e, t, n;
  ((theFont = 23),
    (e = $('#quizSentenceFor').width()),
    (t = $('#quizContent').width() - 40),
    $('#quizSentenceFor').css({ 'max-width': t }),
    $('#quizSentenceEng').css({ 'max-width': t }),
    $('#boardMain').css({ fontSize: '24px' }),
    (e = $('#writtenAnswer').width()),
    (t = $('#writeAnswerField').width() - 30));
  for (var o = 24; e > t && o > 1; o--)
    ((e = $('#writtenAnswer').width()),
      (n = o),
      $('#boardMain').css({ fontSize: n + 'px' }));
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
    localStorage.getItem(storeInfo + 'cardsSTORE') &&
      (cardRaw = (cardRaw = localStorage.getItem(
        storeInfo + 'cardsSTORE',
      )).split(':')),
    $('body').append(
      '<img id="flashNotice" src="../../flash/images/notice3.svg"/><img id="flashNotice2" src="../../flash/images/notice4.svg"/>',
    ),
    $('.addQuizFlash').on('touchend mouseup', function (e) {
      e.preventDefault();
      var t,
        n = [],
        o = [],
        r = [];
      for (t = 1; t <= errors.length; t++) {
        var s = errors[t - 1];
        if (-1 != (c = forExamplesQuiz[s - 1]).indexOf('</strong>')) {
          var a = (c = (c = (c = (c = (c = (c = c.split('</strong>'))[
            c.length - 2
          ]).split('<strong>'))[c.length - 1])
            .replace('¡', '')
            .replace('¿', '')).toLowerCase());
          if (
            (c.length > 3 && (a = c.slice(0, -1)),
            -1 != (d = engExamplesQuiz[s - 1]).indexOf('</em>'))
          ) {
            d = (d = (d = (d = (d = (d = d.split('</em>'))[d.length - 2]).split(
              '<em>',
            ))[d.length - 1])
              .replace('¡', '')
              .replace('¿', '')).toLowerCase();
            (d.length > 3 && d.slice(0, -1),
              -1 == n.indexOf(a) && (n.push(a), o.push(c), r.push(d)));
          }
        }
      }
      var l = [],
        u = [];
      for (t = 0; t < theExFl.length; t++) {
        var c;
        if (-1 != (c = theExFl[t]).indexOf('</strong>')) {
          a = c = (c = (c = (c = (c = (c = c.split('</strong>'))[
            c.length - 2
          ]).split('<strong>'))[c.length - 1])
            .replace('¡', '')
            .replace('¿', '')).toLowerCase();
          c.length > 3 && (a = c.slice(0, -1));
          var d = engExamplesQuiz[t];
          if (
            (0 == lessonNumber && (d = engNums1[t]), -1 != d.indexOf('</em>'))
          ) {
            d = (d = (d = (d = (d = (d = d.split('</em>'))[d.length - 2]).split(
              '<em>',
            ))[d.length - 1])
              .replace('¡', '')
              .replace('¿', '')).toLowerCase();
            (d.length > 3 && d.slice(0, -1),
              -1 == u.indexOf(a) &&
                -1 != n.indexOf(a) &&
                r[n.indexOf(a)] == d &&
                (u.push(a), l.push(t + 1)));
          }
        }
      }
      if (0 == lessonNumber || 'quiz' == quizLessonBoth)
        for (t = 0; t < l.length; t++) {
          var m = imageArray[parseInt(l[t]) - 1].split('/'),
            p = m[m.length - 1].split('pic').join('').split('.jpg').join('');
          p = parseInt(p);
          var g = parseInt(m[m.length - 3]) + '|' + p + cardCate,
            h = !1;
          for (f = 0; f < cardRaw.length; f++) {
            (b = (b = cardRaw[f].split('|'))[0] + '|' + b[1] + '|' + b[2]) ==
              g && (h = !0);
          }
          h || cardRaw.push(g);
        }
      else
        for (i = 0; i < l.length; i++) {
          var f;
          ((g = lessonNumber + '|' + parseInt(l[i]) + cardCate), (h = !1));
          for (f = 0; f < cardRaw.length; f++) {
            var b;
            (b = (b = cardRaw[f].split('|'))[0] + '|' + b[1] + '|' + b[2]) ==
              g && (h = !0);
          }
          h || cardRaw.push(g);
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
    }),
    $('#flashCard').on('click', function () {
      ('mobile' != currentDevice && playSprite('shimmer'),
        $('#flashNotice').show(),
        setTimeout(function () {
          $('#flashNotice').fadeOut();
        }, 700),
        $('#flashCard').hide(),
        $('#flashCard2').fadeIn(1e3));
      var e = forExamples[currentWordNum];
      e = forCopy.indexOf(e);
      var t = lessonNumber + '|' + (e + 1) + cardCate;
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
      var e = forExamples[currentWordNum];
      e = forCopy.indexOf(e);
      var t,
        n = lessonNumber + '|' + (e + 1) + cardCate,
        o = [];
      for (t = 0; t < cardRaw.length; t++) {
        var i = cardRaw[t].split('|');
        (i = i[0] + '|' + i[1] + '|' + i[2]) != n && o.push(cardRaw[t]);
      }
      ((cardRaw = o.slice(0)),
        localStorage.setItem(storeInfo + 'cardsSTORE', cardRaw.join(':')),
        (infoToUpdate = cardRaw.join(':')),
        (fieldToUpdate = 'cards'),
        updateDatabase());
    }),
    $('#extraOn').on('click', function () {
      (localStorage.setItem(
        sessionStorage.userEmailSTORE + 'extraExamples',
        'OFF',
      ),
        (extraExamples = !1),
        $('#extraOn').hide(),
        $('#extraOff').show(),
        $('#roundButtons2').addClass('extraOff'),
        verifyArrows());
    }),
    $('#extraOff').on('click', function () {
      (localStorage.setItem(
        sessionStorage.userEmailSTORE + 'extraExamples',
        'ON',
      ),
        (extraExamples = !0),
        $('#extraOff').hide(),
        $('#extraOn').show(),
        $('#roundButtons2').removeClass('extraOff'),
        verifyArrows());
    }),
    $('#extraSwitch input').change(function () {
      this.checked
        ? -1 !== greenBub.indexOf(lessonNumber)
          ? $('.toggle-control input:checked ~ .control').css({
              'background-color': '#397516',
            })
          : -1 !== orangeBub.indexOf(lessonNumber)
            ? $('.toggle-control input:checked ~ .control').css({
                'background-color': '#E25833',
              })
            : -1 !== yellowBub.indexOf(lessonNumber)
              ? $('.toggle-control input:checked ~ .control').css({
                  'background-color': '#DB9F3E',
                })
              : -1 !== redBub.indexOf(lessonNumber)
                ? $('.toggle-control input:checked ~ .control').css({
                    'background-color': '#AA2121',
                  })
                : -1 !== blueBub.indexOf(lessonNumber)
                  ? $('.toggle-control input:checked ~ .control').css({
                      'background-color': '#15589B',
                    })
                  : -1 !== violetBub.indexOf(lessonNumber)
                    ? $('.toggle-control input:checked ~ .control').css({
                        'background-color': '#59367F',
                      })
                    : -1 !== purpleBub.indexOf(lessonNumber)
                      ? $('.toggle-control input:checked ~ .control').css({
                          'background-color': '#2E428E',
                        })
                      : -1 !== turquoiseBub.indexOf(lessonNumber) &&
                        $('.toggle-control input:checked ~ .control').css({
                          'background-color': '#196872',
                        })
        : $('.control').css({ 'background-color': 'darkGrey' });
    }),
    'mobile' != currentDevice &&
      ($('#extraOn').hover(function () {
        ($('#arrowLabel').text('TURN OFF EXTRA EXAMPLES'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $('#extraOff').hover(function () {
        ($('#arrowLabel').text('TURN ON EXTRA EXAMPLES'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $('#flashCard').hover(function () {
        ($('#arrowLabel').text('ADD TO FLASH CARD FOR REVIEW'),
          $('.instructions').toggleClass('showDiv'));
      }),
      $('#flashCard2').hover(function () {
        ($('#arrowLabel').text('REMOVE FROM FLASH CARDS'),
          $('.instructions').toggleClass('showDiv'));
      })),
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
  if (
    ($('#backBtn, #menuMain2').removeClass('darker'),
    $('.menuBar').hasClass('noBack') && $('.menuBar').removeClass('noBack'),
    $('#background').addClass('quizMode'),
    $('#extraSwitch').hide(),
    extraExamples)
  ) {
    var e = 300;
    forExamplesQuiz2.length > 10 && (e = 30);
    var t = forExamplesQuiz.length;
    ((forExamplesQuiz = forExamplesQuiz.concat(forExamplesQuiz2)),
      (engExamplesQuiz = engExamplesQuiz.concat(engExamplesQuiz2)),
      (imageArrayQuiz = imageArrayQuiz.concat(imageArrayQuiz2)),
      (quizSounds = quizSounds.concat(quizSounds2)),
      (quizMapArray = shuffle(quizMapArray)).length > 0.5 * e &&
        (quizMapArray = quizMapArray.slice(0, 0.5 * e)));
    var n = quizMapArray.length;
    for (quizMapArray2 = [], xx = 1; xx <= forExamplesQuiz2.length; xx++)
      quizMapArray2.push(xx + t);
    quizMapArray2 = shuffle(quizMapArray2);
    var o = [],
      i = [],
      r = [],
      s = [];
    for (xx = 1; xx <= quizMapArray2.length; xx++) {
      var a = quizMapArray2[xx - 1],
        l = forExamplesQuiz[a - 1];
      if (-1 != l.indexOf('</strong>')) {
        var u = (l = (l = (l = (l = (l = (l = l.split('</strong>'))[
          l.length - 2
        ]).split('<strong>'))[l.length - 1])
          .replace('¡', '')
          .replace('¿', '')).toLowerCase());
        (l.length > 3 && (u = l.slice(0, -1)),
          -1 == i.indexOf(u)
            ? (i.push(u), o.push(a))
            : -1 == r.indexOf(u)
              ? (r.push(u), o.push(a))
              : -1 == r.indexOf(u) && (s.push(u), o.push(a)));
      }
    }
    (quizMapArray2 = shuffle(o.slice())).length > n &&
      (quizMapArray2 = quizMapArray2.slice(0, n));
  } else quizMapArray.length > 30 && (quizMapArray = quizMapArray.slice(0, 30));
  var c;
  if (0 === lessonNumber)
    for (
      imageArrayQuiz = combImage.slice(), quizSounds = combFast.slice(), c = 0;
      c < quizSounds.length;
      c++
    )
      quizSounds[c] = quizSounds[c] + sType;
  (0 == errorMode
    ? ($('.addQuizFlash').removeClass('disableFlash'),
      $('.addQuizFlash').show())
    : ($('.addQuizFlash').addClass('disableFlash'), $('.addQuizFlash').hide()),
    $('#dictBtn').hide(),
    localStorage.getItem(storeInfo + 'externalKeyboard') &&
      ($('#keyboardBtn').attr('src', '../../common/keyboard.svg'),
      (externalKeyboard = !0)),
    (disableTimer = !0),
    $('#quizTimerImage2').attr('src', '../../common/timerPointer2.svg'),
    clearTimeout(timerDelay),
    $('#quizTimerPointer2').stop(),
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
    $('.menuBlock').removeClass('centerDiv'),
    $('#menuBlockWrap, .menuBlock').hide(),
    $('.ouinoContent').show());
  for (var d = 0; d < forExamplesQuiz.length; d++)
    if (-1 == quesToRemove.indexOf(d + 1)) {
      (-1 == forExamplesQuiz[d].indexOf('</strong>') &&
        (forExamplesQuiz[d] = forExamplesQuiz[d] + '<strong></strong>'),
        -1 != forExamplesQuiz[d].indexOf('<br>') &&
          $('html').innerWidth() < 700 &&
          ((forExamplesQuiz[d] = forExamplesQuiz[d].split('<br>')),
          (forExamplesQuiz[d] = forExamplesQuiz[d][0])));
      var m = forExamplesQuiz[d].split('</strong>');
      '' !=
        (m = (m = (m = (m = (m = m[m.length - 2]).split('<strong>'))[
          m.length - 1
        ])
          .replace('¡', '')
          .replace('¿', '')).toLowerCase()) &&
        -1 == alternateA3.indexOf(m.toLowerCase().split(' ').join('')) &&
        quizPossible.push(m);
    }
  ((quizPossible = unique(quizPossible)),
    (numWords = forExamplesQuiz.length),
    $('#verbBanner').css({ display: 'none' }),
    $('#pronounWarn, #starConjWarn').hide(),
    (pastQuizScoreAll =
      null != quizScores ? quizScores[lessonNumber - 1] : '0|0|0|0'),
    0 === lessonNumber &&
      ((pastQuizScoreAll = '0|0|0|0'),
      $(
        '.smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
      ).css({ opacity: '0' })),
    '0' == pastQuizScoreAll && (pastQuizScoreAll = '0|0|0|0'),
    (pastQuizScoreAll = pastQuizScoreAll.split('|')));
  for (var p = 1; p <= 4; p++)
    (pastQuizScore = pastQuizScoreAll[p - 1]) >= 70 && pastQuizScore < 80
      ? ($('#sMedal' + p).css({
          'background-image': 'url(../../common/medalIcon1.svg)',
        }),
        $('#sMedal' + p).attr('name', 'Won: Bronze Medal'))
      : pastQuizScore >= 80 && pastQuizScore < 90
        ? ($('#sMedal' + p).css({
            'background-image': 'url(../../common/medalIcon2.svg)',
          }),
          $('#sMedal' + p).attr('name', 'Won: Silver Medal'))
        : pastQuizScore >= 90 && pastQuizScore < 100
          ? ($('#sMedal' + p).css({
              'background-image': 'url(../../common/medalIcon3.svg)',
            }),
            $('#sMedal' + p).attr('name', 'Won: Gold Medal'))
          : 100 == pastQuizScore
            ? ($('#sMedal' + p).css({
                'background-image': 'url(../../common/medalIcon4.svg)',
              }),
              $('#sMedal' + p).attr('name', 'Won: Fluency Award'))
            : pastQuizScore <= 70 &&
              ($('#sMedal' + p).css({
                'background-image': 'url(../../common/medalIcon0.svg)',
              }),
              $('#sMedal' + p).attr('name', 'No prize won yet.'));
  if (
    ($('#quizTimerPointer2').is(':visible') &&
      ($('#quizTimerPointer2').stop(!0, !0), clearTimeout(timerDelay)),
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
      '.menuTitleContainer, #pauseBtn, #optionBtn, #quizPreload, #quizGoBack, #quizStart, #quizItself, #quizTimer, #quizTimer2, #quizTimerPointer2, #quizDone',
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
    'lesson' == quizLessonBoth)
  ) {
    ($('#quizContent').css({
      background: 'none',
      'box-shadow': 'none',
      border: 'none',
    }),
      $('#quizMenu').hide());
    var g = lessonTitle
      .split(' III)')
      .join('')
      .split(' II)')
      .join('')
      .split(' I)')
      .join('')
      .split(' IV)')
      .join('')
      .split(' V)')
      .join('')
      .split(' VI)')
      .join('')
      .split(' VII)')
      .join('')
      .split(' VIII)')
      .join('')
      .split(')')
      .join('')
      .split('(');
    ((g = g[1].split(' ').join('&nbsp;')),
      -1 != quizPartI.indexOf(lessonNumber)
        ? $('#typeOfBlock').html(g.toLowerCase() + ' (part&nbsp;1)')
        : -1 != quizPartII.indexOf(lessonNumber)
          ? $('#typeOfBlock').html(g.toLowerCase() + ' (part&nbsp;2)')
          : $('#typeOfBlock').html(g.toLowerCase()),
      $('#quizBlock').show());
  } else ($('#quizMenu').show(), $('#quizBlock').hide());
  ($('#quizContent').is(':hidden') && $('#quizContent').show(),
    loadButtonsQuiz());
}
function loadQuiz1() {
  ((maxScore = 55),
    $('#keyboardBtn').show(),
    shuffle(quizMapArray),
    shuffle(quizMapArray2),
    (quizCombinedArray = quizMapArray.concat(quizMapArray2)),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong3.svg)',
    }),
    findAccents(),
    $(
      '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #possibleDiv',
    ).show(),
    $('#quizAllItemsC').addClass('noBack'),
    $('#hintTable, #writeAnswerBoard, #answerForm').hide(),
    (disableTimer = !0),
    $('#quizMenu').hide(),
    (timerTime = 2e4),
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
  ((maxScore = 65),
    $('#keyboardBtn').show(),
    shuffle(quizMapArray),
    shuffle(quizMapArray2),
    (quizCombinedArray = quizMapArray.concat(quizMapArray2)),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong3.svg)',
    }),
    findAccents(),
    $(
      '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #hintTable, #writtenAnswer, #writeAnswerBoard, #answerForm',
    ).show(),
    $('#quizAllItemsC').removeClass('noBack'),
    $('#possibleDiv').hide(),
    (disableTimer = !0),
    $('#quizMenu').hide(),
    (timerTime = 2e4),
    (quizNumQues = quizCombinedArray.length),
    1 == errorMode && (quizNumQues = errors.length),
    $('#numberOfQues').text(quizNumQues),
    $('.quizPreloadTitle').text(quizTitle2),
    $('#quizPreloadDescription').text(quizDescription2),
    $('#quizStartImg, #quizPreloadMedal').css({
      'background-image': 'url(../../common/quiz' + currentSecShort + '2.svg)',
    }),
    (currentQuiz = 2),
    preLoadQuiz());
}
function loadQuiz3() {
  ((maxScore = 65),
    (quizPtsCount = 65),
    $('#keyboardBtn').show(),
    shuffle(quizMapArray),
    shuffle(quizMapArray2),
    (quizCombinedArray = quizMapArray.concat(quizMapArray2)),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong4.svg)',
    }),
    $('#quizAllItemsC').removeClass('noBack'),
    $('#possibleDiv').hide(),
    findAccents(),
    $(
      '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #hintTable, #writtenAnswer, #writeAnswerBoard, #answerForm',
    ).show(),
    (disableTimer = !0),
    $('#quizMenu').hide(),
    (timerTime = 2e4),
    (quizNumQues = quizCombinedArray.length),
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
    $('#quizPreload, #quizGoBack').show(),
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
    var n = [];
    if (
      -1 ===
      (n = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')).indexOf(t)
    ) {
      for (n.push(t), i = 1; i <= 5; i++) n.push('0');
      (n.push('1'),
        localStorage.setItem(storeInfo + 'goalsSTORE', n.join(':')),
        (infoToUpdate = n.join(':')),
        (fieldToUpdate = 'goals'),
        updateDatabase());
    }
  }
  if (
    localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    null == localStorage.getItem(storeInfo + 'goalsSTORE')
  ) {
    var o = new Date(),
      r = [
        (o = o.getDate() + o.format('mmmm') + o.getFullYear()),
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
          $('#quizTimerPointer2').show(),
          currentQuiz <= 2
            ? $('#quizTimer, #quizTimer2').hide()
            : 3 == currentQuiz && $('#quizTimer2').show(),
          resizeQuizText(),
          firstLoad());
      });
    }, 1e3));
}
function firstLoad() {
  ($('#quizTimer, #quizTimer2, #quizTimerPointer2, #quizItself').css({
    opacity: '0',
  }),
    loadQuestion(),
    playSprite('blank'),
    setTimeout(function () {
      $('#quizTimer, #quizTimer2, #quizItself').transition({ opacity: '1' });
    }, 500));
}
function loadQuestion() {
  ($('.possWord').removeClass('disableIt'),
    clearTimeout(loadingTime),
    (madeError = !1),
    setTimeout(function () {
      $('#quizTimerPointer2').css({ opacity: '0' });
    }, 200),
    $('#questionNum').text(currQuizNum),
    (quizQuesNum = quizCombinedArray[currQuizNum - 1]),
    1 == errorMode && (quizQuesNum = errors[currQuizNum - 1]),
    (quizNumArray = []));
  for (var e = 1; e <= numWords; e++) quizNumArray.push(e);
  var t = quizNumArray.indexOf(quizQuesNum);
  (~t && quizNumArray.splice(t, 1),
    setTimeout(function () {
      resizeQuizText();
    }, 1),
    quizActions());
}
function quizActions() {
  var e, t;
  (3 == currentQuiz && quizTimerAnimate2(),
    (submitted = !1),
    $('#specialChars').show(),
    $('#quizSentenceFor, #quizSentenceEng').hide(),
    setTimeout(function () {
      ((quizPtsCount = 65),
        $('#quizScoreBack').css({
          'background-image': 'url(../../common/scoreBack4.svg)',
        }),
        $('#goodAnswerIn2').css({
          'background-image': 'url(../../common/score4.svg)',
        }),
        $('#quizScoreImg').attr('src', '../../common/score4.svg'));
    }, 500),
    (submitted = !1),
    $('#specialChars').show(),
    currentQuiz <= 2
      ? $('.boardBottom, #hintTable').show()
      : $('.boardBottom, #hintTable').hide(),
    3 == currentQuiz ? $('#quizTimer2').show() : $('#quizTimer2').hide(),
    1 == currentQuiz
      ? $('#hintTable, .boardBottom').hide()
      : 2 == currentQuiz
        ? $('.boardBottom, #hintTable').show()
        : $('.boardBottom, #hintTable').hide(),
    $('#boardMain').removeClass('topAlign'),
    viewportHeight < 630 || viewportWidth < 450
      ? $('.boardTop').hide()
      : $('.boardTop').show(),
    $('#writeError, #writeError2').closest('tr').hide(),
    $('#writeAnswerField').val(''),
    $('.wrongLogo').hide(),
    $('#hint1, #hint2, #hint3').css({ visibility: 'visible' }),
    (foundArticle = ''));
  var n = forExamplesQuiz[quizQuesNum - 1];
  if (
    ('%' == n.charAt(0) && (n = (n = n.split('%'))[2]),
    -1 == n.indexOf('</strong>') && (n += '<strong></strong>'),
    (e = (e = (e = (e = (e = n.split('</strong>'))[e.length - 2]).split(
      '<strong>',
    ))[e.length - 1])
      .replace('¡', '')
      .replace('¿', '')),
    (writtenString = e),
    (t = (t =
      "'" != e.slice(-1)
        ? '<b>' + (t = Array(e.length + 1).join('_')) + '_</b>'
        : '<b>' + (t = Array(e.length + 1).join('_')) + '_</b> ')
      .split('  ')
      .join(' ')),
    $('#quizSentenceFor').html(n.split(e + '</strong>').join(t + '</strong>')),
    $('#quizSentenceEng').html(engExamplesQuiz[quizQuesNum - 1]),
    1 == currentQuiz)
  ) {
    var o, i;
    o = (quizPossible = shuffle(quizPossible)).slice();
    if (
      -1 !=
        [
          'Sie',
          'Ihnen',
          'Ihr',
          'Ihre',
          'Ihrer',
          'Ihres',
          'Lei',
          'il Suo',
          'la Sua',
          'i Suoi',
          'le Sue',
        ].indexOf(e) &&
      -1 != engExamplesQuiz[quizQuesNum - 1].indexOf('formal')
    ) {
      for (var r = 0; r < o.length; r++)
        o[r] === e.toLowerCase() && o.splice(r, 1);
      i = e;
    } else i = e.toLowerCase();
    var s,
      a = o.indexOf(i);
    for (
      -1 !== a && o.splice(a, 1),
        o.push(i),
        o = shuffle((o = (o = unique(o)).slice(-4))),
        s = 0;
      s < o.length;
      s++
    )
      o[s] = '<div class="possWord">' + o[s] + '</div>';
    $('#possibleDivIn').html("<div class='possCont'>" + o.join('') + '</div>');
    var l = $('.possWord').length;
    ($('.possWord').css({
      width: 0.98 * $('#quizAllItemsC').width() + 'px',
      height: $('#quizAllItemsC').height() / l - 4 + 'px',
    }),
      $('.possWord').off(),
      $('.possWord').on('touchend mouseup', function (e) {
        (e.preventDefault(), checkClickAnswer($(this).text()));
      }));
    var u =
      $('#quizSentenceEng').outerHeight() + $('#quizSentenceFor').outerHeight();
    ($('body').hasClass('notch') && u > 90
      ? ($('.possWord').css({
          height: $('#quizAllItemsC').height() / 4 - 12 + 'px',
        }),
        $('#quizAllItemsC').css({ 'margin-top': '12px' }))
      : ($('.possWord').css({
          height: $('#quizAllItemsC').height() / 4 - 4 + 'px',
        }),
        $('#quizAllItemsC').css({ 'margin-top': '28px' })),
      'mobile' == currentDevice
        ? $('.possWord')
            .on('touchstart', function () {
              $(this).addClass('possWordHover');
            })
            .on('touchend touchcancel', function () {
              $(this).removeClass('possWordHover');
            })
        : $('.possWord').hover(function () {
            $(this).toggleClass('possWordHover');
          }));
  }
  ('undefined' != typeof addQuizNote &&
    ($('#quizWriteImg b').html(addQuizNote),
    $('#quizWriteImg b').css({ opacity: '1' })),
    $('em, strong').css({ color: '#FC0' }),
    (quizGoodAnswer = writtenString),
    (wArr = writtenString.split('')),
    (quizGoodPunct = quizGoodAnswer
      .split('.')
      .join('')
      .split('?')
      .join('')
      .split('!')
      .join('')
      .split('¡')
      .join('')
      .split('¿')
      .join('')
      .split(',')
      .join('')
      .split('_')
      .join('')
      .split('’')
      .join('***')
      .split('‘')
      .join('***')
      .split("'")
      .join('***')
      .split('***')
      .join('’')
      .split('–')
      .join('-')
      .split('—')
      .join('-')),
    (allLetters = quizGoodPunct
      .split('’')
      .join('***')
      .split('‘')
      .join('***')
      .split("'")
      .join('***')
      .split('***')
      .join('’')
      .split(' ')
      .join('')
      .split('')),
    (timerTime = 8e3 + 800 * allLetters.length));
  for (var c = 0; c < allChars.length; c++)
    -1 != quizGoodPunct.indexOf(allChars[c]) && (timerTime += 3e3);
  (0 == lessonNumber && (timerTime += 3e3), (letterArray = []));
  for (c = 0; c < allLetters.length; c++) letterArray.push(c);
  ((letterArray = shuffle(letterArray)), (letterArrayNum = 0));
  var d = wArr.length;
  quizDisplayAnswer = '';
  var m = 0;
  for (c = 0; c < d; c++)
    ' ' == wArr[c]
      ? (quizDisplayAnswer += '<span class="spanBlank noBorder">&nbsp;</span>')
      : '.' == wArr[c] ||
          '?' == wArr[c] ||
          '!' == wArr[c] ||
          ',' == wArr[c] ||
          '¡' == wArr[c] ||
          '¿' == wArr[c] ||
          '_' == wArr[c]
        ? (quizDisplayAnswer =
            quizDisplayAnswer +
            '<span class="spanBlank">' +
            wArr[c] +
            '</span>')
        : 'i' == wArr[c] || 'I' == wArr[c] || 'l' == wArr[c]
          ? ((quizDisplayAnswer =
              quizDisplayAnswer +
              '<span id="letter' +
              m +
              '" class="spanBlank"><i class="invisible">' +
              wArr[c] +
              '&nbsp;</i></span>'),
            m++)
          : ((quizDisplayAnswer =
              quizDisplayAnswer +
              '<span id="letter' +
              m +
              '" class="spanBlank"><i class="invisible">' +
              wArr[c] +
              '</i></span>'),
            m++);
  ((quizDisplayAnswer =
    '' != foundArticle
      ? foundArticle +
        '<span class="spanBlank"></span><b >' +
        quizDisplayAnswer +
        '</b>'
      : '<b >' + quizDisplayAnswer + '</b>'),
    $('#writtenAnswer').html(quizDisplayAnswer),
    $('#englishWrite').html(engExamplesQuiz[quizQuesNum - 1]),
    $('#quizWriteImg').css({
      'background-image': 'url(' + imageArrayQuiz[quizQuesNum - 1] + ')',
    }),
    1 != currentQuiz &&
      (('mobile' == currentDevice && 1 != externalKeyboard) ||
        ((focused = !0), $('#writeAnswerField').focus())),
    1 == checkAccent && findAccent(),
    setTimeout(resizeQuizText, 10),
    $('#quizSentenceFor, #quizSentenceEng').show(),
    (scrambled = quizGoodPunct.split(' ')));
  for (c = 0; c < scrambled.length; c++) {
    var p = scrambled[c].split('');
    scrambled[c] = shuffle(p);
  }
  scrambled = scrambled.join().split(',');
}
function showHint1(e) {
  var t = allLetters[letterArray[letterArrayNum]],
    n = scrambled[letterArray[letterArrayNum]];
  if (
    (t != n && (scrambled[scrambled.indexOf(t)] = n),
    'visible' == $('#hint2').css('visibility'))
  )
    ($('#letter' + letterArray[letterArrayNum]).text(t),
      (scrambled[letterArray[letterArrayNum]] =
        '<b class="redText">' + t + '</b>'),
      letterArrayNum++);
  else {
    scrambled[letterArray[letterArrayNum]] = '<b class="redText">' + t + '</b>';
    for (var o = 0; o < scrambled.length; o++)
      $('#letter' + o).html(scrambled[o]);
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
    loadQuizSound());
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
  for (
    var e = forExamplesQuiz.join(''), t = [], n = 0;
    n < allChars.length;
    n++
  )
    if (-1 != e.indexOf(allChars[n])) {
      var o = allChars[n].toLowerCase();
      t.push(o);
    }
  if (t.length <= 6) {
    ((charsToAdd = t.concat(specialChars)),
      (charsToAdd = (charsToAdd = (charsToAdd = unique(charsToAdd)).splice(
        0,
        6,
      )).sort()));
    for (n = 0; n < 6; n++) $('#char' + (n + 1)).html(charsToAdd[n]);
  } else checkAccent = !0;
}
function findAccent() {
  for (var e = quizGoodPunct, t = [], n = 0; n < allChars.length; n++)
    if (-1 != e.indexOf(allChars[n])) {
      var o = allChars[n].toLowerCase();
      t.push(o);
    }
  ((charsToAdd = t.concat(specialChars)),
    (charsToAdd = (charsToAdd = (charsToAdd = unique(charsToAdd)).splice(
      0,
      6,
    )).sort()));
  for (n = 0; n < 6; n++) $('#char' + (n + 1)).html(charsToAdd[n]);
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
function checkWrittenAnswer() {
  if ('' != $('#writeAnswerField').val() || '' == quizGoodAnswer) {
    var e, t;
    $('#writeError2').is(':visible') &&
      3 != currentQuiz &&
      $('#writeAnswerField').val(quizGoodAnswer);
    for (
      var n = quizGoodPunct
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
          .join('***')
          .split('‘')
          .join('***')
          .split("'")
          .join('***')
          .split('***')
          .join('’')
          .split('–')
          .join('-')
          .split('—')
          .join('-')
          .split('-')
          .join('')
          .split(' ')
          .join(''),
        o = removeAccent(n),
        i = $('#writeAnswerField')
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
          .split('¡')
          .join('')
          .split('¿')
          .join('')
          .split(',')
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
          .join('***')
          .split('‘')
          .join('***')
          .split("'")
          .join('***')
          .split('***')
          .join('’')
          .split('–')
          .join('-')
          .split('—')
          .join('-')
          .split('-')
          .join('')
          .split(' ')
          .join(''),
        r = removeAccent(i),
        s = [],
        a = 0;
      a < alternateA1.length;
      a++
    )
      (-1 != alternateA1.indexOf(n) &&
        -1 == s.indexOf(alternateA2[alternateA1.indexOf(n)]) &&
        s.push(alternateA2[alternateA1.indexOf(n)]),
        -1 != alternateA2.indexOf(n) &&
          -1 == s.indexOf(alternateA1[alternateA2.indexOf(n)]) &&
          s.push(alternateA1[alternateA2.indexOf(n)]));
    if (((e = s[0] ? s[0] : n), (t = s[1] ? s[1] : n), 3 == currentQuiz))
      if (-1 != $('#writeError').text().indexOf('watch')) {
        if (
          ($('#writeError').html(
            "Let's&nbsp;continue!&nbsp;Don't&nbsp;worry&nbsp;about&nbsp;it.",
          ),
          $('#quizTimerPointer2').stop(),
          clearTimeout(timerDelay),
          $('#quizTimerPointer2').css({ opacity: '0' }),
          'mobile' == currentDevice &&
            0 == externalKeyboard &&
            ((focused = !1), $('#writeAnswerField').blur()),
          submitted)
        )
          return;
        ((submitted = !0),
          (currentPts += 65),
          $('#currentScore').text(currentPts),
          currQuizNum++,
          playSprite('quizGood'),
          $('.possWord').addClass('disableIt'),
          clearTimeout(loadingTime),
          (loadingTime = setTimeout(function () {
            $('#loadLogo').show();
          }, 2e3)),
          $('#wrongAnswer, #goodAnswer, #goodAnswerPic2').stop(!0, !0),
          $('#wrongAnswer').css({ opacity: '0' }),
          $('#wrongAnswerPic').removeClass('opacityAnimate'),
          $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' }),
          '%' == (C = forExamplesQuiz[quizQuesNum - 1]).charAt(0) &&
            (C = (C = C.split('%'))[2]),
          $('#quizSentenceFor').html(C),
          setTimeout(function () {
            ($('#goodAnswer, #goodAnswerPic2').animate({ opacity: '0' }),
              (disableTimer = !1),
              loadQuizSound());
          }, 700));
        for (
          var l = quizGoodPunct.split(' ').join(''), u = 0;
          u < l.length;
          u++
        )
          $('#letter' + u).html(l[u]);
        return;
      }
    var c = removeAccent(e),
      d = removeAccent(t),
      m = [],
      p = n.length;
    for (u = 0; u < p; u++) n.charAt(u) != i.charAt(u) && m.push(u);
    if (i.length <= p - 1) {
      var g = m[0],
        h = n.slice(g);
      ((w = 0 != g ? i.slice(g + -1) : '%' + i), (m = []));
      for (u = 0; u < h.length; u++)
        h.charAt(u) != w.charAt(u) && m.push(u + g);
    }
    if (i.length == p - 2) {
      var f,
        b = m[1],
        x = n.slice(b);
      ((f = 0 != b ? i.slice(b - 2) : '%' + i), (m = m.slice(0, 1)));
      for (u = 0; u < h.length; u++)
        x.charAt(u) != f.charAt(u) && m.push(u + b);
    }
    if (i.length == p + 1) {
      var w;
      ((g = m[0]), (h = n.slice(g)));
      ((w = i.slice(g + 1)), (m = []));
      for (u = 0; u < h.length; u++)
        h.charAt(u) != w.charAt(u) && m.push(u + g);
    }
    var v,
      y = m.length,
      z = (p - y) / p;
    if (
      ('ma' == n && 'pero' == i
        ? ((e = 'però'), (e = 'pero'))
        : 'luego' == n && 'despues' == i && ((e = 'después'), (e = 'despues')),
      'French' == lessonLanguage &&
        n.length > 2 &&
        ('’' == n.charAt(n.length - 1) || "'" == n.charAt(n.length - 1)
          ? (v = n.slice(0, -1) + 'e')
          : 'e' == n.charAt(n.length - 1) &&
            ((t = n.slice(0, -1) + "'"), (v = n.slice(0, -1) + '’')),
        '’' == e.charAt(e.length - 1) || "'" == e.charAt(e.length - 1)
          ? (v = e.slice(0, -1) + 'e')
          : 'e' == e.charAt(e.length - 1) &&
            ((t = e.slice(0, -1) + "'"), (v = e.slice(0, -1) + '’'))),
      n == i || e == i || t == i || v == i)
    ) {
      if (
        (3 == currentQuiz &&
          ($('#quizTimerPointer2').stop(),
          clearTimeout(timerDelay),
          $('#quizTimerPointer2').css({ opacity: '0' })),
        'mobile' == currentDevice &&
          0 == externalKeyboard &&
          ((focused = !1), $('#writeAnswerField').blur()),
        submitted)
      )
        return;
      ((submitted = !0),
        (currentPts += 65),
        $('#currentScore').text(currentPts),
        currQuizNum++,
        playSprite('quizGood'),
        $('.possWord').addClass('disableIt'),
        clearTimeout(loadingTime),
        (loadingTime = setTimeout(function () {
          $('#loadLogo').show();
        }, 2e3)),
        $('#wrongAnswer, #goodAnswer').stop(!0, !0),
        $('#wrongAnswer').css({ opacity: '0' }),
        $('#wrongAnswerPic').removeClass('opacityAnimate'),
        $('#goodAnswer').css({ opacity: '1' }),
        '%' == (C = forExamplesQuiz[quizQuesNum - 1]).charAt(0) &&
          (C = (C = C.split('%'))[2]),
        $('#quizSentenceFor').html(C),
        resizeQuizText(),
        setTimeout(function () {
          ($('#goodAnswer').transition({ opacity: '0' }),
            (disableTimer = !1),
            loadQuizSound());
        }, 700));
      for (l = quizGoodPunct.split(' ').join(''), u = 0; u < l.length; u++)
        $('#letter' + u).html(l[u]);
    } else if (o == r || c == r || d == r) {
      ('%' == (C = forExamplesQuiz[quizQuesNum - 1]).charAt(0) &&
        (C = (C = C.split('%'))[2]),
        $('#quizSentenceFor').html(C),
        resizeQuizText(),
        'mobile' == currentDevice &&
          0 == externalKeyboard &&
          ((focused = !1), $('#writeAnswerField').blur()),
        3 == currentQuiz &&
          ($('#quizTimerPointer2').stop(),
          clearTimeout(timerDelay),
          $('#quizTimerPointer2').css({ opacity: '0' })),
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
        $('.boardBottom, .boardTop, #specialChars, #hintTable').hide(),
        $('#writeError, #writeError2').closest('tr').show());
      for (
        var S = quizGoodPunct.split(' ').join('').split('').join('%'), E = 0;
        E < 6;
        E++
      )
        S = S.split(charsToAdd[E]).join(
          '<b class="redText">' + charsToAdd[E] + '</b>',
        );
      S = S.split('%');
      for (u = 0; u < S.length; u++) $('#letter' + u).html(S[u]);
    } else if (z >= 0.8) {
      var C;
      ('%' == (C = forExamplesQuiz[quizQuesNum - 1]).charAt(0) &&
        (C = (C = C.split('%'))[2]),
        $('#quizSentenceFor').html(C),
        resizeQuizText(),
        'mobile' == currentDevice &&
          0 == externalKeyboard &&
          ((focused = !1), $('#writeAnswerField').blur()),
        3 == currentQuiz &&
          ($('#quizTimerPointer2').stop(),
          clearTimeout(timerDelay),
          $('#quizTimerPointer2').css({ opacity: '0' })),
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
          'Good&nbsp;answer! But&nbsp;watch&nbsp;your&nbsp;spelling...',
        ),
        $('.boardBottom, .boardTop, #specialChars, #hintTable').hide(),
        $('#writeError, #writeError2').closest('tr').show());
      for (
        var T = quizGoodPunct.split(' ').join('').split(''), q = 0;
        q < y;
        q++
      )
        T[m[q]] = '<b class="redText">' + T[m[q]] + '</b>';
      for (u = 0; u < T.length; u++) $('#letter' + u).html(T[u]);
    } else {
      if (
        (playSprite('quizBad'),
        $('#goodAnswer').stop(!0, !0),
        $('#goodAnswer').css({ opacity: '0' }),
        3 == currentQuiz)
      )
        return void fluentWrong();
      if (
        (currentErrors++,
        -1 == errors.indexOf(quizQuesNum) && errors.push(quizQuesNum),
        $('#currentErrors').text(currentErrors),
        $('#wrongLogo2').is(':visible'))
      ) {
        (showHint1(),
          $('#boardMain').addClass('topAlign'),
          $('#writeError').html(
            'Oops!&nbsp;Here&nbsp;is&nbsp;the right&nbsp;answer...',
          ),
          $('.boardBottom, .boardTop, #specialChars, #hintTable').hide(),
          $('#writeError, #writeError2').closest('tr').show(),
          'mobile' == currentDevice &&
            0 == externalKeyboard &&
            ((focused = !1), $('#writeAnswerField').blur()),
          $('#wrongLogo3').show());
        for (l = quizGoodPunct.split(' ').join(''), u = 0; u < l.length; u++)
          $('#letter' + u).html(l[u]);
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
        $('#wrongAnswer, #goodAnswer').stop(!0, !0),
        $('#goodAnswer').css({ opacity: '0' }),
        $('#wrongAnswer,#wrongAnswerPic').css({ opacity: '1' }),
        setTimeout(function () {
          $('#wrongAnswer,#wrongAnswerPic').transition({ opacity: '0' });
        }, 1e3),
        $('#currentScore').text(currentPts),
        (madeError = !0));
    }
  }
}
function fluentWrong() {
  (madeError ||
    (currentErrors++,
    -1 == errors.indexOf(quizQuesNum) && errors.push(quizQuesNum),
    $('#currentErrors').text(currentErrors),
    (currentPts -= 65),
    $('#currentScore').text(currentPts),
    $('#wrongAnswerPic').addClass('opacityAnimate'),
    setTimeout(function () {
      $('#wrongAnswerPic').removeClass('opacityAnimate');
    }, 2100),
    (madeError = !0)),
    $('#boardMain').addClass('topAlign'),
    $('#writeError').html(
      'Oops!&nbsp;Here&nbsp;is&nbsp;the right&nbsp;answer...',
    ),
    $('.boardBottom, .boardTop, #specialChars, #hintTable,#quizTimer2').hide(),
    $('#writeError, #writeError2').closest('tr').show());
  for (var e = quizGoodPunct.split(' ').join(''), t = 0; t < e.length; t++)
    $('#letter' + t).html(e[t]);
  ($('#quizTimerPointer2').stop(!0, !0),
    clearTimeout(timerDelay),
    $('#quizTimerImage2').css({
      '-webkit-transform': 'translate3d(-50%, 0, 0)',
      transform: 'translate3d(-50%, 0, 0)',
    }),
    'mobile' == currentDevice &&
      0 == externalKeyboard &&
      ((focused = !1), $('#writeAnswerField').blur()),
    $('#wrongAnswer').stop(!0, !0),
    $('#wrongAnswer').css({ opacity: '1' }),
    setTimeout(function () {
      $('#wrongAnswer').transition({ opacity: '0' });
    }, 1e3));
}
function afterSoundAction() {
  if (!disableTimer) {
    var e = 2e3;
    if ((1 == currentQuiz && (e = 500), currQuizNum != quizNumQues + 1))
      return (
        setTimeout(function () {
          (loadQuestion(),
            $('.timerMeter > .timerSpan').stop(),
            $('.timerMeter > .timerSpan').css({ width: 0 }));
        }, e),
        $('.timerMeter > .timerSpan').css({ height: '20px' }),
        void $('.timerMeter > .timerSpan').each(function () {
          $(this)
            .width(0)
            .animate({ width: $('.timerMeter').width() }, e);
        })
      );
    (3 == currentQuiz
      ? $('#quizDoneSentence').show()
      : $('#quizDoneSentence').hide(),
      setTimeout(function () {
        doneQuiz();
      }, 1e3));
  }
}
function startLesson() {
  ($('.menuBar').hasClass('noBack') && $('.menuBar').removeClass('noBack'),
    $('#backBtn, #menuMain2').removeClass('darker'),
    findLeftOff(),
    $('#background').removeClass('quizMode'),
    $('#dictBtn').show(),
    0 != forExamplesQuiz2.length
      ? extraExamples
        ? ($('#extraOn').show(),
          $('#extraOff').hide(),
          $('#roundButtons2').removeClass('extraOff'))
        : ($('#extraOff').show(),
          $('#extraOn').hide(),
          $('#roundButtons2').addClass('extraOff'))
      : $('#extraOn, #extraOff').hide(),
    $('#extraSwitch').hide(),
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
    var n = [];
    if (
      -1 ===
      (n = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')).indexOf(t)
    ) {
      for (n.push(t), i = 1; i <= 5; i++) n.push('0');
      (n.push('1'),
        localStorage.setItem(storeInfo + 'goalsSTORE', n.join(':')),
        (infoToUpdate = n.join(':')),
        (fieldToUpdate = 'goals'),
        updateDatabase());
    }
  }
  if (
    localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    null == localStorage.getItem(storeInfo + 'goalsSTORE')
  ) {
    var o = new Date(),
      r = [
        (o = o.getDate() + o.format('mmmm') + o.getFullYear()),
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
    ($('#pauseWrap').is(':visible') && $('#pauseWrap').hide(),
    (soundRepeated = 1),
    (narrPlayed = !1),
    (numWords = forExamples.length),
    $('#quizTimerPointer2').is(':visible') &&
      ($('#quizTimerPointer2').stop(!0, !0), clearTimeout(timerDelay)),
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
        $('#endWrap').stop(),
        $('#endWrap').hide(),
        $('.ouinoContent').stop().animate({ opacity: '1' }, 2),
        $('.ouinoContent').show(),
        $('.ouinoContent').css({ visibility: 'visible' }),
        'mobile' != currentDevice && playSprite('transition'),
        (currentWordNum = 0)),
    startNarration.length >= 1 &&
      ($('.menuBlock').addClass('centerDiv'),
      $('#menuBlockWrap, .menuBlock').show(),
      $('body').hasClass('notch') && $('.ouinoContent').hide()),
    changeSound2(),
    swapImages(),
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
    $('.ouinoContent').on('click', function () {
      $('.wordSentence').hasClass('disabledMouse') &&
        ((titlePlay = !0),
        $('.wordSentence, .wordSentenceB, .shinyPicture').removeClass(
          'disabledMouse',
        ),
        changeWord());
    }),
    $('#menuBlockWrap, .menuBlock').on('click', changeWord),
    $('.wordSentence').on('click', function (e) {
      $(e.target).hasClass('slowBubble') ||
        ((disableTimer = !0),
        loadFastSound(),
        $('.wordSentence').addClass('wsHover'),
        setTimeout(function () {
          $('.wordSentence').removeClass('wsHover');
        }, 220));
    }),
    $('.wordSentenceB').on('click', function (e) {
      $(e.target).hasClass('slowBubble') ||
        'extraOff' == $(e.target).attr('id') ||
        'extraOn' == $(e.target).attr('id') ||
        'roundButtons' == $(e.target).parent().attr('id') ||
        'roundButtons' == $(e.target).attr('id') ||
        'roundButtons2' == $(e.target).parent().attr('id') ||
        'roundButtons2' == $(e.target).attr('id') ||
        ((disableTimer = !0),
        (sideClicked = !0),
        loadFastSound(),
        $('.wordSentenceB').addClass('wsHover'),
        setTimeout(function () {
          $('.wordSentenceB').removeClass('wsHover');
        }, 220));
    }),
    0 === lessonNumber && $('#extraSwitch').hide(),
    localStorage.getItem(sessionStorage.userEmailSTORE + 'extraExamples')
      ? 'ON' ==
          localStorage.getItem(
            sessionStorage.userEmailSTORE + 'extraExamples',
          ) && $('#extraSwitch input').attr('checked', 'checked')
      : $('#extraSwitch input').attr('checked', 'checked'),
    $('#extraSwitch .control').on('click', function () {
      $('#extraSwitch input')[0].hasAttribute('checked')
        ? (setTimeout(function () {
            $('#extraSwitch input').removeAttr('checked');
          }, 100),
          (extraExamples = !1),
          localStorage.setItem(
            sessionStorage.userEmailSTORE + 'extraExamples',
            'OFF',
          ))
        : (setTimeout(function () {
            $('#extraSwitch input').attr('checked', 'checked');
          }, 100),
          (extraExamples = !0),
          localStorage.setItem(
            sessionStorage.userEmailSTORE + 'extraExamples',
            'ON',
          ));
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
        loadSlowSound(),
        $('#slowBubble1').addClass('wsHover'),
        setTimeout(function () {
          $('#slowBubble1').removeClass('wsHover');
        }, 220));
    }),
    $('#slowBubble2').on('click', function () {
      ((disableTimer = !0),
        (sideClicked = !0),
        loadSlowSound(),
        $('#slowBubble2').addClass('wsHover'),
        setTimeout(function () {
          $('#slowBubble2').removeClass('wsHover');
        }, 220));
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
    $('.ouinoButton, .ouinoButton2').on('click', buttonClicked),
    $('.rightArrow').on('click', nextImage),
    $('.leftArrow').on('click', prevImage),
    $('.menuTitleContainer').on('click', startLesson),
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
      ((errors = []),
        (errorMode = !1),
        'pwa' == osType &&
        'lesson' == quizLessonBoth &&
        sessionStorage.getItem('offlineSession')
          ? checkAllURLCache()
          : loadQuiz());
    }),
    $('#menuQuiz2').on('click', function () {
      ((errors = []),
        (errorMode = !1),
        'pwa' == osType &&
        'lesson' == quizLessonBoth &&
        sessionStorage.getItem('offlineSession')
          ? checkAllURLCache()
          : loadQuiz());
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
        '.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .menuTitleContainer',
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
    /iPhone|iPad|iPod/i.test(navigator.userAgent) &&
      $('#quizContent').on('touchstart', function (e) {
        e.preventDefault();
      }),
    (quizLoaded = !0),
    $('#answerForm').submit(function (e) {
      (e.preventDefault(), checkWrittenAnswer());
    }),
    $('.quizItemsB').css({
      background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
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
        $('#quizBlockContinue').on('touchstart mousedown', function (e) {
          (e.preventDefault(), loadCombinedQuiz());
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
        $('#hint1').on('touchend mouseup', function (e) {
          (e.preventDefault(), showHint1('clicked'), playSprite('shimmer'));
        }),
        $('#hint2').on('touchend mouseup', function (e) {
          (e.preventDefault(), showHint2(), playSprite('shimmer'));
        }),
        $('#hint3').on('touchend mouseup', function (e) {
          (e.preventDefault(), showHint3(), playSprite('shimmer'));
        }),
        $('#writeError2').on('touchstart mousedown', function (e) {
          (e.preventDefault(),
            $('#writeAnswerField').val(quizGoodAnswer),
            checkWrittenAnswer());
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
        $('#quizBlockContinue').on('click', loadCombinedQuiz),
        $('#quizBtn1').on('click', loadQuiz1),
        $('#quizBtn2').on('click', loadQuiz2),
        $('#quizBtn3').on('click', loadQuiz3),
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
              'text-shadow': '2px 1px 0px #FC0, rgb(0, 0, 0) 3px 2px 0px',
            });
          })
          .on('mouseout', function () {
            $(this).css({ 'text-shadow': 'rgb(0, 0, 0) 3px 2px 0px' });
          }),
        $('.quizItems').hover(function () {
          $(this).children('.quizItemsTop').toggleClass('quizItemsHover');
        }),
        $('.quizItemsB').hover(function () {
          $(this).toggleClass('fullOpacity');
        })));
}
function loadQuizSound() {
  $('#mainSound').trigger('pause');
  var e = quizSounds[quizQuesNum - 1];
  (-1 != e.indexOf('../../') && (e = e.split('../../').join(pre)),
    $('#mainSound').attr('src', e),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playQuizSound));
}
function playQuizSound() {
  ($('#loadLogo').is(':visible') && $('#loadLogo').fadeOut(),
    clearTimeout(loadingTime),
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
    }, 300));
}
function loadFirstSound() {
  ($('#mainSound').attr('src', '../../common/blank' + soundType),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playQuizSound));
}
function quizTimerAnimate() {
  (clearTimeout(timerDelay),
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
                    $('#quizScoreBack').css({
                      'background-image': 'url(../../common/scoreBack3.svg)',
                    }),
                    $('#quizScoreImg').attr('src', '../../common/score3.svg'),
                    $('#goodAnswerIn').css({
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
                          $('#quizScoreBack').css({
                            'background-image':
                              'url(../../common/scoreBack3.svg)',
                          }),
                          $('#quizScoreImg').attr(
                            'src',
                            '../../common/score2.svg',
                          ),
                          $('#goodAnswerIn').css({
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
                                $('#quizScoreBack').css({
                                  'background-image':
                                    'url(../../common/scoreBack1.svg)',
                                }),
                                $('#quizScoreImg').attr(
                                  'src',
                                  '../../common/score1.svg',
                                ),
                                $('#goodAnswerIn').css({
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
function quizTimerAnimate2() {
  (clearTimeout(timerDelay),
    $('#quizTimerPointer2').stop(!0, !0),
    (timerDelay = setTimeout(function () {
      timerTime *= 1.3;
      var e = $('#quizTimer2').width() - 20;
      ($('#quizTimerImage2').css({
        '-webkit-transform': 'translate3d(0%, 0, 0)',
        transform: 'translate3d(0%, 0, 0)',
      }),
        $('#quizTimerPointer2').stop(!0, !0),
        $('#quizTimerPointer2').css({ left: '-23px' }),
        $('#quizTimerPointer2')
          .clearQueue()
          .animate({ opacity: '1' }, 200, function () {
            $('#quizTimerPointer2').animate(
              { left: 0.99 * e + 'px' },
              0.99 * timerTime,
              'linear',
              function () {
                ($('#quizTimerImage2').css({
                  '-webkit-transform': 'translate3d(-50%, 0, 0)',
                  transform: 'translate3d(-50%, 0, 0)',
                }),
                  fluentWrong(),
                  playSprite('quizBad'));
              },
            );
          }));
    }, 1e3)));
}
function shuffle(e) {
  for (
    var t, n, o = e.length;
    o;
    t = Math.floor(Math.random() * o), n = e[--o], e[o] = e[t], e[t] = n
  );
  return e;
}
function resizeBlockMenu() {
  $('.menuBlock').css({
    height: $('#menuBlockContent').outerHeight() + 45 + 'px',
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
      $('.timerMeter > .timerSpan').css({ background: btnColor[0], width: 0 }),
      $('.engToggle').on('click', function () {
        'both' == $('#selectText').val()
          ? ($('#selectText').val('foreign'), toggleText2())
          : ($('#selectText').val('both'), toggleText2());
      }),
      'mobile' != currentDevice &&
        $('.engToggle').hover(function () {
          ($('.engToggle').toggleClass('engHover'),
            $('#arrowLabel').text('ENGLISH TRANSLATION ON/OFF'),
            $('.instructions').toggleClass('showDiv'));
        }),
      $('.insight').on('click', loadInsight),
      'mobile' != currentDevice &&
        $('.insight').hover(function () {
          ($('.insight').toggleClass('insightHover'),
            $('#arrowLabel').text('SHOW SENTENCE EXPLANATION'),
            $('.instructions').toggleClass('showDiv'));
        }),
      -1 !== greenBub.indexOf(lessonNumber)
        ? $('#background').addClass('greenGradient')
        : -1 !== orangeBub.indexOf(lessonNumber)
          ? $('#background').addClass('orangeGradient')
          : -1 !== yellowBub.indexOf(lessonNumber)
            ? $('#background').addClass('yellowGradient')
            : -1 !== redBub.indexOf(lessonNumber)
              ? $('#background').addClass('redGradient')
              : -1 !== blueBub.indexOf(lessonNumber)
                ? $('#background').addClass('blueGradient')
                : -1 !== violetBub.indexOf(lessonNumber)
                  ? $('#background').addClass('violetGradient')
                  : -1 !== purpleBub.indexOf(lessonNumber)
                    ? $('#background').addClass('purpleGradient')
                    : -1 !== turquoiseBub.indexOf(lessonNumber)
                      ? $('#background').addClass('turquoiseGradient')
                      : -1 !== greyBub.indexOf(lessonNumber) &&
                        $('#background').addClass('greyGradient'),
      'quiz' != quizLessonBoth &&
        $('.mainPic1').css({
          'background-image': 'url(' + oPath + 'images/pic1.jpg)',
        }),
      $('.lessonTitle').text(lessonTitle),
      $('#menuBlockContent').html(typeText),
      resizeBlockMenu(),
      $('.buttonContainer').append(
        $("<div id='btnWrap'>" + buttonCreate + '</div>'),
      ),
      $('#roundButtons').append($(buttonCreate2)),
      localStorage.getItem(storeInfo + 'irregSTORE') && (irregSpan = !1),
      $('#roundButtons2').append($(buttonCreate3)),
      -1 !== greenBub.indexOf(lessonNumber)
        ? setTimeout(function () {
            ($('#extraOn').css({
              background: 'url(../../common/extraOn1.svg)',
            }),
              $('.toggle-control input:checked ~ .control').css({
                'background-color': '#397516',
              }));
          }, 1e3)
        : -1 !== orangeBub.indexOf(lessonNumber)
          ? setTimeout(function () {
              ($('#extraOn').css({
                background: 'url(../../common/extraOn2.svg)',
              }),
                $('.toggle-control input:checked ~ .control').css({
                  'background-color': '#E25833',
                }));
            }, 1e3)
          : -1 !== yellowBub.indexOf(lessonNumber)
            ? setTimeout(function () {
                ($('#extraOn').css({
                  background: 'url(../../common/extraOn3.svg)',
                }),
                  $('.toggle-control input:checked ~ .control').css({
                    'background-color': '#DB9F3E',
                  }));
              }, 1e3)
            : -1 !== redBub.indexOf(lessonNumber)
              ? setTimeout(function () {
                  ($('#extraOn').css({
                    background: 'url(../../common/extraOn4.svg)',
                  }),
                    $('.toggle-control input:checked ~ .control').css({
                      'background-color': '#AA2121',
                    }));
                }, 1e3)
              : -1 !== blueBub.indexOf(lessonNumber)
                ? setTimeout(function () {
                    ($('#extraOn').css({
                      background: 'url(../../common/extraOn5.svg)',
                    }),
                      $('.toggle-control input:checked ~ .control').css({
                        'background-color': '#15589B',
                      }));
                  }, 1e3)
                : -1 !== violetBub.indexOf(lessonNumber)
                  ? setTimeout(function () {
                      ($('#extraOn').css({
                        background: 'url(../../common/extraOn6.svg)',
                      }),
                        $('.toggle-control input:checked ~ .control').css({
                          'background-color': '#59367F',
                        }));
                    }, 1e3)
                  : -1 !== purpleBub.indexOf(lessonNumber)
                    ? setTimeout(function () {
                        ($('#extraOn').css({
                          background: 'url(../../common/extraOn7.svg)',
                        }),
                          $('.toggle-control input:checked ~ .control').css({
                            'background-color': '#2E428E',
                          }));
                      }, 1e3)
                    : -1 !== turquoiseBub.indexOf(lessonNumber) &&
                      setTimeout(function () {
                        ($('#extraOn').css({
                          background: 'url(../../common/extraOn8.svg)',
                        }),
                          $('.toggle-control input:checked ~ .control').css({
                            'background-color': '#196872',
                          }));
                      }, 1e3),
      0 != forExamplesQuiz2.length && $('#extraSwitch').fadeIn(),
      $('.ouinoButton, .ouinoButton2').css({
        background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
      }),
      'quiz' != quizLessonBoth &&
        (4 == forTitles.length
          ? $('.ouinoButton').css({ width: '24.56%' })
          : 3 == forTitles.length
            ? $('.ouinoButton').css({ width: '32.89%' })
            : 2 == forTitles.length
              ? $('.ouinoButton').css({ width: '49.6%' })
              : 1 == forTitles.length
                ? $('.ouinoButton').css({ width: '100%' })
                : 5 == forTitles.length
                  ? $('.ouinoButton').css({ width: '19.5%' })
                  : 6 == forTitles.length &&
                    $('.ouinoButton').css({ width: '16.23%' })),
      $('.gradientColor').css({
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
          btnColor[4] +
          ',' +
          btnColor[5] +
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
      $('#button0').addClass('buttonOn'),
      $('#button0').css({
        background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
      }),
      $('#button' + (numWords - 1)).css({ marginBottom: '1.4%' }),
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
var typeText =
  '<h3><img id="menuBlockImage" src="../../common/logoBlock2.svg">' +
  lessonTitle +
  '</h3>';
if ('quiz' != quizLessonBoth)
  for (var numZZ = 0; numZZ < startNarration.length; numZZ++)
    typeText =
      typeText +
      '<p><b class="bullet">&bull;</b> ' +
      startNarration[numZZ] +
      '</p>';
var dateFormat = (function () {
  var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
    t =
      /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    n = /[^-+\dA-Z]/g,
    o = function (e, t) {
      for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e;
      return e;
    };
  return function (i, r, s) {
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
      ((r = r.slice(4)), (s = !0));
    var l = s ? 'getUTC' : 'get',
      u = i[l + 'Date'](),
      c = i[l + 'Day'](),
      d = i[l + 'Month'](),
      m = i[l + 'FullYear'](),
      p = i[l + 'Hours'](),
      g = i[l + 'Minutes'](),
      h = i[l + 'Seconds'](),
      f = i[l + 'Milliseconds'](),
      b = s ? 0 : i.getTimezoneOffset(),
      $ = {
        d: u,
        dd: o(u),
        ddd: a.i18n.dayNames[c],
        dddd: a.i18n.dayNames[c + 7],
        m: d + 1,
        mm: o(d + 1),
        mmm: a.i18n.monthNames[d],
        mmmm: a.i18n.monthNames[d + 12],
        yy: String(m).slice(2),
        yyyy: m,
        h: p % 12 || 12,
        hh: o(p % 12 || 12),
        H: p,
        HH: o(p),
        M: g,
        MM: o(g),
        s: h,
        ss: o(h),
        l: o(f, 3),
        L: o(f > 99 ? Math.round(f / 10) : f),
        t: 12 > p ? 'a' : 'p',
        tt: 12 > p ? 'am' : 'pm',
        T: 12 > p ? 'A' : 'P',
        TT: 12 > p ? 'AM' : 'PM',
        Z: s ? 'UTC' : (String(i).match(t) || ['']).pop().replace(n, ''),
        o:
          (b > 0 ? '-' : '+') +
          o(100 * Math.floor(Math.abs(b) / 60) + (Math.abs(b) % 60), 4),
        S: ['th', 'st', 'nd', 'rd'][
          u % 10 > 3 ? 0 : (((u % 100) - (u % 10) != 10) * u) % 10
        ],
      };
    return r.replace(e, function (e) {
      return e in $ ? $[e] : e.slice(1, e.length - 1);
    });
  };
})();
function deleteDifferentElements(e, t) {
  const n = e.map((e) => levenshteinDistance(e, t)),
    o = e.slice().sort((t, o) => {
      const i = e.indexOf(t),
        r = e.indexOf(o);
      return n[i] - n[r];
    });
  return (o.length > 5 && (o.length = 5), o);
}
function levenshteinDistance(e, t) {
  if (0 === e.length) return t.length;
  if (0 === t.length) return e.length;
  const n = [];
  for (let e = 0; e <= t.length; e++) n[e] = [e];
  for (let t = 0; t <= e.length; t++) n[0][t] = t;
  for (let o = 1; o <= t.length; o++)
    for (let i = 1; i <= e.length; i++) {
      const r = e[i - 1] === t[o - 1] ? 0 : 1;
      n[o][i] = Math.min(n[o - 1][i] + 1, n[o][i - 1] + 1, n[o - 1][i - 1] + r);
    }
  return n[t.length][e.length];
}
function checkClickAnswer(e) {
  for (
    var t,
      n,
      o,
      i = quizGoodPunct
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
        .join('***')
        .split('‘')
        .join('***')
        .split("'")
        .join('***')
        .split('***')
        .join('’')
        .split('–')
        .join('-')
        .split('—')
        .join('-')
        .split('-')
        .join('')
        .split(' ')
        .join(''),
      r = e
        .toLowerCase()
        .split(' ')
        .join('')
        .split('.')
        .join('')
        .split('?')
        .join('')
        .split('!')
        .join('')
        .split('¡')
        .join('')
        .split('¿')
        .join('')
        .split(',')
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
        .join('***')
        .split('‘')
        .join('***')
        .split("'")
        .join('***')
        .split('***')
        .join('’')
        .split('–')
        .join('-')
        .split('—')
        .join('-')
        .split('-')
        .join('')
        .split(' ')
        .join(''),
      s = [],
      a = 0;
    a < alternateA1.length;
    a++
  )
    (-1 != alternateA1.indexOf(i) &&
      -1 == s.indexOf(alternateA2[alternateA1.indexOf(i)]) &&
      s.push(alternateA2[alternateA1.indexOf(i)]),
      -1 != alternateA2.indexOf(i) &&
        -1 == s.indexOf(alternateA1[alternateA2.indexOf(i)]) &&
        s.push(alternateA1[alternateA2.indexOf(i)]));
  if (
    ((t = s[0] ? s[0] : i),
    (n = s[1] ? s[1] : i),
    'ma' == i && 'pero' == r
      ? ((t = 'però'), (t = 'pero'))
      : 'luego' == i && 'despues' == r && ((t = 'después'), (t = 'despues')),
    'French' == lessonLanguage &&
      i.length > 2 &&
      ('’' == i.charAt(i.length - 1) || "'" == i.charAt(i.length - 1)
        ? (o = i.slice(0, -1) + 'e')
        : 'e' == i.charAt(i.length - 1) &&
          ((n = i.slice(0, -1) + "'"), (o = i.slice(0, -1) + '’')),
      '’' == t.charAt(t.length - 1) || "'" == t.charAt(t.length - 1)
        ? (o = t.slice(0, -1) + 'e')
        : 'e' == t.charAt(t.length - 1) &&
          ((n = t.slice(0, -1) + "'"), (o = t.slice(0, -1) + '’'))),
    i == r || t == r || n == r || o == r)
  ) {
    ((currentPts += 55),
      $('#currentScore').text(currentPts),
      currQuizNum++,
      playSprite('quizGood'),
      $('.possWord').addClass('disableIt'),
      clearTimeout(loadingTime),
      (loadingTime = setTimeout(function () {
        $('#loadLogo').show();
      }, 2e3)),
      $('#wrongAnswer, #goodAnswer, #goodAnswerPic2').stop(!0, !0),
      $('#wrongAnswer').css({ opacity: '0' }),
      $('#wrongAnswerPic').removeClass('opacityAnimate'),
      $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' }));
    var l = forExamplesQuiz[quizQuesNum - 1];
    ('%' == l.charAt(0) && (l = (l = l.split('%'))[2]),
      $('#quizSentenceFor').html(l),
      resizeQuizText(),
      setTimeout(function () {
        ($('#goodAnswer, #goodAnswerPic2').transition({ opacity: '0' }),
          (disableTimer = !1),
          loadQuizSound());
      }, 700));
  } else
    (playSprite('quizBad'),
      $('#goodAnswer').stop(!0, !0),
      $('#goodAnswer').css({ opacity: '0' }),
      currentErrors++,
      -1 == errors.indexOf(quizQuesNum) && errors.push(quizQuesNum),
      $('#currentErrors').text(currentErrors),
      madeError
        ? ($('#wrongAnswer, #goodAnswer').stop(!0, !0),
          $('#goodAnswer').css({ opacity: '0' }),
          $('#wrongAnswer').css({ opacity: '1' }),
          setTimeout(function () {
            $('#wrongAnswer').transition({ opacity: '0' });
          }, 1e3))
        : ((currentPts -= 55),
          $('#wrongAnswer, #goodAnswer').stop(!0, !0),
          $('#goodAnswer').css({ opacity: '0' }),
          $('#wrongAnswer,#wrongAnswerPic').css({ opacity: '1' }),
          setTimeout(function () {
            $('#wrongAnswer,#wrongAnswerPic').transition({ opacity: '0' });
          }, 1e3),
          $('#currentScore').text(currentPts),
          (madeError = !0)));
}
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
    function n(t) {
      return e.isFunction(t) || e.isPlainObject(t) ? t : { top: t, left: t };
    }
    var o = (e.scrollTo = function (t, n, o) {
      return e(window).scrollTo(t, n, o);
    });
    return (
      (o.defaults = { axis: 'xy', duration: 0, limit: !0 }),
      (e.fn.scrollTo = function (i, r, s) {
        ('object' == typeof r && ((s = r), (r = 0)),
          'function' == typeof s && (s = { onAfter: s }),
          'max' === i && (i = 9e9),
          (s = e.extend({}, o.defaults, s)),
          (r = r || s.duration));
        var a = s.queue && 1 < s.axis.length;
        return (
          a && (r /= 2),
          (s.offset = n(s.offset)),
          (s.over = n(s.over)),
          this.each(function () {
            function l(t) {
              var n = e.extend({}, s, {
                queue: !0,
                duration: r,
                complete:
                  t &&
                  function () {
                    t.call(d, p, s);
                  },
              });
              m.animate(g, n);
            }
            if (null !== i) {
              var u,
                c = t(this),
                d = c ? this.contentWindow || window : this,
                m = e(d),
                p = i,
                g = {};
              switch (typeof p) {
                case 'number':
                case 'string':
                  if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                    p = n(p);
                    break;
                  }
                  p = c ? e(p) : e(p, d);
                case 'object':
                  if (0 === p.length) return;
                  (p.is || p.style) && (u = (p = e(p)).offset());
              }
              var h = (e.isFunction(s.offset) && s.offset(d, p)) || s.offset;
              (e.each(s.axis.split(''), function (e, t) {
                var n = 'x' === t ? 'Left' : 'Top',
                  i = n.toLowerCase(),
                  r = 'scroll' + n,
                  f = m[r](),
                  b = o.max(d, t);
                (u
                  ? ((g[r] = u[i] + (c ? 0 : f - m.offset()[i])),
                    s.margin &&
                      ((g[r] -= parseInt(p.css('margin' + n), 10) || 0),
                      (g[r] -=
                        parseInt(p.css('border' + n + 'Width'), 10) || 0)),
                    (g[r] += h[i] || 0),
                    s.over[i] &&
                      (g[r] += p['x' === t ? 'width' : 'height']() * s.over[i]))
                  : ((n = p[i]),
                    (g[r] =
                      n.slice && '%' === n.slice(-1)
                        ? (parseFloat(n) / 100) * b
                        : n)),
                  s.limit &&
                    /^\d+$/.test(g[r]) &&
                    (g[r] = 0 >= g[r] ? 0 : Math.min(g[r], b)),
                  !e &&
                    1 < s.axis.length &&
                    (f === g[r]
                      ? (g = {})
                      : a && (l(s.onAfterFirst), (g = {}))));
              }),
                l(s.onAfter));
            }
          })
        );
      }),
      (o.max = function (n, o) {
        var i = 'scroll' + (r = 'x' === o ? 'Width' : 'Height');
        if (!t(n)) return n[i] - e(n)[r.toLowerCase()]();
        var r = 'client' + r,
          s = (a = n.ownerDocument || n.document).documentElement,
          a = a.body;
        return Math.max(s[i], a[i]) - Math.min(s[r], a[r]);
      }),
      (e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop =
        {
          get: function (t) {
            return e(t.elem)[t.prop]();
          },
          set: function (t) {
            var n = this.get(t);
            if (t.options.interrupt && t._last && t._last !== n)
              return e(t.elem).stop();
            var o = Math.round(t.now);
            n !== o && (e(t.elem)[t.prop](o), (t._last = this.get(t)));
          },
        }),
      o
    );
  }));
