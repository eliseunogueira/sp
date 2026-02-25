var viewportHeight,
  viewportWidth,
  t0,
  t1,
  wordTime,
  mouseIsDown,
  storeInfo,
  userEmail,
  tuvm58dj,
  mainNum,
  pronunInfo,
  currentSection = 'Pronunciation',
  currentSecShort = 'Pronun',
  btnColor = [
    '#90E700',
    '#254800',
    '#AD00FF',
    '#320058',
    '#BB5D00',
    '#271300',
    '#00BFFF',
    '#001E51',
  ],
  lessonTitle = 'Ouino ' + lessonLanguage + ' Pronunciation',
  nativeTime = 2e3,
  malePlayed = !1,
  currentWordNum = 1,
  numWords = forWordArray.length,
  micOn = !0,
  themeNum = sessionStorage.pronunTheme,
  wtZGh = '/php/',
  ETTNv = 'www.',
  MJhei = 'resetCode',
  cWbBT = '.php',
  jGWFQ = 'getContent',
  FUE4B = 'findUsers',
  KsXgx = 'update',
  MTixn = 'updateAll',
  rvUnf = 'eliseunogueira',
  QjSKe = 'sendReset',
  PbWjZ = 'register',
  YLtLU = 'https://',
  OGXpV = '.com.br';
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
(null == themeNum && (themeNum = 2), (maleSounds = []), (femaleSounds = []));
for (var numD = 1; numD <= numWords; numD++)
  (maleSounds.push('sounds/pronun' + numD + '.ogg'),
    femaleSounds.push('sounds/fpronun' + numD + '.ogg'));
var currentDevice,
  loginAppend = '',
  mainHTML =
    '<div id="loadLogo">LOADING...</div><div id="fontPreload1">Comic</div><div id="fontPreload2">Encode</div><div class="instructions"><img class="redArrowImage" src="../common/redArrow.svg"><b id="arrowLabel"></b></div><header id="loginCover" class="wrapper"> <div id="loginCenter" class="optionsIn gradientColor alignVerticalWin"><img class="letterLogo" src="../common/letterLogo.svg"> <form autocomplete="off" id="loginForm"> <table class="loginTable"> <tr> <th colspan="2"><h3 id="loginTitle" class="loginTitle">Ouino Account Login</h3></th> </tr><tr> <td colspan="2"><input type="email" id="emailField" required class="loginField" placeholder="Email Address"/></td></tr><tr> <td colspan="2"><input type="password" id="jguyr4" required class="loginField" maxlength="12" placeholder="Password"/> <h5 id="loginForgot" class="smallerUnderline">Forgot password?</h5></td></tr><tr> <td><h5 id="loginRemember" class="loginRemember"><img src="../common/checkOff.svg" id="rememberCheck" class="rememberCheck"/>Remember me</h5></td><td><input type="submit" class="loginOptions gradientColor2 loginSubmit" value="Log in"></td></tr><tr> <td colspan="2"><h5 id="loginBottom" class="smallUnderline">Don\'t have an account yet? Create one.</h5></td></tr></table> </form> </div><div id="loginOffline" class="optionsIn gradientColor alignVerticalWin"> <table class="offlineTable"> <tr> <th width="15%"><img class="warningLogo" src="../common/warning.svg"></th> <td colspan="2"><h3 class="offlineTitle">CURRENTLY OFFLINE</h3> <p class="offlineWord">You are currently offline. An internet connection is required to sync progress between devices. Your progress will be saved locally for now. Simply restart the program when an internet connection is available in order to sync your progress with the server.</td></tr></table> <table class="offlineTable2"> <tr> <td width="60%"><h5 id="offlineRemember" class="loginRemember"><img src="../common/checkOff.svg" id="offlineCheck" class="rememberCheck"/>Do not show again.</h5></td><td><input type="submit" class="loginOptions gradientColor2" value="Start Lesson" id="offlineButton"></td></tr></table> </div></header><div class="timerMeter"><span class="timerSpan"></span></div><audio id="sfxSprite" src="../common/sprite.mp3"></audio><audio id="mainMusic" loop src=""></audio><div class="menuBar"> <img src="../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><span class="menuTitleContainer alignVerticalItem" style="cursor: default;"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><div id="volDiv2"><div id="sliderTrack"></div><div id="sliderText2">Volume</div></div><img id="loadBtn" src="images/load.svg" class="smallIcon" /><img src="images/mic.svg" class="micBtn smallIcon" /></span></div><img id="soundArrow" src="images/arrow.svg"><main id="micDiv" class="lessonMenus selectOff"> <div class="insideMenu" style="max-width: 800px; color: white; padding: 2% 10px 50px 10px;"><h1 class="mainTitle"><img class="mainLogoImg2" src="images/mic.svg">Microphone Setup</h1><strong style="color: #FC0; font-size: 18px;">In order to use your microphone, you need to configure it in your computer options.</strong><div id="micMac" class="micBox"><strong style="color: #FC0;">1. </strong><strong>Go to your system settings:</strong><br><em>macOS: System Preferences → Sound → Input (tab)</em><br></div><div id="micWin" class="micBox"><strong style="color: #FC0;">1. </strong><strong>Go to your system settings:</strong><br><em>Windows 10: Settings → System → Sound</em><br></div><div class="micBox"><strong style="color: #FC0;">2. </strong><strong>Choose a microphone and make adjustments if needed.</strong><br><em> Under "Input", ensure your microphone is selected in the "Choose your input device" dial.<br> Click on "Device properties".</em><br></div><div class="micBox"><strong style="color: #FC0;">3. </strong><strong>Adjust microphone properties</strong><br><em> On the "Device properties" window, adjust the microphone slider(s) as needed.<br> Speak into your microphone while checking under "Test your microphone" to make sure your settings work.<br> If you see the line moving from left to right, your microphone is working correctly.</em><br></div><div class="micBox"><strong style="color: #FC0;">4. </strong><strong>Final tweaks in the program.</strong><br><em>You can then adjust the native speaker volume to make up for the difference in volume.</em><br></div><div class="micBox2"><img src="../common/warning.svg" style="position: absolute; width: 45px; height: 45px; left: 20px;">Not all computers are equipped with proper recording capabilities. If you are not able to set up your microphone properly in your settings, recording will not work in the Ouino pronunciation program.</div></div></main>';
function recordInit() {
  (startRecording(),
    setTimeout(function () {
      stopRecording();
    }, 800),
    setTimeout(function () {
      $('#loadWrap, #loadLogo').hide();
    }, 1e3));
}
function recordSound() {
  ($('#recordText').html(
    'Recording... <strong>' + forWordArray[currentWordNum - 1] + '</strong>',
  ),
    startRecording(),
    (wordTime = 1300 < nativeTime ? 1.3 * nativeTime : 2e3),
    $('.recordBtn').addClass('disabled'),
    $('.playBtn, .nextBtn').addClass('disabled2'),
    $('.gLight1, .gLight2').removeClass('red green'),
    $('.gLight1').addClass('red'),
    animateTimer(),
    setTimeout(function () {
      exportRecording();
    }, wordTime));
}
function playAgain() {
  ($('#recordText').text('Playing: You'),
    $('#audio')[0].play(),
    animateTimer(),
    $('.gLight1, .gLight2').removeClass('red green'),
    $('.gLight1').addClass('green'));
}
function playNative() {
  ($('#recordText').text('Playing: Native'),
    animateTimer2(),
    $('.gLight1, .gLight2').removeClass('red green'),
    $('.gLight2').addClass('green'),
    'Both<span>&nbsp;Native</span>&nbsp;Speakers' == $('#nativeLabel').html() &&
    0 == malePlayed
      ? ($('#recordText').text('Playing: Male Native'),
        $('#nativeAudio').attr('src', maleSounds[currentWordNum - 1]))
      : 'Both<span>&nbsp;Native</span>&nbsp;Speakers' ==
            $('#nativeLabel').html() && 1 == malePlayed
        ? ($('#recordText').text('Playing: Female Native'),
          $('#nativeAudio').attr('src', femaleSounds[currentWordNum - 1]))
        : 'Male<span>&nbsp;Native</span>&nbsp;Speaker' ==
            $('#nativeLabel').html()
          ? ($('#recordText').text('Playing: Male Native'),
            $('#nativeAudio').attr('src', maleSounds[currentWordNum - 1]))
          : 'Female<span>&nbsp;Native</span>&nbsp;Speaker' ==
              $('#nativeLabel').html() &&
            ($('#recordText').text('Playing: Female Native'),
            $('#nativeAudio').attr('src', femaleSounds[currentWordNum - 1])),
    document.getElementById('nativeAudio').load(),
    document
      .getElementById('nativeAudio')
      .addEventListener('canplay', playSound));
}
function playNative2() {
  ($('.recordBtn').addClass('disabled'),
    $('.playBtn, .nextBtn').addClass('disabled2'),
    $('.gLight1, .gLight2').removeClass('red green'),
    $('.gLight2').addClass('green'),
    document.getElementById('nativeAudio').addEventListener('ended', timeCalc),
    (t0 = performance.now()),
    $('.timerMeter > .timerSpan').stop(),
    $('.timerMeter > .timerSpan').css({ width: '0px' }),
    'Both<span>&nbsp;Native</span>&nbsp;Speakers' == $('#nativeLabel').html() &&
    0 == malePlayed
      ? ($('#recordText').text('Playing: Male Native'),
        $('#nativeAudio').attr('src', maleSounds[currentWordNum - 1]))
      : 'Both<span>&nbsp;Native</span>&nbsp;Speakers' ==
            $('#nativeLabel').html() && 1 == malePlayed
        ? ($('#recordText').text('Playing: Female Native'),
          $('#nativeAudio').attr('src', femaleSounds[currentWordNum - 1]))
        : 'Male<span>&nbsp;Native</span>&nbsp;Speaker' ==
            $('#nativeLabel').html()
          ? ($('#recordText').text('Playing: Male Native'),
            $('#nativeAudio').attr('src', maleSounds[currentWordNum - 1]))
          : 'Female<span>&nbsp;Native</span>&nbsp;Speaker' ==
              $('#nativeLabel').html() &&
            ($('#recordText').text('Playing: Female Native'),
            $('#nativeAudio').attr('src', femaleSounds[currentWordNum - 1])),
    document.getElementById('nativeAudio').load(),
    document
      .getElementById('nativeAudio')
      .addEventListener('canplay', playSound));
}
function timeCalc() {
  if (
    (document
      .getElementById('nativeAudio')
      .removeEventListener('ended', timeCalc),
    'Both<span>&nbsp;Native</span>&nbsp;Speakers' == $('#nativeLabel').html() &&
      0 == malePlayed)
  )
    return ((malePlayed = !0), void playNative2());
  var e = (currentWordNum % 6) - 1;
  if ((-1 == e && (e = 5), 0 == e)) return (currentWordNum++, void loadWord());
  (micOn && $('.recordBtn').removeClass('disabled'),
    $('.gLight1, .gLight2').removeClass('red green'),
    (t1 = performance.now()),
    (nativeTime = t1 - t0),
    $('.timerMeter > .timerSpan').stop(),
    $('.timerMeter > .timerSpan').css({ width: '0px' }),
    micOn
      ? $('#recordText').html(
          'Press to Record... <strong>' +
            forWordArray[currentWordNum - 1] +
            '</strong>',
        )
      : $('#recordText').html('Cannot Access Microphone'));
}
function playSound() {
  (document
    .getElementById('nativeAudio')
    .removeEventListener('canplay', playSound),
    $('#nativeAudio').trigger('play'));
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
function animateTimer2() {
  ($('.timerMeter > .timerSpan').stop(),
    $('.timerMeter > .timerSpan').css({ width: '0px' }),
    $('.timerMeter > .timerSpan').each(function () {
      $(this)
        .width(0)
        .animate({ width: $('.timerMeter').width() }, nativeTime, function () {
          return (
            $('.timerMeter > .timerSpan').stop(),
            $('.timerMeter > .timerSpan').css({ width: '0px' }),
            'Both<span>&nbsp;Native</span>&nbsp;Speakers' ==
              $('#nativeLabel').html() && 0 == malePlayed
              ? ((malePlayed = !0), void playNative())
              : (micOn &&
                  ($('.recordBtn').removeClass('disabled'),
                  $('.playBtn, .nextBtn').removeClass('disabled2')),
                $('.gLight1, .gLight2').removeClass('red green'),
                void $('#recordText').html(
                  'Press to Record... <strong>' +
                    forWordArray[currentWordNum - 1] +
                    '</strong>',
                ))
          );
        });
    }));
}
function loadButtonsMain() {
  ($('#volDiv2').slider({
    orientation: 'horizontal',
    value: sfxSprite.volume,
    min: 0,
    max: 1,
    range: 'min',
    animate: !0,
    step: 0.1,
    slide: function (e, t) {
      ((audio.volume = t.value),
        (mainMusic.volume = t.value),
        (sfxSprite.volume = t.value),
        (localStorage.programVolume = t.value));
    },
  }),
    null != localStorage.programVolume &&
      ((audio.volume = localStorage.programVolume),
      (mainMusic.volume = localStorage.programVolume),
      (sfxSprite.volume = localStorage.programVolume),
      $('#volDiv2').slider('value', localStorage.programVolume)),
    document.getElementById('audio').addEventListener('ended', function () {
      ((malePlayed = !1), playNative());
    }),
    $('#menuHome, #menuMain2').on('click', homeMenu),
    $('#loadBtn').on('click', soundSection),
    $('.micBtn').on('click', micSection),
    $('.recordBtn').on('click', recordSound),
    $('.playBtn').on('click', playAgain),
    $('#musicOnOff').on('click', toggleMusic2),
    $('#nativePro').on('click', changeNative),
    $('.theWords').on('click', btnClicked),
    $('#letterPro').on('click', function (e) {
      $(e.target).hasClass('rightArrow') ||
        $(e.target).hasClass('leftArrow') ||
        loadCurrSection();
    }),
    $('#currentPro').on('click', function (e) {
      $(e.target).hasClass('rightArrow') ||
        $(e.target).hasClass('leftArrow') ||
        ((malePlayed = !1), playNative2());
    }),
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
    $('#currentPro .leftArrow').on('click', function () {
      (1 != currentWordNum ? currentWordNum-- : (currentWordNum = numWords),
        loadWord());
    }),
    $('#currentPro .rightArrow, .nextBtn').on('click', function () {
      (currentWordNum != numWords ? currentWordNum++ : (currentWordNum = 1),
        loadWord());
    }),
    $('#letterPro .leftArrow').on('click', function () {
      loadPrevSection();
    }),
    $('#letterPro .rightArrow').on('click', function () {
      loadNextSection();
    }),
    $('#selectDiv').on('click', function (e) {
      e.target == this && soundSection();
    }),
    $('#micDiv').on('click', function (e) {
      e.target == this && micSection();
    }),
    $('.soItems').on('click', function (e) {
      $(e.target).hasClass('cMark') ||
        ((e = parseInt($(this).attr('id').replace('so', ''))),
        (currentWordNum = 6 * e - 5),
        soundSection(),
        loadSection());
    }),
    $('.cMark').on('click', checkToggle),
    $('.switch').on('click', checkToggle2),
    'mobile' != currentDevice
      ? ($('.soItems').hover(function () {
          $(this).toggleClass('hilited');
        }),
        $('.smallIcon, .soItems').on('mouseenter', function () {
          playSprite('rollover');
        }),
        $('#loadBtn').hover(function () {
          ($('#arrowLabel').text('LOAD SOUND'),
            $('.instructions').toggleClass('showDiv'));
        }),
        $('.micBtn').hover(function () {
          ($('#arrowLabel').text('MICROPHONE SETTINGS'),
            $('.instructions').toggleClass('showDiv'));
        }),
        $('.theWords').hover(function () {
          $(this).toggleClass('fullOpacity');
        }),
        $('#currentPro, #letterPro, #nativePro').hover(function () {
          $(this).toggleClass('boxSelect');
        }),
        $('#menuMain2').hover(function () {
          ($('#arrowLabel').text('BACK TO HOME MENU'),
            $('.instructions').toggleClass('showDiv'));
        }),
        $(
          '.cMark, .leftArrow, .rightArrow,.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .recordBtn, .playBtn, .nextBtn, .switch',
        ).hover(function () {
          $(this).toggleClass('fullOpacity');
        }))
      : $('#volDiv2').hide());
}
function homeMenu() {
  ((sessionStorage.menuType = 'home'),
    $('#loadLogo').show(),
    setTimeout(function () {
      window.location = '../index.html';
    }, 100));
}
function resizePage() {
  viewportHeight = $(window).height() - 45;
  var e = (viewportWidth = $(window).innerWidth()) / viewportHeight,
    t = viewportHeight - 30;
  (e < 1
    ? ($('.ouinoContent').addClass('portrait'),
      $('.ouinoContent').css({ height: t + 'px' }),
      $('.ouinoContent').height(),
      $('#pronunCont').css({ 'max-height': '600px', height: t - 250 + 'px' }),
      $('.proBox').css({ height: 0.325 * $('#pronunCont').height() + 'px' }),
      $('#letterPro').css({ width: '49%' }),
      $('#wordPro').css({ width: '50%', 'margin-right': '0px' }),
      $('#descPro').css({ width: '100%' }))
    : 1 <= e &&
      ($('.ouinoContent').removeClass('portrait'),
      $('.ouinoContent').css({ height: t + 'px' }),
      $('.ouinoContent').height(),
      $('#pronunCont').css({ 'max-height': '400px', height: t - 200 + 'px' }),
      $('.proBox').css({ height: 0.48 * $('#pronunCont').height() + 'px' }),
      $('#letterPro').css({ width: '19%' }),
      $('#wordPro').css({ width: '29%', 'margin-right': '1%' }),
      $('#descPro').css({ width: '50%' })),
    resizeText(),
    resizeTitle());
}
function resizeText() {
  $('#descPro p').css({ fontSize: '19px' });
  for (
    var e = $('#descPro p').height(), t = $('#descPro').height() - 45, o = 19;
    t < e && 5 < o;
    o--
  )
    ((e = $('#descPro p').height()),
      $('#descPro p').css({ fontSize: o + 'px' }));
  $('#letterPro p').css({ fontSize: '25px' });
  for (var e = $('#letterPro p').height(), n = 25; t < e && 5 < n; n--)
    ((e = $('#letterPro p').height()),
      $('#letterPro p').css({ fontSize: n + 'px' }));
  $('#wordPro p').css({ fontSize: '20px' });
  for (
    var e = $('#wordPro p').height(), t = $('#descPro').height() - 10, r = 20;
    t < e && 5 < r;
    r--
  )
    ((e = $('#wordPro p').height()),
      $('#wordPro p').css({ fontSize: r + 'px' }));
  $('#currentPro p').css({ fontSize: '35px' });
  for (var e = $('#currentPro p').height(), i = 35; t < e && 5 < i; i--)
    ((e = $('#currentPro p').height()),
      $('#currentPro p').css({ fontSize: i + 'px' }));
}
function resizeTitle() {
  $('.menuTitleContainer').text(lessonTitle);
  for (
    var e = $('.menuBtnContainer').width(),
      t = $('.menuTitleContainer').width(),
      o = $('.smallLogo').width(),
      n = viewportWidth - (o + t + e);
    n < 60 && 6 < $('.menuTitleContainer').text().length;
  ) {
    var r = $('.menuTitleContainer').text().slice(0, -4);
    ((r = (r = r.concat('...')).split(' ...').join('...')),
      $('.menuTitleContainer').html(r),
      (t = $('.menuTitleContainer').width()),
      (n = viewportWidth - (o + t + e)));
  }
}
function loadLogIn() {
  ($('body').append(loginAppend), $('#loginBottom, #loginForgot').hide());
}
function loadSection() {
  ((malePlayed = !1),
    playNative2(),
    $('#letterPro p').html(
      forWordArray[currentWordNum - 1]
        .split('</')
        .join('%%%')
        .split('/')
        .join('<br>')
        .split('%%%')
        .join('</'),
    ),
    $('.theWords').removeClass('wordSelect'),
    $('#word1').html(forWordArray[currentWordNum]),
    $('#word2').html(forWordArray[currentWordNum + 1]),
    $('#word3').html(forWordArray[currentWordNum + 2]),
    $('#word4').html(forWordArray[currentWordNum + 3]),
    $('#word5').html(forWordArray[currentWordNum + 4]),
    $('#currentPro p').html(
      forWordArray[currentWordNum - 1] +
        '<br>' +
        engWordArray[currentWordNum - 1],
    ),
    '1' == pronunInfo[(mainNum = (currentWordNum - 1) / 6 + 1)]
      ? ($('.switch').addClass('switchOn'),
        $('.switch strong').html('Completed:&nbsp;YES'))
      : ($('.switch').removeClass('switchOn'),
        $('.switch strong').html('Completed:&nbsp;NO')),
    $('#descPro p').html(descArray[(currentWordNum - 1) / 6]),
    resizeText());
}
function loadSection2() {
  ($('#letterPro p').html(
    forWordArray[currentWordNum - 6]
      .split('</')
      .join('%%%')
      .split('/')
      .join('<br>')
      .split('%%%')
      .join('</'),
  ),
    $('#word1').html(forWordArray[currentWordNum - 5]),
    $('#word2').html(forWordArray[currentWordNum - 4]),
    $('#word3').html(forWordArray[currentWordNum - 3]),
    $('#word4').html(forWordArray[currentWordNum - 2]),
    $('#word5').html(forWordArray[currentWordNum - 1]),
    $('#currentPro p').html(
      forWordArray[currentWordNum - 1] +
        '<br>' +
        engWordArray[currentWordNum - 1],
    ),
    $('#descPro p').html(descArray[(currentWordNum - 6) / 6]),
    resizeText());
}
function loadWord() {
  var e = (currentWordNum % 6) - 1;
  (-1 == e && (e = 5),
    0 != e
      ? (5 == e && loadSection2(),
        (malePlayed = !1),
        playNative2(),
        $('.theWords').removeClass('wordSelect'),
        $('#word' + e).addClass('wordSelect'),
        $('#currentPro p').html(
          forWordArray[currentWordNum - 1] +
            '<br>' +
            engWordArray[currentWordNum - 1],
        ))
      : loadSection());
}
function loadNextSection() {
  var e = (currentWordNum % 6) - 1;
  (-1 == e && (e = 5),
    (currentWordNum =
      currentWordNum < numWords - 5 ? currentWordNum - e + 6 : 1),
    loadSection());
}
function loadPrevSection() {
  var e = (currentWordNum % 6) - 1;
  (-1 == e && (e = 5),
    (currentWordNum =
      7 <= currentWordNum ? currentWordNum - e - 6 : numWords - 5),
    loadSection());
}
function loadCurrSection() {
  var e = (currentWordNum % 6) - 1;
  (-1 == e && (e = 5), (currentWordNum -= e), loadSection());
}
function btnClicked() {
  var e = parseInt($(this).attr('id').replace('word', '')),
    t = (currentWordNum % 6) - 1;
  (-1 == t && (t = 5), (currentWordNum = currentWordNum - t + e), loadWord());
}
function changeNative() {
  ('Both<span>&nbsp;Native</span>&nbsp;Speakers' == $('#nativeLabel').html()
    ? ($('#nativeLabel').html('Male<span>&nbsp;Native</span>&nbsp;Speaker'),
      (pronunInfo[0] = '1'),
      $('#nativeImg').css({
        background:
          'url(../pronun/images/nativeMasc.png) no-repeat center center',
        'background-size': 'contain',
      }))
    : 'Male<span>&nbsp;Native</span>&nbsp;Speaker' == $('#nativeLabel').html()
      ? ($('#nativeLabel').html('Female<span>&nbsp;Native</span>&nbsp;Speaker'),
        (pronunInfo[0] = '2'),
        $('#nativeImg').css({
          background:
            'url(../pronun/images/nativeFem.png) no-repeat center center',
          'background-size': 'contain',
        }))
      : 'Female<span>&nbsp;Native</span>&nbsp;Speaker' ==
          $('#nativeLabel').html() &&
        ($('#nativeLabel').html('Both<span>&nbsp;Native</span>&nbsp;Speakers'),
        (pronunInfo[0] = '0'),
        $('#nativeImg').css({
          background:
            'url(../pronun/images/nativeBoth.png) no-repeat center center',
          'background-size': 'contain',
        })),
    (infoToUpdate = pronunInfo.join(':')),
    (localStorage[storeInfo + 'starSTOREpronun'] = infoToUpdate),
    (fieldToUpdate = 'pronun'),
    updateDatabase());
}
function checkToggle() {
  var e = parseInt($(this).parent('.soItems').attr('id').replace('so', ''));
  ('&#10003;' == $(this).html() || '✓' == $(this).html()
    ? ($(this).html(''),
      (pronunInfo[e] = '0'),
      mainNum == e &&
        ($('.switch strong').html('Completed:&nbsp;NO'),
        $('.switch').removeClass('switchOn')))
    : ($(this).html('&#10003;'),
      (pronunInfo[e] = '1'),
      mainNum == e &&
        ($('.switch strong').html('Completed:&nbsp;YES'),
        $('.switch').addClass('switchOn'))),
    (infoToUpdate = pronunInfo.join(':')),
    (localStorage[storeInfo + 'starSTOREpronun'] = infoToUpdate),
    (fieldToUpdate = 'pronun'),
    updateDatabase());
}
function checkToggle2() {
  ('Completed:&nbsp;NO' == $('.switch').children('strong').html()
    ? ($('.switch strong').html('Completed:&nbsp;YES'),
      $('.switch').addClass('switchOn'),
      (pronunInfo[mainNum] = '1'),
      $('#so' + mainNum)
        .children('.cMark')
        .html('&#10003;'))
    : ($('.switch strong').html('Completed:&nbsp;NO'),
      $('.switch').removeClass('switchOn'),
      (pronunInfo[mainNum] = '0'),
      $('#so' + mainNum)
        .children('.cMark')
        .html('')),
    (infoToUpdate = pronunInfo.join(':')),
    (localStorage[storeInfo + 'starSTOREpronun'] = infoToUpdate),
    (fieldToUpdate = 'pronun'),
    updateDatabase());
}
function soundSection() {
  $('#loadBtn').is(':hidden')
    ? (toggleMusic3(),
      $('#loadBtn, .micBtn').show(),
      $('#selectDiv').hide(),
      $('#selectDiv').css({ x: '200%' }),
      loadSection(),
      $('.ouinoContent').css({ opacity: 1 }),
      $('#soundArrow')
        .transition({ opacity: 1, top: '50px' })
        .transition({ top: '70px' }, 200)
        .transition({ top: '50px' }, 200)
        .transition({ top: '70px' }, 200)
        .transition({ top: '50px' }, 200)
        .transition({ opacity: 0, delay: 300 }))
    : $('#selectDiv').is(':visible')
      ? ($('.gLight2').hasClass('green')
          ? $('#nativeAudio').trigger('play')
          : $('.gLight1').hasClass('green') && $('#audio').trigger('play'),
        $('#selectDiv').hide(),
        $('#selectDiv').css({ x: '200%' }),
        $('.ouinoContent').css({ opacity: 1 }))
      : ($('.gLight2').hasClass('green')
          ? $('#nativeAudio').trigger('pause')
          : $('.gLight1').hasClass('green') && $('#audio').trigger('pause'),
        'mobile' != currentDevice && playSprite('transition'),
        $('#selectDiv').show(),
        $('#micDiv').hide(),
        $('#micDiv').css({ x: '200%' }),
        $('.ouinoContent').transition({ opacity: 0 }, 300),
        $('#selectDiv').transition({ x: '100%' }, function () {
          resizePage();
        }));
}
function updateDatabase() {
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
  } catch (e) {
    console.log("ERROR: couldn't update");
  }
}
function micSection() {
  $('#micDiv').is(':visible')
    ? ($('#micDiv').hide(),
      $('#micDiv').css({ x: '200%' }),
      $('.ouinoContent').css({ opacity: 1 }),
      $('.gLight2').hasClass('green')
        ? $('#nativeAudio').trigger('play')
        : $('.gLight1').hasClass('green') && $('#audio').trigger('play'))
    : ($('.gLight2').hasClass('green')
        ? $('#nativeAudio').trigger('pause')
        : $('.gLight1').hasClass('green') && $('#audio').trigger('pause'),
      $('#selectDiv').hide(),
      $('#selectDiv').css({ x: '200%' }),
      $('#micDiv').show(),
      'mobile' != currentDevice && playSprite('transition'),
      $('.ouinoContent').transition({ opacity: 0 }, 300),
      $('#micDiv').transition({ x: '100%' }));
}
function toggleMusic3() {}
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
function toggleMusic2() {}
function playMusic() {
  (document
    .getElementById('mainMusic')
    .removeEventListener('canplay', playMusic),
    $('#mainMusic').trigger('play'));
}
((currentDevice =
  /Android|webOS|iPhone|touch|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
    ? 'mobile'
    : 'desktop'),
  $(document).ready(function () {
    if (null == sessionStorage.userEmailSTORE)
      return (sessionStorage.clear(), void (window.location = '../index.html'));
    ((userEmail = sessionStorage.userEmailSTORE),
      (tuvm58dj = sessionStorage.tuvm58djSTORE),
      (storeInfo = langShort + userEmail),
      $(function () {
        FastClick.attach(document.body);
      }),
      $('#background').css({
        'background-image': 'url(images/pronunBack' + themeNum + '.png)',
      }),
      $('body').append(mainHTML),
      $('body').append(mainHTML2),
      $('title').text(''),
      $('body').append('<meta name="theme-color" content="#202020">'),
      null == sessionStorage.LOGGEDIN && loadLogIn(),
      $('.timerMeter > .timerSpan').css({
        background: btnColor[2 * themeNum - 2],
        width: 0,
      }),
      $('.gradientColor').css({
        background:
          'url(../common/black.svg), linear-gradient(' +
          btnColor[2 * themeNum - 2] +
          ',' +
          btnColor[2 * themeNum - 1] +
          ')',
      }),
      $('.gradientColor2').css({
        background:
          'linear-gradient(' +
          btnColor[2 * themeNum - 2] +
          ',' +
          btnColor[2 * themeNum - 1] +
          ')',
      }),
      $('.lessonMenus').css({ x: '200%' }),
      $('#selectDiv').show(),
      $('#selectDiv').css({ x: '100%' }),
      $('#loadBtn, .micBtn').hide(),
      $('.switch strong').html('Completed:&nbsp;NO'),
      $('.menuBtnContainer').append(
        '<img id="backBtn" src="../common/back.svg" class="smallIcon"/>',
      ),
      $('#backBtn').on('click', homeMenu),
      $('.insideMenu').append(
        "<a href='../extra/index.html?pronun=true' style='text-decoration: none;'><section class='soundBox' style='padding: 20px 130px 20px 30px; position:relative; font-weight: normal; font-size: 1em; line-height: 23px; max-width: 540px; cursor: pointer; text-align: left;'><img src='../extra/images/extra.png' style='position:absolute; right: 44px; top: 0; bottom: 0; margin: auto; width: 80px; height: auto;'/><span style='color: white;'>Once you've learned all the different sounds in " +
          lessonLanguage +
          ", you can pratice with <strong style='font-size: 1.1em;'>thousands</strong> of sentences in the <strong style='color: #FC0;font-size: 1.1em;'>Extra Language Practice</strong> module of the course.</span><div style='position: absolute; bottom: 0; top: 0; right: 15px; margin: auto; width: 55px; line-height: 35px; height: 35px; background: #404040; font-size: 20px; border-radius: 5px; text-align: center; font-weight: bold; text-shadow: none;'>GO</div></section></a>",
      ),
      (audioSprite = document.getElementById('sfxSprite')),
      audioSprite.addEventListener('timeupdate', onTimeUpdate, !1),
      loadButtonsMain());
    var e = window.location.href;
    ((e = 'pronun/' + (e = e.split('pronun/'))[1]),
      localStorage.setItem(storeInfo + 'saved', e),
      savePosition(),
      $(window).resize(function () {
        resizePage();
      }),
      $(window).load(function () {
        resizePage();
      }),
      $(document).on('blur', 'input, textarea', function () {
        setTimeout(function () {
          window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
        }, 0);
      }),
      null != localStorage.pronunVol &&
        ((nativeAudio.volume = localStorage.pronunVol),
        $('#volDiv').slider('value', localStorage.pronunVol)),
      (-1 != navigator.appVersion.indexOf('Win')
        ? $('#micMac')
        : -1 != navigator.appVersion.indexOf('Mac')
          ? $('#micWin')
          : $('.micBtn')
      ).hide(),
      (null != (pronunInfo = localStorage[storeInfo + 'starSTOREpronun']) &&
        'null' != pronunInfo) ||
        (pronunInfo =
          '0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0'),
      (pronunInfo = pronunInfo.split(':')));
    for (var t = 1; t <= $('.cMark').length; t++)
      '1' == pronunInfo[t] &&
        $('#so' + t)
          .children('.cMark')
          .html('&#10003;');
    if (
      ('1' == pronunInfo[0]
        ? ($('#nativeLabel').html('Male<span>&nbsp;Native</span>&nbsp;Speaker'),
          $('#nativeImg').css({
            background:
              'url(../pronun/images/nativeMasc.png) no-repeat center center',
            'background-size': 'contain',
          }))
        : '2' == pronunInfo[0]
          ? ($('#nativeLabel').html(
              'Female<span>&nbsp;Native</span>&nbsp;Speaker',
            ),
            $('#nativeImg').css({
              background:
                'url(../pronun/images/nativeFem.png) no-repeat center center',
              'background-size': 'contain',
            }))
          : ($('#nativeLabel').html(
              'Both<span>&nbsp;Native</span>&nbsp;Speakers',
            ),
            $('#nativeImg').css({
              background:
                'url(../pronun/images/nativeBoth.png) no-repeat center center',
              'background-size': 'contain',
            })),
      localStorage[storeInfo + 'musicSTOREprogram'] ||
        (localStorage[storeInfo + 'musicSTOREprogram'] = pronunInfo[72]),
      localStorage.getItem(storeInfo + 'goalsSTORE'))
    ) {
      var o = (o = new Date()).getDate() + o.format('mmmm') + o.getFullYear(),
        n = [];
      if (
        -1 ===
        (n = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')).indexOf(
          o,
        )
      ) {
        for (n.push(o), i = 1; i <= 5; i++) n.push('0');
        (n.push('1'),
          localStorage.setItem(storeInfo + 'goalsSTORE', n.join(':')),
          (infoToUpdate = n.join(':')),
          (fieldToUpdate = 'goals'),
          updateDatabase());
      }
    }
    ((localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
      null == localStorage.getItem(storeInfo + 'goalsSTORE')) &&
      ((o = [
        (o = (o = new Date()).getDate() + o.format('mmmm') + o.getFullYear()),
        '0',
        '0',
        '0',
        '0',
        '0',
        '1',
      ]),
      localStorage.setItem(storeInfo + 'goalsSTORE', o.join(':')),
      (infoToUpdate = o.join(':')),
      (fieldToUpdate = 'goals'),
      console.log('updated'),
      updateDatabase()),
      recordInit());
  }),
  (window.onload = function () {
    ($('#loginCover').hide(),
      $('.menuBar').css({ visibility: 'visible' }),
      $('.ouinoContent').css({ visibility: 'visible' }));
  }),
  $('#loadBtn').is(':hidden') && ($('#loadBtn').show(), loadSection()),
  (currentSprite = {}));
var mobileInit = 'mobile' == currentDevice ? !1 : !0,
  onTimeUpdate = function () {
    this.currentTime >= currentSprite.start + currentSprite.length &&
      this.pause();
  };
playSprite = function (e) {
  0 == mobileInit
    ? ((currentSprite = spriteData.blank),
      (audioSprite.currentTime = currentSprite.start),
      audioSprite.play(),
      (mobileInit = !0))
    : spriteData[e] &&
      spriteData[e].length &&
      ((currentSprite = spriteData[e]),
      (audioSprite.currentTime = currentSprite.start),
      audioSprite.play());
};
var spriteData = {
    blank: { start: 0, length: 1.5 },
    quizGood: { start: 2, length: 1.5 },
    quizBad: { start: 4, length: 1.2 },
    pause: { start: 6, length: 1 },
    shimmer: { start: 8, length: 1 },
    transition: { start: 10, length: 1 },
    rollover: { start: 12, length: 0.5 },
    swoosh: { start: 13, length: 0.5 },
    endFail: { start: 14, length: 1.5 },
    endGood: { start: 16, length: 2 },
    endPass: { start: 19, length: 2.8 },
    lightBeep: { start: 23, length: 3.8 },
  },
  dateFormat = (function () {
    function g(e, t) {
      for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e;
      return e;
    }
    var h = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
      v =
        /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
      f = /[^-+\dA-Z]/g;
    return function (e, t, o) {
      var n = dateFormat;
      if (
        (1 != arguments.length ||
          '[object String]' != Object.prototype.toString.call(e) ||
          /\d/.test(e) ||
          ((t = e), (e = void 0)),
        (e = e ? new Date(e) : new Date()),
        isNaN(e))
      )
        throw SyntaxError('invalid date');
      'UTC:' == (t = String(n.masks[t] || t || n.masks.default)).slice(0, 4) &&
        ((t = t.slice(4)), (o = !0));
      var r = o ? 'getUTC' : 'get',
        i = e[r + 'Date'](),
        a = e[r + 'Day'](),
        s = e[r + 'Month'](),
        l = e[r + 'FullYear'](),
        c = e[r + 'Hours'](),
        d = e[r + 'Minutes'](),
        u = e[r + 'Seconds'](),
        m = e[r + 'Milliseconds'](),
        r = o ? 0 : e.getTimezoneOffset(),
        p = {
          d: i,
          dd: g(i),
          ddd: n.i18n.dayNames[a],
          dddd: n.i18n.dayNames[a + 7],
          m: s + 1,
          mm: g(s + 1),
          mmm: n.i18n.monthNames[s],
          mmmm: n.i18n.monthNames[s + 12],
          yy: String(l).slice(2),
          yyyy: l,
          h: c % 12 || 12,
          hh: g(c % 12 || 12),
          H: c,
          HH: g(c),
          M: d,
          MM: g(d),
          s: u,
          ss: g(u),
          l: g(m, 3),
          L: g(99 < m ? Math.round(m / 10) : m),
          t: c < 12 ? 'a' : 'p',
          tt: c < 12 ? 'am' : 'pm',
          T: c < 12 ? 'A' : 'P',
          TT: c < 12 ? 'AM' : 'PM',
          Z: o ? 'UTC' : (String(e).match(v) || ['']).pop().replace(f, ''),
          o:
            (0 < r ? '-' : '+') +
            g(100 * Math.floor(Math.abs(r) / 60) + (Math.abs(r) % 60), 4),
          S: ['th', 'st', 'nd', 'rd'][
            3 < i % 10 ? 0 : (((i % 100) - (i % 10) != 10) * i) % 10
          ],
        };
      return t.replace(h, function (e) {
        return e in p ? p[e] : e.slice(1, e.length - 1);
      });
    };
  })();
function FastClick(r, e) {
  'use strict';
  var t;
  if (
    ((e = e || {}),
    (this.trackingClick = !1),
    (this.trackingClickStart = 0),
    (this.targetElement = null),
    (this.touchStartX = 0),
    (this.touchStartY = 0),
    (this.lastTouchIdentifier = 0),
    (this.touchBoundary = e.touchBoundary || 10),
    (this.layer = r),
    (this.tapDelay = e.tapDelay || 200),
    !FastClick.notNeeded(r))
  ) {
    for (
      var o = [
          'onMouse',
          'onClick',
          'onTouchStart',
          'onTouchMove',
          'onTouchEnd',
          'onTouchCancel',
        ],
        n = 0,
        i = o.length;
      n < i;
      n++
    )
      this[o[n]] = (function (e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      })(this[o[n]], this);
    (deviceIsAndroid &&
      (r.addEventListener('mouseover', this.onMouse, !0),
      r.addEventListener('mousedown', this.onMouse, !0),
      r.addEventListener('mouseup', this.onMouse, !0)),
      r.addEventListener('click', this.onClick, !0),
      r.addEventListener('touchstart', this.onTouchStart, !1),
      r.addEventListener('touchmove', this.onTouchMove, !1),
      r.addEventListener('touchend', this.onTouchEnd, !1),
      r.addEventListener('touchcancel', this.onTouchCancel, !1),
      Event.prototype.stopImmediatePropagation ||
        ((r.removeEventListener = function (e, t, o) {
          var n = Node.prototype.removeEventListener;
          'click' === e ? n.call(r, e, t.hijacked || t, o) : n.call(r, e, t, o);
        }),
        (r.addEventListener = function (e, t, o) {
          var n = Node.prototype.addEventListener;
          'click' === e
            ? n.call(
                r,
                e,
                t.hijacked ||
                  (t.hijacked = function (e) {
                    e.propagationStopped || t(e);
                  }),
                o,
              )
            : n.call(r, e, t, o);
        })),
      'function' == typeof r.onclick &&
        ((t = r.onclick),
        r.addEventListener(
          'click',
          function (e) {
            t(e);
          },
          !1,
        ),
        (r.onclick = null)));
  }
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
  }));
var deviceIsAndroid = 0 < navigator.userAgent.indexOf('Android'),
  deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
  deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
  deviceIsIOSWithBadTarget =
    deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
  deviceIsBlackBerry10 = 0 < navigator.userAgent.indexOf('BB10');
((FastClick.prototype.needsClick = function (e) {
  'use strict';
  switch (e.nodeName.toLowerCase()) {
    case 'button':
    case 'select':
    case 'textarea':
      if (e.disabled) return !0;
      break;
    case 'input':
      if ((deviceIsIOS && 'file' === e.type) || e.disabled) return !0;
      break;
    case 'label':
    case 'video':
      return !0;
  }
  return /\bneedsclick\b/.test(e.className);
}),
  (FastClick.prototype.needsFocus = function (e) {
    'use strict';
    switch (e.nodeName.toLowerCase()) {
      case 'textarea':
        return !0;
      case 'select':
        return !deviceIsAndroid;
      case 'input':
        switch (e.type) {
          case 'button':
          case 'checkbox':
          case 'file':
          case 'image':
          case 'radio':
          case 'submit':
            return !1;
        }
        return !e.disabled && !e.readOnly;
      default:
        return /\bneedsfocus\b/.test(e.className);
    }
  }),
  (FastClick.prototype.sendClick = function (e, t) {
    'use strict';
    var o;
    (document.activeElement &&
      document.activeElement !== e &&
      document.activeElement.blur(),
      (o = t.changedTouches[0]),
      (t = document.createEvent('MouseEvents')).initMouseEvent(
        this.determineEventType(e),
        !0,
        !0,
        window,
        1,
        o.screenX,
        o.screenY,
        o.clientX,
        o.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null,
      ),
      (t.forwardedTouchEvent = !0),
      e.dispatchEvent(t));
  }),
  (FastClick.prototype.determineEventType = function (e) {
    'use strict';
    return deviceIsAndroid && 'select' === e.tagName.toLowerCase()
      ? 'mousedown'
      : 'click';
  }),
  (FastClick.prototype.focus = function (e) {
    'use strict';
    var t;
    deviceIsIOS &&
    e.setSelectionRange &&
    0 !== e.type.indexOf('date') &&
    'time' !== e.type
      ? ((t = e.value.length), e.setSelectionRange(t, t))
      : e.focus();
  }),
  (FastClick.prototype.updateScrollParent = function (e) {
    'use strict';
    var t,
      o = e.fastClickScrollParent;
    if (!o || !o.contains(e)) {
      t = e;
      do {
        if (t.scrollHeight > t.offsetHeight) {
          ((o = t), (e.fastClickScrollParent = t));
          break;
        }
      } while ((t = t.parentElement));
    }
    o && (o.fastClickLastScrollTop = o.scrollTop);
  }),
  (FastClick.prototype.getTargetElementFromEventTarget = function (e) {
    'use strict';
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
  }),
  (FastClick.prototype.onTouchStart = function (e) {
    'use strict';
    var t, o, n;
    if (1 < e.targetTouches.length) return !0;
    if (
      ((t = this.getTargetElementFromEventTarget(e.target)),
      (o = e.targetTouches[0]),
      deviceIsIOS)
    ) {
      if ((n = window.getSelection()).rangeCount && !n.isCollapsed) return !0;
      if (!deviceIsIOS4) {
        if (o.identifier && o.identifier === this.lastTouchIdentifier)
          return (e.preventDefault(), !1);
        ((this.lastTouchIdentifier = o.identifier), this.updateScrollParent(t));
      }
    }
    return (
      (this.trackingClick = !0),
      (this.trackingClickStart = e.timeStamp),
      (this.targetElement = t),
      (this.touchStartX = o.pageX),
      (this.touchStartY = o.pageY),
      e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
      !0
    );
  }),
  (FastClick.prototype.touchHasMoved = function (e) {
    'use strict';
    var t = e.changedTouches[0],
      e = this.touchBoundary;
    return (
      Math.abs(t.pageX - this.touchStartX) > e ||
      Math.abs(t.pageY - this.touchStartY) > e
    );
  }),
  (FastClick.prototype.onTouchMove = function (e) {
    'use strict';
    return (
      this.trackingClick &&
        ((this.targetElement ===
          this.getTargetElementFromEventTarget(e.target) &&
          !this.touchHasMoved(e)) ||
          ((this.trackingClick = !1), (this.targetElement = null))),
      !0
    );
  }),
  (FastClick.prototype.findControl = function (e) {
    'use strict';
    return void 0 !== e.control
      ? e.control
      : e.htmlFor
        ? document.getElementById(e.htmlFor)
        : e.querySelector(
            'button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea',
          );
  }),
  (FastClick.prototype.onTouchEnd = function (e) {
    'use strict';
    var t,
      o,
      n,
      r,
      i = this.targetElement;
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < this.tapDelay)
      return (this.cancelNextClick = !0);
    if (
      ((this.cancelNextClick = !1),
      (this.lastClickTime = e.timeStamp),
      (t = this.trackingClickStart),
      (this.trackingClick = !1),
      (this.trackingClickStart = 0),
      deviceIsIOSWithBadTarget &&
        ((r = e.changedTouches[0]),
        ((i =
          document.elementFromPoint(
            r.pageX - window.pageXOffset,
            r.pageY - window.pageYOffset,
          ) || i).fastClickScrollParent =
          this.targetElement.fastClickScrollParent)),
      'label' === (o = i.tagName.toLowerCase()))
    ) {
      if ((r = this.findControl(i))) {
        if ((this.focus(i), deviceIsAndroid)) return !1;
        i = r;
      }
    } else if (this.needsFocus(i))
      return (
        100 < e.timeStamp - t ||
        (deviceIsIOS && window.top !== window && 'input' === o)
          ? (this.targetElement = null)
          : (this.focus(i),
            this.sendClick(i, e),
            (deviceIsIOS && 'select' === o) ||
              ((this.targetElement = null), e.preventDefault())),
        !1
      );
    return (
      !(
        !deviceIsIOS ||
        deviceIsIOS4 ||
        !(n = i.fastClickScrollParent) ||
        n.fastClickLastScrollTop === n.scrollTop
      ) ||
      (this.needsClick(i) || (e.preventDefault(), this.sendClick(i, e)), !1)
    );
  }),
  (FastClick.prototype.onTouchCancel = function () {
    'use strict';
    ((this.trackingClick = !1), (this.targetElement = null));
  }),
  (FastClick.prototype.onMouse = function (e) {
    'use strict';
    return (
      !this.targetElement ||
      !!e.forwardedTouchEvent ||
      !e.cancelable ||
      !(!this.needsClick(this.targetElement) || this.cancelNextClick) ||
      (e.stopImmediatePropagation
        ? e.stopImmediatePropagation()
        : (e.propagationStopped = !0),
      e.stopPropagation(),
      e.preventDefault(),
      !1)
    );
  }),
  (FastClick.prototype.onClick = function (e) {
    'use strict';
    return this.trackingClick
      ? ((this.targetElement = null), !(this.trackingClick = !1))
      : ('submit' === e.target.type && 0 === e.detail) ||
          ((e = this.onMouse(e)) || (this.targetElement = null), e);
  }),
  (FastClick.prototype.destroy = function () {
    'use strict';
    var e = this.layer;
    (deviceIsAndroid &&
      (e.removeEventListener('mouseover', this.onMouse, !0),
      e.removeEventListener('mousedown', this.onMouse, !0),
      e.removeEventListener('mouseup', this.onMouse, !0)),
      e.removeEventListener('click', this.onClick, !0),
      e.removeEventListener('touchstart', this.onTouchStart, !1),
      e.removeEventListener('touchmove', this.onTouchMove, !1),
      e.removeEventListener('touchend', this.onTouchEnd, !1),
      e.removeEventListener('touchcancel', this.onTouchCancel, !1));
  }),
  (FastClick.notNeeded = function (e) {
    'use strict';
    var t, o;
    if (void 0 === window.ontouchstart) return !0;
    if ((o = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])) {
      if (!deviceIsAndroid) return !0;
      if ((t = document.querySelector('meta[name=viewport]'))) {
        if (-1 !== t.content.indexOf('user-scalable=no')) return !0;
        if (31 < o && document.documentElement.scrollWidth <= window.outerWidth)
          return !0;
      }
    }
    if (
      deviceIsBlackBerry10 &&
      ((o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/)),
      10 <= o[1] &&
        3 <= o[2] &&
        (t = document.querySelector('meta[name=viewport]')))
    ) {
      if (-1 !== t.content.indexOf('user-scalable=no')) return !0;
      if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
    }
    return 'none' === e.style.msTouchAction;
  }),
  (FastClick.attach = function (e, t) {
    'use strict';
    return new FastClick(e, t);
  }),
  'function' == typeof define && 'object' == typeof define.amd && define.amd
    ? define(function () {
        'use strict';
        return FastClick;
      })
    : 'undefined' != typeof module && module.exports
      ? ((module.exports = FastClick.attach),
        (module.exports.FastClick = FastClick))
      : (window.FastClick = FastClick));
