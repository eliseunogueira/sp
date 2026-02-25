var oPath = '',
  oPath2 = '../';
'androidSTORE' == osType &&
  ((oPath =
    'https://www.eliseunogueira.com.br/app/' +
    lessonLanguage +
    '/verb/' +
    lessonNumber +
    '/'),
  (oPath2 =
    'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/verb/'));
var focused,
  currentSection = 'Verbs',
  currentSecShort = 'verb',
  quizTitle2 = 'CONJUGATION MATCH',
  quizTitle3 = 'WRITE IT OUT',
  currentProgram = 'Complete',
  errors = [],
  errorMode = !1,
  greenBub = [],
  redBub = [],
  blueBub = [],
  extraTime = !1;
if (
  ('Spanish' === lessonLanguage || 'Portuguese' === lessonLanguage
    ? ((greenBub = [117, 118, 119, 120, 121, 132, 135, 138]),
      (blueBub = [122, 123, 124, 125, 126, 133, 136, 139]),
      (redBub = [127, 128, 129, 130, 131, 134, 137, 140]))
    : 'French' === lessonLanguage
      ? ((greenBub = [114, 115, 116, 117, 126, 127]),
        (redBub = [122, 123, 124, 125, 129]),
        (blueBub = [118, 119, 120, 121, 128]))
      : 'Italian' === lessonLanguage
        ? ((greenBub = [114, 115, 116, 117, 126, 128, 129, 130]),
          (redBub = [122, 123, 124, 125, 126, 127, 132]),
          (blueBub = [118, 119, 120, 121, 131]))
        : 'German' === lessonLanguage &&
          ((greenBub = [120, 121, 122, 123, 124]),
          (redBub = [125, 126]),
          (blueBub = [127, 128, 129, 130, 131, 132])),
  -1 !== greenBub.indexOf(lessonNumber))
)
  var btnColor = ['#118000', '#203e00', '#118000', '#203e00'];
else if (-1 !== redBub.indexOf(lessonNumber))
  btnColor = ['#d11a1a', '#6e0e0e', '#ba1717', '#570b0b'];
else if (-1 !== blueBub.indexOf(lessonNumber))
  btnColor = ['#0a5d90', '#063561', '#0a5d90', '#063561'];
var numOfConj,
  slidesPres = [];
numOfConj = 'French' == lessonLanguage || 'German' == lessonLanguage ? 6 : 7;
var conjAlt,
  conjAltNum,
  conjAlt2,
  conjAltNum2,
  conjID,
  conjID2,
  puzzPron,
  conjTitles,
  conjTitlesPuzz,
  allEndings = [],
  allQuizEndings = [];
if ('German' == lessonLanguage && conjNum >= 4)
  for (var numE = 1; numE <= numOfConj; numE++) {
    ((sideInput = (sideInput = (sideInput =
      window['forConj' + conjNum][numE - 1].split('<strong>'))[1].split(
      '</strong>',
    ))[0]),
      allEndings.push(sideInput),
      allQuizEndings.push(sideInput));
  }
else
  for (numE = 1; numE <= numOfConj; numE++) {
    var sideInput;
    ((sideInput = (sideInput =
      window['forConj' + conjNum][numE - 1].split('<strong>'))[1].replace(
      '</strong>',
      '',
    )),
      allEndings.push(sideInput),
      allQuizEndings.push(sideInput));
  }
function conjugationTitles() {
  if (
    ('Italian' == lessonLanguage
      ? (conjTitles = [
          "L'infinito",
          'Il presente',
          'Il passato&nbsp;prossimo',
          "L'imperfetto",
          'Il futuro&nbsp;semplice',
          'Il condizionale',
          'Il congiuntivo',
          "L'imperativo",
        ])
      : 'Spanish' == lessonLanguage
        ? ((conjTitles = [
            'Infititive',
            'Present',
            'Preterite',
            'Imperfect',
            'Future',
            'Conditional',
            'Subjunctive',
            'Imperative',
          ]),
          lessonNumber >= 132 && (conjTitles[1] = 'Present&nbsp;Progressive'))
        : 'Portuguese' == lessonLanguage
          ? ((conjTitles = [
              'Infinitive',
              'Present',
              'Preterite',
              'Imperfect',
              'Future',
              'Conditional',
              'Subjunctive',
              'Imperative',
            ]),
            lessonNumber >= 132 && (conjTitles[1] = 'Present&nbsp;Progressive'))
          : 'French' == lessonLanguage
            ? (conjTitles = [
                'Infinitif',
                'Le présent',
                'Le passé&nbsp;composé',
                "L'imparfait",
                'Le futur&nbsp;simple',
                'Le conditionnel',
                'Le subjonctif',
                "L'impératif",
              ])
            : 'German' == lessonLanguage &&
              (conjTitles = [
                'Infinitive',
                'Present',
                'Narrative Past',
                'Conversational Past',
                'Future',
                'Conditional',
                'Subjunctive',
                'Imperative',
              ]),
    6 == conjNum)
  ) {
    var e = 'que ',
      t = "qu'";
    ('Italian' == lessonLanguage && ((e = 'che '), (t = 'che ')),
      'Spanish' == lessonLanguage && (t = 'que '),
      'Portuguese' == lessonLanguage && (t = 'que '),
      (puzzPron[0] = e + puzzPron[0]),
      (puzzPron[1] = e + puzzPron[1]),
      (puzzPron[2] = t + puzzPron[2]),
      (puzzPron[3] = e + puzzPron[3]),
      (puzzPron[4] = e + puzzPron[4]),
      (puzzPron[5] = t + puzzPron[5]));
  }
  conjTitlesPuzz = conjTitles;
}
(1 == verbTypeNum
  ? (btnColor = [
      'rgba(20,130,5,1)',
      'rgba(11,89,7,1)',
      'rgba(20,130,5,1)',
      'rgba(11,89,7,1)',
      'rgba(20,130,5,1)',
      'rgba(11,89,7,1)',
    ])
  : 2 == verbTypeNum || 4 == verbTypeNum
    ? (btnColor = [
        'rgba(9,66,130,1)',
        'rgba(6,45,89,1)',
        'rgba(9,66,130,1)',
        'rgba(6,45,89,1)',
        'rgba(9,66,130,1)',
        'rgba(6,45,89,1)',
      ])
    : 3 == verbTypeNum &&
      (btnColor = [
        'rgba(145,17,17,1)',
        'rgba(97,12,12,1)',
        'rgba(145,17,17,1)',
        'rgba(97,12,12,1)',
        'rgba(145,17,17,1)',
        'rgba(97,12,12,1)',
      ]),
  7 == conjNum && 'Spanish' == lessonLanguage
    ? ((conjAlt = '(ella)'),
      (conjAltNum = 4),
      (conjAlt2 = '(ellas)'),
      (conjAltNum2 = 7),
      (conjID = [
        '-',
        '(tú)',
        '(tú) no',
        '(usted)',
        '(nosotros)',
        'ustedes',
        '-',
      ]),
      (conjID2 = [
        '-',
        '2nd person informal',
        '2nd person informal',
        '2nd person formal (3rd)',
        "let's ",
        '2nd person plural (3rd)',
        '-',
      ]),
      (puzzPron = [
        '-',
        '(tú) ',
        '(tú) no ',
        '(usted) ',
        '(nosotros) ',
        '(ustedes) ',
      ]))
    : 7 == conjNum && 'Portuguese' == lessonLanguage
      ? ((conjAlt = '(ela)'),
        (conjAltNum = 4),
        (conjAlt2 = '(elas)'),
        (conjAltNum2 = 7),
        (conjID = ['-', '(tu)', '(tu) não', '(você)', '(nós)', '(vocês)', '-']),
        (conjID2 = [
          '-',
          '2nd person (PT)',
          '2nd person (PT)',
          '2nd person (3rd)',
          "let's ",
          '2nd person plural (3rd)',
          '-',
        ]),
        (puzzPron = [
          '-',
          '(tu) ',
          '(tu) não ',
          '(você) ',
          '(nós) ',
          '(vocês) ',
        ]))
      : 'Italian' == lessonLanguage
        ? (allQuizEndings.splice(2, 1),
          (conjAlt = '(lei)'),
          (conjAltNum = 4),
          (conjID = [
            'io',
            'tu',
            'Lei',
            'lui/lei',
            'noi',
            'voi',
            'loro (Loro)',
          ]),
          (conjID2 = [
            'I',
            'you (informal)',
            'you (formal)',
            'he/she',
            'we',
            'you (plural)',
            'they / you (formal)',
          ]),
          (puzzPron = [
            '(io) ',
            '(tu) ',
            '(lui/lei) ',
            '(noi) ',
            '(voi) ',
            '(loro) ',
          ]))
        : 'Spanish' == lessonLanguage
          ? (allQuizEndings.splice(2, 1),
            (conjAlt = '(ella)'),
            (conjAltNum = 4),
            (conjAlt2 = '(ellas)'),
            (conjAltNum2 = 7),
            (conjID = [
              'yo',
              'tú',
              'usted',
              'él/ella',
              'nosotros',
              'ustedes',
              'ellos/ellas',
            ]),
            (conjID2 = [
              'I',
              'you (informal)',
              'you (formal)',
              'he/she',
              'we',
              'you (plural)',
              'they',
            ]),
            (puzzPron = [
              '(yo) ',
              '(tú) ',
              '(él/ella/usted) ',
              '(nosotros) ',
              '(ustedes) ',
              '(ellos/ellas) ',
            ]))
          : 'Portuguese' == lessonLanguage
            ? (allQuizEndings.splice(2, 1),
              (conjAlt = '(ela)'),
              (conjAltNum = 4),
              (conjAlt2 = '(elas)'),
              (conjAltNum2 = 7),
              (conjID = [
                '(eu)',
                '(tu)',
                '(você)',
                '(ele)',
                '(nós)',
                '(vocês)',
                '(eles)',
              ]),
              (puzzPron = [
                '(eu) ',
                '(tu) ',
                '(ele/ela/você) ',
                '(nós) ',
                '(vocês) ',
                '(eles/elas) ',
              ]),
              (conjID2 = [
                'I',
                'you (PT)',
                'you (BR)',
                'he/she',
                'we',
                'you (plural)',
                'they',
              ]))
            : 'French' == lessonLanguage
              ? ((conjAlt = 'elle'),
                (conjAltNum = 3),
                (conjAlt2 = 'elles'),
                (conjAltNum2 = 6),
                (conjID = ['je', 'tu', 'il/elle', 'nous', 'vous', 'ils/elles']),
                (conjID2 = [
                  'I',
                  'you (informal)',
                  'he/she',
                  'we',
                  'you (plural / formal)',
                  'they',
                ]),
                (puzzPron = [
                  'je ',
                  'tu ',
                  'il/elle ',
                  'nous ',
                  'vous ',
                  'ils/elles ',
                ]))
              : 'German' == lessonLanguage &&
                ((conjAlt = 'sie'),
                (conjAltNum = 3),
                (conjAlt2 = 'es'),
                (conjAltNum2 = 3),
                (conjID = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie']),
                (conjID2 = [
                  'I',
                  'you (informal)',
                  'he/she/it',
                  'we',
                  'you (plural)',
                  'they / you (formal)',
                ]),
                (puzzPron = [
                  'ich ',
                  'du ',
                  'er/sie/es ',
                  'wir ',
                  'ihr ',
                  'Sie/sie ',
                ])),
  conjugationTitles());
var quizCombinedArray,
  userName,
  currQuizNum,
  resetCode,
  userEmail,
  userEmail2,
  engExamplesQuiz,
  storeInfo,
  tuvm58dj,
  tuvm58dj2,
  fieldToUpdate,
  audioSprite,
  currentSprite,
  infoToUpdate,
  quizQuesNum,
  currentPts,
  currentErrors,
  puzzleArray,
  userInfo,
  timerTime,
  soundRepeated,
  forExamples = [],
  engExamples = [],
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
  ],
  FrenchChars = ['é', 'è', 'ê', 'ë', 'à', 'ç'],
  SpanishChars = ['á', 'é', 'í', 'ó', 'ú', 'ñ'],
  ItalianChars = ['à', 'é', 'è', 'ì', 'ò', 'ù'],
  GermanChars = ['ß', 'ä', 'ö', 'ü', 'ï', 'ë'],
  articleArray = window[lessonLanguage + 'Articles'],
  specialChars = window[lessonLanguage + 'Chars'],
  quizDescription2 =
    'Drag the conjugation puzzle pieces over to the correct subject pronoun. Each right answer will unlock a part of the picture hidden by puzzle pieces.',
  quizDescription3 =
    'Type in the correct ending corresponding to the conjugation. No more guessing here, you have to know the ending to get the right answer! Warning: Hints are not available for the endings lessons.',
  numWords = 3 * (numOfConj + 1),
  quizMapArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ],
  closeWin =
    '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 25 25" enable-background="new 0 0 25 25" xml:space="preserve"><g id="Ellipse_1_13_"><g><circle fill-rule="evenodd" clip-rule="evenodd" fill="#666" cx="12.5" cy="12.7" r="11.9"/></g></g><path fill="#FFFFFF" d="M14.8,12.7L18.5,9c0.3-0.3,0.3-0.8,0-1l-1.2-1.2c-0.3-0.3-0.8-0.3-1,0l-3.7,3.7L8.8,6.7c-0.3-0.3-0.8-0.3-1,0L6.5,7.9c-0.3,0.3-0.3,0.8,0,1l3.7,3.7l-3.7,3.7c-0.3,0.3-0.3,0.8,0,1l1.2,1.2c0.3,0.3,0.8,0.3,1,0l3.7-3.7l3.7,3.7c0.3,0.3,0.8,0.3,1,0l1.2-1.2c0.3-0.3,0.3-0.8,0-1L14.8,12.7z"/></svg>';
function loadPresentation() {
  ((fastSounds = []), (quizSounds = []));
  for (var e = 1; e <= narration.length; e++)
    fastSounds.push(oPath + 'sounds/narra' + e + soundType);
  fastSounds.push('../../common/blank' + soundType);
  for (var t = 1; t < numWords; t++)
    fastSounds.push(oPath + 'sounds/sound' + t + soundType);
  quizSounds = [];
  for (var i = 1; i <= 18; i++)
    quizSounds.push(oPath + 'sounds/quiz' + i + soundType);
}
function loadAudioCourse() {}
function buttonClicked() {
  picControl = 'picFade';
  var e = parseInt($(this).attr('id').split('sideLabel').join('')) - 1;
  (0 == e
    ? (currentWordNum = 0)
    : 1 == e
      ? (currentWordNum = 0 + narration.length)
      : 2 == e
        ? (currentWordNum = numOfPers + narration.length)
        : 3 == e && (currentWordNum = 2 * numOfPers + narration.length),
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
      viewportHeight <= 700
        ? $('#lightTimerDiv').css({ width: viewportHeight / 4 + 'px' })
        : $('#lightTimerDiv').css({ width: '190px' }),
      viewportHeight <= 400
        ? $('#quizDonePts').hide()
        : $('#quizDonePts').show(),
      viewportHeight <= 500
        ? $('#quizPreloadDescription').hide()
        : $('#quizPreloadDescription').show(),
      3 == currentQuiz &&
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
              height: 0.48 * spaceLeft + 'px',
              bottom: '10px',
              'margin-top': '15px',
              'margin-right': '2%',
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
  for (var e = 1; e <= 4; e++) {
    $('#quizItem' + e + 'B').css({ fontSize: '22px' });
    for (
      var t = $('#quizMultiImg').width() - 20,
        i = $('#quizItem' + e + 'B').width(),
        n = 22;
      i > t && n > 0.3;
    )
      ((n -= 0.5),
        $('#quizItem' + e + 'B').css({ fontSize: n + 'px' }),
        (i = $('#quizItem' + e + 'B').width()));
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
    ($('#startCover').css({ height: $('html').innerHeight() + 'px' }),
      (viewportHeight = $('body').height() - 45),
      (viewportWidth = $('html').innerWidth()),
      (screenRatio = $('html').width() / $('html').height()));
    var e = viewportHeight - 40;
    if (
      ($('body').hasClass('notch') && (e -= 45),
      $('body').hasClass('android') && (e -= 20),
      viewportWidth < 600
        ? ($('.menuItem').css({ 'font-size': '15px' }),
          $('.menuItemDescription').css({ 'font-size': '11px' }))
        : ($('.menuItem').css({ 'font-size': '17px' }),
          $('.menuItemDescription').css({ 'font-size': '14px' })),
      viewportWidth >= 850 ? $('.menuLogo').show() : $('.menuLogo').hide(),
      setTimeout(function () {
        7 == numOfConj
          ? $('.conjItems').css({
              'line-height': 0.092 * $('.conjContainer').height() + 'px',
            })
          : 6 == numOfConj
            ? $('.conjItems').css({
                'line-height': 0.102 * $('.conjContainer').height() + 'px',
              })
            : 8 == numOfConj &&
              $('.conjItems').css({
                'line-height': 0.085 * $('.conjContainer').height() + 'px',
              });
      }, 20),
      screenRatio < 1 && $('html').width() != $('html').height())
    ) {
      ($('.ouinoContent').addClass('portrait'),
        $('.ouinoContent').css({ height: e + 'px' }));
      var t = e - $('#sideConj').height() - 200;
      ($('.shinyPicture').css({ height: t + 'px' }),
        $('.wordSentence').css({ height: '150px' }));
    } else
      ($('.ouinoContent').removeClass('portrait'),
        $('.ouinoContent').css({ height: e + 'px' }),
        $('.shinyPicture').css({ height: '36%' }),
        $('.wordSentence').css({ height: '20%' }));
    ($('#endWrap').is(':visible') &&
      (viewportHeight >= 700
        ? $('#learningTip').show()
        : $('#learningTip').hide()),
      resizeText(),
      resizeTitle(),
      resizeVerbMenu());
  }
}
function resizeTitle() {
  if (
    ($('.menuTitleContainer').html(lessonTitle), $('html').innerWidth() < 550)
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
  screenRatio,
  viewportWidth,
  currentMusic,
  picControl,
  wordTimer,
  mySound,
  madeError,
  theFont,
  fastSounds,
  quizSounds,
  foundArticle,
  quizGoodAnswer,
  quizGoodPunct,
  arrowClicks,
  writtenString,
  timerWait,
  verbInList,
  charsToAdd,
  selectPuzz,
  puzzContent,
  wArr,
  allLetters,
  scrambled,
  handAnimateOn,
  letterArray,
  letterArrayNum,
  currentQuiz,
  pastQuizScore,
  quizNumArray,
  pastQuizScoreAll,
  timerDelay,
  mouseIsDown,
  endingTimer,
  onTimeUpdate,
  submitted,
  quizNumQues,
  LOrR,
  fastOrSlow,
  fastOverwrite = !0,
  currentWordNum = 0,
  picToggle = 1,
  soundPlaying = !1,
  soundLessonEvent = !1,
  soundQuizEvent = !1,
  checkAccent = !1,
  numOfPers = numOfConj + 1,
  quizPtsCount = 65,
  verbLetter = ['Z', 'A', 'B', 'C', 'D', 'E', 'F'],
  vowels = ['a', 'e', 'i', 'o', 'u', 'h'],
  puzzPos = ['12%', '27%', '42%', '57%', '72%', '87%'],
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
    '<div id="pronounWarn"></div><div id="fontPreload1"></div><div id="fontPreload2"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel">RESTART LESSON</b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><span class="menuTitleContainer alignVerticalItem"></span><span class="menuBtnContainer"><img id="keyboardBtn" src="../../common/keyboard2.svg" class="smallIcon" style="display:none;"/><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I\'m confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoVerb.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr class="playbackOptions" ><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems playbackOptions" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr class="playbackOptions" ><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems playbackOptions""><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table><div style="text-align: center; margin-top: 40px; font-weight: 300; text-shadow: none; font-size: 15px;">Note: Playback speed and Subtitle options are not available for the verb endings lessons.</div></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><div id="verbBannerMenu"><div id="verbBanner1B" class="verbBannerItem2"></div><div id="verbBanner2B" class="verbBannerItem2"></div><div id="verbBanner3B" class="verbBannerItem2"></div><div id="verbBanner4B"></div><div class="closeWinBtn2"></div></div><div id="verbWrap"></div><div class="menuVerb"><div class="closeWinBtn"></div><div id="menuVerbContent"></div></div>',
  lessonAppend =
    '<div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><main class="ouinoContent selectOff"><div id="conjAnimation"></div><div id="wandAnimation"></div><div id="stemAnimation"></div><div id="sideConj"><table id="sideTable"> <tr> <th colspan="2"id="sideTitle"><strong>ARE</strong> Present Endings</th> </tr><tr> <td id="conjTD1"><div id="sh1" class="sideHilites1 sideItem1"></div><div id="sideForItem1" class="sideForItems"></div><div id="sideEngItem1" class="sideEngItems"></div></td><td><img id="sideHand1" class="sideHands" src="../../common/hand.svg"><div id="shB1" class="sideHilites2 sideItem1"></div><div id="sideEnding1" class="sideEndings"></div></td></tr><tr> <td id="conjTD2"><div id="sh2" class="sideHilites1 sideItem2"></div><div id="sideForItem2" class="sideForItems"></div><div id="sideEngItem2" class="sideEngItems"></div></td><td><img id="sideHand2" class="sideHands" src="../../common/hand.svg"><div id="shB2" class="sideHilites2 sideItem2"></div><div id="sideEnding2" class="sideEndings"></div></td></tr><tr> <td id="conjTD3"><div id="sh3" class="sideHilites1 sideItem3"></div><img id="starQues1b" class="starQuestion2" src="../../common/iconStar3.svg"><div id="sideForItem3" class="sideForItems"></div><div id="sideEngItem3" class="sideEngItems"></div></td><td><img id="sideHand3" class="sideHands" src="../../common/hand.svg"><div id="shB3" class="sideHilites2 sideItem3"></div><div id="lineJoin1" class="lineJoiner"></div><div id="sideEnding3" class="sideEndings"></div></td></tr><tr> <td id="conjTD4"><div id="sh4" class="sideHilites1 sideItem4"></div><div id="sideForItem4" class="sideForItems"></div><div id="sideEngItem4" class="sideEngItems"></div></td><td><img id="sideHand4" class="sideHands" src="../../common/hand.svg"><div id="shB4" class="sideHilites2 sideItem4"></div><div id="sideEnding4" class="sideEndings"></div></td></tr><tr> <td id="conjTD5"><div id="sh5" class="sideHilites1 sideItem5"></div><div id="sideForItem5" class="sideForItems"></div><div id="sideEngItem5" class="sideEngItems"></div></td><td><img id="sideHand5" class="sideHands" src="../../common/hand.svg"><div id="shB5" class="sideHilites2 sideItem5"></div><div id="sideEnding5" class="sideEndings"></div></td></tr><tr> <td id="conjTD6"><div id="sh6" class="sideHilites1 sideItem6"></div><img id="starQues2b" class="starQuestion2" src="../../common/iconStar3.svg"><div id="sideForItem6" class="sideForItems"></div><div id="sideEngItem6" class="sideEngItems"></div></td><td><img id="sideHand6" class="sideHands" src="../../common/hand.svg"><div id="shB6" class="sideHilites2 sideItem6"></div><div id="lineJoin2" class="lineJoiner"></div><div id="sideEnding6" class="sideEndings"></div></td></tr><tr> <td id="conjTD7"><div id="sh7" class="sideHilites1 sideItem7"></div><div id="sideForItem7" class="sideForItems"></div><div id="sideEngItem7" class="sideEngItems"></div></td><td><img id="sideHand7" class="sideHands" src="../../common/hand.svg"><div id="shB7" class="sideHilites2 sideItem7"></div><div id="sideEnding7" class="sideEndings"></div></td></tr><tr> <td colspan="2" id="starConjSame"><img src="../../common/iconStar2b.svg">Same Pronunciation.</td><td colspan="2" id="starConjWarn"><img src="../../common/iconStar2.svg">Always the same. Learn more...</td></tr></table></div><div class="menuConj"> <div id="menuVerbSec1"></div><div id="menuVerbSec2"></div><div class="closeWinBtn3"></div></div><figure class="shinyPicture"> <figure class="arrowControl"> <div class="leftArrow"></div><div class="rightArrow"></div><div id="middleSwipe"></div></figure> <figure class="mainPic2" alt="mainImage"></figure> <figure class="mainPic1" alt="mainImage"></figure> </figure> <section class="wordSentence"> <div id="sideLabel1" class="sideLabels">N</div><div id="sideLabel2" class="sideLabels">1</div><div id="sideLabel3" class="sideLabels">2</div><div id="sideLabel4" class="sideLabels">3</div><div class="wordSentenceIn alignVerticalItem"> <h6 class="narrSentence"></h6> <div class="textWrap3"> <h6 class="disSentence">-Text Disabled-</h6> </div><div class="textWrap"> <h6 class="forSentence"></h6> </div><br><div class="textWrap2"> <h6 class="engSentence"></h6> </div></div></section> <aside class="conjContainer"> <div id="conjForeign"> <div> <p id="conjTitleFor" class="conjTitle"><img class="flagIcon" src="../../common/flagIcon.svg"></p></div><div id="conjSpan"> <img id="starQues1" class="starQuestion" src="../../common/iconStar.svg"> <img id="starQues2" class="starQuestion" src="../../common/iconStar.svg"> <div id="conjItem0" class="conjItems"></div><div id="conjItem1" class="conjItems"></div><div id="conjItem2" class="conjItems"></div><div id="conjItem3" class="conjItems"></div><div id="conjItem4" class="conjItems"></div><div id="conjItem5" class="conjItems"></div><div id="conjItem6" class="conjItems"></div><div id="conjItem7" class="conjItems"></div><div id="conjItem8" class="conjItems"></div></div></div><div id="conjEnglish"> <div> <p class="conjTitle" id="conjEngTitle"><img class="flagIcon" src="../../common/flagIcon2.svg">English</p></div><div id="conjSpan2"> <div id="conjItemB0" class="conjItems"></div><div id="conjItemB1" class="conjItems"></div><div id="conjItemB2" class="conjItems"></div><div id="conjItemB3" class="conjItems"></div><div id="conjItemB4" class="conjItems"></div><div id="conjItemB5" class="conjItems"></div><div id="conjItemB6" class="conjItems"></div><div id="conjItemB7" class="conjItems"></div><div id="conjItemB8" class="conjItems"></div></div></div></aside> <div class="buttonWrap"></div></main>',
  quizAppend =
    '<div id="goodAnswerPic2"> <div id="goodAnswerIn2"></div></div><div id="wrongAnswerPic2"> <div id="wrongAnswerIn"></div></div><img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><div id="puzzleBack"></div><img id="quizGoBack" src="../../common/menuIcon1.svg"> <div id="wrongAnswerPic"> <div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"> <div id="goodAnswerIn"></div></div><table id="quizDone" > <tr> <th colspan="2" id="quizDoneTitle"></th> </tr><tr> <td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr> <td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp; <p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr> <td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div></td></tr></table> <div id="quizScoreBack"> <div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"><div id="quizTimerPointer"><img id="quizTimerImage" src="../../common/timerPointer.svg"></div><div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizTimer2"> <div id="quizTimerGood2"></div><div id="quizTimerBar"></div><div id="quizTimerBad2"></div></div><div id="quizItself"> <div id="quizSentenceContainer"> <div class="quizSentenceWrap"> <span id="quizSentenceFor"></span><br> <span id="quizSentenceEng"></span> </div></div><div class="textWrap5"></div><div id="quizAllItems"> <div id="quizItem1" class="quizItems"> <p id="quizEng1" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem2" class="quizItems"> <p id="quizEng2" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem3" class="quizItems"> <p id="quizEng3" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem4" class="quizItems"> <p id="quizEng4" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem5" class="quizItems"> <p id="quizEng5" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div><div id="quizItem6" class="quizItems"> <p id="quizEng6" class="quizEng1 quizEng"></p><div class="quizItemsTop"></div></div></div><div id="quizAllItemsB"></div><div id="textureIn"></div><div id="quizAllItemsD"></div><div id="quizMultiImg"> <div id="topPuzzle"></div></div><div id="quizAllItemsC"> <img id="sketchImg" src="../../common/sketch.png"><form id="answerForm" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" novalidate></form> <div id="writeAnswerBoard"> <table id="boardTable"> <tr id="specialChars"> <td id="char1" class="boardChar"></td><td id="char2" class="boardChar"></td><td id="char3" class="boardChar"></td><td id="char4" class="boardChar"></td><td id="char5" class="boardChar"></td><td id="char6" class="boardChar"></td></tr><tr> <td colspan="6" id="writeError"></td></tr><tr> <td colspan="6" id="boardMain"></td></tr><tr> <td colspan="6" id="writeError2">CONTINUE</td></tr></table> </div></div><div id="noteBook"></div><div id="quizWriteImg"><img id="wrongLogo1" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo2" class="wrongLogo" src="../../common/strike.svg"><img id="wrongLogo3" class="wrongLogo" src="../../common/strike.svg"></div></div><table id="quizPreload"> <tr> <th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th> </tr><tr> <td id="quizPreloadMedal"></td></tr><tr> <td id="quizPreloadStart">START NOW</td></tr></table> <div id="quizStart"> <div id="quizStartImg"> <div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div><table id="quizMenu"> <tr> <th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th> </tr><tr> <td rowspan="2" id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">CONJUGATION<br> MATCH</h2> <img class="chooseQuizIcon" src="../../common/quizverb2.svg"/> <h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td rowspan="2" id="quizBtn3" class="quizType"><div id="sMedal3" class="smallMedal"></div><h2 class="chooseQuizText">WRITE IT OUT<br></h2> <img class="chooseQuizIcon" src="../../common/quizverb4.svg"/> <h2 class="chooseQuizText2">Difficulty: Average</h2></td></tr><tr> <td id="quizBtn1" class="quizType" style="display:none;"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">SIMPLE PRACTICE</h2> <img class="chooseQuizIcon" src="../../common/quizverb1.svg"/> <h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td id="quizBtn4" class="quizType" style="display:none;"><div id="sMedal4" class="smallMedal"></div><h2 class="chooseQuizText">By the Book</h2> <img class="chooseQuizIcon" src="../../common/quizverb4.svg"/> <h2 class="chooseQuizText2">Difficulty: Hard</h2></td></tr></table></main>',
  imageArray = [
    oPath + 'images/pic0.jpg',
    oPath + 'images/pic1.jpg',
    oPath + 'images/pic2.jpg',
    oPath + 'images/pic3.jpg',
    oPath + 'images/pic4.jpg',
    oPath + 'images/pic5.jpg',
  ];
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
  nextImage();
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
            'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
            'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
              'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
              'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
              'background-image': 'url(' + imageArray[verbInList - 1] + ')',
            }),
            $('.mainPic2').fadeIn(500, function () {
              ((arrowClicks = 'enable'),
                (picToggle = 2),
                $('.mainPic1').css({ 'z-index': '5', display: 'none' }),
                $('.mainPic2').css({ 'z-index': '4' }));
            }))
          : ((arrowClicks = 'disable'),
            $('.mainPic1').css({
              'background-image': 'url(' + imageArray[verbInList - 1] + ')',
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
    (currentWordNum != numWords - 1 + narration.length
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
    currentWordNum == narration.length + 1
      ? (currentWordNum--, currentWordNum--, changeWord())
      : 0 != currentWordNum && (currentWordNum--, changeWord()));
}
function skipConj() {
  if ('picPrev' != picControl) {
    verbInList = 1;
    var e = currentWordNum - narration.length,
      t = conjNum;
    ($('.conjItems').text(''),
      $('.sideLabels').css({ background: btnColor[1] }),
      $('#sideLabel' + (verbInList + 1)).css({ background: '#ebbc31' }),
      0 != e
        ? 'German' == lessonLanguage && 126 == lessonNumber
          ? $('#conjItem0').html(
              capitalFirst(replaceText2[verbInList - 1]) +
                '<strong>' +
                verbType.toLowerCase() +
                '</strong>',
            )
          : 'German' == lessonLanguage && 127 == lessonNumber
            ? $('#conjItem0').html(
                capitalFirst(replaceText2[verbInList - 1]) +
                  replaceText[verbInList - 1] +
                  '<strong>' +
                  verbType.toLowerCase() +
                  '</strong>',
              )
            : $('#conjItem0').html(
                capitalFirst(replaceText[verbInList - 1]) +
                  '<strong>' +
                  verbType.toLowerCase() +
                  '</strong>',
              )
        : $('#conjItem0').html('<strong>' + verbType + '</strong>'),
      $('#conjItemB0').html(englishVerbs[verbInList - 1]));
    for (var i = 1; i <= window['forConj' + t].length; i++) {
      if (1 == i && 'French' == lessonLanguage)
        -1 != vowels.indexOf(replaceText[verbInList - 1].charAt(0))
          ? $('#conjItem' + i).append(
              window['forConj' + t][i - 1]
                .replace('zzzz', replaceText[verbInList - 1])
                .replace("je/j' ", "j'"),
            )
          : $('#conjItem' + i).append(
              window['forConj' + t][i - 1]
                .replace('zzzz', replaceText[verbInList - 1])
                .replace("je/j' ", 'je '),
            );
      else if ('German' == lessonLanguage && conjNum >= 4) {
        var n = window['forConj' + t][i - 1].split('zzzz');
        $('#conjItem' + i).append(n[0] + ' + infinitive');
      } else
        'German' == lessonLanguage && 127 == lessonNumber
          ? $('#conjItem' + i).append(
              window['forConj' + t][i - 1].replace(
                'zzzz',
                replaceText[verbInList - 1],
              ) +
                ' ' +
                replaceText2[verbInList - 1],
            )
          : $('#conjItem' + i).append(
              window['forConj' + t][i - 1].replace(
                'zzzz',
                replaceText[verbInList - 1],
              ),
            );
      ($('#conjItemB' + i).append(
        window['engConj' + t + verbLetter[verbInList - 1]][i - 1],
      ),
        'Portuguese' == lessonLanguage &&
          $('#conjItemB' + i).html(
            window['engConj' + t + verbLetter[verbInList - 1]][i - 1]
              .split('(Portugal informal')
              .join('(PT inf.')
              .split('(Brazil informal')
              .join('(BR inf.'),
          ));
    }
    swapImages();
  }
  (currentWordNum++, changeWord());
}
function changeSound() {
  $('#pauseWrap').is(':visible') ||
    ('true' == lessonInit
      ? ((fastOrSlow = 'fast'),
        $('.timerMeter > .timerSpan').stop(),
        $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() }),
        $('#mainSound').trigger('pause'),
        narration.length >= 1
          ? $('#mainSound').attr('src', oPath + 'sounds/narra1' + soundType)
          : $('#mainSound').attr('src', '../../common/blank' + soundType),
        setTimeout(function () {
          $('#mainSound').trigger('play');
        }, 1e3),
        (soundPlaying = !0),
        toggleMusic(),
        (lessonInit = 'false'))
      : loadFastSound());
}
function changeWord() {
  if (
    (saveLeftOff(3 * numOfPers + (narration.length - 1)),
    (soundRepeated = 0),
    (handAnimateOn = !1),
    $('#wandAnimation, #stemAnimation').hide(),
    (fastOrSlow = 'fast'),
    clearTimeout(wordTimer),
    $('#mainSound').trigger('pause'),
    $('#conjAnimation').css({ opacity: '0' }),
    clearTimeout(endingTimer),
    $('#pauseBtn').attr('src', '../../common/pause.svg'),
    (timerLength =
      currentWordNum < narration.length
        ? 1e3
        : 1e3 * $('#selectInterval').val()),
    currentWordNum != narration.length)
  ) {
    currentWordNum < 1
      ? ($('.leftArrow').hide(), $('.rightArrow').show())
      : currentWordNum >= numWords - 1 + narration.length
        ? ($('.leftArrow').show(), $('.rightArrow').hide())
        : ($('.leftArrow').show(), $('.rightArrow').show());
    var e = currentWordNum - narration.length,
      t = e % numOfPers,
      i = conjNum;
    if (currentWordNum < narration.length) {
      ($('.mainPic1, .mainPic2').css({
        'background-image': 'url(../../common/verbType1.png)',
      }),
        (verbInList = 1),
        $('.conjItems').text(''),
        $('.sideLabels').css({ background: btnColor[1] }),
        $('#sideLabel1').css({ background: '#ebbc31' }),
        $('.conjItems').removeClass('hilite'),
        $('.sideHilites1, .sideHilites2').css({ opacity: '0' }),
        $('.sideHands').removeClass('sideHandsAnimate'),
        $('.narrSentence').html(narration[currentWordNum]),
        $('.narrSentence').show(),
        $('.engSentence, .forSentence').html(''),
        $('#conjItem0').html('<strong>' + verbType + '</strong>'),
        $('#conjItemB0').html(englishVerbs[verbInList - 1]));
      for (var n = 1; n <= window['forConj' + i].length; n++) {
        if (1 == n && 'French' == lessonLanguage)
          -1 != vowels.indexOf(replaceText[verbInList - 1].charAt(0))
            ? $('#conjItem' + n).append(
                window['forConj' + i][n - 1]
                  .replace('zzzz', replaceText[verbInList - 1])
                  .replace("je/j' ", "j'"),
              )
            : $('#conjItem' + n).append(
                window['forConj' + i][n - 1]
                  .replace('zzzz', replaceText[verbInList - 1])
                  .replace("je/j' ", 'je '),
              );
        else if ('German' == lessonLanguage && conjNum >= 4) {
          var s = window['forConj' + i][n - 1].split('zzzz');
          $('#conjItem' + n).append(s[0] + ' + infinitive');
        } else
          'German' == lessonLanguage && 127 == lessonNumber
            ? $('#conjItem' + n).append(
                window['forConj' + i][n - 1].replace(
                  'zzzz',
                  replaceText[verbInList - 1],
                ) +
                  ' ' +
                  replaceText2[verbInList - 1],
              )
            : $('#conjItem' + n).append(
                window['forConj' + i][n - 1].replace(
                  'zzzz',
                  replaceText[verbInList - 1],
                ),
              );
        ($('#conjItemB' + n).append(
          window['engConj' + i + verbLetter[verbInList - 1]][n - 1],
        ),
          'Portuguese' == lessonLanguage &&
            $('#conjItemB' + n).html(
              window['engConj' + i + verbLetter[verbInList - 1]][n - 1]
                .split('(Portugal informal')
                .join('(PT inf.')
                .split('(Brazil informal')
                .join('(BR inf.'),
            ),
          changeSound());
      }
      resizeText();
    } else {
      if (($('.narrSentence').hide(), 0 == t)) {
        if ('picPrev' != picControl) {
          (e < numOfPers
            ? (verbInList = 1)
            : e == numOfPers
              ? (verbInList = 2)
              : e == 2 * numOfPers && (verbInList = 3),
            $('.conjItems').text(''),
            $('.sideLabels').css({ background: btnColor[1] }),
            $('#sideLabel' + (verbInList + 1)).css({ background: '#ebbc31' }),
            0 != e
              ? 'German' == lessonLanguage && 126 == lessonNumber
                ? $('#conjItem0').html(
                    capitalFirst(replaceText2[verbInList - 1]) +
                      '<strong>' +
                      verbType.toLowerCase() +
                      '</strong>',
                  )
                : 'German' == lessonLanguage && 127 == lessonNumber
                  ? $('#conjItem0').html(
                      capitalFirst(replaceText2[verbInList - 1]) +
                        replaceText[verbInList - 1] +
                        '<strong>' +
                        verbType.toLowerCase() +
                        '</strong>',
                    )
                  : $('#conjItem0').html(
                      capitalFirst(replaceText[verbInList - 1]) +
                        '<strong>' +
                        verbType.toLowerCase() +
                        '</strong>',
                    )
              : $('#conjItem0').html('<strong>' + verbType + '</strong>'),
            $('#conjItemB0').html(englishVerbs[verbInList - 1]));
          for (n = 1; n <= window['forConj' + i].length; n++)
            (1 == n && 'French' == lessonLanguage
              ? -1 != vowels.indexOf(replaceText[verbInList - 1].charAt(0))
                ? $('#conjItem' + n).append(
                    window['forConj' + i][n - 1]
                      .replace('zzzz', replaceText[verbInList - 1])
                      .replace("je/j' ", "j'"),
                  )
                : $('#conjItem' + n).append(
                    window['forConj' + i][n - 1]
                      .replace('zzzz', replaceText[verbInList - 1])
                      .replace("je/j' ", 'je '),
                  )
              : 'German' == lessonLanguage && 127 == lessonNumber
                ? $('#conjItem' + n).append(
                    window['forConj' + i][n - 1].replace(
                      'zzzz',
                      replaceText[verbInList - 1],
                    ) +
                      ' ' +
                      replaceText2[verbInList - 1],
                  )
                : $('#conjItem' + n).append(
                    window['forConj' + i][n - 1].replace(
                      'zzzz',
                      replaceText[verbInList - 1],
                    ),
                  ),
              $('#conjItemB' + n).append(
                window['engConj' + i + verbLetter[verbInList - 1]][n - 1],
              ),
              'Portuguese' == lessonLanguage &&
                $('#conjItemB' + n).html(
                  window['engConj' + i + verbLetter[verbInList - 1]][n - 1]
                    .split('(Portugal informal')
                    .join('(PT inf.')
                    .split('(Brazil informal')
                    .join('(BR inf.'),
                ));
          swapImages();
        }
        ($('.conjItems').removeClass('hilite'),
          $('.sideHilites1, .sideHilites2').css({ opacity: '0' }),
          $('.sideHands').removeClass('sideHandsAnimate'),
          $('#conjItem0, #conjItemB0').addClass('hilite'),
          'German' == lessonLanguage && conjNum >= 4
            ? $('.forSentence').html(
                capitalFirst(replaceText[verbInList - 1]) +
                  verbType.toLowerCase(),
              )
            : 'German' == lessonLanguage && 126 == lessonNumber
              ? $('.forSentence').html(
                  capitalFirst(replaceText2[verbInList - 1]) +
                    '<strong>' +
                    verbType.toLowerCase() +
                    '</strong>',
                )
              : 'German' == lessonLanguage && 127 == lessonNumber
                ? $('.forSentence').html(
                    capitalFirst(replaceText2[verbInList - 1]) +
                      replaceText[verbInList - 1] +
                      '<strong>' +
                      verbType.toLowerCase() +
                      '</strong>',
                  )
                : $('.forSentence').html(
                    capitalFirst(replaceText[verbInList - 1]) +
                      '<strong>' +
                      verbType.toLowerCase() +
                      '</strong>',
                  ),
          $('.engSentence').html(englishVerbs[verbInList - 1]),
          (handAnimateOn = !('German' == lessonLanguage && conjNum >= 4)),
          changeSound());
      } else if (t == numOfPers - 1 && 'picPrev' == picControl) {
        (e == numOfPers - 1
          ? (verbInList = 1)
          : e == 2 * numOfPers - 1 && (verbInList = 2),
          $('.conjItems').text(''),
          $('.sideLabels').css({ background: btnColor[1] }),
          $('#sideLabel' + (verbInList + 1)).css({ background: '#ebbc31' }),
          e != numOfPers - 1
            ? 'German' == lessonLanguage && 126 == lessonNumber
              ? $('#conjItem0').html(
                  capitalFirst(replaceText2[verbInList - 1]) +
                    '<strong>' +
                    verbType.toLowerCase() +
                    '</strong>',
                )
              : 'German' == lessonLanguage && 127 == lessonNumber
                ? $('#conjItem0').html(
                    capitalFirst(replaceText2[verbInList - 1]) +
                      replaceText[verbInList - 1] +
                      '<strong>' +
                      verbType.toLowerCase() +
                      '</strong>',
                  )
                : $('#conjItem0').html(
                    capitalFirst(replaceText[verbInList - 1]) +
                      '<strong>' +
                      verbType.toLowerCase() +
                      '</strong>',
                  )
            : $('#conjItem0').html('<strong>' + verbType + '</strong>'),
          $('#conjItemB0').html(englishVerbs[verbInList - 1]));
        for (n = 1; n <= window['forConj' + i].length; n++)
          (1 == n && 'French' == lessonLanguage
            ? -1 != vowels.indexOf(replaceText[verbInList - 1].charAt(0))
              ? $('#conjItem' + n).append(
                  window['forConj' + i][n - 1]
                    .replace('zzzz', replaceText[verbInList - 1])
                    .replace("je/j' ", "j'"),
                )
              : $('#conjItem' + n).append(
                  window['forConj' + i][n - 1]
                    .replace('zzzz', replaceText[verbInList - 1])
                    .replace("je/j' ", 'je '),
                )
            : $('#conjItem' + n).append(
                window['forConj' + i][n - 1].replace(
                  'zzzz',
                  replaceText[verbInList - 1],
                ),
              ),
            $('#conjItemB' + n).append(
              window['engConj' + i + verbLetter[verbInList - 1]][n - 1],
            ),
            'Portuguese' == lessonLanguage &&
              $('#conjItemB' + n).html(
                window['engConj' + i + verbLetter[verbInList - 1]][n - 1]
                  .split('(Portugal informal')
                  .join('(PT inf.')
                  .split('(Brazil informal')
                  .join('(BR inf.'),
              ));
        (swapImages(),
          $('.conjItems').removeClass('hilite'),
          $('.sideHilites1, .sideHilites2').css({ opacity: '0' }),
          $('.sideHands').removeClass('sideHandsAnimate'),
          $('#conjItem' + t).addClass('hilite'),
          $('#conjItemB' + t).addClass('hilite'),
          $('.sideItem' + t).css({ opacity: '1' }),
          $('#sideHand' + t).addClass('sideHandsAnimate'),
          $('.forSentence').html(
            window['forConj' + i][t - 1]
              .replace('zzzz', replaceText[verbInList - 1])
              .replace('(', "<b style='opacity:0.5;'>(")
              .replace(')', ')</b>'),
          ),
          'German' == lessonLanguage &&
            127 == lessonNumber &&
            $('.forSentence').html(
              window['forConj' + i][t - 1].replace(
                'zzzz',
                replaceText[verbInList - 1],
              ) +
                ' ' +
                replaceText2[verbInList - 1],
            ),
          $('.forSentence strong').css({ opacity: '0' }));
        var o = $('#sideEnding' + t).offset(),
          r = $('.forSentence strong').offset();
        ($('#conjAnimation').text($('#sideEnding' + t).text()),
          $('#conjAnimation').css({
            left: o.left + 'px',
            top: o.top + 'px',
            opacity: '1',
          }),
          $('#conjAnimation')
            .stop()
            .animate({ left: r.left + 'px', top: r.top + 'px' }, 1500),
          (endingTimer = setTimeout(function () {
            ($('.forSentence strong').css({ opacity: '1' }),
              $('#conjAnimation').css({ opacity: '0' }),
              changeSound());
          }, 1500)),
          $('.engSentence').html(
            window['engConj' + i + verbLetter[verbInList - 1]][t - 1],
          ));
      } else {
        if (
          ($('.conjItems').removeClass('hilite'),
          $('.sideHilites1, .sideHilites2').css({ opacity: '0' }),
          $('.sideHands').removeClass('sideHandsAnimate'),
          $('#conjItem' + t).addClass('hilite'),
          $('#conjItemB' + t).addClass('hilite'),
          $('.sideItem' + t).css({ opacity: '1' }),
          $('#sideHand' + t).addClass('sideHandsAnimate'),
          'German' == lessonLanguage && conjNum >= 4 && 1 == verbInList)
        ) {
          s = window['forConj' + i][t - 1].split('zzzz');
          $('.forSentence').html(s[0] + ' + infinitive');
        } else
          'German' == lessonLanguage && 127 == lessonNumber
            ? $('.forSentence').html(
                window['forConj' + i][t - 1].replace(
                  'zzzz',
                  replaceText[verbInList - 1],
                ) +
                  ' ' +
                  replaceText2[verbInList - 1],
              )
            : $('.forSentence').html(
                window['forConj' + i][t - 1]
                  .replace('zzzz', replaceText[verbInList - 1])
                  .replace('(', "<b style='opacity:0.5;'>(")
                  .replace(')', ')</b>'),
              );
        (1 == t &&
          'French' == lessonLanguage &&
          (-1 != vowels.indexOf(replaceText[verbInList - 1].charAt(0))
            ? $('.forSentence').html(
                window['forConj' + i][t - 1]
                  .replace('zzzz', replaceText[verbInList - 1])
                  .replace('(', "<b style='opacity:0.5;'>(")
                  .replace("je/j' ", "j'"),
              )
            : $('.forSentence').html(
                window['forConj' + i][t - 1]
                  .replace('zzzz', replaceText[verbInList - 1])
                  .replace('(', "<b style='opacity:0.5;'>(")
                  .replace("je/j' ", 'je '),
              )),
          $('.forSentence strong').css({ opacity: '0' }));
        ((o = $('#sideEnding' + t).offset()),
          (r = $('.forSentence strong').offset()));
        ($('#conjAnimation').text($('#sideEnding' + t).text()),
          $('#conjAnimation').css({
            left: o.left + 'px',
            top: o.top + 'px',
            opacity: '1',
          }),
          $('#conjAnimation'),
          $('#conjAnimation')
            .stop()
            .animate({ left: r.left + 'px', top: r.top + 'px' }, 1500),
          (endingTimer = setTimeout(function () {
            ($('.forSentence strong').css({ opacity: '1' }),
              $('#conjAnimation').css({ opacity: '0' }),
              changeSound());
          }, 1500)),
          $('.engSentence').html(
            window['engConj' + i + verbLetter[verbInList - 1]][t - 1],
          ));
      }
      resizeText();
    }
  } else skipConj();
}
function resizeText() {
  ((theFont = 26),
    $('.forSentenceB').css({ fontSize: theFont + 'px' }),
    $('.engSentenceB').hasClass('engSentenceOnly')
      ? $('.engSentenceB').css({ fontSize: theFont + 'px' })
      : $('.engSentenceB').css({ fontSize: '18px' }));
  for (
    var e = $('.textWrapB').width(),
      t = 0.9 * $('.conjContainer').width(),
      i = $('.textWrap2B').width(),
      n = theFont;
    e > t;
    n--
  ) {
    e = $('.textWrapB').width();
    var s = n;
    $('.forSentenceB').css({ fontSize: s + 'px' });
  }
  if ($('.engSentenceB').hasClass('engSentenceOnly'))
    for (var o = theFont; i > t; o--) {
      i = $('.textWrap2B').width();
      var r = o;
      $('.engSentenceB').css({ fontSize: r + 'px' });
    }
  else
    for (o = 18; i > t; o--) {
      i = $('.textWrap2B').width();
      r = o;
      $('.engSentenceB').css({ fontSize: r + 'px' });
    }
  ($('.forSentence').css({ fontSize: theFont + 'px' }),
    $('.forSentence').removeClass('smallFont'),
    $('.engSentence').hasClass('engSentenceOnly')
      ? $('.engSentence').css({ fontSize: theFont + 'px' })
      : $('.engSentence').css({ fontSize: '18px' }));
  for (
    e = $('.textWrap').width(),
      t = 0.96 * $('.ouinoContent').width(),
      i = $('.textWrap2').width(),
      n = theFont;
    e > t;
    n--
  ) {
    e = $('.textWrap').width();
    s = n;
    ($('.forSentence').css({ fontSize: s + 'px' }),
      n < 20 && $('.forSentence').addClass('smallFont'));
  }
  if ($('.engSentence').hasClass('engSentenceOnly'))
    for (o = theFont; i > t; o--) {
      i = $('.textWrap2').width();
      r = o;
      $('.engSentence').css({ fontSize: r + 'px' });
    }
  else
    for (o = 18; i > t; o--) {
      i = $('.textWrap2').width();
      r = o;
      $('.engSentence').css({ fontSize: r + 'px' });
    }
}
function resizeQuizText() {
  var e, t, i;
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
    ($('#boardMain').css({ fontSize: '24px' }),
      (e = $('#writtenAnswer').width()),
      (t = $('#writeAnswerField').width() - 30));
    for (var s = 24; e > t && s > 1; s--)
      ((e = $('#writtenAnswer').width()),
        (i = s),
        $('#boardMain').css({ fontSize: i + 'px' }));
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
var verbTypes,
  userPress = !1,
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
    initiate());
}
function loadQuiz() {
  ($('#backBtn, #menuMain2').removeClass('darker'),
    $('.menuBar').hasClass('noBack') && $('.menuBar').removeClass('noBack'),
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
    '0' ==
      (pastQuizScoreAll =
        null != quizScores ? quizScores[lessonNumber - 1] : '0|0|0|0') &&
      (pastQuizScoreAll = '0|0|0|0'),
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
        .removeEventListener('ended', setTimer2),
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
    loadButtonsQuiz(),
    1 == errorMode &&
      0 !== lessonNumber &&
      (2 === currentQuiz ? loadQuiz2() : 3 === currentQuiz && loadQuiz3()));
}
function loadQuiz2() {
  ($('#keyboardBtn').hide(),
    $('#newScoreUpdate').css({ opacity: '0' }),
    (quizCombinedArray = shuffle(quizMapArray)),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong3.svg)',
    }),
    $(
      '#quizSentenceContainer, #quizAllItemsC, #quizWriteImg, #quizAllItems, #noteBook, #quizAllItemsD, #textureIn',
    ).hide(),
    $('#quizAllItemsB, #quizMultiImg').show(),
    $('#quizMenu').hide(),
    (timerTime = 7e3),
    (quizNumQues = 18),
    conjNum > 2 && 'German' == lessonLanguage && (quizNumQues = 6),
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
    (forExamples = []),
    (engExamples = []),
    $('#newScoreUpdate').css({ opacity: '1' }));
  for (var e = 0; e < numOfConj; e++)
    (forExamples.push(
      window['forConj' + conjNum][e].replace('zzzz', replaceText[3]),
    ),
      engExamples.push(window['engConj' + conjNum + 'C'][e]));
  for (e = 0; e < numOfConj; e++)
    (forExamples.push(
      window['forConj' + conjNum][e].replace('zzzz', replaceText[4]),
    ),
      engExamples.push(window['engConj' + conjNum + 'D'][e]));
  for (e = 0; e < numOfConj; e++)
    (forExamples.push(
      window['forConj' + conjNum][e].replace('zzzz', replaceText[5]),
    ),
      engExamples.push(window['engConj' + conjNum + 'E'][e]));
  if (3 == conjNum && 'German' == lessonLanguage) {
    forExamples = [];
    for (e = 0; e < numOfConj; e++)
      forExamples.push(forConjQuiz[e].replace('zzzz', replaceText[3]));
    for (e = 0; e < numOfConj; e++)
      forExamples.push(forConjQuiz[e].replace('zzzz', replaceText[4]));
    for (e = 0; e < numOfConj; e++)
      forExamples.push(forConjQuiz[e].replace('zzzz', replaceText[5]));
  }
  'French' == lessonLanguage
    ? (-1 != vowels.indexOf(replaceText[3].charAt(0))
        ? (forExamples[0] = forExamples[0].replace("je/j' ", "j'"))
        : (forExamples[0] = forExamples[0].replace("je/j' ", 'je ')),
      -1 != vowels.indexOf(replaceText[4].charAt(0))
        ? (forExamples[6] = forExamples[6].replace("je/j' ", "j'"))
        : (forExamples[6] = forExamples[6].replace("je/j' ", 'je ')),
      -1 != vowels.indexOf(replaceText[5].charAt(0))
        ? (forExamples[12] = forExamples[12].replace("je/j' ", "j'"))
        : (forExamples[12] = forExamples[12].replace("je/j' ", 'je ')))
    : 'German' != lessonLanguage &&
      (forExamples.splice(2, 1),
      forExamples.splice(9, 1),
      forExamples.splice(14, 1),
      engExamples.splice(2, 1),
      engExamples.splice(9, 1),
      engExamples.splice(14, 1));
  var t = shuffle([1, 2, 3, 4, 5, 6]),
    i = shuffle([7, 8, 9, 10, 11, 12]),
    n = shuffle([13, 14, 15, 16, 17, 18]);
  ((quizCombinedArray = t.concat(i.concat(n))),
    $('#wrongAnswerIn').css({
      'background-image': 'url(../../common/quizWrong3.svg)',
    }),
    findAccents(),
    $(
      '#quizAllItemsB, #quizMultiImg, #quizAllItems, #quizAllItemsD, #textureIn',
    ).hide(),
    $(
      '#quizAllItemsC, #quizWriteImg, #quizSentenceContainer, #noteBook',
    ).show(),
    (disableTimer = !0),
    $('#quizMenu').hide(),
    (timerTime = 2e4),
    (quizNumQues = 18),
    1 == errorMode && (quizNumQues = errors.length),
    $('#numberOfQues').text(quizNumQues),
    $('.quizPreloadTitle').text(quizTitle3),
    $('#quizPreloadDescription').text(quizDescription3),
    $('#quizStartImg, #quizPreloadMedal').css({
      'background-image': 'url(../../common/quiz' + currentSecShort + '4.svg)',
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
    var s = new Date(),
      o = [
        (s = s.getDate() + s.format('mmmm') + s.getFullYear()),
        '0',
        '0',
        '0',
        '0',
        '0',
        '1',
      ];
    (localStorage.setItem(storeInfo + 'goalsSTORE', o.join(':')),
      (infoToUpdate = o.join(':')),
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
          (currentQuiz <= 2 || 4 == currentQuiz) && $('#quizTimer').show(),
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
    1 == errorMode && (quizQuesNum = errors[currQuizNum - 1]));
  var e = (quizNumArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ]).indexOf(quizQuesNum);
  (~e && quizNumArray.splice(e, 1),
    setTimeout(function () {
      (resizeButtonQuizText(), resizeQuizText());
    }, 1),
    2 == currentQuiz ? quizActions2() : 3 == currentQuiz && quizActions3());
}
function quizActions2() {
  ($('#puzzleBack').is(':visible') || $('#puzzleBack').fadeIn(),
    0 == extraTime && (7 == currQuizNum || 13 == currQuizNum)
      ? ((extraTime = !0),
        $('.timerMeter > .timerSpan').css({ height: '20px' }),
        $('.timerMeter > .timerSpan').each(function () {
          $(this)
            .width(0)
            .animate({ width: $('.timerMeter').width() }, 2e3);
        }),
        setTimeout(function () {
          ($('.timerMeter > .timerSpan').stop(),
            $('.timerMeter > .timerSpan').css({ width: 0 }),
            setTimeout(resizeQuizText, 10));
        }, 2e3))
      : (extraTime = !1),
    setTimeout(function () {
      ((maxScore = 65),
        (quizPtsCount = 65),
        $('#goodAnswerIn').css({
          'background-image': 'url(../../common/score4.svg)',
        }),
        $('#quizScoreImg').attr('src', '../../common/score4.svg'));
    }, 1e3),
    1 == currQuizNum
      ? ((theConj = conjNum[2]), placePuzzle(), quizTimerAnimate())
      : 7 == currQuizNum
        ? (0 == conjNum[0] ? (theConj = 2) : (theConj = conjNum[8]),
          setTimeout(function () {
            (placePuzzle(), quizTimerAnimate());
          }, 2e3))
        : 13 == currQuizNum
          ? ((theConj = 3),
            setTimeout(function () {
              (placePuzzle(), quizTimerAnimate());
            }, 2e3))
          : ((timerWait = 1500), quizTimerAnimate()));
}
function placePuzzle() {
  var e;
  if (
    ((timerWait = 3500),
    $('#quizAllItemsB').css({ opacity: 0 }),
    $('#quizAllItemsB').html(puzzHTML),
    $('#topPuzzle').html(puzzleMaker),
    (puzzleArray = shuffle(
      (puzzleArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ]),
    )),
    1 == currQuizNum
      ? (e = 3)
      : 7 == currQuizNum
        ? (e = 4)
        : 13 == currQuizNum && (e = 5),
    $('#quizMultiImg').css({
      'background-image': 'url(' + oPath + 'images/pic' + e + '.jpg)',
    }),
    'German' == lessonLanguage && 126 == lessonNumber)
  )
    var t =
      capitalFirst(replaceText2[e]) +
      '<strong>' +
      verbType.toLowerCase() +
      '</strong>';
  else if ('German' == lessonLanguage && 127 == lessonNumber)
    t =
      capitalFirst(replaceText2[e]) +
      replaceText[e] +
      '<strong>' +
      verbType.toLowerCase() +
      '</strong>';
  else
    t =
      capitalFirst(replaceText[e]) +
      '<strong>' +
      verbType.toLowerCase() +
      '</strong>';
  ($('#puzzleTitle').html(
    t + ' (' + englishVerbs[e].toLowerCase() + '): ' + conjTitles[conjNum],
  ),
    conjNum > 2 &&
      'German' == lessonLanguage &&
      $('#puzzleTitle').html(conjTitles[conjNum]),
    $('#quizAllItemsB').animate({ opacity: 1 }),
    loadDrag(),
    'French' == lessonLanguage && -1 != vowels.indexOf(replaceText[e].charAt(0))
      ? $('#puzz1AText').text("j'" + replaceText[e])
      : $('#puzz1AText').text(puzzPron[0] + ' ' + replaceText[e]),
    $('#puzz2AText').text(puzzPron[1] + ' ' + replaceText[e]),
    $('#puzz3AText').text(puzzPron[2] + ' ' + replaceText[e]),
    $('#puzz4AText').text(puzzPron[3] + ' ' + replaceText[e]),
    $('#puzz5AText').text(puzzPron[4] + ' ' + replaceText[e]),
    $('#puzz6AText').text(puzzPron[5] + ' ' + replaceText[e]),
    'German' == lessonLanguage &&
      ($('#puzz1AText').text(
        puzzPron[0] +
          ' ' +
          replaceText[e]
            .split("<b style='color: #ffbd3b;'>")
            .join('')
            .split('</b>')
            .join(''),
      ),
      $('#puzz2AText').text(
        puzzPron[1] +
          ' ' +
          replaceText[e]
            .split("<b style='color: #ffbd3b;'>")
            .join('')
            .split('</b>')
            .join(''),
      ),
      $('#puzz3AText').text(
        puzzPron[2] +
          ' ' +
          replaceText[e]
            .split("<b style='color: #ffbd3b;'>")
            .join('')
            .split('</b>')
            .join(''),
      ),
      $('#puzz4AText').text(
        puzzPron[3] +
          ' ' +
          replaceText[e]
            .split("<b style='color: #ffbd3b;'>")
            .join('')
            .split('</b>')
            .join(''),
      ),
      $('#puzz5AText').text(
        puzzPron[4] +
          ' ' +
          replaceText[e]
            .split("<b style='color: #ffbd3b;'>")
            .join('')
            .split('</b>')
            .join(''),
      ),
      $('#puzz6AText').text(
        puzzPron[5] +
          ' ' +
          replaceText[e]
            .split("<b style='color: #ffbd3b;'>")
            .join('')
            .split('</b>')
            .join(''),
      )),
    conjNum > 3 &&
      'German' == lessonLanguage &&
      ($('#puzz1AText').text(puzzPron[0] + ' '),
      $('#puzz2AText').text(puzzPron[1] + ' '),
      $('#puzz3AText').text(puzzPron[2] + ' '),
      $('#puzz4AText').text(puzzPron[3] + ' '),
      $('#puzz5AText').text(puzzPron[4] + ' '),
      $('#puzz6AText').text(puzzPron[5] + ' ')),
    $('.puzzLeft1').css({ 'background-position': 'left 66.666666%' }),
    $('.puzzLeft2').css({ 'background-position': 'right 0%', right: '115px' }),
    $('.puzzRight1').css({ 'background-position': 'left 0%' }),
    $('.puzzRight2').css({ 'background-position': 'right 66.666666%' }),
    $('.puzzQues').droppable('option', 'disabled', !1),
    $('.puzzAnswer').show(),
    $('#puzzle1A').val(allQuizEndings[0]),
    $('#puzzle2A').val(allQuizEndings[1]),
    $('#puzzle3A').val(allQuizEndings[2]),
    $('#puzzle4A').val(allQuizEndings[3]),
    $('#puzzle5A').val(allQuizEndings[4]),
    $('#puzzle6A').val(allQuizEndings[5]),
    (puzzPos = shuffle(puzzPos)),
    $('#puzzle1B').css({ top: puzzPos[0] }),
    $('#puzzle2B').css({ top: puzzPos[1] }),
    $('#puzzle3B').css({ top: puzzPos[2] }),
    $('#puzzle4B').css({ top: puzzPos[3] }),
    $('#puzzle5B').css({ top: puzzPos[4] }),
    $('#puzzle6B').css({ top: puzzPos[5] }),
    $('#puzz1BText').text(allQuizEndings[0]),
    $('#puzz2BText').text(allQuizEndings[1]),
    $('#puzz3BText').text(allQuizEndings[2]),
    $('#puzz4BText').text(allQuizEndings[3]),
    $('#puzz5BText').text(allQuizEndings[4]),
    $('#puzz6BText').text(allQuizEndings[5]),
    7 == conjNum &&
      ($('#puzzle1A').val('-'),
      $('#puzz1AText').text('(yo)'),
      $('#puzz1BText').text('-')),
    'German' == lessonLanguage &&
      127 == lessonNumber &&
      ($('#puzzle1A').val(allQuizEndings[0] + ' ' + replaceText2[e]),
      $('#puzzle2A').val(allQuizEndings[1] + ' ' + replaceText2[e]),
      $('#puzzle3A').val(allQuizEndings[2] + ' ' + replaceText2[e]),
      $('#puzzle4A').val(allQuizEndings[3] + ' ' + replaceText2[e]),
      $('#puzzle5A').val(allQuizEndings[4] + ' ' + replaceText2[e]),
      $('#puzzle6A').val(allQuizEndings[5] + ' ' + replaceText2[e]),
      $('#puzz1BText').text(allQuizEndings[0] + ' ' + replaceText2[e]),
      $('#puzz2BText').text(allQuizEndings[1] + ' ' + replaceText2[e]),
      $('#puzz3BText').text(allQuizEndings[2] + ' ' + replaceText2[e]),
      $('#puzz4BText').text(allQuizEndings[3] + ' ' + replaceText2[e]),
      $('#puzz5BText').text(allQuizEndings[4] + ' ' + replaceText2[e]),
      $('#puzz6BText').text(allQuizEndings[5] + ' ' + replaceText2[e])),
    setTimeout(function () {
      resizeQuiz();
    }, 100));
}
function removePuzzle() {
  for (var e = 1; e <= 5; e++) {
    var t = puzzleArray.pop();
    $('#puz' + t).css({ opacity: '0' });
  }
}
function quizActions3() {
  var e;
  (1 == currQuizNum
    ? ($('#quizWriteImg').css({
        'background-image': 'url(' + oPath + 'images/pic3.jpg)',
      }),
      (currentVerb = 3))
    : 7 == currQuizNum
      ? ($('#quizWriteImg').css({
          'background-image': 'url(' + oPath + 'images/pic4.jpg)',
        }),
        (currentVerb = 4))
      : 13 == currQuizNum &&
        ($('#quizWriteImg').css({
          'background-image': 'url(' + oPath + 'images/pic5.jpg)',
        }),
        (currentVerb = 5)),
    $('#boardMain').html(''),
    $('#quizSentenceFor, #quizSentenceEng').hide(),
    setTimeout(function () {
      ((maxScore = 50),
        (quizPtsCount = 50),
        $('#quizScoreBack').css({
          'background-image': 'url(../../common/scoreBack4.svg)',
        }),
        $('#goodAnswerIn2').css({
          'background-image': 'url(../../common/score4.svg)',
        }),
        $('#quizScoreImg').attr('src', '../../common/score4.svg'));
    }, 500),
    (submitted = !1),
    $('#specialChars, .boardTop').show(),
    $('#boardMain').removeClass('topAlign'),
    $('#writeError, #writeError2').closest('tr').hide(),
    $('#writeAnswerField').val(''),
    $('.wrongLogo').hide(),
    (foundArticle = ''));
  var t = forExamples[quizQuesNum - 1].split('<strong>');
  if (
    ((e = t[1].split('</strong>').join('')),
    (writtenString = e),
    $('#quizSentenceFor').html(
      t[0] +
        "<strong style='font-family: Arial, Helvetica, sans-serif;'>____</strong>",
    ),
    'German' == lessonLanguage &&
      127 == lessonNumber &&
      $('#quizSentenceFor').html(
        t[0] +
          "<strong style='font-family: Arial, Helvetica, sans-serif;'>____</strong> " +
          replaceText2[currentVerb],
      ),
    conjNum > 2 && 'German' == lessonLanguage)
  ) {
    var i = (t = forExamples[quizQuesNum - 1].split('<strong>'))[1].split(
      '</strong>',
    );
    ((e = i[0]),
      (writtenString = e),
      $('#quizSentenceFor').html(
        t[0] +
          "<strong style='font-family: Arial, Helvetica, sans-serif;'>____</strong> " +
          i[1],
      ));
  }
  ($('#quizSentenceEng').html(engExamples[quizQuesNum - 1]),
    '-' == e &&
      ((disableTimer = !1),
      (currentPts += 65),
      $('#currentScore').text(currentPts),
      currQuizNum++,
      afterSoundAction()),
    $('em, strong').css({ color: '#ebbc31' }));
  for (var n = 0; n < articleArray.length; n++)
    0 == writtenString.indexOf(articleArray[n]) &&
      (foundArticle = articleArray[n]);
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
  for (n = 0; n < allChars.length; n++)
    -1 != quizGoodPunct.indexOf(allChars[n]) && (timerTime += 3e3);
  letterArray = [];
  for (n = 0; n < allLetters.length; n++) letterArray.push(n);
  ((letterArray = shuffle(letterArray)), (letterArrayNum = 0));
  var s = wArr.length;
  quizDisplayAnswer = '';
  var o = 0;
  for (n = 0; n < s; n++)
    ' ' == wArr[n]
      ? (quizDisplayAnswer += '<span class="spanBlank">&nbsp;</span>')
      : '.' == wArr[n] ||
          '?' == wArr[n] ||
          '!' == wArr[n] ||
          "'" == wArr[n] ||
          ',' == wArr[n] ||
          '¡' == wArr[n] ||
          '¿' == wArr[n] ||
          '-' == wArr[n] ||
          '_' == wArr[n]
        ? (quizDisplayAnswer =
            quizDisplayAnswer +
            '<span class="spanBlank">' +
            wArr[n] +
            '</span>')
        : 'i' == wArr[n] || 'I' == wArr[n] || 'l' == wArr[n]
          ? ((quizDisplayAnswer =
              quizDisplayAnswer +
              '<span id="letter' +
              o +
              '" class="allLetters"><i class="invisible">' +
              wArr[n] +
              '&nbsp;</i></span>'),
            o++)
          : ((quizDisplayAnswer =
              quizDisplayAnswer +
              '<span id="letter' +
              o +
              '" class="allLetters"><i class="invisible">' +
              wArr[n] +
              '</i></span>'),
            o++);
  ((quizDisplayAnswer =
    '' != foundArticle
      ? foundArticle +
        '<span class="spanBlank"></span><b >' +
        quizDisplayAnswer +
        '</b>'
      : '<b >' + quizDisplayAnswer + '</b>'),
    $('#englishWrite').html(engExamples[quizQuesNum - 1]),
    ('mobile' == currentDevice && 1 != externalKeyboard) ||
      ((focused = !0), $('#writeAnswerField').focus()),
    1 == checkAccent && findAccent(),
    setTimeout(resizeQuizText, 10),
    $('#quizSentenceFor, #quizSentenceEng').fadeIn(),
    (scrambled = quizGoodPunct.split(' ')));
  for (n = 0; n < scrambled.length; n++) {
    var r = scrambled[n].split('');
    scrambled[n] = shuffle(r);
  }
  scrambled = scrambled.join().split(',');
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
          .join('ss'),
        t = removeAccent(e),
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
          .join('ss'),
        n = removeAccent(i),
        s = [],
        o = e.length,
        r = 0;
      r < o;
      r++
    )
      e.charAt(r) != i.charAt(r) && s.push(r);
    if (i.length <= o - 1) {
      var a = s[0],
        l = e.slice(a);
      ((m = 0 != a ? i.slice(a + -1) : '%' + i), (s = []));
      for (r = 0; r < l.length; r++)
        l.charAt(r) != m.charAt(r) && s.push(r + a);
    }
    if (i.length == o - 2) {
      var c,
        d = s[1],
        u = e.slice(d);
      ((c = 0 != d ? i.slice(d - 2) : '%' + i), (s = s.slice(0, 1)));
      for (r = 0; r < l.length; r++)
        u.charAt(r) != c.charAt(r) && s.push(r + d);
    }
    if (i.length == o + 1) {
      var m;
      ((a = s[0]), (l = e.slice(a)));
      ((m = i.slice(a + 1)), (s = []));
      for (r = 0; r < l.length; r++)
        l.charAt(r) != m.charAt(r) && s.push(r + a);
    }
    s.length;
    if (e == i) {
      if (
        ('mobile' == currentDevice &&
          0 == externalKeyboard &&
          ((focused = !1), $('#writeAnswerField').blur()),
        submitted)
      )
        return;
      ((submitted = !0),
        $('#quizSentenceFor').html(forExamples[quizQuesNum - 1]),
        'German' == lessonLanguage &&
          127 == lessonNumber &&
          $('#quizSentenceFor').html(
            forExamples[quizQuesNum - 1] + ' ' + replaceText2[currentVerb],
          ),
        $('strong').css({ color: '#ebbc31' }),
        (currentPts += 50),
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
    } else
      t == n
        ? ('mobile' == currentDevice &&
            0 == externalKeyboard &&
            ((focused = !1), $('#writeAnswerField').blur()),
          $('#quizSentenceFor').html(forExamples[quizQuesNum - 1]),
          'German' == lessonLanguage &&
            127 == lessonNumber &&
            $('#quizSentenceFor').html(
              forExamples[quizQuesNum - 1] + ' ' + replaceText2[currentVerb],
            ),
          $('strong').css({ color: '#ebbc31' }),
          (currentPts -= 5),
          $('#currentScore').text(currentPts),
          playSprite('pause'),
          $('#boardMain').addClass('topAlign'),
          $('#boardMain').html(e),
          $('#writeError').html(
            'Good!&nbsp;But&nbsp;watch the&nbsp;accents...',
          ),
          $('.boardTop, #specialChars').hide(),
          $('#writeError, #writeError2').closest('tr').show())
        : (playSprite('quizBad'),
          currentErrors++,
          -1 == errors.indexOf(quizQuesNum) && errors.push(quizQuesNum),
          $('#currentErrors').text(currentErrors),
          $('#goodAnswer').stop(!0, !0),
          $('#goodAnswer').css({ opacity: '0' }),
          $('#wrongLogo2').is(':visible')
            ? ($('#boardMain').addClass('topAlign'),
              $('#boardMain').html(e),
              $('#writeError').html(
                'Oops!&nbsp;Here&nbsp;is&nbsp;the right&nbsp;answer...',
              ),
              $('.boardTop, #specialChars').hide(),
              $('#writeError, #writeError2').closest('tr').show(),
              'mobile' == currentDevice &&
                0 == externalKeyboard &&
                ((focused = !1), $('#writeAnswerField').blur()),
              $('#wrongLogo3').show())
            : $('#wrongLogo1').is(':visible')
              ? $('#wrongLogo2').show()
              : $('#wrongLogo1').show(),
          madeError ||
            ((currentPts -= 50),
            $('#wrongAnswerPic, #wrongAnswer').addClass('opacityAnimate'),
            setTimeout(function () {
              $('#wrongAnswerPic, #wrongAnswer').removeClass('opacityAnimate');
            }, 2100),
            $('#currentScore').text(currentPts),
            (madeError = !0)));
  }
}
function fluentWrong() {
  (madeError ||
    ((currentPts -= 65),
    $('#currentScore').text(currentPts),
    $('#wrongAnswerPic').addClass('opacityAnimate'),
    setTimeout(function () {
      $('#wrongAnswerPic').removeClass('opacityAnimate');
    }, 2100),
    (madeError = !0)),
    $('#boardMain').addClass('topAlign'),
    4 == currentQuiz && viewportHeight < 500
      ? $('#writeError').html('Oops!&nbsp;Type&nbsp;the&nbsp;answer...')
      : $('#writeError').html(
          'Oops!&nbsp;Type&nbsp;the&nbsp;answer to&nbsp;continue...',
        ),
    $('.boardTop').hide(),
    $('#writeError').show(),
    $('#quizTimerPointer').stop(!0, !0),
    clearTimeout(timerDelay),
    $('#quizTimerImage').css({
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
      o = [
        (s = s.getDate() + s.format('mmmm') + s.getFullYear()),
        '0',
        '0',
        '0',
        '0',
        '0',
        '1',
      ];
    (localStorage.setItem(storeInfo + 'goalsSTORE', o.join(':')),
      (infoToUpdate = o.join(':')),
      (fieldToUpdate = 'goals'),
      updateDatabase());
  }
  ($('#pauseWrap').is(':visible') && $('#pauseWrap').hide(),
    $('#pronounWarn').hide(),
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
    'German' == lessonLanguage
      ? $('#sideTitle').html('Conjugation (' + conjTitles[conjNum] + ')')
      : $('#sideTitle').html(
          '<strong>' +
            verbType +
            '</strong> Endings (' +
            conjTitles[conjNum] +
            ')',
        ));
  for (var r = 1; r <= numOfConj; r++)
    ($('#sideEnding' + r).text(allEndings[r - 1]),
      $('#sideForItem' + r).text(conjID[r - 1]),
      $('#sideEngItem' + r).text(conjID2[r - 1]));
  if (
    (1 != soundLessonEvent &&
      (document
        .getElementById('mainSound')
        .addEventListener('ended', setTimer2),
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
    '' != lastNum)
  ) {
    var a = [0];
    (a.push(narration.length),
      a.push(numOfPers + narration.length),
      a.push(2 * numOfPers + narration.length));
    for (var l = a.length - 1; l >= 0; l--)
      lastNum > a[l] && ((currentWordNum = a[l]), (l = -2));
    (changeWord(), (currentWordNum = lastNum));
  }
  (changeWord(), resizePage());
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
    $('.closeWinBtn3').on('click', function () {
      $('.menuConj').removeClass('centerDiv');
    }),
    $('.closeWinBtn, #verbWrap').on('click', function () {
      ($('.menuVerb').removeClass('centerDiv'),
        $('#verbWrap').hide(),
        playPres());
    }),
    $('.starQuestion, .starQuestion2, #starConjWarn').on('click', function () {
      ($('#menuVerbContent').html(personText),
        resizeVerbMenu(),
        $('#menuVerbContent').hasClass('centerDiv') ||
          ($('.menuVerb').addClass('centerDiv'),
          $('#verbWrap').show(),
          pausePres()));
    }),
    $('.conjItems, .sideHilites1, .sideHilites2').on('click', function () {
      (currentWordNum < narration.length &&
        ($('.sideLabels').css({ background: btnColor[1] }),
        $('#sideLabel2').css({ background: '#ebbc31' }),
        $('.mainPic2, .mainPic1').css({
          'background-image': 'url(' + imageArray[0] + ')',
        })),
        (picControl = 'picFade'));
      var e = $(this)
        .attr('id')
        .replace('sh', '')
        .replace('conjItem', '')
        .replace('B', '');
      if (verbInList > 1) {
        var t = (verbInList - 1) * numOfPers;
        currentWordNum = parseInt(e) + t + narration.length;
      } else currentWordNum = parseInt(e) + narration.length;
      changeWord();
    }),
    $('.sideLabels').on('click', buttonClicked),
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
    $('#pauseBtn').on('click', function () {
      ($('#conjAnimation').stop(!0, !0), togglePause());
    }),
    $('#pauseWrap').on('click', togglePause),
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
      }),
      $('.conjItems, .sideHilites1, .sideHilites2')
        .on('mouseover', function () {
          var e = $(this)
            .attr('id')
            .replace('sh', '')
            .replace('conjItem', '')
            .replace('B', '');
          ($(
            '#conjItem' +
              e +
              ', #conjItemB' +
              e +
              ', #sideForItem' +
              e +
              ', #sideEngItem' +
              e,
          ).addClass('conjItemsHover'),
            $('#conjItem' + e + ' strong, #sideEnding' + e).addClass(
              'conjItemsHover2',
            ));
        })
        .on('mouseout', function () {
          ($('.conjItems, .sideForItems, .sideEngItems').removeClass(
            'conjItemsHover',
          ),
            $('.conjItems strong, .sideEndings').removeClass(
              'conjItemsHover2',
            ));
        }),
      $('.sideLabels').hover(function () {
        $(this).toggleClass('sideLabelsHover');
      }),
      $('.starQuestion, .starQuestion2, #starConjWarn').hover(function () {
        ($('#arrowLabel').text('CONJUGATION INFORMATION'),
          $('.instructions').toggleClass('showDiv'));
      })),
    $('.sideLabels').on('click', buttonClicked));
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
        $('#writeError2').on('touchstart mousedown', function (e) {
          (e.preventDefault(),
            $('#writeAnswerField').val(quizGoodAnswer),
            checkWrittenAnswer());
        }),
        $('.boardChar')
          .on('touchstart', function () {
            $(this).addClass('quizIconBig');
          })
          .on('touchend touchcancel', function () {
            $(this).removeClass('quizIconBig');
          }))
      : ($('.boardChar').hover(function () {
          $(this).toggleClass('quizIconBig');
        }),
        $('#writeError2').hover(function () {
          $(this).toggleClass('fullOpacity');
        }),
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
function loadQuizSound() {
  var e;
  ($('#mainSound').trigger('pause'),
    (e = quizSounds[quizQuesNum - 1]),
    $('#mainSound').attr('src', e),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playQuizSound));
}
function playQuizSound() {
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
  }, 300);
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
          }, 500),
          $('.timerMeter > .timerSpan').css({ height: '20px' }),
          void $('.timerMeter > .timerSpan').each(function () {
            $(this)
              .width(0)
              .animate({ width: $('.timerMeter').width() }, 500);
          }))
        : (3 == currentQuiz
            ? $('#quizDoneSentence').hide()
            : $('#quizDoneSentence').show(),
          void setTimeout(function () {
            doneQuiz();
          }, 1500))
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
                    $('#quizScoreBack').css({
                      'background-image': 'url(../../common/scoreBack3.svg)',
                    }),
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
                          $('#quizScoreBack').css({
                            'background-image':
                              'url(../../common/scoreBack3.svg)',
                          }),
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
                                $('#quizScoreBack').css({
                                  'background-image':
                                    'url(../../common/scoreBack1.svg)',
                                }),
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
    var t, i, n = e.length;
    n;
    t = Math.floor(Math.random() * n), i = e[--n], e[n] = e[t], e[t] = i
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
      'Spanish' == lessonLanguage &&
        lessonNumber >= 132 &&
        lessonNumber <= 134 &&
        (noQuizOn = !0),
      'Portuguese' == lessonLanguage &&
        lessonNumber >= 132 &&
        lessonNumber <= 134 &&
        (noQuizOn = !0),
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
      1 == verbTypeNum
        ? ($('#sideConj, .wordSentence, .conjContainer,.shinyPicture').addClass(
            'greenGradient',
          ),
          (imageArray[0] = '../../common/puzzGreen.jpg'))
        : 2 == verbTypeNum || 4 == verbTypeNum
          ? ($(
              '#sideConj, .wordSentence, .conjContainer,.shinyPicture',
            ).addClass('blueGradient'),
            (imageArray[0] = '../../common/puzzBlue.jpg'))
          : 3 == verbTypeNum &&
            ($(
              '#sideConj, .wordSentence, .conjContainer,.shinyPicture',
            ).addClass('redGradient'),
            (imageArray[0] = '../../common/puzzRed.jpg')),
      (audioSprite = document.getElementById('sfxSprite')).addEventListener(
        'timeupdate',
        onTimeUpdate,
        !1,
      ),
      $('#answerForm').append(
        '<input type="text" id="writeAnswerField" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type Answer Here"/>',
      ),
      $('.playbackOptions').hide(),
      null == sessionStorage.LOGGEDIN && loadLogIn(),
      $('.timerMeter > .timerSpan').css({ background: btnColor[0], width: 0 }),
      1 == verbTypeNum
        ? $('#background').addClass('greenGradient2')
        : 2 == verbTypeNum || 4 == verbTypeNum
          ? $('#background').addClass('blueGradient2')
          : 3 == verbTypeNum && $('#background').addClass('redGradient2'),
      $('.sideLabels').css({ background: btnColor[1] }),
      $('.mainPic1').css({
        'background-image': 'url(' + oPath + 'images/pic0.jpg)',
      }),
      'French' == lessonLanguage
        ? ($(
            '.starQuestion, .starQuestion2, #pronounWarn, #starConjWarn, .lineJoiner',
          ).hide(),
          sameStars())
        : 'Italian' == lessonLanguage
          ? ($('#starQues1').css({ top: '41%' }),
            $('#starQues2, #starQues2b, #lineJoin2, #starConjSame').hide())
          : 'Spanish' == lessonLanguage || 'Portuguese' == lessonLanguage
            ? $('#starConjSame').hide()
            : 'German' == lessonLanguage &&
              ($(
                '#starConjSame, .starQuestion, .starQuestion2, .lineJoiner',
              ).hide(),
              3 == conjNum &&
                'German' == lessonLanguage &&
                $('#quizBtn2').hide(),
              $('#starConjWarn').html(
                '<img src="../../common/iconStar2.svg">Learn more about <strong>Sie</strong> (the formal you).',
              )),
      7 == conjNum &&
        $(
          '.starQuestion, .starQuestion2, #pronounWarn, #starConjWarn, .lineJoiner',
        ).hide(),
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
          btnColor[2] +
          ',' +
          btnColor[3] +
          ')',
      }),
      (1 == verbTypeNum ||
        2 == verbTypeNum ||
        4 == verbTypeNum ||
        3 == verbTypeNum) &&
        $('.sideHilites1, .sideHilites2').css({ background: '' }),
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
var personText = '';
'Italian' == lessonLanguage
  ? ((verbTypes = ['ARE', 'ERE', 'IRE']),
    (personText =
      '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Italian Conjugation with <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b></h3><p><b class="bullet">&bull;</b> The Italian subject pronoun <b class="yellowText">Lei</b> is the singular formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The Italian subject pronoun <b class="yellowText">Loro</b>, is the plural formal "you". It is used when talking to more than one person in a VERY formal manner.<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Lei</b> is conjugated to the third person singular and <b class="yellowText">Loro</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course, the third person conjugation is simply copied for <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Lei</b> and <b class="yellowText">Loro</b> are conjugated to the third person.<br><b class="bullet">&bull;</b> Note that <b class="yellowText">Lei</b> also means "she" and that <b class="yellowText">Loro</b> also means "they", but that they are capitalized when they are the equivalent of "you", even in the middle of a sentence.<br></p>'))
  : 'Spanish' == lessonLanguage
    ? ((verbTypes = ['AR', 'ER', 'IR']),
      (personText =
        '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Spanish Conjugation with <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b></h3><p><b class="bullet">&bull;</b> The Spanish subject pronoun <b class="yellowText">Usted</b> is the formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The Spanish subject pronoun <b class="yellowText">Ustedes</b>, is the plural "you". It is used when talking to more than one person.<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Usted</b> is conjugated to the third person singular and <b class="yellowText">Ustedes</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course the third person conjugation is simply copied for <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Usted</b> and <b class="yellowText">Ustedes</b> are conjugated to the third person.</p>'))
    : 'Portuguese' == lessonLanguage
      ? ((verbTypes = ['AR', 'ER', 'IR']),
        (personText =
          '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">Portuguese Conjugation with <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b></h3><p><b class="bullet">&bull;</b> The Portuguese subject pronoun <b class="yellowText">Você</b> is the most common "you" in Brazil. It is used when talking to one person.<br><b class="bullet">&bull;</b> However, in Portugal, the pronoun <b class="yellowText">Tu</b> is the most common informal form when talking to one person.<br><b class="bullet">&bull;</b> If you wish to keep it very formal, you can use <b class="yellowText">O senhor</b> (to a man) or <b class="yellowText">A senhora</b> (to a woman) instead of <b class="yellowText">Você</b> in both Portugal and Brazil.<br><b class="bullet">&bull;</b> The Portuguese subject pronoun <b class="yellowText">Vocês</b> is the plural "you". It is used when talking to more than one person.<br><b class="bullet">&bull;</b> Even though <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b> are the equivalent of "you", they are conjugated to the third person, not the second person. <b class="yellowText">Você</b> is conjugated to the third person singular and <b class="yellowText">Vocês</b> is conjugated to the third person plural.<br><b class="bullet">&bull;</b> This can be confusing for English speakers, therefore, in this course the third person conjugation is simply copied for <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Você</b> and <b class="yellowText">Vocês</b> are conjugated to the third person.</p>'))
      : 'French' == lessonLanguage
        ? (verbTypes = ['ER', 'IR', 'RE'])
        : 'German' == lessonLanguage &&
          ((verbTypes = ['EN', 'EN', 'EN', 'N']),
          (personText =
            '<h3><img id="menuVerbImage" src="../../common/verbLogo5.svg">German Conjugation with <b class="yellowText">Sie</b> and <b class="yellowText">sie</b></h3><p><b class="bullet">&bull;</b> The German subject pronoun <b class="yellowText">Sie</b> (uppercase S) is the formal "you". It is used to show respect or to keep a certain formality with someone.<br><b class="bullet">&bull;</b> The German subject pronoun <b class="yellowText">sie</b> (lowercase S), is the equivalent of "they" and "she".<br><b class="bullet">&bull;</b> It is important to note, however, that even though <b class="yellowText">Sie</b> is the equivalent of "you", it is conjugated to the third person plural, not the second person. This can be confusing for English speakers, therefore, in this course the third person plural conjugation is simply copied for <b class="yellowText">Sie</b> and <b class="yellowText">sie</b>, this gives you a better visual learning experience.<br><b class="bullet">&bull;</b> However, you should know that it is not actually the same conjugation, but that <b class="yellowText">Sie</b> is conjugated to the third person plural.</p>'));
var verbType = verbTypes[verbTypeNum - 1];
if ('German' != lessonLanguage)
  var lessonTitle =
    conjTitles[conjNum] + ': Regular ' + verbType + ' Verb Endings';
var proWarning =
    'Note:&nbsp;' +
    lessonLanguage +
    '&nbsp;subject&nbsp;pronouns&nbsp;are&nbsp;often&nbsp;omitted. However,&nbsp;to&nbsp;facilitate&nbsp;learning, ' +
    lessonLanguage +
    '&nbsp;subject&nbsp;pronouns are used more in this course than they would be used in real life.',
  puzzHTML =
    '<div id="puzzleTitle" class="selectOff"></div><div id="puzzle1A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz1AText" class="puzzTXT"></span></div><div id="puzzle1B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz1BText" class="puzzTXT2"></span></div><div id="puzzle2A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz2AText" class="puzzTXT"></span></div><div id="puzzle2B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz2BText" class="puzzTXT2"></span></div><div id="puzzle3A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz3AText" class="puzzTXT"></span></div><div id="puzzle3B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz3BText" class="puzzTXT2"></span></div><div id="puzzle4A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz4AText" class="puzzTXT"></span></div><div id="puzzle4B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz4BText" class="puzzTXT2"></span></div><div id="puzzle5A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz5AText" class="puzzTXT"></span></div><div id="puzzle5B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz5BText" class="puzzTXT2"></span></div><div id="puzzle6A" class="puzzQues selectOff"><div class="puzzLeft1"></div><div class="puzzLeft2"></div><span id="puzz6AText" class="puzzTXT"></span></div><div id="puzzle6B" class="puzzAnswer selectOff"><div class="puzzRight1"></div><div class="puzzRight2"></div><span id="puzz6BText" class="puzzTXT2"></span></div>';
function capitalFirst(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function setTimer2() {
  if (1 == handAnimateOn) {
    var e = $('.forSentence strong').offset();
    ($('#wandAnimation').css({
      left: e.left + 80 + 'px',
      top: e.top + 10 + 'px',
      '-webkit-transform': 'rotate(40deg)',
      transform: 'rotate(40deg)',
    }),
      $('#stemAnimation').css({
        left: e.left - 120 + 'px',
        top: e.top - 80 + 'px',
      }),
      $('#wandAnimation').fadeIn(499, function () {
        ($('#wandAnimation').css({
          '-webkit-transform': 'rotate(-40deg)',
          transform: 'rotate(-40deg)',
        }),
          playSprite('shimmer'),
          $('#stemAnimation').show(),
          $('.forSentence strong').hide(),
          setTimer());
      }));
  } else setTimer();
}
function sameStars() {
  -1 != [114, 115, 117, 119, 121, 123, 125, 127, 128, 129].indexOf(lessonNumber)
    ? $('#conjTD1, #conjTD2, #conjTD3, #conjTD6').append(
        '<img class="sideStars" src="../../common/iconStar2b.svg">',
      )
    : -1 != [118, 122].indexOf(lessonNumber)
      ? $('#conjTD1, #conjTD2, #conjTD3').append(
          '<img class="sideStars" src="../../common/iconStar2b.svg">',
        )
      : -1 != [116, 120, 124].indexOf(lessonNumber) &&
        ($('#conjTD1, #conjTD5').append(
          '<img class="sideStars" src="../../common/iconStar2b.svg">',
        ),
        $('#conjTD2, #conjTD3').append(
          '<img class="sideStars" src="../../common/iconStar2c.svg">',
        ),
        $('#conjTD4, #conjTD6').append(
          '<img class="sideStars" src="../../common/iconStar2d.svg">',
        ),
        $('#starConjSame img').attr('src', '../../common/iconStar2e.svg'));
}
var dateFormat = (function () {
  var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
    t =
      /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    i = /[^-+\dA-Z]/g,
    n = function (e, t) {
      for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e;
      return e;
    };
  return function (s, o, r) {
    var a = dateFormat;
    if (
      (1 != arguments.length ||
        '[object String]' != Object.prototype.toString.call(s) ||
        /\d/.test(s) ||
        ((o = s), (s = void 0)),
      (s = s ? new Date(s) : new Date()),
      isNaN(s))
    )
      throw SyntaxError('invalid date');
    'UTC:' == (o = String(a.masks[o] || o || a.masks.default)).slice(0, 4) &&
      ((o = o.slice(4)), (r = !0));
    var l = r ? 'getUTC' : 'get',
      c = s[l + 'Date'](),
      d = s[l + 'Day'](),
      u = s[l + 'Month'](),
      m = s[l + 'FullYear'](),
      p = s[l + 'Hours'](),
      g = s[l + 'Minutes'](),
      h = s[l + 'Seconds'](),
      z = s[l + 'Milliseconds'](),
      v = r ? 0 : s.getTimezoneOffset(),
      b = {
        d: c,
        dd: n(c),
        ddd: a.i18n.dayNames[d],
        dddd: a.i18n.dayNames[d + 7],
        m: u + 1,
        mm: n(u + 1),
        mmm: a.i18n.monthNames[u],
        mmmm: a.i18n.monthNames[u + 12],
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
        l: n(z, 3),
        L: n(z > 99 ? Math.round(z / 10) : z),
        t: 12 > p ? 'a' : 'p',
        tt: 12 > p ? 'am' : 'pm',
        T: 12 > p ? 'A' : 'P',
        TT: 12 > p ? 'AM' : 'PM',
        Z: r ? 'UTC' : (String(s).match(t) || ['']).pop().replace(i, ''),
        o:
          (v > 0 ? '-' : '+') +
          n(100 * Math.floor(Math.abs(v) / 60) + (Math.abs(v) % 60), 4),
        S: ['th', 'st', 'nd', 'rd'][
          c % 10 > 3 ? 0 : (((c % 100) - (c % 10) != 10) * c) % 10
        ],
      };
    return o.replace(e, function (e) {
      return e in b ? b[e] : e.slice(1, e.length - 1);
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
