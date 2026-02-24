var osType = 'windows';

///DO NOT MODIFY
var currentSection = 'Pronunciation';
var currentSecShort = 'Pronun';
var btnColor = [
  '#90E700',
  '#254800',
  '#AD00FF',
  '#320058',
  '#BB5D00',
  '#271300',
  '#00BFFF',
  '#001E51',
];
var lessonTitle = 'Ouino ' + lessonLanguage + ' Pronunciation';

var onTimeUpdate;
var viewportHeight;
var viewportWidth;
var nativeTime = 2000;
var t0;
var t1;
var wordTime;
var malePlayed = false;
var currentWordNum = 1;
var numWords = forWordArray.length;
var mouseIsDown;
var micOn = true;
var storeInfo;
var userEmail;
var tuvm58dj;
var mainNum;
var pronunInfo;
var themeNum = sessionStorage['pronunTheme'];
var wtZGh = '/php/';
var ETTNv = 'www.';
var MJhei = 'resetCode';
var cWbBT = '.php';
var jGWFQ = 'getContent';
var FUE4B = 'findUsers';
var KsXgx = 'update';
var MTixn = 'updateAll';
var rvUnf = 'eliseunogueira';
var QjSKe = 'sendReset';
var PbWjZ = 'register';
var YLtLU = 'https://';
var OGXpV = '.com.br';

////PORTUGUESE CHANGE START
if (themeNum == undefined) {
  themeNum = 2;
}
function savePosition() {
  setTimeout(function () {
    var leftOff = '0';
    var lastLess = '0';
    var scrPer = '0|0|0|0|0|0|0|0|0|0|0';
    if (localStorage.getItem(storeInfo + 'leftOff')) {
      leftOff = localStorage.getItem(storeInfo + 'leftOff');
    }
    if (localStorage.getItem(storeInfo + 'saved')) {
      lastLess = localStorage.getItem(storeInfo + 'saved');
    }
    if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      scrPer = localStorage.getItem(storeInfo + 'scrollPercent');
    }
    infoToUpdate = leftOff + ':' + scrPer + ':' + lastLess;
    fieldToUpdate = 'leftoff';
    updateDatabase();
  }, 3000);
}
////PORTUGUESE CHANGE START

////CREATE SOUND ARRAY
maleSounds = [];
femaleSounds = [];
for (var numD = 1; numD <= numWords; numD++) {
  maleSounds.push('sounds/pronun' + numD + '.ogg');
  femaleSounds.push('sounds/fpronun' + numD + '.ogg');
}

////////////////////////////////////////////////HTML CODE
var loginAppend = '';

var mainHTML =
  '<div id="loadLogo">LOADING...</div><div id="fontPreload1">Comic</div><div id="fontPreload2">Encode</div><div class="instructions"><img class="redArrowImage" src="../common/redArrow.svg"><b id="arrowLabel"></b></div><header id="loginCover" class="wrapper"> <div id="loginCenter" class="optionsIn gradientColor alignVerticalWin"><img class="letterLogo" src="../common/letterLogo.svg"> <form autocomplete="off" id="loginForm"> <table class="loginTable"> <tr> <th colspan="2"><h3 id="loginTitle" class="loginTitle">Ouino Account Login</h3></th> </tr><tr> <td colspan="2"><input type="email" id="emailField" required class="loginField" placeholder="Email Address"/></td></tr><tr> <td colspan="2"><input type="password" id="jguyr4" required class="loginField" maxlength="12" placeholder="Password"/> <h5 id="loginForgot" class="smallerUnderline">Forgot password?</h5></td></tr><tr> <td><h5 id="loginRemember" class="loginRemember"><img src="../common/checkOff.svg" id="rememberCheck" class="rememberCheck"/>Remember me</h5></td><td><input type="submit" class="loginOptions gradientColor2 loginSubmit" value="Log in"></td></tr><tr> <td colspan="2"><h5 id="loginBottom" class="smallUnderline">Don' +
  "'" +
  't have an account yet? Create one.</h5></td></tr></table> </form> </div><div id="loginOffline" class="optionsIn gradientColor alignVerticalWin"> <table class="offlineTable"> <tr> <th width="15%"><img class="warningLogo" src="../common/warning.svg"></th> <td colspan="2"><h3 class="offlineTitle">CURRENTLY OFFLINE</h3> <p class="offlineWord">You are currently offline. An internet connection is required to sync progress between devices. Your progress will be saved locally for now. Simply restart the program when an internet connection is available in order to sync your progress with the server.</td></tr></table> <table class="offlineTable2"> <tr> <td width="60%"><h5 id="offlineRemember" class="loginRemember"><img src="../common/checkOff.svg" id="offlineCheck" class="rememberCheck"/>Do not show again.</h5></td><td><input type="submit" class="loginOptions gradientColor2" value="Start Lesson" id="offlineButton"></td></tr></table> </div></header><div class="timerMeter"><span class="timerSpan"></span></div><audio id="sfxSprite" src="../common/sprite.ogg"></audio><audio id="mainMusic" loop src=""></audio><div class="menuBar"> <img src="../common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><span class="menuTitleContainer alignVerticalItem" style="cursor: default;"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><div id="volDiv2"><div id="sliderTrack"></div><div id="sliderText2">Volume</div></div><img id="loadBtn" src="images/load.svg" class="smallIcon" /><img src="images/mic.svg" class="micBtn smallIcon" /></span></div><img id="soundArrow" src="images/arrow.svg"><main id="micDiv" class="lessonMenus selectOff"> <div class="insideMenu" style="max-width: 800px; color: white; padding: 2% 10px 50px 10px;"><h1 class="mainTitle"><img class="mainLogoImg2" src="images/mic.svg">Microphone Setup</h1><strong style="color: #FC0; font-size: 18px;">In order to use your microphone, you need to configure it in your computer options.</strong><div id="micMac" class="micBox"><strong style="color: #FC0;">1. </strong><strong>Go to your system settings:</strong><br><em>macOS: System Preferences → Sound → Input (tab)</em><br></div><div id="micWin" class="micBox"><strong style="color: #FC0;">1. </strong><strong>Go to your system settings:</strong><br><em>Windows 10: Settings → System → Sound</em><br></div><div class="micBox"><strong style="color: #FC0;">2. </strong><strong>Choose a microphone and make adjustments if needed.</strong><br><em> Under "Input", ensure your microphone is selected in the "Choose your input device" dial.<br> Click on "Device properties".</em><br></div><div class="micBox"><strong style="color: #FC0;">3. </strong><strong>Adjust microphone properties</strong><br><em> On the "Device properties" window, adjust the microphone slider(s) as needed.<br> Speak into your microphone while checking under "Test your microphone" to make sure your settings work.<br> If you see the line moving from left to right, your microphone is working correctly.</em><br></div><div class="micBox"><strong style="color: #FC0;">4. </strong><strong>Final tweaks in the program.</strong><br><em>You can then adjust the native speaker volume to make up for the difference in volume.</em><br></div><div class="micBox2"><img src="../common/warning.svg" style="position: absolute; width: 45px; height: 45px; left: 20px;">Not all computers are equipped with proper recording capabilities. If you are not able to set up your microphone properly in your settings, recording will not work in the Ouino pronunciation program.</div></div></main>';

//////////////////DETERMINE IF MOBILE OR DESKTOP
var currentDevice;
if (
  /Android|webOS|iPhone|touch|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
) {
  currentDevice = 'mobile';
} else {
  currentDevice = 'desktop';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START INIT OPTIONS/////////////////////////////////////////////////////////////////
$(document).ready(function () {
  if (sessionStorage['userEmailSTORE'] != null) {
    userEmail = sessionStorage['userEmailSTORE'];
    tuvm58dj = sessionStorage['tuvm58djSTORE'];
    storeInfo = langShort + userEmail;
  } else {
    sessionStorage.clear();
    window.location = '../index.html';
    return;
  }
  ////FASTCLICK
  $(function () {
    FastClick.attach(document.body);
  });
  ///BACKGROUND
  $('#background').css({
    'background-image': 'url(images/pronunBack' + themeNum + '.png)',
  });
  $('body').append(mainHTML);
  $('body').append(mainHTML2);
  $('title').text('Ouino ' + lessonLanguage + ' Learning System');
  //////LOAD LOG IN
  if (sessionStorage['LOGGEDIN'] == null) {
    loadLogIn();
  }
  ///////////TIMER CSS
  $('.timerMeter > .timerSpan').css({
    background: btnColor[themeNum * 2 - 2],
    width: 0,
  });
  ///CREATE BUTTONS AND CONTENT
  $('.gradientColor').css({
    background:
      'url(../common/black.svg), linear-gradient(' +
      btnColor[themeNum * 2 - 2] +
      ',' +
      btnColor[themeNum * 2 - 1] +
      ')',
  });
  $('.gradientColor2').css({
    background:
      'linear-gradient(' +
      btnColor[themeNum * 2 - 2] +
      ',' +
      btnColor[themeNum * 2 - 1] +
      ')',
  });
  /////LOAD MENU
  $('.lessonMenus').css({ x: '200%' });
  $('#selectDiv').show();
  $('#selectDiv').css({ x: '100%' });
  $('#loadBtn, .micBtn').hide();
  $('.switch strong').html('Completed:&nbsp;NO');

  //2020 EXTRA START
  $('.menuBtnContainer').append(
    '<img id="backBtn" src="../common/back.svg" class="smallIcon"/>',
  );
  $('#backBtn').on('click', homeMenu);
  $('.insideMenu').append(
    "<a href='../extra/index.html?pronun=true' style='text-decoration: none;'><section class='soundBox' style='padding: 20px 130px 20px 30px; position:relative; font-weight: normal; font-size: 1em; line-height: 23px; max-width: 540px; cursor: pointer; text-align: left;'><img src='../extra/images/extra.png' style='position:absolute; right: 44px; top: 0; bottom: 0; margin: auto; width: 80px; height: auto;'/><span style='color: white;'>Once you've learned all the different sounds in " +
      lessonLanguage +
      ", you can practice with <strong style='font-size: 1.1em;'>thousands</strong> of sentences in the <strong style='color: #FC0;font-size: 1.1em;'>Extra Language Practice</strong> module of the course.</span><div style='position: absolute; bottom: 0; top: 0; right: 15px; margin: auto; width: 55px; line-height: 35px; height: 35px; background: #404040; font-size: 20px; border-radius: 5px; text-align: center; font-weight: bold; text-shadow: none;'>GO</div></section></a>",
  );
  //2020 EXTRA END

  /////LOAD SOUND SPRITE
  audioSprite = document.getElementById('sfxSprite');
  audioSprite.addEventListener('timeupdate', onTimeUpdate, false);
  ///////TABLET OR DESKTOP BUTTON OPTIONS
  loadButtonsMain();
  ///////END DESKTOP OPTIONS

  ///PORTUGUESE CHANGE START
  var saveLoc = window.location.href;
  saveLoc = saveLoc.split('pronun/');
  saveLoc = 'pronun/' + saveLoc[1];
  localStorage.setItem(storeInfo + 'saved', saveLoc);
  savePosition();
  ///PORTUGUESE CHANGE END

  $(window).resize(function () {
    resizePage();
  });
  $(window).load(function () {
    resizePage();
  });
  ///////Ipad Keyboard Scroll Issue Fix
  $(document).on('blur', 'input, textarea', function () {
    setTimeout(function () {
      window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
    }, 0);
  });
  ///
  ///LOCAL STORAGE SET
  if (localStorage['pronunVol'] != null) {
    nativeAudio.volume = localStorage['pronunVol'];
    $('#volDiv').slider('value', localStorage['pronunVol']);
  }
  ///CHANGLE MIC OPTIONS
  if (navigator.appVersion.indexOf('Win') != -1) {
    $('#micMac').hide();
  } else if (navigator.appVersion.indexOf('Mac') != -1) {
    $('#micWin').hide();
  }
  ///LOCAL STORAGE INIT
  pronunInfo = localStorage[storeInfo + 'starSTOREpronun'];
  if (pronunInfo == null || pronunInfo == 'null') {
    pronunInfo =
      '0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0';
  }
  pronunInfo = pronunInfo.split(':');
  for (var num = 1; num <= $('.cMark').length; num++) {
    if (pronunInfo[num] == '1') {
      $('#so' + num)
        .children('.cMark')
        .html('&#10003;');
    }
  }

  if (pronunInfo[0] == '1') {
    $('#nativeLabel').html('Male<span>&nbsp;Native</span>&nbsp;Speaker');
    $('#nativeImg').css({
      background:
        'url(../pronun/images/nativeMasc.png) no-repeat center center',
      'background-size': 'contain',
    });
  } else if (pronunInfo[0] == '2') {
    $('#nativeLabel').html('Female<span>&nbsp;Native</span>&nbsp;Speaker');
    $('#nativeImg').css({
      background: 'url(../pronun/images/nativeFem.png) no-repeat center center',
      'background-size': 'contain',
    });
  } else {
    $('#nativeLabel').html('Both<span>&nbsp;Native</span>&nbsp;Speakers');
    $('#nativeImg').css({
      background:
        'url(../pronun/images/nativeBoth.png) no-repeat center center',
      'background-size': 'contain',
    });
  }

  ///2020 EXTRA START
  if (!localStorage[storeInfo + 'musicSTOREprogram']) {
    localStorage[storeInfo + 'musicSTOREprogram'] = pronunInfo[72];
  }
  ///2020 EXTRA END

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
  ///CHECK MIC
  recordInit();
});
////////////////////////////////////////////////////////////////////////////END INIT OPTIONS

//////////////START WHEN LOADED OPTIONS
window.onload = function () {
  $('#loginCover').hide();
  $('.menuBar').css({ visibility: 'visible' });
  $('.ouinoContent').css({ visibility: 'visible' });
};

///RESTORE RECORDING
function restore() {
  $.voice.stop();
}

///RECORD UNIT
function recordInit() {
  $.voice.record($('#live').is(':checked'), function () {
    $.voice.stop();
  });
  setTimeout(function () {
    if (micOn == false) {
      $('#micWarn').show();
      $('.switch').css({ bottom: '105px' });
      $('.gLight1, #pronunImg1').hide();
    }
    $('#loadWrap, #loadLogo').hide();
  }, 500);
}

///RECORD SOUND FUNCTION
function recordSound() {
  $('#recordText').html(
    'Recording... <strong>' + forWordArray[currentWordNum - 1] + '</strong>',
  );
  $.voice.record($('#live').is(':checked'), function () {
    if (nativeTime > 1300) {
      wordTime = nativeTime * 1.3;
    } else {
      wordTime = 2000;
    }
    $('.recordBtn').addClass('disabled');
    $('.playBtn, .nextBtn').addClass('disabled2');
    $('.gLight1, .gLight2').removeClass('red green');
    $('.gLight1').addClass('red');
    animateTimer();
    setTimeout(function () {
      playRecording();
    }, wordTime);
  });
}

///PLAY SOUND FUNCTION
function playRecording() {
  ///EXPORT FUNCTION
  $('.gLight1, .gLight2').removeClass('red green');
  $('.gLight1').addClass('green');

  $.voice.export(function (url) {
    $('#recordText').text('Playing: You');
    $('#audio').attr('src', url);
    $('#audio')[0].play();
    animateTimer();
  }, 'URL');
  //END
  restore();
}

///PLAY SOUND AGAIN
function playAgain() {
  $('#recordText').text('Playing: You');
  $('#audio')[0].play();
  animateTimer();
  $('.gLight1, .gLight2').removeClass('red green');
  $('.gLight1').addClass('green');
}

///PLAY SOUND AGAIN
function playNative() {
  $('#recordText').text('Playing: Native');
  animateTimer2();
  $('.gLight1, .gLight2').removeClass('red green');
  $('.gLight2').addClass('green');
  if (
    $('#nativeLabel').html() == 'Both<span>&nbsp;Native</span>&nbsp;Speakers' &&
    malePlayed == false
  ) {
    $('#recordText').text('Playing: Male Native');
    $('#nativeAudio').attr('src', maleSounds[currentWordNum - 1]);
  } else if (
    $('#nativeLabel').html() == 'Both<span>&nbsp;Native</span>&nbsp;Speakers' &&
    malePlayed == true
  ) {
    $('#recordText').text('Playing: Female Native');
    $('#nativeAudio').attr('src', femaleSounds[currentWordNum - 1]);
  } else if (
    $('#nativeLabel').html() == 'Male<span>&nbsp;Native</span>&nbsp;Speaker'
  ) {
    $('#recordText').text('Playing: Male Native');
    $('#nativeAudio').attr('src', maleSounds[currentWordNum - 1]);
  } else if (
    $('#nativeLabel').html() == 'Female<span>&nbsp;Native</span>&nbsp;Speaker'
  ) {
    $('#recordText').text('Playing: Female Native');
    $('#nativeAudio').attr('src', femaleSounds[currentWordNum - 1]);
  }
  document.getElementById('nativeAudio').load();
  document.getElementById('nativeAudio').addEventListener('canplay', playSound);
}

///PLAY SOUND AGAIN
function playNative2() {
  $('.recordBtn').addClass('disabled');
  $('.playBtn, .nextBtn').addClass('disabled2');
  $('.gLight1, .gLight2').removeClass('red green');
  $('.gLight2').addClass('green');
  document.getElementById('nativeAudio').addEventListener('ended', timeCalc);
  t0 = performance.now();
  $('.timerMeter > .timerSpan').stop();
  $('.timerMeter > .timerSpan').css({ width: '0px' });

  if (
    $('#nativeLabel').html() == 'Both<span>&nbsp;Native</span>&nbsp;Speakers' &&
    malePlayed == false
  ) {
    $('#recordText').text('Playing: Male Native');
    $('#nativeAudio').attr('src', maleSounds[currentWordNum - 1]);
  } else if (
    $('#nativeLabel').html() == 'Both<span>&nbsp;Native</span>&nbsp;Speakers' &&
    malePlayed == true
  ) {
    $('#recordText').text('Playing: Female Native');
    $('#nativeAudio').attr('src', femaleSounds[currentWordNum - 1]);
  } else if (
    $('#nativeLabel').html() == 'Male<span>&nbsp;Native</span>&nbsp;Speaker'
  ) {
    $('#recordText').text('Playing: Male Native');
    $('#nativeAudio').attr('src', maleSounds[currentWordNum - 1]);
  } else if (
    $('#nativeLabel').html() == 'Female<span>&nbsp;Native</span>&nbsp;Speaker'
  ) {
    $('#recordText').text('Playing: Female Native');
    $('#nativeAudio').attr('src', femaleSounds[currentWordNum - 1]);
  }

  document.getElementById('nativeAudio').load();
  document.getElementById('nativeAudio').addEventListener('canplay', playSound);
}

function timeCalc() {
  document.getElementById('nativeAudio').removeEventListener('ended', timeCalc);
  if (
    $('#nativeLabel').html() == 'Both<span>&nbsp;Native</span>&nbsp;Speakers' &&
    malePlayed == false
  ) {
    malePlayed = true;
    playNative2();
    return;
  }
  var wordNumLeft = (currentWordNum % 6) - 1;
  if (wordNumLeft == -1) {
    wordNumLeft = 5;
  }
  if (wordNumLeft == 0) {
    currentWordNum++;
    loadWord();
    return;
  }
  if (micOn) {
    $('.recordBtn').removeClass('disabled');
  }
  $('.gLight1, .gLight2').removeClass('red green');
  t1 = performance.now();
  nativeTime = t1 - t0;
  $('.timerMeter > .timerSpan').stop();
  $('.timerMeter > .timerSpan').css({ width: '0px' });
  if (micOn) {
    $('#recordText').html(
      'Press to Record... <strong>' +
        forWordArray[currentWordNum - 1] +
        '</strong>',
    );
  } else {
    $('#recordText').html('No Microphone Detected');
  }
}

function playSound() {
  document
    .getElementById('nativeAudio')
    .removeEventListener('canplay', playSound);
  $('#nativeAudio').trigger('play');
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// //TIMER BAR ANIMATION
function animateTimer() {
  $('.timerMeter > .timerSpan').stop();
  $('.timerMeter > .timerSpan').css({ width: '0px' });
  $('.timerMeter > .timerSpan').each(function () {
    $(this)
      .width(0)
      .animate({ width: $('.timerMeter').width() }, wordTime);
  });
}

function animateTimer2() {
  $('.timerMeter > .timerSpan').stop();
  $('.timerMeter > .timerSpan').css({ width: '0px' });
  $('.timerMeter > .timerSpan').each(function () {
    $(this)
      .width(0)
      .animate({ width: $('.timerMeter').width() }, nativeTime, function () {
        $('.timerMeter > .timerSpan').stop();
        $('.timerMeter > .timerSpan').css({ width: '0px' });
        if (
          $('#nativeLabel').html() ==
            'Both<span>&nbsp;Native</span>&nbsp;Speakers' &&
          malePlayed == false
        ) {
          malePlayed = true;
          playNative();
          return;
        }
        if (micOn) {
          $('.recordBtn').removeClass('disabled');
          $('.playBtn, .nextBtn').removeClass('disabled2');
        }
        $('.gLight1, .gLight2').removeClass('red green');
        $('#recordText').html(
          'Press to Record... <strong>' +
            forWordArray[currentWordNum - 1] +
            '</strong>',
        );
      });
  });
}

/////////////////////////LOAD BUTTON LISTENERS
function loadButtonsMain() {
  //Slider Stuff
  $('#volDiv2').slider({
    orientation: 'horizontal',
    value: sfxSprite.volume,
    min: 0,
    max: 1,
    range: 'min',
    animate: true,
    step: 0.1,
    slide: function (e, ui) {
      audio.volume = ui.value;
      mainMusic.volume = ui.value;
      sfxSprite.volume = ui.value;
      localStorage['programVolume'] = ui.value;
    },
  });
  if (localStorage['programVolume'] != null) {
    audio.volume = localStorage['programVolume'];
    mainMusic.volume = localStorage['programVolume'];
    sfxSprite.volume = localStorage['programVolume'];
    $('#volDiv2').slider('value', localStorage['programVolume']);
  }
  $('#volDiv').slider({
    orientation: 'vertical',
    value: nativeAudio.volume,
    min: 0,
    max: 1,
    range: 'min',
    animate: true,
    step: 0.1,
    slide: function (e, ui) {
      nativeAudio.volume = ui.value;
      localStorage['pronunVol'] = ui.value;
    },
  });
  ///
  document.getElementById('audio').addEventListener('ended', function () {
    malePlayed = false;
    playNative();
  });
  ///BUTTONS FOR BOTH
  $('#menuHome, #menuMain2').on('click', homeMenu);
  $('#loadBtn').on('click', soundSection);
  $('.micBtn').on('click', micSection);
  $('.recordBtn').on('click', recordSound);
  $('.playBtn').on('click', playAgain);
  $('#musicOnOff').on('click', toggleMusic2);
  $('#nativePro').on('click', changeNative);
  $('.theWords').on('click', btnClicked);
  $('#letterPro').on('click', function (e) {
    if (
      !$(e.target).hasClass('rightArrow') &&
      !$(e.target).hasClass('leftArrow')
    ) {
      loadCurrSection();
    }
  });
  $('#currentPro').on('click', function (e) {
    if (
      !$(e.target).hasClass('rightArrow') &&
      !$(e.target).hasClass('leftArrow')
    ) {
      malePlayed = false;
      playNative2();
    }
  });

  $('#currentPro .leftArrow').on('click', function () {
    if (currentWordNum != 1) {
      currentWordNum--;
    } else {
      currentWordNum = numWords;
    }
    loadWord();
  });
  $('#currentPro .rightArrow, .nextBtn').on('click', function () {
    if (currentWordNum != numWords) {
      currentWordNum++;
    } else {
      currentWordNum = 1;
    }
    loadWord();
  });
  $('#letterPro .leftArrow').on('click', function () {
    loadPrevSection();
  });
  $('#letterPro .rightArrow').on('click', function () {
    loadNextSection();
  });
  $('#selectDiv').on('click', function (e) {
    if (e.target == this) {
      soundSection();
    }
  });
  $('#micDiv').on('click', function (e) {
    if (e.target == this) {
      micSection();
    }
  });
  $('.soItems').on('click', function (e) {
    if (!$(e.target).hasClass('cMark')) {
      var soundNum = parseInt($(this).attr('id').replace('so', ''));
      currentWordNum = soundNum * 6 - 5;
      soundSection();
      loadSection();
    }
  });
  $('.cMark').on('click', checkToggle);
  $('.switch').on('click', checkToggle2);
  ///BUTTONS FOR DESKTOP
  if (currentDevice != 'mobile') {
    $('.soItems').hover(function () {
      $(this).toggleClass('hilited');
    });
    $('.smallIcon, .soItems').on('mouseenter', function () {
      playSprite('rollover');
    });
    $('#loadBtn').hover(function () {
      $('#arrowLabel').text('LOAD SOUND');
      $('.instructions').toggleClass('showDiv');
    });
    $('.micBtn').hover(function () {
      $('#arrowLabel').text('MICROPHONE SETTINGS');
      $('.instructions').toggleClass('showDiv');
    });
    $('.theWords').hover(function () {
      $(this).toggleClass('fullOpacity');
    });
    $('#currentPro, #letterPro, #nativePro').hover(function () {
      $(this).toggleClass('boxSelect');
    });
    $('#menuMain2').hover(function () {
      $('#arrowLabel').text('BACK TO HOME MENU');
      $('.instructions').toggleClass('showDiv');
    });
    $(
      '.cMark, .leftArrow, .rightArrow,.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .recordBtn, .playBtn, .nextBtn, .switch',
    ).hover(function () {
      $(this).toggleClass('fullOpacity');
    });
  } else {
    $('#volDiv2').hide();
  }
  ///END DESKTOP
}
////END LOAD BTN

function homeMenu() {
  sessionStorage['menuType'] = 'home';
  window.location = '../index.html';
}

function resizePage() {
  //////////START LOAD VARIABLES
  var elementWidth;
  var contentWidth;
  var mobileWidth;
  viewportHeight = $(window).height() - 45;
  viewportWidth = $(window).innerWidth();
  var elementHeight;
  var buttonHeight;
  var screenRatio = viewportWidth / viewportHeight;
  var areaHeight = viewportHeight - 30;

  //////////////////////////START PORTRAIT MODE
  if (screenRatio < 1) {
    $('.ouinoContent').addClass('portrait');
    $('.ouinoContent').css({ height: areaHeight + 'px' });
    elementHeight = $('.ouinoContent').height();
    $('#pronunCont').css({
      'max-height': '600px',
      height: areaHeight - 250 + 'px',
    });
    $('.proBox').css({ height: $('#pronunCont').height() * 0.325 + 'px' });
    $('#letterPro').css({ width: '49%' });
    $('#wordPro').css({ width: '50%', 'margin-right': '0px' });
    $('#descPro').css({ width: '100%' });
  }
  //////////////////////////END PORTRAIT MODE
  //////////////////////////START LANDSCAPE MODE
  else if (screenRatio >= 1) {
    //Apply to all options
    $('.ouinoContent').removeClass('portrait');
    $('.ouinoContent').css({ height: areaHeight + 'px' });
    elementHeight = $('.ouinoContent').height();
    $('#pronunCont').css({
      'max-height': '400px',
      height: areaHeight - 200 + 'px',
    });
    $('.proBox').css({ height: $('#pronunCont').height() * 0.48 + 'px' });
    $('#letterPro').css({ width: '19%' });
    $('#wordPro').css({ width: '29%', 'margin-right': '1%' });
    $('#descPro').css({ width: '50%' });
  }
  ///DO OTHER STUFF
  resizeText();
  resizeTitle();
}

//////////////////////////////////////////////////////////////////////////////////START RESIZE TEXT
function resizeText() {
  $('#descPro p').css({ fontSize: '19px' });
  var myTextHeight = $('#descPro p').height();
  var elementHeight = $('#descPro').height() - 45;
  for (var numB = 19; myTextHeight > elementHeight && numB > 5; numB--) {
    myTextHeight = $('#descPro p').height();
    $('#descPro p').css({ fontSize: numB + 'px' });
  }

  $('#letterPro p').css({ fontSize: '25px' });
  var myTextHeight = $('#letterPro p').height();
  for (var numC = 25; myTextHeight > elementHeight && numC > 5; numC--) {
    myTextHeight = $('#letterPro p').height();
    $('#letterPro p').css({ fontSize: numC + 'px' });
  }

  $('#wordPro p').css({ fontSize: '20px' });
  var myTextHeight = $('#wordPro p').height();
  elementHeight = $('#descPro').height() - 10;
  for (var numD = 20; myTextHeight > elementHeight && numD > 5; numD--) {
    myTextHeight = $('#wordPro p').height();
    $('#wordPro p').css({ fontSize: numD + 'px' });
  }

  $('#currentPro p').css({ fontSize: '35px' });
  var myTextHeight = $('#currentPro p').height();
  for (var numE = 35; myTextHeight > elementHeight && numE > 5; numE--) {
    myTextHeight = $('#currentPro p').height();
    $('#currentPro p').css({ fontSize: numE + 'px' });
  }
}

///////////////////////////START CHANGE TITLE LENGTH DEPENDING ON SIZE
function resizeTitle() {
  $('.menuTitleContainer').text(lessonTitle);
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

function loadLogIn() {
  $('body').append(loginAppend);
  $('#loginBottom, #loginForgot').hide();
}

///////////////////////////LOAD WORD
function loadSection() {
  malePlayed = false;
  playNative2();
  $('#letterPro p').html(
    forWordArray[currentWordNum - 1]
      .split('</')
      .join('%%%')
      .split('/')
      .join('<br>')
      .split('%%%')
      .join('</'),
  );
  $('.theWords').removeClass('wordSelect');
  $('#word1').html(forWordArray[currentWordNum]);
  $('#word2').html(forWordArray[currentWordNum + 1]);
  $('#word3').html(forWordArray[currentWordNum + 2]);
  $('#word4').html(forWordArray[currentWordNum + 3]);
  $('#word5').html(forWordArray[currentWordNum + 4]);
  $('#currentPro p').html(
    forWordArray[currentWordNum - 1] +
      '<br>' +
      engWordArray[currentWordNum - 1],
  );
  mainNum = (currentWordNum - 1) / 6 + 1;
  if (pronunInfo[mainNum] == '1') {
    $('.switch').addClass('switchOn');
    $('.switch strong').html('Completed:&nbsp;YES');
  } else {
    $('.switch').removeClass('switchOn');
    $('.switch strong').html('Completed:&nbsp;NO');
  }
  $('#descPro p').html(descArray[(currentWordNum - 1) / 6]);
  ///RESIZE
  resizeText();
}

function loadSection2() {
  $('#letterPro p').html(
    forWordArray[currentWordNum - 6]
      .split('</')
      .join('%%%')
      .split('/')
      .join('<br>')
      .split('%%%')
      .join('</'),
  );
  $('#word1').html(forWordArray[currentWordNum - 5]);
  $('#word2').html(forWordArray[currentWordNum - 4]);
  $('#word3').html(forWordArray[currentWordNum - 3]);
  $('#word4').html(forWordArray[currentWordNum - 2]);
  $('#word5').html(forWordArray[currentWordNum - 1]);
  $('#currentPro p').html(
    forWordArray[currentWordNum - 1] +
      '<br>' +
      engWordArray[currentWordNum - 1],
  );
  $('#descPro p').html(descArray[(currentWordNum - 6) / 6]);
  ///RESIZE
  resizeText();
}

///////////////////////////LOAD WORD
function loadWord() {
  var wordNumLeft = (currentWordNum % 6) - 1;
  if (wordNumLeft == -1) {
    wordNumLeft = 5;
  }
  if (wordNumLeft == 0) {
    loadSection();
    return;
  } else if (wordNumLeft == 5) {
    loadSection2();
  }
  malePlayed = false;
  playNative2();
  $('.theWords').removeClass('wordSelect');
  $('#word' + wordNumLeft).addClass('wordSelect');
  $('#currentPro p').html(
    forWordArray[currentWordNum - 1] +
      '<br>' +
      engWordArray[currentWordNum - 1],
  );
}

///////////////////////////
function loadNextSection() {
  var wordNumLeft = (currentWordNum % 6) - 1;
  if (wordNumLeft == -1) {
    wordNumLeft = 5;
  }
  if (currentWordNum < numWords - 5) {
    currentWordNum = currentWordNum - wordNumLeft + 6;
  } else {
    currentWordNum = 1;
  }
  loadSection();
}

///////////////////////////
function loadPrevSection() {
  var wordNumLeft = (currentWordNum % 6) - 1;
  if (wordNumLeft == -1) {
    wordNumLeft = 5;
  }
  if (currentWordNum >= 7) {
    currentWordNum = currentWordNum - wordNumLeft - 6;
  } else {
    currentWordNum = numWords - 5;
  }
  loadSection();
}

function loadCurrSection() {
  var wordNumLeft = (currentWordNum % 6) - 1;
  if (wordNumLeft == -1) {
    wordNumLeft = 5;
  }
  currentWordNum = currentWordNum - wordNumLeft;
  loadSection();
}

///////////////////////////
function btnClicked() {
  var btnNum = parseInt($(this).attr('id').replace('word', ''));
  var wordNumLeft = (currentWordNum % 6) - 1;
  if (wordNumLeft == -1) {
    wordNumLeft = 5;
  }
  currentWordNum = currentWordNum - wordNumLeft + btnNum;
  loadWord();
}

///////////////////////////LOAD WORD
function changeNative() {
  if (
    $('#nativeLabel').html() == 'Both<span>&nbsp;Native</span>&nbsp;Speakers'
  ) {
    $('#nativeLabel').html('Male<span>&nbsp;Native</span>&nbsp;Speaker');
    pronunInfo[0] = '1';
    $('#nativeImg').css({
      background:
        'url(../pronun/images/nativeMasc.png) no-repeat center center',
      'background-size': 'contain',
    });
  } else if (
    $('#nativeLabel').html() == 'Male<span>&nbsp;Native</span>&nbsp;Speaker'
  ) {
    $('#nativeLabel').html('Female<span>&nbsp;Native</span>&nbsp;Speaker');
    pronunInfo[0] = '2';
    $('#nativeImg').css({
      background: 'url(../pronun/images/nativeFem.png) no-repeat center center',
      'background-size': 'contain',
    });
  } else if (
    $('#nativeLabel').html() == 'Female<span>&nbsp;Native</span>&nbsp;Speaker'
  ) {
    $('#nativeLabel').html('Both<span>&nbsp;Native</span>&nbsp;Speakers');
    pronunInfo[0] = '0';
    $('#nativeImg').css({
      background:
        'url(../pronun/images/nativeBoth.png) no-repeat center center',
      'background-size': 'contain',
    });
  }

  infoToUpdate = pronunInfo.join(':');
  localStorage[storeInfo + 'starSTOREpronun'] = infoToUpdate;
  fieldToUpdate = 'pronun';
  updateDatabase();
}

function checkToggle() {
  var thisNum = parseInt(
    $(this).parent('.soItems').attr('id').replace('so', ''),
  );
  if ($(this).html() == '&#10003;' || $(this).html() == '✓') {
    $(this).html('');
    pronunInfo[thisNum] = '0';
    if (mainNum == thisNum) {
      $('.switch strong').html('Completed:&nbsp;NO');
      $('.switch').removeClass('switchOn');
    }
  } else {
    $(this).html('&#10003;');
    pronunInfo[thisNum] = '1';
    if (mainNum == thisNum) {
      $('.switch strong').html('Completed:&nbsp;YES');
      $('.switch').addClass('switchOn');
    }
  }
  infoToUpdate = pronunInfo.join(':');
  localStorage[storeInfo + 'starSTOREpronun'] = infoToUpdate;
  fieldToUpdate = 'pronun';
  updateDatabase();
}

function checkToggle2() {
  if ($('.switch').children('strong').html() == 'Completed:&nbsp;NO') {
    $('.switch strong').html('Completed:&nbsp;YES');
    $('.switch').addClass('switchOn');
    pronunInfo[mainNum] = '1';
    $('#so' + mainNum)
      .children('.cMark')
      .html('&#10003;');
  } else {
    $('.switch strong').html('Completed:&nbsp;NO');
    $('.switch').removeClass('switchOn');
    pronunInfo[mainNum] = '0';
    $('#so' + mainNum)
      .children('.cMark')
      .html('');
  }
  infoToUpdate = pronunInfo.join(':');
  localStorage[storeInfo + 'starSTOREpronun'] = infoToUpdate;
  fieldToUpdate = 'pronun';
  updateDatabase();
}

if ($('#loadBtn').is(':hidden')) {
  $('#loadBtn').show();
  loadSection();
}

function soundSection() {
  if ($('#loadBtn').is(':hidden')) {
    toggleMusic3();
    $('#loadBtn, .micBtn').show();
    $('#selectDiv').hide();
    $('#selectDiv').css({ x: '200%' });
    loadSection();
    $('.ouinoContent').css({ opacity: 1 });
    $('#soundArrow')
      .transition({ opacity: 1, top: '50px' })
      .transition({ top: '70px' }, 200)
      .transition({ top: '50px' }, 200)
      .transition({ top: '70px' }, 200)
      .transition({ top: '50px' }, 200)
      .transition({ opacity: 0, delay: 300 });
  } else if ($('#selectDiv').is(':visible')) {
    if ($('.gLight2').hasClass('green')) {
      $('#nativeAudio').trigger('play');
    } else if ($('.gLight1').hasClass('green')) {
      $('#audio').trigger('play');
    }
    $('#selectDiv').hide();
    $('#selectDiv').css({ x: '200%' });
    $('.ouinoContent').css({ opacity: 1 });
  } else {
    if ($('.gLight2').hasClass('green')) {
      $('#nativeAudio').trigger('pause');
    } else if ($('.gLight1').hasClass('green')) {
      $('#audio').trigger('pause');
    }

    if (currentDevice != 'mobile') {
      playSprite('transition');
    }
    $('#selectDiv').show();
    $('#micDiv').hide();
    $('#micDiv').css({ x: '200%' });
    $('.ouinoContent').transition({ opacity: 0 }, 300);
    $('#selectDiv').transition({ x: '100%' }, function () {
      resizePage();
    });
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UPDATE DATABASE
function updateDatabase() {
  var xhr = new XMLHttpRequest();
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + cWbBT;
  var info =
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
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  try {
    xhr.send(info);
  } catch (e) {
    console.log("ERROR: couldn't update");
  }
}

function micSection() {
  if ($('#micDiv').is(':visible')) {
    $('#micDiv').hide();
    $('#micDiv').css({ x: '200%' });
    $('.ouinoContent').css({ opacity: 1 });
    if ($('.gLight2').hasClass('green')) {
      $('#nativeAudio').trigger('play');
    } else if ($('.gLight1').hasClass('green')) {
      $('#audio').trigger('play');
    }
  } else {
    if ($('.gLight2').hasClass('green')) {
      $('#nativeAudio').trigger('pause');
    } else if ($('.gLight1').hasClass('green')) {
      $('#audio').trigger('pause');
    }
    $('#selectDiv').hide();
    $('#selectDiv').css({ x: '200%' });
    $('#micDiv').show();
    if (currentDevice != 'mobile') {
      playSprite('transition');
    }
    $('.ouinoContent').transition({ opacity: 0 }, 300);
    $('#micDiv').transition({ x: '100%' });
  }
}

function toggleMusic3() {
  return;

  var musicVar;
  //2020 EXTRA START
  if (
    localStorage[storeInfo + 'musicSTOREprogram'] == '1' ||
    localStorage[storeInfo + 'musicSTOREprogram'] == 'OFF'
  ) {
    $('#musicOnOff').html('MUSIC <b>OFF</b>');
    musicVar = 'OFF';
  }
  //2020 EXTRA END
  else {
    $('#musicOnOff').html('MUSIC <b>ON</b>');
    musicVar = 'ON';
  }
  $('#musicOnOff').show();

  if (musicVar == 'ON') {
    $('#mainMusic').trigger('pause');
    $('#mainMusic').attr('src', 'music/pronunMus' + themeNum + '.ogg');
    document.getElementById('mainMusic').load();
    document.getElementById('mainMusic').addEventListener('canplay', playMusic);
  } else {
    $('#mainMusic').trigger('pause');
  }
  //2020 EXTRA START
  if (musicVar == 'ON') {
    localStorage[storeInfo + 'musicSTOREblock'] = 'on';
    localStorage[storeInfo + 'musicSTOREvocab'] = 'on';
    localStorage[storeInfo + 'musicSTOREconvo'] = 'on';
    localStorage[storeInfo + 'musicSTOREverb'] = 'on';
    updateAllOptions2();
  } else {
    localStorage[storeInfo + 'musicSTOREblock'] = 'off';
    localStorage[storeInfo + 'musicSTOREvocab'] = 'off';
    localStorage[storeInfo + 'musicSTOREconvo'] = 'off';
    localStorage[storeInfo + 'musicSTOREverb'] = 'off';
    updateAllOptions2();
  }
  //2020 EXTRA END
}

///2020 EXTRA START
function updateAllOptions2() {
  infoToUpdate =
    localStorage.getItem(storeInfo + 'musicSTOREblock') +
    ':' +
    localStorage.getItem(storeInfo + 'playbackSTOREblock') +
    ':' +
    localStorage.getItem(storeInfo + 'intervalSTOREblock') +
    ':' +
    localStorage.getItem(storeInfo + 'textSTOREblock');
  fieldToUpdate = 'blockOptions';
  updateDatabase();
  infoToUpdate =
    localStorage.getItem(storeInfo + 'musicSTOREvocab') +
    ':' +
    localStorage.getItem(storeInfo + 'playbackSTOREvocab') +
    ':' +
    localStorage.getItem(storeInfo + 'intervalSTOREvocab') +
    ':' +
    localStorage.getItem(storeInfo + 'textSTOREvocab');
  fieldToUpdate = 'vocabOptions';
  updateDatabase();
  infoToUpdate =
    localStorage.getItem(storeInfo + 'musicSTOREconvo') +
    ':' +
    localStorage.getItem(storeInfo + 'playbackSTOREconvo') +
    ':' +
    localStorage.getItem(storeInfo + 'intervalSTOREconvo') +
    ':' +
    localStorage.getItem(storeInfo + 'textSTOREconvo');
  fieldToUpdate = 'convoOptions';
  updateDatabase();
  infoToUpdate =
    localStorage.getItem(storeInfo + 'musicSTOREverb') +
    ':' +
    localStorage.getItem(storeInfo + 'playbackSTOREverb') +
    ':' +
    localStorage.getItem(storeInfo + 'intervalSTOREverb') +
    ':' +
    localStorage.getItem(storeInfo + 'textSTOREverb');
  fieldToUpdate = 'verbOptions';
  updateDatabase();
}
///2020 EXTRA END

function toggleMusic2() {
  return;

  var musicVar = $('#musicOnOff').text().replace('MUSIC ', '');

  if (musicVar == 'ON') {
    $('#musicOnOff').html('MUSIC <b>OFF</b>');
    musicVar = 'OFF';
  } else {
    $('#musicOnOff').html('MUSIC <b>ON</b>');
    musicVar = 'ON';
  }

  localStorage[storeInfo + 'musicSTOREprogram'] = musicVar;

  if (musicVar == 'ON') {
    pronunInfo[72] = '0';
    $('#mainMusic').trigger('pause');
    $('#mainMusic').attr('src', 'music/pronunMus' + themeNum + '.ogg');
    document.getElementById('mainMusic').load();
    document.getElementById('mainMusic').addEventListener('canplay', playMusic);
  } else {
    $('#mainMusic').trigger('pause');
    pronunInfo[72] = '1';
  }

  //2020 EXTRA START
  if (musicVar == 'ON') {
    localStorage[storeInfo + 'musicSTOREblock'] = 'on';
    localStorage[storeInfo + 'musicSTOREvocab'] = 'on';
    localStorage[storeInfo + 'musicSTOREconvo'] = 'on';
    localStorage[storeInfo + 'musicSTOREverb'] = 'on';
    updateAllOptions2();
  } else {
    localStorage[storeInfo + 'musicSTOREblock'] = 'off';
    localStorage[storeInfo + 'musicSTOREvocab'] = 'off';
    localStorage[storeInfo + 'musicSTOREconvo'] = 'off';
    localStorage[storeInfo + 'musicSTOREverb'] = 'off';
    updateAllOptions2();
  }
  //2020 EXTRA END

  infoToUpdate = pronunInfo.join(':');
  localStorage[storeInfo + 'starSTOREpronun'] = infoToUpdate;
  fieldToUpdate = 'pronun';
  updateDatabase();
}

function playMusic() {
  document
    .getElementById('mainMusic')
    .removeEventListener('canplay', playMusic);
  $('#mainMusic').trigger('play');
}

///////AUDIO SPRITE STUFF
currentSprite = {};
var mobileInit = true;
if (currentDevice == 'mobile') {
  mobileInit = false;
}
onTimeUpdate = function () {
  if (this.currentTime >= currentSprite.start + currentSprite.length) {
    this.pause();
  }
};
playSprite = function (id) {
  if (mobileInit == false) {
    currentSprite = spriteData['blank'];
    audioSprite.currentTime = currentSprite.start;
    audioSprite.play();
    mobileInit = true;
  } else if (spriteData[id] && spriteData[id].length) {
    currentSprite = spriteData[id];
    audioSprite.currentTime = currentSprite.start;
    audioSprite.play();
  }
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
};
//////END AUDIO SPRITE

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
///end dateFormat

//@preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
//@version 1.0.3
//@codingstandard ftlabs-jsv2
//@copyright The Financial Times Limited [All Rights Reserved]

function FastClick(e, t) {
  'use strict';
  function r(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  var n;
  t = t || {};
  this.trackingClick = false;
  this.trackingClickStart = 0;
  this.targetElement = null;
  this.touchStartX = 0;
  this.touchStartY = 0;
  this.lastTouchIdentifier = 0;
  this.touchBoundary = t.touchBoundary || 10;
  this.layer = e;
  this.tapDelay = t.tapDelay || 200;
  if (FastClick.notNeeded(e)) {
    return;
  }
  var i = [
    'onMouse',
    'onClick',
    'onTouchStart',
    'onTouchMove',
    'onTouchEnd',
    'onTouchCancel',
  ];
  var s = this;
  for (var o = 0, u = i.length; o < u; o++) {
    s[i[o]] = r(s[i[o]], s);
  }
  if (deviceIsAndroid) {
    e.addEventListener('mouseover', this.onMouse, true);
    e.addEventListener('mousedown', this.onMouse, true);
    e.addEventListener('mouseup', this.onMouse, true);
  }
  e.addEventListener('click', this.onClick, true);
  e.addEventListener('touchstart', this.onTouchStart, false);
  e.addEventListener('touchmove', this.onTouchMove, false);
  e.addEventListener('touchend', this.onTouchEnd, false);
  e.addEventListener('touchcancel', this.onTouchCancel, false);
  if (!Event.prototype.stopImmediatePropagation) {
    e.removeEventListener = function (t, n, r) {
      var i = Node.prototype.removeEventListener;
      if (t === 'click') {
        i.call(e, t, n.hijacked || n, r);
      } else {
        i.call(e, t, n, r);
      }
    };
    e.addEventListener = function (t, n, r) {
      var i = Node.prototype.addEventListener;
      if (t === 'click') {
        i.call(
          e,
          t,
          n.hijacked ||
            (n.hijacked = function (e) {
              if (!e.propagationStopped) {
                n(e);
              }
            }),
          r,
        );
      } else {
        i.call(e, t, n, r);
      }
    };
  }
  if (typeof e.onclick === 'function') {
    n = e.onclick;
    e.addEventListener(
      'click',
      function (e) {
        n(e);
      },
      false,
    );
    e.onclick = null;
  }
}
var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;
var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
var deviceIsIOSWithBadTarget =
  deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;
FastClick.prototype.needsClick = function (e) {
  'use strict';
  switch (e.nodeName.toLowerCase()) {
    case 'button':
    case 'select':
    case 'textarea':
      if (e.disabled) {
        return true;
      }
      break;
    case 'input':
      if ((deviceIsIOS && e.type === 'file') || e.disabled) {
        return true;
      }
      break;
    case 'label':
    case 'video':
      return true;
  }
  return /\bneedsclick\b/.test(e.className);
};
FastClick.prototype.needsFocus = function (e) {
  'use strict';
  switch (e.nodeName.toLowerCase()) {
    case 'textarea':
      return true;
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
          return false;
      }
      return !e.disabled && !e.readOnly;
    default:
      return /\bneedsfocus\b/.test(e.className);
  }
};
FastClick.prototype.sendClick = function (e, t) {
  'use strict';
  var n, r;
  if (document.activeElement && document.activeElement !== e) {
    document.activeElement.blur();
  }
  r = t.changedTouches[0];
  n = document.createEvent('MouseEvents');
  n.initMouseEvent(
    this.determineEventType(e),
    true,
    true,
    window,
    1,
    r.screenX,
    r.screenY,
    r.clientX,
    r.clientY,
    false,
    false,
    false,
    false,
    0,
    null,
  );
  n.forwardedTouchEvent = true;
  e.dispatchEvent(n);
};
FastClick.prototype.determineEventType = function (e) {
  'use strict';
  if (deviceIsAndroid && e.tagName.toLowerCase() === 'select') {
    return 'mousedown';
  }
  return 'click';
};
FastClick.prototype.focus = function (e) {
  'use strict';
  var t;
  if (
    deviceIsIOS &&
    e.setSelectionRange &&
    e.type.indexOf('date') !== 0 &&
    e.type !== 'time'
  ) {
    t = e.value.length;
    e.setSelectionRange(t, t);
  } else {
    e.focus();
  }
};
FastClick.prototype.updateScrollParent = function (e) {
  'use strict';
  var t, n;
  t = e.fastClickScrollParent;
  if (!t || !t.contains(e)) {
    n = e;
    do {
      if (n.scrollHeight > n.offsetHeight) {
        t = n;
        e.fastClickScrollParent = n;
        break;
      }
      n = n.parentElement;
    } while (n);
  }
  if (t) {
    t.fastClickLastScrollTop = t.scrollTop;
  }
};
FastClick.prototype.getTargetElementFromEventTarget = function (e) {
  'use strict';
  if (e.nodeType === Node.TEXT_NODE) {
    return e.parentNode;
  }
  return e;
};
FastClick.prototype.onTouchStart = function (e) {
  'use strict';
  var t, n, r;
  if (e.targetTouches.length > 1) {
    return true;
  }
  t = this.getTargetElementFromEventTarget(e.target);
  n = e.targetTouches[0];
  if (deviceIsIOS) {
    r = window.getSelection();
    if (r.rangeCount && !r.isCollapsed) {
      return true;
    }
    if (!deviceIsIOS4) {
      if (n.identifier && n.identifier === this.lastTouchIdentifier) {
        e.preventDefault();
        return false;
      }
      this.lastTouchIdentifier = n.identifier;
      this.updateScrollParent(t);
    }
  }
  this.trackingClick = true;
  this.trackingClickStart = e.timeStamp;
  this.targetElement = t;
  this.touchStartX = n.pageX;
  this.touchStartY = n.pageY;
  if (e.timeStamp - this.lastClickTime < this.tapDelay) {
    e.preventDefault();
  }
  return true;
};
FastClick.prototype.touchHasMoved = function (e) {
  'use strict';
  var t = e.changedTouches[0],
    n = this.touchBoundary;
  if (
    Math.abs(t.pageX - this.touchStartX) > n ||
    Math.abs(t.pageY - this.touchStartY) > n
  ) {
    return true;
  }
  return false;
};
FastClick.prototype.onTouchMove = function (e) {
  'use strict';
  if (!this.trackingClick) {
    return true;
  }
  if (
    this.targetElement !== this.getTargetElementFromEventTarget(e.target) ||
    this.touchHasMoved(e)
  ) {
    this.trackingClick = false;
    this.targetElement = null;
  }
  return true;
};
FastClick.prototype.findControl = function (e) {
  'use strict';
  if (e.control !== undefined) {
    return e.control;
  }
  if (e.htmlFor) {
    return document.getElementById(e.htmlFor);
  }
  return e.querySelector(
    'button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea',
  );
};
FastClick.prototype.onTouchEnd = function (e) {
  'use strict';
  var t,
    n,
    r,
    i,
    s,
    o = this.targetElement;
  if (!this.trackingClick) {
    return true;
  }
  if (e.timeStamp - this.lastClickTime < this.tapDelay) {
    this.cancelNextClick = true;
    return true;
  }
  this.cancelNextClick = false;
  this.lastClickTime = e.timeStamp;
  n = this.trackingClickStart;
  this.trackingClick = false;
  this.trackingClickStart = 0;
  if (deviceIsIOSWithBadTarget) {
    s = e.changedTouches[0];
    o =
      document.elementFromPoint(
        s.pageX - window.pageXOffset,
        s.pageY - window.pageYOffset,
      ) || o;
    o.fastClickScrollParent = this.targetElement.fastClickScrollParent;
  }
  r = o.tagName.toLowerCase();
  if (r === 'label') {
    t = this.findControl(o);
    if (t) {
      this.focus(o);
      if (deviceIsAndroid) {
        return false;
      }
      o = t;
    }
  } else if (this.needsFocus(o)) {
    if (
      e.timeStamp - n > 100 ||
      (deviceIsIOS && window.top !== window && r === 'input')
    ) {
      this.targetElement = null;
      return false;
    }
    this.focus(o);
    this.sendClick(o, e);
    if (!deviceIsIOS || r !== 'select') {
      this.targetElement = null;
      e.preventDefault();
    }
    return false;
  }
  if (deviceIsIOS && !deviceIsIOS4) {
    i = o.fastClickScrollParent;
    if (i && i.fastClickLastScrollTop !== i.scrollTop) {
      return true;
    }
  }
  if (!this.needsClick(o)) {
    e.preventDefault();
    this.sendClick(o, e);
  }
  return false;
};
FastClick.prototype.onTouchCancel = function () {
  'use strict';
  this.trackingClick = false;
  this.targetElement = null;
};
FastClick.prototype.onMouse = function (e) {
  'use strict';
  if (!this.targetElement) {
    return true;
  }
  if (e.forwardedTouchEvent) {
    return true;
  }
  if (!e.cancelable) {
    return true;
  }
  if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    } else {
      e.propagationStopped = true;
    }
    e.stopPropagation();
    e.preventDefault();
    return false;
  }
  return true;
};
FastClick.prototype.onClick = function (e) {
  'use strict';
  var t;
  if (this.trackingClick) {
    this.targetElement = null;
    this.trackingClick = false;
    return true;
  }
  if (e.target.type === 'submit' && e.detail === 0) {
    return true;
  }
  t = this.onMouse(e);
  if (!t) {
    this.targetElement = null;
  }
  return t;
};
FastClick.prototype.destroy = function () {
  'use strict';
  var e = this.layer;
  if (deviceIsAndroid) {
    e.removeEventListener('mouseover', this.onMouse, true);
    e.removeEventListener('mousedown', this.onMouse, true);
    e.removeEventListener('mouseup', this.onMouse, true);
  }
  e.removeEventListener('click', this.onClick, true);
  e.removeEventListener('touchstart', this.onTouchStart, false);
  e.removeEventListener('touchmove', this.onTouchMove, false);
  e.removeEventListener('touchend', this.onTouchEnd, false);
  e.removeEventListener('touchcancel', this.onTouchCancel, false);
};
FastClick.notNeeded = function (e) {
  'use strict';
  var t;
  var n;
  var r;
  if (typeof window.ontouchstart === 'undefined') {
    return true;
  }
  n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
  if (n) {
    if (deviceIsAndroid) {
      t = document.querySelector('meta[name=viewport]');
      if (t) {
        if (t.content.indexOf('user-scalable=no') !== -1) {
          return true;
        }
        if (
          n > 31 &&
          document.documentElement.scrollWidth <= window.outerWidth
        ) {
          return true;
        }
      }
    } else {
      return true;
    }
  }
  if (deviceIsBlackBerry10) {
    r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
    if (r[1] >= 10 && r[2] >= 3) {
      t = document.querySelector('meta[name=viewport]');
      if (t) {
        if (t.content.indexOf('user-scalable=no') !== -1) {
          return true;
        }
        if (document.documentElement.scrollWidth <= window.outerWidth) {
          return true;
        }
      }
    }
  }
  if (e.style.msTouchAction === 'none') {
    return true;
  }
  return false;
};
FastClick.attach = function (e, t) {
  'use strict';
  return new FastClick(e, t);
};
if (
  typeof define == 'function' &&
  typeof define.amd == 'object' &&
  define.amd
) {
  define(function () {
    'use strict';
    return FastClick;
  });
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = FastClick.attach;
  module.exports.FastClick = FastClick;
} else {
  window.FastClick = FastClick;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PROGRAM CODE
/////////////////////////////////////

if (osType == 'windows' || osType == 'mac') {
  if (osType == 'windows') {
    try {
      var gui = require('nw.gui');
      var win = gui.Window.get();
    } catch (error) {
      console.log('require not found');
    }
  }

  /////////////FULLSCREEN ON
  function fullScreenOn() {
    if (isMac) {
      $('#closeWinBtn, #closeWinBtn2').show();
      $('#fullToggle').attr('src', '../common/min2.svg');
    } else {
      $('#fullToggle').attr('src', '../common/min.svg');
    }
  }

  /////////////FULLSCREEN OFF
  function fullScreenOff() {
    if (isMac) {
      $('#closeWinBtn, #closeWinBtn2').hide();
      $('#fullToggle').attr('src', '../common/max2.svg');
    } else {
      $('#fullToggle').attr('src', '../common/max.svg');
    }
    var wHeight = screen.height * 0.8;
    var wWidth = screen.width * 0.8;
    win.resizeTo(wWidth, wHeight);
    win.setPosition('center');
  }

  var isMac = false;
  var wasFull = true;
  $(document).ready(function () {
    if (gui === undefined) {
      return;
    }

    ///APPLY PROGRAM BUTTONS
    if (osType == 'mac') {
      isMac = true;
    }
    $('body').append(
      '<div id="consoleLoad" style="position: fixed; z-index: 999999; bottom: 0; left: 0; width: 10px; height:10px;"></div>',
    );
    $('#loginCover').append(
      '<img id="closeWinBtn2" src="../common/close.svg" class="smallIcon2" style="position: absolute; top: 3px; right: 2px;"/>',
    );
    if (!isMac) {
      $('.menuBtnContainer').append(
        '<img id="minimizeBtn" src="../common/minimize.svg" class="smallIcon2" style="padding-left: 10px;"/><img id="fullToggle" src="../common/min.svg" class="smallIcon2" /><img id="closeWinBtn" src="../common/close.svg" class="smallIcon2" />',
      );
    } else {
      $('.menuBtnContainer').append(
        '<img id="fullToggle" src="../common/min2.svg" class="smallIcon2" style="padding-left: 10px;"/><img id="closeWinBtn" src="../common/close.svg" class="smallIcon2" />',
      );
    }
    ///BUTTONS ACTIONS
    win.title = lessonTitle;
    if (!isMac) {
      $('.menuBar').css({
        '-webkit-user-select': 'none',
        '-webkit-app-region': 'drag',
      });
      $(
        '.smallIcon, .smallIcon2, #menuMain2, #verbBanner, .menuBtnContainer, .ui-slider-handle',
      ).css({ '-webkit-app-region': 'no-drag' });
      if ($('#tutorialBtn:visible').length == 0) {
        $('.menuTitleContainer').css({ '-webkit-app-region': 'no-drag' });
      }
      $('#minimizeBtn').on('click', function () {
        win.minimize();
      });
    }
    $('#consoleLoad').dblclick(function () {
      if (win.isDevToolsOpen()) {
        win.closeDevTools();
      } else {
        win.showDevTools();
      }
    });
    $('#fullToggle').on('click', function () {
      if (win.isFullscreen) {
        win.leaveFullscreen();
      } else {
        localStorage['winHeight'] = win.height;
        localStorage['winWidth'] = win.width;
        win.enterFullscreen();
      }
    });
    $(document).keyup(function (e) {
      if (e.keyCode == 27 && win.isFullscreen) {
        win.leaveFullscreen();
        $('#fullToggle').attr('src', '../common/max.svg');
      }
    });
    $('#closeWinBtn, #closeWinBtn2').on('click', function () {
      if (!win.isFullscreen) {
        localStorage['winHeight'] = win.height;
        localStorage['winWidth'] = win.width;
      }
      if (win.isFullscreen && isMac) {
        win.leaveFullscreen();
      }
      win.close();
    });

    win.on('enter-fullscreen', fullScreenOn);
    win.on('leave-fullscreen', fullScreenOff);
    ////BUTTONS HOVER
    if (currentDevice != 'mobile') {
      $('.smallIcon2').on('mouseenter', function () {
        playSprite('rollover');
      });
      $('.smallIcon2').hover(function () {
        $(this).toggleClass('fullOpacity');
      });

      $('#fullToggle').hover(function () {
        $('#arrowLabel').text('FULLSCREEN ON / OFF');
        $('.instructions').toggleClass('showDiv');
      });
      $('#closeWinBtn').hover(function () {
        $('#arrowLabel').text('CLOSE PROGRAM');
        $('.instructions').toggleClass('showDiv');
      });
      $('#minimizeBtn').hover(function () {
        $('#arrowLabel').text('MINIMIZE');
        $('.instructions').toggleClass('showDiv');
      });
    }

    if (win.isFullscreen) {
      $('#fullToggle').attr('src', '../common/min.svg');
      if (isMac) {
        $('#fullToggle').attr('src', '../common/min2.svg');
      }
    } else {
      if (isMac) {
        $('#fullToggle').attr('src', '../common/max2.svg');
        $('#closeWinBtn, #closeWinBtn2').hide();
      } else {
        $('#fullToggle').attr('src', '../common/max.svg');
      }
    }

    $(function () {
      function Menu(cutLabel, copyLabel, pasteLabel) {
        ((menu = new gui.Menu()),
          (cut = new gui.MenuItem({
            label: cutLabel || 'Cut',
            click: function () {
              document.execCommand('cut');
            },
          })),
          (copy = new gui.MenuItem({
            label: copyLabel || 'Copy',
            click: function () {
              document.execCommand('copy');
            },
          })),
          (paste = new gui.MenuItem({
            label: pasteLabel || 'Paste',
            click: function () {
              document.execCommand('paste');
            },
          })));

        menu.append(cut);
        menu.append(copy);
        menu.append(paste);

        return menu;
      }

      var menu = new Menu(/* pass cut, copy, paste labels if you need i18n*/);
      $(document).on('contextmenu', function (e) {
        e.preventDefault();
        menu.popup(e.originalEvent.x, e.originalEvent.y);
      });
    });
    ///INITIATE
  });
}
