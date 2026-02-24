///OS START
var oPath = '';
var oPath2 = '../';
if (osType == 'androidSTORE') {
  oPath =
    'https://www.eliseunogueira.com.br/app/' +
    lessonLanguage +
    '/vocab/' +
    lessonNumber +
    '/';
  oPath2 =
    'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/vocab/';
}
//OS END

///DO NOT MODIFY
var currentSection = 'Vocabulary';
var currentSecShort = 'vocab';
var quizTitle1 = "BEGINNER'S LUCK";
var quizTitle2 = 'BE ALL EARS';
var quizTitle3 = 'WRITE-A-WORD';
var quizTitle4 = 'FLUENCY SPRINT';
var currentProgram = 'Complete';
var errors = [];

var focused;
var errorMode = false;
var slidesPres = [1, 2, 3, 4];

///2020CHANGE

///2020 EXTRA START
var cardCate = '|c'; ///CHANGE THIS FOR EACH MODULE TYPE
var cardRaw = [];
var irregSpan = true;
var greenBub = [
  6, 3, 9, 11, 13, 16, 17, 19, 22, 27, 28, 34, 36, 45, 47, 53, 57, 58, 61, 71,
  75, 76, 81, 56, 62, 74, 82, 94, 98, 99, 105,
];
var redBub = [
  0, 1, 2, 7, 8, 10, 12, 15, 14, 20, 30, 32, 38, 40, 41, 49, 51, 65, 68, 69, 77,
  80, 29, 35, 52, 66, 78, 83, 102,
];
///2020 EXTRA END
///PORTUGUESE CHANGE START
var blueBub = [
  4, 5, 21, 25, 33, 42, 48, 50, 54, 55, 59, 60, 64, 70, 72, 73, 86, 87, 88, 89,
  90, 91, 92, 95, 97, 106, 107, 108, 109, 93, 96,
];
var orangeBub = [18, 23, 31, 46, 84, 85, 100, 104];
var greyBub = [43, 67];
var purpleBub = [24, 37, 63, 79, 101, 103];
var turquoiseBub = [26, 39, 44];

///5.1
function loadAudioCourse() {
  $('#loadLogo').show();
  setTimeout(function () {
    window.location = '../../audio/index.html?vocab=' + lessonNumber;
  }, 100);
}
///5.1

if ((lessonNumber == 2) & (lessonLanguage == 'Portuguese')) {
  greenBub.push(2);
}
///PORTUGUESE CHANGE END

if (greenBub.indexOf(lessonNumber) !== -1) {
  var btnColor = [
    '#118000',
    '#203e00',
    'rgba(32, 62, 0,0.7)',
    'rgba(32, 62, 0,0.7)',
  ];
} else if (orangeBub.indexOf(lessonNumber) !== -1) {
  var btnColor = [
    '#d14a00',
    '#a12400',
    'rgba(161, 36, 0,0.7)',
    'rgba(161, 36, 0,0.7)',
  ];
} else if (redBub.indexOf(lessonNumber) !== -1) {
  var btnColor = [
    '#d11a1a',
    '#6e0e0e',
    'rgba(110, 14, 14,0.7)',
    'rgba(110, 14, 14,0.7)',
  ];
} else if (blueBub.indexOf(lessonNumber) !== -1) {
  var btnColor = [
    '#0a5d90',
    '#063561',
    'rgba(6, 53, 97,0.7)',
    'rgba(6, 53, 97,0.7)',
  ];
} else if (purpleBub.indexOf(lessonNumber) !== -1) {
  var btnColor = [
    '#27488a',
    '#102557',
    'rgba(16, 37, 87,0.7)',
    'rgba(16, 37, 87,0.7)',
  ];
} else if (turquoiseBub.indexOf(lessonNumber) !== -1) {
  var btnColor = [
    '#206d8a',
    '#0e3236',
    'rgba(14, 50, 54,0.7)',
    'rgba(14, 50, 54,0.7)',
  ];
} else if (greyBub.indexOf(lessonNumber) !== -1) {
  var btnColor = [
    '#474f52',
    '#2a3133',
    'rgba(42, 49, 51,0.6)',
    'rgba(42, 49, 51,0.6)',
  ];
}
///2020CHANGE

var soundTime;
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
//GERMAN CHANGE
var GermanArticles = [
  'der ',
  'das ',
  'die ',
  'ein ',
  'eine ',
  'Der ',
  'Das ',
  'Die ',
  'Ein ',
  'Eine ',
];

///PORTUGUESE CHANGE start
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
///PORTUGUESE CHANGE end

//GERMAN CHANGE
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
//GERMAN CHANGE
var GermanChars = ['ß', 'ä', 'ö', 'ü', 'ï', 'ë'];
///PORTUGUESE CHANGE start
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
///PORTUGUESE CHANGE end
var articleArray = window[lessonLanguage + 'Articles'];
var specialChars = window[lessonLanguage + 'Chars'];
forExamples = forExamples
  .join('%%')
  .split('<em> / </em>')
  .join('<em> - </em>')
  .split('%%');
//PORTUGUESE CHANGE start
if ((lessonNumber <= 81) & (lessonLanguage != 'Portuguese')) {
  lessonTitle =
    lessonTitle.split('Vocabulary: ').join('') + ' (' + engExamples[0] + ')';
}
//PORTUGUESE CHANGE end
//Combined quiz change
if (lessonNumber === 0) {
  lessonTitle = 'Vocabulary: Extra Practice';
}
//Combined quiz change
////////////////////////
var quizDescription1 =
  'This quiz will allow you to practice the words you just learned in the easiest way! Click on the corresponding image of the word you see and hear.';
var quizDescription2 =
  'Listen carefully and click on the image corresponding to the word you hear. Train your ear to understand words without reading them.';
var quizDescription3 =
  'Type in the words corresponding to the images. No more guessing here, you have to know the word to get the right answer! Hints are available, but be careful, they cost valuable points...';
var quizDescription4 =
  'WARNING: This exercise is very difficult! Complete each question within the time given, no hints, no second chances. If you get a Fluency Award in this exercise, you are a real expert in this category!';
var numWords = engExamples.length;

//2020 EXTRA START
if (quizMultiArray.length > 0) {
  quizMapArray = quizMultiArray.slice();
  quizMultiArray = [];
}
if (lessonNumber == 27) {
  numToRemove = [];
}
///2020 EXTRA END
for (var num = 0; num < quizMapArray.length; num++) {
  if (quizMapArray[num] > numWords) {
    quizMapArray.splice(num);
  }
}
for (var num = 0; num < quizMultiArray.length; num++) {
  if (quizMultiArray[num] > numWords) {
    quizMultiArray.splice(num);
  }
}
quizMapArray = shuffle(quizMapArray);
if (quizMapArray.length > 30 && lessonNumber !== 0) {
  quizMapArray.splice(0, quizMapArray.length - 30);
}
quizMultiArray = shuffle(quizMultiArray);
var quizCombinedArray = quizMapArray.concat(quizMultiArray);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// VOCAB ONLY FONCTIONS INSIDE LOAD PRESENTATION

function loadPresentation() {
  ///////////////////////////CREATE BUTTONS

  ///2023 START
  buttonCreate = '';
  if (lessonType == 'normal') {
    for (var num = 0; num < numWords; num++) {
      buttonCreate =
        buttonCreate +
        '<input type="submit" value="' +
        engButtons[num] +
        '" class="ouinoButton" id="button' +
        num +
        '">';
    }
  } else if (lessonType == 'sentence') {
    buttonCreate =
      buttonCreate +
      '<div class="ouinoButton wordBtn" id="button0">' +
      engButtons[0].replace('<em>', '').replace('</em>', '') +
      '</div><div class="ouinoButton exampleBtn mar1" id="button1"></div>';
    for (var numb = 2; numb < numWords; numb++) {
      if (numb % 2 == 0) {
        buttonCreate =
          buttonCreate +
          '<div class="ouinoButton wordBtn" id="button' +
          numb +
          '">' +
          engButtons[numb].replace('<em>', '').replace('</em>', '') +
          '</div>';
      } else {
        buttonCreate =
          buttonCreate +
          '<div class="ouinoButton exampleBtn" id="button' +
          numb +
          '"></div>';
      }
    }
  } else if (lessonType == 'sentenceTitle') {
    buttonCreate =
      buttonCreate +
      '<div class="ouinoButton topBtn" id="button0">' +
      engButtons[0].replace('<em>', '').replace('</em>', '') +
      '</div>';
    for (var numC = 1; numC < numWords; numC++) {
      if (numC % 2 != 0 || numC == 0) {
        buttonCreate =
          buttonCreate +
          '<div class="ouinoButton wordBtn" id="button' +
          numC +
          '">' +
          engButtons[numC].replace('<em>', '').replace('</em>', '') +
          '</div>';
      } else {
        buttonCreate =
          buttonCreate +
          '<div class="ouinoButton exampleBtn" id="button' +
          numC +
          '"></div>';
      }
    }
  }

  ///2023 END

  /////////////////////////CREATE SOUND ARRAY
  fastSounds = [];
  slowSounds = [];
  var numFem = 1;
  var numMasc = 1;

  if (lessonNumber !== 0) {
    //CODE FOR NORMAL LESSON
    if (lessonNumber != 5) {
      for (var numD = 0; numD < numWords; numD++) {
        if (forExamples[numD].charAt(0) == '*') {
          fastSounds.push(oPath + 'sounds/femsound' + numFem + soundType);
          numFem++;
          slowSounds.push(oPath + 'sounds/femsound' + numFem + soundType);
          numFem++;
        } else {
          fastSounds.push(oPath + 'sounds/sound' + numMasc + soundType);
          numMasc++;
          slowSounds.push(oPath + 'sounds/sound' + numMasc + soundType);
          numMasc++;
        }
      }
    } else {
      for (var numD = 0; numD < numWords; numD++) {
        if (forExamples[numD].charAt(0) == '*') {
          fastSounds.push(oPath + 'sounds/femsound' + numFem + soundType);
          slowSounds.push(oPath + 'sounds/femsound' + numFem + soundType);
          numFem++;
        } else {
          fastSounds.push(oPath + 'sounds/sound' + numMasc + soundType);
          slowSounds.push(oPath + 'sounds/sound' + numMasc + soundType);
          numMasc++;
        }
      }
    }
    //END CODE FOR COMBINED QUIZ
  } else {
    //Start CODE FOR COMBINED QUIZ
    for (var numD = 0; numD < numWords; numD++) {
      fastSounds.push(
        oPath2 +
          nums1[numD] +
          '/sounds/' +
          window['forSounds' + nums1[numD]][nums2[numD]] +
          soundType,
      );
    }

    //END CODE FOR COMBINED QUIZ
  }
  ///////////END LOAD PRESENTATION
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DETERMINE BUTTON CLICKED
function buttonClicked() {
  picControl = 'picFade';
  currentWordNum = $(this).attr('id').split('button').join('');
  changeWord();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////QUIZ RESIZE
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
  ///OS END

  viewportWidth = $('html').innerWidth();
  var screenRatio = viewportWidth / viewportHeight;

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
    spaceLeft = 460;
  } else {
    spaceLeft = viewportHeight - 190;
  }
  ///IF PORTRAIT

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

  ///2023 START (add -50)
  if (screenRatio <= 1) {
    if (currentQuiz == 2) {
      spaceLeft = spaceLeft + 60;
      $('.quizItems').css({
        '-webkit-transform': 'translateY(15px)',
        transform: 'translateY(15px)',
      });
    } else {
      $('.quizItems').css({
        '-webkit-transform': 'translateY(0)',
        transform: 'translateY(0)',
      });
    }
    $('.quizItems').css({ height: spaceLeft / 3 - 50 + 'px' });
    $('.quizItems').addClass('quizItemsPortrait');
  }
  ///IF LANDSCAPE
  else {
    if (currentQuiz == 2) {
      spaceLeft = spaceLeft + 60;
      $('.quizItems').css({
        '-webkit-transform': 'translateY(15px)',
        transform: 'translateY(15px)',
      });
    } else {
      $('.quizItems').css({
        '-webkit-transform': 'translateY(0)',
        transform: 'translateY(0)',
      });
    }
    $('.quizItems').css({ height: spaceLeft / 2 - 50 + 'px' });
    $('.quizItems').removeClass('quizItemsPortrait');
  }
  ///2023 END

  ////END IF LANDSCAPE

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

  ////QUIZ 1 RESIZE
  if (currentQuiz == 1) {
    if (screenRatio > 1) {
      $('#quizAllItemsB, #quizMultiImg').css({ width: '44%' });
      if (viewportHeight > 700) {
        $('#quizAllItemsB, #quizMultiImg').css({
          height: '460px',
          '-webkit-transform': 'translateY(20px)',
          transform: 'translateY(20px)',
        });
      } else {
        $('#quizAllItemsB, #quizMultiImg').css({
          height: spaceLeft + 20 + 'px',
          '-webkit-transform': 'translateY(0px)',
          transform: 'translateY(0px)',
        });
      }
    } else {
      $('#quizAllItemsB').css({
        width: '90%',
        '-webkit-transform': 'translateY(30px)',
        transform: 'translateY(30px)',
      });
      $('#quizMultiImg').css({
        width: '90%',
        '-webkit-transform': 'translateY(15px)',
        transform: 'translateY(15px)',
      });
      $('#quizAllItemsB, #quizMultiImg').css({
        height: spaceLeft / 2 - 5 + 'px',
      });
    }
  }
  /////QUIZ 2 RESIZE
  if (currentQuiz == 2) {
    spaceLeft = spaceLeft + 20;
    if (screenRatio > 1) {
      $('#quizAllItemsB, #quizMultiImg').css({ width: '44%' });
      if (viewportHeight > 700) {
        $('#quizAllItemsB, #quizMultiImg').css({
          height: '500px',
          '-webkit-transform': 'translateY(50px)',
          transform: 'translateY(50px)',
        });
      } else {
        $('#quizAllItemsB, #quizMultiImg').css({
          height: spaceLeft + 'px',
          '-webkit-transform': 'translateY(25px)',
          transform: 'translateY(25px)',
        });
      }
    } else {
      $('#quizAllItemsB, #quizMultiImg').css({
        height: spaceLeft * 0.48 + 'px',
      });
      $('#quizAllItemsB').css({
        width: '90%',
        '-webkit-transform': 'translateY(50px)',
        transform: 'translateY(50px)',
      });
      $('#quizMultiImg').css({
        width: '90%',
        '-webkit-transform': 'translateY(30px)',
        transform: 'translateY(30px)',
      });
    }
  }

  /////QUIZ 3 RESIZE
  ////2023 START///////////////////////////////////////////////////////////////////////////////////////////////////////
  if (currentQuiz == 3) {
    spaceLeft = spaceLeft + 100;
    if (viewportHeight < 450 || viewportWidth < 400) {
      $('.boardTop').hide();
    } else {
      if ($('#writeError').is(':hidden')) {
        $('.boardTop').show();
      }
    }
    if (screenRatio > 1) {
      $('#quizAllItemsC, #quizWriteImg').css({ width: '44.2%' });

      if (viewportHeight > 620) {
        $('#quizWriteImg').css({
          height: '502px',
          '-webkit-transform': 'translateY(50px)',
          transform: 'translateY(50px)',
        });
        $('#quizAllItemsC').css({
          height: '490px',
          '-webkit-transform': 'translateY(60px)',
          transform: 'translateY(60px)',
        });
        $('#writeAnswerBoard,#boardTable').css({ height: '388px' });
      } else {
        $('#quizWriteImg').css({
          height: spaceLeft + 'px',
          '-webkit-transform': 'translateY(15px)',
          transform: 'translateY(15px)',
        });
        $('#quizAllItemsC').css({
          height: spaceLeft - 10 + 'px',
          '-webkit-transform': 'translateY(25px)',
          transform: 'translateY(25px)',
        });
        $('#writeAnswerBoard,#boardTable').css({
          height: spaceLeft - 112 + 'px',
        });
      }
    } else {
      $('#quizWriteImg').css({ height: spaceLeft * 0.365 + 'px' });
      $('#quizAllItemsC').css({ height: spaceLeft * 0.58 + 'px' });
      $('#writeAnswerBoard, #boardTable').css({
        height: spaceLeft * 0.58 - 70 + 'px',
      });
      $('#quizAllItemsC').css({
        width: '90%',
        '-webkit-transform': 'translate3d(0, 23px, 0)',
        transform: 'translate3d(0, 23px, 0)',
      });
      $('#quizWriteImg').css({
        width: '90%',
        '-webkit-transform': 'translate3d(0, 76px, 0)',
        transform: 'translate3d(0, 76px, 0)',
      });
    }
  }

  /////QUIZ 4 RESIZE
  if (currentQuiz == 4) {
    spaceLeft = spaceLeft + 100;
    if (viewportHeight < 450 || viewportWidth < 400) {
      $('.boardTop').hide();
    } else {
      if ($('#writeError').is(':hidden')) {
        $('.boardTop').show();
      }
    }
    if (screenRatio > 1) {
      $('#quizAllItemsC, #quizWriteImg').css({ width: '44.2%' });

      if (viewportHeight > 650) {
        $('#quizWriteImg').css({
          height: '477px',
          '-webkit-transform': 'translateY(84px)',
          transform: 'translateY(84px)',
        });
        $('#quizAllItemsC').css({
          height: '510px',
          '-webkit-transform': 'translateY(50px)',
          transform: 'translateY(50px)',
        });
        $('#writeAnswerBoard,#boardTable').css({ height: '408px' });
        $('#quizTimer2').css({ bottom: spaceLeft + 10 + 'px' });
      } else {
        $('#quizWriteImg').css({
          height: spaceLeft - 43 + 'px',
          '-webkit-transform': 'translateY(59px)',
          transform: 'translateY(59px)',
        });
        $('#quizAllItemsC').css({
          height: spaceLeft - 10 + 'px',
          '-webkit-transform': 'translateY(25px)',
          transform: 'translateY(25px)',
        });
        $('#writeAnswerBoard,#boardTable').css({
          height: spaceLeft - 112 + 'px',
        });
        $('#quizTimer2').css({ bottom: spaceLeft + 10 + 'px' });
      }

      if (screenRatio < 1.07) {
        $('#quizTimer2').css({ bottom: 40 + 'px' });
      }
    } else {
      $('#quizTimer2').css({ bottom: spaceLeft * 0.365 + 45 + 'px' });
      $('#quizWriteImg').css({ height: spaceLeft * 0.365 + 'px' });
      $('#quizAllItemsC').css({ height: spaceLeft * 0.58 + 'px' });
      $('#writeAnswerBoard').css({ height: spaceLeft * 0.58 - 70 + 'px' });
      $('#boardTable').css({ height: spaceLeft * 0.58 - 120 + 'px' });
      $('#quizAllItemsC').css({
        width: '90%',
        '-webkit-transform': 'translate3d(0, 23px, 0)',
        transform: 'translate3d(0, 23px, 0)',
      });
      $('#quizWriteImg').css({
        width: '90%',
        '-webkit-transform': 'translate3d(0, 76px, 0)',
        transform: 'translate3d(0, 76px, 0)',
      });
    }
  }
  ////2023 END///////////////////////////////////////////////////////////////////////////////////////////////////////

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
  ///THIS
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
  var screenRatio = viewportWidth / viewportHeight;
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
    $('.ouinoContent').addClass('portrait');
    $('.ouinoButton').removeClass('moreWords');
    $('#button1').css({ marginTop: '1px' });
    $('.buttonContainer, .sideContainer').addClass('portrait2');
    $('.ouinoContent').css({ height: areaHeight + 'px' });

    ///2020 CHANGES
    if (screenRatio < 0.6) {
      $('.sideContainer').css({ height: areaHeight * 0.55 + 'px' });
      $('.shinyPicture').css({
        height: areaHeight * 0.55 - 150 + 'px',
        maxHeight: 'none',
      });
      $('.buttonContainer').css({
        maxHeight: areaHeight * 0.45 - 30 + 'px',
        top: 25 + 'px',
      });
    } else {
      $('.sideContainer').css({ height: areaHeight * 0.65 + 'px' });
      $('.shinyPicture').css({
        height: areaHeight * 0.65 - 150 + 'px',
        maxHeight: 'none',
      });
      $('.buttonContainer').css({
        maxHeight: areaHeight * 0.35 - 30 + 'px',
        top: 25 + 'px',
      });
    }
    ///2020 CHANGES
  }
  //////////////////////////END PORTRAIT MODE
  //////////////////////////START LANDSCAPE MODE
  else {
    //Apply to all options
    $('.ouinoContent').removeClass('portrait');
    $('.buttonContainer, .sideContainer').removeClass('portrait2');
    $('.ouinoContent').css({ height: areaHeight + 'px' });
    $('.shinyPicture').css({
      height: areaHeight - 128 + 'px',
      maxHeight: '446px',
    });
    elementHeight = $('.ouinoContent').height();

    $('.buttonContainer').css({ maxHeight: elementHeight + 'px' });
    elementHeight = $('.ouinoContent').height();
    buttonHeight = $('.buttonContainer').height();
    ///Smaller than 660px options
    if (viewportHeight <= 704) {
      $('.ouinoButton').removeClass('moreWords');
      $('#button1').css({ marginTop: '1px' });
      if (buttonHeight + 50 < elementHeight) {
        $('.buttonContainer').css({
          top: (elementHeight - buttonHeight) / 2 + 'px',
        });
      } else {
        $('.buttonContainer').css({ top: '0px' });
      }
    }
    ///Bigger than 660px options
    else {
      if (numWords >= 15) {
        $('.ouinoButton').addClass('moreWords');
        if (lessonType != 'sentenceTitle') {
          $('#button1').css({ marginTop: '1.4%' });
        }
      } else {
        $('.ouinoButton').removeClass('moreWords');
        $('#button1').css({ marginTop: '1px' });
      }
    }
    elementHeight = $('.ouinoContent').height();
    buttonHeight = $('.buttonContainer').height();
    if (buttonHeight < elementHeight) {
      $('.buttonContainer').css({
        top: (elementHeight - buttonHeight) / 2 + 'px',
      });
    } else {
      if ($('.ouinoButton').hasClass('moreWords')) {
        $('.buttonContainer').css({ top: '-18px' });
      } else {
        $('.buttonContainer').css({ top: '0px' });
      }
    }

    if (viewportHeight > 704 && numWords >= 15) {
      $('.buttonContainer').css({ maxHeight: elementHeight + 38 + 'px' });
    }
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
  resizeButtonText();
  resizeText();
  resizeTitle();
  if (lessonType == 'sentenceTitle') {
    $('#button0').css({ width: '98%' });
  }
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
var currentErrors;
var userInfo;
var timerTime;
var soundRepeated;
var fastOverwrite = false;
var knowledgeStars;
var restartedLesson;
var quizScores;
var pauseTwo;
var registerLoaded;
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
var audioSprite;
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
var currentSprite;
var onTimeUpdate;
var quizFillNum;
var submitted;
var quizNumQues;
var disableTimer = false;
var fillAnswerOn = false;
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
  't show me tips</div></section><div id="fontPreload1"></div><div id="fontPreload2"></div><div id="fontPreload3"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel"></b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><span class="menuTitleContainer alignVerticalItem"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><img id="keyboardBtn" src="../../common/keyboard2.svg" class="smallIcon" style="display:none;"/><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I' +
  "'" +
  'm confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoVocab.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio>';

var lessonAppend =
  '<div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><main class="ouinoContent selectOff"><aside class="sideContainer"><section class="wordSentence"><div class="wordSentenceIn alignVerticalItem"><div class="textWrap3"><h6 class="disSentence">-Text Disabled-</h6></div><div class="textWrap"><h6 class="forSentence"></h6></div><br><div class="textWrap2"><h6 class="engSentence"></h6></div></div></section><figure class="shinyPicture"><div id="flashCard"></div><div id="flashCard2"></div><div class="engToggle"></div><div class="insight"></div><div id="sideNote"></div><figure class="arrowControl"><div class="leftArrow"></div><div class="rightArrow"></div><div id="middleSwipe"></div></figure><figure class="mainPic2" alt="mainImage"></figure><figure class="mainPic1" alt="mainImage"></figure><img class="whiteBack" src="../../common/white.jpg" alt="mainImage"></figure></aside><aside class="buttonContainer" style="-webkit-overflow-scrolling: touch;"></aside><div class="buttonWrap"></div></main>';

var quizAppend =
  '<div id="wrongAnswerPic"><div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"><div id="goodAnswerIn"></div></div><div id="goodAnswerPic2"><div id="goodAnswerIn2"></div></div><img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><img id="quizGoBack" src="../../common/menuIcon1.svg"><table id="quizDone" ><tr><th colspan="2" id="quizDoneTitle"></th></tr><tr><td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr><td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp;<p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr><td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div><span class="addQuizFlash"><img src="../../flash/images/cards.svg"/> Add Errors to Flash Cards</span></td></tr></table><div id="quizScoreBack"><div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"><div id="quizTimerPointer"><img id="quizTimerImage" src="../../common/timerPointer.svg"></div><div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizTimer2"><div id="quizTimerPointer2"><img id="quizTimerImage2" src="../../common/timerPointer2.svg"></div><div id="quizTimerGood2"></div><div id="quizTimerBar"></div><div id="quizTimerBad2"></div></div><div id="quizItself"><div id="quizSentenceContainer"><div class="quizSentenceWrap"><div class="textWrap4"><h1 id="quizSentence"></h1></div></div></div><div class="textWrap5"></div><div id="quizAllItems"><div id="quizItem1" class="quizItems"><p id="quizEng1" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem2" class="quizItems"><p id="quizEng2" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem3" class="quizItems"><p id="quizEng3" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem4" class="quizItems"><p id="quizEng4" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem5" class="quizItems"><p id="quizEng5" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem6" class="quizItems"><p id="quizEng6" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div></div><div id="quizMultiImg"><p id="englishWrite2" class="quizEng"></p></div><table id="quizAllItemsB"><tr><th id="quizMulti1" class="quizItemsB"><span id="quizItem1B" class="multiBtnFont"></span></th></tr><tr><td id="quizMulti2" class="quizItemsB"><span id="quizItem2B" class="multiBtnFont"></span></td></tr><tr><td id="quizMulti3" class="quizItemsB"><span id="quizItem3B" class="multiBtnFont"></span></td></tr><tr><td id="quizMulti4" class="quizItemsB"><span id="quizItem4B" class="multiBtnFont"></span></td></tr></table><div id="quizAllItemsC"><p id="englishWrite"></p><form id="answerForm" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" novalidate></form><div id="writeAnswerBoard"><table id="boardTable" style="margin-top: 10px;"><tr id="specialChars"><td id="char1" class="boardChar"></td><td id="char2" class="boardChar"></td><td id="char3" class="boardChar"></td><td id="char4" class="boardChar"></td><td id="char5" class="boardChar"></td><td id="char6" class="boardChar"></td></tr><tr><td colspan="6" id="writeError"></td></tr><tr><td colspan="6" id="boardMain"><span id="writtenAnswer"></span></td></tr><tr><td colspan="6" id="writeError2">CONTINUE</td></tr><tr><td colspan="2" id="hint1" class="boardBottom"></td><td colspan="2" id="hint2" class="boardBottom"></td><td colspan="2" id="hint3" class="boardBottom"></td></tr></table></div></div><div id="quizWriteImg"><img id="wrongLogo1" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo2" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo3" class="wrongLogo" src="../../common/strike.svg"></div></div><table id="quizPreload"><tr><th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th></tr><tr><td id="quizPreloadMedal"></td></tr><tr><td id="quizPreloadStart">START NOW</td></tr></table><div id="quizStart"><div id="quizStartImg"><div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div><table id="quizMenu"><tr><th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th></tr><tr><td id="quizBtn1" class="quizType"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">BEGINNER' +
  "'" +
  'S LUCK</h2><img class="chooseQuizIcon" src="../../common/quizvocab1.svg"/><h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">BE ALL EARS</h2><img class="chooseQuizIcon" src="../../common/quizvocab2.svg"/><h2 class="chooseQuizText2">Difficulty: Average</h2></td></tr><tr><td id="quizBtn3" class="quizType"><div id="sMedal3" class="smallMedal"></div><h2 class="chooseQuizText">WRITE-A-WORD</h2><img class="chooseQuizIcon" src="../../common/quizvocab3.svg"/><h2 class="chooseQuizText2">Difficulty: Hard</h2></td><td id="quizBtn4" class="quizType"><div id="sMedal4" class="smallMedal"></div><h2 class="chooseQuizText">FLUENCY SPRINT</h2><img class="chooseQuizIcon" src="../../common/quizvocab4.svg"/><h2 class="chooseQuizText2">Difficulty: Fluent</h2></td></tr></table></main>';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CREATE IMAGE ARRAY

if (lessonNumber !== 0) {
  ///CODE IF NOT COMBINED QUIZ
  var imageArray = [oPath + 'images/pic1.jpg'];
  if (lessonType === 'normal') {
    for (var num = 2; num < numWords + 1; num++) {
      imageArray.push(oPath + 'images/pic' + num + '.jpg');
    }
  } else if (lessonType === 'sentence') {
    imageArray.push(oPath + 'images/pic1.jpg');
    for (var num = 2; num < numWords * 0.5 + 1; num++) {
      imageArray.push(oPath + 'images/pic' + num + '.jpg');
      imageArray.push(oPath + 'images/pic' + num + '.jpg');
    }
  } else {
    for (var num = 2; num < numWords * 0.5 + 1; num++) {
      imageArray.push(oPath + 'images/pic' + num + '.jpg');
      imageArray.push(oPath + 'images/pic' + num + '.jpg');
    }
  }
  if (quizFillArray.length >= 1) {
    for (var num = 1; num <= quizFillArray.length; num++) {
      imageArray.push(oPath + 'images/quiz' + num + '.jpg');
    }
  }
  ///CODE IF NOT COMBINED QUIZ
} else {
  ///CODE IF COMBINED QUIZ
  var imageArray = [];
  for (var num = 0; num <= numWords + 1; num++) {
    if (window['lessonType' + nums1[num]] === 'normal') {
      imageArray.push(
        oPath2 + nums1[num] + '/images/pic' + (nums2[num] + 1) + '.jpg',
      );
    } else if (nums1[num] === 7) {
      imageArray.push(
        oPath2 +
          nums1[num] +
          '/images/pic' +
          (Math.floor((nums2[num] + 1) * 0.5) + 1) +
          'b.jpg',
      );
    } else if (window['lessonType' + nums1[num]] === 'sentenceTitle') {
      imageArray.push(
        oPath2 +
          nums1[num] +
          '/images/pic' +
          (Math.floor((nums2[num] + 1) * 0.5) + 1) +
          '.jpg',
      );
    } else if (window['lessonType' + nums1[num]] === 'sentence') {
      imageArray.push(
        oPath2 +
          nums1[num] +
          '/images/pic' +
          Math.ceil((nums2[num] + 1) * 0.5) +
          '.jpg',
      );
    }
  }
  ///CODE IF COMBINED QUIZ
}

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
  fastOrSlow = 'slow';
  clearTimeout(wordTimer);
  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', slowSounds[currentWordNum]);
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
  if (restartedLesson) {
    $('.mainPic2, .mainPic1').css({
      'background-image': 'url(' + imageArray[0] + ')',
    });
    restartedLesson = false;
    return;
  }
  ////Don't change pic
  if (lessonType != 'normal') {
    if (picToggle == 1) {
      var picUrl = $('.mainPic1').css('background-image').split('images/');
      picUrl = picUrl[1].split(')').join('');
    } else {
      var picUrl = $('.mainPic2').css('background-image').split('images/');
      picUrl = picUrl[1].split(')').join('');
    }
    if (
      picUrl == imageArray[currentWordNum].split(oPath + 'images/').join('')
    ) {
      return;
    }
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
    if (currentWordNum != 0) {
      currentWordNum--;
      changeWord();
    }
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHANGE WORD
function changeWord() {
  ///5.1
  if (lessonNumber != 3) {
    if (!localStorage.getItem(storeInfo + 'insight')) {
      if (currentWordNum > 2 && $('.insightLabel').length == 0) {
        $('.shinyPicture').append('<div class="insightLabel"></div>');
        $('.insight').addClass('fullOpacity');
      }
    }
  }
  ///5.1

  ///PORTUGUESE CHANGE LEFT OFF START
  saveLeftOff(forExamples.length - 1);
  ///PORTUGUESE CHANGE LEFT OFF END

  $('#pauseBtn').attr('src', '../../common/pause.svg');
  soundRepeated = 0;
  if (lessonNumber == 23) {
    if (currentWordNum >= 1 && currentWordNum <= 4) {
      fastOverwrite = true;
    } else {
      fastOverwrite = false;
    }
  }

  /////START SOUND OPTIONS WITH INITIALISATION
  if ($('#selectPlayback').val().charAt(0) == 'f') {
    if (lessonInit == 'true') {
      fastOrSlow = 'fast';
      $('.timerMeter > .timerSpan').stop();
      $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
      $('#mainSound').trigger('pause');
      if (forExamples[0].charAt(0) == '*') {
        $('#mainSound').attr('src', oPath + 'sounds/femsound1' + soundType);
      } else {
        $('#mainSound').attr('src', oPath + 'sounds/sound1' + soundType);
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
  } else {
    if (lessonInit == 'true') {
      fastOrSlow = 'slow';
      $('.timerMeter > .timerSpan').stop();
      $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
      $('#mainSound').trigger('pause');
      if (forExamples[0].charAt(0) == '*') {
        $('#mainSound').attr('src', oPath + 'sounds/femsound2' + soundType);
      } else {
        $('#mainSound').attr('src', oPath + 'sounds/sound2' + soundType);
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
      loadSlowSound();
    }
  }
  ///////START Next Control Toggle
  if (currentWordNum == 0) {
    $('.leftArrow').hide();
    $('.rightArrow').show();
  } else if (currentWordNum == numWords - 1) {
    $('.leftArrow').show();
    $('.rightArrow').hide();
  } else {
    $('.leftArrow').show();
    $('.rightArrow').show();
  }
  ///////END Next Control Toggle
  swapImages();
  ///////START Button Hilite Control
  $('.ouinoButton').removeClass('buttonOn');
  $('.ouinoButton').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  $('#button' + currentWordNum + '').addClass('buttonOn');
  $('#button' + currentWordNum + '').css({
    background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
  });

  var midWords = numWords * 0.5;
  var parCur = parseInt(currentWordNum);
  if ($('#button' + (parCur + 1)).length != 0 && parCur > midWords) {
    $('#button' + (parCur + 1)).scrollintoview();
  } else if (parCur != 0 && parCur < midWords) {
    $('#button' + (parCur - 1)).scrollintoview();
  } else {
    $('#button' + parCur).scrollintoview();
  }
  ///////END Button Hilite Control
  /////START Change Foreign Text
  var currentWordString = forExamples[currentWordNum];
  ////ADD NOTE
  if (currentWordString.charAt(0) == '*') {
    currentWordString = currentWordString.split('*').join('');
    $('.forSentence').css({ color: '#CC0000' });
  } else if (currentWordString.charAt(0) == '/') {
    currentWordString = currentWordString.split('/').join('');
    $('.forSentence').css({ color: '#333' });
  } else {
    $('.forSentence').css({ color: '#0360D1' });
  }
  ////ADD NOTE
  if (currentWordString.charAt(0) == '%') {
    currentWordString = currentWordString.split('%');
    var myNote = currentWordString[1];
    currentWordString = currentWordString[2];

    ///2020 EXTRA START REPLACE BE CAREFUL
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

  ///// START Change Text
  $('.engSentence').html(engExamples[currentWordNum]);
  $('.forSentence').html(currentWordString);

  ///2020 EXTRA START
  if (cardRaw.length > 0) {
    var fCard = lessonNumber + '|' + (parseInt(currentWordNum) + 1) + cardCate;
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
  //// END Change Text
  resizeText();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START BUTTON TEXT RESIZE
function resizeButtonText() {
  /////START FOR

  ///2023 START
  for (var num = 0; num < numWords; num++) {
    $('.buttonWrap').css({ fontSize: '14px' });
    $('#button' + num).css({ fontSize: '14px' });
    $('.buttonWrap').text(engButtons[num]);
    var wordWidth = $('.buttonWrap').width();
    var buttonWidth = $('#button' + num).width();
    var buttonText = $('#button' + num).val();
    var fullFont = 14;
    ///2023 END

    while (
      wordWidth > buttonWidth &&
      fullFont > 0.3 &&
      buttonText != 'Example'
    ) {
      fullFont = fullFont - 0.5;
      $('.buttonWrap').css({ fontSize: fullFont + 'px' });
      $('#button' + num).css({ fontSize: fullFont + 'px' });
      wordWidth = $('.buttonWrap').width();
      buttonWidth = $('#button' + num).width();
    }
  }

  ///////END FOR
}
//////////////////////////////////////////////////////////////////////////////END BUTTON TEXT RESIZE

//////////////////////////////////////////////////////////////////////////////////START RESIZE TEXT
///4.1.4 START
function resizeText() {
  ///2021 font start

  //2023 START
  var theFont = 27;
  //2023 END
  $('.forSentence').css({ fontSize: theFont + 'px' });
  if ($('.engSentence').hasClass('engSentenceOnly')) {
    $('.engSentence').css({ fontSize: theFont + 'px' });
  } else {
    $('.engSentence').css({ fontSize: 20 + 'px' });
  }
  $('.forSentence, .engSentence, .disSentence').css({
    'max-width': '3000px',
    'white-space': 'nowrap',
    'line-height': 'normal',
    margin: '0',
  });
  var myTextWidth = $('.textWrap').width();
  var elementWidth = $('.wordSentence').width() * 0.92;
  var myTextWidth2 = $('.textWrap2').width();
  for (var numB = theFont; myTextWidth > elementWidth; numB--) {
    myTextWidth = $('.textWrap').width();
    var newSize = numB;
    if (newSize < 25) {
      newSize = 27;
      if ($('.forSentence').text().length > 65) {
        newSize = 24;
      } else if ($('.forSentence').text().length > 50) {
        newSize = 26;
      }
      $('.forSentence').css({
        'font-size': newSize + 'px',
        'max-width': elementWidth - 20,
        'white-space': 'normal',
        'line-height': newSize + 1 + 'px',
        margin: '0 0 8px 0',
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
        newSize2 = 24;
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
    for (var numC = 20; myTextWidth2 > elementWidth; numC--) {
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

///4.1.4 END
///////////////////////////////////////////////////////////////////////////////////////////////////////END RESIZE TEXT

function resizeQuizText() {
  var myTextWidth;
  var elementWidth;
  var newSize;

  ///2023 START
  $('#quizSentence').css({ fontSize: '30px' });
  myTextWidth = $('.textWrap4').width();
  elementWidth = $('.quizSentenceWrap').width() - 15;
  for (var num = 30; myTextWidth > elementWidth; num--) {
    myTextWidth = $('.textWrap4').width();
    newSize = num;
    $('#quizSentence').css({ fontSize: newSize + 'px' });
  }
  ///2023 END
  $('#boardMain').css({ fontSize: '24px' });
  myTextWidth = $('#writtenAnswer').width();
  elementWidth = $('#writeAnswerField').width() - 30;
  for (var num = 24; myTextWidth > elementWidth && num > 1; num--) {
    myTextWidth = $('#writtenAnswer').width();
    newSize = num;
    $('#boardMain').css({ fontSize: newSize + 'px' });
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
  if (localStorage.getItem(storeInfo + 'cardsSTORE')) {
    cardRaw = localStorage.getItem(storeInfo + 'cardsSTORE');
    cardRaw = cardRaw.split(':');
  }
  $('body').append(
    '<img id="flashNotice" src="../../flash/images/notice3.svg"/><img id="flashNotice2" src="../../flash/images/notice4.svg"/>',
  );
  $('.addQuizFlash').on('touchend mouseup', function (event) {
    event.preventDefault();

    for (i = 0; i < errors.length; i++) {
      var fCard = lessonNumber + '|' + parseInt(errors[i]) + cardCate;

      //COMBINED VOCAB EXCEPTION
      if (lessonNumber == 0) {
        var imageInfo = imageArray[parseInt(errors[i]) - 1].split('/');
        var flInfo1 = imageInfo[imageInfo.length - 1]
          .split('pic')
          .join('')
          .split('.jpg')
          .join('');
        flInfo1 = parseInt(flInfo1);
        var flInfo2 = parseInt(imageInfo[imageInfo.length - 3]);
        if (window['lessonType' + flInfo2] == 'sentence') {
          flInfo1 = flInfo1 * 2 - 1;
        } else if (window['lessonType' + flInfo2] == 'sentenceTitle') {
          flInfo1 = flInfo1 * 2 - 2;
        }
        fCard = flInfo2 + '|' + flInfo1 + cardCate;
      }
      //COMBINED VOCAB EXCEPTION

      var ii;
      var foundIt = false;
      for (ii = 0; ii < cardRaw.length; ii++) {
        var cReal = cardRaw[ii].split('|');
        cReal = cReal[0] + '|' + cReal[1] + '|' + cReal[2];
        if (cReal == fCard) {
          foundIt = true;
        }
      }

      var tellTime = ['23|2|c', '23|3|c', '23|4|c', '23|5|c'];
      if (tellTime.indexOf(fCard) == -1) {
        if (!foundIt) {
          cardRaw.push(fCard);
        }
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
    var fCard = lessonNumber + '|' + (parseInt(currentWordNum) + 1) + cardCate;
    var tellTime = ['23|2|c', '23|3|c', '23|4|c', '23|5|c'];
    if (tellTime.indexOf(fCard) == -1) {
      cardRaw.push(fCard);
    }

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
    var fCard = lessonNumber + '|' + (parseInt(currentWordNum) + 1) + cardCate;
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
  ///APPLY INITIAL BACKGROUND PICTURE
  if (lessonNumber !== 0) {
    $('.mainPic1').css({
      'background-image': 'url(' + oPath + 'images/pic1.jpg)',
    });
  }

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
  if (currentDevice != 'mobile') {
    $('.engToggle').hover(function () {
      $('.engToggle').toggleClass('engHover');
      $('#arrowLabel').text('ENGLISH TRANSLATION ON/OFF');
      $('.instructions').toggleClass('showDiv');
    });
  }
  ////PORTUGUESE CHANGE END

  //5.1
  if (lessonNumber != 3) {
    $('.insight').on('click', loadInsight);
    if (currentDevice != 'mobile') {
      $('.insight').hover(function () {
        $('.insight').toggleClass('insightHover');
        $('#arrowLabel').text('SHOW SENTENCE EXPLANATION');
        $('.instructions').toggleClass('showDiv');
      });
    }
  } else {
    $('.insight, .insightLabel').hide();
  }
  //5.1

  ///APPLY LESSON TITLE
  $('.lessonTitle').text(lessonTitle);
  ///CREATE BUTTONS AND CONTENT
  $('.buttonContainer').append($(buttonCreate));
  $('.ouinoButton').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
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

  ///2020 EXTRA START
  if (localStorage.getItem(storeInfo + 'irregSTORE')) {
    irregSpan = false;
  }
  ///2020 EXTRA END

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
    toggleText();
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

  if (localStorage.getItem(storeInfo + 'externalKeyboard')) {
    $('#keyboardBtn').attr('src', '../../common/keyboard.svg');
    externalKeyboard = true;
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
    //2020 CHANGE START
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
    //2020 CHANGE END
    $(
      '.smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
    ).css({ opacity: '0' });
    $('.gradientColor3').css({
      background: 'url(../../common/black.svg), linear-gradient(#45484d,black)',
    });
  }
  $('#slideCont').hide();
  if (quizScores != null) {
    pastQuizScoreAll = quizScores[lessonNumber - 1];
  } else {
    pastQuizScoreAll = '0|0|0|0';
  }
  if (lessonNumber === 0) {
    pastQuizScoreAll = '0|0|0|0';
    $(
      '.smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
    ).css({ opacity: '0' });
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
  if (lessonNumber == 7 && currentSecShort == 'vocab') {
    imageArray = imageArray
      .join('%%')
      .split('b.jpg')
      .join('.jpg')
      .split('.jpg')
      .join('b.jpg')
      .split('%%');
  }
  ///2018CHANGE
  if (
    forExamples[0].indexOf('<em> - </em>') != -1 ||
    forExamples[1].indexOf('<em> - </em>') != -1
  ) {
    fastSounds = fastSounds
      .join('%%')
      .split('sounds/soundB')
      .join('sounds/sound')
      .split('sounds/sound')
      .join('sounds/soundB')
      .split('%%');
  }
  fillAnswerOn = false;
  $('#quizSentence').removeClass('yellowText');
  $('#goodAnswer').animate({ opacity: '0' });
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
    '.menuTitleContainer, #pauseBtn, #optionBtn, #optionBtn, #quizPreload, #quizGoBack, #quizStart, #quizItself, #quizTimer, #quizTimer2, #quizTimerPointer, #quizDone',
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
}

function loadQuiz1() {
  $('#keyboardBtn').hide();
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong2.svg)',
  });
  $('#quizTimerImage').attr('src', '../../common/timerPointer.svg');
  disableTimer = true;
  $('#quizSentenceContainer').show();
  $('#quizAllItemsC, #quizWriteImg').hide();
  $('#quizMenu').hide();
  timerTime = 6000;
  quizNumQues = quizCombinedArray.length + quizFillArray.length;
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
  quizFillNum = 1;
  preLoadQuiz();
}

function loadQuiz2() {
  $('#keyboardBtn').hide();
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong2.svg)',
  });
  $('#quizTimerImage').attr('src', '../../common/timerPointer.svg');
  disableTimer = true;
  $('#quizSentenceContainer').hide();
  $('#quizAllItemsC, #quizWriteImg').hide();
  $('#quizMenu').hide();
  timerTime = 6000;
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
  $('#keyboardBtn').show();
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong3.svg)',
  });
  findAccents();
  $('#quizSentenceContainer').hide();
  $('#quizAllItems, #quizAllItemsB, #quizMultiImg').hide();
  $('#quizAllItemsC, #quizWriteImg').show();
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

function loadQuiz4() {
  $('#keyboardBtn').show();
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong4.svg)',
  });
  findAccents();
  $('#quizTimerImage2').attr('src', '../../common/timerPointer2.svg');
  $(
    '#quizAllItems, #quizAllItemsB, #quizMultiImg, .boardBottom, #quizSentenceContainer',
  ).hide();
  $('#quizAllItemsC, #quizWriteImg, #specialChars').show();
  disableTimer = true;
  $('#quizMenu').hide();
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
  $('#quizPreload, #quizGoBack').show();
  $('#quizBanner').show();
}

function startQuiz() {
  $('#backBtn, #menuMain2').addClass('darker');

  quizCombinedArray = shuffle(quizCombinedArray);
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
      }
      resizeButtonQuizText();
      resizeQuizText();
      firstLoad();
    });
  }, 1000);
  ///2019
}

function firstLoad() {
  if (currentQuiz == 1 || currentQuiz == 2) {
    if (quizMapArray.length != 0) {
      $('#quizAllItems').show();
      $('#quizAllItemsB, #quizMultiImg').hide();
    } else {
      $('#quizAllItems').hide();
      $('#quizAllItemsB, #quizMultiImg').show();
    }
  }
  $('#quizTimer, #quizTimer2, #quizTimerPointer, #quizItself').css({
    opacity: '0',
  });
  playSprite('blank');
  //2019 add small pause
  loadQuestion();
  setTimeout(function () {
    $('#quizTimer, #quizTimer2, #quizItself').animate({ opacity: '1' });
    if (currentQuiz == 1 || currentQuiz == 2) {
      disableTimer = false;
      setTimeout(function () {
        loadQuizSound();
      }, 500);
    }
  }, 500);
  //2019 add small pause
}

function loadQuestion() {
  if ($('#quizMulti1').is(':visible')) {
    $('.quizItemsB').removeClass('fullyDisable');
  }

  madeError = false;
  setTimeout(function () {
    maxScore = 65;
    quizPtsCount = 65;
    $('#quizScoreBack').css({
      'background-image': 'url(../../common/scoreBack4.svg)',
    });
    $('#goodAnswerIn').css({
      'background-image': 'url(../../common/score4.svg)',
    });
    $('#quizScoreImg').attr('src', '../../common/score4.svg');
  }, 2000);
  setTimeout(function () {
    $('#quizTimerPointer').css({ opacity: '0' });
  }, 200);
  $('#questionNum').text(currQuizNum);
  quizQuesNum = quizCombinedArray[currQuizNum - 1];
  if (errorMode == true) {
    quizQuesNum = errors[currQuizNum - 1];
  }
  if (lessonType == 'normal') {
    quizNumArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    ];
    quizNumArray = quizNumArray.slice(0, numWords);
  } else if (lessonType == 'sentence') {
    quizNumArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
    quizNumArray = quizNumArray.slice(0, numWords * 0.5);
  } else {
    quizNumArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
    quizNumArray = quizNumArray.slice(0, numWords * 0.5);
  }

  var position2 = quizNumArray.indexOf(quizQuesNum);
  if (~position2) {
    quizNumArray.splice(position2, 1);
  }
  for (var num = 0; num < numToRemove.length; num++) {
    var position = quizNumArray.indexOf(numToRemove[num]);
    if (~position) {
      quizNumArray.splice(position, 1);
    }
  }

  setTimeout(function () {
    resizeButtonQuizText();
    resizeQuizText();
  }, 1);

  if (currentQuiz >= 3) {
    writeActions();
    return;
  }

  if (currQuizNum <= quizMapArray.length) {
    if ($('#quizAllItems').is(':hidden')) {
      $('#quizAllItems').show();
      $('#quizAllItemsB, #quizMultiImg').hide();
    }
    timerWait = 100;
    mapActions();
  } else if (
    currQuizNum > quizMapArray.length &&
    currQuizNum <= quizCombinedArray.length
  ) {
    if ($('#quizAllItems').is(':visible')) {
      $('#quizAllItems').hide();
      $('#quizAllItemsB, #quizMultiImg').show();
    }
    timerWait = 100;
    multiActions();
  } else {
    if ($('#quizAllItems').is(':visible')) {
      $('#quizAllItems').hide();
      $('#quizAllItemsB, #quizMultiImg').show();
    }
    timerWait = 1000;
    fillActions();
  }
}

function mapActions() {
  if ($('#englishWrite2').is(':visible')) {
    $('#englishWrite2').hide();
  }
  var shuffledQuiz = shuffle(quizNumArray);
  shuffledQuiz = shuffledQuiz.slice(0, 5);
  shuffledQuiz.push(quizQuesNum);
  shuffledQuiz = shuffle(shuffledQuiz);
  var quizWord = forExamples[quizQuesNum - 1];

  if (quizWord.charAt(0) == '*' || quizWord.charAt(0) == '/') {
    quizWord = quizWord.substring(1);
  }
  if (quizWord.charAt(0) == '%') {
    quizWord = quizWord.split('%');
    quizWord = quizWord[2];
  }
  quizWord = quizWord.split('<em> - </em>');
  quizWord = quizWord[0].split('<strong>').join('').split('</strong>').join('');
  $('#quizSentence').html(quizWord);
  $('#quizItem1').val(shuffledQuiz[0]);
  $('#quizItem2').val(shuffledQuiz[1]);
  $('#quizItem3').val(shuffledQuiz[2]);
  $('#quizItem4').val(shuffledQuiz[3]);
  $('#quizItem5').val(shuffledQuiz[4]);
  $('#quizItem6').val(shuffledQuiz[5]);
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
  $('#quizEng1').html(engExamples[shuffledQuiz[0] - 1]);
  $('#quizEng2').html(engExamples[shuffledQuiz[1] - 1]);
  $('#quizEng3').html(engExamples[shuffledQuiz[2] - 1]);
  $('#quizEng4').html(engExamples[shuffledQuiz[3] - 1]);
  $('#quizEng5').html(engExamples[shuffledQuiz[4] - 1]);
  $('#quizEng6').html(engExamples[shuffledQuiz[5] - 1]);

  ///2020 EXTRA START WATCH PATH FOR THIS
  if (lessonNumber == 27) {
    $('#quizItem6').css({
      'background-image': 'url(' + oPath + 'images/pic6.jpg',
    });
    $('#quizEng6').html('Dawn');
  }
  ///2020 EXTRA END WATCH PATH FOR THIS
}

function multiActions() {
  if ($('#englishWrite2').is(':visible')) {
    $('#englishWrite2').hide();
  }
  var shuffledQuiz = shuffle(quizNumArray);
  shuffledQuiz = shuffledQuiz.slice(0, 3);
  shuffledQuiz.push(quizQuesNum);
  shuffledQuiz = shuffle(shuffledQuiz);
  var quizWord = forExamples[quizQuesNum - 1];
  if (quizWord.charAt(0) == '*' || quizWord.charAt(0) == '/') {
    quizWord = quizWord.substring(1);
  }
  if (quizWord.charAt(0) == '%') {
    quizWord = quizWord.split('%');
    quizWord = quizWord[2];
  }
  quizWord = quizWord.split('<em> - </em>');
  quizWord = quizWord[0].split('<strong>').join('').split('</strong>').join('');
  $('#quizSentence').html(quizWord);
  $('#quizMulti1').val(shuffledQuiz[0]);
  $('#quizMulti2').val(shuffledQuiz[1]);
  $('#quizMulti3').val(shuffledQuiz[2]);
  $('#quizMulti4').val(shuffledQuiz[3]);
  $('#quizItem1B').html(engExamples[shuffledQuiz[0] - 1]);
  $('#quizItem2B').html(engExamples[shuffledQuiz[1] - 1]);
  $('#quizItem3B').html(engExamples[shuffledQuiz[2] - 1]);
  $('#quizItem4B').html(engExamples[shuffledQuiz[3] - 1]);
  $('#quizMultiImg').css({
    'background-image': 'url(' + imageArray[quizQuesNum - 1] + ')',
  });
}

function fillActions() {
  fillAnswerOn = false;
  if ($('#englishWrite2').is(':hidden')) {
    $('#englishWrite2').show();
  }
  var position = quizNumArray.indexOf(quizFillArray[quizFillNum - 1]);
  if (~position) quizNumArray.splice(position, 1);
  var shuffledQuiz = shuffle(quizNumArray);
  shuffledQuiz = shuffledQuiz.slice(0, 3);
  quizQuesNum = quizFillArray[quizFillNum - 1];
  shuffledQuiz.push(quizQuesNum);
  shuffledQuiz = shuffle(shuffledQuiz);
  $('#quizSentence').html(
    fillQuestions[quizFillNum - 1]
      .split('_')
      .join("<span class='arial'>_</span>"),
  );
  $('#englishWrite2').html(fillAnswersEng[quizFillNum - 1]);
  $('#quizMulti1').val(shuffledQuiz[0]);
  $('#quizMulti2').val(shuffledQuiz[1]);
  $('#quizMulti3').val(shuffledQuiz[2]);
  $('#quizMulti4').val(shuffledQuiz[3]);
  $('#quizItem1B').html(quizExamples[shuffledQuiz[0] - 1]);
  $('#quizItem2B').html(quizExamples[shuffledQuiz[1] - 1]);
  $('#quizItem3B').html(quizExamples[shuffledQuiz[2] - 1]);
  $('#quizItem4B').html(quizExamples[shuffledQuiz[3] - 1]);
  $('#quizMultiImg').css({
    'background-image': 'url(' + oPath + 'images/quiz' + quizFillNum + '.jpg)',
  });
}

function writeActions() {
  if (currentQuiz == 4) {
    quizTimerAnimate2();
  }
  submitted = false;
  $('#specialChars').show();
  if (currentQuiz == 3) {
    $('.boardBottom').show();
  }
  $('#boardMain').removeClass('topAlign');
  if (viewportHeight < 450 || viewportWidth < 400) {
    $('.boardTop').hide();
  } else {
    $('.boardTop').show();
  }
  $('#writeError, #writeError2').hide();
  $('#writeAnswerField').val('');
  $('.wrongLogo').hide();
  $('#hint1, #hint2, #hint3').css({ visibility: 'visible' });
  foundArticle = '';
  var quizWord = forExamples[quizQuesNum - 1]
    .split('<span>')
    .join('')
    .split('</span>')
    .join('');
  if (quizWord.charAt(0) == '*' || quizWord.charAt(0) == '/') {
    quizWord = quizWord.substring(1);
  }
  if (quizWord.charAt(0) == '%') {
    quizWord = quizWord.split('%');
    quizWord = quizWord[2];
  }
  quizWord = quizWord.split('<em> - </em>');
  quizWord = quizWord[0].split('<strong>').join('').split('</strong>').join('');
  writtenString = quizWord;
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
    .split('’')
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
    .split('–')
    .join('-')
    .split('—')
    .join('-')
    .split('-')
    .join('-')
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
  //2020
  var blankCount = 0;
  for (var num = 0; num < writtenLength; num++) {
    if (wArr[num] == ' ') {
      quizDisplayAnswer =
        quizDisplayAnswer + '<span class="spanBlank blanker">&nbsp;</span>';
      blankCount++;
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
        '"><i class="invisible">' +
        wArr[num] +
        '</i></span>';
      letterNum++;
    }
  }
  //Get Quiz Display
  if (foundArticle != '') {
    quizDisplayAnswer =
      foundArticle +
      '<span class="spanBlank"></span><b class="yellowText">' +
      quizDisplayAnswer +
      '</b>';
  } else {
    quizDisplayAnswer = '<b class="yellowText">' + quizDisplayAnswer + '</b>';
  }
  $('#writtenAnswer').html(quizDisplayAnswer);
  blankCount = Math.ceil(blankCount * 0.5);
  if (writtenLength > 16 && blankCount != 0) {
    $('.blanker')
      .eq(blankCount - 1)
      .html('<br>');
  }
  //2020
  $('#englishWrite').html(engExamples[quizQuesNum - 1]);
  ///GERMAN CHANGE
  if (lessonLanguage != 'German') {
    if (
      lessonType == 'sentenceTitle' ||
      lessonNumber == 46 ||
      lessonNumber == 49
    ) {
      $('#englishWrite').append(' (Masculine Form)');
    }
    ///2018CHANGE
    else if (lessonNumber == 92 || lessonNumber == 93 || lessonNumber == 94) {
      $('#englishWrite').append(' (Masculine Form)');
    }
    ///2018CHANGE
    else if (lessonNumber == 50 && quizQuesNum <= 10) {
      $('#englishWrite').append(' (Masculine Form)');
    }
    ///2020 FIX
    else if (lessonNumber == 0) {
      var masArr = [
        '/7/',
        '/8/',
        '/9/',
        '/46/',
        '/49/',
        '/92/',
        '/93/',
        '/94/',
      ];
      var nn;
      for (nn = 0; nn < masArr.length; nn++) {
        if (imageArray[quizQuesNum - 1].indexOf(masArr[nn]) != -1) {
          $('#englishWrite').append(' (Masculine Form)');
        }
      }
      if (
        imageArray[quizQuesNum - 1].indexOf('/50/') != -1 &&
        quizQuesNum <= 10
      ) {
        $('#englishWrite').append(' (Masculine Form)');
      }
    }
    ///2020 FIX
  } ///GERMAN CHANGE
  $('#quizWriteImg').css({
    'background-image': 'url(' + imageArray[quizQuesNum - 1] + ')',
  });
  if (currentDevice != 'mobile' || externalKeyboard == true) {
    focused = true;
    $('#writeAnswerField').focus();
  }
  if (checkAccent == true) {
    findAccent();
  }
  setTimeout(resizeQuizText, 10);
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
    $('#letter' + num).html(scrambled[num].toLowerCase());
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
    if (currQuizNum > quizCombinedArray.length) {
      loadFillAnswer();
      return;
    }
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
      if (currentQuiz == 3) {
        $('#quizDoneSentence').hide();
      } else {
        $('#quizDoneSentence').show();
      }
      doneQuiz();
    }
    ///2023 END
  } else {
    if (currentQuiz == 2) {
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
      $('#wrongAnswer').animate({ opacity: '0' });
    }, 1000);
  }
}

///////////CHECK WRITTEN ANSWER
function checkWrittenAnswer() {
  if ($('#writeAnswerField').val() == '' && quizGoodAnswer != '') {
    return;
  }
  if ($('#writeError2').is(':visible') && currentQuiz != 4) {
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
  //2019CHANGE
  var writtenAnswer = $('#writeAnswerField').val().toLowerCase();
  var articlePos = writtenAnswer.search(foundArticle.toLowerCase());
  ///2020 new
  if (articlePos == 0) {
    writtenAnswer = writtenAnswer
      .split(foundArticle.toLowerCase())
      .join('')
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
      .split('–')
      .join('-')
      .split('—')
      .join('-')
      .split('-')
      .join('-')
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
  } else {
    writtenAnswer = writtenAnswer
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
      .split('–')
      .join('-')
      .split('—')
      .join('-')
      .split('-')
      .join('-')
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
  }
  ///2020 new
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

  ///2018CHANGE2
  if (currentQuiz == 4) {
    var errCheck = $('#writeError').text();
    if (errCheck.indexOf('watch') != -1) {
      {
        $('#writeError').html(
          "Let's&nbsp;continue!&nbsp;Don't&nbsp;worry&nbsp;about&nbsp;it.",
        );
        $('#quizTimerPointer2').stop();
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
        $('#wrongAnswer, #goodAnswer, #goodAnswerPic2').stop(true, true);
        $('#wrongAnswer').css({ opacity: '0' });
        $('#wrongAnswerPic').removeClass('opacityAnimate');
        $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' });
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

  if (goodAnswer == writtenAnswer) {
    if (currentQuiz == 4) {
      $('#quizTimerPointer2').stop();
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
    $('#wrongAnswer, #goodAnswer, #goodAnswerPic2').stop(true, true);
    $('#wrongAnswer').css({ opacity: '0' });
    $('#wrongAnswerPic').removeClass('opacityAnimate');
    $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' });
    setTimeout(function () {
      $('#goodAnswer, #goodAnswerPic2').animate({ opacity: '0' });
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
    if (currentQuiz == 4) {
      $('#quizTimerPointer2').stop();
      clearTimeout(timerDelay);
      $('#quizTimerPointer').css({ opacity: '0' });
    }
    currentPts = currentPts - 5;
    $('#currentScore').text(currentPts);
    $('#hintPts1').stop(true, true);
    $('#hintPts1').css({ opacity: '1' });
    setTimeout(function () {
      $('#hintPts1').animate({ opacity: '0' });
    }, 2000);
    playSprite('pause');
    $('#boardMain').addClass('topAlign');
    $('#writeError').html('Good!&nbsp;But&nbsp;watch the&nbsp;accents...');
    $('.boardBottom, .boardTop, #specialChars').hide();
    $('#writeError, #writeError2').show();
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
  else if (goodPercent >= 0.7) {
    if (currentDevice == 'mobile' && externalKeyboard == false) {
      focused = false;
      $('#writeAnswerField').blur();
    }
    if (currentQuiz == 4) {
      $('#quizTimerPointer2').stop();
      clearTimeout(timerDelay);
      $('#quizTimerPointer').css({ opacity: '0' });
    }
    currentPts = currentPts - 5;
    $('#currentScore').text(currentPts);
    $('#hintPts1').stop(true, true);
    $('#hintPts1').css({ opacity: '1' });
    setTimeout(function () {
      $('#hintPts1').animate({ opacity: '0' });
    }, 2000);
    playSprite('pause');
    $('#boardMain').addClass('topAlign');
    $('#writeError').html(
      'Good&nbsp;answer! But&nbsp;watch&nbsp;your&nbsp;spelling...',
    );
    $('.boardBottom, .boardTop, #specialChars').hide();
    $('#writeError, #writeError2').show();
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
    if (currentQuiz == 4) {
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
      $('.boardBottom, .boardTop, #specialChars').hide();
      $('#writeError, #writeError2').show();
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
    ///2023 START
    if (!madeError) {
      currentPts = currentPts - 50;
      $('#wrongAnswerPic, #wrongAnswer').addClass('opacityAnimate');
      setTimeout(function () {
        $('#wrongAnswerPic, #wrongAnswer').removeClass('opacityAnimate');
      }, 2100);
      $('#currentScore').text(currentPts);
      madeError = true;
    }

    ///2023 END
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
  $('.boardBottom, .boardTop, #specialChars').hide();
  //2023 START
  var scRatio = ($('body').height() - 45) / $('html').innerWidth();
  if (scRatio > 1) {
    $('#quizTimer2').hide();
  }
  //2023 END
  $('#writeError, #writeError2').show();
  var goodNoSpace = quizGoodPunct.split(' ').join('');
  for (var num = 0; num < goodNoSpace.length; num++) {
    $('#letter' + num).html(goodNoSpace[num]);
  }
  $('#quizTimerPointer2').stop(true, true);
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
    $('#wrongAnswer').animate({ opacity: '0' });
  }, 1000);
}

/////////
function goodAnswerFill() {
  $('#goodAnswer').animate({ opacity: '0' });
  if (currQuizNum != quizNumQues + 1) {
    $('#quizSentence').removeClass('yellowText');
    loadQuestion();
    disableTimer = false;
    loadQuizSound();
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
  if ($('#pauseWrap').is(':visible')) {
    $('#pauseWrap').hide();
  }
  if ($('#quizTimerPointer').is(':visible')) {
    $('#quizTimerPointer').stop(true, true);
    clearTimeout(timerDelay);
  }

  if (lessonNumber == 7 && currentSecShort == 'vocab') {
    imageArray = imageArray.join('%%').split('b.jpg').join('.jpg').split('%%');
  }
  if (
    forExamples[0].indexOf('<em> - </em>') != -1 ||
    forExamples[1].indexOf('<em> - </em>') != -1
  ) {
    fastSounds = fastSounds
      .join('%%')
      .split('sounds/soundB')
      .join('sounds/sound')
      .split('%%');
  }
  $('#newHighScore').transition({ y: '100%' });
  $('#newScoreUpdate').transition({ x: '-100%' });
  $('.menuTitleContainer').show();
  $('#pauseBtn').show();
  $('#optionBtn').show();
  $('#menuMain2').show();
  $('#quizBanner').hide();

  if (soundQuizEvent == true) {
    document
      .getElementById('mainSound')
      .removeEventListener('ended', afterSoundAction);
    soundQuizEvent = false;
  }
  if (soundLessonEvent != true) {
    document.getElementById('mainSound').addEventListener('ended', setTimer);
    soundLessonEvent = true;
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
    playSprite('transition');
    currentWordNum = 0;
  }

  changeWord();
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

  ///MOBILE OPTIONS
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
  $('.ouinoButton').on('click', buttonClicked);
  $('.rightArrow').on('click', nextImage);
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
    $('#quizContent').on('touchstart', function (event) {
      event.preventDefault();
    });
  }
  quizLoaded = true;
  $('#answerForm').submit(function (ev) {
    ev.preventDefault();
    checkWrittenAnswer();
  });

  //2023 START
  $('.quizItemsB').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  ////2023 END

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
    $('#quizBtn4').on('touchstart mousedown', function (event) {
      event.preventDefault();
      loadQuiz4();
    });
    $('.quizItems, .quizItemsB').on('touchstart mousedown', function (event) {
      event.preventDefault();
      checkClickAnswer($(this));
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

/////LOAD QUIZ SOUND
function loadQuizSound() {
  $('#mainSound').trigger('pause');
  var quizSound = fastSounds[quizQuesNum - 1];
  if (currQuizNum <= quizCombinedArray.length || currentQuiz >= 3) {
    $('#mainSound').attr('src', quizSound);
  } else {
    var quizSoundNum = quizFillNum * 2 - 1;
    $('#mainSound').attr(
      'src',
      oPath + 'sounds/quiz' + quizSoundNum + soundType,
    );
  }
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('canplay', playQuizSound);
}
/////LOAD QUIZ ANSWER SOUND
function loadFillAnswer() {
  $('.quizItemsB').addClass('fullyDisable');

  fillAnswerOn = true;
  $('#quizSentence').addClass('yellowText');
  $('#quizSentence').html(fillAnswers[quizFillNum - 1]);
  setTimeout(resizeQuizText, 10);
  $('#quizTimerPointer').css({ opacity: '0' });
  $('#mainSound').trigger('pause');
  var quizSoundNum = quizFillNum * 2;
  $('#mainSound').attr('src', oPath + 'sounds/quiz' + quizSoundNum + soundType);
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('canplay', playQuizSound);
  $('#quizTimerPointer').stop();
  clearTimeout(timerDelay);
  currentPts = currentPts + quizPtsCount;
  $('#currentScore').text(currentPts);
  currQuizNum++;
  playSprite('quizGood');
  $('#wrongAnswer, #goodAnswer').stop(true, true);
  $('#wrongAnswer').css({ opacity: '0' });
  $('#goodAnswer').css({ opacity: '1' });
  $('#wrongAnswerPic').removeClass('opacityAnimate');
  ///2023 START
  $('#goodAnswerPic').css({ opacity: '1' });
  setTimeout(function () {
    $('#goodAnswerPic').animate({ opacity: '0' });
  }, 3300);
  ///2023 END
  quizFillNum++;
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
  if (fillAnswerOn) {
    setTimeout(goodAnswerFill, 500);
    return;
  }
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
      doneQuiz();
    }
    return;
  }
  if (currentQuiz <= 2) {
    quizTimerAnimate();
  }
}

///TIMER ANIMATION

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

//2023 START//////////////////////////////////////////////
function quizTimerAnimate2() {
  clearTimeout(timerDelay);
  $('#quizTimerPointer2').stop(true, true);
  setTimeout(function () {
    $('#quizTimer2').fadeIn();
  }, 800);
  timerDelay = setTimeout(function () {
    var aniLength = $('#quizTimer2').width() - 15;
    $('#quizTimerImage2').css({
      '-webkit-transform': 'translate3d(0%, 0, 0)',
      transform: 'translate3d(0%, 0, 0)',
    });
    $('#quizTimerPointer2').stop(true, true);
    $('#quizTimerPointer2').css({ left: '-23px' });
    timerTime = timerTime * 1.3;
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
  }, 1500);
}
//2023 END/////////////////////////////////////////////

////////////SHUFFLE STUFF
function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
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
