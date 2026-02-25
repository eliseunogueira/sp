var oPath = '',
  oPath2 = '../';
'androidSTORE' == osType &&
  ((oPath =
    'https://www.eliseunogueira.com.br/app/' +
    lessonLanguage +
    '/vocab/' +
    lessonNumber +
    '/'),
  (oPath2 =
    'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/vocab/'));
var focused,
  soundTime,
  currentSection = 'Vocabulary',
  currentSecShort = 'vocab',
  quizTitle1 = "BEGINNER'S LUCK",
  quizTitle2 = 'BE ALL EARS',
  quizTitle3 = 'WRITE-A-WORD',
  quizTitle4 = 'FLUENCY SPRINT',
  currentProgram = 'Complete',
  errors = [],
  errorMode = !1,
  slidesPres = [1, 2, 3, 4],
  cardCate = '|c',
  cardRaw = [],
  irregSpan = !0,
  greenBub = [
    6, 3, 9, 11, 13, 16, 17, 19, 22, 27, 28, 34, 36, 45, 47, 53, 57, 58, 61, 71,
    75, 76, 81, 56, 62, 74, 82, 94, 98, 99, 105,
  ],
  redBub = [
    0, 1, 2, 7, 8, 10, 12, 15, 14, 20, 30, 32, 38, 40, 41, 49, 51, 65, 68, 69,
    77, 80, 29, 35, 52, 66, 78, 83, 102,
  ],
  blueBub = [
    4, 5, 21, 25, 33, 42, 48, 50, 54, 55, 59, 60, 64, 70, 72, 73, 86, 87, 88,
    89, 90, 91, 92, 95, 97, 106, 107, 108, 109, 93, 96,
  ],
  orangeBub = [18, 23, 31, 46, 84, 85, 100, 104],
  greyBub = [43, 67],
  purpleBub = [24, 37, 63, 79, 101, 103],
  turquoiseBub = [26, 39, 44];
function loadAudioCourse() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      window.location = '../../audio/index.html?vocab=' + lessonNumber;
    }, 100));
}
if (
  ((2 == lessonNumber) & ('Portuguese' == lessonLanguage) && greenBub.push(2),
  -1 !== greenBub.indexOf(lessonNumber))
)
  var btnColor = [
    '#118000',
    '#203e00',
    'rgba(32, 62, 0,0.7)',
    'rgba(32, 62, 0,0.7)',
  ];
else if (-1 !== orangeBub.indexOf(lessonNumber))
  btnColor = [
    '#d14a00',
    '#a12400',
    'rgba(161, 36, 0,0.7)',
    'rgba(161, 36, 0,0.7)',
  ];
else if (-1 !== redBub.indexOf(lessonNumber))
  btnColor = [
    '#d11a1a',
    '#6e0e0e',
    'rgba(110, 14, 14,0.7)',
    'rgba(110, 14, 14,0.7)',
  ];
else if (-1 !== blueBub.indexOf(lessonNumber))
  btnColor = [
    '#0a5d90',
    '#063561',
    'rgba(6, 53, 97,0.7)',
    'rgba(6, 53, 97,0.7)',
  ];
else if (-1 !== purpleBub.indexOf(lessonNumber))
  btnColor = [
    '#27488a',
    '#102557',
    'rgba(16, 37, 87,0.7)',
    'rgba(16, 37, 87,0.7)',
  ];
else if (-1 !== turquoiseBub.indexOf(lessonNumber))
  btnColor = [
    '#206d8a',
    '#0e3236',
    'rgba(14, 50, 54,0.7)',
    'rgba(14, 50, 54,0.7)',
  ];
else if (-1 !== greyBub.indexOf(lessonNumber))
  btnColor = [
    '#474f52',
    '#2a3133',
    'rgba(42, 49, 51,0.6)',
    'rgba(42, 49, 51,0.6)',
  ];
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
  GermanArticles = [
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
  ],
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
  specialChars = window[lessonLanguage + 'Chars'];
((forExamples = forExamples
  .join('%%')
  .split('<em> / </em>')
  .join('<em> - </em>')
  .split('%%')),
  (lessonNumber <= 81) & ('Portuguese' != lessonLanguage) &&
    (lessonTitle =
      lessonTitle.split('Vocabulary: ').join('') + ' (' + engExamples[0] + ')'),
  0 === lessonNumber && (lessonTitle = 'Vocabulary: Extra Practice'));
var quizDescription1 =
    'This quiz will allow you to practice the words you just learned in the easiest way! Click on the corresponding image of the word you see and hear.',
  quizDescription2 =
    'Listen carefully and click on the image corresponding to the word you hear. Train your ear to understand words without reading them.',
  quizDescription3 =
    'Type in the words corresponding to the images. No more guessing here, you have to know the word to get the right answer! Hints are available, but be careful, they cost valuable points...',
  quizDescription4 =
    'WARNING: This exercise is very difficult! Complete each question within the time given, no hints, no second chances. If you get a Fluency Award in this exercise, you are a real expert in this category!',
  numWords = engExamples.length;
(quizMultiArray.length > 0 &&
  ((quizMapArray = quizMultiArray.slice()), (quizMultiArray = [])),
  27 == lessonNumber && (numToRemove = []));
for (var num = 0; num < quizMapArray.length; num++)
  quizMapArray[num] > numWords && quizMapArray.splice(num);
for (num = 0; num < quizMultiArray.length; num++)
  quizMultiArray[num] > numWords && quizMultiArray.splice(num);
((quizMapArray = shuffle(quizMapArray)),
  quizMapArray.length > 30 &&
    0 !== lessonNumber &&
    quizMapArray.splice(0, quizMapArray.length - 30),
  (quizMultiArray = shuffle(quizMultiArray)));
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
  currentErrors,
  userInfo,
  timerTime,
  soundRepeated,
  quizCombinedArray = quizMapArray.concat(quizMultiArray);
function loadPresentation() {
  if (((buttonCreate = ''), 'normal' == lessonType))
    for (var e = 0; e < numWords; e++)
      buttonCreate =
        buttonCreate +
        '<input type="submit" value="' +
        engButtons[e] +
        '" class="ouinoButton" id="button' +
        e +
        '">';
  else if ('sentence' == lessonType) {
    buttonCreate =
      buttonCreate +
      '<div class="ouinoButton wordBtn" id="button0">' +
      engButtons[0].replace('<em>', '').replace('</em>', '') +
      '</div><div class="ouinoButton exampleBtn mar1" id="button1"></div>';
    for (var t = 2; t < numWords; t++)
      buttonCreate =
        t % 2 == 0
          ? buttonCreate +
            '<div class="ouinoButton wordBtn" id="button' +
            t +
            '">' +
            engButtons[t].replace('<em>', '').replace('</em>', '') +
            '</div>'
          : buttonCreate +
            '<div class="ouinoButton exampleBtn" id="button' +
            t +
            '"></div>';
  } else if ('sentenceTitle' == lessonType) {
    buttonCreate =
      buttonCreate +
      '<div class="ouinoButton topBtn" id="button0">' +
      engButtons[0].replace('<em>', '').replace('</em>', '') +
      '</div>';
    for (var i = 1; i < numWords; i++)
      buttonCreate =
        i % 2 != 0 || 0 == i
          ? buttonCreate +
            '<div class="ouinoButton wordBtn" id="button' +
            i +
            '">' +
            engButtons[i].replace('<em>', '').replace('</em>', '') +
            '</div>'
          : buttonCreate +
            '<div class="ouinoButton exampleBtn" id="button' +
            i +
            '"></div>';
  }
  ((fastSounds = []), (slowSounds = []));
  var n = 1,
    s = 1;
  if (0 !== lessonNumber)
    if (5 != lessonNumber)
      for (var r = 0; r < numWords; r++)
        '*' == forExamples[r].charAt(0)
          ? (fastSounds.push(oPath + 'sounds/femsound' + n + soundType),
            n++,
            slowSounds.push(oPath + 'sounds/femsound' + n + soundType),
            n++)
          : (fastSounds.push(oPath + 'sounds/sound' + s + soundType),
            s++,
            slowSounds.push(oPath + 'sounds/sound' + s + soundType),
            s++);
    else
      for (r = 0; r < numWords; r++)
        '*' == forExamples[r].charAt(0)
          ? (fastSounds.push(oPath + 'sounds/femsound' + n + soundType),
            slowSounds.push(oPath + 'sounds/femsound' + n + soundType),
            n++)
          : (fastSounds.push(oPath + 'sounds/sound' + s + soundType),
            slowSounds.push(oPath + 'sounds/sound' + s + soundType),
            s++);
  else
    for (r = 0; r < numWords; r++)
      fastSounds.push(
        oPath2 +
          nums1[r] +
          '/sounds/' +
          window['forSounds' + nums1[r]][nums2[r]] +
          soundType,
      );
}
function buttonClicked() {
  ((picControl = 'picFade'),
    (currentWordNum = $(this).attr('id').split('button').join('')),
    changeWord());
}
function resizeQuiz() {
  if (!focused || 'mobile' != currentDevice) {
    ((viewportHeight = $('body').height() - 45),
      $('body').hasClass('notch') && (viewportHeight -= 45),
      $('body').hasClass('android') && (viewportHeight -= 20),
      $('.menuBtnContainer').show(),
      $('.menuTitleContainer').hide());
    var e = (viewportWidth = $('html').innerWidth()) / viewportHeight;
    (viewportWidth >= 800
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
      viewportHeight < 655 || e <= 1
        ? $('#quizContent').css({ height: viewportHeight - 45 + 'px' })
        : $('#quizContent').css({ height: '630px' }));
    var t = $('#quizContent').width(),
      i = $('#quizContent').height();
    (e >= 0.85
      ? $('.chooseQuizIcon').css({ height: 0.4 * i - 75 + 'px', width: 'auto' })
      : $('.chooseQuizIcon').css({ width: 0.35 * t + 'px', height: 'auto' }),
      (viewportHeight = $('body').height() - 45),
      (spaceLeft = viewportHeight > 650 && e > 1 ? 460 : viewportHeight - 190),
      $('body').hasClass('notch') &&
        ($('#quizTxt1').show(), $('#quizTxt2').show()),
      $('body').hasClass('notch') && (spaceLeft -= 45),
      $('body').hasClass('android') && (spaceLeft -= 20),
      e <= 1
        ? (2 == currentQuiz
            ? ((spaceLeft += 60),
              $('.quizItems').css({
                '-webkit-transform': 'translateY(15px)',
                transform: 'translateY(15px)',
              }))
            : $('.quizItems').css({
                '-webkit-transform': 'translateY(0)',
                transform: 'translateY(0)',
              }),
          $('.quizItems').css({ height: spaceLeft / 3 - 50 + 'px' }),
          $('.quizItems').addClass('quizItemsPortrait'))
        : (2 == currentQuiz
            ? ((spaceLeft += 60),
              $('.quizItems').css({
                '-webkit-transform': 'translateY(15px)',
                transform: 'translateY(15px)',
              }))
            : $('.quizItems').css({
                '-webkit-transform': 'translateY(0)',
                transform: 'translateY(0)',
              }),
          $('.quizItems').css({ height: spaceLeft / 2 - 50 + 'px' }),
          $('.quizItems').removeClass('quizItemsPortrait')),
      viewportHeight <= 700
        ? $('#lightTimerDiv').css({ width: viewportHeight / 4 + 'px' })
        : $('#lightTimerDiv').css({ width: '190px' }),
      viewportHeight <= 400
        ? $('#quizDonePts').hide()
        : $('#quizDonePts').show(),
      viewportHeight <= 500
        ? $('#quizPreloadDescription').hide()
        : $('#quizPreloadDescription').show(),
      1 == currentQuiz &&
        (e > 1
          ? ($('#quizAllItemsB, #quizMultiImg').css({ width: '44%' }),
            viewportHeight > 700
              ? $('#quizAllItemsB, #quizMultiImg').css({
                  height: '460px',
                  '-webkit-transform': 'translateY(20px)',
                  transform: 'translateY(20px)',
                })
              : $('#quizAllItemsB, #quizMultiImg').css({
                  height: spaceLeft + 20 + 'px',
                  '-webkit-transform': 'translateY(0px)',
                  transform: 'translateY(0px)',
                }))
          : ($('#quizAllItemsB').css({
              width: '90%',
              '-webkit-transform': 'translateY(30px)',
              transform: 'translateY(30px)',
            }),
            $('#quizMultiImg').css({
              width: '90%',
              '-webkit-transform': 'translateY(15px)',
              transform: 'translateY(15px)',
            }),
            $('#quizAllItemsB, #quizMultiImg').css({
              height: spaceLeft / 2 - 5 + 'px',
            }))),
      2 == currentQuiz &&
        ((spaceLeft += 20),
        e > 1
          ? ($('#quizAllItemsB, #quizMultiImg').css({ width: '44%' }),
            viewportHeight > 700
              ? $('#quizAllItemsB, #quizMultiImg').css({
                  height: '500px',
                  '-webkit-transform': 'translateY(50px)',
                  transform: 'translateY(50px)',
                })
              : $('#quizAllItemsB, #quizMultiImg').css({
                  height: spaceLeft + 'px',
                  '-webkit-transform': 'translateY(25px)',
                  transform: 'translateY(25px)',
                }))
          : ($('#quizAllItemsB, #quizMultiImg').css({
              height: 0.48 * spaceLeft + 'px',
            }),
            $('#quizAllItemsB').css({
              width: '90%',
              '-webkit-transform': 'translateY(50px)',
              transform: 'translateY(50px)',
            }),
            $('#quizMultiImg').css({
              width: '90%',
              '-webkit-transform': 'translateY(30px)',
              transform: 'translateY(30px)',
            }))),
      3 == currentQuiz &&
        ((spaceLeft += 100),
        viewportHeight < 450 || viewportWidth < 400
          ? $('.boardTop').hide()
          : $('#writeError').is(':hidden') && $('.boardTop').show(),
        e > 1
          ? ($('#quizAllItemsC, #quizWriteImg').css({ width: '44.2%' }),
            viewportHeight > 620
              ? ($('#quizWriteImg').css({
                  height: '502px',
                  '-webkit-transform': 'translateY(50px)',
                  transform: 'translateY(50px)',
                }),
                $('#quizAllItemsC').css({
                  height: '490px',
                  '-webkit-transform': 'translateY(60px)',
                  transform: 'translateY(60px)',
                }),
                $('#writeAnswerBoard,#boardTable').css({ height: '388px' }))
              : ($('#quizWriteImg').css({
                  height: spaceLeft + 'px',
                  '-webkit-transform': 'translateY(15px)',
                  transform: 'translateY(15px)',
                }),
                $('#quizAllItemsC').css({
                  height: spaceLeft - 10 + 'px',
                  '-webkit-transform': 'translateY(25px)',
                  transform: 'translateY(25px)',
                }),
                $('#writeAnswerBoard,#boardTable').css({
                  height: spaceLeft - 112 + 'px',
                })))
          : ($('#quizWriteImg').css({ height: 0.365 * spaceLeft + 'px' }),
            $('#quizAllItemsC').css({ height: 0.58 * spaceLeft + 'px' }),
            $('#writeAnswerBoard, #boardTable').css({
              height: 0.58 * spaceLeft - 70 + 'px',
            }),
            $('#quizAllItemsC').css({
              width: '90%',
              '-webkit-transform': 'translate3d(0, 23px, 0)',
              transform: 'translate3d(0, 23px, 0)',
            }),
            $('#quizWriteImg').css({
              width: '90%',
              '-webkit-transform': 'translate3d(0, 76px, 0)',
              transform: 'translate3d(0, 76px, 0)',
            }))),
      4 == currentQuiz &&
        ((spaceLeft += 100),
        viewportHeight < 450 || viewportWidth < 400
          ? $('.boardTop').hide()
          : $('#writeError').is(':hidden') && $('.boardTop').show(),
        e > 1
          ? ($('#quizAllItemsC, #quizWriteImg').css({ width: '44.2%' }),
            viewportHeight > 650
              ? ($('#quizWriteImg').css({
                  height: '477px',
                  '-webkit-transform': 'translateY(84px)',
                  transform: 'translateY(84px)',
                }),
                $('#quizAllItemsC').css({
                  height: '510px',
                  '-webkit-transform': 'translateY(50px)',
                  transform: 'translateY(50px)',
                }),
                $('#writeAnswerBoard,#boardTable').css({ height: '408px' }),
                $('#quizTimer2').css({ bottom: spaceLeft + 10 + 'px' }))
              : ($('#quizWriteImg').css({
                  height: spaceLeft - 43 + 'px',
                  '-webkit-transform': 'translateY(59px)',
                  transform: 'translateY(59px)',
                }),
                $('#quizAllItemsC').css({
                  height: spaceLeft - 10 + 'px',
                  '-webkit-transform': 'translateY(25px)',
                  transform: 'translateY(25px)',
                }),
                $('#writeAnswerBoard,#boardTable').css({
                  height: spaceLeft - 112 + 'px',
                }),
                $('#quizTimer2').css({ bottom: spaceLeft + 10 + 'px' })),
            e < 1.07 && $('#quizTimer2').css({ bottom: '40px' }))
          : ($('#quizTimer2').css({ bottom: 0.365 * spaceLeft + 45 + 'px' }),
            $('#quizWriteImg').css({ height: 0.365 * spaceLeft + 'px' }),
            $('#quizAllItemsC').css({ height: 0.58 * spaceLeft + 'px' }),
            $('#writeAnswerBoard').css({
              height: 0.58 * spaceLeft - 70 + 'px',
            }),
            $('#boardTable').css({ height: 0.58 * spaceLeft - 120 + 'px' }),
            $('#quizAllItemsC').css({
              width: '90%',
              '-webkit-transform': 'translate3d(0, 23px, 0)',
              transform: 'translate3d(0, 23px, 0)',
            }),
            $('#quizWriteImg').css({
              width: '90%',
              '-webkit-transform': 'translate3d(0, 76px, 0)',
              transform: 'translate3d(0, 76px, 0)',
            }))),
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
      var t = $('.textWrap5').width(), i = $('#quizEng' + e).width(), n = 13;
      t > i && n > 0.3;
    )
      ((n -= 0.5),
        $('.textWrap5').css({ fontSize: n + 'px' }),
        $('#quizEng' + e).css({ fontSize: n + 'px' }),
        (t = $('.textWrap5').width()),
        (i = $('#quizEng' + e).width()));
  }
  for (e = 1; e <= 4; e++) {
    $('#quizItem' + e + 'B').css({ fontSize: '22px' });
    for (
      var s = $('#quizMultiImg').width() - 20,
        r = $('#quizItem' + e + 'B').width(),
        o = 22;
      r > s && o > 0.3;
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
    var e, t;
    ($('#startCover').css({ height: $('html').innerHeight() + 'px' }),
      (viewportHeight = $('body').height() - 45));
    var i = (viewportWidth = $('html').innerWidth()) / viewportHeight,
      n = viewportHeight - 40;
    ($('body').hasClass('notch') && (n -= 45),
      $('body').hasClass('android') && (n -= 20),
      viewportWidth < 600
        ? ($('.menuItem').css({ 'font-size': '15px' }),
          $('.menuItemDescription').css({ 'font-size': '11px' }))
        : ($('.menuItem').css({ 'font-size': '17px' }),
          $('.menuItemDescription').css({ 'font-size': '14px' })),
      viewportWidth >= 850 ? $('.menuLogo').show() : $('.menuLogo').hide(),
      i < 1 && $('html').width() != $('html').height()
        ? ($('.ouinoContent').addClass('portrait'),
          $('.ouinoButton').removeClass('moreWords'),
          $('#button1').css({ marginTop: '1px' }),
          $('.buttonContainer, .sideContainer').addClass('portrait2'),
          $('.ouinoContent').css({ height: n + 'px' }),
          i < 0.6
            ? ($('.sideContainer').css({ height: 0.55 * n + 'px' }),
              $('.shinyPicture').css({
                height: 0.55 * n - 150 + 'px',
                maxHeight: 'none',
              }),
              $('.buttonContainer').css({
                maxHeight: 0.45 * n - 30 + 'px',
                top: '25px',
              }))
            : ($('.sideContainer').css({ height: 0.65 * n + 'px' }),
              $('.shinyPicture').css({
                height: 0.65 * n - 150 + 'px',
                maxHeight: 'none',
              }),
              $('.buttonContainer').css({
                maxHeight: 0.35 * n - 30 + 'px',
                top: '25px',
              })))
        : ($('.ouinoContent').removeClass('portrait'),
          $('.buttonContainer, .sideContainer').removeClass('portrait2'),
          $('.ouinoContent').css({ height: n + 'px' }),
          $('.shinyPicture').css({
            height: n - 128 + 'px',
            maxHeight: '446px',
          }),
          (e = $('.ouinoContent').height()),
          $('.buttonContainer').css({ maxHeight: e + 'px' }),
          (e = $('.ouinoContent').height()),
          (t = $('.buttonContainer').height()),
          viewportHeight <= 704
            ? ($('.ouinoButton').removeClass('moreWords'),
              $('#button1').css({ marginTop: '1px' }),
              t + 50 < e
                ? $('.buttonContainer').css({ top: (e - t) / 2 + 'px' })
                : $('.buttonContainer').css({ top: '0px' }))
            : numWords >= 15
              ? ($('.ouinoButton').addClass('moreWords'),
                'sentenceTitle' != lessonType &&
                  $('#button1').css({ marginTop: '1.4%' }))
              : ($('.ouinoButton').removeClass('moreWords'),
                $('#button1').css({ marginTop: '1px' })),
          (e = $('.ouinoContent').height()),
          (t = $('.buttonContainer').height()) < e
            ? $('.buttonContainer').css({ top: (e - t) / 2 + 'px' })
            : $('.ouinoButton').hasClass('moreWords')
              ? $('.buttonContainer').css({ top: '-18px' })
              : $('.buttonContainer').css({ top: '0px' }),
          viewportHeight > 704 &&
            numWords >= 15 &&
            $('.buttonContainer').css({ maxHeight: e + 38 + 'px' })),
      $('#endWrap').is(':visible') &&
        (viewportHeight >= 700
          ? $('#learningTip').show()
          : $('#learningTip').hide()),
      resizeButtonText(),
      resizeText(),
      resizeTitle(),
      'sentenceTitle' == lessonType && $('#button0').css({ width: '98%' }));
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
        i = $('.smallLogo').width(),
        n = viewportWidth - (i + t + e);
      n < 60 && $('.menuTitleContainer').text().length > 6;
    ) {
      var s = $('.menuTitleContainer').text().slice(0, -4);
      ((s = (s = s.concat('...')).split(' ...').join('...')),
        $('.menuTitleContainer').html(s),
        (t = $('.menuTitleContainer').width()),
        (n = viewportWidth - (i + t + e)));
    }
}
var knowledgeStars,
  restartedLesson,
  quizScores,
  pauseTwo,
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
  audioSprite,
  fastSounds,
  slowSounds,
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
  currentSprite,
  onTimeUpdate,
  quizFillNum,
  submitted,
  quizNumQues,
  fastOrSlow,
  fastOverwrite = !1,
  currentWordNum = 0,
  picToggle = 1,
  soundPlaying = !1,
  soundLessonEvent = !1,
  soundQuizEvent = !1,
  soundSlideEvent = !1,
  checkAccent = !1,
  quizPtsCount = 65,
  disableTimer = !1,
  fillAnswerOn = !1,
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
    '<div id="loadLogo" style="display: none; opacity: 0.9; border-radius: 10px; cursor: default; padding: 40px; background: black; z-index: 2000; position: fixed; width: 100px; height: 30px; margin: auto auto; left:0; right: 0; top: 0; bottom:0; font-size: 22px; font-weight: bold; color: white;">LOADING...</div><section id="slideCont"><img id="slideImg" src=""/><div id="slideText"></div><div class="slideBtn1">Okay</div><div class="slideBtn2">Don\'t show me tips</div></section><div id="fontPreload1"></div><div id="fontPreload2"></div><div id="fontPreload3"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel"></b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><span class="menuTitleContainer alignVerticalItem"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><img id="keyboardBtn" src="../../common/keyboard2.svg" class="smallIcon" style="display:none;"/><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I\'m confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoVocab.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio>',
  lessonAppend =
    '<div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><main class="ouinoContent selectOff"><aside class="sideContainer"><section class="wordSentence"><div class="wordSentenceIn alignVerticalItem"><div class="textWrap3"><h6 class="disSentence">-Text Disabled-</h6></div><div class="textWrap"><h6 class="forSentence"></h6></div><br><div class="textWrap2"><h6 class="engSentence"></h6></div></div></section><figure class="shinyPicture"><div id="flashCard"></div><div id="flashCard2"></div><div class="engToggle"></div><div class="insight"></div><div id="sideNote"></div><figure class="arrowControl"><div class="leftArrow"></div><div class="rightArrow"></div><div id="middleSwipe"></div></figure><figure class="mainPic2" alt="mainImage"></figure><figure class="mainPic1" alt="mainImage"></figure><img class="whiteBack" src="../../common/white.jpg" alt="mainImage"></figure></aside><aside class="buttonContainer" style="-webkit-overflow-scrolling: touch;"></aside><div class="buttonWrap"></div></main>',
  quizAppend =
    '<div id="wrongAnswerPic"><div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"><div id="goodAnswerIn"></div></div><div id="goodAnswerPic2"><div id="goodAnswerIn2"></div></div><img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><img id="quizGoBack" src="../../common/menuIcon1.svg"><table id="quizDone" ><tr><th colspan="2" id="quizDoneTitle"></th></tr><tr><td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr><td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp;<p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr><td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div><span class="addQuizFlash"><img src="../../flash/images/cards.svg"/> Add Errors to Flash Cards</span></td></tr></table><div id="quizScoreBack"><div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"><div id="quizTimerPointer"><img id="quizTimerImage" src="../../common/timerPointer.svg"></div><div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizTimer2"><div id="quizTimerPointer2"><img id="quizTimerImage2" src="../../common/timerPointer2.svg"></div><div id="quizTimerGood2"></div><div id="quizTimerBar"></div><div id="quizTimerBad2"></div></div><div id="quizItself"><div id="quizSentenceContainer"><div class="quizSentenceWrap"><div class="textWrap4"><h1 id="quizSentence"></h1></div></div></div><div class="textWrap5"></div><div id="quizAllItems"><div id="quizItem1" class="quizItems"><p id="quizEng1" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem2" class="quizItems"><p id="quizEng2" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem3" class="quizItems"><p id="quizEng3" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem4" class="quizItems"><p id="quizEng4" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem5" class="quizItems"><p id="quizEng5" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem6" class="quizItems"><p id="quizEng6" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div></div><div id="quizMultiImg"><p id="englishWrite2" class="quizEng"></p></div><table id="quizAllItemsB"><tr><th id="quizMulti1" class="quizItemsB"><span id="quizItem1B" class="multiBtnFont"></span></th></tr><tr><td id="quizMulti2" class="quizItemsB"><span id="quizItem2B" class="multiBtnFont"></span></td></tr><tr><td id="quizMulti3" class="quizItemsB"><span id="quizItem3B" class="multiBtnFont"></span></td></tr><tr><td id="quizMulti4" class="quizItemsB"><span id="quizItem4B" class="multiBtnFont"></span></td></tr></table><div id="quizAllItemsC"><p id="englishWrite"></p><form id="answerForm" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" novalidate></form><div id="writeAnswerBoard"><table id="boardTable" style="margin-top: 10px;"><tr id="specialChars"><td id="char1" class="boardChar"></td><td id="char2" class="boardChar"></td><td id="char3" class="boardChar"></td><td id="char4" class="boardChar"></td><td id="char5" class="boardChar"></td><td id="char6" class="boardChar"></td></tr><tr><td colspan="6" id="writeError"></td></tr><tr><td colspan="6" id="boardMain"><span id="writtenAnswer"></span></td></tr><tr><td colspan="6" id="writeError2">CONTINUE</td></tr><tr><td colspan="2" id="hint1" class="boardBottom"></td><td colspan="2" id="hint2" class="boardBottom"></td><td colspan="2" id="hint3" class="boardBottom"></td></tr></table></div></div><div id="quizWriteImg"><img id="wrongLogo1" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo2" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo3" class="wrongLogo" src="../../common/strike.svg"></div></div><table id="quizPreload"><tr><th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th></tr><tr><td id="quizPreloadMedal"></td></tr><tr><td id="quizPreloadStart">START NOW</td></tr></table><div id="quizStart"><div id="quizStartImg"><div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div><table id="quizMenu"><tr><th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th></tr><tr><td id="quizBtn1" class="quizType"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">BEGINNER\'S LUCK</h2><img class="chooseQuizIcon" src="../../common/quizvocab1.svg"/><h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">BE ALL EARS</h2><img class="chooseQuizIcon" src="../../common/quizvocab2.svg"/><h2 class="chooseQuizText2">Difficulty: Average</h2></td></tr><tr><td id="quizBtn3" class="quizType"><div id="sMedal3" class="smallMedal"></div><h2 class="chooseQuizText">WRITE-A-WORD</h2><img class="chooseQuizIcon" src="../../common/quizvocab3.svg"/><h2 class="chooseQuizText2">Difficulty: Hard</h2></td><td id="quizBtn4" class="quizType"><div id="sMedal4" class="smallMedal"></div><h2 class="chooseQuizText">FLUENCY SPRINT</h2><img class="chooseQuizIcon" src="../../common/quizvocab4.svg"/><h2 class="chooseQuizText2">Difficulty: Fluent</h2></td></tr></table></main>';
if (0 !== lessonNumber) {
  var imageArray = [oPath + 'images/pic1.jpg'];
  if ('normal' === lessonType)
    for (num = 2; num < numWords + 1; num++)
      imageArray.push(oPath + 'images/pic' + num + '.jpg');
  else if ('sentence' === lessonType) {
    imageArray.push(oPath + 'images/pic1.jpg');
    for (num = 2; num < 0.5 * numWords + 1; num++)
      (imageArray.push(oPath + 'images/pic' + num + '.jpg'),
        imageArray.push(oPath + 'images/pic' + num + '.jpg'));
  } else
    for (num = 2; num < 0.5 * numWords + 1; num++)
      (imageArray.push(oPath + 'images/pic' + num + '.jpg'),
        imageArray.push(oPath + 'images/pic' + num + '.jpg'));
  if (quizFillArray.length >= 1)
    for (num = 1; num <= quizFillArray.length; num++)
      imageArray.push(oPath + 'images/quiz' + num + '.jpg');
} else
  for (imageArray = [], num = 0; num <= numWords + 1; num++)
    'normal' === window['lessonType' + nums1[num]]
      ? imageArray.push(
          oPath2 + nums1[num] + '/images/pic' + (nums2[num] + 1) + '.jpg',
        )
      : 7 === nums1[num]
        ? imageArray.push(
            oPath2 +
              nums1[num] +
              '/images/pic' +
              (Math.floor(0.5 * (nums2[num] + 1)) + 1) +
              'b.jpg',
          )
        : 'sentenceTitle' === window['lessonType' + nums1[num]]
          ? imageArray.push(
              oPath2 +
                nums1[num] +
                '/images/pic' +
                (Math.floor(0.5 * (nums2[num] + 1)) + 1) +
                '.jpg',
            )
          : 'sentence' === window['lessonType' + nums1[num]] &&
            imageArray.push(
              oPath2 +
                nums1[num] +
                '/images/pic' +
                Math.ceil(0.5 * (nums2[num] + 1)) +
                '.jpg',
            );
function loadFastSound() {
  ((fastOrSlow = 'fast'),
    clearTimeout(wordTimer),
    $('#mainSound').trigger('pause'),
    $('#mainSound').attr('src', fastSounds[currentWordNum]),
    document.getElementById('mainSound').load(),
    document.getElementById('mainSound').addEventListener('canplay', playSound),
    (soundPlaying = !0));
}
function loadSlowSound() {
  ((fastOrSlow = 'slow'),
    clearTimeout(wordTimer),
    $('#mainSound').trigger('pause'),
    $('#mainSound').attr('src', slowSounds[currentWordNum]),
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
  if (restartedLesson)
    return (
      $('.mainPic2, .mainPic1').css({
        'background-image': 'url(' + imageArray[0] + ')',
      }),
      void (restartedLesson = !1)
    );
  if ('normal' != lessonType) {
    var e;
    if (1 == picToggle)
      e = (e = $('.mainPic1').css('background-image').split('images/'))[1]
        .split(')')
        .join('');
    else
      e = (e = $('.mainPic2').css('background-image').split('images/'))[1]
        .split(')')
        .join('');
    if (e == imageArray[currentWordNum].split(oPath + 'images/').join(''))
      return;
  }
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
function prevImage() {
  'disable' != arrowClicks &&
    ((picControl = 'picPrev'),
    0 != currentWordNum && (currentWordNum--, changeWord()));
}
function changeWord() {
  (3 != lessonNumber &&
    (localStorage.getItem(storeInfo + 'insight') ||
      (currentWordNum > 2 &&
        0 == $('.insightLabel').length &&
        ($('.shinyPicture').append('<div class="insightLabel"></div>'),
        $('.insight').addClass('fullOpacity')))),
    saveLeftOff(forExamples.length - 1),
    $('#pauseBtn').attr('src', '../../common/pause.svg'),
    (soundRepeated = 0),
    23 == lessonNumber &&
      (fastOverwrite = currentWordNum >= 1 && currentWordNum <= 4),
    'f' == $('#selectPlayback').val().charAt(0)
      ? 'true' == lessonInit
        ? ((fastOrSlow = 'fast'),
          $('.timerMeter > .timerSpan').stop(),
          $('.timerMeter > .timerSpan').css({
            width: $('.timerMeter').width(),
          }),
          $('#mainSound').trigger('pause'),
          '*' == forExamples[0].charAt(0)
            ? $('#mainSound').attr(
                'src',
                oPath + 'sounds/femsound1' + soundType,
              )
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
          $('.timerMeter > .timerSpan').css({
            width: $('.timerMeter').width(),
          }),
          $('#mainSound').trigger('pause'),
          '*' == forExamples[0].charAt(0)
            ? $('#mainSound').attr(
                'src',
                oPath + 'sounds/femsound2' + soundType,
              )
            : $('#mainSound').attr('src', oPath + 'sounds/sound2' + soundType),
          setTimeout(function () {
            $('#mainSound').trigger('play');
          }, 1e3),
          (soundPlaying = !0),
          toggleMusic(),
          (lessonInit = 'false'))
        : loadSlowSound(),
    0 == currentWordNum
      ? ($('.leftArrow').hide(), $('.rightArrow').show())
      : currentWordNum == numWords - 1
        ? ($('.leftArrow').show(), $('.rightArrow').hide())
        : ($('.leftArrow').show(), $('.rightArrow').show()),
    swapImages(),
    $('.ouinoButton').removeClass('buttonOn'),
    $('.ouinoButton').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    }),
    $('#button' + currentWordNum).addClass('buttonOn'),
    $('#button' + currentWordNum).css({
      background: 'linear-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
    }));
  var e = 0.5 * numWords,
    t = parseInt(currentWordNum);
  0 != $('#button' + (t + 1)).length && t > e
    ? $('#button' + (t + 1)).scrollintoview()
    : 0 != t && t < e
      ? $('#button' + (t - 1)).scrollintoview()
      : $('#button' + t).scrollintoview();
  var n = forExamples[currentWordNum];
  if (
    ('*' == n.charAt(0)
      ? ((n = n.split('*').join('')),
        $('.forSentence').css({ color: '#CC0000' }))
      : '/' == n.charAt(0)
        ? ((n = n.split('/').join('')),
          $('.forSentence').css({ color: '#333' }))
        : $('.forSentence').css({ color: '#0360D1' }),
    '%' == n.charAt(0))
  ) {
    var s = (n = n.split('%'))[1];
    ((n = n[2]),
      $('#sideNote').html(
        '<strong>IMPORTANT NOTE</strong><br><span>' +
          s +
          "</span><img src='../../search/common/arrBlackDown.svg'>",
      ),
      irregSpan &&
        ($('#sideNote span').show(),
        $('#sideNote img').attr('src', '../../search/common/arrBlackUp.svg')),
      setTimeout(function () {
        $('#sideNote').fadeIn();
      }, 100));
  } else $('#sideNote').hide();
  if (
    ($('.engSentence').html(engExamples[currentWordNum]),
    $('.forSentence').html(n),
    cardRaw.length > 0)
  ) {
    var r = lessonNumber + '|' + (parseInt(currentWordNum) + 1) + cardCate,
      o = !1;
    for (i = 0; i < cardRaw.length; i++) {
      var a = cardRaw[i].split('|');
      (a = a[0] + '|' + a[1] + '|' + a[2]) == r && (o = !0);
    }
    o
      ? ($('#flashCard').hide(), $('#flashCard2').show())
      : ($('#flashCard2').hide(), $('#flashCard').show());
  } else ($('#flashCard2').hide(), $('#flashCard').show());
  resizeText();
}
function resizeButtonText() {
  for (var e = 0; e < numWords; e++) {
    ($('.buttonWrap').css({ fontSize: '14px' }),
      $('#button' + e).css({ fontSize: '14px' }),
      $('.buttonWrap').text(engButtons[e]));
    for (
      var t = $('.buttonWrap').width(),
        i = $('#button' + e).width(),
        n = $('#button' + e).val(),
        s = 14;
      t > i && s > 0.3 && 'Example' != n;
    )
      ((s -= 0.5),
        $('.buttonWrap').css({ fontSize: s + 'px' }),
        $('#button' + e).css({ fontSize: s + 'px' }),
        (t = $('.buttonWrap').width()),
        (i = $('#button' + e).width()));
  }
}
function resizeText() {
  ($('.forSentence').css({ fontSize: '27px' }),
    $('.engSentence').hasClass('engSentenceOnly')
      ? $('.engSentence').css({ fontSize: '27px' })
      : $('.engSentence').css({ fontSize: '20px' }),
    $('.forSentence, .engSentence, .disSentence').css({
      'max-width': '3000px',
      'white-space': 'nowrap',
      'line-height': 'normal',
      margin: '0',
    }));
  for (
    var e = $('.textWrap').width(),
      t = 0.92 * $('.wordSentence').width(),
      i = $('.textWrap2').width(),
      n = 27;
    e > t;
    n--
  ) {
    e = $('.textWrap').width();
    var s = n;
    if (s < 25) {
      ((s = 27),
        $('.forSentence').text().length > 65
          ? (s = 24)
          : $('.forSentence').text().length > 50 && (s = 26),
        $('.forSentence').css({
          'font-size': s + 'px',
          'max-width': t - 20,
          'white-space': 'normal',
          'line-height': s + 1 + 'px',
          margin: '0 0 8px 0',
        }));
      break;
    }
    $('.forSentence').css({ fontSize: s + 'px' });
  }
  if ($('.engSentence').hasClass('engSentenceOnly'))
    for (var r = 27; i > t; r--) {
      if (((i = $('.textWrap2').width()), (o = r) < 20)) {
        ((o = 24),
          $('.engSentence').css({
            'font-size': o + 'px',
            'max-width': t - 20,
            'white-space': 'normal',
            'line-height': o + 1 + 'px',
          }));
        break;
      }
      $('.engSentence').css({ fontSize: o + 'px' });
    }
  else
    for (r = 20; i > t; r--) {
      var o;
      if (((i = $('.textWrap2').width()), (o = r) < 18)) {
        ((o = 20),
          $('.engSentence').css({
            'font-size': o + 'px',
            'max-width': t - 20,
            'white-space': 'normal',
            'line-height': o + 1 + 'px',
          }));
        break;
      }
      $('.engSentence').css({ fontSize: o + 'px' });
    }
}
function resizeQuizText() {
  var e, t, i;
  ($('#quizSentence').css({ fontSize: '30px' }),
    (e = $('.textWrap4').width()),
    (t = $('.quizSentenceWrap').width() - 15));
  for (var n = 30; e > t; n--)
    ((e = $('.textWrap4').width()),
      (i = n),
      $('#quizSentence').css({ fontSize: i + 'px' }));
  ($('#boardMain').css({ fontSize: '24px' }),
    (e = $('#writtenAnswer').width()),
    (t = $('#writeAnswerField').width() - 30));
  for (n = 24; e > t && n > 1; n--)
    ((e = $('#writtenAnswer').width()),
      (i = n),
      $('#boardMain').css({ fontSize: i + 'px' }));
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
      for (e.preventDefault(), i = 0; i < errors.length; i++) {
        var t,
          n = lessonNumber + '|' + parseInt(errors[i]) + cardCate;
        if (0 == lessonNumber) {
          var s = imageArray[parseInt(errors[i]) - 1].split('/'),
            r = s[s.length - 1].split('pic').join('').split('.jpg').join('');
          r = parseInt(r);
          var o = parseInt(s[s.length - 3]);
          ('sentence' == window['lessonType' + o]
            ? (r = 2 * r - 1)
            : 'sentenceTitle' == window['lessonType' + o] && (r = 2 * r - 2),
            (n = o + '|' + r + cardCate));
        }
        var a = !1;
        for (t = 0; t < cardRaw.length; t++) {
          var l = cardRaw[t].split('|');
          (l = l[0] + '|' + l[1] + '|' + l[2]) == n && (a = !0);
        }
        -1 == ['23|2|c', '23|3|c', '23|4|c', '23|5|c'].indexOf(n) &&
          (a || cardRaw.push(n));
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
      var e = lessonNumber + '|' + (parseInt(currentWordNum) + 1) + cardCate;
      (-1 == ['23|2|c', '23|3|c', '23|4|c', '23|5|c'].indexOf(e) &&
        cardRaw.push(e),
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
      var e,
        t = lessonNumber + '|' + (parseInt(currentWordNum) + 1) + cardCate,
        i = [];
      for (e = 0; e < cardRaw.length; e++) {
        var n = cardRaw[e].split('|');
        (n = n[0] + '|' + n[1] + '|' + n[2]) != t && i.push(cardRaw[e]);
      }
      ((cardRaw = i.slice(0)),
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
    localStorage.getItem(storeInfo + 'externalKeyboard') &&
      ($('#keyboardBtn').attr('src', '../../common/keyboard.svg'),
      (externalKeyboard = !0)),
    0 == errorMode
      ? ($('.addQuizFlash').removeClass('disableFlash'),
        $('.addQuizFlash').show())
      : ($('.addQuizFlash').addClass('disableFlash'),
        $('.addQuizFlash').hide()),
    $('#dictBtn').hide(),
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
    (pastQuizScoreAll =
      null != quizScores ? quizScores[lessonNumber - 1] : '0|0|0|0'),
    0 === lessonNumber &&
      ((pastQuizScoreAll = '0|0|0|0'),
      $(
        '.smallMedal, #quizBannerItem2, #quizBannerItem3, #quizPreload p:nth-child(3)',
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
    7 == lessonNumber &&
      'vocab' == currentSecShort &&
      (imageArray = imageArray
        .join('%%')
        .split('b.jpg')
        .join('.jpg')
        .split('.jpg')
        .join('b.jpg')
        .split('%%')),
    (-1 == forExamples[0].indexOf('<em> - </em>') &&
      -1 == forExamples[1].indexOf('<em> - </em>')) ||
      (fastSounds = fastSounds
        .join('%%')
        .split('sounds/soundB')
        .join('sounds/sound')
        .split('sounds/sound')
        .join('sounds/soundB')
        .split('%%')),
    (fillAnswerOn = !1),
    $('#quizSentence').removeClass('yellowText'),
    $('#goodAnswer').animate({ opacity: '0' }),
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
      '.menuTitleContainer, #pauseBtn, #optionBtn, #optionBtn, #quizPreload, #quizGoBack, #quizStart, #quizItself, #quizTimer, #quizTimer2, #quizTimerPointer, #quizDone',
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
    loadButtonsQuiz());
}
function loadQuiz1() {
  ($('#keyboardBtn').hide(),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong2.svg)',
    }),
    $('#quizTimerImage').attr('src', '../../common/timerPointer.svg'),
    (disableTimer = !0),
    $('#quizSentenceContainer').show(),
    $('#quizAllItemsC, #quizWriteImg').hide(),
    $('#quizMenu').hide(),
    (timerTime = 6e3),
    (quizNumQues = quizCombinedArray.length + quizFillArray.length),
    1 == errorMode && (quizNumQues = errors.length),
    $('#numberOfQues').text(quizNumQues),
    $('.quizPreloadTitle').text(quizTitle1),
    $('#quizPreloadDescription').text(quizDescription1),
    $('#quizStartImg, #quizPreloadMedal').css({
      'background-image': 'url(../../common/quiz' + currentSecShort + '1.svg)',
    }),
    (currentQuiz = 1),
    (quizFillNum = 1),
    preLoadQuiz());
}
function loadQuiz2() {
  ($('#keyboardBtn').hide(),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong2.svg)',
    }),
    $('#quizTimerImage').attr('src', '../../common/timerPointer.svg'),
    (disableTimer = !0),
    $('#quizSentenceContainer').hide(),
    $('#quizAllItemsC, #quizWriteImg').hide(),
    $('#quizMenu').hide(),
    (timerTime = 6e3),
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
  ($('#keyboardBtn').show(),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong3.svg)',
    }),
    findAccents(),
    $('#quizSentenceContainer').hide(),
    $('#quizAllItems, #quizAllItemsB, #quizMultiImg').hide(),
    $('#quizAllItemsC, #quizWriteImg').show(),
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
function loadQuiz4() {
  ($('#keyboardBtn').show(),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong4.svg)',
    }),
    findAccents(),
    $('#quizTimerImage2').attr('src', '../../common/timerPointer2.svg'),
    $(
      '#quizAllItems, #quizAllItemsB, #quizMultiImg, .boardBottom, #quizSentenceContainer',
    ).hide(),
    $('#quizAllItemsC, #quizWriteImg, #specialChars').show(),
    (disableTimer = !0),
    $('#quizMenu').hide(),
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
    $('#quizPreload, #quizGoBack').show(),
    $('#quizBanner').show());
}
function startQuiz() {
  ($('#backBtn, #menuMain2').addClass('darker'),
    (quizCombinedArray = shuffle(quizCombinedArray)));
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
    var s = new Date(),
      r = [
        (s = s.getDate() + s.format('mmmm') + s.getFullYear()),
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
          3 != currentQuiz && $('#quizTimerPointer').show(),
          currentQuiz <= 2 && $('#quizTimer').show(),
          resizeButtonQuizText(),
          resizeQuizText(),
          firstLoad());
      });
    }, 1e3));
}
function firstLoad() {
  ((1 != currentQuiz && 2 != currentQuiz) ||
    (0 != quizMapArray.length
      ? ($('#quizAllItems').show(), $('#quizAllItemsB, #quizMultiImg').hide())
      : ($('#quizAllItems').hide(), $('#quizAllItemsB, #quizMultiImg').show())),
    $('#quizTimer, #quizTimer2, #quizTimerPointer, #quizItself').css({
      opacity: '0',
    }),
    playSprite('blank'),
    loadQuestion(),
    setTimeout(function () {
      ($('#quizTimer, #quizTimer2, #quizItself').animate({ opacity: '1' }),
        (1 != currentQuiz && 2 != currentQuiz) ||
          ((disableTimer = !1),
          setTimeout(function () {
            loadQuizSound();
          }, 500)));
    }, 500));
}
function loadQuestion() {
  ($('#quizMulti1').is(':visible') &&
    $('.quizItemsB').removeClass('fullyDisable'),
    (madeError = !1),
    setTimeout(function () {
      ((maxScore = 65),
        (quizPtsCount = 65),
        $('#quizScoreBack').css({
          'background-image': 'url(../../common/scoreBack4.svg)',
        }),
        $('#goodAnswerIn').css({
          'background-image': 'url(../../common/score4.svg)',
        }),
        $('#quizScoreImg').attr('src', '../../common/score4.svg'));
    }, 2e3),
    setTimeout(function () {
      $('#quizTimerPointer').css({ opacity: '0' });
    }, 200),
    $('#questionNum').text(currQuizNum),
    (quizQuesNum = quizCombinedArray[currQuizNum - 1]),
    1 == errorMode && (quizQuesNum = errors[currQuizNum - 1]));
  var e = (quizNumArray =
    'normal' == lessonType
      ? (quizNumArray = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
          38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        ]).slice(0, numWords)
      : 'sentence' == lessonType
        ? (quizNumArray = [
            1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29,
          ]).slice(0, 0.5 * numWords)
        : (quizNumArray = [
            2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
          ]).slice(0, 0.5 * numWords)).indexOf(quizQuesNum);
  ~e && quizNumArray.splice(e, 1);
  for (var t = 0; t < numToRemove.length; t++) {
    var i = quizNumArray.indexOf(numToRemove[t]);
    ~i && quizNumArray.splice(i, 1);
  }
  (setTimeout(function () {
    (resizeButtonQuizText(), resizeQuizText());
  }, 1),
    currentQuiz >= 3
      ? writeActions()
      : currQuizNum <= quizMapArray.length
        ? ($('#quizAllItems').is(':hidden') &&
            ($('#quizAllItems').show(),
            $('#quizAllItemsB, #quizMultiImg').hide()),
          (timerWait = 100),
          mapActions())
        : currQuizNum > quizMapArray.length &&
            currQuizNum <= quizCombinedArray.length
          ? ($('#quizAllItems').is(':visible') &&
              ($('#quizAllItems').hide(),
              $('#quizAllItemsB, #quizMultiImg').show()),
            (timerWait = 100),
            multiActions())
          : ($('#quizAllItems').is(':visible') &&
              ($('#quizAllItems').hide(),
              $('#quizAllItemsB, #quizMultiImg').show()),
            (timerWait = 1e3),
            fillActions()));
}
function mapActions() {
  $('#englishWrite2').is(':visible') && $('#englishWrite2').hide();
  var e = shuffle(quizNumArray);
  ((e = e.slice(0, 5)).push(quizQuesNum), (e = shuffle(e)));
  var t = forExamples[quizQuesNum - 1];
  (('*' != t.charAt(0) && '/' != t.charAt(0)) || (t = t.substring(1)),
    '%' == t.charAt(0) && (t = (t = t.split('%'))[2]),
    (t = (t = t.split('<em> - </em>'))[0]
      .split('<strong>')
      .join('')
      .split('</strong>')
      .join('')),
    $('#quizSentence').html(t),
    $('#quizItem1').val(e[0]),
    $('#quizItem2').val(e[1]),
    $('#quizItem3').val(e[2]),
    $('#quizItem4').val(e[3]),
    $('#quizItem5').val(e[4]),
    $('#quizItem6').val(e[5]),
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
    }),
    $('#quizEng1').html(engExamples[e[0] - 1]),
    $('#quizEng2').html(engExamples[e[1] - 1]),
    $('#quizEng3').html(engExamples[e[2] - 1]),
    $('#quizEng4').html(engExamples[e[3] - 1]),
    $('#quizEng5').html(engExamples[e[4] - 1]),
    $('#quizEng6').html(engExamples[e[5] - 1]),
    27 == lessonNumber &&
      ($('#quizItem6').css({
        'background-image': 'url(' + oPath + 'images/pic6.jpg',
      }),
      $('#quizEng6').html('Dawn')));
}
function multiActions() {
  $('#englishWrite2').is(':visible') && $('#englishWrite2').hide();
  var e = shuffle(quizNumArray);
  ((e = e.slice(0, 3)).push(quizQuesNum), (e = shuffle(e)));
  var t = forExamples[quizQuesNum - 1];
  (('*' != t.charAt(0) && '/' != t.charAt(0)) || (t = t.substring(1)),
    '%' == t.charAt(0) && (t = (t = t.split('%'))[2]),
    (t = (t = t.split('<em> - </em>'))[0]
      .split('<strong>')
      .join('')
      .split('</strong>')
      .join('')),
    $('#quizSentence').html(t),
    $('#quizMulti1').val(e[0]),
    $('#quizMulti2').val(e[1]),
    $('#quizMulti3').val(e[2]),
    $('#quizMulti4').val(e[3]),
    $('#quizItem1B').html(engExamples[e[0] - 1]),
    $('#quizItem2B').html(engExamples[e[1] - 1]),
    $('#quizItem3B').html(engExamples[e[2] - 1]),
    $('#quizItem4B').html(engExamples[e[3] - 1]),
    $('#quizMultiImg').css({
      'background-image': 'url(' + imageArray[quizQuesNum - 1] + ')',
    }));
}
function fillActions() {
  ((fillAnswerOn = !1),
    $('#englishWrite2').is(':hidden') && $('#englishWrite2').show());
  var e = quizNumArray.indexOf(quizFillArray[quizFillNum - 1]);
  ~e && quizNumArray.splice(e, 1);
  var t = shuffle(quizNumArray);
  ((t = t.slice(0, 3)),
    (quizQuesNum = quizFillArray[quizFillNum - 1]),
    t.push(quizQuesNum),
    (t = shuffle(t)),
    $('#quizSentence').html(
      fillQuestions[quizFillNum - 1]
        .split('_')
        .join("<span class='arial'>_</span>"),
    ),
    $('#englishWrite2').html(fillAnswersEng[quizFillNum - 1]),
    $('#quizMulti1').val(t[0]),
    $('#quizMulti2').val(t[1]),
    $('#quizMulti3').val(t[2]),
    $('#quizMulti4').val(t[3]),
    $('#quizItem1B').html(quizExamples[t[0] - 1]),
    $('#quizItem2B').html(quizExamples[t[1] - 1]),
    $('#quizItem3B').html(quizExamples[t[2] - 1]),
    $('#quizItem4B').html(quizExamples[t[3] - 1]),
    $('#quizMultiImg').css({
      'background-image':
        'url(' + oPath + 'images/quiz' + quizFillNum + '.jpg)',
    }));
}
function writeActions() {
  (4 == currentQuiz && quizTimerAnimate2(),
    (submitted = !1),
    $('#specialChars').show(),
    3 == currentQuiz && $('.boardBottom').show(),
    $('#boardMain').removeClass('topAlign'),
    viewportHeight < 450 || viewportWidth < 400
      ? $('.boardTop').hide()
      : $('.boardTop').show(),
    $('#writeError, #writeError2').hide(),
    $('#writeAnswerField').val(''),
    $('.wrongLogo').hide(),
    $('#hint1, #hint2, #hint3').css({ visibility: 'visible' }),
    (foundArticle = ''));
  var e = forExamples[quizQuesNum - 1]
    .split('<span>')
    .join('')
    .split('</span>')
    .join('');
  (('*' != e.charAt(0) && '/' != e.charAt(0)) || (e = e.substring(1)),
    '%' == e.charAt(0) && (e = (e = e.split('%'))[2]),
    (e = (e = e.split('<em> - </em>'))[0]
      .split('<strong>')
      .join('')
      .split('</strong>')
      .join('')),
    (writtenString = e));
  for (var t = 0; t < articleArray.length; t++)
    0 == writtenString.indexOf(articleArray[t]) &&
      (foundArticle = articleArray[t]);
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
      .join('')),
    (allLetters = quizGoodPunct.split(' ').join('').split('')),
    (timerTime = 8e3 + 800 * allLetters.length));
  for (t = 0; t < allChars.length; t++)
    -1 != quizGoodPunct.indexOf(allChars[t]) && (timerTime += 3e3);
  letterArray = [];
  for (t = 0; t < allLetters.length; t++) letterArray.push(t);
  ((letterArray = shuffle(letterArray)), (letterArrayNum = 0));
  var i = wArr.length;
  quizDisplayAnswer = '';
  var n = 0,
    s = 0;
  for (t = 0; t < i; t++)
    ' ' == wArr[t]
      ? ((quizDisplayAnswer += '<span class="spanBlank blanker">&nbsp;</span>'),
        s++)
      : '.' == wArr[t] ||
          '?' == wArr[t] ||
          '!' == wArr[t] ||
          "'" == wArr[t] ||
          ',' == wArr[t] ||
          '¡' == wArr[t] ||
          '¿' == wArr[t] ||
          '-' == wArr[t] ||
          '_' == wArr[t]
        ? (quizDisplayAnswer =
            quizDisplayAnswer +
            '<span class="spanBlank">' +
            wArr[t] +
            '</span>')
        : 'i' == wArr[t] || 'I' == wArr[t] || 'l' == wArr[t]
          ? ((quizDisplayAnswer =
              quizDisplayAnswer +
              '<span id="letter' +
              n +
              '" class="allLetters"><i class="invisible">' +
              wArr[t] +
              '&nbsp;</i></span>'),
            n++)
          : ((quizDisplayAnswer =
              quizDisplayAnswer +
              '<span id="letter' +
              n +
              '"><i class="invisible">' +
              wArr[t] +
              '</i></span>'),
            n++);
  if (
    ((quizDisplayAnswer =
      '' != foundArticle
        ? foundArticle +
          '<span class="spanBlank"></span><b class="yellowText">' +
          quizDisplayAnswer +
          '</b>'
        : '<b class="yellowText">' + quizDisplayAnswer + '</b>'),
    $('#writtenAnswer').html(quizDisplayAnswer),
    (s = Math.ceil(0.5 * s)),
    i > 16 &&
      0 != s &&
      $('.blanker')
        .eq(s - 1)
        .html('<br>'),
    $('#englishWrite').html(engExamples[quizQuesNum - 1]),
    'German' != lessonLanguage)
  )
    if (
      'sentenceTitle' == lessonType ||
      46 == lessonNumber ||
      49 == lessonNumber
    )
      $('#englishWrite').append(' (Masculine Form)');
    else if (92 == lessonNumber || 93 == lessonNumber || 94 == lessonNumber)
      $('#englishWrite').append(' (Masculine Form)');
    else if (50 == lessonNumber && quizQuesNum <= 10)
      $('#englishWrite').append(' (Masculine Form)');
    else if (0 == lessonNumber) {
      var r,
        o = ['/7/', '/8/', '/9/', '/46/', '/49/', '/92/', '/93/', '/94/'];
      for (r = 0; r < o.length; r++)
        -1 != imageArray[quizQuesNum - 1].indexOf(o[r]) &&
          $('#englishWrite').append(' (Masculine Form)');
      -1 != imageArray[quizQuesNum - 1].indexOf('/50/') &&
        quizQuesNum <= 10 &&
        $('#englishWrite').append(' (Masculine Form)');
    }
  ($('#quizWriteImg').css({
    'background-image': 'url(' + imageArray[quizQuesNum - 1] + ')',
  }),
    ('mobile' == currentDevice && 1 != externalKeyboard) ||
      ((focused = !0), $('#writeAnswerField').focus()),
    1 == checkAccent && findAccent(),
    setTimeout(resizeQuizText, 10),
    (scrambled = quizGoodPunct.split(' ')));
  for (t = 0; t < scrambled.length; t++) {
    var a = scrambled[t].split('');
    scrambled[t] = shuffle(a);
  }
  ((scrambled = scrambled.join().split(',')),
    'ON' == localStorage.getItem(storeInfo + 'noGap') &&
      $('#writtenAnswer span').addClass('noGap'));
}
function showHint1(e) {
  var t = allLetters[letterArray[letterArrayNum]],
    i = scrambled[letterArray[letterArrayNum]];
  if (
    (t != i && (scrambled[scrambled.indexOf(t)] = i),
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
    $('#letter' + e).html(scrambled[e].toLowerCase());
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
  for (var e = forExamples.join(''), t = [], i = 0; i < allChars.length; i++)
    if (-1 != e.indexOf(allChars[i])) {
      var n = allChars[i].toLowerCase();
      t.push(n);
    }
  if (t.length <= 6) {
    ((charsToAdd = t.concat(specialChars)),
      (charsToAdd = (charsToAdd = (charsToAdd = unique(charsToAdd)).splice(
        0,
        6,
      )).sort()));
    for (i = 0; i < 6; i++) $('#char' + (i + 1)).html(charsToAdd[i]);
  } else checkAccent = !0;
}
function findAccent() {
  for (var e = quizGoodPunct, t = [], i = 0; i < allChars.length; i++)
    if (-1 != e.indexOf(allChars[i])) {
      var n = allChars[i].toLowerCase();
      t.push(n);
    }
  ((charsToAdd = t.concat(specialChars)),
    (charsToAdd = (charsToAdd = (charsToAdd = unique(charsToAdd)).splice(
      0,
      6,
    )).sort()));
  for (i = 0; i < 6; i++) $('#char' + (i + 1)).html(charsToAdd[i]);
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
  if (
    (setTimeout(function () {
      (e.addClass('mobileClick'),
        setTimeout(function () {
          e.removeClass('mobileClick');
        }, 200));
    }, 1),
    clearTimeout(soundTime),
    e.val() == quizQuesNum)
  ) {
    if (
      ($('#mainSound').trigger('pause'),
      $('#quizItself').css({ 'pointer-events': 'none' }),
      setTimeout(function () {
        $('#quizItself').css({ 'pointer-events': 'auto' });
      }, 500),
      currQuizNum > quizCombinedArray.length)
    )
      return void loadFillAnswer();
    ($('#quizTimerPointer').stop(),
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
          3 == currentQuiz
            ? $('#quizDoneSentence').hide()
            : $('#quizDoneSentence').show(),
          doneQuiz()));
  } else
    (2 == currentQuiz &&
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
        $('#wrongAnswer').animate({ opacity: '0' });
      }, 1e3));
}
function checkWrittenAnswer() {
  if ('' != $('#writeAnswerField').val() || '' == quizGoodAnswer) {
    $('#writeError2').is(':visible') &&
      4 != currentQuiz &&
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
        i = $('#writeAnswerField').val().toLowerCase(),
        n = i.search(foundArticle.toLowerCase()),
        s = removeAccent(
          (i =
            0 == n
              ? i
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
                  .join('')
              : i
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
                  .join('')),
        ),
        r = [],
        o = e.length,
        a = 0;
      a < o;
      a++
    )
      e.charAt(a) != i.charAt(a) && r.push(a);
    if (i.length <= o - 1) {
      var l = r[0],
        u = e.slice(l);
      ((p = 0 != l ? i.slice(l + -1) : '%' + i), (r = []));
      for (a = 0; a < u.length; a++)
        u.charAt(a) != p.charAt(a) && r.push(a + l);
    }
    if (i.length == o - 2) {
      var c,
        d = r[1],
        m = e.slice(d);
      ((c = 0 != d ? i.slice(d - 2) : '%' + i), (r = r.slice(0, 1)));
      for (a = 0; a < u.length; a++)
        m.charAt(a) != c.charAt(a) && r.push(a + d);
    }
    if (i.length == o + 1) {
      var p;
      ((l = r[0]), (u = e.slice(l)));
      ((p = i.slice(l + 1)), (r = []));
      for (a = 0; a < u.length; a++)
        u.charAt(a) != p.charAt(a) && r.push(a + l);
    }
    var g = r.length,
      h = (o - g) / o;
    if (4 == currentQuiz)
      if (-1 != $('#writeError').text().indexOf('watch')) {
        if (
          ($('#writeError').html(
            "Let's&nbsp;continue!&nbsp;Don't&nbsp;worry&nbsp;about&nbsp;it.",
          ),
          $('#quizTimerPointer2').stop(),
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
          $('#wrongAnswer, #goodAnswer, #goodAnswerPic2').stop(!0, !0),
          $('#wrongAnswer').css({ opacity: '0' }),
          $('#wrongAnswerPic').removeClass('opacityAnimate'),
          $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' }),
          setTimeout(function () {
            ($('#goodAnswer, #goodAnswerPic2').animate({ opacity: '0' }),
              (disableTimer = !1),
              loadQuizSound());
          }, 700));
        var f = quizGoodPunct.split(' ').join('');
        for (a = 0; a < f.length; a++) $('#letter' + a).html(f[a]);
        return;
      }
    if (e == i) {
      if (
        (4 == currentQuiz &&
          ($('#quizTimerPointer2').stop(),
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
        $('#wrongAnswer, #goodAnswer, #goodAnswerPic2').stop(!0, !0),
        $('#wrongAnswer').css({ opacity: '0' }),
        $('#wrongAnswerPic').removeClass('opacityAnimate'),
        $('#goodAnswer, #goodAnswerPic2').css({ opacity: '1' }),
        setTimeout(function () {
          ($('#goodAnswer, #goodAnswerPic2').animate({ opacity: '0' }),
            (disableTimer = !1),
            loadQuizSound());
        }, 700));
      for (f = quizGoodPunct.split(' ').join(''), a = 0; a < f.length; a++)
        $('#letter' + a).html(f[a]);
    } else if (t == s) {
      ('mobile' == currentDevice &&
        0 == externalKeyboard &&
        ((focused = !1), $('#writeAnswerField').blur()),
        4 == currentQuiz &&
          ($('#quizTimerPointer2').stop(),
          clearTimeout(timerDelay),
          $('#quizTimerPointer').css({ opacity: '0' })),
        (currentPts -= 5),
        $('#currentScore').text(currentPts),
        $('#hintPts1').stop(!0, !0),
        $('#hintPts1').css({ opacity: '1' }),
        setTimeout(function () {
          $('#hintPts1').animate({ opacity: '0' });
        }, 2e3),
        playSprite('pause'),
        $('#boardMain').addClass('topAlign'),
        $('#writeError').html('Good!&nbsp;But&nbsp;watch the&nbsp;accents...'),
        $('.boardBottom, .boardTop, #specialChars').hide(),
        $('#writeError, #writeError2').show());
      for (
        var v = quizGoodPunct.split(' ').join('').split('').join('%'), b = 0;
        b < 6;
        b++
      )
        v = v
          .split(charsToAdd[b])
          .join('<b class="redText">' + charsToAdd[b] + '</b>');
      v = v.split('%');
      for (a = 0; a < v.length; a++) $('#letter' + a).html(v[a]);
    } else if (h >= 0.7) {
      ('mobile' == currentDevice &&
        0 == externalKeyboard &&
        ((focused = !1), $('#writeAnswerField').blur()),
        4 == currentQuiz &&
          ($('#quizTimerPointer2').stop(),
          clearTimeout(timerDelay),
          $('#quizTimerPointer').css({ opacity: '0' })),
        (currentPts -= 5),
        $('#currentScore').text(currentPts),
        $('#hintPts1').stop(!0, !0),
        $('#hintPts1').css({ opacity: '1' }),
        setTimeout(function () {
          $('#hintPts1').animate({ opacity: '0' });
        }, 2e3),
        playSprite('pause'),
        $('#boardMain').addClass('topAlign'),
        $('#writeError').html(
          'Good&nbsp;answer! But&nbsp;watch&nbsp;your&nbsp;spelling...',
        ),
        $('.boardBottom, .boardTop, #specialChars').hide(),
        $('#writeError, #writeError2').show());
      for (
        var z = quizGoodPunct.split(' ').join('').split(''), w = 0;
        w < g;
        w++
      )
        z[r[w]] = '<b class="redText">' + z[r[w]] + '</b>';
      for (a = 0; a < z.length; a++) $('#letter' + a).html(z[a]);
    } else {
      if (
        (playSprite('quizBad'),
        $('#goodAnswer').stop(!0, !0),
        $('#goodAnswer').css({ opacity: '0' }),
        4 == currentQuiz)
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
          $('.boardBottom, .boardTop, #specialChars').hide(),
          $('#writeError, #writeError2').show(),
          'mobile' == currentDevice &&
            0 == externalKeyboard &&
            ((focused = !1), $('#writeAnswerField').blur()),
          $('#wrongLogo3').show());
        for (f = quizGoodPunct.split(' ').join(''), a = 0; a < f.length; a++)
          $('#letter' + a).html(f[a]);
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
    $('.boardBottom, .boardTop, #specialChars').hide(),
    ($('body').height() - 45) / $('html').innerWidth() > 1 &&
      $('#quizTimer2').hide(),
    $('#writeError, #writeError2').show());
  for (var e = quizGoodPunct.split(' ').join(''), t = 0; t < e.length; t++)
    $('#letter' + t).html(e[t]);
  ($('#quizTimerPointer2').stop(!0, !0),
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
      $('#wrongAnswer').animate({ opacity: '0' });
    }, 1e3));
}
function goodAnswerFill() {
  ($('#goodAnswer').animate({ opacity: '0' }),
    currQuizNum != quizNumQues + 1
      ? ($('#quizSentence').removeClass('yellowText'),
        loadQuestion(),
        (disableTimer = !1),
        loadQuizSound())
      : (3 == currentQuiz
          ? $('#quizDoneSentence').hide()
          : $('#quizDoneSentence').show(),
        setTimeout(function () {
          doneQuiz();
        }, 1500)));
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
    var s = new Date(),
      r = [
        (s = s.getDate() + s.format('mmmm') + s.getFullYear()),
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
    $('#quizTimerPointer').is(':visible') &&
      ($('#quizTimerPointer').stop(!0, !0), clearTimeout(timerDelay)),
    7 == lessonNumber &&
      'vocab' == currentSecShort &&
      (imageArray = imageArray
        .join('%%')
        .split('b.jpg')
        .join('.jpg')
        .split('%%')),
    (-1 == forExamples[0].indexOf('<em> - </em>') &&
      -1 == forExamples[1].indexOf('<em> - </em>')) ||
      (fastSounds = fastSounds
        .join('%%')
        .split('sounds/soundB')
        .join('sounds/sound')
        .split('%%')),
    $('#newHighScore').transition({ y: '100%' }),
    $('#newScoreUpdate').transition({ x: '-100%' }),
    $('.menuTitleContainer').show(),
    $('#pauseBtn').show(),
    $('#optionBtn').show(),
    $('#menuMain2').show(),
    $('#quizBanner').hide(),
    1 == soundQuizEvent &&
      (document
        .getElementById('mainSound')
        .removeEventListener('ended', afterSoundAction),
      (soundQuizEvent = !1)),
    1 != soundLessonEvent &&
      (document.getElementById('mainSound').addEventListener('ended', setTimer),
      (soundLessonEvent = !0)),
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
    $('.ouinoButton').on('click', buttonClicked),
    $('.rightArrow').on('click', nextImage),
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
      ($('.ouinoButton').hover(function () {
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
        $('.quizItems, .quizItemsB').on('touchstart mousedown', function (e) {
          (e.preventDefault(), checkClickAnswer($(this)));
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
function loadQuizSound() {
  $('#mainSound').trigger('pause');
  var e = fastSounds[quizQuesNum - 1];
  if (currQuizNum <= quizCombinedArray.length || currentQuiz >= 3)
    $('#mainSound').attr('src', e);
  else {
    var t = 2 * quizFillNum - 1;
    $('#mainSound').attr('src', oPath + 'sounds/quiz' + t + soundType);
  }
  (document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playQuizSound));
}
function loadFillAnswer() {
  ($('.quizItemsB').addClass('fullyDisable'),
    (fillAnswerOn = !0),
    $('#quizSentence').addClass('yellowText'),
    $('#quizSentence').html(fillAnswers[quizFillNum - 1]),
    setTimeout(resizeQuizText, 10),
    $('#quizTimerPointer').css({ opacity: '0' }),
    $('#mainSound').trigger('pause'));
  var e = 2 * quizFillNum;
  ($('#mainSound').attr('src', oPath + 'sounds/quiz' + e + soundType),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playQuizSound),
    $('#quizTimerPointer').stop(),
    clearTimeout(timerDelay),
    (currentPts += quizPtsCount),
    $('#currentScore').text(currentPts),
    currQuizNum++,
    playSprite('quizGood'),
    $('#wrongAnswer, #goodAnswer').stop(!0, !0),
    $('#wrongAnswer').css({ opacity: '0' }),
    $('#goodAnswer').css({ opacity: '1' }),
    $('#wrongAnswerPic').removeClass('opacityAnimate'),
    $('#goodAnswerPic').css({ opacity: '1' }),
    setTimeout(function () {
      $('#goodAnswerPic').animate({ opacity: '0' });
    }, 3300),
    quizFillNum++);
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
  if (fillAnswerOn) setTimeout(goodAnswerFill, 500);
  else if (!disableTimer)
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
        : (3 == currentQuiz
            ? $('#quizDoneSentence').hide()
            : $('#quizDoneSentence').show(),
          void doneQuiz())
      : void (currentQuiz <= 2 && quizTimerAnimate());
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
    setTimeout(function () {
      $('#quizTimer2').fadeIn();
    }, 800),
    (timerDelay = setTimeout(function () {
      var e = $('#quizTimer2').width() - 15;
      ($('#quizTimerImage2').css({
        '-webkit-transform': 'translate3d(0%, 0, 0)',
        transform: 'translate3d(0%, 0, 0)',
      }),
        $('#quizTimerPointer2').stop(!0, !0),
        $('#quizTimerPointer2').css({ left: '-23px' }),
        (timerTime *= 1.3),
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
    }, 1500)));
}
function shuffle(e) {
  for (
    var t, i, n = e.length;
    n;
    t = Math.floor(Math.random() * n), i = e[--n], e[n] = e[t], e[t] = i
  );
  return e;
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
      0 !== lessonNumber &&
        $('.mainPic1').css({
          'background-image': 'url(' + oPath + 'images/pic1.jpg)',
        }),
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
      3 != lessonNumber
        ? ($('.insight').on('click', loadInsight),
          'mobile' != currentDevice &&
            $('.insight').hover(function () {
              ($('.insight').toggleClass('insightHover'),
                $('#arrowLabel').text('SHOW SENTENCE EXPLANATION'),
                $('.instructions').toggleClass('showDiv'));
            }))
        : $('.insight, .insightLabel').hide(),
      $('.lessonTitle').text(lessonTitle),
      $('.buttonContainer').append($(buttonCreate)),
      $('.ouinoButton').css({
        background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
      }),
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
      localStorage.getItem(storeInfo + 'irregSTORE') && (irregSpan = !1),
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
        toggleText();
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
var dateFormat = (function () {
  var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
    t =
      /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    i = /[^-+\dA-Z]/g,
    n = function (e, t) {
      for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e;
      return e;
    };
  return function (s, r, o) {
    var a = dateFormat;
    if (
      (1 != arguments.length ||
        '[object String]' != Object.prototype.toString.call(s) ||
        /\d/.test(s) ||
        ((r = s), (s = void 0)),
      (s = s ? new Date(s) : new Date()),
      isNaN(s))
    )
      throw SyntaxError('invalid date');
    'UTC:' == (r = String(a.masks[r] || r || a.masks.default)).slice(0, 4) &&
      ((r = r.slice(4)), (o = !0));
    var l = o ? 'getUTC' : 'get',
      u = s[l + 'Date'](),
      c = s[l + 'Day'](),
      d = s[l + 'Month'](),
      m = s[l + 'FullYear'](),
      p = s[l + 'Hours'](),
      g = s[l + 'Minutes'](),
      h = s[l + 'Seconds'](),
      f = s[l + 'Milliseconds'](),
      $ = o ? 0 : s.getTimezoneOffset(),
      v = {
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
        M: g,
        MM: n(g),
        s: h,
        ss: n(h),
        l: n(f, 3),
        L: n(f > 99 ? Math.round(f / 10) : f),
        t: 12 > p ? 'a' : 'p',
        tt: 12 > p ? 'am' : 'pm',
        T: 12 > p ? 'A' : 'P',
        TT: 12 > p ? 'AM' : 'PM',
        Z: o ? 'UTC' : (String(s).match(t) || ['']).pop().replace(i, ''),
        o:
          ($ > 0 ? '-' : '+') +
          n(100 * Math.floor(Math.abs($) / 60) + (Math.abs($) % 60), 4),
        S: ['th', 'st', 'nd', 'rd'][
          u % 10 > 3 ? 0 : (((u % 100) - (u % 10) != 10) * u) % 10
        ],
      };
    return r.replace(e, function (e) {
      return e in v ? v[e] : e.slice(1, e.length - 1);
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
  }));
