///
var cacheURL2 = 'https://www.eliseunogueira.com.br/app/' + lessonLanguage + '/';
//////////////////////////////////////////
var cacheName2 = lessonLanguage + 'LessonCache';
var urlTimeout;
var removeFile = false;
var sectionName;
var downPercent = 0;
var fileLength;

function downloadPrompt() {
  $('.webBtn, .webBtn2').removeClass('downloadDisabled');

  if ($('#dPrompt').length != 0) {
    $('#dPrompt').remove();
  }

  $('body').append(
    '<div id="dPrompt"><div class="off1"><h2 class="off2">Download entire module?</h2><p class="off3">This module contains thousands of files and can take a few hundred megabytes of space. Please make sure to have a stable internet connection.</p><div class="off9 off8">0%</div><div class="webBtn3 downloading off8"></div><div class="off4 off7">Cancel</div><div class="off4 off6">Cancel Download</div><div class="off5">Download entire module</div></div></div>',
  );
  $('.off6, .off8').hide();
  $('#dPrompt, .off4').on('click', function (e) {
    if (e.target == this) {
      $('#dPrompt').hide();
    }
  });
  $('.off5').on('click', function () {
    $('.off7, .off5').hide();
    $('.off6, .off8').show();
    $('.off2').html('Downloading... DO NOT leave this page.');
    removeFile = false;
    moduleFinder();
  });
  $('.off6').on('click', function () {
    removeFile = true;
    moduleFinder();
  });
}

function removePrompt() {
  $('.webBtn, .webBtn2').removeClass('downloadDisabled');

  if ($('#dPrompt').length != 0) {
    $('#dPrompt').remove();
  }

  $('body').append(
    '<div id="dPrompt"><div class="off1"><h2 class="off2">Delete all offline files?</h2><p class="off3">This module contains thousands of previously downloaded files. The application will continue to work online, but it will no longer work offline.</p><div class="webBtn3 downloading off10"></div><div class="off4">Cancel</div><div class="off5">Delete All Files</div></div></div>',
  );
  $('.off10').hide();
  $('#dPrompt, .off4').on('click', function (e) {
    if (e.target == this) {
      $('#dPrompt').hide();
    }
  });
  $('.off5').on('click', function () {
    $('.off2').text('Deleting Files... Please wait.');
    $('.off4, .off5').hide();
    $('.off10').show();
    removeFile = true;
    moduleFinder();
  });
}

function moduleFinder() {
  $('.webBtn, .webBtn2').addClass('downloadDisabled');
  var moduleType = sectionName.split('#').join('').split('SectionB ').join('');

  if ($('#loadedContent').length != 0) {
    $('#loadedContent').remove();
  }
  var createCont = document.createElement('div');
  createCont.id = 'loadedContent';
  var fileref = document.createElement('script');
  fileref.setAttribute('type', 'text/javascript');
  fileref.setAttribute('src', cacheURL2 + 'fileref/' + moduleType + '.js');
  createCont.appendChild(fileref);
  document.body.appendChild(createCont);
  fileref.onload = function () {
    var fileArray = [];
    downPercent = 0;

    for (var ee = 0; ee < allFiles.length; ee++) {
      if (fileArray.indexOf(allFiles[ee]) == -1) {
        fileArray.push(allFiles[ee]);
      }
    }
    fileLength = Math.floor(fileArray.length * 0.01);

    $(sectionName + '.webBtn2').addClass('downloading');
    urlTimeout = setTimeout(function () {
      $(sectionName + '.webBtn2, .webBtn3').removeClass('downloading');
      $(sectionName + '.webBtn2, .webBtn3').addClass('downloadError');
      $('.webBtn2, .webBtn').removeClass('downloadDisabled');
      $('.off2').html('ERROR. Download Failed.');
      $('#dPrompt').addClass('noClick');
      setTimeout(function () {
        location.reload();
      }, 2000);
    }, 30000);
    if (removeFile) {
      removeFiles2(fileArray);
    } else {
      downloadFiles3(fileArray);
    }
  };
}

function pronunFinder() {
  sectionName = '#pronunSectionB ';

  var fileArray = [
    'pronun/images/pronunBack3.png',
    'pronun/images/light1.png',
    'pronun/images/pronunBack4.png',
    'pronun/images/mic.svg',
    'pronun/index.html',
    'pronun/cdn/jquery-ui-1.10.4.slider.js',
    'pronun/cdn/record.js',
    'pronun/cdn/recorderWorker.js',
    'pronun/cdn/jquery.voice.min.js',
    'pronun/cdn/recorder.js',
    'pronun/images/volSlider.png',
    'pronun/images/light3.png',
    'pronun/images/nativeFem.png',
    'pronun/images/nativeBoth.png',
    'pronun/images/volSlider2.png',
    'pronun/images/pronunBack1.png',
    'pronun/images/switchYes.png',
    'pronun/images/arrow.svg',
    'pronun/images/pronunBack2.png',
    'pronun/images/btnGreen.svg',
    'pronun/images/load.svg',
    'pronun/images/btnBlue.svg',
    'pronun/images/btnRed.svg',
    'pronun/images/switchNo.png',
    'pronun/images/nativeMasc.png',
    'pronun/images/pronun2.png',
    'pronun/images/light2.png',
    'pronun/images/pronun1.png',
  ];

  $(sectionName + '.webBtn2').addClass('downloading');

  urlTimeout = setTimeout(function () {
    $(sectionName + '.webBtn2').removeClass('downloading');
    $(sectionName + '.webBtn2').addClass('downloadError');
    $('.webBtn2, .webBtn').removeClass('downloadDisabled');
    removeFile = true;
    pronunFinder();
  }, 30000);

  var pN;
  var vv;
  if (lessonLanguage == 'French' || lessonLanguage == 'Italian') {
    pN = 426;
  } else if (lessonLanguage == 'Spanish') {
    pN = 288;
  } else if (lessonLanguage == 'German') {
    pN = 276;
  } else if (lessonLanguage == 'Portuguese') {
    pN = 432;
  }
  for (vv = 1; vv <= pN; vv++) {
    fileArray.push('pronun/sounds/pronun' + vv + '.mp3');
    fileArray.push('pronun/sounds/fpronun' + vv + '.mp3');
  }
  for (vv = 1; vv <= 4; vv++) {
    fileArray.push('pronun/music/pronunMus' + vv + '.mp3');
  }
  if (removeFile) {
    removeFiles2(fileArray);
  } else {
    downloadFiles2(fileArray);
  }
}

function urlFinder() {
  if (theWeb.hasClass('webBtn2')) {
    if (theWeb.parent().attr('id').indexOf('pronun') != -1) {
      pronunFinder();
      return;
    } else if (theWeb.parent().attr('class').indexOf('sectionBtns') != -1) {
      if (theWeb.parent().attr('id').indexOf('block') != -1) {
        sectionName = '#blockSectionB ';
      } else if (theWeb.parent().attr('id').indexOf('verb') != -1) {
        sectionName = '#verbSectionB ';
      } else if (theWeb.parent().attr('id').indexOf('convo') != -1) {
        sectionName = '#convoSectionB ';
      } else if (theWeb.parent().attr('id').indexOf('vocab') != -1) {
        sectionName = '#vocabSectionB ';
      }
      if (removeFile) {
        removePrompt();
      } else {
        downloadPrompt();
      }
      return;
    }
  }

  forExamples = [];
  imageExtra1 = '';
  imageExtra2 = '';
  imageExtra3 = '';
  imageExtra4 = '';
  imageExtra5 = '';
  imageExtra6 = '';

  theWeb.addClass('downloading');
  urlTimeout = setTimeout(function () {
    var classGetter =
      '.' +
      theWeb
        .parent()
        .attr('class')
        .replace('tItems ', '')
        .replace('lessonItems ', '')
        .replace('lessonItems ', '')
        .replace(' noQuiz', '')
        .replace(' quizOnly', '')
        .replace(' lessonItemsHOVER', '') +
      ' .webBtn';
    $(classGetter).removeClass('downloading');
    $(classGetter).addClass('downloadError');
    $('.webBtn, .webBtn2').removeClass('downloadDisabled');
    removeFile = true;
    urlFinder();
  }, 20000);

  var webClass = theWeb
    .parent()
    .attr('class')
    .replace('tItems ', '')
    .replace('lessonItems L', '')
    .replace('lessonItems L', '')
    .replace(' noQuiz', '')
    .replace(' quizOnly', '')
    .replace(' lessonItemsHOVER', '');

  var currArrNum = webClass.replace(/\D/g, '');
  var presType = webClass.split(currArrNum).join('');
  currArrNum = parseInt(currArrNum);

  //START LOAD FILE
  if ($('#loadedContent').length != 0) {
    $('#loadedContent').remove();
  }
  var createCont = document.createElement('div');
  createCont.id = 'loadedContent';
  var fileref = document.createElement('script');
  fileref.setAttribute('type', 'text/javascript');
  fileref.setAttribute(
    'src',
    cacheURL2 + presType + '/' + currArrNum + '/content.js',
  );
  createCont.appendChild(fileref);
  document.body.appendChild(createCont);
  fileref.onload = function () {
    ///TEXT WHEN FILE LOADS

    var rem = [];
    var i;
    var fastSounds = [];
    var slowSounds = [];
    var imageArray = [];
    var numFem = 1;
    var numMasc = 1;

    if (presType == 'vocab') {
      forExamples = forExamples
        .join('%%')
        .split('<em> / </em>')
        .join('<em> - </em>')
        .split('%%');
      //SOUND MAKER START
      if (lessonNumber != 5) {
        for (var numD = 0; numD < engExamples.length; numD++) {
          if (forExamples[numD].charAt(0) == '*') {
            fastSounds.push('sounds/femsound' + numFem + '.mp3');
            numFem++;
            slowSounds.push('sounds/femsound' + numFem + '.mp3');
            numFem++;
          } else {
            fastSounds.push('sounds/sound' + numMasc + '.mp3');
            numMasc++;
            slowSounds.push('sounds/sound' + numMasc + '.mp3');
            numMasc++;
          }
        }
      } else {
        for (var numD = 0; numD < engExamples.length; numD++) {
          if (forExamples[numD].charAt(0) == '*') {
            fastSounds.push('sounds/femsound' + numFem + '.mp3');
            slowSounds.push('sounds/femsound' + numFem + '.mp3');
            numFem++;
          } else {
            fastSounds.push('sounds/sound' + numMasc + '.mp3');
            slowSounds.push('sounds/sound' + numMasc + '.mp3');
            numMasc++;
          }
        }
      }
      //SOUND MAKER END

      ///IMAGE MAKER START
      imageArray = ['images/pic1.jpg'];
      if (lessonType == 'normal') {
        for (var num = 2; num < engExamples.length + 1; num++) {
          imageArray.push('images/pic' + num + '.jpg');
        }
      } else if (lessonType == 'sentence') {
        imageArray.push('images/pic1.jpg');
        for (var num = 2; num < engExamples.length * 0.5 + 1; num++) {
          imageArray.push('images/pic' + num + '.jpg');
        }
      } else {
        for (var num = 2; num < engExamples.length * 0.5 + 1; num++) {
          imageArray.push('images/pic' + num + '.jpg');
        }
      }
      ///IMAGE MAKER END
      ///FILL MAKER START
      if (quizFillArray.length > 1) {
        for (i = 1; i <= quizFillArray.length; i++) {
          imageArray.push('images/quiz' + i + '.jpg');
          fastSounds.push('sounds/quiz' + (i * 2 - 1) + '.mp3');
          fastSounds.push('sounds/quiz' + i * 2 + '.mp3');
        }
      }
      ///FILL MAKER END
      ////REMOVE DUPLICATES START
      $.each(imageArray, function (i, el) {
        if ($.inArray(el, rem) === -1) {
          rem.push(el);
        }
      });
      imageArray = rem.slice();

      ////REMOVE DUPLICATES END
      ////COLOR IMAGE EXCEPTION START
      if (lessonNumber == 7) {
        var rem2 = [];
        for (i = 0; i < imageArray.length; i++) {
          if (
            imageArray[i].indexOf('pic') != -1 &&
            imageArray[i].indexOf('pic1') == -1
          ) {
            rem2.push(imageArray[i].split('.jpg').join('b.jpg'));
          }
        }
        imageArray = imageArray.concat(rem2);
      }
      ////COLOR IMAGE EXCEPTION END
      ///SHORTER NAME START
      var sp = false;
      var bNums = [7, 8, 9, 46, 49, 50, 92, 93, 94];
      for (i = 0; i < forExamples.length; i++) {
        if (
          forExamples[i].indexOf('<em> - </em>') != -1 &&
          lessonLanguage != 'German' &&
          bNums.indexOf(lessonNumber) != -1
        ) {
          sp = true;
          fastSounds.push(fastSounds[i].split('/sound').join('/soundB'));
        }
      }
      if (sp) {
        fastSounds.push('sounds/soundB1.mp3');
      }
      ///SHORTER NAME END
    } else if (presType == 'verb') {
      ///START VERB

      ///FIND VERB TYPE
      var verbType;
      var vv;
      if (conjNum.length > 15) {
        verbType = 'keyPres';
      } else {
        if (conjNum[0] == 0) {
          verbType = 'individual';
        } else if (conjNum[0] == 2 || conjNum[0] == 4) {
          verbType = 'key';
        }
      }
      if (lessonTitle.indexOf('Express') != -1) {
        verbType = 'express';
      } else if (
        lessonTitle.indexOf('Express') == -1 &&
        lessonTitle.indexOf('erbs - ') != -1
      ) {
        verbType = 'bonus';
      }
      if (forExamples.length == 0) {
        verbType = 'endings';
      }

      //EXCEPTIONS
      if (lessonLanguage == 'Italian') {
        if (lessonNumber == 20 || lessonNumber == 21) {
          verbType = 'individual';
        } else if (lessonNumber == 19) {
          verbType = 'keyPres';
        }
      } else if (lessonLanguage == 'French') {
        if (lessonNumber == 10 || lessonNumber == 19) {
          verbType = 'keyPres';
        }
      } else if (lessonLanguage == 'Spanish') {
        if (lessonNumber == 22 || lessonNumber == 168 || lessonNumber == 169) {
          verbType = 'keyPres';
        }
      } else if (lessonLanguage == 'German') {
        if (lessonNumber >= 22 && lessonNumber <= 29) {
          verbType = 'key';
        }
      } else if (lessonLanguage == 'Portuguese') {
        if (lessonNumber == 22) {
          verbType = 'keyPres';
        }
      }

      //ACTIONS
      if (verbType == 'bonus') {
        //BONUS
        var unique;
        imageArray = imageBonus
          .join('%%%')
          .split('../')
          .join('verb/')
          .split('%%%');
        unique = [];
        for (i = 0; i < imageArray.length; i++) {
          if (unique.indexOf(imageArray[i]) == -1) {
            unique.push(imageArray[i]);
          }
        }
        imageArray = unique.join('%%').split('%%');
        fastSounds = fastBonus
          .join('%%%')
          .split('../')
          .join('verb/')
          .split('%%%');
        unique = [];
        for (i = 0; i < fastSounds.length; i++) {
          if (unique.indexOf(fastSounds[i]) == -1) {
            unique.push(fastSounds[i] + '.mp3');
          }
        }
        fastSounds = unique.join('%%').split('%%');
        slowSounds = slowBonus
          .join('%%%')
          .split('../')
          .join('verb/')
          .split('%%%');
        unique = [];
        for (i = 0; i < slowSounds.length; i++) {
          if (unique.indexOf(slowSounds[i]) == -1) {
            unique.push(slowSounds[i] + '.mp3');
          }
        }
        slowSounds = unique.join('%%').split('%%');
        //BONUS
      } else if (verbType != 'endings') {
        ////
        for (vv = 1; vv <= engExamples.length * 0.5; vv++) {
          imageArray.push('images/pic' + vv + '.jpg');
        }
        for (vv = 1; vv <= engExamples.length * 2; vv++) {
          fastSounds.push('sounds/sound' + vv + '.mp3');
        }
        if (lessonLanguage == 'Spanish') {
          if (lessonNumber == 168 || lessonNumber == 169) {
            imageArray.push('images/pic7.jpg');
          }
        }
        if (imageArray.length == 6 && verbType != 'express') {
          imageArray.push('images/pic7.jpg');
        }
        if (verbType.indexOf('key') != -1) {
          for (vv = 1; vv <= quizForExamples.length; vv++) {
            imageArray.push('images/quiz' + vv + '.jpg');
            fastSounds.push('sounds/quiz' + vv + '.mp3');
          }
        }
        if (verbType == 'keyPres') {
          imageArray.push('images/picB.jpg');
        }
        /////
      } else if (verbType == 'endings') {
        //ENDINGS
        for (vv = 0; vv <= 5; vv++) {
          imageArray.push('images/pic' + vv + '.jpg');
        }
        for (vv = 1; vv <= 18; vv++) {
          slowSounds.push('sounds/quiz' + vv + '.mp3');
        }
        var endL = 20; //French and German
        if (
          lessonLanguage == 'Spanish' ||
          lessonLanguage == 'Italian' ||
          lessonLanguage == 'Portuguese'
        ) {
          endL = 23;
        }
        for (vv = 1; vv <= endL; vv++) {
          fastSounds.push('sounds/sound' + vv + '.mp3');
        }
        for (vv = 1; vv <= narration.length; vv++) {
          fastSounds.push('sounds/narra' + vv + '.mp3');
        }
        //ENDINGS
      }
    }
    //////////END VERB
    else if (presType == 'convo') {
      imageArray = ['images/person1.png', 'images/person2.png'];
      if (
        lessonNumber == 64 ||
        lessonNumber == 65 ||
        lessonNumber == 68 ||
        lessonNumber == 69
      ) {
        imageArray.push('images/person2b.png');
      }
      if (lessonNumber == 65) {
        imageArray.push('images/person2c.png');
      }
      if (lessonNumber == 64) {
        imageArray.push('images/person1b.png');
      }

      var numWords = engExamples.length;
      var numSounds = numWords / 2 + 0.5;

      for (var numD = 1; numD <= numSounds; numD++) {
        fastSounds.push('sounds/1fast' + numD + '.mp3');
        fastSounds.push('sounds/2fast' + numD + '.mp3');
        slowSounds.push('sounds/1slow' + numD + '.mp3');
        slowSounds.push('sounds/2slow' + numD + '.mp3');
      }

      if (numWords % 2 != 0) {
        fastSounds.pop();
        slowSounds.pop();
      }
      /////
    }
    /////END CONVO
    /////START BLOCK
    else if (presType == 'block') {
      if (quizLessonBoth != 'quiz') {
        ////EXAMPLE START
        for (vv = 1; vv <= engExamples.length; vv++) {
          imageArray.push('images/pic' + vv + '.jpg');
        }
        for (vv = 1; vv <= engExamples.length * 2; vv++) {
          fastSounds.push('sounds/sound' + vv + '.mp3');
          slowSounds.push('sounds/sound' + (vv + 1) + '.mp3');
          vv++;
        }
        fastSounds.push('sounds/title1.mp3');
        for (vv = 2; vv <= forTitles.length * 2; vv++) {
          if (
            !titleSkip[Math.round(vv * 0.5) - 1] &&
            titleSkip[Math.round(vv * 0.5) - 1] != undefined
          ) {
            fastSounds.push('sounds/title' + vv + '.mp3');
            slowSounds.push('sounds/title' + (vv + 1) + '.mp3');
          }
          vv++;
        }
        for (vv = 1; vv <= narration.length; vv++) {
          if (narration[vv - 1] != '') {
            fastSounds.push('sounds/narra' + vv + '.mp3');
          }
        }
        ///EXAMPLE END

        //BONUS START
        var allSounds = [];
        var allImages = [];
        if (imageExtra1 != '') {
          allImages = allImages.concat(imageExtra1);
          allSounds = allSounds.concat(fastExtra1, slowExtra1);
        }
        if (imageExtra2 != '') {
          allImages = allImages.concat(imageExtra2);
          allSounds = allSounds.concat(fastExtra2, slowExtra2);
        }
        if (imageExtra3 != '') {
          allImages = allImages.concat(imageExtra3);
          allSounds = allSounds.concat(fastExtra3, slowExtra3);
        }
        if (imageExtra4 != '') {
          allImages = allImages.concat(imageExtra4);
          allSounds = allSounds.concat(fastExtra4, slowExtra4);
        }
        if (imageExtra5 != '') {
          allImages = allImages.concat(imageExtra5);
          allSounds = allSounds.concat(fastExtra5, slowExtra5);
        }
        if (imageExtra6 != '') {
          allImages = allImages.concat(imageExtra6);
          allSounds = allSounds.concat(fastExtra6, slowExtra6);
        }
        for (i = 0; i < allSounds.length; i++) {
          allSounds[i] = allSounds[i] + '.mp3';
        }
        if (allImages.length != 0) {
          allImages = allImages.join('%%').split('../../').join('').split('%%');
          imageArray = imageArray.concat(allImages);
        }
        if (allSounds.length != 0) {
          allSounds = allSounds.join('%%').split('../../').join('').split('%%');
          fastSounds = fastSounds.concat(allSounds);
        }
        //BONUS	END
      }
    }
    /////END BLOCK

    ///EXTRACT START
    var pre = presType + '/' + currArrNum + '/';
    for (i = 0; i < fastSounds.length; i++) {
      if (fastSounds[i].length < 20 || fastSounds[i].indexOf('fem') != -1) {
        fastSounds[i] = pre + fastSounds[i];
      }
    }
    for (i = 0; i < slowSounds.length; i++) {
      if (slowSounds[i].length < 20 || slowSounds[i].indexOf('fem') != -1) {
        slowSounds[i] = pre + slowSounds[i];
      }
    }
    for (i = 0; i < imageArray.length; i++) {
      if (imageArray[i].length < 20) {
        imageArray[i] = pre + imageArray[i];
      }
    }
    var fileArray = [
      pre + 'index.html',
      pre + 'content.js',
      pre + 'insight.js',
      pre + 'images/background.png',
    ];

    if (presType == 'block') {
      if (quizLessonBoth == 'lesson') {
        fileArray.push('block/' + numOfAllQuiz + '/index.html');
        fileArray.push('block/' + numOfAllQuiz + '/content.js');
        fileArray.push('block/' + numOfAllQuiz + '/images/background.png');
      }
    }

    fileArray = fileArray.concat(fastSounds, slowSounds, imageArray);

    if ($('#loadedContent').length != 0) {
      $('#loadedContent').remove();
    }
    var createCont = document.createElement('div');
    createCont.id = 'loadedContent';
    var fileref = document.createElement('script');
    fileref.setAttribute('type', 'text/javascript');
    fileref.setAttribute('src', cacheURL2 + 'scripts/zEnglish.js');
    createCont.appendChild(fileref);
    document.body.appendChild(createCont);
    fileref.onload = function () {
      var engArray = window['eng' + capIt(presType) + currArrNum];
      for (i = 0; i < engArray.length; i++) {
        engArray[i] = 'english/' + engArray[i] + '.mp3';
      }
      fileArray = fileArray.concat(engArray);
      fileArray.push('english/t' + capIt(presType) + lessonNumber + '.mp3');

      ///block titles
      if (presType == 'block') {
        var blTitle = window['titleRef' + currArrNum];
        for (i = 0; i < blTitle.length; i++) {
          blTitle[i] = 'english/' + blTitle[i] + '.mp3';
        }
        fileArray = fileArray.concat(blTitle);

        var bonusChecker = false;
        var blExtra;

        if (window['extra' + currArrNum + 'w1'] != undefined) {
          blExtra = window['extra' + currArrNum + 'w1'];
          for (i = 0; i < blExtra.length; i++) {
            blExtra[i] = 'english/' + blExtra[i] + '.mp3';
          }
          fileArray = fileArray.concat(blExtra);
        }
        if (window['extra' + currArrNum + 'w2'] != undefined) {
          blExtra = window['extra' + currArrNum + 'w2'];
          for (i = 0; i < blExtra.length; i++) {
            blExtra[i] = 'english/' + blExtra[i] + '.mp3';
          }
          fileArray = fileArray.concat(blExtra);
        }
        if (window['extra' + currArrNum + 'w3'] != undefined) {
          blExtra = window['extra' + currArrNum + 'w3'];
          for (i = 0; i < blExtra.length; i++) {
            blExtra[i] = 'english/' + blExtra[i] + '.mp3';
          }
          fileArray = fileArray.concat(blExtra);
        }
        if (window['extra' + currArrNum + 'w4'] != undefined) {
          blExtra = window['extra' + currArrNum + 'w4'];
          for (i = 0; i < blExtra.length; i++) {
            blExtra[i] = 'english/' + blExtra[i] + '.mp3';
          }
          fileArray = fileArray.concat(blExtra);
        }
        if (window['extra' + currArrNum + 'w5'] != undefined) {
          blExtra = window['extra' + currArrNum + 'w5'];
          for (i = 0; i < blExtra.length; i++) {
            blExtra[i] = 'english/' + blExtra[i] + '.mp3';
          }
          fileArray = fileArray.concat(blExtra);
        }
      }

      if (removeFile) {
        removeFiles(fileArray);
      } else {
        downloadFiles(fileArray);
      }
    };

    ///EXTRACT END
  };
}

function capIt(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function removeFiles2(fileArray) {
  $(sectionName + '.webBtn2').removeClass('downloaded');
  var url2;
  caches.open(cacheName2).then(function (cache) {
    var assetCount = 0;
    for (var i = 0; i < fileArray.length; i++) {
      url2 = cacheURL2 + fileArray[i];
      cache.delete(url2).then(function () {
        assetCount++;
        //FULLY DOWNLOADED
        if (assetCount == fileArray.length) {
          $(sectionName + '.webBtn2').removeClass('downloading');
          $('.webBtn, .webBtn2').removeClass('downloadDisabled');
          clearTimeout(urlTimeout);
          var moduleType = sectionName
            .split('#')
            .join('')
            .split('SectionB ')
            .join('');
          localStorage.removeItem(lessonLanguage + moduleType + 'Downloaded');
          $('.off2').text('DONE DELETING ALL FILES!');
          if (sectionName.indexOf('pronun') == -1) {
            $('#dPrompt').addClass('noClick');
            setTimeout(function () {
              location.reload();
            }, 1000);
          }
        }
        //FULLY DOWNLOADED
      });
    }
  });
}

function downloadFiles3(fileArray) {
  $('.off9').text(downPercent + '%');

  if (downPercent == 100) {
    $(sectionName + '.webBtn2, .webBtn3').addClass('downloaded');
    $(sectionName + '.webBtn2, .webBtn3').removeClass('downloading');
    $('.webBtn, .webBtn2').removeClass('downloadDisabled');
    clearTimeout(urlTimeout);
    $('.off2').text('DONE DOWNLOADING!');

    var moduleType = sectionName
      .split('#')
      .join('')
      .split('SectionB ')
      .join('');
    localStorage.setItem(lessonLanguage + moduleType + 'Downloaded', 'true');
    $('#dPrompt').addClass('noClick');
    setTimeout(function () {
      location.reload();
    }, 2000);
    return;
  }

  var array100 = [];
  var uu;
  if (downPercent != 99) {
    for (
      uu = fileLength * downPercent;
      uu < fileLength * (downPercent + 1);
      uu++
    ) {
      array100.push(cacheURL2 + fileArray[uu]);
    }
  } else if (downPercent == 99) {
    for (uu = fileLength * downPercent; uu < fileArray.length; uu++) {
      array100.push(cacheURL2 + fileArray[uu]);
    }
  }

  caches.open(cacheName2).then(function (cache) {
    return cache.addAll(array100).then(function () {
      //FULLY DOWNLOADED
      clearTimeout(urlTimeout);
      urlTimeout = setTimeout(function () {
        $(sectionName + '.webBtn2, .webBtn3').removeClass('downloading');
        $(sectionName + '.webBtn2, .webBtn3').addClass('downloadError');
        $('.webBtn2, .webBtn').removeClass('downloadDisabled');
        $('.off2').html('ERROR. Download Failed.');
        $('#dPrompt').addClass('noClick');
        setTimeout(function () {
          location.reload();
        }, 2000);
      }, 30000);
      downPercent++;
      setTimeout(function () {
        downloadFiles3(fileArray);
      }, 500);
      //FULLY DOWNLOADED
    });
  });
}

function downloadFiles2(fileArray) {
  var url2;
  caches.open(cacheName2).then(function (cache) {
    var assetCount = 0;
    for (var i = 0; i < fileArray.length; i++) {
      url2 = cacheURL2 + fileArray[i];
      cache.add(url2).then(function () {
        assetCount++;
        //FULLY DOWNLOADED
        if (assetCount == fileArray.length) {
          $(sectionName + '.webBtn2, .webBtn3').addClass('downloaded');
          $(sectionName + '.webBtn2, .webBtn3').removeClass('downloading');
          $('.webBtn, .webBtn2').removeClass('downloadDisabled');
          clearTimeout(urlTimeout);
          $('.off2').text('DONE DOWNLOADING!');
          setTimeout(function () {
            $('#dPrompt').fadeOut();
          }, 2000);
        }
        //FULLY DOWNLOADED
      });
    }
  });
}

function downloadFiles(fileArray) {
  var url2;
  caches.open(cacheName2).then(function (cache) {
    var assetCount = 0;
    for (var i = 0; i < fileArray.length; i++) {
      url2 = cacheURL2 + fileArray[i];
      cache.add(url2).then(function () {
        assetCount++;
        //FULLY DOWNLOADED
        if (assetCount == fileArray.length) {
          var classGetter =
            '.' +
            theWeb
              .parent()
              .attr('class')
              .replace('tItems ', '')
              .replace('lessonItems ', '')
              .replace('lessonItems ', '')
              .replace(' noQuiz', '')
              .replace(' quizOnly', '')
              .replace(' lessonItemsHOVER', '') +
            ' .webBtn';
          $(classGetter).addClass('downloaded');
          $(classGetter).removeClass('downloading');
          $('.webBtn, .webBtn2').removeClass('downloadDisabled');
          clearTimeout(urlTimeout);
        }
        //FULLY DOWNLOADED
      });
    }
  });
}

function removeFiles(fileArray) {
  var url2;
  caches.open(cacheName2).then(function (cache) {
    var assetCount = 0;
    for (var i = 0; i < fileArray.length; i++) {
      url2 = cacheURL2 + fileArray[i];
      cache.delete(url2).then(function () {
        assetCount++;
        //FULLY DOWNLOADED
        if (assetCount == fileArray.length) {
          var classGetter =
            '.' +
            theWeb
              .parent()
              .attr('class')
              .replace('tItems ', '')
              .replace('lessonItems ', '')
              .replace('lessonItems ', '')
              .replace(' noQuiz', '')
              .replace(' quizOnly', '')
              .replace(' lessonItemsHOVER', '') +
            ' .webBtn';
          $(classGetter).removeClass('downloaded');
          $(classGetter).removeClass('downloading');
          $('.webBtn, .webBtn2').removeClass('downloadDisabled');
          clearTimeout(urlTimeout);
        }
        //FULLY DOWNLOADED
      });
    }
  });
}

var lcSTORE = [];

function checkCache(cacheStem) {
  caches.open(cacheName2).then(function (cache) {
    cache.match(cacheURL2 + cacheStem).then(function (response) {
      ///CHECK
      if (response != undefined) {
        var lc = cacheStem
          .split('/images/background.png')
          .join('')
          .split('/')
          .join('');
        if (sessionStorage.getItem('offlineSession')) {
          lcSTORE.push(lc);
          sessionStorage.setItem('flashOff', lcSTORE.join('%'));
        }
        var lCheck = '.L' + lc + ' .webBtn';
        $(lCheck).addClass('downloaded');
      }
      ///CHECK
    });
  });
}

function checkCache2(cacheStem) {
  caches.open(cacheName2).then(function (cache) {
    if (localStorage.getItem(lessonLanguage + 'blockDownloaded')) {
      $('#blockSectionB .webBtn2').addClass('downloaded');
    }
    if (localStorage.getItem(lessonLanguage + 'vocabDownloaded')) {
      $('#vocabSectionB .webBtn2').addClass('downloaded');
    }
    if (localStorage.getItem(lessonLanguage + 'convoDownloaded')) {
      $('#convoSectionB .webBtn2').addClass('downloaded');
    }
    if (localStorage.getItem(lessonLanguage + 'verbDownloaded')) {
      $('#verbSectionB .webBtn2').addClass('downloaded');
    }

    cache.match(cacheURL2 + cacheStem).then(function (response) {
      ///CHECK
      if (response != undefined) {
        $('#pronunSectionB .webBtn2').addClass('downloaded');
      }
      ///CHECK
    });
  });
}

function checkURLCache(cacheStem) {
  caches.open(cacheName2).then(function (cache) {
    cache.match(cacheURL2 + cacheStem).then(function (response) {
      if (response != undefined) {
        window.location.href = cacheStem
          .split('images/background.png')
          .join('index.html');
      } else {
        offlinePopup();
      }
    });
  });
}

function warningPopup() {
  if ($('#offPop2').length == 0) {
    $('body').append(
      '<div id="offPop2" style="position: fixed; background: #222; color: white; border-radius: 10px; font-size: 25px; line-height: 20px; top: 0; right: 0; bottom: 0; left: 0; margin: auto auto; padding: 30px 15px 50px 15px; height: 90px; width: 410px; z-index: 10000; text-align: center; font-weight: 700;"><strong style="color: #ffbd3b;">FILES ARE DOWNLOADING</strong><br><br><span style="font-size: 16px;font-weight: 300;">Please wait for the files to finish downloading before loading a lesson. This should take only a few seconds.</span></div>',
    );
  } else {
    $('#offPop2').show();
  }
  setTimeout(function () {
    $('#offPop2').fadeOut();
  }, 4000);
}

function offlinePopup() {
  if ($('#offPop').length == 0) {
    $('body').append(
      '<div id="offPop" style="position: fixed; background: #222; color: white; border-radius: 10px; font-size: 25px; line-height: 20px; top: 0; right: 0; bottom: 0; left: 0; margin: auto auto; padding: 30px 15px 50px 15px; height: 90px; width: 410px; z-index: 10000; text-align: center; font-weight: 700;"><strong style="color: #ffbd3b;">NOT AVAILABLE OFFLINE</strong><br><br><span style="font-size: 15px;font-weight: 300;">Please download this lesson when online by clicking on <strong style="font-size: 20px;color: #ffbd3b;">&#10515;</strong> on the top-right corner of the lesson thumbnails. If you are online, please log out of the offline mode and log back in.</span></div>',
    );
  } else {
    $('#offPop').show();
  }
  setTimeout(function () {
    $('#offPop').fadeOut();
  }, 4000);
}

function mobilePopup() {
  if ($('#offPop').length == 0) {
    $('body').append(
      '<div style="position: fixed; background: grey; top: 0; right: 0; bottom: 0; left: 0; height: 100%; width: 100%; z-index: 9999;"></div><div id="offPop" style="position: fixed; background: #202020; color: white; border-radius: 10px; font-size: 22px; top: 0; right: 0; bottom: 0; left: 0; margin: auto auto; padding: 30px 25px 50px 25px; height: 140px; width: 370px; z-index: 10000; text-align: center;"><strong>THIS WEB VERSION IS<br>NOT COMPATIBLE<br>WITH MOBILE DEVICES</strong><p style="font-size: 15px; padding-top: 10px;">Please download our app instead. You will now be redirected to the mobile download page.</p></div>',
    );
  } else {
    $('#offPop').show();
    $('#redArrowImg').css({ opacity: '0' });
    $('body').css({ background: 'grey' });
  }
  setTimeout(function () {
    window.location =
      'https://www.ouinolanguages.com/mobile/' +
      lessonLanguage.toLowerCase() +
      '/';
  }, 8000);
}

var cacheUpdated = false;

function updateCache() {
  var webBtnAmount = $('.webBtn').length;
  if (cacheUpdated || webBtnAmount == 0) {
    return;
  }

  checkCache2('pronun/images/pronunBack1.png');

  for (var i = 0; i < webBtnAmount; i++) {
    theWeb = $('.webBtn:eq(' + i + ')').parent();
    var webClass = theWeb
      .attr('class')
      .replace('tItems ', '')
      .replace('lessonItems L', '')
      .replace('lessonItems L', '')
      .replace(' noQuiz', '')
      .replace(' quizOnly', '')
      .replace(' lessonItemsHOVER', '');
    var currArrNum = webClass.replace(/\D/g, '');
    var presType = webClass.split(currArrNum).join('');
    currArrNum = parseInt(currArrNum);
    checkCache(presType + '/' + currArrNum + '/images/background.png');
  }
  if (sessionStorage.getItem('offlineSession')) {
    offlineActions();
  }
  cacheUpdated = true;
}

if (sessionStorage.getItem('offlineSession')) {
  var dCount = 0;
}

function offlineActions() {
  $('.webBtn, .webBtn2, #searchBtn').hide();

  $('.webBtn, .webBtn2').addClass('downloadOffline');
  $('.gq').hide();
  $('.comb').addClass('displayNone');
  $('.quizOnly').addClass('displayNone');

  if ($('.downloaded').length == 0 && dCount < 5) {
    setTimeout(function () {
      offlineActions();
      dCount++;
    }, 2000);
    return;
  }

  var numOfLessons;
  var numOfDownload;
  var i;
  ///TEMP
  for (i = 0; i < $('.gq').length; i++) {
    numOfLessons =
      $('.gq:eq(' + i + ')')
        .parent()
        .children('.Lsection')
        .children('.lessonItems')
        .children('.webBtn').length +
      $('.gq:eq(' + i + ')')
        .parent()
        .children('.lessonItems')
        .children('.webBtn').length;
    numOfDownload =
      $('.gq:eq(' + i + ')')
        .parent()
        .children('.Lsection')
        .children('.lessonItems')
        .children('.downloaded').length +
      $('.gq:eq(' + i + ')')
        .parent()
        .children('.lessonItems')
        .children('.downloaded').length;
    if (numOfLessons == numOfDownload) {
      $('.gq:eq(' + i + ')').show();
    }
  }
  ///TEMP
  ///TEMP
  for (i = 0; i < $('.quizOnly').length; i++) {
    numOfLessons =
      $('.quizOnly:eq(' + i + ')')
        .parent()
        .children('.Lsection')
        .children('.lessonItems')
        .children('.webBtn').length +
      $('.quizOnly:eq(' + i + ')')
        .parent()
        .children('.lessonItems')
        .children('.webBtn').length;
    numOfDownload =
      $('.quizOnly:eq(' + i + ')')
        .parent()
        .children('.Lsection')
        .children('.lessonItems')
        .children('.downloaded').length +
      $('.quizOnly:eq(' + i + ')')
        .parent()
        .children('.lessonItems')
        .children('.downloaded').length;

    if (numOfLessons == numOfDownload) {
      $('.quizOnly:eq(' + i + ')').removeClass('displayNone');
    }
  }

  urlTimeout = setTimeout(function () {
    $('.webBtn, .webBtn2').show();
  }, 1500);
}

function installApp() {
  // Show the prompt
  deferredPrompt.prompt();
  $('#install_button').addClass('disabled');
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then(function (choiceResult) {
    if (choiceResult.outcome === 'accepted') {
      console.log('PWA setup accepted');
      localStorage.setItem(lessonLanguage + 'installedApp', 'true');
      $('#install_bar').hide();
      $('#install_button2').hide();
    } else {
      console.log('PWA setup rejected');
    }
    $('#install_button').removeClass('disabled');
    deferredPrompt = null;
  });
}
