///OS START
var oPath = '';
var oPath2 = '../';
if (osType == 'androidSTORE') {
  oPath =
    'https://www.ouinolanguages.com/app/' +
    lessonLanguage +
    '/convo/' +
    lessonNumber +
    '/';
  oPath2 = 'https://www.ouinolanguages.com/app/' + lessonLanguage + '/convo/';
}
//OS END

var extraNote =
  'The lessons in the conversation section are colloquial and use a conversational style. The language may not always be 100% grammatically correct, but accurately shows how many native speakers speak.';
///DO NOT MODIFY
var currentSection = 'Conversations';
var currentSecShort = 'convo';
var quizTitle1 = 'TRANSLATION SNAP';
var quizTitle2 = 'QUICK RESPONSE';
var currentProgram = 'Complete';
var errors = [];
var errorMode = false;
var slidesPres = [15, 16];

////2020 EXTRA START////////
var cardCate = '|d';
var cardRaw = [];
function getUrlVars() {
  var r = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (n, e, t) {
    r[e] = t;
  });
  return r;
}
function getUrlParam(r, n) {
  var e = n;
  return (window.location.href.indexOf(r) > -1 && (e = getUrlVars()[r]), e);
}
function loadAudioCourse() {
  $('#loadLogo').show();
  setTimeout(function () {
    window.location = '../../audio/index.html?convo=' + lessonNumber;
  }, 100);
}
///2020 EXTRA END////////////////////////

////////////////////////
var quizDescription1 =
  'Quick! Click on the English equivalent of the spoken dialogue as fast as possible to get the maximum amount of points. You can also buy hints to help you along the way. Try to finish with as many points as you can!';
var quizDescription2 =
  'Take part of the conversation! Click on the most appropriate response to the question asked by the native speaker. The quicker you answer, the more points you score! Use hints to help you if need be!';
var numWords = engExamples.length;
quizConvoArray = shuffle(quizConvoArray);
var quizCombinedArray = quizConvoArray;

///2020CHANGE

var greenBub = [];
var redBub = [];
var blueBub = [];
var orangeBub = [];
var yellowBub = [];
var violetBub = [];
var turquoiseBub = [];
var greyBub = [];

//4.1 Start
greenBub = [2, 3, 14, 17, 24, 26, 33, 37, 42, 43, 44, 52, 55, 60, 64, 66, 73];
redBub = [
  5, 6, 8, 9, 18, 16, 25, 27, 29, 38, 40, 41, 46, 48, 49, 50, 53, 59, 69, 70,
  71,
];
blueBub = [
  1, 10, 12, 13, 19, 20, 21, 22, 30, 31, 32, 35, 36, 39, 54, 56, 58, 62, 65, 67,
  74, 75, 76, 77,
];
orangeBub = [4, 7, 11, 15, 23, 28, 47, 61];
greyBub = [34, 45, 51, 57, 63, 68, 72, 78];
//4.1 End

//2020 EXTRA START
if (greenBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#267819', '#1d3d0d', '#267819', '#1d3d0d'];
} else if (orangeBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#b5441b', '#962B17', '#b5441b', '#962B17'];
} else if (yellowBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#ff600a', '#a32600', '#ff600a', '#a32600'];
} else if (redBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#bd2020', '#690c0c', '#bd2020', '#690c0c'];
} else if (blueBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#0a5d90', '#063561', '#0a5d90', '#063561'];
} else if (violetBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#27488a', '#102557', '#27488a', '#102557'];
} else if (turquoiseBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#206d8a', '#0e3236', '#206d8a', '#0e3236'];
} else if (greyBub.indexOf(lessonNumber) !== -1) {
  var btnColor = ['#474f52', '#2a3133', '#474f52', '#2a3133'];
}
//2020 EXTRA END

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// VOCAB ONLY FONCTIONS INSIDE LOAD PRESENTATION

function loadPresentation() {
  ///////////////////////////CREATE BUTTONS

  buttonCreate = '';
  for (var num = 0; num < engExamples.length; num++) {
    buttonCreate =
      buttonCreate +
      '<input type="submit" value="' +
      engExamples[num] +
      '" class="ouinoButton" id="button' +
      num +
      '">';
  }

  ///////////////////////////CREATE SOUND ARRAY
  fastSounds = [];
  slowSounds = [];
  var numSounds = numWords / 2 + 0.5;

  for (var numD = 1; numD <= numSounds; numD++) {
    fastSounds.push(oPath + 'sounds/1fast' + numD + soundType);
    fastSounds.push(oPath + 'sounds/2fast' + numD + soundType);
    slowSounds.push(oPath + 'sounds/1slow' + numD + soundType);
    slowSounds.push(oPath + 'sounds/2slow' + numD + soundType);
  }

  if (numWords % 2 != 0) {
    fastSounds.pop();
    slowSounds.pop();
  }

  ///////////END LOAD PRESENTATION
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DETERMINE BUTTON CLICKED
function buttonClicked() {
  currentWordNum = $(this).attr('id').split('button').join('');
  currentWordNum = parseInt(currentWordNum);
  changeWord();
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////QUIZ RESIZE
function resizeQuiz() {
  viewportHeight = $('body').height() - 45;

  ///OS START
  if ($('body').hasClass('notch')) {
    viewportHeight = viewportHeight - 75;
    $('.menuBar').removeClass('hideBack');
  }
  ////ANDROID
  if ($('body').hasClass('android')) {
    viewportHeight = viewportHeight - 20;
  }

  $('.menuBtnContainer').show();
  $('.menuTitleContainer').hide();
  ///OS END

  viewportWidth = $('html').innerWidth();
  screenRatio = viewportWidth / viewportHeight;

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

  if ($('body').hasClass('notch')) {
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
  if (currentQuiz >= 1) {
    ///BOTH
    var screenRatio2 = $('#quizContent').width() / $('#quizContent').height();

    if (screenRatio > 1) {
      ///LANDSCAPE
      $('.quizChoices').css({ height: '20%' });
      $('#quizConvoItems').css({ width: '66.1%' });
      $('#allHintsContainer').css({ height: '20%' });
      ///
      //Bubble Adjust
      if (screenRatio2 >= 1.4) {
        $('#quizSentenceContainer').css({ width: '73%', right: '-1%' });
      } else {
        $('#quizSentenceContainer').css({ width: '88%', right: '0%' });
      }
      ///Align Picture
      $('#quizConvoImg1,  #quizConvoImg2').removeClass('quizImagePortrait');
      if (screenRatio2 >= 2) {
        $('#quizConvoImg1,  #quizConvoImg2').css({
          'background-position': 'center top',
        });
      } else {
        $('#quizConvoImg1,  #quizConvoImg2').css({
          'background-position': 'center bottom',
        });
      }
      $('.quizConvoSurround, #quizConvoImg1,  #quizConvoImg2').css({
        height: $('#quizContent').height() - 70 + 'px',
      });
      $('#quizConvoImg1').css({ 'border-radius': '0 0 0 10px' });
      $('#quizConvoImg2').css({ 'border-radius': '0 0 10px 0' });
    } else {
      ///PORTRAIT
      $('.quizChoices').css({ height: '20%' });
      $('#quizConvoItems').css({ width: '96%' });
      $('#allHintsContainer').css({ height: '20%' });

      if ($('body').hasClass('notch')) {
        $('#quizSentenceContainer').css({ width: '60%', right: '-1%' });
      } else {
        $('#quizSentenceContainer').css({ width: '65%', right: '-1%' });
      }
      $('.quizConvoSurround').css({
        height: $('#quizContent').height() - 70 + 'px',
      });
      $('#quizConvoImg1,  #quizConvoImg2').addClass('quizImagePortrait');
      $('#quizConvoImg1').css({ 'border-radius': '0 0 20px 0' });
      $('#quizConvoImg2').css({ 'border-radius': '0 0 0 20px' });
    }
  }

  setTimeout(function () {
    resizeButtonQuizText();
  }, 20);

  /////
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START BUTTON TEXT RESIZE
function resizeButtonQuizText() {
  ///////END FOR
  ////IMPORTANT NOTE: RESIZE PICTURE CONTINUED
  if (screenRatio <= 1) {
    var contHeight =
      $('#quizContent').height() - $('#quizConvoItems').height() - 70;
    $('#quizConvoImg1,  #quizConvoImg2').css({
      top: '20px',
      height: contHeight + 'px',
    });
  }
  ///END pic resize
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////conversations RESIZE
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
      $('.menuBar').removeClass('hideBack');
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
  ///OS START
  if ($('body').hasClass('notch')) {
    viewportHeight = viewportHeight - 45;
  }

  viewportWidth = $('html').innerWidth();
  var elementHeight;
  var buttonHeight;
  var screenRatio = viewportWidth / viewportHeight;
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

  var personHeight;

  $('.wordSentence').css({ 'max-width': '900px' });

  //////////////////////////START LANDSCAPE MODE
  if (screenRatio >= 1) {
    $('#quizSentenceContainer').removeClass('fullWidth');
    $('#quizConvoImg1, #quizConvoImg2').removeClass('hidePic');
    $('.ouinoContent').removeClass('onePerson');
    $('.arrowControl').css({
      right: $('#person1').width() - 50 + 'px',
      left: 'auto',
    });
    $('.ouinoContent').removeClass('portrait');
    personHeight = viewportHeight - 240;
    if (viewportWidth >= 1800) {
      personHeight = personHeight + 100;
    }

    $('#person1, #person2').css({
      width: personHeight * 0.63 + 'px',
      height: personHeight + 'px',
    });
    if (viewportWidth >= 1800) {
      personHeight = personHeight - 180;
    }

    $('.buttonContainer').css({ height: personHeight - 80 + 'px' });
    $('.wordSentence').css({ bottom: personHeight + 'px', top: 'auto' });
    $('.buttonContainer').css({
      width: viewportWidth - $('#person1').width() * 2 + 'px',
      'margin-left': 'auto',
    });

    if ($('.buttonContainer').width() < 360) {
      $('.ouinoContent').addClass('onePerson');
      $('.arrowControl').css({
        left: $('#person1').width() - 50 + 'px',
        right: 'auto',
      });
      $('.buttonContainer').css({
        width: viewportWidth - $('#person1').width() - 40 + 'px',
        'margin-left': $('#person1').width() + 'px',
      });
    } else if ($('.buttonContainer').width() > 900) {
      $('.wordSentence').css({
        'max-width': viewportWidth - $('#person1').width() * 2 + 110 + 'px',
      });
    }
  } else {
    //////////////////////////START PORTRAIT MODE

    $('.ouinoContent').addClass('portrait');
    $('.ouinoContent').addClass('onePerson');

    if ($('body').hasClass('notch')) {
      $('.arrowControl').css({
        left: 'auto',
        right: $('.buttonContainer').width() + 20 + 'px',
      });
      personHeight = viewportHeight - 250;
      $('#person1, #person2').css({
        width: personHeight * 0.63 + 'px',
        height: personHeight + 'px',
      });
      $('.buttonContainer').css({
        height: $('body').height() * 0.9 - 280 + 'px',
      });
      $('.buttonContainer').css({
        width: $('body').width() - $('#person1').width() - 10 + 'px',
        'margin-left': $('#person1').width() - 1 + 'px',
      });
      $('.wordSentence').css({ bottom: 'auto', top: '50px' });
    } else {
      $('.arrowControl').css({
        left: $('#person1').width() - 50 + 'px',
        right: 'auto',
      });
      personHeight = viewportHeight - 280;
      $('.buttonContainer').css({
        height: $('body').height() * 0.9 - 228 + 'px',
      });
      $('.buttonContainer').css({
        width: viewportWidth - $('#person1').width() - 32 + 'px',
        'margin-left': $('#person1').width() + 'px',
      });
      $('#person1, #person2').css({
        width: personHeight * 0.63 + 'px',
        height: personHeight + 'px',
      });
      $('.wordSentence').css({ bottom: 'auto', top: '10%' });
    }
  }

  if (
    $('.buttonContainer').width() < 500 &&
    $('.ouinoContent').hasClass('onePerson') &&
    !$('body').hasClass('notch')
  ) {
    $('.ouinoButton').addClass('alignLeft');
  } else {
    $('.ouinoButton').removeClass('alignLeft');
  }

  //////////////START CHANGE BUTTON AND TEXT

  resizeButtonText();
  resizeText();
  resizeTitle();
  //////////////END CHANGE BUTTON AND TEXT
}

function resizeButtonText() {
  if ($('.buttonContainer').width() < 200) {
    for (var num = 0; num < numWords; num++) {
      $('#button' + num).val(num + 1);
    }
    $('.ouinoButton').removeClass('alignLeft');
    return;
  }

  for (var num = 0; num < numWords; num++) {
    $('#button' + num).val(engExamples[num]);
  }
  var btnWidth = $('.buttonContainer').width();
  var maxChar = btnWidth / 9;
  for (var num = 0; num < numWords; num++) {
    if (engExamples[num].length > maxChar) {
      var shortWord = engExamples[num].slice(0, maxChar) + '...';
      shortWord = shortWord
        .split(',...')
        .join('...')
        .split(' ...')
        .join('...')
        .split('....')
        .join('...');
      $('#button' + num).val(shortWord);
    }
  }
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
var audioSprite;
var fastOverwrite = false;
var knowledgeStars;
var restartedLesson;
var quizScores;
var pauseTwo;
var registerLoaded;
var passwordLoaded;
var viewportHeight;
var viewportWidth;
var screenRatio;
var currentWordNum = 0;
var dragNum;
var mouseIsDown;
var dragPosition;
var currentMusic;
var picToggle = 1;
var soundPlaying = false;
var wordTimer;
var mySound;
var madeError;
var quizWord;
var buttonCreate;
var soundLessonEvent = false;
var soundQuizEvent = false;
var soundSlideEvent = false;
var fastSounds;
var checkAccent;
var slowSounds;
var foundArticle;
var quizGoodAnswer;
var timerWait;
var charsToAdd;
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
var submitted;
var quizNumQues;
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
  't show me tips</div></section><div id="fontPreload1"></div><div id="fontPreload2"></div><div class="instructions"><img class="quizBannerImage" src="../../common/redArrow.svg"><b id="arrowLabel"></b></div><div class="menuBar"><img src="../../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><div id="quizBanner"><div class="quizBannerItem"><img class="quizBannerImage tenPaddingLeft" src="../../common/quizLogo.svg"><b id="questionNum" class="yellowText">1</b> of <b id="numberOfQues" class="yellowText"></b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/warning.svg"><b id="quizTxt1">Errors: </b><b id="currentErrors" class="yellowText">0</b></div><div class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizScore.svg"><b id="quizTxt2">Score: </b><b id="currentScore" class="yellowText">0</b></div><div id="quizBannerItem2" class="quizBannerItem"><img class="quizBannerImage" src="../../common/quizBest.svg">Best: <b id="bestScore" class="yellowText">78%</b></div><div id="quizBannerItem3" class="quizBannerItem"><img id="bannerMedal" class="quizBannerImage" src="../../common/medalIcon0.svg">Won: <b id="bestMedal" class="yellowText">None</b></div></div><span class="menuTitleContainer alignVerticalItem"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="dictBtn" src="../../dict/common/dict.png" class="smallIcon" /><img id="pauseBtn" src="../../common/play.svg" class="smallIcon"/><img id="menuBtn" src="../../common/menu.svg" class="smallIcon"/><img id="optionBtn" src="../../common/gear.svg" class="smallIcon"/><img id="backBtn" src="../../common/back.svg" class="smallIcon"/></span></div><div id="pauseWrap" class="wrapper3"><img id="pauseWrapLogo" src="../../common/pause2.svg" class="loader"/></div><div id="endWrap" class="wrapper darkWrap"><div class="optionsIn gradientColor alignVerticalWin"><img id="endSideLogo" src="../../common/blank.svg" class="menuLogo"/><table class="endTable"><tr><th colspan="4"><h2 class="menuTitle2">LESSON COMPLETED</h2></th></tr><tr><td class="menuBox2" id="menuQuiz2"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox2" id="menuRestart2"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox2" id="menuOptions"><img src="../../common/menuIcon7.svg" class="menuIcon"/><h2 class="centerMenuItems">Choose<br>Options</h2></td><td class="menuBox2" id="menuNext2"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr></table><div class="knowledgeBox" colspan="3"><h2 class="starTitle">Choose Knowledge Level</h2><img src="../../common/star0.svg" class="menuStars"/><h6 class="tinyText">Change Knowledge Level?</h6><div></div></div></div></div><div id="starWrap" class="wrapper starBackground"><div class="optionsIn gradientColor alignVerticalWin"><img id="starSideLogo" src="../../common/menuIcon8.svg" class="menuLogo"/><table class="starTable"><tr><td><h2 class="menuTitle">CHOOSE YOUR LEVEL</h2></td></tr><tr id="star1" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">LOW</h3><h5 class="menuItemDescription">I' +
  "'" +
  'm confused.</h5><img class="starImages" src="../../common/star1.svg"/></td></tr><tr id="star2" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">AVERAGE</h3><h5 class="menuItemDescription">I need to revise.</h5><img class="starImages" src="../../common/star2.svg"/></td></tr><tr id="star3" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">GOOD</h3><h5 class="menuItemDescription">Pretty good so far.</h5><img class="starImages" src="../../common/star3.svg"/></td></tr><tr id="star4" class="starSelect"><td class="starLeftItems"><h3 class="menuItem">EXCELLENT</h3><h5 class="menuItemDescription">Everything is clear!</h5><img class="starImages" src="../../common/star4.svg"/></td></tr></table></div></div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart<br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous<br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next<br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;<br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home<br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../../common/logoConvo.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems"></h2></td></tr></table></div></div><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="../../common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div class="timerMeter"><span class="timerSpan"></span></div><h4 id="learningTip"></h4><audio id="mainSound" src=""></audio><audio id="mainMusic" loop src=""></audio><audio id="sfxSprite"></audio>';

var lessonAppend =
  '<figure class="arrowControl"><div class="leftArrow"></div><div class="rightArrow"></div></figure><div id="orientationMessage"><p>Please rotate your device to portrait mode or expand the window height.</p></div><div class="engToggle"></div><div class="insight"></div><main class="ouinoContent selectOff"><div id="person1"></div><div id="person2" class="personOff"></div><section class="wordSentence"><div id="flashCard"></div><div id="flashCard2"></div><div id="bubble"><img id="triangle1" src="../../common/triangle1.svg"><img id="triangle2" src="../../common/triangle2.svg"></div><div class="alignVerticalBubble"><div class="textWrap3"><h6 class="disSentence">-Text Disabled-</h6></div><div class="textWrap"><h6 class="forSentence"></h6></div><br><div class="textWrap2"><h6 class="engSentence"></h6></div></div></section><aside class="buttonContainer" style="-webkit-overflow-scrolling: touch;"></aside><div class="buttonWrap"></div></main>';

var quizAppend =
  '<img id="goodAnswer" class="quizLogo" src="../../common/quizGood.svg"><img id="wrongAnswer" class="quizLogo" src="../../common/quizWrong.svg"><img id="newHighScore" src="../../common/newScore.svg"><img id="newScoreUpdate" src="../../common/newScoreUpdate.svg"><img id="hintPts1" class="hintPts" src="../../common/hintPts1.svg"><img id="hintPts2" class="hintPts" src="../../common/hintPts2.svg"><img id="hintPts3" class="hintPts" src="../../common/hintPts3.svg"><main id="quizContent" class="gradientColor3 quizDesktop"><table id="quizMenu"><tr><th colspan="2" class="quizTitle">CHOOSE YOUR LEARNING ACTIVITY</th></tr><tr><td id="quizBtn1" class="quizType"><div id="sMedal1" class="smallMedal"></div><h2 class="chooseQuizText">TRANSLATION <br>SNAP</h2><img class="chooseQuizIcon" src="../../common/quizconvo1.svg"/><h2 class="chooseQuizText2">Difficulty: Easy</h2></td><td id="quizBtn2" class="quizType"><div id="sMedal2" class="smallMedal"></div><h2 class="chooseQuizText">QUICK <br>RESPONSE</h2><img class="chooseQuizIcon" src="../../common/quizconvo2.svg"/><h2 class="chooseQuizText2">Difficulty: Average</h2></td></tr><tr><td colspan="2" class="quizType" id="bonusBtn"><div id="extraBtn"><img src="../../extra/images/extra.png"><h2 class="chooseQuizText">EXTRA LANGUAGE PRACTICE</h2><h2 class="chooseQuizText2">Practice&nbsp;your&nbsp;language&nbsp;skills&nbsp;with the&nbsp;content&nbsp;of&nbsp;this&nbsp;conversation.</h2></div></td></tr></table><img id="quizGoBack" src="../../common/menuIcon1.svg"><div id="wrongAnswerPic"><div id="wrongAnswerIn"></div></div><div id="goodAnswerPic"><div id="goodAnswerIn"></div></div><div id="goodAnswerPic2"><div id="goodAnswerIn2"></div></div><table id="quizDone" ><tr><th colspan="2" id="quizDoneTitle"></th></tr><tr><td id="quizDoneImg" rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="quizDonePercent"><b id="quizPercentFinal" class="yellowText"></b>%</td></tr><tr><td id="quizDonePts">&nbsp;<b id="finalScore" class="yellowText"></b>&nbsp;/&nbsp;<b id="totalScore">2000</b>&nbsp;<p id="quizDoneSentence">Improve&nbsp;your&nbsp;time&nbsp;to get&nbsp;a&nbsp;better&nbsp;score.</p></td></tr><tr><td id="quizDoneErrors"><b id="errorNum" class="yellowText"></b><b id="errorDiv"></b></td></tr><tr><td colspan="2" id="quizDoneContinue" style="height: 80px;"><div class="wrapBtn wb1">CONTINUE</div></td></tr><tr><td colspan="2" id="practiceErrors" style="height: 70px;"><div class="wrapBtn wb2"></div><span class="addQuizFlash"><img src="../../flash/images/cards.svg"/> Add Errors to Flash Cards</span></td></tr></table><div id="quizScoreBack"><div id="quizScoreIn"><img id="quizScoreImg" src="../../common/score4.svg"></div></div><div id="quizTimer"><div id="quizTimerPointer"><img id="quizTimerImage" src="../../common/timerPointer.svg"></div><div id="quizTimerGood"></div><div id="quizTimerBar"></div><div id="quizTimerMedium"></div><div id="quizTimerBar"></div><div id="quizTimerBad"></div></div><div id="quizTimer2"><div id="quizTimerGood2"></div><div id="quizTimerBar"></div><div id="quizTimerBad2"></div></div><div id="quizItself"><div class="textWrap5"></div><div class="quizConvoSurround" id="surr1"></div><div class="quizConvoSurround" id="surr2"></div><div id="quizSentenceContainer"><div class="quizSentenceWrap alignVerticalBubble"><div class="textWrap4"><h1 id="quizSentenceConvo"></h1></div></div><div id="bubble2"><img id="triangle3" src="../../common/triangle1.svg"></div></div><table id="quizConvoItems"><tr><td id="allHintsContainer"><div id="hint1" class="allHints"></div><div id="hint2" class="allHints"></div><div id="hint3" class="allHints"></div></td></tr><tr><td id="quizChoice1" class="quizChoices"><span id="quizItem1" class="multiBtnFont"></span></td></tr><tr><td id="quizChoice2" class="quizChoices"><span id="quizItem2" class="multiBtnFont"></span></td></tr><tr><td id="quizChoice3" class="quizChoices"><span id="quizItem3" class="multiBtnFont"></span></td></tr><tr><td id="quizChoice4" class="quizChoices"><span id="quizItem4" class="multiBtnFont"></span></td></tr></table><div id="quizConvoItemsB"></div><div id="quizConvoItemsC"></div><div id="quizConvoImg1"></div><div id="quizConvoImg2"></div></div><table id="quizPreload"><tr><th height="15%"><p class="quizPreloadTitle"></p><p><i id="quizPreloadDescription"></i></p><p>Best&nbsp;Score:&nbsp;<b id="bestScore2" class="yellowText"></b><b id="lineBreak">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</b>Best&nbsp;Medal:&nbsp;<b id="bestMedal2" class="yellowText">None</b></p></th></tr><tr><td id="quizPreloadMedal"></td></tr><tr><td id="quizPreloadStart">START NOW</td></tr></table><div id="quizStart"><div id="quizStartImg"><div id="lightTimerDiv"><img id="lightTimerPic" src="../../common/quizReady1.svg"/><img id="lightTimerAnimation" src="../../common/quizReady1b.svg"/></div></div></div></main>';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CREATE IMAGE ARRAY
var imageArray = [oPath + 'images/person1.png', oPath + 'images/person2.png'];
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
    $('#person2').addClass('personOff');
    $('#person1').removeClass('personOff');
    restartedLesson = false;
    return;
  }
  //////////////////////////////////////////START LOAD FADING ANIMATION
  if (currentWordNum % 2 == 0) {
    $('#person2').addClass('personOff');
    $('#person1').removeClass('personOff');
    $('#triangle1').show();
    $('#triangle2').hide();
  } else {
    $('#person1').addClass('personOff');
    $('#person2').removeClass('personOff');
    if ($('.ouinoContent').hasClass('onePerson')) {
      $('#triangle1').show();
      $('#triangle2').hide();
    } else {
      $('#triangle2').show();
      $('#triangle1').hide();
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NEXT IMAGE
function nextImage() {
  if (currentWordNum != numWords - 1) {
    currentWordNum++;
    changeWord();
  } else {
    soundPlaying = false;
    $('#pauseBtn').attr('src', '../../common/play.svg');
    $('#pauseBtn').hide();
    $('.wrapper3').css({ background: 'rgba(0,0,0,0)' });
    $('.insight, .engToggle, .arrowControl').fadeOut();
    $('#endWrap').fadeIn(500, function () {
      $('.ouinoContent').fadeOut(500);
    });
    ///OS START
    if ($('body').hasClass('notch')) {
      $('.menuBtnContainer').fadeOut();
      setTimeout(function () {
        $('.menuBar').addClass('hideBack');
      }, 800);
    }

    ///OS END
    if ($('body').height() >= 700) {
      $('#learningTip').fadeIn(1000);
    }
    currentWordNum = 0;
    $('#mainSound').trigger('pause');
    $('#mainSound').attr('src', '../../common/endSound' + soundType);
    document.getElementById('mainSound').load();
    document.getElementById('mainSound').addEventListener('canplay', playSound);
    soundPlaying = true;
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PREV IMAGE
function prevImage() {
  if (currentWordNum != 0) {
    currentWordNum--;
    changeWord();
  }
}

function changeWord() {
  ///5.1
  if (!localStorage.getItem(storeInfo + 'insight')) {
    if (currentWordNum > 2 && $('.insightLabel').length == 0) {
      $('body').append('<div class="insightLabel"></div>');
      $('.insight').addClass('fullOpacity');
    }
  }
  ///5.1

  ///PORTUGUESE CHANGE LEFT OFF START
  saveLeftOff(forExamples.length - 1);
  ///PORTUGUESE CHANGE LEFT OFF END
  soundRepeated = 0;
  $('#pauseBtn').attr('src', '../../common/pause.svg');

  //4.1 start
  if (lessonNumber >= 64 && lessonNumber <= 69) {
    var foto = currentWordNum;
    var fotNum = 100;
    if (lessonNumber == 64) {
      fotNum = 6;
      if (foto < 3 || foto > 8) {
        $('#person1').css({
          'background-image': 'url(' + oPath + 'images/person1.png)',
        });
      } else {
        $('#person1').css({
          'background-image': 'url(' + oPath + 'images/person1b.png)',
        });
      }
    } else if (lessonNumber == 65) {
      fotNum = 6;
    } else if (lessonNumber == 68) {
      fotNum = 4;
    } else if (lessonNumber == 69) {
      fotNum = 10;
    }
    if (foto < fotNum) {
      $('#person2').css({
        'background-image': 'url(' + oPath + 'images/person2.png)',
      });
    } else {
      $('#person2').css({
        'background-image': 'url(' + oPath + 'images/person2b.png)',
      });
    }
    if (lessonNumber == 65 && foto >= 10) {
      $('#person2').css({
        'background-image': 'url(' + oPath + 'images/person2c.png)',
      });
    }
  }
  //4.1 end

  ///Swap Images
  swapImages();

  $('.ouinoButton').removeClass('buttonOn');
  $('#button' + currentWordNum + '').addClass('buttonOn');
  $('.ouinoButton').css({
    background: 'background-color: rgba(255,255,255,0.05)',
  });
  $('.buttonOn').css({
    background:
      'linear-gradient(' +
      btnColor[0] +
      ',' +
      btnColor[1] +
      ') center 80% / 100% 800%',
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

  /////START SOUND OPTIONS WITH INITIALISATION
  if ($('#selectPlayback').val().charAt(0) == 'f') {
    if (lessonInit == 'true') {
      fastOrSlow = 'fast';
      $('.timerMeter > .timerSpan').stop();
      $('.timerMeter > .timerSpan').css({ width: $('.timerMeter').width() });
      $('#mainSound').trigger('pause');
      $('#mainSound').attr('src', oPath + 'sounds/1fast1' + soundType);
      ///PORTUGUESE CHANGE START REPLACE!
      setTimeout(function () {
        $('#mainSound').trigger('play');
      }, 500);
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
      $('#mainSound').attr('src', oPath + 'sounds/1slow1' + soundType);
      ///PORTUGUESE CHANGE START REPLACE!
      setTimeout(function () {
        $('#mainSound').trigger('play');
      }, 500);
      ///PORTUGUESE CHANGE END
      soundPlaying = true;
      toggleMusic();
      lessonInit = 'false';
    } else {
      loadSlowSound();
    }
  }

  if (currentWordNum == 0) {
    $('.arrowControl').addClass('oneOnly');
    $('.leftArrow').hide();
    $('.rightArrow').show();
  } else if (currentWordNum == numWords - 1) {
    $('.arrowControl').addClass('oneOnly');
    $('.leftArrow').show();
    $('.rightArrow').hide();
  } else {
    $('.arrowControl').removeClass('oneOnly');
    $('.leftArrow').show();
    $('.rightArrow').show();
  }

  ///// START Change English Text
  $('.engSentence').html(engExamples[currentWordNum]);
  /////START Change Foreign Text
  var currentWordString = forExamples[currentWordNum];
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

  //// END Change Foreign Text
  resizeText();
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

///2021 FONT START///////////////////////////

function resizeText() {
  var theFont = 29;
  var theFont2 = 21;

  if ($('body').hasClass('notch')) {
    theFont = 23;
    theFont2 = 19;
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
  var elementWidth = $('.wordSentence').width();
  var myTextWidth2 = $('.textWrap2').width();
  for (var numB = theFont; myTextWidth > elementWidth; numB--) {
    myTextWidth = $('.textWrap').width();
    var newSize = numB;

    if (newSize < 23) {
      newSize = 23;
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
    for (var numC = theFont2; myTextWidth2 > elementWidth; numC--) {
      myTextWidth2 = $('.textWrap2').width();
      var newSize2 = numC;
      if (newSize2 < 18) {
        newSize2 = theFont2;
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

///2021 FONT END///////////////////////////////////

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

  //2020 EXTRA START////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    var fCard = lessonNumber + '|' + (parseInt(currentWordNum) + 1) + cardCate;
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

  $('#bonusBtn').on('touchstart mousedown', function (event) {
    event.preventDefault();
    $('#loadLogo').show();
    setTimeout(function () {
      window.location = '../../extra/index.html?convo=' + lessonNumber;
    }, 100);
  });

  //2020 EXTRA END//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
  ////CHECK MODERNISER

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
  ///Bubble LOAD
  $('#triangle1').show();
  $('#triangle2').hide();
  //////LOAD LOG IN
  if (sessionStorage['LOGGEDIN'] == null) {
    loadLogIn();
  }
  ///////////TIMER CSS
  $('.timerMeter > .timerSpan').css({ background: btnColor[0], width: 0 });
  ///APPLY LESSON TITLE
  $('.lessonTitle').text(lessonTitle);

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
    });
  }
  ////PORTUGUESE CHANGE END

  //5.1
  $('.insight').on('click', loadInsight);
  if (currentDevice != 'mobile') {
    $('.insight').hover(function () {
      $('.insight').toggleClass('insightHover');
    });
  }
  //5.1

  ///CREATE BUTTONS AND CONTENT
  $('.buttonContainer').append(buttonCreate);
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
  //CHANGE PICTURES
  $('#person1, #quizConvoImg1').css({
    'background-image': 'url(' + oPath + 'images/person1.png)',
  });
  $('#person2, #quizConvoImg2').css({
    'background-image': 'url(' + oPath + 'images/person2.png)',
  });
  ///////TABLET OR DESKTOP BUTTON OPTIONS
  loadButtonsMain();
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

  ///2020 EXTRA START CHANGE WEB = WEB BELOW for DEMO AND WEB VERSION
  var actUrl = getUrlParam('refer', '');
  if (actUrl != '') {
    $('body').append("<div id='transCover'><div>");
    setTimeout(function () {
      if (actUrl == 'lesson') {
        loadLast = false;
        startLesson();
        if (osType == 'pwa' || osType == 'demo') {
          togglePause();
        }
      } else if (actUrl == 'quiz') {
        loadQuiz();
      }
      $('#transCover').fadeOut();
    }, 800);
  }
  ///2020 EXTRA END
});
////////////////////////////////////////////////////////////////////////////END INIT OPTIONS

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD QUIZ
function loadQuiz() {
  $('#backBtn, #menuMain2').removeClass('darker');
  if ($('.menuBar').hasClass('noBack')) {
    $('.menuBar').removeClass('noBack');
  }

  ///5.1
  $('.insight, .engToggle, .arrowControl').hide();
  ///5.1

  $('#background').addClass('quizMode');
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

  /////CODE IF ERROR MODE
  if (errorMode == true && lessonNumber !== 0) {
    if (currentQuiz === 1) {
      loadQuiz1();
    } else if (currentQuiz === 2) {
      loadQuiz2();
    }
  }
  /////CODE IF ERROR MODE
}

function loadQuiz1() {
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong2.svg)',
  });
  $('#quizTimerImage').attr('src', '../../common/timerPointer.svg');
  disableTimer = true;
  $('#quizConvoItemsB, #quizConvoItemsC').hide();
  $('#quizConvoItems').show();
  $('#quizMenu').hide();
  timerTime = 6000;
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
  $('#wrongAnswerIn').css({
    'background-image': 'url(../../common/quizWrong2.svg)',
  });
  $('#quizTimerImage').attr('src', '../../common/timerPointer.svg');
  disableTimer = true;
  $('#quizConvoItemsB, #quizConvoItemsC').hide();
  $('#quizConvoItems').show();
  $('#quizMenu').hide();
  timerTime = 9000;
  quizNumQues = quizQuestions.length;
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
        $('#quizTimer2').show();
      }
      resizeButtonQuizText();
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
    disableTimer = false;
    loadQuizSound();
  }, 1000);
}

function loadQuestion() {
  $('#hint1').addClass('fullyDisable');

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
  if (currentQuiz == 1) {
    quizQuesNum = quizCombinedArray[currQuizNum - 1];
    if (errorMode == true) {
      quizQuesNum = errors[currQuizNum - 1];
    }
    //4.1 start
    quizNumArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40,
    ];
    //4.1 end
    quizNumArray = quizNumArray.slice(0, numWords);
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
  } else if (currentQuiz == 2) {
    quizQuesNum = quizQuestions[currQuizNum - 1];
    if (errorMode == true) {
      quizQuesNum = errors[currQuizNum - 1];
    }
    if (quizQuesNum % 2 != 0) {
      quizNumArray = person1Answers.slice();
    } else {
      quizNumArray = person2Answers.slice();
    }
    var position3 = quizNumArray.indexOf(quizQuesNum);
    if (~position3) {
      quizNumArray.splice(position3, 1);
    }
    for (var numVV = 0; numVV < quizNumArray.length; numVV++) {
      if (engExamples[quizNumArray[numVV]] == undefined) {
        var position6 = quizNumArray.indexOf(quizNumArray[numVV]);
        if (~position6) {
          quizNumArray.splice(position6, 1);
        }
      }
    }
  }

  //4.1 start
  if (lessonNumber >= 64 && lessonNumber <= 69) {
    var foto = quizQuesNum - 1;
    var fotNum = 100;
    if (lessonNumber == 64) {
      fotNum = 6;
      if (foto < 3 || foto > 8) {
        $('#quizConvoImg1').css({
          'background-image': 'url(' + oPath + 'images/person1.png)',
        });
      } else {
        $('#quizConvoImg1').css({
          'background-image': 'url(' + oPath + 'images/person1b.png)',
        });
      }
    } else if (lessonNumber == 65) {
      fotNum = 6;
    } else if (lessonNumber == 68) {
      fotNum = 4;
    } else if (lessonNumber == 69) {
      fotNum = 10;
    }
    if (foto < fotNum) {
      $('#quizConvoImg2').css({
        'background-image': 'url(' + oPath + 'images/person2.png)',
      });
    } else {
      $('#quizConvoImg2').css({
        'background-image': 'url(' + oPath + 'images/person2b.png)',
      });
    }
    if (lessonNumber == 65 && foto >= 10) {
      $('#quizConvoImg2').css({
        'background-image': 'url(' + oPath + 'images/person2c.png)',
      });
    }
  }
  //4.1 end

  if (currentQuiz == 1) {
    timerWait = 100;
    quizActions1();
  } else if (currentQuiz == 2) {
    timerWait = 100;
    quizActions2();
  } else if (currentQuiz == 3) {
    quizActions3();
  } else if (currentQuiz == 4) {
    quizActions3();
  }
}

function quizActions1() {
  $('.multiBtnFont').css({ opacity: '1' });
  if (quizQuesNum % 2 != 0) {
    $('#quizConvoImg1').show();
    $('#quizConvoImg2').hide();
  } else {
    $('#quizConvoImg2').show();
    $('#quizConvoImg1').hide();
  }
  $('#hint1, #hint2, #hint3').css({ visibility: 'visible' });
  var shuffledQuiz = shuffle(quizNumArray);
  shuffledQuiz = shuffledQuiz.slice(0, 3);
  shuffledQuiz.push(quizQuesNum);
  shuffledQuiz = shuffle(shuffledQuiz);
  quizWord = forExamples[quizQuesNum - 1];
  $('#quizSentenceConvo').html('Click on the English translation.');
  $('#quizSentenceContainer').removeClass('fullWidth');
  $('#quizConvoImg1, #quizConvoImg2').removeClass('hidePic');
  $('#quizChoice1').val(shuffledQuiz[0]);
  $('#quizChoice2').val(shuffledQuiz[1]);
  $('#quizChoice3').val(shuffledQuiz[2]);
  $('#quizChoice4').val(shuffledQuiz[3]);
  $('#quizItem1').html(engExamples[shuffledQuiz[0] - 1]);
  $('#quizItem2').html(engExamples[shuffledQuiz[1] - 1]);
  $('#quizItem3').html(engExamples[shuffledQuiz[2] - 1]);
  $('#quizItem4').html(engExamples[shuffledQuiz[3] - 1]);
  setTimeout(function () {
    resizeButtonQuizText();
  }, 1);
}

function quizActions2() {
  $('.multiBtnFont').css({ opacity: '1' });
  if (quizQuesNum % 2 != 0) {
    $('#quizConvoImg1').show();
    $('#quizConvoImg2').hide();
  } else {
    $('#quizConvoImg2').show();
    $('#quizConvoImg1').hide();
  }
  $('#hint1, #hint2, #hint3').css({ visibility: 'visible' });
  var shuffledQuiz = shuffle(quizNumArray);
  shuffledQuiz = shuffledQuiz.slice(0, 3);
  shuffledQuiz.push(quizQuesNum);
  shuffledQuiz = shuffle(shuffledQuiz);

  quizWord = forExamples[quizQuesNum - 1];
  $('#quizSentenceConvo').html('Click on the BEST answer to the question.');
  $('#quizSentenceContainer').removeClass('fullWidth');
  $('#quizConvoImg1, #quizConvoImg2').removeClass('hidePic');
  $('#quizChoice1').val(shuffledQuiz[0]);
  $('#quizChoice2').val(shuffledQuiz[1]);
  $('#quizChoice3').val(shuffledQuiz[2]);
  $('#quizChoice4').val(shuffledQuiz[3]);
  $('#quizItem1').html(forExamples[shuffledQuiz[0]]);
  $('#quizItem2').html(forExamples[shuffledQuiz[1]]);
  $('#quizItem3').html(forExamples[shuffledQuiz[2]]);
  $('#quizItem4').html(forExamples[shuffledQuiz[3]]);

  setTimeout(function () {
    resizeButtonQuizText();
  }, 1);
}

function quizActions3() {}

function showHint1() {
  $('#hint1').css({ visibility: 'hidden' });
  ////ANIMATION AND POINT COUNT
  currentPts = currentPts - 5;
  $('#currentScore').text(currentPts);
  $('#hintPts1').stop(true, true);
  $('#hintPts1').css({ opacity: '1' });
  setTimeout(function () {
    $('#hintPts1').transition({ opacity: '0' });
  }, 2000);
  disableTimer = true;
  loadQuizSound();
}

function showHint2() {
  $('#hint2').css({ visibility: 'hidden' });
  ////ANIMATION AND POINT COUNT
  currentPts = currentPts - 10;
  $('#currentScore').text(currentPts);
  $('#hintPts2').stop(true, true);
  $('#hintPts2').css({ opacity: '1' });
  setTimeout(function () {
    $('#hintPts2').transition({ opacity: '0' });
  }, 2000);

  if ($('.quizImagePortrait').length != 0) {
    $('#quizSentenceConvo').html('');
    $('#quizSentenceConvo').hide();
    $('#quizSentenceContainer').addClass('fullWidth');
    $('#quizConvoImg1, #quizConvoImg2').addClass('hidePic');
    setTimeout(function () {
      $('#quizSentenceConvo').html(quizWord);
      $('#quizSentenceConvo').fadeIn();
    }, 300);
  } else {
    $('#quizSentenceContainer').removeClass('fullWidth');
    $('#quizConvoImg1, #quizConvoImg2').removeClass('hidePic');
    $('#quizSentenceConvo').html(quizWord);
  }
}

function showHint3() {
  $('#hint3').css({ visibility: 'hidden' });
  ////ANIMATION AND POINT COUNT
  currentPts = currentPts - 20;
  $('#currentScore').text(currentPts);
  $('#hintPts3').stop(true, true);
  $('#hintPts3').css({ opacity: '1' });
  setTimeout(function () {
    $('#hintPts3').transition({ opacity: '0' });
  }, 2000);

  var choiceCounter = 0;
  if ($('#quizChoice1').val() != quizQuesNum) {
    $('#quizItem1').css({ opacity: '0' });
    choiceCounter++;
  }
  if ($('#quizChoice2').val() != quizQuesNum) {
    $('#quizItem2').css({ opacity: '0' });
    choiceCounter++;
  }
  if ($('#quizChoice3').val() != quizQuesNum && choiceCounter != 2) {
    $('#quizItem3').css({ opacity: '0' });
    choiceCounter++;
  }
  if ($('#quizChoice4').val() != quizQuesNum && choiceCounter != 2) {
    $('#quizItem4').css({ opacity: '0' });
    choiceCounter++;
  }
}

///////////CHECK ANSWER CLICK
function checkClickAnswer(clicker) {
  setTimeout(function () {
    $('.quizChoices').css({ 'pointer-events': 'none' });
    setTimeout(function () {
      $('.quizChoices').css({ 'pointer-events': 'auto' });
    }, 200);
  }, 1);

  if (clicker.val() == quizQuesNum) {
    $('#mainSound').trigger('pause');
    $('#quizItself').css({ 'pointer-events': 'none' });
    setTimeout(function () {
      $('#quizItself').css({ 'pointer-events': 'auto' });
    }, 1000);
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
    $('#wrongAnswer, #goodAnswer, #goodAnswerPic').stop(true, true);
    $('#wrongAnswer').css({ opacity: '0' });
    $('#goodAnswerPic, #goodAnswer').css({ opacity: '1' });
    if (currQuizNum != quizNumQues + 1) {
      loadQuestion();
      setTimeout(function () {
        $('#goodAnswerPic, #goodAnswer').animate({ opacity: '0' });
      }, 500);
      setTimeout(function () {
        disableTimer = false;
        loadQuizSound();
        $('#quizItself').animate({ opacity: '1' });
      }, 100);
    } else {
      setTimeout(function () {
        $('#goodAnswerPic, #goodAnswer').css({ opacity: '0' });
        $('#quizDoneSentence').show();
        doneQuiz();
      }, 600);
    }
  } else {
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
  ///4.2 CHANGE START

  ///4.2 CHANGE END

  ///2020 EXTRA START
  $('#dictBtn').show();
  ///2020 EXTRA END
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

  //5.1
  $('.insight, .engToggle, .arrowControl').show();
  //5.1

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
    $('.ouinoContent').animate({ opacity: '1' }, 400);
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

  ///////MOBILE BUTTONS

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
  $('#pauseBtn, #person1, #person2').on('click', togglePause);
  $('#pauseWrap').on('click', togglePause);
  $('.ouinoButton').on('click', buttonClicked);
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

  ///OS START
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

  ///2020 EXTRA START
  $('.wordSentence').on('click', function (e) {
    if (
      e.target.id.indexOf('flash') != -1 ||
      e.target.classList.contains('rightArrow') ||
      e.target.classList.contains('leftArrow')
    ) {
      return;
    }
    $('.wordSentence').addClass('wsHover');
    setTimeout(function () {
      $('.wordSentence').removeClass('wsHover');
    }, 220);
    if (
      $('#selectPlayback').val() == 'fastFirst' ||
      $('#selectPlayback').val() == 'fastOnly'
    ) {
      loadFastSound();
    } else {
      loadSlowSound();
    }
  });
  ///2020 EXTRA END
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
  $('.quizChoices').css({
    background: 'linear-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
  });
  if (currentDevice == 'mobile') {
    ///MOBILE
    $('#quizBtn1').on('touchstart mousedown', function (event) {
      event.preventDefault();
      loadQuiz1();
    });
    $('#quizBtn2').on('touchstart mousedown', function (event) {
      event.preventDefault();
      loadQuiz2();
    });
    $('.quizChoices').on('touchmove', function (e) {
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
    $('#hint1').on('touchstart mousedown', function (event) {
      event.preventDefault();
      showHint1();
      playSprite('shimmer');
    });
    $('#hint2').on('touchstart mousedown', function (event) {
      event.preventDefault();
      showHint2();
      playSprite('shimmer');
    });
    $('#hint3').on('touchstart mousedown', function (event) {
      event.preventDefault();
      showHint3();
      playSprite('shimmer');
    });
    $('.quizChoices').on('touchstart mousedown', function (event) {
      event.preventDefault();
      checkClickAnswer($(this));
    });
    ///END MOBILE
  } else {
    ///DESKTOP
    $('#quizBtn1').on('click', loadQuiz1);
    $('#quizBtn2').on('click', loadQuiz2);
    $('#quizGoBack').on('click', function () {
      errors = [];
      errorMode = false;
      loadQuiz();
    });
    $('#quizPreloadStart').on('click', startQuiz);
    $('#quizDoneContinue').on('click', toggleMenu);
    $('#hint1').on('click', function () {
      showHint1();
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
    $('.allHints').hover(function () {
      $(this).toggleClass('quizIconBig');
    });
    $('.allHints').on('mouseenter', function () {
      playSprite('swoosh');
    });
    $('.allHints').hover(function () {
      $(this).toggleClass('fullOpacity');
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
    $('.quizChoices').on('click', function () {
      checkClickAnswer($(this));
    });
    $('.quizChoices').hover(function () {
      $(this).toggleClass('fullOpacity');
    });

    /////END DESKTOP
  }
}

/////LOAD QUIZ SOUND
function loadQuizSound() {
  $('#mainSound').trigger('pause');
  var quizSound = fastSounds[quizQuesNum - 1];
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
  }, 1000);
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
  $('#hint1').removeClass('fullyDisable');

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
      $('#quizDoneSentence').show();
      setTimeout(function () {
        doneQuiz();
      }, 500);
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
  $('#quizTimerPointer').stop(true, true);
  timerDelay = setTimeout(function () {
    ///TIMER FUNCTION
    var aniLength = $('#quizTimer').width() - 20;
    $('#quizTimerImage').css({
      '-webkit-transform': 'translate3d(0%, 0, 0)',
      transform: 'translate3d(0%, 0, 0)',
    });
    $('#quizTimerPointer').stop(true, true);
    $('#quizTimerPointer').css({ left: '0px' }, 10);
    $('#quizTimerPointer')
      .clearQueue()
      .animate({ opacity: '1' }, 200, function () {
        time4 = setTimeout(function () {
          $('#quizTimerImage').css({
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
        }, timerTime * 0.97);
        $('#quizTimerPointer').animate(
          { left: aniLength + 'px' },
          timerTime,
          'linear',
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
