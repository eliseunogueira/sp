var oPath = '',
  oPath2 = '../';
'androidSTORE' == osType &&
  ((oPath =
    'https://www.eliseunogueira.com.br/app/' +
    lessonLanguage +
    '/convo/' +
    lessonNumber +
    '/'),
  (oPath2 =
    'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/convo/'));
var extraNote =
    'The lessons in the conversation section are colloquial and use a conversational style. The language may not always be 100% grammatically correct, but accurately shows how many native speakers speak.',
  currentSection = 'Conversations',
  currentSecShort = 'convo',
  quizTitle1 = 'TRANSLATION SNAP',
  quizTitle2 = 'QUICK RESPONSE',
  currentProgram = 'Complete',
  errors = [],
  errorMode = !1,
  slidesPres = [15, 16],
  cardCate = '|d',
  cardRaw = [];
function getUrlVars() {
  var e = {};
  return (
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (t, i, o) {
      e[i] = o;
    }),
    e
  );
}
function getUrlParam(e, t) {
  var i = t;
  return (window.location.href.indexOf(e) > -1 && (i = getUrlVars()[e]), i);
}
function loadAudioCourse() {
  ($('#loadLogo').show(),
    setTimeout(function () {
      window.location = '../../audio/index.html?convo=' + lessonNumber;
    }, 100));
}
var quizDescription1 =
    'Quick! Click on the English equivalent of the spoken dialogue as fast as possible to get the maximum amount of points. You can also buy hints to help you along the way. Try to finish with as many points as you can!',
  quizDescription2 =
    'Take part of the conversation! Click on the most appropriate response to the question asked by the native speaker. The quicker you answer, the more points you score! Use hints to help you if need be!',
  numWords = engExamples.length;
quizConvoArray = shuffle(quizConvoArray);
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
  audioSprite,
  quizCombinedArray = quizConvoArray,
  greenBub = [],
  redBub = [],
  blueBub = [],
  orangeBub = [],
  yellowBub = [],
  violetBub = [],
  turquoiseBub = [],
  greyBub = [];
if (
  ((redBub = [
    5, 6, 8, 9, 18, 16, 25, 27, 29, 38, 40, 41, 46, 48, 49, 50, 53, 59, 69, 70,
    71,
  ]),
  (blueBub = [
    1, 10, 12, 13, 19, 20, 21, 22, 30, 31, 32, 35, 36, 39, 54, 56, 58, 62, 65,
    67, 74, 75, 76, 77,
  ]),
  (orangeBub = [4, 7, 11, 15, 23, 28, 47, 61]),
  (greyBub = [34, 45, 51, 57, 63, 68, 72, 78]),
  -1 !==
    (greenBub = [
      2, 3, 14, 17, 24, 26, 33, 37, 42, 43, 44, 52, 55, 60, 64, 66, 73,
    ]).indexOf(lessonNumber))
)
  var btnColor = ['#267819', '#1d3d0d', '#267819', '#1d3d0d'];
else if (-1 !== orangeBub.indexOf(lessonNumber))
  btnColor = ['#b5441b', '#962B17', '#b5441b', '#962B17'];
else if (-1 !== yellowBub.indexOf(lessonNumber))
  btnColor = ['#ff600a', '#a32600', '#ff600a', '#a32600'];
else if (-1 !== redBub.indexOf(lessonNumber))
  btnColor = ['#bd2020', '#690c0c', '#bd2020', '#690c0c'];
else if (-1 !== blueBub.indexOf(lessonNumber))
  btnColor = ['#0a5d90', '#063561', '#0a5d90', '#063561'];
else if (-1 !== violetBub.indexOf(lessonNumber))
  btnColor = ['#27488a', '#102557', '#27488a', '#102557'];
else if (-1 !== turquoiseBub.indexOf(lessonNumber))
  btnColor = ['#206d8a', '#0e3236', '#206d8a', '#0e3236'];
else if (-1 !== greyBub.indexOf(lessonNumber))
  btnColor = ['#474f52', '#2a3133', '#474f52', '#2a3133'];
function loadPresentation() {
  buttonCreate = '';
  for (var e = 0; e < engExamples.length; e++)
    buttonCreate =
      buttonCreate +
      '<input type="submit" value="' +
      engExamples[e] +
      '" class="ouinoButton" id="button' +
      e +
      '">';
  ((fastSounds = []), (slowSounds = []));
  for (var t = numWords / 2 + 0.5, i = 1; i <= t; i++)
    (fastSounds.push(oPath + 'sounds/1fast' + i + soundType),
      fastSounds.push(oPath + 'sounds/2fast' + i + soundType),
      slowSounds.push(oPath + 'sounds/1slow' + i + soundType),
      slowSounds.push(oPath + 'sounds/2slow' + i + soundType));
  numWords % 2 != 0 && (fastSounds.pop(), slowSounds.pop());
}
function buttonClicked() {
  ((currentWordNum = $(this).attr('id').split('button').join('')),
    (currentWordNum = parseInt(currentWordNum)),
    changeWord());
}
function resizeQuiz() {
  ((viewportHeight = $('body').height() - 45),
    $('body').hasClass('notch') &&
      ((viewportHeight -= 75), $('.menuBar').removeClass('hideBack')),
    $('body').hasClass('android') && (viewportHeight -= 20),
    $('.menuBtnContainer').show(),
    $('.menuTitleContainer').hide(),
    (viewportWidth = $('html').innerWidth()),
    (screenRatio = viewportWidth / viewportHeight),
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
    $('body').hasClass('notch') &&
      ($('#quizTxt1').show(), $('#quizTxt2').show()),
    viewportHeight < 655 || screenRatio <= 1
      ? $('#quizContent').css({ height: viewportHeight - 45 + 'px' })
      : $('#quizContent').css({ height: '630px' }));
  var e = $('#quizContent').width(),
    t = $('#quizContent').height();
  if (
    (screenRatio >= 1.5
      ? $('.chooseQuizIcon').css({
          height: 0.65 * t - 75 + 'px',
          width: 'auto',
        })
      : $('.chooseQuizIcon').css({ width: 0.4 * e + 'px', height: 'auto' }),
    (viewportHeight = $('body').height() - 45) <= 700
      ? $('#lightTimerDiv').css({ width: viewportHeight / 4 + 'px' })
      : $('#lightTimerDiv').css({ width: '190px' }),
    viewportHeight <= 400 ? $('#quizDonePts').hide() : $('#quizDonePts').show(),
    viewportHeight <= 500
      ? $('#quizPreloadDescription').hide()
      : $('#quizPreloadDescription').show(),
    currentQuiz >= 1)
  ) {
    var i = $('#quizContent').width() / $('#quizContent').height();
    screenRatio > 1
      ? ($('.quizChoices').css({ height: '20%' }),
        $('#quizConvoItems').css({ width: '66.1%' }),
        $('#allHintsContainer').css({ height: '20%' }),
        i >= 1.4
          ? $('#quizSentenceContainer').css({ width: '73%', right: '-1%' })
          : $('#quizSentenceContainer').css({ width: '88%', right: '0%' }),
        $('#quizConvoImg1,  #quizConvoImg2').removeClass('quizImagePortrait'),
        i >= 2
          ? $('#quizConvoImg1,  #quizConvoImg2').css({
              'background-position': 'center top',
            })
          : $('#quizConvoImg1,  #quizConvoImg2').css({
              'background-position': 'center bottom',
            }),
        $('.quizConvoSurround, #quizConvoImg1,  #quizConvoImg2').css({
          height: $('#quizContent').height() - 70 + 'px',
        }),
        $('#quizConvoImg1').css({ 'border-radius': '0 0 0 10px' }),
        $('#quizConvoImg2').css({ 'border-radius': '0 0 10px 0' }))
      : ($('.quizChoices').css({ height: '20%' }),
        $('#quizConvoItems').css({ width: '96%' }),
        $('#allHintsContainer').css({ height: '20%' }),
        $('body').hasClass('notch')
          ? $('#quizSentenceContainer').css({ width: '60%', right: '-1%' })
          : $('#quizSentenceContainer').css({ width: '65%', right: '-1%' }),
        $('.quizConvoSurround').css({
          height: $('#quizContent').height() - 70 + 'px',
        }),
        $('#quizConvoImg1,  #quizConvoImg2').addClass('quizImagePortrait'),
        $('#quizConvoImg1').css({ 'border-radius': '0 0 20px 0' }),
        $('#quizConvoImg2').css({ 'border-radius': '0 0 0 20px' }));
  }
  setTimeout(function () {
    resizeButtonQuizText();
  }, 20);
}
function resizeButtonQuizText() {
  if (screenRatio <= 1) {
    var e = $('#quizContent').height() - $('#quizConvoItems').height() - 70;
    $('#quizConvoImg1,  #quizConvoImg2').css({ top: '20px', height: e + 'px' });
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
            : ($('.menuBtnContainer, .menuTitleContainer').show(),
              $('.menuBar').removeClass('hideBack')))
      : ($('body').removeClass('notch'),
        $('.menuBtnContainer, .menuTitleContainer').show()),
    $('#quizContent').is(':visible'))
  )
    resizeQuiz();
  else {
    ($('#startCover').css({ height: $('html').innerHeight() + 'px' }),
      (viewportHeight = $('body').height() - 45),
      $('body').hasClass('notch') && (viewportHeight -= 45));
    var e,
      t = (viewportWidth = $('html').innerWidth()) / viewportHeight;
    (viewportWidth < 600
      ? ($('.menuItem').css({ 'font-size': '15px' }),
        $('.menuItemDescription').css({ 'font-size': '11px' }))
      : ($('.menuItem').css({ 'font-size': '17px' }),
        $('.menuItemDescription').css({ 'font-size': '14px' })),
      viewportWidth >= 850 ? $('.menuLogo').show() : $('.menuLogo').hide(),
      $('.wordSentence').css({ 'max-width': '900px' }),
      t >= 1
        ? ($('#quizSentenceContainer').removeClass('fullWidth'),
          $('#quizConvoImg1, #quizConvoImg2').removeClass('hidePic'),
          $('.ouinoContent').removeClass('onePerson'),
          $('.arrowControl').css({
            right: $('#person1').width() - 50 + 'px',
            left: 'auto',
          }),
          $('.ouinoContent').removeClass('portrait'),
          (e = viewportHeight - 240),
          viewportWidth >= 1800 && (e += 100),
          $('#person1, #person2').css({
            width: 0.63 * e + 'px',
            height: e + 'px',
          }),
          viewportWidth >= 1800 && (e -= 180),
          $('.buttonContainer').css({ height: e - 80 + 'px' }),
          $('.wordSentence').css({ bottom: e + 'px', top: 'auto' }),
          $('.buttonContainer').css({
            width: viewportWidth - 2 * $('#person1').width() + 'px',
            'margin-left': 'auto',
          }),
          $('.buttonContainer').width() < 360
            ? ($('.ouinoContent').addClass('onePerson'),
              $('.arrowControl').css({
                left: $('#person1').width() - 50 + 'px',
                right: 'auto',
              }),
              $('.buttonContainer').css({
                width: viewportWidth - $('#person1').width() - 40 + 'px',
                'margin-left': $('#person1').width() + 'px',
              }))
            : $('.buttonContainer').width() > 900 &&
              $('.wordSentence').css({
                'max-width':
                  viewportWidth - 2 * $('#person1').width() + 110 + 'px',
              }))
        : ($('.ouinoContent').addClass('portrait'),
          $('.ouinoContent').addClass('onePerson'),
          $('body').hasClass('notch')
            ? ($('.arrowControl').css({
                left: 'auto',
                right: $('.buttonContainer').width() + 20 + 'px',
              }),
              (e = viewportHeight - 250),
              $('#person1, #person2').css({
                width: 0.63 * e + 'px',
                height: e + 'px',
              }),
              $('.buttonContainer').css({
                height: 0.9 * $('body').height() - 280 + 'px',
              }),
              $('.buttonContainer').css({
                width: $('body').width() - $('#person1').width() - 10 + 'px',
                'margin-left': $('#person1').width() - 1 + 'px',
              }),
              $('.wordSentence').css({ bottom: 'auto', top: '50px' }))
            : ($('.arrowControl').css({
                left: $('#person1').width() - 50 + 'px',
                right: 'auto',
              }),
              (e = viewportHeight - 280),
              $('.buttonContainer').css({
                height: 0.9 * $('body').height() - 228 + 'px',
              }),
              $('.buttonContainer').css({
                width: viewportWidth - $('#person1').width() - 32 + 'px',
                'margin-left': $('#person1').width() + 'px',
              }),
              $('#person1, #person2').css({
                width: 0.63 * e + 'px',
                height: e + 'px',
              }),
              $('.wordSentence').css({ bottom: 'auto', top: '10%' }))),
      $('.buttonContainer').width() < 500 &&
      $('.ouinoContent').hasClass('onePerson') &&
      !$('body').hasClass('notch')
        ? $('.ouinoButton').addClass('alignLeft')
        : $('.ouinoButton').removeClass('alignLeft'),
      resizeButtonText(),
      resizeText(),
      resizeTitle());
  }
}
function resizeButtonText() {
  if ($('.buttonContainer').width() < 200) {
    for (var e = 0; e < numWords; e++) $('#button' + e).val(e + 1);
    $('.ouinoButton').removeClass('alignLeft');
  } else {
    for (e = 0; e < numWords; e++) $('#button' + e).val(engExamples[e]);
    var t = $('.buttonContainer').width() / 9;
    for (e = 0; e < numWords; e++)
      if (engExamples[e].length > t) {
        var i = engExamples[e].slice(0, t) + '...';
        ((i = i
          .split(',...')
          .join('...')
          .split(' ...')
          .join('...')
          .split('....')
          .join('...')),
          $('#button' + e).val(i));
      }
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
        o = viewportWidth - (i + t + e);
      o < 60 && $('.menuTitleContainer').text().length > 6;
    ) {
      var n = $('.menuTitleContainer').text().slice(0, -4);
      ((n = (n = n.concat('...')).split(' ...').join('...')),
        $('.menuTitleContainer').html(n),
        (t = $('.menuTitleContainer').width()),
        (o = viewportWidth - (i + t + e)));
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
  screenRatio,
  dragNum,
  mouseIsDown,
  dragPosition,
  currentMusic,
  wordTimer,
  mySound,
  madeError,
  quizWord,
  buttonCreate,
  fastSounds,
  checkAccent,
  slowSounds,
  foundArticle,
  quizGoodAnswer,
  timerWait,
  charsToAdd,
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
  quizPtsCount = 65,
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
    '<div id="loadLogo" style="display: none; opacity: 0.9; border-radius: 10px; cursor: default; padding: 40px; background: black; z-index: 2000; position: fixed; width: 100px; height: 30px; margin: auto auto; left:0; right: 0; top: 0; bottom:0; font-size: 22px; font-weight: bold; color: white;">LOADING...</div><section id="slideCont"><img id="slideImg" src=""/><div id="slideText"></div><div class="slideBtn1">Okay</div><div class="slideBtn2">Don\'t show me tips</div></section><div id="fontPreload1"></div><div id="fontPreload2"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel"></b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><span class="menuTitleContainer alignVerticalItem"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I\'m confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoConvo.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio>',
  lessonAppend =
    '<figure class="arrowControl"><div class="leftArrow"></div><div class="rightArrow"></div></figure><div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><div class="engToggle"></div><div class="insight"></div><main class="ouinoContent selectOff"><div id="person1"></div><div id="person2" class="personOff"></div><section class="wordSentence"><div id="flashCard"></div><div id="flashCard2"></div><div id="bubble"><img id="triangle1" src="../../common/triangle1.svg"><img id="triangle2" src="../../common/triangle2.svg"></div><div class="alignVerticalBubble"><div class="textWrap3"><h6 class="disSentence">-Text Disabled-</h6></div><div class="textWrap"><h6 class="forSentence"></h6></div><br><div class="textWrap2"><h6 class="engSentence"></h6></div></div></section><aside class="buttonContainer" style="-webkit-overflow-scrolling: touch;"></aside><div class="buttonWrap"></div></main>',
  quizAppend =
    '<img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><table id="quizMenu"><tr><th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th></tr><tr><td id="quizBtn1" class="quizType"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">TRANSLATION <br>SNAP</h2><img class="chooseQuizIcon" src="../../common/quizconvo1.svg"/><h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">QUICK <br>RESPONSE</h2><img class="chooseQuizIcon" src="../../common/quizconvo2.svg"/><h2 class="chooseQuizText2">Difficulty: Average</h2></td></tr><tr><td colspan="2" class="quizType" id="bonusBtn"><div id="extraBtn"><img src="../../extra/images/extra.png"><h2 class="chooseQuizText">EXTRA LANGUAGE PRACTICE</h2><h2 class="chooseQuizText2">Practice&nbsp;your&nbsp;language&nbsp;skills&nbsp;with the&nbsp;content&nbsp;of&nbsp;this&nbsp;conversation.</h2></div></td></tr></table><img id="quizGoBack" src="../../common/menuIcon1.svg"><div id="wrongAnswerPic"><div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"><div id="goodAnswerIn"></div></div><div id="goodAnswerPic2"><div id="goodAnswerIn2"></div></div><table id="quizDone" ><tr><th colspan="2" id="quizDoneTitle"></th></tr><tr><td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr><td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp;<p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr><td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div><span class="addQuizFlash"><img src="../../flash/images/cards.svg"/> Add Errors to Flash Cards</span></td></tr></table><div id="quizScoreBack"><div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"><div id="quizTimerPointer"><img id="quizTimerImage" src="../../common/timerPointer.svg"></div><div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizTimer2"><div id="quizTimerGood2"></div><div id="quizTimerBar"></div><div id="quizTimerBad2"></div></div><div id="quizItself"><div class="textWrap5"></div><div class="quizConvoSurround" id="surr1"></div><div class="quizConvoSurround" id="surr2"></div><div id="quizSentenceContainer"><div class="quizSentenceWrap alignVerticalBubble"><div class="textWrap4"><h1 id="quizSentenceConvo"></h1></div></div><div id="bubble2"><img id="triangle3" src="../../common/triangle1.svg"></div></div><table id="quizConvoItems"><tr><td id="allHintsContainer"><div id="hint1" class="allHints"></div><div id="hint2" class="allHints"></div><div id="hint3" class="allHints"></div></td></tr><tr><td id="quizChoice1" class="quizChoices"><span id="quizItem1" class="multiBtnFont"></span></td></tr><tr><td id="quizChoice2" class="quizChoices"><span id="quizItem2" class="multiBtnFont"></span></td></tr><tr><td id="quizChoice3" class="quizChoices"><span id="quizItem3" class="multiBtnFont"></span></td></tr><tr><td id="quizChoice4" class="quizChoices"><span id="quizItem4" class="multiBtnFont"></span></td></tr></table><div id="quizConvoItemsB"></div><div id="quizConvoItemsC"></div><div id="quizConvoImg1"></div><div id="quizConvoImg2"></div></div><table id="quizPreload"><tr><th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th></tr><tr><td id="quizPreloadMedal"></td></tr><tr><td id="quizPreloadStart">START NOW</td></tr></table><div id="quizStart"><div id="quizStartImg"><div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div></main>',
  imageArray = [oPath + 'images/person1.png', oPath + 'images/person2.png'];
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
      $('#person2').addClass('personOff'),
      $('#person1').removeClass('personOff'),
      void (restartedLesson = !1)
    );
  currentWordNum % 2 == 0
    ? ($('#person2').addClass('personOff'),
      $('#person1').removeClass('personOff'),
      $('#triangle1').show(),
      $('#triangle2').hide())
    : ($('#person1').addClass('personOff'),
      $('#person2').removeClass('personOff'),
      $('.ouinoContent').hasClass('onePerson')
        ? ($('#triangle1').show(), $('#triangle2').hide())
        : ($('#triangle2').show(), $('#triangle1').hide()));
}
function nextImage() {
  currentWordNum != numWords - 1
    ? (currentWordNum++, changeWord())
    : ((soundPlaying = !1),
      $('#pauseBtn').attr('src', '../../common/play.svg'),
      $('#pauseBtn').hide(),
      $('.wrapper3').css({ background: 'rgba(0,0,0,0)' }),
      $('.insight, .engToggle, .arrowControl').fadeOut(),
      $('#endWrap').fadeIn(500, function () {
        $('.ouinoContent').fadeOut(500);
      }),
      $('body').hasClass('notch') &&
        ($('.menuBtnContainer').fadeOut(),
        setTimeout(function () {
          $('.menuBar').addClass('hideBack');
        }, 800)),
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
function prevImage() {
  0 != currentWordNum && (currentWordNum--, changeWord());
}
function changeWord() {
  if (
    (localStorage.getItem(storeInfo + 'insight') ||
      (currentWordNum > 2 &&
        0 == $('.insightLabel').length &&
        ($('body').append('<div class="insightLabel"></div>'),
        $('.insight').addClass('fullOpacity'))),
    saveLeftOff(forExamples.length - 1),
    (soundRepeated = 0),
    $('#pauseBtn').attr('src', '../../common/pause.svg'),
    lessonNumber >= 64 && lessonNumber <= 69)
  ) {
    var e = currentWordNum,
      t = 100;
    (64 == lessonNumber
      ? ((t = 6),
        e < 3 || e > 8
          ? $('#person1').css({
              'background-image': 'url(' + oPath + 'images/person1.png)',
            })
          : $('#person1').css({
              'background-image': 'url(' + oPath + 'images/person1b.png)',
            }))
      : 65 == lessonNumber
        ? (t = 6)
        : 68 == lessonNumber
          ? (t = 4)
          : 69 == lessonNumber && (t = 10),
      e < t
        ? $('#person2').css({
            'background-image': 'url(' + oPath + 'images/person2.png)',
          })
        : $('#person2').css({
            'background-image': 'url(' + oPath + 'images/person2b.png)',
          }),
      65 == lessonNumber &&
        e >= 10 &&
        $('#person2').css({
          'background-image': 'url(' + oPath + 'images/person2c.png)',
        }));
  }
  (swapImages(),
    $('.ouinoButton').removeClass('buttonOn'),
    $('#button' + currentWordNum).addClass('buttonOn'),
    $('.ouinoButton').css({
      background: 'background-color: rgba(255,255,255,0.05)',
    }),
    $('.buttonOn').css({
      background:
        'linear-gradient(' +
        btnColor[0] +
        ',' +
        btnColor[1] +
        ') center 80% / 100% 800%',
    }));
  var o = 0.5 * numWords,
    n = parseInt(currentWordNum);
  (0 != $('#button' + (n + 1)).length && n > o
    ? $('#button' + (n + 1)).scrollintoview()
    : 0 != n && n < o
      ? $('#button' + (n - 1)).scrollintoview()
      : $('#button' + n).scrollintoview(),
    'f' == $('#selectPlayback').val().charAt(0)
      ? 'true' == lessonInit
        ? ((fastOrSlow = 'fast'),
          $('.timerMeter > .timerSpan').stop(),
          $('.timerMeter > .timerSpan').css({
            width: $('.timerMeter').width(),
          }),
          $('#mainSound').trigger('pause'),
          $('#mainSound').attr('src', oPath + 'sounds/1fast1' + soundType),
          setTimeout(function () {
            $('#mainSound').trigger('play');
          }, 500),
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
          $('#mainSound').attr('src', oPath + 'sounds/1slow1' + soundType),
          setTimeout(function () {
            $('#mainSound').trigger('play');
          }, 500),
          (soundPlaying = !0),
          toggleMusic(),
          (lessonInit = 'false'))
        : loadSlowSound(),
    0 == currentWordNum
      ? ($('.arrowControl').addClass('oneOnly'),
        $('.leftArrow').hide(),
        $('.rightArrow').show())
      : currentWordNum == numWords - 1
        ? ($('.arrowControl').addClass('oneOnly'),
          $('.leftArrow').show(),
          $('.rightArrow').hide())
        : ($('.arrowControl').removeClass('oneOnly'),
          $('.leftArrow').show(),
          $('.rightArrow').show()),
    $('.engSentence').html(engExamples[currentWordNum]));
  var s = forExamples[currentWordNum];
  if (($('.forSentence').html(s), cardRaw.length > 0)) {
    var r = lessonNumber + '|' + (parseInt(currentWordNum) + 1) + cardCate,
      a = !1;
    for (i = 0; i < cardRaw.length; i++) {
      var u = cardRaw[i].split('|');
      (u = u[0] + '|' + u[1] + '|' + u[2]) == r && (a = !0);
    }
    a
      ? ($('#flashCard').hide(), $('#flashCard2').show())
      : ($('#flashCard2').hide(), $('#flashCard').show());
  } else ($('#flashCard2').hide(), $('#flashCard').show());
  resizeText();
}
function closest(e, t) {
  for (var i = Math.max.apply(null, e), o = 0; o < e.length; o++)
    e[o] >= t && e[o] < i && (i = e[o]);
  return i;
}
function resizeText() {
  var e = 29,
    t = 21;
  ($('body').hasClass('notch') && ((e = 23), (t = 19)),
    $('.forSentence').css({ fontSize: e + 'px' }),
    $('.engSentence').hasClass('engSentenceOnly')
      ? $('.engSentence').css({ fontSize: e + 'px' })
      : $('.engSentence').css({ fontSize: '21px' }),
    $('.forSentence, .engSentence, .disSentence').css({
      'max-width': '3000px',
      'white-space': 'nowrap',
      'line-height': 'normal',
      margin: '0',
    }),
    $('.forSentence').css({ 'margin-top': '-10px' }));
  for (
    var i = $('.textWrap').width(),
      o = $('.wordSentence').width(),
      n = $('.textWrap2').width(),
      s = e;
    i > o;
    s--
  ) {
    i = $('.textWrap').width();
    var r = s;
    if (r < 23) {
      ((r = 23),
        $('.forSentence').css({
          'font-size': r + 'px',
          'max-width': o - 20,
          'white-space': 'normal',
          'line-height': r + 1 + 'px',
          margin: '0 0 8px 0',
        }));
      break;
    }
    $('.forSentence').css({ fontSize: r + 'px' });
  }
  if ($('.engSentence').hasClass('engSentenceOnly'))
    for (var a = e; n > o; a--) {
      if (((n = $('.textWrap2').width()), (u = a) < 20)) {
        ((u = 23),
          $('.engSentence').css({
            'font-size': u + 'px',
            'max-width': o - 20,
            'white-space': 'normal',
            'line-height': u + 1 + 'px',
          }));
        break;
      }
      $('.engSentence').css({ fontSize: u + 'px' });
    }
  else
    for (a = t; n > o; a--) {
      var u;
      if (((n = $('.textWrap2').width()), (u = a) < 18)) {
        ((u = t),
          $('.engSentence').css({
            'font-size': u + 'px',
            'max-width': o - 20,
            'white-space': 'normal',
            'line-height': u + 1 + 'px',
          }));
        break;
      }
      $('.engSentence').css({ fontSize: u + 'px' });
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
          o = lessonNumber + '|' + parseInt(errors[i]) + cardCate,
          n = !1;
        for (t = 0; t < cardRaw.length; t++) {
          var s = cardRaw[t].split('|');
          (s = s[0] + '|' + s[1] + '|' + s[2]) == o && (n = !0);
        }
        n || cardRaw.push(o);
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
      (cardRaw.push(e),
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
        var o = cardRaw[e].split('|');
        (o = o[0] + '|' + o[1] + '|' + o[2]) != t && i.push(cardRaw[e]);
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
    $('#bonusBtn').on('touchstart mousedown', function (e) {
      (e.preventDefault(),
        $('#loadLogo').show(),
        setTimeout(function () {
          window.location = '../../extra/index.html?convo=' + lessonNumber;
        }, 100));
    }),
    initiate());
}
function loadQuiz() {
  ($('#backBtn, #menuMain2').removeClass('darker'),
    $('.menuBar').hasClass('noBack') && $('.menuBar').removeClass('noBack'),
    $('.insight, .engToggle, .arrowControl').hide(),
    $('#background').addClass('quizMode'),
    0 == errorMode
      ? ($('.addQuizFlash').removeClass('disableFlash'),
        $('.addQuizFlash').show())
      : ($('.addQuizFlash').addClass('disableFlash'),
        $('.addQuizFlash').hide()),
    $('#dictBtn').hide(),
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
    loadButtonsQuiz(),
    1 == errorMode &&
      0 !== lessonNumber &&
      (1 === currentQuiz ? loadQuiz1() : 2 === currentQuiz && loadQuiz2()));
}
function loadQuiz1() {
  ($('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong2.svg)',
  }),
    $('#quizTimerImage').attr('src', '../../common/timerPointer.svg'),
    (disableTimer = !0),
    $('#quizConvoItemsB, #quizConvoItemsC').hide(),
    $('#quizConvoItems').show(),
    $('#quizMenu').hide(),
    (timerTime = 6e3),
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
  ($('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong2.svg)',
  }),
    $('#quizTimerImage').attr('src', '../../common/timerPointer.svg'),
    (disableTimer = !0),
    $('#quizConvoItemsB, #quizConvoItemsC').hide(),
    $('#quizConvoItems').show(),
    $('#quizMenu').hide(),
    (timerTime = 9e3),
    (quizNumQues = quizQuestions.length),
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
    var o = [];
    if (
      -1 ===
      (o = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')).indexOf(t)
    ) {
      for (o.push(t), i = 1; i <= 5; i++) o.push('0');
      (o.push('1'),
        localStorage.setItem(storeInfo + 'goalsSTORE', o.join(':')),
        (infoToUpdate = o.join(':')),
        (fieldToUpdate = 'goals'),
        updateDatabase());
    }
  }
  if (
    localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    null == localStorage.getItem(storeInfo + 'goalsSTORE')
  ) {
    var n = new Date(),
      s = [
        (n = n.getDate() + n.format('mmmm') + n.getFullYear()),
        '0',
        '0',
        '0',
        '0',
        '0',
        '1',
      ];
    (localStorage.setItem(storeInfo + 'goalsSTORE', s.join(':')),
      (infoToUpdate = s.join(':')),
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
          currentQuiz <= 2
            ? $('#quizTimer').show()
            : 4 == currentQuiz && $('#quizTimer2').show(),
          resizeButtonQuizText(),
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
        (disableTimer = !1),
        loadQuizSound());
    }, 1e3));
}
function loadQuestion() {
  if (
    ($('#hint1').addClass('fullyDisable'),
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
    1 == currentQuiz)
  ) {
    ((quizQuesNum = quizCombinedArray[currQuizNum - 1]),
      1 == errorMode && (quizQuesNum = errors[currQuizNum - 1]));
    var e = (quizNumArray = (quizNumArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40,
    ]).slice(0, numWords)).indexOf(quizQuesNum);
    ~e && quizNumArray.splice(e, 1);
    for (var t = 0; t < numToRemove.length; t++) {
      var i = quizNumArray.indexOf(numToRemove[t]);
      ~i && quizNumArray.splice(i, 1);
    }
  } else if (2 == currentQuiz) {
    ((quizQuesNum = quizQuestions[currQuizNum - 1]),
      1 == errorMode && (quizQuesNum = errors[currQuizNum - 1]));
    var o = (quizNumArray =
      quizQuesNum % 2 != 0
        ? person1Answers.slice()
        : person2Answers.slice()).indexOf(quizQuesNum);
    ~o && quizNumArray.splice(o, 1);
    for (var n = 0; n < quizNumArray.length; n++)
      if (null == engExamples[quizNumArray[n]]) {
        var s = quizNumArray.indexOf(quizNumArray[n]);
        ~s && quizNumArray.splice(s, 1);
      }
  }
  if (lessonNumber >= 64 && lessonNumber <= 69) {
    var r = quizQuesNum - 1,
      a = 100;
    (64 == lessonNumber
      ? ((a = 6),
        r < 3 || r > 8
          ? $('#quizConvoImg1').css({
              'background-image': 'url(' + oPath + 'images/person1.png)',
            })
          : $('#quizConvoImg1').css({
              'background-image': 'url(' + oPath + 'images/person1b.png)',
            }))
      : 65 == lessonNumber
        ? (a = 6)
        : 68 == lessonNumber
          ? (a = 4)
          : 69 == lessonNumber && (a = 10),
      r < a
        ? $('#quizConvoImg2').css({
            'background-image': 'url(' + oPath + 'images/person2.png)',
          })
        : $('#quizConvoImg2').css({
            'background-image': 'url(' + oPath + 'images/person2b.png)',
          }),
      65 == lessonNumber &&
        r >= 10 &&
        $('#quizConvoImg2').css({
          'background-image': 'url(' + oPath + 'images/person2c.png)',
        }));
  }
  1 == currentQuiz
    ? ((timerWait = 100), quizActions1())
    : 2 == currentQuiz
      ? ((timerWait = 100), quizActions2())
      : (3 == currentQuiz || 4 == currentQuiz) && quizActions3();
}
function quizActions1() {
  ($('.multiBtnFont').css({ opacity: '1' }),
    quizQuesNum % 2 != 0
      ? ($('#quizConvoImg1').show(), $('#quizConvoImg2').hide())
      : ($('#quizConvoImg2').show(), $('#quizConvoImg1').hide()),
    $('#hint1, #hint2, #hint3').css({ visibility: 'visible' }));
  var e = shuffle(quizNumArray);
  ((e = e.slice(0, 3)).push(quizQuesNum),
    (e = shuffle(e)),
    (quizWord = forExamples[quizQuesNum - 1]),
    $('#quizSentenceConvo').html('Click on the English translation.'),
    $('#quizSentenceContainer').removeClass('fullWidth'),
    $('#quizConvoImg1, #quizConvoImg2').removeClass('hidePic'),
    $('#quizChoice1').val(e[0]),
    $('#quizChoice2').val(e[1]),
    $('#quizChoice3').val(e[2]),
    $('#quizChoice4').val(e[3]),
    $('#quizItem1').html(engExamples[e[0] - 1]),
    $('#quizItem2').html(engExamples[e[1] - 1]),
    $('#quizItem3').html(engExamples[e[2] - 1]),
    $('#quizItem4').html(engExamples[e[3] - 1]),
    setTimeout(function () {
      resizeButtonQuizText();
    }, 1));
}
function quizActions2() {
  ($('.multiBtnFont').css({ opacity: '1' }),
    quizQuesNum % 2 != 0
      ? ($('#quizConvoImg1').show(), $('#quizConvoImg2').hide())
      : ($('#quizConvoImg2').show(), $('#quizConvoImg1').hide()),
    $('#hint1, #hint2, #hint3').css({ visibility: 'visible' }));
  var e = shuffle(quizNumArray);
  ((e = e.slice(0, 3)).push(quizQuesNum),
    (e = shuffle(e)),
    (quizWord = forExamples[quizQuesNum - 1]),
    $('#quizSentenceConvo').html('Click on the BEST answer to the question.'),
    $('#quizSentenceContainer').removeClass('fullWidth'),
    $('#quizConvoImg1, #quizConvoImg2').removeClass('hidePic'),
    $('#quizChoice1').val(e[0]),
    $('#quizChoice2').val(e[1]),
    $('#quizChoice3').val(e[2]),
    $('#quizChoice4').val(e[3]),
    $('#quizItem1').html(forExamples[e[0]]),
    $('#quizItem2').html(forExamples[e[1]]),
    $('#quizItem3').html(forExamples[e[2]]),
    $('#quizItem4').html(forExamples[e[3]]),
    setTimeout(function () {
      resizeButtonQuizText();
    }, 1));
}
function quizActions3() {}
function showHint1() {
  ($('#hint1').css({ visibility: 'hidden' }),
    (currentPts -= 5),
    $('#currentScore').text(currentPts),
    $('#hintPts1').stop(!0, !0),
    $('#hintPts1').css({ opacity: '1' }),
    setTimeout(function () {
      $('#hintPts1').transition({ opacity: '0' });
    }, 2e3),
    (disableTimer = !0),
    loadQuizSound());
}
function showHint2() {
  ($('#hint2').css({ visibility: 'hidden' }),
    (currentPts -= 10),
    $('#currentScore').text(currentPts),
    $('#hintPts2').stop(!0, !0),
    $('#hintPts2').css({ opacity: '1' }),
    setTimeout(function () {
      $('#hintPts2').transition({ opacity: '0' });
    }, 2e3),
    0 != $('.quizImagePortrait').length
      ? ($('#quizSentenceConvo').html(''),
        $('#quizSentenceConvo').hide(),
        $('#quizSentenceContainer').addClass('fullWidth'),
        $('#quizConvoImg1, #quizConvoImg2').addClass('hidePic'),
        setTimeout(function () {
          ($('#quizSentenceConvo').html(quizWord),
            $('#quizSentenceConvo').fadeIn());
        }, 300))
      : ($('#quizSentenceContainer').removeClass('fullWidth'),
        $('#quizConvoImg1, #quizConvoImg2').removeClass('hidePic'),
        $('#quizSentenceConvo').html(quizWord)));
}
function showHint3() {
  ($('#hint3').css({ visibility: 'hidden' }),
    (currentPts -= 20),
    $('#currentScore').text(currentPts),
    $('#hintPts3').stop(!0, !0),
    $('#hintPts3').css({ opacity: '1' }),
    setTimeout(function () {
      $('#hintPts3').transition({ opacity: '0' });
    }, 2e3));
  var e = 0;
  ($('#quizChoice1').val() != quizQuesNum &&
    ($('#quizItem1').css({ opacity: '0' }), e++),
    $('#quizChoice2').val() != quizQuesNum &&
      ($('#quizItem2').css({ opacity: '0' }), e++),
    $('#quizChoice3').val() != quizQuesNum &&
      2 != e &&
      ($('#quizItem3').css({ opacity: '0' }), e++),
    $('#quizChoice4').val() != quizQuesNum &&
      2 != e &&
      ($('#quizItem4').css({ opacity: '0' }), e++));
}
function checkClickAnswer(e) {
  (setTimeout(function () {
    ($('.quizChoices').css({ 'pointer-events': 'none' }),
      setTimeout(function () {
        $('.quizChoices').css({ 'pointer-events': 'auto' });
      }, 200));
  }, 1),
    e.val() == quizQuesNum
      ? ($('#mainSound').trigger('pause'),
        $('#quizItself').css({ 'pointer-events': 'none' }),
        setTimeout(function () {
          $('#quizItself').css({ 'pointer-events': 'auto' });
        }, 1e3),
        $('#quizTimerPointer').stop(),
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
              $('#goodAnswerPic, #goodAnswer').animate({ opacity: '0' });
            }, 500),
            setTimeout(function () {
              ((disableTimer = !1),
                loadQuizSound(),
                $('#quizItself').animate({ opacity: '1' }));
            }, 100))
          : setTimeout(function () {
              ($('#goodAnswerPic, #goodAnswer').css({ opacity: '0' }),
                $('#quizDoneSentence').show(),
                doneQuiz());
            }, 600))
      : (currentErrors++,
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
          $('#wrongAnswer').transition({ opacity: '0' });
        }, 1e3)));
}
function startLesson() {
  ($('.menuBar').hasClass('noBack') && $('.menuBar').removeClass('noBack'),
    $('#backBtn, #menuMain2').removeClass('darker'),
    findLeftOff(),
    $('#background').removeClass('quizMode'),
    $('#dictBtn').show(),
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
    var o = [];
    if (
      -1 ===
      (o = localStorage.getItem(storeInfo + 'goalsSTORE').split(':')).indexOf(t)
    ) {
      for (o.push(t), i = 1; i <= 5; i++) o.push('0');
      (o.push('1'),
        localStorage.setItem(storeInfo + 'goalsSTORE', o.join(':')),
        (infoToUpdate = o.join(':')),
        (fieldToUpdate = 'goals'),
        updateDatabase());
    }
  }
  if (
    localStorage.getItem(storeInfo + 'goalsSTORE').length <= 3 ||
    null == localStorage.getItem(storeInfo + 'goalsSTORE')
  ) {
    var n = new Date(),
      s = [
        (n = n.getDate() + n.format('mmmm') + n.getFullYear()),
        '0',
        '0',
        '0',
        '0',
        '0',
        '1',
      ];
    (localStorage.setItem(storeInfo + 'goalsSTORE', s.join(':')),
      (infoToUpdate = s.join(':')),
      (fieldToUpdate = 'goals'),
      updateDatabase());
  }
  if (
    ($('#pauseWrap').is(':visible') && $('#pauseWrap').hide(),
    $('#quizTimerPointer').is(':visible') &&
      ($('#quizTimerPointer').stop(!0, !0), clearTimeout(timerDelay)),
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
  ($('.insight, .engToggle, .arrowControl').show(),
    1 == soundSlideEvent &&
      (document
        .getElementById('mainSound')
        .removeEventListener('ended', animateOkay),
      (soundSlideEvent = !1)),
    $('#startCover').is(':visible')
      ? ($('#startCover').hide(),
        $('.ouinoContent').css({ visibility: 'visible', opacity: '0.001' }),
        $('.ouinoContent').animate({ opacity: '1' }, 400))
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
    $('#pauseBtn, #person1, #person2').on('click', togglePause),
    $('#pauseWrap').on('click', togglePause),
    $('.ouinoButton').on('click', buttonClicked),
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
      })),
    $('.wordSentence').on('click', function (e) {
      -1 != e.target.id.indexOf('flash') ||
        e.target.classList.contains('rightArrow') ||
        e.target.classList.contains('leftArrow') ||
        ($('.wordSentence').addClass('wsHover'),
        setTimeout(function () {
          $('.wordSentence').removeClass('wsHover');
        }, 220),
        'fastFirst' == $('#selectPlayback').val() ||
        'fastOnly' == $('#selectPlayback').val()
          ? loadFastSound()
          : loadSlowSound());
    }));
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
    $('.quizChoices').css({
      background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    }),
    'mobile' == currentDevice
      ? ($('#quizBtn1').on('touchstart mousedown', function (e) {
          (e.preventDefault(), loadQuiz1());
        }),
        $('#quizBtn2').on('touchstart mousedown', function (e) {
          (e.preventDefault(), loadQuiz2());
        }),
        $('.quizChoices').on('touchmove', function (e) {
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
        $('#hint1').on('touchstart mousedown', function (e) {
          (e.preventDefault(), showHint1(), playSprite('shimmer'));
        }),
        $('#hint2').on('touchstart mousedown', function (e) {
          (e.preventDefault(), showHint2(), playSprite('shimmer'));
        }),
        $('#hint3').on('touchstart mousedown', function (e) {
          (e.preventDefault(), showHint3(), playSprite('shimmer'));
        }),
        $('.quizChoices').on('touchstart mousedown', function (e) {
          (e.preventDefault(), checkClickAnswer($(this)));
        }))
      : ($('#quizBtn1').on('click', loadQuiz1),
        $('#quizBtn2').on('click', loadQuiz2),
        $('#quizGoBack').on('click', function () {
          ((errors = []), (errorMode = !1), loadQuiz());
        }),
        $('#quizPreloadStart').on('click', startQuiz),
        $('#quizDoneContinue').on('click', toggleMenu),
        $('#hint1').on('click', function () {
          (showHint1(), playSprite('shimmer'));
        }),
        $('#hint2').on('click', function () {
          (showHint2(), playSprite('shimmer'));
        }),
        $('#hint3').on('click', function () {
          (showHint3(), playSprite('shimmer'));
        }),
        $('.allHints').hover(function () {
          $(this).toggleClass('quizIconBig');
        }),
        $('.allHints').on('mouseenter', function () {
          playSprite('swoosh');
        }),
        $('.allHints').hover(function () {
          $(this).toggleClass('fullOpacity');
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
        $('.quizChoices').on('click', function () {
          checkClickAnswer($(this));
        }),
        $('.quizChoices').hover(function () {
          $(this).toggleClass('fullOpacity');
        })));
}
function loadQuizSound() {
  $('#mainSound').trigger('pause');
  var e = fastSounds[quizQuesNum - 1];
  ($('#mainSound').attr('src', e),
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
  }, 1e3);
}
function loadFirstSound() {
  ($('#mainSound').attr('src', '../../common/blank' + soundType),
    document.getElementById('mainSound').load(),
    document
      .getElementById('mainSound')
      .addEventListener('canplay', playQuizSound));
}
function afterSoundAction() {
  if (($('#hint1').removeClass('fullyDisable'), !disableTimer))
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
        : ($('#quizDoneSentence').show(),
          void setTimeout(function () {
            doneQuiz();
          }, 500))
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
    $('#quizTimerPointer').stop(!0, !0),
    (timerDelay = setTimeout(function () {
      var e = $('#quizTimer').width() - 20;
      ($('#quizTimerImage').css({
        '-webkit-transform': 'translate3d(0%, 0, 0)',
        transform: 'translate3d(0%, 0, 0)',
      }),
        $('#quizTimerPointer').stop(!0, !0),
        $('#quizTimerPointer').css({ left: '0px' }, 10),
        $('#quizTimerPointer')
          .clearQueue()
          .animate({ opacity: '1' }, 200, function () {
            ((time4 = setTimeout(function () {
              ($('#quizTimerImage').css({
                '-webkit-transform': 'translate3d(-50%, 0, 0)',
                transform: 'translate3d(-50%, 0, 0)',
              }),
                fluentWrong(),
                playSprite('quizBad'),
                currentErrors++,
                -1 == errors.indexOf(quizQuesNum) && errors.push(quizQuesNum),
                $('#currentErrors').text(currentErrors));
            }, 0.97 * timerTime)),
              $('#quizTimerPointer').animate(
                { left: e + 'px' },
                timerTime,
                'linear',
              ));
          }));
    }, 1e3)));
}
function shuffle(e) {
  for (
    var t, i, o = e.length;
    o;
    t = Math.floor(Math.random() * o), i = e[--o], e[o] = e[t], e[t] = i
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
      $('#triangle1').show(),
      $('#triangle2').hide(),
      null == sessionStorage.LOGGEDIN && loadLogIn(),
      $('.timerMeter > .timerSpan').css({ background: btnColor[0], width: 0 }),
      $('.lessonTitle').text(lessonTitle),
      $('.engToggle').on('click', function () {
        'both' == $('#selectText').val()
          ? ($('#selectText').val('foreign'), toggleText2())
          : ($('#selectText').val('both'), toggleText2());
      }),
      'mobile' != currentDevice &&
        $('.engToggle').hover(function () {
          $('.engToggle').toggleClass('engHover');
        }),
      $('.insight').on('click', loadInsight),
      'mobile' != currentDevice &&
        $('.insight').hover(function () {
          $('.insight').toggleClass('insightHover');
        }),
      $('.buttonContainer').append(buttonCreate),
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
      $('#person1, #quizConvoImg1').css({
        'background-image': 'url(' + oPath + 'images/person1.png)',
      }),
      $('#person2, #quizConvoImg2').css({
        'background-image': 'url(' + oPath + 'images/person2.png)',
      }),
      loadButtonsMain(),
      $(window).resize(function () {
        (resizePage(),
          setTimeout(function () {
            resizePage();
          }, 200));
      }),
      $(window).load(function () {
        resizePage();
      }),
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
    var e = getUrlParam('refer', '');
    '' != e &&
      ($('body').append("<div id='transCover'><div>"),
      setTimeout(function () {
        ('lesson' == e
          ? ((loadLast = !1),
            startLesson(),
            ('pwa' != osType && 'demo' != osType) || togglePause())
          : 'quiz' == e && loadQuiz(),
          $('#transCover').fadeOut());
      }, 800));
  }));
var dateFormat = (function () {
  var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
    t =
      /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    i = /[^-+\dA-Z]/g,
    o = function (e, t) {
      for (e = String(e), t = t || 2; e.length < t; ) e = '0' + e;
      return e;
    };
  return function (n, s, r) {
    var a = dateFormat;
    if (
      (1 != arguments.length ||
        '[object String]' != Object.prototype.toString.call(n) ||
        /\d/.test(n) ||
        ((s = n), (n = void 0)),
      (n = n ? new Date(n) : new Date()),
      isNaN(n))
    )
      throw SyntaxError('invalid date');
    'UTC:' == (s = String(a.masks[s] || s || a.masks.default)).slice(0, 4) &&
      ((s = s.slice(4)), (r = !0));
    var u = r ? 'getUTC' : 'get',
      l = n[u + 'Date'](),
      d = n[u + 'Day'](),
      c = n[u + 'Month'](),
      m = n[u + 'FullYear'](),
      g = n[u + 'Hours'](),
      p = n[u + 'Minutes'](),
      h = n[u + 'Seconds'](),
      v = n[u + 'Milliseconds'](),
      $ = r ? 0 : n.getTimezoneOffset(),
      f = {
        d: l,
        dd: o(l),
        ddd: a.i18n.dayNames[d],
        dddd: a.i18n.dayNames[d + 7],
        m: c + 1,
        mm: o(c + 1),
        mmm: a.i18n.monthNames[c],
        mmmm: a.i18n.monthNames[c + 12],
        yy: String(m).slice(2),
        yyyy: m,
        h: g % 12 || 12,
        hh: o(g % 12 || 12),
        H: g,
        HH: o(g),
        M: p,
        MM: o(p),
        s: h,
        ss: o(h),
        l: o(v, 3),
        L: o(v > 99 ? Math.round(v / 10) : v),
        t: 12 > g ? 'a' : 'p',
        tt: 12 > g ? 'am' : 'pm',
        T: 12 > g ? 'A' : 'P',
        TT: 12 > g ? 'AM' : 'PM',
        Z: r ? 'UTC' : (String(n).match(t) || ['']).pop().replace(i, ''),
        o:
          ($ > 0 ? '-' : '+') +
          o(100 * Math.floor(Math.abs($) / 60) + (Math.abs($) % 60), 4),
        S: ['th', 'st', 'nd', 'rd'][
          l % 10 > 3 ? 0 : (((l % 100) - (l % 10) != 10) * l) % 10
        ],
      };
    return s.replace(e, function (e) {
      return e in f ? f[e] : e.slice(1, e.length - 1);
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
