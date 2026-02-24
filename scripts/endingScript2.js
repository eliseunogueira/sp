///OS START
var oPath = '';
var oPath2 = '../';
if (osType == 'androidSTORE') {
  oPath =
    'https://www.ouinolanguages.com/app/' +
    lessonLanguage +
    '/verb/' +
    lessonNumber +
    '/';
  oPath2 = 'https://www.ouinolanguages.com/app/' + lessonLanguage + '/verb/';
}
//OS END

///DO NOT MODIFY
var currentSection = 'Verbs';
var currentSecShort = 'verb';
var quizTitle2 = 'CONJUGATION MATCH';
var quizTitle3 = 'WRITE IT OUT';
var currentProgram = 'Complete';
var errors = [];
var errorMode = false;

///2020 CHANGE
var greenBub = [];
var redBub = [];
var blueBub = [];

if (lessonLanguage === 'Spanish') {
  greenBub = [117, 118, 119, 120, 121, 132, 135, 138];
  blueBub = [122, 123, 124, 125, 126, 133, 136, 139];
  redBub = [127, 128, 129, 130, 131, 134, 137, 140];
}
///PORTUGUESE CHANGE START
else if (lessonLanguage === 'Portuguese') {
  greenBub = [117, 118, 119, 120, 121, 132, 135, 138];
  blueBub = [122, 123, 124, 125, 126, 133, 136, 139];
  redBub = [127, 128, 129, 130, 131, 134, 137, 140];
}
///PORTUGUESE CHANGE END
else if (lessonLanguage === 'French') {
  greenBub = [114, 115, 116, 117, 126, 127];
  redBub = [122, 123, 124, 125, 129];
  blueBub = [118, 119, 120, 121, 128];
} else if (lessonLanguage === 'Italian') {
  greenBub = [114, 115, 116, 117, 126, 128, 129, 130];
  redBub = [122, 123, 124, 125, 126, 127, 132];
  blueBub = [118, 119, 120, 121, 131];
} else if (lessonLanguage === 'German') {
  greenBub = [120, 121, 122, 123, 124];
  redBub = [125, 126];
  blueBub = [127, 128, 129, 130, 131, 132];
}

if (greenBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#118000', '#203e00', '#118000', '#203e00'];
} else if (redBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#d11a1a', '#6e0e0e', '#ba1717', '#570b0b'];
} else if (blueBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#0a5d90', '#063561', '#0a5d90', '#063561'];
}
///2020 CHANGE END
var slidesPres = [];

var focused;
var numOfConj;
if (lessonLanguage != 'French') {
  numOfConj = 7;
} else {
  numOfConj = 6;
}
var allEndings = [];
var allQuizEndings = [];
for (var numE = 1; numE <= numOfConj; numE++) {
  var sideInput = window['forConj' + conjNum][numE - 1].split('<strong>');
  sideInput = sideInput[1].replace('</strong>', '');
  allEndings.push(sideInput);
  allQuizEndings.push(sideInput);
}

/////////CREATE GRADIENT COLOR
var btnColor;
///2018CHANGE
if (verbTypeNum == 1) {
  btnColor = [
    'rgba(20,130,5,1)',
    'rgba(11,89,7,1)',
    'rgba(20,130,5,1)',
    'rgba(11,89,7,1)',
    'rgba(20,130,5,1)',
    'rgba(11,89,7,1)',
  ];
} else if (verbTypeNum == 2 || verbTypeNum == 4) {
  btnColor = [
    'rgba(9,66,130,1)',
    'rgba(6,45,89,1)',
    'rgba(9,66,130,1)',
    'rgba(6,45,89,1)',
    'rgba(9,66,130,1)',
    'rgba(6,45,89,1)',
  ];
} else if (verbTypeNum == 3) {
  btnColor = [
    'rgba(145,17,17,1)',
    'rgba(97,12,12,1)',
    'rgba(145,17,17,1)',
    'rgba(97,12,12,1)',
    'rgba(145,17,17,1)',
    'rgba(97,12,12,1)',
  ];
}
///2018CHANGE

//////HILITE SELECTOR INFORMATION
var conjAlt;
var conjAltNum;
var conjAlt2;
var conjAltNum2;
var conjID;
var conjID2;
var puzzPron;

///PORTUGUESE CHANGE REPLACE!!! START
if (conjNum == 7 && lessonLanguage == 'Spanish') {
  conjAlt = '(ella)';
  conjAltNum = 4;
  conjAlt2 = '(ellas)';
  conjAltNum2 = 7;
  conjID = ['-', '(tú)', '(tú) no', '(usted)', '(nosotros)', 'ustedes', '-'];
  conjID2 = [
    '-',
    '2nd person informal',
    '2nd person informal',
    '2nd person formal (3rd)',
    "let's ",
    '2nd person plural (3rd)',
    '-',
  ];
  puzzPron = [
    '-',
    '(tú) ',
    '(tú) no ',
    '(usted) ',
    '(nosotros) ',
    '(ustedes) ',
  ];
} else if (conjNum == 7 && lessonLanguage == 'Portuguese') {
  conjAlt = '(ela)';
  conjAltNum = 4;
  conjAlt2 = '(elas)';
  conjAltNum2 = 7;
  conjID = ['-', '(tu)', '(tu) não', '(você)', '(nós)', '(vocês)', '-'];
  conjID2 = [
    '-',
    '2nd person (PT)',
    '2nd person (PT)',
    '2nd person (3rd)',
    "let's ",
    '2nd person plural (3rd)',
    '-',
  ];
  puzzPron = ['-', '(tu) ', '(tu) não ', '(você) ', '(nós) ', '(vocês) '];
} else if (lessonLanguage == 'Italian') {
  allQuizEndings.splice(2, 1);
  conjAlt = '(lei)';
  conjAltNum = 4;
  conjID = ['io', 'tu', 'Lei', 'lui/lei', 'noi', 'voi', 'loro (Loro)'];
  conjID2 = [
    'I',
    'you (informal)',
    'you (formal)',
    'he/she',
    'we',
    'you (plural)',
    'they / you (formal)',
  ];
  puzzPron = ['(io) ', '(tu) ', '(lui/lei) ', '(noi) ', '(voi) ', '(loro) '];
} else if (lessonLanguage == 'Spanish') {
  allQuizEndings.splice(2, 1);
  conjAlt = '(ella)';
  conjAltNum = 4;
  conjAlt2 = '(ellas)';
  conjAltNum2 = 7;
  conjID = [
    'yo',
    'tú',
    'usted',
    'él/ella',
    'nosotros',
    'ustedes',
    'ellos/ellas',
  ];
  conjID2 = [
    'I',
    'you (informal)',
    'you (formal)',
    'he/she',
    'we',
    'you (plural)',
    'they',
  ];
  puzzPron = [
    '(yo) ',
    '(tú) ',
    '(él/ella/usted) ',
    '(nosotros) ',
    '(ustedes) ',
    '(ellos/ellas) ',
  ];
} else if (lessonLanguage == 'Portuguese') {
  allQuizEndings.splice(2, 1);
  conjAlt = '(ela)';
  conjAltNum = 4;
  conjAlt2 = '(elas)';
  conjAltNum2 = 7;
  conjID = ['(eu)', '(tu)', '(você)', '(ele)', '(nós)', '(vocês)', '(eles)'];
  puzzPron = [
    '(eu) ',
    '(tu) ',
    '(ele/ela/você) ',
    '(nós) ',
    '(vocês) ',
    '(eles/elas) ',
  ];
  conjID2 = [
    'I',
    'you (PT)',
    'you (BR)',
    'he/she',
    'we',
    'you (plural)',
    'they',
  ];
} else if (lessonLanguage == 'French') {
  conjAlt = 'elle';
  conjAltNum = 3;
  conjAlt2 = 'elles';
  conjAltNum2 = 6;
  conjID = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles'];
  conjID2 = [
    'I',
    'you (informal)',
    'he/she',
    'we',
    'you (plural / formal)',
    'they',
  ];
  puzzPron = ['je ', 'tu ', 'il/elle ', 'nous ', 'vous ', 'ils/elles '];
} else if (lessonLanguage == 'German') {
  conjAlt = 'sie';
  conjAltNum = 3;
  conjAlt2 = 'es';
  conjAltNum2 = 3;
  conjID = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
  conjID2 = [
    'I',
    'you (informal)',
    'he/she/it',
    'we',
    'you (plural)',
    'they / you (formal)',
  ];
  puzzPron = ['ich ', 'du ', 'er/sie/es ', 'wir ', 'ihr ', 'Sie/sie '];
}
///PORTUGUESE CHANGE REPLACE END

/////LOAD CONJUGATION TITLES
var conjTitles;
var conjTitlesPuzz;

///2018CHANGE
function conjugationTitles() {
  if (lessonLanguage == 'Italian') {
    conjTitles = [
      "L'infinito",
      'Il presente',
      'Il passato&nbsp;prossimo',
      "L'imperfetto",
      'Il futuro&nbsp;semplice',
      'Il condizionale',
      'Il congiuntivo',
      "L'imperativo",
    ];
  } else if (lessonLanguage == 'Spanish') {
    conjTitles = [
      'Infititive',
      'Present',
      'Preterite',
      'Imperfect',
      'Future',
      'Conditional',
      'Subjunctive',
      'Imperative',
    ];
    if (lessonNumber >= 132) {
      conjTitles[1] = 'Present&nbsp;Progressive';
    }
  }
  ///PORTUGUESE CHANGE START
  else if (lessonLanguage == 'Portuguese') {
    conjTitles = [
      'Infinitive',
      'Present',
      'Preterite',
      'Imperfect',
      'Future',
      'Conditional',
      'Subjunctive',
      'Imperative',
    ];
    if (lessonNumber >= 132) {
      conjTitles[1] = 'Present&nbsp;Progressive';
    }
  }
  ///PORTUGUESE CHANGE END
  else if (lessonLanguage == 'French') {
    conjTitles = [
      'Infinitif',
      'Le présent',
      'Le passé&nbsp;composé',
      "L'imparfait",
      'Le futur&nbsp;simple',
      'Le conditionnel',
      'Le subjonctif',
      "L'impératif",
    ];
  } else if (lessonLanguage == 'German') {
    conjTitles = [
      'Infinitive',
      'Present',
      'Narrative Past',
      'Conversational Past',
      'Future',
      'Conditional',
      'Subjunctive',
      'Imperative',
    ];
  }
  if (conjNum == 6) {
    var subWord = 'que ';
    var subWord2 = "qu'";
    if (lessonLanguage == 'Italian') {
      subWord = 'che ';
      subWord2 = 'che ';
    }
    if (lessonLanguage == 'Spanish') {
      subWord2 = 'que ';
    }
    ///PORTUGUESE CHANGE START
    if (lessonLanguage == 'Portuguese') {
      subWord2 = 'que ';
    }
    ///PORTUGUESE CHANGE END
    puzzPron[0] = subWord + puzzPron[0];
    puzzPron[1] = subWord + puzzPron[1];
    puzzPron[2] = subWord2 + puzzPron[2];
    puzzPron[3] = subWord + puzzPron[3];
    puzzPron[4] = subWord + puzzPron[4];
    puzzPron[5] = subWord2 + puzzPron[5];
  }
  ///2018CHANGE
  conjTitlesPuzz = conjTitles;
}
conjugationTitles();

/////////CREATE QUIZ QUESTIONS
var forExamples = [];
var engExamples = [];

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
var articleArray = window[lessonLanguage + 'Articles'];
var specialChars = window[lessonLanguage + 'Chars'];
////////////////////////
var quizDescription2 =
  'Drag the conjugation puzzle pieces over to the correct subject pronoun. Each right answer will unlock a part of the picture hidden by puzzle pieces.';
var quizDescription3 =
  'Type in the correct ending corresponding to the conjugation. No more guessing here, you have to know the ending to get the right answer! Warning: Hints are not available for the endings lessons.';
var numWords = (numOfConj + 1) * 3;
var quizMapArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
];
var quizCombinedArray;

var closeWin =
  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25" xml:space="preserve"><g id="Ellipse_1_13_"><g><circle fill-rule="evenodd" clip-rule="evenodd" fill="#666" cx="12.5" cy="12.7" r="11.9"/></g></g><path fill="#FFFFFF" d="M14.8,12.7L18.5,9c0.3-0.3,0.3-0.8,0-1l-1.2-1.2c-0.3-0.3-0.8-0.3-1,0l-3.7,3.7L8.8,6.7c-0.3-0.3-0.8-0.3-1,0L6.5,7.9c-0.3,0.3-0.3,0.8,0,1l3.7,3.7l-3.7,3.7c-0.3,0.3-0.3,0.8,0,1l1.2,1.2c0.3,0.3,0.8,0.3,1,0l3.7-3.7l3.7,3.7c0.3,0.3,0.8,0.3,1,0l1.2-1.2c0.3-0.3,0.3-0.8,0-1L14.8,12.7z"/></svg>';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// VOCAB ONLY FONCTIONS INSIDE LOAD PRESENTATION

function loadPresentation() {
  ///////////////////////////CREATE SOUND ARRAY
  fastSounds = [];
  quizSounds = [];

  for (var numE = 1; numE <= narration.length; numE++) {
    fastSounds.push(oPath + 'sounds/narra' + numE + soundType);
  }
  for (var numD = 1; numD <= numWords; numD++) {
    fastSounds.push(oPath + 'sounds/sound' + numD + soundType);
  }
  quizSounds = [];
  for (var numDX = 1; numDX <= 18; numDX++) {
    quizSounds.push(oPath + 'sounds/quiz' + numDX + soundType);
  }
  ///////////END LOAD PRESENTATION
}

///5.1
function loadAudioCourse() {}
///5.1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DETERMINE BUTTON CLICKED
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DETERMINE BUTTON CLICKED
function buttonClicked() {
  picControl = 'picFade';
  var buttonNumber =
    parseInt($(this).attr('id').split('sideLabel').join('')) - 1;
  if (buttonNumber == 0) {
    currentWordNum = 0;
  } else if (buttonNumber == 1) {
    currentWordNum = 0 + narration.length;
  } else if (buttonNumber == 2) {
    currentWordNum = numOfPers + narration.length;
  } else if (buttonNumber == 3) {
    currentWordNum = numOfPers * 2 + narration.length;
  }
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
  if (screenRatio >= 1.5) {
    $('.chooseQuizIcon').css({
      height: typeHeight * 0.65 - 75 + 'px',
      width: 'auto',
    });
  } else {
    $('.chooseQuizIcon').css({ width: typeWidth * 0.4 + 'px', height: 'auto' });
  }

  viewportHeight = $('body').height() - 45;
  if (viewportHeight > 650 && screenRatio > 1) {
    spaceLeft = 520;
  } else {
    spaceLeft = viewportHeight - 130;
  }

  if (currentQuiz == 1) {
    ///IF PORTRAIT
    if (screenRatio <= 1) {
      $('.quizItems').css({ height: spaceLeft / 3 + 'px', top: '15px' });
      $('.quizItems').addClass('quizItemsPortrait');
    }
    ///IF LANDSCAPE
    else {
      $('.quizItems').css({ height: spaceLeft / 2 + 'px', top: '15px' });
      $('.quizItems').removeClass('quizItemsPortrait');
    }
    ////END IF LANDSCAPE
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
      if (viewportWidth > 700) {
        $('#quizAllItemsB, #quizMultiImg').css({ width: '47%' });
      } else {
        $('#quizAllItemsB').css({ width: '67%' });
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
      $('#quizAllItemsB, #quizMultiImg').css({
        height: spaceLeft * 0.48 + 'px',
      });
      $('#quizAllItemsB').css({ width: '96%', top: '30px' });
      $('#quizMultiImg').css({ width: '96%', top: '50px' });
    }
  }

  /////QUIZ 3 RESIZE
  if (currentQuiz == 3) {
    /////FONT SIZE
    spaceLeft = spaceLeft - 20;
    if (screenRatio > 1) {
      ////IF LANDSCAPE
      $('#sketchImg').show();
      if (viewportHeight > 600) {
        theFont = 28;
      } else if (viewportHeight < 450) {
        theFont = 22;
      } else {
        theFont = 25;
      }
      if (viewportHeight > 450) {
        if ($('#writeError').is(':hidden')) {
          $('.boardTop').show();
        }
      } else {
        $('.boardTop').hide();
      }
      ///2020
      $('#hintTable').css({ left: '9%', width: '46%' });
      $('#picFrame').css({ left: '-4%', top: '8%' });
      $('#picFrameIn').css({ left: '-4%', top: '-2%' });
      $('#sketchImg').css({ bottom: '1%', top: 'auto', opacity: '0.2' });
      $('#noteBook').css({
        width: '102%',
        left: '-1%',
        top: '-3%',
        'background-image': 'url(../../common/notebook2.svg)',
      });
      $('#quizAllItemsC').css({
        'margin-left': '10%',
        'padding-top': spaceLeft * 0.08 + 'px',
      });
      $('#quizWriteImg').css({ 'margin-right': '0%' });
      $('#quizAllItemsC, #quizWriteImg').css({
        width: '44%',
        height: spaceLeft * 0.95 + 'px',
      });
      $('#noteBook').css({ height: typeHeight * 1.03 + 'px' });
      $('#writeAnswerBoard').css({ height: spaceLeft * 0.4 + 'px' });
      $('#possibleDiv').css({ bottom: '6%', width: '26%' });
      $('#quizSentenceFor, #quizSentenceEng, #boardTable').css({
        color: '#422520',
      });
      $('.boardChar, #writeError2, .redText').css({ color: '#F00' });
      $('.quizSentenceWrap').css({ 'margin-top': '15px' });
    }
    ///2020
    else {
      ///IF PORTRAIT
      //2020
      $('#hintTable').css({ left: '3%', width: '94%' });
      $('#picFrame').css({ left: '0', top: '11%' });
      $('#sketchImg').css({ top: '50%', bottom: 'auto', opacity: '0.07' });
      $('#picFrameIn').css({ left: '0', top: '1%' });
      $('#quizSentenceFor, #quizSentenceEng, #boardTable').css({
        color: 'white',
      });
      $('.boardChar, #writeError2, .redText').css({ color: '#F00' });
      $('#noteBook').css({
        width: '96%',
        left: '1%',
        top: '-0.5%',
        'background-image': 'url(../../common/notebook1.svg)',
      });
      $('#quizAllItemsC').css({
        'margin-left': '6%',
        'padding-top': spaceLeft * 0.05 + 'px',
      });
      $('#noteBook').css({ height: typeHeight * 1.0 + 'px' });
      $('#quizAllItemsC').css({ width: '90%' });
      $('#quizWriteImg').css({
        width: '90%',
        'margin-right': '5%',
        top: '-50px',
      });
      if (viewportWidth < 550) {
        $('#quizWriteImg').css({
          width: '86%',
          'margin-right': '7%',
          'margin-top': '30px',
        });
      }
      $('.quizSentenceWrap').css({ 'margin-top': spaceLeft * 0.05 + 'px' });
      $('#quizWriteImg').css({ height: spaceLeft * 0.54 + 'px' });
      $('#quizAllItemsC').css({ height: spaceLeft * 0.38 + 'px' });
      $('#writeAnswerBoard').css({ height: spaceLeft * 0.38 - 70 + 'px' });
    }
    //2020
  }

  ////END RESIZE
  setTimeout(function () {
    resizeButtonQuizText();
    resizeQuizText();
  }, 20);
  /////
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
  ///OS END
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

  setTimeout(function () {
    if (numOfConj == 7) {
      $('.conjItems').css({
        'line-height': $('.conjContainer').height() * 0.092 + 'px',
      });
    } else if (numOfConj == 6) {
      $('.conjItems').css({
        'line-height': $('.conjContainer').height() * 0.102 + 'px',
      });
    } else if (numOfConj == 8) {
      $('.conjItems').css({
        'line-height': $('.conjContainer').height() * 0.085 + 'px',
      });
    }
  }, 20);
  //////////////////////////START PORTRAIT MODE
  if (screenRatio < 1 && $('html').width() != $('html').height()) {
    $('.ouinoContent').addClass('portrait');
    $('.ouinoContent').css({ height: areaHeight + 'px' });
    var picHeight = areaHeight - $('#sideConj').height() - 200;
    $('.shinyPicture').css({ height: picHeight + 'px' });
    $('.wordSentence').css({ height: '150px' });
  }
  //////////////////////////END PORTRAIT MODE
  //////////////////////////START LANDSCAPE MODE
  else {
    $('.ouinoContent').removeClass('portrait');
    $('.ouinoContent').css({ height: areaHeight + 'px' });
    $('.shinyPicture').css({ height: '36%' });
    $('.wordSentence').css({ height: '20%' });
  }
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
  resizeVerbMenu();
  //////////////END CHANGE BUTTON AND TEXT
}

///////////////////////////START CHANGE TITLE LENGTH DEPENDING ON SIZE
function resizeTitle() {
  $('.menuTitleContainer').html(lessonTitle);
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
var fastOverwrite = true;
var soundRepeated;
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
var fastSounds;
var quizSounds;
var checkAccent = false;
var foundArticle;
var quizGoodAnswer;
var quizGoodPunct;
var arrowClicks;
var writtenString;
var timerWait;
var verbInList;
var charsToAdd;
var selectPuzz;
var puzzContent;
var wArr;
var allLetters;
var scrambled;
var handAnimateOn;
var letterArray;
var letterArrayNum;
var currentQuiz;
var numOfPers = numOfConj + 1;
var pastQuizScore;
var quizNumArray;
var pastQuizScoreAll;
var quizPtsCount = 65;
var timerDelay;
var verbLetter = ['A', 'B', 'C', 'D', 'E', 'F'];
var vowels = ['a', 'e', 'i', 'o', 'u', 'h'];
var puzzPos = ['12%', '27%', '42%', '57%', '72%', '87%'];
var mouseIsDown;
var currentSprite;
var endingTimer;
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
  '<div id="pronounWarn"></div><div id="fontPreload1"></div><div id="fontPreload2"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel">RESTART LESSON</b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><span class="menuTitleContainer alignVerticalItem"></span><span class="menuBtnContainer"><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I' +
  "'" +
  'm confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoVerb.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr class="playbackOptions" ><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems playbackOptions" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr class="playbackOptions" ><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems playbackOptions""><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table><div style="text-align: center; margin-top: 40px; font-weight: 300; text-shadow: none; font-size: 15px;">Note: Playback speed and Subtitle options are not available for the verb endings lessons.</div></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><div id="verbBannerMenu"><div id="verbBanner1B" class="verbBannerItem2"></div><div id="verbBanner2B" class="verbBannerItem2"></div><div id="verbBanner3B" class="verbBannerItem2"></div><div id="verbBanner4B"></div><div class="closeWinBtn2"></div></div><div id="verbWrap"></div><div class="menuVerb"><div class="closeWinBtn"></div><div id="menuVerbContent"></div></div>';

var lessonAppend =
  '<div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><main class="ouinoContent selectOff"><div id="conjAnimation"></div><div id="wandAnimation"></div><div id="stemAnimation"></div><div id="sideConj"><table id="sideTable"> <tr> <th colspan="2"id="sideTitle"><strong>ARE</strong> Present Endings</th> </tr><tr> <td id="conjTD1"><div id="sh1" class="sideHilites1 sideItem1"></div><div id="sideForItem1" class="sideForItems"></div><div id="sideEngItem1" class="sideEngItems"></div></td><td><img id="sideHand1" class="sideHands" src="../../common/hand.svg"><div id="shB1" class="sideHilites2 sideItem1"></div><div id="sideEnding1" class="sideEndings"></div></td></tr><tr> <td id="conjTD2"><div id="sh2" class="sideHilites1 sideItem2"></div><div id="sideForItem2" class="sideForItems"></div><div id="sideEngItem2" class="sideEngItems"></div></td><td><img id="sideHand2" class="sideHands" src="../../common/hand.svg"><div id="shB2" class="sideHilites2 sideItem2"></div><div id="sideEnding2" class="sideEndings"></div></td></tr><tr> <td id="conjTD3"><div id="sh3" class="sideHilites1 sideItem3"></div><img id="starQues1b" class="starQuestion2" src="../../common/iconStar3.svg"><div id="sideForItem3" class="sideForItems"></div><div id="sideEngItem3" class="sideEngItems"></div></td><td><img id="sideHand3" class="sideHands" src="../../common/hand.svg"><div id="shB3" class="sideHilites2 sideItem3"></div><div id="lineJoin1" class="lineJoiner"></div><div id="sideEnding3" class="sideEndings"></div></td></tr><tr> <td id="conjTD4"><div id="sh4" class="sideHilites1 sideItem4"></div><div id="sideForItem4" class="sideForItems"></div><div id="sideEngItem4" class="sideEngItems"></div></td><td><img id="sideHand4" class="sideHands" src="../../common/hand.svg"><div id="shB4" class="sideHilites2 sideItem4"></div><div id="sideEnding4" class="sideEndings"></div></td></tr><tr> <td id="conjTD5"><div id="sh5" class="sideHilites1 sideItem5"></div><div id="sideForItem5" class="sideForItems"></div><div id="sideEngItem5" class="sideEngItems"></div></td><td><img id="sideHand5" class="sideHands" src="../../common/hand.svg"><div id="shB5" class="sideHilites2 sideItem5"></div><div id="sideEnding5" class="sideEndings"></div></td></tr><tr> <td id="conjTD6"><div id="sh6" class="sideHilites1 sideItem6"></div><img id="starQues2b" class="starQuestion2" src="../../common/iconStar3.svg"><div id="sideForItem6" class="sideForItems"></div><div id="sideEngItem6" class="sideEngItems"></div></td><td><img id="sideHand6" class="sideHands" src="../../common/hand.svg"><div id="shB6" class="sideHilites2 sideItem6"></div><div id="lineJoin2" class="lineJoiner"></div><div id="sideEnding6" class="sideEndings"></div></td></tr><tr> <td id="conjTD7"><div id="sh7" class="sideHilites1 sideItem7"></div><div id="sideForItem7" class="sideForItems"></div><div id="sideEngItem7" class="sideEngItems"></div></td><td><img id="sideHand7" class="sideHands" src="../../common/hand.svg"><div id="shB7" class="sideHilites2 sideItem7"></div><div id="sideEnding7" class="sideEndings"></div></td></tr><tr> <td colspan="2" id="starConjSame"><img src="../../common/iconStar2b.svg">Same Pronunciation.</td><td colspan="2" id="starConjWarn"><img src="../../common/iconStar2.svg">Always the same. Learn more...</td></tr></table></div><div class="menuConj"> <div id="menuVerbSec1"></div><div id="menuVerbSec2"></div><div class="closeWinBtn3"></div></div><figure class="shinyPicture"> <figure class="arrowControl"> <div class="leftArrow"></div><div class="rightArrow"></div><div id="middleSwipe"></div></figure> <figure class="mainPic2" alt="mainImage"></figure> <figure class="mainPic1" alt="mainImage"></figure> </figure> <section class="wordSentence"> <div id="sideLabel1" class="sideLabels">N</div><div id="sideLabel2" class="sideLabels">1</div><div id="sideLabel3" class="sideLabels">2</div><div id="sideLabel4" class="sideLabels">3</div><div class="wordSentenceIn alignVerticalItem"> <h6 class="narrSentence"></h6> <div class="textWrap3"> <h6 class="disSentence">-Text Disabled-</h6> </div><div class="textWrap"> <h6 class="forSentence"></h6> </div><br><div class="textWrap2"> <h6 class="engSentence"></h6> </div></div></section> <aside class="conjContainer"> <div id="conjForeign"> <div> <p id="conjTitleFor" class="conjTitle"><img class="flagIcon" src="../../common/flagIcon.svg"></p></div><div id="conjSpan"> <img id="starQues1" class="starQuestion" src="../../common/iconStar.svg"> <img id="starQues2" class="starQuestion" src="../../common/iconStar.svg"> <div id="conjItem0" class="conjItems"></div><div id="conjItem1" class="conjItems"></div><div id="conjItem2" class="conjItems"></div><div id="conjItem3" class="conjItems"></div><div id="conjItem4" class="conjItems"></div><div id="conjItem5" class="conjItems"></div><div id="conjItem6" class="conjItems"></div><div id="conjItem7" class="conjItems"></div><div id="conjItem8" class="conjItems"></div></div></div><div id="conjEnglish"> <div> <p class="conjTitle" id="conjEngTitle"><img class="flagIcon" src="../../common/flagIcon2.svg">English</p></div><div id="conjSpan2"> <div id="conjItemB0" class="conjItems"></div><div id="conjItemB1" class="conjItems"></div><div id="conjItemB2" class="conjItems"></div><div id="conjItemB3" class="conjItems"></div><div id="conjItemB4" class="conjItems"></div><div id="conjItemB5" class="conjItems"></div><div id="conjItemB6" class="conjItems"></div><div id="conjItemB7" class="conjItems"></div><div id="conjItemB8" class="conjItems"></div></div></div></aside> <div class="buttonWrap"></div></main>';

var quizAppend =
  '<img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><div id="puzzleBack"></div><img id="quizGoBack" src="../../common/menuIcon1.svg"> <div id="wrongAnswerPic"> <div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"> <div id="goodAnswerIn"></div></div><table id="quizDone" > <tr> <th colspan="2" id="quizDoneTitle"></th> </tr><tr> <td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr> <td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp; <p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr> <td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div></td></tr></table> <div id="quizScoreBack"> <div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"><div id="quizTimerPointer"><img id="quizTimerImage" src="../../common/timerPointer.svg"></div><div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizTimer2"> <div id="quizTimerGood2"></div><div id="quizTimerBar"></div><div id="quizTimerBad2"></div></div><div id="quizItself"> <div id="quizSentenceContainer"> <div class="quizSentenceWrap"> <span id="quizSentenceFor"></span><br> <span id="quizSentenceEng"></span> </div></div><div class="textWrap5"></div><div id="quizAllItems"> <div id="quizItem1" class="quizItems"> <p id="quizEng1" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem2" class="quizItems"> <p id="quizEng2" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem3" class="quizItems"> <p id="quizEng3" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem4" class="quizItems"> <p id="quizEng4" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem5" class="quizItems"> <p id="quizEng5" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem6" class="quizItems"> <p id="quizEng6" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div></div><div id="quizAllItemsB"></div><div id="textureIn"></div><div id="quizAllItemsD"></div><div id="quizMultiImg"> <div id="topPuzzle"></div><div id="goodAnswerPic2"> <div id="goodAnswerIn2"></div></div><div id="wrongAnswerPic2"> <div id="wrongAnswerIn"></div></div></div><div id="quizAllItemsC"> <img id="sketchImg" src="../../common/sketch.png"><form id="answerForm" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false"> <input type="text" id="writeAnswerField" placeholder="Type Ending Here"/> </form> <div id="writeAnswerBoard"> <table id="boardTable"> <tr id="specialChars"> <td id="char1" class="boardChar"></td><td id="char2" class="boardChar"></td><td id="char3" class="boardChar"></td><td id="char4" class="boardChar"></td><td id="char5" class="boardChar"></td><td id="char6" class="boardChar"></td></tr><tr> <td colspan="6" id="writeError"></td></tr><tr> <td colspan="6" id="boardMain"></td></tr><tr> <td colspan="6" id="writeError2">CONTINUE</td></tr></table> </div></div><div id="noteBook"></div><div id="quizWriteImg"> <div id="picFrame"></div><div id="picFrameIn"></div><img id="wrongLogo1" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo2" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo3" class="wrongLogo" src="../../common/strike.svg"></div></div><table id="quizPreload"> <tr> <th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th> </tr><tr> <td id="quizPreloadMedal"></td></tr><tr> <td id="quizPreloadStart">START NOW</td></tr></table> <div id="quizStart"> <div id="quizStartImg"> <div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div><table id="quizMenu"> <tr> <th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th> </tr><tr> <td rowspan="2" id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">CONJUGATION MATCH</h2> <img class="chooseQuizIcon" src="../../common/quizverb2.svg"/> <h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td rowspan="2" id="quizBtn3" class="quizType"><div id="sMedal3" class="smallMedal"></div><h2 class="chooseQuizText">WRITE IT OUT</h2> <img class="chooseQuizIcon" src="../../common/quizverb4.svg"/> <h2 class="chooseQuizText2">Difficulty: Average</h2></td></tr><tr> <td id="quizBtn1" class="quizType" style="display:none;"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">SIMPLE PRACTICE</h2> <img class="chooseQuizIcon" src="../../common/quizverb1.svg"/> <h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td id="quizBtn4" class="quizType" style="display:none;"><div id="sMedal4" class="smallMedal"></div><h2 class="chooseQuizText">By the Book</h2> <img class="chooseQuizIcon" src="../../common/quizverb4.svg"/> <h2 class="chooseQuizText2">Difficulty: Hard</h2></td></tr></table></main>';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CREATE IMAGE ARRAY
var imageArray = [
  oPath + 'images/pic1.jpg',
  oPath + 'images/pic2.jpg',
  oPath + 'images/pic3.jpg',
  oPath + 'images/pic4.jpg',
  oPath + 'images/pic5.jpg',
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD FAST SOUND
function loadFastSound() {
  fastOrSlow = 'fast';
  clearTimeout(wordTimer);
  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', fastSounds[currentWordNum]);
  document.getElementById('mainSound').load();
  document.getElementById('mainSound').addEventListener('canplay', playSound);
  soundPlaying = true;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD SLOW SOUND
function loadSlowSound() {
  ////MODIFIED FOR ENDINGS ONLY
  nextImage();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PLAY SOUND
function playSound() {
  $('.timerMeter > .timerSpan').stop();
  $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
  setTimeout(function () {
    document
      .getElementById('mainSound')
      .removeEventListener('canplay', playSound);
    $('#mainSound').trigger('play');
  }, 500);
  soundPlaying = true;
}

function playMusic() {
  document
    .getElementById('mainMusic')
    .removeEventListener('canplay', playMusic);
  document.getElementById('mainMusic').volume =
    document.getElementById('mainSound').volume * 0.4;
  $('#mainMusic').trigger('play');
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
        'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
        'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
        'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
        'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
          'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
          'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
    if (currentWordNum != numWords - 1 + narration.length) {
      picControl = 'picNext';
      currentWordNum++;
      changeWord();
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
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PREV IMAGE
function prevImage() {
  if (arrowClicks != 'disable') {
    picControl = 'picPrev';

    if (currentWordNum == narration.length + 1) {
      currentWordNum--;
      currentWordNum--;
      changeWord();
    } else if (currentWordNum != 0) {
      currentWordNum--;
      changeWord();
    }
  }
}

function changeSound() {
  if ($('#pauseWrap').is(':visible')) {
    return;
  }
  /////START SOUND OPTIONS WITH INITIALISATION
  if (lessonInit == 'true') {
    fastOrSlow = 'fast';
    $('.timerMeter > .timerSpan').stop();
    $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
    $('#mainSound').trigger('pause');
    if (narration.length >= 1) {
      $('#mainSound').attr('src', oPath + 'sounds/narra1' + soundType);
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
    loadFastSound();
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHANGE WORD
function changeWord() {
  ///PORTUGUESE CHANGE LEFT OFF START
  saveLeftOff(numOfPers * 3 + (narration.length - 1));
  ///PORTUGUESE CHANGE LEFT OFF END

  soundRepeated = 0;
  var theEnding;
  handAnimateOn = false;
  $('#wandAnimation, #stemAnimation').hide();
  fastOrSlow = 'fast';
  clearTimeout(wordTimer);
  $('#mainSound').trigger('pause');
  $('#conjAnimation').css({ opacity: '0' });
  clearTimeout(endingTimer);

  $('#pauseBtn').attr('src', '../../common/pause.svg');
  if (currentWordNum < narration.length) {
    timerLength = 1000;
  } else {
    timerLength = $('#selectInterval').val() * 1000;
  }

  ///////START Next Control Toggle
  if (currentWordNum < 1) {
    $('.leftArrow').hide();
    $('.rightArrow').show();
  } else if (currentWordNum >= numWords - 1 + narration.length) {
    $('.leftArrow').show();
    $('.rightArrow').hide();
  } else {
    $('.leftArrow').show();
    $('.rightArrow').show();
  }
  ///////END Next Control Toggle

  var currentMinusNarr = currentWordNum - narration.length;
  var residual = currentMinusNarr % numOfPers;
  var theConj = conjNum;

  if (currentWordNum < narration.length) {
    verbType = verbTypes[0];
    theEndings = passEndings1;
    $('#sideTitle').html(
      '<strong>' + verbType + '</strong> Endings (' + conjTitles[conjNum] + ')',
    );
    for (var numE = 1; numE <= numOfConj; numE++) {
      $('#sideEnding' + numE).html(theEndings[numE - 1]);
    }
    $('.mainPic1, .mainPic2').css({
      'background-image': 'url(../../common/verbType1.png)',
    });
    verbInList = 1;
    $('.conjItems').text('');
    $('.sideLabels').css({ background: btnColor[1] });
    $('#sideLabel1').css({ background: '#ebbc31' });
    $('.conjItems').removeClass('hilite');
    $('.sideHilites1, .sideHilites2').css({ opacity: '0' });
    $('.sideHands').removeClass('sideHandsAnimate');
    $('.narrSentence').html(narration[currentWordNum]);
    $('.narrSentence').show();
    $('.engSentence, .forSentence').html('');
    $('#conjItem0').html('<strong>' + verbType + '</strong>');
    $('#conjItemB0').html(englishVerbs[verbInList - 1]);
    for (
      var num = 1;
      num <= window['forConj' + theConj + verbLetter[verbInList - 1]].length;
      num++
    ) {
      if (num == 1 && lessonLanguage == 'French') {
        if (vowels.indexOf(replaceText[verbInList - 1].charAt(0)) != -1) {
          $('#conjItem' + num).append(
            window['forConj' + theConj + verbLetter[verbInList - 1]][num - 1]
              .replace('zzzz', replaceText[verbInList - 1])
              .replace("Je/J' ", "J'"),
          );
        } else {
          $('#conjItem' + num).append(
            window['forConj' + theConj + verbLetter[verbInList - 1]][num - 1]
              .replace('zzzz', replaceText[verbInList - 1])
              .replace("Je/J' ", 'Je '),
          );
        }
      } else {
        $('#conjItem' + num).append(
          window['forConj' + theConj + verbLetter[verbInList - 1]][
            num - 1
          ].replace('zzzz', replaceText[verbInList - 1]),
        );
      }
      $('#conjItemB' + num).append(
        window['engConj' + theConj + verbLetter[verbInList - 1]][num - 1],
      );
      changeSound();
    }
    resizeText();
    return;
  }

  $('.narrSentence').hide();
  if (residual == 0) {
    if (picControl != 'picPrev') {
      ////Conjugation Load
      if (currentMinusNarr < numOfPers) {
        verbInList = 1;
      } else if (currentMinusNarr == numOfPers) {
        verbInList = 2;
      } else if (currentMinusNarr == numOfPers * 2) {
        verbInList = 3;
      }
      if (currentWordNum < narration.length + numOfPers) {
        verbType = verbTypes[0];
        theEndings = passEndings1;
      } else if (currentWordNum < narration.length + numOfPers * 2) {
        verbType = verbTypes[1];
        theEndings = passEndings2;
      } else if (currentWordNum < narration.length + numOfPers * 3) {
        verbType = verbTypes[2];
        theEndings = passEndings3;
      }
      $('#sideTitle').html(
        '<strong>' +
          verbType +
          '</strong> Endings (' +
          conjTitles[conjNum] +
          ')',
      );
      for (var numE = 1; numE <= numOfConj; numE++) {
        $('#sideEnding' + numE).html(theEndings[numE - 1]);
      }
      $('.conjItems').text('');
      $('.sideLabels').css({ background: btnColor[1] });
      $('#sideLabel' + (verbInList + 1)).css({ background: '#ebbc31' });
      if (currentMinusNarr != 0) {
        $('#conjItem0').html(
          capitalFirst(replaceText[verbInList - 1]) +
            '<strong>' +
            verbType.toLowerCase() +
            '</strong>',
        );
      } else {
        $('#conjItem0').html('<strong>' + verbType + '</strong>');
      }
      $('#conjItemB0').html(englishVerbs[verbInList - 1]);
      for (var num = 1; num <= window['forConj' + theConj].length; num++) {
        if (num == 1 && lessonLanguage == 'French') {
          if (vowels.indexOf(replaceText[verbInList - 1].charAt(0)) != -1) {
            $('#conjItem' + num).append(
              window['forConj' + theConj + verbLetter[verbInList - 1]][num - 1]
                .replace('zzzz', replaceText[verbInList - 1])
                .replace("Je/J' ", "J'"),
            );
          } else {
            $('#conjItem' + num).append(
              window['forConj' + theConj + verbLetter[verbInList - 1]][num - 1]
                .replace('zzzz', replaceText[verbInList - 1])
                .replace("Je/J' ", 'Je '),
            );
          }
        } else {
          $('#conjItem' + num).append(
            window['forConj' + theConj + verbLetter[verbInList - 1]][
              num - 1
            ].replace('zzzz', replaceText[verbInList - 1]),
          );
        }
        ///PORTUGUESE CHANGE START REPLACE
        $('#conjItemB' + num).append(
          window['engConj' + theConj + verbLetter[verbInList - 1]][num - 1],
        );
        if (lessonLanguage == 'Portuguese') {
          $('#conjItemB' + num).html(
            window['engConj' + theConj + verbLetter[verbInList - 1]][num - 1]
              .split('(Portugal informal')
              .join('(PT inf.')
              .split('(Brazil informal')
              .join('(BR inf.'),
          );
        }
      }
      ///PORTUGUESE CHANGE END
      swapImages();
    }
    $('.conjItems').removeClass('hilite');
    $('.sideHilites1, .sideHilites2').css({ opacity: '0' });
    $('.sideHands').removeClass('sideHandsAnimate');
    $('#conjItem0, #conjItemB0').addClass('hilite');
    $('.forSentence').html(
      capitalFirst(replaceText[verbInList - 1]) +
        '<strong>' +
        verbType.toLowerCase() +
        '</strong>',
    );
    $('.engSentence').html(englishVerbs[verbInList - 1]);
    handAnimateOn = true;
    changeSound();
  } else if (residual == numOfPers - 1 && picControl == 'picPrev') {
    ////Conjugation Load
    if (currentMinusNarr == numOfPers - 1) {
      verbInList = 1;
    } else if (currentMinusNarr == numOfPers * 2 - 1) {
      verbInList = 2;
    }
    if (currentWordNum < narration.length + numOfPers) {
      verbType = verbTypes[0];
      theEndings = passEndings1;
    } else if (currentWordNum < narration.length + numOfPers * 2) {
      verbType = verbTypes[1];
      theEndings = passEndings2;
    } else if (currentWordNum < narration.length + numOfPers * 3) {
      verbType = verbTypes[2];
      theEndings = passEndings3;
    }
    $('#sideTitle').html(
      '<strong>' + verbType + '</strong> Endings (' + conjTitles[conjNum] + ')',
    );
    for (var numE = 1; numE <= numOfConj; numE++) {
      $('#sideEnding' + numE).html(theEndings[numE - 1]);
    }
    $('.conjItems').text('');
    $('.sideLabels').css({ background: btnColor[1] });
    $('#sideLabel' + (verbInList + 1)).css({ background: '#ebbc31' });
    if (currentMinusNarr != numOfPers - 1) {
      $('#conjItem0').html(
        capitalFirst(replaceText[verbInList - 1]) +
          '<strong>' +
          verbType.toLowerCase() +
          '</strong>',
      );
    } else {
      $('#conjItem0').html('<strong>' + verbType + '</strong>');
    }
    $('#conjItemB0').html(englishVerbs[verbInList - 1]);
    for (var num = 1; num <= window['forConj' + theConj].length; num++) {
      if (num == 1 && lessonLanguage == 'French') {
        if (vowels.indexOf(replaceText[verbInList - 1].charAt(0)) != -1) {
          $('#conjItem' + num).append(
            window['forConj' + theConj + verbLetter[verbInList - 1]][num - 1]
              .replace('zzzz', replaceText[verbInList - 1])
              .replace("Je/J' ", "J'"),
          );
        } else {
          $('#conjItem' + num).append(
            window['forConj' + theConj + verbLetter[verbInList - 1]][num - 1]
              .replace('zzzz', replaceText[verbInList - 1])
              .replace("Je/J' ", 'Je '),
          );
        }
      } else {
        $('#conjItem' + num).append(
          window['forConj' + theConj + verbLetter[verbInList - 1]][
            num - 1
          ].replace('zzzz', replaceText[verbInList - 1]),
        );
      }
      $('#conjItemB' + num).append(
        window['engConj' + theConj + verbLetter[verbInList - 1]][num - 1],
      );
    }
    swapImages();
    $('.conjItems').removeClass('hilite');
    $('.sideHilites1, .sideHilites2').css({ opacity: '0' });
    $('.sideHands').removeClass('sideHandsAnimate');
    $('#conjItem' + residual).addClass('hilite');
    $('#conjItemB' + residual).addClass('hilite');
    $('.sideItem' + residual).css({ opacity: '1' });
    $('#sideHand' + residual).addClass('sideHandsAnimate');
    $('.forSentence').html(
      window['forConj' + theConj][residual - 1]
        .replace('zzzz', replaceText[verbInList - 1])
        .replace('(', "<b style='opacity:0.5;'>(")
        .replace(')', ')</b>'),
    );
    $('.forSentence strong').css({ opacity: '0' });
    var oldPos = $('#sideEnding' + residual).offset();
    var newPos = $('.forSentence strong').offset();
    $('#conjAnimation').text($('#sideEnding' + residual).text());
    $('#conjAnimation').css({
      left: oldPos.left + 'px',
      top: oldPos.top + 'px',
      opacity: '1',
    });
    $('#conjAnimation').animate(
      { left: newPos.left + 'px', top: newPos.top + 'px' },
      1500,
    );
    endingTimer = setTimeout(function () {
      $('.forSentence strong').css({ opacity: '1' });
      $('#conjAnimation').css({ opacity: '0' });
      changeSound();
    }, 1500);
    $('.engSentence').html(
      window['engConj' + theConj + verbLetter[verbInList - 1]][residual - 1],
    );
  } else {
    ///// START Change English Text
    $('.conjItems').removeClass('hilite');
    $('.sideHilites1, .sideHilites2').css({ opacity: '0' });
    $('.sideHands').removeClass('sideHandsAnimate');
    $('#conjItem' + residual).addClass('hilite');
    $('#conjItemB' + residual).addClass('hilite');
    $('.sideItem' + residual).css({ opacity: '1' });
    $('#sideHand' + residual).addClass('sideHandsAnimate');
    $('.forSentence').html(
      window['forConj' + theConj + verbLetter[verbInList - 1]][residual - 1]
        .replace('zzzz', replaceText[verbInList - 1])
        .replace('(', "<b style='opacity:0.5;'>(")
        .replace(')', ')</b>'),
    );
    if (residual == 1 && lessonLanguage == 'French') {
      if (vowels.indexOf(replaceText[verbInList - 1].charAt(0)) != -1) {
        $('.forSentence').html(
          window['forConj' + theConj + verbLetter[verbInList - 1]][residual - 1]
            .replace('zzzz', replaceText[verbInList - 1])
            .replace('(', "<b style='opacity:0.5;'>(")
            .replace(')', ')</b>')
            .replace("Je/J' ", "J'"),
        );
      } else {
        $('.forSentence').html(
          window['forConj' + theConj + verbLetter[verbInList - 1]][residual - 1]
            .replace('zzzz', replaceText[verbInList - 1])
            .replace('(', "<b style='opacity:0.5;'>(")
            .replace(')', ')</b>')
            .replace("Je/J' ", 'Je '),
        );
      }
    }
    $('.forSentence strong').css({ opacity: '0' });
    var oldPos = $('#sideEnding' + residual).offset();
    var newPos = $('.forSentence strong').offset();
    $('#conjAnimation').text($('#sideEnding' + residual).text());
    $('#conjAnimation').css({
      left: oldPos.left + 'px',
      top: oldPos.top + 'px',
      opacity: '1',
    });
    $('#conjAnimation').animate(
      { left: newPos.left + 'px', top: newPos.top + 'px' },
      1500,
    );
    endingTimer = setTimeout(function () {
      $('.forSentence strong').css({ opacity: '1' });
      $('#conjAnimation').css({ opacity: '0' });
      changeSound();
    }, 1500);
    $('.engSentence').html(
      window['engConj' + theConj + verbLetter[verbInList - 1]][residual - 1],
    );
  }
  //// END Change Foreign Text
  resizeText();
  ///END IF NEW SLIDE
}

//////////////////////////////////////////////////////////////////////////////////START RESIZE TEXT
function resizeText() {
  theFont = 26;
  ///RESIZE CONJUGATION
  $('.forSentenceB').css({ fontSize: theFont + 'px' });
  if ($('.engSentenceB').hasClass('engSentenceOnly')) {
    $('.engSentenceB').css({ fontSize: theFont + 'px' });
  } else {
    $('.engSentenceB').css({ fontSize: 18 + 'px' });
  }

  var myTextWidth = $('.textWrapB').width();
  var elementWidth = $('.conjContainer').width() * 0.9;
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
    for (var numC = 18; myTextWidth2 > elementWidth; numC--) {
      myTextWidth2 = $('.textWrap2B').width();
      var newSize2 = numC;
      $('.engSentenceB').css({ fontSize: newSize2 + 'px' });
    }
  }

  ////RESIZE NORMAL SENTENCE
  $('.forSentence').css({ fontSize: theFont + 'px' });
  $('.forSentence').removeClass('smallFont');
  if ($('.engSentence').hasClass('engSentenceOnly')) {
    $('.engSentence').css({ fontSize: theFont + 'px' });
  } else {
    $('.engSentence').css({ fontSize: 18 + 'px' });
  }

  var myTextWidth = $('.textWrap').width();
  var elementWidth = $('.ouinoContent').width() * 0.96;
  var myTextWidth2 = $('.textWrap2').width();
  for (var numB = theFont; myTextWidth > elementWidth; numB--) {
    myTextWidth = $('.textWrap').width();
    var newSize = numB;
    $('.forSentence').css({ fontSize: newSize + 'px' });
    if (numB < 20) {
      $('.forSentence').addClass('smallFont');
    }
  }

  if ($('.engSentence').hasClass('engSentenceOnly')) {
    for (var numC = theFont; myTextWidth2 > elementWidth; numC--) {
      myTextWidth2 = $('.textWrap2').width();
      var newSize2 = numC;
      $('.engSentence').css({ fontSize: newSize2 + 'px' });
    }
  } else {
    for (var numC = 18; myTextWidth2 > elementWidth; numC--) {
      myTextWidth2 = $('.textWrap2').width();
      var newSize2 = numC;
      $('.engSentence').css({ fontSize: newSize2 + 'px' });
    }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////END RESIZE TEXT

function resizeQuizText() {
  var myTextWidth;
  var elementWidth;
  var newSize;

  ////2020
  $('#quizSentenceFor').css({ fontSize: 28 + 'px' });
  myTextWidth = $('#quizSentenceFor').width();
  elementWidth = $('#quizContent').width() - 15;
  for (var num = 28; myTextWidth > elementWidth; num--) {
    newSize = num;
    $('#quizSentenceFor').css({ fontSize: newSize + 'px' });
    myTextWidth = $('#quizSentenceFor').width();
  }

  $('#quizSentenceEng').css({ fontSize: '18px' });
  myTextWidth = $('#quizSentenceEng').width();
  elementWidth = $('#quizContent').width() - 15;
  for (var num = 18; myTextWidth > elementWidth; num--) {
    ////2020
    newSize = num;
    $('#quizSentenceEng').css({ fontSize: newSize + 'px' });
    myTextWidth = $('#quizSentenceEng').width();
  }

  if (currentQuiz == 2) {
    var quizHeight = $('#quizAllItemsB').height();
    if (quizHeight > 480) {
      $('.puzzTXT, .puzzTXT2').css({
        'line-height': '60px',
        fontSize: '18px',
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
}

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

  ///NO QUIZ
  noQuizOn = true;

  if (
    lessonLanguage == 'Spanish' &&
    lessonNumber >= 132 &&
    lessonNumber <= 134
  ) {
    noQuizOn = true;
  }
  ///PORTUGUESE CHANGE START
  if (
    lessonLanguage == 'Portuguese' &&
    lessonNumber >= 132 &&
    lessonNumber <= 134
  ) {
    noQuizOn = true;
  }
  ///PORTUGUESE CHANGE END

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
  if (verbTypeNum == 1) {
    $('#sideConj, .wordSentence, .conjContainer,.shinyPicture').addClass(
      'greenGradient',
    );
  } else if (verbTypeNum == 2) {
    $('#sideConj, .wordSentence, .conjContainer,.shinyPicture').addClass(
      'blueGradient',
    );
  } else if (verbTypeNum == 3) {
    $('#sideConj, .wordSentence, .conjContainer,.shinyPicture').addClass(
      'redGradient',
    );
  }

  /////LOAD SOUND SPRITE
  audioSprite = document.getElementById('sfxSprite');
  audioSprite.addEventListener('timeupdate', onTimeUpdate, false);
  if (osType.indexOf('droid') != -1) {
    $('#musCol').hide();
    $('#menuPad').css({ height: '225px' });
  }

  $('.playbackOptions').hide();
  //////LOAD LOG IN
  if (sessionStorage['LOGGEDIN'] == null) {
    loadLogIn();
  }
  ///////////TIMER CSS
  $('.timerMeter > .timerSpan').css({ background: btnColor[0], width: 0 });

  ///PORTUGUESE CHANGE START
  if (verbTypeNum == 1) {
    $('#background').addClass('greenGradient2');
  } else if (verbTypeNum == 2 || verbTypeNum == 4) {
    $('#background').addClass('blueGradient2');
  } else if (verbTypeNum == 3) {
    $('#background').addClass('redGradient2');
  }
  ///PORTUGUESE CHANGE END
  ///////////Bullet CSS
  $('.sideLabels').css({ background: btnColor[1] });
  ///APPLY INITIAL BACKGROUND PICTURE
  $('.mainPic1').css({
    'background-image': 'url(' + oPath + 'images/pic1.jpg)',
  });

  if (lessonLanguage == 'French') {
    $(
      '.starQuestion, .starQuestion2, #pronounWarn, #starConjWarn, .lineJoiner',
    ).hide();
    sameStars();
  } else if (lessonLanguage == 'Italian') {
    $('#starQues1').css({ top: '41%' });
    $('#starQues2, #starQues2b, #lineJoin2, #starConjSame').hide();
  } else if (lessonLanguage == 'Spanish') {
    $('#starConjSame').hide();
  }

  ///2018CHANGE
  if (conjNum == 7) {
    $(
      '.starQuestion, .starQuestion2, #pronounWarn, #starConjWarn, .lineJoiner',
    ).hide();
  }
  ///2018CHANGE

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
  if (verbTypeNum == 1) {
    $('.sideHilites1, .sideHilites2').css({ background: '' });
  } else if (verbTypeNum == 2) {
    $('.sideHilites1, .sideHilites2').css({ background: '' });
  } else if (verbTypeNum == 3) {
    $('.sideHilites1, .sideHilites2').css({ background: '' });
  }
  ///////TABLET OR DESKTOP BUTTON OPTIONS

  loadButtonsMain();
  ///////END DESKTOP OPTIONS
  $(window).resize(function () {
    resizePage();
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

  $('#dictBtn').hide();
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

  if (quizScores != null) {
    pastQuizScoreAll = quizScores[lessonNumber - 1];
  } else {
    pastQuizScoreAll = '0|0|0|0';
  }
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
    document
      .getElementById('mainSound')
      .removeEventListener('ended', setTimer2);
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

  /////CODE IF ERROR MODE
  if (errorMode == true && lessonNumber !== 0) {
    if (currentQuiz === 2) {
      loadQuiz2();
    } else if (currentQuiz === 3) {
      loadQuiz3();
    }
  }
  /////CODE IF ERROR MODE
}

function loadQuiz2() {
  quizCombinedArray = shuffle(quizMapArray);
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong3.svg)',
  });
  $(
    '#quizSentenceContainer, #quizAllItemsC, #quizWriteImg, #quizAllItems, #noteBook, #quizAllItemsD, #textureIn',
  ).hide();
  $('#quizAllItemsB, #quizMultiImg').show();
  $('#quizMenu').hide();
  timerTime = 7000;
  /// SEE ACTIONS FOR TIMERWAIT
  quizNumQues = 18;
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
  forExamples = [];
  engExamples = [];
  for (var numX = 0; numX < numOfConj; numX++) {
    forExamples.push(
      window['forConj' + conjNum][numX].replace('zzzz', replaceText[3]),
    );
    engExamples.push(window['engConj' + conjNum + 'C'][numX]);
  }
  for (var numX = 0; numX < numOfConj; numX++) {
    forExamples.push(
      window['forConj' + conjNum][numX].replace('zzzz', replaceText[4]),
    );
    engExamples.push(window['engConj' + conjNum + 'D'][numX]);
  }
  for (var numX = 0; numX < numOfConj; numX++) {
    forExamples.push(
      window['forConj' + conjNum][numX].replace('zzzz', replaceText[5]),
    );
    engExamples.push(window['engConj' + conjNum + 'E'][numX]);
  }
  if (lessonLanguage != 'French') {
    forExamples.splice(2, 1);
    forExamples.splice(9, 1);
    forExamples.splice(14, 1);
    engExamples.splice(2, 1);
    engExamples.splice(9, 1);
    engExamples.splice(14, 1);
  }

  var quizArray1 = shuffle([1, 2, 3, 4, 5, 6]);
  var quizArray2 = shuffle([7, 8, 9, 10, 11, 12]);
  var quizArray3 = shuffle([13, 14, 15, 16, 17, 18]);
  quizCombinedArray = quizArray1.concat(quizArray2.concat(quizArray3));
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong3.svg)',
  });
  findAccents();
  $(
    '#quizAllItemsB, #quizMultiImg, #quizAllItems, #quizAllItemsD, #textureIn',
  ).hide();
  $('#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #noteBook').show();
  disableTimer = true;
  $('#quizMenu').hide();
  timerTime = 20000;
  quizNumQues = 18;
  if (errorMode == true) {
    quizNumQues = errors.length;
  }
  $('#numberOfQues').text(quizNumQues);
  $('.quizPreloadTitle').text(quizTitle3);
  $('#quizPreloadDescription').text(quizDescription3);
  $('#quizStartImg, #quizPreloadMedal').css({
    'background-image': 'url(../../common/quiz' + currentSecShort + '4.svg)',
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
      if (currentQuiz != 3) {
        $('#quizTimerPointer').show();
      }
      if (currentQuiz <= 2) {
        $('#quizTimer').show();
      } else if (currentQuiz == 4) {
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
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  var position2 = quizNumArray.indexOf(quizQuesNum);
  if (~position2) {
    quizNumArray.splice(position2, 1);
  }
  setTimeout(function () {
    resizeButtonQuizText();
    resizeQuizText();
  }, 1);
  if (currentQuiz == 2) {
    quizActions2();
  } else if (currentQuiz == 3) {
    quizActions3();
  }
}

function quizActions2() {
  if (!$('#puzzleBack').is(':visible')) {
    $('#puzzleBack').fadeIn();
  }

  setTimeout(function () {
    maxScore = 65;
    quizPtsCount = 65;
    $('#quizScoreBack').css({
      'background-image': 'url(../../common/scoreBack4.svg)',
    });
    $('#goodAnswerIn2').css({
      'background-image': 'url(../../common/score4.svg)',
    });
    $('#quizScoreImg').attr('src', '../../common/score4.svg');
  }, 1000);
  if (currQuizNum == 1) {
    theConj = conjNum[2];
    placePuzzle();
  } else if (currQuizNum == 7) {
    if (conjNum[0] == 0) {
      theConj = 2;
    } else {
      theConj = conjNum[8];
    }
    setTimeout(function () {
      placePuzzle();
      quizTimerAnimate();
    }, 2000);
  } else if (currQuizNum == 13) {
    theConj = 3;
    setTimeout(function () {
      placePuzzle();
      quizTimerAnimate();
    }, 2000);
  } else {
    timerWait = 500;
    quizTimerAnimate();
  }
}

function placePuzzle() {
  timerWait = 2000;
  $('#quizAllItemsB').css({ opacity: 0 });
  $('#quizAllItemsB').html(puzzHTML);
  $('#topPuzzle').html(puzzleMaker);
  puzzleArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  puzzleArray = shuffle(puzzleArray);
  var currentVerb;

  if (currQuizNum == 1) {
    currentVerb = 3;
  } else if (currQuizNum == 7) {
    currentVerb = 4;
  } else if (currQuizNum == 13) {
    currentVerb = 5;
  }

  $('#quizMultiImg').css({
    'background-image': 'url(' + oPath + 'images/pic' + currentVerb + '.jpg)',
  });
  var infVerb =
    capitalFirst(replaceText[currentVerb]) +
    '<strong>' +
    verbType.toLowerCase() +
    '</strong>';
  $('#puzzleTitle').html(
    infVerb +
      ' (' +
      englishVerbs[currentVerb].toLowerCase() +
      '): ' +
      conjTitles[conjNum],
  );
  $('#quizAllItemsB').animate({ opacity: 1 });
  loadDrag();
  if (
    lessonLanguage == 'French' &&
    vowels.indexOf(replaceText[currentVerb].charAt(0)) != -1
  ) {
    $('#puzz1AText').text("j'" + replaceText[currentVerb]);
  } else {
    $('#puzz1AText').text(puzzPron[0] + ' ' + replaceText[currentVerb]);
  }
  $('#puzz2AText').text(puzzPron[1] + ' ' + replaceText[currentVerb]);
  $('#puzz3AText').text(puzzPron[2] + ' ' + replaceText[currentVerb]);
  $('#puzz4AText').text(puzzPron[3] + ' ' + replaceText[currentVerb]);
  $('#puzz5AText').text(puzzPron[4] + ' ' + replaceText[currentVerb]);
  $('#puzz6AText').text(puzzPron[5] + ' ' + replaceText[currentVerb]);
  $('.puzzLeft1').css({ 'background-position': 'left 66.666666%' });
  //2018CHANGE
  $('.puzzLeft2').css({ 'background-position': 'right 0%', right: '115px' });
  //2018CHANGE
  $('.puzzRight1').css({ 'background-position': 'left 0%' });
  $('.puzzRight2').css({ 'background-position': 'right 66.666666%' });
  $('.puzzQues').droppable('option', 'disabled', false);
  $('.puzzAnswer').show();
  $('#puzzle1A').val(allQuizEndings[0]);
  $('#puzzle2A').val(allQuizEndings[1]);
  $('#puzzle3A').val(allQuizEndings[2]);
  $('#puzzle4A').val(allQuizEndings[3]);
  $('#puzzle5A').val(allQuizEndings[4]);
  $('#puzzle6A').val(allQuizEndings[5]);
  puzzPos = shuffle(puzzPos);
  $('#puzzle1B').css({ top: puzzPos[0] });
  $('#puzzle2B').css({ top: puzzPos[1] });
  $('#puzzle3B').css({ top: puzzPos[2] });
  $('#puzzle4B').css({ top: puzzPos[3] });
  $('#puzzle5B').css({ top: puzzPos[4] });
  $('#puzzle6B').css({ top: puzzPos[5] });
  $('#puzz1BText').text(allQuizEndings[0]);
  $('#puzz2BText').text(allQuizEndings[1]);
  $('#puzz3BText').text(allQuizEndings[2]);
  $('#puzz4BText').text(allQuizEndings[3]);
  $('#puzz5BText').text(allQuizEndings[4]);
  $('#puzz6BText').text(allQuizEndings[5]);
}

function removePuzzle() {
  for (var num = 1; num <= 5; num++) {
    var puzOut = puzzleArray.pop();
    $('#puz' + puzOut).css({ opacity: '0' });
  }
}

function quizActions3() {
  if (currQuizNum == 1) {
    $('#picFrame').css({
      'background-image': 'url(' + oPath + 'images/pic3.jpg)',
    });
  } else if (currQuizNum == 7) {
    $('#picFrame').css({
      'background-image': 'url(' + oPath + 'images/pic4.jpg)',
    });
  } else if (currQuizNum == 13) {
    $('#picFrame').css({
      'background-image': 'url(' + oPath + 'images/pic5.jpg)',
    });
  }

  $('#boardMain').html('');
  $('#quizSentenceFor, #quizSentenceEng').hide();
  setTimeout(function () {
    maxScore = 65;
    quizPtsCount = 65;
    $('#quizScoreBack').css({
      'background-image': 'url(../../common/scoreBack4.svg)',
    });
    $('#goodAnswerIn2').css({
      'background-image': 'url(../../common/score4.svg)',
    });
    $('#quizScoreImg').attr('src', '../../common/score4.svg');
  }, 500);
  if (currentQuiz == 4) {
    quizTimerAnimate2();
  }
  submitted = false;
  $('#specialChars, .boardTop').show();
  $('#boardMain').removeClass('topAlign');
  $('#writeError, #writeError2').closest('tr').hide();
  $('#writeAnswerField').val('');
  $('.wrongLogo').hide();
  foundArticle = '';
  var quizWord;
  var subChars;

  var theQuizWord = forExamples[quizQuesNum - 1].split('<strong>');
  quizWord = theQuizWord[1].split('</strong>').join('');
  writtenString = quizWord;
  $('#quizSentenceFor').html(
    theQuizWord[0] +
      "<strong style='font-family: Arial, Helvetica, sans-serif;'>" +
      '____' +
      '</strong>',
  );
  $('#quizSentenceEng').html(engExamples[quizQuesNum - 1]);

  //2018CHANGE
  if (quizWord == '-') {
    disableTimer = false;
    currentPts = currentPts + 65;
    $('#currentScore').text(currentPts);
    currQuizNum++;
    afterSoundAction();
  }
  //2018CHANGE

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
  timerTime = 5000 + allLetters.length * 500;
  for (var num = 0; num < allChars.length; num++) {
    if (quizGoodPunct.indexOf(allChars[num]) != -1) {
      timerTime = timerTime + 1000;
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
  $('#englishWrite').html(engExamples[quizQuesNum - 1]);

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
}

///ADD CHARACTER FONCTION
function addCharacter() {
  var cursorPos = $('#writeAnswerField').caret();
  var charToAdd = $(this).text();
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

///////////CHECK WRITTEN ANSWER
function checkWrittenAnswer() {
  if ($('#writeAnswerField').val() == '') {
    return;
  }
  var goodAnswer = quizGoodPunct.toLowerCase().split(' ').join('');
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
    $('#quizSentenceFor').html(forExamples[quizQuesNum - 1]);
    $('strong').css({ color: '#ebbc31' });
    currentPts = currentPts + 65;
    $('#currentScore').text(currentPts);
    currQuizNum++;
    playSprite('quizGood');
    $('#wrongAnswer, #goodAnswer, #goodAnswerPic2').stop(true, true);
    $('#wrongAnswer').css({ opacity: '0' });
    $('#wrongAnswerPic').removeClass('opacityAnimate');
    $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' });
    setTimeout(function () {
      $('#goodAnswer, #goodAnswerPic2').transition({ opacity: '0' });
      disableTimer = false;
      loadQuizSound();
    }, 700);
  } else if (goodNoAccent == writtenNoAccent) {
    if (currentDevice == 'mobile' && externalKeyboard == false) {
      focused = false;
      $('#writeAnswerField').blur();
    }
    if (currentQuiz == 4) {
      $('#quizTimerPointer').stop();
      $('#quizTimerPointer').css({ opacity: '0' });
    }
    if (currQuizNum <= forExamples.length * 0.5) {
      $('#quizSentenceFor').html(forExamples[quizQuesNum - 1]);
    } else {
      $('#quizSentenceFor').html(quizForExamples[quizQuesNum - 1]);
    }
    $('strong').css({ color: '#ebbc31' });
    currentPts = currentPts - 5;
    $('#currentScore').text(currentPts);
    playSprite('pause');
    $('#boardMain').addClass('topAlign');
    $('#boardMain').html(goodAnswer);
    $('#writeError').html('Good!&nbsp;But&nbsp;watch the&nbsp;accents...');
    $('.boardTop, #specialChars').hide();
    $('#writeError, #writeError2').closest('tr').show();
  }
  ////START CLOSE ANSWER
  else if (goodPercent >= 1) {
    if (currentDevice == 'mobile' && externalKeyboard == false) {
      focused = false;
      $('#writeAnswerField').blur();
    }
    if (currentQuiz == 4) {
      $('#quizTimerPointer').stop();
      $('#quizTimerPointer').css({ opacity: '0' });
    }
    if (currQuizNum <= forExamples.length * 0.5) {
      $('#quizSentenceFor').html(forExamples[quizQuesNum - 1]);
    } else {
      $('#quizSentenceFor').html(quizForExamples[quizQuesNum - 1]);
    }
    $('strong').css({ color: '#ebbc31' });
    currentPts = currentPts - 5;
    $('#currentScore').text(currentPts);
    playSprite('pause');
    $('#boardMain').addClass('topAlign');
    $('#boardMain').html(goodAnswer);
    $('#writeError').html(
      'Very&nbsp;close! But&nbsp;watch&nbsp;your&nbsp;spelling...',
    );
    $('.boardTop, #specialChars').hide();
    $('#writeError, #writeError2').closest('tr').show();
  }
  ///START WRONG ANSWER
  else {
    playSprite('quizBad');
    currentErrors++;
    if (errors.indexOf(quizQuesNum) == -1) {
      errors.push(quizQuesNum);
    }
    $('#currentErrors').text(currentErrors);
    $('#goodAnswer').stop(true, true);
    $('#goodAnswer').css({ opacity: '0' });
    //DIFFERENT ERROR FOR FLUENT
    if (currentQuiz == 4) {
      fluentWrong();
      return;
    }
    ///ADJUST ERRORS
    if ($('#wrongLogo2').is(':visible')) {
      currentPts = currentPts - 5;
      $('#currentScore').text(currentPts);
      $('#boardMain').addClass('topAlign');
      $('#boardMain').html(goodAnswer);
      $('#writeError').html(
        'Oops!&nbsp;Here&nbsp;is&nbsp;the right&nbsp;answer...',
      );
      $('.boardTop, #specialChars').hide();
      $('#writeError, #writeError2').closest('tr').show();
      if (currentDevice == 'mobile' && externalKeyboard == false) {
        focused = false;
        $('#writeAnswerField').blur();
      }
      $('#wrongLogo3').show();
    } else if ($('#wrongLogo1').is(':visible')) {
      $('#wrongLogo2').show();
    } else {
      $('#wrongLogo1').show();
    }
    ///IF MADE ERROR
    if (!madeError) {
      currentPts = currentPts - 50;
      $('#wrongAnswerPic').addClass('opacityAnimate');
      setTimeout(function () {
        $('#wrongAnswerPic').removeClass('opacityAnimate');
      }, 2100);
      $('#currentScore').text(currentPts);
      madeError = true;
    }
  }
  ////END WRONG ANSWER
}

/////////
function fluentWrong() {
  if (!madeError) {
    currentPts = currentPts - 65;
    $('#currentScore').text(currentPts);
    $('#wrongAnswerPic').addClass('opacityAnimate');
    setTimeout(function () {
      $('#wrongAnswerPic').removeClass('opacityAnimate');
    }, 2100);
    madeError = true;
  }
  $('#boardMain').addClass('topAlign');
  if (currentQuiz == 4 && viewportHeight < 500) {
    $('#writeError').html('Oops!&nbsp;Type&nbsp;the&nbsp;answer...');
  } else {
    $('#writeError').html(
      'Oops!&nbsp;Type&nbsp;the&nbsp;answer to&nbsp;continue...',
    );
  }
  $('.boardTop').hide();
  $('#writeError').show();
  $('#quizTimerPointer').stop(true, true);
  $('#quizTimerImage').css({
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
/////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////RESTART LESSON
function startLesson() {
  if ($('.menuBar').hasClass('noBack')) {
    $('.menuBar').removeClass('noBack');
  }
  $('#backBtn, #menuMain2').removeClass('darker');

  ///PORTUGUESE CHANGE LEFT OFF START
  findLeftOff();
  ///PORTUGUESE CHANGE LEFT OFF END
  $('#dictBtn').show();
  playSprite('blank');
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
  if ($('#pauseWrap').is(':visible')) {
    $('#pauseWrap').hide();
  }
  $('#pronounWarn').hide();
  $('.closeWinBtn, .closeWinBtn2, .closeWinBtn3').html(closeWin);
  $('#conjTitleFor').html(
    '<img class="flagIcon" src="../../common/flagIcon.svg">' + lessonLanguage,
  );
  if ($('#quizTimerPointer').is(':visible')) {
    $('#quizTimerPointer').stop(true, true);
  }
  $('#newHighScore').transition({ y: '100%' });
  $('#newScoreUpdate').transition({ x: '-100%' });
  $('.menuTitleContainer').show();
  $('#pauseBtn').show();
  $('#optionBtn').show();
  $('#menuMain2').show();
  $('#quizBanner').hide();

  ////Change pres content
  $('#sideTitle').html(
    '<strong>' + verbType + '</strong> Endings (' + conjTitles[conjNum] + ')',
  );
  for (var numE = 1; numE <= numOfConj; numE++) {
    $('#sideEnding' + numE).html(allEndings[numE - 1]);
    $('#sideForItem' + numE).text(conjID[numE - 1]);
    $('#sideEngItem' + numE).text(conjID2[numE - 1]);
  }
  ////End Change pres content

  if (soundLessonEvent != true) {
    document.getElementById('mainSound').addEventListener('ended', setTimer2);
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

  ///PORTUGUESE CHANGE LEFT OFF START
  if (lastNum != '') {
    var wordChangeNum = [0];
    wordChangeNum.push(narration.length);
    wordChangeNum.push(numOfPers + narration.length);
    wordChangeNum.push(numOfPers * 2 + narration.length);
    for (var aa = wordChangeNum.length - 1; aa >= 0; aa--) {
      if (lastNum > wordChangeNum[aa]) {
        currentWordNum = wordChangeNum[aa];
        aa = -2;
      }
    }
    changeWord();
    currentWordNum = lastNum;
  }
  ///PORTUGUESE CHANGE LEFT OFF END

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

  $('.closeWinBtn3').on('click', function () {
    $('.menuConj').removeClass('centerDiv');
  });
  $('.closeWinBtn, #verbWrap').on('click', function () {
    $('.menuVerb').removeClass('centerDiv');
    $('#verbWrap').hide();
    playPres();
  });
  $('.starQuestion, .starQuestion2, #starConjWarn').on('click', function () {
    $('#menuVerbContent').html(personText);
    resizeVerbMenu();
    if (!$('#menuVerbContent').hasClass('centerDiv')) {
      $('.menuVerb').addClass('centerDiv');
      $('#verbWrap').show();
      pausePres();
    }
  });
  ///MOBILE OPTIONS
  $('.conjItems, .sideHilites1, .sideHilites2').on('click', function () {
    if (currentWordNum < narration.length) {
      $('.sideLabels').css({ background: btnColor[1] });
      $('#sideLabel2').css({ background: '#ebbc31' });
      $('.mainPic2, .mainPic1').css({
        'background-image': 'url(' + imageArray[0] + ')',
      });
    }
    picControl = 'picFade';
    var conjName = $(this)
      .attr('id')
      .replace('sh', '')
      .replace('conjItem', '')
      .replace('B', '');
    if (verbInList > 1) {
      var verbFinder = (verbInList - 1) * numOfPers;
      currentWordNum = parseInt(conjName) + verbFinder + narration.length;
    } else {
      currentWordNum = parseInt(conjName) + narration.length;
    }
    changeWord();
  });
  //END CLICK
  $('.sideLabels').on('click', buttonClicked);
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
  $('#pauseBtn').on('click', function () {
    $('#conjAnimation').stop(true, true);
    togglePause();
  });
  $('#pauseWrap').on('click', togglePause);
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
    $('.conjItems, .sideHilites1, .sideHilites2')
      .on('mouseover', function () {
        var conjName = $(this)
          .attr('id')
          .replace('sh', '')
          .replace('conjItem', '')
          .replace('B', '');
        $(
          '#conjItem' +
            conjName +
            ', #conjItemB' +
            conjName +
            ', #sideForItem' +
            conjName +
            ', #sideEngItem' +
            conjName,
        ).addClass('conjItemsHover');
        $('#conjItem' + conjName + ' strong, #sideEnding' + conjName).addClass(
          'conjItemsHover2',
        );
      })
      .on('mouseout', function () {
        $('.conjItems, .sideForItems, .sideEngItems').removeClass(
          'conjItemsHover',
        );
        $('.conjItems strong, .sideEndings').removeClass('conjItemsHover2');
      });
    $('.sideLabels').hover(function () {
      $(this).toggleClass('sideLabelsHover');
    });
    $('.starQuestion, .starQuestion2, #starConjWarn').hover(function () {
      $('#arrowLabel').text('CONJUGATION INFORMATION');
      $('.instructions').toggleClass('showDiv');
    });
  }

  $('.sideLabels').on('click', buttonClicked);
}

function loadButtonsQuiz() {
  if (quizLoaded == true) {
    return;
  }
  $('#practiceErrors div').on('touchend mouseup', function (event) {
    event.preventDefault();
    errorMode = true;
    loadQuiz();
  });
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
  $('.boardChar').on('click', addCharacter);
  $('#writeError2').on('click', function () {
    $('#writeAnswerField').val(quizGoodAnswer);
    checkWrittenAnswer();
  });
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
      if (puzzLength < 13) {
        $(this)
          .children('.puzzLeft2')
          .css({
            'background-position': 'right 100%',
            right: '125px',
            width: '40%',
          });
      } else if (puzzLength >= 25) {
        $(this)
          .children('.puzzLeft2')
          .css({
            'background-size': '100% 400%',
            'background-position': 'right 100%',
            right: '125px',
            width: '60%',
          });
      } else if (puzzLength < 25) {
        $(this)
          .children('.puzzLeft2')
          .css({
            'background-position': 'right 100%',
            right: '125px',
            width: '50%',
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
      $('#wrongAnswer, #goodAnswer').stop(true, true);
      $('#wrongAnswer').css({ opacity: '0' });
      $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' });
      setTimeout(function () {
        $('#goodAnswer, #goodAnswerPic2').css({ opacity: '0' });
        if (currQuizNum != quizNumQues + 1) {
          loadQuestion();
        } else {
          setTimeout(function () {
            if (currentQuiz == 3) {
              $('#quizDoneSentence').hide();
            } else {
              $('#quizDoneSentence').show();
            }
            $('#puzzleBack').hide();
            doneQuiz();
          }, 2000);
        }
      }, 500);
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
        $('#wrongAnswerPic2').css({ opacity: '1' });
        setTimeout(function () {
          $('#wrongAnswerPic2').transition({ opacity: '0' });
        }, 500);
        $('#currentScore').text(currentPts);
        madeError = true;
      }
      playSprite('quizBad');
      $('#wrongAnswer, #goodAnswer').stop(true, true);
      $('#goodAnswer, #goodAnswerPic2').css({ opacity: '0' });
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

////////////////END LOAD DRAG 2

/////LOAD QUIZ SOUND
function loadQuizSound() {
  $('#mainSound').trigger('pause');
  var quizSound;
  quizSound = quizSounds[quizQuesNum - 1];
  $('#mainSound').attr('src', quizSound);
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('canplay', playQuizSound);
}

////PLAY QUIZ SOUND
function playQuizSound() {
  setTimeout(function () {
    document
      .getElementById('mainSound')
      .removeEventListener('canplay', playQuizSound);
    $('#mainSound').trigger('play');
  }, 300);
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
      if (currentQuiz == 3) {
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
                  $('#quizScoreBack').css({
                    'background-image': 'url(../../common/scoreBack3.svg)',
                  });
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
                      $('#quizScoreBack').css({
                        'background-image': 'url(../../common/scoreBack1.svg)',
                      });
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

///FLUENT QUIZ TIMER ANIMATION
function quizTimerAnimate2() {
  clearTimeout(timerDelay);
  $('#quizTimerPointer2').stop(true, true);
  timerDelay = setTimeout(function () {
    ///TIMER FUNCTION
    var aniLength = $('#quizTimer').width() - 20;
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
          { left: aniLength * 0.97 + 'px' },
          timerTime * 0.97,
          'linear',
          function () {
            $('#quizTimerImage2').css({
              '-webkit-transform': 'translate3d(-50%, 0, 0)',
              transform: 'translate3d(-50%, 0, 0)',
            });
            fluentWrong();
            playSprite('quizBad');
            currentErrors++;
            if (errors.indexOf(quizQuesNum) == -1) {
              errors.push(quizQuesNum);
            }
            $('#currentErrors').text(currentErrors);
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

function resizeVerbMenu() {
  $('.menuVerb').css({
    height: $('#menuVerbContent').outerHeight() + 45 + 'px',
  });
}

var verbTypes;
var personText = '';
if (lessonLanguage == 'Italian') {
  verbTypes = ['ARE', 'ERE', 'IRE'];
  personText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Italian Conjugation with <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b></h3><p><b class="bullet">&bull;</b> The Italian subject pronoun <b class="yellowText">Lei</b> is the singular formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The Italian subject pronoun <b class="yellowText">Loro</b>, is the plural formal "you". It is used when talking to more than one person in a VERY formal manner.<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Lei</b> is conjugated to the third person singular and <b class="yellowText">Loro</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course, the third person conjugation is simply copied for <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b> are conjugated to the third person.<br><b class="bullet">&bull;</b> Note that <b class="yellowText">Lei</b> also means "she" and that <b class="yellowText">Loro</b> also means "they", but that they are capitalized when they are the equivalent of "you", even in the middle of a sentence.<br></p>';
} else if (lessonLanguage == 'Spanish') {
  verbTypes = ['AR', 'ER', 'IR'];
  personText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Spanish Conjugation with <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b></h3><p><b class="bullet">&bull;</b> The Spanish subject pronoun <b class="yellowText">Usted</b> is the formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The Spanish subject pronoun <b class="yellowText">Ustedes</b>, is the plural "you". It is used when talking to more than one person.<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Usted</b> is conjugated to the third person singular and <b class="yellowText">Ustedes</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course the third person conjugation is simply copied for <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b> are conjugated to the third person.</p>';
}
///PORTUGUESE CHANGE START
else if (lessonLanguage == 'Portuguese') {
  verbTypes = ['AR', 'ER', 'IR'];
  personText =
    '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Portuguese Conjugation with <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b></h3><p><b class="bullet">&bull;</b> The Portuguese subject pronoun <b class="yellowText">Você</b> is the most common "you" in Brazil. It is used when talking to one person.<br><b class="bullet">&bull;</b> However, in Portugal, the pronoun <b class="yellowText">Tu</b> is the most common informal form when talking to one person.<br><b class="bullet">&bull;</b> If you wish to keep it very formal, you can use <b class="yellowText">O senhor</b> (to a man) or <b class="yellowText">A senhora</b> (to a woman) instead of <b class="yellowText">Você</b> in both Portugal and Brazil.<br><b class="bullet">&bull;</b> The Portuguese subject pronoun <b class="yellowText">Vocês</b> is the plural "you". It is used when talking to more than one person.<br><b class="bullet">&bull;</b> Even though <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Você</b> is conjugated to the third person singular and <b class="yellowText">Vocês</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course the third person conjugation is simply copied for <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b> are conjugated to the third person.</p>';
}
///PORTUGUESE CHANGE END
else if (lessonLanguage == 'French') {
  verbTypes = ['ER', 'IR', 'RE'];
}

var verbType = verbTypes[verbTypeNum - 1];

var proWarning =
  'Note:&nbsp;' +
  lessonLanguage +
  '&nbsp;subject&nbsp;pronouns&nbsp;are&nbsp;often&nbsp;omitted. However,&nbsp;to&nbsp;facilitate&nbsp;learning, ' +
  lessonLanguage +
  '&nbsp;subject&nbsp;pronouns are used more in this course than they would be used in real life.';

var puzzHTML =
  '<div id="puzzleTitle" class="selectOff"></div><div id="puzzle1A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz1AText" class="puzzTXT"></span></div><div id="puzzle1B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz1BText" class="puzzTXT2"></span></div><div id="puzzle2A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz2AText" class="puzzTXT"></span></div><div id="puzzle2B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz2BText" class="puzzTXT2"></span></div><div id="puzzle3A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz3AText" class="puzzTXT"></span></div><div id="puzzle3B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz3BText" class="puzzTXT2"></span></div><div id="puzzle4A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz4AText" class="puzzTXT"></span></div><div id="puzzle4B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz4BText" class="puzzTXT2"></span></div><div id="puzzle5A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz5AText" class="puzzTXT"></span></div><div id="puzzle5B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz5BText" class="puzzTXT2"></span></div><div id="puzzle6A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz6AText" class="puzzTXT"></span></div><div id="puzzle6B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz6BText" class="puzzTXT2"></span></div>';

function capitalFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function setTimer2() {
  if (handAnimateOn == true) {
    var newPos = $('.forSentence strong').offset();
    $('#wandAnimation').css({
      left: newPos.left + 80 + 'px',
      top: newPos.top + 10 + 'px',
      '-webkit-transform': 'rotate(40deg)',
      transform: 'rotate(40deg)',
    });
    $('#stemAnimation').css({
      left: newPos.left - 120 + 'px',
      top: newPos.top - 80 + 'px',
    });
    $('#wandAnimation').fadeIn(499, function () {
      $('#wandAnimation').css({
        '-webkit-transform': 'rotate(-40deg)',
        transform: 'rotate(-40deg)',
      });
      playSprite('shimmer');
      $('#stemAnimation').show();
      $('.forSentence strong').hide();
      setTimer();
    });
  } else {
    setTimer();
  }
}

///FRENCH SAME STARS MAKER
function sameStars() {
  ///2018CHANGE
  var frenchStars1 = [114, 115, 117, 119, 121, 123, 125, 127, 128, 129];
  ///2018CHANGE
  var frenchStars2 = [116, 120, 124];
  var frenchStars3 = [118, 122];

  if (frenchStars1.indexOf(lessonNumber) != -1) {
    $('#conjTD1, #conjTD2, #conjTD3, #conjTD6').append(
      '<img class="sideStars" src="../../common/iconStar2b.svg">',
    );
  } else if (frenchStars3.indexOf(lessonNumber) != -1) {
    $('#conjTD1, #conjTD2, #conjTD3').append(
      '<img class="sideStars" src="../../common/iconStar2b.svg">',
    );
  } else if (frenchStars2.indexOf(lessonNumber) != -1) {
    $('#conjTD1, #conjTD5').append(
      '<img class="sideStars" src="../../common/iconStar2b.svg">',
    );
    $('#conjTD2, #conjTD3').append(
      '<img class="sideStars" src="../../common/iconStar2c.svg">',
    );
    $('#conjTD4, #conjTD6').append(
      '<img class="sideStars" src="../../common/iconStar2d.svg">',
    );
    $('#starConjSame img').attr('src', '../../common/iconStar2e.svg');
  } else {
    $('#starConjSame').hide();
  }
}

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
