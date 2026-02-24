var cacheName2,
  cacheURL2,
  osType = 'pwa';
function forSearch(e) {
  '' != e &&
    (0 != $('#dictFrame2').length
      ? $('#dictFrame2, #dictFrame').remove()
      : ($('body').append(
          '<iframe id="dictFrame" src="../../dict/index.html"></iframe><div id="dictFrame2"><div>X</div></div>',
        ),
        $('#dictFrame').load(function () {
          ($('#dictFrame').contents().find('#searchBox').val(e),
            $('#dictFrame')[0].contentWindow.forTrans());
        }),
        $('#dictFrame2').on('click', function () {
          ($('#dictFrame2, #dictFrame').remove(), removeSelect());
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
        $('#dictFrame').load(function () {
          ($('#dictFrame').contents().find('#searchBox').val(e),
            $('#dictFrame')[0].contentWindow.engTrans());
        }),
        $('#dictFrame2').on('click', function () {
          ($('#dictFrame2, #dictFrame').remove(), removeSelect());
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
function savePosition() {
  setTimeout(function () {
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
  }, 3e3);
}
'pwa' == osType &&
  ((cacheName2 = lessonLanguage + 'LessonCache'),
  (cacheURL2 =
    'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/'));
var currSentence,
  dragRight,
  currSentence2,
  jsNum,
  jsGroup,
  randomExampleNum,
  currLength,
  searchCount,
  soundName,
  currentDevice,
  audioSprite,
  currentSprite,
  onTimeUpdate,
  playSprite,
  currentTime,
  currAct,
  duration,
  wordTime,
  streak,
  streakMax,
  userEmail,
  tuvm58dj,
  storeInfo,
  scoreInfo,
  scoreNameArr,
  scoreNumArr,
  currStory,
  stoTimer,
  maxTimer,
  currStoPos,
  stoLength,
  storyNum,
  modeNum,
  endLangWord,
  swipeDir,
  cardRaw,
  currentSection = 'Extra',
  currentSecShort = 'extra',
  currentProgram = 'Complete',
  lessonTitle = 'Extra Language Practice',
  difficulty = 'hard',
  sentenceArray = [],
  timedOut = !1,
  soundType = '.mp3',
  spaceCheck = !1,
  micOn = !0,
  afterRec = !1,
  shufBad = 0,
  didIt = !1,
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
  stoSec = parseInt(stoSec),
  noPuzz = !1;
'Spanish' == lessonLanguage
  ? (endLangWord = 'Fin')
  : 'Portuguese' == lessonLanguage
    ? (endLangWord = 'Fim')
    : 'French' == lessonLanguage
      ? (endLangWord = 'Fin')
      : 'Italian' == lessonLanguage
        ? (endLangWord = 'Fine')
        : 'German' == lessonLanguage && (endLangWord = 'Ende');
var stoDelay,
  cardNumbers = [],
  cardNum = -1,
  dictAdded = !1,
  flashCard = !1;
function startLesson() {
  if (localStorage.getItem(storeInfo + 'goalsSTORE')) {
    var e = (e = new Date()).getDate() + e.format('mmmm') + e.getFullYear(),
      t = [];
    if (
      -1 ===
      (t = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')).indexOf(e)
    ) {
      for (t.push(e), i = 1; i <= 5; i++) t.push('0');
      (t.push('1'),
        localStorage.setItem(storeInfo + 'goalsSTORE', t.join(':')),
        (infoToUpdate = t.join(':')),
        (fieldToUpdate = 'goals'),
        updateDatabase());
    }
  }
  ((localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    null == localStorage.getItem(storeInfo + 'goalsSTORE')) &&
    ((e = [
      (e = (e = new Date()).getDate() + e.format('mmmm') + e.getFullYear()),
      '0',
      '0',
      '0',
      '0',
      '0',
      '1',
    ]),
    localStorage.setItem(storeInfo + 'goalsSTORE', e.join(':')),
    (infoToUpdate = e.join(':')),
    (fieldToUpdate = 'goals'),
    updateDatabase()),
    $('.wordSentence, .scoreMeter, .scoreMeter2').show(),
    currAct < 2
      ? ($('#extra1').fadeIn(),
        $('.colorPic').hide(),
        $('.playBtn, .nextBtn').addClass('disabled2'))
      : 3 == currAct
        ? ($('.selCont, #dragImg, .ctrlBtn3C').hide(),
          $('.selCont').css('opacity', '0'),
          $('.selCont').css('opacity', '1'),
          $('#dragImg2').show(),
          $('#extra3').fadeIn(),
          $('.colorPic').hide())
        : 4 == currAct && ($('#extra4').fadeIn(), $('.colorPic').show()),
    $('#choice2, #choice1').hide(),
    $('#lengthBtn').show(),
    $('body').removeClass('barOut'),
    randomSentence());
}
if (
  (/Android|webOS|iPhone|touch|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  ) && (currentDevice = 'mobile'),
  $(document).ready(function () {
    if (null == sessionStorage.userEmailSTORE)
      return (sessionStorage.clear(), void (window.location = '../index.html'));
    for (
      userEmail = sessionStorage.userEmailSTORE,
        tuvm58dj = sessionStorage.tuvm58djSTORE,
        storeInfo = langShort + userEmail,
        $(window).innerWidth() < 550 && $('body').addClass('barOut'),
        $('title').text(''),
        $('body').append('<meta name="theme-color" content="#202020">'),
        cardRaw = localStorage.getItem(storeInfo + 'cardsSTORE')
          ? (cardRaw = localStorage.getItem(storeInfo + 'cardsSTORE')).split(
              ':',
            )
          : [],
        cardNumbers = [],
        n = 0;
      n < cardRaw.length;
      n++
    ) {
      var e = cardRaw[n].split('|');
      if (3 == e.length) cardNumbers.push(cardRaw[n]);
      else if (4 == e.length)
        for (var t = 1; t <= parseInt(e[3]); t++)
          cardNumbers.push(e[0] + '|' + e[1] + '|' + e[2]);
    }
    for (
      var o = [],
        r = [7, 8, 9, 35, 36, 37, 38, 39, 40, 87, 88, 89, 90, 91, 92, 93, 94],
        n = 0;
      n < cardNumbers.length;
      n++
    ) {
      var s = cardNumbers[n].split('|');
      ('c' == s[2] && -1 == r.indexOf(parseInt(s[0]))) ||
        ('b' == s[2] && parseInt(s[1]) % 2 != 0) ||
        o.push(cardNumbers[n]);
    }
    ((cardNumbers = shuffle((cardNumbers = o.slice(0))).slice(0)),
      avoidMultiple(),
      $('.btnDiff').on('click', function () {
        (0 != $('#mainMusic').length && null != $('#mainMusic').attr('src')) ||
          ($('#mainMusic').remove(),
          $('body').append(
            '<audio id="mainMusic" loop src="../common/empty.mp3"></audio>',
          ),
          $('#mainMusic').trigger('pause'),
          document.getElementById('mainMusic').load(),
          document.getElementById('mainMusic').addEventListener(
            'canplay',
            function () {
              ($('#mainMusic').off(), $('#mainMusic').trigger('play'));
            },
            !1,
          ));
      }),
      $('#dictBtn').on('click', function () {
        0 != $('#dictFrame2').length
          ? $('#dictFrame2, #dictFrame').remove()
          : ($('body').append(
              '<iframe id="dictFrame" src="../dict/index.html"></iframe><div id="dictFrame2"><div>X</div></div>',
            ),
            $('#dictFrame2').on('click', function () {
              $('#dictFrame2, #dictFrame').remove();
            }),
            0 == dictAdded &&
              ($('#lengthBtn, .menuTitleContainer').on('click', function () {
                0 != $('#dictFrame2').length &&
                  $('#dictFrame2, #dictFrame').remove();
              }),
              (dictAdded = !0)));
      }),
      'mobile' != currentDevice &&
        $('#dictBtn').hover(function () {
          ($('#arrowLabel').text('LOAD TRANSLATOR'),
            $('.instructions').toggleClass('showDiv'));
        }),
      'pwa' == osType &&
        sessionStorage.getItem('offlineSession') &&
        $('#act5 h3').html('Flash Cards (OFFLINE WORDS ONLY)'),
      $('#act5').on('click', flashLoad));
    var i = getUrlParam('convo', '');
    '' != getUrlParam('pronun', '') &&
      ($('#choice1').hide(), $('#choice3').show(), 0 == didIt && recordInit());
    var a,
      c = window.location.href;
    ((c = 'extra/' + (c = c.split('extra/'))[1]),
      localStorage.setItem(storeInfo + 'saved', c),
      savePosition(),
      '' != i
        ? ((bonusMode = !0),
          (jsNum = parseInt(i)),
          bonusLoad(),
          $('.lessonTitle').on('click', function () {
            bonusMode && reloadLesson();
          }),
          setTimeout(function () {
            $('#transCover').fadeOut();
          }, 1e3),
          $('#lengthBtn, .scoreMeter, .scoreMeter2, .scoreMeter3').css({
            position: 'fixed',
            'z-index': '-2',
            top: '-3000px',
          }),
          $(
            '<img id="menuBtn" src="../common/menu.svg" class="smallIcon"/>',
          ).insertBefore('#backBtn'),
          $('#act2, #act5').hide(),
          $('#choice1 h1').text('Select Conversation Extra Practice Type'),
          $('#choice1').addClass('convoChoice'),
          $('body').append(
            '<div class="instructions"><img class="quizBannerImage" src="../common/redArrow.svg"><b id="arrowLabel"></b></div><div id="loadLogo2">HERE\'S WHERE YOU LEFT OFF ON THIS DEVICE...</div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart</br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous</br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next</br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;</br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home</br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../common/logoConvo.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems">Conversations</br>Menu</h2></td></tr></table></div></div><div id="bonusEnd"><h1>END OF CONVERSATION</h1><div class="wrapBtn wb1">CONTINUE</div><div class="wrapBtn wb2"><img src="../extra/images/extra.png" style="left: 30px;"/>PRACTICE SKILLS AGAIN</div</div>',
          ),
          $('#stamp').append(
            '<img src="../common/menuIcon1.svg" id="restartBonus"/>',
          ),
          $('#restartBonus').on('click', function () {
            (localStorage.removeItem(
              storeInfo + 'convoBonus' + jsNum + '|' + currAct,
            ),
              (randomExampleNum = -1),
              startLesson());
          }),
          'mobile' != currentDevice &&
            $('#restartBonus').hover(function () {
              ($('#arrowLabel').text('RESTART FROM THE BEGINNING'),
                $('.instructions').toggleClass('showDiv'));
            }),
          $('#menuBtn, .wb1').on('click', toggleMenu),
          $('.wb2').on('click', function () {
            ($('#loadLogo').show(),
              setTimeout(function () {
                location.reload();
              }, 100));
          }),
          $('#menuWrap').on('click', function (e) {
            e.target == this && toggleMenu();
          }),
          $('.menuBox').hover(
            function () {
              $(this).addClass('menuBoxHover');
              var e = $(this).children('img').attr('src');
              $('#menuSideLogo').attr('src', e);
            },
            function () {
              ($(this).removeClass('menuBoxHover'),
                $('#menuSideLogo').attr('src', '../common/blank.svg'));
            },
          ),
          setTimeout(function () {
            'guidedSection' == sessionStorage.menuType
              ? $('#menuTitleSection').html('Recommended</br>Menu')
              : 'verbSection' == sessionStorage.menuType &&
                $('#menuTitleSection').html('Recommended</br>Verb Menu');
          }, 1e3),
          $('#menuRestart').on('click', reloadLesson),
          $('#menuNext').on('click', nextLesson),
          $('#menuPrevious').on('click', previousLesson),
          $('#menuHome, #menuMain2').on('click', homeMenu),
          $('#menuMain').on('click', mainMenu),
          $('#menuQuiz').on('click', reloadQuiz),
          (greenBub = [
            2, 3, 14, 17, 24, 26, 33, 37, 42, 43, 44, 52, 55, 60, 64, 66, 73,
          ]),
          (redBub = [
            5, 6, 8, 9, 18, 16, 25, 27, 29, 38, 40, 41, 46, 48, 49, 50, 53, 59,
            69, 70, 71,
          ]),
          (blueBub = [
            1, 10, 12, 13, 19, 20, 21, 22, 30, 31, 32, 35, 36, 39, 54, 56, 58,
            62, 65, 67, 74, 75, 76, 77,
          ]),
          (orangeBub = [4, 7, 11, 15, 23, 28, 47, 61]),
          (greyBub = [34, 45, 51, 57, 63, 68, 72, 78]),
          -1 !== greenBub.indexOf(jsNum)
            ? (a = ['#118000', '#203e00', '#118000', '#203e00'])
            : -1 !== redBub.indexOf(jsNum)
              ? (a = ['#d11a1a', '#6e0e0e', '#ba1717', '#570b0b'])
              : -1 !== blueBub.indexOf(jsNum)
                ? (a = ['#0a5d90', '#063561', '#0a5d90', '#063561'])
                : -1 !== orangeBub.indexOf(jsNum)
                  ? (a = ['#ff7124', '#a13515', '#ff7124', '#a13515'])
                  : -1 !== greyBub.indexOf(jsNum) &&
                    (a = ['#474f52', '#2a3133', '#474f52', '#2a3133']),
          $('.gradientColor').css({
            background:
              'url(../common/black.svg), linear-gradient(' +
              a[0] +
              ',' +
              a[1] +
              ')',
          }),
          bonusStyle((a = window.matchMedia('(max-width: 510px)'))),
          a.addListener(bonusStyle))
        : $('#transCover').fadeOut(),
      (scoreInfo =
        null != localStorage[storeInfo + 'extraScoresSTORE']
          ? localStorage[storeInfo + 'extraScoresSTORE']
          : '0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:3000000'),
      (scoreNameArr = [
        '1.1easy',
        '1.1medium',
        '1.1hard',
        '1.2easy',
        '1.2medium',
        '1.2hard',
        '1.3easy',
        '1.3medium',
        '1.3hard',
        '3easy',
        '3medium',
        '3hard',
        '4easy',
        '4medium',
        '4hard',
        '2Time',
        '2Slide',
        '2Complete',
      ]),
      (scoreNumArr = scoreInfo.split(':')),
      (stoSec = scoreNumArr[15]),
      (modeNum = parseInt(scoreNumArr[17])),
      1 == scoreNumArr[16].length &&
        (scoreNumArr[16] =
          '0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0'),
      ('0' == scoreNameArr[10] &&
        '0' == scoreNameArr[11] &&
        '0' == scoreNameArr[12]) ||
        $('#dragImg').hide(),
      (viewport = document.querySelector('meta[name=viewport]')),
      $(window).innerWidth() < 350 || $(window).innerHeight() < 350
        ? viewport.setAttribute(
            'content',
            'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.7,minimum-scale=0.7,viewport-fit=cover',
          )
        : $(window).innerWidth() < 450 || $(window).innerHeight() < 450
          ? 760 < $(window).innerWidth() || 760 < $(window).innerHeight()
            ? viewport.setAttribute(
                'content',
                'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.9,minimum-scale=0.9,viewport-fit=cover',
              )
            : viewport.setAttribute(
                'content',
                'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.8,minimum-scale=0.8,viewport-fit=cover',
              )
          : viewport.setAttribute(
              'content',
              'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=1,minimum-scale=1,viewport-fit=cover',
            ),
      'Spanish' == lessonLanguage
        ? $('.charSp').show()
        : 'Portuguese' == lessonLanguage
          ? ($('#extra4').append(
              '<div class="boardChar charPor">Ã¡</div><div class="boardChar charPor">Ã¢</div><div class="boardChar charPor">Ã£</div><div class="boardChar charPor">Ã </div><div class="boardChar charPor">Ã§</div><div class="boardChar charPor">Ã©</div><div class="boardChar charPor">Ãª</div><div class="boardChar charPor">Ã­</div><div class="boardChar charPor">Ã³</div><div class="boardChar charPor">Ã´</div><div class="boardChar charPor">Ãµ</div><div class="boardChar charPor">Ãº</div>',
            ),
            $('.charPor').show())
          : 'French' == lessonLanguage
            ? $('.charFr').show()
            : 'Italian' == lessonLanguage
              ? $('.charIta').show()
              : 'German' == lessonLanguage && $('.charGer').show(),
      (currAct = 0),
      backChange(),
      (audioSprite = document.getElementById('sfxSprite')).addEventListener(
        'timeupdate',
        onTimeUpdate,
        !1,
      ),
      -1 < navigator.userAgent.toLowerCase().indexOf('android')
        ? $('#answerForm').append(
            '<input type="email" id="writeAnswerField" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type Answer Here" style="-webkit-user-select: none; user-select: none;"/>',
          )
        : ($('#musCol').hide(),
          $('#menuPad').css({ height: '225px' }),
          $('#answerForm').append(
            '<input type="text" id="writeAnswerField" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type Answer Here"/>',
          )),
      loadButtonsMain(),
      $(document).on('blur', 'input, textarea', function () {
        setTimeout(function () {
          (window.scrollTo(document.body.scrollLeft, document.body.scrollTop),
            window.AndroidFullScreen &&
              window.AndroidFullScreen.immersiveMode());
        }, 0);
      }));
  }),
  'pwa' == osType)
) {
  function checkURLCache(t) {
    caches.open(cacheName2).then(function (e) {
      e.match(cacheURL2 + t + '/images/background.png').then(function (e) {
        null != e && cachedAll.push(t);
      });
    });
  }
  function checkURLCache2(t) {
    caches.open(cacheName2).then(function (e) {
      e.match(cacheURL2 + t + '/images/pic1.jpg').then(function (e) {
        null != e && cachedAll.push(t);
      });
    });
  }
  if (sessionStorage.getItem('offlineSession')) {
    for (var cacheStem, cachedAll = [], ff = 0; ff < 78; ff++)
      checkURLCache((cacheStem = 'convo/' + ff));
    for (ff = 0; ff < 109; ff++) checkURLCache((cacheStem = 'vocab/' + ff));
    for (ff = 0; ff < 169; ff++) checkURLCache((cacheStem = 'verb/' + ff));
    for (ff = 0; ff < 107; ff++) checkURLCache2((cacheStem = 'block/' + ff));
  }
  function offlinePopup() {
    (0 == $('#offPop').length
      ? $('body').append(
          '<div id="offPop" style="position: fixed; background: #101010; color: white; border-radius: 10px; font-size: 22px; top: 0; right: 0; bottom: 0; left: 0; margin: auto auto; padding: 80px; height: 90px; width: 430px; z-index: 10000; text-align: center;"><strong>NOT ENOUGH DOWNLOADED MATERIAL</strong><br><span style="font-size: 15px;">Please download more lessons when online by clicking on <strong style="font-size: 20px;">&#10515;</strong> on the top-right corner of the lesson thumbnail in the main menu.</span></div>',
        )
      : $('#offPop').show(),
      setTimeout(function () {
        $('#offPop').fadeOut();
      }, 5e3));
  }
}
function randomSentence() {
  var e, t, o;
  if (bonusMode) bonusSentence();
  else if (
    ($('.forSentence').text(''),
    $('.engSentence').text(''),
    'pwa' == osType && sessionStorage.getItem('offlineSession')
      ? ((o = Math.floor(Math.random() * cachedAll.length)),
        (e = cachedAll[o].split('/')),
        (jsNum = parseInt(e[1])),
        (jsGroup = e[0]))
      : ((e = ['vocab', 'verb', 'convo', 'block']),
        (o = Math.floor(Math.random() * e.length)),
        (t = []),
        'convo' == (jsGroup = e[o])
          ? (t = [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
              36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
              55, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
              68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
            ])
          : 'vocab' == jsGroup
            ? (t = [
                7, 8, 9, 35, 36, 37, 38, 39, 40, 87, 88, 89, 90, 91, 92, 93, 94,
              ])
            : 'verb' == jsGroup
              ? 'Spanish' == lessonLanguage
                ? (t = [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
                    33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
                    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
                    63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
                    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
                    93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
                    106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 141,
                    142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153,
                    154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165,
                    166, 167, 168, 169,
                  ])
                : 'Portuguese' == lessonLanguage
                  ? (t = [
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                      32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                      46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                      60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73,
                      74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
                      88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
                      102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
                      113, 114, 115, 116, 141, 142, 143, 144, 145, 146, 147,
                      148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158,
                      159, 160, 161, 162, 163, 164, 165, 166,
                    ])
                  : 'French' == lessonLanguage
                    ? (t = [
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                        31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
                        45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
                        59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
                        73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
                        87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
                        101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111,
                        112, 113, 130, 131, 132, 133, 134, 135, 136, 137, 138,
                        139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
                        150, 151, 152, 153, 154, 155,
                      ])
                    : 'Italian' == lessonLanguage
                      ? (t = [
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                          30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                          43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
                          56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
                          69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
                          82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
                          95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
                          107, 108, 109, 110, 111, 112, 113, 132, 133, 134, 135,
                          136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146,
                          147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
                        ])
                      : 'German' == lessonLanguage &&
                        (t = [
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                          30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
                          43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
                          56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
                          69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81,
                          82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
                          95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
                          107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117,
                          118, 119, 132, 133, 134, 135, 136, 137, 138, 139, 140,
                          141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151,
                          152, 153, 154, 155, 156, 157,
                        ])
              : 'block' == jsGroup &&
                ('Spanish' == lessonLanguage
                  ? (t = [
                      2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20,
                      22, 23, 24, 26, 27, 28, 29, 31, 32, 33, 35, 36, 37, 39,
                      40, 41, 43, 44, 46, 47, 49, 50, 52, 53, 54, 56, 57, 58,
                      60, 61, 62, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75,
                      76, 77, 78, 79, 80, 81, 82, 83, 84, 86, 87, 89,
                    ])
                  : 'Portuguese' == lessonLanguage
                    ? (t = [
                        2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 19, 20,
                        21, 23, 24, 26, 27, 28, 29, 31, 32, 33, 35, 36, 37, 39,
                        40, 41, 42, 44, 45, 47, 48, 50, 51, 53, 54, 55, 57, 58,
                        59, 60, 62, 63, 64, 66, 67, 68, 69, 70, 71, 73, 74, 75,
                        76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 89, 90,
                        92,
                      ])
                    : 'French' == lessonLanguage
                      ? (t = [
                          2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18,
                          19, 21, 22, 23, 24, 26, 27, 28, 29, 31, 32, 33, 34,
                          36, 37, 38, 40, 41, 43, 44, 46, 47, 49, 50, 52, 53,
                          55, 56, 58, 59, 60, 62, 63, 64, 66, 67, 68, 69, 71,
                          72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85,
                          86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97, 98, 100,
                        ])
                      : 'Italian' == lessonLanguage
                        ? (t = [
                            2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19,
                            20, 21, 23, 24, 25, 27, 28, 31, 32, 33, 34, 36, 37,
                            39, 40, 41, 42, 44, 45, 47, 48, 50, 51, 53, 54, 55,
                            56, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 70, 71,
                            72, 73, 74, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
                            87, 88, 89, 90, 92, 93,
                          ])
                        : 'German' == lessonLanguage &&
                          (t = [
                            3, 4, 9, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21, 23,
                            24, 25, 27, 28, 29, 31, 32, 34, 35, 37, 38, 39, 41,
                            42, 43, 45, 46, 47, 49, 50, 52, 53, 55, 56, 58, 59,
                            60, 62, 63, 64, 66, 67, 69, 70, 71, 72, 73, 75, 76,
                            77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
                            91, 92, 94, 95, 96, 98, 99, 101, 102, 103, 104, 106,
                            107,
                          ])),
        (o = Math.floor(Math.random() * t.length)),
        (jsNum = t[o])),
    flashCard && 5 <= cardNumbers.length)
  ) {
    if (++cardNum >= cardNumbers.length)
      return (
        $(
          '#writtenResult, #extra1, #extra3, #extra4, .bigPic, .smallPic, .wordSentence, .persons, #choice3, #choice2, #choice2b, #whiteWrap, #lengthBtn, .strikes, .scoreMeter, .scoreMeter2, .scoreMeter3, .storyCont, #storyWrap, #storyDiff',
        ).fadeOut(),
        $(window).innerWidth() < 550 && $('body').addClass('barOut'),
        void $('#bonusEnd').fadeIn()
      );
    var r,
      n = cardNumbers[cardNum].split('|');
    ((jsNum = parseInt(n[0])),
      (randomExampleNum = parseInt(n[1]) - 1),
      'a' == n[2]
        ? (jsGroup = 'block')
        : 'b' == n[2]
          ? (jsGroup = 'verb')
          : 'c' == n[2]
            ? (jsGroup = 'vocab')
            : 'd' == n[2] && (jsGroup = 'convo'),
      0 != $('#loadedContent').length && $('#loadedContent').remove(),
      ((r = document.createElement('div')).id = 'loadedContent'),
      (n = document.createElement('script')).setAttribute(
        'type',
        'text/javascript',
      ),
      n.setAttribute('src', '../' + jsGroup + '/' + jsNum + '/content.js'),
      r.appendChild(n),
      document.body.appendChild(r),
      (n.onload = function () {
        (' ' ==
          (currSentence = forExamples[randomExampleNum]
            .split('<strong>')
            .join('')
            .split('</strong>')
            .join('')
            .split('â€¦')
            .join('...')
            .split(' .')
            .join('.')
            .split('  ')
            .join(' ')).charAt(currSentence.length - 1) &&
          (currSentence = currSentence.slice(0, -1)),
          (currSentence2 = engExamples[randomExampleNum]
            .split('<strong>')
            .join('')
            .split('</strong>')
            .join('')
            .split('<em>')
            .join('')
            .split('</em>')
            .join('')
            .split('â€¦')
            .join('...')
            .split(' .')
            .join('.')
            .split('  ')
            .join(' ')),
          (currLength = currSentence.length),
          (t = [
            7, 8, 9, 35, 36, 37, 38, 39, 40, 87, 88, 89, 90, 91, 92, 93, 94,
          ]),
          ('vocab' == jsGroup && -1 == t.indexOf(parseInt(jsNum))) ||
          ('verb' == jsGroup && parseInt(randomExampleNum) % 2 == 0) ||
          -1 < currSentence.indexOf('(') ||
          -1 < currSentence.indexOf('/')
            ? ($('#loadedContent').remove(), restartRandom())
            : processRandom());
      }));
  } else
    (0 != $('#loadedContent').length && $('#loadedContent').remove(),
      ((r = document.createElement('div')).id = 'loadedContent'),
      (n = document.createElement('script')).setAttribute(
        'type',
        'text/javascript',
      ),
      n.setAttribute('src', '../' + jsGroup + '/' + jsNum + '/content.js'),
      r.appendChild(n),
      document.body.appendChild(r),
      (n.onload = function () {
        if (
          ((randomExampleNum = Math.floor(Math.random() * forExamples.length)),
          'convo' != jsGroup)
        )
          for (
            var e = 0;
            (-1 < forExamples[randomExampleNum].indexOf('%') ||
              -1 < forExamples[randomExampleNum].indexOf(' / ') ||
              -1 == forExamples[randomExampleNum].indexOf('<strong>')) &&
            ((randomExampleNum = Math.round(
              Math.floor(Math.random() * forExamples.length),
            )),
            !(10 <= ++e));
          );
        (' ' ==
          (currSentence = forExamples[randomExampleNum]
            .split('<strong>')
            .join('')
            .split('</strong>')
            .join('')
            .split('â€¦')
            .join('...')
            .split(' .')
            .join('.')
            .split('  ')
            .join(' ')).charAt(currSentence.length - 1) &&
          (currSentence = currSentence.slice(0, -1)),
          (currSentence2 = engExamples[randomExampleNum]
            .split('<strong>')
            .join('')
            .split('</strong>')
            .join('')
            .split('<em>')
            .join('')
            .split('</em>')
            .join('')
            .split('â€¦')
            .join('...')
            .split(' .')
            .join('.')
            .split('  ')
            .join(' ')),
          (currLength = currSentence.length),
          2e3 < searchCount
            ? 'pwa' == osType && sessionStorage.getItem('offlineSession')
              ? ($('.forSentence').text(
                  'End of examples. Download more lessons for offline use.',
                ),
                $('.engSentence').text('Restart lesson to try again.'))
              : ($('.forSentence').text('End of Session'),
                $('.engSentence').text('Restart Lesson'))
            : -1 <
                  $.inArray(
                    jsGroup + '|' + jsNum + '|' + randomExampleNum,
                    sentenceArray,
                  ) || -1 < forExamples[randomExampleNum].indexOf('<br>')
              ? restartRandom()
              : (searchCount++,
                -1 < currSentence.indexOf('(') || -1 < currSentence.indexOf('/')
                  ? ($('#loadedContent').remove(), restartRandom())
                  : 'easy' == difficulty
                    ? (30 <= currLength || currLength < 11
                        ? restartRandom
                        : processRandom)()
                    : 'medium' == difficulty
                      ? (56 <= currLength || currLength < 31
                          ? restartRandom
                          : processRandom)()
                      : 'hard' == difficulty &&
                        (currLength < 57 ? restartRandom : processRandom)()));
      }));
}
function restartRandom() {
  ($('.persons, .bigPic, .smallPic').hide(),
    $('.persons, .bigPic, .smallPic').attr('src', ''),
    randomSentence());
}
function processRandom() {
  if (
    ($('.ctrlBtn1B').removeClass('used'),
    (shufBad = 0),
    $('.strikes').hide(),
    currAct <= 2 &&
      (document
        .getElementById('nativeAudio')
        .addEventListener('loadedmetadata', function (e) {
          duration = document.getElementById('nativeAudio').duration;
        }),
      $('.smSentence').text(currSentence),
      $('.handWrite').text(currSentence2)),
    3 == currAct)
  ) {
    ($('.smSentence').hide(),
      $('.wordSel, .wordSelB').removeClass('greenBorder'));
    var e = shuffle(
      (e = (dragRight = currSentence
        .split('<em>')
        .join('')
        .split('</em>')
        .join('')
        .split('<strong>')
        .join('')
        .split('</strong>')
        .join('')
        .split('.')
        .join('')
        .split('!')
        .join('')
        .split('?')
        .join('')
        .split(':')
        .join('')
        .split('Â¿')
        .join('')
        .split('Â¡')
        .join('')
        .split(';')
        .join('')
        .split(',')
        .join('')
        .split('-')
        .join(' ')
        .toLowerCase()).split(' ')),
    );
    for (
      $('.wordSel').removeClass('disPuzz'),
        $('.wordSel, .wordSelB, #dragImg, .ctrlBtn3C').hide(),
        $('.selCont').css('opacity', '0'),
        $('.wordSel, .wordSelB').text(''),
        $('#dragImg2').show(),
        i = 1;
      i <= e.length;
      ++i
    )
      ($('#wSel' + i).text(e[i - 1]),
        $('.wordSelB')
          .eq(i - 1)
          .text(e[i - 1]),
        $('#wSel' + i).show());
    ($('.selCont').show(),
      setTimeout(function () {
        $('.selCont').animate({ opacity: 1 });
      }, 200),
      $('.handWrite').text(currSentence2));
  }
  var t;
  if (
    (4 == currAct &&
      ((t = currSentence.split('-').join(' ').split(' ')) < 4 && 0 != t
        ? $('.colorPic').css('background', '#eaa62f')
        : 0 == t
          ? $('.colorPic').css('background', '#549e32')
          : $('.colorPic').css('background', '#cc1111'),
      $('#writeAnswerField').val(''),
      $('#writeAnswerField').attr(
        'placeholder',
        'Type ' + t.length + ' Words Here...',
      ),
      $('.colorPic').html(t.length),
      checkWordsLeft(),
      $('.engSentence').text(currSentence2)),
    (searchCount = 1),
    sentenceArray.push(jsGroup + '|' + jsNum + '|' + randomExampleNum),
    sentenceArray.push(jsGroup + jsNum),
    'convo' === jsGroup)
  )
    ($('#extraPic, .smallPic').css({
      'background-image':
        'url(../' + jsGroup + '/' + jsNum + '/images/background.png)',
    }),
      randomExampleNum % 2 == 0
        ? ((soundName = '1fast' + Math.round(0.5 * (randomExampleNum + 1))),
          (1.2 != currAct ? loadFastSound : loadNotPlay)(),
          $('#person1').attr(
            'src',
            '../' + jsGroup + '/' + jsNum + '/images/person1.png',
          ),
          $('#person1').css({ transform: 'scaleX(1)' }))
        : ((soundName = '2fast' + Math.round(0.5 * randomExampleNum)),
          (1.2 != currAct ? loadFastSound : loadNotPlay)(),
          $('#person1').attr(
            'src',
            '../' + jsGroup + '/' + jsNum + '/images/person2.png',
          ),
          $('#person1').css({ transform: 'scaleX(-1)' }),
          65 <= jsNum &&
            jsNum <= 69 &&
            ((o = randomExampleNum),
            (t = 100),
            65 == jsNum
              ? (t = 7)
              : 68 == jsNum
                ? (t = 5)
                : 69 == jsNum && (t = 11),
            console.log(t),
            o < t
              ? $('#person1').attr(
                  'src',
                  '../' + jsGroup + '/' + jsNum + '/images/person2.png',
                )
              : $('#person1').attr(
                  'src',
                  '../' + jsGroup + '/' + jsNum + '/images/person2b.png',
                ),
            65 == jsNum &&
              11 <= o &&
              $('#person1').attr(
                'src',
                '../' + jsGroup + '/' + jsNum + '/images/person2c.png',
              ))),
      $('.persons, .bigPic, .smallPic').fadeIn(),
      $(
        '.scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn',
      ).show());
  else if ('vocab' === jsGroup) {
    var o =
      'sentence' == lessonType
        ? Math.ceil(0.5 * randomExampleNum)
        : Math.ceil(0.5 * (randomExampleNum + 1));
    $('#extraPic, .smallPic').css({
      'background-image':
        'url(../' + jsGroup + '/' + jsNum + '/images/pic' + o + '.jpg)',
    });
    for (var r = 1, n = 1, s = [], a = 0; a < engExamples.length; a++)
      '*' == forExamples[a].charAt(0)
        ? (s.push('femsound' + n), n++, n++)
        : (s.push('sound' + r), r++, r++);
    ((soundName = s[randomExampleNum]),
      $('.bigPic, .smallPic').fadeIn(),
      setTimeout(function () {
        (1.2 != currAct ? loadFastSound : loadNotPlay)();
      }, 400));
  } else
    'verb' === jsGroup
      ? ($('#extraPic, .smallPic').css({
          'background-image':
            'url(../' +
            jsGroup +
            '/' +
            jsNum +
            '/images/pic' +
            0.5 * (randomExampleNum + 1) +
            '.jpg)',
        }),
        $('.bigPic, .smallPic').fadeIn(),
        (soundName = 'sound' + 2 * (randomExampleNum + 0.5)),
        setTimeout(function () {
          (1.2 != currAct ? loadFastSound : loadNotPlay)();
        }, 400))
      : 'block' === jsGroup &&
        ($('#extraPic, .smallPic').css({
          'background-image':
            'url(../' +
            jsGroup +
            '/' +
            jsNum +
            '/images/pic' +
            (randomExampleNum + 1) +
            '.jpg)',
        }),
        $('.bigPic, .smallPic').fadeIn(),
        (soundName = 'sound' + 2 * (randomExampleNum + 0.5)),
        setTimeout(function () {
          (1.2 != currAct ? loadFastSound : loadNotPlay)();
        }, 400));
}
function checkWordsLeft() {
  var e = currSentence.trim().split('-').join(' ').split(' '),
    t = $('#writeAnswerField')
      .val()
      .split(':')
      .join('')
      .split(';')
      .join('')
      .split(',')
      .join('')
      .split('.')
      .join('')
      .split('!')
      .join('')
      .split('Â¡')
      .join('')
      .split('?')
      .join('')
      .split('Â¿')
      .join('')
      .split('?')
      .join('')
      .trim()
      .split('  ')
      .join(' ')
      .split('  ')
      .join(' ')
      .split('  ')
      .join(' ')
      .split('`')
      .join("'")
      .split('â€˜')
      .join("'")
      .split('â€˜')
      .join("'")
      .split('â€™')
      .join("'")
      .split('â€“')
      .join('-')
      .split('â€”')
      .join('-')
      .split('-')
      .join(' ')
      .split(' '),
    o = e.length - t.length,
    r = currSentence
      .replace(
        /[a-zA-Z0-9Ã Ã¨Ã¬Ã²Ã¹Ã¢Ã£ÃªÃ®Ã´Ã»Ã§Ã¡Ã©Ã­Ã³ÃºÃ±Ã¤Ã«Ã¯Ã¶Ã¼ÃµÃ€ÃˆÃŒÃ’Ã™Ã‚ÃƒÃŠÃŽÃ”Ã›Ã‡ÃÃ‰ÃÃ“Ã•ÃšÃ‘Ã„Ã‹ÃÃ–ÃœÃŸ']/g,
        '_',
      )
      .split('-')
      .join(' ')
      .split(' ');
  if (0 < t.length && '' != t[0])
    for (i = 0; i < t.length; i++)
      r[i] = r[i]
        .split('_____')
        .join('_')
        .split('____')
        .join('_')
        .split('___')
        .join('_')
        .split('___')
        .join('_')
        .split('__')
        .join('_')
        .split('_')
        .join(t[i]);
  var n = [];
  for (i = 0; i < currSentence.length; i++)
    ' ' == currSentence.charAt(i)
      ? n.push(' ')
      : '-' == currSentence.charAt(i) && n.push('-');
  var s = '';
  for (i = 0; i < r.length - 1; i++) s = s + r[i] + n[i];
  ((s += r[r.length - 1]),
    $('.forSentence').text(s),
    0 == $('#writeAnswerField').val().trim().length && (o = e.length),
    o < 4 && 0 != o
      ? $('.colorPic').css('background', '#eaa62f')
      : 0 == o
        ? $('.colorPic').css('background', '#549e32')
        : $('.colorPic').css('background', '#cc1111'),
    $('.colorPic').html(o));
}
function loadNotPlay() {
  currAct <= 2
    ? ($('#nativeAudio').trigger('pause'),
      $('#nativeAudio').attr(
        'src',
        '../' + jsGroup + '/' + jsNum + '/sounds/' + soundName + soundType,
      ))
    : ($('#mainSound').trigger('pause'),
      $('#mainSound').attr(
        'src',
        '../' + jsGroup + '/' + jsNum + '/sounds/' + soundName + soundType,
      ));
}
function loadFastSound() {
  currAct <= 2
    ? ($('#nativeAudio').trigger('pause'),
      $('#nativeAudio').attr(
        'src',
        '../' + jsGroup + '/' + jsNum + '/sounds/' + soundName + soundType,
      ),
      document.getElementById('nativeAudio').load(),
      document
        .getElementById('nativeAudio')
        .addEventListener('canplay', playSound))
    : ($('#mainSound').trigger('pause'),
      $('#mainSound').attr(
        'src',
        '../' + jsGroup + '/' + jsNum + '/sounds/' + soundName + soundType,
      ),
      document.getElementById('mainSound').load(),
      document
        .getElementById('mainSound')
        .addEventListener('canplay', playSound));
}
function loadSlowSound() {
  var e =
    'convo' === jsGroup
      ? soundName.split('fast').join('slow')
      : 'sound' + ((e = parseInt(soundName.split('sound').join(''))) + 1);
  ($('#mainSound').trigger('pause'),
    $('#mainSound').attr(
      'src',
      '../' + jsGroup + '/' + jsNum + '/sounds/' + e + soundType,
    ),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playSound));
}
function playSound() {
  currAct <= 2
    ? (document
        .getElementById('nativeAudio')
        .removeEventListener('canplay', playSound),
      $('#nativeAudio').trigger('play'))
    : (document
        .getElementById('mainSound')
        .removeEventListener('canplay', playSound),
      $('#mainSound').trigger('play'));
}
function backAction() {
  $('.explanations').is(':visible')
    ? $('.explanations').hide()
    : 0 == $('#dictFrame2').length
      ? '' != getUrlParam('pronun', '') && $('#choice3').is(':visible')
        ? (window.location = '../pronun/index.html')
        : $('#choice1').is(':visible')
          ? (bonusMode ? reloadQuiz : homeMenu)()
          : $('#storyWrap').is(':visible')
            ? (clearInterval(stoTimer),
              $('#storyWrap').hide(),
              $('#storyDiff').show())
            : $('#storyPic').is(':visible')
              ? (clearInterval(stoTimer),
                $('#storyWrap').show(),
                $('.storyCont').hide(),
                resetStory(),
                backChange())
              : location.reload()
      : $('#dictFrame2, #dictFrame').remove();
}
function resetStory() {
  var e = scoreNumArr[16].split('|');
  for (x = 0; x <= 59; x++) {
    var t = 0.5 * storyText[x].split('**').length;
    ((slideNum = e[x]),
      (divName = '#stDesc' + (x + 1) + ' b'),
      $(divName).text(slideNum));
    ((t = slideNum / t), (t = (t *= 100).toFixed(0)));
    ((divName = '#stDesc' + (x + 1) + ' i'),
      $(divName).text(t),
      100 == t && ((divName = '#stPic' + (x + 1) + ' img'), $(divName).show()));
  }
}
function loadButtonsMain() {
  ($(window).resize(function () {
    (resizeTitle(),
      resizePage(),
      setTimeout(function () {
        resizePage();
      }, 200));
  }),
    $(window).load(function () {
      (resizeTitle(), resizePage());
    }),
    $('#volDiv2').slider({
      orientation: 'horizontal',
      value: sfxSprite.volume,
      min: 0,
      max: 1,
      range: 'min',
      animate: !0,
      step: 0.1,
      slide: function (e, t) {
        ((audio.volume = t.value),
          (mainSound.volume = t.value),
          (sfxSprite.volume = t.value),
          (localStorage.programVolume = t.value));
      },
    }),
    null != localStorage.programVolume &&
      ((audio.volume = localStorage.programVolume),
      (mainSound.volume = localStorage.programVolume),
      (sfxSprite.volume = localStorage.programVolume),
      $('#volDiv2').slider('value', localStorage.programVolume)),
    $('#menuMain2').on('click', homeMenu),
    $('#lengthBtn').on('click', function () {
      (streakNumbers(), $('#choice2b, #whiteWrap').show());
    }),
    $('#backBtn, .bigBack').on('click', backAction),
    (window.onkeyup = function (e) {
      e = e.keyCode || e.which;
      13 == e && $('#writeAnswerField').is(':visible')
        ? $('#writeAnswerField').is(':focus') ||
          '' != $('#writeAnswerField').val() ||
          $('#writeAnswerField').focus()
        : 8 != e || $('#writeAnswerField').is(':visible')
          ? 37 == e &&
            $('.stoLeft').is(':visible') &&
            $('#stoCounter').is(':visible')
            ? storyPrev()
            : 39 == e &&
              $('.stoRight').is(':visible') &&
              $('#stoCounter').is(':visible') &&
              storyNext()
          : backAction();
    }),
    'pwa' == osType &&
      sessionStorage.getItem('offlineSession') &&
      $('#act1, #act3, #act4').on('click', function () {
        'pwa' == osType &&
          sessionStorage.getItem('offlineSession') &&
          cachedAll.length < 15 &&
          offlinePopup();
      }),
    5 < cardNumbers.length &&
      !sessionStorage.getItem('offlineSession') &&
      ($('#choice2b').append(
        '<h1 class="flashExtra" id="flashEx2"><img src="../flash/images/activity5.svg" alt=""/><span>Or... Practice sentences from Flash Cards</span></h1>',
      ),
      $('#choice2').append(
        '<h1 class="flashExtra" id="flashEx"><img src="../flash/images/activity5.svg" alt=""/><span>Or... Practice sentences from Flash Cards</span></h1>',
      ),
      $('body').append(
        '<div id="bonusEnd" style="height: 240px;"><h1 style="margin-bottom: 0;">END OF FLASH CARDS</h1><p style="margin-bottom: 30px;">Please load more Flash Cards from the lessons.<br>(Only sentences are used in these exercises)</p><div class="wrapBtn wb2"><img src="../extra/images/extra.png" style="left: 30px;"/>PRACTICE SKILLS AGAIN</div</div>',
      ),
      $('.wb2').on('click', function () {
        ($('#loadLogo').show(),
          setTimeout(function () {
            location.reload();
          }, 100));
      })),
    $('#act3').on('click', function () {
      ('pwa' == osType &&
        sessionStorage.getItem('offlineSession') &&
        cachedAll.length < 15) ||
        (0 == $('#lisNote').length
          ? ($('#choice2').append(
              '<h2 id="lisNote" style="position: fixed; bottom: 10px; top: auto; color: rgba(255,255,255,0.5); left: 5%; width: 90%; font-size: 18px; display:none;"><span>HINT: For more listening practice, check out our AUDIO course in the conversation lessons. Choose any conversation lesson, and press <strong>AUDIO ONLY</strong>.</span></h2>',
            ),
            $('#lisNote').fadeIn(),
            $('#act1, #act4').on('click', function () {
              ('pwa' == osType &&
                sessionStorage.getItem('offlineSession') &&
                cachedAll.length < 15) ||
                $('#lisNote').hide();
            }))
          : $('#lisNote').show());
    }),
    $('#btnEasy').on('click', function () {
      ((flashCard = !(difficulty = 'easy')), streakMaker(), startLesson());
    }),
    $('#btnMedium').on('click', function () {
      ((flashCard = !(difficulty = 'medium')), streakMaker(), startLesson());
    }),
    $('#btnHard').on('click', function () {
      ((flashCard = !(difficulty = 'hard')), streakMaker(), startLesson());
    }),
    $('#flashEx').on('click', function () {
      ((flashCard = !0), (cardNum = -1), streakMaker(), startLesson());
    }),
    $('#btnEasy2').on('click', function () {
      ((difficulty = 'easy'),
        $('#choice2b, #whiteWrap').hide(),
        (flashCard = !1),
        streakMaker(),
        restartRandom());
    }),
    $('#btnMedium2').on('click', function () {
      ((difficulty = 'medium'),
        $('#choice2b, #whiteWrap').hide(),
        (flashCard = !1),
        streakMaker(),
        restartRandom());
    }),
    $('#btnHard2').on('click', function () {
      ((difficulty = 'hard'),
        $('#choice2b, #whiteWrap').hide(),
        (flashCard = !1),
        streakMaker(),
        restartRandom());
    }),
    $('#flashEx2').on('click', function () {
      ($('#choice2b, #whiteWrap').hide(),
        (cardNum = -1),
        (flashCard = !0),
        streakMaker(),
        restartRandom());
    }),
    $('body').keydown(function (e) {
      4 == currAct &&
        (13 == e.keyCode && $('#writtenResult').is(':visible')
          ? ($('#writtenResult').hide(),
            $('#writeAnswerField').val(''),
            'mobile' != currentDevice &&
              setTimeout(function () {
                $('#writeAnswerField').focus();
              }, 10),
            $(
              '.wordSentence, #extra4, .scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn, .bigPic, .smallPic',
            ).fadeIn(),
            restartRandom())
          : setTimeout(function () {
              checkWordsLeft();
            }, 10));
    }),
    $('.quesBtn').on('click', function () {
      $('.explanations').fadeIn();
    }),
    $('#act1').on('click', function () {
      ($('body').removeClass('writing'),
        ('pwa' == osType &&
          sessionStorage.getItem('offlineSession') &&
          cachedAll.length < 15) ||
          ($('#choice1').hide(),
          $('#choice3').show(),
          0 == didIt && recordInit()));
    }),
    $('#proAct1').on('click', function () {
      ((currAct = 1.1),
        $('#bigBtnCont').removeClass('topPad'),
        $('#choice3').hide(),
        bonusMode
          ? localStorage.getItem(
              storeInfo + 'convoBonus' + jsNum + '|' + currAct,
            )
            ? ((randomExampleNum = parseInt(
                localStorage.getItem(
                  storeInfo + 'convoBonus' + jsNum + '|' + currAct,
                ),
              )),
              $('#loadLogo2').show(),
              setTimeout(function () {
                ($('#loadLogo2').fadeOut(), startLesson());
              }, 1e3))
            : ((randomExampleNum = -1),
              setTimeout(function () {
                startLesson();
              }, 200))
          : ($('#choice2').show(), streakNumbers()),
        $('.smSentence, .ctrlBtn1B').show(),
        $('#extra1').css({ height: '160px' }),
        backChange());
    }),
    $('#proAct2').on('click', function () {
      ((currAct = 1.2),
        $('#bigBtnCont').removeClass('topPad'),
        $('#choice3, .ctrlBtn1B').hide(),
        bonusMode
          ? localStorage.getItem(
              storeInfo + 'convoBonus' + jsNum + '|' + currAct,
            )
            ? ((randomExampleNum = parseInt(
                localStorage.getItem(
                  storeInfo + 'convoBonus' + jsNum + '|' + currAct,
                ),
              )),
              $('#loadLogo2').show(),
              setTimeout(function () {
                ($('#loadLogo2').fadeOut(), startLesson());
              }, 1e3))
            : ((randomExampleNum = -1),
              setTimeout(function () {
                startLesson();
              }, 200))
          : ($('#choice2').show(), streakNumbers()),
        $('.smSentence').show(),
        $('#extra1').css({ height: '160px' }),
        backChange());
    }),
    $('#proAct3').on('click', function () {
      ((currAct = 1.3),
        $('#bigBtnCont').addClass('topPad'),
        $('#choice3, .smSentence').hide(),
        bonusMode
          ? localStorage.getItem(
              storeInfo + 'convoBonus' + jsNum + '|' + currAct,
            )
            ? ((randomExampleNum = parseInt(
                localStorage.getItem(
                  storeInfo + 'convoBonus' + jsNum + '|' + currAct,
                ),
              )),
              $('#loadLogo2').show(),
              setTimeout(function () {
                ($('#loadLogo2').fadeOut(), startLesson());
              }, 1e3))
            : ((randomExampleNum = -1),
              setTimeout(function () {
                startLesson();
              }, 200))
          : ($('#choice2').show(), streakNumbers()),
        $('.ctrlBtn1B').show(),
        $('#extra1').css({ height: '120px' }),
        backChange());
    }),
    $('.storyBtns').on('click', function () {
      ($('#storyPic').on('touchstart touchend mouseup mouseout mousedown'),
        $('#storyPic')
          .on('touchstart mousedown', function (e) {
            (e.preventDefault(),
              $('#storyText').is(':visible') &&
                2 == modeNum &&
                'The End' != $('#storyEng').text() &&
                (stoDelay = setTimeout(function () {
                  ((modeNum = parseInt(modeNum)),
                    $('#storyEng').addClass('altText'),
                    $('#storyEng').show(),
                    $('#storyPic').addClass('pressed'));
                }, 100)));
          })
          .on('touchend mouseup mouseout', function (e) {
            (e.preventDefault(),
              2 == modeNum &&
                'The End' != $('#storyEng').text() &&
                (clearTimeout(stoDelay),
                (modeNum = parseInt(modeNum)),
                $('#storyEng').removeClass('altText'),
                $('#storyPic').removeClass('pressed'),
                $('#storyEng').hide()));
          }));
      var e = stoSec,
        t = Math.floor(e / 3600);
      ($('#stoHour').html(t), (e %= 3600));
      t = ('0' + Math.floor(e / 60)).slice(-2);
      $('#stoMin').html(t);
      e = ('0' + (e % 60)).slice(-2);
      ($('#stoSec').html(e),
        $('#stoTimer').css('color', 'white'),
        (maxTimer = 0),
        clearInterval(stoTimer),
        (stoTimer = setInterval(timerActions, 1e3)),
        (storyNum = $(this).attr('id').split('story').join('')),
        $('#background').css({
          'background-image': 'url(story/storyB' + storyNum + '.jpg)',
        }),
        (currStory = storyText[storyNum - 1].split('**')),
        (o = 0.5 * currStory.length));
      e = scoreNumArr[16].split('|');
      (0 == (currStoPos = parseInt(e[storyNum - 1])) && (currStoPos = 1),
        $('#stoCounter b').text(currStoPos),
        $('#stoCounter em').text(o),
        $('#storyFor').html(currStory[2 * currStoPos - 2]),
        $('#storyEng').text(currStory[2 * currStoPos - 1]),
        $('#storyPic img').attr('src', 'story/story' + storyNum + '.png'),
        $('#storyWrap').hide(),
        setTimeout(function () {
          ($('.storyCont').fadeIn('1000'),
            modeInit(),
            1 == currStoPos && $('.stoLeft, .stoStart').hide(),
            o <= currStoPos
              ? ($('.stoRight, .bigRight').hide(), $('.bigBack').show())
              : $('.bigBack').hide());
        }, 300));
    }),
    $('#act2').on('click', function () {
      ((currAct = 2),
        $('body').removeClass('writing'),
        $('#choice1').hide(),
        $('#storyDiff').show());
    }),
    $('#stoAct1').on('click', function () {
      ($('#storyDiff, .storyBtns').hide(),
        $('.sho, #storyWrap').show(),
        backChange());
    }),
    $('#stoAct2').on('click', function () {
      ($('#storyDiff, .storyBtns').hide(),
        $('.med, #storyWrap').show(),
        backChange());
    }),
    $('#stoAct3').on('click', function () {
      ($('#storyDiff, .storyBtns').hide(),
        $('.adv, #storyWrap').show(),
        backChange());
    }),
    ('Spanish' != lessonLanguage &&
      'German' != lessonLanguage &&
      'Portuguese' != lessonLanguage) ||
      $('.pastWarn').hide(),
    $('.stoRight').on('click', function () {
      storyNext();
    }),
    $('.stoStart').on('click', function () {
      storyStart();
    }),
    $('.stoLeft').on('click', function () {
      storyPrev();
    }),
    $('.stoMode').on('click', function () {
      storyMode();
    }),
    $('#storyText')
      .hammer()
      .on('panstart', function (e) {
        (clearTimeout(stoDelay),
          $('#storyEng').hasClass('altText') ||
            ($('#storyText').css('color', 'darkGrey'),
            $('#storyText').css('cursor', 'grabbing')));
      }),
    $('#storyText')
      .hammer()
      .on('panend', function (e) {
        (clearTimeout(stoDelay),
          $('#storyEng').hasClass('altText') ||
            ($('#storyText').css('color', '#100c08'),
            $('#storyText').css('cursor', 'grab'),
            25 <= e.gesture.distance &&
              ('right' == swipeDir
                ? $('.stoRight').is(':visible') &&
                  $('#stoCounter').is(':visible') &&
                  storyNext()
                : 'left' == swipeDir &&
                  $('.stoLeft').is(':visible') &&
                  $('#stoCounter').is(':visible') &&
                  storyPrev())));
      }),
    $('#storyText')
      .hammer()
      .on('panright', function () {
        ((swipeDir = 'left'),
          clearTimeout(stoDelay),
          $('#storyEng').hasClass('altText'));
      }),
    $('#storyText')
      .hammer()
      .on('panleft', function () {
        ((swipeDir = 'right'),
          clearTimeout(stoDelay),
          $('#storyEng').hasClass('altText'));
      }),
    $('.bigLeft, #smallLeft').on('click', function () {
      $('.stoLeft').is(':visible') &&
        $('#stoCounter').is(':visible') &&
        storyPrev();
    }),
    $('.bigRight, #smallRight').on('click', function () {
      $('.stoRight').is(':visible') &&
        $('#stoCounter').is(':visible') &&
        storyNext();
    }),
    'mobile' != currentDevice &&
      ($('.stoRight, .stoLeft, .bigRight, .bigLeft, .bigBack, .stoStart').hover(
        function () {
          $(this).toggleClass('fullOpacity');
        },
      ),
      $('.stoMode').hover(function () {
        $(this).toggleClass('greyBack');
      })));
  var e = scoreNumArr[16].split('|');
  for (x = 0; x <= 59; x++) {
    var o = 0.5 * storyText[x].split('**').length,
      t = '#stDesc' + (x + 1) + ' em';
    ($(t).text(o),
      (slideNum = e[x]),
      (t = '#stDesc' + (x + 1) + ' b'),
      $(t).text(slideNum));
    var r = slideNum / o,
      r = (r *= 100).toFixed(0),
      t = '#stDesc' + (x + 1) + ' i';
    ($(t).text(r),
      100 == r && ((t = '#stPic' + (x + 1) + ' img'), $(t).show()));
  }
  ($('.wordSelB').on('click', function () {
    if (
      1 == $('.wordSelB:visible').length ||
      $('.wordSel:visible').length == $('.wordSelB:visible').length
    )
      ((noPuzz = !0),
        $('.wordSelB').fadeOut('400', function () {
          setTimeout(function () {
            ($('.wordSelB').text(''),
              $('.wordSel').removeClass('disPuzz'),
              $('#dragImg, .ctrlBtn3C').hide(),
              $('.selCont').css('opacity', '1'),
              $('#dragImg2').fadeIn(),
              setTimeout(function () {
                noPuzz = !1;
              }, 500));
          }, 500);
        }));
    else {
      var e = $(this).text(),
        o = $(this);
      for ($(this).fadeOut(), xx = 0; xx < $('.disPuzz').length; xx++)
        e == $('.disPuzz').eq(xx).text() &&
          ($('.disPuzz').eq(xx).removeClass('disPuzz'), (xx = 100));
      setTimeout(function () {
        o.text('');
        for (var e = [], t = 0; t < $('.wordSelB:visible').length; t++)
          '' != $('.wordSelB:visible').eq(t).text() &&
            e.push($('.wordSelB:visible').eq(t).text());
        for (
          $('.wordSelB').hide(), $('.wordSelB').text(''), t = 0;
          t < e.length;
          t++
        )
          ($('.wordSelB').eq(t).text(e[t]), $('.wordSelB').eq(t).show());
      }, 500);
    }
  }),
    $('#act3').on('click', function () {
      ('pwa' == osType &&
        sessionStorage.getItem('offlineSession') &&
        cachedAll.length < 15) ||
        ((currAct = 3),
        $('body').removeClass('writing'),
        $('#choice1').hide(),
        bonusMode
          ? localStorage.getItem(
              storeInfo + 'convoBonus' + jsNum + '|' + currAct,
            )
            ? ((randomExampleNum = parseInt(
                localStorage.getItem(
                  storeInfo + 'convoBonus' + jsNum + '|' + currAct,
                ),
              )),
              $('#loadLogo2').show(),
              setTimeout(function () {
                ($('#loadLogo2').fadeOut(), startLesson());
              }, 1e3))
            : ((randomExampleNum = -1),
              setTimeout(function () {
                startLesson();
              }, 200))
          : (streakNumbers(), $('#choice2').show()),
        backChange());
    }),
    $('#act4').on('click', function () {
      ('pwa' == osType &&
        sessionStorage.getItem('offlineSession') &&
        cachedAll.length < 15) ||
        ((currAct = 4),
        $('body').addClass('writing'),
        $('#choice1').hide(),
        bonusMode
          ? localStorage.getItem(
              storeInfo + 'convoBonus' + jsNum + '|' + currAct,
            )
            ? ((randomExampleNum = parseInt(
                localStorage.getItem(
                  storeInfo + 'convoBonus' + jsNum + '|' + currAct,
                ),
              )),
              $('#loadLogo2').show(),
              setTimeout(function () {
                $('#loadLogo2').fadeOut();
              }, 1e3),
              setTimeout(function () {
                startLesson();
              }, 1300))
            : ((randomExampleNum = -1),
              setTimeout(function () {
                startLesson();
              }, 200))
          : (streakNumbers(), $('#choice2').show()),
        backChange());
    }),
    $('.selContB').sortable({ containment: 'parent', tolerance: 'pointer' }),
    $('.wordSel').on('click', function () {
      var e, t;
      noPuzz ||
        ($('#dragImg2').hide(),
        (e = $(this).text()),
        $(this).addClass('disPuzz'),
        (t = $('.wordSelB:visible').length),
        t++,
        $('.wordSelB')
          .eq(t - 1)
          .text(e),
        $('.wordSelB')
          .eq(t - 1)
          .fadeIn(),
        $('.wordSel:visible').length == t &&
          setTimeout(function () {
            checkAnswer3();
          }, 300));
    }),
    $('.selContB').hover(function () {
      $('.wordSelB').toggleClass('hoverPuzz');
    }),
    $('.boardChar').on('click', addCharacter),
    $('#answerForm').submit(function (e) {
      (e.preventDefault(),
        ($('#writeAnswerField').is(':focus') &&
          '' == $('#writeAnswerField').val()) ||
          checkAnswer4());
    }),
    $('.ctrlBtn1').on('click', function () {
      ($('#writtenResult').hide(),
        $('#writeAnswerField').val(''),
        checkWordsLeft(),
        $(
          '.wordSentence, #extra4, .scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn, .bigPic, .smallPic',
        ).fadeIn(),
        setTimeout(function () {
          loadFastSound();
        }, 400));
    }),
    $('.ctrlBtn1B').on('click', function () {
      (loadFastSound(),
        'mobile' != currentDevice &&
          setTimeout(function () {
            $('#writeAnswerField').focus();
          }, 10));
    }),
    $('.slowImg').on('click', function () {
      (loadSlowSound(),
        'mobile' != currentDevice &&
          setTimeout(function () {
            $('#writeAnswerField').focus();
          }, 10));
    }),
    $('.lessonTitle').on('click', function () {
      2 == currAct && resetStory();
    }),
    $('.ctrlBtn2, .lessonTitle, #x2Btn').on('click', function () {
      (3 == currAct && $('.wordSelB').hasClass('greenBorder')) ||
        ((currAct < 2 ? $('#nativeAudio') : $('#mainSound')).trigger('pause'),
        (currAct = 0),
        backChange(),
        $(
          '#writtenResult, #extra1, #extra3, #extra4, .bigPic, .smallPic, .wordSentence, .persons, #choice3, #choice2, #choice2b, #whiteWrap, #lengthBtn, .strikes, .scoreMeter, .scoreMeter2, .scoreMeter3, .storyCont, #storyWrap, #storyDiff',
        ).hide(),
        $(window).innerWidth() < 550 && $('body').addClass('barOut'),
        clearInterval(stoTimer),
        $('#choice1').fadeIn(),
        $('#writeAnswerField').val(''),
        bonusMode && $('.menuTitleContainer').html(lessonTitle));
    }),
    $('.explanations').on('click', function () {
      $('.explanations').hide();
    }),
    $('.ctrlBtn3').on('click', function () {
      ($('#writtenResult').hide(),
        $('#writeAnswerField').val(''),
        'mobile' != currentDevice &&
          setTimeout(function () {
            $('#writeAnswerField').focus();
          }, 10),
        $(
          '.wordSentence, #extra4, .scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn, .bigPic, .smallPic',
        ).show(),
        restartRandom());
    }),
    $('.ctrlBtn3C').on('click', checkAnswer3),
    $('.ctrlBtn3D').on('click', checkAnswer4),
    $('#x2bBtn, #whiteWrap').on('click', function () {
      $('#choice2b, #whiteWrap').hide();
    }),
    $('.recordBtn').on('click', recordSound),
    $('.playBtn').on('click', playAgain),
    $('.ctrlBtn3A, .nextBtn').on('click', loadNext),
    document.getElementById('audio').addEventListener('ended', doneRecording),
    document
      .getElementById('nativeAudio')
      .addEventListener('ended', doneNative),
    'mobile' == currentDevice ||
      $(
        '.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .menuTitleContainer, .btnDiff, .btnDiff2, .acts, .ctrlBtns, .ctrlBtns2, .boardChar, .quesBtn, .playBtn, .recordBtn, .nextBtn, .proActs, .xBtn, .slowImg',
      ).hover(function () {
        $(this).toggleClass('fullOpacity');
      }));
}
function timerActions() {
  var e, t;
  240 <= ++maxTimer
    ? $('#stoTimer').css('color', 'red')
    : ((t = ++stoSec),
      (e = Math.floor(t / 3600)),
      $('#stoHour').html(e),
      (t %= 3600),
      (e = ('0' + Math.floor(t / 60)).slice(-2)),
      $('#stoMin').html(e),
      (t = ('0' + (t % 60)).slice(-2)),
      $('#stoSec').html(t));
}
function streakMaker() {
  var e = scoreNameArr.indexOf(currAct + difficulty);
  (currAct < 2
    ? ((streak = scoreNumArr[e]),
      $('.scoreMeter3').hide(),
      Math.round(0.1 * streak) <= 36
        ? $('.scoreMeter').css({
            'background-image':
              'url(images/score' + Math.round(0.1 * streak) + '.png)',
          })
        : $('.scoreMeter').css({
            'background-image': 'url(images/score36.png)',
          }))
    : ((streakMax = scoreNumArr[e]),
      (streak = 0),
      $('.scoreMeter3').show(),
      $('#scoreNum2').text(streakMax),
      streak <= 36
        ? $('.scoreMeter').css({
            'background-image': 'url(images/score' + streak + '.png)',
          })
        : $('.scoreMeter').css({
            'background-image': 'url(images/score36.png)',
          })),
    $('#scoreNum1').text(streak));
}
function streakNumbers() {
  currAct < 2
    ? ($('.scText1').html(
        'Practiced: <strong>' +
          scoreNumArr[scoreNameArr.indexOf(currAct + 'easy')] +
          '</strong>',
      ),
      $('.scText2').html(
        'Practiced: <strong>' +
          scoreNumArr[scoreNameArr.indexOf(currAct + 'medium')] +
          '</strong>',
      ),
      $('.scText3').html(
        'Practiced: <strong>' +
          scoreNumArr[scoreNameArr.indexOf(currAct + 'hard')] +
          '</strong>',
      ))
    : ($('.scText1').html(
        'Best Streak: <strong>' +
          scoreNumArr[scoreNameArr.indexOf(currAct + 'easy')] +
          '</strong>',
      ),
      $('.scText2').html(
        'Best Streak: <strong>' +
          scoreNumArr[scoreNameArr.indexOf(currAct + 'medium')] +
          '</strong>',
      ),
      $('.scText3').html(
        'Best Streak: <strong>' +
          scoreNumArr[scoreNameArr.indexOf(currAct + 'hard')] +
          '</strong>',
      ));
}
function recordInit() {
  ((didIt = !0),
    $('#volDiv').slider({
      orientation: 'vertical',
      value: nativeAudio.volume,
      min: 0,
      max: 1,
      range: 'min',
      animate: !0,
      step: 0.1,
      slide: function (e, t) {
        ((nativeAudio.volume = t.value), (localStorage.pronunVol = t.value));
      },
    }),
    null != localStorage.pronunVol &&
      ((nativeAudio.volume = localStorage.pronunVol),
      $('#volDiv').slider('value', localStorage.pronunVol)),
    startRecording(),
    setTimeout(function () {
      stopRecording();
    }, 800));
}
function recordSound() {
  if (((afterRec = !1), 0 == micOn))
    return (
      $('#recordText').html('Cannot Access Microphone'),
      $('#micWarn').show(),
      void $('.recordBtn').addClass('disabled')
    );
  ($('#recordText').html('Recording...'),
    startRecording(),
    $('.recordBtn').addClass('disabled'),
    $('.playBtn, .nextBtn, .ctrlBtn1B, .ctrlBtn2, .ctrlBtn3A').addClass(
      'disabled2',
    ),
    (wordTime = 1.2 != currAct ? 1e3 * duration * 1.7 : 1e3 * duration * 2),
    animateTimer(),
    setTimeout(function () {
      (exportRecording(), afterRecording());
    }, wordTime));
}
function afterRecording() {
  (updatePro(),
    (wordTime = 1.2 != currAct ? 1e3 * duration * 1.7 : 1e3 * duration * 2),
    animateTimer());
}
function playAgain() {
  ($('#recordText').text('Playing: You'),
    (wordTime = 1.2 != currAct ? 1e3 * duration * 1.7 : 1e3 * duration * 2),
    animateTimer(),
    $('#audio')[0].play());
}
function loadNext() {
  ($('#recordText').text('Press to Record'),
    $('.playBtn, .nextBtn').addClass('disabled2'),
    (afterRec = !1),
    $('.timerMeter > .timerSpan').stop(),
    $('.timerMeter > .timerSpan').css({ width: '0px' }),
    restartRandom(),
    0 == micOn &&
      ($('#recordText').html('Cannot Access Microphone'),
      $('#micWarn').show(),
      $('.recordBtn').addClass('disabled')));
}
function doneRecording() {
  ($('#recordText').text('Playing: Native'),
    (afterRec = !0),
    (wordTime = 1e3 * duration + 200),
    animateTimer(),
    loadFastSound());
}
function doneNative() {
  currAct <= 2 &&
    1 == afterRec &&
    ($('#recordText').text('Press to Record'),
    $('.timerMeter > .timerSpan').stop(),
    $('.timerMeter > .timerSpan').css({ width: '0px' }),
    (afterRec = !1),
    $('.recordBtn').removeClass('disabled'),
    $('.playBtn, .nextBtn, .ctrlBtn1B, .ctrlBtn2, .ctrlBtn3A').removeClass(
      'disabled2',
    ));
}
function animateTimer() {
  ($('.timerMeter > .timerSpan').stop(),
    $('.timerMeter > .timerSpan').css({ width: '0px' }),
    $('.timerMeter > .timerSpan').each(function () {
      $(this)
        .width(0)
        .animate({ width: $('.timerMeter').width() }, wordTime);
    }));
}
function avoidMultiple() {
  var e = cardNumbers.slice(0);
  (cardNumbers = []).push(e[0]);
  for (var t = [], o = 1; o < e.length; o++)
    e[o] == e[o - 1]
      ? e[o] != e[o - 2] && t.push(e[o])
      : cardNumbers.push(e[o]);
  for (o = 0; o < t.length; o++)
    for (var r = cardNumbers.length - 1; 1 < r; r--)
      cardNumbers[r - 1] != t[o] &&
        cardNumbers[r] != t[o] &&
        (cardNumbers.splice(r, 0, t[o]), (r = 0));
}
function modeInit() {
  ((modeNum = parseInt(modeNum)),
    $('.langImg').hide(),
    0 == modeNum
      ? ($('#modeImg').attr('src', 'images/mode0.png'),
        $('#modeText').html('Bilingual&nbsp;Mode'),
        $('#storyEng, #storyFor').show())
      : 1 == modeNum
        ? ($('#modeImg').attr('src', 'images/mode1.png'),
          $('#modeText').html('Alternating&nbsp;Mode'),
          $('#storyFor').hide(),
          $('#storyEng, #engImg').show())
        : 2 == modeNum &&
          ($('#modeImg').attr('src', 'images/mode2.png'),
          $('#modeText').html(lessonLanguage + '&nbsp;Only'),
          $('#storyFor').show(),
          $('#storyEng').hide()));
}
function storyMode() {
  (0 == (modeNum = parseInt(modeNum))
    ? (modeNum = 1)
    : 1 == modeNum
      ? (modeNum = 2)
      : 2 == modeNum && (modeNum = 0),
    0 == modeNum
      ? ($('#modeImg').attr('src', 'images/mode0.png'),
        $('#modeText').html('Bilingual&nbsp;Mode'),
        $('#storyEng').show(),
        $('#storyFor').show(),
        $('.langImg').hide())
      : 1 == modeNum
        ? ($('#modeImg').attr('src', 'images/mode1.png'),
          $('#modeText').html('Alternating&nbsp;Mode'),
          $('.langImg').hide(),
          $('#storyEng, #engImg').show(),
          $('#storyFor').hide())
        : 2 == modeNum &&
          ($('#modeImg').attr('src', 'images/mode2.png'),
          $('#modeText').html(lessonLanguage + '&nbsp;Only'),
          $('.langImg').hide(),
          $('#storyEng').hide(),
          $('#storyFor').show()),
    updateStory());
}
function storyNext() {
  return (
    $('#stoTimer').css('color', 'white'),
    (maxTimer = 0),
    $('.stoLeft, .stoStart').show(),
    1 == modeNum && $('#storyEng').is(':visible')
      ? ($('#storyEng, #engImg').hide(),
        $('#storyFor, #forImg').show(),
        void (
          'The End' == $('#storyEng').text() &&
          ($('.stoRight, .bigRight').hide(), $('.bigBack').show())
        ))
      : (1 != modeNum ||
          $('#storyEng').is(':visible') ||
          ($('#storyEng, #engImg').show(), $('#storyFor, #forImg').hide()),
        currStoPos == stoLength
          ? ($('#storyFor').html(endLangWord),
            $('#storyEng').text('The End'),
            void (
              1 != modeNum &&
              ($('.stoRight, .bigRight').hide(), $('.bigBack').show())
            ))
          : ($('.stoRight, .bigRight').show(),
            $('.bigBack').hide(),
            (stoLength = 0.5 * currStory.length),
            (currStoPos += 1),
            $('#stoCounter b').text(currStoPos),
            $('#storyFor').html(currStory[2 * currStoPos - 2]),
            $('#storyEng').text(currStory[2 * currStoPos - 1]),
            void updateStory()))
  );
}
function storyPrev() {
  if (
    ($('#stoTimer').css('color', 'white'),
    (maxTimer = 0),
    $('.stoRight, .bigRight').show(),
    $('.bigBack').hide(),
    1 == modeNum && $('#storyFor').is(':visible'))
  )
    return (
      $('#storyFor, #forImg').hide(),
      $('#storyEng, #engImg').show(),
      void (1 == currStoPos && $('.stoLeft, .stoStart').hide())
    );
  (1 != modeNum ||
    $('#storyFor').is(':visible') ||
    ($('#storyFor, #forImg').show(), $('#storyEng, #engImg').hide()),
    (stoLength = 0.5 * currStory.length),
    --currStoPos <= 1 && (currStoPos = 1),
    $('#stoCounter b').text(currStoPos),
    $('#storyFor').html(currStory[2 * currStoPos - 2]),
    $('#storyEng').text(currStory[2 * currStoPos - 1]),
    1 == currStoPos
      ? 1 != modeNum && $('.stoLeft, .stoStart').hide()
      : $('.stoLeft, .stoStart').show(),
    updateStory());
}
function storyStart() {
  if (
    ((currStoPos = 1),
    $('#stoTimer').css('color', 'white'),
    (maxTimer = 0),
    $('.stoRight, .bigRight').show(),
    $('.bigBack').hide(),
    1 == modeNum && $('#storyFor').is(':visible'))
  )
    return (
      $('#storyFor, #forImg').hide(),
      $('#storyEng, #engImg').show(),
      void (1 == currStoPos && $('.stoLeft, .stoStart').hide())
    );
  (1 != modeNum ||
    $('#storyFor').is(':visible') ||
    ($('#storyFor, #forImg').show(), $('#storyEng, #engImg').hide()),
    (stoLength = 0.5 * currStory.length),
    --currStoPos <= 1 && (currStoPos = 1),
    $('#stoCounter b').text(currStoPos),
    $('#storyFor').html(currStory[2 * currStoPos - 2]),
    $('#storyEng').text(currStory[2 * currStoPos - 1]),
    1 == currStoPos
      ? 1 != modeNum && $('.stoLeft, .stoStart').hide()
      : $('.stoLeft, .stoStart').show(),
    updateStory());
}
function backChange() {
  ($('.scoreMeter, .scoreMeter2').removeClass('pronun1'),
    $('.scoreMeter3').css({ visibility: 'hidden' }),
    1.1 == currAct &&
      ($('#background').css({
        'background-image': 'url(images/background1a.jpg)',
      }),
      $('.scoreMeter, .scoreMeter2').addClass('pronun1'),
      $('.wordSentence').addClass('invisible'),
      $('.bigPic').css({ top: '75px' }),
      $('.handWrite').show(),
      $('.props').hide(),
      $('.timerMeter > .timerSpan').css({ background: '#00cc00', width: 0 })),
    1.2 == currAct &&
      ($('#background').css({
        'background-image': 'url(images/background1b.jpg)',
      }),
      $('.scoreMeter, .scoreMeter2').addClass('pronun1'),
      $('.wordSentence').addClass('invisible'),
      $('.bigPic').css({ top: '75px' }),
      $('.handWrite').show(),
      $('.props').hide(),
      $('.timerMeter > .timerSpan').css({ background: '#ADD8E6', width: 0 })),
    1.3 == currAct
      ? ($('#background').css({
          'background-image': 'url(images/background1c.jpg)',
        }),
        $('.scoreMeter, .scoreMeter2').addClass('pronun1'),
        $('.wordSentence').addClass('invisible'),
        $('.bigPic').css({ top: '65px' }),
        $('.handWrite').show(),
        $('.props').hide(),
        $('.timerMeter > .timerSpan').css({ background: '#FF0000', width: 0 }))
      : 3 == currAct
        ? ($('.scoreMeter3').css({ visibility: 'visible' }),
          window.innerHeight > window.innerWidth
            ? ($('.bigPic').css({ top: '55px' }),
              $('.scoreMeter, .scoreMeter2').css({
                top: '70px',
                bottom: 'auto',
              }),
              $('.scoreMeter3').css({ top: '120px', bottom: 'auto' }))
            : ($('.bigPic').css({ top: '80px' }),
              $('.scoreMeter, .scoreMeter2').css({
                top: '95px',
                bottom: 'auto',
              }),
              $('.scoreMeter3').css({ top: '145px', bottom: 'auto' })),
          $('#background').css({
            'background-image': 'url(images/background3.jpg)',
          }),
          $('.wordSentence').addClass('invisible'),
          $('.handWrite').show())
        : 4 == currAct
          ? ($('.scoreMeter3').css({ visibility: 'visible' }),
            $('#background').css({
              'background-image': 'url(images/background4.jpg',
            }),
            $('.scoreMeter, .scoreMeter2').css({
              top: '215px',
              bottom: 'auto',
            }),
            $('.scoreMeter3').css({
              top: '260px',
              left: 'auto',
              right: '20px',
              bottom: 'auto',
            }),
            $('.wordSentence').removeClass('invisible'),
            $('.bigPic').css({ top: '200px' }),
            $('.handWrite').hide())
          : (0 != currAct && 2 != currAct) ||
            ($('#background').css({
              'background-image': 'url(images/background0.jpg)',
            }),
            $('.props, .handWrite').hide()),
    currAct < 2
      ? ($('.scoreMeter2').css({
          'background-image': 'url(images/scoreBack1.png)',
        }),
        $('.scoreMeter3').css({ top: '2000%', bottom: 'auto' }))
      : ($('.scoreMeter2').css({
          'background-image': 'url(images/scoreBack2.png)',
        }),
        $('.ctrlBtn1B').show()),
    bonusMode &&
      $('#background').css({
        'background-image': 'url(../convo/' + jsNum + '/images/background.png)',
        filter: 'brightness(40%) blur(3px)',
      }));
}
function addCharacter() {
  var e = $('#writeAnswerField').caret(),
    t = $(this).text(),
    o = [(o = $('#writeAnswerField').val()).slice(0, e), t, o.slice(e)].join(
      '',
    );
  ($('#writeAnswerField').val(o),
    $('#writeAnswerField').focus(),
    $('#writeAnswerField').caret(e + 1));
}
function puncRemove(e) {
  return e
    .split('Ã®')
    .join('i')
    .split('ÃŽ')
    .join('I')
    .split('ÃŸ')
    .join('ss')
    .split('Ã»')
    .join('u')
    .split('Ã›')
    .join('U')
    .split('Ã´')
    .join('o')
    .split('Ã”')
    .join('O')
    .split('.')
    .join('')
    .split('?')
    .join('')
    .split('!')
    .join('')
    .split('Â¡')
    .join('')
    .split('Â¿')
    .join('')
    .split(',')
    .join('')
    .split('_')
    .join('')
    .split('-')
    .join('');
}
function removeAccent(e) {
  return e
    .replace(/Ã€|Ã|Ã‚|Ãƒ|Ã„|Ã…/g, 'A')
    .replace(/Ã‡/g, 'C')
    .replace(/Ãˆ|Ã‰|ÃŠ|Ã‹/g, 'E')
    .replace(/ÃŒ|Ã|ÃŽ|Ã/g, 'I')
    .replace(/Ã’|Ã“|Ã”|Ã–|Ã•|Ã˜/g, 'O')
    .replace(/Ã™|Ãš|Ã›|Ãœ/g, 'U')
    .replace(/Ã‘/g, 'N')
    .replace(/Ã |Ã¡|Ã¢|Ã£|Ã¤|Ã¥/g, 'a')
    .replace(/Ã§/g, 'c')
    .replace(/Ã¨|Ã©|Ãª|Ã«/g, 'e')
    .replace(/Ã¬|Ã­|Ã®|Ã¯/g, 'i')
    .replace(/Ã²|Ã³|Ã´|Ã¶|Ãµ|Ã¸/g, 'o')
    .replace(/Ã¹|Ãº|Ã»|Ã¼/g, 'u')
    .replace(/Ã±/g, 'n')
    .replace(/ÃŸ/g, 'ss');
}
function hyphens(e, t) {
  var o = [];
  for (i = 0; i < e.length; ++i) e.substring(i, i + t.length) == t && o.push(i);
  return o;
}
function setCharAt(e, t, o) {
  return t > e.length - 1 ? e : e.substr(0, t) + o + e.substr(t + 1);
}
function checkAnswer3() {
  var e = $('.selContB')
      .html()
      .split('<div class="pad ui-sortable-handle"></div>')
      .join('')
      .split('</li>')
      .join('')
      .split('<')
      .join('>')
      .split('>'),
    t = [];
  for (i = 0; i < e.length; ++i) e[i].length < 60 && t.push(e[i]);
  ((t = t.join(' ').replace(/(\r\n|\n|\r)/gm, '')),
    (dragRight = dragRight.split(' ').join('')),
    (t = t.split(' ').join('')),
    dragRight == t
      ? ($('.wordSelB').addClass('greenBorder'),
        $('#goodImg').show(),
        playSprite('quizGood'),
        streak++,
        setTimeout(function () {
          ($('#goodImg').fadeOut(), restartRandom());
        }, 2e3))
      : ($('.wordSelB').addClass('redBorder'),
        playSprite('quizBad'),
        (streak = 0),
        $('#dragImg, .ctrlBtn3C').fadeIn(),
        $('.selCont').css('opacity', '0'),
        0 == shufBad
          ? ($('#strike1').show(), shufBad++)
          : 1 == shufBad
            ? ($('#strike2').show(), shufBad++)
            : 2 == shufBad &&
              ($('.smSentence').text(currSentence),
              $('#strike3').show(),
              $('.smSentence').fadeIn(),
              shufBad++),
        setTimeout(function () {
          (loadFastSound(), $('.wordSelB').removeClass('redBorder'));
        }, 1e3)),
    updateStreak());
}
function updateStreak() {
  var e;
  bonusMode ||
    (streak <= 36
      ? $('.scoreMeter').css({
          'background-image': 'url(images/score' + streak + '.png)',
        })
      : $('.scoreMeter').css({ 'background-image': 'url(images/score36.png)' }),
    $('#scoreNum1').text(streak),
    streak > parseInt(streakMax) &&
      ((streakMax = streak),
      $('#scoreNum2').text(streakMax),
      (e = scoreNameArr.indexOf(currAct + difficulty)),
      (scoreNumArr[e] = streakMax),
      (scoreInfo = scoreNumArr.join(':')),
      (localStorage[storeInfo + 'extraScoresSTORE'] = scoreInfo),
      (infoToUpdate = scoreInfo),
      (fieldToUpdate = 'extraScores'),
      updateDatabase()));
}
function updatePro() {
  var e;
  bonusMode ||
    (streak++,
    $('.scoreMeter').css({
      'background-image':
        'url(images/score' + Math.round(0.1 * streak) + '.png)',
    }),
    $('#scoreNum1').text(streak),
    (e = scoreNameArr.indexOf(currAct + difficulty)),
    (scoreNumArr[e] = streak),
    (scoreInfo = scoreNumArr.join(':')),
    (localStorage[storeInfo + 'extraScoresSTORE'] = scoreInfo),
    (infoToUpdate = scoreInfo),
    (fieldToUpdate = 'extraScores'),
    updateDatabase());
}
function updateStory() {
  scoreNumArr[15] = stoSec;
  var e = scoreNumArr[16].split('|');
  ((e[storyNum - 1] = currStoPos),
    (scoreNumArr[16] = e.join('|')),
    (scoreNumArr[17] = modeNum),
    (scoreInfo = scoreNumArr.join(':')),
    (localStorage[storeInfo + 'extraScoresSTORE'] = scoreInfo),
    (infoToUpdate = scoreInfo),
    (fieldToUpdate = 'extraScores'),
    updateDatabase());
}
function checkAnswer4() {
  var e,
    t = currSentence
      .split('`')
      .join("'")
      .split('â€˜')
      .join("'")
      .split('â€˜')
      .join("'")
      .split('â€™')
      .join("'")
      .split('â€“')
      .join('-')
      .split('â€”')
      .join('-')
      .split('-')
      .join('-'),
    o = $('#writeAnswerField')
      .val()
      .split('`')
      .join("'")
      .split('â€˜')
      .join("'")
      .split('â€˜')
      .join("'")
      .split('â€™')
      .join("'")
      .split('â€“')
      .join('-')
      .split('â€”')
      .join('-')
      .split('-')
      .join('-'),
    r = t.split('-').join(' ').split(' '),
    n = o.split('-').join(' ').split(' '),
    s = 0,
    a = 0,
    c = 0;
  for (
    'mobile' == currentDevice && $('#writeAnswerField').blur(),
      i = c = a = s = 0;
    i < r.length;
    i++
  )
    if (n[i])
      if (puncRemove(r[i].toLowerCase()) == puncRemove(n[i].toLowerCase())) s++;
      else if (
        removeAccent(puncRemove(r[i].toLowerCase())) ==
        removeAccent(puncRemove(n[i].toLowerCase()))
      ) {
        c++;
        var l = '';
        for (ii = 0; ii < r[i].length || ii < n[i].length; ii++) {
          var d = r[i][ii],
            u = n[i][ii];
          ((d = d && r[i][ii].toLowerCase()),
            (u = u && n[i][ii].toLowerCase()),
            d && d == u
              ? (l += n[i][ii])
              : u && (l = l + '<em>' + n[i][ii] + '</em>'));
        }
        n[i] = l;
      } else {
        a++;
        l = '';
        for (ii = 0; ii < r[i].length || ii < n[i].length; ii++) {
          var d = r[i][ii],
            m = null,
            u = n[i][ii];
          (d && (m = removeAccent((d = r[i][ii].toLowerCase()))),
            (u = u && n[i][ii].toLowerCase()),
            d && "'" == d && "'" != u
              ? ((l += '<strong>_</strong>'),
                (n[i] =
                  n[i].slice(0, r[i].indexOf("'")) +
                  "'" +
                  n[i].slice(r[i].indexOf("'"))))
              : d && d == u
                ? (l = l + '<strong>' + u + '</strong>')
                : u ||
                    -1 != ['.', '!', '?', ':', ',', 'Â¿', 'Â¡', ';'].indexOf(d)
                  ? m && m == u && d != u
                    ? (l = l + '<em>' + u + '</em>')
                    : u && (l = l + '<strong>' + u + '</strong>')
                  : (l += '<strong>_</strong>'));
        }
        n[i] = l;
      }
    else a++;
  if (($('#stringCont').html(t), 0 <= o.indexOf('-'))) {
    var g = hyphens(o, '-'),
      h = n.join(' '),
      p = hyphens(h, ' '),
      f = hyphens(
        h
          .split('<strong>')
          .join('')
          .split('<em>')
          .join('')
          .split('</strong>')
          .join('')
          .split('</em>')
          .join(''),
        ' ',
      );
    for (xx = 0; xx < g.length; xx++)
      h = setCharAt(h, p[f.indexOf(g[xx])], '-');
    $('#stringCont2').html(h);
  } else $('#stringCont2').html(n.join(' '));
  var v = 'words',
    t = s + a + c,
    o = (t - a) / t;
  (1 == c && (v = 'word'),
    0.7 < o && o < 1
      ? ((e =
          'So close! You got <strong>' +
          (s + c) +
          '</strong> out of <strong>' +
          t +
          "</strong> words right. This doesn't affect your streak."),
        playSprite('quizGood'))
      : 0 < c && 0 < a
        ? ((e =
            'You got <strong>' +
            (s + c) +
            '</strong> out of <strong>' +
            t +
            '</strong> words right (but you missed a special character on <strong>' +
            c +
            '</strong> ' +
            v +
            ').'),
          playSprite('quizBad'))
        : 0 == c && 0 < a
          ? ((e =
              'You got <strong>' +
              (s + c) +
              '</strong> out of <strong>' +
              t +
              '</strong> words right.'),
            playSprite('quizBad'))
          : 0 == c && 0 == a
            ? ((e = 'Awesome! You got every word in the sentence!'),
              playSprite('quizGood'))
            : 0 < c &&
              0 == a &&
              ((e =
                'Good job! You got every word in the sentence (except a special character on <strong>' +
                c +
                '</strong> ' +
                v +
                ').'),
              playSprite('quizGood')),
    0.7 < o && o < 1
      ? $('#stringCont4').html(
          '<img src="images/logo2.svg" class="iconLogo2"/>Almost! Here is what you typed:',
        )
      : 0 < a
        ? ($('#stringCont4').html(
            '<img src="images/logo2.svg" class="iconLogo2"/>Oops! Here is what you typed:',
          ),
          (streak = 0))
        : ($('#stringCont4').html(
            '<img src="images/logo1.svg" class="iconLogo2"/>Looks good! Here is what you typed:',
          ),
          streak++),
    bonusMode || flashCard
      ? (e = e.split(" This doesn't affect your streak.").join(''))
      : updateStreak(),
    $('#stringCont3').html(
      '<img src="images/logo3.svg" class="iconLogo2"/><strong style="color: #FFCE00;">Verdict: </strong>' +
        e,
    ),
    r.length != n.length &&
      (parseInt($('.colorPic').text()) < 0
        ? $('#stringCont2').html(
            "<strong style='font-size:20px; font-weight: normal;'>Error: Too many spaces. Refer to bottom sentence and side numbers for help.</strong>",
          )
        : ($('#stringCont2').html(
            "<strong style='font-size:20px; font-weight: normal;'>Error: Missing spaces. Refer to bottom sentence and side numbers for help.</strong>",
          ),
          playSprite('quizBad')),
      $('#stringCont4').html(
        '<img src="images/logo2.svg" class="iconLogo2"/>Oops! Something happened...',
      ),
      (e = "Couldn't give results due to a typing error."),
      $('#stringCont3').html(
        '<img src="images/logo3.svg" class="iconLogo2"/><strong style="color: #FFCE00;">Verdict: </strong>' +
          e,
      )),
    $('#writtenResult').show(),
    $(
      '.wordSentence, .extras, .bigPic, .smallPic, .scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn',
    ).hide());
}
var bonusMode = !(window.onload = function () {
  ($('.menuBar').css({ visibility: 'visible' }), $('#startCover').hide());
});
function bonusStyle(e) {
  e.matches
    ? $('#choice1').css({ height: '470px' })
    : $('#choice1').css({ height: '410px' });
}
function toggleMenu() {
  0 == $('#menuWrap').is(':visible')
    ? ('mobile' != currentDevice
        ? (playSprite('transition'), $('#menuWrap').fadeIn(200))
        : ($('#menuWrap').show(), playSprite('transition')),
      $('#menuWrap').show())
    : 'mobile' != currentDevice
      ? $('#menuWrap').slideUp(200)
      : $('#menuWrap').hide();
}
function bonusLoad() {
  var e = document.createElement('script');
  (e.setAttribute('type', 'text/javascript'),
    e.setAttribute('src', '../convo/' + jsNum + '/content.js'),
    document.head.appendChild(e),
    (e.onload = function () {
      ((randomExampleNum = -1),
        $('.lessonTitle').text(lessonTitle),
        resizeTitle());
    }));
}
function bonusSentence() {
  if (
    ($('.forSentence').text(''),
    $('.engSentence').text(''),
    (jsGroup = 'convo'),
    ++randomExampleNum == forExamples.length)
  )
    return (
      $(
        '#writtenResult, #extra1, #extra3, #extra4, .bigPic, .smallPic, .wordSentence, .persons, #choice3, #choice2, #choice2b, #whiteWrap, #lengthBtn, .strikes, .scoreMeter, .scoreMeter2, .scoreMeter3, .storyCont, #storyChoices, #storyDiff',
      ).fadeOut(),
      $(window).innerWidth() < 550 && $('body').addClass('barOut'),
      $('#bonusEnd').fadeIn(),
      void localStorage.removeItem(
        storeInfo + 'convoBonus' + jsNum + '|' + currAct,
      )
    );
  ($('#convoScore').html(
    "&nbsp;&nbsp;<strong style='font-size: 1.4em;'>" +
      (randomExampleNum + 1) +
      "</strong>&nbsp;of&nbsp;<strong style='font-size: 1.4em;'>" +
      forExamples.length +
      '</strong>',
  ),
    0 == $('.notch').length && $('.menuTitleContainer').html(''),
    ' ' ==
      (currSentence = forExamples[randomExampleNum]
        .split('<strong>')
        .join('')
        .split('</strong>')
        .join('')
        .split('â€¦')
        .join('...')
        .split(' .')
        .join('.')
        .split('  ')
        .join(' ')).charAt(currSentence.length - 1) &&
      (currSentence = currSentence.slice(0, -1)),
    (currSentence2 = engExamples[randomExampleNum]
      .split('<strong>')
      .join('')
      .split('</strong>')
      .join('')
      .split('<em>')
      .join('')
      .split('</em>')
      .join('')
      .split('â€¦')
      .join('...')
      .split(' .')
      .join('.')
      .split('  ')
      .join(' ')),
    ((currLength = currSentence.length) < 11 ? bonusSentence : processRandom)(),
    localStorage.setItem(
      storeInfo + 'convoBonus' + jsNum + '|' + currAct,
      randomExampleNum - 1,
    ));
}
function nextLesson() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      var e,
        t,
        o = !1;
      (localStorage[storeInfo + 'recommendPath2020'] ||
        localStorage[storeInfo + 'recommendVerb2020'] ||
        (o = !0),
        'guidedSection' != sessionStorage.menuType &&
          'verbSection' != sessionStorage.menuType &&
          (o = !0),
        o
          ? ((t = (61 != jsNum ? jsNum + 1 : 1).toString()),
            (window.location = '../convo/' + t + '/index.html'))
          : ((e =
              localStorage.getItem(lessonLanguage + 'legacyPath') &&
              localStorage.getItem(storeInfo + 'recommendPath2018')
                ? localStorage
                    .getItem(storeInfo + 'recommendPath2018')
                    .split('|')
                : 'verbSection' == sessionStorage.menuType &&
                    localStorage.getItem(storeInfo + 'recommendVerb2020')
                  ? localStorage
                      .getItem(storeInfo + 'recommendVerb2020')
                      .split('|')
                  : ('guidedSection' == sessionStorage.menuType &&
                      localStorage.getItem(storeInfo + 'recommendPath2020'),
                    localStorage
                      .getItem(storeInfo + 'recommendPath2020')
                      .split('|'))),
            (o =
              (o = (o = window.location.href).toLowerCase().split('/'))[
                o.length - 3
              ] + o[o.length - 2]),
            (t = e.indexOf(o) != e.length - 1 ? e.indexOf(o) + 1 : 0),
            (t = (o = e[t]).replace(/[0-9]/g, '')),
            (o = o
              .split('block')
              .join('')
              .split('vocab')
              .join('')
              .split('verb')
              .join('')
              .split('convo')
              .join('')
              .split('pronun')
              .join('')),
            (window.location = '../' + t + '/' + o + '/index.html')));
    }, 100));
}
function previousLesson() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      var e,
        t,
        o = !1;
      (localStorage[storeInfo + 'recommendPath2020'] ||
        localStorage[storeInfo + 'recommendVerb2020'] ||
        (o = !0),
        'guidedSection' != sessionStorage.menuType &&
          'verbSection' != sessionStorage.menuType &&
          (o = !0),
        o
          ? ((t = (1 != jsNum ? jsNum - 1 : numberOfLessons).toString()),
            (window.location = '../convo/' + t + '/index.html'))
          : ((e =
              localStorage.getItem(lessonLanguage + 'legacyPath') &&
              localStorage.getItem(storeInfo + 'recommendPath2018')
                ? localStorage
                    .getItem(storeInfo + 'recommendPath2018')
                    .split('|')
                : 'verbSection' == sessionStorage.menuType &&
                    localStorage.getItem(storeInfo + 'recommendVerb2020')
                  ? localStorage
                      .getItem(storeInfo + 'recommendVerb2020')
                      .split('|')
                  : ('guidedSection' == sessionStorage.menuType &&
                      localStorage.getItem(storeInfo + 'recommendPath2020'),
                    localStorage
                      .getItem(storeInfo + 'recommendPath2020')
                      .split('|'))),
            (o =
              (o = (o = window.location.href).toLowerCase().split('/'))[
                o.length - 3
              ] + o[o.length - 2]),
            (t = 0 != e.indexOf(o) ? e.indexOf(o) - 1 : e.length - 1),
            (t = (o = e[t]).replace(/[0-9]/g, '')),
            (o = o
              .split('block')
              .join('')
              .split('vocab')
              .join('')
              .split('verb')
              .join('')
              .split('convo')
              .join('')
              .split('pronun')
              .join('')),
            (window.location = '../' + t + '/' + o + '/index.html')));
    }, 100));
}
function homeMenu() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      (localStorage.removeItem(storeInfo + 'saved'),
        (sessionStorage.menuType = 'home'),
        (window.location = '../index.html'));
    }, 100));
}
function mainMenu() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      (localStorage.removeItem(storeInfo + 'saved'),
        (window.location = '../index.html'));
    }, 100));
}
function flashLoad() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      window.location = '../flash/index.html?extra=true';
    }, 100));
}
function reloadLesson() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      window.location = '../convo/' + jsNum + '/index.html?refer=lesson';
    }, 100));
}
function reloadQuiz() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      window.location = '../convo/' + jsNum + '/index.html?refer=quiz';
    }, 100));
}
function getUrlVars() {
  var r = {};
  return (
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (e, t, o) {
      r[t] = o;
    }),
    r
  );
}
function getUrlParam(e, t) {
  return (-1 < window.location.href.indexOf(e) && (t = getUrlVars()[e]), t);
}
function resizeTitle() {
  (bonusMode || (lessonTitle = 'Extra Language Practice'),
    $('.lessonTitle').text(lessonTitle));
  var e = $(window).innerWidth();
  if (e < 550)
    41 < lessonTitle.length &&
      $('.lessonTitle').text(lessonTitle.slice(0, 36) + '...');
  else
    for (
      var t = $('.menuBtnContainer').width(),
        o = $('.lessonTitle').width(),
        r = $('.smallLogo').width(),
        n = e - (r + o + t);
      n < 60 && 6 < $('.lessonTitle').text().length;
    ) {
      var s = $('.lessonTitle').text().slice(0, -4);
      ((s = (s = s.concat('...')).split(' ...').join('...')),
        $('.lessonTitle').html(s),
        (n = e - (r + $('.lessonTitle').width() + t)));
    }
}
function updateDatabase() {
  (':' == infoToUpdate.charAt(infoToUpdate.length - 1) && (infoToUpdate += '0'),
    ':' == infoToUpdate.charAt(0) && (infoToUpdate = '0' + infoToUpdate),
    (infoToUpdate = infoToUpdate.split('::').join(':0:')));
  var e = new XMLHttpRequest(),
    t = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + cWbBT,
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
  } catch (e) {}
}
function playSprite(e) {
  ($('#sfxSprite').attr('src', '../common/' + e + soundType),
    document.getElementById('sfxSprite').load(),
    document.getElementById('sfxSprite').addEventListener('canplay', playSFX));
}
function playSFX() {
  (document.getElementById('sfxSprite').removeEventListener('canplay', playSFX),
    $('#sfxSprite').trigger('play'));
}
function resizePage() {
  ($(window).innerWidth() < 550
    ? $('body').addClass('notch')
    : $('body').removeClass('notch'),
    0 == $('.notch').length &&
      '' != $('#convoScore').html() &&
      $('.menuTitleContainer').html(''));
}
function shuffle(e) {
  for (var t, o, r = e.length; 0 !== r; )
    ((o = Math.floor(Math.random() * r)),
      (t = e[--r]),
      (e[r] = e[o]),
      (e[o] = t));
  return e;
}
var dateFormat = (function () {
  function h(e, t) {
    for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e;
    return e;
  }
  var p = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
    f =
      /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    $ = /[^-+\dA-Z]/g;
  return function (e, t, o) {
    var r = dateFormat;
    if (
      (1 != arguments.length ||
        '[object String]' != Object.prototype.toString.call(e) ||
        /\d/.test(e) ||
        ((t = e), (e = void 0)),
      (e = e ? new Date(e) : new Date()),
      isNaN(e))
    )
      throw SyntaxError('invalid date');
    'UTC:' == (t = String(r.masks[t] || t || r.masks.default)).slice(0, 4) &&
      ((t = t.slice(4)), (o = !0));
    var n = o ? 'getUTC' : 'get',
      s = e[n + 'Date'](),
      i = e[n + 'Day'](),
      a = e[n + 'Month'](),
      c = e[n + 'FullYear'](),
      l = e[n + 'Hours'](),
      d = e[n + 'Minutes'](),
      u = e[n + 'Seconds'](),
      m = e[n + 'Milliseconds'](),
      n = o ? 0 : e.getTimezoneOffset(),
      g = {
        d: s,
        dd: h(s),
        ddd: r.i18n.dayNames[i],
        dddd: r.i18n.dayNames[i + 7],
        m: a + 1,
        mm: h(a + 1),
        mmm: r.i18n.monthNames[a],
        mmmm: r.i18n.monthNames[a + 12],
        yy: String(c).slice(2),
        yyyy: c,
        h: l % 12 || 12,
        hh: h(l % 12 || 12),
        H: l,
        HH: h(l),
        M: d,
        MM: h(d),
        s: u,
        ss: h(u),
        l: h(m, 3),
        L: h(99 < m ? Math.round(m / 10) : m),
        t: l < 12 ? 'a' : 'p',
        tt: l < 12 ? 'am' : 'pm',
        T: l < 12 ? 'A' : 'P',
        TT: l < 12 ? 'AM' : 'PM',
        Z: o ? 'UTC' : (String(e).match(f) || ['']).pop().replace($, ''),
        o:
          (0 < n ? '-' : '+') +
          h(100 * Math.floor(Math.abs(n) / 60) + (Math.abs(n) % 60), 4),
        S: ['th', 'st', 'nd', 'rd'][
          3 < s % 10 ? 0 : (((s % 100) - (s % 10) != 10) * s) % 10
        ],
      };
    return t.replace(p, function (e) {
      return e in g ? g[e] : e.slice(1, e.length - 1);
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
