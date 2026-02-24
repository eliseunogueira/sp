///OS START
var oPath = '';
var oPath2 = '../';
var pre = '../';
if (osType == 'androidSTORE') {
  oPath =
    'https://www.eliseunogueira.com.br/app/' +
    lessonLanguage +
    '/verb/' +
    lessonNumber +
    '/';
  oPath2 = 'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/verb/';
  pre = 'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/verb/';
}
//OS END

///DO NOT MODIFY
var currentSection = 'Verbs';
var currentSecShort = 'verb';
var quizTitle1 = 'LISTENING PRACTICE';
var quizTitle2 = 'CONJUGATION MATCH';
var quizTitle3 = 'BY THE BOOK';
var quizTitle4 = 'WRITE IT OUT';
var currentProgram = 'Complete';
var errors = [];
var errorMode = false;

//2023 START
var btnColor = [
  'rgba(10, 10, 10,0.7)',
  'rgba(20, 20, 20,0.9)',
  'rgba(19, 23, 23,0.95)',
  'rgba(10, 10, 10,0.95)',
];
//2023 END

///5.1
function loadAudioCourse() {
  $('#loadLogo').show();
  setTimeout(function () {
    window.location = '../../audio/index.html?verb=' + lessonNumber;
  }, 100);
}
///5.1

///PORTUGUESE CHANGE START (replace last occurence of string)
String.prototype.replaceLast ||
  (String.prototype.replaceLast = function (b, c) {
    var a = this.lastIndexOf(b);
    return a >= 0
      ? this.substring(0, a) + c + this.substring(a + b.length)
      : this.toString();
  });
var loCh = false;
///PORTUGUESE CHANGE END

///2020 EXTRA START
if (lessonNumber == 0) {
  btnColor = ['#0a5d90', '#063561', '#0a5d90', '#063561'];
}
var sType = soundType;
var cardCate = '|b'; ///CHANGE THIS FOR EACH MODULE TYPE
var cardRaw = [];
var conjShuffle;
var extraTime = false;
var caNum;
var irregSpan = true;
var swipeDis = false;
////2020MODI////////////////////START
function togFlash() {
  var flNum = caNum;
  if (flNum % 2 == 0) {
    flNum++;
  }
  var fCard = lessonNumber + '|' + (parseInt(flNum) + 1) + cardCate;
  //BONUS VERB EXCEPTION
  ///2022 FIX
  if (typeof imageBonus !== 'undefined') {
    var imageInfo = imageArray[currentWordNum].split('/');
    var flInfo1 = imageInfo[imageInfo.length - 1]
      .split('pic')
      .join('')
      .split('.jpg')
      .join('');
    flInfo1 = parseInt(flInfo1) * 2;
    var flInfo2 = parseInt(imageInfo[imageInfo.length - 3]);
    if (caNum % 2 == 0) {
      fCard = flInfo2 + '|2' + cardCate;
    } else {
      fCard = flInfo2 + '|' + flInfo1 + cardCate;
    }
  }
  ///2022 FIX
  //BONUS VERB EXCEPTION
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
}
////2020MODI////////////////////END

var soundTime;

var focused;
//////HILITE SELECTOR INFORMATION
var conjAlt;
var conjAltNum;
var conjAlt2;
var conjAltNum2;
var conjAlt3 = 'zhdse';
var conjAltNum3 = 'dsdc';
var conjID;
var puzzPron;
var writeArr;
if (lessonLanguage == 'Italian') {
  conjAlt = '(lei)';
  conjAltNum = 4;
  conjID = [
    '(io)',
    '(tu)',
    '(Lei)',
    '(lui)',
    '(noi)',
    '(voi)',
    '(Loro)',
    '(loro)',
  ];
  puzzPron = ['(io) ', '(tu) ', '(lui/lei) ', '(noi) ', '(voi) ', '(loro) '];
  writeArr = [
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
  ];
} else if (lessonLanguage == 'Spanish') {
  conjAlt = '(Ella)';
  conjAltNum = 4;
  conjAlt2 = '(Ellas)';
  conjAltNum2 = 7;
  conjAlt3 = '(Nosotras)';
  conjAltNum3 = 5;
  conjID = [
    '(Yo)',
    '(Tú)',
    '(Usted)',
    '(Él)',
    '(Nosotros)',
    '(Ustedes)',
    '(Ellos)',
  ];
  puzzPron = [
    '(yo) ',
    '(tú) ',
    '(él/ella/usted) ',
    '(nosotros) ',
    '(ustedes) ',
    '(ellos/ellas) ',
  ];
  writeArr = [
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
  ];
}
////PORTUGUESE CHANGE START
else if (lessonLanguage == 'Portuguese') {
  conjAlt = '(Ela)';
  conjAltNum = 4;
  conjAlt2 = '(Elas)';
  conjAltNum2 = 7;
  conjAlt3 = '(Nós)';
  conjAltNum3 = 5;
  conjID = ['(Eu)', '(Tu)', '(Você)', '(Ele)', '(Nós)', '(Vocês)', '(Eles)'];
  puzzPron = [
    '(eu) ',
    '(tu) ',
    '(ele/ela/você) ',
    '(nós) ',
    '(vocês) ',
    '(eles/elas) ',
  ];
  writeArr = [
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
  ];
}
////PORTUGUESE CHANGE END
else if (lessonLanguage == 'French') {
  conjAlt = 'elle';
  conjAltNum = 3;
  conjAlt2 = 'elles';
  conjAltNum2 = 6;
  conjID = ['je', 'tu', 'il', 'nous', 'vous', 'ils'];
  puzzPron = ['je ', 'tu ', 'il/elle ', 'nous ', 'vous ', 'ils/elles '];
  writeArr = [
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
  ];
} else if (lessonLanguage == 'German') {
  conjAlt = 'sie';
  conjAltNum = 3;
  conjAlt2 = 'es';
  conjAltNum2 = 3;
  conjID = ['ich', 'du', 'er', 'wir', 'ihr', 'Sie', 'sie'];
  puzzPron = ['ich ', 'du ', 'er/sie/es ', 'wir ', 'ihr ', 'sie '];
  writeArr = [
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
  ];
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
  ];
  var writeArr3 = [
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

///2018CHANGE
if (lessonTitle.indexOf('ubjunctive') != -1) {
  var subWord = 'que ';
  var subWord2 = "qu'";
  if (lessonLanguage == 'Italian') {
    subWord = 'che ';
    subWord2 = 'che ';
  }
  if (lessonLanguage == 'Spanish') {
    subWord2 = 'que ';
  }
  ////PORTUGUESE CHANGE START
  if (lessonLanguage == 'Portuguese') {
    subWord2 = 'que ';
  }
  ////PORTUGUESE CHANGE END
  puzzPron[0] = subWord + puzzPron[0];
  puzzPron[1] = subWord + puzzPron[1];
  puzzPron[2] = subWord2 + puzzPron[2];
  puzzPron[3] = subWord + puzzPron[3];
  puzzPron[4] = subWord + puzzPron[4];
  puzzPron[5] = subWord2 + puzzPron[5];
}
if (lessonTitle.indexOf('mperative') != -1) {
  if (lessonLanguage == 'French') {
    puzzPron = ['(tu) ', '(tu) ', '(nous) ', '(nous) ', '(vous) ', '(vous) '];
  } else if (lessonLanguage == 'Spanish') {
    puzzPron = [
      '(tú) ',
      '(tú) ',
      '(tú) no ',
      '(usted) ',
      '(nosotros) ',
      '(ustedes) ',
    ];
  }
  ////PORTUGUESE CHANGE START
  else if (lessonLanguage == 'Portuguese') {
    puzzPron = ['(tu) ', '(tu) ', '(tu) não ', '(você) ', '(nós) ', '(vocês) '];
  }
  ////PORTUGUESE CHANGE END
  else if (lessonLanguage == 'Italian') {
    puzzPron = ['(tu) ', '(tu) non ', '(noi) ', '(noi) ', '(voi) ', '(voi) '];
  } else if (lessonLanguage == 'German') {
    puzzPron = ['(du) ', '(du) ', '(ihr) ', '(ihr) ', '(wir) ', '(Sie) '];
  }
}
///2018CHANGE

////PRESENTATION TYPE SELECTOR
var presType;
var slidesPres = [6, 7, 8, 9];
if (conjNum.length > 15) {
  presType = 'keyPres';
  slidesPres = [6, 7, 8, 9];
} else {
  if (conjNum[0] == 0) {
    presType = 'individual';
    slidesPres = [5, 6, 7, 8, 9];
  } else if (conjNum[0] == 2) {
    presType = 'keyPast';
    slidesPres = [6, 7, 8, 9];
  } else if (conjNum[0] == 4) {
    quizNumQues = 'keyFuture';
    slidesPres = [6, 7, 8, 9];
  }
}
if (lessonLanguage == 'French' && lessonNumber == 10) {
  presType = 'keyPres';
  slidesPres = [6, 7, 8, 9];
}

/////LOAD CONJUGATION TITLES
var conjTitles;
var conjTitlesPuzz;
function conjugationTitles() {
  var conjTitles2 = [];
  if (conjNum.length < 15) {
    if (lessonLanguage == 'Italian') {
      conjTitles = [
        'Infinito',
        'Presente',
        'Passato&nbsp;Prossimo',
        'Imperfetto',
        'Futuro&nbsp;Semplice',
        'Condizionale',
      ];
    } else if (lessonLanguage == 'Spanish') {
      conjTitles = [
        'Infinitive',
        'Present',
        'Preterite',
        'Imperfect',
        'Future',
        'Conditional',
      ];
      var conjChecker = quizConj1[0].split(' ');
      if (
        conjChecker.length > 1 &&
        typeof extraNote === 'undefined' &&
        !pronominal
      ) {
        conjTitles[1] = 'Present&nbsp;(Progressive)';
      }
      if (
        conjChecker.length > 2 &&
        typeof extraNote === 'undefined' &&
        pronominal
      ) {
        conjTitles[1] = 'Present&nbsp;(Progressive)';
      }
    }
    ////PORTUGUESE CHANGE START
    else if (lessonLanguage == 'Portuguese') {
      conjTitles = [
        'Infinitive',
        'Present',
        'Preterite',
        'Imperfect',
        'Future',
        'Conditional',
      ];
      var conjChecker = quizConj1[0].split(' ');
      if (
        conjChecker.length > 1 &&
        typeof extraNote === 'undefined' &&
        !pronominal &&
        forExamples[2].indexOf('senhor') == -1 &&
        lessonNumber != 57
      ) {
        conjTitles[1] = 'Present&nbsp;(Progressive)';
      }
      if (
        conjChecker.length > 2 &&
        typeof extraNote === 'undefined' &&
        pronominal &&
        lessonNumber != 57
      ) {
        conjTitles[1] = 'Present&nbsp;(Progressive)';
      }
    }
    ////PORTUGUESE CHANGE END
    else if (lessonLanguage == 'French') {
      conjTitles = [
        'Infinitif',
        'Présent',
        'Passé&nbsp;Composé',
        'Imparfait',
        'Futur&nbsp;Simple',
        'Conditionnel',
      ];
    } else if (lessonLanguage == 'German') {
      conjTitles = [
        'Infinitive',
        'Present',
        'Conversational&nbsp;Past',
        'Narrative&nbsp;Past',
        'Future',
        'Conditional',
      ];
    }

    conjTitlesPuzz = conjTitles.slice();
    for (var num = 0; num < conjNum.length; num++) {
      conjTitles2.push(conjTitles[conjNum[num]]);
      num++;
    }

    ///MODIFICATIONS FOR SPECIAL LESSONS
    if (lessonLanguage == 'Italian' && lessonNumber == 20) {
      conjTitles2 = ['io', 'tu', 'lei', 'noi', 'voi', 'loro'];
    } else if (lessonLanguage == 'Italian' && lessonNumber == 21) {
      conjTitles2 = ['io', 'tu', 'lui', 'noi', 'voi', 'loro'];
    }
    if (
      lessonLanguage == 'German' &&
      lessonNumber >= 22 &&
      lessonNumber <= 29
    ) {
      conjTitles2 = [
        'example 1',
        'example 2',
        'example 3',
        'example 4',
        'example 5',
        'example 6',
      ];
    }

    conjTitles = conjTitles2;
  } else {
    if (lessonLanguage == 'Italian') {
      conjTitles = [
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
      ];
    } else if (lessonLanguage == 'Spanish') {
      conjTitles = [
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
      ];
    }
    ////PORTUGUESE CHANGE START
    else if (lessonLanguage == 'Portuguese') {
      conjTitles = [
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
      ];
    }
    ////PORTUGUESE CHANGE END
    else if (lessonLanguage == 'French') {
      conjTitles = [
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
      ];
    } else if (lessonLanguage == 'German') {
      conjTitles = [
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
      ];
    }
    conjTitlesPuzz = conjTitles.slice();
  }

  ///EXPRESS VERB
  if (typeof expressVerb !== 'undefined') {
    conjTitles = puzzPron;
    var puzArr;
    for (var numXX = 0; numXX < forExamples.length; numXX++) {
      if (forExamples[numXX].indexOf('<strong>') == -1) {
        forExamples[numXX] = '<strong>' + forExamples[numXX] + '</strong>';
      }
      numXX++;
    }
  }
  ///EXPRESS VERB END
  ///2020 EXTRA START
  if (typeof imageBonus !== 'undefined') {
    presType = 'bonus';
    var puzArr;
    for (var numXX = 0; numXX < forExamples.length; numXX++) {
      if (forExamples[numXX].indexOf('<strong>') == -1) {
        forExamples[numXX] = '<strong>' + forExamples[numXX] + '</strong>';
      }
      numXX++;
    }
    conjTitles2 = [];
    var cc;
    for (cc = 1; cc <= forExamples.length; cc++) {
      conjTitles2.push('Verb ' + cc);
    }
    conjShuffle = [];
    for (cc = 1; cc <= forExamples.length * 0.5; cc++) {
      conjShuffle.push(cc);
    }
    shuffle(conjShuffle);
    setTimeout(function () {
      $('#verbBanner').addClass('express1');
    }, 1000);
    conjTitles = conjTitles2;
  }
  ///2020 EXTRA END
}
conjugationTitles();

var FrenchArticles = [
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
];
var SpanishArticles = [
  'El ',
  'La ',
  'Los ',
  'Las ',
  'Un ',
  'Unos ',
  'Una ',
  'Unas ',
];
var ItalianArticles = [
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
];
var GermanArticles = [
  'ein ',
  'eine ',
  'der ',
  'das ',
  'die ',
  'einen ',
  'den ',
];
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
  'ß',
];
var FrenchChars = ['é', 'è', 'ê', 'ë', 'à', 'ç'];
var SpanishChars = ['á', 'é', 'í', 'ó', 'ú', 'ñ'];
var ItalianChars = ['à', 'é', 'è', 'ì', 'ò', 'ù'];
var GermanChars = ['ß', 'ä', 'ö', 'ü', 'ï', 'ë'];

////PORTUGUESE CHANGE START
var PortugueseArticles = [
  'O ',
  'A ',
  'Os ',
  'As ',
  'Um ',
  'Uma ',
  'Uns ',
  'Umas ',
];
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
var articleArray = window[lessonLanguage + 'Articles'];
var specialChars = window[lessonLanguage + 'Chars'];
////////////////////////
var quizDescription1 =
  'Listen carefully and click on the image (and tense) corresponding to the sentence you hear. Train your ear to understand sentences without reading them.';
var quizDescription2 =
  'Drag the conjugation puzzle pieces over to the correct subject pronoun. Each right answer will unlock a part of the picture hidden by puzzle pieces.';
var quizDescription3 =
  'Conjugations can look and sound VERY similar between tenses and it can be tricky to know the correct conjugation. Drag the books (conjugations) on their matching shelves (tenses).';
var quizDescription4 =
  'Type in the correct conjugation corresponding to the sentence. No more guessing here, you have to know the conjugation to get the right answer! Hints are available, but be careful, they cost valuable points...';

var numWords = engExamples.length;

var quizMapArray = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
];
quizMapArray = quizMapArray.slice(0, numWords * 0.5);
if (lessonNumber === 0) {
  lessonTitle = 'Verbs: Extra Practice';
  presType = 'individual';
  quizMapArray = [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
    42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78,
    80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
  ];
  quizMapArray = quizMapArray.slice(0, numWords * 0.5);
}
//Combined quiz change

var quizCombinedArray;

var quizMoreArray;
if (presType == 'keyPres') {
  quizMoreArray = [1, 2, 3, 4, 5, 6];
  quizMoreArray = shuffle(quizMoreArray);
} else if (presType != 'individual') {
  quizMoreArray = [1, 2, 3, 4];
  quizMoreArray = shuffle(quizMoreArray);
}
if (engExamples.length == 6) {
  quizMoreArray = [1, 2];
  quizMoreArray = shuffle(quizMoreArray);
}

//2020 EXTRA START
if (lessonLanguage == 'Italian' && lessonNumber < 22 && lessonNumber > 19) {
  quizMoreArray = [];
}
//2020 EXTRA END

var closeWin =
  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25" xml:space="preserve"><g id="Ellipse_1_13_"><g><circle fill-rule="evenodd" clip-rule="evenodd" fill="#666" cx="12.5" cy="12.7" r="11.9"/></g></g><path fill="#FFFFFF" d="M14.8,12.7L18.5,9c0.3-0.3,0.3-0.8,0-1l-1.2-1.2c-0.3-0.3-0.8-0.3-1,0l-3.7,3.7L8.8,6.7c-0.3-0.3-0.8-0.3-1,0L6.5,7.9c-0.3,0.3-0.3,0.8,0,1l3.7,3.7l-3.7,3.7c-0.3,0.3-0.3,0.8,0,1l1.2,1.2c0.3,0.3,0.8,0.3,1,0l3.7-3.7l3.7,3.7c0.3,0.3,0.8,0.3,1,0l1.2-1.2c0.3-0.3,0.3-0.8,0-1L14.8,12.7z"/></svg>';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// VOCAB ONLY FONCTIONS INSIDE LOAD PRESENTATION

function loadPresentation() {
  ///////////////////////////CREATE SOUND ARRAY
  fastSounds = [];
  slowSounds = [];
  quizSounds = [];
  var soundNum = 1;

  if (lessonNumber !== 0) {
    for (var numD = 1; numD <= numWords * 2; numD++) {
      fastSounds.push(oPath + 'sounds/sound' + soundNum + soundType);
      soundNum++;
      slowSounds.push(oPath + 'sounds/sound' + soundNum + soundType);
      soundNum++;
    }

    if (presType != 'individual') {
      for (var numE = 1; numE <= quizForExamples.length; numE++) {
        quizSounds.push(oPath + 'sounds/quiz' + numE + soundType);
      }
    }
    ///////////END LOAD PRESENTATION
  } else {
    for (var numD = 0; numD < numWords * 0.5; numD++) {
      fastSounds.push('');
      fastSounds.push(
        oPath2 +
          nums1[numD] +
          '/sounds/sound' +
          (nums2[numD] * 2 + 1) +
          soundType,
      );
    }
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DETERMINE BUTTON CLICKED
function buttonClicked() {
  picControl = 'picFade';
  currentWordNum =
    parseInt($(this).attr('id').split('verbBtn').join('')) * 2 - 2;
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
    $('#quizContent').css({ height: '630px' });
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

  ///2023 START//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (currentQuiz == 1) {
    if (screenRatio <= 1) {
      $('.quizItems').css({ height: spaceLeft / 3 - 67 + 'px', top: '25px' });
      $('.quizItems').addClass('quizItemsPortrait');
    } else {
      $('.quizItems').css({ height: spaceLeft / 2 - 67 + 'px', top: '25px' });
      $('.quizItems').removeClass('quizItemsPortrait');
    }
  }

  if (viewportHeight <= 700) {
    $('#lightTimerDiv').css({ width: viewportHeight / 4 + 'px' });
  } else {
    $('#lightTimerDiv').css({ width: '190px' });
  }
  if (viewportHeight <= 400) {
    $('#quizDonePts').hide();
  } else {
    $('#quizDonePts').show();
  }
  if (viewportHeight <= 500) {
    $('#quizPreloadDescription').hide();
  } else {
    $('#quizPreloadDescription').show();
  }

  /////QUIZ 2 RESIZE
  if (currentQuiz == 2) {
    $('.puzzAnswer').css({ right: '3%', left: 'auto' });
    $('#puzzle1B').css({ top: puzzPos[0] });
    $('#puzzle2B').css({ top: puzzPos[1] });
    $('#puzzle3B').css({ top: puzzPos[2] });
    $('#puzzle4B').css({ top: puzzPos[3] });
    $('#puzzle5B').css({ top: puzzPos[4] });
    $('#puzzle6B').css({ top: puzzPos[5] });

    spaceLeft = spaceLeft + 20;

    if (screenRatio > 1) {
      //LANDSCAPE
      if (viewportWidth > 700) {
        $('#quizMultiImg').css({ width: '37%' });
        $('#quizAllItemsB').css({ width: '58%' });
      } else {
        $('#quizAllItemsB').css({ width: '64%' });
        $('#quizMultiImg').css({ width: '27%' });
      }
      if (viewportHeight > 700) {
        $('#quizAllItemsB, #quizMultiImg').css({
          height: '500px',
          top: '50px',
        });
      } else {
        $('#quizAllItemsB, #quizMultiImg').css({
          height: spaceLeft + 'px',
          top: '25px',
        });
      }
    } else {
      //PORTRAIT
      $('#quizMultiImg').css({ height: spaceLeft * 0.34 + 'px' });
      $('#quizAllItemsB').css({ height: spaceLeft * 0.62 + 'px' });
      $('#quizAllItemsB').css({ width: '96%', top: '30px' });
      $('#quizMultiImg').css({ width: '94%', top: '50px' });
    }
  }

  if (currentQuiz == 3) {
    $('#book1').css({ top: 'auto', bottom: '6%', left: '2%', right: 'auto' });
    $('#book2').css({ top: 'auto', bottom: '17%', left: '7%', right: 'auto' });
    $('#book3').css({ top: 'auto', bottom: '12%', left: '37%', right: 'auto' });
    $('#book4').css({ top: 'auto', bottom: '17%', left: 'auto', right: '7%' });
    $('#book5').css({ top: 'auto', bottom: '6%', left: 'auto', right: '2%' });
  }

  /////QUIZ 4 RESIZE
  if (currentQuiz == 4) {
    if (screenRatio > 1) {
      ////IF LANDSCAPE
      spaceLeft = spaceLeft - 20;
      $('#quizAllItemsC, #quizWriteImg').css({
        height: spaceLeft * 0.95 + 'px',
        'margin-top': '28px',
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
        'margin-left': '2%',
      });
      $('#quizWriteImg').css({
        height: spaceLeft * 0.44 + 'px',
        bottom: '10px',
      });
      $('#quizAllItemsC').css({
        height: spaceLeft * 0.54 + 'px',
        'margin-top': '30px',
      });
      $('#writeAnswerBoard').css({ height: spaceLeft * 0.54 - 160 + 'px' });
    }
    if ($('body').hasClass('notch')) {
      $('#quizWriteImg').css({ bottom: '0px' });
    }
  }
  ///2023 END////////////////////////////////////////////////////////////////////////////////////////

  setTimeout(function () {
    resizeButtonQuizText();
    resizeQuizText();
  }, 20);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START BUTTON TEXT RESIZE
function resizeButtonQuizText() {
  /////START FOR
  for (var num = 1; num <= 6; num++) {
    $('.textWrap5').css({ fontSize: '13px' });
    $('#quizEng' + num).css({ fontSize: '13px' });
    $('.textWrap5').text($('#quizEng' + num).text());
    var wordWidth = $('.textWrap5').width();
    var buttonWidth = $('#quizEng' + num).width();
    var fullFont = 13;
    /////
    while (wordWidth > buttonWidth && fullFont > 0.3) {
      fullFont = fullFont - 0.5;
      $('.textWrap5').css({ fontSize: fullFont + 'px' });
      $('#quizEng' + num).css({ fontSize: fullFont + 'px' });
      wordWidth = $('.textWrap5').width();
      buttonWidth = $('#quizEng' + num).width();
    }
  }
  ///////END FOR

  /////START FOR 2
  for (var num = 1; num <= 4; num++) {
    $('#quizItem' + num + 'B').css({ fontSize: '22px' });
    var maxWidth2 = $('#quizMultiImg').width() - 20;
    var buttonWidth2 = $('#quizItem' + num + 'B').width();
    var fullFont2 = 22;
    /////
    while (buttonWidth2 > maxWidth2 && fullFont2 > 0.3) {
      fullFont2 = fullFont2 - 0.5;
      $('#quizItem' + num + 'B').css({ fontSize: fullFont2 + 'px' });
      buttonWidth2 = $('#quizItem' + num + 'B').width();
    }
  }
  ///////END FOR 2
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOCABULARY RESIZE
///2020 LAST START

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

  //2023 START
  var halfWords = numWords * 0.5;
  var widthPercent = 100 / halfWords;
  var pixCount = 1;

  var changeWidth = 1100;

  if (halfWords < 7) {
    changeWidth = 150 * halfWords * 1.07;
  }

  if ($('html').innerWidth() <= changeWidth) {
    $('.verbButtons').css({ width: '150px' });
    for (var num = 1; num <= halfWords; num++) {
      $('#verbBtn' + num).css({ left: pixCount + 'px' });
      pixCount = pixCount + 153;
    }
  } else {
    var btnWidth = (100 / (numWords * 0.5)) * 0.01 * $('.ouinoContent').width();
    btnWidth = btnWidth - 3;
    $('.verbButtons').css({ width: btnWidth + 'px' });
    for (var num = 1; num <= halfWords; num++) {
      $('#verbBtn' + num).css({ left: pixCount + 'px' });
      pixCount = pixCount + btnWidth + 3;
    }
  }
  //2023 END

  //////////START LOAD VARIABLES
  var elementWidth;
  var contentWidth;
  var mobileWidth;
  viewportHeight = $('body').height() - 45;
  viewportWidth = $('html').innerWidth();
  var elementHeight;
  var buttonHeight;
  //2020
  screenRatio = $('html').width() / $('html').height();
  //2020
  var areaHeight = viewportHeight - 40;
  ///OS START
  if ($('body').hasClass('notch')) {
    areaHeight = areaHeight - 45;
  }
  ////ANDROID
  if ($('body').hasClass('android')) {
    areaHeight = areaHeight - 20;
  }

  /////FONT SIZE
  if (viewportHeight > 600) {
    theFont = 38;
  } else if (viewportHeight < 450) {
    theFont = 27;
  } else {
    theFont = 33;
  }

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
  if (screenRatio < 1 && $('html').width() != $('html').height()) {
    ///2023 START////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    $('.ouinoContent').addClass('portrait');
    vertSwipe = true;
    $('.ouinoContent').css({ height: areaHeight + 'px' });
    $('.conjContainer').css({
      width: '100%',
      height: areaHeight - 70 + 'px',
      top: '60px',
      right: '0',
    });
    $('.menuConj').removeClass('centerDiv');
    var picSize2 = areaHeight - 330 - $('#conjEnglish').height();

    $('.shinyPicture').css({ height: picSize2 + 'px' });
  }
  //////////////////////////END PORTRAIT MODE
  //////////////////////////START LANDSCAPE MODE
  else {
    $('body').removeClass('vert');
    vertSwipe = false;
    $('.verbButtons').css({ 'font-size': '13px' });
    $('.ouinoContent').removeClass('portrait');
    $('.ouinoContent').css({ height: areaHeight + 'px' });
    $('.shinyPicture').css({ width: '54%', height: '64%' });
    $('.conjContainer').css({ width: '45%', height: '64%' });
    $('.wordSentence').css({ width: '100%', height: '26%' });

    if (viewportHeight <= 495) {
      $('.shinyPicture, .conjContainer').css({ height: '58%' });
    }
    if (viewportHeight <= 535) {
      $('.shinyPicture, .conjContainer').css({ height: '59%' });
    } else if (viewportHeight <= 560) {
      $('.shinyPicture, .conjContainer').css({ height: '60%' });
    } else if (viewportHeight <= 600) {
      $('.shinyPicture, .conjContainer').css({ height: '61%' });
    } else if (viewportHeight <= 675) {
      $('.shinyPicture, .conjContainer').css({ height: '62%' });
    } else if (viewportHeight <= 730) {
      $('.shinyPicture, .conjContainer').css({ height: '63%' });
    }

    if (viewportHeight >= 700) {
      $('#conjEnglish, #conjForeign').css({ top: '6%', bottom: 'auto' });
    } else {
      $('#conjEnglish, #conjForeign').css({ top: '3%', bottom: 'auto' });
    }
    if (viewportHeight >= 600) {
      $('#conjForeign, #conjEnglish').css({ opacity: '1' });
    } else {
      $('#conjForeign, #conjEnglish').css({ opacity: '0' });
    }
  }

  var verbHeight =
    $('.ouinoContent').outerHeight() - $('.verbButtonOn').outerHeight() + 1;
  $('#verbQuestion').css({ top: $('.verbButtonOn').outerHeight() + 5 + 'px' });
  if ($('#endWrap').is(':visible')) {
    if (viewportHeight >= 720) {
      $('#learningTip').show();
    } else {
      $('#learningTip').hide();
    }
  }
  ///2023 END///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  resizeTitle();
  resizeVerbMenu();
  resizeText();
  setTimeout(function () {
    resizeText();
  }, 500);
  //////////////END CHANGE BUTTON AND TEXT
  $('.wordSentence, .wordSentenceB').removeClass('disa');
  if (currentWordNum % 2 == 0) {
    if ($('.ouinoContent').hasClass('portrait')) {
      $('.wordSentence').addClass('disa');
    }
  } else {
    if ($('.ouinoContent').hasClass('portrait')) {
      $('.wordSentenceB').addClass('disa');
    }
  }
}

////2023 START
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

  if (menuLeftOver > 1100) {
    $('.verbBannerItem').show();
    $('#verbBanner5').hide();
  } else {
    $('.verbBannerItem').hide();
    $('#verbBanner5').show();
  }

  while (menuLeftOver < 60 && $('.menuTitleContainer').text().length > 6) {
    var menuText = $('.menuTitleContainer').text().slice(0, -4);
    menuText = menuText.concat('...');
    menuText = menuText.split(' ...').join('...');
    $('.menuTitleContainer').html(menuText);
    menuTitleWidth = $('.menuTitleContainer').width();
    menuLeftOver =
      viewportWidth - (menuLogoWidth + menuTitleWidth + menuBtnWidth);
  }

  if ($('#volDiv').is(':visible')) {
    $('#verbBanner').css({ right: menuBtnWidth + 28 + 'px' });
  } else {
    $('#verbBanner').css({ right: menuBtnWidth + 2 + 'px' });
  }
}
////2023 END

//////////////////////////////////////////////////////////GLOBAL VARS

var userName;
var currQuizNum;
var resetCode;
var userEmail;
var userEmail2;
var engExamplesQuiz;
var storeInfo;
var tuvm58dj;
var tuvm58dj2;
var fieldToUpdate;
var infoToUpdate;
var quizQuesNum;
var currentPts;
var currentErrors;
var puzzleArray;
var userInfo;
var timerTime;
var soundRepeated;
var fastOverwrite = false;
var knowledgeStars;
var restartedLesson;
var quizScores;
var pauseTwo;
var registerLoaded;
var audioSprite;
var passwordLoaded;
var viewportHeight;
var screenRatio;
var viewportWidth;
var currentWordNum = 0;
var currentMusic;
var picToggle = 1;
var picControl;
var soundPlaying = false;
var wordTimer;
var mySound;
var madeError;
var theFont;
var soundLessonEvent = false;
var soundQuizEvent = false;
var soundSlideEvent = false;
var fastSounds;
var checkAccent = false;
var slowSounds;
var foundArticle;
var quizGoodAnswer;
var quizGoodPunct;
var arrowClicks;
var writtenString;
var timerWait;
var charsToAdd;
var selectPuzz;
var puzzContent;
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
var dragPosX;
var dragPosY;
var vowels = ['a', 'e', 'i', 'o', 'u', 'h'];
var puzzPos = ['12%', '27%', '42%', '57%', '72%', '87%'];
var infVerb = lessonTitle.split(' (');
infVerb = infVerb[0];
var mouseIsDown;
var currentSprite;
var onTimeUpdate;
var submitted;
var quizNumQues;
var LOrR;
var disableTimer = false;
var quizLoaded = false;
var timerLength = 3000;
var numberLength = 7000;
var fastOrSlow;
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

///////////////////////LOAD UNIQUE PRESENTATION STUFF
loadPresentation();

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
  't show me tips</div></section><div id="starConjWarn"><img src="../../common/iconStar2.svg">Always the same conjugation (Click to learn more)</div><div id="pronounWarn"></div><div id="fontPreload1"></div><div id="fontPreload2"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel">RESTART LESSON</b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><div id="titleLogo"><span class="menuTitleContainer alignVerticalItem"></span></div><div id="verbBanner"><div id="verbBanner5"><img class="verbBannerImage" src="../../common/iconInfo.svg"></div><div id="verbBanner1" class="verbBannerItem"><img class="verbBannerImage" src="../../common/puzzle1.svg"><b id="verbText1" class="verbTXT"></b><b id="verbTextB1" class="yellowText verbTXT2"></b><b class="verbTXT"> verb</b></div><div id="verbBanner2" class="verbBannerItem"><img class="verbBannerImage" src="../../common/verbLogo1.svg"><b id="verbText2" class="verbTXT"></b><b id="verbTextB2" class="yellowText verbTXT2"></b></div><div id="verbBanner3" class="verbBannerItem"><img class="verbBannerImage" src="../../common/verbLogo2.svg"><b class="verbTXT">Stem: </b><b id="verbTextB3" class="yellowText verbTXT2"></b></div><div id="verbBanner4"><img class="verbBannerImage" src="../../common/verbLogo3.svg"><b class="verbTXT">Pronominal</b></div></div><span class="menuBtnContainer"><img id="keyboardBtn" src="../../common/keyboard2.svg" class="smallIcon" style="display:none;"/><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I' +
  "'" +
  'm confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoVerb.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><div id="verbBannerMenu"><div id="verbBanner1B" class="verbBannerItem2"></div><div id="verbBanner2B" class="verbBannerItem2"></div><div id="verbBanner3B" class="verbBannerItem2"></div><div id="verbBanner4B"></div><div class="closeWinBtn2"></div></div><div id="verbWrap"></div><div class="menuVerb"><div class="closeWinBtn"></div><div id="menuVerbContent"></div></div><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio>';

var lessonAppend =
  '<div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><main class="ouinoContent selectOff"><img id="verbQuestion" src="../../common/iconQues.svg"><div id="backIn"></div><div id="backInLeft"></div><div id="backInRight"></div><div class="menuConj"><div id="menuVerbSec1"></div><div id="menuVerbSec2"></div><div class="closeWinBtn3"></div></div><figure class="shinyPicture"><div class="engToggle"></div><div class="insight"></div><div id="flashCard"></div><div id="flashCard2"></div><div id="sideNote"></div><figure class="arrowControl"><div class="leftArrow"></div><div class="rightArrow"></div><div id="middleSwipe"></div></figure><figure class="mainPic2" alt="mainImage"></figure><figure class="mainPic1" alt="mainImage"></figure><img class="whiteBack" src="../../common/white.jpg" alt="mainImage"></figure><section class="wordSentence"><div class="wordSentenceIn alignVerticalItem"><div id="slowBubble1" class="slowBubble"></div><div class="textWrap3"><h6 class="disSentence">-Text Disabled-</h6></div><div class="textWrap"><h6 class="forSentence"></h6></div><br><div class="textWrap2"><h6 class="engSentence"></h6></div></div></section><aside class="conjContainer"><div id="conjOpen"><img class="progIcon" src="../../common/conjOpen.svg">SEE FULL CONJUGATION</div><div id="conjForeign"><div><p id="conjTitleFor" class="conjTitle"><img class="flagIcon" src="../../common/flagIcon.svg"></p></div><div id="conjSpan"><img id="starQues1" class="starQuestion" src="../../common/iconStar.svg"><img id="starQues2" class="starQuestion" src="../../common/iconStar.svg"><div id="conjItem1" class="conjItems"></div><div id="conjItem2" class="conjItems"></div><div id="conjItem3" class="conjItems"></div><div id="conjItem4" class="conjItems"></div><div id="conjItem5" class="conjItems"></div><div id="conjItem6" class="conjItems"></div><div id="conjItem7" class="conjItems"></div><div id="conjItem8" class="conjItems"></div></div></div><div id="conjEnglish"><div><p class="conjTitle"><img class="flagIcon" src="../../common/flagIcon2.svg">English</p></div><div id="conjSpan2"><div id="conjItemB1" class="conjItems"></div><div id="conjItemB2" class="conjItems"></div><div id="conjItemB3" class="conjItems"></div><div id="conjItemB4" class="conjItems"></div><div id="conjItemB5" class="conjItems"></div><div id="conjItemB6" class="conjItems"></div><div id="conjItemB7" class="conjItems"></div><div id="conjItemB8" class="conjItems"></div></div></div><section class="wordSentenceB"><div class="wordSentenceInB alignVerticalItem"><div id="slowBubble2" class="slowBubble"></div><div class="textWrap3B"><h6 class="disSentenceB">-Text Disabled-</h6></div><div class="textWrapB"><h6 class="forSentenceB"></h6></div><br><div class="textWrap2B"><h6 class="engSentenceB"></h6></div></div></section></aside><div class="buttonWrap"></div></main>';

var quizAppend =
  '<div id="wrongAnswerPic"> <div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"> <div id="goodAnswerIn"></div></div><div id="goodAnswerPic2"><div id="goodAnswerIn2"></div></div><img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><div id="puzzleBack"></div><img id="quizGoBack" src="../../common/menuIcon1.svg"> <table id="quizDone" > <tr> <th colspan="2" id="quizDoneTitle"></th> </tr><tr> <td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr> <td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp; <p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr> <td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div><span class="addQuizFlash"><img src="../../flash/images/cards.svg"/> Add Errors to Flash Cards</span></td></tr></table> <div id="quizScoreBack"> <div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"><div id="quizTimerPointer"><img id="quizTimerImage" src="../../common/timerPointer.svg"></div><div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizTimer2"> <div id="quizTimerGood2"></div><div id="quizTimerBar"></div><div id="quizTimerBad2"></div></div><div id="quizItself"> <div id="quizSentenceContainer"> <div class="quizSentenceWrap"> <span id="quizSentenceFor"></span><br> <span id="quizSentenceEng">This is a long test for the quiz.</span> </div></div><div class="textWrap5"></div><div id="quizAllItems"><div class="engRepeat engDisabled"></div> <div id="quizItem1" class="quizItems"> <p id="quizEng1" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem2" class="quizItems"> <p id="quizEng2" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem3" class="quizItems"> <p id="quizEng3" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem4" class="quizItems"> <p id="quizEng4" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem5" class="quizItems"> <p id="quizEng5" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem6" class="quizItems"> <p id="quizEng6" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div></div><div id="quizAllItemsB"></div><div id="textureIn"></div><div id="quizAllItemsD"></div><div id="quizMultiImg"><div id="topPuzzle"></div></div><div id="quizAllItemsC"><div id="hintTable"> <div id="hint1" class="boardBottom"> </div><div id="hint2" class="boardBottom"> </div><div id="hint3" class="boardBottom"> </div></div> <form id="answerForm" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" novalidate> </form> <div id="writeAnswerBoard"> <table id="boardTable"> <tr id="specialChars"> <td id="char1" class="boardChar"></td><td id="char2" class="boardChar"></td><td id="char3" class="boardChar"></td><td id="char4" class="boardChar"></td><td id="char5" class="boardChar"></td><td id="char6" class="boardChar"></td></tr><tr> <td colspan="6" id="writeError"></td></tr><tr> <td colspan="6" id="boardMain"><span id="writtenAnswer"></span></td></tr><tr> <td colspan="6" id="writeError2">CONTINUE</td></tr></table> </div></div><div id="noteBook"></div><div id="quizWriteImg"> <div id="picFrame"></div><div id="picFrameIn"></div><img id="wrongLogo1" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo2" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo3" class="wrongLogo" src="../../common/strike.svg"></div></div><table id="quizPreload"> <tr> <th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th> </tr><tr> <td id="quizPreloadMedal"></td></tr><tr> <td id="quizPreloadStart">START NOW</td></tr></table> <div id="quizStart"> <div id="quizStartImg"> <div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div><table id="quizMenu"> <tr> <th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th></tr><tr> <td id="quizBtn1" class="quizType"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">LISTENING <br>PRACTICE</h2> <img class="chooseQuizIcon" src="../../common/quizverb1.svg"/> <h2 class="chooseQuizText2">Auditory Training</h2></td><td id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">CONJUGATION <br>MATCH</h2> <img class="chooseQuizIcon" src="../../common/quizverb2.svg"/> <h2 class="chooseQuizText2">Difficulty: Average</h2></td></tr><tr> <td id="quizBtn3" class="quizType"><div id="sMedal3" class="smallMedal"></div><h2 class="chooseQuizText">BY THE BOOK</h2> <img class="chooseQuizIcon" src="../../common/quizverb3.svg"/> <h2 class="chooseQuizText2">Difficulty: Hard</h2></td><td id="quizBtn4" class="quizType"><div id="sMedal4" class="smallMedal"></div><h2 class="chooseQuizText">WRITE IT OUT</h2> <img class="chooseQuizIcon" src="../../common/quizverb4.svg"/> <h2 class="chooseQuizText2">Difficulty: Very Hard</h2></td></tr></table></main>';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CREATE IMAGE ARRAY

var imageArray = [];
var imageArray2 = [];
if (lessonNumber !== 0) {
  for (var num = 1; num <= numWords * 0.5; num++) {
    imageArray.push(oPath + 'images/pic' + num + '.jpg');
    imageArray.push(oPath + 'images/pic' + num + '.jpg');
  } ///EXPRESS VERB
  if (imageArray.length == 6) {
    imageArray.push(oPath + 'images/quiz1.jpg');
    imageArray.push('');
    imageArray.push(oPath + 'images/quiz2.jpg');
    imageArray.push('');
    imageArray.push(oPath + 'images/pic7.jpg');
    imageArray.push('');
  }
  if (presType != 'individual') {
    for (var num = 1; num <= quizForExamples.length; num++) {
      imageArray2.push(oPath + 'images/quiz' + num + '.jpg');
    }
  }
}
///CODE IF COMBINED QUIZ
else {
  for (var num = 0; num < numWords * 0.5; num++) {
    imageArray.push(
      oPath2 +
        nums1[num] +
        '/images/pic' +
        Math.ceil(nums2[num] * 0.5) +
        '.jpg',
    );
    imageArray.push('');
  }
}

///2020 EXTRA START
vowels = ['a', 'e', 'i', 'o', 'u', 'h', 'é'];
if (typeof imageBonus !== 'undefined') {
  imageArray = imageBonus.splice(0);
  var rr;
  for (rr = 0; rr < fastBonus.length; rr++) {
    fastBonus[rr] = fastBonus[rr] + sType;
  }
  fastSounds = fastBonus.splice(0);
  for (rr = 0; rr < slowBonus.length; rr++) {
    slowBonus[rr] = slowBonus[rr] + sType;
  }
  slowSounds = slowBonus.splice(0);
}
///2020 EXTRA END

//2020 PLAY
for (xx = 0; xx < imageArray.length; xx++) {
  if (imageArray[xx].indexOf('../') != -1) {
    imageArray[xx] = imageArray[xx].split('../').join(pre);
  }
}
for (xx = 0; xx < imageArray2.length; xx++) {
  if (imageArray2[xx].indexOf('../') != -1) {
    imageArray2[xx] = imageArray2[xx].split('../').join(pre);
  }
}
///2020 PLAY

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD FAST SOUND
function loadFastSound() {
  fastOrSlow = 'fast';
  clearTimeout(wordTimer);
  $('#mainSound').trigger('pause');
  //2020 PLAY
  var alterSound = fastSounds[currentWordNum];
  if (alterSound.indexOf('../') != -1) {
    alterSound = alterSound.split('../').join(pre);
  }
  $('#mainSound').attr('src', alterSound);
  //2020 PLAY
  document.getElementById('mainSound').load();
  document.getElementById('mainSound').addEventListener('canplay', playSound);
  soundPlaying = true;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD SLOW SOUND
function loadSlowSound() {
  fastOrSlow = 'slow';
  clearTimeout(wordTimer);
  $('#mainSound').trigger('pause');
  //2020 PLAY
  var alterSound = slowSounds[currentWordNum];
  if (alterSound.indexOf('../') != -1) {
    alterSound = alterSound.split('../').join(pre);
  }
  $('#mainSound').attr('src', alterSound);
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
  }, 800);
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHANGE IMAGE
function swapImages() {
  if (restartedLesson) {
    $('.mainPic2, .mainPic1').css({
      'background-image': 'url(' + imageArray[0] + ')',
    });
    restartedLesson = false;
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
    if ($('#button' + currentWordNum + '').hasClass('buttonOn') == false) {
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
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NEXT IMAGE
function nextImage() {
  if (arrowClicks != 'disable') {
    if (currentWordNum != numWords - 1) {
      picControl = 'picNext';
      currentWordNum++;
      changeWord();
    } else {
      soundPlaying = false;
      $('#pauseBtn').attr('src', '../../common/play.svg');
      $('#pauseBtn, #verbBanner').hide();
      $('.wrapper3').css({ background: 'rgba(0,0,0,0)' });
      ////PORTUGUESE CHANGE START
      $('#starConjWarn').fadeOut(1000);
      ////PORTUGUESE CHANGE END
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
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PREV IMAGE
function prevImage() {
  if (arrowClicks != 'disable') {
    picControl = 'picPrev';
    if (currentWordNum >= 2) {
      if (currentWordNum % 2 != 0) {
        currentWordNum--;
      }
      currentWordNum--;
      currentWordNum--;
      changeWord();
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHANGE WORD
function changeWord() {
  ///5.1
  if (!localStorage.getItem(storeInfo + 'insight')) {
    if (
      currentWordNum > 2 &&
      $('.insightLabel').length == 0 &&
      currentWordNum % 2 != 0
    ) {
      $('.shinyPicture').append('<div class="insightLabel"></div>');
      $('.insight').addClass('fullOpacity');
    }
  }
  if (currentWordNum % 2 == 0) {
    $('.insight, .insightLabel').addClass('disInsight');
  } else {
    $('.insight, .insightLabel').removeClass('disInsight');
  }
  ///5.1

  ///PORTUGUESE CHANGE LEFT OFF START
  saveLeftOff(forExamples.length - 2);
  if (!loCh) {
    if (currentWordNum % 2 != 0) {
      currentWordNum--;
    }
    loCh = true;
  }
  ///PORTUGUESE CHANGE LEFT OFF END

  soundRepeated = 0;
  $('#pauseBtn').attr('src', '../../common/pause.svg');
  /////START SOUND OPTIONS WITH INITIALISATION
  if ($('#selectPlayback').val().charAt(0) == 'f') {
    if (lessonInit == 'true') {
      fastOrSlow = 'fast';
      $('.timerMeter > .timerSpan').stop();
      $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
      $('#mainSound').trigger('pause');
      ///2020 EXTRA START REPLACE WARNING: CHECK SOUND TYPE
      var alterSound = fastSounds[0];
      if (alterSound.indexOf('../') != -1) {
        alterSound = alterSound.split('../').join(pre);
      }
      $('#mainSound').attr('src', alterSound);
      if (typeof imageBonus !== 'undefined') {
        $('#mainSound').attr('src', alterSound);
      } else {
        $('#mainSound').attr('src', oPath + 'sounds/sound1' + soundType);
      }
      ///2020 EXTRA END REPLACE
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
      var alterSound = fastSounds[1];
      if (alterSound.indexOf('../') != -1) {
        alterSound = alterSound.split('../').join(pre);
      }
      $('#mainSound').attr('src', alterSound);
      if (typeof imageBonus !== 'undefined') {
        $('#mainSound').attr('src', alterSound);
      } else {
        $('#mainSound').attr('src', oPath + 'sounds/sound2' + soundType);
      }
      ///PORTUGUESE CHANGE START
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
  ///////START Next Control Toggle
  if (currentWordNum <= 1) {
    $('.leftArrow').hide();
    $('.rightArrow').show();
  } else if (
    currentWordNum >= numWords - 2 &&
    !$('.ouinoContent').hasClass('portrait')
  ) {
    $('.leftArrow').show();
    $('.rightArrow').hide();
  } else if (
    currentWordNum >= numWords - 1 &&
    $('.ouinoContent').hasClass('portrait')
  ) {
    $('.leftArrow').show();
    $('.rightArrow').hide();
  } else {
    $('.leftArrow').show();
    $('.rightArrow').show();
  }
  ///////END Next Control Toggle
  ////START IF NEW SLIDE///
  if (currentWordNum % 2 == 0) {
    ////4.1.4 FIX
    if ($('.ouinoContent').hasClass('portrait')) {
      $('.wordSentenceB').removeClass('disa');
      $('.wordSentence').addClass('disa');
    } else {
      $('.wordSentenceIn').css({ opacity: '0.3' });
      $('.wordSentence, .wordSentenceB').removeClass('disa');
    }
    ////4.1.4 FIX
    //// IF CONJUGATION IS INFINITIVE
    var theConj = conjNum[currentWordNum];
    if (theConj == 0) {
      theConj = 1;
    }
    //// IF CONJUGATION IS PAST

    if (theConj == 2 || theConj == 3) {
      $('#verbQuestion').show();
    } else {
      $('#verbQuestion').hide();
    }
    ///EXPRESS VERB
    if (typeof expressVerb !== 'undefined') {
      if (currentWordNum == 0 || currentWordNum == 1) {
        theConj = 0;
      } else if (currentWordNum == 2 || currentWordNum == 3) {
        theConj = 1;
      } else if (currentWordNum == 4 || currentWordNum == 5) {
        theConj = 2;
      } else if (currentWordNum == 6 || currentWordNum == 7) {
        theConj = 3;
      } else if (currentWordNum == 8 || currentWordNum == 9) {
        theConj = 4;
      } else if (currentWordNum == 10 || currentWordNum == 11) {
        theConj = 5;
      }
    }
    ///EXPRESS VERB END
    ////Conjugation Load
    var btnNum = currentWordNum * 0.5 + 1;
    if (btnNum == 1) {
      $('#backIn').css({ 'border-radius': '5px' });
    } ///new code
    else if (btnNum == numWords * 0.5) {
      $('#backIn').css({ 'border-radius': '5px' });
    } ///new code
    else {
      $('#backIn').css({ 'border-radius': '5px' });
    } ///new code
    $('.verbButtons').removeClass('verbButtonOn');
    $('#verbBtn' + btnNum).addClass('verbButtonOn');
    $('#btnWrap').scrollTo('#verbBtn' + btnNum, 500, { offset: -50 }); //new code
    $('#menuVerbSec1').html('');
    $('#menuVerbSec2').html('');
    $('.conjItems').text('');
    $('.conjItems').removeClass('hilite');
    for (var num = 1; num <= window['forConj' + theConj].length; num++) {
      $('#conjItem' + num).append(window['forConj' + theConj][num - 1]);
      $('#conjItemB' + num).append(window['engConj' + theConj][num - 1]);
    }
    var pronounPos = forExamples[currentWordNum]
      .split("j'")
      .join('je ')
      .split(' ');
    ///2020 EXTRA START
    if (typeof imageBonus !== 'undefined') {
      pronounPos = personPos[currentWordNum].split("j'").join('je ').split(' ');
    }
    ///2020 EXTRA END

    pronounPos = pronounPos[0];
    if (pronounPos == conjAlt) {
      pronounPos = conjAltNum;
    } else if (pronounPos == conjAlt2) {
      pronounPos = conjAltNum2;
    } else if (pronounPos == conjAlt3) {
      pronounPos = conjAltNum3;
    } else {
      pronounPos = conjID.indexOf(pronounPos) + 1;
    }
    //START GERMAN EXCEPTION
    if (lessonLanguage == 'German') {
      var engPro = engExamples[currentWordNum].split(' ');
      engPro = engPro[0];
      if (engPro == 'they') {
        pronounPos = 7;
      }
    }
    //END GERMAN EXCEPTION

    ///EXPRESS VERB
    if (typeof expressVerb !== 'undefined') {
      if (currentWordNum == 0 || currentWordNum == 1) {
        $('#conjItem1, #conjItemB1').addClass('hilite');
      } else if (currentWordNum == 2 || currentWordNum == 3) {
        $('#conjItem2, #conjItemB2').addClass('hilite');
      }
      if (lessonLanguage == 'French') {
        if (currentWordNum == 4 || currentWordNum == 5) {
          $('#conjItem3, #conjItemB3').addClass('hilite');
        } else if (currentWordNum == 6 || currentWordNum == 7) {
          $('#conjItem4, #conjItemB4').addClass('hilite');
        } else if (currentWordNum == 8 || currentWordNum == 9) {
          $('#conjItem5, #conjItemB5').addClass('hilite');
        } else if (currentWordNum >= 10) {
          $('#conjItem6, #conjItemB6').addClass('hilite');
        }
      } else if (lessonLanguage == 'Spanish') {
        if (currentWordNum == 4 || currentWordNum == 5) {
          $('#conjItem3, #conjItemB3,#conjItem4, #conjItemB4').addClass(
            'hilite',
          );
        } else if (currentWordNum == 6 || currentWordNum == 7) {
          $('#conjItem5, #conjItemB5').addClass('hilite');
        } else if (currentWordNum >= 8) {
          $('#conjItem6, #conjItemB6, #conjItem7, #conjItemB7').addClass(
            'hilite',
          );
        }
      }
      ////PORTUGUESE CHANGE START
      else if (lessonLanguage == 'Portuguese') {
        if (currentWordNum == 4 || currentWordNum == 5) {
          $('#conjItem3, #conjItemB3,#conjItem4, #conjItemB4').addClass(
            'hilite',
          );
        } else if (currentWordNum == 6 || currentWordNum == 7) {
          $('#conjItem5, #conjItemB5').addClass('hilite');
        } else if (currentWordNum >= 8) {
          $('#conjItem6, #conjItemB6, #conjItem7, #conjItemB7').addClass(
            'hilite',
          );
        }
      }
      ////PORTUGUESE CHANGE END
      else if (lessonLanguage == 'Italian') {
        if (currentWordNum == 4 || currentWordNum == 5) {
          $('#conjItem3, #conjItemB3,#conjItem4, #conjItemB4').addClass(
            'hilite',
          );
        } else if (currentWordNum == 6 || currentWordNum == 7) {
          $('#conjItem5, #conjItemB5').addClass('hilite');
        } else if (currentWordNum == 8 || currentWordNum == 9) {
          $('#conjItem6, #conjItemB6').addClass('hilite');
        } else if (currentWordNum >= 10) {
          $('#conjItem7, #conjItemB7, #conjItem8, #conjItemB8').addClass(
            'hilite',
          );
        }
      } else if (lessonLanguage == 'German') {
        if (currentWordNum == 4 || currentWordNum == 5) {
          $('#conjItem3, #conjItemB3').addClass('hilite');
        } else if (currentWordNum == 6 || currentWordNum == 7) {
          $('#conjItem4, #conjItemB4').addClass('hilite');
        } else if (currentWordNum == 8 || currentWordNum == 9) {
          $('#conjItem5, #conjItemB5').addClass('hilite');
        } else if (currentWordNum >= 10) {
          $('#conjItem6, #conjItemB6,#conjItem7, #conjItemB7').addClass(
            'hilite',
          );
        }
      }
    }
    ///EXPRESS VERB END

    //2018CHANGE
    if (lessonTitle.indexOf('mperative') != -1) {
      $('.conjItems').removeClass('hilite');
      if (lessonLanguage == 'French') {
        if (currentWordNum >= 0 && currentWordNum <= 3) {
          $('#conjItem2, #conjItemB2').addClass('hilite');
        }
        if (currentWordNum >= 4 && currentWordNum <= 7) {
          $('#conjItem4, #conjItemB4').addClass('hilite');
        } else if (currentWordNum >= 8) {
          $('#conjItem5, #conjItemB5').addClass('hilite');
        }
      } else if (lessonLanguage == 'Spanish') {
        if (currentWordNum == 0 || currentWordNum == 1) {
          $('#conjItem2, #conjItemB2').addClass('hilite');
        } else if (currentWordNum == 2 || currentWordNum == 3) {
          $('#conjItem2, #conjItemB2').addClass('hilite');
        } else if (currentWordNum == 4 || currentWordNum == 5) {
          $('#conjItem3, #conjItemB3').addClass('hilite');
        } else if (currentWordNum == 6 || currentWordNum == 7) {
          $('#conjItem4, #conjItemB4').addClass('hilite');
        } else if (currentWordNum == 8 || currentWordNum == 9) {
          $('#conjItem5, #conjItemB5').addClass('hilite');
        } else if (currentWordNum >= 10) {
          $('#conjItem6, #conjItemB6').addClass('hilite');
        }
      }
      ////PORTUGUESE CHANGE START
      else if (lessonLanguage == 'Portuguese') {
        if (currentWordNum == 0 || currentWordNum == 1) {
          $('#conjItem2, #conjItemB2').addClass('hilite');
        } else if (currentWordNum == 2 || currentWordNum == 3) {
          $('#conjItem2, #conjItemB2').addClass('hilite');
        } else if (currentWordNum == 4 || currentWordNum == 5) {
          $('#conjItem3, #conjItemB3').addClass('hilite');
        } else if (currentWordNum == 6 || currentWordNum == 7) {
          $('#conjItem4, #conjItemB4').addClass('hilite');
        } else if (currentWordNum == 8 || currentWordNum == 9) {
          $('#conjItem5, #conjItemB5').addClass('hilite');
        } else if (currentWordNum >= 10) {
          $('#conjItem6, #conjItemB6').addClass('hilite');
        }
      }
      ////PORTUGUESE CHANGE END
      else if (lessonLanguage == 'Italian') {
        if (currentWordNum == 0 || currentWordNum == 1) {
          $('#conjItem1, #conjItemB1').addClass('hilite');
        } else if (currentWordNum == 2 || currentWordNum == 3) {
          $('#conjItem2, #conjItemB2').addClass('hilite');
        }
        if (currentWordNum >= 4 && currentWordNum <= 7) {
          $('#conjItem3, #conjItemB3').addClass('hilite');
        } else if (currentWordNum >= 8) {
          $('#conjItem4, #conjItemB4').addClass('hilite');
        }
      } else if (lessonLanguage == 'German') {
        if (currentWordNum >= 0 && currentWordNum <= 3) {
          $('#conjItem1, #conjItemB1').addClass('hilite');
        }
        if (currentWordNum >= 4 && currentWordNum <= 7) {
          $('#conjItem3, #conjItemB3').addClass('hilite');
        } else if (currentWordNum == 8 || currentWordNum == 9) {
          $('#conjItem2, #conjItemB2').addClass('hilite');
        } else if (currentWordNum >= 10) {
          $('#conjItem4, #conjItemB4').addClass('hilite');
        }
      }
    }
    //2018CHANGE

    //2021C
    if (typeof imageBonus !== 'undefined' && lessonLanguage == 'German') {
      var engPro1 = engExamples[currentWordNum + 1];
      if (pronounPos == 3) {
        if (
          engPro1.indexOf('<em>They') != -1 ||
          engPro1.indexOf('<em>they') != -1
        ) {
          pronounPos = 7;
        } else if (
          engPro1.indexOf('<em>You ') != -1 ||
          engPro1.indexOf('<em>you ') != -1
        ) {
          pronounPos = 6;
        }
      }
    }
    //2021C

    ///PORTUGUESE CHANGE START
    if (lessonLanguage == 'Portuguese') {
      var portPro = forExamples[currentWordNum];
      if (portPro.indexOf(' senhor') == -1) {
        $('#conjItem3').html(
          $('#conjItem3').html().split('o senhor ').join('você '),
        );
        $('#conjItemB3').html(
          $('#conjItemB3').html().split('(formal)').join('(BR)'),
        );
      } else {
        pronounPos = 3;
        $('#conjItem3').html(
          $('#conjItem3').html().split('você ').join('o senhor '),
        );
        $('#conjItemB3').html(
          $('#conjItemB3').html().split('(BR)').join('(formal)'),
        );
      }
    }
    ///PORTUGUESE CHANGE END

    if (pronounPos != 0) {
      $('#conjItem' + pronounPos).addClass('hilite');
      $('#conjItemB' + pronounPos).addClass('hilite');
    }
    $('#menuVerbSec1').html($('#conjForeign').html());
    $('#menuVerbSec2').html($('#conjEnglish').html());

    /////END CONJUGATION ADJUSTMENTS
    ///Change Images
    swapImages();
    ///// START Change English Text
    ///PORTUGUESE CHANGE START (MODIFY)
    if (
      engExamples[currentWordNum + 1].charAt(
        engExamples[currentWordNum + 1].length - 1,
      ) == ')'
    ) {
      var cxt = engExamples[currentWordNum + 1].replaceLast(
        '(',
        "<span style='color: #707070; font-size: 0.8em;'>(",
      );
      cxt = cxt.replaceLast(')', ')</span>');
      $('.engSentence').html(cxt);
    } else {
      $('.engSentence').html(engExamples[currentWordNum + 1]);
    }
    ///PORTUGUESE CHANGE END

    $('.engSentenceB').html(engExamples[currentWordNum]);
    /////START Change Foreign Text
    ////ADD NOTE
    var currentWordString = forExamples[currentWordNum + 1];
    if (currentWordString.charAt(0) == '%') {
      currentWordString = currentWordString.split('%');
      //PORTUGUESE CHANGE START
      var myNote = currentWordString[1].split('strong>').join('b>');
      //PORTUGUESE CHANGE END
      currentWordString = currentWordString[2];
      ///2020 EXTRA START REPLACE BE CAREFUL
      if (typeof imageBonus !== 'undefined') {
        if (lessonLanguage != 'German') {
          $('#sideNote').html(
            '<strong>IRREGULAR VERB</strong><br><span>' +
              myNote +
              "</span><img src='../../search/common/arrBlackDown.svg'>",
          );
        } else if (
          lessonLanguage == 'German' &&
          myNote.indexOf('strong') == -1
        ) {
          $('#sideNote').html(
            '<strong>IMPORTANT NOTE</strong><br><span>' +
              myNote +
              "</span><img src='../../search/common/arrBlackDown.svg'>",
          );
        } else if (
          lessonLanguage == 'German' &&
          myNote.indexOf('strong') != -1
        ) {
          $('#sideNote').html(
            '<strong>STRONG VERB</strong><br><span>' +
              myNote +
              "</span><img src='../../search/common/arrBlackDown.svg'>",
          );
        }
        if (irregSpan) {
          $('#sideNote span').show();
          $('#sideNote img').attr('src', '../../search/common/arrBlackUp.svg');
        }
      } else {
        $('#sideNote').html(
          '<strong>IMPORTANT NOTE</strong><br><span>' +
            myNote +
            "</span><img src='../../search/common/arrBlackDown.svg'>",
        );
        if (irregSpan) {
          $('#sideNote span').show();
          $('#sideNote img').attr('src', '../../search/common/arrBlackUp.svg');
        }
      }
      $('#sideNote').hide();
      setTimeout(function () {
        $('#sideNote').fadeIn();
      }, 100);
    }
    ///2020 EXTRA END
    else {
      $('#sideNote').hide();
    }

    $('.forSentence').html(currentWordString);
    $('.forSentenceB').html(forExamples[currentWordNum]);
    //// END Change Foreign Text
    resizeText();
    ////2020 LAST START
  } else {
    ///4.1.4 FIX
    if ($('.ouinoContent').hasClass('portrait')) {
      $('.wordSentenceB').addClass('disa');
      $('.wordSentence').removeClass('disa');
    } else {
      $('.wordSentenceIn').animate({ opacity: '1' });
      $('.wordSentence, .wordSentenceB').removeClass('disa');
    }
    ///4.1.4 FIX
  }
  ////2020 LAST END

  ///2020 EXTRA START
  ///2020MODI///////////////////////// START
  if (cardRaw.length > 0) {
    var flNum = currentWordNum;
    if (flNum % 2 == 0) {
      flNum++;
    }
    var fCard = lessonNumber + '|' + (parseInt(flNum) + 1) + cardCate;
    ///2020MODI///////////////////////// END

    //BONUS VERB EXCEPTION
    ///2022 FIX
    if (typeof imageBonus !== 'undefined') {
      var imageInfo = imageArray[currentWordNum].split('/');
      var flInfo1 = imageInfo[imageInfo.length - 1]
        .split('pic')
        .join('')
        .split('.jpg')
        .join('');
      flInfo1 = parseInt(flInfo1) * 2;
      var flInfo2 = parseInt(imageInfo[imageInfo.length - 3]);
      if (currentWordNum % 2 == 0) {
        fCard = flInfo2 + '|2' + cardCate;
      } else {
        fCard = flInfo2 + '|' + flInfo1 + cardCate;
      }
    }
    ///2022 FIX
    //BONUS VERB EXCEPTION

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
  ///2020 EXTRA END

  ///END IF NEW SLIDE
}

//////////////////////////////////////////////////////////////////////////////////START RESIZE TEXT

//new code
///2020 LAST START

//4.1.4 start
function resizeText() {
  if ($('#conjForeign #conjSpan').width() + 10 >= $('#conjForeign').width()) {
    $('#conjForeign').scrollLeft(150);
  }
  if ($('#conjEnglish #conjSpan2').width() + 10 >= $('#conjEnglish').width()) {
    $('#conjEnglish').scrollLeft(150);
  }

  //2023 START
  var theFont = 29;

  if ($('body').hasClass('notch')) {
    theFont = 25;
  }

  if (conjNum[currentWordNum] == 0 && screenRatio >= 1) {
    $('#conjForeign, #conjEnglish, #conjOpen').hide();
    if (viewportHeight >= 600) {
      $('.wordSentenceB').css({ top: '34%' });
    } else {
      $('.wordSentenceB').css({ top: '29%' });
    }
  } else {
    $('#conjForeign, #conjEnglish, #conjOpen').show();
    if (screenRatio < 1) {
      $('.wordSentenceB').css({ top: '0' });
    } else if (viewportHeight >= 600) {
      $('.wordSentenceB').css({ top: '61.5%' });
    } else {
      $('.wordSentenceB').css({ top: '29%' });
    }
  }
  //2023 END

  ///RESIZE CONJUGATION
  $('.forSentenceB').css({ fontSize: theFont + 'px' });
  if ($('.engSentenceB').hasClass('engSentenceOnly')) {
    $('.engSentenceB').css({ fontSize: theFont + 'px' });
  } else {
    $('.engSentenceB').css({ fontSize: 21 + 'px' });
  }

  var myTextWidth = $('.textWrapB').width();
  var elementWidth = $('.conjContainer').width() * 0.92;
  var myTextWidth2 = $('.textWrap2B').width();
  for (var numB = theFont; myTextWidth > elementWidth; numB--) {
    myTextWidth = $('.textWrapB').width();
    var newSize = numB;
    $('.forSentenceB').css({ fontSize: newSize + 'px' });
  }

  if ($('.engSentenceB').hasClass('engSentenceOnly')) {
    for (var numC = theFont; myTextWidth2 > elementWidth; numC--) {
      myTextWidth2 = $('.textWrap2B').width();
      var newSize2 = numC;
      $('.engSentenceB').css({ fontSize: newSize2 + 'px' });
    }
  } else {
    for (var numC = 21; myTextWidth2 > elementWidth; numC--) {
      myTextWidth2 = $('.textWrap2B').width();
      var newSize2 = numC;
      $('.engSentenceB').css({ fontSize: newSize2 + 'px' });
    }
  }

  ///NORMAL
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
//4.1.4 end

function closest(arr, closestTo) {
  var closest = Math.max.apply(null, arr); //Get the highest number in arr in case it match nothing.

  for (var i = 0; i < arr.length; i++) {
    //Loop the array
    if (arr[i] >= closestTo && arr[i] < closest) closest = arr[i]; //Check if it's higher than your number, but lower than your closest value
  }

  return closest; // return the value
}
//new code
///////////////////////////////////////////////////////////////////////////////////////////////////////END RESIZE TEXT

function resizeQuizText() {
  ///2021 font start
  var myTextWidth;
  var elementWidth;
  var newSize;

  ///2023 START/////////////////////////////
  theFont = 23;

  myTextWidth = $('#quizSentenceFor').width();
  elementWidth = $('#quizContent').width() - 40;
  $('#quizSentenceFor').css({ 'max-width': elementWidth });
  $('#quizSentenceEng').css({ 'max-width': elementWidth });

  if (currentQuiz == 2) {
    var quizHeight = $('#quizAllItemsB').height();
    if (quizHeight > 480) {
      $('.puzzTXT, .puzzTXT2').css({
        'line-height': '60px',
        fontSize: '16px',
        'min-width': '30px',
      });
      $('.puzzTXT2').css({ margin: '0 10px 0 30px' });
      $('#puzzleTitle').css({ fontSize: '22px' });
    } else if (quizHeight <= 480 && quizHeight > 380) {
      $('.puzzTXT, .puzzTXT2').css({
        'line-height': '50px',
        fontSize: '18px',
        'min-width': '20px',
      });
      $('.puzzTXT2').css({ margin: '0 8px 0 25px' });
      $('#puzzleTitle').css({ fontSize: '20px' });
    } else if (quizHeight <= 380 && quizHeight > 280) {
      $('.puzzTXT, .puzzTXT2').css({
        'line-height': '39px',
        fontSize: '16px',
        'min-width': '20px',
      });
      $('.puzzTXT2').css({ margin: '0 8px 0 25px' });
      $('#puzzleTitle').css({ fontSize: '18px' });
    } else if (quizHeight <= 280 && quizHeight > 220) {
      $('.puzzTXT, .puzzTXT2').css({
        'line-height': '30px',
        fontSize: '13px',
        'min-width': '15px',
      });
      $('.puzzTXT2').css({ margin: '0 6px 0 15px' });
      $('#puzzleTitle').css({ fontSize: '15px' });
    } else if (quizHeight <= 220) {
      $('.puzzTXT, .puzzTXT2').css({
        'line-height': '22px',
        fontSize: '12px',
        'min-width': '10px',
      });
      $('.puzzTXT2').css({ margin: '0 2px 0 10px' });
      $('#puzzleTitle').css({ fontSize: '14px' });
    }
  }
  ///2023 END/////////////////////////////////////////////////////

  if (currentQuiz == 3) {
    $('#boardMain').css({ fontSize: '23px' });
    myTextWidth = $('#writtenAnswer').width();
    elementWidth = $('#writeAnswerField').width() - 30;
    for (var num = 23; myTextWidth > elementWidth && num > 1; num--) {
      myTextWidth = $('#writtenAnswer').width();
      newSize = num;
      $('#boardMain').css({ fontSize: newSize + 'px' });
    }
  }
}

///2020 LAST END

///////////APP LOAD OPTIONS

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

  //2020 EXTRA START////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START

  if (typeof imageBonus !== 'undefined') {
    $('#verbQuestion').addClass('noFlash');
  }

  if (localStorage.getItem(storeInfo + 'cardsSTORE')) {
    cardRaw = localStorage.getItem(storeInfo + 'cardsSTORE');
    cardRaw = cardRaw.split(':');
  }
  $('body').append(
    '<img id="flashNotice" src="../../flash/images/notice3.svg"/><img id="flashNotice2" src="../../flash/images/notice4.svg"/>',
  );

  /////////////////2020MODI////////////////////////////////////////////////////////////////////START

  ////PORTUGUESE CHANGE START
  $('.engToggle').on('click', function () {
    if ($('#selectText').val() == 'both') {
      $('#selectText').val('foreign');
      toggleText2();
    } else {
      $('#selectText').val('both');
      toggleText2();
    }
  });
  $('.engRepeat').on('touchend mouseup', function (event) {
    event.preventDefault();
    disableTimer = true;
    loadQuizSound2();
    $('.engRepeat').addClass('engDisabled');
  });
  if (currentDevice != 'mobile') {
    $('.engRepeat').hover(function () {
      $('.engRepeat').toggleClass('engHover2');
      $('#arrowLabel').text('REPEAT SOUND');
      $('.instructions').toggleClass('showDiv');
    });
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

  ////PORTUGUESE CHANGE END

  $('.addQuizFlash').on('touchend mouseup', function (event) {
    event.preventDefault();

    if (currentQuiz == 2 || currentQuiz == 3) {
      return;
    }

    for (i = 0; i < errors.length; i++) {
      var flNum = parseInt(errors[i]);
      if (flNum % 2 != 0) {
        flNum++;
      }
      var fCard = lessonNumber + '|' + parseInt(flNum) + cardCate;

      //BONUS VERB EXCEPTION
      if (typeof imageBonus !== 'undefined') {
        var imageInfo = imageArray[parseInt(errors[i]) - 1].split('/');
        var flInfo1 = imageInfo[imageInfo.length - 1]
          .split('pic')
          .join('')
          .split('.jpg')
          .join('');
        flInfo1 = parseInt(flInfo1) * 2;
        var flInfo2 = parseInt(imageInfo[imageInfo.length - 3]);
        fCard = flInfo2 + '|' + flInfo1 + cardCate;
      }
      //BONUS VERB EXCEPTION

      //COMBINED VERB EXCEPTION
      if (lessonNumber == 0) {
        var imageInfo = imageArray[parseInt(errors[i]) - 2].split('/');
        var flInfo1 = imageInfo[imageInfo.length - 1]
          .split('pic')
          .join('')
          .split('.jpg')
          .join('');
        flInfo1 = parseInt(flInfo1) * 2;
        var flInfo2 = parseInt(imageInfo[imageInfo.length - 3]);
        fCard = flInfo2 + '|' + flInfo1 + cardCate;
      }
      //COMBINED VERB EXCEPTION

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
    //save it
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

  $('#flashCard').on('click', function () {
    if (currentDevice != 'mobile') {
      playSprite('shimmer');
    }
    ///
    $('#flashNotice').show();
    setTimeout(function () {
      $('#flashNotice').fadeOut();
    }, 700);
    $('#flashCard').hide();
    $('#flashCard2').fadeIn(1000);

    var flNum = currentWordNum;
    if (flNum % 2 == 0) {
      flNum++;
    }
    var fCard = lessonNumber + '|' + (parseInt(flNum) + 1) + cardCate;
    //BONUS VERB EXCEPTION
    ///2022 FIX
    if (typeof imageBonus !== 'undefined') {
      var imageInfo = imageArray[currentWordNum].split('/');
      var flInfo1 = imageInfo[imageInfo.length - 1]
        .split('pic')
        .join('')
        .split('.jpg')
        .join('');
      flInfo1 = parseInt(flInfo1) * 2;
      var flInfo2 = parseInt(imageInfo[imageInfo.length - 3]);
      if (currentWordNum % 2 == 0) {
        fCard = flInfo2 + '|2' + cardCate;
      } else {
        fCard = flInfo2 + '|' + flInfo1 + cardCate;
      }
    }
    ///2022 FIX
    //BONUS VERB EXCEPTION

    cardRaw.push(fCard);
    localStorage.setItem(storeInfo + 'cardsSTORE', cardRaw.join(':'));
    infoToUpdate = cardRaw.join(':');
    fieldToUpdate = 'cards';
    updateDatabase();
  });
  ///
  $('#flashCard2').on('click', function () {
    if (currentDevice != 'mobile') {
      playSprite('quizBad');
    }
    ///FLASH CARD ACTIONS START
    $('#flashNotice2').show();
    setTimeout(function () {
      $('#flashNotice2').fadeOut();
    }, 700);
    $('#flashCard2').hide();
    $('#flashCard').fadeIn(1000);
    var flNum = currentWordNum;
    if (flNum % 2 == 0) {
      flNum++;
    }
    var fCard = lessonNumber + '|' + (parseInt(flNum) + 1) + cardCate;
    //BONUS VERB EXCEPTION
    ///2022 FIX
    if (typeof imageBonus !== 'undefined') {
      var imageInfo = imageArray[currentWordNum].split('/');
      var flInfo1 = imageInfo[imageInfo.length - 1]
        .split('pic')
        .join('')
        .split('.jpg')
        .join('');
      flInfo1 = parseInt(flInfo1) * 2;
      var flInfo2 = parseInt(imageInfo[imageInfo.length - 3]);
      if (currentWordNum % 2 == 0) {
        fCard = flInfo2 + '|2' + cardCate;
      } else {
        fCard = flInfo2 + '|' + flInfo1 + cardCate;
      }
    }
    ///2022 FIX
    //BONUS VERB EXCEPTION

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

  //////////2020MODI////////////////////////////////////////////////////////////////////END

  if (currentDevice != 'mobile') {
    $('#flashCard').hover(function () {
      $('#arrowLabel').text('ADD TO FLASH CARD FOR REVIEW');
      $('.instructions').toggleClass('showDiv');
    });
    $('#flashCard2').hover(function () {
      $('#arrowLabel').text('REMOVE FROM FLASH CARDS');
      $('.instructions').toggleClass('showDiv');
    });
  }

  $('.wordSentence').on('click', function () {
    if (cardRaw.length > 0) {
      caNum = parseInt(currentWordNum);
      if (caNum % 2 == 0) {
        caNum++;
      }
      togFlash();
    }
  });
  $('.wordSentenceB').on('click', function () {
    if (cardRaw.length > 0) {
      caNum = parseInt(currentWordNum);
      if (caNum % 2 != 0) {
        caNum--;
      }
      togFlash();
    }
  });

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

  //2020 EXTRA END////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END

  initiate();
}
///////END LOAD OPTIONS

/////////////START INIT OPTIONS
$(document).ready(function () {
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
  $('.timerMeter > .timerSpan').css({ background: '#8c170b', width: 0 });
  ///APPLY INITIAL BACKGROUND PICTURE
  ///2020 EXTRA START REPLACE
  if (typeof imageBonus !== 'undefined') {
    presType = 'bonus';
    $('.mainPic1').css({ 'background-image': 'url(' + imageArray[0] + ')' });
  } else if (lessonNumber !== 0) {
    $('.mainPic1').css({
      'background-image': 'url(' + oPath + 'images/pic1.jpg)',
    });
  }
  if (localStorage.getItem(storeInfo + 'irregSTORE')) {
    irregSpan = false;
  }
  ///2020 EXTRA END REPLACE
  ///APPLY LESSON TITLE
  $('#verbBanner1 img').attr(
    'src',
    '../../common/puzzle' + verbTypeNum + '.svg',
  );
  $('#verbText1').text(verbTypeArray[verbTypeNum - 1]);
  $('#verbTextB1').text(verbType);
  if (lessonLanguage == 'Italian' && verbType == 'IRE') {
    $('#verbTextB1').append(IREType);
  }
  $('#verbTextB2').text(forConj6);
  if (typeof expressVerb !== 'undefined') {
    $('#verbBanner').addClass('express1');
  } ///EXPRESS VERB
  //GERMAN MOD
  ////2020 EXTRA START REPlACE START
  if (typeof imageBonus !== 'undefined') {
  } else {
    $('#verbTextB3').html(
      forConj7.split('+').join("<b style='font-family: arial;'> + </b>"),
    );
  }
  ////2020 EXTRA END REPlACE END
  ///
  if (lessonLanguage == 'Italian') {
    $('#verbText2').text('Gerund: ');
  } else if (lessonLanguage == 'Spanish') {
    $('#verbText2').text('Present Participle: ');
  }
  ////PORTUGUESE CHANGE START
  else if (lessonLanguage == 'Portuguese') {
    $('#verbText2').text('Present Participle: ');
  }
  ////PORTUGUESE CHANGE END
  else if (lessonLanguage == 'French' || lessonLanguage == 'German') {
    $('#verbText2').text('Auxiliary Verb: ');
  }
  $('#verbBanner1B').html($('#verbBanner1').html());
  $('#verbBanner2B').html($('#verbBanner2').html());
  $('#verbBanner3B').html($('#verbBanner3').html());
  $('#verbBanner4B').html($('#verbBanner4').html());

  $('#pronounWarn').html(proWarning);
  ///2018CHANGE
  if (lessonLanguage == 'French') {
    $('#starQues2, #pronounWarn').hide();
    $('#starQues1').css({ top: '33%', width: '13px' });
  }
  ///2018CHANGE
  else if (lessonLanguage == 'Italian') {
    $('#starQues1').css({ top: '30%' });
    $('#starQues2').css({ top: '79%' });
  } else if (lessonLanguage == 'German') {
    $('#starQues1, #pronounWarn').hide();
  }

  if (!pronominal) {
    $('#verbBanner4, #verbBanner4B').hide();
  } else {
    $('#verbBanner4').addClass('verbBannerItem');
    $('#verbBanner4B').addClass('verbBannerItem2');
  }

  ///CREATE BUTTONS AND CONTENT
  var buttonCreate = '';
  var halfWords = numWords * 0.5;
  var widthPercent = 100 / halfWords;
  for (var num = 1; num <= halfWords; num++) {
    buttonCreate =
      buttonCreate +
      '<div id="verbBtn' +
      num +
      '" class="verbButtons">' +
      conjTitles[num - 1] +
      '</div>';
  }
  $('.ouinoContent').append($("<div id='btnWrap'>" + buttonCreate + '</div>')); //new code

  ///new code
  if ($('html').innerWidth() <= 850) {
    $('.verbButtons').css({ width: '150px' });
    var pixCount = 0;
    for (var num = 1; num <= halfWords; num++) {
      $('#verbBtn' + num).css({ left: pixCount + 'px' });
      pixCount = pixCount + 150;
    }
  } else {
    $('.verbButtons').css({ width: 100 / (numWords * 0.5) + '%' });
    for (var num = 1; num <= halfWords; num++) {
      $('#verbBtn' + num).css({ left: widthPercent * (num - 1) + '%' });
    }
  }
  ///END NEW CODE
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
      btnColor[2] +
      ',' +
      btnColor[3] +
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

  //2020 EXTRA START
  if (errorMode == false) {
    $('.addQuizFlash').removeClass('disableFlash');
    $('.addQuizFlash').show();
  } else {
    $('.addQuizFlash').addClass('disableFlash');
    $('.addQuizFlash').hide();
  }
  $('#dictBtn').hide();
  //2020 EXTRA END
  if (localStorage.getItem(storeInfo + 'externalKeyboard')) {
    $('#keyboardBtn').attr('src', '../../common/keyboard.svg');
    externalKeyboard = true;
  }
  $('#puzzleBack').hide();
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
  if (presType != 'individual') {
    $('#quizBtn3').hide();
    $('#quizBtn4').attr('colspan', 2);
  }
  $('#verbBanner').css({ display: 'none' });
  $('#pronounWarn, #starConjWarn').hide();
  if (quizScores != null) {
    pastQuizScoreAll = quizScores[lessonNumber - 1];
  } else {
    pastQuizScoreAll = '0|0|0|0';
  }
  //Combined quiz change
  ///2020 EXTRA START REPLACE
  if (lessonNumber === 0) {
    pastQuizScoreAll = '0|0|0|0';
    $(
      '#quizGoBack, .smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
    ).css({ opacity: '0' });
  }
  ///2020 EXTRA END REPLACE
  //Combined quiz change
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

  if ($('#quizTimerPointer').is(':visible')) {
    $('#quizTimerPointer').stop(true, true);
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
    '.menuTitleContainer, #pauseBtn, #optionBtn, #quizPreload, #quizGoBack, #quizStart, #quizItself, #quizTimer, #quizTimer2, #quizTimerPointer, #quizDone',
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
  if ($('#quizContent').is(':hidden')) {
    $('#quizContent').show();
  }

  loadButtonsQuiz();
  if (lessonNumber === 0) {
    loadQuiz4();
  }
  /////CODE IF ERROR MODE
  if (errorMode == true && lessonNumber !== 0) {
    if (currentQuiz === 1) {
      loadQuiz1();
    } else if (currentQuiz === 2) {
      loadQuiz2();
    } else if (currentQuiz === 3) {
      loadQuiz3();
    } else if (currentQuiz === 4) {
      loadQuiz4();
    }
  }
  /////CODE IF ERROR MODE
}

function loadQuiz1() {
  $('#keyboardBtn').hide();
  quizCombinedArray = shuffle(quizMapArray);
  if (typeof expressVerb !== 'undefined') {
    var tempArr = [1, 3, 5, 7, 9, 11];
    quizCombinedArray = shuffle(tempArr);
  } ///EXPRESS VERB
  engExamplesQuiz = engExamples.join('%%%').split('%%%');
  if (engExamplesQuiz.length == 6) {
    engExamplesQuiz.push('THEY WILL WANT');
    engExamplesQuiz.push('');
    engExamplesQuiz.push('HE WILL WANT');
    engExamplesQuiz.push('');
    engExamplesQuiz.push('SHE WILL WANT');
    engExamplesQuiz.push('');
  }
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong2.svg)',
  });
  $('#quizTimerImage').attr('src', '../../common/timerPointer.svg');
  disableTimer = true;
  $('#quizAllItems').show();
  $(
    '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #quizAllItemsB, #quizMultiImg, #noteBook, #hintTable, #quizAllItemsD, #textureIn',
  ).hide();
  $('#quizMenu').hide();
  timerTime = 6000;
  timerWait = 100;
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
  $('#keyboardBtn').hide();
  quizCombinedArray = shuffle(quizMapArray);
  $('#topPuzzle').html(puzzleMaker);
  puzzleArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  puzzleArray = shuffle(puzzleArray);
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong2.svg)',
  });
  ///EXPRESS REPLACE
  ///2020 EXTRA START REPLACE
  if (typeof expressVerb === 'undefined' && typeof imageBonus === 'undefined') {
    ///2023 START
    if (conjNum.length < 15) {
      $('#quizMultiImg, #topPuzzle').css({
        'background-image': 'url(' + oPath + 'images/pic7.jpg)',
      });
    } else {
      $('#quizMultiImg, #topPuzzle').css({
        'background-image': 'url(' + oPath + 'images/picB.jpg)',
      });
    }
  }
  ///2023 END
  ///2020 EXTRA END REPLACE
  ///EXPRESS REPLACE
  $(
    '#quizSentenceContainer, #quizAllItemsC, #quizWriteImg, #quizAllItems, #noteBook, #hintTable, #quizAllItemsD, #textureIn',
  ).hide();
  $('#quizAllItemsB, #quizMultiImg').show();
  $('#quizMenu').hide();
  timerTime = 7000;
  /// SEE ACTIONS FOR TIMERWAIT
  if (conjNum.length > 15 || conjNum[0] == conjNum[9]) {
    quizNumQues = 6;
  } else {
    if (conjNum[0] == 0) {
      quizNumQues = 30;
    } else {
      quizNumQues = 12;
    }
  }
  if (engExamples.length == 6) {
    quizNumQues = 6;
  }
  if (lessonLanguage == 'French' && lessonNumber == 10) {
    quizNumQues = 6;
  }
  if (typeof expressVerb !== 'undefined') {
    quizNumQues = 36;
  } ///EXPRESS VERB
  //2020 EXTRA START
  if (typeof imageBonus !== 'undefined') {
    quizNumQues = 36;
  }
  //2020 EXTRA END
  if (errorMode == true) {
    quizNumQues = errors.length;
  }
  $('#numberOfQues').text(quizNumQues);
  $('.quizPreloadTitle').html(quizTitle2);
  $('#quizPreloadDescription').text(quizDescription2);
  $('#quizStartImg, #quizPreloadMedal').css({
    'background-image': 'url(../../common/quiz' + currentSecShort + '2.svg)',
  });
  currentQuiz = 2;
  preLoadQuiz();
}

function loadQuiz3() {
  $('#keyboardBtn').hide();
  quizCombinedArray = shuffle(quizMapArray);
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong2.svg)',
  });
  $(
    '#quizSentenceContainer, #quizAllItemsC, #quizWriteImg, #quizAllItems, #noteBook, #hintTable, #quizAllItemsB, #quizMultiImg',
  ).hide();
  $('#quizAllItemsD, #textureIn').show();
  $('#quizMenu').hide();
  timerTime = 7000;
  /// SEE ACTIONS FOR TIMERWAIT
  quizNumQues = 30;
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

function loadQuiz4() {
  $('#keyboardBtn').show();
  quizCombinedArray = shuffle(quizMapArray);
  if (presType != 'individual') {
    quizCombinedArray = quizCombinedArray.concat(quizMoreArray);
  }
  if (typeof expressVerb !== 'undefined') {
    var tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    quizCombinedArray = shuffle(tempArr);
  } ///EXPRESS VERB
  //2020 EXTRA START
  if (typeof imageBonus !== 'undefined') {
    var tempArr = [];
    var asa;
    for (asa = 2; asa <= forExamples.length; asa++) {
      tempArr.push(asa);
      asa++;
    }
    quizCombinedArray = shuffle(tempArr);
  }
  //2020 EXTRA END
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong3.svg)',
  });
  findAccents();
  $(
    '#quizAllItemsB, #quizMultiImg, #quizAllItems, #quizAllItemsD, #textureIn',
  ).hide();
  $(
    '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #noteBook, #hintTable',
  ).show();
  disableTimer = true;
  $('#quizMenu').hide();
  timerTime = 20000;
  if (lessonLanguage == 'Spanish' && lessonNumber == 57) {
    quizCombinedArray = [4, 6, 8, 10, 12];
  }
  ////PORTUGUESE CHANGE START
  if (lessonLanguage == 'Portuguese' && lessonNumber == 57) {
    quizCombinedArray = [4, 6, 8, 10, 12];
  }
  ////PORTUGUESE CHANGE END
  quizNumQues = quizCombinedArray.length;
  if (errorMode == true) {
    quizNumQues = errors.length;
  }
  $('#numberOfQues').text(quizNumQues);
  $('.quizPreloadTitle').text(quizTitle4);
  $('#quizPreloadDescription').text(quizDescription4);
  $('#quizStartImg, #quizPreloadMedal').css({
    'background-image': 'url(../../common/quiz' + currentSecShort + '4.svg)',
  });
  currentQuiz = 4;
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
  ///2020 EXTRA START replace
  if (lessonNumber === 0) {
    $('#quizPreload, #quizGoBack').fadeIn(1000);
  } else {
    $('#quizPreload, #quizGoBack').show();
  }
  ///2020 EXTRA END replace
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
      if (currentQuiz != 4) {
        $('#quizTimerPointer').show();
      }
      if (currentQuiz <= 2) {
        $('#quizTimer').show();
      } else if (currentQuiz == 3) {
        $('#quizTimer').show();
      }
      resizeButtonQuizText();
      resizeQuizText();
      firstLoad();
    });
  }, 1000);
}

function firstLoad() {
  $('#quizTimer, #quizTimer2, #quizTimerPointer, #quizItself').css({
    opacity: '0',
  });
  loadQuestion();
  playSprite('blank');
  setTimeout(function () {
    $('#quizTimer, #quizTimer2, #quizItself').transition({ opacity: '1' });
    if (currentQuiz == 1) {
      disableTimer = false;
      setTimeout(function () {
        loadQuizSound();
      }, 1000);
    }
  }, 500);
}

function loadQuestion() {
  madeError = false;
  if (currentQuiz != 2) {
    setTimeout(function () {
      $('#quizTimerPointer').css({ opacity: '0' });
    }, 200);
  }
  $('#questionNum').text(currQuizNum);
  quizQuesNum = quizCombinedArray[currQuizNum - 1];
  if (errorMode == true) {
    quizQuesNum = errors[currQuizNum - 1];
  }
  quizNumArray = [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
  ];
  quizNumArray = quizNumArray.slice(0, numWords * 0.5);
  if (engExamples.length == 6) {
    quizNumArray = [2, 4, 6, 8, 10, 12];
  }
  if (typeof expressVerb !== 'undefined' && currentQuiz == 1) {
    quizNumArray = [1, 3, 5, 7, 9, 11];
  } ///EXPRESS VERB
  //Combined quiz change
  if (lessonNumber === 0) {
    quizNumArray = [
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
      40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74,
      76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100,
    ];
    quizNumArray = quizNumArray.slice(0, numWords * 0.5);
  }
  ///END
  ///2020 NEWEST START
  if (
    presType == 'keyPres' &&
    lessonLanguage == 'French' &&
    lessonNumber != 10
  ) {
    quizNumArray = [2, 12, 14, 22, 24, 26];
  } else if (presType == 'keyPres' && lessonLanguage == 'Spanish') {
    quizNumArray = [2, 12, 14, 16, 26, 28];
  }
  ////PORTUGUESE CHANGE START
  else if (presType == 'keyPres' && lessonLanguage == 'Portuguese') {
    quizNumArray = [2, 12, 14, 16, 26, 28];
  }
  ////PORTUGUESE CHANGE END
  else if (presType == 'keyPres' && lessonLanguage == 'Italian') {
    quizNumArray = [2, 12, 14, 16, 24, 26];
  } else if (presType == 'keyPres' && lessonLanguage == 'German') {
    quizNumArray = [2, 12, 14, 22, 24, 26];
  } ///2020 NEWEST END

  var position2 = quizNumArray.indexOf(quizQuesNum);
  if (~position2) {
    quizNumArray.splice(position2, 1);
  }
  setTimeout(function () {
    resizeButtonQuizText();
    resizeQuizText();
  }, 1);
  if (currentQuiz == 1) {
    quizActions1();
  } else if (currentQuiz == 2) {
    quizActions2();
  } else if (currentQuiz == 3) {
    quizActions3();
  } else if (currentQuiz == 4) {
    quizActions4();
  }
}

function quizActions1() {
  setTimeout(function () {
    maxScore = 65;
    quizPtsCount = 65;
    $('#goodAnswerIn').css({
      'background-image': 'url(../../common/score4.svg)',
    });
    $('#quizScoreImg').attr('src', '../../common/score4.svg');
  }, 2000);
  if ($('#englishWrite2').is(':visible')) {
    $('#englishWrite2').hide();
  }
  var shuffledQuiz = shuffle(quizNumArray);
  shuffledQuiz = shuffledQuiz.slice(0, 5);
  shuffledQuiz.push(quizQuesNum);
  shuffledQuiz = shuffle(shuffledQuiz);
  $('#quizItem1').val(shuffledQuiz[0]);
  $('#quizItem2').val(shuffledQuiz[1]);
  $('#quizItem3').val(shuffledQuiz[2]);
  $('#quizItem4').val(shuffledQuiz[3]);
  $('#quizItem5').val(shuffledQuiz[4]);
  $('#quizItem6').val(shuffledQuiz[5]);

  //2020 NEWEST START
  var forExamplesQuiz = forExamples.join('%%%').split('%%%');

  //2020 EXTRA START
  if (forExamplesQuiz.length == 6 && lessonLanguage == 'Spanish') {
    forExamplesQuiz.push('(ELLOS) QUERRÁN');
    forExamplesQuiz.push('');
    forExamplesQuiz.push('(ÉL) QUERRÁ');
    forExamplesQuiz.push('');
    forExamplesQuiz.push('(ELLA) QUERRÁ');
    forExamplesQuiz.push('');
  }
  //2020 EXTRA END
  else if (forExamplesQuiz.length == 6) {
    forExamplesQuiz.push('');
    forExamplesQuiz.push('');
    forExamplesQuiz.push('');
    forExamplesQuiz.push('');
    forExamplesQuiz.push('');
    forExamplesQuiz.push('');
  }

  ///EXPRESS VERB
  if (typeof expressVerb === 'undefined') {
    $('#quizItem1').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[0] - 2] + ')',
    });
    $('#quizItem2').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[1] - 2] + ')',
    });
    $('#quizItem3').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[2] - 2] + ')',
    });
    $('#quizItem4').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[3] - 2] + ')',
    });
    $('#quizItem5').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[4] - 2] + ')',
    });
    $('#quizItem6').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[5] - 2] + ')',
    });
    $('#quizEng1').html(
      forExamplesQuiz[shuffledQuiz[0] - 2] +
        "<br><span style='font-size: 14px; color:grey;'>" +
        engExamplesQuiz[shuffledQuiz[0] - 2] +
        '</span>',
    );
    $('#quizEng2').html(
      forExamplesQuiz[shuffledQuiz[1] - 2] +
        "<br><span style='font-size: 14px; color:grey;'>" +
        engExamplesQuiz[shuffledQuiz[1] - 2] +
        '</span>',
    );
    $('#quizEng3').html(
      forExamplesQuiz[shuffledQuiz[2] - 2] +
        "<br><span style='font-size: 14px; color:grey;'>" +
        engExamplesQuiz[shuffledQuiz[2] - 2] +
        '</span>',
    );
    $('#quizEng4').html(
      forExamplesQuiz[shuffledQuiz[3] - 2] +
        "<br><span style='font-size: 14px; color:grey;'>" +
        engExamplesQuiz[shuffledQuiz[3] - 2] +
        '</span>',
    );
    $('#quizEng5').html(
      forExamplesQuiz[shuffledQuiz[4] - 2] +
        "<br><span style='font-size: 14px; color:grey;'>" +
        engExamplesQuiz[shuffledQuiz[4] - 2] +
        '</span>',
    );
    $('#quizEng6').html(
      forExamplesQuiz[shuffledQuiz[5] - 2] +
        "<br><span style='font-size: 14px; color:grey;'>" +
        engExamplesQuiz[shuffledQuiz[5] - 2] +
        '</span>',
    );
    //2020 NEWEST END
  } else {
    $('#quizEng1').html(engExamplesQuiz[shuffledQuiz[0] - 1]);
    $('#quizEng2').html(engExamplesQuiz[shuffledQuiz[1] - 1]);
    $('#quizEng3').html(engExamplesQuiz[shuffledQuiz[2] - 1]);
    $('#quizEng4').html(engExamplesQuiz[shuffledQuiz[3] - 1]);
    $('#quizEng5').html(engExamplesQuiz[shuffledQuiz[4] - 1]);
    $('#quizEng6').html(engExamplesQuiz[shuffledQuiz[5] - 1]);
    $('#quizItem1').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[0] - 1] + ')',
    });
    $('#quizItem2').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[1] - 1] + ')',
    });
    $('#quizItem3').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[2] - 1] + ')',
    });
    $('#quizItem4').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[3] - 1] + ')',
    });
    $('#quizItem5').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[4] - 1] + ')',
    });
    $('#quizItem6').css({
      'background-image': 'url(' + imageArray[shuffledQuiz[5] - 1] + ')',
    });
  }
  ///EXPRESS VERB
}

function quizActions2() {
  if (!$('#puzzleBack').is(':visible')) {
    $('#puzzleBack').fadeIn();
  }

  ///2020 EXTRA
  if (extraTime == false) {
    if (
      currQuizNum == 7 ||
      currQuizNum == 13 ||
      currQuizNum == 19 ||
      currQuizNum == 25 ||
      currQuizNum == 31
    ) {
      extraTime = true;
      setTimeout(function () {
        quizActions2();
        $('.timerMeter > .timerSpan').stop();
        $('.timerMeter > .timerSpan').css({ width: 0 });
        setTimeout(resizeQuizText, 10);
      }, 2000);
      $('.timerMeter > .timerSpan').css({ height: '20px' });
      $('.timerMeter > .timerSpan').each(function () {
        $(this)
          .width(0)
          .animate({ width: $('.timerMeter').width() }, 2000);
      });
      return;
    } else {
      extraTime = false;
    }
  } else {
    extraTime = false;
  }
  ///2020 EXTRA

  setTimeout(function () {
    maxScore = 65;
    quizPtsCount = 65;
    $('#goodAnswerIn').css({
      'background-image': 'url(../../common/score4.svg)',
    });
    $('#quizScoreImg').attr('src', '../../common/score4.svg');
  }, 1000);

  ///EXPRESS VERB
  ///2020 EXTRA START REPLACE
  if (typeof imageBonus !== 'undefined') {
    if (currQuizNum == 1) {
      theConj = conjShuffle[0];
      $('#quizMultiImg').css({
        'background-image': 'url(' + imageArray[theConj * 2 - 2] + ')',
      });
      placePuzzle();
    } else if (currQuizNum == 7) {
      theConj = conjShuffle[1];
      $('#quizMultiImg').css({
        'background-image': 'url(' + imageArray[theConj * 2 - 2] + ')',
      });
      placePuzzle();
    } else if (currQuizNum == 13) {
      theConj = conjShuffle[2];
      $('#quizMultiImg').css({
        'background-image': 'url(' + imageArray[theConj * 2 - 2] + ')',
      });
      placePuzzle();
    } else if (currQuizNum == 19) {
      theConj = conjShuffle[3];
      $('#quizMultiImg').css({
        'background-image': 'url(' + imageArray[theConj * 2 - 2] + ')',
      });
      placePuzzle();
    } else if (currQuizNum == 25) {
      theConj = conjShuffle[4];
      $('#quizMultiImg').css({
        'background-image': 'url(' + imageArray[theConj * 2 - 2] + ')',
      });
      placePuzzle();
    } else if (currQuizNum == 31) {
      theConj = conjShuffle[5];
      $('#quizMultiImg').css({
        'background-image': 'url(' + imageArray[theConj * 2 - 2] + ')',
      });
      placePuzzle();
    } else {
      timerWait = 500;
    }
  } else if (typeof expressVerb === 'undefined') {
    ///2020 EXTRA END REPLACE
    if (currQuizNum == 1) {
      theConj = conjNum[2];
      placePuzzle();
    } else if (currQuizNum == 7) {
      if (conjNum[0] == 0) {
        theConj = 2;
      } else {
        theConj = conjNum[8];
      }
      placePuzzle();
    } else if (currQuizNum == 13) {
      theConj = 3;
      placePuzzle();
    } else if (currQuizNum == 19) {
      theConj = 4;
      placePuzzle();
    } else if (currQuizNum == 25) {
      theConj = 5;
      placePuzzle();
    } else {
      timerWait = 500;
    }
  } else {
    if (currQuizNum == 1) {
      theConj = 0;
      $('#quizMultiImg').css({
        'background-image': 'url(' + oPath + 'images/pic1.jpg)',
      });
      placePuzzle();
    } else if (currQuizNum == 7) {
      theConj = 1;
      $('#quizMultiImg').css({
        'background-image': 'url(' + oPath + 'images/pic2.jpg)',
      });
      placePuzzle();
    } else if (currQuizNum == 13) {
      theConj = 2;
      $('#quizMultiImg').css({
        'background-image': 'url(' + oPath + 'images/pic3.jpg)',
      });
      placePuzzle();
    } else if (currQuizNum == 19) {
      theConj = 3;
      $('#quizMultiImg').css({
        'background-image': 'url(' + oPath + 'images/pic4.jpg)',
      });
      placePuzzle();
    } else if (currQuizNum == 25) {
      theConj = 4;
      $('#quizMultiImg').css({
        'background-image': 'url(' + oPath + 'images/pic5.jpg)',
      });
      placePuzzle();
    } else if (currQuizNum == 31) {
      theConj = 5;
      $('#quizMultiImg').css({
        'background-image': 'url(' + oPath + 'images/pic6.jpg)',
      });
      placePuzzle();
    } else {
      timerWait = 500;
    }
  }
  ///EXPRESS VERB

  quizTimerAnimate();
}

function placePuzzle() {
  timerWait = 3000;
  $('#quizAllItemsB').css({ opacity: 0 });
  $('#quizAllItemsB').html(puzzHTML);

  ///2020 EXTRA START REPLACE
  if (typeof imageBonus === 'undefined') {
    var infVerb2 = '';
    if (lessonTitle.indexOf(' (') != -1) {
      infVerb2 = lessonTitle.split(' (');
      infVerb2 = infVerb2[1];
      infVerb2 = infVerb2.split(')');
      infVerb2 = ' (' + infVerb2[0].toLowerCase() + ')';
    }
    if (conjNum.length < 15) {
      $('#puzzleTitle').html(
        infVerb + infVerb2 + ': ' + conjTitlesPuzz[theConj],
      );
    } else {
      $('#puzzleTitle').html(infVerb + infVerb2 + ': ' + 'Present');
    }
  } else {
    $('#puzzleTitle').html(
      forExamples[theConj * 2 - 2] + ' (' + engExamples[theConj * 2 - 2] + ')',
    );
    $('g g').css({ opacity: '1' });
    puzArr = puzzleArray.slice();
  }
  ///2020 EXTRA END REPLACE

  ///EXPRESS VERB
  if (typeof expressVerb !== 'undefined') {
    $('g g').css({ opacity: '1' });
    puzArr = puzzleArray.slice();
    if (currQuizNum == 1) {
      $('#puzzleTitle').html(
        forExamples[0].split('</strong>').join('').split('<strong>').join(''),
      );
    } else if (currQuizNum == 7) {
      $('#puzzleTitle').html(
        forExamples[2].split('</strong>').join('').split('<strong>').join(''),
      );
    } else if (currQuizNum == 13) {
      $('#puzzleTitle').html(
        forExamples[4].split('</strong>').join('').split('<strong>').join(''),
      );
    } else if (currQuizNum == 19) {
      $('#puzzleTitle').html(
        forExamples[6].split('</strong>').join('').split('<strong>').join(''),
      );
    } else if (currQuizNum == 25) {
      $('#puzzleTitle').html(
        forExamples[8].split('</strong>').join('').split('<strong>').join(''),
      );
    } else if (currQuizNum == 31) {
      $('#puzzleTitle').html(
        forExamples[10].split('</strong>').join('').split('<strong>').join(''),
      );
    }
  }
  ///EXPRESS VERB END

  $('#quizAllItemsB').animate({ opacity: 1 });
  loadDrag();
  if (
    lessonLanguage == 'French' &&
    vowels.indexOf(window['quizConj' + theConj][0].charAt(0)) != -1
  ) {
    $('#puzz1AText').text("j'");
  } else {
    $('#puzz1AText').text(puzzPron[0]);
  }

  ///2018CHANGE
  if (lessonTitle.indexOf('mperative') != -1 && lessonLanguage == 'French') {
    $('#puzz1AText').text(puzzPron[0]);
  }
  ///2018CHANGE

  $('#puzz2AText').text(puzzPron[1]);
  $('#puzz3AText').text(puzzPron[2]);
  $('#puzz4AText').text(puzzPron[3]);
  $('#puzz5AText').text(puzzPron[4]);
  $('#puzz6AText').text(puzzPron[5]);
  $('.puzzLeft1').css({ 'background-position': 'left 66.666666%' });
  $('.puzzLeft2').css({ 'background-position': 'right 0%', right: '110px' });
  $('.puzzRight1').css({ 'background-position': 'left 0%' });
  $('.puzzRight2').css({ 'background-position': 'right 66.666666%' });
  $('.puzzQues').droppable('option', 'disabled', false);
  $('.puzzAnswer').show();
  $('#puzzle1A').val(window['quizConj' + theConj][0]);
  $('#puzzle2A').val(window['quizConj' + theConj][1]);
  $('#puzzle3A').val(window['quizConj' + theConj][2]);
  $('#puzzle4A').val(window['quizConj' + theConj][3]);
  $('#puzzle5A').val(window['quizConj' + theConj][4]);
  $('#puzzle6A').val(window['quizConj' + theConj][5]);
  puzzPos = shuffle(puzzPos);

  $('#puzzle1B').css({ top: puzzPos[0] });
  $('#puzzle2B').css({ top: puzzPos[1] });
  $('#puzzle3B').css({ top: puzzPos[2] });
  $('#puzzle4B').css({ top: puzzPos[3] });
  $('#puzzle5B').css({ top: puzzPos[4] });
  $('#puzzle6B').css({ top: puzzPos[5] });
  $('#puzz1BText').text(window['quizConj' + theConj][0]);
  $('#puzz2BText').text(window['quizConj' + theConj][1]);
  $('#puzz3BText').text(window['quizConj' + theConj][2]);
  $('#puzz4BText').text(window['quizConj' + theConj][3]);
  $('#puzz5BText').text(window['quizConj' + theConj][4]);
  $('#puzz6BText').text(window['quizConj' + theConj][5]);
}

function removePuzzle() {
  ///EXPRESS VERB
  ///2020 EXTRA START REPLACE
  if (typeof expressVerb === 'undefined' && typeof imageBonus === 'undefined') {
    ///2020 EXTRA END REPLACE
    var numLeftOver = 30 % quizNumQues;
    var removalNum;
    if (numLeftOver == 0) {
      removalNum = 30 / quizNumQues;
      numLeftOver = removalNum;
    } else {
      removalNum = (30 - numLeftOver) / quizNumQues;
    }
    if (currQuizNum == 1) {
      removalNum = numLeftOver;
    }
    for (var num = 1; num <= removalNum; num++) {
      var puzOut = puzzleArray.pop();
      $('#puz' + puzOut).css({ opacity: '0' });
    }
  } else {
    for (var num = 1; num <= 5; num++) {
      var puzOut = puzArr.pop();
      $('#puz' + puzOut).css({ opacity: '0' });
    }
  }
  ///EXPRESS VERB END
}

function quizActions3() {
  ///2020 EXTRA
  if (extraTime == false) {
    if (
      currQuizNum == 6 ||
      currQuizNum == 11 ||
      currQuizNum == 16 ||
      currQuizNum == 21 ||
      currQuizNum == 26
    ) {
      extraTime = true;
      setTimeout(function () {
        quizActions3();
        $('.timerMeter > .timerSpan').stop();
        $('.timerMeter > .timerSpan').css({ width: 0 });
        setTimeout(resizeQuizText, 10);
      }, 2500);
      $('.timerMeter > .timerSpan').css({ height: '20px' });
      $('.timerMeter > .timerSpan').each(function () {
        $(this)
          .width(0)
          .animate({ width: $('.timerMeter').width() }, 2500);
      });
      return;
    } else {
      extraTime = false;
    }
  } else {
    extraTime = false;
  }
  ///2020 EXTRA

  setTimeout(function () {
    maxScore = 65;
    quizPtsCount = 65;
    $('#goodAnswerIn').css({
      'background-image': 'url(../../common/score4.svg)',
    });
    $('#quizScoreImg').attr('src', '../../common/score4.svg');
  }, 1000);
  if (currQuizNum == 1) {
    theConj = 0;
    placeBooks();
  } else if (currQuizNum == 6) {
    theConj = 1;
    placeBooks();
  } else if (currQuizNum == 11) {
    theConj = 2;
    placeBooks();
  } else if (currQuizNum == 16) {
    theConj = 3;
    placeBooks();
  } else if (currQuizNum == 21) {
    theConj = 4;
    placeBooks();
  } else if (currQuizNum == 26) {
    theConj = 5;
    placeBooks();
  } else {
    timerWait = 1000;
  }
  quizTimerAnimate();
}

function placeBooks() {
  timerWait = 3000;

  $('#quizAllItemsD').css({ opacity: 0 });
  $('#quizAllItemsD').animate({ opacity: 1 });
  $('#quizAllItemsD').html(bookHTML);
  $('#shelf1 .shelvesLabel').html(conjTitles[1]);
  $('#shelf2 .shelvesLabel').html(conjTitles[2]);
  $('#shelf3 .shelvesLabel').html(conjTitles[3]);
  $('#shelf4 .shelvesLabel').html(conjTitles[4]);
  $('#shelf5 .shelvesLabel').html(conjTitles[5]);
  loadDrag2();
  $('.shelves').droppable('option', 'disabled', false);
  $('.books').show();
  shelfArray = ['1', '2', '3', '4', '5'];
  shelfArray = shuffle(shelfArray);
  $('#shelf1').val(forConj1[theConj]);
  $('#shelf2').val(forConj2[theConj]);
  $('#shelf3').val(forConj3[theConj]);
  $('#shelf4').val(forConj4[theConj]);
  $('#shelf5').val(forConj5[theConj]);
  $('#book1').html(window['forConj' + shelfArray[0]][theConj]);
  $('#book2').html(window['forConj' + shelfArray[1]][theConj]);
  $('#book3').html(window['forConj' + shelfArray[2]][theConj]);
  $('#book4').html(window['forConj' + shelfArray[3]][theConj]);
  $('#book5').html(window['forConj' + shelfArray[4]][theConj]);
  $('#book1B').html(forConj1[theConj]);
  $('#book2B').html(forConj2[theConj]);
  $('#book3B').html(forConj3[theConj]);
  $('#book4B').html(forConj4[theConj]);
  $('#book5B').html(forConj5[theConj]);
  $('#book' + shelfArray[0] + 'B').css({
    'background-image': 'url(../../common/book1.svg)',
  });
  $('#book' + shelfArray[1] + 'B').css({
    'background-image': 'url(../../common/book2.svg)',
  });
  $('#book' + shelfArray[2] + 'B').css({
    'background-image': 'url(../../common/book3.svg)',
  });
  $('#book' + shelfArray[3] + 'B').css({
    'background-image': 'url(../../common/book4.svg)',
  });
  $('#book' + shelfArray[4] + 'B').css({
    'background-image': 'url(../../common/book5.svg)',
  });
}

function quizActions4() {
  $('#quizSentenceFor, #quizSentenceEng').hide();
  setTimeout(function () {
    maxScore = 65;
    quizPtsCount = 65;
  }, 2000);
  submitted = false;
  $('#specialChars').show();
  $('#hintTable').show();
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
  if (
    currQuizNum <= forExamples.length * 0.5 ||
    typeof expressVerb !== 'undefined'
  ) {
    ///EXPRESS
    var quizCurrSent = forExamples[quizQuesNum - 1]
      .split('<strong></strong>')
      .join('')
      .split('<strong> </strong>')
      .join('')
      .split('</strong> <strong>')
      .join(' ');
    if (quizCurrSent.charAt(0) == '%') {
      quizCurrSent = quizCurrSent.split('%');
      quizCurrSent = quizCurrSent[2];
    }
    quizWord = quizCurrSent.split('</strong>');
    quizWord = quizWord[quizWord.length - 2];
    quizWord = quizWord
      .split("j'")
      .join("j' ")
      .split("J'")
      .join("J' ")
      .split('<strong>');
    quizWord = quizWord[quizWord.length - 1].split(' ');
    ///START GERMAN EXCEPTION
    var tempWord = '';
    var tempWord2 = '';
    var tempNum = Math.floor(Math.random() * 2);
    if (conjNum[quizQuesNum - 1] < 4) {
      tempNum = 0;
    }
    if (lessonLanguage == 'German' && tempNum == 1) {
      for (var i = writeArr2.length - 1; i >= 0; --i) {
        if (quizCurrSent.indexOf(writeArr2[i]) != -1) {
          tempWord = writeArr2[i];
          tempWord2 = writeArr3[i];
        }
      }
    }
    ///END GERMAN EXCEPTION

    if (quizWord.length > 1) {
      if (writeArr.indexOf(quizWord[quizWord.length - 2].toLowerCase()) != -1) {
        quizWord[quizWord.length - 1] =
          quizWord[quizWord.length - 2] + ' ' + quizWord[quizWord.length - 1];
      }
    }
    quizWord = quizWord[quizWord.length - 1].split('<strong>').join('');
    quizWord = quizWord.replace('¡', '').replace('¿', '');

    ///START GERMAN EXCEPTION
    if (tempWord != '') {
      quizWord = tempWord
        .split('<strong>')
        .join('')
        .split('</strong>')
        .join('');
    }
    ///END GERMAN EXCEPTION

    writtenString = quizWord;
    subChars = '';

    for (var num = 0; num < quizWord.length; num++) {
      if (quizWord.charAt(num) != ' ') {
        subChars = subChars + '_';
      } else {
        subChars = subChars + ' ';
      }
    }
    $('#quizSentenceFor').html(
      quizCurrSent.split(quizWord + '</strong>').join(subChars + '</strong>'),
    );

    ///START GERMAN EXCEPTION
    if (tempWord != '') {
      $('#quizSentenceFor').html(quizCurrSent.split(tempWord).join(tempWord2));
    }
    ///END GERMAN EXCEPTION

    var currTense = '';
    ///START GERMAN EXCEPTION check if function add else
    if (
      lessonLanguage == 'German' &&
      lessonNumber >= 22 &&
      lessonNumber <= 29
    ) {
    } else if (conjNum[quizQuesNum - 1] == 3 || conjNum[quizQuesNum - 1] == 2) {
      currTense = ' (' + conjTitles[conjNum[quizQuesNum - 1]] + ')';
    }
    ///END GERMAN EXCEPTION

    ///2020 EXTRA START
    if (typeof imageBonus !== 'undefined') {
      currTense = '';
    }
    if (
      lessonNumber == 0 &&
      engExamples[quizQuesNum - 1].charAt(
        engExamples[quizQuesNum - 1].length - 1,
      ) == ')'
    ) {
      currTense = '';
    }
    ///2020 EXTRA END

    $('#quizSentenceEng').html(engExamples[quizQuesNum - 1] + currTense);
  } else {
    quizWord = quizForExamples[quizQuesNum - 1]
      .split('<strong></strong>')
      .join('')
      .split('<strong> </strong>')
      .join('')
      .split('</strong> <strong>')
      .join(' ')
      .split('</strong>');
    quizWord = quizWord[quizWord.length - 2];
    quizWord = quizWord
      .split("j'")
      .join("j' ")
      .split("J'")
      .join("J' ")
      .split('<strong>');
    quizWord = quizWord[quizWord.length - 1].split(' ');
    if (quizWord.length > 1) {
      if (writeArr.indexOf(quizWord[quizWord.length - 2].toLowerCase()) != -1) {
        quizWord[quizWord.length - 1] =
          quizWord[quizWord.length - 2] + ' ' + quizWord[quizWord.length - 1];
      }
    }
    quizWord = quizWord[quizWord.length - 1].split('<strong>').join('');
    quizWord = quizWord.replace('¡', '').replace('¿', '');
    writtenString = quizWord;
    subChars = Array(quizWord.length + 1).join('_');
    $('#quizSentenceFor').html(
      quizForExamples[quizQuesNum - 1]
        .split(quizWord + '</strong>')
        .join(subChars + '</strong>'),
    );
    $('#quizSentenceEng').html(quizEngExamples[quizQuesNum - 1]);
  }

  $('em, strong').css({ color: '#ebbc31' });
  for (var num = 0; num < articleArray.length; num++) {
    if (writtenString.indexOf(articleArray[num]) == 0) {
      foundArticle = articleArray[num];
    }
  }
  ////END FOR
  if (foundArticle != '') {
    quizGoodAnswer = writtenString.split(foundArticle).join('');
    wArr = quizGoodAnswer.split('');
  } else {
    quizGoodAnswer = writtenString;
    wArr = writtenString.split('');
  }
  quizGoodPunct = quizGoodAnswer
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
    .join('');
  allLetters = quizGoodPunct.split(' ').join('').split('');
  timerTime = 8000 + allLetters.length * 800;
  for (var num = 0; num < allChars.length; num++) {
    if (quizGoodPunct.indexOf(allChars[num]) != -1) {
      timerTime = timerTime + 3000;
    }
  }
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
        quizDisplayAnswer + '<span class="spanBlank">&nbsp;</span>';
    } else if (
      wArr[num] == '.' ||
      wArr[num] == '?' ||
      wArr[num] == '!' ||
      wArr[num] == "'" ||
      wArr[num] == ',' ||
      wArr[num] == '¡' ||
      wArr[num] == '¿' ||
      wArr[num] == '-' ||
      wArr[num] == '_'
    ) {
      quizDisplayAnswer =
        quizDisplayAnswer + '<span class="spanBlank">' + wArr[num] + '</span>';
    } else if (wArr[num] == 'i' || wArr[num] == 'I' || wArr[num] == 'l') {
      quizDisplayAnswer =
        quizDisplayAnswer +
        '<span id="letter' +
        letterNum +
        '" class="allLetters"><i class="invisible">' +
        wArr[num] +
        '&nbsp;</i></span>';
      letterNum++;
    } else {
      quizDisplayAnswer =
        quizDisplayAnswer +
        '<span id="letter' +
        letterNum +
        '" class="allLetters"><i class="invisible">' +
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
  $('#englishWrite').html(engExamples[quizQuesNum - 1]);
  ///EXPRESS VERB
  if (typeof expressVerb === 'undefined') {
    if (currQuizNum <= forExamples.length * 0.5) {
      $('#quizWriteImg').css({
        'background-image': 'url(' + imageArray[quizQuesNum - 2] + ')',
      });
    } else {
      $('#quizWriteImg').css({
        'background-image': 'url(' + imageArray2[quizQuesNum - 1] + ')',
      });
    }
  } else {
    $('#quizWriteImg').css({
      'background-image': 'url(' + imageArray[quizQuesNum - 1] + ')',
    });
  }
  ///EXPRESS VERB END
  if (currentDevice != 'mobile' || externalKeyboard == true) {
    focused = true;
    $('#writeAnswerField').focus();
  }
  if (checkAccent == true) {
    findAccent();
  }
  setTimeout(resizeQuizText, 10);
  $('#quizSentenceFor, #quizSentenceEng').fadeIn();

  /////MAKE SCRAMBLE
  scrambled = quizGoodPunct.split(' ');
  for (var num = 0; num < scrambled.length; num++) {
    var scrambledWord = scrambled[num].split('');
    scrambled[num] = shuffle(scrambledWord);
  }
  scrambled = scrambled.join().split(',');
  ///END MAKE SCRAMBLE
  if (localStorage.getItem(storeInfo + 'noGap') == 'ON') {
    $('#writtenAnswer span').addClass('noGap');
  }
}
///2023 START
function showHint1(message) {
  ///2023 END
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
  loadQuizSound2();
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
  var exampleString = forExamples.join('');
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

///////////CHECK ANSWER CLICK
function checkClickAnswer(clicker) {
  setTimeout(function () {
    clicker.addClass('mobileClick');
    setTimeout(function () {
      clicker.removeClass('mobileClick');
    }, 200);
  }, 1);

  clearTimeout(soundTime);
  if (clicker.val() == quizQuesNum) {
    $('#mainSound').trigger('pause');
    ///2023 START
    $('#quizItself').css({ 'pointer-events': 'none' });
    setTimeout(function () {
      $('#quizItself').css({ 'pointer-events': 'auto' });
    }, 500);
    ///2023 END
    $('#quizTimerPointer').stop();
    clearTimeout(timerDelay);
    setTimeout(function () {
      $('#quizTimerPointer').stop();
      clearTimeout(timerDelay);
    }, 200);
    currentPts = currentPts + quizPtsCount;
    $('#currentScore').text(currentPts);
    $('#quizItself').css({ opacity: '0' });
    $('#quizTimerPointer').css({ opacity: '0' });
    currQuizNum++;
    playSprite('quizGood');
    ///2023 START
    $('#wrongAnswer, #goodAnswer, #goodAnswerPic').stop(true, true);
    $('#wrongAnswer').css({ opacity: '0' });
    $('#goodAnswerPic, #goodAnswer').css({ opacity: '1' });
    if (currQuizNum != quizNumQues + 1) {
      loadQuestion();
      setTimeout(function () {
        $('#quizItself').animate({ opacity: '1' });
      }, 100);
      setTimeout(function () {
        disableTimer = false;
        loadQuizSound();
        $('#goodAnswerPic, #goodAnswer').animate({ opacity: '0' });
      }, 700);
    } else {
      setTimeout(function () {
        $('#goodAnswerPic, #goodAnswer').css({ opacity: '0' });
      }, 1000);
      if (currentQuiz == 4) {
        $('#quizDoneSentence').hide();
      } else {
        $('#quizDoneSentence').show();
      }
      doneQuiz();
    }
    ///2023 END
  } else {
    if (currentQuiz == 1) {
      disableTimer = true;
      soundTime = setTimeout(function () {
        loadQuizSound();
      }, 1000);
    }
    currentErrors++;
    if (errors.indexOf(quizQuesNum) == -1) {
      errors.push(quizQuesNum);
    }
    $('#currentErrors').text(currentErrors);
    if (!madeError) {
      currentPts = currentPts - 50;
      $('#wrongAnswerPic').addClass('opacityAnimate');
      setTimeout(function () {
        $('#wrongAnswerPic').removeClass('opacityAnimate');
      }, 2100);
      $('#currentScore').text(currentPts);
      madeError = true;
    }
    playSprite('quizBad');
    $('#wrongAnswer, #goodAnswer').stop(true, true);
    $('#goodAnswer').css({ opacity: '0' });
    $('#wrongAnswer').css({ opacity: '1' });
    setTimeout(function () {
      $('#wrongAnswer').transition({ opacity: '0' });
    }, 1000);
  }
}

///////////CHECK WRITTEN ANSWER
function checkWrittenAnswer() {
  if ($('#writeAnswerField').val() == '' && quizGoodAnswer != '') {
    return;
  }
  if ($('#writeError2').is(':visible')) {
    $('#writeAnswerField').val(quizGoodAnswer);
  }
  var goodAnswer = quizGoodPunct
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
    .join('');
  var writtenNoAccent = removeAccent(writtenAnswer);

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

  var perCheck = 1;
  //2020 EXTRA START
  if (
    lessonNumber < 1 ||
    typeof expressVerb !== 'undefined' ||
    typeof imageBonus !== 'undefined'
  ) {
    perCheck = 0.8;
  }
  //2020 EXTRA END

  if (goodAnswer == writtenAnswer) {
    if (currentDevice == 'mobile' && externalKeyboard == false) {
      focused = false;
      $('#writeAnswerField').blur();
    }
    if (submitted) {
      return;
    } else {
      submitted = true;
    }

    ///2018CHANGE
    if (
      currQuizNum <= forExamples.length * 0.5 ||
      typeof expressVerb !== 'undefined'
    ) {
      ///2018CHANGE
      var quizCurrSent = forExamples[quizQuesNum - 1];
      if (quizCurrSent.charAt(0) == '%') {
        quizCurrSent = quizCurrSent.split('%');
        quizCurrSent = quizCurrSent[2];
      }
      $('#quizSentenceFor').html(quizCurrSent);
      resizeQuizText();
    } //new code
    else {
      $('#quizSentenceFor').html(quizForExamples[quizQuesNum - 1]);
      resizeQuizText();
    } //new code
    $('strong').css({ color: '#ebbc31' });
    currentPts = currentPts + 65;
    $('#currentScore').text(currentPts);
    currQuizNum++;
    playSprite('quizGood');
    $('#wrongAnswer, #goodAnswer').stop(true, true);
    $('#wrongAnswer').css({ opacity: '0' });
    $('#wrongAnswerPic').removeClass('opacityAnimate');
    $('#goodAnswer').css({ opacity: '1' });
    setTimeout(function () {
      $('#goodAnswer').transition({ opacity: '0' });
      disableTimer = false;
      loadQuizSound();
    }, 700);
    var goodNoSpace = quizGoodPunct.split(' ').join('');
    for (var num = 0; num < goodNoSpace.length; num++) {
      $('#letter' + num).html(goodNoSpace[num]);
    }
  } else if (goodNoAccent == writtenNoAccent) {
    if (currentDevice == 'mobile' && externalKeyboard == false) {
      focused = false;
      $('#writeAnswerField').blur();
    }
    ///2018CHANGE
    if (
      currQuizNum <= forExamples.length * 0.5 ||
      typeof expressVerb !== 'undefined'
    ) {
      var quizCurrSent = forExamples[quizQuesNum - 1];
      ///2018CHANGE
      if (quizCurrSent.charAt(0) == '%') {
        quizCurrSent = quizCurrSent.split('%');
        quizCurrSent = quizCurrSent[2];
      }
      $('#quizSentenceFor').html(quizCurrSent);
      resizeQuizText();
    } //new code
    else {
      $('#quizSentenceFor').html(quizForExamples[quizQuesNum - 1]);
      resizeQuizText();
    } //new code
    $('strong').css({ color: '#ebbc31' });
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
    $('#hintTable, .boardTop, #specialChars').hide();
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
  else if (goodPercent >= perCheck) {
    if (currentDevice == 'mobile' && externalKeyboard == false) {
      focused = false;
      $('#writeAnswerField').blur();
    }
    ///2018CHANGE
    if (
      currQuizNum <= forExamples.length * 0.5 ||
      typeof expressVerb !== 'undefined'
    ) {
      var quizCurrSent = forExamples[quizQuesNum - 1];
      ///2018CHANGE
      if (quizCurrSent.charAt(0) == '%') {
        quizCurrSent = quizCurrSent.split('%');
        quizCurrSent = quizCurrSent[2];
      }
      $('#quizSentenceFor').html(quizCurrSent);
      resizeQuizText();
    } //new code
    else {
      $('#quizSentenceFor').html(quizForExamples[quizQuesNum - 1]);
      resizeQuizText();
    } //new code
    $('strong').css({ color: '#ebbc31' });
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
      'Very&nbsp;close! But&nbsp;watch&nbsp;your&nbsp;spelling...',
    );
    $('#hintTable, .boardTop, #specialChars').hide();
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
    currentErrors++;
    ///2018CHANGE
    if (typeof expressVerb !== 'undefined') {
      if (errors.indexOf(quizQuesNum) == -1) {
        errors.push(quizQuesNum);
      }
    } else {
      if (
        errors.indexOf(quizQuesNum) == -1 &&
        currQuizNum <= forExamples.length * 0.5
      ) {
        errors.push(quizQuesNum);
      }
    }
    ///2018CHANGE
    $('#currentErrors').text(currentErrors);
    $('#goodAnswer').stop(true, true);
    $('#goodAnswer').css({ opacity: '0' });
    ///ADJUST ERRORS
    if ($('#wrongLogo2').is(':visible')) {
      showHint1();
      $('#boardMain').addClass('topAlign');
      $('#writeError').html(
        'Oops!&nbsp;Here&nbsp;is&nbsp;the right&nbsp;answer...',
      );
      $('#hintTable, .boardTop, #specialChars').hide();
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
      $('#wrongAnswerPic, #wrongAnswer').addClass('opacityAnimate');
      setTimeout(function () {
        $('#wrongAnswerPic, #wrongAnswer').removeClass('opacityAnimate');
      }, 2100);
      $('#currentScore').text(currentPts);
      madeError = true;
    }
  }
  ////END WRONG ANSWER
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

  ///2020 EXTRA START
  $('#dictBtn').show();
  ///2020 EXTRA END
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
  $('#pronounWarn').hide();
  //2018CHANGE
  if (lessonLanguage == 'French') {
    $('#starConjWarn').html(
      "<img src='../../common/warning.svg' style='width: 25px;'>Learn more about the French impersonal pronoun.",
    );
    $('.starQuestion').attr('src', '../../common/warning.svg');
  }
  $('#starConjWarn').show();
  if (lessonTitle.indexOf('mperative') != -1) {
    $('.starQuestion, #pronounWarn, #starConjWarn').hide();
  }
  //2018CHANGE
  if ($('#pauseWrap').is(':visible')) {
    $('#pauseWrap').hide();
  }
  $('#verbBanner').css({ display: 'inline-block' });
  $('.closeWinBtn, .closeWinBtn2, .closeWinBtn3').html(closeWin);
  $('#conjTitleFor').html(
    '<img class="flagIcon" src="../../common/flagIcon.svg">' + lessonLanguage,
  );
  if ($('#quizTimerPointer').is(':visible')) {
    $('#quizTimerPointer').stop(true, true);
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
    resizeTitle();
    $('#endWrap').stop();
    $('#endWrap').hide();
    $('.ouinoContent').stop().animate({ opacity: '1' }, 2);
    $('.ouinoContent').show();
    $('.ouinoContent').css({ visibility: 'visible' });
    playSprite('transition');
    currentWordNum = 0;
  }

  changeWord();
  resizePage();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD BUTTON LISTENERS
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

  $('#conjOpen').on('click', function () {
    $('.menuConj').toggleClass('centerDiv');
  });
  $('.closeWinBtn3').on('click', function () {
    $('.menuConj').removeClass('centerDiv');
  });
  $('.closeWinBtn, #verbWrap').on('click', function () {
    $('.menuVerb').removeClass('centerDiv');
    $('#verbWrap').hide();
    playPres();
  });
  $('#verbBanner1, #verbBanner1B').on('click', function () {
    $('#menuVerbContent').html(typeText);
    resizeVerbMenu();
    if (!$('#menuVerbContent').hasClass('centerDiv')) {
      $('.menuVerb').addClass('centerDiv');
      $('#verbWrap').show();
      pausePres();
    }
  });
  $('#verbBanner2, #verbBanner2B').on('click', function () {
    $('#menuVerbContent').html(addText);
    resizeVerbMenu();
    if (!$('#menuVerbContent').hasClass('centerDiv')) {
      $('.menuVerb').addClass('centerDiv');
      $('#verbWrap').show();
      pausePres();
    }
  });
  $('#verbBanner3, #verbBanner3B').on('click', function () {
    $('#menuVerbContent').html(stemText);
    resizeVerbMenu();
    if (!$('#menuVerbContent').hasClass('centerDiv')) {
      $('.menuVerb').addClass('centerDiv');
      $('#verbWrap').show();
      pausePres();
    }
  });
  $('#verbBanner4, #verbBanner4B').on('click', function () {
    $('#menuVerbContent').html(pronoText);
    resizeVerbMenu();
    if (!$('#menuVerbContent').hasClass('centerDiv')) {
      $('.menuVerb').addClass('centerDiv');
      $('#verbWrap').show();
      pausePres();
    }
  });
  $('#verbQuestion').on('click', function () {
    if (conjNum[currentWordNum] == 2) {
      $('#menuVerbContent').html(pastText1);
    } else if (conjNum[currentWordNum] == 3) {
      $('#menuVerbContent').html(pastText2);
    }
    resizeVerbMenu();
    if (!$('#menuVerbContent').hasClass('centerDiv')) {
      $('.menuVerb').addClass('centerDiv');
      $('#verbWrap').show();
      pausePres();
    }
  });

  $('.starQuestion, #starConjWarn').on('click', function () {
    $('#menuVerbContent').html(personText);
    resizeVerbMenu();
    if (!$('#menuVerbContent').hasClass('centerDiv')) {
      $('.menuVerb').addClass('centerDiv');
      $('#verbWrap').show();
      pausePres();
    }
  });

  $('#verbBanner5').on('click', function () {
    if ($('#verbBannerMenu').is(':visible')) {
      $('#verbBannerMenu').slideUp(200);
    } else {
      $('#verbBannerMenu').slideDown(200);
    }
  });
  $('.verbBannerItem2, .closeWinBtn2').on('click', function () {
    $('#verbBannerMenu').hide();
  });

  ///2023 START
  $('#middleSwipe').hide();
  addSwipePic('mainPic1');
  addSwipePic('mainPic2');
  ///2023 END

  ///MOBILE OPTIONS
  $('#starConjWarn').hide();

  if (currentDevice == 'mobile') {
    $('.wordSentence, .wordSentenceB')
      .on('touchstart', function (e) {
        if ($(e.target).hasClass('slowBubble')) {
          return;
        }
        $(this).addClass('hilite2');
      })
      .on('touchend touchcancel', function () {
        $(this).removeClass('hilite2');
      });
  } else {
    $('.wordSentence, .wordSentenceB')
      .on('mouseover', function (e) {
        if ($(e.target).hasClass('slowBubble')) {
          return;
        }
        $(this).addClass('hilite3');
      })
      .on('mouseout mouseleave', function () {
        $(this).removeClass('hilite3');
      });
  }

  ///5.1 CHANGE
  $('.wordSentence').on('click', function (e) {
    $('.wordSentenceIn').css({ opacity: '1' });
    if (!$(e.target).hasClass('slowBubble')) {
      disableTimer = true;
      if (currentWordNum % 2 == 0) {
        currentWordNum++;
      }
      loadFastSound();
      $('.insight, .insightLabel').removeClass('disInsight');
    }
  });
  ///5.1
  $('.wordSentenceB').on('click', function (e) {
    if (!$('.ouinoContent').hasClass('portrait')) {
      $('.wordSentenceIn').css({ opacity: '0.3' });
    }
    if (!$(e.target).hasClass('slowBubble')) {
      disableTimer = true;
      if (currentWordNum % 2 != 0) {
        currentWordNum--;
      }
      loadFastSound();
    }
  });
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
    if (currentWordNum % 2 == 0) {
      currentWordNum++;
    }
    loadSlowSound();
  });
  $('#slowBubble2').on('click', function () {
    disableTimer = true;
    if (currentWordNum % 2 != 0) {
      currentWordNum--;
    }
    loadSlowSound();
  });
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
  $('.verbButtons').on('click', buttonClicked);
  ////2023 START (MAKE SURE THERE AREN'T 2)
  $('.rightArrow').on('click', function (event) {
    if (currentWordNum % 2 == 0 && !$('.ouinoContent').hasClass('portrait')) {
      currentWordNum++;
    } else if (currentWordNum % 2 == 0 && event.isTrigger) {
      currentWordNum++;
    }
    nextImage();
  });
  ////2023 END
  $('.leftArrow').on('click', prevImage);
  if (lessonNumber !== 0) {
    $('.menuTitleContainer').on('click', startLesson);
  }
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
    loadQuiz();
  });
  $('#menuQuiz2').on('click', function () {
    errors = [];
    errorMode = false;
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
      '.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .menuTitleContainer, #verbBanner5,#verbQuestion,.slowBubble',
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
  quizLoaded = true;
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    $('#quizContent').on('touchstart', function (ev) {
      ev.preventDefault();
    });
  }
  $('#answerForm').submit(function (ev) {
    ev.preventDefault();
    checkWrittenAnswer();
  });
  $('.quizItemsB').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });

  $('#writtenAnswer').on('click', function () {
    if ($('#writtenAnswer span').hasClass('noGap')) {
      $('#writtenAnswer span').removeClass('noGap');
      localStorage.removeItem(storeInfo + 'noGap');
    } else {
      $('#writtenAnswer span').addClass('noGap');
      localStorage.setItem(storeInfo + 'noGap', 'ON');
    }
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
    $('#quizBtn1').on('touchstart mousedown', function (e) {
      e.preventDefault();
      loadQuiz1();
    });
    $('#quizBtn2').on('touchstart mousedown', function (e) {
      e.preventDefault();
      loadQuiz2();
    });
    $('#quizBtn3').on('touchstart mousedown', function (e) {
      e.preventDefault();
      loadQuiz3();
    });
    $('#quizBtn4').on('touchstart mousedown', function (e) {
      e.preventDefault();
      loadQuiz4();
    });
    $('.quizItems, .quizItemsB').on('touchmove', function (e) {
      e.preventDefault();
    });
    $('#quizGoBack').on('click', function () {
      errors = [];
      errorMode = false;
      loadQuiz();
    });
    $('#quizPreloadStart').on('touchstart mousedown', function (e) {
      e.preventDefault();
      setTimeout(function () {
        startQuiz();
      }, 100);
    });
    $('#quizDoneContinue').on('touchstart mousedown', function (e) {
      e.preventDefault();
      setTimeout(function () {
        toggleMenu();
      }, 100);
    });
    $('.boardChar').on('touchend mouseup', function (event) {
      event.preventDefault();
      charToAdd = $(this).text();
      addCharacter();
    });
    $('#hint1').on('touchstart mousedown', function (e) {
      e.preventDefault();
      showHint1('clicked');
      playSprite('shimmer');
    });
    $('#hint2').on('touchstart mousedown', function (e) {
      e.preventDefault();
      showHint2();
      playSprite('shimmer');
    });
    $('#hint3').on('touchstart mousedown', function (e) {
      e.preventDefault();
      showHint3();
      playSprite('shimmer');
    });
    $('#writeError2').on('touchstart mousedown', function (e) {
      e.preventDefault();
      $('#writeAnswerField').val(quizGoodAnswer);
      checkWrittenAnswer();
    });
    $('.quizItems, .quizItemsB').on('touchstart mousedown', function (event) {
      event.preventDefault();
      checkClickAnswer($(this));
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
    $('#quizBtn1').on('click', loadQuiz1);
    $('#quizBtn2').on('click', loadQuiz2);
    $('#quizBtn3').on('click', loadQuiz3);
    $('#quizBtn4').on('click', loadQuiz4);
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
          'text-shadow': '2px 1px 0px #ebbc31, rgb(0, 0, 0) 3px 2px 0px',
        });
      })
      .on('mouseout', function () {
        $(this).css({ 'text-shadow': 'rgb(0, 0, 0) 3px 2px 0px' });
      });
    $('.quizItems').hover(function () {
      $(this).children('.quizItemsTop').toggleClass('quizItemsHover');
    });
    $('.quizItems, .quizItemsB').on('click', function () {
      checkClickAnswer($(this));
    });
    $('.quizItemsB').hover(function () {
      $(this).toggleClass('fullOpacity');
    });

    /////END DESKTOP
  }
}

/////LOAD DRAGGABLE
function loadDrag() {
  $('.puzzAnswer').draggable({
    revert: true,
    stack: '.puzzAnswer',
    opacity: 1,
  });
  $('.puzzAnswer').on('dragstart', function () {
    $(this).css({ right: 'auto' });
    selectPuzz = $(this).attr('id');
    puzzContent = $(this).text();
    $(this)
      .children('.puzzRight1')
      .css({ 'background-position': 'left 33.333333%' });
    $(this)
      .children('.puzzRight2')
      .css({ 'background-position': 'right 100%' });
  });
  $('.puzzAnswer').on('dragstop', function () {
    $('.puzzRight1').css({ 'background-position': 'left 0%' });
    $('.puzzRight2').css({ 'background-position': 'right 66.666666%' });
  });
  $('.puzzQues').droppable({ accept: '.puzzAnswer' });
  ///START DROP ACTIONS
  $('.puzzQues').on('drop', function () {
    //START GOOD ANSWER
    if ($(this).val().split(' ').join('') == puzzContent.split(' ').join('')) {
      $(this)
        .children('span')
        .text($(this).children('span').text() + puzzContent);
      var puzzLength = puzzContent.length + $(this).text().length;

      if (puzzLength < 15) {
        $(this).children('.puzzLeft2').css({
          'background-position': 'right 100%',
          right: '125px',
          width: '30%',
        });
      } else if (puzzLength >= 22) {
        $(this).children('.puzzLeft2').css({
          'background-size': '100% 400%',
          'background-position': 'right 100%',
          right: '125px',
          width: '50%',
        });
      } else if (puzzLength < 22) {
        $(this).children('.puzzLeft2').css({
          'background-position': 'right 100%',
          right: '125px',
          width: '40%',
        });
      }

      $(this).droppable('option', 'disabled', true);
      removePuzzle();
      $('#' + selectPuzz).hide();
      /////RIGHT ANSWER ACTIONS
      $('#quizTimerPointer').stop();
      clearTimeout(timerDelay);
      currentPts = currentPts + quizPtsCount;
      $('#currentScore').text(currentPts);
      $('#quizTimerPointer').css({ opacity: '0' });
      currQuizNum++;
      playSprite('quizGood');
      $('#wrongAnswer, #goodAnswer, #goodAnswerPic').stop(true, true);
      $('#wrongAnswer').css({ opacity: '0' });
      $('#goodAnswer, #goodAnswerPic').css({ opacity: '1' });
      setTimeout(function () {
        $('#goodAnswer, #goodAnswerPic').transition({ opacity: '0' });
      }, 500);
      if (currQuizNum != quizNumQues + 1) {
        loadQuestion();
      } else {
        setTimeout(function () {
          if (currentQuiz == 4) {
            $('#quizDoneSentence').hide();
          } else {
            $('#quizDoneSentence').show();
          }
          $('#puzzleBack').hide();
          doneQuiz();
        }, 2000);
      }
    }
    //START WRONG ANSWER
    else {
      $(this).css({ opacity: '.9' });
      $(this)
        .children('.puzzLeft1')
        .css({ 'background-position': 'left 66.666666%' });
      $(this).children('.puzzLeft2').css({ 'background-position': 'right 0%' });
      currentErrors++;
      if (errors.indexOf(quizQuesNum) == -1) {
        errors.push(quizQuesNum);
      }
      $('#currentErrors').text(currentErrors);
      if (!madeError) {
        currentPts = currentPts - 50;
        $('#wrongAnswerPic').css({ opacity: '1' });
        setTimeout(function () {
          $('#wrongAnswerPic').transition({ opacity: '0' });
        }, 500);
        $('#currentScore').text(currentPts);
        madeError = true;
      }
      playSprite('quizBad');
      $('#wrongAnswer, #goodAnswer, #goodAnswerPic').stop(true, true);
      $('#goodAnswer, #goodAnswerPic').css({ opacity: '0' });
      $('#wrongAnswer').css({ opacity: '1' });
      setTimeout(function () {
        $('#wrongAnswer').transition({ opacity: '0' });
      }, 500);
    }
    ///END WRONG ANSWER
  });
  ////END DROP ACTIONS
  $('.puzzQues').on('dropout', function () {
    $(this).css({ opacity: '.9' });
    $(this)
      .children('.puzzLeft1')
      .css({ 'background-position': 'left 66.66666%' });
    $(this).children('.puzzLeft2').css({ 'background-position': 'right 0%' });
  });
  $('.puzzQues').on('dropover', function () {
    $(this).css({ opacity: '1' });
    $(this).children('.puzzLeft1').css({ 'background-position': 'left 100%' });
    $(this)
      .children('.puzzLeft2')
      .css({ 'background-position': 'right 33.33333%' });
  });
}

////////////////END LOAD DRAG

/////LOAD DRAGGABLE 2
function loadDrag2() {
  $('.books').draggable({ revert: true, stack: '.books', opacity: 1 });
  $('.books').on('dragstart', function () {
    $(this).css({ right: 'auto', bottom: 'auto' });
    selectPuzz = $(this).attr('id');
    puzzContent = $(this).html();
  });
  $('.books').on('dragstop', function () {});
  $('.shelves').droppable({ accept: '.books' });
  ///START DROP ACTIONS
  $('.shelves').on('drop', function () {
    $(this).children('.shelvesLabel').css({ color: '#FFF' });
    //START GOOD ANSWER
    if ($(this).val().split(' ').join('') == puzzContent.split(' ').join('')) {
      $(this).droppable('option', 'disabled', true);
      $('#' + selectPuzz).hide();
      $(this).children('.booksB').show();
      /////RIGHT ANSWER ACTIONS
      $('#quizTimerPointer').stop();
      clearTimeout(timerDelay);
      currentPts = currentPts + quizPtsCount;
      $('#currentScore').text(currentPts);
      $('#quizTimerPointer').css({ opacity: '0' });
      currQuizNum++;
      playSprite('quizGood');
      $('#wrongAnswer, #goodAnswer').stop(true, true);
      $('#wrongAnswer').css({ opacity: '0' });
      $('#goodAnswer, #goodAnswerPic3').css({ opacity: '1' });
      setTimeout(function () {
        $('#goodAnswer, #goodAnswerPic3').transition({ opacity: '0' });
      }, 500);
      var waitTime = 1000;
      if (currQuizNum % 5 == 1) {
        waitTime = 2000;
      }
      setTimeout(function () {
        if (currQuizNum != quizNumQues + 1) {
          loadQuestion();
        } else {
          setTimeout(function () {
            if (currentQuiz == 4) {
              $('#quizDoneSentence').hide();
            } else {
              $('#quizDoneSentence').show();
            }
            $('#puzzleBack').hide();
            doneQuiz();
          }, 2000);
        }
      }, waitTime);
    } else {
      $(this).css({ opacity: '.9' });
      currentErrors++;
      if (errors.indexOf(quizQuesNum) == -1) {
        errors.push(quizQuesNum);
      }
      $('#currentErrors').text(currentErrors);
      if (!madeError) {
        currentPts = currentPts - 50;
        $('#wrongAnswerPic').css({ opacity: '1' });
        setTimeout(function () {
          $('#wrongAnswerPic').transition({ opacity: '0' });
        }, 500);
        $('#currentScore').text(currentPts);
        madeError = true;
      }
      playSprite('quizBad');
      $('#wrongAnswer, #goodAnswer').stop(true, true);
      $('#goodAnswer, #goodAnswerPic3').css({ opacity: '0' });
      $('#wrongAnswer').css({ opacity: '1' });
      setTimeout(function () {
        $('#wrongAnswer').transition({ opacity: '0' });
      }, 500);
    }
    ///END WRONG ANSWER
  });
  ////END DROP ACTIONS
  $('.shelves').on('dropout', function () {
    $(this).css({ opacity: '.9' });
    $(this).children('.shelvesLabel').css({ color: '#FFF' });
  });
  $('.shelves').on('dropover', function () {
    $(this).css({ opacity: '1' });
    $(this).children('.shelvesLabel').css({ color: '#ebbc31' });
  });
}

////////////////END LOAD DRAG 2

/////LOAD QUIZ SOUND
function loadQuizSound() {
  ////PORTUGUESE CHANGE START
  if (currentQuiz === 1) {
    $('.engRepeat').addClass('engDisabled');
  }
  ////PORTUGUESE CHANGE END

  $('#mainSound').trigger('pause');
  var quizSound;
  ///2018CHANGE
  if (
    currQuizNum <= forExamples.length * 0.5 + 1 ||
    typeof expressVerb !== 'undefined'
  ) {
    quizSound = fastSounds[quizQuesNum - 1];
  }
  ///2018CHANGE
  else {
    quizSound = quizSounds[quizQuesNum - 1];
  }

  //2020 PLAY
  if (quizSound.indexOf('../') != -1) {
    quizSound = quizSound.split('../').join(pre);
  }
  $('#mainSound').attr('src', quizSound);
  //2020 PLAY

  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('canplay', playQuizSound);
}

function loadQuizSound2() {
  $('#mainSound').trigger('pause');
  var quizSound;
  ///2018CHANGE
  if (
    currQuizNum <= forExamples.length * 0.5 ||
    typeof expressVerb !== 'undefined'
  ) {
    quizSound = fastSounds[quizQuesNum - 1];
  }
  ///2018CHANGE
  else {
    quizSound = quizSounds[quizQuesNum - 1];
  }
  //2020 PLAY
  if (quizSound.indexOf('../') != -1) {
    quizSound = quizSound.split('../').join(pre);
  }
  $('#mainSound').attr('src', quizSound);
  //2020 PLAY
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('canplay', playQuizSound);
}
////PLAY QUIZ SOUND
function playQuizSound() {
  var qtDelay;
  if (currentQuiz <= 2) {
    qtDelay = 400;
  } else {
    qtDelay = 300;
  }
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
  }, qtDelay);
}
///// TIMER RESET ACTION

function loadFirstSound() {
  $('#mainSound').attr('src', '../../common/blank' + soundType);
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('canplay', playQuizSound);
}

function afterSoundAction() {
  if (disableTimer) {
    return;
  }
  if (currentQuiz >= 3) {
    if (currQuizNum != quizNumQues + 1) {
      setTimeout(function () {
        loadQuestion();
        $('.timerMeter > .timerSpan').stop();
        $('.timerMeter > .timerSpan').css({ width: 0 });
      }, 2000);
      $('.timerMeter > .timerSpan').css({ height: '20px' });
      $('.timerMeter > .timerSpan').each(function () {
        $(this)
          .width(0)
          .animate({ width: $('.timerMeter').width() }, 2000);
      });
      return;
    } else {
      if (currentQuiz == 4) {
        $('#quizDoneSentence').hide();
      } else {
        $('#quizDoneSentence').show();
      }
      setTimeout(function () {
        doneQuiz();
      }, 1500);
    }
    return;
  }
  if (currentQuiz <= 2) {
    quizTimerAnimate();
  }
}

function quizTimerAnimate() {
  ////PORTUGUESE CHANGE START
  if (currentQuiz === 1) {
    $('.engRepeat').removeClass('engDisabled');
  }
  ////PORTUGUESE CHANGE END
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
              $('#quizScoreImg').attr('src', '../../common/score3.svg');
              $('#goodAnswerIn, #goodAnswerIn2').css({
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
                  $('#quizScoreImg').attr('src', '../../common/score2.svg');
                  $('#goodAnswerIn, #goodAnswerIn2').css({
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
                      $('#quizScoreImg').attr('src', '../../common/score1.svg');
                      $('#goodAnswerIn, #goodAnswerIn2').css({
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

////////////SHUFFLE STUFF
function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

function resizeVerbMenu() {
  $('.menuVerb').css({
    height: $('#menuVerbContent').outerHeight() + 45 + 'px',
  });
}

var stemText =
  '<h3><img id="menuVerbImage" src="../../common/verbLogo2.svg">What is the stem of a verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> The stem of a verb is the part of the verb that never changes when being conjugated. <br><b class="bullet">&bull;</b> Once you know the endings of regular verbs, the stem is all you need to remember to fully conjugate it. <br><b class="bullet">&bull;</b> The stem is identified in blue letters in the conjugation below. <br><b class="bullet">&bull;</b> The endings are identified in red letters in the conjugation below.</p>';
if (forConj7 == '(none)') {
  stemText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo2.svg">What is the stem of a verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> The stem of a verb is the part of the verb that never changes when being conjugated. <br><b class="bullet">&bull;</b> Once you know the endings of regular verbs, the stem is all you need to remember to fully conjugate it. <br><b class="bullet">&bull;</b> This verb is one of the very few that does not have a repeating stem.</p>';
}

var pronoText;
var addText;
var verbTypes;
var pastEx;
var pastEx2;
var pastText1;
var personText = '';
if (lessonLanguage == 'Italian') {
  pastEx2 = '(Io) andavo al negozio.';
  verbTypes = ['IRE', 'ARE', 'ERE'];
  addText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is the Gerund?</h3><p><b class="bullet">&bull;</b> The gerund is used to conjugate the present progressive, which is used when you need to specify that you are doing something right now.<br><b class="bullet">&bull;</b> In English, the gerund is simply the -ING form of the verb. The Italian construction of the present progressive is the same as in English, but we use the verb "Stare", not "Essere".</p><p>E.G. Stare + Gerund = To be + Gerund<br><span class="textSpace">E.G.</span> (io) sto mangiando = I am eating</p><p><b class="bullet">&bull;</b> When it is not necessary to specify that you are doing something right now, the present is used instead...</p><p>E.G. (io) mangio = I eat</p><p><b class="bullet">&bull;</b> You can take the endings lessons to learn how to conjugate both forms.</p>';
  pronoText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "Si" at the end of the infinitive form means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in front of it.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.</p><p>E.G. "Lavare" means "To Wash"<br><span class="textSpace">E.G.</span> "Lavarsi" means "To Wash Oneself".</p><p><b class="bullet">&bull;</b> In Italian, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "Si" is at the end of a verb, it has to be conjugated with a reflexive pronoun in front of the verb.</p>';
  pastText1 =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the "Passato Prossimo" tense?</h3><p><b class="bullet">&bull;</b> In most cases, the "passato prossimo" is the equivalent of two English tenses...</p><p>The simple past;&nbsp;&nbsp;&nbsp;&nbsp;(io) ho accettato = I accepted<br>The present perfect;&nbsp;&nbsp;&nbsp;&nbsp;(io) ho accettato =  I have accepted</p><p><b class="bullet">&bull;</b> Please note that Italian past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context. The "passato prossimo" is used when referring to something that has already happened.</p>';
  personText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Italian Conjugation with <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b></h3><p><b class="bullet">&bull;</b> The Italian subject pronoun <b class="yellowText">Lei</b> is the singular formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The Italian subject pronoun <b class="yellowText">Loro</b>, is the plural formal "you". It is used when talking to more than one person in a VERY formal manner.<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Lei</b> is conjugated to the third person singular and <b class="yellowText">Loro</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course, the third person conjugation is simply copied for <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b> are conjugated to the third person.<br><b class="bullet">&bull;</b> Note that <b class="yellowText">Lei</b> also means "she" and that <b class="yellowText">Loro</b> also means "they", but that they are capitalized when they are the equivalent of "you", even in the middle of a sentence.<br></p>';
} else if (lessonLanguage == 'Spanish') {
  pastEx2 = '(Yo) iba a la tienda.';
  verbTypes = ['IR', 'AR', 'ER'];
  addText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is the Present Participle?</h3><p><b class="bullet">&bull;</b> The present participle is used to conjugate the present progressive.<br><b class="bullet">&bull;</b> The present progressive is used when you need to specify that you are doing something right now. In English, the present participle is simply the -ING form of the verb. The Spanish construction of the present progressive is the same as in English.</p><p>E.G. Estar + Present Participle = To be + Present Participle<br><span class="textSpace">E.G.</span> (yo) estoy comiendo = I am eating</p><p><b class="bullet">&bull;</b> When it is not necessary to specify that you are doing something right now, the present is used instead...</p><p>E.G. (yo) como = I eat</p><p><b class="bullet">&bull;</b> You can take the endings lessons to learn how to conjugate both forms.</p>';
  pronoText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "Se" at the end of the infinitive form means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in front of it.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.</p><p>E.G. "Lavar" means "To Wash"<br><span class="textSpace">E.G.</span> "Lavarse" means "To Wash Oneself".</p><p><b class="bullet">&bull;</b> In Spanish, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "Se" is at the end of a verb, it has to be conjugated with a reflexive pronoun in front of the verb.</p>';
  pastText1 =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the preterite tense?</h3><p><b class="bullet">&bull;</b> In most cases, the preterite is the equivalent of two English tenses...</p><p>The simple past;&nbsp;&nbsp;&nbsp;&nbsp;(yo) acepté = I accepted<br>The present perfect;&nbsp;&nbsp;&nbsp;&nbsp;(yo) acepté =  I have accepted</p><p><b class="bullet">&bull;</b> Please note that Spanish past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context. The preterite is used when referring to something that has already happened.</p>';
  personText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Spanish Conjugation with <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b></h3><p><b class="bullet">&bull;</b> The Spanish subject pronoun <b class="yellowText">Usted</b> is the formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The Spanish subject pronoun <b class="yellowText">Ustedes</b>, is the plural "you". It is used when talking to more than one person.<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Usted</b> is conjugated to the third person singular and <b class="yellowText">Ustedes</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course the third person conjugation is simply copied for <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b> are conjugated to the third person.</p>';
}
////PORTUGUESE CHANGE START
else if (lessonLanguage == 'Portuguese') {
  pastEx2 = '(Eu) estava indo para a loja.';
  verbTypes = ['IR', 'AR', 'ER'];
  addText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is the Present Participle?</h3><p><b class="bullet">&bull;</b> The present participle is used to conjugate the present progressive.<br><b class="bullet">&bull;</b> The present progressive is used when you need to specify that you are doing something right now. In English, the present participle is simply the -ING form of the verb. The Portuguese construction of the present progressive is the same as in English.</p><p>E.G. Estar + Present Participle = To be + Present Participle<br><span class="textSpace">E.G.</span> (eu) estou comendo = I am eating</p><p><b class="bullet">&bull;</b> When it is not necessary to specify that you are doing something right now, the present is used instead...</p><p>E.G. (eu) como = I eat</p><p><b class="bullet">&bull;</b> You can take the endings lessons to learn how to conjugate both forms.</p>';
  pronoText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "-se" at the end of the infinitive form means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in the conjugation.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.</p><p>E.G. "Lavar" means "To Wash"<br><span class="textSpace">E.G.</span> "Lavar-se" means "To Wash Oneself".</p><p><b class="bullet">&bull;</b> In Portuguese, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "-se" is at the end of a verb, it has to be conjugated with a reflexive pronoun.</p>';
  pastText1 =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the preterite tense?</h3><p><b class="bullet">&bull;</b> In most cases, the preterite (pretérito perfeito) is the equivalent of two English tenses...</p><p>The simple past;&nbsp;&nbsp;&nbsp;&nbsp;(eu) aceitei = I accepted<br>The present perfect;&nbsp;&nbsp;&nbsp;&nbsp;(eu) aceitei =  I have accepted</p><p><b class="bullet">&bull;</b> Please note that Portuguese past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context. The preterite is used when referring to something that has already happened.</p>';
  personText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Portuguese Conjugation with <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b></h3><p><b class="bullet">&bull;</b> The Portuguese subject pronoun <b class="yellowText">Você</b> is the most common "you" in Brazil. It is used when talking to one person.<br><b class="bullet">&bull;</b> However, in Portugal, the pronoun <b class="yellowText">Tu</b> is the most common informal form when talking to one person.<br><b class="bullet">&bull;</b> If you wish to keep it very formal, you can use <b class="yellowText">O senhor</b> (to a man) or <b class="yellowText">A senhora</b> (to a woman) instead of <b class="yellowText">Você</b> in both Portugal and Brazil.<br><b class="bullet">&bull;</b> The Portuguese subject pronoun <b class="yellowText">Vocês</b> is the plural "you". It is used when talking to more than one person.<br><b class="bullet">&bull;</b> Even though <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Você</b> is conjugated to the third person singular and <b class="yellowText">Vocês</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course the third person conjugation is simply copied for <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b> are conjugated to the third person.</p>';
}
////PORTUGUESE CHANGE END
else if (lessonLanguage == 'French') {
  pastEx2 = "J'allais au magasin.";
  verbTypes = ['RE', 'ER', 'IR'];
  addText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is an auxiliary verb?</h3><p><b class="bullet">&bull;</b> An auxiliary verb accompanies the main verb to make a new meaning.<br><b class="bullet">&bull;</b> E.G. In the English "I am eating", "to eat" is the main verb, while "to be" is the auxiliary verb.<br><b class="bullet">&bull;</b> Auxiliary verbs are mainly used in the past tense "passé composé". <br><b class="bullet">&bull;</b> In French, there are two auxiliary verbs; "Être" (To be) and "Avoir" (To have).<br><b class="bullet">&bull;</b> However, the auxiliary verb "Avoir" is used a lot more than "Être".<br><b class="bullet">&bull;</b> A few verbs can use both auxiliary verbs depending on the sentence structure.<br><b class="bullet">&bull;</b> Learning these two verbs is an essential part of French conjugation.<br></p>';
  pronoText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "Se" before an infinitive verb means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in front of it.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.</p><p>E.G. "Laver" means "To Wash"<br><span class="textSpace">E.G.</span> "Se laver" means "To Wash Oneself".</p><p><b class="bullet">&bull;</b> In French, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "Se" is in front of a verb, it has to be conjugated with a reflexive pronoun.</p>';
  pastText1 =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the "passé composé" tense?</h3><p><b class="bullet">&bull;</b> In most cases, the "passé composé" is the equivalent of two English tenses...</p><p>The simple past;&nbsp;&nbsp;&nbsp;&nbsp;J' +
    "'" +
    'ai accepté = I accepted<br>The present perfect;&nbsp;&nbsp;&nbsp;&nbsp;J' +
    "'" +
    'ai accepté =  I have accepted</p><p><b class="bullet">&bull;</b> Please note that French past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context. The "passé composé" is used when referring to something that has already happened.</p>';
  ////2018CHANGE
  personText =
    '<h3><img id="menuVerbImage" src="../../common/warning.svg">French Conjugation with <b class="yellowText">On</b></h3><p><b class="bullet">&bull;</b> The French subject pronoun <b class="yellowText">On</b> is the impersonal pronoun. It is important to understand that it is not the equivalent of "it".<br><b class="bullet">&bull;</b> The pronoun <b class="yellowText">On</b> acts as the passive voice. There is no true equivalent in English, but it is similar to "one".<br><b class="bullet">&bull;</b> E.G. <b class="yellowText">On</b> ne devrait pas fumer. / <b class="yellowText">One</b> should not smoke.<br><b class="bullet">&bull;</b> In spoken informal French, <b class="yellowText">On</b> is frequently used as the direct translation of "we". <br><b class="bullet">&bull;</b> It is an alternate way of speaking for a group of people, just like "nous".<br><b class="bullet">&bull;</b> Using <b class="yellowText">On</b> this way is (technically) grammatically incorrect, but it is a very common way of speaking.</p>';
}
////2018CHANGE
else if (lessonLanguage == 'German') {
  pastEx2 = "J'allais au magasin.";
  verbTypes = ['', '', ''];
  addText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo1.svg">What is an auxiliary verb?</h3><p><b class="bullet">&bull;</b> An auxiliary verb accompanies the main verb to make a new meaning.<br><b class="bullet">&bull;</b> E.G. In the English "I am eating", "to eat" is the main verb, while "to be" is the auxiliary verb.<br><b class="bullet">&bull;</b> Auxiliary verbs are used in the conversational (perfekt) past. <br><b class="bullet">&bull;</b> In German, there are two auxiliary verbs; "Sein" (To be) and "Haben" (To have).<br><b class="bullet">&bull;</b> However, the auxiliary verb "Haben" is used a lot more than "Sein".<br><b class="bullet">&bull;</b> A few verbs can use both auxiliary verbs depending on the sentence structure.<br><b class="bullet">&bull;</b> Learning these two verbs is an essential part of German conjugation.<br></p>';
  pronoText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo3.svg">What is a pronominal verb?</h3><p class="pVerb"><b class="bullet">&bull;</b> "Sich" before an infinitive verb means that the verb is pronominal.<br><b class="bullet">&bull;</b> A pronominal verb requires a reflexive pronoun in front of it.<br><b class="bullet">&bull;</b> Reflexive pronouns mean that the action is done to oneself.<br><b class="bullet">&bull;</b> In German, many verbs must include a reflexive pronoun, while others are optional, depending what you want to say.<br><b class="bullet">&bull;</b> Remember; when "sich" is in front of a verb, it has to be conjugated with a reflexive pronoun.</p>';
  pastText1 =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the conversational (perfekt) tense?</h3><p><b class="bullet">&bull;</b> The conversational past is also known as "the compound past" and "the present perfect".<br><b class="bullet">&bull;</b> The conversational past is primarily used in conversational, spoken German.<br><b class="bullet">&bull;</b> It is a compound tense formed by combining an auxiliary verb with the past participle.<br><b class="bullet">&bull;</b> The conversational past is the equivalent of all kinds of English forms.<br><b class="bullet">&bull;</b> For example, it could replace "I was eating," "I used the eat," "I ate," or "I did eat" depending on the context.<br><b class="bullet">&bull;</b> Please note that German past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context.</p>';
  personText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">German Conjugation with <b class="yellowText">Sie</b> and <b class="yellowText">sie</b></h3><p><b class="bullet">&bull;</b> The German subject pronoun <b class="yellowText">Sie</b> (uppercase S) is the formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The German subject pronoun <b class="yellowText">sie</b> (lowercase S), is the equivalent of "they" and "she".<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Sie</b> is the equivalent of "you", it is conjugated to the third person plural, not the second person. This can be confusing for English speakers, therefore, in this course the third person plural conjugation is simply copied for <b class="yellowText">Sie</b> and <b class="yellowText">sie</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Sie</b> is conjugated to the third person plural.</p>';
}

//Calculate wish verb type it is...
var verbType = verbTypes[verbTypeNum % 3];
var typeText;
var verbTypeArray = [
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

////PORTUGUESE CHANGE START
if (typeof irregReason == 'undefined') {
  var irregReason = [''];
}
if (irregReason[0] == '') {
  irregReason[0] =
    'This verb has an irregular conjugation pattern, please take more time to learn it.';
}
////PORTUGUESE CHANGE END

if (verbTypeNum <= 3) {
  typeText =
    '<h3><img id="menuVerbImage" src="../../common/puzzle' +
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
    ' verbs is very powerful because it allows you to easily conjugate hundreds of verbs.</p>';
} else if (verbTypeNum >= 10) {
  typeText =
    '<h3><img id="menuVerbImage" src="../../common/puzzle' +
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
    '.<br><b class="bullet">&bull;</b> Highly irregular verbs are by far the most challenging verbs to learn.<br><b class="bullet">&bull;</b> They do not follow the regular rules of conjugation, and do not have a repeating stem throughout the conjugation.<br><b class="bullet">&bull;</b> They have to be learned in detail, however, there are very few verbs like this.<br><b class="bullet">&bull;</b> Most highly irregular verbs are covered in detail in this course.</p>';
} else {
  typeText =
    '<h3><img id="menuVerbImage" src="../../common/puzzle' +
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
    '</p>';
}

if (lessonLanguage == 'German') {
  verbTypeArray = [
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
  ];
  if (verbTypeNum == 1) {
    typeText =
      '<h3><img id="menuVerbImage" src="../../common/puzzle' +
      verbTypeNum +
      '.svg">' +
      verbTypeArray[verbTypeNum - 1] +
      ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Regular verbs are also known as German weak verbs.<br><b class="bullet">&bull;</b> Weak verbs follow the regular rules of conjugation.<br><b class="bullet">&bull;</b> The endings are the same for every weak German verbs.<br><b class="bullet">&bull;</b> Learning the regular endings of German verbs is very powerful because it allows you to easily conjugate hundreds of verbs.</p>';
  } else if (verbTypeNum == 2) {
    typeText =
      '<h3><img id="menuVerbImage" src="../../common/puzzle' +
      verbTypeNum +
      '.svg">' +
      verbTypeArray[verbTypeNum - 1] +
      ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Just like in English, the German language has a few “Auxiliary” verbs.<br><b class="bullet">&bull;</b> Auxiliary verbs are often used to modify another main verb and can even change the tense entirely.<br><b class="bullet">&bull;</b> In English, these verbs include “to have” (I have done) , “to be” (I am walking) and “to do” (I do agree).<br><b class="bullet">&bull;</b> All the important German Auxiliary verbs are covered in the “key verb” section of this course.<br><b class="bullet">&bull;</b> Unfortunately, these verbs are conjugated differently and must be learned separately.</p>';
  } else if (verbTypeNum == 3) {
    typeText =
      '<h3><img id="menuVerbImage" src="../../common/puzzle' +
      verbTypeNum +
      '.svg">' +
      verbTypeArray[verbTypeNum - 1] +
      ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Just like in English, the German language has several “modal” verbs.<br><b class="bullet">&bull;</b> Modal verbs are often used to modify another main verb.<br><b class="bullet">&bull;</b> In English, these verbs include “can”, “could”, “may”, “might”, “will” and “would”.<br><b class="bullet">&bull;</b> Modal verbs are used to form all kinds of new meanings to the accompanied verb.<br><b class="bullet">&bull;</b> All the important German modal verbs are covered in the “key verb” section of this course.<br><b class="bullet">&bull;</b> Unfortunately, these verbs are conjugated differently and must be learned separately.</p>';
  } else if (verbTypeNum == 4) {
    typeText =
      '<h3><img id="menuVerbImage" src="../../common/puzzle' +
      verbTypeNum +
      '.svg">' +
      verbTypeArray[verbTypeNum - 1] +
      ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Mixed verbs, like strong verbs, have changing vowels in the conjugation.<br><b class="bullet">&bull;</b> This is similar to English verbs like "to speak" which becomes "spoke" in the past instead of "speaked".<br><b class="bullet">&bull;</b> The changes in vowels are unpredictable in most mixed verbs, you will therefore need to learn each of those small changes for each individual mixed verb.<br><b class="bullet">&bull;</b> However, unlike strong verbs, the rest of the endings are the same as weak verbs.<br><b class="bullet">&bull;</b> Luckily there are very few mixed verbs in the German language.</p>';
  } else if (verbTypeNum == 7) {
    typeText =
      '<h3><img id="menuVerbImage" src="../../common/puzzle' +
      verbTypeNum +
      '.svg">' +
      verbTypeArray[verbTypeNum - 1] +
      ' verb</h3><p class="pVerb"><b class="bullet">&bull;</b> Irregular verbs are also known as German strong verbs.<br><b class="bullet">&bull;</b> Verbs of this group will have changing vowels in the conjugation.<br><b class="bullet">&bull;</b> This is similar to English verbs like "to speak" which becomes "spoke" in the past instead of "speaked".<br><b class="bullet">&bull;</b> The changes in vowels are unpredictable in most strong verbs, you will therefore need to learn each of those small changes for each individual strong verb.<br><b class="bullet">&bull;</b> A few other changes happens in the conjugation when the verbs are strong.<br><b class="bullet">&bull;</b> It is important to note that the past participle ends in "en" instead of the normal "t" ending of weak verbs.<br><b class="bullet">&bull;</b> There is also no endings for the first and third person of the narrative past.</p>';
  }
}

////PAST Text
var pastText2 =
  '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the imperfect tense?</h3><p><b class="bullet">&bull;</b> In most cases, the imperfect is used when referring to something that was happening; it is the equivalent of the English Past Progressive (Continuous).</p><p>E.G. ' +
  pastEx2 +
  ' = I was going to the store.</p><p><b class="bullet">&bull;</b> It can also be used when referring to something that "used to be".</p><p>E.G. ' +
  pastEx2 +
  ' = I used to go to the store.</p><p><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change slightly with a different context.</p>';
if (lessonLanguage == 'German') {
  pastText2 =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo4.svg">What is the narrative past (präteritum) tense?</h3><p><b class="bullet">&bull;</b> The narrative past is also known as "the simple past", "the imperfect" and "the preterite" tense.<br><b class="bullet">&bull;</b> The narrative past is primarily used in books, newspapers, and written texts.<br><b class="bullet">&bull;</b> The narrative past is the equivalent of all kinds of English forms.<br><b class="bullet">&bull;</b> For example, it could replace "I was eating," "I used the eat," "I ate," or "I did eat" depending on the context.<br><b class="bullet">&bull;</b> Please note that German past tenses do not always translate directly.<br><b class="bullet">&bull;</b> The translation provided is the closest English equivalent, however it may change with a different context.</p>';
}

var proWarning =
  'Note:&nbsp;' +
  lessonLanguage +
  '&nbsp;subject&nbsp;pronouns&nbsp;are&nbsp;often&nbsp;omitted. However,&nbsp;to&nbsp;facilitate&nbsp;learning, ' +
  lessonLanguage +
  '&nbsp;subject&nbsp;pronouns are used more in this course than they would be used in real life.';

var puzzHTML =
  '<div id="puzzleTitle" class="selectOff"></div><div id="puzzle1A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz1AText" class="puzzTXT"></span></div><div id="puzzle1B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz1BText" class="puzzTXT2"></span></div><div id="puzzle2A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz2AText" class="puzzTXT"></span></div><div id="puzzle2B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz2BText" class="puzzTXT2"></span></div><div id="puzzle3A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz3AText" class="puzzTXT"></span></div><div id="puzzle3B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz3BText" class="puzzTXT2"></span></div><div id="puzzle4A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz4AText" class="puzzTXT"></span></div><div id="puzzle4B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz4BText" class="puzzTXT2"></span></div><div id="puzzle5A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz5AText" class="puzzTXT"></span></div><div id="puzzle5B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz5BText" class="puzzTXT2"></span></div><div id="puzzle6A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz6AText" class="puzzTXT"></span></div><div id="puzzle6B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz6BText" class="puzzTXT2"></span></div>';

var bookHTML =
  '<div class="books selectOff" id="book1"></div><div class="books selectOff" id="book2"></div><div class="books selectOff" id="book3"></div><div class="books selectOff" id="book4"></div><div class="books selectOff" id="book5"></div><div class="shelves" id="shelf1"><div class="booksB" id="book1B"></div><div class="shelvesLabel selectOff"></div></div><div class="shelves" id="shelf2"><div class="booksB" id="book2B"></div><div class="shelvesLabel selectOff"></div></div><div class="shelves" id="shelf3"><div class="booksB" id="book3B"></div><div class="shelvesLabel selectOff"></div></div><div class="shelves" id="shelf4"><div class="booksB" id="book4B"></div><div class="shelvesLabel selectOff"></div></div><div class="shelves" id="shelf5"><div class="booksB" id="book5B"></div><div class="shelvesLabel selectOff"></div></div>';

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

//new code SCROLL///
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
//new code SCROLL///
