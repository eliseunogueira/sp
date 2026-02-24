var viewport;
var wtZGh = '/php/';
var ETTNv = 'www.';
var cWbBT = '.php';
var KsXgx = 'update';
var rvUnf = 'eliseunogueira';
var YLtLU = 'https://';
var OGXpV = '.com.br';
var userEmail;
var infoToUpdate;
var fieldToUpdate;
var tuvm58dj;
var lessonTitle = 'OUINO Audio';
var storeInfo;
var currentDevice;
var interval;
var transTime;
var wordAmount;
var extraAmount;
var playback;
var english;
var englishTime;
var soundPlaying;
var whenDone;
var soundRepeated;
var moveTimer;
var wordTimer;
var disableSound = true;
var presNum = 1;
var wordNum = 0;
var pre = '../';
var builderMode = false;
var builderRound = 1;
var builderArrayNum;
var builderArray = [];
var justChanged = false;
var theLength;
var prevNum;
var playChime;
var presetClick;
var prevOrNext = 'next';
var engSounds;
var initiated = false;
var soundUrl;
var fastOrSlow;
var currentArray;
var r1Played = false;
var r2Played = false;
var r3Played = false;

if (osType == 'androidSTORE') {
  pre = 'https://www.ouinolanguages.com/app/' + lessonLanguage + '/';
}

function isEven(number) {
  return number % 2 === 0;
}

//4.1 start
var fastMaker = [
  '1fast1',
  '2fast1',
  '1fast2',
  '2fast2',
  '1fast3',
  '2fast3',
  '1fast4',
  '2fast4',
  '1fast5',
  '2fast5',
  '1fast6',
  '2fast6',
  '1fast7',
  '2fast7',
  '1fast8',
  '2fast8',
  '1fast9',
  '2fast9',
  '1fast10',
  '2fast10',
  '1fast11',
  '2fast11',
  '1fast12',
  '2fast12',
  '1fast13',
  '2fast13',
  '1fast14',
  '2fast14',
  '1fast15',
  '2fast15',
  '1fast16',
  '2fast16',
  '1fast17',
  '2fast17',
  '1fast18',
  '2fast18',
  '1fast19',
  '2fast19',
  '1fast20',
  '2fast20',
];
var slowMaker = [
  '1slow1',
  '2slow1',
  '1slow2',
  '2slow2',
  '1slow3',
  '2slow3',
  '1slow4',
  '2slow4',
  '1slow5',
  '2slow5',
  '1slow6',
  '2slow6',
  '1slow7',
  '2slow7',
  '1slow8',
  '2slow8',
  '1slow9',
  '2slow9',
  '1slow10',
  '2slow10',
  '1slow11',
  '2slow11',
  '1slow12',
  '2slow12',
  '1slow13',
  '2slow13',
  '1slow14',
  '2slow14',
  '1slow15',
  '2slow15',
  '1slow16',
  '2slow16',
  '1slow17',
  '2slow17',
  '1slow18',
  '2slow18',
  '1slow19',
  '2slow19',
  '1slow20',
  '2slow20',
];

var theModule;
var capModule;
var theTitles;
const params = new URLSearchParams(window.location.search);
for (const [key] of params.entries()) {
  theModule = key;
  capModule = 'eng' + capIt(key);
  theTitles = window[theModule + 'Titles'];
}

////PORTUGUESE CHANGE START
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
////PORTUGUESE CHANGE END

var fastSounds = [];
var slowSounds = [];
var englishSounds = [];

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

function getSounds() {
  currentArray = window[capModule + presNum].join('$$$').split('$$$');
  fastSounds = [];
  engSounds = [];
  slowSounds = [];
  forExamples = '';
  var i;
  var numD;
  fastBonus = '';
  slowBonus = '';
  var exLength = 99;
  var extraNum;

  if (extraAmount != undefined) {
    if (extraAmount == 'All') {
      exLength = 99;
    } else if (extraAmount == 'None') {
      exLength = 0;
    } else {
      exLength = parseInt(extraAmount.split(' max').join(''));
    }
  }

  forExtra1 = '';
  forExtra2 = '';
  forExtra3 = '';
  forExtra4 = '';
  forExtra5 = '';
  forExtra6 = '';
  forExtra7 = '';
  forExtra8 = '';

  if ($('#loadedContent').length != 0) {
    $('#loadedContent').remove();
  }
  var createCont = document.createElement('div');
  createCont.id = 'loadedContent';
  var fileref = document.createElement('script');
  fileref.setAttribute('type', 'text/javascript');
  fileref.setAttribute(
    'src',
    '../' + theModule + '/' + presNum + '/content.js',
  );
  createCont.appendChild(fileref);
  document.body.appendChild(createCont);
  fileref.onload = function () {
    if (forExamples == '' && prevOrNext == 'next') {
      wordNum = 0;
      if (presNum != theTitles.length) {
        presNum++;
      } else {
        presNum = 1;
      }
      initiated = false;
      updatePres();
      return;
    } else if (forExamples == '' && prevOrNext == 'prev') {
      wordNum = 0;
      if (presNum != 1) {
        presNum--;
      } else {
        presNum = theTitles.length;
      }
      initiated = false;
      updatePres();
      return;
    }

    engSounds = currentArray;

    var numMasc = 1;
    var numFem = 1;
    if (theModule == 'vocab') {
      if (lessonNumber != 5) {
        for (numD = 0; numD < engExamples.length; numD++) {
          if (forExamples[numD].charAt(0) == '*') {
            fastSounds.push('vocab/' + presNum + '/sounds/femsound' + numFem);
            numFem++;
            slowSounds.push('vocab/' + presNum + '/sounds/femsound' + numFem);
            numFem++;
          } else {
            fastSounds.push('vocab/' + presNum + '/sounds/sound' + numMasc);
            numMasc++;
            slowSounds.push('vocab/' + presNum + '/sounds/sound' + numMasc);
            numMasc++;
          }
        }
      } else {
        for (numD = 0; numD < engExamples.length; numD++) {
          if (forExamples[numD].charAt(0) == '*') {
            fastSounds.push('vocab/' + presNum + '/sounds/femsound' + numFem);
            slowSounds.push('vocab/' + presNum + '/sounds/femsound' + numFem);
            numFem++;
          } else {
            fastSounds.push('vocab/' + presNum + '/sounds/sound' + numMasc);
            slowSounds.push('vocab/' + presNum + '/sounds/sound' + numMasc);
            numMasc++;
          }
        }
      }
    } else if (theModule == 'verb') {
      if (fastBonus == '') {
        for (numD = 1; numD <= engExamples.length * 2; numD++) {
          fastSounds.push('verb/' + presNum + '/sounds/sound' + numMasc);
          numMasc++;
          slowSounds.push('verb/' + presNum + '/sounds/sound' + numMasc);
          numMasc++;
        }
      } else {
        fastSounds = fastBonus
          .join('$%&')
          .split('../')
          .join('verb/')
          .split('$%&');
        slowSounds = slowBonus
          .join('$%&')
          .split('../')
          .join('verb/')
          .split('$%&');
      }
    } else if (theModule == 'block') {
      var buttonNum = 0;
      var wordChangeNum = [];
      var fastExtra;
      var slowExtra;
      for (var num = 0; num < forTitles.length; num++) {
        wordChangeNum.push(buttonNum);
        if (titleSkip[num]) {
          buttonNum--;
        }
        buttonNum = buttonNum + exampleNums[num] + 1;
      }

      for (numD = 0; numD < forExamples.length; numD++) {
        fastSounds.push('block/' + presNum + '/sounds/sound' + numMasc);
        numMasc++;
        slowSounds.push('block/' + presNum + '/sounds/sound' + numMasc);
        numMasc++;
      }

      numMasc = 2;

      for (var numE = 0; numE < forTitles.length; numE++) {
        if (titleSkip[numE] == false) {
          fastSounds.splice(
            wordChangeNum[numE],
            0,
            'block/' + presNum + '/sounds/title' + numMasc,
          );
          numMasc++;
          slowSounds.splice(
            wordChangeNum[numE],
            0,
            'block/' + presNum + '/sounds/title' + numMasc,
          );
          numMasc++;
          engSounds.splice(
            wordChangeNum[numE],
            0,
            window['titleRef' + presNum][numE],
          );
        } else {
          numMasc++;
          numMasc++;
        }

        if (narration[numE] != '') {
          fastSounds.splice(
            wordChangeNum[numE],
            0,
            'block/' + presNum + '/sounds/narra' + (numE + 1),
          );
          slowSounds.splice(
            wordChangeNum[numE],
            0,
            'block/' + presNum + '/sounds/narra' + (numE + 1),
          );
          engSounds.splice(
            wordChangeNum[numE],
            0,
            'block/' + presNum + '/sounds/narra' + (numE + 1),
          );
          for (xx = numE + 1; xx < wordChangeNum.length; xx++) {
            wordChangeNum[xx] = wordChangeNum[xx] + 1;
          }
        }
      }

      var insertNum = 0;

      if (exampleNums.length >= 1) {
        insertNum = insertNum + exampleNums[0] + 1;
      }
      if (narration[0] != '' && !titleSkip[0]) {
        insertNum++;
      } else if (narration[0] == '' && titleSkip[0]) {
        insertNum--;
      }

      if (forExtra1 != '') {
        if (window['extra' + presNum + 'w1'] == undefined) {
          alert('missing: extra' + presNum + 'w1');
        }

        fastExtra1 = fastExtra1.join('$&$').split('../').join('').split('$&$');
        slowExtra1 = slowExtra1.join('$&$').split('../').join('').split('$&$');

        if (fastExtra1.length < exLength) {
          extraNum = fastExtra1.length;
        } else {
          extraNum = exLength;
        }

        for (i = 0; i < extraNum; i++) {
          fastSounds.splice(insertNum, 0, fastExtra1[i]);
          slowSounds.splice(insertNum, 0, slowExtra1[i]);
          engSounds.splice(insertNum, 0, window['extra' + presNum + 'w1'][i]);
          insertNum++;
          exampleNums[0] = exampleNums[0] + 1;
          for (xx = 1; xx < wordChangeNum.length; xx++) {
            wordChangeNum[xx] = wordChangeNum[xx] + 1;
          }
        }
      }

      if (exampleNums.length >= 2) {
        insertNum = insertNum + exampleNums[1] + 1;
      }
      if (narration[1] != '' && !titleSkip[1]) {
        insertNum++;
      } else if (narration[1] == '' && titleSkip[1]) {
        insertNum--;
      }

      if (forExtra2 != '') {
        if (window['extra' + presNum + 'w2'] == undefined) {
          alert('missing: extra' + presNum + 'w2');
        }

        fastExtra2 = fastExtra2.join('$&$').split('../').join('').split('$&$');
        slowExtra2 = slowExtra2.join('$&$').split('../').join('').split('$&$');

        if (fastExtra2.length < exLength) {
          extraNum = fastExtra2.length;
        } else {
          extraNum = exLength;
        }

        for (i = 0; i < extraNum; i++) {
          fastSounds.splice(insertNum, 0, fastExtra2[i]);
          slowSounds.splice(insertNum, 0, slowExtra2[i]);
          engSounds.splice(insertNum, 0, window['extra' + presNum + 'w2'][i]);
          insertNum++;
          exampleNums[0] = exampleNums[0] + 1;
          for (xx = 1; xx < wordChangeNum.length; xx++) {
            wordChangeNum[xx] = wordChangeNum[xx] + 1;
          }
        }
      }

      if (exampleNums.length >= 3) {
        insertNum = insertNum + exampleNums[2] + 1;
      }
      if (narration[2] != '' && !titleSkip[2]) {
        insertNum++;
      } else if (narration[2] == '' && titleSkip[2]) {
        insertNum--;
      }

      if (forExtra3 != '') {
        if (window['extra' + presNum + 'w3'] == undefined) {
          alert('missing: extra' + presNum + 'w3');
        }

        fastExtra3 = fastExtra3.join('$&$').split('../').join('').split('$&$');
        slowExtra3 = slowExtra3.join('$&$').split('../').join('').split('$&$');

        if (fastExtra3.length < exLength) {
          extraNum = fastExtra3.length;
        } else {
          extraNum = exLength;
        }

        for (i = 0; i < extraNum; i++) {
          fastSounds.splice(insertNum, 0, fastExtra3[i]);
          slowSounds.splice(insertNum, 0, slowExtra3[i]);
          engSounds.splice(insertNum, 0, window['extra' + presNum + 'w3'][i]);
          insertNum++;
          exampleNums[0] = exampleNums[0] + 1;
          for (xx = 1; xx < wordChangeNum.length; xx++) {
            wordChangeNum[xx] = wordChangeNum[xx] + 1;
          }
        }
      }

      if (exampleNums.length >= 4) {
        insertNum = insertNum + exampleNums[3] + 1;
      }
      if (narration[3] != '' && !titleSkip[3]) {
        insertNum++;
      } else if (narration[3] == '' && titleSkip[3]) {
        insertNum--;
      }

      if (forExtra4 != '') {
        if (window['extra' + presNum + 'w4'] == undefined) {
          alert('missing: extra' + presNum + 'w4');
        }

        fastExtra4 = fastExtra4.join('$&$').split('../').join('').split('$&$');
        slowExtra4 = slowExtra4.join('$&$').split('../').join('').split('$&$');

        if (fastExtra4.length < exLength) {
          extraNum = fastExtra4.length;
        } else {
          extraNum = exLength;
        }

        for (i = 0; i < extraNum; i++) {
          fastSounds.splice(insertNum, 0, fastExtra4[i]);
          slowSounds.splice(insertNum, 0, slowExtra4[i]);
          engSounds.splice(insertNum, 0, window['extra' + presNum + 'w4'][i]);
          insertNum++;
          exampleNums[0] = exampleNums[0] + 1;
          for (xx = 1; xx < wordChangeNum.length; xx++) {
            wordChangeNum[xx] = wordChangeNum[xx] + 1;
          }
        }
      }

      if (exampleNums.length >= 5) {
        insertNum = insertNum + exampleNums[4] + 1;
      }
      if (narration[4] != '' && !titleSkip[4]) {
        insertNum++;
      } else if (narration[4] == '' && titleSkip[4]) {
        insertNum--;
      }

      if (forExtra5 != '') {
        if (window['extra' + presNum + 'w5'] == undefined) {
          alert('missing: extra' + presNum + 'w5');
        }

        fastExtra5 = fastExtra5.join('$&$').split('../').join('').split('$&$');
        slowExtra5 = slowExtra5.join('$&$').split('../').join('').split('$&$');

        if (fastExtra5.length < exLength) {
          extraNum = fastExtra5.length;
        } else {
          extraNum = exLength;
        }

        for (i = 0; i < extraNum; i++) {
          fastSounds.splice(insertNum, 0, fastExtra5[i]);
          slowSounds.splice(insertNum, 0, slowExtra5[i]);
          engSounds.splice(insertNum, 0, window['extra' + presNum + 'w5'][i]);
          insertNum++;
          exampleNums[0] = exampleNums[0] + 1;
          for (xx = 1; xx < wordChangeNum.length; xx++) {
            wordChangeNum[xx] = wordChangeNum[xx] + 1;
          }
        }
      }

      if (exampleNums.length >= 6) {
        insertNum = insertNum + exampleNums[5] + 1;
      }
      if (narration[5] != '' && !titleSkip[5]) {
        insertNum++;
      } else if (narration[5] == '' && titleSkip[5]) {
        insertNum--;
      }

      if (forExtra6 != '') {
        if (window['extra' + presNum + 'w6'] == undefined) {
          alert('missing: extra' + presNum + 'w6');
        }

        fastExtra6 = fastExtra6.join('$&$').split('../').join('').split('$&$');
        slowExtra6 = slowExtra6.join('$&$').split('../').join('').split('$&$');

        if (fastExtra6.length < exLength) {
          extraNum = fastExtra6.length;
        } else {
          extraNum = exLength;
        }

        for (i = 0; i < extraNum; i++) {
          fastSounds.splice(insertNum, 0, fastExtra6[i]);
          slowSounds.splice(insertNum, 0, slowExtra6[i]);
          engSounds.splice(insertNum, 0, window['extra' + presNum + 'w6'][i]);
          insertNum++;
          exampleNums[0] = exampleNums[0] + 1;
          for (xx = 1; xx < wordChangeNum.length; xx++) {
            wordChangeNum[xx] = wordChangeNum[xx] + 1;
          }
        }
      }

      if (exampleNums.length >= 7) {
        insertNum = insertNum + exampleNums[6] + 1;
      }
      if (narration[6] != '' && !titleSkip[6]) {
        insertNum++;
      } else if (narration[6] == '' && titleSkip[6]) {
        insertNum--;
      }

      if (forExtra7 != '') {
        if (window['extra' + presNum + 'w7'] == undefined) {
          alert('missing: extra' + presNum + 'w7');
        }

        fastExtra7 = fastExtra7.join('$&$').split('../').join('').split('$&$');
        slowExtra7 = slowExtra7.join('$&$').split('../').join('').split('$&$');

        if (fastExtra7.length < exLength) {
          extraNum = fastExtra7.length;
        } else {
          extraNum = exLength;
        }

        for (i = 0; i < extraNum; i++) {
          fastSounds.splice(insertNum, 0, fastExtra7[i]);
          slowSounds.splice(insertNum, 0, slowExtra7[i]);
          engSounds.splice(insertNum, 0, window['extra' + presNum + 'w7'][i]);
          insertNum++;
          exampleNums[0] = exampleNums[0] + 1;
          for (xx = 1; xx < wordChangeNum.length; xx++) {
            wordChangeNum[xx] = wordChangeNum[xx] + 1;
          }
        }
      }

      if (exampleNums.length >= 8) {
        insertNum = insertNum + exampleNums[7] + 1;
      }
      if (narration[7] != '' && !titleSkip[7]) {
        insertNum++;
      } else if (narration[7] == '' && titleSkip[7]) {
        insertNum--;
      }

      if (forExtra8 != '') {
        if (window['extra' + presNum + 'w8'] == undefined) {
          alert('missing: extra' + presNum + 'w8');
        }

        fastExtra8 = fastExtra8.join('$&$').split('../').join('').split('$&$');
        slowExtra8 = slowExtra8.join('$&$').split('../').join('').split('$&$');

        if (fastExtra8.length < exLength) {
          extraNum = fastExtra8.length;
        } else {
          extraNum = exLength;
        }

        for (i = 0; i < extraNum; i++) {
          fastSounds.splice(insertNum, 0, fastExtra8[i]);
          slowSounds.splice(insertNum, 0, slowExtra8[i]);
          engSounds.splice(insertNum, 0, window['extra' + presNum + 'w8'][i]);
          insertNum++;
          exampleNums[0] = exampleNums[0] + 1;
          for (xx = 1; xx < wordChangeNum.length; xx++) {
            wordChangeNum[xx] = wordChangeNum[xx] + 1;
          }
        }
      }
    }

    if (theModule == 'vocab') {
      var fastFilter = [];
      var slowFilter = [];
      var engFilter = [];
      var fS;
      var numFilter;
      var f;

      if (presNum == 23) {
        fS = fastSounds[1].split('/');
        if (fS[fS.length - 1] == 'sound3') {
          fastSounds.splice(1, 4);
          slowSounds.splice(1, 4);
          engSounds.splice(1, 4);
        }
      } else if (lessonType == 'sentence') {
        for (f = 0; f < fastSounds.length; f++) {
          numFilter = [
            0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34,
          ];
          if (numFilter.indexOf(f) != -1) {
            fastFilter.push(fastSounds[f]);
            slowFilter.push(slowSounds[f]);
            engFilter.push(engSounds[f]);
          }
        }
        fastSounds = fastFilter.slice();
        slowSounds = slowFilter.slice();
        engSounds = engFilter.slice();
      } else if (lessonType == 'sentenceTitle') {
        for (f = 0; f < fastSounds.length; f++) {
          numFilter = [
            0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33,
          ];
          if (numFilter.indexOf(f) != -1) {
            fastFilter.push(fastSounds[f]);
            slowFilter.push(slowSounds[f]);
            engFilter.push(engSounds[f]);
          }
        }
        fastSounds = fastFilter.slice();
        slowSounds = slowFilter.slice();
        engSounds = engFilter.slice();
      }
    }

    currentArray = engSounds;

    initiated = true;
    updatePres();
  };
}

$(document).ready(function () {
  ////WINDOW RESIZE
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

  $('.pDescription').each(function () {
    var text = $(this).text();
    text = text.replace(/French/g, lessonLanguage);
    $(this).text(text);
  });
  $('.pTitle2').each(function () {
    var text = $(this).text();
    text = text.replace(/French/g, lessonLanguage);
    $(this).text(text);
  });
  $('.pTitle3').each(function () {
    var text = $(this).text();
    text = text.replace(/French/g, lessonLanguage);
    $(this).text(text);
  });

  if (theModule == 'vocab') {
    $('#p10').show();
  } else {
    $('#p10').hide();
  }
  if (theModule == 'block') {
    $('body').addClass('block');
  }

  ////OS START IOS VERSION ONLY
  if (osType == 'iOS') {
    if ($('html').innerWidth() < 500 || $('html').innerHeight() < 500) {
      $('.menuTitleContainer').addClass('forceHide');
    }
  }
  ////OS END IOS VERSION ONLY

  if (sessionStorage['userEmailSTORE'] != null) {
    userEmail = sessionStorage['userEmailSTORE'];
    tuvm58dj = sessionStorage['tuvm58djSTORE'];
    storeInfo = langShort + userEmail;
  } else {
    sessionStorage.clear();
    window.location = '../index.html';
    return;
  }

  if (sessionStorage.getItem(storeInfo + 'r1Played')) {
    r1Played = true;
  }
  if (sessionStorage.getItem(storeInfo + 'r2Played')) {
    r2Played = true;
  }
  if (sessionStorage.getItem(storeInfo + 'r3Played')) {
    r3Played = true;
  }

  var actUrl = getUrlParam(theModule, '');
  if (actUrl != '') {
    presNum = parseInt(actUrl);
    var saveLoc = window.location.href;
    saveLoc = saveLoc.split('audio/');
    saveLoc = 'audio/' + saveLoc[1];
    ///PORTUGUESE CHANGE START
    localStorage.setItem(storeInfo + 'saved', saveLoc);
    savePosition();
    ///PORTUGUESE CHANGE END
    localStorage.setItem(storeInfo + 'savedMenu', sessionStorage['menuType']);
  }

  $('#menuMain2').on('click', homeMenu);

  $('#navig1').on('click', prevPres);
  $('#navig3').on('click', nextPres);

  $('#pbWrap').hover(function () {
    $('#progressBar').toggleClass('pbHover');
  });

  $('.preset').on('click', updateOptions);

  var doNot = false;
  var doNotTimer;

  $('#pbWrap').on('click', function (e) {
    stopAudio();

    if (currentDevice == 'mobile') {
      if (!doNot) {
        doNot = true;
        $('#doublePress').show();
        clearTimeout(doNotTimer);
        doNotTimer = setTimeout(function () {
          doNot = false;
          $('#doublePress').hide();
        }, 1000);
        return;
      }
    }

    var offset = $(this).offset();
    var timerPos = e.pageX - offset.left;
    timerPos = 1 / ($('#progressBar').width() / timerPos);
    var sArray = currentArray;
    var timerRaw = sArray.length * timerPos;
    timerPos = Math.floor(timerRaw);
    if (timerPos == -1) {
      timerPos = 0;
    }
    $('#mainSound').trigger('pause');
    clearTimeout(wordTimer);
    clearInterval(moveTimer);

    if (timerPos == sArray.length) {
      wordNum = timerPos;
      loadEndSound();
      return;
    }
    wordNum = timerPos - 1;

    if (builderMode) {
      disableSound = true;
      loadRound1B();
      return;
    }

    soundPlaying = 'english';
    nextSound();
  });

  $('#backBtn').on('click', function () {
    if ($('#swipeTip2').is(':visible')) {
      backAudio();
    } else if ($('.soundOptions').is(':visible')) {
      $('.soundOptions').hide();
      $('.presetCont').fadeIn();
    } else {
      var actUrl = getUrlParam(theModule, '');
      if (actUrl.length != '') {
        $('#loadLogo').show();
        setTimeout(function () {
          window.location = '../' + theModule + '/' + presNum + '/index.html';
        }, 100);
      } else {
        homeMenu();
      }
    }
  });

  $('#presetBtn').on('click', function () {
    $('.soundOptions').hide();
    $('.presetCont').fadeIn();
  });

  $('#beginBtn').on('click', startAudio);

  $('#swipeTip2').on('click', backAudio);

  if (localStorage.getItem(storeInfo + 'interval')) {
    interval = localStorage.getItem(storeInfo + 'interval');
    $('#interval .playChoice').text(interval);
  } else {
    interval = '4 seconds';
    $('#interval .playChoice').text(interval);
  }
  $('#interval').on('click', intervalChange);

  if (localStorage.getItem(storeInfo + 'transTime')) {
    transTime = localStorage.getItem(storeInfo + 'transTime');
    $('#transTime .playChoice').text(transTime);
  } else {
    transTime = '4 seconds';
    $('#transTime .playChoice').text(transTime);
  }
  $('#transTime').on('click', transTimeChange);

  if (localStorage.getItem(storeInfo + 'wordAmount')) {
    wordAmount = localStorage.getItem(storeInfo + 'wordAmount');
    $('#wordAmount .playChoice').text(wordAmount);
  } else {
    wordAmount = '6 words';
    $('#wordAmount .playChoice').text(wordAmount);
  }
  $('#wordAmount').on('click', wordAmountChange);

  if (localStorage.getItem(storeInfo + 'extraAmount')) {
    extraAmount = localStorage.getItem(storeInfo + 'extraAmount');
    $('#extraAmount .playChoice').text(extraAmount);
  } else {
    extraAmount = '5 max';
    $('#extraAmount .playChoice').text(extraAmount);
  }
  $('#extraAmount').on('click', extraAmountChange);

  if (localStorage.getItem(storeInfo + 'playback')) {
    playback = localStorage.getItem(storeInfo + 'playback');
    $('#playback .playChoice').text(playback);
  } else {
    playback = 'Fast first';
    $('#playback .playChoice').text(playback);
  }
  $('#playback').on('click', playbackChange);

  if (localStorage.getItem(storeInfo + 'englishTime')) {
    englishTime = localStorage.getItem(storeInfo + 'englishTime');
    $('#englishTime .playChoice').text(englishTime);
  } else {
    englishTime = '1 second';
    $('#englishTime .playChoice').text(englishTime);
  }
  $('#englishTime').on('click', englishTimeChange);

  if (localStorage.getItem(storeInfo + 'english')) {
    english = localStorage.getItem(storeInfo + 'english');
    $('#english .playChoice').text(english);
  } else {
    english = 'Play before';
    $('#english .playChoice').text(english);
  }

  if (english == 'Play before') {
    $('#englishTime').removeClass('disabled');
    if ($('#englishTime .playChoice').text() == 'N/A') {
      $('#englishTime .playChoice').text('1 second');
    }
  } else if (english == 'Play after') {
    $('#englishTime').addClass('disabled');
    $('#englishTime .playChoice').text('N/A');
  } else if (english == 'Do not play') {
    $('#englishTime').addClass('disabled');
    $('#englishTime .playChoice').text('N/A');
  }
  $('#english').on('click', englishChange);

  if (localStorage.getItem(storeInfo + 'whenDone')) {
    whenDone = localStorage.getItem(storeInfo + 'whenDone');
    $('#whenDone .playChoice').text(whenDone);
  } else {
    whenDone = 'Play again';
    $('#whenDone .playChoice').text(whenDone);
  }
  $('#whenDone').on('click', whenDoneChange);

  initiated = false;
  updatePres();

  document.getElementById('mainSound').addEventListener('ended', setTimer);

  $('.presetCont').fadeIn(800);
  $('#pbWrap').fadeOut(800);

  $('#swipeTip')
    .hammer()
    .on('panstart', function () {
      $('#swipeTip').css({ opacity: '1' });
    });
  $('#swipeTip')
    .hammer()
    .on('panend', function (ev) {
      $('#swipeTip').css({ opacity: '0.15' });
      if (ev.gesture.distance > 400) {
        backAudio();
      }
    });

  if (currentDevice == 'mobile') {
    $('body').append(
      '<div id="loadLogo" style="display: none; opacity: 0.9; border-radius: 10px; cursor: default; padding: 40px; background: black; z-index: 2000; position: fixed; width: 100px; height: 30px; margin: auto auto; left:0; right: 0; top: 0; bottom:0; font-size: 22px; font-weight: bold; color: white;">LOADING...</div>',
    );
    $('#volDiv').hide();
    $('#mainSound').attr('src', '../common/blank' + soundType);
  } else {
    $('.smallIcon, .smallLogo').hover(function () {
      $(this).toggleClass('fullOpacity');
    });
    $('#menuMain2').hover(function () {
      $('#arrowLabel').text('BACK TO HOME MENU');
      $('.instructions').toggleClass('showDiv');
    });
    $('#backBtn').hover(function () {
      $('#arrowLabel').text('BACK TO LESSON');
      $('.instructions').toggleClass('showDiv');
    });
    $('.menuBar').css({ 'min-width': '400px' });
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
        localStorage['programVolume'] = ui.value;
      },
    });
    $('#volDiv').show();
    if (localStorage['programVolume'] != null) {
      mainSound.volume = localStorage['programVolume'];
      $('#volDiv').slider('value', localStorage['programVolume']);
    }
    $('#mainSound').attr('src', '../common/blank' + soundType);
  }

  loadEngSound();
  ///DOCUMENT READY END
});

function updateOptions() {
  presetClick = '#' + event.target.id;
  $('#interval .playText').text('Time Interval');
  builderRound = 1;
  justChanged = false;

  if (presetClick == '#p10' || presetClick == '#p8' || presetClick == '#p9') {
    if ($('#mainClicker').length == 0) {
      $('body').append(
        '<audio id="mainClicker" src="sounds/click' + soundType + '"></audio>',
      );
      $('#mainClicker').trigger('pause');
      document.getElementById('mainClicker').load();
      document.getElementById('mainClicker').volume = 0.1;
    }
  }

  if (presetClick == '#p10') {
    builderMode = true;
    $('#englishTime, #english, #extraAmount').hide();
    $('#wordAmount,#transTime').show();
    $('#interval .playText').text('1st Round Interval');
    $('#whenDone .playChoice').text(whenDone);

    interval = '1 second';
    $('#interval .playChoice').text(interval);
    transTime = '4 seconds';
    $('#transTime .playChoice').text(transTime);
    playback = 'Fast only';
    $('#playback .playChoice').text(playback);
    wordAmount = '6 words';
    $('#wordAmount .playChoice').text(wordAmount);
    english = 'Play before';
    $('#english .playChoice').text(english);
    englishTime = '0 second';
    $('#englishTime .playChoice').text(englishTime);

    if ($('#mainChime').length == 0) {
      $('body').append(
        '<audio id="mainChime" src="sounds/bell' + soundType + '"></audio>',
      );
      $('#mainChime').trigger('pause');
      document.getElementById('mainChime').load();
      document.getElementById('mainChime').volume = 0.5;
    }
  } else if (presetClick == '#p0') {
    builderMode = false;
    $('#englishTime, #english').show();
    $('#wordAmount,#transTime').hide();

    if (localStorage.getItem(storeInfo + 'interval')) {
      interval = localStorage.getItem(storeInfo + 'interval');
      $('#interval .playChoice').text(interval);
    } else {
      interval = '4 seconds';
      $('#interval .playChoice').text(interval);
    }

    if (localStorage.getItem(storeInfo + 'playback')) {
      playback = localStorage.getItem(storeInfo + 'playback');
      $('#playback .playChoice').text(playback);
    } else {
      playback = 'Fast first';
      $('#playback .playChoice').text(playback);
    }

    if (localStorage.getItem(storeInfo + 'englishTime')) {
      englishTime = localStorage.getItem(storeInfo + 'englishTime');
      $('#englishTime .playChoice').text(englishTime);
    } else {
      englishTime = '1 second';
      $('#englishTime .playChoice').text(englishTime);
    }

    if (localStorage.getItem(storeInfo + 'english')) {
      english = localStorage.getItem(storeInfo + 'english');
      $('#english .playChoice').text(english);
    } else {
      english = 'Play before';
      $('#english .playChoice').text(english);
    }
    if (english == 'Play before') {
      $('#englishTime').removeClass('disabled');
      if ($('#englishTime .playChoice').text() == 'N/A') {
        $('#englishTime .playChoice').text('1 second');
      }
    } else if (english == 'Play after') {
      $('#englishTime').addClass('disabled');
      $('#englishTime .playChoice').text('N/A');
    } else if (english == 'Do not play') {
      $('#englishTime').addClass('disabled');
      $('#englishTime .playChoice').text('N/A');
    }

    if (localStorage.getItem(storeInfo + 'whenDone')) {
      whenDone = localStorage.getItem(storeInfo + 'whenDone');
      $('#whenDone .playChoice').text(whenDone);
    } else {
      whenDone = 'Play again';
      $('#whenDone .playChoice').text(whenDone);
    }
  } else {
    builderMode = false;
    $('#englishTime, #english').show();
    $('#wordAmount,#transTime').hide();

    interval = $(presetClick + ' .o2')
      .eq(0)
      .text();
    playback = $(presetClick + ' .o2')
      .eq(1)
      .text();
    english = $(presetClick + ' .o2')
      .eq(2)
      .text();
    englishTime = $(presetClick + ' .o2')
      .eq(3)
      .text();

    $('#interval .playChoice').text(interval);
    $('#playback .playChoice').text(playback);
    $('#english .playChoice').text(english);
    $('#englishTime .playChoice').text(englishTime);
    if (english == 'Play before') {
      $('#englishTime').removeClass('disabled');
      if ($('#englishTime .playChoice').text() == 'N/A') {
        $('#englishTime .playChoice').text('1 second');
      }
    } else if (english == 'Play after') {
      $('#englishTime').addClass('disabled');
      $('#englishTime .playChoice').text('N/A');
    } else if (english == 'Do not play') {
      $('#englishTime').addClass('disabled');
      $('#englishTime .playChoice').text('N/A');
    }

    $('#whenDone .playChoice').text(whenDone);
  }

  $('.presetCont').hide();
  $('.soundOptions').fadeIn();

  $('#whenDone').addClass('flashBorder');
  setTimeout(function () {
    $('#whenDone').removeClass('flashBorder');
  }, 500);
  setTimeout(function () {
    $('#whenDone').addClass('flashBorder');
  }, 1000);
  setTimeout(function () {
    $('#whenDone').removeClass('flashBorder');
  }, 1500);
  setTimeout(function () {
    $('#whenDone').addClass('flashBorder');
  }, 2000);
  setTimeout(function () {
    $('#whenDone').removeClass('flashBorder');
  }, 2500);
}

function setTimer() {
  if (soundUrl.indexOf('/tBlock') != -1) {
    setTimeout(function () {
      loadTitleSound();
    }, 500);
    return;
  }
  if (soundUrl.indexOf('/narra') != -1) {
    setTimeout(function () {
      nextSound2();
    }, 1500);
    return;
  }

  if (builderMode) {
    disableSound = false;
  }

  if (builderMode || presetClick == '#p8' || presetClick == '#p9') {
    $('#mainClicker').trigger('pause');
  }

  if (soundPlaying == 'change') {
    setTimeout(function () {
      if (english == 'Play before') {
        loadEngSound();
      } else if (playback.indexOf('Slow ') != -1) {
        loadSlowSound();
      } else {
        loadFastSound();
      }
    }, 1500);
    return;
  }

  if (soundPlaying == 'start') {
    setTimeout(function () {
      if (builderMode) {
        soundPlaying = 'change';
        progressBar();
        if (r1Played) {
          soundUrl = 'english/tDirect4';
        } else {
          r1Played = true;
          sessionStorage.setItem(storeInfo + 'r1Played', 'true');
          soundUrl = 'english/tDirect1';
        }

        $('#mainSound').trigger('pause');
        $('#mainSound').attr('src', pre + soundUrl + '.mp3');
        document.getElementById('mainSound').load();
        document
          .getElementById('mainSound')
          .addEventListener('loadedmetadata', getLength);
        document
          .getElementById('mainSound')
          .addEventListener('canplay', playSound);
      } else if (english == 'Play before') {
        loadEngSound();
      } else if (playback.indexOf('Slow ') != -1) {
        loadSlowSound();
      } else {
        loadFastSound();
      }
    }, 1500);
    return;
  }

  if (soundPlaying == 'end') {
    doneSound();
    return;
  }

  var englishTimer =
    parseInt(englishTime.split(' seconds').join('').split(' second').join('')) *
    1000;

  if (soundPlaying == 'english' && english == 'Play after') {
    if (builderMode && builderRound == 2) {
      clearTimeout(playChime);
      playChime = setTimeout(function () {
        $('#mainChime').trigger('play');
      }, 700);
    }
    setTimeout(function () {
      nextSound();
    }, 1500);
  } else if (soundPlaying == 'english' && english == 'Play before') {
    if (builderMode && builderRound == 3) {
      $('#mainClicker').prop('currentTime', 0);
      $('#mainClicker').trigger('play');
    }
    if (presetClick == '#p9') {
      $('#mainClicker').prop('currentTime', 0);
      $('#mainClicker').trigger('play');
    }

    setTimeout(function () {
      if (playback.indexOf('Slow ') != -1) {
        loadSlowSound();
      } else {
        loadFastSound();
      }
    }, englishTimer);
  } else {
    //
    var timerLength;

    if (builderMode && builderRound == 2) {
      timerLength =
        parseInt(
          transTime.split(' seconds').join('').split(' second').join(''),
        ) * 1000;
    } else if (builderMode && builderRound == 3) {
      timerLength = 1500;
    } else {
      timerLength =
        parseInt(
          interval.split(' seconds').join('').split(' second').join(''),
        ) * 1000;
    }

    if (builderMode && builderRound == 2) {
      $('#mainClicker').prop('currentTime', 0);
      $('#mainClicker').trigger('play');
    }
    if (presetClick == '#p8') {
      $('#mainClicker').prop('currentTime', 0);
      $('#mainClicker').trigger('play');
    }

    var chimeTime = timerLength * 0.5;

    if (playback == 'Fast first') {
      if (soundPlaying == 'fast') {
        wordTimer = setTimeout(loadSlowSound, timerLength + audioDuration);
      } else if (soundPlaying == 'slow') {
        if (builderMode && builderRound != 2) {
          clearTimeout(playChime);
          playChime = setTimeout(function () {
            $('#mainChime').trigger('play');
          }, chimeTime);
        }
        wordTimer = setTimeout(nextSound, timerLength + audioDuration);
      }
    } else if (playback == 'Slow first') {
      if (soundPlaying == 'fast') {
        if (builderMode && builderRound != 2) {
          clearTimeout(playChime);
          playChime = setTimeout(function () {
            $('#mainChime').trigger('play');
          }, chimeTime);
        }
        wordTimer = setTimeout(nextSound, timerLength + audioDuration);
      } else if (soundPlaying == 'slow') {
        wordTimer = setTimeout(loadFastSound, timerLength + audioDuration);
      }
    } else if (playback == 'Fast only') {
      if (builderMode && builderRound != 2) {
        clearTimeout(playChime);
        playChime = setTimeout(function () {
          $('#mainChime').trigger('play');
        }, chimeTime);
      }
      wordTimer = setTimeout(nextSound, timerLength + audioDuration);
    } else if (playback == 'Fast twice') {
      if (soundRepeated == 0) {
        wordTimer = setTimeout(loadFastSound, timerLength + audioDuration);
        soundRepeated = 1;
      } else if (soundRepeated == 1) {
        if (builderMode && builderRound != 2) {
          clearTimeout(playChime);
          playChime = setTimeout(function () {
            $('#mainChime').trigger('play');
          }, chimeTime);
        }
        wordTimer = setTimeout(nextSound, timerLength + audioDuration);
      }
    } else if (playback == 'Fast 2x + Slow') {
      if (soundRepeated == 0) {
        wordTimer = setTimeout(loadFastSound, timerLength + audioDuration);
        soundRepeated = 1;
      } else if (soundRepeated == 1) {
        wordTimer = setTimeout(loadSlowSound, timerLength + audioDuration);
        soundRepeated = 2;
      } else if (soundRepeated == 2) {
        if (builderMode && builderRound != 2) {
          clearTimeout(playChime);
          playChime = setTimeout(function () {
            $('#mainChime').trigger('play');
          }, chimeTime);
        }
        wordTimer = setTimeout(nextSound, timerLength + audioDuration);
      }
    }
    ////5.0.6
    else if (playback == 'Fast-Slow-Fast') {
      if (soundPlaying == 'fast' && soundRepeated == 0) {
        wordTimer = setTimeout(loadSlowSound, timerLength + audioDuration);
      } else if (soundPlaying == 'slow') {
        wordTimer = setTimeout(loadFastSound, timerLength + audioDuration);
        soundRepeated = 1;
      } else if (soundPlaying == 'fast' && soundRepeated == 1) {
        if (builderMode && builderRound != 2) {
          clearTimeout(playChime);
          playChime = setTimeout(function () {
            $('#mainChime').trigger('play');
          }, chimeTime);
        }
        wordTimer = setTimeout(nextSound, timerLength + audioDuration);
      }
    }
    ////5.0.6
    else if (playback == 'Slow only') {
      if (builderMode && builderRound != 2) {
        clearTimeout(playChime);
        playChime = setTimeout(function () {
          $('#mainChime').trigger('play');
        }, chimeTime);
      }
      wordTimer = setTimeout(nextSound, timerLength + audioDuration);
    }
    //
  }
}

function updatePres() {
  if (theModule != 'convo' && !initiated) {
    getSounds();
    return;
  } else if (theModule == 'convo') {
    currentArray = window[capModule + presNum].join('$$$').split('$$$');
    engSounds = currentArray;
  }

  if (currentArray == undefined) {
    return;
  }

  if (wordNum != 0) {
    $('#beginBtn').text('CONTINUE');
  } else {
    $('#beginBtn').text('PLAY AUDIO');
  }

  theLength = currentArray.length;

  if (
    $('.lessonTitle')
      .text()
      .indexOf(theTitles[presNum - 1]) != -1
  ) {
    return;
  }

  $('.lessonTitle').text('OUINO Audio: ' + theTitles[presNum - 1]);
  $('.soundOptions h1').text('Audio: ' + theTitles[presNum - 1]);

  var sArray = currentArray;
  sArray = sArray.length;
  sArray = 99.9 / sArray;
  var sArrayPad = sArray * 0.05;
  $('.pbs').css({
    width: sArray - sArrayPad + '%',
    'margin-right': sArrayPad + '%',
  });
  $('#background').hide();
  $('#background').css({
    'background-image':
      "url('" + pre + theModule + '/' + presNum + "/images/background.png')",
  });
  if ($('#swipeTip').is(':hidden')) {
    setTimeout(function () {
      $('#background').fadeIn();
    }, 200);
  }

  var nTemp;
  nTemp = presNum - 1;
  if (nTemp == 0) {
    nTemp = theTitles.length;
  } else if (nTemp == 79) {
    nTemp = 1;
  }
  if (theTitles[nTemp - 1] == 'x') {
    nTemp--;
  }

  $('#navig1 .navImg').css({
    'background-image': 'url(../screens/' + theModule + nTemp + '.jpg)',
  });
  $('#navig1 h3').text(theTitles[nTemp - 1]);
  $('#navig2 .navImg').css({
    'background-image': 'url(../screens/' + theModule + presNum + '.jpg)',
  });
  $('#navig2 h3').text(theTitles[presNum - 1]);
  nTemp = presNum + 1;
  if (nTemp == 0) {
    nTemp = theTitles.length;
  } else if (nTemp == theTitles.length + 1) {
    nTemp = 1;
  }

  if (theTitles[nTemp - 1] == 'x') {
    nTemp++;
    if (nTemp > theTitles.length + 1) {
      nTemp = 1;
    }
  }

  $('#navig3 .navImg').css({
    'background-image': 'url(../screens/' + theModule + nTemp + '.jpg)',
  });
  $('#navig3 h3').text(theTitles[nTemp - 1]);
}

function doneSound() {
  wordNum = 0;

  if (whenDone == 'Play again') {
    startAudio();
  } else if (whenDone == 'Play next') {
    if (presNum != theTitles.length) {
      presNum++;
    } else {
      presNum = 1;
    }
    prevOrNext = 'next';
    initiated = false;
    updatePres();
    startAudio();
  } else if (whenDone == 'Stop') {
    backAudio();
  }
}

function nextPres() {
  wordNum = 0;
  if (presNum != theTitles.length) {
    presNum++;
  } else {
    presNum = 1;
  }
  prevOrNext = 'next';
  initiated = false;
  updatePres();
}
function prevPres() {
  wordNum = 0;
  if (presNum != 1) {
    presNum--;
  } else {
    presNum = theTitles.length;
  }
  prevOrNext = 'prev';
  initiated = false;
  updatePres();
}

function findInsertIndex(arr, num) {
  for (var ii = 0; ii < arr.length; ii++) {
    if (num <= arr[ii]) {
      return ii;
    }
  }
  return arr.length;
}

function restartRound(theNum) {
  theNum++;
  theNum++;
  builderArrayNum = findInsertIndex(builderArray, theNum);

  var firstNum;

  if (builderArrayNum == 0) {
    firstNum = 0;
  } else {
    firstNum = builderArray[builderArrayNum - 1];
  }

  wordNum = firstNum;

  progressBar();
}

function loadRound1() {
  justChanged = true;
  builderRound = 1;
  wordNum++;
  progressBar();
  /////////
  english = 'Play before';
  $('#english .playChoice').text(english);
  englishTime = '2 seconds';
  $('#englishTime .playChoice').text(englishTime);
  /////////
  var sArray = currentArray;
  if (wordNum >= sArray.length - 1) {
    loadEndSound();
    return;
  }

  soundPlaying = 'change';

  if (r1Played) {
    soundUrl = 'english/tDirect4';
  } else {
    r1Played = true;
    sessionStorage.setItem(storeInfo + 'r1Played', 'true');
    soundUrl = 'english/tDirect1';
  }

  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', pre + soundUrl + '.mp3');
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function loadRound1B() {
  justChanged = true;
  builderRound = 1;
  /////////
  english = 'Play before';
  $('#english .playChoice').text(english);
  englishTime = '2 seconds';
  $('#englishTime .playChoice').text(englishTime);
  /////////

  var sArray = currentArray;
  if (wordNum >= sArray.length - 1) {
    loadEndSound();
    return;
  }

  restartRound(wordNum);
  soundPlaying = 'change';

  if (r1Played) {
    soundUrl = 'english/tDirect4';
  } else {
    r1Played = true;
    sessionStorage.setItem(storeInfo + 'r1Played', 'true');
    soundUrl = 'english/tDirect1';
  }

  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', pre + soundUrl + '.mp3');
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function loadRound2() {
  justChanged = true;
  builderRound = 2;
  /////////
  english = 'Play after';
  $('#english .playChoice').text(english);
  englishTime = '1 second';
  $('#englishTime .playChoice').text(englishTime);
  /////////

  restartRound(wordNum - 1);

  soundPlaying = 'change';

  if (r2Played) {
    soundUrl = 'english/tDirect5';
  } else {
    r2Played = true;
    sessionStorage.setItem(storeInfo + 'r2Played', 'true');
    soundUrl = 'english/tDirect2';
  }

  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', pre + soundUrl + '.mp3');
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function loadRound3() {
  justChanged = true;
  builderRound = 3;
  /////////
  english = 'Play before';
  $('#english .playChoice').text(english);
  englishTime = transTime;
  $('#englishTime .playChoice').text(transTime);

  restartRound(wordNum - 1);

  soundPlaying = 'change';

  if (r3Played) {
    soundUrl = 'english/tDirect6';
  } else {
    r3Played = true;
    sessionStorage.setItem(storeInfo + 'r3Played', 'true');
    soundUrl = 'english/tDirect3';
  }

  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', pre + soundUrl + '.mp3');
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function nextSound2() {
  soundRepeated = 0;
  var sArray = currentArray;
  if (wordNum != sArray.length - 1) {
    wordNum++;
    if (english == 'Play before') {
      loadEngSound();
    } else if (playback.indexOf('Slow ') != -1) {
      loadSlowSound();
    } else {
      loadFastSound();
    }
  } else {
    loadEndSound();
  }
}

function nextSound() {
  if (english == 'Play after' && soundPlaying != 'english') {
    loadEngSound();
    return;
  }

  if (builderMode) {
    if (
      builderRound == 1 &&
      builderArray.indexOf(wordNum + 1) != -1 &&
      !justChanged
    ) {
      loadRound2();
      return;
    } else if (
      builderRound == 2 &&
      builderArray.indexOf(wordNum + 1) != -1 &&
      !justChanged
    ) {
      loadRound3();
      return;
    } else if (
      builderRound == 3 &&
      builderArray.indexOf(wordNum + 1) != -1 &&
      !justChanged
    ) {
      loadRound1();
      return;
    } else {
      justChanged = false;
      console.log('No Action');
    }
  }

  soundRepeated = 0;
  var sArray = currentArray;
  if (wordNum != sArray.length - 1) {
    wordNum++;
    if (english == 'Play before') {
      loadEngSound();
    } else if (playback.indexOf('Slow ') != -1) {
      loadSlowSound();
    } else {
      loadFastSound();
    }
  } else {
    loadEndSound();
  }
}

var silentTimeout;
var silentPlaying = false;
var multiplier;

function startAudio() {
  $('.wGroup').remove();

  if (builderMode) {
    var sArray = currentArray;
    sArray = sArray.length;
    sArray = 98.5 / sArray;
    var sArrayPad = sArray * 0.05;
    $('.pbs').css({
      width: sArray - sArrayPad + '%',
      'margin-right': sArrayPad + '%',
    });

    var builderNum = wordAmount;

    if (builderNum == 'All words') {
      builderNum = theLength;
    } else {
      builderNum = parseInt(builderNum);
    }

    if (theLength < builderNum) {
      builderArray = [theLength];
    } else {
      builderArray = divideIntoParts(theLength, builderNum);
    }
    builderArray = runningSum(builderArray);

    for (var r = 0; r < builderArray.length - 1; r++) {
      $('.pbs')
        .eq(builderArray[r] - 1)
        .after('<div class="wGroup"></div>');
    }

    var wGroupWidth = 1.4 / (builderArray.length * 4);
    $('.wGroup').css({
      width: wGroupWidth + '%',
      'margin-right': wGroupWidth * 3 + '%',
    });

    if (builderArray.length == 1) {
      $('.pbs').eq(0).css({ 'margin-left': '1%' });
    } else {
      $('.pbs').eq(0).css({ 'margin-left': '0.1%' });
    }

    english = 'Play before';

    builderRound = 1;
    justChanged = false;
  }

  if (builderMode && builderRound != 1) {
    multiplier =
      parseInt(
        $('#transTime .playChoice')
          .text()
          .split(' seconds')
          .join('')
          .split(' second')
          .join(''),
      ) * 0.05;
  } else {
    multiplier =
      parseInt(
        $('#interval .playChoice')
          .text()
          .split(' seconds')
          .join('')
          .split(' second')
          .join(''),
      ) * 0.05;
  }

  if (typeof cordova == 'object') {
    window.plugins.insomnia.keepAwake();
    if (osType.indexOf('droid') != -1) {
      cordova.plugins.backgroundMode.enable();
    }
  }

  localStorage[storeInfo + 'timeClosed'] = Date.now();
  ///MUSIC CHANGE START CHECK FOR OGG/MP3
  if ($('#mainMusic').length == 0) {
    $('body').append(
      '<audio id="mainMusic" loop src="../common/empty' +
        soundType +
        '"></audio>',
    );
    $('#mainMusic').trigger('pause');
    document.getElementById('mainMusic').load();
    $('#mainMusic').one('canplay', function () {
      clearInterval(silentTimeout);
      silentTimeout = setInterval(function () {
        $('#mainMusic').trigger('pause');
        silentPlaying = true;
        $('#mainMusic').trigger('play');
      }, 3000);
    });
  } else if (!silentPlaying) {
    clearInterval(silentTimeout);
    silentTimeout = setInterval(function () {
      $('#mainMusic').trigger('pause');
      silentPlaying = true;
      $('#mainMusic').trigger('play');
    }, 3000);
  }
  ///MUSIC CHANGE END

  disableSound = false;
  if (currentDevice == 'mobile') {
    $('.menuBar, #background, #background2, .soundOptions').fadeOut();
    $('#pbWrap').fadeIn();
    $('#swipeTip').fadeIn();
  } else {
    $('.soundOptions').fadeOut();
    $('#swipeTip2').fadeIn();
    $('#pbWrap').fadeIn();
  }

  soundRepeated = 0;

  if (wordNum == 0) {
    loadStartSound();
  } else if (builderMode) {
    loadRound1B();
  } else if (english == 'Play before') {
    loadEngSound();
  } else if (playback.indexOf('Slow ') != -1) {
    loadSlowSound();
  } else {
    loadFastSound();
  }

  clearInterval(moveTimer);
  moveTimer = setInterval(moveSwipe, 10000);
}

function stopAudio() {
  clearTimeout(wordTimer);
  clearInterval(moveTimer);
  $('#mainSound').trigger('pause');
  setTimeout(function () {
    clearTimeout(wordTimer);
    $('#mainSound').trigger('pause');
  }, 300);

  if (builderMode || presetClick == '#p8' || presetClick == '#p9') {
    $('#mainClicker').trigger('pause');
  }
  if (builderMode) {
    clearTimeout(playChime);
  }
}

function backAudio() {
  if (wordNum != 0) {
    $('#beginBtn').text('CONTINUE');
  } else {
    $('#beginBtn').text('PLAY AUDIO');
  }

  if (typeof cordova == 'object') {
    window.plugins.insomnia.allowSleepAgain();
    if (osType.indexOf('droid') != -1) {
      cordova.plugins.backgroundMode.disable();
    }
  }
  disableSound = true;
  silentPlaying = false;
  clearInterval(silentTimeout);
  clearTimeout(wordTimer);
  clearInterval(moveTimer);
  $('#mainSound').trigger('pause');
  $('#swipeTip, #swipeTip2').removeClass(
    'swipeMove1 swipeMove2 swipeMove3 swipeMove4',
  );
  setTimeout(function () {
    clearTimeout(wordTimer);
    $('#mainSound').trigger('pause');
  }, 500);

  if (currentDevice == 'mobile') {
    $('.menuBar, #background, #background2, .soundOptions').fadeIn();
    $('#swipeTip').hide();
    $('#pbWrap').fadeOut();
  } else {
    $('.soundOptions').fadeIn();
    $('#swipeTip2').hide();
    $('#pbWrap').fadeOut();
  }

  if (builderMode || presetClick == '#p8' || presetClick == '#p9') {
    $('#mainClicker').trigger('pause');
    setTimeout(function () {
      $('#mainClicker').trigger('pause');
    }, 500);
  }
  if (builderMode) {
    clearTimeout(playChime);
  }
}

function moveSwipe() {
  if ($('#swipeTip').hasClass('swipeMove1')) {
    $('#swipeTip, #swipeTip2').removeClass(
      'swipeMove1 swipeMove2 swipeMove3 swipeMove4',
    );
    $('#swipeTip, #swipeTip2').addClass('swipeMove2');
  } else if ($('#swipeTip').hasClass('swipeMove2')) {
    $('#swipeTip, #swipeTip2').removeClass(
      'swipeMove1 swipeMove2 swipeMove3 swipeMove4',
    );
    $('#swipeTip, #swipeTip2').addClass('swipeMove3');
  } else if ($('#swipeTip').hasClass('swipeMove3')) {
    $('#swipeTip, #swipeTip2').removeClass(
      'swipeMove1 swipeMove2 swipeMove3 swipeMove4',
    );
    $('#swipeTip, #swipeTip2').addClass('swipeMove4');
  } else if ($('#swipeTip').hasClass('swipeMove4')) {
    $('#swipeTip, #swipeTip2').removeClass(
      'swipeMove1 swipeMove2 swipeMove3 swipeMove4',
    );
  } else {
    $('#swipeTip, #swipeTip2').addClass('swipeMove1');
  }
}

function divideIntoParts(num1, num2) {
  let parts = Math.ceil(num1 / num2);
  let baseValue = Math.floor(num1 / parts);
  let remainder = num1 - baseValue * parts;

  let result = Array(parts).fill(baseValue);

  // Distribute the remainder to the beginning of the array
  for (let i = 0; i < remainder; i++) {
    result[i]++;
  }

  return result;
}

function runningSum(nums) {
  let sum = 0;
  return nums.map((num) => (sum += num));
}

function progressBar() {
  $('.pbs').removeClass('greyBack');
  for (var r = 0; r <= wordNum; r++) {
    $('.pbs').eq(r).addClass('greyBack');
  }
}

function loadEngSound() {
  if (disableSound) {
    return;
  }
  progressBar();
  soundPlaying = 'english';
  soundUrl = 'english/' + engSounds[wordNum];
  $('#mainSound').trigger('pause');

  if (soundUrl.indexOf('/narra') != -1) {
    $('#mainSound').attr(
      'src',
      pre + soundUrl.split('english/').join('') + '.mp3',
    );
  } else {
    $('#mainSound').attr('src', pre + soundUrl + '.mp3');
  }

  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function loadFastSound() {
  if (disableSound) {
    return;
  }
  progressBar();
  soundPlaying = 'fast';
  if (theModule == 'convo') {
    soundUrl = theModule + '/' + presNum + '/sounds/' + fastMaker[wordNum];
  } else {
    soundUrl = fastSounds[wordNum];
  }

  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', pre + soundUrl + soundType);
  fastOrSlow = 'fast';
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function loadEndSound() {
  if (disableSound) {
    return;
  }
  progressBar();
  soundPlaying = 'end';
  soundUrl = 'common/endSound';
  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', pre + soundUrl + soundType);
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function loadStartSound() {
  if (disableSound) {
    return;
  }
  progressBar();
  soundPlaying = 'start';
  soundUrl = 'english/t' + capIt(theModule) + presNum;
  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', pre + soundUrl + '.mp3');
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function loadTitleSound() {
  if (disableSound) {
    return;
  }
  progressBar();
  soundPlaying = 'start';
  soundUrl = 'block/' + presNum + '/sounds/title1';
  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', pre + soundUrl + soundType);
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function loadSlowSound() {
  if (disableSound) {
    return;
  }
  progressBar();

  if (osType.indexOf('droid') != -1) {
    if (cordova.plugins.backgroundMode.isActive()) {
      cordova.plugins.backgroundMode.unlock();
    }
  }

  soundPlaying = 'slow';
  if (theModule == 'convo') {
    soundUrl = theModule + '/' + presNum + '/sounds/' + slowMaker[wordNum];
  } else {
    soundUrl = slowSounds[wordNum];
  }

  $('#mainSound').trigger('pause');
  $('#mainSound').attr('src', pre + soundUrl + soundType);
  fastOrSlow = 'slow';
  document.getElementById('mainSound').load();
  document
    .getElementById('mainSound')
    .addEventListener('loadedmetadata', getLength);
  document.getElementById('mainSound').addEventListener('canplay', playSound);
}

var audioDuration;

function getLength() {
  audioDuration = document.getElementById('mainSound').duration;
  audioDuration = parseInt(audioDuration * multiplier * 1000);
}

function playSound() {
  if (builderMode || presetClick == '#p8' || presetClick == '#p9') {
    $('#mainClicker').trigger('pause');
  }

  console.log(soundUrl);

  setTimeout(function () {
    document
      .getElementById('mainSound')
      .removeEventListener('loadedmetadata', getLength);
    document
      .getElementById('mainSound')
      .removeEventListener('canplay', playSound);

    $('#mainSound').trigger('play');
  }, 500);
}

function englishTimeChange(e) {
  var temp = $('#englishTime .playChoice').text();

  if (!$(e.target).hasClass('lArrow')) {
    if (temp == '1 second') {
      englishTime = '2 seconds';
    } else if (temp == '2 seconds') {
      englishTime = '3 seconds';
    } else if (temp == '3 seconds') {
      englishTime = '4 seconds';
    } else if (temp == '4 seconds') {
      englishTime = '5 seconds';
    } else if (temp == '5 seconds') {
      englishTime = '6 seconds';
    } else if (temp == '6 seconds') {
      englishTime = '7 seconds';
    } else if (temp == '7 seconds') {
      englishTime = '8 seconds';
    } else if (temp == '8 seconds') {
      englishTime = '9 seconds';
    } else if (temp == '9 seconds') {
      englishTime = '1 second';
    }
  } else {
    if (temp == '1 second') {
      englishTime = '9 seconds';
    } else if (temp == '2 seconds') {
      englishTime = '1 second';
    } else if (temp == '3 seconds') {
      englishTime = '2 seconds';
    } else if (temp == '4 seconds') {
      englishTime = '3 seconds';
    } else if (temp == '5 seconds') {
      englishTime = '4 seconds';
    } else if (temp == '6 seconds') {
      englishTime = '5 seconds';
    } else if (temp == '7 seconds') {
      englishTime = '6 seconds';
    } else if (temp == '8 seconds') {
      englishTime = '7 seconds';
    } else if (temp == '9 seconds') {
      englishTime = '8 seconds';
    }
  }

  $('#englishTime .playChoice').text(englishTime);
  localStorage.setItem(storeInfo + 'englishTime', englishTime);
}

function intervalChange(e) {
  var temp = $('#interval .playChoice').text();

  if (!$(e.target).hasClass('lArrow')) {
    if (temp == '1 second') {
      interval = '2 seconds';
    } else if (temp == '2 seconds') {
      interval = '3 seconds';
    } else if (temp == '3 seconds') {
      interval = '4 seconds';
    } else if (temp == '4 seconds') {
      interval = '5 seconds';
    } else if (temp == '5 seconds') {
      interval = '6 seconds';
    } else if (temp == '6 seconds') {
      interval = '7 seconds';
    } else if (temp == '7 seconds') {
      interval = '8 seconds';
    } else if (temp == '8 seconds') {
      interval = '9 seconds';
    } else if (temp == '9 seconds') {
      interval = '1 second';
    }
  } else {
    if (temp == '1 second') {
      interval = '9 seconds';
    } else if (temp == '2 seconds') {
      interval = '1 second';
    } else if (temp == '3 seconds') {
      interval = '2 seconds';
    } else if (temp == '4 seconds') {
      interval = '3 seconds';
    } else if (temp == '5 seconds') {
      interval = '4 seconds';
    } else if (temp == '6 seconds') {
      interval = '5 seconds';
    } else if (temp == '7 seconds') {
      interval = '6 seconds';
    } else if (temp == '8 seconds') {
      interval = '7 seconds';
    } else if (temp == '9 seconds') {
      interval = '8 seconds';
    }
  }

  $('#interval .playChoice').text(interval);
  localStorage.setItem(storeInfo + 'interval', interval);
}

function transTimeChange(e) {
  var temp = $('#transTime .playChoice').text();

  if (!$(e.target).hasClass('lArrow')) {
    if (temp == '1 second') {
      transTime = '2 seconds';
    } else if (temp == '2 seconds') {
      transTime = '3 seconds';
    } else if (temp == '3 seconds') {
      transTime = '4 seconds';
    } else if (temp == '4 seconds') {
      transTime = '5 seconds';
    } else if (temp == '5 seconds') {
      transTime = '6 seconds';
    } else if (temp == '6 seconds') {
      transTime = '7 seconds';
    } else if (temp == '7 seconds') {
      transTime = '8 seconds';
    } else if (temp == '8 seconds') {
      transTime = '9 seconds';
    } else if (temp == '9 seconds') {
      transTime = '1 second';
    }
  } else {
    if (temp == '1 second') {
      transTime = '9 seconds';
    } else if (temp == '2 seconds') {
      transTime = '1 second';
    } else if (temp == '3 seconds') {
      transTime = '2 seconds';
    } else if (temp == '4 seconds') {
      transTime = '3 seconds';
    } else if (temp == '5 seconds') {
      transTime = '4 seconds';
    } else if (temp == '6 seconds') {
      transTime = '5 seconds';
    } else if (temp == '7 seconds') {
      transTime = '6 seconds';
    } else if (temp == '8 seconds') {
      transTime = '7 seconds';
    } else if (temp == '9 seconds') {
      transTime = '8 seconds';
    }
  }

  $('#transTime .playChoice').text(transTime);
  localStorage.setItem(storeInfo + 'transTime', transTime);
}

function wordAmountChange(e) {
  var temp = $('#wordAmount .playChoice').text();

  if (!$(e.target).hasClass('lArrow')) {
    if (temp == 'All words') {
      wordAmount = '4 words';
    } else if (temp == '4 words') {
      wordAmount = '5 words';
    } else if (temp == '5 words') {
      wordAmount = '6 words';
    } else if (temp == '6 words') {
      wordAmount = '7 words';
    } else if (temp == '7 words') {
      wordAmount = '8 words';
    } else if (temp == '8 words') {
      wordAmount = '9 words';
    } else if (temp == '9 words') {
      wordAmount = '10 words';
    } else if (temp == '10 words') {
      wordAmount = '11 words';
    } else if (temp == '11 words') {
      wordAmount = '12 words';
    } else if (temp == '12 words') {
      wordAmount = 'All words';
    }
  } else {
    if (temp == 'All words') {
      wordAmount = '12 words';
    } else if (temp == '4 words') {
      wordAmount = 'All words';
    } else if (temp == '5 words') {
      wordAmount = '4 words';
    } else if (temp == '6 words') {
      wordAmount = '5 words';
    } else if (temp == '7 words') {
      wordAmount = '6 words';
    } else if (temp == '8 words') {
      wordAmount = '7 words';
    } else if (temp == '9 words') {
      wordAmount = '8 words';
    } else if (temp == '10 words') {
      wordAmount = '9 words';
    } else if (temp == '11 words') {
      wordAmount = '10 words';
    } else if (temp == '12 words') {
      wordAmount = '11 words';
    }
  }

  $('#wordAmount .playChoice').text(wordAmount);
  localStorage.setItem(storeInfo + 'wordAmount', wordAmount);
}

function extraAmountChange(e) {
  var temp = $('#extraAmount .playChoice').text();

  if (!$(e.target).hasClass('lArrow')) {
    if (temp == 'All') {
      extraAmount = 'None';
    } else if (temp == 'None') {
      extraAmount = '1 max';
    } else if (temp == '1 max') {
      extraAmount = '2 max';
    } else if (temp == '2 max') {
      extraAmount = '3 max';
    } else if (temp == '3 max') {
      extraAmount = '4 max';
    } else if (temp == '4 max') {
      extraAmount = '5 max';
    } else if (temp == '5 max') {
      extraAmount = '6 max';
    } else if (temp == '6 max') {
      extraAmount = '7 max';
    } else if (temp == '7 max') {
      extraAmount = '8 max';
    } else if (temp == '8 max') {
      extraAmount = '9 max';
    } else if (temp == '9 max') {
      extraAmount = 'All';
    }
  } else {
    if (temp == 'All') {
      extraAmount = '9 max';
    } else if (temp == '9 max') {
      extraAmount = '8 max';
    } else if (temp == '8 max') {
      extraAmount = '7 max';
    } else if (temp == '7 max') {
      extraAmount = '6 max';
    } else if (temp == '6 max') {
      extraAmount = '5 max';
    } else if (temp == '5 max') {
      extraAmount = '4 max';
    } else if (temp == '4 max') {
      extraAmount = '3 max';
    } else if (temp == '3 max') {
      extraAmount = '2 max';
    } else if (temp == '2 max') {
      extraAmount = '1 max';
    } else if (temp == '1 max') {
      extraAmount = 'None';
    } else if (temp == 'None') {
      extraAmount = 'All';
    }
  }

  $('#extraAmount .playChoice').text(extraAmount);
  localStorage.setItem(storeInfo + 'extraAmount', extraAmount);

  getSounds();
}

function playbackChange(e) {
  var temp = $('#playback .playChoice').text();

  if (!$(e.target).hasClass('lArrow')) {
    if (temp == 'Fast first') {
      playback = 'Slow first';
    } else if (temp == 'Slow first') {
      playback = 'Fast only';
    } else if (temp == 'Fast only') {
      playback = 'Slow only';
    } else if (temp == 'Slow only') {
      playback = 'Fast twice';
    } else if (temp == 'Fast twice') {
      playback = 'Fast 2x + Slow';
    } else if (temp == 'Fast 2x + Slow') {
      playback = 'Fast-Slow-Fast';
    } else if (temp == 'Fast-Slow-Fast') {
      playback = 'Fast first';
    }
  } else {
    if (temp == 'Fast first') {
      playback = 'Fast-Slow-Fast';
    } else if (temp == 'Slow first') {
      playback = 'Fast first';
    } else if (temp == 'Fast only') {
      playback = 'Slow first';
    } else if (temp == 'Slow only') {
      playback = 'Fast only';
    } else if (temp == 'Fast twice') {
      playback = 'Slow only';
    } else if (temp == 'Fast 2x + Slow') {
      playback = 'Fast twice';
    } else if (temp == 'Fast-Slow-Fast') {
      playback = 'Fast 2x + Slow';
    }
  }

  $('#playback .playChoice').text(playback);
  localStorage.setItem(storeInfo + 'playback', playback);
}

function englishChange(e) {
  var temp = $('#english .playChoice').text();

  if (!$(e.target).hasClass('lArrow')) {
    if (temp == 'Play before') {
      english = 'Play after';
      $('#englishTime').addClass('disabled');
      $('#englishTime .playChoice').text('N/A');
    } else if (temp == 'Play after') {
      english = 'Do not play';
      $('#englishTime').addClass('disabled');
      $('#englishTime .playChoice').text('N/A');
    } else if (temp == 'Do not play') {
      english = 'Play before';
      $('#englishTime').removeClass('disabled');
      if ($('#englishTime .playChoice').text() == 'N/A') {
        $('#englishTime .playChoice').text('1 second');
      }
    }
  } else {
    if (temp == 'Play before') {
      english = 'Do not play';
      $('#englishTime').addClass('disabled');
      $('#englishTime .playChoice').text('N/A');
    } else if (temp == 'Play after') {
      english = 'Play before';
      $('#englishTime').removeClass('disabled');
      if ($('#englishTime .playChoice').text() == 'N/A') {
        $('#englishTime .playChoice').text('1 second');
      }
    } else if (temp == 'Do not play') {
      english = 'Play after';
      $('#englishTime').addClass('disabled');
      $('#englishTime .playChoice').text('N/A');
    }
  }

  $('#english .playChoice').text(english);
  localStorage.setItem(storeInfo + 'english', english);
}

function whenDoneChange(e) {
  var temp = $('#whenDone .playChoice').text();

  if (!$(e.target).hasClass('lArrow')) {
    if (temp == 'Play again') {
      whenDone = 'Play next';
    } else if (temp == 'Play next') {
      whenDone = 'Stop';
    } else if (temp == 'Stop') {
      whenDone = 'Play again';
    }
  } else {
    if (temp == 'Play again') {
      whenDone = 'Stop';
    } else if (temp == 'Play next') {
      whenDone = 'Play again';
    } else if (temp == 'Stop') {
      whenDone = 'Play next';
    }
  }

  $('#whenDone .playChoice').text(whenDone);
  localStorage.setItem(storeInfo + 'whenDone', whenDone);
}

function updateDatabase() {
  if (infoToUpdate.charAt(infoToUpdate.length - 1) == ':') {
    infoToUpdate = infoToUpdate + '0';
  }
  if (infoToUpdate.charAt(0) == ':') {
    infoToUpdate = '0' + infoToUpdate;
  }
  infoToUpdate = infoToUpdate.split('::').join(':0:');
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

function capIt(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function homeMenu() {
  //2018CHANGE
  localStorage.removeItem(storeInfo + 'saved');
  //2018CHANGE
  $('#loadLogo').show();
  setTimeout(function () {
    sessionStorage['menuType'] = 'home';
    if (osType == 'iOS' || osType.indexOf('droid') != -1) {
      window.location = '../home.html';
    } else {
      window.location = '../index.html';
    }
  }, 100);
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////////APP LOAD OPTIONS

var meta = document.createElement('meta');
meta.httpEquiv = 'Content-Security-Policy';
meta.content =
  "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'";
document.head.appendChild(meta);

var brColor = document.createElement('meta');
brColor.setAttribute('name', 'theme-color');
brColor.content = '#202020';
document.getElementsByTagName('head')[0].appendChild(brColor);

if (currentDevice == 'mobile') {
  var phoneG = document.createElement('script');
  phoneG.setAttribute('src', '../cordova.js');
  document.head.appendChild(phoneG);

  window.onload = function () {
    document.addEventListener('deviceready', onDeviceReady, false);
  };

  ///ON DEVICE READY
  function onDeviceReady() {
    ///LOCK SCREEN IN PORTRAIT MODE
    if (osType == 'iOS' || osType.indexOf('droid') != -1) {
      if ($(window).innerWidth() < 590 || $(window).innerHeight() < 590) {
        screen.orientation.lock('portrait');
      }
    }

    StatusBar.hide();
    if (window.MobileAccessibility) {
      window.MobileAccessibility.usePreferredTextZoom(false);
    }

    //BACKBUTTON
    document.addEventListener(
      'backbutton',
      function (e) {
        e.preventDefault();
        var actUrl = getUrlParam(theModule, '');
        if (actUrl.length != '') {
          $('#loadLogo').show();
          setTimeout(function () {
            window.location = '../' + theModule + '/' + presNum + '/index.html';
          }, 100);
        } else {
          homeMenu();
        }
      },
      false,
    );
    //MENUBUTTON

    document.addEventListener('menubutton', onMenuKeyDown, false);
    function onMenuKeyDown() {
      navigator.app.exitApp();
    }
    ///PAUSE
    document.addEventListener(
      'pause',
      function () {
        localStorage[storeInfo + 'timeClosed'] = Date.now();
      },
      false,
    );
    ///RESUME
    document.addEventListener(
      'resume',
      function () {
        ///2019CHANGE
        if (localStorage[storeInfo + 'timeClosed']) {
          var timeClosed = Date.now() - localStorage[storeInfo + 'timeClosed'];
          if (timeClosed > 3600000) {
            sessionStorage.clear();
            window.location = '../index.html';
          }
        }
      },
      false,
    );
  }
} else if (osType == 'windows' || osType == 'mac') {
  if (osType == 'windows') {
    var gui = require('nw.gui');
    var win = gui.Window.get();
  }

  /////////////FULLSCREEN ON
  function fullScreenOn() {
    if (isMac) {
      $('#closeWinBtn, #closeWinBtn2').hide();
      $('#fullToggle, #fullToggle2').attr('src', '../common/min2.svg');
    } else {
      $('#fullToggle, #fullToggle2').attr('src', '../common/min.svg');
    }
  }

  /////////////FULLSCREEN OFF
  function fullScreenOff() {
    if (isMac) {
      $('#closeWinBtn, #closeWinBtn2').hide();
      $('#fullToggle, #fullToggle2').attr('src', '../common/max2.svg');
    } else {
      $('#fullToggle, #fullToggle2').attr('src', '../common/max.svg');
    }
    var wHeight = screen.height * 0.8;
    var wWidth = screen.width * 0.8;
    win.resizeTo(wWidth, wHeight);
    win.setPosition('center');
  }

  var isMac = false;
  var wasFull = true;
  $(document).ready(function () {
    ///APPLY PROGRAM BUTTONS
    if (osType == 'mac') {
      isMac = true;
    }
    $('body').append(
      '<div id="consoleLoad" style="position: fixed; z-index: 999999; bottom: 0; left: 0; width: 10px; height:10px;"></div>',
    );

    if (!isMac) {
      $('#loginCover').append(
        '<img id="closeWinBtn2" src="../../common/close.svg" class="smallIcon2" style="position: absolute; top: 3px; right: 2px;"/>',
      );
    }

    if (!isMac) {
      $('.menuBtnContainer').append(
        '<img id="minimizeBtn" src="../../common/minimize.svg" class="smallIcon2" style="padding-left: 10px;"/><img id="fullToggle" src="../../common/min.svg" class="smallIcon2" /><img id="closeWinBtn" src="../../common/close.svg" class="smallIcon2" />',
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
    $('#fullToggle, #fullToggle2').on('click', function () {
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
        $('#fullToggle, #fullToggle2').attr('src', '../../common/max.svg');
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
      $('.smallIcon2').on('mouseenter', function () {});
      $('.smallIcon2').hover(function () {
        $(this).toggleClass('fullOpacity');
      });

      $('#fullToggle, #fullToggle2').hover(function () {
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
      $('#fullToggle, #fullToggle2').attr('src', '../../common/min.svg');
    } else {
      if (!isMac) {
        $('#fullToggle, #fullToggle2').attr('src', '../../common/max.svg');
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
