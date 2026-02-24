///OS START
var oPath = '';
var oPath2 = '../';
var pre = '../../';
if (osType == 'androidSTORE') {
  oPath =
    'https://www.ouinolanguages.com/app/' +
    lessonLanguage +
    '/block/' +
    lessonNumber +
    '/';
  oPath2 = 'https://www.ouinolanguages.com/app/' + lessonLanguage + '/block/';
  pre = 'https://www.ouinolanguages.com/app/' + lessonLanguage + '/';
}
//OS END

var loadingTime;

//2020 EXTRA START
var forExamplesQuiz2 = [];
var engExamplesQuiz2 = [];
var imageArrayQuiz2 = [];
var quizSounds2 = [];
var quizMapArray2 = [];
var extraExamples = true;
var buttonCreate3;
if (
  localStorage.getItem(sessionStorage['userEmailSTORE'] + 'extraExamples') ==
  'OFF'
) {
  extraExamples = false;
}
//change this depending on version
var sType = soundType;
var cardCate = '|a'; ///CHANGE THIS FOR EACH MODULE TYPE
var cardRaw = [];
var irregSpan = true;
var prevBlockOn = false;
if (typeof forExamples !== 'undefined') {
  var forCopy = forExamples.join('#%#').split('#%#');
}
if (lessonNumber == 0) {
  btnColor = ['#118000', '#203e00', '#118000', '#203e00'];
}
///2021ma start
///PORTUGUESE CHANGES
var alternateA1 = [
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
];
var alternateA2 = [
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
];

var alternateA3 = [
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

///5.1
function loadAudioCourse() {
  $('#loadLogo').show();
  setTimeout(function () {
    window.location = '../../audio/index.html?block=' + lessonNumber;
  }, 100);
}
///5.1

var focused;
///DO NOT MODIFY
var quizPartI = [];
var quizPartII = [];
if (lessonLanguage === 'Spanish') {
  quizPartI = [4, 5, 6, 7, 14, 15, 16];
  quizPartII = [9, 10, 11, 12, 18, 19, 20];
}
///PORTUGUESE CHANGES
else if (lessonLanguage === 'Portuguese') {
  quizPartI = [5, 6, 7, 8, 15, 16, 17];
  quizPartII = [10, 11, 12, 13, 19, 20, 21];
}
///PORTUGUESE CHANGES
else if (lessonLanguage === 'French') {
  quizPartI = [5, 6, 7, 8, 15, 16, 17, 18, 19];
  quizPartII = [10, 11, 12, 13, 21, 22, 23, 24];
} else if (lessonLanguage === 'Italian') {
  quizPartI = [8, 9, 10, 11, 12, 19, 20, 21, 22];
  quizPartII = [14, 15, 16, 17, 23, 24, 25];
} else if (lessonLanguage === 'German') {
  quizPartI = [11, 12, 13, 14];
  quizPartII = [16, 17, 18];
}

///2020 CHANGE

var greenBub = [];
var redBub = [];
var blueBub = [];
var orangeBub = [];
var yellowBub = [];
var violetBub = [];
var purpleBub = [];
var turquoiseBub = [];
var greyBub = [];

if (lessonLanguage === 'Spanish') {
  greenBub = [
    1, 2, 4, 9, 14, 18, 22, 26, 31, 35, 39, 40, 43, 46, 50, 52, 56, 58, 60, 66,
    70, 71, 80, 89,
  ];
  blueBub = [
    3, 5, 10, 15, 19, 23, 27, 32, 36, 47, 51, 53, 61, 64, 65, 67, 76, 77, 84,
    85, 59, 82, 88,
  ];
  redBub = [
    6, 11, 16, 20, 24, 28, 33, 37, 45, 48, 49, 54, 62, 68, 73, 74, 79, 42, 63,
  ];
  orangeBub = [12];
  yellowBub = [8, 13, 30, 34, 41, 57, 69, 72];
  violetBub = [7, 17, 21, 25, 29, 38, 55, 75, 81];
  purpleBub = [44, 83, 86, 87];
  turquoiseBub = [78];
  greyBub = [];
}
///PORTUGUESE CHANGES
else if (lessonLanguage === 'Portuguese') {
  greenBub = [
    1, 2, 4, 5, 10, 15, 19, 23, 26, 31, 35, 39, 40, 41, 44, 47, 51, 53, 57, 58,
    60, 62, 68, 69, 73, 74, 83, 92,
  ];
  blueBub = [
    3, 6, 11, 16, 20, 24, 27, 32, 36, 45, 48, 52, 54, 61, 63, 66, 67, 70, 79,
    80, 85, 86, 87, 88,
  ];
  redBub = [
    7, 12, 17, 21, 28, 33, 37, 39, 43, 49, 50, 55, 64, 65, 71, 76, 77, 82,
  ];
  orangeBub = [13];
  yellowBub = [9, 14, 30, 34, 42, 46, 59, 72, 75];
  violetBub = [8, 18, 22, 25, 29, 38, 56, 78, 84];
  purpleBub = [89, 90, 91];
  turquoiseBub = [81];
  greyBub = [];
}
///PORTUGUESE CHANGES
else if (lessonLanguage === 'French') {
  greenBub = [
    1, 3, 5, 10, 15, 21, 26, 31, 36, 40, 43, 46, 50, 53, 55, 58, 64, 72, 73, 76,
    82, 68, 72, 81, 90, 100,
  ];
  blueBub = [
    4, 6, 11, 16, 22, 27, 32, 37, 41, 47, 51, 52, 56, 59, 62, 65, 69, 71, 74,
    75, 79, 95, 96, 93,
  ];
  redBub = [
    7, 12, 17, 23, 28, 33, 38, 42, 48, 49, 54, 57, 60, 63, 70, 78, 85, 89,
  ];
  orangeBub = [13, 29, 77, 44, 84];
  yellowBub = [2, 9, 14, 18, 24, 39, 67, 83, 20, 35, 45, 91, 99];
  violetBub = [8, 19, 25, 30, 34, 61, 86, 98, 66, 92];
  purpleBub = [80, 94, 97, 98];
  turquoiseBub = [87, 88];
  greyBub = [];
} else if (lessonLanguage === 'Italian') {
  greenBub = [
    1, 14, 19, 23, 27, 30, 31, 37, 39, 44, 47, 50, 53, 59, 63, 64, 72, 82, 83,
    86, 3, 8, 58,
  ];
  blueBub = [
    4, 9, 15, 20, 24, 28, 32, 36, 40, 45, 51, 54, 60, 65, 70, 71, 73, 77, 84,
    88, 90, 91, 92, 94,
  ];
  redBub = [5, 10, 16, 21, 25, 29, 33, 41, 46, 52, 55, 61, 66, 74, 79, 85, 2];
  orangeBub = [17, 42, 48, 67, 80];
  yellowBub = [6, 22, 26, 35, 38, 49, 56, 69, 75, 81, 11, 13];
  violetBub = [7, 12, 18, 34, 43, 57, 62, 68, 76, 78, 87];
  purpleBub = [89, 92, 93];
  turquoiseBub = [];
  greyBub = [];
} else if (lessonLanguage === 'German') {
  greenBub = [
    1, 5, 9, 11, 16, 20, 23, 27, 31, 34, 37, 41, 45, 49, 52, 58, 63, 69, 75, 76,
    81, 82, 89, 90, 98, 102,
  ];
  blueBub = [
    2, 6, 10, 12, 17, 21, 24, 28, 32, 35, 38, 42, 46, 50, 53, 59, 64, 70, 77,
    84, 91, 92, 99, 101, 103, 105, 106, 108,
  ];
  redBub = [
    3, 7, 13, 18, 22, 25, 29, 33, 36, 39, 43, 47, 51, 54, 60, 65, 71, 78, 85,
    93, 100,
  ];
  yellowBub = [
    4, 8, 14, 19, 26, 30, 40, 44, 48, 55, 57, 61, 66, 68, 72, 74, 79, 86, 87,
    94,
  ];
  orangeBub = [95];
  violetBub = [15, 56, 62, 67, 73, 80, 88, 96, 97];
  turquoiseBub = [83];
  purpleBub = [104, 107];
  greyBub = [];
}

//PORTUGUESE CHANGE START
if (greenBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#118000', '#203e00', '#118000', '#203e00'];
} else if (orangeBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#bd5822', '#802a11', '#bd5822', '#802a11'];
}
//2020 NEW
else if (yellowBub.indexOf(lessonNumber) !== -1) {
  var btnColor = [
    '#2d3436',
    'rgba(15, 15, 15,0.9)',
    'rgba(19, 23, 23,0.95)',
    'rgba(10, 10, 10,0.95)',
  ];
  setTimeout(function () {
    $('.ouinoButton2').addClass('makeYellow');
    $('.ouinoButton').addClass('makeYellow2');
    $('.timerMeter > .timerSpan').css({ background: '#f39c12', width: 0 });
  }, 1000);
} else if (redBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#b51f1f', '#6e1313', '#b51f1f', '#6e1313'];
} else if (blueBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#0a5d90', '#063561', '#0a5d90', '#063561'];
} else if (violetBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#603273', '#31193b', '#603273', '#31193b'];
} else if (purpleBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#27488a', '#102557', '#27488a', '#102557'];
} else if (turquoiseBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#206d8a', '#0e3236', '#206d8a', '#0e3236'];
} else if (greyBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#474f52', '#2a3133', '#474f52', '#2a3133'];
}
//PORTUGUESE CHANGE END

///2020 CHANGE END

if (quizLessonBoth == 'quiz') {
  ///LOAD LESSON 1
  var forExamples = forExamples1.slice();
  var engExamples = engExamples1.slice();
  var examplesNum = [];
  examplesNum.push(forExamples1.length);
  ///LOAD OTHER LESSONS
  if (typeof forExamples2 !== 'undefined') {
    examplesNum.push(forExamples2.length);
    forExamples = forExamples.concat(forExamples2);
    engExamples = engExamples.concat(engExamples2);
  }
  if (typeof forExamples3 !== 'undefined') {
    examplesNum.push(forExamples3.length);
    forExamples = forExamples.concat(forExamples3);
    engExamples = engExamples.concat(engExamples3);
  }
  if (typeof forExamples4 !== 'undefined') {
    examplesNum.push(forExamples4.length);
    forExamples = forExamples.concat(forExamples4);
    engExamples = engExamples.concat(engExamples4);
  }
  if (typeof forExamples5 !== 'undefined') {
    examplesNum.push(forExamples5.length);
    forExamples = forExamples.concat(forExamples5);
    engExamples = engExamples.concat(engExamples5);
  }
  if (typeof forExamples6 !== 'undefined') {
    examplesNum.push(forExamples6.length);
    forExamples = forExamples.concat(forExamples6);
    engExamples = engExamples.concat(engExamples6);
  }
  if (typeof forExamples7 !== 'undefined') {
    examplesNum.push(forExamples7.length);
    forExamples = forExamples.concat(forExamples7);
    engExamples = engExamples.concat(engExamples7);
  }
  if (typeof forExamples8 !== 'undefined') {
    examplesNum.push(forExamples8.length);
    forExamples = forExamples.concat(forExamples8);
    engExamples = engExamples.concat(engExamples8);
  }
  if (typeof forExamples9 !== 'undefined') {
    examplesNum.push(forExamples9.length);
    forExamples = forExamples.concat(forExamples9);
    engExamples = engExamples.concat(engExamples9);
  }
  if (typeof forExamples10 !== 'undefined') {
    examplesNum.push(forExamples10.length);
    forExamples = forExamples.concat(forExamples10);
    engExamples = engExamples.concat(engExamples10);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////GLOBAL VARIABLES
var currentSection = 'Building Blocks';
var currentSecShort = 'block';
var quizTitle1 = 'MULTIPLE CHOICE';
var quizTitle2 = 'WRITE-A-WORD';
var quizTitle3 = 'FLUENCY SPRINT';
var currentProgram = 'Complete';
var errors = [];
var errorMode = false;
var slidesPres = [10, 11, 12, 13, 14];

var allChars = [
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
];
var FrenchChars = ['é', 'è', 'ê', 'ë', 'à', 'ç'];
var SpanishChars = ['á', 'é', 'í', 'ó', 'ú', 'ñ'];
var ItalianChars = ['à', 'é', 'è', 'ì', 'ò', 'ù'];
var GermanChars = ['ß', 'ä', 'ö', 'ü', 'ï', 'ë'];

////PORTUGUESE CHANGE START
var PortugueseChars = [
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
];
////PORTUGUESE CHANGE END

var specialChars = window[lessonLanguage + 'Chars'];
var wordChangeNum;
var wordChangeNum2;

///2020 EXTRA NEW
var theExFl = forExamples.slice();
if (lessonNumber == 0) {
  theExFl = nums1;
}
///2020 EXTRA NEW
var forExamplesQuiz = forExamples.slice();
var engExamplesQuiz = engExamples.slice();

if (quizLessonBoth == 'both' && typeof forExamples1 !== 'undefined') {
  var forExamplesQuiz = forExamples1.slice();
  var engExamplesQuiz = engExamples1.slice();
}

var quizPossible = [];
////////////////////////
var quizDescription1 =
  'This writing exercise is assisted. Choose a word in the list corresponding to the missing word in the sentence and type it in the field.';
var quizDescription2 =
  'Type in the word corresponding to the one missing in the sentence. No more guessing! Hints are available, but be careful, they cost valuable points...';
var quizDescription3 =
  'WARNING: This exercise is very difficult! Complete each question within the time given, no hints, no second chances. If you get a Fluency Award in this exercise, you are a real expert in this category!';
var numWords = engExamples.length;
var quizMapArray = [];
for (var numTT = 1; numTT <= forExamplesQuiz.length; numTT++) {
  quizMapArray.push(numTT);
}
quizMapArray = shuffle(quizMapArray);
for (var num = 0; num < quesToRemove.length; num++) {
  var position = quizMapArray.indexOf(quesToRemove[num]);
  if (~position) {
    quizMapArray.splice(position, 1);
  }
}
var quizCombinedArray = quizMapArray;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadQuizPrep() {
  var numMasc;

  /////Lesson 1 load
  quizSounds = [];
  var getLesson = lessonNumber - examplesNum.length;
  numMasc = 1;
  for (var num = 1; num <= forExamples1.length; num++) {
    quizSounds.push(oPath2 + getLesson + '/sounds/sound' + numMasc + soundType);
    numMasc++;
    numMasc++;
  }
  /////Lesson 2 load
  if (examplesNum.length >= 2) {
    getLesson = lessonNumber - examplesNum.length + 1;
    numMasc = 1;
    for (var num = 1; num <= forExamples2.length; num++) {
      quizSounds.push(
        oPath2 + getLesson + '/sounds/sound' + numMasc + soundType,
      );
      numMasc++;
      numMasc++;
    }
  }
  /////Lesson 3 load
  if (examplesNum.length >= 3) {
    getLesson = lessonNumber - examplesNum.length + 2;
    numMasc = 1;
    for (var num = 1; num <= forExamples3.length; num++) {
      quizSounds.push(
        oPath2 + getLesson + '/sounds/sound' + numMasc + soundType,
      );
      numMasc++;
      numMasc++;
    }
  }
  /////Lesson 4 load
  if (examplesNum.length >= 4) {
    getLesson = lessonNumber - examplesNum.length + 3;
    numMasc = 1;
    for (var num = 1; num <= forExamples4.length; num++) {
      quizSounds.push(
        oPath2 + getLesson + '/sounds/sound' + numMasc + soundType,
      );
      numMasc++;
      numMasc++;
    }
  }
  /////Lesson 5 load
  if (examplesNum.length >= 5) {
    getLesson = lessonNumber - examplesNum.length + 4;
    numMasc = 1;
    for (var num = 1; num <= forExamples5.length; num++) {
      quizSounds.push(
        oPath2 + getLesson + '/sounds/sound' + numMasc + soundType,
      );
      numMasc++;
      numMasc++;
    }
  }
  /////Lesson 6 load
  if (examplesNum.length >= 6) {
    getLesson = lessonNumber - examplesNum.length + 5;
    numMasc = 1;
    for (var num = 1; num <= forExamples6.length; num++) {
      quizSounds.push(
        oPath2 + getLesson + '/sounds/sound' + numMasc + soundType,
      );
      numMasc++;
      numMasc++;
    }
  }
  /////Lesson 7 load
  if (examplesNum.length >= 7) {
    getLesson = lessonNumber - examplesNum.length + 6;
    numMasc = 1;
    for (var num = 1; num <= forExamples7.length; num++) {
      quizSounds.push(
        oPath2 + getLesson + '/sounds/sound' + numMasc + soundType,
      );
      numMasc++;
      numMasc++;
    }
  }
  /////Lesson 8 load
  if (examplesNum.length >= 8) {
    getLesson = lessonNumber - examplesNum.length + 7;
    numMasc = 1;
    for (var num = 1; num <= forExamples8.length; num++) {
      quizSounds.push(
        oPath2 + getLesson + '/sounds/sound' + numMasc + soundType,
      );
      numMasc++;
      numMasc++;
    }
  }
  /////Lesson 9 load
  if (examplesNum.length >= 9) {
    getLesson = lessonNumber - examplesNum.length + 8;
    numMasc = 1;
    for (var num = 1; num <= forExamples9.length; num++) {
      quizSounds.push(
        oPath2 + getLesson + '/sounds/sound' + numMasc + soundType,
      );
      numMasc++;
      numMasc++;
    }
  }
  /////Lesson 10 load
  if (examplesNum.length >= 10) {
    getLesson = lessonNumber - examplesNum.length + 9;
    numMasc = 1;
    for (var num = 1; num <= forExamples10.length; num++) {
      quizSounds.push(
        oPath2 + getLesson + '/sounds/sound' + numMasc + soundType,
      );
      numMasc++;
      numMasc++;
    }
  }

  numWords = forExamples.length;

  ///////////END LOAD QUIZ PRESENTATION
}

function loadPresentation() {
  ///////////////////////////CREATE BUTTONS
  buttonCreate = '';
  buttonCreate2 = '';
  var buttonNum = 0;
  wordChangeNum = [];
  wordChangeNum2 = [];

  for (var num = 0; num < forTitles.length; num++) {
    buttonCreate =
      buttonCreate +
      '<button class="ouinoButton" id="buttonB' +
      buttonNum +
      '">' +
      forTitles[num] +
      '<br><i style="font-size:15px; font-weight: 300;">' +
      engTitles[num] +
      '</i></button>';
    wordChangeNum.push(buttonNum);
    wordChangeNum2.push(buttonNum + exampleNums[num]);
    buttonNum = buttonNum + exampleNums[num] + 1;
  }
  ///////////////////////////CREATE SOUND ARRAY
  fastSounds = [];
  slowSounds = [];
  quizSounds = [];
  var numMasc = 1;
  for (var numD = 0; numD < numWords; numD++) {
    fastSounds.push(oPath + 'sounds/sound' + numMasc + soundType);
    numMasc++;
    slowSounds.push(oPath + 'sounds/sound' + numMasc + soundType);
    numMasc++;
  }
  quizSounds = fastSounds.slice();
  numMasc = 2;
  var plusOne = 1;

  for (var numE = 0; numE < forTitles.length; numE++) {
    forExamples.splice(
      wordChangeNum[numE],
      0,
      '<strong>' +
        forSideTitles[numE]
          .split('<br>')
          .join("<em style='color: #333;'> / </em>") +
        '</strong>',
    );
    var currentWordString = engSideTitles[numE].split('<br>').join(' / ');
    if (currentWordString.charAt(currentWordString.length - 1) == ')') {
      currentWordString = currentWordString
        .split('(')
        .join(
          "<span style='color: #505050; font-size: 0.8em; font-weight: 400;'>(",
        )
        .split(')')
        .join(')</span>');
    }
    engExamples.splice(
      wordChangeNum[numE],
      0,
      '<em>' + currentWordString + '</em>',
    );
    imageArray.splice(
      wordChangeNum[numE],
      0,
      oPath + 'images/pic' + (wordChangeNum[numE] + plusOne) + '.jpg',
    );
    plusOne--;
    fastSounds.splice(
      wordChangeNum[numE],
      0,
      oPath + 'sounds/title' + numMasc + soundType,
    );
    numMasc++;
    slowSounds.splice(
      wordChangeNum[numE],
      0,
      oPath + 'sounds/title' + numMasc + soundType,
    );
    numMasc++;
  }

  //2020 EXTRA START///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (lessonNumber === 0) {
    imageArray = combImage.slice();
  }
  var allExtra = [];
  var allEnglish = [];
  var allSounds = [];
  var allImages = [];
  var insertNum = 0;
  var oldNums = wordChangeNum.slice();
  if (exampleNums.length >= 1) {
    insertNum = insertNum + exampleNums[0] + 1;
  }
  if (typeof forExtra1 !== 'undefined') {
    allExtra = allExtra.concat(forExtra1);
    allEnglish = allEnglish.concat(engExtra1);
    allImages = allImages.concat(imageExtra1);
    allSounds = allSounds.concat(fastExtra1);
    for (i = 0; i < forExtra1.length; i++) {
      forExamples.splice(insertNum, 0, forExtra1[i]);
      engExamples.splice(insertNum, 0, engExtra1[i]);
      imageArray.splice(insertNum, 0, imageExtra1[i]);
      fastSounds.splice(insertNum, 0, fastExtra1[i] + sType);
      slowSounds.splice(insertNum, 0, slowExtra1[i] + sType);
      insertNum++;
      exampleNums[0] = exampleNums[0] + 1;
      for (xx = 1; xx < wordChangeNum.length; xx++) {
        wordChangeNum[xx] = wordChangeNum[xx] + 1;
      }
      for (xx = 0; xx < wordChangeNum2.length; xx++) {
        wordChangeNum2[xx] = wordChangeNum2[xx] + 1;
      }
    }
  }

  if (exampleNums.length >= 2) {
    insertNum = insertNum + exampleNums[1] + 1;
  }

  if (typeof forExtra2 !== 'undefined') {
    allExtra = allExtra.concat(forExtra2);
    allEnglish = allEnglish.concat(engExtra2);
    allImages = allImages.concat(imageExtra2);
    allSounds = allSounds.concat(fastExtra2);
    for (i = 0; i < forExtra2.length; i++) {
      forExamples.splice(insertNum, 0, forExtra2[i]);
      engExamples.splice(insertNum, 0, engExtra2[i]);
      imageArray.splice(insertNum, 0, imageExtra2[i]);
      fastSounds.splice(insertNum, 0, fastExtra2[i] + sType);
      slowSounds.splice(insertNum, 0, slowExtra2[i] + sType);
      insertNum++;
      exampleNums[1] = exampleNums[1] + 1;
      for (xx = 2; xx < wordChangeNum.length; xx++) {
        wordChangeNum[xx] = wordChangeNum[xx] + 1;
      }
      for (xx = 1; xx < wordChangeNum2.length; xx++) {
        wordChangeNum2[xx] = wordChangeNum2[xx] + 1;
      }
    }
  }

  if (exampleNums.length >= 3) {
    insertNum = insertNum + exampleNums[2] + 1;
  }

  if (typeof forExtra3 !== 'undefined') {
    allExtra = allExtra.concat(forExtra3);
    allEnglish = allEnglish.concat(engExtra3);
    allImages = allImages.concat(imageExtra3);
    allSounds = allSounds.concat(fastExtra3);
    for (i = 0; i < forExtra3.length; i++) {
      forExamples.splice(insertNum, 0, forExtra3[i]);
      engExamples.splice(insertNum, 0, engExtra3[i]);
      imageArray.splice(insertNum, 0, imageExtra3[i]);
      fastSounds.splice(insertNum, 0, fastExtra3[i] + sType);
      slowSounds.splice(insertNum, 0, slowExtra3[i] + sType);
      insertNum++;
      exampleNums[2] = exampleNums[2] + 1;
      for (xx = 3; xx < wordChangeNum.length; xx++) {
        wordChangeNum[xx] = wordChangeNum[xx] + 1;
      }
      for (xx = 2; xx < wordChangeNum2.length; xx++) {
        wordChangeNum2[xx] = wordChangeNum2[xx] + 1;
      }
    }
  }

  if (exampleNums.length >= 4) {
    insertNum = insertNum + exampleNums[3] + 1;
  }

  if (typeof forExtra4 !== 'undefined') {
    allExtra = allExtra.concat(forExtra4);
    allEnglish = allEnglish.concat(engExtra4);
    allImages = allImages.concat(imageExtra4);
    allSounds = allSounds.concat(fastExtra4);
    for (i = 0; i < forExtra4.length; i++) {
      forExamples.splice(insertNum, 0, forExtra4[i]);
      engExamples.splice(insertNum, 0, engExtra4[i]);
      imageArray.splice(insertNum, 0, imageExtra4[i]);
      fastSounds.splice(insertNum, 0, fastExtra4[i] + sType);
      slowSounds.splice(insertNum, 0, slowExtra4[i] + sType);
      insertNum++;
      exampleNums[3] = exampleNums[3] + 1;
      for (xx = 4; xx < wordChangeNum.length; xx++) {
        wordChangeNum[xx] = wordChangeNum[xx] + 1;
      }
      for (xx = 3; xx < wordChangeNum2.length; xx++) {
        wordChangeNum2[xx] = wordChangeNum2[xx] + 1;
      }
    }
  }

  if (exampleNums.length >= 5) {
    insertNum = insertNum + exampleNums[4] + 1;
  }

  if (typeof forExtra5 !== 'undefined') {
    allExtra = allExtra.concat(forExtra5);
    allEnglish = allEnglish.concat(engExtra5);
    allImages = allImages.concat(imageExtra5);
    allSounds = allSounds.concat(fastExtra5);
    for (i = 0; i < forExtra5.length; i++) {
      forExamples.splice(insertNum, 0, forExtra5[i]);
      engExamples.splice(insertNum, 0, engExtra5[i]);
      imageArray.splice(insertNum, 0, imageExtra5[i]);
      fastSounds.splice(insertNum, 0, fastExtra5[i] + sType);
      slowSounds.splice(insertNum, 0, slowExtra5[i] + sType);
      insertNum++;
      exampleNums[4] = exampleNums[4] + 1;
      for (xx = 5; xx < wordChangeNum.length; xx++) {
        wordChangeNum[xx] = wordChangeNum[xx] + 1;
      }
      for (xx = 4; xx < wordChangeNum2.length; xx++) {
        wordChangeNum2[xx] = wordChangeNum2[xx] + 1;
      }
    }
  }

  if (exampleNums.length >= 6) {
    insertNum = insertNum + exampleNums[5] + 1;
  }

  if (typeof forExtra6 !== 'undefined') {
    allExtra = allExtra.concat(forExtra6);
    allEnglish = allEnglish.concat(engExtra6);
    allImages = allImages.concat(imageExtra6);
    allSounds = allSounds.concat(fastExtra6);
    for (i = 0; i < forExtra6.length; i++) {
      forExamples.splice(insertNum, 0, forExtra6[i]);
      engExamples.splice(insertNum, 0, engExtra6[i]);
      imageArray.splice(insertNum, 0, imageExtra6[i]);
      fastSounds.splice(insertNum, 0, fastExtra6[i] + sType);
      slowSounds.splice(insertNum, 0, slowExtra6[i] + sType);
      insertNum++;
      exampleNums[5] = exampleNums[5] + 1;
      for (xx = 6; xx < wordChangeNum.length; xx++) {
        wordChangeNum[xx] = wordChangeNum[xx] + 1;
      }
      for (xx = 5; xx < wordChangeNum2.length; xx++) {
        wordChangeNum2[xx] = wordChangeNum2[xx] + 1;
      }
    }
  }

  if (exampleNums.length >= 7) {
    insertNum = insertNum + exampleNums[6] + 1;
  }

  if (typeof forExtra7 !== 'undefined') {
    allExtra = allExtra.concat(forExtra7);
    allEnglish = allEnglish.concat(engExtra7);
    allImages = allImages.concat(imageExtra7);
    allSounds = allSounds.concat(fastExtra7);
    for (i = 0; i < forExtra7.length; i++) {
      forExamples.splice(insertNum, 0, forExtra7[i]);
      engExamples.splice(insertNum, 0, engExtra7[i]);
      imageArray.splice(insertNum, 0, imageExtra7[i]);
      fastSounds.splice(insertNum, 0, fastExtra7[i] + sType);
      slowSounds.splice(insertNum, 0, slowExtra7[i] + sType);
      insertNum++;
      exampleNums[6] = exampleNums[6] + 1;
      for (xx = 7; xx < wordChangeNum.length; xx++) {
        wordChangeNum[xx] = wordChangeNum[xx] + 1;
      }
      for (xx = 6; xx < wordChangeNum2.length; xx++) {
        wordChangeNum2[xx] = wordChangeNum2[xx] + 1;
      }
    }
  }

  if (exampleNums.length >= 8) {
    insertNum = insertNum + exampleNums[7] + 1;
  }

  if (typeof forExtra8 !== 'undefined') {
    allExtra = allExtra.concat(forExtra8);
    allEnglish = allEnglish.concat(engExtra8);
    allImages = allImages.concat(imageExtra8);
    allSounds = allSounds.concat(fastExtra8);
    for (i = 0; i < forExtra8.length; i++) {
      forExamples.splice(insertNum, 0, forExtra8[i]);
      engExamples.splice(insertNum, 0, engExtra8[i]);
      imageArray.splice(insertNum, 0, imageExtra8[i]);
      fastSounds.splice(insertNum, 0, fastExtra8[i] + sType);
      slowSounds.splice(insertNum, 0, slowExtra8[i] + sType);
      insertNum++;
      exampleNums[7] = exampleNums[7] + 1;
      for (xx = 8; xx < wordChangeNum.length; xx++) {
        wordChangeNum[xx] = wordChangeNum[xx] + 1;
      }
      for (xx = 7; xx < wordChangeNum2.length; xx++) {
        wordChangeNum2[xx] = wordChangeNum2[xx] + 1;
      }
    }
  }

  for (var xx = wordChangeNum.length - 1; xx >= 0; xx--) {
    buttonCreate = buttonCreate
      .split('id="buttonB' + oldNums[xx] + '"')
      .join('id="buttonB' + wordChangeNum[xx] + '"');
  }

  for (xx = 0; xx < allSounds.length; xx++) {
    allSounds[xx] = allSounds[xx] + sType;
  }

  forExamplesQuiz2 = allExtra.slice();
  engExamplesQuiz2 = allEnglish.slice();
  imageArrayQuiz2 = allImages.slice();
  quizSounds2 = allSounds.slice();

  //2020 EXTRA END////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //////////////2020 EXTRA START	(MODIFICATION)
  numWords = forExamples.length;
  for (var numA = 0; numA < forTitles.length; numA++) {
    if (narration[numA] != '') {
      buttonCreate2 =
        buttonCreate2 +
        '<div id="narraBtn' +
        wordChangeNum[numA] +
        '" class="ouinoButton2 narraBtns"></div>';
    }
  }

  var breakIt = false;
  buttonCreate3 = '';

  for (var num = 0; num < forExamples.length; num++) {
    if (allExtra.indexOf(forExamples[num]) == -1) {
      buttonCreate2 =
        buttonCreate2 +
        '<div id="button' +
        num +
        '" class="ouinoButton2"></div>';
      breakIt = true;
    } else {
      buttonCreate3 =
        buttonCreate3 +
        '<div id="button' +
        num +
        '" class="ouinoButton2 extraBtn"></div>';
    }
  }
  //////////////2020 EXTRA END (MODIFICATION)

  ///////////END LOAD PRESENTATION
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DETERMINE BUTTON CLICKED
function buttonClicked() {
  sideClicked = false;
  picControl = 'picFade';
  if (
    $(this).attr('id').charAt(0) == 'n' ||
    $(this).attr('id').charAt(6) == 'B'
  ) {
    narrPlayed = false;
  } else {
    narrPlayed = true;
  }
  currentWordNum = $(this)
    .attr('id')
    .split('narraBtn')
    .join('')
    .split('buttonB')
    .join('')
    .split('button')
    .join('');
  currentWordNum = parseInt(currentWordNum);
  changeWord();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////QUIZ RESIZE
function resizeQuiz() {
  if (focused && currentDevice == 'mobile') {
    return;
  }
  viewportHeight = $('body').height() - 45;

  ///OS START
  if ($('body').hasClass('notch')) {
    viewportHeight = viewportHeight - 45;
  }
  ////ANDROID
  if ($('body').hasClass('android')) {
    viewportHeight = viewportHeight - 20;
  }
  $('.menuBtnContainer').show();
  $('.menuTitleContainer').hide();
  if ($('body').hasClass('notch')) {
    $('#quizTxt1').show();
    $('#quizTxt2').show();
  }
  ///OS END

  viewportWidth = $('html').innerWidth();
  //2020
  screenRatio = $('html').width() / $('html').height();
  //2020

  if (viewportWidth >= 800) {
    $('#quizBannerItem3').show();
    $('#quizBannerItem2').show();
  } else if (viewportWidth < 800 && viewportWidth >= 700) {
    $('#quizBannerItem3').hide();
    $('#quizBannerItem2').show();
  } else if (viewportWidth < 500) {
    $('#quizBannerItem3').hide();
    $('#quizBannerItem2').hide();
    $('#quizTxt1').hide();
    $('#quizTxt2').hide();
  } else {
    $('#quizBannerItem3').hide();
    $('#quizBannerItem2').hide();
  }

  if (viewportWidth < 500) {
    $('#lineBreak').html('<br>');
    $('#quizTxt1').hide();
    $('#quizTxt2').hide();
  } else {
    $('#lineBreak').html('&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;');
    $('#quizTxt1').show();
    $('#quizTxt2').show();
  }

  if (viewportHeight < 655 || screenRatio <= 1) {
    $('#quizContent').css({ height: viewportHeight - 45 + 'px' });
  } else {
    $('#quizContent').css({ height: '610px' });
  }

  var typeWidth = $('#quizContent').width();
  var typeHeight = $('#quizContent').height();

  if (screenRatio >= 0.85) {
    $('.chooseQuizIcon').css({
      height: typeHeight * 0.4 - 75 + 'px',
      width: 'auto',
    });
  } else {
    $('.chooseQuizIcon').css({
      width: typeWidth * 0.35 + 'px',
      height: 'auto',
    });
  }

  viewportHeight = $('body').height() - 45;
  if (viewportHeight > 650 && screenRatio > 1) {
    spaceLeft = 520;
  } else {
    spaceLeft = viewportHeight - 130;
  }

  if (viewportHeight <= 700) {
    $('#lightTimerDiv').css({ width: viewportHeight / 4 + 'px' });
  } else {
    $('#lightTimerDiv').css({ width: '190px' });
  }

  ///OS START
  if ($('body').hasClass('notch')) {
    $('#quizTxt1').show();
    $('#quizTxt2').show();
  }
  if ($('body').hasClass('notch')) {
    spaceLeft = spaceLeft - 45;
  }
  ////ANDROID
  if ($('body').hasClass('android')) {
    spaceLeft = spaceLeft - 20;
  }
  ///OS END

  if (screenRatio > 1) {
    ////IF LANDSCAPE
    spaceLeft = spaceLeft - 20;
    $('#quizAllItemsC, #quizWriteImg').css({
      height: spaceLeft * 0.95 + 'px',
      'margin-top': '28px',
      position: 'relative',
    });
    $('#quizWriteImg').css({
      'margin-right': '2%',
      'margin-left': '1%',
      width: '45%',
      'max-width': '5000px',
      bottom: 'auto',
    });
    $('#quizAllItemsC').css({
      'margin-left': '2%',
      'margin-right': '1%',
      width: '49%',
      'max-width': '5000px',
      'padding-top': '0',
    });
    $('#writeAnswerBoard').css({ height: spaceLeft * 0.6 + 'px' });
  } else {
    spaceLeft = spaceLeft - 50;
    $('#quizAllItemsC, #quizWriteImg').css({
      width: '96%',
      'margin-right': '2%',
      'margin-left': '2%',
    });
    $('#quizWriteImg').css({
      height: spaceLeft * 0.47 + 'px',
      bottom: '5px',
      position: 'absolute',
    });
    $('#quizAllItemsC').css({
      height: spaceLeft * 0.52 + 'px',
      'margin-top': '30px',
    });
    $('#writeAnswerBoard').css({ height: spaceLeft * 0.54 - 160 + 'px' });
  }

  if (currentQuiz == 1) {
    $('.possWord').css({ width: $('#quizAllItemsC').width() * 0.99 + 'px' });
    var possHeight =
      $('#quizSentenceEng').outerHeight() + $('#quizSentenceFor').outerHeight();
    if ($('body').hasClass('notch') && possHeight > 90) {
      $('.possWord').css({
        height: $('#quizAllItemsC').height() / 4 - 12 + 'px',
      });
      $('#quizAllItemsC').css({ 'margin-top': '12px' });
    } else {
      $('.possWord').css({
        height: $('#quizAllItemsC').height() / 4 - 4 + 'px',
      });
      $('#quizAllItemsC').css({ 'margin-top': '28px' });
    }
  }

  if ($('body').hasClass('notch')) {
    $('#quizWriteImg').css({ bottom: '-5px' });
  }
  ////END RESIZE
  setTimeout(function () {
    resizeQuizText();
  }, 20);
  /////
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOCABULARY RESIZE
function resizePage() {
  ////OS START
  if ($('html').innerWidth() < 550) {
    $('body').addClass('notch');
    if ($('#startCover').is(':visible')) {
      $('.menuBar').addClass('noBack');
      $('.menuBtnContainer, .menuTitleContainer').hide();
    } else if ($('#slideCont').is(':visible')) {
      $('.menuBar').addClass('noBack');
    } else {
      $('.menuBtnContainer, .menuTitleContainer').show();
    }
  } else {
    $('body').removeClass('notch');
    $('.menuBtnContainer, .menuTitleContainer').show();
  }
  ////OS END
  if ($('#quizContent').is(':visible')) {
    resizeQuiz();
    return;
  }
  $('#startCover').css({ height: $('html').innerHeight() + 'px' });

  resizeBlockMenu();
  //////////START LOAD VARIABLES
  var elementWidth;
  var contentWidth;
  var mobileWidth;
  viewportHeight = $('body').height() - 45;
  viewportWidth = $('html').innerWidth();
  var elementHeight;
  var buttonHeight;
  var screenRatio;
  //2020
  screenRatio = $('html').width() / $('html').height();
  //2020
  var areaHeight = viewportHeight - 30;
  ///OS START
  if ($('body').hasClass('notch')) {
    areaHeight = areaHeight - 50;
  }
  if ($('body').hasClass('android')) {
    areaHeight = areaHeight - 20;
  }
  if ($('body').hasClass('notch')) {
    $('.menuBlock').css({ height: areaHeight - 15 + 'px' });
  }

  ///OS END
  //////////////////////////MENU LOGO VISIBILITY
  if (viewportWidth < 600) {
    $('.menuItem').css({ 'font-size': '15px' });
    $('.menuItemDescription').css({ 'font-size': '11px' });
  } else {
    $('.menuItem').css({ 'font-size': '17px' });
    $('.menuItemDescription').css({ 'font-size': '14px' });
  }

  if (viewportWidth >= 850) {
    $('.menuLogo').show();
  } else {
    $('.menuLogo').hide();
  }

  //////////////////////////START PORTRAIT MODE
  ///2019 CHANGE
  if (screenRatio < 1 && $('html').width() != $('html').height()) {
    $('.ouinoContent').addClass('portrait');
    $('.ouinoContent').css({ height: areaHeight + 'px' });
    $('.ouinoButton').css({ height: '50px' });
    $('.ouinoButton i').hide();
    $('.buttonContainer').css({ height: '56px' });
    $('.shinyPicture').css({ width: '100%', height: areaHeight - 475 + 'px' });
    $('.wordSentenceB').css({
      width: '100%',
      height: 190 + 'px',
      top: areaHeight - 207 + 'px',
    });

    $('.shinyPicture').addClass('noMaxHeight');
  }
  //////////////////////////END PORTRAIT MODE
  //////////////////////////START LANDSCAPE MODE
  else if (screenRatio >= 1) {
    $('.shinyPicture').removeClass('noMaxHeight');

    $('.shinyPicture').css({ width: '58%' });
    $('.wordSentenceB').css({ width: '41.2%' });
    $('.ouinoContent').removeClass('portrait');
    $('.ouinoContent').css({ height: areaHeight + 'px' });

    if (viewportHeight >= 730) {
      $('.shinyPicture').css({
        height: 400 + 'px',
        top: '105px',
        bottom: 'auto',
      });
      $('.wordSentenceB').css({
        height: 390 + 'px',
        top: '105px',
        bottom: 'auto',
        left: 'auto',
        right: '0',
        'max-height': '440px',
      });
      $('.buttonContainer').css({ height: '96px' });
      $('.ouinoButton').css({ height: '90px' });
      $('.ouinoButton i').show();
    } else if (viewportHeight >= 705) {
      $('.shinyPicture').css({
        height: areaHeight - 300 + 'px',
        top: '105px',
        bottom: 'auto',
      });
      $('.wordSentenceB').css({
        height: areaHeight - 310 + 'px',
        top: '105px',
        bottom: 'auto',
        left: 'auto',
        right: '0',
        'max-height': '440px',
      });
      $('.buttonContainer').css({ height: '96px' });
      $('.ouinoButton').css({ height: '90px' });
      $('.ouinoButton i').show();
    } else {
      $('.shinyPicture').css({
        height: areaHeight - 280 + 'px',
        top: '85px',
        bottom: 'auto',
      });
      $('.wordSentenceB').css({
        height: areaHeight - 290 + 'px',
        top: '85px',
        bottom: 'auto',
        left: 'auto',
        right: '0',
        'max-height': 'none',
      });
      $('.buttonContainer').css({ height: '86px' });
      $('.ouinoButton').css({ height: '70px' });
      $('.ouinoButton i').hide();
    }
  }
  ///2019 CHANGE
  //////////////////////////END LANDSCAPE MODE
  if ($('#endWrap').is(':visible')) {
    if (viewportHeight >= 700) {
      $('#learningTip').show();
    } else {
      $('#learningTip').hide();
    }
  }
  //////////////START CHANGE BUTTON AND TEXT
  resizeText();
  resizeTitle();

  //////////////END CHANGE BUTTON AND TEXT
}

///////////////////////////START CHANGE TITLE LENGTH DEPENDING ON SIZE
function resizeTitle() {
  $('.menuTitleContainer').text(lessonTitle);
  ///OS START
  if ($('html').innerWidth() < 550) {
    if (lessonTitle.length > 41) {
      $('.menuTitleContainer').text(lessonTitle.slice(0, 36) + '...');
    }
    return;
  }
  ///OS END
  var menuBtnWidth = $('.menuBtnContainer').width();
  var menuTitleWidth = $('.menuTitleContainer').width();
  var menuLogoWidth = $('.smallLogo').width();
  var menuLeftOver =
    viewportWidth - (menuLogoWidth + menuTitleWidth + menuBtnWidth);
  while (menuLeftOver < 60 && $('.menuTitleContainer').text().length > 6) {
    var menuText = $('.menuTitleContainer').text().slice(0, -4);
    menuText = menuText.concat('...');
    menuText = menuText.split(' ...').join('...');
    $('.menuTitleContainer').html(menuText);
    menuTitleWidth = $('.menuTitleContainer').width();
    menuLeftOver =
      viewportWidth - (menuLogoWidth + menuTitleWidth + menuBtnWidth);
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////SCRIPT FOR ALL PRESENTATIONS
/////////////////////////
var userName;
var currQuizNum;
var resetCode;
var userEmail;
var userEmail2;
var storeInfo;
var tuvm58dj;
var tuvm58dj2;
var fieldToUpdate;
var infoToUpdate;
var quizQuesNum;
var currentPts;
var titlePlay = true;
var currentErrors;
var userInfo;
var timerTime;
var soundRepeated;
var fastOverwrite = false;
var sideClicked = false;
var narrPlayed = false;
var blockExNum;
var knowledgeStars;
var restartedLesson;
var quizScores;
var pauseTwo;
var theFont;
var registerLoaded;
var tabletMusic = false;
var passwordLoaded;
var viewportHeight;
var viewportWidth;
var currentWordNum = 0;
var currentMusic;
var picToggle = 1;
var picControl;
var soundPlaying = false;
var wordTimer;
var mySound;
var madeError;
var buttonCreate;
var buttonCreate2;
var soundLessonEvent = false;
var soundQuizEvent = false;
var soundSlideEvent = false;
var fastSounds;
var slowSounds;
var quizSounds;
var checkAccent = false;
var foundArticle;
var quizGoodAnswer;
var quizGoodPunct;
var arrowClicks;
var writtenString;
var timerWait;
var charsToAdd;
var wArr;
var allLetters;
var scrambled;
var letterArray;
var letterArrayNum;
var currentQuiz;
var pastQuizScore;
var quizNumArray;
var pastQuizScoreAll;
var quizPtsCount = 65;
var timerDelay;
var audioSprite;
var currentSprite;
var onTimeUpdate;
var submitted;
var quizNumQues;
var playSprite;
var disableTimer = false;
var quizLoaded = false;
var timerLength = 3000;
var numberLength = 7000;
var fastOrSlow;
var blockTitle = false;
var lessonInit = 'true';
var wtZGh = '/php/';
var ETTNv = 'www.';
var MJhei = 'resetCode';
var cWbBT = '.php';
var jGWFQ = 'getContent';
var KsXgx = 'update';
var MTixn = 'updateAll';
var rvUnf = 'eliseunogueira';
var QjSKe = 'sendReset';
var PbWjZ = 'register';
var YLtLU = 'https://';
var OGXpV = '.com.br';

////////////////////////////////////////////////HTML CODE
var loginAppend =
  '<header id="loginCover" class="wrapper"><div id="loginCenter" class="optionsIn gradientColor alignVerticalWin"><img class="letterLogo" src="../../common/letterLogo.svg"><form autocomplete="off" id="loginForm"><table class="loginTable"><tr><th colspan="2"><h3 id="loginTitle" class="loginTitle">Ouino Account Login</h3></th></tr><tr><td colspan="2"><input type="email" id="emailField" required class="loginField" placeholder="Email Address"/></td></tr><tr><td colspan="2"><input type="password" id="jguyr4" required class="loginField" maxlength="12" placeholder="Password"/><h5 id="loginForgot" class="smallerUnderline">Forgot password?</h5></td></tr><tr><td><h5 id="loginRemember" class="loginRemember"><img src="../../common/checkOff.svg" id="rememberCheck" class="rememberCheck"/>Remember me</h5></td><td><input type="submit" class= "loginOptions gradientColor2 loginSubmit" value="Log in"></td></tr><tr><td colspan="2"><h5 id="loginBottom" class="smallUnderline">Don' +
  "'" +
  't have an account yet? Create one.</h5></td></tr></table></form></div><div id="loginOffline" class="optionsIn gradientColor alignVerticalWin"><table class="offlineTable"><tr><th width="15%"><img class="warningLogo" src="../../common/warning.svg"></th><td colspan="2"><h3 class="offlineTitle">CURRENTLY OFFLINE</h3><p class="offlineWord">You are currently offline. An internet connection is required to sync progress between devices. Your progress will be saved locally for now. Simply restart the program when an internet connection is available in order to sync your progress with the server.</td></tr></table><table class="offlineTable2"><tr><td width="60%"><h5 id="offlineRemember" class="loginRemember"><img src="../../common/checkOff.svg" id="offlineCheck" class="rememberCheck"/>Do not show again.</h5></td><td><input type="submit" class= "loginOptions gradientColor2" value="Start Lesson" id="offlineButton"></td></tr></table></div></header><div id="warningWrap" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><table class="messageTable"><tr><td><h2 class="messageTitle"><img class="messageCheck" src="../../common/success.svg">Account Created!</h2></td></tr><tr><td><h4 id="accountsLeft"></h4><p id="accountsText"></p></td></tr><tr><td><h5 id="loginRemember2" class="loginRemember"><img src="../../common/checkOff.svg" id="rememberCheck2"/>Remember new account on this computer.</h5></td></tr></table><table class="registerButtons tenPxPad"><tr><td class="registerButton"><input type="button" class= "loginOptions gradientColor2" value="Go back" id="doneRegisterBtn2"></td><td><input type="submit" class= "loginOptions gradientColor2" value="Log in" id="doneLogInBtn"></td></tr></table></div></div><header id="registerCover" class="wrapper2"> <div id="registerCenter" class="optionsIn gradientColor alignVerticalWin"><h2 class="registerTitle">Create a Ouino Account</h2><form autocomplete="off" id="registerForm"><table class="registerTable"><tr><td colspan="3"><h2 id="activationText" class="centerMenuItems registerText">Enter your activation key.<a name="You should have received an email with your activation key at the time of purchase. If you' +
  "'" +
  've purchased the retail box, your activation key should be located in your package." class="tooltip"><img src="../../common/question.svg" class="questionMark" /></a></h2><input type="input" id="activationField" required class="registerField activationField" placeholder="Activation Key"/></td></tr><tr><td colspan="3"><h2 id="accountCreateText" class="centerMenuItems registerText">Create your login information.<a name="Enter the information you want to use to log into your Ouino Languages account." class="tooltip"><img src="../../common/question.svg" class="questionMark" /></a></h2><input type="name" id="nameFieldSet" required class="registerField" placeholder="Full Name"/></td></tr><tr><td><input type="email" id="emailFieldSet" required class="rgField1" placeholder="Email Address"/></td><td><input type="password" id="jguyr4Set" required class="rgField1" maxlength="12" placeholder="Create a password"/></td></tr><tr><td><input type="email" id="emailFieldSet2" required class="rgField2" placeholder="Confirm Email"/></td><td><input type="password" id="jguyr4Set2" required class="rgField2" maxlength="12" placeholder="Confirm password"/></td></tr></table><table class="registerTable"><tr><td><input type="button" id="doneRegisterBtn" class="loginOptions gradientColor2" value="Go back"></td><td><input type="submit" class="loginOptions gradientColor2" value="Create Account"></td></tr></table></form></div></header><div id="passwordWrap" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><form autocomplete="off" id="passwordForm" class="alignVerticalItem"><table height="50%" class="messageTable"><tr><td colspan="2"><h3 id="passwordTitle" class="loginTitle">Account Password Reset</h3><input type="email" id="emailFieldReset" required class="loginField" placeholder="Enter your registered email address"/></td></tr><tr><td class="registerButton"><input type="button" class="loginOptions gradientColor2" value="Go back" id="hidePasswordBtn"></td><td><input type="submit" class= "loginOptions gradientColor2" value="Get Reset Code"></td></tr><tr><td colspan="2"><h5 id="passwordSkipBtn" class="smallUnderline">Already have a reset code? Skip this step.</h5></td></tr></table></form></div></div><div id="passwordReset" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><form autocomplete="off" id="passwordForm2" class="alignVerticalItem"><table class="messageTable"><tr><td colspan="2"><h3 id="passwordTitle2" class="loginTitle">Account Password Reset</h3><p>Email with reset code sent successfully! Please enter the reset code in the field below, followed by your new password.</p></td></tr><tr><td colspan="2"><input type="input" id="resetCodeField" required class="registerField" placeholder="Enter the reset code"/></td></tr><tr><td><input type="password" id="jguyr4Reset" required class="rgField2" maxlength="12" placeholder="Create a password"/></td><td><input type="password" id="jguyr4Reset2" required class="rgField2" maxlength="12" placeholder="Confirm password"/></td></tr><tr><td class="registerButton"><input type="button" class="loginOptions gradientColor2" value="Go back" id="hidePasswordBtn2"></td><td><input type="submit" class= "loginOptions gradientColor2" value="Reset Password"></td></tr></table></form></div></div><div id="warningWrap2" class="wrapper2"><div class="optionsIn gradientColor alignVerticalWin"><table class="messageTable alignVerticalItem max300"><tr><td colspan="3"><h2 class="messageTitle"><img class="messageCheck" src="../../common/success.svg">Password updated!</h2></td></tr><tr><td colspan="3"><p>Your password has been updated successfully and a confirmation email has been sent.</p></td></tr><tr><td width="35%"></td><td><input type="button" class="loginOptions gradientColor2" value="Okay" id="doneRegisterBtn3"></td><td width="35%"></td></tr></table></div></div>';

var mainHTML =
  '<div id="loadLogo" style="display: none; opacity: 0.9; border-radius: 10px; cursor: default; padding: 40px; background: black; z-index: 2000; position: fixed; width: 100px; height: 30px; margin: auto auto; left:0; right: 0; top: 0; bottom:0; font-size: 22px; font-weight: bold; color: white;">LOADING...</div><section id="slideCont"><img id="slideImg" src=""/><div id="slideText"></div><div class="slideBtn1">Okay</div><div class="slideBtn2">Don' +
  "'" +
  't show me tips</div></section><div id="fontPreload1"></div><div id="fontPreload2"></div><div id="fontPreload3"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel"></b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><span class="menuTitleContainer alignVerticalItem"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><img id="keyboardBtn" src="../../common/keyboard2.svg" class="smallIcon" style="display:none;"/><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I' +
  "'" +
  'm confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoBlock.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><div class="menuBlock"><div class="closeWinBtn"></div><div id="menuBlockContent"></div></div><div id="menuBlockWrap"></div><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio>';

var lessonAppend =
  '<div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><div id="extraSwitch"><label class="toggle-control"><input type="checkbox"><span class="control"></span></label><p>Extra Examples?</p></div><main class="ouinoContent"><section class="wordSentenceB"><div id="extraOn"></div><div id="extraOff"></div><div class="wordSentenceInB alignVerticalItem"> <div id="slowBubble2" class="slowBubble"></div><div class="textWrap3B"> <h6 class="disSentenceB">-Text Disabled-</h6> </div><div class="textWrapB"> <h6 class="forSentenceB"></h6> </div><div class="textWrap2B"> <h6 class="engSentenceB">When</h6> </div></div><div id="roundButtonsOut"> <div id="roundButtons"></div><br><div id="roundButtons2"></div></div></section> <section class="wordSentence"> <h6 class="narrSentence alignVerticalItem"></h6> <div class="wordSentenceIn alignVerticalItem"> <div id="slowBubble1" class="slowBubble"></div><div class="textWrap3"> <h6 class="disSentence">-Text Disabled-</h6> </div><div class="textWrap"> <h6 class="forSentence"></h6> </div><br><div class="textWrap2"> <h6 class="engSentence"></h6> </div></div></section> <figure class="shinyPicture"><div class="engToggle"></div><div class="insight"></div><div id="flashCard"></div><div id="flashCard2"></div><div id="sideNote"></div><figure class="arrowControl"> <div class="leftArrow"></div><div class="rightArrow"></div><div id="middleSwipe"></div></figure> <figure class="mainPic2" alt="mainImage"></figure> <figure class="mainPic1" alt="mainImage"></figure> <img class="whiteBack" src="../../common/white.jpg" alt="mainImage"></figure> <aside class="buttonContainer" style="-webkit-overflow-scrolling: touch;"></aside> <div class="buttonWrap"></div></main>';

var quizAppend =
  '<div id="wrongAnswerPic"> <div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"> <div id="goodAnswerIn"></div></div><img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><table id="quizBlock" class="gradientColor"> <tr> <th colspan="2" style="font-size:30px;">Building Blocks Quiz</th> </tr><tr> <td id="sideQuizIcon"></td><td style="padding: 20px 10px 20px 30px;">This&nbsp;quiz&nbsp;contains&nbsp;questions&nbsp;for&nbsp;all<br><b id="typeOfBlock" class="yellowText">conjunctions</b>&nbsp;lessons.<br><br>It&nbsp;is&nbsp;recommended&nbsp;that&nbsp;you&nbsp;take&nbsp;all<br>these&nbsp;lessons&nbsp;before&nbsp;taking&nbsp;the&nbsp;quiz.<br><br>If you are ready for this challenge, click&nbsp;on&nbsp;"continue"&nbsp;below!</td></tr><tr> <td id="quizBlockContinue" colspan="2"><div class="wrapBtn">CONTINUE</div></td></tr></table><img id="quizGoBack" src="../../common/menuIcon1.svg"> <table id="quizDone" > <tr> <th colspan="2" id="quizDoneTitle"></th> </tr><tr> <td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr> <td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp; <p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr> <td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div><span class="addQuizFlash"><img src="../../flash/images/cards.svg"/> Add Errors to Flash Cards</span></td></tr></table> <div id="quizScoreBack"> <div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"> <div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizItself"> <div id="quizSentenceContainer"> <div class="quizSentenceWrap"> <span id="quizSentenceFor"></span><br> <span id="quizSentenceEng"></span> </div></div><div class="textWrap5"></div><div id="quizAllItemsC"><div id="possibleDiv"><span id="possibleDivIn"></span></div> <div id="quizTimer2"><div id="quizTimerPointer2"><img id="quizTimerImage2" src="../../common/timerPointer2.svg"></div><div id="quizTimerGood2"></div><div id="quizTimerBad2"></div></div><div id="hintTable"> <div id="hint1" class="boardBottom"> </div><div id="hint2" class="boardBottom"> </div><div id="hint3" class="boardBottom"> </div></div> <form id="answerForm" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" novalidate></form> <div id="writeAnswerBoard"> <table id="boardTable" style="margin-top: 10px;"><tr id="specialChars"> <td id="char1" class="boardChar"></td><td id="char2" class="boardChar"></td><td id="char3" class="boardChar"></td><td id="char4" class="boardChar"></td><td id="char5" class="boardChar"></td><td id="char6" class="boardChar"></td></tr><tr> <td colspan="6" id="writeError"></td></tr><tr> <td colspan="6" id="boardMain"><span id="writtenAnswer"></span></td></tr><tr> <td colspan="6" id="writeError2">CONTINUE</td></tr></table> </div></div><div id="quizWriteImg"><b></b><img id="wrongLogo1" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo2" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo3" class="wrongLogo" src="../../common/strike.svg"></div></div><table id="quizPreload"> <tr> <th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th> </tr><tr> <td id="quizPreloadMedal"></td></tr><tr> <td id="quizPreloadStart">START NOW</td></tr></table> <div id="quizStart"> <div id="quizStartImg"> <div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div><table id="quizMenu"> <tr> <th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th> </tr><tr> <td id="quizBtn1" class="quizType"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">MULTIPLE CHOICE</h2> <img class="chooseQuizIcon" src="../../common/quizblock1.svg"/> <h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">WRITE-A-WORD</h2> <img class="chooseQuizIcon" src="../../common/quizblock2.svg"/> <h2 class="chooseQuizText2">Difficulty: Challenging</h2></td></tr><tr> <td colspan="2" id="quizBtn3" class="quizType"><div id="sMedal3" class="smallMedal"></div><h2 class="chooseQuizText">FLUENCY SPRINT</h2> <img class="chooseQuizIcon" src="../../common/quizblock3.svg"/> <h2 class="chooseQuizText2">Difficulty: Fluent</h2></td></tr></table></main>';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CREATE IMAGE ARRAY
var imageArray = [];
var imageArrayQuiz;
if (quizLessonBoth != 'quiz') {
  imageArray = [oPath + 'images/pic1.jpg'];
  for (var num = 2; num < numWords + 1; num++) {
    imageArray.push(oPath + 'images/pic' + num + '.jpg');
  }
  imageArrayQuiz = imageArray.slice();
  if (
    lessonTitle == 'Le preposizioni articolate (Prepositional contractions)'
  ) {
    imageArrayQuiz = [];
    for (var numW = 1; numW <= imageArray.length; numW++) {
      imageArrayQuiz.push(oPath + 'images/pic0.jpg');
    }
  }
} else {
  /////Lesson 1 load
  imageArray = [];
  var getLesson = lessonNumber - examplesNum.length;
  for (var num = 1; num <= forExamples1.length; num++) {
    imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
  }
  /////Lesson 2 load
  if (examplesNum.length >= 2) {
    getLesson = lessonNumber - examplesNum.length + 1;
    for (var num = 1; num <= forExamples2.length; num++) {
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
    }
  }
  /////Lesson 3 load
  if (examplesNum.length >= 3) {
    getLesson = lessonNumber - examplesNum.length + 2;
    for (var num = 1; num <= forExamples3.length; num++) {
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
    }
  }
  /////Lesson 4 load
  if (examplesNum.length >= 4) {
    getLesson = lessonNumber - examplesNum.length + 3;
    for (var num = 1; num <= forExamples4.length; num++) {
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
    }
  }
  /////Lesson 5 load
  if (examplesNum.length >= 5) {
    getLesson = lessonNumber - examplesNum.length + 4;
    for (var num = 1; num <= forExamples5.length; num++) {
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
    }
  }
  /////Lesson 6 load
  if (examplesNum.length >= 6) {
    getLesson = lessonNumber - examplesNum.length + 5;
    for (var num = 1; num <= forExamples6.length; num++) {
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
    }
  }
  /////Lesson 7 load
  if (examplesNum.length >= 7) {
    getLesson = lessonNumber - examplesNum.length + 6;
    for (var num = 1; num <= forExamples7.length; num++) {
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
    }
  }
  /////Lesson 8 load
  if (examplesNum.length >= 8) {
    getLesson = lessonNumber - examplesNum.length + 7;
    for (var num = 1; num <= forExamples8.length; num++) {
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
    }
  }
  /////Lesson 9 load
  if (examplesNum.length >= 9) {
    getLesson = lessonNumber - examplesNum.length + 8;
    for (var num = 1; num <= forExamples9.length; num++) {
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
    }
  }
  /////Lesson 10 load
  if (examplesNum.length >= 10) {
    getLesson = lessonNumber - examplesNum.length + 9;
    for (var num = 1; num <= forExamples10.length; num++) {
      imageArray.push(oPath2 + getLesson + '/images/pic' + num + '.jpg');
    }
  }
  imageArrayQuiz = imageArray.slice();
}

///////////////////////LOAD UNIQUE PRESENTATION STUFF
//2020 EXTRA START//////////////////////////////////////////////////////////////////////////////////////////////////
if (quizLessonBoth != 'quiz') {
  loadPresentation();
} else {
  if (extraExamples) {
    var allExtra = [];
    var allEnglish = [];
    var allSounds = [];
    var allImages = [];
    if (typeof forExtra1 !== 'undefined') {
      allExtra = allExtra.concat(forExtra1);
      allEnglish = allEnglish.concat(engExtra1);
      allImages = allImages.concat(imageExtra1);
      allSounds = allSounds.concat(fastExtra1);
    }
    if (typeof forExtra2 !== 'undefined') {
      allExtra = allExtra.concat(forExtra2);
      allEnglish = allEnglish.concat(engExtra2);
      allImages = allImages.concat(imageExtra2);
      allSounds = allSounds.concat(fastExtra2);
    }
    if (typeof forExtra3 !== 'undefined') {
      allExtra = allExtra.concat(forExtra3);
      allEnglish = allEnglish.concat(engExtra3);
      allImages = allImages.concat(imageExtra3);
      allSounds = allSounds.concat(fastExtra3);
    }
    if (typeof forExtra4 !== 'undefined') {
      allExtra = allExtra.concat(forExtra4);
      allEnglish = allEnglish.concat(engExtra4);
      allImages = allImages.concat(imageExtra4);
      allSounds = allSounds.concat(fastExtra4);
    }
    if (typeof forExtra5 !== 'undefined') {
      allExtra = allExtra.concat(forExtra5);
      allEnglish = allEnglish.concat(engExtra5);
      allImages = allImages.concat(imageExtra5);
      allSounds = allSounds.concat(fastExtra5);
    }
    if (typeof forExtra6 !== 'undefined') {
      allExtra = allExtra.concat(forExtra6);
      allEnglish = allEnglish.concat(engExtra6);
      allImages = allImages.concat(imageExtra6);
      allSounds = allSounds.concat(fastExtra6);
    }
    if (typeof forExtra7 !== 'undefined') {
      allExtra = allExtra.concat(forExtra7);
      allEnglish = allEnglish.concat(engExtra7);
      allImages = allImages.concat(imageExtra7);
      allSounds = allSounds.concat(fastExtra7);
    }
    if (typeof forExtra8 !== 'undefined') {
      allExtra = allExtra.concat(forExtra8);
      allEnglish = allEnglish.concat(engExtra8);
      allImages = allImages.concat(imageExtra8);
      allSounds = allSounds.concat(fastExtra8);
    }
    if (typeof forExtra9 !== 'undefined') {
      allExtra = allExtra.concat(forExtra9);
      allEnglish = allEnglish.concat(engExtra9);
      allImages = allImages.concat(imageExtra9);
      allSounds = allSounds.concat(fastExtra8);
    }
    for (xx = 0; xx < allSounds.length; xx++) {
      allSounds[xx] = allSounds[xx] + sType;
    }
    forExamplesQuiz2 = allExtra.slice();
    engExamplesQuiz2 = allEnglish.slice();
    imageArrayQuiz2 = allImages.slice();
    quizSounds2 = allSounds.slice();
  }
  loadQuizPrep();
}
//2020 EXTRA END//////////////////////////////////////////////////////////////////////////////////////////////////

//2020 PLAY
for (xx = 0; xx < imageArray.length; xx++) {
  if (imageArray[xx].indexOf('../../') != -1) {
    imageArray[xx] = imageArray[xx].split('../../').join(pre);
  }
}
for (xx = 0; xx < imageArrayQuiz.length; xx++) {
  if (imageArrayQuiz[xx].indexOf('../../') != -1) {
    imageArrayQuiz[xx] = imageArrayQuiz[xx].split('../../').join(pre);
  }
}
for (xx = 0; xx < imageArrayQuiz2.length; xx++) {
  if (imageArrayQuiz2[xx].indexOf('../../') != -1) {
    imageArrayQuiz2[xx] = imageArrayQuiz2[xx].split('../../').join(pre);
  }
}
///2020 PLAY

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD FAST SOUND
function loadFastSound() {
  if ($('.narraBtns').hasClass('buttonOn') && narrPlayed == false) {
    narrPlayed = true;
    changeWord();
    return;
  }
  fastOrSlow = 'fast';
  clearTimeout(wordTimer);
  $('#mainSound').trigger('pause');
  //2020 PLAY
  var fastsound;
  if (!sideClicked) {
    fastsound = fastSounds[currentWordNum];
  } else {
    fastsound = fastSounds[wordChangeNum[blockExNum]];
  }
  if (fastsound.indexOf('../../') != -1) {
    fastsound = fastsound.split('../../').join(pre);
  }
  if (!sideClicked) {
    $('#mainSound').attr('src', fastsound);
  } else {
    $('#mainSound').attr('src', fastsound);
    sideClicked = false;
  }
  //2020 PLAY
  document.getElementById('mainSound').load();
  document.getElementById('mainSound').addEventListener('canplay', playSound);
  soundPlaying = true;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD SLOW SOUND
function loadSlowSound() {
  if ($('.narraBtns').hasClass('buttonOn') && narrPlayed == false) {
    narrPlayed = true;
    changeWord();
    return;
  }
  if (titlePlay == true) {
    titlePlay == false;
    changeWord();
    return;
  }
  fastOrSlow = 'slow';
  clearTimeout(wordTimer);
  $('#mainSound').trigger('pause');
  //2020 PLAY
  var slowsound;
  if (!sideClicked) {
    slowsound = slowSounds[currentWordNum];
  } else {
    slowsound = slowSounds[wordChangeNum[blockExNum]];
  }
  if (slowsound.indexOf('../../') != -1) {
    slowsound = slowsound
      .split('../../')
      .join(pre)
      .split('.ogg')
      .join(soundType);
  }
  if (!sideClicked) {
    $('#mainSound').attr('src', slowsound);
  } else {
    $('#mainSound').attr('src', slowsound);
    sideClicked = false;
  }
  //2020 PLAY
  document.getElementById('mainSound').load();
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PLAY SOUND
function playSound() {
  $('.timerMeter > .timerSpan').stop();
  $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });

  setTimeout(function () {
    document
      .getElementById('mainSound')
      .removeEventListener('canplay', playSound);
    try {
      document
        .getElementById('mainSound')
        .play()
        .then(function () {})
        .catch(function (error) {
          console.error('Playback failed because: ', error);
        });
    } catch (error) {
      console.error('Playback failed because: ', error);
    }
  }, 500);
  soundPlaying = true;
}

function playMusic() {
  document
    .getElementById('mainMusic')
    .removeEventListener('canplay', playMusic);
  document.getElementById('mainMusic').volume =
    document.getElementById('mainSound').volume * 0.4;

  try {
    document
      .getElementById('mainMusic')
      .play()
      .then(function () {})
      .catch(function (error) {
        console.error('Playback failed because: ', error);
      });
  } catch (error) {
    console.error('Playback failed because: ', error);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHANGE IMAGE
function swapImages() {
  ///2020 EXTRA START
  if (prevBlockOn) {
    if (picToggle == 1) {
      $('.mainPic2').css({
        'background-image': 'url(' + imageArray[currentWordNum] + ')',
      });
    } else {
      $('.mainPic1').css({
        'background-image': 'url(' + imageArray[currentWordNum] + ')',
      });
    }
    prevBlockOn = false;
    return;
  }
  ///2020 EXTRA END

  if (restartedLesson) {
    $('.mainPic2, .mainPic1').css({
      'background-image': 'url(' + imageArray[0] + ')',
    });
    restartedLesson = false;
    return;
  }
  ////Don't change pic
  if (picToggle == 1) {
    var picUrl = $('.mainPic1').css('background-image').split('images/');
    picUrl = picUrl[1].split(')').join('');
  } else {
    var picUrl = $('.mainPic2').css('background-image').split('images/');
    picUrl = picUrl[1].split(')').join('');
  }
  if (picUrl == imageArray[currentWordNum].split(oPath + 'images/').join('')) {
    return;
  }
  ////Get pic size
  var picWidth = $('.mainPic2').width();
  //////////////////////////////////////////START LOAD NEXT ANIMATION
  if (picControl == 'picNext') {
    arrowClicks = 'disable';
    $('.rightArrow').css({ opacity: '0' });
    if (picToggle == 1) {
      $('.mainPic2').css({
        opacity: '0',
        display: 'block',
        '-webkit-transform': 'translate3d(100%, 0, 0)',
        transform: 'translate3d(100%, 0, 0)',
        'background-image': 'url(' + imageArray[currentWordNum] + ')',
      });
      $('.mainPic2').transition(
        {
          '-webkit-transform': 'translate3d(0%, 0, 0)',
          transform: 'translate3d(0%, 0, 0)',
          opacity: '1',
        },
        800,
        'easeOutExpo',
        function () {
          arrowClicks = 'enable';
          $('.rightArrow').css({ opacity: '1' });
          picToggle = 2;
          $('.mainPic1').css({ 'z-index': '5', display: 'none' });
          $('.mainPic2').css({ 'z-index': '4' });
        },
      );
    } else {
      $('.mainPic1').css({
        opacity: '0',
        display: 'block',
        '-webkit-transform': 'translate3d(100%, 0, 0)',
        transform: 'translate3d(100%, 0, 0)',
        'background-image': 'url(' + imageArray[currentWordNum] + ')',
      });
      $('.mainPic1').transition(
        {
          '-webkit-transform': 'translate3d(0%, 0, 0)',
          transform: 'translate3d(0%, 0, 0)',
          opacity: '1',
        },
        800,
        'easeOutExpo',
        function () {
          arrowClicks = 'enable';
          $('.rightArrow').css({ opacity: '1' });
          picToggle = 1;
          $('.mainPic2').css({ 'z-index': '5', display: 'none' });
          $('.mainPic1').css({ 'z-index': '4' });
        },
      );
    }
  }
  //////////////////////////////////////////START LOAD PREVIOUS ANIMATION
  else if (picControl == 'picPrev') {
    arrowClicks = 'disable';
    $('.leftArrow').css({ opacity: '0' });
    if (picToggle == 1) {
      $('.mainPic2').css({
        opacity: '0',
        display: 'block',
        '-webkit-transform': 'translate3d(-100%, 0, 0)',
        transform: 'translate3d(-100%, 0, 0)' + 'px',
        'background-image': 'url(' + imageArray[currentWordNum] + ')',
      });
      $('.mainPic2').transition(
        {
          '-webkit-transform': 'translate3d(0%, 0, 0)',
          transform: 'translate3d(0%, 0, 0)',
          opacity: '1',
        },
        800,
        'easeOutExpo',
        function () {
          arrowClicks = 'enable';
          $('.leftArrow').css({ opacity: '1' });
          picToggle = 2;
          $('.mainPic1').css({ 'z-index': '5', display: 'none' });
          $('.mainPic2').css({ 'z-index': '4' });
        },
      );
    } else {
      $('.mainPic1').css({
        opacity: '0',
        display: 'block',
        '-webkit-transform': 'translate3d(-100%, 0, 0)',
        transform: 'translate3d(-100%, 0, 0)' + 'px',
        'background-image': 'url(' + imageArray[currentWordNum] + ')',
      });
      $('.mainPic1').transition(
        {
          '-webkit-transform': 'translate3d(0%, 0, 0)',
          transform: 'translate3d(0%, 0, 0)',
          opacity: '1',
        },
        800,
        'easeOutExpo',
        function () {
          arrowClicks = 'enable';
          $('.leftArrow').css({ opacity: '1' });
          picToggle = 1;
          $('.mainPic2').css({ 'z-index': '5', display: 'none' });
          $('.mainPic1').css({ 'z-index': '4' });
        },
      );
    }
  }
  //////////////////////////////////////////START LOAD FADING ANIMATION
  else {
    if (picToggle == 1) {
      arrowClicks = 'disable';
      $('.mainPic2').css({
        'background-image': 'url(' + imageArray[currentWordNum] + ')',
      });
      $('.mainPic2').fadeIn(500, function () {
        arrowClicks = 'enable';
        picToggle = 2;
        $('.mainPic1').css({ 'z-index': '5', display: 'none' });
        $('.mainPic2').css({ 'z-index': '4' });
      });
    } else {
      arrowClicks = 'disable';
      $('.mainPic1').css({
        'background-image': 'url(' + imageArray[currentWordNum] + ')',
      });
      $('.mainPic1').fadeIn(500, function () {
        arrowClicks = 'enable';
        picToggle = 1;
        $('.mainPic2').css({ 'z-index': '5', display: 'none' });
        $('.mainPic1').css({ 'z-index': '4' });
      });
    }
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NEXT IMAGE
function nextImage() {
  ///FIX PROBLEM
  if ($('#mainSound').attr('src') == oPath + 'sounds/title1' + soundType) {
    picControl = 'picNext';
    changeWord();
    return;
  }
  if (arrowClicks != 'disable') {
    narrPlayed = false;
    if ($('.narraBtns').hasClass('buttonOn')) {
      $('.narraBtns').removeClass('buttonOn');
      narrPlayed = true;
      picControl = 'picNext';
      changeWord();
      return;
    }
    if (currentWordNum != numWords - 1) {
      picControl = 'picNext';
      currentWordNum++;
      changeWord();
    } else if (
      currentWordNum == numWords - 1 &&
      narration[narration.length - 1] != '' &&
      $('.narrSentence').is(':hidden')
    ) {
      finalWord();
    } else {
      soundPlaying = false;
      $('#pauseBtn').attr('src', '../../common/play.svg');
      $('#pauseBtn').hide();
      $('.wrapper3').css({ background: 'rgba(0,0,0,0)' });
      $('#endWrap').fadeIn(1000, function () {
        $('.ouinoContent').fadeOut(1000);
      });
      if ($('body').height() >= 700) {
        $('#learningTip').fadeIn(1000);
      }
      currentWordNum = 0;
      $('#mainSound').trigger('pause');
      $('#mainSound').attr('src', '../../common/endSound' + soundType);
      document.getElementById('mainSound').load();
      document
        .getElementById('mainSound')
        .addEventListener('canplay', playSound);
      soundPlaying = true;
    }
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PREV IMAGE
function prevImage() {
  blockExNum = wordChangeNum.indexOf(currentWordNum);
  if (arrowClicks != 'disable') {
    picControl = 'picPrev';
    if (
      currentWordNum == wordChangeNum[blockExNum] &&
      !$('.narraBtns').hasClass('buttonOn') &&
      narration[blockExNum] != ''
    ) {
      narrPlayed = false;
      picControl = 'picFade';
      changeWord();
    } else {
      currentWordNum--;
      narrPlayed = true;
      changeWord();
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NEXT BLOCK CHANGE
function nextBlockWord() {
  $('.ouinoButton').removeClass('buttonOn');
  $('.ouinoButton').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  $('#buttonB' + currentWordNum).addClass('buttonOn');
  $('#btnWrap').scrollTo('#buttonB' + currentWordNum, 500, { offset: -50 }); //new code
  $('#buttonB' + currentWordNum).css({
    background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
  });
  $('.ouinoButton2').hide();
  blockExNum = wordChangeNum.indexOf(currentWordNum);
  if (narration[blockExNum] != '') {
    var activeNarr = '#narraBtn' + wordChangeNum[blockExNum];
    $(activeNarr).show();
    $('#slowBubble1').hide();
  } else {
    narrPlayed = true;
  }
  if (narrPlayed == false) {
    $('.narraBtns').addClass('buttonOn');
    $('.narraBtns').css({
      background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
    });
  }
  if (!titleSkip[blockExNum]) {
    $('#button' + currentWordNum).show();
    $('#button' + currentWordNum).html('T');
    $('#slowBubble2').show();
  } else {
    $('#slowBubble2').hide();
  }
  for (var num = 0; num < exampleNums[blockExNum]; num++) {
    $('#button' + (currentWordNum + num + 1)).show();
    $('#button' + (currentWordNum + num + 1)).html(num + 1);
  }

  var theForWord = forSideTitles[blockExNum].split(' ').join('&nbsp;');
  var countBr = theForWord.split('<br>').length - 1;
  if (countBr == 3) {
    var countX = 0;
    theForWord = theForWord.replace(/<br>/g, function (match) {
      countX++;
      if (countX === 2) {
        return 'ZZZ';
      }
      return match;
    });
  }
  $('.forSentenceB').html(
    theForWord
      .split('<br>')
      .join("<b style='color: #333;'> /&nbsp;</b>")
      .split('ZZZ')
      .join('<br>'),
  );

  var currentWordString = engSideTitles[blockExNum];
  if (currentWordString.charAt(currentWordString.length - 1) == ')') {
    var cxt = currentWordString
      .split('(')
      .join(
        "<span style='color: #505050; font-size: 0.8em; font-weight: 400;'>(",
      )
      .split(')')
      .join(')</span>');
    $('.engSentenceB').html(cxt);
    $('.engSentenceB span').html(
      $('.engSentenceB span').html().replace(/ /g, '&nbsp;'),
    );
  } else {
    $('.engSentenceB').html(currentWordString);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PREV BLOCK CHANGE
function prevBlockWord() {
  $('.ouinoButton').removeClass('buttonOn');
  $('.ouinoButton').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  blockExNum = wordChangeNum2.indexOf(currentWordNum);
  $('#buttonB' + wordChangeNum[blockExNum]).addClass('buttonOn');
  $('#btnWrap').scrollTo('#buttonB' + wordChangeNum[blockExNum], 500, {
    offset: -50,
  }); //new code
  $('#buttonB' + wordChangeNum[blockExNum]).css({
    background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
  });
  $('.ouinoButton2').hide();
  if (narration[blockExNum] != '') {
    var activeNarr = '#narraBtn' + wordChangeNum[blockExNum];
    $(activeNarr).show();
    $('#slowBubble1').hide();
  } else {
    $('.narraBtns').removeClass('buttonOn');
    narrPlayed = true;
  }
  if (!titleSkip[blockExNum]) {
    $('#button' + (currentWordNum - exampleNums[blockExNum])).show();
    $('#button' + (currentWordNum - exampleNums[blockExNum])).html('T');
    $('#slowBubble2').show();
  } else {
    $('#slowBubble2').hide();
  }
  for (var num = 0; num < exampleNums[blockExNum]; num++) {
    $('#button' + (currentWordNum - exampleNums[blockExNum] + num + 1)).show();
    $('#button' + (currentWordNum - exampleNums[blockExNum] + num + 1)).html(
      num + 1,
    );
  }

  var theForWord = forSideTitles[blockExNum].split(' ').join('&nbsp;');
  var countBr = theForWord.split('<br>').length - 1;
  if (countBr == 3) {
    var countX = 0;
    theForWord = theForWord.replace(/<br>/g, function (match) {
      countX++;
      if (countX === 2) {
        return 'ZZZ';
      }
      return match;
    });
  }
  $('.forSentenceB').html(
    theForWord
      .split('<br>')
      .join("<b style='color: #333;'> /&nbsp;</b>")
      .split('ZZZ')
      .join('<br>'),
  );

  var currentWordString = engSideTitles[blockExNum];
  if (currentWordString.charAt(currentWordString.length - 1) == ')') {
    var cxt = currentWordString
      .split('(')
      .join(
        "<span style='color: #505050; font-size: 0.8em; font-weight: 400;'>(",
      )
      .split(')')
      .join(')</span>');
    $('.engSentenceB').html(cxt);
    $('.engSentenceB span').html(
      $('.engSentenceB span').html().replace(/ /g, '&nbsp;'),
    );
  } else {
    $('.engSentenceB').html(currentWordString);
  }
}

function changeSound() {
  /////START SOUND OPTIONS WITH INITIALISATION
  if (lessonInit == 'true') {
    fastOrSlow = 'fast';
    $('.timerMeter > .timerSpan').stop();
    $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
    $('#mainSound').trigger('pause');
    if (narration.length >= 1) {
      $('#mainSound').attr(
        'src',
        oPath + 'sounds/narra' + (blockExNum + 1) + soundType,
      );
      sideClicked = false;
    } else {
      $('#mainSound').attr('src', '../../common/blank' + soundType);
    }
    ///PORTUGUESE CHANGE START REPLACE!
    setTimeout(function () {
      $('#mainSound').trigger('play');
    }, 1000);
    ///PORTUGUESE CHANGE END
    soundPlaying = true;
    toggleMusic();
    lessonInit = 'false';
  } else {
    fastOrSlow = 'fast';
    clearTimeout(wordTimer);
    $('#mainSound').trigger('pause');
    $('#mainSound').attr(
      'src',
      oPath + 'sounds/narra' + (blockExNum + 1) + soundType,
    );
    sideClicked = false;
    document.getElementById('mainSound').load();
    document
      .getElementById('mainSound')
      .addEventListener('canplaythrough', playSound2);
    soundPlaying = true;
  }
}

function changeSound2() {
  titlePlay = true;
  sideClicked = false;
  $('#pauseBtn').attr('src', '../../common/pause.svg');
  ///2020 EXTRA START
  $('#roundButtons, #roundButtons2, #slowBubble1').hide();
  ///2020 EXTRA END
  $('.forSentence, .engSentence').html('');
  $('.wordSentence, .wordSentenceB, .shinyPicture').addClass('disabledMouse');
  $('.ouinoContent').css({ cursor: 'not-allowed' });
  $('.forSentenceB').html(forSideTitles[0]);
  $('.engSentenceB').html(engSideTitles[0]);
  $('.narrSentence').html(lessonTitle);
  $('.narrSentence').show();
  $('.ouinoButton, .ouinoButton2').removeClass('buttonOn');
  $('.ouinoButton, .ouinoButton2').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  /////START SOUND OPTIONS WITH INITIALISATION
  if (lessonInit == 'true') {
    fastOrSlow = 'fast';
    $('.timerMeter > .timerSpan').stop();
    $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
    $('#mainSound').trigger('pause');
    $('#mainSound').attr('src', oPath + 'sounds/title1' + soundType);
    sideClicked = false;
    ///PORTUGUESE CHANGE START REPLACE!
    setTimeout(function () {
      $('#mainSound').trigger('play');
    }, 1000);
    ///PORTUGUESE CHANGE END
    soundPlaying = true;
    toggleMusic();
    lessonInit = 'false';
  }
  ///PORTUGUESE CHANGE LEFT OFF START
  else if (lastNum != '') {
    narrPlayed = true;
    sideClicked = false;
    picControl = 'picFade';
    for (var aa = wordChangeNum.length - 1; aa >= 0; aa--) {
      if (lastNum > wordChangeNum[aa]) {
        currentWordNum = wordChangeNum[aa];
        aa = -2;
      }
    }
    changeWord();
    currentWordNum = lastNum;
    changeWord();
  }
  ///PORTUGUESE CHANGE LEFT OFF END
  else {
    fastOrSlow = 'fast';
    clearTimeout(wordTimer);
    $('#mainSound').trigger('pause');
    $('#mainSound').attr('src', oPath + 'sounds/title1' + soundType);
    sideClicked = false;
    document.getElementById('mainSound').load();
    document
      .getElementById('mainSound')
      .addEventListener('canplaythrough', playSound2);
    soundPlaying = true;
  }
}

function playSound2() {
  $('.timerMeter > .timerSpan').stop();
  $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
  setTimeout(function () {
    document
      .getElementById('mainSound')
      .removeEventListener('canplaythrough', playSound2);
    $('#mainSound').trigger('play');
  }, 500);
  soundPlaying = true;
}

function finalWord() {
  $('#slowBubble1').hide();
  $('.ouinoButton, .ouinoButton2').removeClass('buttonOn');
  $('.ouinoButton, .ouinoButton2').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  $('.narrSentence').html(narration[narration.length - 1]);
  $('.narrSentence').show();
  ///5.1
  $('.insight, .insightLabel').addClass('disInsight');
  ///5.1
  $('.engSentence, .forSentence').html('');
  $('#mainSound').trigger('pause');
  $('#mainSound').attr(
    'src',
    oPath + 'sounds/narra' + narration.length + soundType,
  );
  sideClicked = false;
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('canplaythrough', playSound2);
  soundPlaying = true;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHANGE WORD
function changeWord() {
  ///5.1
  if (!localStorage.getItem(storeInfo + 'insight')) {
    var countSpaces = (forExamples[currentWordNum].match(/ /g) || []).length;
    if (
      currentWordNum > 0 &&
      $('.insightLabel').length == 0 &&
      countSpaces > 1
    ) {
      $('.shinyPicture').append('<div class="insightLabel"></div>');
      $('.insight').addClass('fullOpacity');
    }
  }
  ///5.1

  ///PORTUGUESE CHANGE LEFT OFF START
  saveLeftOff(forExamples.length - 1);
  ///PORTUGUESE CHANGE LEFT OFF END

  //Start
  ////2020 EXTRA START///////////////////////////////////
  if (!extraExamples && picControl != 'picPrev') {
    if (
      $('#button' + currentWordNum)
        .parent()
        .attr('id') == 'roundButtons2'
    ) {
      var lastBtnNum = parseInt(
        $('.extraBtn:visible:last').attr('id').split('button').join(''),
      );
      if (!isNaN(lastBtnNum)) {
        currentWordNum = lastBtnNum;
        if (currentWordNum != numWords - 1) {
          picControl = 'picNext';
          currentWordNum++;
          changeWord();
        } else if (
          currentWordNum == numWords - 1 &&
          narration[narration.length - 1] != '' &&
          $('.narrSentence').is(':hidden')
        ) {
          finalWord();
        } else {
          soundPlaying = false;
          $('#pauseBtn').attr('src', '../../common/play.svg');
          $('#pauseBtn').hide();
          $('.wrapper3').css({ background: 'rgba(0,0,0,0)' });
          $('#endWrap').fadeIn(1000, function () {
            $('.ouinoContent').fadeOut(1000);
          });
          ///OS START
          if ($('body').hasClass('notch')) {
            $('.menuBtnContainer').fadeOut();
          }
          ///OS END
          if ($('body').height() >= 700) {
            $('#learningTip').fadeIn(1000);
          }
          currentWordNum = 0;
          $('#mainSound').trigger('pause');
          $('#mainSound').attr('src', '../../common/endSound' + soundType);
          document.getElementById('mainSound').load();
          document
            .getElementById('mainSound')
            .addEventListener('canplay', playSound);
          soundPlaying = true;
        }
        return;
      }
    }
  }
  ////TIP NOTE (CHANGE "1" 3 times for another note)
  if (
    extraExamples &&
    $('#button' + currentWordNum)
      .parent()
      .attr('id') == 'roundButtons2' &&
    !localStorage.getItem(storeInfo + 'tipNote1')
  ) {
    $('body').append(
      '<div class="tipCont"><img src="../../common/tips1.png" class="tipImages"></div>',
    );
    $('.tipCont').on('click', function () {
      $('.tipCont').fadeOut(500);
      setTimeout(function () {
        $('.tipCont').remove();
      }, 500);
      togglePause();
    });
    localStorage.setItem(storeInfo + 'tipNote1', 'ON');
    togglePause();
  }
  ////TIP NOTE
  $('#flashCard2, #flashCard').hide();
  var tempInfo = forExamples[currentWordNum];
  tempInfo = forCopy.indexOf(tempInfo);
  if (tempInfo != -1) {
    if (cardRaw.length > 0) {
      var fCard = lessonNumber + '|' + (tempInfo + 1) + cardCate;
      var foundIt = false;
      for (i = 0; i < cardRaw.length; i++) {
        var cReal = cardRaw[i].split('|');
        cReal = cReal[0] + '|' + cReal[1] + '|' + cReal[2];
        if (cReal == fCard) {
          foundIt = true;
        }
      }
      if (foundIt) {
        $('#flashCard').hide();
        $('#flashCard2').show();
      } else {
        $('#flashCard2').hide();
        $('#flashCard').show();
      }
    } else {
      $('#flashCard2').hide();
      $('#flashCard').show();
    }
  }
  ///2020 EXTRA END//////////////////////////////////////////////
  soundRepeated = 0;
  if (titlePlay == true) {
    titlePlay = false;
    $('.menuBlock').removeClass('centerDiv');
    $('#menuBlockWrap, .menuBlock').hide();
    $('.ouinoContent').show();

    ///2020 EXTRA START
    $('#roundButtons, #roundButtons2, #slowBubble1').show();
    ///2020 EXTRA END

    $('.wordSentence, .wordSentenceB, .shinyPicture').removeClass(
      'disabledMouse',
    );
    $('.ouinoContent').css({ cursor: 'default' });
  }
  ///END
  sideClicked = false;
  $('#pauseBtn').attr('src', '../../common/pause.svg');
  ///////START Button Hilite Control
  $('.ouinoButton2').removeClass('buttonOn');
  $('.ouinoButton2').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  ///////END Button Hilite Control
  /////START SOUND OPTIONS WITH INITIALISATION
  if (wordChangeNum.indexOf(currentWordNum) != -1 && picControl != 'picPrev') {
    nextBlockWord();
    if (titleSkip[blockExNum] && narrPlayed == true) {
      currentWordNum++;
      changeWord();
      return;
    }
  } else if (
    wordChangeNum.indexOf(currentWordNum) != -1 &&
    picControl == 'picPrev'
  ) {
    if (titleSkip[blockExNum] && narrPlayed == true) {
      currentWordNum++;
      changeWord();
      return;
    } else if (!$('.narraBtns').hasClass('buttonOn')) {
      if (titleSkip[blockExNum] && narration[blockExNum] == '') {
        currentWordNum--;
        changeWord();
        return;
      } else if (titleSkip[blockExNum] && narration[blockExNum] != '') {
        $('#slowBubble1').hide();
        $('.narraBtns').addClass('buttonOn');
        $('.narraBtns').css({
          background:
            'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
        });
      }
    }
  }
  if (wordChangeNum2.indexOf(currentWordNum) != -1 && picControl == 'picPrev') {
    prevBlockWord();
  }
  if (!$('.narraBtns').hasClass('buttonOn')) {
    $('#button' + currentWordNum).addClass('buttonOn');
    $('#btnWrap').scrollTo('#buttonB' + currentWordNum, 500, { offset: -50 }); //new code
    $('#button' + currentWordNum).css({
      background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
    });
  }

  if ($('.narraBtns').hasClass('buttonOn') && narrPlayed == true) {
    $('.ouinoButton2').removeClass('buttonOn');
    $('.ouinoButton2').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    });
  } else if ($('.narraBtns').hasClass('buttonOn') && narrPlayed == false) {
    $('.narrSentence').html(narration[blockExNum]);
    $('.narrSentence').show();
    ///5.1
    $('.insight, .insightLabel').addClass('disInsight');
    ///5.1
    $('.engSentence, .forSentence').html('');
    changeSound();
    swapImages();
    verifyArrows();
    return;
  }

  $('.narrSentence').hide();
  $('#slowBubble1').show();
  if ($('#selectPlayback').val().charAt(0) == 'f') {
    if (lessonInit == 'true') {
      fastOrSlow = 'fast';
      $('.timerMeter > .timerSpan').stop();
      $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
      $('#mainSound').trigger('pause');
      $('#mainSound').attr('src', fastSounds[currentWordNum]);
      ///PORTUGUESE CHANGE START REPLACE!
      setTimeout(function () {
        $('#mainSound').trigger('play');
      }, 1000);
      ///PORTUGUESE CHANGE END
      soundPlaying = true;
      toggleMusic();
      lessonInit = 'false';
    } else {
      loadFastSound();
    }
  } else {
    if (lessonInit == 'true') {
      fastOrSlow = 'slow';
      $('.timerMeter > .timerSpan').stop();
      $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
      $('#mainSound').trigger('pause');
      $('#mainSound').attr('src', slowSounds[currentWordNum]);
      ///PORTUGUESE CHANGE START REPLACE!
      setTimeout(function () {
        $('#mainSound').trigger('play');
      }, 1000);
      ///PORTUGUESE CHANGE END
      soundPlaying = true;
      toggleMusic();
      lessonInit = 'false';
    } else {
      loadSlowSound();
    }
  }
  ///////END Next Control Toggle
  swapImages();
  verifyArrows();
  ///// START Change English Text

  var currentWordString = engExamples[currentWordNum];
  if (currentWordString.charAt(currentWordString.length - 1) == ')') {
    var cxt = currentWordString
      .split('(')
      .join(
        "<span style='color: #505050; font-size: 0.8em; font-weight: 400;'>(",
      )
      .split(')')
      .join(')</span>');
    $('.engSentence').html(cxt);
    $('.engSentence span').html(
      $('.engSentence span').html().replace(/ /g, '&nbsp;'),
    );
  } else {
    $('.engSentence').html(currentWordString);
  }

  currentWordString = forExamples[currentWordNum];
  if (currentWordString.charAt(0) == '%') {
    currentWordString = currentWordString.split('%');
    var myNote = currentWordString[1];
    currentWordString = currentWordString[2];

    $('#sideNote').html(
      '<strong>IMPORTANT NOTE</strong><br><span>' +
        myNote +
        "</span><img src='../../search/common/arrBlackDown.svg'>",
    );
    if (irregSpan) {
      $('#sideNote span').show();
      $('#sideNote img').attr('src', '../../search/common/arrBlackUp.svg');
    }
    setTimeout(function () {
      $('#sideNote').fadeIn();
    }, 100);
    ///2020 EXTRA END
  } else {
    $('#sideNote').hide();
  }

  if (
    currentWordString.charAt(currentWordString.length - 1) == ')' &&
    currentWordString.indexOf('+') != -1
  ) {
    var cxt = currentWordString
      .split('(')
      .join("<span style='color: #707070; font-size: 0.7em;'>(")
      .split(')')
      .join(')</span>');
    $('.forSentence').html(cxt);
    if ($('.forSentence span').html().indexOf(' ') !== -1) {
      $('.forSentence span').html(
        $('.forSentence span').html().replace(/ /g, '&nbsp;'),
      );
    }
  } else {
    $('.forSentence').html(currentWordString);
  }

  if (
    currentWordString.indexOf("<em style='color: #333;'> / </em>") != -1 &&
    $('.ouinoContent').hasClass('portrait')
  ) {
    var theForWord = currentWordString
      .split("<em style='color: #333;'> / </em>")
      .join('<br>')
      .split(' ')
      .join('&nbsp;');
    var countBr = theForWord.split('<br>').length - 1;
    if (countBr == 3) {
      var countX = 0;
      theForWord = theForWord.replace(/<br>/g, function (match) {
        countX++;
        if (countX === 2) {
          return 'ZZZ';
        }
        return match;
      });
    }
    $('.forSentence').html(
      theForWord
        .split('<br>')
        .join("<b style='color: #333;'> /&nbsp;</b>")
        .split('ZZZ')
        .join('<br>'),
    );
  }

  //// END Change Foreign Text
  resizeText();

  ///2020 EXTRA START
  if (!extraExamples && picControl == 'picPrev') {
    if (
      $('#button' + currentWordNum)
        .parent()
        .attr('id') == 'roundButtons2'
    ) {
      var lastBtnNum = parseInt(
        $('.extraBtn:visible:first').attr('id').split('button').join(''),
      );
      if (!isNaN(lastBtnNum)) {
        currentWordNum = lastBtnNum;
        if (currentWordNum != numWords - 1) {
          picControl = 'picPrev';
          currentWordNum--;
          prevBlockOn = true;
          changeWord();
        }
        return;
      }
    }
  }
  ///2020 EXTRA END
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START BUTTON TEXT RESIZE
function verifyArrows() {
  $('middleSwipe').show();
  ///////START Next Control Toggle
  if (currentWordNum <= 0 && $('.narraBtns').hasClass('buttonOn')) {
    $('.leftArrow').hide();
    $('.rightArrow').show();
  } else if (currentWordNum <= 0 && $('#button0').hasClass('buttonOn')) {
    $('.leftArrow').hide();
    $('.rightArrow').show();
  } else if (currentWordNum <= 0 && !$('.narraBtns').hasClass('buttonOn')) {
    $('.leftArrow').show();
    $('.rightArrow').show();
  } else if (currentWordNum == numWords - 1) {
    $('.leftArrow').show();
    $('.rightArrow').hide();
  }
  ///2020 EXTRA START
  else if (
    $('#roundButtons .ouinoButton2:last').hasClass('buttonOn') &&
    extraExamples == false
  ) {
    $('.leftArrow').show();
    $('.rightArrow').hide();
  }
  ///2020 EXTRA END
  else {
    $('.leftArrow').show();
    $('.rightArrow').show();
  }
}

//////////////////////////////////////////////////////////////////////////////////START RESIZE TEXT

//NEW CODE

function closest(arr, closestTo) {
  var closest = Math.max.apply(null, arr); //Get the highest number in arr in case it match nothing.

  for (var i = 0; i < arr.length; i++) {
    //Loop the array
    if (arr[i] >= closestTo && arr[i] < closest) closest = arr[i]; //Check if it's higher than your number, but lower than your closest value
  }

  return closest; // return the value
}
//NEW CODE
//4.1.4 FIX ///////////////////////////////////////////////////
function resizeText() {
  ///5.1
  if (
    strip2($('.forSentence').html()) == '' ||
    strip2($('.forSentence').html()) == strip2($('.forSentenceB').html())
  ) {
    $('.insight, .insightLabel').addClass('disInsight');
  } else {
    $('.insight, .insightLabel').removeClass('disInsight');
  }
  ///5.1

  theFont = 29;

  if ($('body').hasClass('notch')) {
    theFont = 25;
  }

  $('.forSentence').css({ fontSize: theFont + 'px' });
  if ($('.engSentence').hasClass('engSentenceOnly')) {
    $('.engSentence').css({ fontSize: theFont + 'px' });
  } else {
    $('.engSentence').css({ fontSize: 21 + 'px' });
  }

  $('.forSentence, .engSentence, .disSentence').css({
    'max-width': '3000px',
    'white-space': 'nowrap',
    'line-height': 'normal',
    margin: '0',
  });
  $('.forSentence').css({ 'margin-top': '-10px' });
  var myTextWidth = $('.textWrap').width();
  var elementWidth = $('.wordSentence').width() * 0.91;
  var myTextWidth2 = $('.textWrap2').width();
  for (var numB = theFont; myTextWidth > elementWidth; numB--) {
    myTextWidth = $('.textWrap').width();
    var newSize = numB;

    if (newSize < 25) {
      newSize = 24;
      $('.forSentence').css({
        'font-size': newSize + 'px',
        'max-width': elementWidth - 20,
        'white-space': 'normal',
        'line-height': newSize + 1 + 'px',
        margin: '0 0 6px 0',
      });
      break;
    }
    $('.forSentence').css({ fontSize: newSize + 'px' });
  }

  if ($('.engSentence').hasClass('engSentenceOnly')) {
    for (var numC = theFont; myTextWidth2 > elementWidth; numC--) {
      myTextWidth2 = $('.textWrap2').width();
      var newSize2 = numC;
      if (newSize2 < 20) {
        newSize2 = 23;
        $('.engSentence').css({
          'font-size': newSize2 + 'px',
          'max-width': elementWidth - 20,
          'white-space': 'normal',
          'line-height': newSize2 + 1 + 'px',
        });
        break;
      }
      $('.engSentence').css({ fontSize: newSize2 + 'px' });
    }
  } else {
    for (var numC = 21; myTextWidth2 > elementWidth; numC--) {
      myTextWidth2 = $('.textWrap2').width();
      var newSize2 = numC;
      if (newSize2 < 18) {
        newSize2 = 20;
        $('.engSentence').css({
          'font-size': newSize2 + 'px',
          'max-width': elementWidth - 20,
          'white-space': 'normal',
          'line-height': newSize2 + 1 + 'px',
        });
        break;
      }
      $('.engSentence').css({ fontSize: newSize2 + 'px' });
    }
  }
}

function resizeQuizText() {
  ///2021 font start
  var myTextWidth;
  var elementWidth;
  var newSize;

  theFont = 23;

  myTextWidth = $('#quizSentenceFor').width();
  elementWidth = $('#quizContent').width() - 40;
  $('#quizSentenceFor').css({ 'max-width': elementWidth });
  $('#quizSentenceEng').css({ 'max-width': elementWidth });

  $('#boardMain').css({ fontSize: '24px' });
  myTextWidth = $('#writtenAnswer').width();
  elementWidth = $('#writeAnswerField').width() - 30;
  for (var num = 24; myTextWidth > elementWidth && num > 1; num--) {
    myTextWidth = $('#writtenAnswer').width();
    newSize = num;
    $('#boardMain').css({ fontSize: newSize + 'px' });
  }
}

//4.1.4 FIX ///////////////////////////////////////////////////

////////////////////////////////////////////////APP LOAD OPTIONS

if (osType.indexOf('droid') != -1) {
  var meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Security-Policy';
  meta.content =
    "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'";
  document.head.appendChild(meta);
}

var brColor = document.createElement('meta');
brColor.setAttribute('name', 'theme-color');
brColor.content = '#202020';
document.getElementsByTagName('head')[0].appendChild(brColor);

var sNext;
var userPress = false;
var appSuspended = false;

if (osType == 'iOS' || osType.indexOf('droid') != -1) {
  var phoneG = document.createElement('script');
  phoneG.setAttribute('src', '../../cordova.js');
  document.head.appendChild(phoneG);
}

window.onload = function () {
  if (osType == 'iOS' || osType.indexOf('droid') != -1) {
    document.addEventListener('deviceready', onDeviceReady, false);
  } else {
    onDeviceReady();
  }
};

///ON DEVICE READY
function onDeviceReady() {
  if (osType == 'androidSTORE') {
    document.addEventListener(
      'offline',
      function () {
        if (sessionStorage['OFFLINEALERT'] == null) {
          alert(
            'You are currently OFFLINE, sounds and other assets may not be able to load. Please connect to the internet to use the program. If you are frequently OFFLINE, please uninstall this version and reinstall our full OFFLINE version at OUINO.com/mobile.',
          );
          sessionStorage['OFFLINEALERT'] = 'alerted';
        }
      },
      false,
    );
  }

  ///LOCK SCREEN IN PORTRAIT MODE
  if (osType == 'iOS' || osType.indexOf('droid') != -1) {
    if ($('html').innerWidth() < 590 || $('html').innerHeight() < 590) {
      screen.orientation.lock('portrait');
    }
  }

  if (osType == 'iOS' || osType.indexOf('droid') != -1) {
    if (typeof cordova == 'object') {
      window.plugins.insomnia.keepAwake();
    }
    if (window.MobileAccessibility) {
      window.MobileAccessibility.usePreferredTextZoom(false);
    }
    if (osType.indexOf('droid') != -1) {
      navigator.app.overrideButton('menubutton', true);
    }
    document.removeEventListener('backbutton', onBackbutton, false);
    document.removeEventListener('menubutton', onMenubutton, false);
    document.removeEventListener('pause', onPause, false);
    document.removeEventListener('resume', onResume, false);
    document.addEventListener('backbutton', onBackbutton, false);
    document.addEventListener('menubutton', onMenubutton, false);
    document.addEventListener('pause', onPause, false);
    document.addEventListener('resume', onResume, false);
  }

  if (sessionStorage['userEmailSTORE'] != null) {
    userEmail = sessionStorage['userEmailSTORE'];
    tuvm58dj = sessionStorage['tuvm58djSTORE'];
    storeInfo = langShort + userEmail;
  } else {
    sessionStorage.clear();
    $('#loadLogo').show();
    setTimeout(function () {
      sessionStorage.clear();
      window.location = '../../index.html';
    }, 100);
    return;
  }

  //2020 EXTRA START/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (localStorage.getItem(storeInfo + 'cardsSTORE')) {
    cardRaw = localStorage.getItem(storeInfo + 'cardsSTORE');
    cardRaw = cardRaw.split(':');
  }
  $('body').append(
    '<img id="flashNotice" src="../../flash/images/notice3.svg"/><img id="flashNotice2" src="../../flash/images/notice4.svg"/>',
  );

  ////////////////////////////////////////////////////////////2020 EXTRA NEW START

  $('.addQuizFlash').on('touchend mouseup', function (event) {
    event.preventDefault();

    ////////////////////////
    var tpArr = [];
    var tpArr2 = [];
    var etpArr2 = [];
    var xx;
    for (xx = 1; xx <= errors.length; xx++) {
      var vrt2 = errors[xx - 1];
      ///FOREIGN WORDS
      var vrt = forExamplesQuiz[vrt2 - 1];
      if (vrt.indexOf('</strong>') != -1) {
        vrt = vrt.split('</strong>');
        vrt = vrt[vrt.length - 2];
        vrt = vrt.split('<strong>');
        vrt = vrt[vrt.length - 1];
        vrt = vrt.replace('¡', '').replace('¿', '');
        vrt = vrt.toLowerCase();
        var vrt3 = vrt;
        if (vrt.length > 3) {
          vrt3 = vrt.slice(0, -1);
        }
        ///ENGLISH WORDS
        var ert = engExamplesQuiz[vrt2 - 1];
        if (ert.indexOf('</em>') != -1) {
          ert = ert.split('</em>');
          ert = ert[ert.length - 2];
          ert = ert.split('<em>');
          ert = ert[ert.length - 1];
          ert = ert.replace('¡', '').replace('¿', '');
          ert = ert.toLowerCase();
          var ert3 = ert;
          if (ert.length > 3) {
            ert3 = ert.slice(0, -1);
          }
          if (tpArr.indexOf(vrt3) == -1) {
            tpArr.push(vrt3);
            tpArr2.push(vrt);
            etpArr2.push(ert);
          }
        }
      }
    }
    ////////////////////////

    ////////////////////////
    ///2021ma START//////////////////////////////////////////////////////////////////////////////

    var errors2 = [];
    var tpArr3 = [];
    var etpArr3 = [];
    for (xx = 0; xx < theExFl.length; xx++) {
      ///FOREIGN WORDS
      var vrt = theExFl[xx];
      if (vrt.indexOf('</strong>') != -1) {
        vrt = vrt.split('</strong>');
        vrt = vrt[vrt.length - 2];
        vrt = vrt.split('<strong>');
        vrt = vrt[vrt.length - 1];
        vrt = vrt.replace('¡', '').replace('¿', '');
        vrt = vrt.toLowerCase();
        var vrt3 = vrt;
        if (vrt.length > 3) {
          vrt3 = vrt.slice(0, -1);
        }
        ///ENGLISH WORDS
        var ert = engExamplesQuiz[xx];
        if (lessonNumber == 0) {
          ert = engNums1[xx];
        }
        if (ert.indexOf('</em>') != -1) {
          ert = ert.split('</em>');
          ert = ert[ert.length - 2];
          ert = ert.split('<em>');
          ert = ert[ert.length - 1];
          ert = ert.replace('¡', '').replace('¿', '');
          ert = ert.toLowerCase();
          var ert3 = ert;
          if (ert.length > 3) {
            ert3 = ert.slice(0, -1);
          }
          if (
            tpArr3.indexOf(vrt3) == -1 &&
            tpArr.indexOf(vrt3) != -1 &&
            etpArr2[tpArr.indexOf(vrt3)] == ert
          ) {
            tpArr3.push(vrt3);
            errors2.push(xx + 1);
          }
        }
      }
    }
    ////////////////////////

    if (lessonNumber == 0 || quizLessonBoth == 'quiz') {
      for (xx = 0; xx < errors2.length; xx++) {
        var imageInfo = imageArray[parseInt(errors2[xx]) - 1].split('/');
        var flInfo1 = imageInfo[imageInfo.length - 1]
          .split('pic')
          .join('')
          .split('.jpg')
          .join('');
        flInfo1 = parseInt(flInfo1);
        var flInfo2 = parseInt(imageInfo[imageInfo.length - 3]);
        var fCard = flInfo2 + '|' + flInfo1 + cardCate;
        var ii;
        var foundIt = false;
        for (ii = 0; ii < cardRaw.length; ii++) {
          var cReal = cardRaw[ii].split('|');
          cReal = cReal[0] + '|' + cReal[1] + '|' + cReal[2];
          if (cReal == fCard) {
            foundIt = true;
          }
        }
        if (!foundIt) {
          cardRaw.push(fCard);
        }
      }
    } else {
      /////
      for (i = 0; i < errors2.length; i++) {
        var fCard = lessonNumber + '|' + parseInt(errors2[i]) + cardCate;
        var ii;
        var foundIt = false;
        for (ii = 0; ii < cardRaw.length; ii++) {
          var cReal = cardRaw[ii].split('|');
          cReal = cReal[0] + '|' + cReal[1] + '|' + cReal[2];
          if (cReal == fCard) {
            foundIt = true;
          }
        }
        if (!foundIt) {
          cardRaw.push(fCard);
        }
      }
      /////
    }
    //save it

    ///2021ma END///////////////////////////////////////////////////////////////////////////////////////

    $('#flashNotice').show();
    setTimeout(function () {
      $('#flashNotice').fadeOut();
      $('#flashCard2').fadeIn();
    }, 700);
    $('.addQuizFlash').addClass('disableFlash');
    localStorage.setItem(storeInfo + 'cardsSTORE', cardRaw.join(':'));
    infoToUpdate = cardRaw.join(':');
    fieldToUpdate = 'cards';
    updateDatabase();
  });

  ////////////////////////////////////////////////////////////2020 EXTRA NEW END

  $('#flashCard').on('click', function () {
    ///
    if (currentDevice != 'mobile') {
      playSprite('shimmer');
    }
    $('#flashNotice').show();
    setTimeout(function () {
      $('#flashNotice').fadeOut();
    }, 700);
    $('#flashCard').hide();
    $('#flashCard2').fadeIn(1000);

    var tempInfo = forExamples[currentWordNum];
    tempInfo = forCopy.indexOf(tempInfo);
    var fCard = lessonNumber + '|' + (tempInfo + 1) + cardCate;
    cardRaw.push(fCard);
    localStorage.setItem(storeInfo + 'cardsSTORE', cardRaw.join(':'));
    infoToUpdate = cardRaw.join(':');
    fieldToUpdate = 'cards';
    updateDatabase();
  });
  ///
  $('#flashCard2').on('click', function () {
    ///FLASH CARD ACTIONS START
    if (currentDevice != 'mobile') {
      playSprite('quizBad');
    }
    $('#flashNotice2').show();
    setTimeout(function () {
      $('#flashNotice2').fadeOut();
    }, 700);
    $('#flashCard2').hide();
    $('#flashCard').fadeIn(1000);
    var tempInfo = forExamples[currentWordNum];
    tempInfo = forCopy.indexOf(tempInfo);
    var fCard = lessonNumber + '|' + (tempInfo + 1) + cardCate;
    var tempArr = [];
    var ww;
    for (ww = 0; ww < cardRaw.length; ww++) {
      var cReal = cardRaw[ww].split('|');
      cReal = cReal[0] + '|' + cReal[1] + '|' + cReal[2];
      if (cReal != fCard) {
        tempArr.push(cardRaw[ww]);
      }
    }
    cardRaw = tempArr.slice(0);
    localStorage.setItem(storeInfo + 'cardsSTORE', cardRaw.join(':'));
    infoToUpdate = cardRaw.join(':');
    fieldToUpdate = 'cards';
    updateDatabase();
    ///FLASH CARD ACTIONS END
  });

  $('#extraOn').on('click', function () {
    localStorage.setItem(
      sessionStorage['userEmailSTORE'] + 'extraExamples',
      'OFF',
    );
    extraExamples = false;
    $('#extraOn').hide();
    $('#extraOff').show();
    $('#roundButtons2').addClass('extraOff');
    verifyArrows();
  });

  $('#extraOff').on('click', function () {
    localStorage.setItem(
      sessionStorage['userEmailSTORE'] + 'extraExamples',
      'ON',
    );
    extraExamples = true;
    $('#extraOff').hide();
    $('#extraOn').show();
    $('#roundButtons2').removeClass('extraOff');
    verifyArrows();
  });

  $('#extraSwitch input').change(function () {
    if (this.checked) {
      if (greenBub.indexOf(lessonNumber) !== -1) {
        $('.toggle-control input:checked ~ .control').css({
          'background-color': '#397516',
        });
      } else if (orangeBub.indexOf(lessonNumber) !== -1) {
        $('.toggle-control input:checked ~ .control').css({
          'background-color': '#E25833',
        });
      } else if (yellowBub.indexOf(lessonNumber) !== -1) {
        $('.toggle-control input:checked ~ .control').css({
          'background-color': '#DB9F3E',
        });
      } else if (redBub.indexOf(lessonNumber) !== -1) {
        $('.toggle-control input:checked ~ .control').css({
          'background-color': '#AA2121',
        });
      } else if (blueBub.indexOf(lessonNumber) !== -1) {
        $('.toggle-control input:checked ~ .control').css({
          'background-color': '#15589B',
        });
      } else if (violetBub.indexOf(lessonNumber) !== -1) {
        $('.toggle-control input:checked ~ .control').css({
          'background-color': '#59367F',
        });
      } else if (purpleBub.indexOf(lessonNumber) !== -1) {
        $('.toggle-control input:checked ~ .control').css({
          'background-color': '#2E428E',
        });
      } else if (turquoiseBub.indexOf(lessonNumber) !== -1) {
        $('.toggle-control input:checked ~ .control').css({
          'background-color': '#196872',
        });
      }
    } else {
      $('.control').css({ 'background-color': 'darkGrey' });
    }
  });

  if (currentDevice != 'mobile') {
    $('#extraOn').hover(function () {
      $('#arrowLabel').text('TURN OFF EXTRA EXAMPLES');
      $('.instructions').toggleClass('showDiv');
    });
    $('#extraOff').hover(function () {
      $('#arrowLabel').text('TURN ON EXTRA EXAMPLES');
      $('.instructions').toggleClass('showDiv');
    });
    $('#flashCard').hover(function () {
      $('#arrowLabel').text('ADD TO FLASH CARD FOR REVIEW');
      $('.instructions').toggleClass('showDiv');
    });
    $('#flashCard2').hover(function () {
      $('#arrowLabel').text('REMOVE FROM FLASH CARDS');
      $('.instructions').toggleClass('showDiv');
    });
  }

  $('#sideNote').on('click', function () {
    if ($('#sideNote span').is(':visible')) {
      $('#sideNote span').slideUp();
      $('#sideNote img').attr('src', '../../search/common/arrBlackDown.svg');
      irregSpan = false;
      localStorage.setItem(storeInfo + 'irregSTORE', 'OFF');
    } else {
      $('#sideNote span').slideDown();
      $('#sideNote img').attr('src', '../../search/common/arrBlackUp.svg');
      irregSpan = true;
      localStorage.removeItem(storeInfo + 'irregSTORE');
    }
  });

  //2020 EXTRA END////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  initiate();
}
///////END LOAD OPTIONS

/////////////START INIT OPTIONS
$(document).ready(function () {
  ////WINDOW RESIZE
  viewport = document.querySelector('meta[name=viewport]');
  if ($('html').innerWidth() < 350 || $('html').innerHeight() < 350) {
    viewport.setAttribute(
      'content',
      'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.7,minimum-scale=0.7,viewport-fit=cover',
    );
  } else if ($('html').innerWidth() < 450 || $('html').innerHeight() < 450) {
    if ($('html').innerWidth() > 760 || $('html').innerHeight() > 760) {
      viewport.setAttribute(
        'content',
        'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.9,minimum-scale=0.9,viewport-fit=cover',
      );
      if (osType.indexOf('droid') != -1) {
        $('body').addClass('android');
      }
    } else {
      viewport.setAttribute(
        'content',
        'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.8,minimum-scale=0.8,viewport-fit=cover',
      );
    }
  } else {
    viewport.setAttribute(
      'content',
      'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=1,minimum-scale=1,viewport-fit=cover',
    );
  }

  ///BACKGROUND
  $('#background').css({
    'background-image': 'url(' + oPath + 'images/background.png)',
  });

  if (loginAppend.length > numberLength) {
    $('body').append(mainHTML);
    $('body').append(lessonAppend);
    $('body').append(quizAppend);
  }

  ////OS START IOS VERSION ONLY
  if (osType == 'iOS') {
    if ($('html').innerWidth() < 500 || $('html').innerHeight() < 500) {
      $('.menuTitleContainer').addClass('forceHide');
    }
  }
  ////OS END IOS VERSION ONLY

  $('title').text('');
  $('#foreignText').text(lessonLanguage);
  $('#foreignText2').text(currentSection.toUpperCase() + ' SETTINGS');
  $('#menuTitleSection').html(currentSection + '<br>Menu');

  /////LOAD SOUND SPRITE
  audioSprite = document.getElementById('sfxSprite');
  audioSprite.addEventListener('timeupdate', onTimeUpdate, false);
  $('#answerForm').append(
    '<input type="text" id="writeAnswerField" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type Answer Here"/>',
  );

  //////LOAD LOG IN
  if (sessionStorage['LOGGEDIN'] == null) {
    loadLogIn();
  }
  ///////////TIMER CSS
  $('.timerMeter > .timerSpan').css({ background: btnColor[0], width: 0 });

  $('.engToggle').on('click', function () {
    if ($('#selectText').val() == 'both') {
      $('#selectText').val('foreign');
      toggleText2();
    } else {
      $('#selectText').val('both');
      toggleText2();
    }
  });
  if (currentDevice != 'mobile') {
    $('.engToggle').hover(function () {
      $('.engToggle').toggleClass('engHover');
      $('#arrowLabel').text('ENGLISH TRANSLATION ON/OFF');
      $('.instructions').toggleClass('showDiv');
    });
  }

  //5.1
  $('.insight').on('click', loadInsight);
  if (currentDevice != 'mobile') {
    $('.insight').hover(function () {
      $('.insight').toggleClass('insightHover');
      $('#arrowLabel').text('SHOW SENTENCE EXPLANATION');
      $('.instructions').toggleClass('showDiv');
    });
  }
  //5.1

  if (greenBub.indexOf(lessonNumber) !== -1) {
    $('#background').addClass('greenGradient');
  } else if (orangeBub.indexOf(lessonNumber) !== -1) {
    $('#background').addClass('orangeGradient');
  } else if (yellowBub.indexOf(lessonNumber) !== -1) {
    $('#background').addClass('yellowGradient');
  } else if (redBub.indexOf(lessonNumber) !== -1) {
    $('#background').addClass('redGradient');
  } else if (blueBub.indexOf(lessonNumber) !== -1) {
    $('#background').addClass('blueGradient');
  } else if (violetBub.indexOf(lessonNumber) !== -1) {
    $('#background').addClass('violetGradient');
  } else if (purpleBub.indexOf(lessonNumber) !== -1) {
    $('#background').addClass('purpleGradient');
  } else if (turquoiseBub.indexOf(lessonNumber) !== -1) {
    $('#background').addClass('turquoiseGradient');
  } else if (greyBub.indexOf(lessonNumber) !== -1) {
    $('#background').addClass('greyGradient');
  }
  ///PORTUGUESE CHANGE END

  ///APPLY INITIAL BACKGROUND PICTURE
  if (quizLessonBoth != 'quiz') {
    $('.mainPic1').css({
      'background-image': 'url(' + oPath + 'images/pic1.jpg)',
    });
  }
  ///APPLY LESSON TITLE
  $('.lessonTitle').text(lessonTitle);
  ///Lesson start
  $('#menuBlockContent').html(typeText);
  resizeBlockMenu();
  ///CREATE BUTTONS AND CONTENT
  $('.buttonContainer').append(
    $("<div id='btnWrap'>" + buttonCreate + '</div>'),
  ); /*new code*/
  $('#roundButtons').append($(buttonCreate2));

  ///2020 EXTRA START
  if (localStorage.getItem(storeInfo + 'irregSTORE')) {
    irregSpan = false;
  }
  $('#roundButtons2').append($(buttonCreate3));
  if (greenBub.indexOf(lessonNumber) !== -1) {
    setTimeout(function () {
      $('#extraOn').css({ background: 'url(../../common/extraOn1.svg)' });
      $('.toggle-control input:checked ~ .control').css({
        'background-color': '#397516',
      });
    }, 1000);
  } else if (orangeBub.indexOf(lessonNumber) !== -1) {
    setTimeout(function () {
      $('#extraOn').css({ background: 'url(../../common/extraOn2.svg)' });
      $('.toggle-control input:checked ~ .control').css({
        'background-color': '#E25833',
      });
    }, 1000);
  } else if (yellowBub.indexOf(lessonNumber) !== -1) {
    setTimeout(function () {
      $('#extraOn').css({ background: 'url(../../common/extraOn3.svg)' });
      $('.toggle-control input:checked ~ .control').css({
        'background-color': '#DB9F3E',
      });
    }, 1000);
  } else if (redBub.indexOf(lessonNumber) !== -1) {
    setTimeout(function () {
      $('#extraOn').css({ background: 'url(../../common/extraOn4.svg)' });
      $('.toggle-control input:checked ~ .control').css({
        'background-color': '#AA2121',
      });
    }, 1000);
  } else if (blueBub.indexOf(lessonNumber) !== -1) {
    setTimeout(function () {
      $('#extraOn').css({ background: 'url(../../common/extraOn5.svg)' });
      $('.toggle-control input:checked ~ .control').css({
        'background-color': '#15589B',
      });
    }, 1000);
  } else if (violetBub.indexOf(lessonNumber) !== -1) {
    setTimeout(function () {
      $('#extraOn').css({ background: 'url(../../common/extraOn6.svg)' });
      $('.toggle-control input:checked ~ .control').css({
        'background-color': '#59367F',
      });
    }, 1000);
  } else if (purpleBub.indexOf(lessonNumber) !== -1) {
    setTimeout(function () {
      $('#extraOn').css({ background: 'url(../../common/extraOn7.svg)' });
      $('.toggle-control input:checked ~ .control').css({
        'background-color': '#2E428E',
      });
    }, 1000);
  } else if (turquoiseBub.indexOf(lessonNumber) !== -1) {
    setTimeout(function () {
      $('#extraOn').css({ background: 'url(../../common/extraOn8.svg)' });
      $('.toggle-control input:checked ~ .control').css({
        'background-color': '#196872',
      });
    }, 1000);
  }
  if (forExamplesQuiz2.length != 0) {
    $('#extraSwitch').fadeIn();
  }
  ///2020 EXTRA END

  $('.ouinoButton, .ouinoButton2').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  if (quizLessonBoth != 'quiz') {
    if (forTitles.length == 4) {
      $('.ouinoButton').css({ width: '24.56%' });
    } /*new code*/ else if (forTitles.length == 3) {
      $('.ouinoButton').css({ width: '32.89%' });
    } /*new code*/ else if (forTitles.length == 2) {
      $('.ouinoButton').css({ width: '49.6%' });
    } /*new code*/ else if (forTitles.length == 1) {
      $('.ouinoButton').css({ width: '100%' });
    } /*new code*/ else if (forTitles.length == 5) {
      $('.ouinoButton').css({ width: '19.5%' });
    } /*new code*/ else if (forTitles.length == 6) {
      $('.ouinoButton').css({ width: '16.23%' });
    } /*new code*/
  }

  $('.gradientColor').css({
    background:
      'url(../../common/black.svg), linear-gradient(' +
      btnColor[0] +
      ',' +
      btnColor[1] +
      ')',
  });
  $('.gradientColor2').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  $('.gradientColor3').css({
    background:
      'url(../../common/black.svg), linear-gradient(' +
      btnColor[4] +
      ',' +
      btnColor[5] +
      ')',
  });
  ///////TABLET OR DESKTOP BUTTON OPTIONS

  loadButtonsMain();

  //2020 NEWEST
  if (localStorage.getItem(storeInfo + 'externalKeyboard')) {
    $('#keyboardBtn').attr('src', '../../common/keyboard.svg');
    externalKeyboard = true;
  }
  $('#keyboardBtn').on('click', function () {
    $('body').append(
      '<a href="#" id="kPrompt" onclick="$(' +
        "'#kPrompt').hide(); $('#kPrompt').remove();" +
        '" style="padding: 10px 20px; width: 290px; height: 240px; background: #101010; top: 0; right: 0; left: 0; bottom: 0; position: absolute; margin: auto; z-index: 9999999; border-radius: 10px; text-align:center; text-decoration:none; color: white;"><h2>External Keyboard?</h2>This option allows you to keep the answer field selected at all times while taking the exercise. This is helpful if you are using an external keyboard.<div style="padding: 10px 20px; width: 70px; color: black; background: #ffb700; position: absolute; bottom: 20px; left: 0; right: 0; margin: 0 auto; font-weight: bold; border-radius: 5px">Okay</div></a>',
    );
    if (localStorage.getItem(storeInfo + 'externalKeyboard')) {
      $('#keyboardBtn').attr('src', '../../common/keyboard2.svg');
      localStorage.removeItem(storeInfo + 'externalKeyboard');
      externalKeyboard = false;
    } else {
      $('#keyboardBtn').attr('src', '../../common/keyboard.svg');
      localStorage.setItem(storeInfo + 'externalKeyboard', 'on');
      externalKeyboard = true;
    }
  });
  //2020 NEWEST
  ///////END DESKTOP OPTIONS
  $(window).resize(function () {
    resizePage();
    setTimeout(function () {
      resizePage();
    }, 200);
  });
  $(window).load(function () {
    resizePage();
  });
  ///////FIRST BUTTON HILITE
  $('#button0').addClass('buttonOn');
  $('#button0').css({
    background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
  });
  $('#button' + (numWords - 1)).css({ marginBottom: '1.4%' });
  ///////PRELOAD PICTURES
  $.fn.preload = function () {
    this.each(function () {
      $('<img/>')[0].src = this;
    });
  };
  $(imageArray).preload();
  ///////SETTINGS MENU////////
  $('#selectSound').change(function () {
    toggleMusic();
  });
  $('#selectPlayback').change(function () {
    togglePlayback();
  });
  $('#selectInterval').change(function () {
    toggleInterval();
  });
  $('#selectText').change(function () {
    toggleText2();
  });
  ///////Ipad Keyboard Scroll Issue Fix
  $(document).on('blur', 'input, textarea', function () {
    setTimeout(function () {
      window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
      if (window.AndroidFullScreen) {
        window.AndroidFullScreen.immersiveMode();
      }
    }, 0);
  });
  ///////////////////////////LEARNING TIPS
  $('#learningTip').html(
    '<img src="../../common/tip.svg" class="imageAlign"/>' +
      lessonLanguage +
      ' Learning Tip<p id="endTip">',
  );
  $('#endTip').text(allLearningTips[tipNum]);
});
////////////////////////////////////////////////////////////////////////////END INIT OPTIONS

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD QUIZ
function loadQuiz() {
  $('#backBtn, #menuMain2').removeClass('darker');
  if ($('.menuBar').hasClass('noBack')) {
    $('.menuBar').removeClass('noBack');
  }
  $('#background').addClass('quizMode');

  //2020 EXTRA START
  $('#extraSwitch').hide();
  if (extraExamples) {
    //MAKE SURE maxQuizLength is an even number
    var maxQuizLength = 300;
    if (forExamplesQuiz2.length > 10) {
      maxQuizLength = 30;
    }
    var quizLength2 = forExamplesQuiz.length;
    forExamplesQuiz = forExamplesQuiz.concat(forExamplesQuiz2);
    engExamplesQuiz = engExamplesQuiz.concat(engExamplesQuiz2);
    imageArrayQuiz = imageArrayQuiz.concat(imageArrayQuiz2);
    quizSounds = quizSounds.concat(quizSounds2);
    quizMapArray = shuffle(quizMapArray);
    if (quizMapArray.length > maxQuizLength * 0.5) {
      quizMapArray = quizMapArray.slice(0, maxQuizLength * 0.5);
    }
    var quizLength = quizMapArray.length;
    quizMapArray2 = [];
    for (xx = 1; xx <= forExamplesQuiz2.length; xx++) {
      quizMapArray2.push(xx + quizLength2);
    }
    quizMapArray2 = shuffle(quizMapArray2);

    var quizMapArray3 = [];
    var tpArr = [];
    var tpArr2 = [];
    var tpArr3 = [];
    for (xx = 1; xx <= quizMapArray2.length; xx++) {
      var vrt2 = quizMapArray2[xx - 1];
      var vrt = forExamplesQuiz[vrt2 - 1];
      if (vrt.indexOf('</strong>') != -1) {
        vrt = vrt.split('</strong>');
        vrt = vrt[vrt.length - 2];
        vrt = vrt.split('<strong>');
        vrt = vrt[vrt.length - 1];
        vrt = vrt.replace('¡', '').replace('¿', '');
        vrt = vrt.toLowerCase();
        var vrt3 = vrt;
        if (vrt.length > 3) {
          vrt3 = vrt.slice(0, -1);
        }
        //2020 EXTRA NEW
        if (tpArr.indexOf(vrt3) == -1) {
          tpArr.push(vrt3);
          quizMapArray3.push(vrt2);
        } else if (tpArr2.indexOf(vrt3) == -1) {
          tpArr2.push(vrt3);
          quizMapArray3.push(vrt2);
        } else if (tpArr2.indexOf(vrt3) == -1) {
          tpArr3.push(vrt3);
          quizMapArray3.push(vrt2);
        }
        //2020 EXTRA NEW
      }
    }
    quizMapArray2 = shuffle(quizMapArray3.slice());
    if (quizMapArray2.length > quizLength) {
      quizMapArray2 = quizMapArray2.slice(0, quizLength);
    }
  } else {
    if (quizMapArray.length > 30) {
      quizMapArray = quizMapArray.slice(0, 30);
    }
  }

  if (lessonNumber === 0) {
    imageArrayQuiz = combImage.slice();
    quizSounds = combFast.slice();
    var wxw;
    for (wxw = 0; wxw < quizSounds.length; wxw++) {
      quizSounds[wxw] = quizSounds[wxw] + sType;
    }
  }

  //2020 EXTRA NEW START
  if (errorMode == false) {
    $('.addQuizFlash').removeClass('disableFlash');
    $('.addQuizFlash').show();
  } else {
    $('.addQuizFlash').addClass('disableFlash');
    $('.addQuizFlash').hide();
  }
  $('#dictBtn').hide();
  //2020 EXTRA NEW END

  if (localStorage.getItem(storeInfo + 'externalKeyboard')) {
    $('#keyboardBtn').attr('src', '../../common/keyboard.svg');
    externalKeyboard = true;
  }
  //NEW
  disableTimer = true;
  $('#quizTimerImage2').attr('src', '../../common/timerPointer2.svg');
  clearTimeout(timerDelay);
  $('#quizTimerPointer2').stop();
  //NEW
  playSprite('transition');
  if (errorMode == false) {
    ///CODE WHEN REGULAR QUIZ
    $('.quizTitle').text('CHOOSE YOUR LEARNING ACTIVITY');
    $('#quizPreloadStart').html('<span class="wrapBtn">START NOW</span>');
    $(
      '.smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
    ).css({ opacity: '1' });
    $('.gradientColor3').css({
      background:
        'url(../../common/black.svg), linear-gradient(' +
        btnColor[4] +
        ',' +
        btnColor[5] +
        ')',
    });
  } else {
    ///CODE WHEN ERROR REVISE
    $('.quizTitle').text('CHOOSE THE ACTIVITY TO REVISE ERRORS');
    $('#quizPreloadStart').html('<span class="wrapBtn">REVISE ERRORS</span>');
    $(
      '.smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
    ).css({ opacity: '0' });
    $('.gradientColor3').css({
      background: 'url(../../common/black.svg), linear-gradient(#45484d,black)',
    });
  }
  $('#slideCont').hide();
  ///Make quiz possible answers
  $('.menuBlock').removeClass('centerDiv');
  $('#menuBlockWrap, .menuBlock').hide();
  $('.ouinoContent').show();
  for (var numRR = 0; numRR < forExamplesQuiz.length; numRR++) {
    if (quesToRemove.indexOf(numRR + 1) == -1) {
      if (forExamplesQuiz[numRR].indexOf('</strong>') == -1) {
        forExamplesQuiz[numRR] = forExamplesQuiz[numRR] + '<strong></strong>';
      }
      if (
        forExamplesQuiz[numRR].indexOf('<br>') != -1 &&
        $('html').innerWidth() < 700
      ) {
        forExamplesQuiz[numRR] = forExamplesQuiz[numRR].split('<br>');
        forExamplesQuiz[numRR] = forExamplesQuiz[numRR][0];
      }
      var wordGetter = forExamplesQuiz[numRR].split('</strong>');
      wordGetter = wordGetter[wordGetter.length - 2];
      wordGetter = wordGetter.split('<strong>');
      wordGetter = wordGetter[wordGetter.length - 1];
      wordGetter = wordGetter.replace('¡', '').replace('¿', '');
      wordGetter = wordGetter.toLowerCase();
      if (wordGetter != '') {
        if (
          alternateA3.indexOf(wordGetter.toLowerCase().split(' ').join('')) ==
          -1
        ) {
          quizPossible.push(wordGetter);
        }
      }
    }
  }
  quizPossible = unique(quizPossible);
  ///End quiz possible answers

  numWords = forExamplesQuiz.length;
  $('#verbBanner').css({ display: 'none' });
  $('#pronounWarn, #starConjWarn').hide();
  if (quizScores != null) {
    pastQuizScoreAll = quizScores[lessonNumber - 1];
  } else {
    pastQuizScoreAll = '0|0|0|0';
  }

  //2020 EXTRA START
  if (lessonNumber === 0) {
    pastQuizScoreAll = '0|0|0|0';
    $(
      '.smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
    ).css({ opacity: '0' });
  }
  //2020 EXTRA END

  if (pastQuizScoreAll == '0') {
    pastQuizScoreAll = '0|0|0|0';
  }
  pastQuizScoreAll = pastQuizScoreAll.split('|');

  for (var num = 1; num <= 4; num++) {
    pastQuizScore = pastQuizScoreAll[num - 1];
    if (pastQuizScore >= 70 && pastQuizScore < 80) {
      $('#sMedal' + num).css({
        'background-image': 'url(../../common/medalIcon1.svg)',
      });
      $('#sMedal' + num).attr('name', 'Won: Bronze Medal');
    } else if (pastQuizScore >= 80 && pastQuizScore < 90) {
      $('#sMedal' + num).css({
        'background-image': 'url(../../common/medalIcon2.svg)',
      });
      $('#sMedal' + num).attr('name', 'Won: Silver Medal');
    } else if (pastQuizScore >= 90 && pastQuizScore < 100) {
      $('#sMedal' + num).css({
        'background-image': 'url(../../common/medalIcon3.svg)',
      });
      $('#sMedal' + num).attr('name', 'Won: Gold Medal');
    } else if (pastQuizScore == 100) {
      $('#sMedal' + num).css({
        'background-image': 'url(../../common/medalIcon4.svg)',
      });
      $('#sMedal' + num).attr('name', 'Won: Fluency Award');
    } else if (pastQuizScore <= 70) {
      $('#sMedal' + num).css({
        'background-image': 'url(../../common/medalIcon0.svg)',
      });
      $('#sMedal' + num).attr('name', 'No prize won yet.');
    }
  }

  if ($('#quizTimerPointer2').is(':visible')) {
    $('#quizTimerPointer2').stop(true, true);
    clearTimeout(timerDelay);
  }
  $('#goodAnswer').transition({ opacity: '0' });
  $('#quizBanner').hide();
  $('#newHighScore').transition({ y: '100%' });
  $('#newScoreUpdate').transition({ x: '-100%' });
  if (soundLessonEvent == true) {
    document.getElementById('mainSound').removeEventListener('ended', setTimer);
    soundLessonEvent = false;
  }
  if (soundQuizEvent != true) {
    document
      .getElementById('mainSound')
      .addEventListener('ended', afterSoundAction);
    soundQuizEvent = true;
  }
  currQuizNum = 1;
  currentPts = 0;
  currentErrors = 0;
  $('#currentScore').text(currentPts);
  $('#currentErrors').text(currentErrors);
  $('#questionNum').text(1);
  $(
    '.menuTitleContainer, #pauseBtn, #optionBtn, #quizPreload, #quizGoBack, #quizStart, #quizItself, #quizTimer, #quizTimer2, #quizTimerPointer2, #quizDone',
  ).hide();
  $('#quizMenu').show();
  currentMusic = quizMusicFile;
  toggleMusic();

  if ($('#starWrap').is(':visible')) {
    $('#starWrap').hide();
  }
  if ($('#endWrap').is(':visible')) {
    $('#endWrap, #learningTip').hide();
  }
  if ($('#optionWrap').is(':visible')) {
    $('#optionWrap').hide();
  }
  if ($('#menuWrap').is(':visible')) {
    $('#menuWrap').hide();
  }
  $('.wrapper3').css({ background: 'rgba(0,0,0,0.7)' });
  if ($('.ouinoContent').is(':visible')) {
    $('.ouinoContent').hide();
  }
  if ($('#startCover').is(':visible')) {
    $('#startCover').hide();
  }
  /////////////////////////////////
  clearTimeout(wordTimer);
  $('#mainSound').trigger('pause');
  resizeQuiz();
  $('.timerMeter > .timerSpan').hide();

  ////CHANGE QUIZ IF COMBINED QUIZ
  if (quizLessonBoth == 'lesson') {
    $('#quizContent').css({
      background: 'none',
      'box-shadow': 'none',
      border: 'none',
    });
    ///PORTUGUESE CHANGE START
    $('#quizMenu').hide();
    var blockGroup = lessonTitle
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
    blockGroup = blockGroup[1].split(' ').join('&nbsp;');
    ///PORTUGUESE CHANGE END

    if (quizPartI.indexOf(lessonNumber) != -1) {
      $('#typeOfBlock').html(blockGroup.toLowerCase() + ' (part&nbsp;1)');
    } else if (quizPartII.indexOf(lessonNumber) != -1) {
      $('#typeOfBlock').html(blockGroup.toLowerCase() + ' (part&nbsp;2)');
    } else {
      $('#typeOfBlock').html(blockGroup.toLowerCase());
    }
    $('#quizBlock').show();
  } else {
    $('#quizMenu').show();
    $('#quizBlock').hide();
  }
  ///////////////////
  if ($('#quizContent').is(':hidden')) {
    $('#quizContent').show();
  }

  loadButtonsQuiz();
}

function loadQuiz1() {
  maxScore = 55;
  $('#keyboardBtn').show();
  ///2020 EXTRA START
  shuffle(quizMapArray);
  shuffle(quizMapArray2);
  quizCombinedArray = quizMapArray.concat(quizMapArray2);
  ///2020 EXTRA END
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong3.svg)',
  });
  findAccents();
  $(
    '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #possibleDiv',
  ).show();
  $('#quizAllItemsC').addClass('noBack');
  $('#hintTable, #writeAnswerBoard, #answerForm').hide();
  disableTimer = true;
  $('#quizMenu').hide();
  timerTime = 20000;
  quizNumQues = quizCombinedArray.length;
  if (errorMode == true) {
    quizNumQues = errors.length;
  }
  $('#numberOfQues').text(quizNumQues);
  $('.quizPreloadTitle').text(quizTitle1);
  $('#quizPreloadDescription').text(quizDescription1);
  $('#quizStartImg, #quizPreloadMedal').css({
    'background-image': 'url(../../common/quiz' + currentSecShort + '1.svg)',
  });
  currentQuiz = 1;
  preLoadQuiz();
}

function loadQuiz2() {
  maxScore = 65;
  $('#keyboardBtn').show();
  ///2020 EXTRA START
  shuffle(quizMapArray);
  shuffle(quizMapArray2);
  quizCombinedArray = quizMapArray.concat(quizMapArray2);
  ///2020 EXTRA END
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong3.svg)',
  });
  findAccents();
  $(
    '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #hintTable, #writtenAnswer, #writeAnswerBoard, #answerForm',
  ).show();
  $('#quizAllItemsC').removeClass('noBack');
  $('#possibleDiv').hide();
  disableTimer = true;
  $('#quizMenu').hide();
  timerTime = 20000;
  quizNumQues = quizCombinedArray.length;
  if (errorMode == true) {
    quizNumQues = errors.length;
  }
  $('#numberOfQues').text(quizNumQues);
  $('.quizPreloadTitle').text(quizTitle2);
  $('#quizPreloadDescription').text(quizDescription2);
  $('#quizStartImg, #quizPreloadMedal').css({
    'background-image': 'url(../../common/quiz' + currentSecShort + '2.svg)',
  });
  currentQuiz = 2;
  preLoadQuiz();
}

function loadQuiz3() {
  maxScore = 65;
  quizPtsCount = 65;
  $('#keyboardBtn').show();
  ///2020 EXTRA START
  shuffle(quizMapArray);
  shuffle(quizMapArray2);
  quizCombinedArray = quizMapArray.concat(quizMapArray2);
  ///2020 EXTRA END
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong4.svg)',
  });
  $('#quizAllItemsC').removeClass('noBack');
  $('#possibleDiv').hide();
  findAccents();
  $(
    '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #hintTable, #writtenAnswer, #writeAnswerBoard, #answerForm',
  ).show();
  disableTimer = true;
  $('#quizMenu').hide();
  timerTime = 20000;
  quizNumQues = quizCombinedArray.length;
  if (errorMode == true) {
    quizNumQues = errors.length;
  }
  $('#numberOfQues').text(quizNumQues);
  $('.quizPreloadTitle').text(quizTitle3);
  $('#quizPreloadDescription').text(quizDescription3);
  $('#quizStartImg, #quizPreloadMedal').css({
    'background-image': 'url(../../common/quiz' + currentSecShort + '3.svg)',
  });
  currentQuiz = 3;
  preLoadQuiz();
}

function preLoadQuiz() {
  pastQuizScore = pastQuizScoreAll[currentQuiz - 1];
  if (pastQuizScore != 0) {
    $('#bestScore, #bestScore2').text(pastQuizScore + '%');
    if (pastQuizScore >= 70 && pastQuizScore < 80) {
      $('#bestMedal, #bestMedal2').text('Bronze');
      $('#bannerMedal').attr('src', '../../common/medalIcon1.svg');
    } else if (pastQuizScore >= 80 && pastQuizScore < 90) {
      $('#bestMedal, #bestMedal2').text('Silver');
      $('#bannerMedal').attr('src', '../../common/medalIcon2.svg');
    } else if (pastQuizScore >= 90 && pastQuizScore < 100) {
      $('#bestMedal, #bestMedal2').text('Gold');
      $('#bannerMedal').attr('src', '../../common/medalIcon3.svg');
    } else if (pastQuizScore == 100) {
      $('#bestMedal, #bestMedal2').text('Fluent');
      $('#bannerMedal').attr('src', '../../common/medalIcon4.svg');
    } else if (pastQuizScore > 0 && pastQuizScore <= 70) {
      $('#bestMedal, #bestMedal2').text('None');
      $('#bannerMedal').attr('src', '../../common/medalIcon0.svg');
    }
  } else {
    $('#bestScore, #bestScore2, #bestMedal, #bestMedal2').text('None');
    $('#bannerMedal').attr('src', '../../common/medalIcon0.svg');
  }
  $('#quizPreload, #quizGoBack').show();
  $('#quizBanner').show();
}

function startQuiz() {
  $('#backBtn, #menuMain2').addClass('darker');

  var saveLoc = window.location.href;
  saveLoc = saveLoc.split(currentSecShort + '/');
  saveLoc = currentSecShort + '/' + saveLoc[1];
  ///PORTUGUESE CHANGE START
  localStorage.setItem(storeInfo + 'saved', saveLoc);
  clearTimeout(saveTime);
  saveTime = setTimeout(savePosition, 3000);
  ///PORTUGUESE CHANGE END
  localStorage.setItem(storeInfo + 'savedMenu', sessionStorage['menuType']);
  ////UPDATE RECORD USE
  if (localStorage.getItem(storeInfo + 'goalsSTORE')) {
    var newDay = new Date();
    newDay = newDay.getDate() + newDay.format('mmmm') + newDay.getFullYear();
    var goalUseArray = [];
    goalUseArray = localStorage.getItem(storeInfo + 'goalsSTORE').split(':');
    if (goalUseArray.indexOf(newDay) === -1) {
      goalUseArray.push(newDay);
      for (i = 1; i <= 5; i++) {
        goalUseArray.push('0');
      }
      goalUseArray.push('1');
      localStorage.setItem(storeInfo + 'goalsSTORE', goalUseArray.join(':'));
      infoToUpdate = goalUseArray.join(':');
      fieldToUpdate = 'goals';
      updateDatabase();
    }
  }
  if (
    localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    localStorage.getItem(storeInfo + 'goalsSTORE') == null
  ) {
    var todayDate2 = new Date();
    todayDate2 =
      todayDate2.getDate() +
      todayDate2.format('mmmm') +
      todayDate2.getFullYear();
    var goalArray2 = [todayDate2, '0', '0', '0', '0', '0', '1'];
    localStorage.setItem(storeInfo + 'goalsSTORE', goalArray2.join(':'));
    infoToUpdate = goalArray2.join(':');
    fieldToUpdate = 'goals';
    updateDatabase();
  }
  ////END UPDATE RECORD USE
  resizeQuiz();
  $('#quizPreload, #quizGoBack').hide();
  $('#quizStart').show();
  $('#quizStart').css({ opacity: '1' });
  ///2019
  playSprite('blank');
  setTimeout(function () {
    $('#quizStart').animate({ opacity: '0' }, 300, function () {
      $('#quizStart').hide();
      $('#quizItself').show();
      $('#quizTimerPointer2').show();
      if (currentQuiz <= 2) {
        $('#quizTimer, #quizTimer2').hide();
      } else if (currentQuiz == 3) {
        $('#quizTimer2').show();
      }
      resizeQuizText();
      firstLoad();
    });
  }, 1000);
}

function firstLoad() {
  $('#quizTimer, #quizTimer2, #quizTimerPointer2, #quizItself').css({
    opacity: '0',
  });
  loadQuestion();
  playSprite('blank');
  setTimeout(function () {
    $('#quizTimer, #quizTimer2, #quizItself').transition({ opacity: '1' });
  }, 500);
}

function loadQuestion() {
  $('.possWord').removeClass('disableIt');
  clearTimeout(loadingTime);
  madeError = false;
  setTimeout(function () {
    $('#quizTimerPointer2').css({ opacity: '0' });
  }, 200);
  $('#questionNum').text(currQuizNum);
  quizQuesNum = quizCombinedArray[currQuizNum - 1];
  if (errorMode == true) {
    quizQuesNum = errors[currQuizNum - 1];
  }
  quizNumArray = [];
  for (var num = 1; num <= numWords; num++) {
    quizNumArray.push(num);
  }
  var position2 = quizNumArray.indexOf(quizQuesNum);
  if (~position2) {
    quizNumArray.splice(position2, 1);
  }
  setTimeout(function () {
    resizeQuizText();
  }, 1);
  quizActions();
}

function quizActions() {
  if (currentQuiz == 3) {
    quizTimerAnimate2();
  }
  submitted = false;
  $('#specialChars').show();
  $('#quizSentenceFor, #quizSentenceEng').hide();
  setTimeout(function () {
    quizPtsCount = 65;
    $('#quizScoreBack').css({
      'background-image': 'url(../../common/scoreBack4.svg)',
    });
    $('#goodAnswerIn2').css({
      'background-image': 'url(../../common/score4.svg)',
    });
    $('#quizScoreImg').attr('src', '../../common/score4.svg');
  }, 500);
  submitted = false;
  $('#specialChars').show();
  if (currentQuiz <= 2) {
    $('.boardBottom, #hintTable').show();
  } else {
    $('.boardBottom, #hintTable').hide();
  }
  if (currentQuiz == 3) {
    $('#quizTimer2').show();
  } else {
    $('#quizTimer2').hide();
  }
  //2020 NEW
  if (currentQuiz == 1) {
    $('#hintTable, .boardBottom').hide();
  } else if (currentQuiz == 2) {
    $('.boardBottom, #hintTable').show();
  } else {
    $('.boardBottom, #hintTable').hide();
  }
  //2020 NEW
  $('#boardMain').removeClass('topAlign');
  if (viewportHeight < 630 || viewportWidth < 450) {
    $('.boardTop').hide();
  } else {
    $('.boardTop').show();
  }
  $('#writeError, #writeError2').closest('tr').hide();
  $('#writeAnswerField').val('');
  $('.wrongLogo').hide();
  $('#hint1, #hint2, #hint3').css({ visibility: 'visible' });
  foundArticle = '';
  var quizWord;
  var subChars;

  var quizCurrSent = forExamplesQuiz[quizQuesNum - 1];
  if (quizCurrSent.charAt(0) == '%') {
    quizCurrSent = quizCurrSent.split('%');
    quizCurrSent = quizCurrSent[2];
  }
  ///2020 EXTRA START
  if (quizCurrSent.indexOf('</strong>') == -1) {
    quizCurrSent = quizCurrSent + '<strong></strong>';
  }
  ///2020 EXTRA END
  quizWord = quizCurrSent.split('</strong>');
  quizWord = quizWord[quizWord.length - 2];
  quizWord = quizWord.split('<strong>');
  quizWord = quizWord[quizWord.length - 1];
  quizWord = quizWord.replace('¡', '').replace('¿', '');
  writtenString = quizWord;
  if (quizWord.slice(-1) != "'") {
    subChars = Array(quizWord.length + 1).join('_');
    subChars = '<b>' + subChars + '_</b>';
  } else {
    subChars = Array(quizWord.length + 1).join('_');
    subChars = '<b>' + subChars + '_</b> ';
  }
  subChars = subChars.split('  ').join(' ');
  $('#quizSentenceFor').html(
    quizCurrSent.split(quizWord + '</strong>').join(subChars + '</strong>'),
  );
  $('#quizSentenceEng').html(engExamplesQuiz[quizQuesNum - 1]);
  if (currentQuiz == 1) {
    var possible2;
    //2020 EXTRA START
    quizPossible = shuffle(quizPossible);
    possible2 = quizPossible.slice();
    var theAnswer;

    ///2020 EXTRA NEW GERMAN CAPITAL EXCEPTION
    var gExcept = [
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
    ];
    if (
      gExcept.indexOf(quizWord) != -1 &&
      engExamplesQuiz[quizQuesNum - 1].indexOf('formal') != -1
    ) {
      for (var i = 0; i < possible2.length; i++) {
        if (possible2[i] === quizWord.toLowerCase()) {
          possible2.splice(i, 1);
        }
      }
      theAnswer = quizWord;
    } else {
      theAnswer = quizWord.toLowerCase();
    }
    ///2020 EXTRA NEW

    var possIndex = possible2.indexOf(theAnswer);
    if (possIndex !== -1) {
      possible2.splice(possIndex, 1);
    }
    possible2.push(theAnswer);
    possible2 = unique(possible2);
    possible2 = possible2.slice(-4);
    possible2 = shuffle(possible2);

    var dd;
    for (dd = 0; dd < possible2.length; dd++) {
      possible2[dd] = '<div class="possWord">' + possible2[dd] + '</div>';
    }
    $('#possibleDivIn').html(
      "<div class='possCont'>" + possible2.join('') + '</div>',
    );
    var possLength = $('.possWord').length;
    $('.possWord').css({
      width: $('#quizAllItemsC').width() * 0.98 + 'px',
      height: $('#quizAllItemsC').height() / possLength - 4 + 'px',
    });
    $('.possWord').off();

    $('.possWord').on('touchend mouseup', function (event) {
      event.preventDefault();
      checkClickAnswer($(this).text());
    });

    ///RESIZE POSSIBLE HEIGHT
    var possHeight =
      $('#quizSentenceEng').outerHeight() + $('#quizSentenceFor').outerHeight();
    if ($('body').hasClass('notch') && possHeight > 90) {
      $('.possWord').css({
        height: $('#quizAllItemsC').height() / 4 - 12 + 'px',
      });
      $('#quizAllItemsC').css({ 'margin-top': '12px' });
    } else {
      $('.possWord').css({
        height: $('#quizAllItemsC').height() / 4 - 4 + 'px',
      });
      $('#quizAllItemsC').css({ 'margin-top': '28px' });
    }

    if (currentDevice == 'mobile') {
      $('.possWord')
        .on('touchstart', function () {
          $(this).addClass('possWordHover');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('possWordHover');
        });
    } else {
      $('.possWord').hover(function () {
        $(this).toggleClass('possWordHover');
      });
    }
  }
  if (typeof addQuizNote !== 'undefined') {
    $('#quizWriteImg b').html(addQuizNote);
    $('#quizWriteImg b').css({ opacity: '1' });
  }
  //2020 EXTRA END
  $('em, strong').css({ color: '#FC0' });
  ////END FOR
  quizGoodAnswer = writtenString;
  wArr = writtenString.split('');
  ///2020 NEW
  quizGoodPunct = quizGoodAnswer
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
    .join('-');
  ///2020 NEW
  allLetters = quizGoodPunct
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
    .split('');
  timerTime = 8000 + allLetters.length * 800;
  for (var num = 0; num < allChars.length; num++) {
    if (quizGoodPunct.indexOf(allChars[num]) != -1) {
      timerTime = timerTime + 3000;
    }
  }
  ///2020 EXTRA NEW START
  if (lessonNumber == 0) {
    timerTime = timerTime + 3000;
  }
  ///2020 EXTRA NEW END

  letterArray = [];
  for (var num = 0; num < allLetters.length; num++) {
    letterArray.push(num);
  }
  letterArray = shuffle(letterArray);
  letterArrayNum = 0;
  var writtenLength = wArr.length;
  quizDisplayAnswer = '';
  var letterNum = 0;
  for (var num = 0; num < writtenLength; num++) {
    if (wArr[num] == ' ') {
      quizDisplayAnswer =
        quizDisplayAnswer + '<span class="spanBlank noBorder">&nbsp;</span>';
    } else if (
      wArr[num] == '.' ||
      wArr[num] == '?' ||
      wArr[num] == '!' ||
      wArr[num] == ',' ||
      wArr[num] == '¡' ||
      wArr[num] == '¿' ||
      wArr[num] == '_'
    ) {
      quizDisplayAnswer =
        quizDisplayAnswer + '<span class="spanBlank">' + wArr[num] + '</span>';
    } else if (wArr[num] == 'i' || wArr[num] == 'I' || wArr[num] == 'l') {
      quizDisplayAnswer =
        quizDisplayAnswer +
        '<span id="letter' +
        letterNum +
        '" class="spanBlank"><i class="invisible">' +
        wArr[num] +
        '&nbsp;</i></span>';
      letterNum++;
    } else {
      quizDisplayAnswer =
        quizDisplayAnswer +
        '<span id="letter' +
        letterNum +
        '" class="spanBlank"><i class="invisible">' +
        wArr[num] +
        '</i></span>';
      letterNum++;
    }
  }

  ///Get Quiz Display
  if (foundArticle != '') {
    quizDisplayAnswer =
      foundArticle +
      '<span class="spanBlank"></span><b >' +
      quizDisplayAnswer +
      '</b>';
  } else {
    quizDisplayAnswer = '<b >' + quizDisplayAnswer + '</b>';
  }
  $('#writtenAnswer').html(quizDisplayAnswer);
  $('#englishWrite').html(engExamplesQuiz[quizQuesNum - 1]);

  $('#quizWriteImg').css({
    'background-image': 'url(' + imageArrayQuiz[quizQuesNum - 1] + ')',
  });

  if (currentQuiz != 1) {
    if (currentDevice != 'mobile' || externalKeyboard == true) {
      focused = true;
      $('#writeAnswerField').focus();
    }
  }
  if (checkAccent == true) {
    findAccent();
  }
  setTimeout(resizeQuizText, 10);
  $('#quizSentenceFor, #quizSentenceEng').show();

  /////MAKE SCRAMBLE
  scrambled = quizGoodPunct.split(' ');
  for (var num = 0; num < scrambled.length; num++) {
    var scrambledWord = scrambled[num].split('');
    scrambled[num] = shuffle(scrambledWord);
  }
  scrambled = scrambled.join().split(',');
  ///END MAKE SCRAMBLE
}

function showHint1(message) {
  var letterAdding = allLetters[letterArray[letterArrayNum]];
  var letterReplaced = scrambled[letterArray[letterArrayNum]];
  if (letterAdding != letterReplaced) {
    scrambled[scrambled.indexOf(letterAdding)] = letterReplaced;
  }
  ////IF WORD IS NOT SCRAMBLED
  if ($('#hint2').css('visibility') == 'visible') {
    $('#letter' + letterArray[letterArrayNum]).text(letterAdding);
    scrambled[letterArray[letterArrayNum]] =
      '<b class="redText">' + letterAdding + '</b>';
    letterArrayNum++;
  }
  ////IF WORD IS SCRAMBLED
  else {
    scrambled[letterArray[letterArrayNum]] =
      '<b class="redText">' + letterAdding + '</b>';
    for (var num = 0; num < scrambled.length; num++) {
      $('#letter' + num).html(scrambled[num]);
    }
    letterArrayNum++;
  }
  ////IF NO MORE LETTERS
  if (letterArrayNum == letterArray.length) {
    $('#hint1').css({ visibility: 'hidden' });
  }
  ////ANIMATION AND POINT COUNT
  currentPts = currentPts - 5;
  $('#currentScore').text(currentPts);
  ///2023 START
  if (madeError || message == 'clicked') {
    $('#hintPts1').stop(true, true);
    $('#hintPts1').css({ opacity: '1' });
    setTimeout(function () {
      $('#hintPts1').transition({ opacity: '0' });
    }, 2000);
  }
  ///2023 END
}

function showHint2() {
  quizDisplayAnswer = '';
  for (var num = 0; num < scrambled.length; num++) {
    $('#letter' + num).html(scrambled[num]);
  }
  $('#hint2').css({ visibility: 'hidden' });
  ////ANIMATION AND POINT COUNT
  currentPts = currentPts - 10;
  $('#currentScore').text(currentPts);
  $('#hintPts2').addClass('opacityAnimate');
  setTimeout(function () {
    $('#hintPts2').removeClass('opacityAnimate');
  }, 2100);
}

function showHint3() {
  $('#hint3').css({ visibility: 'hidden' });
  ////ANIMATION AND POINT COUNT
  currentPts = currentPts - 20;
  $('#currentScore').text(currentPts);
  $('#hintPts3').addClass('opacityAnimate');
  setTimeout(function () {
    $('#hintPts3').removeClass('opacityAnimate');
  }, 2100);
  disableTimer = true;
  loadQuizSound();
}

///ADD CHARACTER FONCTION
function addCharacter() {
  if (osType.indexOf('droid') != -1) {
    var currentText = $('#writeAnswerField').val();
    $('#writeAnswerField').val(currentText + charToAdd);
    focused = true;
    $('#writeAnswerField').focus();
  } else {
    var cursorPos = $('#writeAnswerField').caret();
    var currentText = $('#writeAnswerField').val();
    currentText = [
      currentText.slice(0, cursorPos),
      charToAdd,
      currentText.slice(cursorPos),
    ].join('');
    $('#writeAnswerField').val(currentText);
    focused = true;
    $('#writeAnswerField').focus();
    $('#writeAnswerField').caret(cursorPos + 1);
  }
}

///FIND ACCENTS IN PRESENTATION
function findAccents() {
  var exampleString = forExamplesQuiz.join('');
  var extraChars = [];
  for (var num = 0; num < allChars.length; num++) {
    if (exampleString.indexOf(allChars[num]) != -1) {
      var charToLower = allChars[num].toLowerCase();
      extraChars.push(charToLower);
    }
  }
  if (extraChars.length <= 6) {
    charsToAdd = extraChars.concat(specialChars);
    charsToAdd = unique(charsToAdd);
    charsToAdd = charsToAdd.splice(0, 6);
    charsToAdd = charsToAdd.sort();
    for (var num = 0; num < 6; num++) {
      $('#char' + (num + 1)).html(charsToAdd[num]);
    }
  } else {
    checkAccent = true;
  }
}

///FIND ACCENTS IN QUESTION
function findAccent() {
  var exampleString = quizGoodPunct;
  var extraChars = [];
  for (var num = 0; num < allChars.length; num++) {
    if (exampleString.indexOf(allChars[num]) != -1) {
      var charToLower = allChars[num].toLowerCase();
      extraChars.push(charToLower);
    }
  }
  charsToAdd = extraChars.concat(specialChars);
  charsToAdd = unique(charsToAdd);
  charsToAdd = charsToAdd.splice(0, 6);
  charsToAdd = charsToAdd.sort();
  for (var num = 0; num < 6; num++) {
    $('#char' + (num + 1)).html(charsToAdd[num]);
  }
}

///REMOVE ACCENT FUNCTION
function removeAccent(word) {
  var word2 = word
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
  return word2;
}

///////////CHECK WRITTEN ANSWER
function checkWrittenAnswer() {
  //2020 EXTRA START
  if ($('#writeAnswerField').val() == '' && quizGoodAnswer != '') {
    return;
  }
  //2020 EXTRA END
  if ($('#writeError2').is(':visible') && currentQuiz != 3) {
    $('#writeAnswerField').val(quizGoodAnswer);
  }
  var alterAnswer;
  var alterAnswer2;
  var goodAnswer = quizGoodPunct
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
    .join('');
  var goodNoAccent = removeAccent(goodAnswer);
  var writtenAnswer = $('#writeAnswerField')
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
    .join('');
  var writtenNoAccent = removeAccent(writtenAnswer);
  var goodArray = [];
  for (var i = 0; i < alternateA1.length; i++) {
    if (
      alternateA1.indexOf(goodAnswer) != -1 &&
      goodArray.indexOf(alternateA2[alternateA1.indexOf(goodAnswer)]) == -1
    ) {
      goodArray.push(alternateA2[alternateA1.indexOf(goodAnswer)]);
    }
    if (
      alternateA2.indexOf(goodAnswer) != -1 &&
      goodArray.indexOf(alternateA1[alternateA2.indexOf(goodAnswer)]) == -1
    ) {
      goodArray.push(alternateA1[alternateA2.indexOf(goodAnswer)]);
    }
  }
  if (goodArray[0]) {
    alterAnswer = goodArray[0];
  } else {
    alterAnswer = goodAnswer;
  }
  if (goodArray[1]) {
    alterAnswer2 = goodArray[1];
  } else {
    alterAnswer2 = goodAnswer;
  }

  ///2018CHANGE2
  if (currentQuiz == 3) {
    var errCheck = $('#writeError').text();
    if (errCheck.indexOf('watch') != -1) {
      {
        $('#writeError').html(
          "Let's&nbsp;continue!&nbsp;Don't&nbsp;worry&nbsp;about&nbsp;it.",
        );
        $('#quizTimerPointer2').stop();
        clearTimeout(timerDelay);
        $('#quizTimerPointer2').css({ opacity: '0' });
        if (currentDevice == 'mobile' && externalKeyboard == false) {
          focused = false;
          $('#writeAnswerField').blur();
        }
        if (submitted) {
          return;
        } else {
          submitted = true;
        }
        currentPts = currentPts + 65;
        $('#currentScore').text(currentPts);
        currQuizNum++;
        playSprite('quizGood');
        $('.possWord').addClass('disableIt');
        clearTimeout(loadingTime);
        loadingTime = setTimeout(function () {
          $('#loadLogo').show();
        }, 2000);
        $('#wrongAnswer, #goodAnswer, #goodAnswerPic2').stop(true, true);
        $('#wrongAnswer').css({ opacity: '0' });
        $('#wrongAnswerPic').removeClass('opacityAnimate');
        $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' });
        var quizCurrSent = forExamplesQuiz[quizQuesNum - 1];
        if (quizCurrSent.charAt(0) == '%') {
          quizCurrSent = quizCurrSent.split('%');
          quizCurrSent = quizCurrSent[2];
        }
        $('#quizSentenceFor').html(quizCurrSent);
        setTimeout(function () {
          $('#goodAnswer, #goodAnswerPic2').animate({ opacity: '0' });
          disableTimer = false;
          loadQuizSound();
        }, 700);
        var goodNoSpace = quizGoodPunct.split(' ').join('');
        for (var num = 0; num < goodNoSpace.length; num++) {
          $('#letter' + num).html(goodNoSpace[num]);
        }
        return;
      }
    }
  }
  ///2018CHANGE2

  var alterNoAccent = removeAccent(alterAnswer);
  var alterNoAccent2 = removeAccent(alterAnswer2);
  ////CHECK FOR ERRORS
  var wrongLetters = [];
  var goodLength = goodAnswer.length;
  for (var num = 0; num < goodLength; num++) {
    if (goodAnswer.charAt(num) != writtenAnswer.charAt(num)) {
      wrongLetters.push(num);
    }
  }
  ///CHECK FOR ONE MISSING LETTER
  if (writtenAnswer.length <= goodLength - 1) {
    var firstWrong = wrongLetters[0];
    var goodAnswerSlice = goodAnswer.slice(firstWrong);
    var writtenAnswerSlice;
    if (firstWrong != 0) {
      writtenAnswerSlice = writtenAnswer.slice(firstWrong + -1);
    } else {
      writtenAnswerSlice = '%' + writtenAnswer;
    }
    wrongLetters = [];
    for (var num = 0; num < goodAnswerSlice.length; num++) {
      if (goodAnswerSlice.charAt(num) != writtenAnswerSlice.charAt(num)) {
        wrongLetters.push(num + firstWrong);
      }
    }
  }
  ///CHECK FOR TWO MISSING LETTERS
  if (writtenAnswer.length == goodLength - 2) {
    var secondWrong = wrongLetters[1];
    var goodAnswerSlice2 = goodAnswer.slice(secondWrong);
    var writtenAnswerSlice2;
    if (secondWrong != 0) {
      writtenAnswerSlice2 = writtenAnswer.slice(secondWrong - 2);
    } else {
      writtenAnswerSlice2 = '%' + writtenAnswer;
    }
    wrongLetters = wrongLetters.slice(0, 1);
    for (var num = 0; num < goodAnswerSlice.length; num++) {
      if (goodAnswerSlice2.charAt(num) != writtenAnswerSlice2.charAt(num)) {
        wrongLetters.push(num + secondWrong);
      }
    }
  }

  ///CHECK FOR ONE EXTRA LETTER
  if (writtenAnswer.length == goodLength + 1) {
    var firstWrong = wrongLetters[0];
    var goodAnswerSlice = goodAnswer.slice(firstWrong);
    var writtenAnswerSlice;
    writtenAnswerSlice = writtenAnswer.slice(firstWrong + 1);
    wrongLetters = [];
    for (var num = 0; num < goodAnswerSlice.length; num++) {
      if (goodAnswerSlice.charAt(num) != writtenAnswerSlice.charAt(num)) {
        wrongLetters.push(num + firstWrong);
      }
    }
  }

  ///CALCULATE WORD PERCENTAGE
  var wrongLength = wrongLetters.length;
  var goodPercent = (goodLength - wrongLength) / goodLength;
  ///END CHECK FOR ERRORS

  //2020 EXTRA NEW
  if (goodAnswer == 'ma' && writtenAnswer == 'pero') {
    alterAnswer = 'però';
    alterAnswer = 'pero';
  } else if (goodAnswer == 'luego' && writtenAnswer == 'despues') {
    alterAnswer = 'después';
    alterAnswer = 'despues';
  }
  //2020 EXTRA NEW

  //2021ma start///////////////////////
  var alterAnswer3;
  if (lessonLanguage == 'French' && goodAnswer.length > 2) {
    if (
      goodAnswer.charAt(goodAnswer.length - 1) == '’' ||
      goodAnswer.charAt(goodAnswer.length - 1) == "'"
    ) {
      alterAnswer3 = goodAnswer.slice(0, -1) + 'e';
    } else if (goodAnswer.charAt(goodAnswer.length - 1) == 'e') {
      alterAnswer2 = goodAnswer.slice(0, -1) + "'";
      alterAnswer3 = goodAnswer.slice(0, -1) + '’';
    }
    if (
      alterAnswer.charAt(alterAnswer.length - 1) == '’' ||
      alterAnswer.charAt(alterAnswer.length - 1) == "'"
    ) {
      alterAnswer3 = alterAnswer.slice(0, -1) + 'e';
    } else if (alterAnswer.charAt(alterAnswer.length - 1) == 'e') {
      alterAnswer2 = alterAnswer.slice(0, -1) + "'";
      alterAnswer3 = alterAnswer.slice(0, -1) + '’';
    }
  }

  if (
    goodAnswer == writtenAnswer ||
    alterAnswer == writtenAnswer ||
    alterAnswer2 == writtenAnswer ||
    alterAnswer3 == writtenAnswer
  ) {
    //2021ma end///////////////////////
    if (currentQuiz == 3) {
      $('#quizTimerPointer2').stop();
      clearTimeout(timerDelay);
      $('#quizTimerPointer2').css({ opacity: '0' });
    }
    if (currentDevice == 'mobile' && externalKeyboard == false) {
      focused = false;
      $('#writeAnswerField').blur();
    }
    if (submitted) {
      return;
    } else {
      submitted = true;
    }
    currentPts = currentPts + 65;
    $('#currentScore').text(currentPts);
    currQuizNum++;
    playSprite('quizGood');
    $('.possWord').addClass('disableIt');
    clearTimeout(loadingTime);
    loadingTime = setTimeout(function () {
      $('#loadLogo').show();
    }, 2000);
    $('#wrongAnswer, #goodAnswer').stop(true, true);
    $('#wrongAnswer').css({ opacity: '0' });
    $('#wrongAnswerPic').removeClass('opacityAnimate');
    $('#goodAnswer').css({ opacity: '1' });
    var quizCurrSent = forExamplesQuiz[quizQuesNum - 1];
    if (quizCurrSent.charAt(0) == '%') {
      quizCurrSent = quizCurrSent.split('%');
      quizCurrSent = quizCurrSent[2];
    }
    $('#quizSentenceFor').html(quizCurrSent);
    resizeQuizText(); //new code
    setTimeout(function () {
      $('#goodAnswer').transition({ opacity: '0' });
      disableTimer = false;
      loadQuizSound();
    }, 700);
    var goodNoSpace = quizGoodPunct.split(' ').join('');
    for (var num = 0; num < goodNoSpace.length; num++) {
      $('#letter' + num).html(goodNoSpace[num]);
    }
  } else if (
    goodNoAccent == writtenNoAccent ||
    alterNoAccent == writtenNoAccent ||
    alterNoAccent2 == writtenNoAccent
  ) {
    var quizCurrSent = forExamplesQuiz[quizQuesNum - 1];
    if (quizCurrSent.charAt(0) == '%') {
      quizCurrSent = quizCurrSent.split('%');
      quizCurrSent = quizCurrSent[2];
    }
    $('#quizSentenceFor').html(quizCurrSent);
    resizeQuizText(); //new code
    if (currentDevice == 'mobile' && externalKeyboard == false) {
      focused = false;
      $('#writeAnswerField').blur();
    }
    if (currentQuiz == 3) {
      $('#quizTimerPointer2').stop();
      clearTimeout(timerDelay);
      $('#quizTimerPointer2').css({ opacity: '0' });
    }
    currentPts = currentPts - 5;
    $('#currentScore').text(currentPts);
    $('#hintPts1').stop(true, true);
    $('#hintPts1').css({ opacity: '1' });
    setTimeout(function () {
      $('#hintPts1').transition({ opacity: '0' });
    }, 2000);
    playSprite('pause');
    $('#boardMain').addClass('topAlign');
    $('#writeError').html('Good!&nbsp;But&nbsp;watch the&nbsp;accents...');
    $('.boardBottom, .boardTop, #specialChars, #hintTable').hide();
    $('#writeError, #writeError2').closest('tr').show();
    var accentHilite = quizGoodPunct.split(' ').join('').split('').join('%');
    for (var numA = 0; numA < 6; numA++) {
      accentHilite = accentHilite
        .split(charsToAdd[numA])
        .join('<b class="redText">' + charsToAdd[numA] + '</b>');
    }
    accentHilite = accentHilite.split('%');
    for (var num = 0; num < accentHilite.length; num++) {
      $('#letter' + num).html(accentHilite[num]);
    }
  }
  ////START CLOSE ANSWER
  else if (goodPercent >= 0.8) {
    var quizCurrSent = forExamplesQuiz[quizQuesNum - 1];
    if (quizCurrSent.charAt(0) == '%') {
      quizCurrSent = quizCurrSent.split('%');
      quizCurrSent = quizCurrSent[2];
    }
    $('#quizSentenceFor').html(quizCurrSent);
    resizeQuizText(); //new code
    if (currentDevice == 'mobile' && externalKeyboard == false) {
      focused = false;
      $('#writeAnswerField').blur();
    }
    if (currentQuiz == 3) {
      $('#quizTimerPointer2').stop();
      clearTimeout(timerDelay);
      $('#quizTimerPointer2').css({ opacity: '0' });
    }
    currentPts = currentPts - 5;
    $('#currentScore').text(currentPts);
    $('#hintPts1').stop(true, true);
    $('#hintPts1').css({ opacity: '1' });
    setTimeout(function () {
      $('#hintPts1').transition({ opacity: '0' });
    }, 2000);
    playSprite('pause');
    $('#boardMain').addClass('topAlign');
    $('#writeError').html(
      'Good&nbsp;answer! But&nbsp;watch&nbsp;your&nbsp;spelling...',
    );
    $('.boardBottom, .boardTop, #specialChars, #hintTable').hide();
    $('#writeError, #writeError2').closest('tr').show();
    var wrongHilite = quizGoodPunct.split(' ').join('').split('');
    for (var numB = 0; numB < wrongLength; numB++) {
      wrongHilite[wrongLetters[numB]] =
        '<b class="redText">' + wrongHilite[wrongLetters[numB]] + '</b>';
    }
    for (var num = 0; num < wrongHilite.length; num++) {
      $('#letter' + num).html(wrongHilite[num]);
    }
  }
  ///START WRONG ANSWER
  else {
    playSprite('quizBad');
    $('#goodAnswer').stop(true, true);
    $('#goodAnswer').css({ opacity: '0' });
    //DIFFERENT ERROR FOR FLUENT
    if (currentQuiz == 3) {
      fluentWrong();
      return;
    }
    currentErrors++;
    if (errors.indexOf(quizQuesNum) == -1) {
      errors.push(quizQuesNum);
    }
    $('#currentErrors').text(currentErrors);
    ///ADJUST ERRORS
    if ($('#wrongLogo2').is(':visible')) {
      showHint1();
      $('#boardMain').addClass('topAlign');
      $('#writeError').html(
        'Oops!&nbsp;Here&nbsp;is&nbsp;the right&nbsp;answer...',
      );
      $('.boardBottom, .boardTop, #specialChars, #hintTable').hide();
      $('#writeError, #writeError2').closest('tr').show();

      if (currentDevice == 'mobile' && externalKeyboard == false) {
        focused = false;
        $('#writeAnswerField').blur();
      }
      $('#wrongLogo3').show();
      var goodNoSpace = quizGoodPunct.split(' ').join('');
      for (var num = 0; num < goodNoSpace.length; num++) {
        $('#letter' + num).html(goodNoSpace[num]);
      }
    } else if ($('#wrongLogo1').is(':visible')) {
      $('#wrongLogo2').show();
      if (letterArrayNum < letterArray.length) {
        showHint1();
      } else {
        currentPts = currentPts - 5;
        $('#currentScore').text(currentPts);
      }
    } else {
      $('#wrongLogo1').show();
      if (letterArrayNum < letterArray.length) {
        showHint1();
      } else {
        currentPts = currentPts - 5;
        $('#currentScore').text(currentPts);
      }
    }
    ///IF MADE ERROR
    if (!madeError) {
      currentPts = currentPts - 50;
      $('#wrongAnswer, #goodAnswer').stop(true, true);
      $('#goodAnswer').css({ opacity: '0' });
      $('#wrongAnswer,#wrongAnswerPic').css({ opacity: '1' });
      setTimeout(function () {
        $('#wrongAnswer,#wrongAnswerPic').transition({ opacity: '0' });
      }, 1000);
      $('#currentScore').text(currentPts);
      madeError = true;
    }
  }
  ////END WRONG ANSWER
}

/////////
function fluentWrong() {
  if (!madeError) {
    currentErrors++;
    if (errors.indexOf(quizQuesNum) == -1) {
      errors.push(quizQuesNum);
    }
    $('#currentErrors').text(currentErrors);
    currentPts = currentPts - 65;
    $('#currentScore').text(currentPts);
    $('#wrongAnswerPic').addClass('opacityAnimate');
    setTimeout(function () {
      $('#wrongAnswerPic').removeClass('opacityAnimate');
    }, 2100);
    madeError = true;
  }
  $('#boardMain').addClass('topAlign');
  $('#writeError').html(
    'Oops!&nbsp;Here&nbsp;is&nbsp;the right&nbsp;answer...',
  );
  $('.boardBottom, .boardTop, #specialChars, #hintTable,#quizTimer2').hide();
  $('#writeError, #writeError2').closest('tr').show();
  var goodNoSpace = quizGoodPunct.split(' ').join('');
  for (var num = 0; num < goodNoSpace.length; num++) {
    $('#letter' + num).html(goodNoSpace[num]);
  }
  $('#quizTimerPointer2').stop(true, true);
  clearTimeout(timerDelay);
  $('#quizTimerImage2').css({
    '-webkit-transform': 'translate3d(-50%, 0, 0)',
    transform: 'translate3d(-50%, 0, 0)',
  });
  if (currentDevice == 'mobile' && externalKeyboard == false) {
    focused = false;
    $('#writeAnswerField').blur();
  }
  $('#wrongAnswer').stop(true, true);
  $('#wrongAnswer').css({ opacity: '1' });
  setTimeout(function () {
    $('#wrongAnswer').transition({ opacity: '0' });
  }, 1000);
}

function afterSoundAction() {
  if (disableTimer) {
    return;
  }

  var tLe = 2000;
  if (currentQuiz == 1) {
    tLe = 500;
  }

  if (currQuizNum != quizNumQues + 1) {
    setTimeout(function () {
      loadQuestion();
      $('.timerMeter > .timerSpan').stop();
      $('.timerMeter > .timerSpan').css({ width: 0 });
    }, tLe);
    $('.timerMeter > .timerSpan').css({ height: '20px' });
    $('.timerMeter > .timerSpan').each(function () {
      $(this)
        .width(0)
        .animate({ width: $('.timerMeter').width() }, tLe);
    });
    return;
  } else {
    if (currentQuiz == 3) {
      $('#quizDoneSentence').show();
    } else {
      $('#quizDoneSentence').hide();
    }
    setTimeout(function () {
      doneQuiz();
    }, 1000);
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////RESTART LESSON
function startLesson() {
  if ($('.menuBar').hasClass('noBack')) {
    $('.menuBar').removeClass('noBack');
  }
  $('#backBtn, #menuMain2').removeClass('darker');
  ///PORTUGUESE CHANGE LEFT OFF START
  findLeftOff();
  ///PORTUGUESE CHANGE LEFT OFF END
  $('#background').removeClass('quizMode');

  ///2020 EXTRA START
  $('#dictBtn').show();
  if (forExamplesQuiz2.length != 0) {
    if (extraExamples) {
      $('#extraOn').show();
      $('#extraOff').hide();
      $('#roundButtons2').removeClass('extraOff');
    } else {
      $('#extraOff').show();
      $('#extraOn').hide();
      $('#roundButtons2').addClass('extraOff');
    }
  } else {
    $('#extraOn, #extraOff').hide();
  }
  $('#extraSwitch').hide();
  //2020 EXTRA END

  $('#keyboardBtn').hide();
  playSprite('blank');
  var saveLoc = window.location.href;
  saveLoc = saveLoc.split(currentSecShort + '/');
  saveLoc = currentSecShort + '/' + saveLoc[1];
  localStorage.setItem(storeInfo + 'saved', saveLoc);
  localStorage.setItem(storeInfo + 'savedMenu', sessionStorage['menuType']);
  ////UPDATE RECORD USE
  if (localStorage.getItem(storeInfo + 'goalsSTORE')) {
    var newDay = new Date();
    newDay = newDay.getDate() + newDay.format('mmmm') + newDay.getFullYear();
    var goalUseArray = [];
    goalUseArray = localStorage.getItem(storeInfo + 'goalsSTORE').split(':');
    if (goalUseArray.indexOf(newDay) === -1) {
      goalUseArray.push(newDay);
      for (i = 1; i <= 5; i++) {
        goalUseArray.push('0');
      }
      goalUseArray.push('1');
      localStorage.setItem(storeInfo + 'goalsSTORE', goalUseArray.join(':'));
      infoToUpdate = goalUseArray.join(':');
      fieldToUpdate = 'goals';
      updateDatabase();
    }
  }
  if (
    localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    localStorage.getItem(storeInfo + 'goalsSTORE') == null
  ) {
    var todayDate2 = new Date();
    todayDate2 =
      todayDate2.getDate() +
      todayDate2.format('mmmm') +
      todayDate2.getFullYear();
    var goalArray2 = [todayDate2, '0', '0', '0', '0', '0', '1'];
    localStorage.setItem(storeInfo + 'goalsSTORE', goalArray2.join(':'));
    infoToUpdate = goalArray2.join(':');
    fieldToUpdate = 'goals';
    updateDatabase();
  }
  ////END UPDATE RECORD USE
  if ($('#pauseWrap').is(':visible')) {
    $('#pauseWrap').hide();
  }
  soundRepeated = 1;
  narrPlayed = false;
  numWords = forExamples.length;
  if ($('#quizTimerPointer2').is(':visible')) {
    $('#quizTimerPointer2').stop(true, true);
    clearTimeout(timerDelay);
  }
  $('#newHighScore').transition({ y: '100%' });
  $('#newScoreUpdate').transition({ x: '-100%' });
  $('.menuTitleContainer').show();
  $('#pauseBtn').show();
  $('#optionBtn').show();
  $('#menuMain2').show();
  $('#quizBanner').hide();

  if (soundLessonEvent != true) {
    document.getElementById('mainSound').addEventListener('ended', setTimer);
    soundLessonEvent = true;
  }
  if (soundQuizEvent == true) {
    document
      .getElementById('mainSound')
      .removeEventListener('ended', afterSoundAction);
    soundQuizEvent = false;
  }

  currentMusic = lessonMusicFile;
  toggleMusic();
  //////////BOTH RESTART AND START LESSON

  $('.timerMeter > .timerSpan').show();
  if ($('#quizContent').is(':visible')) {
    $('#quizContent').hide();
  }
  if ($('#starWrap').is(':visible')) {
    $('#starWrap').hide();
  }
  if ($('#endWrap').is(':visible')) {
    $('#endWrap, #learningTip').hide();
  }
  if ($('#optionWrap').is(':visible')) {
    $('#optionWrap').hide();
  }
  if ($('#menuWrap').is(':visible')) {
    $('#menuWrap').hide();
  }
  $('.wrapper3').css({ background: 'rgba(0,0,0,0.7)' });

  //// CHECK PLAYING SLIDE
  if (slideOn == true) {
    $('#startCover').hide();
    $('.slideBtn1, #slideImg, #slideText').on('click', function () {
      slidesNum[currSlide - 1] = '1';
      localStorage[storeInfo + 'slideInfo'] = slidesNum.join(':');
      loadSlide();
    });
    $('.slideBtn2').on('click', function () {
      slidesNum = [
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
      ];
      localStorage[storeInfo + 'slideInfo'] = slidesNum.join(':');
      loadSlide();
    });
    if (currentDevice != 'mobile') {
      $('.slideBtn1, .slideBtn2').hover(function () {
        $(this).toggleClass('fullOpacity');
      });
    }
    if (soundSlideEvent == false) {
      document
        .getElementById('mainSound')
        .addEventListener('ended', animateOkay);
      soundSlideEvent = true;
    }
    if (soundLessonEvent == true) {
      document
        .getElementById('mainSound')
        .removeEventListener('ended', setTimer);
      soundLessonEvent = false;
    }
    $('#slideCont').show();
    loadSlide();
    return;
  }

  if (soundSlideEvent == true) {
    document
      .getElementById('mainSound')
      .removeEventListener('ended', animateOkay);
    soundSlideEvent = false;
  }

  //////////START LESSON/////////////////////////////////////////
  if ($('#startCover').is(':visible')) {
    $('#startCover').hide();
    $('.ouinoContent').css({ visibility: 'visible', opacity: '0.001' });
    setTimeout(function () {
      $('.ouinoContent').animate({ opacity: '1' }, 400);
    }, 400);
    setTimeout(function () {
      $('.ouinoContent').css({ opacity: '1' });
    }, 1000);
  }
  //////////RESTART LESSON///////////////////////////////////
  else {
    restartedLesson = true;
    $('#endWrap').stop();
    $('#endWrap').hide();
    $('.ouinoContent').stop().animate({ opacity: '1' }, 2);
    $('.ouinoContent').show();
    $('.ouinoContent').css({ visibility: 'visible' });
    if (currentDevice != 'mobile') {
      playSprite('transition');
    }
    currentWordNum = 0;
  }

  if (startNarration.length >= 1) {
    $('.menuBlock').addClass('centerDiv');
    $('#menuBlockWrap, .menuBlock').show();
    if ($('body').hasClass('notch')) {
      $('.ouinoContent').hide();
    }
  }
  changeSound2();
  swapImages();
  resizePage();
}

/////////////////////////LOAD BUTTON LISTENERS
function loadButtonsMain() {
  ///OS START
  if (currentDevice == 'desktop') {
    $('#keyboardBtn').addClass('forceHide');
    $('#volDiv').slider({
      orientation: 'horizontal',
      value: mainSound.volume,
      min: 0,
      max: 1,
      range: 'min',
      animate: true,
      step: 0.1,
      slide: function (e, ui) {
        mainSound.volume = ui.value;
        mainMusic.volume = ui.value;
        sfxSprite.volume = ui.value;
        localStorage['programVolume'] = ui.value;
      },
    });
    if (localStorage['programVolume'] != null) {
      mainSound.volume = localStorage['programVolume'];
      mainMusic.volume = localStorage['programVolume'];
      sfxSprite.volume = localStorage['programVolume'];
      $('#volDiv').slider('value', localStorage['programVolume']);
    }
  } else {
    $('#volDiv').addClass('forceHide');
  }
  ///OS END

  ///2023 START
  $('#middleSwipe').hide();
  addSwipePic('mainPic1');
  addSwipePic('mainPic2');
  ///2023 END

  ///4.1.1 CHANGE
  $('.ouinoContent').on('click', function () {
    if ($('.wordSentence').hasClass('disabledMouse')) {
      titlePlay = true;
      $('.wordSentence, .wordSentenceB, .shinyPicture').removeClass(
        'disabledMouse',
      );
      changeWord();
    }
  });
  ///4.1.1 CHANGE

  $('#menuBlockWrap, .menuBlock').on('click', changeWord);

  ///4.1.1 CHANGE
  $('.wordSentence').on('click', function (e) {
    if (!$(e.target).hasClass('slowBubble')) {
      disableTimer = true;
      loadFastSound();
      $('.wordSentence').addClass('wsHover');
      setTimeout(function () {
        $('.wordSentence').removeClass('wsHover');
      }, 220);
    }
  });
  $('.wordSentenceB').on('click', function (e) {
    if (
      !$(e.target).hasClass('slowBubble') &&
      $(e.target).attr('id') != 'extraOff' &&
      $(e.target).attr('id') != 'extraOn' &&
      $(e.target).parent().attr('id') != 'roundButtons' &&
      $(e.target).attr('id') != 'roundButtons' &&
      $(e.target).parent().attr('id') != 'roundButtons2' &&
      $(e.target).attr('id') != 'roundButtons2'
    ) {
      disableTimer = true;
      sideClicked = true;
      loadFastSound();
      $('.wordSentenceB').addClass('wsHover');
      setTimeout(function () {
        $('.wordSentenceB').removeClass('wsHover');
      }, 220);
    }
  });
  ///4.1.1 CHANGE

  if (lessonNumber === 0) {
    $('#extraSwitch').hide();
  }
  if (
    localStorage.getItem(sessionStorage['userEmailSTORE'] + 'extraExamples')
  ) {
    if (
      localStorage.getItem(
        sessionStorage['userEmailSTORE'] + 'extraExamples',
      ) == 'ON'
    ) {
      $('#extraSwitch input').attr('checked', 'checked');
    }
  } else {
    $('#extraSwitch input').attr('checked', 'checked');
  }
  $('#extraSwitch .control').on('click', function () {
    if ($('#extraSwitch input')[0].hasAttribute('checked')) {
      setTimeout(function () {
        $('#extraSwitch input').removeAttr('checked');
      }, 100);
      extraExamples = false;
      localStorage.setItem(
        sessionStorage['userEmailSTORE'] + 'extraExamples',
        'OFF',
      );
    } else {
      setTimeout(function () {
        $('#extraSwitch input').attr('checked', 'checked');
      }, 100);
      extraExamples = true;
      localStorage.setItem(
        sessionStorage['userEmailSTORE'] + 'extraExamples',
        'ON',
      );
    }
  });
  //2020 EXTRA END
  ///4.1.1 CHANGE

  $('#slowBubble1, #slowBubble2')
    .on('touchstart', function () {
      $(this).css({
        '-webkit-transform': 'scale(1.2)',
        transform: 'scale(1.2)',
      });
    })
    .on('touchend touchcancel', function () {
      $(this).css({ '-webkit-transform': 'scale(1)', transform: 'scale(1)' });
    });

  $('#slowBubble1').on('click', function () {
    disableTimer = true;
    loadSlowSound();
    $('#slowBubble1').addClass('wsHover');
    setTimeout(function () {
      $('#slowBubble1').removeClass('wsHover');
    }, 220);
  });
  $('#slowBubble2').on('click', function () {
    disableTimer = true;
    sideClicked = true;
    loadSlowSound();
    $('#slowBubble2').addClass('wsHover');
    setTimeout(function () {
      $('#slowBubble2').removeClass('wsHover');
    }, 220);
  });
  ///4.1.1 CHANGE
  $('.selectOptions').addClass('fullOpacity');
  $('.wrapper, .wrapper2, .wrapper3').on('click', function (e) {
    if (e.target == this) {
      $('input').blur();
    }
  });
  $('#optionWrap').on('click', function (e) {
    if (e.target == this) {
      toggleOptions();
    }
  });
  $('#optionBtn').on('click', toggleOptions);
  $('#menuOptions').on('click', function () {
    disableTouch();
    toggleOptions();
  });
  $('#menuWrap').on('click', function (e) {
    if (e.target == this) {
      toggleMenu();
    }
  });
  $('#menuBtn').on('click', toggleMenu);
  $('#pauseBtn').on('click', togglePause);
  $('#pauseWrap').on('click', togglePause);
  $('.ouinoButton, .ouinoButton2').on('click', buttonClicked);
  $('.rightArrow').on('click', nextImage);
  $('.leftArrow').on('click', prevImage);
  $('.menuTitleContainer').on('click', startLesson);
  $('#menuRestart').on('click', startLesson);
  $('#menuRestart2').on('click', startLesson);
  $('#menuNext, #menuNext2').on('click', nextLesson);
  $('#menuPrevious').on('click', previousLesson);
  $('#menuHome').on('click', homeMenu);
  $('#menuMain2').on('touchstart mousedown', function (event) {
    event.preventDefault();
    homeMenu();
  });
  $('#menuMain').on('click', mainMenu);
  $('#menuQuiz').on('click', function () {
    errors = [];
    errorMode = false;
    if (osType == 'pwa') {
      if (
        quizLessonBoth == 'lesson' &&
        sessionStorage.getItem('offlineSession')
      ) {
        checkAllURLCache();
        return;
      }
    }
    loadQuiz();
  });
  $('#menuQuiz2').on('click', function () {
    errors = [];
    errorMode = false;
    if (osType == 'pwa') {
      if (
        quizLessonBoth == 'lesson' &&
        sessionStorage.getItem('offlineSession')
      ) {
        checkAllURLCache();
        return;
      }
    }
    loadQuiz();
  });
  $('.starSelect').on('click', selectKnowledge);
  $('.starSelect').on('click', function () {
    playSprite('shimmer');
  });
  $('#starWrap').on('click', function (e) {
    if (e.target == this) {
      $('#starWrap').hide();
    }
  });
  $('.knowledgeBox').on('click', function () {
    playSprite('transition');
    $('#starWrap').show();
  });

  if (currentDevice == 'desktop') {
    $('.wordSentence, .wordSentenceB').hover(function () {
      $(this).toggleClass('whiteHover');
    });
    $('.slowBubble').hover(function () {
      $(this).toggleClass('bitDark');
    });
    $('.ouinoButton').hover(function () {
      $(this).toggleClass('fullOpacity');
    });
    $('#optionBtn').hover(function () {
      $('#arrowLabel').text('SETTINGS MENU');
      $('.instructions').toggleClass('showDiv');
    });
    $('#menuBtn').hover(function () {
      $('#arrowLabel').text('NAVIGATION MENU');
      $('.instructions').toggleClass('showDiv');
    });
    $('#pauseBtn').hover(function () {
      $('#arrowLabel').text('PLAY / PAUSE');
      $('.instructions').toggleClass('showDiv');
    });
    $('.menuTitleContainer').hover(function () {
      $('#arrowLabel').text('RESTART LESSON');
      $('.instructions').toggleClass('showDiv');
    });
    $('#menuMain2').hover(function () {
      $('#arrowLabel').text('BACK TO HOME MENU');
      $('.instructions').toggleClass('showDiv');
    });
    $(
      '.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .menuTitleContainer',
    ).hover(function () {
      $(this).toggleClass('fullOpacity');
    });
    $('.starSelect').hover(function () {
      $(this).toggleClass('starSelectHover');
    });
    $('.knowledgeBox').hover(
      function () {
        $(this).addClass('menuBoxHover');
      },
      function () {
        $(this).removeClass('menuBoxHover');
      },
    );
    $('.menuBox').hover(
      function () {
        $(this).addClass('menuBoxHover');
        var logoPath = $(this).children('img').attr('src');
        $('#menuSideLogo').attr('src', logoPath);
      },
      function () {
        $(this).removeClass('menuBoxHover');
        $('#menuSideLogo').attr('src', '../../common/blank.svg');
      },
    );
    $('.menuBox2').hover(
      function () {
        $(this).addClass('menuBoxHover');
        var logoPath = $(this).children('img').attr('src');
        $('#endSideLogo').attr('src', logoPath);
      },
      function () {
        $(this).removeClass('menuBoxHover');
        $('#endSideLogo').attr('src', '../../common/blank.svg');
      },
    );
    $('.selectOptions').hover(function () {
      $(this).toggleClass('fullOpacity');
    });
    $('.leftArrow, .rightArrow').hover(function () {
      $(this).toggleClass('arrowHover');
    });
    $('.quizType').hover(function () {
      $(this).toggleClass('quizTypeHover');
      $(this).children('img').toggleClass('quizIconHover');
    });
  }

  ///OS END
}

function loadButtonsQuiz() {
  if (quizLoaded == true) {
    return;
  }
  //2020 EXTRA START

  $('#practiceErrors div').on('touchend mouseup', function (event) {
    event.preventDefault();
    errorMode = true;
    loadQuiz();
  });
  //2020 EXTRA END
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $('#quizContent').on('touchstart', function (ev) {
      ev.preventDefault();
    });
  }
  quizLoaded = true;
  $('#answerForm').submit(function (ev) {
    ev.preventDefault();
    checkWrittenAnswer();
  });
  $('.quizItemsB').css({
    background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
  });
  if (currentDevice == 'mobile') {
    ///MOBILE
    $('#writeAnswerField').on('touchstart', function () {
      focused = true;
      $('#writeAnswerField').focus();
    });
    $('#writeAnswerField').on('focus', function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.scrollTo(0, 0);
    });
    $('#writeAnswerField').on('blur', function () {
      focused = false;
      setTimeout(function () {
        resizeQuiz();
      }, 500);
    });
    $('#quizBlockContinue').on('touchstart mousedown', function (event) {
      event.preventDefault();
      loadCombinedQuiz();
    });
    $('#quizBtn1').on('touchstart mousedown', function (event) {
      event.preventDefault();
      loadQuiz1();
    });
    $('#quizBtn2').on('touchstart mousedown', function (event) {
      event.preventDefault();
      loadQuiz2();
    });
    $('#quizBtn3').on('touchstart mousedown', function (event) {
      event.preventDefault();
      loadQuiz3();
    });
    $('.quizItems, .quizItemsB').on('touchmove', function (e) {
      e.preventDefault();
    });
    $('#quizGoBack').on('click', function () {
      errors = [];
      errorMode = false;
      loadQuiz();
    });
    $('#quizPreloadStart').on('touchstart mousedown', function (event) {
      event.preventDefault();
      setTimeout(function () {
        startQuiz();
      }, 100);
    });
    $('#quizDoneContinue').on('touchstart mousedown', function (event) {
      event.preventDefault();
      setTimeout(function () {
        toggleMenu();
      }, 100);
    });
    $('.boardChar').on('touchend mouseup', function (event) {
      event.preventDefault();
      charToAdd = $(this).text();
      addCharacter();
    });
    $('#hint1').on('touchend mouseup', function (event) {
      event.preventDefault();
      showHint1('clicked');
      playSprite('shimmer');
    });
    $('#hint2').on('touchend mouseup', function (event) {
      event.preventDefault();
      showHint2();
      playSprite('shimmer');
    });
    $('#hint3').on('touchend mouseup', function (event) {
      event.preventDefault();
      showHint3();
      playSprite('shimmer');
    });
    $('#writeError2').on('touchstart mousedown', function (event) {
      event.preventDefault();
      $('#writeAnswerField').val(quizGoodAnswer);
      checkWrittenAnswer();
    });
    $('.boardBottom, .boardChar')
      .on('touchstart', function () {
        $(this).addClass('quizIconBig');
      })
      .on('touchend touchcancel', function () {
        $(this).removeClass('quizIconBig');
      });
    $('#writeError2')
      .on('touchstart', function () {
        $(this).addClass('fullOpacity');
      })
      .on('touchend touchcancel', function () {
        $(this).removeClass('fullOpacity');
      });
  } else {
    ///DESKTOP
    $('.boardBottom,.boardChar').hover(function () {
      $(this).toggleClass('quizIconBig');
    });
    $('#writeError2').hover(function () {
      $(this).toggleClass('fullOpacity');
    });
    $('#quizBlockContinue').on('click', loadCombinedQuiz);
    $('#quizBtn1').on('click', loadQuiz1);
    $('#quizBtn2').on('click', loadQuiz2);
    $('#quizBtn3').on('click', loadQuiz3);
    $('#quizGoBack').on('click', function () {
      errors = [];
      errorMode = false;
      loadQuiz();
    });
    $('#quizPreloadStart').on('click', startQuiz);
    $('#quizDoneContinue').on('click', toggleMenu);
    $('.boardChar').on('click', function () {
      charToAdd = $(this).text();
      addCharacter();
    });
    $('#hint1').on('click', function () {
      showHint1('clicked');
      playSprite('shimmer');
    });
    $('#hint2').on('click', function () {
      showHint2();
      playSprite('shimmer');
    });
    $('#hint3').on('click', function () {
      showHint3();
      playSprite('shimmer');
    });
    $('#writeError2').on('click', function () {
      $('#writeAnswerField').val(quizGoodAnswer);
      checkWrittenAnswer();
    });
    $('#quizDoneContinue, #practiceErrors, #quizPreloadStart')
      .on('mouseover', function () {
        $(this).css({
          'text-shadow': '2px 1px 0px #FC0, rgb(0, 0, 0) 3px 2px 0px',
        });
      })
      .on('mouseout', function () {
        $(this).css({ 'text-shadow': 'rgb(0, 0, 0) 3px 2px 0px' });
      });
    $('.quizItems').hover(function () {
      $(this).children('.quizItemsTop').toggleClass('quizItemsHover');
    });
    $('.quizItemsB').hover(function () {
      $(this).toggleClass('fullOpacity');
    });

    /////END DESKTOP
  }
}

/////LOAD QUIZ SOUND
function loadQuizSound() {
  $('#mainSound').trigger('pause');
  var quizSound = quizSounds[quizQuesNum - 1];
  //2020 PLAY
  if (quizSound.indexOf('../../') != -1) {
    quizSound = quizSound.split('../../').join(pre);
  }
  //2020 PLAY
  $('#mainSound').attr('src', quizSound);
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('canplay', playQuizSound);
}

////PLAY QUIZ SOUND
function playQuizSound() {
  if ($('#loadLogo').is(':visible')) {
    $('#loadLogo').fadeOut();
  }
  clearTimeout(loadingTime);

  setTimeout(function () {
    document
      .getElementById('mainSound')
      .removeEventListener('canplay', playQuizSound);
    try {
      document
        .getElementById('mainSound')
        .play()
        .then(function () {})
        .catch(function (error) {
          console.error('Playback failed because: ', error);
        });
    } catch (error) {
      console.error('Playback failed because: ', error);
    }
  }, 300);
}

function loadFirstSound() {
  $('#mainSound').attr('src', '../../common/blank' + soundType);
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('canplay', playQuizSound);
}

function quizTimerAnimate() {
  clearTimeout(timerDelay);
  $('#quizTimerPointer').stop(true, true);
  if (!localStorage.getItem(storeInfo + 'quizTimer')) {
    timerDelay = setTimeout(function () {
      var aniLength = $('#quizTimer').width() - 20;
      $('#quizTimerImage').css({
        '-webkit-transform': 'translateX(0%)',
        transform: 'translateX(0%)',
      });
      $('#quizTimerPointer').stop(true, true);
      $('#quizTimerPointer').css({ left: '-23px' });
      $('#quizTimerPointer')
        .clearQueue()
        .animate({ opacity: '1' }, 200, function () {
          $('#quizTimerPointer').animate(
            { left: aniLength * 0.333 + 'px' },
            timerTime * 0.333,
            'linear',
            function () {
              quizPtsCount = 60;
              $('#quizScoreBack').css({
                'background-image': 'url(../../common/scoreBack3.svg)',
              });
              $('#quizScoreImg').attr('src', '../../common/score3.svg');
              $('#goodAnswerIn').css({
                'background-image': 'url(../../common/score3.svg)',
              });
              $('#quizTimerImage').css({
                '-webkit-transform': 'translateX(-25%)',
                transform: 'translateX(-25%)',
              });
              $('#quizTimerPointer').animate(
                { left: aniLength * 0.666 + 'px' },
                timerTime * 0.333,
                'linear',
                function () {
                  quizPtsCount = 55;
                  $('#quizScoreBack').css({
                    'background-image': 'url(../../common/scoreBack3.svg)',
                  });
                  $('#quizScoreImg').attr('src', '../../common/score2.svg');
                  $('#goodAnswerIn').css({
                    'background-image': 'url(../../common/score2.svg)',
                  });
                  $('#quizTimerImage').css({
                    '-webkit-transform': 'translateX(-50%)',
                    transform: 'translateX(-50%)',
                  });
                  $('#quizTimerPointer').animate(
                    { left: aniLength + 'px' },
                    timerTime * 0.333,
                    'linear',
                    function () {
                      quizPtsCount = 50;
                      $('#quizScoreBack').css({
                        'background-image': 'url(../../common/scoreBack1.svg)',
                      });
                      $('#quizScoreImg').attr('src', '../../common/score1.svg');
                      $('#goodAnswerIn').css({
                        'background-image': 'url(../../common/score1.svg)',
                      });
                      $('#quizTimerImage').css({
                        '-webkit-transform': 'translateX(-75%)',
                        transform: 'translateX(-75%)',
                      });
                    },
                  );
                },
              );
            },
          );
        });
    }, timerWait); ///TIMER TIME
  }
}

///FLUENT QUIZ TIMER ANIMATION
function quizTimerAnimate2() {
  clearTimeout(timerDelay);
  $('#quizTimerPointer2').stop(true, true);
  timerDelay = setTimeout(function () {
    ///TIMER FUNCTION
    timerTime = timerTime * 1.3;
    var aniLength = $('#quizTimer2').width() - 20;
    $('#quizTimerImage2').css({
      '-webkit-transform': 'translate3d(0%, 0, 0)',
      transform: 'translate3d(0%, 0, 0)',
    });
    $('#quizTimerPointer2').stop(true, true);
    $('#quizTimerPointer2').css({ left: '-23px' });
    $('#quizTimerPointer2')
      .clearQueue()
      .animate({ opacity: '1' }, 200, function () {
        $('#quizTimerPointer2').animate(
          { left: aniLength * 0.99 + 'px' },
          timerTime * 0.99,
          'linear',
          function () {
            $('#quizTimerImage2').css({
              '-webkit-transform': 'translate3d(-50%, 0, 0)',
              transform: 'translate3d(-50%, 0, 0)',
            });
            fluentWrong();
            playSprite('quizBad');
          },
        );
      });
  }, 1000); ///TIMER TIME
}

////////////SHUFFLE STUFF
function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

function resizeBlockMenu() {
  $('.menuBlock').css({
    height: $('#menuBlockContent').outerHeight() + 45 + 'px',
  });
}

///PORTUGUESE CHANGE START
var typeText =
  '<h3><img id="menuBlockImage" src="../../common/logoBlock2.svg">' +
  lessonTitle +
  '</h3>';

if (quizLessonBoth != 'quiz') {
  for (var numZZ = 0; numZZ < startNarration.length; numZZ++) {
    typeText =
      typeText +
      '<p><b class="bullet">&bull;</b> ' +
      startNarration[numZZ] +
      '</p>';
  }
  typeText = typeText;
}
///PORTUGUESE CHANGE END
///dateFormat
var dateFormat = (function () {
  var t = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
    e =
      /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    a = /[^-+\dA-Z]/g,
    m = function (t, e) {
      for (t = String(t), e = e || 2; t.length < e; ) t = '0' + t;
      return t;
    };
  return function (d, n, r) {
    var y = dateFormat;
    if (
      (1 != arguments.length ||
        '[object String]' != Object.prototype.toString.call(d) ||
        /\d/.test(d) ||
        ((n = d), (d = void 0)),
      (d = d ? new Date(d) : new Date()),
      isNaN(d))
    )
      throw SyntaxError('invalid date');
    ((n = String(y.masks[n] || n || y.masks['default'])),
      'UTC:' == n.slice(0, 4) && ((n = n.slice(4)), (r = !0)));
    var s = r ? 'getUTC' : 'get',
      i = d[s + 'Date'](),
      o = d[s + 'Day'](),
      u = d[s + 'Month'](),
      M = d[s + 'FullYear'](),
      l = d[s + 'Hours'](),
      T = d[s + 'Minutes'](),
      h = d[s + 'Seconds'](),
      c = d[s + 'Milliseconds'](),
      g = r ? 0 : d.getTimezoneOffset(),
      S = {
        d: i,
        dd: m(i),
        ddd: y.i18n.dayNames[o],
        dddd: y.i18n.dayNames[o + 7],
        m: u + 1,
        mm: m(u + 1),
        mmm: y.i18n.monthNames[u],
        mmmm: y.i18n.monthNames[u + 12],
        yy: String(M).slice(2),
        yyyy: M,
        h: l % 12 || 12,
        hh: m(l % 12 || 12),
        H: l,
        HH: m(l),
        M: T,
        MM: m(T),
        s: h,
        ss: m(h),
        l: m(c, 3),
        L: m(c > 99 ? Math.round(c / 10) : c),
        t: 12 > l ? 'a' : 'p',
        tt: 12 > l ? 'am' : 'pm',
        T: 12 > l ? 'A' : 'P',
        TT: 12 > l ? 'AM' : 'PM',
        Z: r ? 'UTC' : (String(d).match(e) || ['']).pop().replace(a, ''),
        o:
          (g > 0 ? '-' : '+') +
          m(100 * Math.floor(Math.abs(g) / 60) + (Math.abs(g) % 60), 4),
        S: ['th', 'st', 'nd', 'rd'][
          i % 10 > 3 ? 0 : (((i % 100) - (i % 10) != 10) * i) % 10
        ],
      };
    return n.replace(t, function (t) {
      return t in S ? S[t] : t.slice(1, t.length - 1);
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
  (Date.prototype.format = function (t, e) {
    return dateFormat(this, t, e);
  }));
///dateFormat

//NEW CODE SCROLL///
(function (f) {
  'use strict';
  'function' === typeof define && define.amd
    ? define(['jquery'], f)
    : 'undefined' !== typeof module && module.exports
      ? (module.exports = f(require('jquery')))
      : f(jQuery);
})(function ($) {
  'use strict';
  function n(a) {
    return (
      !a.nodeName ||
      -1 !==
        $.inArray(a.nodeName.toLowerCase(), [
          'iframe',
          '#document',
          'html',
          'body',
        ])
    );
  }
  function h(a) {
    return $.isFunction(a) || $.isPlainObject(a) ? a : { top: a, left: a };
  }
  var p = ($.scrollTo = function (a, d, b) {
    return $(window).scrollTo(a, d, b);
  });
  p.defaults = { axis: 'xy', duration: 0, limit: !0 };
  $.fn.scrollTo = function (a, d, b) {
    'object' === typeof d && ((b = d), (d = 0));
    'function' === typeof b && (b = { onAfter: b });
    'max' === a && (a = 9e9);
    b = $.extend({}, p.defaults, b);
    d = d || b.duration;
    var u = b.queue && 1 < b.axis.length;
    u && (d /= 2);
    b.offset = h(b.offset);
    b.over = h(b.over);
    return this.each(function () {
      function k(a) {
        var k = $.extend({}, b, {
          queue: !0,
          duration: d,
          complete:
            a &&
            function () {
              a.call(q, e, b);
            },
        });
        r.animate(f, k);
      }
      if (null !== a) {
        var l = n(this),
          q = l ? this.contentWindow || window : this,
          r = $(q),
          e = a,
          f = {},
          t;
        switch (typeof e) {
          case 'number':
          case 'string':
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
              e = h(e);
              break;
            }
            e = l ? $(e) : $(e, q);
          case 'object':
            if (e.length === 0) return;
            if (e.is || e.style) t = (e = $(e)).offset();
        }
        var v = ($.isFunction(b.offset) && b.offset(q, e)) || b.offset;
        $.each(b.axis.split(''), function (a, c) {
          var d = 'x' === c ? 'Left' : 'Top',
            m = d.toLowerCase(),
            g = 'scroll' + d,
            h = r[g](),
            n = p.max(q, c);
          t
            ? ((f[g] = t[m] + (l ? 0 : h - r.offset()[m])),
              b.margin &&
                ((f[g] -= parseInt(e.css('margin' + d), 10) || 0),
                (f[g] -= parseInt(e.css('border' + d + 'Width'), 10) || 0)),
              (f[g] += v[m] || 0),
              b.over[m] &&
                (f[g] += e['x' === c ? 'width' : 'height']() * b.over[m]))
            : ((d = e[m]),
              (f[g] =
                d.slice && '%' === d.slice(-1)
                  ? (parseFloat(d) / 100) * n
                  : d));
          b.limit &&
            /^\d+$/.test(f[g]) &&
            (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
          !a &&
            1 < b.axis.length &&
            (h === f[g] ? (f = {}) : u && (k(b.onAfterFirst), (f = {})));
        });
        k(b.onAfter);
      }
    });
  };
  p.max = function (a, d) {
    var b = 'x' === d ? 'Width' : 'Height',
      h = 'scroll' + b;
    if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
    var b = 'client' + b,
      k = a.ownerDocument || a.document,
      l = k.documentElement,
      k = k.body;
    return Math.max(l[h], k[h]) - Math.min(l[b], k[b]);
  };
  $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
    get: function (a) {
      return $(a.elem)[a.prop]();
    },
    set: function (a) {
      var d = this.get(a);
      if (a.options.interrupt && a._last && a._last !== d)
        return $(a.elem).stop();
      var b = Math.round(a.now);
      d !== b && ($(a.elem)[a.prop](b), (a._last = this.get(a)));
    },
  };
  return p;
});
//NEW CODE SCROLL///

function deleteDifferentElements(array, string) {
  // Calculate the differences between each element and the string
  const differences = array.map((element) =>
    levenshteinDistance(element, string),
  );

  // Sort the array based on differences in ascending order
  const sortedArray = array.slice().sort((a, b) => {
    const indexA = array.indexOf(a);
    const indexB = array.indexOf(b);
    return differences[indexA] - differences[indexB];
  });

  // Delete elements if the length is greater than 5
  if (sortedArray.length > 5) {
    sortedArray.length = 5;
  }

  return sortedArray;
}

// Function to calculate Levenshtein distance between two strings
function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  return matrix[b.length][a.length];
}

function checkClickAnswer(answer) {
  var alterAnswer;
  var alterAnswer2;
  var goodAnswer = quizGoodPunct
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
    .join('');

  var writtenAnswer = answer
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
    .join('');

  var goodArray = [];
  for (var i = 0; i < alternateA1.length; i++) {
    if (
      alternateA1.indexOf(goodAnswer) != -1 &&
      goodArray.indexOf(alternateA2[alternateA1.indexOf(goodAnswer)]) == -1
    ) {
      goodArray.push(alternateA2[alternateA1.indexOf(goodAnswer)]);
    }
    if (
      alternateA2.indexOf(goodAnswer) != -1 &&
      goodArray.indexOf(alternateA1[alternateA2.indexOf(goodAnswer)]) == -1
    ) {
      goodArray.push(alternateA1[alternateA2.indexOf(goodAnswer)]);
    }
  }
  if (goodArray[0]) {
    alterAnswer = goodArray[0];
  } else {
    alterAnswer = goodAnswer;
  }
  if (goodArray[1]) {
    alterAnswer2 = goodArray[1];
  } else {
    alterAnswer2 = goodAnswer;
  }

  //2020 EXTRA NEW
  if (goodAnswer == 'ma' && writtenAnswer == 'pero') {
    alterAnswer = 'però';
    alterAnswer = 'pero';
  } else if (goodAnswer == 'luego' && writtenAnswer == 'despues') {
    alterAnswer = 'después';
    alterAnswer = 'despues';
  }
  //2020 EXTRA NEW

  //2021ma start///////////////////////
  var alterAnswer3;
  if (lessonLanguage == 'French' && goodAnswer.length > 2) {
    if (
      goodAnswer.charAt(goodAnswer.length - 1) == '’' ||
      goodAnswer.charAt(goodAnswer.length - 1) == "'"
    ) {
      alterAnswer3 = goodAnswer.slice(0, -1) + 'e';
    } else if (goodAnswer.charAt(goodAnswer.length - 1) == 'e') {
      alterAnswer2 = goodAnswer.slice(0, -1) + "'";
      alterAnswer3 = goodAnswer.slice(0, -1) + '’';
    }
    if (
      alterAnswer.charAt(alterAnswer.length - 1) == '’' ||
      alterAnswer.charAt(alterAnswer.length - 1) == "'"
    ) {
      alterAnswer3 = alterAnswer.slice(0, -1) + 'e';
    } else if (alterAnswer.charAt(alterAnswer.length - 1) == 'e') {
      alterAnswer2 = alterAnswer.slice(0, -1) + "'";
      alterAnswer3 = alterAnswer.slice(0, -1) + '’';
    }
  }

  if (
    goodAnswer == writtenAnswer ||
    alterAnswer == writtenAnswer ||
    alterAnswer2 == writtenAnswer ||
    alterAnswer3 == writtenAnswer
  ) {
    currentPts = currentPts + 55;
    $('#currentScore').text(currentPts);
    currQuizNum++;
    playSprite('quizGood');
    $('.possWord').addClass('disableIt');
    clearTimeout(loadingTime);
    loadingTime = setTimeout(function () {
      $('#loadLogo').show();
    }, 2000);
    $('#wrongAnswer, #goodAnswer, #goodAnswerPic2').stop(true, true);
    $('#wrongAnswer').css({ opacity: '0' });
    $('#wrongAnswerPic').removeClass('opacityAnimate');
    $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' });
    var quizCurrSent = forExamplesQuiz[quizQuesNum - 1];
    if (quizCurrSent.charAt(0) == '%') {
      quizCurrSent = quizCurrSent.split('%');
      quizCurrSent = quizCurrSent[2];
    }
    $('#quizSentenceFor').html(quizCurrSent);
    resizeQuizText();
    setTimeout(function () {
      $('#goodAnswer, #goodAnswerPic2').transition({ opacity: '0' });
      disableTimer = false;
      loadQuizSound();
    }, 700);
  }
  ///START WRONG ANSWER
  else {
    playSprite('quizBad');
    $('#goodAnswer').stop(true, true);
    $('#goodAnswer').css({ opacity: '0' });
    currentErrors++;
    if (errors.indexOf(quizQuesNum) == -1) {
      errors.push(quizQuesNum);
    }
    $('#currentErrors').text(currentErrors);
    ///IF MADE ERROR
    if (!madeError) {
      currentPts = currentPts - 55;
      $('#wrongAnswer, #goodAnswer').stop(true, true);
      $('#goodAnswer').css({ opacity: '0' });
      $('#wrongAnswer,#wrongAnswerPic').css({ opacity: '1' });
      setTimeout(function () {
        $('#wrongAnswer,#wrongAnswerPic').transition({ opacity: '0' });
      }, 1000);
      $('#currentScore').text(currentPts);
      madeError = true;
    } else {
      $('#wrongAnswer, #goodAnswer').stop(true, true);
      $('#goodAnswer').css({ opacity: '0' });
      $('#wrongAnswer').css({ opacity: '1' });
      setTimeout(function () {
        $('#wrongAnswer').transition({ opacity: '0' });
      }, 1000);
    }
  }
}
