var cacheName2, cacheURL2, nOrp;
'pwa' == osType &&
  ((cacheName2 = lessonLanguage + 'LessonCache'),
  (cacheURL2 =
    'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/'));
var oPath3 = '../../';
'androidSTORE' == osType &&
  (oPath3 = 'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/');
var doNotTimer,
  charToAdd,
  maxScore = 65,
  doNot = !1,
  insightOn = !1,
  defArr = [];
function strip(e) {
  return (e = (e = e.toLowerCase().split(' ').join('')).replace(
    /[.,\/#!$%?\¿^’&\*;':¡{}=\-_`~()]/g,
    '',
  ));
}
function strip2(e) {
  return (e = e
    .toLowerCase()
    .split(' ')
    .join('')
    .split('&nbsp;')
    .join('')
    .replace(/<[^>]*>/g, ''));
}
var insightExclude = [
  '<div><strong>¿</strong>',
  '<div><strong>¡</strong>',
  '<div><strong>?</strong>',
  '<div><strong>!</strong>',
  '<div><strong>,</strong>',
  '<strong>¿ ?</strong>',
  '<strong>¡ !</strong>',
];
function excluded(e) {
  for (var t = 0; t < insightExclude.length; t++)
    if (-1 !== e.indexOf(insightExclude[t])) return !0;
  return !1;
}
function loadInsight() {
  if (!insightOn) {
    var e = document.createElement('script');
    return (
      (e.src = 'insight.js'),
      (e.onload = function () {
        if ('block' == currentSecShort)
          for (var e, t = 0; t < definitions.length; t++)
            -1 != definitions[t].indexOf('<h2>')
              ? ((e = definitions[t].split('<h2>').join('').split('</h2>')),
                defArr.push(strip(e[0])))
              : defArr.push('');
        ((insightOn = !0), loadInsight());
      }),
      (e.onerror = function () {
        console.error('Error loading the script.');
      }),
      document.head.appendChild(e),
      $('body').append(
        '<div id="insightLoader"><div id="insightCont"></div><div id="insightClose">X</div></div>',
      ),
      $('#insightLoader').on('click', function (e) {
        e.target == this && (playPres(), $('#insightLoader').fadeOut());
      }),
      $('.insight').removeClass('fullOpacity'),
      $('.insightLabel').fadeOut(200),
      void localStorage.setItem(storeInfo + 'insight', 'true')
    );
  }
  if ((pausePres(), 'block' == currentSecShort)) {
    strip($('.forSentence').text());
    e = defArr.indexOf(strip($('.forSentence').text()));
    -1 != e
      ? $('#insightCont').html(definitions[e])
      : $('#insightCont').html('There is no smart insight for this sentence.');
  } else if (definitions[currentWordNum].length < 10)
    $('#insightCont').html('There is no smart insight for this sentence.');
  else {
    for (
      var t = definitions[currentWordNum].split('</div>'), o = [], n = 0;
      n < t.length;
      n++
    )
      excluded(t[n]) || o.push(t[n]);
    ((t = (t = o.join('</div>'))
      .split('<strong>¿')
      .join('<strong>')
      .split('<strong>¡')
      .join('<strong>')
      .split('?</strong>')
      .join('</strong>')
      .split('!</strong>')
      .join('</strong>')),
      $('#insightCont').html(t));
  }
  (-1 != $('#insightLoader').html().indexOf('<h2>')
    ? $('#insightCont').removeClass('vocabInsight')
    : $('#insightCont').addClass('vocabInsight'),
    $('#insightLoader').show());
}
var lastNum,
  saveTime,
  currL = currentSecShort.charAt(2) + lessonNumber + '|',
  loadLast = !0;
function forSearch(e) {
  '' != e &&
    (0 != $('#dictFrame2').length
      ? $('#dictFrame2, #dictFrame').remove()
      : ($('body').append(
          '<iframe id="dictFrame" src="../../dict/index.html"></iframe><div id="dictFrame2"><div>X</div></div>',
        ),
        pausePres(),
        $('#dictFrame').load(function () {
          ($('#dictFrame').contents().find('#searchBox').val(e),
            $('#dictFrame')[0].contentWindow.forTrans());
        }),
        $('#dictFrame2').on('click', function () {
          ($('#dictFrame2, #dictFrame').remove(), removeSelect(), playPres());
        }),
        0 == dictAdded &&
          ($('#menuBtn, #optionBtn, #pauseBtn, .menuTitleContainer').on(
            'click',
            function () {
              0 != $('#dictFrame2').length &&
                ($('#dictFrame2, #dictFrame').remove(), removeSelect());
            },
          ),
          (dictAdded = !0))));
}
function engSearch(e) {
  '' != e &&
    (0 != $('#dictFrame2').length
      ? $('#dictFrame2, #dictFrame').remove()
      : ($('body').append(
          '<iframe id="dictFrame" src="../../dict/index.html"></iframe><div id="dictFrame2"><div>X</div></div>',
        ),
        pausePres(),
        $('#dictFrame').load(function () {
          ($('#dictFrame').contents().find('#searchBox').val(e),
            $('#dictFrame')[0].contentWindow.engTrans());
        }),
        $('#dictFrame2').on('click', function () {
          ($('#dictFrame2, #dictFrame').remove(), removeSelect(), playPres());
        }),
        0 == dictAdded &&
          ($('#menuBtn, #optionBtn, #pauseBtn, .menuTitleContainer').on(
            'click',
            function () {
              0 != $('#dictFrame2').length &&
                ($('#dictFrame2, #dictFrame').remove(), removeSelect());
            },
          ),
          (dictAdded = !0))));
}
function removeSelect() {
  var e = window.getSelection ? window.getSelection() : document.selection;
  e && (e.removeAllRanges ? e.removeAllRanges() : e.empty && e.empty());
}
function saveLeftOff(e) {
  var t = currL + currentWordNum,
    o = localStorage.getItem(storeInfo + 'leftOff')
      ? localStorage.getItem(storeInfo + 'leftOff')
      : currL.split('').join('');
  if (-1 != o.indexOf(currL)) {
    o = o.split(':');
    for (var n = 0; n < o.length; n++)
      if (-1 != o[n].indexOf(currL)) {
        o.splice(n, 1);
        break;
      }
  } else o = o.split(':');
  (currentWordNum < e && 0 != currentWordNum && o.unshift(t),
    (o = o.join(':')).length < 2 &&
      localStorage.removeItem(storeInfo + 'leftOff'),
    o.length < 2
      ? localStorage.removeItem(storeInfo + 'leftOff')
      : localStorage.setItem(storeInfo + 'leftOff', o),
    clearTimeout(saveTime),
    (saveTime = setTimeout(savePosition, 3e3)));
}
function savePosition() {
  var e = '0',
    t = '0',
    o = '0|0|0|0|0|0|0|0|0|0|0';
  (localStorage.getItem(storeInfo + 'leftOff') &&
    (e = localStorage.getItem(storeInfo + 'leftOff')),
    localStorage.getItem(storeInfo + 'saved') &&
      (t = localStorage.getItem(storeInfo + 'saved')),
    localStorage.getItem(storeInfo + 'scrollPercent') &&
      (o = localStorage.getItem(storeInfo + 'scrollPercent')),
    (infoToUpdate = e + ':' + o + ':' + t),
    (fieldToUpdate = 'leftoff'),
    updateDatabase());
}
function findLeftOff() {
  var e;
  if (
    ((lastNum = ''),
    localStorage.getItem(storeInfo + 'leftOff') &&
      loadLast &&
      -1 != (e = localStorage.getItem(storeInfo + 'leftOff')).indexOf(currL))
  ) {
    e = e.split(':');
    for (var t = 0; t < e.length; t++)
      if (-1 != e[t].indexOf(currL)) {
        ((lastNum = e[t].split('|')),
          (lastNum = parseInt(lastNum[1])),
          (currentWordNum = lastNum),
          (lessonInit = 'false'));
        break;
      }
  }
}
function backAction() {
  if (
    ($('#quizTimerPointer2').stop(),
    clearTimeout(timerDelay),
    clearTimeout(saveTime),
    0 != $('#dictFrame2').length)
  )
    return ($('#dictFrame2, #dictFrame').remove(), void removeSelect());
  if ('undefined' != typeof quizLessonBoth && 'quiz' == quizLessonBoth) {
    if ($('#quizMenu').is(':visible')) return void mainMenu();
    if (
      $('#quizGoBack').is(':visible') ||
      $('#quizItself').is(':visible') ||
      $('#quizDone').is(':visible')
    )
      return ((errors = []), (errorMode = !1), void loadQuiz());
  }
  var e;
  $('#startCover').is(':visible')
    ? mainMenu()
    : $('#quizBlock').is(':visible')
      ? toggleMenu()
      : $('#quizMenu').is(':visible') ||
          $('.ouinoContent').is(':visible') ||
          $('#endWrap').is(':visible') ||
          $('#menuBlockContent').is(':visible')
        ? -1 == (e = window.location.href).indexOf('?refer')
          ? location.reload()
          : ((e = (e = e.split('?refer'))[0]), location.replace(e))
        : 0 == lessonNumber &&
            $('#quizGoBack').is(':visible') &&
            'verb' == currentSecShort
          ? mainMenu()
          : ($('#quizGoBack').is(':visible') ||
              $('#quizItself').is(':visible') ||
              $('#quizDone').is(':visible')) &&
            ((errors = []), (errorMode = !1), loadQuiz());
}
var dictAdded = !1,
  tId = 0;
lessonNumber = parseInt(lessonNumber);
var loc = window.location.pathname;
((loc = (loc = loc.substring(0, loc.lastIndexOf('/'))).split('/')),
  (loc = parseInt(loc.slice(-1).pop())),
  lessonNumber != loc && alert("LESSON NUMBER DOESN'T MATCH FOLDER NAME"),
  setTimeout(function () {
    'guidedSection' == sessionStorage.menuType
      ? $('#menuTitleSection').html('Recommended<br>Menu')
      : 'verbSection' == sessionStorage.menuType &&
        $('#menuTitleSection').html('Recommended<br>Verb Menu');
  }, 1e3));
var slidesNum,
  StatusBar,
  currSlide,
  noQuizOn = !1,
  slideOn = !1,
  quizMusicArray = ['musicQuiz1', 'musicQuiz2', 'musicQuiz3', 'musicQuiz4'],
  quizMusicNum = Math.floor(Math.random() * quizMusicArray.length),
  quizMusicFile = quizMusicArray[quizMusicNum],
  lessonMusicArray = [
    'musicLesson1',
    'musicLesson2',
    'musicLesson3',
    'musicLesson4',
    'musicLesson5',
    'musicLesson6',
    'musicLesson7',
    'musicLesson8',
    'musicLesson9',
    'musicLesson10',
    'musicLesson12',
    'musicLesson13',
    'musicLesson14',
    'musicLesson17',
    'musicLesson18',
    'musicLesson19',
    'musicLesson21',
    'musicLesson22',
    'musicLesson23',
    'musicLesson24',
  ],
  lessonMusicNum = Math.floor(Math.random() * lessonMusicArray.length),
  lessonMusicFile = lessonMusicArray[lessonMusicNum],
  allLearningTips =
    "Watching movies in (language) is a great way of training your ear.&Repetition is key when learning a new language! Write, speak and listen in (language) as much as possible.&Learning with a friend is a great way to boost your results.&Have a (language) friend? Ask them to have a (language) conversation with you.&Practice your (language) skills by writing short stories and asking a native speaker to correct them.&If you know someone who speaks (language), have a text message conversation with them, texting is a great way to practice!&Watching children movies and shows in (language) is a great way to reinforce your learning. They are often spoken very clearly and are usually simple to understand because children are also learning.&Learning every day is the best way. Studying and practicing (language) 15-30 minutes every day is a lot more effective than 2-3 hours once a week.&Having fun while you learn is one of the greatest keys to success.&Track your progress, seeing results is very motivating! Choose a knowledge level above!&Take a movie you've seen many times and watch it again in (language). It is a very powerful way to learn because you already know what is being said.&Watch a (language) movie with subtitles! You can start with English subtitles, then watch it again with (language) subtitles, which will be even more beneficial.&Remember to set small, achievable goals. For example, your goal could be to complete one Ouino lesson a day.&Practice is key. Take our exercises many times, aim for a perfect score. Real-world practice is also essential.&Don't be embarrassed to speak (language). People understand that you are learning and they will appreciate your efforts.&Think in (language) when doing everyday tasks! Try to create sentences in your mind about the task you are doing.&Create conversations in your mind or write them down. Imagine both sides of the conversation and look up the words you don't know in a dictionary.&Label common household items in your house, it may seem silly at first but labelling everything in your home will allow you to learn very fast! After just a few days of seeing the labels, you will remember them forever!&Speak or read (language) aloud when you are alone, it will practice your pronunciation.&Don't get discouraged, learning a language can be hard for anyone. Keep practicing and aim for progress, not fluency. Fluency is the final result of a lot of progress.&Change the default language to (language) on your computer, your phone, as well as your Facebook, Twitter, and e-mail account. In fact, anything you use daily!&Read (language) books! Start off with children's books and move up to more advanced levels.&Write a few sentences every day in a journal. You can write about anything you want.&Take Ouino exercises again a few days/weeks/months later to refresh your memory.&Join a (language) learning group in your area or online.&Find a (language) person trying to learn English, you can help each other learn!&Be consistent, learning a language is a journey. Learning every day is the secret to success.&Be patient and don't give up. If you don't get discouraged, you will reach your goal.&Struggle is good. Always push yourself and stay out of your comfort zone. Put yourself in situations where you are struggling with the language and you will improve dramatically.&Ask lots of questions and don't be shy! Children ask questions all the time when they learn their first language and they always succeed.&Read aloud, this practices your reading skills and is very helpful for your pronunciation. Sometimes you know how to pronounce something in your head, but it somehow doesn't come out the way you want it to, only practice will solve this.&Find ways to hear (language) as much as you can. A new language always seems to be spoken so fast. That's simply because your ear is not used to the language and can't make out the individual words.&Learn pronunciation rules. Trying to pronounce (language) the same way you pronounce English is a big mistake and people will have a hard time understanding you.",
  slidesArr = [
    'The objective of this lesson is to learn and remember the<br> vocabulary words, then complete each level of the exercises.',
    'You can click on the buttons with the English translation to<br> navigate and repeat the words as many times as you want.',
    'Notice the font color of the vocabulary words... Masculine words are written<br> in blue, feminine words are written in red, and neutral words are black.',
    'Ouino is fully customizable, you can adjust the presentation to your specific needs. <br> Simply open the settings menu to adjust the settings at any time.',
    'These individual verb lessons work together to help you learn verbs and conjugations.<br> It is recommended that you take the verb endings lessons before taking these lessons.',
    'At the very top, you will see information telling you the stem of the verb,<br> if the verb is regular or irregular, as well as other verb information.',
    'You can click on the tabs on the top to navigate to each section of the presentation. In each section, you will see the full conjugation, followed by a randomly-selected conjugation and an example sentence containing it.',
    'You can click on the examples to repeat or the<br> small speech bubble next to it to repeat slowly.',
    'Click on the settings menu to adjust the presentation<br> to your specific needs. You can change the settings at any time.',
    'These lessons contain buttons at the top. Each button will take<br> you to the section teaching you a word or a group of words.',
    'Within each section, you might see a narration explaining how the word<br> is used grammatically. It will then be followed by example sentences.',
    'Each example sentence contains the word you are learning in red, while the rest of the<br> sentence is blue. Remember, the goal of the lesson is to concentrate on learning the red words.',
    'You can navigate through the examples by<br> clicking on the circles underneath the word.',
    'Click on the settings menu to adjust the presentation<br> to your specific needs. You can change the settings at any time.',
    'Follow the everyday conversation and change the options<br> in the settings menu to make it more challenging.',
    'You can click the up or down arrows or any<br> of the dialogue to navigate through the conversation.',
  ];
('German' == lessonLanguage &&
  (slidesArr[2] =
    'Notice the font color of the vocabulary words... Masculine words are written in blue,<br> feminine words are written in red, and neuter words or invariable sentences are black.'),
  (allLearningTips = (
    'Italian' == lessonLanguage
      ? allLearningTips
          .split('a (language)')
          .join('an Italian')
          .split('(language)')
          .join('Italian')
      : allLearningTips.split('(language)').join(lessonLanguage)
  ).split('&')));
var tipNum = Math.floor(Math.random() * allLearningTips.length);
function disableTouch() {
  ($('body').addClass('disableTouch'),
    setTimeout(function () {
      $('body').removeClass('disableTouch');
    }, 500));
}
function setTimer() {
  ((soundPlaying = !1),
    $('#mainSound').attr('src') != 'sounds/title1' + soundType
      ? $('#mainSound').attr('src') != '../../common/endSound' + soundType &&
        (animateTimer(),
        fastOverwrite
          ? (wordTimer = setTimeout(nextImage, timerLength))
          : 'fastFirst' == $('#selectPlayback').val()
            ? 'fast' == fastOrSlow
              ? (wordTimer = setTimeout(loadSlowSound, timerLength))
              : 'slow' == fastOrSlow &&
                (wordTimer = setTimeout(nextImage, timerLength))
            : 'slowFirst' == $('#selectPlayback').val()
              ? 'fast' == fastOrSlow
                ? (wordTimer = setTimeout(nextImage, timerLength))
                : 'slow' == fastOrSlow &&
                  (wordTimer = setTimeout(loadFastSound, timerLength))
              : 'fastOnly' == $('#selectPlayback').val()
                ? (wordTimer = setTimeout(nextImage, timerLength))
                : 'fastTwice' == $('#selectPlayback').val()
                  ? 0 == soundRepeated
                    ? ((wordTimer = setTimeout(loadFastSound, timerLength)),
                      (soundRepeated = 1))
                    : 1 == soundRepeated &&
                      (wordTimer = setTimeout(nextImage, timerLength))
                  : 'fastTwicePlus' == $('#selectPlayback').val()
                    ? 0 == soundRepeated
                      ? ((wordTimer = setTimeout(loadFastSound, timerLength)),
                        (soundRepeated = 1))
                      : 1 == soundRepeated
                        ? ((wordTimer = setTimeout(loadSlowSound, timerLength)),
                          (soundRepeated = 2))
                        : 2 == soundRepeated &&
                          (wordTimer = setTimeout(nextImage, timerLength))
                    : 'slowOnly' == $('#selectPlayback').val()
                      ? (wordTimer = setTimeout(nextImage, timerLength))
                      : 'fastSlowFast' == $('#selectPlayback').val() &&
                        ('fast' == fastOrSlow && 0 == soundRepeated
                          ? (wordTimer = setTimeout(loadSlowSound, timerLength))
                          : 'slow' == fastOrSlow
                            ? ((wordTimer = setTimeout(
                                loadFastSound,
                                timerLength,
                              )),
                              (soundRepeated = 1))
                            : 'fast' == fastOrSlow &&
                              1 == soundRepeated &&
                              (wordTimer = setTimeout(nextImage, timerLength))))
      : nextImage());
}
function toggleMusic() {
  ((localStorage[storeInfo + 'musicSTORE' + currentSecShort] =
    $('#selectSound').val()),
    $('#mainMusic').trigger('pause'),
    'on' == $('#selectSound').val()
      ? $('#mainMusic').attr('src', '../../common/' + currentMusic + soundType)
      : $('#mainMusic').attr('src', '../../common/empty' + soundType),
    document.getElementById('mainMusic').load(),
    document.getElementById('mainMusic').addEventListener('canplay', playMusic),
    'on' == $('#selectSound').val()
      ? ((localStorage[storeInfo + 'musicSTOREprogram'] = 'ON'),
        (localStorage[storeInfo + 'musicSTOREblock'] = 'on'),
        (localStorage[storeInfo + 'musicSTOREvocab'] = 'on'),
        (localStorage[storeInfo + 'musicSTOREconvo'] = 'on'),
        (localStorage[storeInfo + 'musicSTOREverb'] = 'on'))
      : ((localStorage[storeInfo + 'musicSTOREprogram'] = 'OFF'),
        (localStorage[storeInfo + 'musicSTOREblock'] = 'off'),
        (localStorage[storeInfo + 'musicSTOREvocab'] = 'off'),
        (localStorage[storeInfo + 'musicSTOREconvo'] = 'off'),
        (localStorage[storeInfo + 'musicSTOREverb'] = 'off')),
    updateAllOptions2());
}
function updateAllOptions2() {
  ((infoToUpdate =
    localStorage.getItem(storeInfo + 'musicSTOREblock') +
    ':' +
    localStorage.getItem(storeInfo + 'playbackSTOREblock') +
    ':' +
    localStorage.getItem(storeInfo + 'intervalSTOREblock') +
    ':' +
    localStorage.getItem(storeInfo + 'textSTOREblock')),
    (fieldToUpdate = 'blockOptions'),
    updateDatabase(),
    (infoToUpdate =
      localStorage.getItem(storeInfo + 'musicSTOREvocab') +
      ':' +
      localStorage.getItem(storeInfo + 'playbackSTOREvocab') +
      ':' +
      localStorage.getItem(storeInfo + 'intervalSTOREvocab') +
      ':' +
      localStorage.getItem(storeInfo + 'textSTOREvocab')),
    (fieldToUpdate = 'vocabOptions'),
    updateDatabase(),
    (infoToUpdate =
      localStorage.getItem(storeInfo + 'musicSTOREconvo') +
      ':' +
      localStorage.getItem(storeInfo + 'playbackSTOREconvo') +
      ':' +
      localStorage.getItem(storeInfo + 'intervalSTOREconvo') +
      ':' +
      localStorage.getItem(storeInfo + 'textSTOREconvo')),
    (fieldToUpdate = 'convoOptions'),
    updateDatabase(),
    (infoToUpdate =
      localStorage.getItem(storeInfo + 'musicSTOREverb') +
      ':' +
      localStorage.getItem(storeInfo + 'playbackSTOREverb') +
      ':' +
      localStorage.getItem(storeInfo + 'intervalSTOREverb') +
      ':' +
      localStorage.getItem(storeInfo + 'textSTOREverb')),
    (fieldToUpdate = 'verbOptions'),
    updateDatabase());
}
function initiate() {
  var e, t;
  if (
    ((window.onkeyup = function (e) {
      e = e.keyCode || e.which;
      32 == e && $('#pauseBtn').is(':visible')
        ? togglePause()
        : 13 == e && $('#writeAnswerField').is(':visible')
          ? $('#writeAnswerField').is(':focus') ||
            '' != $('#writeAnswerField').val() ||
            $('#writeAnswerField').focus()
          : 37 != e ||
              !$('.leftArrow').is(':visible') ||
              $('#startCover').is(':visible') ||
              $('#pauseWrap').is(':visible')
            ? 39 != e ||
              !$('.rightArrow').is(':visible') ||
              $('#startCover').is(':visible') ||
              $('#pauseWrap').is(':visible')
              ? 37 != e ||
                !$('.topArrow').is(':visible') ||
                $('#startCover').is(':visible') ||
                $('#pauseWrap').is(':visible')
                ? 39 != e ||
                  !$('.bottomArrow').is(':visible') ||
                  $('#startCover').is(':visible') ||
                  $('#pauseWrap').is(':visible')
                  ? 8 != e ||
                    $('#writeAnswerField').is(':visible') ||
                    backAction()
                  : nextImage()
                : prevImage()
              : nextImage()
            : prevImage();
    }),
    $('body').append(
      '<div id="fontPreload3">Pre</div><div id="fontPreload4">Pre</div><div id="fontPreload5">Q</div><div id="fontPreload6">Q</div><div id="fontPreload7"></div>',
    ),
    'pwa' == osType &&
      sessionStorage.getItem('offlineSession') &&
      $('#dictBtn').hide(),
    $('#dictBtn').on('click', function () {
      0 != $('#dictFrame2').length
        ? $('#dictFrame2, #dictFrame').remove()
        : ($('body').append(
            '<iframe id="dictFrame" src="../../dict/index.html"></iframe><div id="dictFrame2"><div>X</div></div>',
          ),
          pausePres(),
          $('#dictFrame2').on('click', function () {
            ($('#dictFrame2, #dictFrame').remove(), playPres());
          }),
          0 == dictAdded &&
            ($('#menuBtn, #optionBtn, #pauseBtn, .menuTitleContainer').on(
              'click',
              function () {
                0 != $('#dictFrame2').length &&
                  $('#dictFrame2, #dictFrame').remove();
              },
            ),
            (dictAdded = !0)));
    }),
    'mobile' != currentDevice &&
      $('#dictBtn').hover(function () {
        ($('#arrowLabel').text('LOAD TRANSLATOR'),
          $('.instructions').toggleClass('showDiv'));
      }),
    $('#writeError2').html(
      '<div class="wrapBtn" style="width: 120px; margin: 20px auto;">CONTINUE</div>',
    ),
    localStorage.getItem(storeInfo + 'typeW') ||
      ($('#writeAnswerField').attr(
        'placeholder',
        'Type Answer (Press Enter to Submit)',
      ),
      localStorage.setItem(storeInfo + 'typeW', 'on')),
    !localStorage.getItem(storeInfo + 'progTimer') ||
    'on' == localStorage.getItem(storeInfo + 'progTimer')
      ? ($('.timerMeter').attr('title', 'Hide Progress Bar'),
        $('.timerMeter').css({ cursor: 'pointer' }))
      : 'off' == localStorage.getItem(storeInfo + 'progTimer') &&
        ($('.timerMeter').css({ opacity: '0.05', cursor: 'pointer' }),
        $('.timerMeter').attr('title', 'Show Progress Bar')),
    $('.timerMeter').on('click', function () {
      return doNot
        ? void (localStorage.getItem(storeInfo + 'progTimer')
            ? 'on' == localStorage.getItem(storeInfo + 'progTimer')
              ? (localStorage.setItem(storeInfo + 'progTimer', 'off'),
                $('.timerMeter').css({ opacity: '0.05' }),
                $('.timerMeter').attr('title', 'Show Progress Bar'))
              : 'off' == localStorage.getItem(storeInfo + 'progTimer') &&
                (localStorage.setItem(storeInfo + 'progTimer', 'on'),
                $('.timerMeter').css({ opacity: '1' }),
                $('.timerMeter').attr('title', 'Hide Progress Bar'))
            : (localStorage.setItem(storeInfo + 'progTimer', 'off'),
              $('.timerMeter').css({ opacity: '0' }),
              $('.timerMeter').attr('title', 'Show Progress Bar')))
        : ((doNot = !0),
          clearTimeout(doNotTimer),
          void (doNotTimer = setTimeout(function () {
            doNot = !1;
          }, 1e3)));
    }),
    localStorage.getItem(storeInfo + 'quizTimer') &&
      ($('#quizTimer').addClass('hideIt'),
      $('#quizTimerPointer, #quizDoneSentence').css({ visibility: 'hidden' })),
    $('#quizTimer').on('touchend mouseup', function (e) {
      (e.preventDefault(),
        localStorage.getItem(storeInfo + 'quizTimer')
          ? (localStorage.removeItem(storeInfo + 'quizTimer'),
            $('#quizTimer').removeClass('hideIt'),
            $('#quizTimerPointer, #quizDoneSentence').css({
              visibility: 'visible',
            }))
          : localStorage.getItem(storeInfo + 'quizTimer') ||
            (localStorage.setItem(storeInfo + 'quizTimer', 'off'),
            $('#quizTimer').addClass('hideIt'),
            $('#quizTimerPointer, #quizDoneSentence').css({
              visibility: 'hidden',
            })));
    }),
    $('#quizTimer').append(
      '<img id="timerToggle" src="../../common/extraOn.svg"/>',
    ),
    $('#backBtn').on('click', backAction),
    'mobile' != currentDevice &&
      $('#backBtn').hover(function () {
        ($('#arrowLabel').text('GO BACK'),
          $('.instructions').toggleClass('showDiv'));
      }),
    sessionStorage.menuType || (sessionStorage.menuType = 'home'),
    'vocab' == currentSecShort && 95 == lessonNumber && (noQuizOn = !0),
    setTimeout(function () {
      'guidedSection' == sessionStorage.menuType &&
        $('#menuTitleSection').html('Recommended<br>Menu');
    }, 1e3),
    $('.quizType').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    }),
    null == sessionStorage.LOGGEDIN
      ? (null != localStorage.userEmailSTORE
          ? ($('#emailField').val(localStorage.userEmailSTORE),
            (userEmail = localStorage.userEmailSTORE),
            (storeInfo = langShort + userEmail),
            $('#rememberCheck').attr('src', '../../common/checkOn.svg'))
          : $('#emailField').val(''),
        null != localStorage.tuvm58djSTORE
          ? ($('#jguyr4').val(localStorage.tuvm58djSTORE),
            (tuvm58dj = localStorage.tuvm58djSTORE))
          : ($('#jguyr4').val(''), $('#emailField').val('')),
        null != localStorage.STAYLOGGEDIN &&
        null != tuvm58dj &&
        null != userEmail
          ? (databaseInit(),
            $('#loginCover').append(
              '  <div class="loader" style="opacity: 0.9;">Loading...</div>',
            ))
          : $('#loginCenter').show())
      : ((userEmail = sessionStorage.userEmailSTORE),
        (storeInfo = langShort + userEmail),
        (tuvm58dj = sessionStorage.tuvm58djSTORE),
        $('#loginCover').hide(),
        localStorageInit()),
    $('.menuBar').css({ visibility: 'visible' }),
    $('#startCover').html(
      '<img src="../../common/startSymbol.svg" class="symbolImage" /><img src="../../common/startFlag.png" class="flagImage" /><div class="lessonStartContainer alignVerticalWin"><div id="lessonStartBtn" class="startButtons"><div class="wrapBtn2">START LESSON</div></div><div id="quizStartBtn" class="startButtons"><div class="wrapBtn3">TAKE EXERCISES</div></div></div>',
    ),
    $('.lessonStartContainer').append(
      '<div id="audioStartBtn" class="startButtons"><div class="wrapBtn4">AUDIO ONLY</div></div>',
    ),
    $('#audioStartBtn').on('click', loadAudioCourse),
    localStorage.getItem(storeInfo + 'leftOff') &&
      -1 != (e = localStorage.getItem(storeInfo + 'leftOff')).indexOf(currL))
  ) {
    e = e.split(':');
    for (var o = 0; o < e.length; o++)
      if (-1 != e[o].indexOf(currL)) {
        ($('#lessonStartBtn').html(
          '<div class="wrapBtn2 pad1">RESTART LESSON</div><div class="wrapBtn2B">CONTINUE LESSON</div>',
        ),
          $('#quizStartBtn').addClass('pad2'),
          $('#audioStartBtn').addClass('pad3'),
          $('.pad1, #menuRestart, #menuRestart2').on('click', function () {
            loadLast = !1;
          }));
        break;
      }
  }
  (0 === lessonNumber &&
    ($('#pauseBtn').hide(), $('#quizStartBtn').css({ top: '-30px' })),
    'undefined' != typeof nums1 &&
      nums1.length < 7 &&
      ($('#startCover').html(
        '<img src="../../common/startSymbol.svg" class="symbolImage" /><img src="../../common/startFlag.png" class="flagImage" /><div class="lessonStartContainer alignVerticalWin"><div id="lessonStartBtn" class="startButtons"><div class="wrapBtn2">START LESSON</div></div><div id="quizStartBtn" class="startButtons">Please take more exercises before loading this.</div></div>',
      ),
      $('#quizStartBtn').css({ 'pointer-events': 'none' })),
    'undefined' != typeof flNums &&
      ($('.wrapBtn3').html(
        "START FLASH CARD<br><span style='font-size: 1.4em;'>EXERCISES</span>",
      ),
      (lessonTitle = 'OUINO Flash Cards'),
      setTimeout(function () {
        $('.menuTitleContainer').text('OUINO Flash Cards');
      }, 200),
      setTimeout(function () {
        ($('.addQuizFlash').addClass('disableFlash2'),
          $('#menuPrevious h2').html('Back to<br>Flash Cards'),
          $('#menuPrevious').css({ opacity: '1', 'pointer-events': 'auto' }));
      }, 1e3)),
    'undefined' != typeof quizLessonBoth &&
      ('lesson' == quizLessonBoth
        ? (1 == (t = numOfAllQuiz - lessonNumber)
            ? ($('.wrapBtn2').html(
                "START&nbsp;LESSON&nbsp;<b style='font-size:16px; color:grey;'>(Last&nbsp;One)</b>",
              ),
              $('#menuQuiz2').css({
                animation: 'flashEnd 0.7s steps(1) infinite',
                'border-radius': '30px',
              }))
            : (2 == t
                ? $('.wrapBtn2').html(
                    "START&nbsp;LESSON&nbsp;<b style='font-size:16px; color:grey;'>(2nd&nbsp;Last)</b>",
                  )
                : $('.wrapBtn2').html(
                    "START&nbsp;LESSON&nbsp;<b style='font-size:16px; color:grey;'>(" +
                      t +
                      '&nbsp;Left)</b>',
                  ),
              $('#menuNext2').css({
                animation: 'flashEnd 0.7s steps(1) infinite',
                'border-radius': '30px',
              })),
          $('.wrapBtn2').css({ 'font-size': '24px', width: '240px' }),
          $('.wrapBtn3').html('CATEGORY EXERCISES'),
          $('#menuQuiz h2, #menuQuiz2 h2').html('Category<br>Exercises'),
          $('.wrapBtn3').css({ 'font-size': '26px', width: '220px' }))
        : 'both' == quizLessonBoth &&
          $('#menuQuiz2').css({
            animation: 'flashEnd 0.7s steps(1) infinite',
            'border-radius': '30px',
          })),
    -1 != $('#lessonStartBtn .wrapBtn2').html().indexOf('(') &&
      0 != $('.wrapBtn2B').length &&
      $('#lessonStartBtn .wrapBtn2').html(
        $('#lessonStartBtn .wrapBtn2')
          .html()
          .split('START&nbsp;LESSON&nbsp;')
          .join('RESTART&nbsp;'),
      ),
    'block' == currentSecShort &&
      'quiz' == quizLessonBoth &&
      ($('#menuRestart').css({ opacity: '0.2', 'pointer-events': 'none' }),
      loadQuiz()),
    'mobile' == currentDevice
      ? ($('#volDiv').hide(),
        $('#lessonStartBtn div, #quizStartBtn div')
          .on('touchstart', function () {
            $(this).addClass('startButtonsHover');
          })
          .on('touchend touchcancel', function () {
            $(this).removeClass('startButtonsHover');
          }),
        $('#lessonStartBtn').on('click', startLesson),
        $('#quizStartBtn').on('click', function () {
          return (
            (errors = []),
            (errorMode = !1),
            'pwa' == osType &&
            'block' == currentSecShort &&
            'lesson' == quizLessonBoth &&
            sessionStorage.getItem('offlineSession')
              ? ((nOrp = !1), void checkAllURLCache())
              : void loadQuiz()
          );
        }),
        $(
          '#menuMain2, .rightArrow, .leftArrow, .smallIcon, .quizItems, .quizType, .menuBox2, .menuBox, .startButtons, #quizPreloadStart, .boardBottom, .convoButton, .quizChoices, #verbBanner',
        ).css({ transition: 'filter 0.1s' }),
        $(
          '#menuMain2, .rightArrow, .leftArrow, .smallIcon, .quizItems, .quizType, .menuBox, .menuBox2, .startButtons, #quizPreloadStart, .boardBottom, #flashCard, #flashCard2, .convoButton, .quizChoices, #verbBanner',
        )
          .on('touchstart', function () {
            $(this).addClass('brightDown');
          })
          .on('touchend touchcancel', function () {
            $(this).removeClass('brightDown');
          }))
      : ($('.menuBar').css({ 'min-width': '400px' }),
        $('.wrapBtn2, .wrapBtn2B, .wrapBtn3, .wrapBtn4').hover(function () {
          $(this).toggleClass('wrapHover');
        }),
        $('#lessonStartBtn').on('click', startLesson),
        $('#quizStartBtn').on('click', function () {
          return (
            (errors = []),
            (errorMode = !1),
            'pwa' == osType &&
            'block' == currentSecShort &&
            'lesson' == quizLessonBoth &&
            sessionStorage.getItem('offlineSession')
              ? ((nOrp = !1), void checkAllURLCache())
              : void loadQuiz()
          );
        })),
    'block' == currentSecShort && 'noQuiz' == quizLessonBoth && (noQuizOn = !0),
    'vocab' == currentSecShort && 3 == lessonNumber && (noQuizOn = !0),
    0 === lessonNumber &&
      ($('#menuRestart, #menuPrevious, #menuNext').css({
        opacity: '0.2',
        'pointer-events': 'none',
      }),
      $('#lessonStartBtn').hide()),
    1 == noQuizOn &&
      ($('#menuQuiz,#menuQuiz2').css({
        opacity: '0.2',
        'pointer-events': 'none',
      }),
      $('#quizStartBtn').hide(),
      $('#lessonStartBtn .wrapBtn2B').is(':visible')
        ? $('#audioStartBtn').addClass('noQuizAudio2')
        : $('#audioStartBtn').addClass('noQuizAudio')),
    'undefined' != typeof extraNote &&
      ($('#startCover').append(
        '<div id="extraNote"><strong>IMPORTANT NOTE:</strong><br>' +
          extraNote +
          '</div>',
      ),
      $('#extraNote').show(),
      $('#conjForeign').css({ width: '52%' }),
      $('#conjEnglish').css({ width: '36%' })),
    'mobile' == currentDevice &&
      ($('.ouinoButton')
        .on('touchstart', function () {
          $(this).addClass('fullOpacity');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('fullOpacity');
        }),
      $(
        '.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .menuTitleContainer',
      )
        .on('touchstart', function () {
          $(this).addClass('fullOpacity');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('fullOpacity');
        }),
      $('.starSelect')
        .on('touchstart', function () {
          $(this).addClass('starSelectHover');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('starSelectHover');
        }),
      $('.knowledgeBox')
        .on('touchstart', function () {
          $(this).addClass('menuBoxHover');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('menuBoxHover');
        }),
      $('.menuBox')
        .on('touchstart', function () {
          $(this).addClass('menuBoxHover');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('menuBoxHover');
        }),
      $('.menuBox2')
        .on('touchstart', function () {
          $(this).addClass('menuBoxHover');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('menuBoxHover');
        }),
      $('.leftArrow, .rightArrow')
        .on('touchstart', function () {
          $(this).addClass('arrowHover');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('arrowHover');
        }),
      $('.selectOptions')
        .on('touchstart', function () {
          $(this).addClass('fullOpacity');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('fullOpacity');
        }),
      $('.quizType')
        .on('touchstart', function () {
          ($(this).addClass('quizTypeHover'),
            $(this).children('img').addClass('quizIconHover'));
        })
        .on('touchend touchcancel', function () {
          ($(this).removeClass('quizTypeHover'),
            $(this).children('img').removeClass('quizIconHover'));
        })));
}
function doneQuiz() {
  ($('#backBtn, #menuMain2').removeClass('darker'),
    localStorage.removeItem(storeInfo + 'saved'),
    clearTimeout(saveTime),
    (saveTime = setTimeout(savePosition, 3e3)),
    $('#quizItself').hide());
  var e = quizNumQues * maxScore;
  (currentPts > e && (currentPts = e),
    $('#finalScore').text(currentPts),
    $('#totalScore').text(e));
  var t = Math.round((currentPts / e) * 100);
  ($('#quizPercentFinal').text(t),
    $('#errorNum').text(currentErrors),
    1 == currentErrors
      ? $('#errorDiv').text(' Error')
      : $('#errorDiv').text(' Errors'),
    $('#quizTimerPointer, #quizTimer, #quizTimer2').fadeOut());
  if (
    (100 == t
      ? (playSprite('endPass'),
        $('#quizDoneImg').css({
          'background-image': 'url(../../common/medal4.svg)',
        }),
        $('#quizDoneTitle').html(
          'Awesome! You&nbsp;got&nbsp;a&nbsp;perfect&nbsp;score!<br><b class="yellowText">Fluency Award</b>',
        ),
        $('#quizDoneSentence').hide())
      : 90 <= t && t < 100
        ? (playSprite('endGood'),
          $('#quizDoneImg').css({
            'background-image': 'url(../../common/medal3.svg)',
          }),
          $('#quizDoneTitle').html(
            'Great! You&nbsp;won&nbsp;an&nbsp;award!<br><b class="yellowText">Gold Medal</b>',
          ))
        : 80 <= t && t < 90
          ? (playSprite('endGood'),
            $('#quizDoneImg').css({
              'background-image': 'url(../../common/medal2.svg)',
            }),
            $('#quizDoneTitle').html(
              'Good! You&nbsp;won&nbsp;an&nbsp;award!<br><b class="yellowText">Silver Medal</b>',
            ))
          : 70 <= t && t < 80
            ? (playSprite('endGood'),
              $('#quizDoneImg').css({
                'background-image': 'url(../../common/medal1.svg)',
              }),
              $('#quizDoneTitle').html(
                'Good! You&nbsp;won&nbsp;an&nbsp;award!<br><b class="yellowText">Bronze Medal</b>',
              ))
            : (playSprite('endFail'),
              $('#quizDoneImg').css({
                'background-image': 'url(../../common/medal0.svg)',
              }),
              $('#quizDoneTitle').html(
                'Oops! Better&nbsp;luck&nbsp;next&nbsp;time!<p>Get&nbsp;70%&nbsp;or&nbsp;higher to&nbsp;get&nbsp;an&nbsp;award.</p>',
              )),
    $('#quizDone').css({ opacity: '0' }),
    $('#quizDone').show(),
    $('#quizDone').animate({ opacity: '1' }),
    0 == errors.length
      ? $('#practiceErrors').hide()
      : ($('#practiceErrors').show(),
        $('#practiceErrors div').html(
          "<img src='../../flash/images/revise.svg'/>Take Missed Questions (" +
            errors.length +
            ')',
        ),
        $('#practiceErrors div').removeClass('revision')),
    'verb' == currentSecShort &&
      2 == currentQuiz &&
      $('#practiceErrors').hide(),
    'verb' == currentSecShort &&
      3 == currentQuiz &&
      'Write it Out' != quizTitle3 &&
      $('#practiceErrors').hide(),
    1 == errorMode)
  )
    return (
      $('#quizDoneTitle').html(
        "Here is your revised error result.<p>NOTE: This doesn't update your progress, it only allows you to practice. Take the full exercise again to update your progress.</p>",
      ),
      $('#practiceErrors div').html(
        "<img src='../../flash/images/revise.svg'/>Retry error questions",
      ),
      void $('#practiceErrors div').addClass('revision')
    );
  if ('block' == currentSecShort) {
    var o = !1;
    for (xx = 0; xx < errors.length; xx++)
      -1 == engExamplesQuiz[errors[xx] - 1].indexOf('<em>') && (o = !0);
    o &&
      ($('#practiceErrors div').addClass('revision'),
      $('.addQuizFlash').hide());
  }
  if (t > pastQuizScore && 0 !== lessonNumber) {
    $('#newHighScore').transition({ y: '0%', delay: 1e3 }, 1500, 'easeOutExpo');
    for (var n = currentQuiz - 1, s = 0; 0 <= n; )
      (t > pastQuizScoreAll[n] && ((pastQuizScoreAll[n] = t), s++), n--);
    (2 <= s &&
      1 != currentQuiz &&
      $('#newScoreUpdate').transition(
        { x: '17px', delay: 1500 },
        500,
        'easeOutExpo',
      ),
      (pastQuizScoreAll = pastQuizScoreAll.join('|')),
      (quizScores[lessonNumber - 1] = pastQuizScoreAll));
    e = quizScores.join(':');
    ((infoToUpdate = e),
      (localStorage[storeInfo + 'scoreSTORE' + currentSecShort] = infoToUpdate),
      (fieldToUpdate = currentSecShort + 'Scores'),
      updateDatabase(),
      $('#newScoreUpdate').transition(
        { x: '-100%', delay: 3e3 },
        500,
        'easeOutExpo',
      ),
      $('#newHighScore').transition(
        { y: '200%', delay: 3e3 },
        500,
        'easeOutExpo',
      ));
  }
}
function togglePause() {
  ($('#pauseWrap').css({ background: 'rgba(0, 0, 0, 0.3)' }),
    $('#starWrap').is(':visible') && $('#starWrap').hide(),
    $('#startCover').is(':visible') || $('#endWrap').is(':visible')
      ? startLesson()
      : $('#optionWrap').is(':visible')
        ? ($('#optionWrap').hide(), playPres())
        : $('#menuWrap').is(':visible')
          ? ($('#menuWrap').hide(), playPres())
          : $('#pauseWrap').is(':visible')
            ? ($('#pauseWrap').hide(),
              $('#pauseBtn').attr('src', '../../common/pause.svg'),
              toggleMusic(),
              playPres())
            : ($('#pauseWrap').show(),
              $('#pauseBtn').attr('src', '../../common/play.svg'),
              playSprite('pause'),
              pausePres()));
}
function pausePres() {
  ($('.timerMeter > .timerSpan').stop(),
    $('#pauseBtn').attr('src', '../../common/play.svg'),
    (document.getElementById('mainMusic').volume = 0),
    clearTimeout(wordTimer),
    $('#mainSound').trigger('pause'),
    (pauseTwo = setTimeout(pausePres2, 500)));
}
function pausePres2() {
  ($('.timerMeter > .timerSpan').stop(),
    clearTimeout(wordTimer),
    $('#mainSound').trigger('pause'));
}
function playPres() {
  ((document.getElementById('mainMusic').volume =
    0.4 * document.getElementById('mainSound').volume),
    $('#pauseWrap').is(':visible') && $('#pauseWrap').hide(),
    clearTimeout(pauseTwo),
    $('#pauseBtn').attr('src', '../../common/pause.svg'),
    $('#quizContent').is(':visible') ||
      (1 == soundPlaying
        ? $('#mainSound').trigger('play')
        : fastOverwrite
          ? ((wordTimer = setTimeout(nextImage, timerLength)), animateTimer())
          : 'fastFirst' == $('#selectPlayback').val()
            ? 'fast' == fastOrSlow
              ? loadSlowSound()
              : 'slow' == fastOrSlow && nextImage()
            : 'slowFirst' == $('#selectPlayback').val()
              ? 'fast' == fastOrSlow
                ? nextImage()
                : 'slow' == fastOrSlow && loadFastSound()
              : 'fastTwice' == $('#selectPlayback').val()
                ? 0 == soundRepeated
                  ? (loadFastSound(), (soundRepeated = 1))
                  : 1 == soundRepeated && nextImage()
                : 'fastTwicePlus' == $('#selectPlayback').val()
                  ? 0 == soundRepeated
                    ? (loadFastSound(), (soundRepeated = 1))
                    : 1 == soundRepeated
                      ? (loadSlowSound(), (soundRepeated = 2))
                      : 2 == soundRepeated && nextImage()
                  : 'fastSlowFast' == $('#selectPlayback').val()
                    ? 'fast' == fastOrSlow && 0 == soundRepeated
                      ? loadSlowSound()
                      : 'slow' == fastOrSlow
                        ? (loadFastSound(), (soundRepeated = 1))
                        : 'fast' == fastOrSlow &&
                          1 == soundRepeated &&
                          nextImage()
                    : ('fastOnly' != $('#selectPlayback').val() &&
                        'slowOnly' != $('#selectPlayback').val()) ||
                      nextImage()));
}
function toggleOptions() {
  ($('#starWrap').is(':visible') && $('#starWrap').hide(),
    $('#pauseWrap').is(':visible') && ($('#pauseWrap').hide(), toggleMusic()),
    $('#menuWrap').is(':visible') && $('#menuWrap').hide(),
    0 == $('#optionWrap').is(':visible')
      ? ('mobile' != currentDevice
          ? $('#optionWrap').fadeIn(200)
          : $('#optionWrap').show(),
        $('#pauseBtn').attr('src', '../../common/play.svg'),
        pausePres())
      : 1 == $('#endWrap').is(':visible') ||
          1 == $('#startCover').is(':visible')
        ? 'mobile' != currentDevice
          ? $('#optionWrap').slideUp()
          : $('#optionWrap').hide()
        : ('mobile' != currentDevice
            ? $('#optionWrap').slideUp()
            : $('#optionWrap').hide(),
          $('#pauseBtn').attr('src', '../../common/pause.svg'),
          playPres()));
}
var bbGroups,
  isCached,
  cacheCount,
  toggleTimer = !1;
function toggleMenu() {
  toggleTimer ||
    ((toggleTimer = !0),
    clearTimeout(toggleTimer),
    (toggleTimer = setTimeout(function () {
      toggleTimer = !1;
    }, 200)),
    $('#starWrap').is(':visible') && $('#starWrap').hide(),
    $('#pauseWrap').is(':visible') && ($('#pauseWrap').hide(), toggleMusic()),
    $('#optionWrap').is(':visible') && $('#optionWrap').hide(),
    0 == $('#menuWrap').is(':visible')
      ? ('mobile' != currentDevice
          ? $('#menuWrap').fadeIn(200)
          : $('#menuWrap').show(),
        $('#pauseBtn').attr('src', '../../common/play.svg'),
        pausePres())
      : 1 == $('#endWrap').is(':visible') ||
          1 == $('#startCover').is(':visible')
        ? 'mobile' != currentDevice
          ? $('#menuWrap').slideUp()
          : $('#menuWrap').hide()
        : ('mobile' != currentDevice
            ? $('#menuWrap').slideUp()
            : $('#menuWrap').hide(),
          $('#pauseBtn').attr('src', '../../common/pause.svg'),
          playPres()));
}
function toggleRememberCheck() {
  '../../common/checkOff.svg' == $('#rememberCheck').attr('src')
    ? ($('#rememberCheck, #rememberCheck2').attr(
        'src',
        '../../common/checkOn.svg',
      ),
      (localStorage.STAYLOGGEDIN = 'true'))
    : ($('#rememberCheck, #rememberCheck2').attr(
        'src',
        '../../common/checkOff.svg',
      ),
      localStorage.removeItem('STAYLOGGEDIN'));
}
function toggleOfflineCheck() {
  '../../common/checkOff.svg' == $('#offlineCheck').attr('src')
    ? ($('#offlineCheck').attr('src', '../../common/checkOn.svg'),
      (localStorage[storeInfo + 'offlineCheckSTORE'] = 'true'))
    : ($('#offlineCheck').attr('src', '../../common/checkOff.svg'),
      localStorage.removeItem('offlineCheckSTORE'));
}
function togglePlayback() {
  ((localStorage[storeInfo + 'playbackSTORE' + currentSecShort] =
    $('#selectPlayback').val()),
    updateOptions());
}
function toggleInterval() {
  localStorage[storeInfo + 'intervalSTORE' + currentSecShort] =
    $('#selectInterval').val();
  var e = $('#selectInterval').val();
  ((timerLength = 1e3 * e), updateOptions());
}
function toggleText() {
  ((localStorage[storeInfo + 'textSTORE' + currentSecShort] =
    $('#selectText').val()),
    $('.engSentence').css({ display: 'block' }),
    $('.disSentence').css({ display: 'none' }),
    $('.forSentence').css({ display: 'block' }),
    $('.engSentence').removeClass('engSentenceOnly'),
    $('.forSentence').removeClass('forSentenceAlone'),
    'convo' == currentSecShort &&
      ($('.forText, .engText').show(), $('.disText').hide()),
    resizeText(),
    'foreign' == $('#selectText').val()
      ? ($('.engSentence').css({ display: 'none' }),
        $('.forSentence').addClass('forSentenceAlone'),
        'convo' == currentSecShort &&
          ($('.engText, .disText').hide(), $('.forText').show()),
        resizeText())
      : 'english' == $('#selectText').val()
        ? ($('.forSentence').css({ display: 'none' }),
          $('.engSentence').addClass('engSentenceOnly'),
          'convo' == currentSecShort &&
            ($('.forText, .disText').hide(), $('.engText').show()),
          resizeText())
        : 'none' == $('#selectText').val() &&
          ($('.forSentence').css({ display: 'none' }),
          $('.engSentence').css({ display: 'none' }),
          $('.disSentence').css({ display: 'block' }),
          'convo' == currentSecShort &&
            ($('.engText, .forText').hide(), $('.disText').show())),
    updateOptions());
}
function toggleText2() {
  ((localStorage[storeInfo + 'textSTORE' + currentSecShort] =
    $('#selectText').val()),
    $('.engSentence, .engSentenceB').css({ display: 'block' }),
    $('.disSentence, .disSentenceB').css({ display: 'none' }),
    $('.forSentence, .forSentenceB').css({ display: 'block' }),
    $('.engSentence, .engSentenceB').removeClass('engSentenceOnly'),
    $('.forSentence, .forSentenceB').removeClass('forSentenceAlone'),
    'convo' == currentSecShort &&
      ($('.forText, .engText').show(), $('.disText').hide()),
    resizeText(),
    'undefined' == typeof allEndings &&
      ('foreign' == $('#selectText').val()
        ? ($('.engSentence, .engSentenceB').css({ display: 'none' }),
          $('.forSentence, .forSentenceB').addClass('forSentenceAlone'),
          'convo' == currentSecShort &&
            ($('.engText, .disText').hide(), $('.forText').show()),
          resizeText())
        : 'english' == $('#selectText').val()
          ? ($('.forSentence, .forSentenceB').css({ display: 'none' }),
            $('.engSentence, .engSentenceB').addClass('engSentenceOnly'),
            'convo' == currentSecShort &&
              ($('.forText, .disText').hide(), $('.engText').show()),
            resizeText())
          : 'none' == $('#selectText').val() &&
            ($('.forSentence, .forSentenceB').css({ display: 'none' }),
            $('.engSentence, .engSentenceB').css({ display: 'none' }),
            $('.disSentence, .disSentenceB').css({ display: 'block' }),
            'convo' == currentSecShort &&
              ($('.engText, .forText').hide(), $('.disText').show())),
      updateOptions()));
}
function selectKnowledge() {
  var e = $(this).attr('id');
  ((knowledgeStars[lessonNumber - 1] = e.split('star').join('')),
    $('.menuStars').attr('src', '../../common/' + e + '.svg'),
    'star1' == e && $('.starTitle').text('Knowledge Level: LOW'),
    'star2' == e && $('.starTitle').text('Knowledge Level: AVERAGE'),
    'star3' == e && $('.starTitle').text('Knowledge Level: GOOD'),
    'star4' == e && $('.starTitle').text('Knowledge Level: EXCELLENT'),
    $('#starWrap').hide(),
    updateStars());
}
function animateTimer() {
  $('.timerMeter > .timerSpan').each(function () {
    $(this)
      .width(0)
      .animate({ width: $('.timerMeter').width() }, 1.125 * timerLength);
  });
}
function checkURLCache(t) {
  caches.open(cacheName2).then(function (e) {
    e.match(cacheURL2 + t).then(function (e) {
      null != e
        ? (window.location.href =
            cacheURL2 + t.split('images/background.png').join('index.html'))
        : offlinePopup();
    });
  });
}
function checkURLCache2(t) {
  var o = bbGroups[lessonNumber - 1].split('-');
  caches.open(cacheName2).then(function (e) {
    e.match(cacheURL2 + t).then(function (e) {
      (null == e && (isCached = !1),
        ++cacheCount == o.length &&
          (isCached && !nOrp
            ? loadQuiz()
            : isCached && nOrp
              ? (window.location.href =
                  cacheURL2 +
                  t.split('images/background.png').join('index.html'))
              : offlinePopup2()));
    });
  });
}
function checkAllURLCache() {
  var e = bbGroups[lessonNumber - 1].split('-');
  isCached = !0;
  for (var t = (cacheCount = 0); t < e.length; t++)
    checkURLCache2(currentSecShort + '/' + e[t] + '/images/background.png');
}
function checkAllURLCache2() {
  var e = bbGroups[lessonNumber - 2].split('-');
  isCached = !0;
  for (var t = (cacheCount = 0); t < e.length; t++)
    checkURLCache2(currentSecShort + '/' + e[t] + '/images/background.png');
}
function offlinePopup2() {
  (0 == $('#offPop').length
    ? $('body').append(
        '<div id="offPop" style="position: fixed; background: #222; color: white; border-radius: 10px; font-size: 25px; line-height: 20px; top: 0; right: 0; bottom: 0; left: 0; margin: auto auto; padding: 30px 15px 50px 15px; height: 90px; width: 410px; z-index: 10000; text-align: center; font-weight: 700;"><strong style="color: #ffbd3b;">NOT AVAILABLE OFFLINE</strong><br><br><span style="font-size: 16px;font-weight: 300;">Please download <strong style="color: #ffbd3b;">all</strong> lessons from this group when online by clicking on <strong style="font-size: 20px;color: #ffbd3b;">&#10515;</strong> on the top-right corner of the lesson thumbnails.</span></div>',
      )
    : ($('#offPop').show(), $('#loadLogo').hide()),
    setTimeout(function () {
      $('#offPop').fadeOut();
    }, 4e3));
}
function offlinePopup() {
  (0 == $('#offPop').length
    ? $('body').append(
        '<div id="offPop" style="position: fixed; background: #222; color: white; border-radius: 10px; font-size: 25px; line-height: 20px; top: 0; right: 0; bottom: 0; left: 0; margin: auto auto; padding: 30px 15px 50px 15px; height: 90px; width: 410px; z-index: 10000; text-align: center; font-weight: 700;"><strong style="color: #ffbd3b;">NOT AVAILABLE OFFLINE</strong><br><br><span style="font-size: 16px;font-weight: 300;">Please download this lesson when online by clicking on <strong style="font-size: 20px;color: #ffbd3b;">&#10515;</strong> on the top-right corner of the lesson thumbnails.</span></div>',
      )
    : $('#offPop').show(),
    setTimeout(function () {
      ($('#offPop').fadeOut(), $('#loadLogo').hide());
    }, 4e3));
}
function nextLesson() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      var e = !1;
      if (
        (localStorage[storeInfo + 'recommendPath2020'] ||
          localStorage[storeInfo + 'recommendVerb2020'] ||
          (e = !0),
        'guidedSection' != sessionStorage.menuType &&
          'verbSection' != sessionStorage.menuType &&
          (e = !0),
        e)
      ) {
        var t =
          'Spanish' == lessonLanguage &&
          22 == lessonNumber &&
          'verb' == currentSecShort
            ? '167'
            : 'Spanish' == lessonLanguage &&
                169 == lessonNumber &&
                'verb' == currentSecShort
              ? '23'
              : 'Spanish' == lessonLanguage &&
                  166 == lessonNumber &&
                  'verb' == currentSecShort
                ? '170'
                : (lessonNumber != numberOfLessons
                    ? lessonNumber + 1
                    : 1
                  ).toString();
        if ('pwa' == osType)
          if (sessionStorage.getItem('offlineSession')) {
            if (
              'block' == currentSecShort &&
              'lesson' == quizLessonBoth &&
              numOfAllQuiz == t
            )
              return ((nOrp = !0), void checkAllURLCache());
            checkURLCache(currentSecShort + '/' + t + '/images/background.png');
          } else
            ($('#loadLogo').show(),
              setTimeout(function () {
                window.location = '../' + t + '/index.html';
              }, 100));
        else
          ($('#loadLogo').show(),
            setTimeout(function () {
              window.location = '../' + t + '/index.html';
            }, 100));
      } else {
        var o =
            localStorage.getItem(lessonLanguage + 'legacyPath') &&
            localStorage.getItem(storeInfo + 'recommendPath2018')
              ? localStorage.getItem(storeInfo + 'recommendPath2018').split('|')
              : 'verbSection' == sessionStorage.menuType &&
                  localStorage.getItem(storeInfo + 'recommendVerb2020')
                ? localStorage
                    .getItem(storeInfo + 'recommendVerb2020')
                    .split('|')
                : ('guidedSection' == sessionStorage.menuType &&
                    localStorage.getItem(storeInfo + 'recommendPath2020'),
                  localStorage
                    .getItem(storeInfo + 'recommendPath2020')
                    .split('|')),
          n = window.location.href;
        ((n = (n = n.toLowerCase().split('/'))[n.length - 3] + n[n.length - 2]),
          (e = o.indexOf(n) != o.length - 1 ? o.indexOf(n) + 1 : 0));
        var s = (n = o[e]).replace(/[0-9]/g, ''),
          a = n
            .split('block')
            .join('')
            .split('vocab')
            .join('')
            .split('verb')
            .join('')
            .split('convo')
            .join('')
            .split('pronun')
            .join('');
        if ('pwa' == osType && sessionStorage.getItem('offlineSession')) {
          if ('block' == s && 'lesson' == quizLessonBoth && numOfAllQuiz == a)
            return ((nOrp = !0), void checkAllURLCache());
          checkURLCache(s + '/' + a + '/images/background.png');
        } else
          ($('#loadLogo').show(),
            setTimeout(function () {
              window.location = '../../' + s + '/' + a + '/index.html';
            }, 100));
      }
    }, 100));
}
function previousLesson() {
  if ('undefined' != typeof flNums)
    return (
      $('#loadLogo').show(),
      void setTimeout(function () {
        window.location = '../../flash/index.html';
      }, 100)
    );
  ($('#loadLogo').show(),
    setTimeout(function () {
      var e = !1;
      if (
        (localStorage[storeInfo + 'recommendPath2020'] ||
          localStorage[storeInfo + 'recommendVerb2020'] ||
          (e = !0),
        'guidedSection' != sessionStorage.menuType &&
          'verbSection' != sessionStorage.menuType &&
          (e = !0),
        e)
      ) {
        var t =
          'Spanish' == lessonLanguage &&
          167 == lessonNumber &&
          'verb' == currentSecShort
            ? '22'
            : 'Spanish' == lessonLanguage &&
                1 == lessonNumber &&
                'verb' == currentSecShort
              ? '204'
              : 'Spanish' == lessonLanguage &&
                  170 == lessonNumber &&
                  'verb' == currentSecShort
                ? '166'
                : 'Spanish' == lessonLanguage &&
                    23 == lessonNumber &&
                    'verb' == currentSecShort
                  ? '169'
                  : (1 != lessonNumber
                      ? lessonNumber - 1
                      : numberOfLessons
                    ).toString();
        if ('pwa' == osType)
          if (sessionStorage.getItem('offlineSession')) {
            if ('block' == currentSecShort) {
              var o = bbGroups[lessonNumber - 2].split('-');
              if (1 < o.length) {
                var n = parseInt(o.pop());
                if (lessonNumber - 1 == n)
                  return ((nOrp = !0), void checkAllURLCache2());
              }
            }
            checkURLCache(currentSecShort + '/' + t + '/images/background.png');
          } else
            ($('#loadLogo').show(),
              setTimeout(function () {
                window.location = '../' + t + '/index.html';
              }, 100));
        else
          ($('#loadLogo').show(),
            setTimeout(function () {
              window.location = '../' + t + '/index.html';
            }, 100));
      } else {
        ((e =
          localStorage.getItem(lessonLanguage + 'legacyPath') &&
          localStorage.getItem(storeInfo + 'recommendPath2018')
            ? localStorage.getItem(storeInfo + 'recommendPath2018').split('|')
            : 'verbSection' == sessionStorage.menuType &&
                localStorage.getItem(storeInfo + 'recommendVerb2020')
              ? localStorage.getItem(storeInfo + 'recommendVerb2020').split('|')
              : ('guidedSection' == sessionStorage.menuType &&
                  localStorage.getItem(storeInfo + 'recommendPath2020'),
                localStorage
                  .getItem(storeInfo + 'recommendPath2020')
                  .split('|'))),
          (o = window.location.href));
        ((o = (o = o.toLowerCase().split('/'))[o.length - 3] + o[o.length - 2]),
          (n = 0 != e.indexOf(o) ? e.indexOf(o) - 1 : e.length - 1));
        var s = (o = e[n]).replace(/[0-9]/g, ''),
          a = o
            .split('block')
            .join('')
            .split('vocab')
            .join('')
            .split('verb')
            .join('')
            .split('convo')
            .join('')
            .split('pronun')
            .join('');
        if ('pwa' == osType)
          if (sessionStorage.getItem('offlineSession')) {
            if ('block' == s) return ((nOrp = !0), void checkAllURLCache());
            checkURLCache(s + '/' + a + '/images/background.png');
          } else
            ($('#loadLogo').show(),
              setTimeout(function () {
                window.location = '../../' + s + '/' + a + '/index.html';
              }, 100));
        else
          ($('#loadLogo').show(),
            setTimeout(function () {
              window.location = '../../' + s + '/' + a + '/index.html';
            }, 100));
      }
    }, 100));
}
function homeMenu() {
  (clearTimeout(saveTime),
    localStorage.removeItem(storeInfo + 'saved'),
    $('#loadLogo').show(),
    setTimeout(function () {
      ((sessionStorage.menuType = 'home'),
        'iOS' == osType || -1 != osType.indexOf('droid')
          ? (window.location = '../../home.html')
          : (window.location = '../../index.html'));
    }, 100));
}
function mainMenu() {
  if ((clearTimeout(saveTime), 'undefined' != typeof flNums))
    return (
      $('#loadLogo').show(),
      void setTimeout(function () {
        window.location = '../../flash/index.html';
      }, 100)
    );
  var e = localStorage.getItem(storeInfo + 'savedMenu');
  (e && (sessionStorage.menuType = e),
    localStorage.removeItem(storeInfo + 'saved'),
    $('#loadLogo').show(),
    setTimeout(function () {
      'iOS' == osType || -1 != osType.indexOf('droid')
        ? (window.location = '../../home.html')
        : (window.location = '../../index.html');
    }, 100));
}
function loadCombinedQuiz() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      window.location = '../' + numOfAllQuiz + '/index.html';
    }, 100));
}
function localStorageInit() {
  var e,
    t = localStorage[storeInfo + 'musicSTORE' + currentSecShort];
  null == t || 'null' == t
    ? $('#selectSound').prop('selectedIndex', 0)
    : ((e = '#selectSound option[value="' + t + '"]'),
      (o = $(e).index()),
      $('#selectSound').prop('selectedIndex', o));
  t = localStorage[storeInfo + 'playbackSTORE' + currentSecShort];
  null == t || 'null' == t
    ? $('#selectPlayback').prop('selectedIndex', 0)
    : ((e = '#selectPlayback option[value="' + t + '"]'),
      (o = $(e).index()),
      $('#selectPlayback').prop('selectedIndex', o));
  t = localStorage[storeInfo + 'intervalSTORE' + currentSecShort];
  (null == t || 'null' == t
    ? $('#selectInterval').prop('selectedIndex', 3)
    : ((e = '#selectInterval option[value="' + t + '"]'),
      (o = $(e).index()),
      $('#selectInterval').prop('selectedIndex', o)),
    toggleInterval());
  var o,
    t = localStorage[storeInfo + 'textSTORE' + currentSecShort];
  (null == t || 'null' == t
    ? $('#selectText').prop('selectedIndex', 0)
    : ((e = '#selectText option[value="' + t + '"]'),
      (o = $(e).index()),
      $('#selectText').prop('selectedIndex', o),
      toggleText2()),
    null != localStorage[storeInfo + 'starSTORE' + currentSecShort] &&
      ((knowledgeStars =
        localStorage[storeInfo + 'starSTORE' + currentSecShort].split(':')),
      (o = 'star' + knowledgeStars[lessonNumber - 1]),
      $('.menuStars').attr('src', '../../common/' + o + '.svg'),
      'star1' == o && $('.starTitle').text('Knowledge Level: LOW'),
      'star2' == o && $('.starTitle').text('Knowledge Level: AVERAGE'),
      'star3' == o && $('.starTitle').text('Knowledge Level: GOOD'),
      'star4' == o && $('.starTitle').text('Knowledge Level: EXCELLENT')),
    (slidesNum =
      null != localStorage[storeInfo + 'slideInfo']
        ? localStorage[storeInfo + 'slideInfo'].split(':')
        : [
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
            '0',
          ]));
  for (var n = 0; n < slidesPres.length; n++)
    '1' != slidesNum[slidesPres[n] - 1] && (slideOn = !0);
  null != localStorage[storeInfo + 'scoreSTORE' + currentSecShort] &&
    (quizScores =
      localStorage[storeInfo + 'scoreSTORE' + currentSecShort].split(':'));
}
function yifzq67(e) {
  e = e.replace(/[a-z]/gi, function (e) {
    return (
      ('{' != (e = String.fromCharCode(e.charCodeAt(0) + 1)) && '[' != e) ||
        (e = 'a'),
      /[aeiuo]/.test(e) && (e = e.toUpperCase()),
      e
    );
  });
  return e
    .replace('0', 'a')
    .replace('1', 'b')
    .replace('2', 'c')
    .replace('3', 'd')
    .replace('4', 'e')
    .replace('5', 'f')
    .replace('6', 'g')
    .replace('7', 'h')
    .replace('8', 'i')
    .replace('9', 'j');
}
function checkConnection() {
  var e = new XMLHttpRequest(),
    t = setTimeout(function () {
      (e.abort(),
        null != localStorage[storeInfo + 'activationSTORE']
          ? offlineMessage()
          : ($('#loginTitle').addClass('loginTitleHover'),
            $('#loginTitle').text(
              'Error: Offline profile not found on this computer.',
            )));
    }, 3e3),
    o = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + jGWFQ + cWbBT;
  (e.open('POST', o, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      4 == e.readyState &&
        200 == e.status &&
        ('pwa' != osType || -1 == e.responseURL.indexOf('offline')
          ? (clearTimeout(t),
            'false' != e.responseText && 500 < e.responseText.length
              ? ($('#loginCenter').show(),
                localStorage.removeItem('STAYLOGGEDIN'),
                localStorage.removeItem('activationSTORE'),
                $('#loginTitle').addClass('loginTitleHover'),
                $('#loginTitle').text('Account not found. Try again.'),
                localStorage.removeItem('userEmailSTORE'),
                localStorage.removeItem('tuvm58djSTORE'),
                localStorage.removeItem('STAYLOGGEDIN'),
                localStorage.removeItem(storeInfo + 'activationSTORE'),
                localStorage.removeItem(storeInfo + 'userEmailSTORE'),
                localStorage.removeItem(storeInfo + 'tuvm58djSTORE'),
                $('#emailField').val(''),
                $('#jguyr4').val(''))
              : null != localStorage[storeInfo + 'activationSTORE']
                ? offlineMessage()
                : ($('#loginTitle').addClass('loginTitleHover'),
                  $('#loginTitle').text(
                    'Error: Offline profile not found on this computer.',
                  )))
          : null != localStorage[storeInfo + 'activationSTORE']
            ? offlineMessage()
            : ($('#loginTitle').addClass('loginTitleHover'),
              $('#loginTitle').text(
                'Error: Offline profile not found on this computer.',
              )));
    }));
  try {
    e.send('email=test@ouino.com&password=test&product=test');
  } catch (e) {
    null != localStorage[storeInfo + 'activationSTORE']
      ? offlineMessage()
      : ($('#loginTitle').addClass('loginTitleHover'),
        $('#loginTitle').text(
          'Error: Offline profile not found on this computer.',
        ));
  }
}
function databaseInit() {
  null != localStorage.STAYLOGGEDIN
    ? ((localStorage.userEmailSTORE = userEmail),
      (localStorage.tuvm58djSTORE = tuvm58dj))
    : (localStorage.removeItem('userEmailSTORE'),
      localStorage.removeItem('tuvm58djSTORE'));
  var e = new XMLHttpRequest(),
    t = setTimeout(function () {
      (e.abort(),
        null != localStorage[storeInfo + 'activationSTORE']
          ? offlineMessage()
          : ($('#loginTitle').addClass('loginTitleHover'),
            $('#loginTitle').text('Error: Internet required on first use.')));
    }, 3e3),
    o = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + jGWFQ + cWbBT,
    n =
      'email=' +
      userEmail +
      '&password=' +
      tuvm58dj +
      userEmail.substring(1, 3) +
      '&product=' +
      lessonLanguage;
  (e.open('POST', o, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      4 == e.readyState &&
        200 == e.status &&
        ('pwa' != osType || -1 == e.responseURL.indexOf('offline')
          ? (clearTimeout(t),
            'false' != e.responseText && 500 < e.responseText.length
              ? ($('#loginCover').hide(),
                (localStorage[storeInfo + 'activationSTORE'] = 'activated'),
                (localStorage[storeInfo + 'userEmailSTORE'] = userEmail),
                (localStorage[storeInfo + 'tuvm58djSTORE'] = tuvm58dj),
                (sessionStorage.userEmailSTORE = userEmail),
                (sessionStorage.tuvm58djSTORE = tuvm58dj),
                (sessionStorage.LOGGEDIN = 'User logged in'),
                (userInfo = e.responseText.split(', ').join('ZZZZ').split(',')),
                (null == localStorage[storeInfo + 'wasOfflineSTORE']
                  ? initUpdateFROMdb
                  : initUpdateTOdb)())
              : checkConnection())
          : null != localStorage[storeInfo + 'activationSTORE']
            ? offlineMessage()
            : ($('#loginTitle').addClass('loginTitleHover'),
              $('#loginTitle').text('Internet required on first use.')));
    }));
  try {
    e.send(n);
  } catch (e) {
    null != localStorage[storeInfo + 'activationSTORE']
      ? offlineMessage()
      : ($('#loginTitle').addClass('loginTitleHover'),
        $('#loginTitle').text('Internet required on first use.'));
  }
}
function updateDatabase(t = 0) {
  if (
    (0 !== lessonNumber || 'cards' == fieldToUpdate) &&
    (':' == infoToUpdate.charAt(infoToUpdate.length - 1) &&
      (infoToUpdate += '0'),
    ':' == infoToUpdate.charAt(0) && (infoToUpdate = '0' + infoToUpdate),
    (infoToUpdate = infoToUpdate.split('::').join(':0:')),
    'verbScores' == fieldToUpdate &&
      (infoToUpdate = infoToUpdate
        .split('110|110|110|0')
        .join('100|100|100|0')
        .split('104|104|104|0')
        .join('94|94|94|0')),
    'pwa' != osType || !sessionStorage.getItem('offlineSession'))
  ) {
    var e = new XMLHttpRequest(),
      o = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + cWbBT,
      n =
        'email=' +
        userEmail +
        '&password=' +
        tuvm58dj +
        userEmail.substring(1, 3) +
        '&fieldToUpdate=' +
        fieldToUpdate +
        '&infoToUpdate=' +
        infoToUpdate +
        '&lessonLang=' +
        lessonLanguage;
    (e.open('POST', o, !0),
      e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      (e.onload = function () {
        (200 <= e.status && e.status < 400) ||
          (t < 2 &&
            setTimeout(function () {
              updateDatabase(t + 1);
            }, 3e3));
      }),
      (e.onerror = function () {
        t < 2 &&
          setTimeout(function () {
            updateDatabase(t + 1);
          }, 3e3);
      }));
    try {
      e.send(n);
    } catch (e) {
      t < 2
        ? setTimeout(function () {
            updateDatabase(t + 1);
          }, 3e3)
        : offlineMessage();
    }
  }
}
function updateGroup() {
  if (
    !(
      (0 === lessonNumber && 'cards' != fieldToUpdate) ||
      ('pwa' == osType && sessionStorage.getItem('offlineSession'))
    )
  ) {
    var e = new XMLHttpRequest(),
      t = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + 'Group' + cWbBT,
      o =
        'email=' +
        userEmail +
        '&password=' +
        tuvm58dj +
        userEmail.substring(1, 3) +
        '&fieldToUpdate=' +
        fieldToUpdate +
        '&infoToUpdate=' +
        infoToUpdate +
        '&lessonLang=' +
        lessonLanguage;
    (e.open('POST', t, !0),
      e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'));
    try {
      e.send(o);
    } catch (e) {
      offlineMessage();
    }
  }
}
function offlineMessage() {
  tuvm58dj == localStorage[storeInfo + 'tuvm58djSTORE']
    ? ((sessionStorage.userEmailSTORE = userEmail),
      (sessionStorage.tuvm58djSTORE = tuvm58dj),
      (sessionStorage.LOGGEDIN = 'User logged in'),
      (localStorage[storeInfo + 'numUseSTORE'] =
        parseInt(localStorage[storeInfo + 'numUseSTORE']) + 1),
      (localStorage[storeInfo + 'wasOfflineSTORE'] = 'true'),
      localStorageInit(),
      null == sessionStorage.OFFLINEWARNING &&
      null == localStorage[storeInfo + 'offlineCheckSTORE']
        ? ((sessionStorage.OFFLINEWARNING = 'warned'),
          $('#loginCover').show(),
          $('#loginCenter').hide(),
          $('#loginOffline').show())
        : $('#loginCover').is(':visible') && $('#loginCover').hide())
    : ($('#loginTitle').addClass('loginTitleHover'),
      $('#loginTitle').text(
        'Error: Offline profile not found on this computer.',
      ),
      $('#jguyr4').val(''));
}
function updateOptions() {
  ((infoToUpdate =
    $('#selectSound').val() +
    ':' +
    $('#selectPlayback').val() +
    ':' +
    $('#selectInterval').val() +
    ':' +
    $('#selectText').val()),
    (fieldToUpdate = currentSecShort + 'Options'),
    updateDatabase());
}
function updateStars() {
  ((infoToUpdate = knowledgeStars.toString().split(',').join(':')),
    (localStorage[storeInfo + 'starSTORE' + currentSecShort] = infoToUpdate),
    (fieldToUpdate = currentSecShort + 'Stars'),
    updateDatabase());
}
function initUpdateFROMdb() {
  var e = userInfo[4].split(':');
  ((localStorage[storeInfo + 'musicSTOREvocab'] = e[0]),
    (localStorage[storeInfo + 'playbackSTOREvocab'] = e[1]),
    (localStorage[storeInfo + 'intervalSTOREvocab'] = e[2]),
    (localStorage[storeInfo + 'textSTOREvocab'] = e[3]),
    (localStorage[storeInfo + 'starSTOREvocab'] = userInfo[5]),
    (localStorage[storeInfo + 'scoreSTOREvocab'] = userInfo[6]),
    (e = userInfo[7].split(':')),
    (localStorage[storeInfo + 'musicSTOREconvo'] = e[0]),
    (localStorage[storeInfo + 'playbackSTOREconvo'] = e[1]),
    (localStorage[storeInfo + 'intervalSTOREconvo'] = e[2]),
    (localStorage[storeInfo + 'textSTOREconvo'] = e[3]),
    (localStorage[storeInfo + 'starSTOREconvo'] = userInfo[8]),
    (localStorage[storeInfo + 'scoreSTOREconvo'] = userInfo[9]),
    (e = userInfo[10].split(':')),
    (localStorage[storeInfo + 'musicSTOREverb'] = e[0]),
    (localStorage[storeInfo + 'playbackSTOREverb'] = e[1]),
    (localStorage[storeInfo + 'intervalSTOREverb'] = e[2]),
    (localStorage[storeInfo + 'textSTOREverb'] = e[3]),
    (localStorage[storeInfo + 'starSTOREverb'] = userInfo[11]),
    (localStorage[storeInfo + 'scoreSTOREverb'] = userInfo[12]),
    (e = userInfo[13].split(':')),
    (localStorage[storeInfo + 'musicSTOREblock'] = e[0]),
    (localStorage[storeInfo + 'playbackSTOREblock'] = e[1]),
    (localStorage[storeInfo + 'intervalSTOREblock'] = e[2]),
    (localStorage[storeInfo + 'textSTOREblock'] = e[3]),
    (localStorage[storeInfo + 'starSTOREblock'] = userInfo[14]),
    (localStorage[storeInfo + 'scoreSTOREblock'] = userInfo[15]),
    (localStorage[storeInfo + 'starSTOREpronun'] = userInfo[16]),
    (localStorage[storeInfo + 'slideInfo'] = userInfo[22]),
    'yes' == userInfo[17] &&
      ($('body').append(
        "<div style='position:fixed; width: 100%; top: 0; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: 0; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>" +
          userInfo[18].split('ZZZZ').join(', ') +
          '</div></div>',
      ),
      localStorage.removeItem('userEmailSTORE'),
      localStorage.removeItem('tuvm58djSTORE')),
    (localStorage[storeInfo + 'numUseSTORE'] = userInfo[0]),
    (infoToUpdate = parseInt(userInfo[0]) + 1),
    (fieldToUpdate = 'userUse'),
    updateGroup());
  var t = 'Unknown OS',
    e = screen.height + 'x' + screen.width;
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? /Android/i.test(navigator.userAgent)
      ? (t = 'Android')
      : /iPad/i.test(navigator.userAgent)
        ? (t = 'iPad')
        : /iPhone/i.test(navigator.userAgent)
          ? (t = 'iPhone')
          : /iPod/i.test(navigator.userAgent)
            ? (t = 'iPod')
            : /BlackBerry/i.test(navigator.userAgent)
              ? (t = 'BlackBerry')
              : /IEMobile/i.test(navigator.userAgent)
                ? (t = 'IEMobile')
                : /Opera Mini/i.test(navigator.userAgent)
                  ? (t = 'Opera Mini')
                  : /webOS/i.test(navigator.userAgent) && (t = 'webOS')
    : (-1 != navigator.appVersion.indexOf('Win') && (t = 'Windows'),
      -1 != navigator.appVersion.indexOf('Mac') && (t = 'MacOSX'),
      -1 != navigator.appVersion.indexOf('X11') && (t = 'UNIX'),
      -1 != navigator.appVersion.indexOf('Linux') && (t = 'Linux'));
  t = t + e + ': (' + userInfo[1] + ')';
  ((e = userInfo[3].split(' / ')).push(t),
    e.sort(),
    '' == (e = unique(e))[0] && e.shift());
  ((t = e.length), (e = unique(e).join(' / ')));
  ((infoToUpdate = t),
    (fieldToUpdate = 'deviceNum'),
    updateGroup(),
    (infoToUpdate = e),
    (fieldToUpdate = 'deviceIDs'),
    updateGroup(),
    localStorageInit());
}
function initUpdateTOdb() {
  (localStorage.removeItem(storeInfo + 'wasOfflineSTORE'),
    (infoToUpdate = parseInt(localStorage[storeInfo + 'numUseSTORE']) + 1),
    (fieldToUpdate = 'userUse'),
    updateGroup(),
    (infoToUpdate =
      localStorage[storeInfo + 'musicSTOREvocab'] +
      ':' +
      localStorage[storeInfo + 'playbackSTOREvocab'] +
      ':' +
      localStorage[storeInfo + 'intervalSTOREvocab'] +
      ':' +
      localStorage[storeInfo + 'textSTOREvocab']),
    (fieldToUpdate = 'vocabOptions'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'starSTOREvocab']),
    (fieldToUpdate = 'vocabStars'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'scoreSTOREvocab']),
    (fieldToUpdate = 'vocabScores'),
    updateDatabase(),
    (infoToUpdate =
      localStorage[storeInfo + 'musicSTOREconvo'] +
      ':' +
      localStorage[storeInfo + 'playbackSTOREconvo'] +
      ':' +
      localStorage[storeInfo + 'intervalSTOREconvo'] +
      ':' +
      localStorage[storeInfo + 'textSTOREconvo']),
    (fieldToUpdate = 'convoOptions'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'starSTOREconvo']),
    (fieldToUpdate = 'convoStars'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'scoreSTOREconvo']),
    (fieldToUpdate = 'convoScores'),
    updateDatabase(),
    (infoToUpdate =
      localStorage[storeInfo + 'musicSTOREverb'] +
      ':' +
      localStorage[storeInfo + 'playbackSTOREverb'] +
      ':' +
      localStorage[storeInfo + 'intervalSTOREverb'] +
      ':' +
      localStorage[storeInfo + 'textSTOREverb']),
    (fieldToUpdate = 'verbOptions'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'starSTOREverb']),
    (fieldToUpdate = 'verbStars'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'scoreSTOREverb']),
    (fieldToUpdate = 'verbScores'),
    updateDatabase(),
    (infoToUpdate =
      localStorage[storeInfo + 'musicSTOREblock'] +
      ':' +
      localStorage[storeInfo + 'playbackSTOREblock'] +
      ':' +
      localStorage[storeInfo + 'intervalSTOREblock'] +
      ':' +
      localStorage[storeInfo + 'textSTOREblock']),
    (fieldToUpdate = 'blockOptions'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'starSTOREblock']),
    (fieldToUpdate = 'blockStars'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'scoreSTOREblock']),
    (fieldToUpdate = 'blockScores'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'starSTOREpronun']),
    (fieldToUpdate = 'pronunStars'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'goalsSTORE']),
    (fieldToUpdate = 'goals'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'extraScoresSTORE']),
    (fieldToUpdate = 'extraScores'),
    updateDatabase(),
    (infoToUpdate = localStorage[storeInfo + 'slideInfo']),
    (fieldToUpdate = 'slides'),
    updateDatabase(),
    localStorageInit());
}
function addRegisterData() {
  ($('#activationField').val(''),
    $('#nameFieldSet').val(''),
    $('#emailFieldSet').val(''),
    $('#emailFieldSet2').val(''),
    $('#jguyr4Set').val(''),
    $('#jguyr4Set2').val(''),
    (registerLoaded = 'true'),
    'mobile' == currentDevice
      ? ($('#doneRegisterBtn').on('click', function () {
          (disableTouch(), $('#registerCover').hide());
        }),
        $('#doneRegisterBtn2').on('click', function () {
          (disableTouch(),
            $('#warningWrap').hide(),
            $('.registerTitle').text('Create a Ouino Account'));
        }),
        $('#doneLogInBtn').on('click', function () {
          (disableTouch(),
            $('#loginCover').hide(),
            $('#registerCover').hide(),
            $('#warningWrap').hide(),
            databaseInit());
        }))
      : ($('#doneRegisterBtn').on('click', function () {
          $('#registerCover').hide();
        }),
        $('#doneRegisterBtn2').on('click', function () {
          ($('#warningWrap').hide(),
            $('.registerTitle').text('Create a Ouino Account'));
        }),
        $('#doneLogInBtn').on('click', function () {
          ($('#loginCover').hide(),
            $('#registerCover').hide(),
            $('#warningWrap').hide(),
            databaseInit());
        })),
    $('#activationField').focus(function () {
      ($('.registerTitle').hasClass('loginTitleHover') &&
        ($('.registerTitle').removeClass('loginTitleHover'),
        $('.registerTitle').text('Create a Ouino Account')),
        $('#activationText').hasClass('loginTitleHover') &&
          ($('#activationText').removeClass('loginTitleHover'),
          $('#activationText').text('Enter your activation key.')));
    }),
    $(
      '#jguyr4Set, #jguyr4Set2, #emailFieldSet, #emailFieldSet2, #nameFieldSet',
    ).focus(function () {
      ($('.registerTitle').hasClass('loginTitleHover') &&
        ($('.registerTitle').removeClass('loginTitleHover'),
        $('.registerTitle').text('Create a Ouino Account')),
        $('#accountCreateText').hasClass('loginTitleHover') &&
          ($('#accountCreateText').removeClass('loginTitleHover'),
          $('#accountCreateText').text('Create your login information.')));
    }),
    $('#registerForm').submit(function (e) {
      (e.preventDefault(),
        (userActivation = $('#activationField').val().split(' ').join('')),
        (userName = $('#nameFieldSet').val()),
        (userEmail = $('#emailFieldSet').val().split(' ').join('')),
        (storeInfo = langShort + userEmail),
        (userEmailVerify = $('#emailFieldSet2').val().split(' ').join('')),
        (tuvm58dj = yifzq67($('#jguyr4Set').val().split(' ').join(''))),
        (tuvm58djVerify = yifzq67($('#jguyr4Set2').val().split(' ').join(''))),
        tuvm58dj == tuvm58djVerify &&
        userEmail == userEmailVerify &&
        '' != userName &&
        '' != userEmail &&
        '' != tuvm58dj
          ? ($('.registerTitle').text('Looking on server...'),
            setTimeout(registerInit, 0))
          : userEmail != userEmailVerify
            ? ($('#accountCreateText').addClass('loginTitleHover'),
              $('#accountCreateText').text("Error: Emails don't match."))
            : tuvm58dj != tuvm58djVerify
              ? ($('#accountCreateText').addClass('loginTitleHover'),
                $('#accountCreateText').text("Error: Passwords don't match."))
              : ($('#accountCreateText').addClass('loginTitleHover'),
                $('#accountCreateText').text('Error: All fields required.')));
    }));
}
function addPasswordData() {
  ((passwordLoaded = 'true'),
    $('#emailFieldReset').val(''),
    $('#resetCodeField').val(''),
    $('#jguyr4Reset').val(''),
    $('#jguyr4Reset2').val(''),
    'mobile' == currentDevice
      ? ($('#hidePasswordBtn').on('click', function () {
          (disableTouch(), $('#passwordWrap').hide());
        }),
        $('#hidePasswordBtn2').on('click', function () {
          (disableTouch(), $('#passwordReset').hide());
        }),
        $('#doneRegisterBtn3').on('click', function () {
          (disableTouch(), $('#warningWrap2').hide());
        }),
        $('#passwordSkipBtn').on('click', function () {
          (disableTouch(),
            $('#passwordWrap').hide(),
            $('#passwordReset').show());
        }))
      : ($('#hidePasswordBtn').on('click', function () {
          $('#passwordWrap').hide();
        }),
        $('#hidePasswordBtn2').on('click', function () {
          $('#passwordReset').hide();
        }),
        $('#doneRegisterBtn3').on('click', function () {
          $('#warningWrap2').hide();
        }),
        $('#passwordSkipBtn').on('click', function () {
          ($('#passwordWrap').hide(), $('#passwordReset').show());
        })),
    $('#passwordForm').submit(function (e) {
      (e.preventDefault(),
        (userEmail2 = $('#emailFieldReset').val().split(' ').join('')),
        $('#passwordTitle').text('Looking on server...'),
        setTimeout(sendResetCode, 0));
    }),
    $('#passwordForm2').submit(function (e) {
      (e.preventDefault(),
        (tuvm58dj2 = yifzq67($('#jguyr4Reset').val().split(' ').join(''))),
        (tuvm58dj2Verify = yifzq67(
          $('#jguyr4Reset2').val().split(' ').join(''),
        )),
        (resetCode = $('#resetCodeField').val().split(' ').join('')),
        tuvm58dj2 == tuvm58dj2Verify
          ? ($('#passwordTitle2').text('Looking on server...'),
            setTimeout(resetPassword, 0))
          : ($('#passwordTitle2').addClass('loginTitleHover'),
            $('#passwordTitle2').text("Error: Passwords don't match.")));
    }),
    $('#emailFieldReset').focus(function () {
      $('#passwordTitle').hasClass('loginTitleHover') &&
        ($('#passwordTitle').removeClass('loginTitleHover'),
        $('#passwordTitle').text('Account Password Reset'));
    }),
    $('#jguyr4Reset, #jguyr4Reset2, #resetCodeField').focus(function () {
      $('#passwordTitle2').hasClass('loginTitleHover') &&
        ($('#passwordTitle2').removeClass('loginTitleHover'),
        $('#passwordTitle2').text('Account Password Reset'));
    }));
}
function sendResetCode() {
  $('#passwordTitle').text('Account Password Reset');
  var e = new XMLHttpRequest(),
    t = setTimeout(function () {
      (e.abort(),
        $('#passwordTitle').addClass('loginTitleHover'),
        $('#passwordTitle').text('OFFLINE: Internet required'));
    }, 3e3),
    o = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + QjSKe + cWbBT,
    n = 'email=' + userEmail2;
  (e.open('POST', o, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        if ('pwa' == osType && -1 != e.responseURL.indexOf('offline'))
          return (
            $('#passwordTitle').addClass('loginTitleHover'),
            void $('#passwordTitle').text('OFFLINE: Internet required')
          );
        (clearTimeout(t),
          0 != e.responseText.split(',')[0]
            ? ($('#passwordWrap').hide(), $('#passwordReset').show())
            : ($('#passwordTitle').addClass('loginTitleHover'),
              $('#passwordTitle').text('ERROR: Account not found.')));
      }
    }));
  try {
    e.send(n);
  } catch (e) {
    ($('#passwordTitle').addClass('loginTitleHover'),
      $('#passwordTitle').text('OFFLINE: Internet required'));
  }
}
function resetPassword() {
  $('#passwordTitle2').text('Account Password Reset');
  var e = new XMLHttpRequest(),
    t = setTimeout(function () {
      (e.abort(),
        $('#passwordTitle2').addClass('loginTitleHover'),
        $('#passwordTitle2').text('OFFLINE: Internet required'));
    }, 3e3),
    o = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + MJhei + cWbBT,
    n =
      'resetCode=' +
      resetCode +
      '&password=' +
      tuvm58dj2 +
      userEmail2.substring(1, 3) +
      '&email=' +
      userEmail2;
  (e.open('POST', o, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        if ('pwa' == osType && -1 != e.responseURL.indexOf('offline'))
          return (
            $('#passwordTitle2').addClass('loginTitleHover'),
            void $('#passwordTitle2').text('OFFLINE: Internet required')
          );
        (clearTimeout(t),
          0 != e.responseText.split(',')[0]
            ? ($('#passwordReset').hide(), $('#warningWrap2').show())
            : ($('#passwordTitle2').addClass('loginTitleHover'),
              $('#passwordTitle2').text('ERROR: Code not found.')));
      }
    }));
  try {
    e.send(n);
  } catch (e) {
    ($('#passwordTitle2').addClass('loginTitleHover'),
      $('#passwordTitle2').text('OFFLINE: Internet required'));
  }
}
function registerInit() {
  var n = new XMLHttpRequest(),
    s = setTimeout(function () {
      (n.abort(),
        $('.registerTitle').addClass('loginTitleHover'),
        $('.registerTitle').text('OFFLINE: Internet required'));
    }, 3e3),
    e = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + PbWjZ + cWbBT,
    t =
      'activation=' +
      userActivation +
      '&name=' +
      userName +
      '&email=' +
      userEmail +
      '&password=' +
      tuvm58dj +
      userEmail.substring(1, 3);
  (n.open('POST', e, !0),
    n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (n.onreadystatechange = function () {
      if (4 == n.readyState && 200 == n.status) {
        if ('pwa' == osType && -1 != n.responseURL.indexOf('offline'))
          return (
            $('.registerTitle').addClass('loginTitleHover'),
            void $('.registerTitle').text('OFFLINE: Internet required')
          );
        clearTimeout(s);
        var e = n.responseText.split(','),
          t = e[3],
          o = e[1],
          e = e[0];
        (0 != t &&
          ($('#accountCreateText').addClass('loginTitleHover'),
          $('#accountCreateText').text('Account Already Exists.'),
          $('.registerTitle').text('Create a Ouino Account')),
          '' == o &&
            ($('#activationText').addClass('loginTitleHover'),
            $('#activationText').text('Activation Key not Found.')),
          '' != o &&
            0 == t &&
            ('1' == e
              ? ('../../common/checkOn.svg' ==
                  $('#rememberCheck').attr('src') &&
                  $('#rememberCheck2').attr('src', '../../common/checkOn.svg'),
                $('.messageTitle').html(
                  '<img class="messageCheck" src="../../common/success.svg">Account Created!',
                ),
                $('#accountsLeft').text('No account creations remaining.'),
                $('#accountsText').text(
                  'Your account was created successfully and a confirmation email was sent to "' +
                    userEmail +
                    '".',
                ))
              : '0' == e
                ? ($('#loginRemember2').hide(),
                  $('.messageTitle').html(
                    '<img class="messageCheck" src="../../common/fail.svg">Failed Creation...',
                  ),
                  $('#accountsLeft').text('No account creations remaining.'),
                  $('#accountsText').text(
                    'Unfortunately, you do not have any account creations left with your matching activation key, you can purchase additional accounts directly on our website.',
                  ),
                  $('#doneLogInBtn').hide(),
                  $('#doneRegisterBtn2').css({
                    width: '100px',
                    marginLeft: '100px',
                  }))
                : ('../../common/checkOn.svg' ==
                    $('#rememberCheck').attr('src') &&
                    $('#rememberCheck2').attr(
                      'src',
                      '../../common/checkOn.svg',
                    ),
                  $('.messageTitle').html(
                    '<img class="messageCheck" src="../../common/success.svg">Account Created!',
                  ),
                  $('#accountsLeft').text(
                    e - 1 + ' out of ' + o + ' account creations remaining.',
                  ),
                  $('#accountsText').text(
                    'Your account was created successfully and a confirmation email was sent to "' +
                      userEmail +
                      '".',
                  )),
            $('#warningWrap').show()));
      }
    }));
  try {
    n.send(t);
  } catch (e) {
    ($('.registerTitle').addClass('loginTitleHover'),
      $('.registerTitle').text('OFFLINE: Internet required'));
  }
}
function loadSlide() {
  $('html').innerWidth() < 550 &&
    !$('.menuBar').hasClass('noBack') &&
    $('.menuBar').addClass('noBack');
  var e = slidesPres.length;
  currSlide = 0;
  for (var t = 1; t <= e; t++)
    '1' != slidesNum[slidesPres[e - t] - 1] && (currSlide = slidesPres[e - t]);
  if (0 == currSlide)
    return (
      (slideOn = !1),
      $('#slideCont').hide(),
      (infoToUpdate = slidesNum.join(':')),
      (fieldToUpdate = 'slides'),
      updateDatabase(),
      void startLesson()
    );
  ($('#slideText').html(slidesArr[currSlide - 1]),
    $('#slideImg').hide(),
    $('body').hasClass('notch')
      ? $('#slideImg').attr('src', '../../common/slide' + currSlide + 'b.png')
      : $('#slideImg').attr('src', '../../common/slide' + currSlide + '.png'),
    $('#slideImg').fadeIn(800),
    $('#mainSound').attr('src', oPath3 + 'common/tips' + currSlide + soundType),
    document.getElementById('mainSound').load(),
    document.getElementById('mainSound').addEventListener('canplay', playSound),
    (soundPlaying = !0));
}
function animateOkay() {
  $('.slideBtn1')
    .transition({ scale: 1.2 }, 200)
    .transition({ scale: 0.7 }, 200)
    .transition({ scale: 1.2 }, 200)
    .transition({ scale: 1 }, 200);
}
function loadLogIn() {
  ($('body').append(loginAppend),
    $('#loginBottom, #loginForgot').hide(),
    $('#loginForm').submit(function (e) {
      (e.preventDefault(),
        (userEmail = $('#emailField').val().split(' ').join('')),
        (storeInfo = langShort + userEmail),
        (tuvm58dj = yifzq67($('#jguyr4').val().split(' ').join(''))),
        $('#loginTitle').text('Looking on server...'),
        setTimeout(databaseInit, 0));
    }),
    $('#jguyr4, #emailField').focus(function () {
      $('#loginTitle').hasClass('loginTitleHover') &&
        ($('#loginTitle').removeClass('loginTitleHover'),
        $('#loginTitle').text('Ouino Account Login'));
    }),
    'mobile' == currentDevice
      ? ($('#loginRemember, #loginRemember2').on('click', toggleRememberCheck),
        $('#offlineRemember').on('click', toggleOfflineCheck),
        $('#offlineButton').on('click', function () {
          $('#loginCover').hide();
        }),
        $('.tooltip').on('click', function () {
          $(this).toggleClass('tooltipHover');
        }),
        $('#loginBottom').on('click', function () {
          (disableTouch(),
            $('#registerCover').show(),
            'true' != registerLoaded && addRegisterData());
        }),
        $('#loginForgot').on('click', function () {
          (disableTouch(),
            $('#passwordWrap').show(),
            'true' != passwordLoaded && addPasswordData());
        }))
      : ($('#loginRemember, #loginRemember2').on('click', toggleRememberCheck),
        $('#offlineRemember').on('click', toggleOfflineCheck),
        $('#offlineButton').on('click', function () {
          $('#loginCover').hide();
        }),
        $('.smallMedal').hover(function () {
          $(this).toggleClass('smallMedalHover');
        }),
        $('.tooltip').hover(function () {
          $(this).toggleClass('tooltipHover');
        }),
        $('#loginBottom').on('click', function () {
          ($('#registerCover').show(),
            'true' != registerLoaded && addRegisterData());
        }),
        $('#loginForgot').on('click', function () {
          ($('#passwordWrap').show(),
            'true' != passwordLoaded && addPasswordData());
        })));
}
'pwa' == osType &&
  'block' == currentSecShort &&
  ('Spanish' === lessonLanguage
    ? (bbGroups = [
        '1',
        '2',
        '3',
        '4-5-6-7-8',
        '4-5-6-7-8',
        '4-5-6-7-8',
        '4-5-6-7-8',
        '4-5-6-7-8',
        '9-10-11-12-13',
        '9-10-11-12-13',
        '9-10-11-12-13',
        '9-10-11-12-13',
        '9-10-11-12-13',
        '14-15-16-17',
        '14-15-16-17',
        '14-15-16-17',
        '14-15-16-17',
        '18-19-20-21',
        '18-19-20-21',
        '18-19-20-21',
        '18-19-20-21',
        '22-23-24-25',
        '22-23-24-25',
        '22-23-24-25',
        '22-23-24-25',
        '26-27-28-29-30',
        '26-27-28-29-30',
        '26-27-28-29-30',
        '26-27-28-29-30',
        '26-27-28-29-30',
        '31-32-33-34',
        '31-32-33-34',
        '31-32-33-34',
        '31-32-33-34',
        '35-36-37-38',
        '35-36-37-38',
        '35-36-37-38',
        '35-36-37-38',
        '39',
        '40-41-42',
        '40-41-42',
        '40-41-42',
        '43-44-45',
        '43-44-45',
        '43-44-45',
        '46-47-48',
        '46-47-48',
        '46-47-48',
        '49-50-51',
        '49-50-51',
        '49-50-51',
        '52-53-54-55',
        '52-53-54-55',
        '52-53-54-55',
        '52-53-54-55',
        '56',
        '57-58-59',
        '57-58-59',
        '57-58-59',
        '60-61-62-63',
        '60-61-62-63',
        '60-61-62-63',
        '60-61-62-63',
        '64',
        '65',
        '66-67-68-69',
        '66-67-68-69',
        '66-67-68-69',
        '66-67-68-69',
        '70',
        '71',
        '72',
        '73',
        '74',
        '75',
        '76',
        '77',
        '78',
        '79',
        '80',
        '81',
        '82-83-84-85',
        '82-83-84-85',
        '82-83-84-85',
        '82-83-84-85',
        '86-87-88',
        '86-87-88',
        '86-87-88',
        '89',
      ])
    : 'French' === lessonLanguage
      ? (bbGroups = [
          '1',
          '2',
          '3',
          '4',
          '5-6-7-8-9',
          '5-6-7-8-9',
          '5-6-7-8-9',
          '5-6-7-8-9',
          '5-6-7-8-9',
          '10-11-12-13-14',
          '10-11-12-13-14',
          '10-11-12-13-14',
          '10-11-12-13-14',
          '10-11-12-13-14',
          '15-16-17-18-19-20',
          '15-16-17-18-19-20',
          '15-16-17-18-19-20',
          '15-16-17-18-19-20',
          '15-16-17-18-19-20',
          '15-16-17-18-19-20',
          '21-22-23-24-25',
          '21-22-23-24-25',
          '21-22-23-24-25',
          '21-22-23-24-25',
          '21-22-23-24-25',
          '26-27-28-29-30',
          '26-27-28-29-30',
          '26-27-28-29-30',
          '26-27-28-29-30',
          '26-27-28-29-30',
          '31-32-33-34-35',
          '31-32-33-34-35',
          '31-32-33-34-35',
          '31-32-33-34-35',
          '31-32-33-34-35',
          '36-37-38-39',
          '36-37-38-39',
          '36-37-38-39',
          '36-37-38-39',
          '40-41-42',
          '40-41-42',
          '40-41-42',
          '43-44-45',
          '43-44-45',
          '43-44-45',
          '46-47-48',
          '46-47-48',
          '46-47-48',
          '49-50-51',
          '49-50-51',
          '49-50-51',
          '52-53-54',
          '52-53-54',
          '52-53-54',
          '55-56-57',
          '55-56-57',
          '55-56-57',
          '58',
          '59-60-61',
          '59-60-61',
          '59-60-61',
          '62',
          '63-64-65',
          '63-64-65',
          '63-64-65',
          '66-67-68-69-70',
          '66-67-68-69-70',
          '66-67-68-69-70',
          '66-67-68-69-70',
          '66-67-68-69-70',
          '71',
          '72',
          '73',
          '74',
          '75-76-77-78',
          '75-76-77-78',
          '75-76-77-78',
          '75-76-77-78',
          '79',
          '80',
          '81',
          '82',
          '83',
          '84',
          '85',
          '86',
          '87',
          '88',
          '89',
          '90',
          '91',
          '92',
          '93-94-95-96',
          '93-94-95-96',
          '93-94-95-96',
          '93-94-95-96',
          '97-98-99',
          '97-98-99',
          '97-98-99',
          '100',
        ])
      : 'Italian' === lessonLanguage
        ? (bbGroups = [
            '1',
            '2',
            '3-4-5',
            '3-4-5',
            '3-4-5',
            '6',
            '7',
            '8-9-10-11-12-13',
            '8-9-10-11-12-13',
            '8-9-10-11-12-13',
            '8-9-10-11-12-13',
            '8-9-10-11-12-13',
            '8-9-10-11-12-13',
            '14-15-16-17-18',
            '14-15-16-17-18',
            '14-15-16-17-18',
            '14-15-16-17-18',
            '14-15-16-17-18',
            '19-20-21-22',
            '19-20-21-22',
            '19-20-21-22',
            '19-20-21-22',
            '23-24-25-26',
            '23-24-25-26',
            '23-24-25-26',
            '23-24-25-26',
            '27-28-29',
            '27-28-29',
            '27-28-29',
            '30',
            '31-32-33-34-35',
            '31-32-33-34-35',
            '31-32-33-34-35',
            '31-32-33-34-35',
            '31-32-33-34-35',
            '36-37-38',
            '36-37-38',
            '36-37-38',
            '39-40-41-42-43',
            '39-40-41-42-43',
            '39-40-41-42-43',
            '39-40-41-42-43',
            '39-40-41-42-43',
            '44-45-46',
            '44-45-46',
            '44-45-46',
            '47-48-49',
            '47-48-49',
            '47-48-49',
            '50-51-52',
            '50-51-52',
            '50-51-52',
            '53-54-55-56-57',
            '53-54-55-56-57',
            '53-54-55-56-57',
            '53-54-55-56-57',
            '53-54-55-56-57',
            '58',
            '59-60-61-62',
            '59-60-61-62',
            '59-60-61-62',
            '59-60-61-62',
            '63',
            '64-65-66-67-68-69',
            '64-65-66-67-68-69',
            '64-65-66-67-68-69',
            '64-65-66-67-68-69',
            '64-65-66-67-68-69',
            '64-65-66-67-68-69',
            '70',
            '71',
            '72-73-74-75-76',
            '72-73-74-75-76',
            '72-73-74-75-76',
            '72-73-74-75-76',
            '72-73-74-75-76',
            '77',
            '78',
            '79',
            '80',
            '81',
            '82',
            '83',
            '84',
            '85',
            '86',
            '87',
            '88-89-90-91',
            '88-89-90-91',
            '88-89-90-91',
            '88-89-90-91',
            '92-93-94',
            '92-93-94',
            '92-93-94',
          ])
        : 'German' === lessonLanguage
          ? (bbGroups = [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6-7-8',
              '6-7-8',
              '6-7-8',
              '9',
              '10',
              '11-12-13-14-15',
              '11-12-13-14-15',
              '11-12-13-14-15',
              '11-12-13-14-15',
              '11-12-13-14-15',
              '16-17-18-19',
              '16-17-18-19',
              '16-17-18-19',
              '16-17-18-19',
              '20-21-22',
              '20-21-22',
              '20-21-22',
              '23-24-25-26',
              '23-24-25-26',
              '23-24-25-26',
              '23-24-25-26',
              '27-28-29-30',
              '27-28-29-30',
              '27-28-29-30',
              '27-28-29-30',
              '31-32-33',
              '31-32-33',
              '31-32-33',
              '34-35-36',
              '34-35-36',
              '34-35-36',
              '37-38-39-40',
              '37-38-39-40',
              '37-38-39-40',
              '37-38-39-40',
              '41-42-43-44',
              '41-42-43-44',
              '41-42-43-44',
              '41-42-43-44',
              '45-46-47-48',
              '45-46-47-48',
              '45-46-47-48',
              '45-46-47-48',
              '49-50-51',
              '49-50-51',
              '49-50-51',
              '52-53-54',
              '52-53-54',
              '52-53-54',
              '55-56-57',
              '55-56-57',
              '55-56-57',
              '58-59-60-61',
              '58-59-60-61',
              '58-59-60-61',
              '58-59-60-61',
              '62',
              '63-64-65',
              '63-64-65',
              '63-64-65',
              '66-67-68',
              '66-67-68',
              '66-67-68',
              '69',
              '70-71-72-73-74',
              '70-71-72-73-74',
              '70-71-72-73-74',
              '70-71-72-73-74',
              '70-71-72-73-74',
              '75',
              '76-77-78-79-80',
              '76-77-78-79-80',
              '76-77-78-79-80',
              '76-77-78-79-80',
              '76-77-78-79-80',
              '81',
              '82',
              '83',
              '84',
              '85',
              '86',
              '87',
              '88',
              '89',
              '90',
              '91-92-93',
              '91-92-93',
              '91-92-93',
              '94',
              '95-96-97',
              '95-96-97',
              '95-96-97',
              '98-99-100',
              '98-99-100',
              '98-99-100',
              '101',
              '102',
              '103-105',
              '104',
              '103-105',
              '106-107-108',
              '106-107-108',
              '106-107-108',
            ])
          : 'Portuguese' === lessonLanguage &&
            (bbGroups = [
              '1',
              '2',
              '3',
              '4',
              '5-6-7-8-9',
              '5-6-7-8-9',
              '5-6-7-8-9',
              '5-6-7-8-9',
              '5-6-7-8-9',
              '10-11-12-13-14',
              '10-11-12-13-14',
              '10-11-12-13-14',
              '10-11-12-13-14',
              '10-11-12-13-14',
              '15-16-17-18',
              '15-16-17-18',
              '15-16-17-18',
              '15-16-17-18',
              '19-20-21-22',
              '19-20-21-22',
              '19-20-21-22',
              '19-20-21-22',
              '23-24-25',
              '23-24-25',
              '23-24-25',
              '26-27-28-29-30',
              '26-27-28-29-30',
              '26-27-28-29-30',
              '26-27-28-29-30',
              '26-27-28-29-30',
              '31-32-33-34',
              '31-32-33-34',
              '31-32-33-34',
              '31-32-33-34',
              '35-36-37-38',
              '35-36-37-38',
              '35-36-37-38',
              '35-36-37-38',
              '39',
              '40',
              '41-42-43',
              '41-42-43',
              '41-42-43',
              '44-45-46',
              '44-45-46',
              '44-45-46',
              '47-48-49',
              '47-48-49',
              '47-48-49',
              '50-51-52',
              '50-51-52',
              '50-51-52',
              '53-54-55-56',
              '53-54-55-56',
              '53-54-55-56',
              '53-54-55-56',
              '57-58',
              '57-58',
              '59-60-61',
              '59-60-61',
              '59-60-61',
              '62-63-64-65',
              '62-63-64-65',
              '62-63-64-65',
              '62-63-64-65',
              '66',
              '67',
              '68',
              '69-70-71-72',
              '69-70-71-72',
              '69-70-71-72',
              '69-70-71-72',
              '73',
              '74',
              '75',
              '76',
              '77',
              '78',
              '79',
              '80',
              '81',
              '82',
              '83',
              '84',
              '85-86-87-88',
              '85-86-87-88',
              '85-86-87-88',
              '85-86-87-88',
              '89-90-91',
              '89-90-91',
              '89-90-91',
              '92',
            ]));
var unique = function (e) {
  for (var t, o, n = [], s = e.length, a = 0; a < s; a++) {
    for (t = void 0, o = 0; o < n.length; o++)
      if (e[a] === n[o]) {
        t = !0;
        break;
      }
    t || n.push(e[a]);
  }
  return n;
};
function randomInt(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function hexToRgb(e) {
  e = parseInt(e, 16);
  return ((e >> 16) & 255) + ',' + ((e >> 8) & 255) + ',' + (255 & e);
}
function colorBrightness(e, t) {
  ((e = String(e).replace(/[^0-9a-f]/gi, '')).length < 6 &&
    (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
    (t = t || 0));
  for (var o, n = '#', s = 0; s < 3; s++)
    ((o = parseInt(e.substr(2 * s, 2), 16)),
      (n += (
        '00' +
        (o = Math.round(Math.min(Math.max(0, o + o * t), 255)).toString(16))
      ).substr(o.length)));
  return n;
}
function playSprite(e) {
  ($('#sfxSprite').attr('src', '../../common/' + e + soundType),
    document.getElementById('sfxSprite').load(),
    document.getElementById('sfxSprite').addEventListener('canplay', playSFX));
}
function playSFX() {
  (document.getElementById('sfxSprite').removeEventListener('canplay', playSFX),
    $('#sfxSprite').trigger('play'));
}
(btnColor.push('rgba(' + hexToRgb(btnColor[0].replace(/\#/g, '')) + ',.9)'),
  btnColor.push('rgb(' + hexToRgb(btnColor[1].replace(/\#/g, '')) + ')'),
  btnColor.push(colorBrightness(btnColor[0], -0.4)),
  btnColor.push(colorBrightness(btnColor[1], 0.2)));
var gui,
  win,
  isMac,
  wasFull,
  vertSwipe = !1;
function addSwipePic(e) {
  for (
    var o, t = document.getElementsByClassName(e), n = 0;
    n < t.length;
    n++
  ) {
    var s,
      a,
      i,
      r,
      l,
      c,
      u,
      d = t[n];
    function g(e) {
      if ((e.stopPropagation(), (o = !1), (a = s = 0), u)) {
        $(e.target);
        return Math.min(e.clientX, $('html').width() - e.clientX) <= 60
          ? void 0
          : ($('.swiper').addClass('fullyDisable'),
            setTimeout(function () {
              ($('#pauseWrap').show(),
                $('#pauseBtn').attr('src', '../../common/play.svg'),
                playSprite('pause'),
                pausePres());
            }, 200),
            setTimeout(function () {
              $('.swiper').removeClass('fullyDisable');
            }, 500),
            void (u = !1));
      }
      r
        ? (0 == $('#wandAnimation').length &&
            ($('.shinyPicture').addClass('disElem'),
            (d.style.opacity = 0),
            setTimeout(function () {
              ((d.style.transform = 'none'),
                (d.style.opacity = 1),
                $('.shinyPicture').removeClass('disElem'));
            }, '700')),
          'right' == l
            ? $('.rightArrow').trigger('click')
            : 'left' == l && $('.leftArrow').trigger('click'),
          (a = s = 0),
          (initialtop = d.style.top),
          (r = !(i = 60)))
        : Math.abs(c) < i &&
          ((a = s = 0),
          (initialtop = d.style.top),
          (r = !(i = 60)),
          (d.style.transform = 'none'),
          (d.style.opacity = 1));
    }
    function m(e) {
      e.stopPropagation();
      var t = e.touches && e.touches[0];
      ((u = o = !0), (s = e.clientX || t.pageX));
    }
    function p(e) {
      var t;
      (e.stopPropagation(),
        o &&
          ((u = !1),
          (t = e.touches && e.touches[0]),
          (a = e.clientX || t.pageX),
          (((c = a - s) <= 0 && $('.rightArrow').is(':hidden')) ||
            (0 < c && $('.leftArrow').is(':hidden')) ||
            (c <= 0 && numWords - currentWordNum == 2 && vertSwipe)) &&
            (c = 0),
          0 == $('#wandAnimation').length &&
            ((d.style.transform = 'translateX(' + c + 'px)'),
            (t = 1 - Math.pow(Math.abs(c) / 100, 5)),
            (d.style.opacity = t)),
          (r = !1),
          i <= c
            ? ((r = !0), (l = 'left'))
            : c <= -1 * i && ((r = !0), (l = 'right'))));
    }
    d.classList.contains('swiper') ||
      ((a = s = 0),
      d.style.left,
      (r = !(i = 60)),
      (l = 'right'),
      d.classList.add('swiper'),
      d.addEventListener('mousedown', m),
      d.addEventListener('mousemove', p),
      d.addEventListener('mouseup', g),
      d.addEventListener('mouseleave', g),
      d.addEventListener('touchstart', m),
      d.addEventListener('touchmove', p),
      d.addEventListener('touchend', g));
  }
}
function onResume() {
  if (
    ('object' == typeof cordova && window.plugins.insomnia.keepAwake(),
    !sessionStorage.getItem('userEmailSTORE'))
  )
    return (
      sessionStorage.clear(),
      localStorage.removeItem(lessonLanguage + 'timeClosed'),
      $('#loadLogo').show(),
      void setTimeout(function () {
        (sessionStorage.clear(), (window.location = '../../index.html'));
      }, 100)
    );
  var e;
  (localStorage[lessonLanguage + 'timeClosed'] &&
    ((e = Date.now() - localStorage[lessonLanguage + 'timeClosed']),
    localStorage.removeItem(lessonLanguage + 'timeClosed'),
    36e5 < e &&
      (sessionStorage.clear(),
      $('#loadLogo').show(),
      setTimeout(function () {
        (sessionStorage.clear(), (window.location = '../../index.html'));
      }, 100))),
    (appSuspended = !1),
    $('.ouinoContent').is(':visible') && playPres(),
    'on' == $('#selectSound').val() && $('#mainMusic').trigger('play'));
}
function onPause() {
  ('object' == typeof cordova && window.plugins.insomnia.allowSleepAgain(),
    (localStorage[lessonLanguage + 'timeClosed'] = Date.now()),
    (appSuspended = !0),
    $('.ouinoContent').is(':visible') && pausePres(),
    $('#mainMusic').trigger('pause'));
}
function onMenubutton(e) {
  (e.preventDefault(), navigator.app.exitApp());
}
function onBackbutton(e) {
  (e.preventDefault(), navigator.app.backHistory());
}
function fullScreenOn() {
  isMac || $('#fullToggle, #fullToggle2').attr('src', '../../common/min.svg');
}
function fullScreenOff() {
  isMac || $('#fullToggle, #fullToggle2').attr('src', '../../common/max.svg');
  var e = 0.8 * screen.height,
    t = 0.8 * screen.width;
  (win.resizeTo(t, e), win.setPosition('center'));
}
(currentDevice,
  ('windows' != osType && 'mac' != osType) ||
    ('windows' == osType &&
      ((gui = require('nw.gui')), (win = gui.Window.get())),
    (wasFull = !(isMac = !1)),
    $(document).ready(function () {
      ('mac' == osType && (isMac = !0),
        $('body').append(
          '<div id="consoleLoad" style="position: fixed; z-index: 999999; bottom: 0; left: 0; width: 10px; height:10px;"></div>',
        ),
        isMac ||
          $('#loginCover').append(
            '<img id="closeWinBtn2" src="../../common/close.svg" class="smallIcon2" style="position: absolute; top: 3px; right: 2px;"/>',
          ),
        isMac ||
          $('.menuBtnContainer').append(
            '<img id="minimizeBtn" src="../../common/minimize.svg" class="smallIcon2" style="padding-left: 10px;"/><img id="fullToggle" src="../../common/min.svg" class="smallIcon2" /><img id="closeWinBtn" src="../../common/close.svg" class="smallIcon2" />',
          ),
        (document.title = lessonTitle),
        isMac ||
          ($('.menuBar').css({
            '-webkit-user-select': 'none',
            '-webkit-app-region': 'drag',
          }),
          $(
            '.smallIcon, .smallIcon2, #menuMain2, #verbBanner, .menuBtnContainer, .ui-slider-handle',
          ).css({ '-webkit-app-region': 'no-drag' }),
          0 == $('#tutorialBtn:visible').length &&
            $('.menuTitleContainer').css({ '-webkit-app-region': 'no-drag' }),
          $('#minimizeBtn').on('click', function () {
            win.minimize();
          })),
        $('#consoleLoad').dblclick(function () {
          win.isDevToolsOpen() ? win.closeDevTools() : win.showDevTools();
        }),
        $('#fullToggle, #fullToggle2').on('click', function () {
          win.isFullscreen
            ? win.leaveFullscreen()
            : ((localStorage.winHeight = win.height),
              (localStorage.winWidth = win.width),
              win.enterFullscreen());
        }),
        $(document).keyup(function (e) {
          27 == e.keyCode &&
            win.isFullscreen &&
            (win.leaveFullscreen(),
            $('#fullToggle, #fullToggle2').attr('src', '../../common/max.svg'));
        }),
        $('#closeWinBtn, #closeWinBtn2').on('click', function () {
          (win.isFullscreen ||
            ((localStorage.winHeight = win.height),
            (localStorage.winWidth = win.width)),
            win.isFullscreen && isMac && win.leaveFullscreen(),
            win.close());
        }),
        win.on('enter-fullscreen', fullScreenOn),
        win.on('leave-fullscreen', fullScreenOff),
        'mobile' != currentDevice &&
          ($('.smallIcon2').on('mouseenter', function () {}),
          $('.smallIcon2').hover(function () {
            $(this).toggleClass('fullOpacity');
          }),
          $('#fullToggle, #fullToggle2').hover(function () {
            ($('#arrowLabel').text('FULLSCREEN ON / OFF'),
              $('.instructions').toggleClass('showDiv'));
          }),
          $('#closeWinBtn').hover(function () {
            ($('#arrowLabel').text('CLOSE PROGRAM'),
              $('.instructions').toggleClass('showDiv'));
          }),
          $('#minimizeBtn').hover(function () {
            ($('#arrowLabel').text('MINIMIZE'),
              $('.instructions').toggleClass('showDiv'));
          })),
        win.isFullscreen
          ? $('#fullToggle, #fullToggle2').attr('src', '../../common/min.svg')
          : isMac ||
            $('#fullToggle, #fullToggle2').attr('src', '../../common/max.svg'),
        $(function () {
          var n = new (function (e, t, o) {
            return (
              (n = new gui.Menu()),
              (cut = new gui.MenuItem({
                label: e || 'Cut',
                click: function () {
                  document.execCommand('cut');
                },
              })),
              (copy = new gui.MenuItem({
                label: t || 'Copy',
                click: function () {
                  document.execCommand('copy');
                },
              })),
              (paste = new gui.MenuItem({
                label: o || 'Paste',
                click: function () {
                  document.execCommand('paste');
                },
              })),
              n.append(cut),
              n.append(copy),
              n.append(paste),
              n
            );
          })();
          $(document).on('contextmenu', function (e) {
            (e.preventDefault(), n.popup(e.originalEvent.x, e.originalEvent.y));
          });
        }));
    })));
