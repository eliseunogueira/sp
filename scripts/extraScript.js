////PORTUGUESE CHANGE START
function forSearch(word) {
  if (word != '') {
    if ($('#dictFrame2').length != 0) {
      $('#dictFrame2, #dictFrame').remove();
    } else {
      $('body').append(
        '<iframe id="dictFrame" src="../../dict/index.html"></iframe><div id="dictFrame2"><div>X</div></div>',
      );
      $('#dictFrame').load(function () {
        var $iframe = $('#dictFrame').contents();
        $iframe.find('#searchBox').val(word);
        $('#dictFrame')[0].contentWindow.forTrans();
      });
      $('#dictFrame2').on('click', function () {
        $('#dictFrame2, #dictFrame').remove();
        removeSelect();
      });
      if (dictAdded == false) {
        $('#menuBtn, #optionBtn, #pauseBtn, .menuTitleContainer').on(
          'click',
          function () {
            if ($('#dictFrame2').length != 0) {
              $('#dictFrame2, #dictFrame').remove();
              removeSelect();
            }
          },
        );
        dictAdded = true;
      }
    }
  }
}
function engSearch(word) {
  if (word != '') {
    if ($('#dictFrame2').length != 0) {
      $('#dictFrame2, #dictFrame').remove();
    } else {
      $('body').append(
        '<iframe id="dictFrame" src="../../dict/index.html"></iframe><div id="dictFrame2"><div>X</div></div>',
      );
      $('#dictFrame').load(function () {
        var $iframe = $('#dictFrame').contents();
        $iframe.find('#searchBox').val(word);
        $('#dictFrame')[0].contentWindow.engTrans();
      });
      $('#dictFrame2').on('click', function () {
        $('#dictFrame2, #dictFrame').remove();
        removeSelect();
      });
      if (dictAdded == false) {
        $('#menuBtn, #optionBtn, #pauseBtn, .menuTitleContainer').on(
          'click',
          function () {
            if ($('#dictFrame2').length != 0) {
              $('#dictFrame2, #dictFrame').remove();
              removeSelect();
            }
          },
        );
        dictAdded = true;
      }
    }
  }
}
function removeSelect() {
  var sel = window.getSelection ? window.getSelection() : document.selection;
  if (sel) {
    if (sel.removeAllRanges) {
      sel.removeAllRanges();
    } else if (sel.empty) {
      sel.empty();
    }
  }
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

///DO NOT MODIFY
var currentSection = 'Extra';
var currentSecShort = 'extra';
var currentProgram = 'Complete';
var lessonTitle = 'Extra Language Practice';
var currSentence;
var dragRight;
var currSentence2;
var jsNum;
var jsGroup;
var randomExampleNum;
var difficulty = 'hard';
var currLength;
var sentenceArray = [];
var searchCount;
var timedOut = false;
var soundType = '.ogg';
var soundName;
var currentDevice;
var audioSprite;
var currentSprite;
var onTimeUpdate;
var playSprite;
var currentTime;
var currAct;
var spaceCheck = false;
var duration;
var wordTime;
var micOn = true;
var afterRec = false;
var shufBad = 0;
var didIt = false;
var streak;
var streakMax;
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
var userEmail;
var tuvm58dj;
var storeInfo;
var scoreInfo;
var scoreNameArr;
var scoreNumArr;
///2018CHANGE
var currStory;
var stoTimer;
var maxTimer;
stoSec = parseInt(stoSec);
var currStoPos;
var stoLength;
var storyNum;
var stoSec;
var modeNum;
var endLangWord;
var swipeDir;
//2019NEW
var noPuzz = false;
//2019NEW
if (lessonLanguage == 'Spanish') {
  endLangWord = 'Fin';
}
///PORTUGUESE CHANGE START
else if (lessonLanguage == 'Portuguese') {
  endLangWord = 'Fim';
}
///PORTUGUESE CHANGE END
else if (lessonLanguage == 'French') {
  endLangWord = 'Fin';
} else if (lessonLanguage == 'Italian') {
  endLangWord = 'Fine';
} else if (lessonLanguage == 'German') {
  endLangWord = 'Ende';
}
///2018CHANGE

//2020 EXTRA START
var cardRaw;
var cardNumbers = [];
var cardNum = -1;
var dictAdded = false;
var flashCard = false;
var stoDelay;
//2020 EXTRA END

//////////////////DETERMINE IF MOBILE OR DESKTOP
if (
  /Android|webOS|iPhone|touch|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
) {
  currentDevice = 'mobile';
}

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

  ///2023 START
  if ($(window).innerWidth() < 550) {
    $('body').addClass('barOut');
  }
  ///2023 START

  //2020 EXTRA START////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////FUNCTION TO GENERATE CARDS BASED ON CARDRAW DATA START
  if (localStorage.getItem(storeInfo + 'cardsSTORE')) {
    cardRaw = localStorage.getItem(storeInfo + 'cardsSTORE');
    cardRaw = cardRaw.split(':');
  } else {
    cardRaw = [];
  }
  cardNumbers = [];
  var i;
  for (i = 0; i < cardRaw.length; i++) {
    var cardArr = cardRaw[i].split('|');
    if (cardArr.length == 3) {
      cardNumbers.push(cardRaw[i]);
    } else if (cardArr.length == 4) {
      var yy;
      for (yy = 1; yy <= parseInt(cardArr[3]); yy++) {
        cardNumbers.push(cardArr[0] + '|' + cardArr[1] + '|' + cardArr[2]);
      }
    }
  }

  var filtered = [];
  //PORTUGUESE 2 CHANGE START
  var laNum = [7, 8, 9, 35, 36, 37, 38, 39, 40, 87, 88, 89, 90, 91, 92, 93, 94];
  //PORTUGUESE 2 CHANGE END
  for (i = 0; i < cardNumbers.length; i++) {
    var cardFilter = cardNumbers[i].split('|');
    if (cardFilter[2] == 'c' && laNum.indexOf(parseInt(cardFilter[0])) == -1) {
    } else if (cardFilter[2] == 'b' && parseInt(cardFilter[1]) % 2 != 0) {
    } else {
      filtered.push(cardNumbers[i]);
    }
  }

  cardNumbers = filtered.slice(0);
  var shuffled = shuffle(cardNumbers);
  cardNumbers = shuffled.slice(0);

  avoidMultiple();
  ////FUNCTION TO GENERATE CARDS BASED ON CARDRAW DATA END

  ///MUSIC CHANGE START CHECK FOR OGG/MP3
  $('.btnDiff').on('click', function () {
    if (
      $('#mainMusic').length == 0 ||
      $('#mainMusic').attr('src') == undefined
    ) {
      $('#mainMusic').remove();
      $('body').append(
        '<audio id="mainMusic" loop src="../common/empty.ogg"></audio>',
      );
      $('#mainMusic').trigger('pause');
      document.getElementById('mainMusic').load();
      document.getElementById('mainMusic').addEventListener(
        'canplay',
        function () {
          $('#mainMusic').off();
          $('#mainMusic').trigger('play');
        },
        false,
      );
    }
  });
  ///MUSIC CHANGE END

  $('#dictBtn').on('click', function () {
    if ($('#dictFrame2').length != 0) {
      $('#dictFrame2, #dictFrame').remove();
    } else {
      $('body').append(
        '<iframe id="dictFrame" src="../dict/index.html"></iframe><div id="dictFrame2"><div>X</div></div>',
      );
      $('#dictFrame2').on('click', function () {
        $('#dictFrame2, #dictFrame').remove();
      });
      if (dictAdded == false) {
        $('#lengthBtn, .menuTitleContainer').on('click', function () {
          if ($('#dictFrame2').length != 0) {
            $('#dictFrame2, #dictFrame').remove();
          }
        });
        dictAdded = true;
      }
    }
  });
  if (currentDevice != 'mobile') {
    $('#dictBtn').hover(function () {
      $('#arrowLabel').text('LOAD TRANSLATOR');
      $('.instructions').toggleClass('showDiv');
    });
  }

  $('#act5').on('click', flashLoad);
  var actUrl = getUrlParam('convo', '');

  var actUrl2 = getUrlParam('pronun', '');
  if (actUrl2 != '') {
    $('#choice1').hide();
    $('#choice3').show();
    if (didIt == false) {
      recordInit();
    }
  }

  var saveLoc = window.location.href;
  saveLoc = saveLoc.split('extra/');
  saveLoc = 'extra/' + saveLoc[1];
  ///PORTUGUESE CHANGE START
  localStorage.setItem(storeInfo + 'saved', saveLoc);
  savePosition();
  ///PORTUGUESE CHANGE END

  if (actUrl != '') {
    bonusMode = true;
    jsNum = parseInt(actUrl);
    bonusLoad();

    $('.lessonTitle').on('click', function () {
      if (bonusMode) {
        reloadLesson();
      }
    });
    setTimeout(function () {
      $('#transCover').fadeOut();
    }, 1000);
    $('#lengthBtn, .scoreMeter, .scoreMeter2, .scoreMeter3').css({
      position: 'fixed',
      'z-index': '-2',
      top: '-3000px',
    });
    $(
      '<img id="menuBtn" src="../common/menu.svg" class="smallIcon"/>',
    ).insertBefore('#backBtn');
    $('#act2, #act5').hide();

    $('#choice1 h1').text('Select Conversation Extra Practice Type');
    $('#choice1').addClass('convoChoice');
    $('body').append(
      '<div class="instructions"><img class="quizBannerImage" src="../common/redArrow.svg"><b id="arrowLabel"></b></div><div id="loadLogo2">HERE' +
        "'" +
        'S WHERE YOU LEFT OFF ON THIS DEVICE...</div><div id="menuWrap" class="wrapper3"><div class="optionsIn gradientColor alignVerticalWin"><img id="menuSideLogo" src="../common/menu2.svg" class="menuLogo"/><table class="menuTable"><tr><td colspan="3"><h2 class="menuTitle2">MENU & NAVIGATION</h2></td></tr><tr><td class="menuBox" id="menuRestart"><img src="../common/menuIcon1.svg" class="menuIcon"/><h2 class="centerMenuItems">Restart</br>Lesson</h2></td><td class="menuBox" id="menuPrevious"><img src="../common/menuIcon4.svg" class="menuIcon"/><h2 class="centerMenuItems">Previous</br>Lesson</h2></td><td class="menuBox" id="menuNext"><img src="../common/menuIcon3.svg" class="menuIcon"/><h2 class="centerMenuItems">Next</br>Lesson</h2></td></tr><tr><td class="menuBox" id="menuQuiz"><img src="../common/menuIcon2.svg" class="menuIcon"/><h2 class="centerMenuItems">Practice &amp;</br>Exercises</h2></td><td class="menuBox" id="menuHome"><img src="../common/menuIcon5.svg" class="menuIcon"/><h2 class="centerMenuItems">Home</br>Screen</h2></td><td class="menuBox" id="menuMain"><img src="../common/logoConvo.svg" class="menuIcon"/><h2 id="menuTitleSection" class="centerMenuItems">Conversations</br>Menu</h2></td></tr></table></div></div><div id="bonusEnd"><h1>END OF CONVERSATION</h1><div class="wrapBtn wb1">CONTINUE</div><div class="wrapBtn wb2"><img src="../extra/images/extra.png" style="left: 30px;"/>PRACTICE SKILLS AGAIN</div</div>',
    );
    $('#stamp').append(
      '<img src="../common/menuIcon1.svg" id="restartBonus"/>',
    );
    $('#restartBonus').on('click', function () {
      localStorage.removeItem(storeInfo + 'convoBonus' + jsNum + '|' + currAct);
      randomExampleNum = -1;
      startLesson();
    });
    if (currentDevice != 'mobile') {
      $('#restartBonus').hover(function () {
        $('#arrowLabel').text('RESTART FROM THE BEGINNING');
        $('.instructions').toggleClass('showDiv');
      });
    }
    $('#menuBtn, .wb1').on('click', toggleMenu);
    $('.wb2').on('click', function () {
      $('#loadLogo').show();
      setTimeout(function () {
        location.reload();
      }, 100);
    });
    $('#menuWrap').on('click', function (e) {
      if (e.target == this) {
        toggleMenu();
      }
    });
    $('.menuBox').hover(
      function () {
        playSprite('rollover');
        $(this).addClass('menuBoxHover');
        var logoPath = $(this).children('img').attr('src');
        $('#menuSideLogo').attr('src', logoPath);
      },
      function () {
        $(this).removeClass('menuBoxHover');
        $('#menuSideLogo').attr('src', '../common/blank.svg');
      },
    );

    setTimeout(function () {
      if (sessionStorage['menuType'] == 'guidedSection') {
        $('#menuTitleSection').html('Recommended</br>Menu');
      } else if (sessionStorage['menuType'] == 'verbSection') {
        $('#menuTitleSection').html('Recommended</br>Verb Menu');
      }
    }, 1000);

    $('#menuRestart').on('click', reloadLesson);
    $('#menuNext').on('click', nextLesson);
    $('#menuPrevious').on('click', previousLesson);
    $('#menuHome, #menuMain2').on('click', homeMenu);
    $('#menuMain').on('click', mainMenu);
    $('#menuQuiz').on('click', reloadQuiz);

    //4.1 Start
    greenBub = [
      2, 3, 14, 17, 24, 26, 33, 37, 42, 43, 44, 52, 55, 60, 64, 66, 73,
    ];
    redBub = [
      5, 6, 8, 9, 18, 16, 25, 27, 29, 38, 40, 41, 46, 48, 49, 50, 53, 59, 69,
      70, 71,
    ];
    blueBub = [
      1, 10, 12, 13, 19, 20, 21, 22, 30, 31, 32, 35, 36, 39, 54, 56, 58, 62, 65,
      67, 74, 75, 76, 77,
    ];
    orangeBub = [4, 7, 11, 15, 23, 28, 47, 61];
    greyBub = [34, 45, 51, 57, 63, 68, 72, 78];
    var btnColor;
    //4.1 End

    if (greenBub.indexOf(jsNum) !== -1) {
      btnColor = ['#118000', '#203e00', '#118000', '#203e00'];
    } else if (redBub.indexOf(jsNum) !== -1) {
      btnColor = ['#d11a1a', '#6e0e0e', '#ba1717', '#570b0b'];
    } else if (blueBub.indexOf(jsNum) !== -1) {
      btnColor = ['#0a5d90', '#063561', '#0a5d90', '#063561'];
    } else if (orangeBub.indexOf(jsNum) !== -1) {
      btnColor = ['#ff7124', '#a13515', '#ff7124', '#a13515'];
    } else if (greyBub.indexOf(jsNum) !== -1) {
      btnColor = ['#474f52', '#2a3133', '#474f52', '#2a3133'];
    }

    $('.gradientColor').css({
      background:
        'url(../common/black.svg), linear-gradient(' +
        btnColor[0] +
        ',' +
        btnColor[1] +
        ')',
    });
    var x = window.matchMedia('(max-width: 510px)');
    bonusStyle(x);
    x.addListener(bonusStyle);
  } else {
    $('#transCover').fadeOut();
  }

  //2020 EXTRA END////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //2018CHANGES
  if (localStorage[storeInfo + 'extraScoresSTORE'] != null) {
    scoreInfo = localStorage[storeInfo + 'extraScoresSTORE'];
  } else {
    scoreInfo = '0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:3000000';
  }
  scoreNameArr = [
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
  ];
  scoreNumArr = scoreInfo.split(':');
  stoSec = scoreNumArr[15];
  modeNum = parseInt(scoreNumArr[17]);
  if (scoreNumArr[16].length == 1) {
    scoreNumArr[16] =
      '0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0';
  }
  //2018CHANGES

  if (
    scoreNameArr[10] != '0' ||
    scoreNameArr[11] != '0' ||
    scoreNameArr[12] != '0'
  ) {
    $('#dragImg').hide();
  }

  viewport = document.querySelector('meta[name=viewport]');
  if ($(window).innerWidth() < 350 || $(window).innerHeight() < 350) {
    viewport.setAttribute(
      'content',
      'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.7,minimum-scale=0.7,viewport-fit=cover',
    );
  } else if ($(window).innerWidth() < 450 || $(window).innerHeight() < 450) {
    if ($(window).innerWidth() > 760 || $(window).innerHeight() > 760) {
      viewport.setAttribute(
        'content',
        'initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.9,minimum-scale=0.9,viewport-fit=cover',
      );
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

  if (lessonLanguage == 'Spanish') {
    $('.charSp').show();
  }
  ///PORTUGUESE CHANGE START
  else if (lessonLanguage == 'Portuguese') {
    $('#extra4').append(
      '<div class="boardChar charPor">á</div><div class="boardChar charPor">â</div><div class="boardChar charPor">ã</div><div class="boardChar charPor">à</div><div class="boardChar charPor">ç</div><div class="boardChar charPor">é</div><div class="boardChar charPor">ê</div><div class="boardChar charPor">í</div><div class="boardChar charPor">ó</div><div class="boardChar charPor">ô</div><div class="boardChar charPor">õ</div><div class="boardChar charPor">ú</div>',
    );
    $('.charPor').show();
  }
  ///PORTUGUESE CHANGE END
  else if (lessonLanguage == 'French') {
    $('.charFr').show();
  } else if (lessonLanguage == 'Italian') {
    $('.charIta').show();
  } else if (lessonLanguage == 'German') {
    $('.charGer').show();
  }

  ///BACKGROUND
  currAct = 0;
  backChange();

  /////LOAD SOUND SPRITE
  audioSprite = document.getElementById('sfxSprite');
  audioSprite.addEventListener('timeupdate', onTimeUpdate, false);

  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf('android') > -1;
  if (isAndroid) {
    $('#answerForm').append(
      '<input type="email" id="writeAnswerField" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type Answer Here" style="-webkit-user-select: none; user-select: none;"/>',
    );
  } else {
    $('#musCol').hide();
    $('#menuPad').css({ height: '225px' });
    $('#answerForm').append(
      '<input type="text" id="writeAnswerField" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="Type Answer Here"/>',
    );
  }

  loadButtonsMain();

  ///////Ipad Keyboard Scroll Issue Fix
  $(document).on('blur', 'input, textarea', function () {
    setTimeout(function () {
      window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
      if (window.AndroidFullScreen) {
        window.AndroidFullScreen.immersiveMode();
      }
    }, 0);
  });
});
//////////////////////////////END INIT OPTIONS

function startLesson() {
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

  $('.wordSentence, .scoreMeter, .scoreMeter2').show();

  if (currAct < 2) {
    $('#extra1').fadeIn();
    $('.colorPic').hide();
    $('.playBtn, .nextBtn').addClass('disabled2');
  }
  //2020 EXTRA START REPLACE
  else if (currAct == 3) {
    $('.selCont, #dragImg, .ctrlBtn3C').hide();
    $('.selCont').css('opacity', '0');
    $('.selCont').css('opacity', '1');
    $('#dragImg2').show();
    $('#extra3').fadeIn();
    $('.colorPic').hide();
  }
  //2020 EXTRA END REPLACE
  else if (currAct == 4) {
    $('#extra4').fadeIn();
    $('.colorPic').show();
  }

  $('#choice2, #choice1').hide();
  $('#lengthBtn').show();

  ///2023 START
  $('body').removeClass('barOut');
  ///2023 END
  randomSentence();
}

///Load Random Sentence
function randomSentence() {
  //2020 EXTRA START
  if (bonusMode) {
    bonusSentence();
    return;
  }
  //2020 EXTRA END

  $('.forSentence').text('');
  $('.engSentence').text('');

  //START RANDOMIZE
  var groupArray = ['vocab', 'verb', 'convo', 'block'];
  var randomGroupNum = Math.floor(Math.random() * groupArray.length);
  jsGroup = groupArray[randomGroupNum];

  var lessonArray = [];
  ///2018CHANGE
  //4.1 start
  if (jsGroup == 'convo') {
    lessonArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 55, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
      76, 77, 78,
    ];
  }
  //4.1 end
  else if (jsGroup == 'vocab') {
    lessonArray = [
      7, 8, 9, 35, 36, 37, 38, 39, 40, 87, 88, 89, 90, 91, 92, 93, 94,
    ];
  } else if (jsGroup == 'verb') {
    if (lessonLanguage == 'Spanish') {
      lessonArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
        109, 110, 111, 112, 113, 114, 115, 116, 141, 142, 143, 144, 145, 146,
        147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
        161, 162, 163, 164, 165, 166, 167, 168, 169,
      ];
    }
    ///PORTUGUESE CHANGE START
    else if (lessonLanguage == 'Portuguese') {
      lessonArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
        109, 110, 111, 112, 113, 114, 115, 116, 141, 142, 143, 144, 145, 146,
        147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160,
        161, 162, 163, 164, 165, 166,
      ];
    }
    ///PORTUGUESE CHANGE END
    else if (lessonLanguage == 'French') {
      lessonArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
        109, 110, 111, 112, 113, 130, 131, 132, 133, 134, 135, 136, 137, 138,
        139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152,
        153, 154, 155,
      ];
    } else if (lessonLanguage == 'Italian') {
      lessonArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
        109, 110, 111, 112, 113, 132, 133, 134, 135, 136, 137, 138, 139, 140,
        141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154,
        155, 156, 157,
      ];
    } else if (lessonLanguage == 'German') {
      lessonArray = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
        109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 132, 133, 134,
        135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
        149, 150, 151, 152, 153, 154, 155, 156, 157,
      ];
    }
  } else if (jsGroup == 'block') {
    if (lessonLanguage == 'Spanish') {
      lessonArray = [
        2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20, 22, 23, 24, 26,
        27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 43, 44, 46, 47, 49, 50,
        52, 53, 54, 56, 57, 58, 60, 61, 62, 64, 65, 66, 67, 68, 70, 71, 72, 73,
        74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 86, 87, 89,
      ];
    }
    ///PORTUGUESE CHANGE START
    else if (lessonLanguage == 'Portuguese') {
      lessonArray = [
        2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 26,
        27, 28, 29, 31, 32, 33, 35, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 50,
        51, 53, 54, 55, 57, 58, 59, 60, 62, 63, 64, 66, 67, 68, 69, 70, 71, 73,
        74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 89, 90, 92,
      ];
    }
    ///PORTUGUESE CHANGE END
    else if (lessonLanguage == 'French') {
      lessonArray = [
        2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 19, 21, 22, 23, 24,
        26, 27, 28, 29, 31, 32, 33, 34, 36, 37, 38, 40, 41, 43, 44, 46, 47, 49,
        50, 52, 53, 55, 56, 58, 59, 60, 62, 63, 64, 66, 67, 68, 69, 71, 72, 73,
        74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 97, 98, 100,
      ];
    } else if (lessonLanguage == 'Italian') {
      lessonArray = [
        2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 19, 20, 21, 23, 24, 25,
        27, 28, 31, 32, 33, 34, 36, 37, 39, 40, 41, 42, 44, 45, 47, 48, 50, 51,
        53, 54, 55, 56, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73,
        74, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92, 93,
      ];
    } else if (lessonLanguage == 'German') {
      lessonArray = [
        3, 4, 9, 10, 11, 12, 13, 14, 16, 17, 18, 20, 21, 23, 24, 25, 27, 28, 29,
        31, 32, 34, 35, 37, 38, 39, 41, 42, 43, 45, 46, 47, 49, 50, 52, 53, 55,
        56, 58, 59, 60, 62, 63, 64, 66, 67, 69, 70, 71, 72, 73, 75, 76, 77, 78,
        79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 94, 95, 96, 98, 99,
        101, 102, 103, 104, 106, 107,
      ];
    }
  }

  ///2018CHANGE

  var randomLessonNum = Math.floor(Math.random() * lessonArray.length);
  jsNum = lessonArray[randomLessonNum];

  //START LOAD RANDOM FILE
  ///2020 EXTRA START///////////////////THIS IS FIX///////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////FLASH CARD CONTENT
  if (flashCard && cardNumbers.length >= 5) {
    ///FLASH CARD START
    cardNum++;

    if (cardNum >= cardNumbers.length) {
      $(
        '#writtenResult, #extra1, #extra3, #extra4, .bigPic, .smallPic, .wordSentence, .persons, #choice3, #choice2, #choice2b, #whiteWrap, #lengthBtn, .strikes, .scoreMeter, .scoreMeter2, .scoreMeter3, .storyCont, #storyChoices, #storyDiff',
      ).fadeOut();

      ///2023 START
      if ($(window).innerWidth() < 550) {
        $('body').addClass('barOut');
      }
      ///2023 END

      $('#bonusEnd').fadeIn();
      return;
    }

    var cardId = cardNumbers[cardNum].split('|');
    jsNum = parseInt(cardId[0]);
    randomExampleNum = parseInt(cardId[1]) - 1;
    if (cardId[2] == 'a') {
      jsGroup = 'block';
    } else if (cardId[2] == 'b') {
      jsGroup = 'verb';
    } else if (cardId[2] == 'c') {
      jsGroup = 'vocab';
    } else if (cardId[2] == 'd') {
      jsGroup = 'convo';
    }
    if ($('#loadedContent').length != 0) {
      $('#loadedContent').remove();
    }
    var createCont = document.createElement('div');
    createCont.id = 'loadedContent';
    var fileref = document.createElement('script');
    fileref.setAttribute('type', 'text/javascript');
    fileref.setAttribute('src', '../' + jsGroup + '/' + jsNum + '/content.js');
    createCont.appendChild(fileref);
    document.body.appendChild(createCont);
    fileref.onload = function () {
      currSentence = forExamples[randomExampleNum]
        .split('<strong>')
        .join('')
        .split('</strong>')
        .join('')
        .split('…')
        .join('...')
        .split(' .')
        .join('.')
        .split('  ')
        .join(' ');
      if (currSentence.charAt(currSentence.length - 1) == ' ') {
        currSentence = currSentence.slice(0, -1);
      }
      currSentence2 = engExamples[randomExampleNum]
        .split('<strong>')
        .join('')
        .split('</strong>')
        .join('')
        .split('<em>')
        .join('')
        .split('</em>')
        .join('')
        .split('…')
        .join('...')
        .split(' .')
        .join('.')
        .split('  ')
        .join(' ');
      currLength = currSentence.length;
      lessonArray = [
        7, 8, 9, 35, 36, 37, 38, 39, 40, 87, 88, 89, 90, 91, 92, 93, 94,
      ];
      if (jsGroup == 'vocab' && lessonArray.indexOf(parseInt(jsNum)) == -1) {
        $('#loadedContent').remove();
        restartRandom();
      } else if (jsGroup == 'verb' && parseInt(randomExampleNum) % 2 == 0) {
        $('#loadedContent').remove();
        restartRandom();
      } else if (
        currSentence.indexOf('(') > -1 ||
        currSentence.indexOf('/') > -1
      ) {
        $('#loadedContent').remove();
        restartRandom();
      } else {
        processRandom();
      }
    };
    ///FLASH CARD END
  } else {
    //// NORMAL SHUFFLE START
    if ($('#loadedContent').length != 0) {
      $('#loadedContent').remove();
    }
    var createCont = document.createElement('div');
    createCont.id = 'loadedContent';
    var fileref = document.createElement('script');
    fileref.setAttribute('type', 'text/javascript');
    fileref.setAttribute('src', '../' + jsGroup + '/' + jsNum + '/content.js');
    createCont.appendChild(fileref);
    document.body.appendChild(createCont);
    fileref.onload = function () {
      //END LOAD RANDOM FILE
      ///START SCRIPT LOADED
      randomExampleNum = Math.floor(Math.random() * forExamples.length);
      if (jsGroup != 'convo') {
        var whileNum = 0;
        while (
          forExamples[randomExampleNum].indexOf('%') > -1 ||
          forExamples[randomExampleNum].indexOf(' / ') > -1 ||
          forExamples[randomExampleNum].indexOf('<strong>') == -1
        ) {
          randomExampleNum = Math.round(
            Math.floor(Math.random() * forExamples.length),
          );
          whileNum++;
          if (whileNum >= 10) {
            break;
          }
        }
      }
      currSentence = forExamples[randomExampleNum]
        .split('<strong>')
        .join('')
        .split('</strong>')
        .join('')
        .split('…')
        .join('...')
        .split(' .')
        .join('.')
        .split('  ')
        .join(' ');
      if (currSentence.charAt(currSentence.length - 1) == ' ') {
        currSentence = currSentence.slice(0, -1);
      }
      currSentence2 = engExamples[randomExampleNum]
        .split('<strong>')
        .join('')
        .split('</strong>')
        .join('')
        .split('<em>')
        .join('')
        .split('</em>')
        .join('')
        .split('…')
        .join('...')
        .split(' .')
        .join('.')
        .split('  ')
        .join(' ');
      currLength = currSentence.length;

      if (searchCount > 2000) {
        $('.forSentence').text('End of Session');
        $('.engSentence').text('Restart Lesson');
        return;
      }
      if (
        $.inArray(
          jsGroup + '|' + jsNum + '|' + randomExampleNum,
          sentenceArray,
        ) > -1
      ) {
        restartRandom();
        return;
      }
      if (forExamples[randomExampleNum].indexOf('<br>') > -1) {
        restartRandom();
        return;
      }

      searchCount++;

      if (currSentence.indexOf('(') > -1 || currSentence.indexOf('/') > -1) {
        $('#loadedContent').remove();
        restartRandom();
      } else if (difficulty == 'easy') {
        if (currLength >= 30 || currLength < 11) {
          restartRandom();
        } else {
          processRandom();
        }
      } else if (difficulty == 'medium') {
        if (currLength >= 56 || currLength < 31) {
          restartRandom();
        } else {
          processRandom();
        }
      } else if (difficulty == 'hard') {
        if (currLength < 57) {
          restartRandom();
        } else {
          processRandom();
        }
      }
    };
    ///NORMAL SHUFFLE END
  }

  ///2020 EXTRA END//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

function restartRandom() {
  $('.persons, .bigPic, .smallPic').hide();
  $('.persons, .bigPic, .smallPic').attr('src', '');
  randomSentence();
}

function processRandom() {
  $('.ctrlBtn1B').removeClass('used');
  shufBad = 0;
  $('.strikes').hide();

  //CODE IF ACTIVITY 1 & 2
  if (currAct <= 2) {
    document
      .getElementById('nativeAudio')
      .addEventListener('loadedmetadata', function (_event) {
        duration = document.getElementById('nativeAudio').duration;
      });

    $('.smSentence').text(currSentence);
    $('.handWrite').text(currSentence2);
  }

  //END CODE IF ACTIVITY 3

  ////2019/////////////////////////////////////////////////////////////////////////////////////////////////////

  if (currAct == 3) {
    $('.smSentence').hide();
    $('.wordSel, .wordSelB').removeClass('greenBorder');

    dragRight = currSentence
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
      .split('¿')
      .join('')
      .split('¡')
      .join('')
      .split(';')
      .join('')
      .split(',')
      .join('')
      .split('-')
      .join(' ')
      .toLowerCase();
    var wObjects = dragRight.split(' ');

    wObjects = shuffle(wObjects);
    $('.wordSel').removeClass('disPuzz');
    $('.wordSel, .wordSelB, #dragImg, .ctrlBtn3C').hide();
    //2019NEW
    $('.selCont').css('opacity', '0');
    $('.wordSel, .wordSelB').text('');
    $('#dragImg2').show();
    for (i = 1; i <= wObjects.length; ++i) {
      $('#wSel' + i).text(wObjects[i - 1]);
      $('.wordSelB')
        .eq(i - 1)
        .text(wObjects[i - 1]);
      $('#wSel' + i).show();
    }

    $('.selCont').show();
    setTimeout(function () {
      $('.selCont').animate({ opacity: 1 });
    }, 200);
    //2019NEW
    $('.handWrite').text(currSentence2);
  }

  //END CODE IF ACTIVITY 3

  //CODE IF ACTIVITY 4
  if (currAct == 4) {
    var lCalc = currSentence.split('-').join(' ').split(' ');
    if (lCalc < 4 && lCalc != 0) {
      $('.colorPic').css('background', '#eaa62f');
    } else if (lCalc == 0) {
      $('.colorPic').css('background', '#549e32');
    } else {
      $('.colorPic').css('background', '#cc1111');
    }
    $('#writeAnswerField').val('');
    $('#writeAnswerField').attr(
      'placeholder',
      'Type ' + lCalc.length + ' Words Here...',
    );
    $('.colorPic').html(lCalc.length);
    checkWordsLeft();
    $('.engSentence').text(currSentence2);
  }

  //END CODE IF ACTIVITY 4

  ////2019/////////////////////////////////////////////////////////////////////////////////////////////////////
  searchCount = 1;
  ////2020 EXTRA START
  sentenceArray.push(jsGroup + '|' + jsNum + '|' + randomExampleNum);
  ////2020 EXTRA END

  sentenceArray.push(jsGroup + jsNum);

  if (jsGroup === 'convo') {
    $('#extraPic, .smallPic').css({
      'background-image':
        'url(' + '../' + jsGroup + '/' + jsNum + '/images/background.png)',
    });

    //4.1 start
    if (randomExampleNum % 2 == 0) {
      soundName = '1fast' + Math.round((randomExampleNum + 1) * 0.5);
      if (currAct != 1.2) {
        loadFastSound();
      } else {
        loadNotPlay();
      }
      $('#person1').attr(
        'src',
        '../' + jsGroup + '/' + jsNum + '/images/person1.png',
      );
      $('#person1').css({ transform: 'scaleX(1)' });
    } else {
      soundName = '2fast' + Math.round(randomExampleNum * 0.5);
      if (currAct != 1.2) {
        loadFastSound();
      } else {
        loadNotPlay();
      }
      $('#person1').attr(
        'src',
        '../' + jsGroup + '/' + jsNum + '/images/person2.png',
      );
      $('#person1').css({ transform: 'scaleX(-1)' });
      ///Exception for changing persons start
      if (jsNum >= 65 && jsNum <= 69) {
        var foto = randomExampleNum;
        var fotNum = 100;
        if (jsNum == 65) {
          fotNum = 7;
        } else if (jsNum == 68) {
          fotNum = 5;
        } else if (jsNum == 69) {
          fotNum = 11;
        }
        if (foto < fotNum) {
          $('#person1').attr(
            'src',
            '../' + jsGroup + '/' + jsNum + '/images/person2.png',
          );
        } else {
          $('#person1').attr(
            'src',
            '../' + jsGroup + '/' + jsNum + '/images/person2b.png',
          );
        }
        if (jsNum == 65 && foto >= 11) {
          $('#person1').attr(
            'src',
            '../' + jsGroup + '/' + jsNum + '/images/person2c.png',
          );
        }
      }
      ///Exception for changing persons end
    }
    //4.1 end

    $('.persons, .bigPic, .smallPic').fadeIn();
    $('.scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn').show();
  } else if (jsGroup === 'vocab') {
    ///PORTUGUESE 2 START
    var vNum;
    if (lessonType == 'sentence') {
      vNum = Math.ceil(randomExampleNum * 0.5);
    } else {
      vNum = Math.ceil((randomExampleNum + 1) * 0.5);
    }
    $('#extraPic, .smallPic').css({
      'background-image':
        'url(' + '../' + jsGroup + '/' + jsNum + '/images/pic' + vNum + '.jpg)',
    });
    var numMasc = 1;
    var numFem = 1;
    var fastSounds = [];
    for (var numD = 0; numD < engExamples.length; numD++) {
      if (forExamples[numD].charAt(0) == '*') {
        fastSounds.push('femsound' + numFem);
        numFem++;
        numFem++;
      } else {
        fastSounds.push('sound' + numMasc);
        numMasc++;
        numMasc++;
      }
    }
    soundName = fastSounds[randomExampleNum];
    $('.bigPic, .smallPic').fadeIn();
    setTimeout(function () {
      if (currAct != 1.2) {
        loadFastSound();
      } else {
        loadNotPlay();
      }
    }, 400);
    ///PORTUGUESE 2 END
  } else if (jsGroup === 'verb') {
    $('#extraPic, .smallPic').css({
      'background-image':
        'url(' +
        '../' +
        jsGroup +
        '/' +
        jsNum +
        '/images/pic' +
        (randomExampleNum + 1) * 0.5 +
        '.jpg)',
    });
    $('.bigPic, .smallPic').fadeIn();
    soundName = 'sound' + (randomExampleNum + 0.5) * 2;
    setTimeout(function () {
      if (currAct != 1.2) {
        loadFastSound();
      } else {
        loadNotPlay();
      }
    }, 400);
  } else if (jsGroup === 'block') {
    $('#extraPic, .smallPic').css({
      'background-image':
        'url(' +
        '../' +
        jsGroup +
        '/' +
        jsNum +
        '/images/pic' +
        (randomExampleNum + 1) +
        '.jpg)',
    });
    $('.bigPic, .smallPic').fadeIn();
    soundName = 'sound' + (randomExampleNum + 0.5) * 2;
    setTimeout(function () {
      if (currAct != 1.2) {
        loadFastSound();
      } else {
        loadNotPlay();
      }
    }, 400);
  }
}

///2019///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkWordsLeft() {
  var lCalc1 = currSentence.trim().split('-').join(' ').split(' ');
  //2020
  var lCalc2 = $('#writeAnswerField')
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
    .split('¡')
    .join('')
    .split('?')
    .join('')
    .split('¿')
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
    .split('‘')
    .join("'")
    .split('‘')
    .join("'")
    .split('’')
    .join("'")
    .split('–')
    .join('-')
    .split('—')
    .join('-')
    .split('-')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ');
  //2020
  var wLeft = lCalc1.length - lCalc2.length;

  //PORTUGUESE 2 START
  var dasher = currSentence
    .replace(
      /[a-zA-Z0-9àèìòùâãêîôûçáéíóúñäëïöüõÀÈÌÒÙÂÃÊÎÔÛÇÁÉÍÓÕÚÑÄËÏÖÜß']/g,
      '_',
    )
    .split('’')
    .join('')
    .split('-')
    .join(' ')
    .split(' ');
  //PORTUGUESE 2 END

  ////////////
  if (lCalc2.length > 0 && lCalc2[0] != '') {
    ///
    for (i = 0; i < lCalc2.length; i++) {
      dasher[i] = dasher[i]
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
        .join(lCalc2[i]);
    }
    ///
  }
  ////////////

  var spArr = [];

  for (i = 0; i < currSentence.length; i++) {
    if (currSentence.charAt(i) == ' ') {
      spArr.push(' ');
    } else if (currSentence.charAt(i) == '-') {
      spArr.push('-');
    }
  }

  var dasher2 = '';
  for (i = 0; i < dasher.length - 1; i++) {
    dasher2 = dasher2 + dasher[i] + spArr[i];
  }
  dasher2 = dasher2 + dasher[dasher.length - 1];

  $('.forSentence').text(dasher2);

  if ($('#writeAnswerField').val().trim().length == 0) {
    wLeft = lCalc1.length;
  }

  if (wLeft < 4 && wLeft != 0) {
    $('.colorPic').css('background', '#eaa62f');
  } else if (wLeft == 0) {
    $('.colorPic').css('background', '#549e32');
  } else {
    $('.colorPic').css('background', '#cc1111');
  }
  $('.colorPic').html(wLeft);
}

///2019////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadNotPlay() {
  //CODE IF ACTIVITY 1 & 2
  if (currAct <= 2) {
    $('#nativeAudio').trigger('pause');
    $('#nativeAudio').attr(
      'src',
      '../' + jsGroup + '/' + jsNum + '/sounds/' + soundName + soundType,
    );
  }
  ///CODE FOR OTHERS
  else {
    $('#mainSound').trigger('pause');
    $('#mainSound').attr(
      'src',
      '../' + jsGroup + '/' + jsNum + '/sounds/' + soundName + soundType,
    );
  }
}

function loadFastSound() {
  //CODE IF ACTIVITY 1 & 2
  if (currAct <= 2) {
    $('#nativeAudio').trigger('pause');
    $('#nativeAudio').attr(
      'src',
      '../' + jsGroup + '/' + jsNum + '/sounds/' + soundName + soundType,
    );
    document.getElementById('nativeAudio').load();
    document
      .getElementById('nativeAudio')
      .addEventListener('canplay', playSound);
  }
  ///CODE FOR OTHERS
  else {
    $('#mainSound').trigger('pause');
    $('#mainSound').attr(
      'src',
      '../' + jsGroup + '/' + jsNum + '/sounds/' + soundName + soundType,
    );
    document.getElementById('mainSound').load();
    document.getElementById('mainSound').addEventListener('canplay', playSound);
  }
}

function loadSlowSound() {
  var soundName2;
  if (jsGroup === 'convo') {
    soundName2 = soundName.split('fast').join('slow');
  } else {
    soundName2 = parseInt(soundName.split('sound').join(''));
    soundName2 = 'sound' + (soundName2 + 1);
  }

  $('#mainSound').trigger('pause');
  $('#mainSound').attr(
    'src',
    '../' + jsGroup + '/' + jsNum + '/sounds/' + soundName2 + soundType,
  );
  document.getElementById('mainSound').load();
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function playSound() {
  //CODE IF ACTIVITY 1 & 2
  if (currAct <= 2) {
    document
      .getElementById('nativeAudio')
      .removeEventListener('canplay', playSound);
    $('#nativeAudio').trigger('play');
  }
  ///CODE FOR OTHERS
  else {
    document
      .getElementById('mainSound')
      .removeEventListener('canplay', playSound);
    $('#mainSound').trigger('play');
  }
}

window.onload = function () {
  $('.menuBar').css({ visibility: 'visible' });
};

///2018CHANGE
function backAction() {
  //2023
  if ($('.explanations').is(':visible')) {
    $('.explanations').hide();
    return;
  }
  //2023

  ///2020 EXTRA START
  if ($('#dictFrame2').length != 0) {
    $('#dictFrame2, #dictFrame').remove();
    return;
  }
  ///2020 EXTRA END
  //2020 EXTRA START REPLACE
  var actUrl2 = getUrlParam('pronun', '');
  if (actUrl2 != '' && $('#choice3').is(':visible')) {
    window.location = '../pronun/index.html';
    return;
  }
  if ($('#choice1').is(':visible')) {
    if (bonusMode) {
      reloadQuiz();
      return;
    }
    homeMenu();
  }
  //2020 EXTRA END REPLACE
  else if ($('#storyChoices').is(':visible')) {
    clearInterval(stoTimer);
    $('#storyChoices').hide();
    $('#storyDiff').show();
  } else if ($('#storyPic').is(':visible')) {
    clearInterval(stoTimer);
    $('#storyChoices').show();
    $('.storyCont').hide();
    resetStory();
    backChange();
  } else {
    location.reload();
  }
}
///2018CHANGE
function resetStory() {
  ///UPDATE SLIDES
  var slideNums = scoreNumArr[16].split('|');
  for (x = 0; x <= 59; x++) {
    var storySplit = storyText[x].split('**');
    var stoLength = storySplit.length * 0.5;
    slideNum = slideNums[x];
    divName = '#stDesc' + (x + 1) + ' b';
    $(divName).text(slideNum);
    ///UPDATE PERCENTAGE
    var perCalc = slideNum / stoLength;
    perCalc = perCalc * 100;
    perCalc = perCalc.toFixed(0);
    divName = '#stDesc' + (x + 1) + ' i';
    $(divName).text(perCalc);
    ///UPDATE CHECK
    if (perCalc == 100) {
      divName = '#stPic' + (x + 1) + ' img';
      $(divName).show();
    }
  }
}

function loadButtonsMain() {
  $(window).resize(function () {
    resizeTitle();
    resizePage();
    setTimeout(function () {
      resizePage();
    }, 200);
  });
  $(window).load(function () {
    resizeTitle();
    resizePage();
  });

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
      mainSound.volume = ui.value;
      sfxSprite.volume = ui.value;
      localStorage['programVolume'] = ui.value;
    },
  });
  if (localStorage['programVolume'] != null) {
    audio.volume = localStorage['programVolume'];
    mainSound.volume = localStorage['programVolume'];
    sfxSprite.volume = localStorage['programVolume'];
    $('#volDiv2').slider('value', localStorage['programVolume']);
  }

  ///BOTH
  $('#menuMain2').on('click', homeMenu);
  $('#lengthBtn').on('click', function () {
    streakNumbers();
    $('#choice2b, #whiteWrap').show();
  });
  ///2018CHANGE
  $('#backBtn, .bigBack').on('click', backAction);
  window.onkeyup = function (e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 13 && $('#writeAnswerField').is(':visible')) {
      if (
        !$('#writeAnswerField').is(':focus') &&
        $('#writeAnswerField').val() == ''
      ) {
        $('#writeAnswerField').focus();
      }
    } else if (key == 8 && !$('#writeAnswerField').is(':visible')) {
      backAction();
    } else if (
      key == 37 &&
      $('.stoLeft').is(':visible') &&
      $('#stoCounter').is(':visible')
    ) {
      storyPrev();
    } else if (
      key == 39 &&
      $('.stoRight').is(':visible') &&
      $('#stoCounter').is(':visible')
    ) {
      storyNext();
    }
  };
  ///2018CHANGE
  ///2020 EXTRA START
  if (cardNumbers.length > 5) {
    $('#choice2b').append(
      '<h1 class="flashExtra" id="flashEx2"><img src="../flash/images/activity5.svg" alt=""/><span>Or... Practice sentences from Flash Cards</span></h1>',
    );
    $('#choice2').append(
      '<h1 class="flashExtra" id="flashEx"><img src="../flash/images/activity5.svg" alt=""/><span>Or... Practice sentences from Flash Cards</span></h1>',
    );
    $('body').append(
      '<div id="bonusEnd" style="height: 240px;"><h1 style="margin-bottom: 0;">END OF FLASH CARDS</h1><p style="margin-bottom: 30px;">Please load more Flash Cards from the lessons.<br>(Only sentences are used in these exercises)</p><div class="wrapBtn wb2"><img src="../extra/images/extra.png" style="left: 30px;"/>PRACTICE SKILLS AGAIN</div</div>',
    );
    $('.wb2').on('click', function () {
      $('#loadLogo').show();
      setTimeout(function () {
        location.reload();
      }, 100);
    });
  }

  ///2020 FIX
  $('#act3').on('click', function () {
    if ($('#lisNote').length == 0) {
      $('#choice2').append(
        '<h2 id="lisNote" style="position: fixed; bottom: 10px; top: auto; color: rgba(255,255,255,0.5); left: 5%; width: 90%; font-size: 18px; display:none;"><span>HINT: For more listening practice, check out our AUDIO course in the conversation lessons. Choose any conversation lesson, and press <strong>AUDIO ONLY</strong>.</span></h2>',
      );
      $('#lisNote').fadeIn();
      $('#act1, #act4').on('click', function () {
        $('#lisNote').hide();
      });
    } else {
      $('#lisNote').show();
    }
  });
  ///2020 FIX

  $('#btnEasy').on('click', function () {
    difficulty = 'easy';
    flashCard = false;
    streakMaker();
    startLesson();
  });
  $('#btnMedium').on('click', function () {
    difficulty = 'medium';
    flashCard = false;
    streakMaker();
    startLesson();
  });
  $('#btnHard').on('click', function () {
    difficulty = 'hard';
    flashCard = false;
    streakMaker();
    startLesson();
  });
  $('#flashEx').on('click', function () {
    flashCard = true;
    cardNum = -1;
    streakMaker();
    startLesson();
  });

  $('#btnEasy2').on('click', function () {
    difficulty = 'easy';
    $('#choice2b, #whiteWrap').hide();
    flashCard = false;
    streakMaker();
    restartRandom();
  });
  $('#btnMedium2').on('click', function () {
    difficulty = 'medium';
    $('#choice2b, #whiteWrap').hide();
    flashCard = false;
    streakMaker();
    restartRandom();
  });
  $('#btnHard2').on('click', function () {
    difficulty = 'hard';
    $('#choice2b, #whiteWrap').hide();
    flashCard = false;
    streakMaker();
    restartRandom();
  });
  $('#flashEx2').on('click', function () {
    $('#choice2b, #whiteWrap').hide();
    cardNum = -1;
    flashCard = true;
    streakMaker();
    restartRandom();
  });
  ///2020 EXTRA END

  $('body').keydown(function (e) {
    if (currAct == 4) {
      if (e.keyCode == 13 && $('#writtenResult').is(':visible')) {
        $('#writtenResult').hide();
        $('#writeAnswerField').val('');
        if (currentDevice != 'mobile') {
          setTimeout(function () {
            $('#writeAnswerField').focus();
          }, 10);
        }
        $(
          '.wordSentence, #extra4, .scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn, .bigPic, .smallPic',
        ).fadeIn();
        restartRandom();
      } else {
        setTimeout(function () {
          checkWordsLeft();
        }, 10);
      }
    }
  });

  $('.quesBtn').on('click', function () {
    $('.explanations').fadeIn();
  });
  $('#act1').on('click', function () {
    $('body').removeClass('writing');
    $('#choice1').hide();
    $('#choice3').show();
    if (didIt == false) {
      recordInit();
    }
  });
  ///2020 EXTRA START REPLACE
  //2023 START
  $('#proAct1').on('click', function () {
    currAct = 1.1;
    $('#bigBtnCont').removeClass('topPad');
    $('#choice3').hide();
    if (!bonusMode) {
      $('#choice2').show();
      streakNumbers();
    } else {
      if (
        localStorage.getItem(storeInfo + 'convoBonus' + jsNum + '|' + currAct)
      ) {
        randomExampleNum = parseInt(
          localStorage.getItem(
            storeInfo + 'convoBonus' + jsNum + '|' + currAct,
          ),
        );
        $('#loadLogo2').show();
        setTimeout(function () {
          $('#loadLogo2').fadeOut();
          startLesson();
        }, 1000);
      } else {
        randomExampleNum = -1;
        setTimeout(function () {
          startLesson();
        }, 200);
      }
    }
    $('.smSentence, .ctrlBtn1B').show();
    $('#extra1').css({ height: '160px' });
    backChange();
  });
  $('#proAct2').on('click', function () {
    currAct = 1.2;
    $('#bigBtnCont').removeClass('topPad');
    $('#choice3, .ctrlBtn1B').hide();
    if (!bonusMode) {
      $('#choice2').show();
      streakNumbers();
    } else {
      if (
        localStorage.getItem(storeInfo + 'convoBonus' + jsNum + '|' + currAct)
      ) {
        randomExampleNum = parseInt(
          localStorage.getItem(
            storeInfo + 'convoBonus' + jsNum + '|' + currAct,
          ),
        );
        $('#loadLogo2').show();
        setTimeout(function () {
          $('#loadLogo2').fadeOut();
          startLesson();
        }, 1000);
      } else {
        randomExampleNum = -1;
        setTimeout(function () {
          startLesson();
        }, 200);
      }
    }
    $('.smSentence').show();
    $('#extra1').css({ height: '160px' });
    backChange();
  });
  $('#proAct3').on('click', function () {
    currAct = 1.3;
    $('#bigBtnCont').addClass('topPad');
    $('#choice3, .smSentence').hide();
    if (!bonusMode) {
      $('#choice2').show();
      streakNumbers();
    } else {
      if (
        localStorage.getItem(storeInfo + 'convoBonus' + jsNum + '|' + currAct)
      ) {
        randomExampleNum = parseInt(
          localStorage.getItem(
            storeInfo + 'convoBonus' + jsNum + '|' + currAct,
          ),
        );
        $('#loadLogo2').show();
        setTimeout(function () {
          $('#loadLogo2').fadeOut();
          startLesson();
        }, 1000);
      } else {
        randomExampleNum = -1;
        setTimeout(function () {
          startLesson();
        }, 200);
      }
    }
    $('.ctrlBtn1B').show();
    $('#extra1').css({ height: '120px' });
    backChange();
  });

  ////////STORY BUTTONS ACTIONS
  $('.storyBtns').on('click', function () {
    $('#storyPic').on('touchstart touchend mouseup mouseout mousedown');
    $('#storyPic')
      .on('touchstart mousedown', function (e) {
        e.preventDefault();
        if (!$('#storyText').is(':visible')) {
          return;
        }
        if (modeNum == 2 && $('#storyEng').text() != 'The End') {
          stoDelay = setTimeout(function () {
            modeNum = parseInt(modeNum);
            $('#storyEng').addClass('altText');
            $('#storyEng').show();
            $('#storyPic').addClass('pressed');
          }, 100);
        }
      })
      .on('touchend mouseup mouseout', function (e) {
        e.preventDefault();
        if (modeNum == 2 && $('#storyEng').text() != 'The End') {
          clearTimeout(stoDelay);
          modeNum = parseInt(modeNum);
          $('#storyEng').removeClass('altText');
          $('#storyPic').removeClass('pressed');
          $('#storyEng').hide();
        }
      });
    ///2023	END

    ///SET TIMES
    var stoSec2 = stoSec;
    var stoH = Math.floor(stoSec2 / 3600);
    $('#stoHour').html(stoH);
    stoSec2 %= 3600;
    var stoM = ('0' + Math.floor(stoSec2 / 60)).slice(-2);
    $('#stoMin').html(stoM);
    var stoS = ('0' + (stoSec2 % 60)).slice(-2);
    $('#stoSec').html(stoS);
    $('#stoTimer').css('color', 'white');
    maxTimer = 0;
    clearInterval(stoTimer);
    stoTimer = setInterval(timerActions, 1000);
    ///SET TIMES
    storyNum = $(this).attr('id').split('story').join('');
    $('#background').css({
      'background-image': 'url(story/storyB' + storyNum + '.jpg)',
    });
    currStory = storyText[storyNum - 1].split('**');
    stoLength = currStory.length * 0.5;

    var slideNums = scoreNumArr[16].split('|');
    currStoPos = parseInt(slideNums[storyNum - 1]);
    if (currStoPos == 0) {
      currStoPos = 1;
    }

    $('#stoCounter b').text(currStoPos);
    $('#stoCounter em').text(stoLength);
    $('#storyFor').html(currStory[currStoPos * 2 - 2]);
    $('#storyEng').text(currStory[currStoPos * 2 - 1]);
    $('#storyPic img').attr('src', 'story/story' + storyNum + '.png');
    $('#storyChoices').hide();
    setTimeout(function () {
      $('.storyCont').fadeIn('1000');
      modeInit();
      if (currStoPos == 1) {
        $('.stoLeft, .stoStart').hide();
      }
      if (currStoPos >= stoLength) {
        $('.stoRight, .bigRight').hide();
        $('.bigBack').show();
      } else {
        $('.bigBack').hide();
      }
    }, 300);
  });
  ////////STORY BUTTONS ACTIONS

  $('#act2').on('click', function () {
    currAct = 2;
    $('body').removeClass('writing');
    $('#choice1').hide();
    $('#storyDiff').show();
  });
  $('#stoAct1').on('click', function () {
    $('#storyDiff, .storyBtns').hide();
    $('.sho, #storyChoices').show();
    backChange();
  });
  $('#stoAct2').on('click', function () {
    $('#storyDiff, .storyBtns').hide();
    $('.med, #storyChoices').show();
    backChange();
  });
  $('#stoAct3').on('click', function () {
    $('#storyDiff, .storyBtns').hide();
    $('.adv, #storyChoices').show();
    backChange();
  });
  ///PORTUGUESE CHANGE START
  if (
    lessonLanguage == 'Spanish' ||
    lessonLanguage == 'German' ||
    lessonLanguage == 'Portuguese'
  ) {
    $('.pastWarn').hide();
  }
  ///PORTUGUESE CHANGE END

  $('.stoRight').on('click', function () {
    storyNext();
  });
  $('.stoStart').on('click', function () {
    storyStart();
  });
  $('.stoLeft').on('click', function () {
    storyPrev();
  });
  $('.stoMode').on('click', function () {
    storyMode();
  });

  ///2020 EXTRA START
  ///PAN START
  $('#storyText')
    .hammer()
    .on('panstart', function (ev) {
      clearTimeout(stoDelay);
      if ($('#storyEng').hasClass('altText')) {
        return;
      }
      $('#storyText').css('color', 'darkGrey');
      $('#storyText').css('cursor', 'grabbing');
    });

  ///PAN END
  $('#storyText')
    .hammer()
    .on('panend', function (ev) {
      clearTimeout(stoDelay);
      if ($('#storyEng').hasClass('altText')) {
        return;
      }
      $('#storyText').css('color', '#100c08');
      $('#storyText').css('cursor', 'grab');

      ///PORTUGUESE CHANGE START
      //var range = window.getSelection() || document.getSelection() || document.selection.createRange();var word = $.trim(range.toString());
      //if(word != '') {if($("#storyEng").text().indexOf(word) != -1){engSearch(word);} else {forSearch(word);} return;}
      ///PORTUGUESE CHANGE END

      if (ev.gesture.distance >= 25) {
        if (swipeDir == 'right') {
          if (
            $('.stoRight').is(':visible') &&
            $('#stoCounter').is(':visible')
          ) {
            storyNext();
          }
        } else if (swipeDir == 'left') {
          if ($('.stoLeft').is(':visible') && $('#stoCounter').is(':visible')) {
            storyPrev();
          }
        }
      }
    });

  ///PAN MOVE
  $('#storyText')
    .hammer()
    .on('panright', function () {
      swipeDir = 'left';
      clearTimeout(stoDelay);
      if ($('#storyEng').hasClass('altText')) {
        return;
      }
    });
  $('#storyText')
    .hammer()
    .on('panleft', function () {
      swipeDir = 'right';
      clearTimeout(stoDelay);
      if ($('#storyEng').hasClass('altText')) {
        return;
      }
    });
  ///2020 EXTRA END

  $('.bigLeft, #smallLeft').on('click', function () {
    if ($('.stoLeft').is(':visible') && $('#stoCounter').is(':visible')) {
      storyPrev();
    }
  });
  $('.bigRight, #smallRight').on('click', function () {
    if ($('.stoRight').is(':visible') && $('#stoCounter').is(':visible')) {
      storyNext();
    }
  });

  if (currentDevice != 'mobile') {
    $('.stoRight, .stoLeft, .storyBtns, .stoMode, .bigBack, .stoStart').on(
      'mouseenter',
      function () {
        playSprite('rollover');
      },
    );
    $('.stoRight, .stoLeft, .bigRight, .bigLeft, .bigBack, .stoStart').hover(
      function () {
        $(this).toggleClass('fullOpacity');
      },
    );
    $('.stoMode').hover(function () {
      $(this).toggleClass('greyBack');
    });
  }

  var slideNums = scoreNumArr[16].split('|');
  for (x = 0; x <= 59; x++) {
    ///UPDATE STORYLENGTHS
    var storySplit = storyText[x].split('**');
    var stoLength = storySplit.length * 0.5;
    var divName = '#stDesc' + (x + 1) + ' em';
    $(divName).text(stoLength);
    ///UPDATE SLIDES
    slideNum = slideNums[x];
    divName = '#stDesc' + (x + 1) + ' b';
    $(divName).text(slideNum);
    ///UPDATE PERCENTAGE
    var perCalc = slideNum / stoLength;
    perCalc = perCalc * 100;

    perCalc = perCalc.toFixed(0);
    divName = '#stDesc' + (x + 1) + ' i';
    $(divName).text(perCalc);
    ///UPDATE CHECK
    if (perCalc == 100) {
      divName = '#stPic' + (x + 1) + ' img';
      $(divName).show();
    }
    ///UPDATE CHECK
  }

  ///2020 EXTRA START REPLACE/////////////////////////////////////////////////////////////

  $('.wordSelB').on('click', function () {
    if (
      $('.wordSelB:visible').length == 1 ||
      $('.wordSel:visible').length == $('.wordSelB:visible').length
    ) {
      noPuzz = true;
      $('.wordSelB').fadeOut('400', function () {
        setTimeout(function () {
          $('.wordSelB').text('');
          $('.wordSel').removeClass('disPuzz');
          $('#dragImg, .ctrlBtn3C').hide();
          $('.selCont').css('opacity', '1');
          $('#dragImg2').fadeIn();
          setTimeout(function () {
            noPuzz = false;
          }, 500);
        }, 500);
      });
    } else {
      var disWord = $(this).text();
      var disEle = $(this);
      $(this).fadeOut();
      for (xx = 0; xx < $('.disPuzz').length; xx++) {
        if (disWord == $('.disPuzz').eq(xx).text()) {
          $('.disPuzz').eq(xx).removeClass('disPuzz');
          xx = 100;
        }
      }
      setTimeout(function () {
        disEle.text('');
        var xx;
        var xxArr = [];
        for (xx = 0; xx < $('.wordSelB:visible').length; xx++) {
          var xxWord = $('.wordSelB:visible').eq(xx).text();
          if (xxWord != '') {
            xxArr.push($('.wordSelB:visible').eq(xx).text());
          }
        }
        $('.wordSelB').hide();
        $('.wordSelB').text('');
        for (xx = 0; xx < xxArr.length; xx++) {
          $('.wordSelB').eq(xx).text(xxArr[xx]);
          $('.wordSelB').eq(xx).show();
        }
      }, 500);
    }
  });
  ///
  $('#act3').on('click', function () {
    currAct = 3;
    $('body').removeClass('writing');
    $('#choice1').hide();
    if (!bonusMode) {
      streakNumbers();
      $('#choice2').show();
    } else {
      if (
        localStorage.getItem(storeInfo + 'convoBonus' + jsNum + '|' + currAct)
      ) {
        randomExampleNum = parseInt(
          localStorage.getItem(
            storeInfo + 'convoBonus' + jsNum + '|' + currAct,
          ),
        );
        $('#loadLogo2').show();
        setTimeout(function () {
          $('#loadLogo2').fadeOut();
          startLesson();
        }, 1000);
      } else {
        randomExampleNum = -1;
        setTimeout(function () {
          startLesson();
        }, 200);
      }
    }
    backChange();
  });
  $('#act4').on('click', function () {
    currAct = 4;
    $('body').addClass('writing');
    $('#choice1').hide();
    if (!bonusMode) {
      streakNumbers();
      $('#choice2').show();
    } else {
      if (
        localStorage.getItem(storeInfo + 'convoBonus' + jsNum + '|' + currAct)
      ) {
        randomExampleNum = parseInt(
          localStorage.getItem(
            storeInfo + 'convoBonus' + jsNum + '|' + currAct,
          ),
        );
        $('#loadLogo2').show();
        setTimeout(function () {
          $('#loadLogo2').fadeOut();
        }, 1000);
        setTimeout(function () {
          startLesson();
        }, 1300);
      } else {
        randomExampleNum = -1;
        setTimeout(function () {
          startLesson();
        }, 200);
      }
    }
    backChange();
  });
  ///2020 EXTRA END REPLACE/////////////////////////////////////////////////////////////////////////////////////////////////////

  $('.selContB').sortable({ containment: 'parent', tolerance: 'pointer' });
  ///2019NEW
  $('.wordSel').on('click', function () {
    if (noPuzz) {
      return;
    }
    $('#dragImg2').hide();
    var clickPuzz = $(this).text();
    $(this).addClass('disPuzz');
    var puzzCount = $('.wordSelB:visible').length;
    puzzCount++;
    $('.wordSelB')
      .eq(puzzCount - 1)
      .text(clickPuzz);
    $('.wordSelB')
      .eq(puzzCount - 1)
      .fadeIn();
    if ($('.wordSel:visible').length == puzzCount) {
      setTimeout(function () {
        checkAnswer3();
      }, 300);
    }
  });
  //2020 EXTRA START DELETE
  //2020 EXTRA END
  ///2019NEW

  $('.selContB').hover(function () {
    $('.wordSelB').toggleClass('hoverPuzz');
  });

  ////2019/////////////////////////////////////////////////////////////////////////////////////////////////////
  $('.boardChar').on('click', addCharacter);
  $('#answerForm').submit(function (ev) {
    ev.preventDefault();
    if (
      $('#writeAnswerField').is(':focus') &&
      $('#writeAnswerField').val() == ''
    ) {
      return;
    }
    checkAnswer4();
  });
  $('.ctrlBtn1').on('click', function () {
    $('#writtenResult').hide();
    $('#writeAnswerField').val('');
    checkWordsLeft();
    $(
      '.wordSentence, #extra4, .scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn, .bigPic, .smallPic',
    ).fadeIn();
    setTimeout(function () {
      loadFastSound();
    }, 400);
  });
  //2020 EXTRA START REPLACE
  //2020 EXTRA START END
  $('.ctrlBtn1B').on('click', function () {
    loadFastSound();
    if (currentDevice != 'mobile') {
      setTimeout(function () {
        $('#writeAnswerField').focus();
      }, 10);
    }
  });
  $('.slowImg').on('click', function () {
    loadSlowSound();
    if (currentDevice != 'mobile') {
      setTimeout(function () {
        $('#writeAnswerField').focus();
      }, 10);
    }
  });
  ///2018CHANGE

  ///////////////UPDATE STORY
  $('.lessonTitle').on('click', function () {
    if (currAct == 2) {
      resetStory();
    }
  });
  ///////////////UPDATE STORY

  $('.ctrlBtn2, .lessonTitle, #x2Btn').on('click', function () {
    if (currAct == 3 && $('.wordSelB').hasClass('greenBorder')) {
      return;
    }
    if (currAct < 2) {
      $('#nativeAudio').trigger('pause');
    } else {
      $('#mainSound').trigger('pause');
    }
    currAct = 0;
    backChange();
    $(
      '#writtenResult, #extra1, #extra3, #extra4, .bigPic, .smallPic, .wordSentence, .persons, #choice3, #choice2, #choice2b, #whiteWrap, #lengthBtn, .strikes, .scoreMeter, .scoreMeter2, .scoreMeter3, .storyCont, #storyChoices, #storyDiff',
    ).hide();

    ///2023 START
    if ($(window).innerWidth() < 550) {
      $('body').addClass('barOut');
    }
    ///2023 END

    clearInterval(stoTimer);
    $('#choice1').fadeIn();
    $('#writeAnswerField').val('');

    ///2021A
    if (bonusMode) {
      $('.menuTitleContainer').html(lessonTitle);
    }
    ///2021A
  });
  ///2018CHANGE
  $('.explanations').on('click', function () {
    $('.explanations').hide();
  });
  $('.ctrlBtn3').on('click', function () {
    $('#writtenResult').hide();
    $('#writeAnswerField').val('');

    if (currentDevice != 'mobile') {
      setTimeout(function () {
        $('#writeAnswerField').focus();
      }, 10);
    }

    $(
      '.wordSentence, #extra4, .scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn, .bigPic, .smallPic',
    ).show();
    restartRandom();
  });
  $('.ctrlBtn3C').on('click', checkAnswer3);
  $('.ctrlBtn3D').on('click', checkAnswer4);

  $('#x2bBtn, #whiteWrap').on('click', function () {
    $('#choice2b, #whiteWrap').hide();
  });

  //////RECORD STUFF
  $('.recordBtn').on('click', recordSound);
  $('.playBtn').on('click', playAgain);
  $('.ctrlBtn3A, .nextBtn').on('click', loadNext);

  document.getElementById('audio').addEventListener('ended', doneRecording);

  document.getElementById('nativeAudio').addEventListener('ended', doneNative);
  ////RECORD STUFF

  if (currentDevice == 'mobile') {
  } else {
    ///////DESKTOP BUTTON MOUSE OPTIONS
    $(
      '.smallIcon, .menuTitleContainer, #menuMain2, .btnDiff, .btnDiff2, .acts, .quesBtn, .playBtn, .recordBtn, .nextBtn, .proActs, .xBtn, .slowImg',
    ).on('mouseenter', function () {
      playSprite('rollover');
    });
    $(
      '.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo, .menuTitleContainer, .btnDiff, .btnDiff2, .acts, .ctrlBtns, .ctrlBtns2, .boardChar, .quesBtn, .playBtn, .recordBtn, .nextBtn, .proActs, .xBtn, .slowImg',
    ).hover(function () {
      $(this).toggleClass('fullOpacity');
    });
  }
}

///2018CHANGE
function timerActions() {
  maxTimer++;
  if (maxTimer >= 240) {
    $('#stoTimer').css('color', 'red');
    return;
  }
  stoSec++;
  var stoSec2 = stoSec;
  var stoH = Math.floor(stoSec2 / 3600);
  $('#stoHour').html(stoH);
  stoSec2 %= 3600;
  var stoM = ('0' + Math.floor(stoSec2 / 60)).slice(-2);
  $('#stoMin').html(stoM);
  var stoS = ('0' + (stoSec2 % 60)).slice(-2);
  $('#stoSec').html(stoS);
}
///2018CHANGE
///STREAK BAR
function streakMaker() {
  var locNum = scoreNameArr.indexOf(currAct + difficulty);
  if (currAct < 2) {
    streak = scoreNumArr[locNum];
    $('.scoreMeter3').hide();
    if (Math.round(streak * 0.1) <= 36) {
      $('.scoreMeter').css({
        'background-image':
          'url(images/score' + Math.round(streak * 0.1) + '.png)',
      });
    } else {
      $('.scoreMeter').css({ 'background-image': 'url(images/score36.png)' });
    }
    $('#scoreNum1').text(streak);
  } else {
    streakMax = scoreNumArr[locNum];
    streak = 0;
    $('.scoreMeter3').show();
    $('#scoreNum2').text(streakMax);
    if (streak <= 36) {
      $('.scoreMeter').css({
        'background-image': 'url(images/score' + streak + '.png)',
      });
    } else {
      $('.scoreMeter').css({ 'background-image': 'url(images/score36.png)' });
    }
    $('#scoreNum1').text(streak);
  }
}

///STREAK BAR
function streakNumbers() {
  if (currAct < 2) {
    $('.scText1').html(
      'Practiced: <strong>' +
        scoreNumArr[scoreNameArr.indexOf(currAct + 'easy')] +
        '</strong>',
    );
    $('.scText2').html(
      'Practiced: <strong>' +
        scoreNumArr[scoreNameArr.indexOf(currAct + 'medium')] +
        '</strong>',
    );
    $('.scText3').html(
      'Practiced: <strong>' +
        scoreNumArr[scoreNameArr.indexOf(currAct + 'hard')] +
        '</strong>',
    );
  } else {
    $('.scText1').html(
      'Best Streak: <strong>' +
        scoreNumArr[scoreNameArr.indexOf(currAct + 'easy')] +
        '</strong>',
    );
    $('.scText2').html(
      'Best Streak: <strong>' +
        scoreNumArr[scoreNameArr.indexOf(currAct + 'medium')] +
        '</strong>',
    );
    $('.scText3').html(
      'Best Streak: <strong>' +
        scoreNumArr[scoreNameArr.indexOf(currAct + 'hard')] +
        '</strong>',
    );
  }
}

///RESTORE RECORDING
function restore() {
  $.voice.stop();
}

///RECORD UNIT
function recordInit() {
  didIt = true;
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
  if (localStorage['pronunVol'] != null) {
    nativeAudio.volume = localStorage['pronunVol'];
    $('#volDiv').slider('value', localStorage['pronunVol']);
  }

  $.voice.record($('#live').is(':checked'), function () {
    $.voice.stop();
  });
  setTimeout(function () {
    if (micOn == false) {
      $('#recordText').html('No Microphone Detected');
      $('#micWarn').show();
      $('.recordBtn').addClass('disabled');
    }
  }, 500);
}

///RECORD SOUND FUNCTION
function recordSound() {
  afterRec = false;
  if (micOn == false) {
    $('#recordText').html('No Microphone Detected');
    $('#micWarn').show();
    $('.recordBtn').addClass('disabled');
    return;
  }
  $('#recordText').html('Recording...');
  $.voice.record($('#live').is(':checked'), function () {
    $('.recordBtn').addClass('disabled');
    $('.playBtn, .nextBtn, .ctrlBtn1B, .ctrlBtn2, .ctrlBtn3A').addClass(
      'disabled2',
    );

    if (currAct != 1.2) {
      wordTime = duration * 1000 * 1.7;
    } else {
      wordTime = duration * 1000 * 2;
    }

    animateTimer();
    setTimeout(function () {
      playRecording();
    }, wordTime);
  });
}

///PLAY SOUND FUNCTION
function playRecording() {
  $.voice.export(function (url) {
    $('#recordText').text('Playing: You');
    updatePro();
    if (currAct != 1.2) {
      wordTime = duration * 1000 * 1.7;
    } else {
      wordTime = duration * 1000 * 2;
    }
    animateTimer();
    $('#audio').attr('src', url);
    $('#audio')[0].play();
  }, 'URL');
  restore();
}

///PLAY SOUND AGAIN
function playAgain() {
  $('#recordText').text('Playing: You');
  if (currAct != 1.2) {
    wordTime = duration * 1000 * 1.7;
  } else {
    wordTime = duration * 1000 * 2;
  }
  animateTimer();
  $('#audio')[0].play();
}

///PLAY SOUND AGAIN
function loadNext() {
  $('#recordText').text('Press to Record');
  $('.playBtn, .nextBtn').addClass('disabled2');
  afterRec = false;
  $('.timerMeter > .timerSpan').stop();
  $('.timerMeter > .timerSpan').css({ width: '0px' });
  restartRandom();
  if (micOn == false) {
    $('#recordText').html('No Microphone Detected');
    $('#micWarn').show();
    $('.recordBtn').addClass('disabled');
  }
}

///WHEN DONE RECORDING
function doneRecording() {
  $('#recordText').text('Playing: Native');
  afterRec = true;
  wordTime = duration * 1000 + 200;
  animateTimer();
  loadFastSound();
}
///WHEN DONE NATIVE
function doneNative() {
  if (currAct <= 2 && afterRec == true) {
    $('#recordText').text('Press to Record');
    $('.timerMeter > .timerSpan').stop();
    $('.timerMeter > .timerSpan').css({ width: '0px' });
    afterRec = false;
    $('.recordBtn').removeClass('disabled');
    $('.playBtn, .nextBtn, .ctrlBtn1B, .ctrlBtn2, .ctrlBtn3A').removeClass(
      'disabled2',
    );
  }
}

function animateTimer() {
  $('.timerMeter > .timerSpan').stop();
  $('.timerMeter > .timerSpan').css({ width: '0px' });
  $('.timerMeter > .timerSpan').each(function () {
    $(this)
      .width(0)
      .animate({ width: $('.timerMeter').width() }, wordTime);
  });
}

///END RECORD

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////HOME MENU

//2020 EXTRA START
//2020 EXTRA END

//2020 EXTRA START
function avoidMultiple() {
  ////////////FUNCTION TO AVOID TWO IN A ROW START
  var yy;
  var shuffled = cardNumbers.slice(0);
  cardNumbers = [];
  cardNumbers.push(shuffled[0]);
  var doubles = [];
  //REMOVE IN A ROW START
  for (yy = 1; yy < shuffled.length; yy++) {
    if (shuffled[yy] == shuffled[yy - 1]) {
      if (shuffled[yy] != shuffled[yy - 2]) {
        doubles.push(shuffled[yy]);
      }
    } else {
      cardNumbers.push(shuffled[yy]);
    }
  }
  //REMOVE IN A ROW END
  //PUT BACK DOUBLES START
  for (yy = 0; yy < doubles.length; yy++) {
    //CHECK EACH POSITION FOR IN A ROW
    var ee;
    for (ee = cardNumbers.length - 1; ee > 1; ee--) {
      if (
        cardNumbers[ee - 1] != doubles[yy] &&
        cardNumbers[ee] != doubles[yy]
      ) {
        cardNumbers.splice(ee, 0, doubles[yy]);
        ee = 0;
      }
    }
  }
  //PUT BACK DOUBLES END
  ////////////FUNCTION TO AVOID TWO IN A ROW END
}

//2020 EXTRA END

///2018CHANGE
function modeInit() {
  modeNum = parseInt(modeNum);
  $('.langImg').hide();
  if (modeNum == 0) {
    $('#modeImg').attr('src', 'images/mode0.png');
    $('#modeText').html('Bilingual&nbsp;Mode');
    $('#storyEng, #storyFor').show();
  } else if (modeNum == 1) {
    $('#modeImg').attr('src', 'images/mode1.png');
    $('#modeText').html('Alternating&nbsp;Mode');
    $('#storyFor').hide();
    $('#storyEng, #engImg').show();
  } else if (modeNum == 2) {
    $('#modeImg').attr('src', 'images/mode2.png');
    $('#modeText').html(lessonLanguage + '&nbsp;Only');
    $('#storyFor').show();
    $('#storyEng').hide();
  }
}

function storyMode() {
  modeNum = parseInt(modeNum);
  if (modeNum == 0) {
    modeNum = 1;
  } else if (modeNum == 1) {
    modeNum = 2;
  } else if (modeNum == 2) {
    modeNum = 0;
  }

  if (modeNum == 0) {
    $('#modeImg').attr('src', 'images/mode0.png');
    $('#modeText').html('Bilingual&nbsp;Mode');
    $('#storyEng').show();
    $('#storyFor').show();
    $('.langImg').hide();
  } else if (modeNum == 1) {
    $('#modeImg').attr('src', 'images/mode1.png');
    $('#modeText').html('Alternating&nbsp;Mode');
    $('.langImg').hide();
    $('#storyEng, #engImg').show();
    $('#storyFor').hide();
  } else if (modeNum == 2) {
    $('#modeImg').attr('src', 'images/mode2.png');
    $('#modeText').html(lessonLanguage + '&nbsp;Only');
    $('.langImg').hide();
    $('#storyEng').hide();
    $('#storyFor').show();
  }

  updateStory();
}

function storyNext() {
  $('#stoTimer').css('color', 'white');
  maxTimer = 0;
  $('.stoLeft, .stoStart').show();

  if (modeNum == 1 && $('#storyEng').is(':visible')) {
    $('#storyEng, #engImg').hide();
    $('#storyFor, #forImg').show();
    if ($('#storyEng').text() == 'The End') {
      $('.stoRight, .bigRight').hide();
      $('.bigBack').show();
    }
    return;
  } else if (modeNum == 1 && !$('#storyEng').is(':visible')) {
    $('#storyEng, #engImg').show();
    $('#storyFor, #forImg').hide();
  }

  if (currStoPos == stoLength) {
    $('#storyFor').html(endLangWord);
    $('#storyEng').text('The End');
    if (modeNum != 1) {
      $('.stoRight, .bigRight').hide();
      $('.bigBack').show();
    }
    return;
  } else {
    $('.stoRight, .bigRight').show();
    $('.bigBack').hide();
  }

  stoLength = currStory.length * 0.5;
  currStoPos = currStoPos + 1;
  $('#stoCounter b').text(currStoPos);
  $('#storyFor').html(currStory[currStoPos * 2 - 2]);
  $('#storyEng').text(currStory[currStoPos * 2 - 1]);

  updateStory();
}

function storyPrev() {
  $('#stoTimer').css('color', 'white');
  maxTimer = 0;
  $('.stoRight, .bigRight').show();
  $('.bigBack').hide();

  if (modeNum == 1 && $('#storyFor').is(':visible')) {
    $('#storyFor, #forImg').hide();
    $('#storyEng, #engImg').show();
    if (currStoPos == 1) {
      $('.stoLeft, .stoStart').hide();
    }
    return;
  } else if (modeNum == 1 && !$('#storyFor').is(':visible')) {
    $('#storyFor, #forImg').show();
    $('#storyEng, #engImg').hide();
  }

  stoLength = currStory.length * 0.5;
  currStoPos = currStoPos - 1;
  if (currStoPos <= 1) {
    currStoPos = 1;
  }

  $('#stoCounter b').text(currStoPos);
  $('#storyFor').html(currStory[currStoPos * 2 - 2]);
  $('#storyEng').text(currStory[currStoPos * 2 - 1]);
  if (currStoPos == 1) {
    if (modeNum != 1) {
      $('.stoLeft, .stoStart').hide();
    }
  } else {
    $('.stoLeft, .stoStart').show();
  }
  updateStory();
}

function storyStart() {
  currStoPos = 1;
  $('#stoTimer').css('color', 'white');
  maxTimer = 0;
  $('.stoRight, .bigRight').show();
  $('.bigBack').hide();
  if (modeNum == 1 && $('#storyFor').is(':visible')) {
    $('#storyFor, #forImg').hide();
    $('#storyEng, #engImg').show();
    if (currStoPos == 1) {
      $('.stoLeft, .stoStart').hide();
    }
    return;
  } else if (modeNum == 1 && !$('#storyFor').is(':visible')) {
    $('#storyFor, #forImg').show();
    $('#storyEng, #engImg').hide();
  }
  stoLength = currStory.length * 0.5;
  currStoPos = currStoPos - 1;
  if (currStoPos <= 1) {
    currStoPos = 1;
  }
  $('#stoCounter b').text(currStoPos);
  $('#storyFor').html(currStory[currStoPos * 2 - 2]);
  $('#storyEng').text(currStory[currStoPos * 2 - 1]);
  if (currStoPos == 1) {
    if (modeNum != 1) {
      $('.stoLeft, .stoStart').hide();
    }
  } else {
    $('.stoLeft, .stoStart').show();
  }
  updateStory();
}

///2018CHANGE

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////MAIN MENU
///2020
function backChange() {
  $('.scoreMeter, .scoreMeter2').removeClass('pronun1');
  $('.scoreMeter3').css({ visibility: 'hidden' });
  if (currAct == 1.1) {
    $('#background').css({
      'background-image': 'url(images/background1a.jpg)',
    });
    $('.scoreMeter, .scoreMeter2').addClass('pronun1');
    $('.wordSentence').addClass('invisible');
    $('.bigPic').css({ top: '75px' });
    $('.handWrite').show();
    $('.props').hide();
    $('.timerMeter > .timerSpan').css({ background: '#00cc00', width: 0 });
  }
  if (currAct == 1.2) {
    $('#background').css({
      'background-image': 'url(images/background1b.jpg)',
    });
    $('.scoreMeter, .scoreMeter2').addClass('pronun1');
    $('.wordSentence').addClass('invisible');
    $('.bigPic').css({ top: '75px' });
    $('.handWrite').show();
    $('.props').hide();
    $('.timerMeter > .timerSpan').css({ background: '#ADD8E6', width: 0 });
  }
  if (currAct == 1.3) {
    $('#background').css({
      'background-image': 'url(images/background1c.jpg)',
    });
    $('.scoreMeter, .scoreMeter2').addClass('pronun1');
    $('.wordSentence').addClass('invisible');
    $('.bigPic').css({ top: '65px' });
    $('.handWrite').show();
    $('.props').hide();
    $('.timerMeter > .timerSpan').css({ background: '#FF0000', width: 0 });
  } else if (currAct == 3) {
    $('.scoreMeter3').css({ visibility: 'visible' });
    if (window.innerHeight > window.innerWidth) {
      $('.bigPic').css({ top: '55px' });
      $('.scoreMeter, .scoreMeter2').css({ top: '70px', bottom: 'auto' });
      $('.scoreMeter3').css({ top: '120px', bottom: 'auto' });
    } else {
      $('.bigPic').css({ top: '80px' });
      $('.scoreMeter, .scoreMeter2').css({ top: '95px', bottom: 'auto' });
      $('.scoreMeter3').css({ top: '145px', bottom: 'auto' });
    }
    $('#background').css({ 'background-image': 'url(images/background3.jpg)' });
    $('.wordSentence').addClass('invisible');
    $('.handWrite').show();
  } else if (currAct == 4) {
    $('.scoreMeter3').css({ visibility: 'visible' });
    $('#background').css({ 'background-image': 'url(images/background4.jpg' });
    $('.scoreMeter, .scoreMeter2').css({ top: '215px', bottom: 'auto' });
    $('.scoreMeter3').css({
      top: '260px',
      left: 'auto',
      right: '20px',
      bottom: 'auto',
    });
    $('.wordSentence').removeClass('invisible');
    $('.bigPic').css({ top: '200px' });
    $('.handWrite').hide();
  } else if (currAct == 0) {
    $('#background').css({ 'background-image': 'url(images/background0.jpg)' });
    $('.props, .handWrite').hide();
  }
  ///2018CHANGE
  else if (currAct == 2) {
    $('#background').css({ 'background-image': 'url(images/background0.jpg)' });
    $('.props, .handWrite').hide();
  }
  ///2018CHANGE

  if (currAct < 2) {
    $('.scoreMeter2').css({ 'background-image': 'url(images/scoreBack1.png)' });
    $('.scoreMeter3').css({ top: '2000%', bottom: 'auto' });
  } else {
    $('.scoreMeter2').css({ 'background-image': 'url(images/scoreBack2.png)' });
    $('.ctrlBtn1B').show();
  }

  ///2020 EXTRA START
  if (bonusMode) {
    $('#background').css({
      'background-image': 'url(../convo/' + jsNum + '/images/background.png)',
      filter: 'brightness(40%) blur(3px)',
    });
  }
  ///2020 EXTRA END
}
///2020

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
  $('#writeAnswerField').focus();
  $('#writeAnswerField').caret(cursorPos + 1);
}

///REMOVE PUNCT
function puncRemove(c) {
  return c
    .split('î')
    .join('i')
    .split('Î')
    .join('I')
    .split('ß')
    .join('ss')
    .split('û')
    .join('u')
    .split('Û')
    .join('U')
    .split('ô')
    .join('o')
    .split('Ô')
    .join('O')
    .split('.')
    .join('')
    .split('?')
    .join('')
    .split('!')
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

///FIND HYPHENS
function hyphens(source, find) {
  var result = [];
  for (i = 0; i < source.length; ++i) {
    if (source.substring(i, i + find.length) == find) {
      result.push(i);
    }
  }
  return result;
}

///Replace Hyphens
function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substr(0, index) + chr + str.substr(index + 1);
}

////2019/////////////////////////////////////////////////////////////////////////////////////////////////////
function checkAnswer3() {
  var dragCont = $('.selContB')
    .html()
    .split('<div class="pad ui-sortable-handle"></div>')
    .join('')
    .split('</li>')
    .join('')
    .split('<')
    .join('>')
    .split('>');
  var dragAns = [];
  for (i = 0; i < dragCont.length; ++i) {
    if (dragCont[i].length < 60) {
      dragAns.push(dragCont[i]);
    }
  }
  dragAns = dragAns.join(' ').replace(/(\r\n|\n|\r)/gm, '');

  dragRight = dragRight.split(' ').join('');
  dragAns = dragAns.split(' ').join('');

  if (dragRight == dragAns) {
    $('.wordSelB').addClass('greenBorder');
    $('#goodImg').show();
    playSprite('quizGood');
    streak++;
    setTimeout(function () {
      $('#goodImg').fadeOut();
      restartRandom();
    }, 2000);
  } else {
    $('.wordSelB').addClass('redBorder');
    playSprite('quizBad');
    streak = 0;
    $('#dragImg, .ctrlBtn3C').fadeIn();
    $('.selCont').css('opacity', '0');
    if (shufBad == 0) {
      $('#strike1').show();
      shufBad++;
    } else if (shufBad == 1) {
      $('#strike2').show();
      shufBad++;
    } else if (shufBad == 2) {
      $('.smSentence').text(currSentence);
      $('#strike3').show();
      $('.smSentence').fadeIn();
      shufBad++;
    }
    setTimeout(function () {
      loadFastSound();
      $('.wordSelB').removeClass('redBorder');
    }, 1000);
  }
  updateStreak();
}
////2019/////////////////////////////////////////////////////////////////////////////////////////////////////

// UPDATE STREAK
function updateStreak() {
  //2020 EXTRA START
  if (bonusMode) {
    return;
  }
  //2020 EXTRA END
  if (streak <= 36) {
    $('.scoreMeter').css({
      'background-image': 'url(images/score' + streak + '.png)',
    });
  } else {
    $('.scoreMeter').css({ 'background-image': 'url(images/score36.png)' });
  }
  $('#scoreNum1').text(streak);
  //CHECK IF STREAK IS HIGER THAN RECORD
  if (streak > parseInt(streakMax)) {
    streakMax = streak;
    $('#scoreNum2').text(streakMax);
    var locNum = scoreNameArr.indexOf(currAct + difficulty);
    scoreNumArr[locNum] = streakMax;
    scoreInfo = scoreNumArr.join(':');
    localStorage[storeInfo + 'extraScoresSTORE'] = scoreInfo;
    //updateToDB
    infoToUpdate = scoreInfo;
    fieldToUpdate = 'extraScores';
    updateDatabase();
  }
  //end
}
///END UPDATE STREAK

// UPDATE PRONUNCIATION STREAK
function updatePro() {
  //2020 EXTRA START
  if (bonusMode) {
    return;
  }
  //2020 EXTRA END
  streak++;
  $('.scoreMeter').css({
    'background-image': 'url(images/score' + Math.round(streak * 0.1) + '.png)',
  });
  $('#scoreNum1').text(streak);
  var locNum = scoreNameArr.indexOf(currAct + difficulty);
  scoreNumArr[locNum] = streak;
  scoreInfo = scoreNumArr.join(':');
  localStorage[storeInfo + 'extraScoresSTORE'] = scoreInfo;
  //updateToDB
  infoToUpdate = scoreInfo;
  fieldToUpdate = 'extraScores';
  updateDatabase();
  //end
}
///END UPDATE STREAK
////2018CHANGE UPDATE STORY
function updateStory() {
  ///UPDATE SECONDS
  scoreNumArr[15] = stoSec;

  ///UPDATE SLIDES
  var stoSlide = scoreNumArr[16].split('|');
  stoSlide[storyNum - 1] = currStoPos;
  scoreNumArr[16] = stoSlide.join('|');

  ///UPDATE MODE
  scoreNumArr[17] = modeNum;

  ///UPDATE TO DATABASE
  scoreInfo = scoreNumArr.join(':');
  localStorage[storeInfo + 'extraScoresSTORE'] = scoreInfo;

  //updateToDB
  infoToUpdate = scoreInfo;
  fieldToUpdate = 'extraScores';
  updateDatabase();
}

////2018CHANGE UPDATE STORY

///////////CHECK WRITTEN ANSWER
function checkAnswer4() {
  //2020 START
  var wordStr1 = currSentence
    .split('`')
    .join("'")
    .split('‘')
    .join("'")
    .split('‘')
    .join("'")
    .split('’')
    .join("'")
    .split('–')
    .join('-')
    .split('—')
    .join('-')
    .split('-')
    .join('-');
  var wordStr2 = $('#writeAnswerField')
    .val()
    .split('`')
    .join("'")
    .split('‘')
    .join("'")
    .split('‘')
    .join("'")
    .split('’')
    .join("'")
    .split('–')
    .join('-')
    .split('—')
    .join('-')
    .split('-')
    .join('-');
  //2020 END

  var wordArr1 = wordStr1.split('-').join(' ').split(' ');
  var wordArr2 = wordStr2.split('-').join(' ').split(' ');

  var wordsRight = 0;
  var wordsWrong = 0;
  var wordsAccent = 0;

  if (currentDevice == 'mobile') {
    $('#writeAnswerField').blur();
  }
  wordsRight = 0;
  wordsWrong = 0;
  wordsAccent = 0;
  ///CHECK IF WORDS IN SENTENCE MATCH
  for (i = 0; i < wordArr1.length; i++) {
    if (!wordArr2[i]) {
      wordsWrong++;
    } else if (
      puncRemove(wordArr1[i].toLowerCase()) ==
      puncRemove(wordArr2[i].toLowerCase())
    ) {
      wordsRight++;
    }

    ///CHECK IF LETTERS HAVE MISSING ACCENT
    else if (
      removeAccent(puncRemove(wordArr1[i].toLowerCase())) ==
      removeAccent(puncRemove(wordArr2[i].toLowerCase()))
    ) {
      wordsAccent++;
      ///CHECK IF LETTERS IN WRONG WORD MATCH
      //Initiate blank word
      var blankW = '';
      //Start loop letter Check
      for (ii = 0; ii < wordArr1[i].length || ii < wordArr2[i].length; ii++) {
        ///CHECK IN LETTER IS CORRECT
        var letter1 = wordArr1[i][ii];
        var letter2 = wordArr2[i][ii];

        if (letter1) {
          letter1 = wordArr1[i][ii].toLowerCase();
        }
        if (letter2) {
          letter2 = wordArr2[i][ii].toLowerCase();
        }

        if (letter1 && letter1 == letter2) {
          blankW = blankW + wordArr2[i][ii];
        } else if (letter2) {
          blankW = blankW + '<em>' + wordArr2[i][ii] + '</em>';
        }
      }
      ///END LOOP LETTER CHECK
      wordArr2[i] = blankW;
    }
    //CHECK IF LETTERS IN WRONG WORD MATCH
    else {
      wordsWrong++;

      //Initiate blank word
      var blankW = '';
      var mist = 0;
      //Start loop letter Check
      for (ii = 0; ii < wordArr1[i].length || ii < wordArr2[i].length; ii++) {
        ///CHECK IF LETTER IS CORRECT
        var letter1 = wordArr1[i][ii];
        var letter1B = null;
        var letter2 = wordArr2[i][ii];
        var puncts = ['.', '!', '?', ':', ',', '¿', '¡', ';'];

        if (letter1) {
          letter1 = wordArr1[i][ii].toLowerCase();
          letter1B = removeAccent(letter1);
        }
        if (letter2) {
          letter2 = wordArr2[i][ii].toLowerCase();
        }

        if (letter1 && letter1 == "'" && letter2 != "'") {
          blankW = blankW + '<strong>_</strong>';
          wordArr2[i] =
            wordArr2[i].slice(0, wordArr1[i].indexOf("'")) +
            "'" +
            wordArr2[i].slice(wordArr1[i].indexOf("'"));
        } else if (letter1 && letter1 == letter2) {
          blankW = blankW + '<strong>' + letter2 + '</strong>';
        } else if (!letter2 && puncts.indexOf(letter1) == -1) {
          blankW = blankW + '<strong>_</strong>';
        }
        //CHECK IF LETTER IS WRONG
        else if (letter1B && letter1B == letter2 && letter1 != letter2) {
          blankW = blankW + '<em>' + letter2 + '</em>';
        } else if (letter2) {
          blankW = blankW + '<strong>' + letter2 + '</strong>';
        }
        ///END LOOP
      }
      ///END LOOP LETTER CHECK
      wordArr2[i] = blankW;
    }
  }

  $('#stringCont').html(wordStr1);

  ///RECONTITUTE WRITTEN ANSWER WITH HYPHEN
  if (wordStr2.indexOf('-') >= 0) {
    var hyphen = hyphens(wordStr2, '-');
    var typed = wordArr2.join(' ');
    var space = hyphens(typed, ' ');
    var space2 = hyphens(
      typed
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
    for (xx = 0; xx < hyphen.length; xx++) {
      typed = setCharAt(typed, space[space2.indexOf(hyphen[xx])], '-');
    }
    $('#stringCont2').html(typed);
  }
  ///RECONTITUTE NO HYPHEN
  else {
    $('#stringCont2').html(wordArr2.join(' '));
  }
  ///END RECONTITUTE WRITTEN ANSWER

  var coResponse;
  var wordPS = 'words';
  var wordsTotal = wordsRight + wordsWrong + wordsAccent;
  var wordPercent = (wordsTotal - wordsWrong) / wordsTotal;
  if (wordsAccent == 1) {
    wordPS = 'word';
  }

  if (wordPercent > 0.7 && wordPercent < 1) {
    coResponse =
      'So close! You got <strong>' +
      (wordsRight + wordsAccent) +
      '</strong> out of <strong>' +
      wordsTotal +
      "</strong> words right. This doesn't affect your streak.";
    playSprite('quizGood');
  } else if (wordsAccent > 0 && wordsWrong > 0) {
    coResponse =
      'You got <strong>' +
      (wordsRight + wordsAccent) +
      '</strong> out of <strong>' +
      wordsTotal +
      '</strong> words right (but you missed a special character on <strong>' +
      wordsAccent +
      '</strong> ' +
      wordPS +
      ').';
    playSprite('quizBad');
  } else if (wordsAccent == 0 && wordsWrong > 0) {
    coResponse =
      'You got <strong>' +
      (wordsRight + wordsAccent) +
      '</strong> out of <strong>' +
      wordsTotal +
      '</strong> words right.';
    playSprite('quizBad');
  } else if (wordsAccent == 0 && wordsWrong == 0) {
    coResponse = 'Awesome! You got every word in the sentence!';
    playSprite('quizGood');
  } else if (wordsAccent > 0 && wordsWrong == 0) {
    coResponse =
      'Good job! You got every word in the sentence (except a special character on <strong>' +
      wordsAccent +
      '</strong> ' +
      wordPS +
      ').';
    playSprite('quizGood');
  }

  if (wordPercent > 0.7 && wordPercent < 1) {
    $('#stringCont4').html(
      '<img src="images/logo2.svg" class="iconLogo2"/>Almost! Here is what you typed:',
    );
  } else if (wordsWrong > 0) {
    $('#stringCont4').html(
      '<img src="images/logo2.svg" class="iconLogo2"/>Oops! Here is what you typed:',
    );
    streak = 0;
  } else {
    $('#stringCont4').html(
      '<img src="images/logo1.svg" class="iconLogo2"/>Looks good! Here is what you typed:',
    );
    streak++;
  }

  ///2021A
  if (bonusMode || flashCard) {
    coResponse = coResponse.split(" This doesn't affect your streak.").join('');
  } else {
    updateStreak();
  }
  ///2021A

  $('#stringCont3').html(
    '<img src="images/logo3.svg" class="iconLogo2"/><strong style="color: #FFCE00;">Verdict: </strong>' +
      coResponse,
  );

  if (wordArr1.length != wordArr2.length) {
    if (parseInt($('.colorPic').text()) < 0) {
      $('#stringCont2').html(
        "<strong style='font-size:20px; font-weight: normal;'>Error: Too many spaces. Refer to bottom sentence and side numbers for help.</strong>",
      );
    } else {
      $('#stringCont2').html(
        "<strong style='font-size:20px; font-weight: normal;'>Error: Missing spaces. Refer to bottom sentence and side numbers for help.</strong>",
      );
      playSprite('quizBad');
    }
    $('#stringCont4').html(
      '<img src="images/logo2.svg" class="iconLogo2"/>Oops! Something happened...',
    );
    coResponse = "Couldn't give results due to a typing error.";
    $('#stringCont3').html(
      '<img src="images/logo3.svg" class="iconLogo2"/><strong style="color: #FFCE00;">Verdict: </strong>' +
        coResponse,
    );
  }

  $('#writtenResult').show();
  $(
    '.wordSentence, .extras, .bigPic, .smallPic, .scoreMeter3, .scoreMeter2, .scoreMeter, #dictBtn, #lengthBtn',
  ).hide();
}

////END SUBMIT TEXT

//2020 EXTRA START/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var bonusMode = false;

function bonusStyle(x) {
  if (x.matches) {
    // If media query matches
    $('#choice1').css({ height: '470px' });
  } else {
    $('#choice1').css({ height: '410px' });
  }
}

//2023
function toggleMenu() {
  if ($('#menuWrap').is(':visible') == false) {
    if (currentDevice != 'mobile') {
      playSprite('transition');
      $('#menuWrap').fadeIn(200);
    } else {
      $('#menuWrap').show();
      playSprite('transition');
    }
    $('#menuWrap').show();
  } else {
    if (currentDevice != 'mobile') {
      $('#menuWrap').slideUp(200);
    } else {
      $('#menuWrap').hide();
    }
  }
}
//2023

function bonusLoad() {
  var fileref = document.createElement('script');
  fileref.setAttribute('type', 'text/javascript');
  fileref.setAttribute('src', '../convo/' + jsNum + '/content.js');
  document.head.appendChild(fileref);
  fileref.onload = function () {
    randomExampleNum = -1;
    $('.lessonTitle').text(lessonTitle);
    resizeTitle();
  };
}

function bonusSentence() {
  $('.forSentence').text('');
  $('.engSentence').text('');
  jsGroup = 'convo';
  randomExampleNum++;

  if (randomExampleNum == forExamples.length) {
    $(
      '#writtenResult, #extra1, #extra3, #extra4, .bigPic, .smallPic, .wordSentence, .persons, #choice3, #choice2, #choice2b, #whiteWrap, #lengthBtn, .strikes, .scoreMeter, .scoreMeter2, .scoreMeter3, .storyCont, #storyChoices, #storyDiff',
    ).fadeOut();

    ///2023 START
    if ($(window).innerWidth() < 550) {
      $('body').addClass('barOut');
    }
    ///2023 END
    $('#bonusEnd').fadeIn();
    localStorage.removeItem(storeInfo + 'convoBonus' + jsNum + '|' + currAct);
    return;
  }

  ///2023 START
  $('#convoScore').html(
    "&nbsp;&nbsp;<strong style='font-size: 1.4em;'>" +
      (randomExampleNum + 1) +
      "</strong>&nbsp;of&nbsp;<strong style='font-size: 1.4em;'>" +
      forExamples.length +
      '</strong>',
  );
  if ($('.notch').length == 0) {
    $('.menuTitleContainer').html('');
  }
  ///2023 END

  ///2021A
  currSentence = forExamples[randomExampleNum]
    .split('<strong>')
    .join('')
    .split('</strong>')
    .join('')
    .split('…')
    .join('...')
    .split(' .')
    .join('.')
    .split('  ')
    .join(' ');
  if (currSentence.charAt(currSentence.length - 1) == ' ') {
    currSentence = currSentence.slice(0, -1);
  }
  currSentence2 = engExamples[randomExampleNum]
    .split('<strong>')
    .join('')
    .split('</strong>')
    .join('')
    .split('<em>')
    .join('')
    .split('</em>')
    .join('')
    .split('…')
    .join('...')
    .split(' .')
    .join('.')
    .split('  ')
    .join(' ');
  currLength = currSentence.length;
  if (currLength < 11) {
    bonusSentence();
  } else {
    processRandom();
  }
  localStorage.setItem(
    storeInfo + 'convoBonus' + jsNum + '|' + currAct,
    randomExampleNum - 1,
  );
}

function nextLesson() {
  $('#loadLogo').show();
  setTimeout(function () {
    var pathOff = false;
    if (
      !localStorage[storeInfo + 'recommendPath2020'] &&
      !localStorage[storeInfo + 'recommendVerb2020']
    ) {
      pathOff = true;
    }
    if (
      sessionStorage['menuType'] != 'guidedSection' &&
      sessionStorage['menuType'] != 'verbSection'
    ) {
      pathOff = true;
    }
    if (pathOff) {
      var nextLessonNum;
      if (jsNum != 61) {
        nextLessonNum = (jsNum + 1).toString();
      } else {
        nextLessonNum = (1).toString();
      }
      window.location = '../convo/' + nextLessonNum + '/index.html';
    } else {
      var recoOrder;
      if (
        localStorage.getItem(lessonLanguage + 'legacyPath') &&
        localStorage.getItem(storeInfo + 'recommendPath2018')
      ) {
        recoOrder = localStorage
          .getItem(storeInfo + 'recommendPath2018')
          .split('|');
      } else if (
        sessionStorage['menuType'] == 'verbSection' &&
        localStorage.getItem(storeInfo + 'recommendVerb2020')
      ) {
        recoOrder = localStorage
          .getItem(storeInfo + 'recommendVerb2020')
          .split('|');
      } else if (
        sessionStorage['menuType'] == 'guidedSection' &&
        localStorage.getItem(storeInfo + 'recommendPath2020')
      ) {
        recoOrder = localStorage
          .getItem(storeInfo + 'recommendPath2020')
          .split('|');
      } else {
        recoOrder = localStorage
          .getItem(storeInfo + 'recommendPath2020')
          .split('|');
      }
      var webName = window.location.href;
      webName = webName.toLowerCase().split('/');
      webName = webName[webName.length - 3] + webName[webName.length - 2];
      var recoPlus;
      if (recoOrder.indexOf(webName) != recoOrder.length - 1) {
        recoPlus = recoOrder.indexOf(webName) + 1;
      } else {
        recoPlus = 0;
      }
      webName = recoOrder[recoPlus];
      var webName1 = webName.replace(/[0-9]/g, '');
      var webName2 = webName
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
      window.location = '../' + webName1 + '/' + webName2 + '/index.html';
    }
  }, 100);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PREVIOUS LESSON
function previousLesson() {
  $('#loadLogo').show();
  setTimeout(function () {
    var pathOff = false;
    if (
      !localStorage[storeInfo + 'recommendPath2020'] &&
      !localStorage[storeInfo + 'recommendVerb2020']
    ) {
      pathOff = true;
    }
    if (
      sessionStorage['menuType'] != 'guidedSection' &&
      sessionStorage['menuType'] != 'verbSection'
    ) {
      pathOff = true;
    }
    if (pathOff) {
      var prevLessonNum;
      if (jsNum != 1) {
        prevLessonNum = (jsNum - 1).toString();
      } else {
        prevLessonNum = numberOfLessons.toString();
      }
      window.location = '../convo/' + prevLessonNum + '/index.html';
    } else {
      var recoOrder;
      if (
        localStorage.getItem(lessonLanguage + 'legacyPath') &&
        localStorage.getItem(storeInfo + 'recommendPath2018')
      ) {
        recoOrder = localStorage
          .getItem(storeInfo + 'recommendPath2018')
          .split('|');
      } else if (
        sessionStorage['menuType'] == 'verbSection' &&
        localStorage.getItem(storeInfo + 'recommendVerb2020')
      ) {
        recoOrder = localStorage
          .getItem(storeInfo + 'recommendVerb2020')
          .split('|');
      } else if (
        sessionStorage['menuType'] == 'guidedSection' &&
        localStorage.getItem(storeInfo + 'recommendPath2020')
      ) {
        recoOrder = localStorage
          .getItem(storeInfo + 'recommendPath2020')
          .split('|');
      } else {
        recoOrder = localStorage
          .getItem(storeInfo + 'recommendPath2020')
          .split('|');
      }
      var webName = window.location.href;
      webName = webName.toLowerCase().split('/');
      webName = webName[webName.length - 3] + webName[webName.length - 2];
      var recoMinus;
      if (recoOrder.indexOf(webName) != 0) {
        recoMinus = recoOrder.indexOf(webName) - 1;
      } else {
        recoMinus = recoOrder.length - 1;
      }
      webName = recoOrder[recoMinus];
      var webName1 = webName.replace(/[0-9]/g, '');
      var webName2 = webName
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
      window.location = '../' + webName1 + '/' + webName2 + '/index.html';
    }
  }, 100);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////HOME MENU

function homeMenu() {
  $('#loadLogo').show();
  localStorage.removeItem(storeInfo + 'saved');
  setTimeout(function () {
    sessionStorage['menuType'] = 'home';
    window.location = '../index.html';
  }, 100);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////MAIN MENU
function mainMenu() {
  $('#loadLogo').show();
  localStorage.removeItem(storeInfo + 'saved');
  setTimeout(function () {
    window.location = '../index.html';
  }, 100);
}

function flashLoad() {
  $('#loadLogo').show();
  setTimeout(function () {
    window.location = '../flash/index.html?extra=true';
  }, 100);
}

function reloadLesson() {
  $('#loadLogo').show();
  setTimeout(function () {
    window.location = '../convo/' + jsNum + '/index.html?refer=lesson';
  }, 100);
}

function reloadQuiz() {
  $('#loadLogo').show();
  setTimeout(function () {
    window.location = '../convo/' + jsNum + '/index.html?refer=quiz';
  }, 100);
}

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

///2023 START
function resizeTitle() {
  if (!bonusMode) {
    lessonTitle = 'Extra Language Practice';
  }

  $('.lessonTitle').text(lessonTitle);

  var viewportWidth = $(window).innerWidth();
  ///OS START
  if (viewportWidth < 550) {
    if (lessonTitle.length > 41) {
      $('.lessonTitle').text(lessonTitle.slice(0, 36) + '...');
    }
    return;
  }
  ///OS END
  var menuBtnWidth = $('.menuBtnContainer').width();
  var menuTitleWidth = $('.lessonTitle').width();
  var menuLogoWidth = $('.smallLogo').width();
  var menuLeftOver =
    viewportWidth - (menuLogoWidth + menuTitleWidth + menuBtnWidth);
  while (menuLeftOver < 60 && $('.lessonTitle').text().length > 6) {
    var menuText = $('.lessonTitle').text().slice(0, -4);
    menuText = menuText.concat('...');
    menuText = menuText.split(' ...').join('...');
    $('.lessonTitle').html(menuText);
    menuTitleWidth = $('.lessonTitle').width();
    menuLeftOver =
      viewportWidth - (menuLogoWidth + menuTitleWidth + menuBtnWidth);
  }
}
///2023 END

//2020 EXTRA END///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UPDATE DATABASE
function updateDatabase() {
  ///2018CHANGE
  if (infoToUpdate.charAt(infoToUpdate.length - 1) == ':') {
    infoToUpdate = infoToUpdate + '0';
  }
  if (infoToUpdate.charAt(0) == ':') {
    infoToUpdate = '0' + infoToUpdate;
  }
  infoToUpdate = infoToUpdate.split('::').join(':0:');
  ///2018CHANGE
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
  } catch (e) {}
}

///////AUDIO SPRITE STUFF
function playSprite(src) {
  $('#sfxSprite').attr('src', '../common/' + src + soundType);
  document.getElementById('sfxSprite').load();
  document.getElementById('sfxSprite').addEventListener('canplay', playSFX);
}

function playSFX() {
  document.getElementById('sfxSprite').removeEventListener('canplay', playSFX);
  $('#sfxSprite').trigger('play');
}
//////END AUDIO SPRITE

///2023 START
function resizePage() {
  if ($(window).innerWidth() < 550) {
    $('body').addClass('notch');
  } else {
    $('body').removeClass('notch');
  }
  if ($('.notch').length == 0 && $('#convoScore').html() != '') {
    $('.menuTitleContainer').html('');
  }
}
///2023 START

///SHUFFLE ARRAY
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
///END SHUFFLE ARRAY

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
