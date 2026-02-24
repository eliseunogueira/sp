function loadScript(url) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
}

var scrollPos2;

loadScript('scripts/' + lessonLanguage + '/vocab.js');
loadScript('scripts/' + lessonLanguage + '/convo.js');
loadScript('scripts/' + lessonLanguage + '/block.js');
loadScript('scripts/' + lessonLanguage + '/verb.js');

$(document).ready(function () {
  ///2021ma start
  $('form').on('submit', function (event) {
    event.preventDefault();
  });
  $('#searchFr').on('keyup', function (e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key != 13) {
      resetFrench();
    }
  });
  $('#searchSp').on('keyup', function (e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key != 13) {
      resetSpanish();
    }
  });
  $('#searchIt').on('keyup', function (e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key != 13) {
      resetItalian();
    }
  });
  $('#searchGe').on('keyup', function (e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key != 13) {
      resetGerman();
    }
  });
  ///2021ma start

  if (lessonLanguage == 'French') {
    $('#frLessons').show();
    setTimeout(function () {
      var i;
      for (i = 0; i < frVocabRed.length; i++) {
        $('#frLessons .vo' + (i + 1)).append('<i>' + frVocabRed[i] + '</i>');
      }
      for (i = 0; i < frVerbRed.length; i++) {
        $('#frLessons .ve' + (i + 1)).append('<i>' + frVerbRed[i] + '</i>');
      }
      for (i = 0; i < frConvoTitles.length; i++) {
        $('#frLessons .co' + (i + 1)).append('<i>' + frConvoTitles[i] + '</i>');
      }
    }, 500);
  } else if (lessonLanguage == 'Spanish') {
    $('#spLessons').show();
    setTimeout(function () {
      var i;
      for (i = 0; i < spVocabRed.length; i++) {
        $('#spLessons .vo' + (i + 1)).append('<i>' + spVocabRed[i] + '</i>');
      }
      for (i = 0; i < spVerbRed.length; i++) {
        $('#spLessons .ve' + (i + 1)).append('<i>' + spVerbRed[i] + '</i>');
      }
      for (i = 0; i < spConvoTitles.length; i++) {
        $('#spLessons .co' + (i + 1)).append('<i>' + spConvoTitles[i] + '</i>');
      }
    }, 500);
  } else if (lessonLanguage == 'Italian') {
    $('#itLessons').show();
    setTimeout(function () {
      var i;
      for (i = 0; i < itVocabRed.length; i++) {
        $('#itLessons .vo' + (i + 1)).append('<i>' + itVocabRed[i] + '</i>');
      }
      for (i = 0; i < itVerbRed.length; i++) {
        $('#itLessons .ve' + (i + 1)).append('<i>' + itVerbRed[i] + '</i>');
      }
      for (i = 0; i < itConvoTitles.length; i++) {
        $('#itLessons .co' + (i + 1)).append('<i>' + itConvoTitles[i] + '</i>');
      }
    }, 500);
  } else if (lessonLanguage == 'German') {
    $('#geLessons').show();
    setTimeout(function () {
      var i;
      for (i = 0; i < geVocabRed.length; i++) {
        $('#geLessons .vo' + (i + 1)).append('<i>' + geVocabRed[i] + '</i>');
      }
      for (i = 0; i < geVerbRed.length; i++) {
        $('#geLessons .ve' + (i + 1)).append('<i>' + geVerbRed[i] + '</i>');
      }
      for (i = 0; i < geConvoTitles.length; i++) {
        $('#geLessons .co' + (i + 1)).append('<i>' + geConvoTitles[i] + '</i>');
      }
    }, 500);
  }

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

  if (currentDevice != 'mobile') {
    $('.uModule').hover(function () {
      $(this).toggleClass('uModuleHover');
    });
    $('.barOpt').hover(function () {
      $(this).toggleClass('fullOpacity');
    });
    $('.cFound').hover(function () {
      $(this).toggleClass('coHover');
      $('.cFound strong, .cFound em, .cFound b').toggleClass('wText');
    });
    $('.bFound').hover(function () {
      $(this).toggleClass('blueHover');
      $('.bFound strong, .bFound em, .bFound b').toggleClass('wText');
    });
  }

  $('.mainCont h3, .mainCont h2, .mainCont div').on('touchstart', function () {
    $('.searchBox').blur();
  });

  $('.uLesson').on('click', function () {
    var theSection = $(this).parent().attr('class');

    if (theSection.indexOf('voMod') != -1) {
      sessionStorage['menuType'] = 'vocabSection';
    } else if (theSection.indexOf('blMod') != -1) {
      sessionStorage['menuType'] = 'blockSection';
    } else if (theSection.indexOf('coMod') != -1) {
      sessionStorage['menuType'] = 'convoSection';
    } else if (theSection.indexOf('keMod') != -1) {
      sessionStorage['menuType'] = 'verbSection2';
    } else if (theSection.indexOf('inMod') != -1) {
      sessionStorage['menuType'] = 'verbSection1';
    } else if (theSection.indexOf('enMod') != -1) {
      sessionStorage['menuType'] = 'verbSection4';
    } else if (theSection.indexOf('exMod') != -1) {
      sessionStorage['menuType'] = 'verbSection5';
    }

    var theUrl = $(this)
      .attr('class')
      .split('currSelect')
      .join('')
      .split('foundIt2')
      .join('')
      .split('foundIt')
      .join('')
      .split('uLesson')
      .join('')
      .split('one')
      .join('')
      .split('two')
      .join('')
      .split('three')
      .join('')
      .split('nq1')
      .join('')
      .split('nq2')
      .join('')
      .split('uSelect')
      .join('')
      .split('bl')
      .join('block/')
      .split('vo')
      .join('vocab/')
      .split('co')
      .join('convo/')
      .split('ve')
      .join('verb/')
      .split('gr25')
      .join('')
      .split('gr24')
      .join('')
      .split('gr23')
      .join('')
      .split('gr22')
      .join('')
      .split('gr21')
      .join('')
      .split('gr20')
      .join('')
      .split('gr19')
      .join('')
      .split('gr18')
      .join('')
      .split('gr17')
      .join('')
      .split('gr16')
      .join('')
      .split('gr15')
      .join('')
      .split('gr14')
      .join('')
      .split('gr13')
      .join('')
      .split('gr12')
      .join('')
      .split('gr11')
      .join('')
      .split('gr10')
      .join('')
      .split('gr9')
      .join('')
      .split('gr8')
      .join('')
      .split('gr7')
      .join('')
      .split('gr6')
      .join('')
      .split('gr5')
      .join('')
      .split('gr4')
      .join('')
      .split('gr3')
      .join('')
      .split('gr2')
      .join('')
      .split('gr1')
      .join('')
      .split(' ')
      .join('');

    theUrl = '../' + theUrl + '/index.html';
    $('#loadLogo').show();
    setTimeout(function () {
      if (window.self !== window.top) {
        window.parent.location.href = theUrl;
      } else {
        window.location.href = theUrl;
      }
    }, 100);
  });

  $('.cFound').on('click', function () {
    var parID = $(this).parent().attr('id');
    $('#' + parID + ' .foundIt').show();
    $('#' + parID + ' .coText').show();
    $(this).hide();
  });
  $('.bFound').on('click', function () {
    var parID = $(this).parent().attr('id');
    $('#' + parID + ' .foundIt2').show();
    $('#' + parID + ' .bText').show();
    $(this).hide();
  });

  $('.blBtn').on('click', function () {
    var parID = $(this).parent().attr('id');
    if ($('#' + parID + ' .blMod').is(':visible')) {
      window.scrollTo(0, scrollPos2);
      $('#' + parID + ' .blMod').hide();
      $('#' + parID + ' .blBtn .up').hide();
      $('#' + parID + ' .blBtn .down').show();
      $(this).removeClass('uModuleSelect green');
    } else {
      scrollPos2 = $(window).scrollTop();
      $('#' + parID + ' .blMod').show();
      $('#' + parID + ' .blBtn .up').show();
      $('#' + parID + ' .blBtn .down').hide();
      $(this).addClass('uModuleSelect green');
    }
  });

  $('.coBtn').on('click', function () {
    var parID = $(this).parent().attr('id');
    if ($('#' + parID + ' .coMod').is(':visible')) {
      window.scrollTo(0, scrollPos2);
      $('#' + parID + ' .coMod').hide();
      $('#' + parID + ' .coBtn .up').hide();
      $('#' + parID + ' .coBtn .down').show();
      $(this).removeClass('uModuleSelect yellow');
    } else {
      scrollPos2 = $(window).scrollTop();
      $('#' + parID + ' .coMod').show();
      $('#' + parID + ' .coBtn .up').show();
      $('#' + parID + ' .coBtn .down').hide();
      $(this).addClass('uModuleSelect yellow');
    }
  });

  $('.voBtn').on('click', function () {
    var parID = $(this).parent().attr('id');
    if ($('#' + parID + ' .voMod').is(':visible')) {
      window.scrollTo(0, scrollPos2);
      $('#' + parID + ' .voMod').hide();
      $('#' + parID + ' .voBtn .up').hide();
      $('#' + parID + ' .voBtn .down').show();
      $(this).removeClass('uModuleSelect red');
    } else {
      scrollPos2 = $(window).scrollTop();
      $('#' + parID + ' .voMod').show();
      $('#' + parID + ' .voBtn .up').show();
      $('#' + parID + ' .voBtn .down').hide();
      $(this).addClass('uModuleSelect red');
    }
  });

  $('.keBtn').on('click', function () {
    var parID = $(this).parent().attr('id');
    if ($('#' + parID + ' .keMod').is(':visible')) {
      window.scrollTo(0, scrollPos2);
      $('#' + parID + ' .keMod').hide();
      $('#' + parID + ' .keBtn .up').hide();
      $('#' + parID + ' .keBtn .down').show();
      $(this).removeClass('uModuleSelect');
    } else {
      scrollPos2 = $(window).scrollTop();
      $('#' + parID + ' .keMod').show();
      $('#' + parID + ' .keBtn .up').show();
      $('#' + parID + ' .keBtn .down').hide();
      $(this).addClass('uModuleSelect');
    }
  });

  $('.inBtn').on('click', function () {
    var parID = $(this).parent().attr('id');
    if ($('#' + parID + ' .inMod').is(':visible')) {
      window.scrollTo(0, scrollPos2);
      $('#' + parID + ' .inMod').hide();
      $('#' + parID + ' .inBtn .up').hide();
      $('#' + parID + ' .inBtn .down').show();
      $(this).removeClass('uModuleSelect');
    } else {
      scrollPos2 = $(window).scrollTop();
      $('#' + parID + ' .inMod').show();
      $('#' + parID + ' .inBtn .up').show();
      $('#' + parID + ' .inBtn .down').hide();
      $(this).addClass('uModuleSelect');
    }
  });

  $('.enBtn').on('click', function () {
    var parID = $(this).parent().attr('id');
    if ($('#' + parID + ' .enMod').is(':visible')) {
      window.scrollTo(0, scrollPos2);
      $('#' + parID + ' .enMod').hide();
      $('#' + parID + ' .enBtn .up').hide();
      $('#' + parID + ' .enBtn .down').show();
      $(this).removeClass('uModuleSelect');
    } else {
      scrollPos2 = $(window).scrollTop();
      $('#' + parID + ' .enMod').show();
      $('#' + parID + ' .enBtn .up').show();
      $('#' + parID + ' .enBtn .down').hide();
      $(this).addClass('uModuleSelect');
    }
  });

  $('.exBtn').on('click', function () {
    var parID = $(this).parent().attr('id');
    if ($('#' + parID + ' .exMod').is(':visible')) {
      window.scrollTo(0, scrollPos2);
      $('#' + parID + ' .exMod').hide();
      $('#' + parID + ' .exBtn .up').hide();
      $('#' + parID + ' .exBtn .down').show();
      $(this).removeClass('uModuleSelect');
    } else {
      scrollPos2 = $(window).scrollTop();
      $('#' + parID + ' .exMod').show();
      $('#' + parID + ' .exBtn .up').show();
      $('#' + parID + ' .exBtn .down').hide();
      $(this).addClass('uModuleSelect');
    }
  });
});

///REMOVE ACCENT FUNCTION
function rm(word) {
  var word2 = word
    .toLowerCase()
    .replace(/à|á|â|ã|ä|å/g, 'a')
    .replace(/ç/g, 'c')
    .replace(/è|é|ê|ë/g, 'e')
    .replace(/ì|í|î|ï/g, 'i')
    .replace(/ò|ó|ô|ö|õ|ø/g, 'o')
    .replace(/ù|ú|û|ü/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/ß/g, 'ss')
    .split(',')
    .join(' ')
    .split('(')
    .join(' ')
    .split(')')
    .join(' ')
    .split('/')
    .join(' ')
    .split("'")
    .join(' ');
  return word2;
}

///FIND FRENCH

function resetFrench() {
  var bt = ' ';
  $('#frLessons .notFound, .foundText').hide();
  $('.uLesson').removeClass('foundIt foundIt2');
  $('.found').removeClass('disableTouch');
  if (bt == ' ') {
    $('#frLessons .uModule, #frLessons .uTitle, #frLessons .uLesson').show();
    $('#frLessons .modCont').hide();
    $('#frLessons .uModule').removeClass('uSearch');
    $('#frLessons .blBtn').removeClass('green');
    $('#frLessons .voBtn').removeClass('red');
    $('#frLessons .coBtn').removeClass('yellow');
    $('#frLessons .uModule').removeClass('uModuleSelect');
    $('#frLessons .found').hide();
    return;
  }
  $('#frLessons .modCont').show();
  $('#frLessons .uModule, #frLessons .uTitle, #frLessons .uLesson').hide();
  var i;
  for (i = 0; i < $('#frLessons .uLesson').length; i++) {
    var ln = $('#frLessons .uLesson').eq(i).text();
    ln = rm(ln);

    if (ln.indexOf(bt) != -1) {
      $('#frLessons .uLesson').eq(i).show();
      $('#frLessons .uLesson').eq(i).prevAll('div.uTitle:first').show();
      var cate = $('#frLessons .uLesson')
        .eq(i)
        .nextAll('div.uTitle:first')
        .prev();
      if (cate.hasClass('three')) {
        cate.show();
      }
      $('#frLessons .uLesson').eq(i).parent().prev().show();
      $('#frLessons .uModule').addClass('uSearch');
      $('#frLessons .blBtn').addClass('green');
      $('#frLessons .voBtn').addClass('red');
      $('#frLessons .coBtn').addClass('yellow');
    }
  }

  if ($('#frLessons').height() < 70) {
    frSearch();
  }
}

///FIND SPANISH
function resetSpanish() {
  var bt = ' ';
  $('#spLessons .notFound, .foundText').hide();
  $('.uLesson').removeClass('foundIt foundIt2');
  $('.found').removeClass('disableTouch');
  if (bt == ' ') {
    $('#spLessons .uModule, #spLessons .uTitle, #spLessons .uLesson').show();
    $('#spLessons .modCont').hide();
    $('#spLessons .uModule').removeClass('uSearch');
    $('#spLessons .blBtn').removeClass('green');
    $('#spLessons .voBtn').removeClass('red');
    $('#spLessons .coBtn').removeClass('yellow');
    $('#spLessons .uModule').removeClass('uModuleSelect');
    $('#spLessons .found').hide();
    return;
  }
  $('#spLessons .modCont').show();
  $('#spLessons .uModule, #spLessons .uTitle, #spLessons .uLesson').hide();
  var i;
  for (i = 0; i < $('#spLessons .uLesson').length; i++) {
    var ln = $('#spLessons .uLesson').eq(i).text();
    ln = rm(ln);
    if (ln.indexOf(bt) != -1) {
      $('#spLessons .uLesson').eq(i).show();
      $('#spLessons .uLesson').eq(i).prevAll('div.uTitle:first').show();
      var cate = $('#spLessons .uLesson')
        .eq(i)
        .nextAll('div.uTitle:first')
        .prev();
      if (cate.hasClass('three')) {
        cate.show();
      }
      $('#spLessons .uLesson').eq(i).parent().prev().show();
      $('#spLessons .uModule').addClass('uSearch');
      $('#spLessons .blBtn').addClass('green');
      $('#spLessons .voBtn').addClass('red');
      $('#spLessons .coBtn').addClass('yellow');
    }
  }

  if ($('#spLessons').height() < 70) {
    spSearch();
  }
}

///FIND ITALIAN
function resetItalian() {
  var bt = ' ';
  $('#itLessons .notFound, .foundText').hide();
  $('.uLesson').removeClass('foundIt foundIt2');
  $('.found').removeClass('disableTouch');
  if (bt == ' ') {
    $('#itLessons .uModule, #itLessons .uTitle, #itLessons .uLesson').show();
    $('#itLessons .modCont').hide();
    $('#itLessons .uModule').removeClass('uSearch');
    $('#itLessons .blBtn').removeClass('green');
    $('#itLessons .voBtn').removeClass('red');
    $('#itLessons .coBtn').removeClass('yellow');
    $('#itLessons .uModule').removeClass('uModuleSelect');
    $('#itLessons .found').hide();
    return;
  }
  $('#itLessons .modCont').show();
  $('#itLessons .uModule, #itLessons .uTitle, #itLessons .uLesson').hide();
  var i;
  for (i = 0; i < $('#itLessons .uLesson').length; i++) {
    var ln = $('#itLessons .uLesson').eq(i).text();
    ln = rm(ln);
    if (ln.indexOf(bt) != -1) {
      $('#itLessons .uLesson').eq(i).show();
      $('#itLessons .uLesson').eq(i).prevAll('div.uTitle:first').show();
      var cate = $('#itLessons .uLesson')
        .eq(i)
        .nextAll('div.uTitle:first')
        .prev();
      if (cate.hasClass('three')) {
        cate.show();
      }
      $('#itLessons .uLesson').eq(i).parent().prev().show();
      $('#itLessons .uModule').addClass('uSearch');
      $('#itLessons .blBtn').addClass('green');
      $('#itLessons .voBtn').addClass('red');
      $('#itLessons .coBtn').addClass('yellow');
    }
  }

  if ($('#itLessons').height() < 70) {
    itSearch();
  }
}

///FIND GERMAN
function resetGerman() {
  var bt = ' ';
  $('#geLessons .notFound, .foundText').hide();
  $('.uLesson').removeClass('foundIt foundIt2');
  $('.found').removeClass('disableTouch');
  if (bt == ' ') {
    $('#geLessons .uModule, #geLessons .uTitle, #geLessons .uLesson').show();
    $('#geLessons .modCont').hide();
    $('#geLessons .uModule').removeClass('uSearch');
    $('#geLessons .blBtn').removeClass('green');
    $('#geLessons .voBtn').removeClass('red');
    $('#geLessons .coBtn').removeClass('yellow');
    $('#geLessons .uModule').removeClass('uModuleSelect');
    $('#geLessons .found').hide();
    return;
  }
  $('#geLessons .modCont').show();
  $('#geLessons .uModule, #geLessons .uTitle, #geLessons .uLesson').hide();
  var i;
  for (i = 0; i < $('#geLessons .uLesson').length; i++) {
    var ln = $('#geLessons .uLesson').eq(i).text();
    ln = rm(ln);
    if (ln.indexOf(bt) != -1) {
      $('#geLessons .uLesson').eq(i).show();
      $('#geLessons .uLesson').eq(i).prevAll('div.uTitle:first').show();
      var cate = $('#geLessons .uLesson')
        .eq(i)
        .nextAll('div.uTitle:first')
        .prev();
      if (cate.hasClass('three')) {
        cate.show();
      }
      $('#geLessons .uLesson').eq(i).parent().prev().show();
      $('#geLessons .uModule').addClass('uSearch');
      $('#geLessons .blBtn').addClass('green');
      $('#geLessons .voBtn').addClass('red');
      $('#geLessons .coBtn').addClass('yellow');
    }
  }

  if ($('#geLessons').height() < 70) {
    geSearch();
  }
}

function searchFrench() {
  $('.lds-ring').addClass('searching');
  setTimeout(function () {
    $('.lds-ring').removeClass('searching');
  }, 1500);
  var bt = $('#searchFr').val();
  bt = ' ' + rm(bt);
  console.log(bt);
  $('#frLessons .notFound, .foundText').hide();
  $('.uLesson').removeClass('foundIt foundIt2');
  $('.found').removeClass('disableTouch');
  if (bt == ' ') {
    $('#frLessons .uModule, #frLessons .uTitle, #frLessons .uLesson').show();
    $('#frLessons .modCont').hide();
    $('#frLessons .uModule').removeClass('uSearch');
    $('#frLessons .blBtn').removeClass('green');
    $('#frLessons .voBtn').removeClass('red');
    $('#frLessons .coBtn').removeClass('yellow');
    $('#frLessons .uModule').removeClass('uModuleSelect');
    $('#frLessons .found').hide();
    return;
  }
  $('#frLessons .modCont').show();
  $('#frLessons .uModule, #frLessons .uTitle, #frLessons .uLesson').hide();
  var i;
  for (i = 0; i < $('#frLessons .uLesson').length; i++) {
    var ln = $('#frLessons .uLesson').eq(i).text();
    ln = rm(ln);

    if (ln.indexOf(bt) != -1) {
      $('#frLessons .uLesson').eq(i).show();
      $('#frLessons .uLesson').eq(i).prevAll('div.uTitle:first').show();
      var cate = $('#frLessons .uLesson')
        .eq(i)
        .nextAll('div.uTitle:first')
        .prev();
      if (cate.hasClass('three')) {
        cate.show();
      }
      $('#frLessons .uLesson').eq(i).parent().prev().show();
      $('#frLessons .uModule').addClass('uSearch');
      $('#frLessons .blBtn').addClass('green');
      $('#frLessons .voBtn').addClass('red');
      $('#frLessons .coBtn').addClass('yellow');
    }
  }

  if ($('#frLessons').height() < 70) {
    frSearch();
  }
}

///FIND SPANISH
function searchSpanish() {
  $('.lds-ring').addClass('searching');
  setTimeout(function () {
    $('.lds-ring').removeClass('searching');
  }, 1500);
  var bt = $('#searchSp').val();
  bt = ' ' + rm(bt);
  $('#spLessons .notFound, .foundText').hide();
  $('.uLesson').removeClass('foundIt foundIt2');
  $('.found').removeClass('disableTouch');
  if (bt == ' ') {
    $('#spLessons .uModule, #spLessons .uTitle, #spLessons .uLesson').show();
    $('#spLessons .modCont').hide();
    $('#spLessons .uModule').removeClass('uSearch');
    $('#spLessons .blBtn').removeClass('green');
    $('#spLessons .voBtn').removeClass('red');
    $('#spLessons .coBtn').removeClass('yellow');
    $('#spLessons .uModule').removeClass('uModuleSelect');
    $('#spLessons .found').hide();
    return;
  }
  $('#spLessons .modCont').show();
  $('#spLessons .uModule, #spLessons .uTitle, #spLessons .uLesson').hide();
  var i;
  for (i = 0; i < $('#spLessons .uLesson').length; i++) {
    var ln = $('#spLessons .uLesson').eq(i).text();
    ln = rm(ln);
    if (ln.indexOf(bt) != -1) {
      $('#spLessons .uLesson').eq(i).show();
      $('#spLessons .uLesson').eq(i).prevAll('div.uTitle:first').show();
      var cate = $('#spLessons .uLesson')
        .eq(i)
        .nextAll('div.uTitle:first')
        .prev();
      if (cate.hasClass('three')) {
        cate.show();
      }
      $('#spLessons .uLesson').eq(i).parent().prev().show();
      $('#spLessons .uModule').addClass('uSearch');
      $('#spLessons .blBtn').addClass('green');
      $('#spLessons .voBtn').addClass('red');
      $('#spLessons .coBtn').addClass('yellow');
    }
  }

  if ($('#spLessons').height() < 70) {
    spSearch();
  }
}

///FIND ITALIAN
function searchItalian() {
  $('.lds-ring').addClass('searching');
  setTimeout(function () {
    $('.lds-ring').removeClass('searching');
  }, 1500);
  var bt = $('#searchIt').val();
  bt = ' ' + rm(bt);
  $('#itLessons .notFound, .foundText').hide();
  $('.uLesson').removeClass('foundIt foundIt2');
  $('.found').removeClass('disableTouch');
  if (bt == ' ') {
    $('#itLessons .uModule, #itLessons .uTitle, #itLessons .uLesson').show();
    $('#itLessons .modCont').hide();
    $('#itLessons .uModule').removeClass('uSearch');
    $('#itLessons .blBtn').removeClass('green');
    $('#itLessons .voBtn').removeClass('red');
    $('#itLessons .coBtn').removeClass('yellow');
    $('#itLessons .uModule').removeClass('uModuleSelect');
    $('#itLessons .found').hide();
    return;
  }
  $('#itLessons .modCont').show();
  $('#itLessons .uModule, #itLessons .uTitle, #itLessons .uLesson').hide();
  var i;
  for (i = 0; i < $('#itLessons .uLesson').length; i++) {
    var ln = $('#itLessons .uLesson').eq(i).text();
    ln = rm(ln);
    if (ln.indexOf(bt) != -1) {
      $('#itLessons .uLesson').eq(i).show();
      $('#itLessons .uLesson').eq(i).prevAll('div.uTitle:first').show();
      var cate = $('#itLessons .uLesson')
        .eq(i)
        .nextAll('div.uTitle:first')
        .prev();
      if (cate.hasClass('three')) {
        cate.show();
      }
      $('#itLessons .uLesson').eq(i).parent().prev().show();
      $('#itLessons .uModule').addClass('uSearch');
      $('#itLessons .blBtn').addClass('green');
      $('#itLessons .voBtn').addClass('red');
      $('#itLessons .coBtn').addClass('yellow');
    }
  }

  if ($('#itLessons').height() < 70) {
    itSearch();
  }
}

///FIND GERMAN
function searchGerman() {
  $('.lds-ring').addClass('searching');
  setTimeout(function () {
    $('.lds-ring').removeClass('searching');
  }, 1500);
  var bt = $('#searchGe').val();
  bt = ' ' + rm(bt);
  $('#geLessons .notFound, .foundText').hide();
  $('.uLesson').removeClass('foundIt foundIt2');
  $('.found').removeClass('disableTouch');
  if (bt == ' ') {
    $('#geLessons .uModule, #geLessons .uTitle, #geLessons .uLesson').show();
    $('#geLessons .modCont').hide();
    $('#geLessons .uModule').removeClass('uSearch');
    $('#geLessons .blBtn').removeClass('green');
    $('#geLessons .voBtn').removeClass('red');
    $('#geLessons .coBtn').removeClass('yellow');
    $('#geLessons .uModule').removeClass('uModuleSelect');
    $('#geLessons .found').hide();
    return;
  }
  $('#geLessons .modCont').show();
  $('#geLessons .uModule, #geLessons .uTitle, #geLessons .uLesson').hide();
  var i;
  for (i = 0; i < $('#geLessons .uLesson').length; i++) {
    var ln = $('#geLessons .uLesson').eq(i).text();
    ln = rm(ln);
    if (ln.indexOf(bt) != -1) {
      $('#geLessons .uLesson').eq(i).show();
      $('#geLessons .uLesson').eq(i).prevAll('div.uTitle:first').show();
      var cate = $('#geLessons .uLesson')
        .eq(i)
        .nextAll('div.uTitle:first')
        .prev();
      if (cate.hasClass('three')) {
        cate.show();
      }
      $('#geLessons .uLesson').eq(i).parent().prev().show();
      $('#geLessons .uModule').addClass('uSearch');
      $('#geLessons .blBtn').addClass('green');
      $('#geLessons .voBtn').addClass('red');
      $('#geLessons .coBtn').addClass('yellow');
    }
  }

  if ($('#geLessons').height() < 70) {
    geSearch();
  }
}

function strip(word) {
  var word2 = word
    .toLowerCase()
    .replace(/[0-9]/g, '')
    .split('<strong>')
    .join('')
    .split('<em>')
    .join('')
    .split('</strong>')
    .join('')
    .split('</em>')
    .join('')
    .split('/')
    .join('');
  word2 = word2
    .replace(/à|á|â|ã|ä|å/g, 'a')
    .replace(/ç/g, 'c')
    .replace(/è|é|ê|ë/g, 'e')
    .replace(/ì|í|î|ï/g, 'i')
    .replace(/ò|ó|ô|ö|õ|ø/g, 'o')
    .replace(/ù|ú|û|ü/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/ß/g, 'ss')
    .replace(/[.,\/#…!¡?¿$%\^&\*'";:’“”{}=\-_`~()]/g, ' ');
  word2 = ' ' + word2;
  word2 = word2
    .split('  ')
    .join(' ')
    .split('  ')
    .join(' ')
    .split('  ')
    .join(' ')
    .split('  ')
    .join(' ');
  return word2;
}

//French Search
function frSearch() {
  var bt = strip($('#searchFr').val());
  $('#frLessons .found').hide();
  if (bt.length < 2) {
    return;
  }
  var count = 0;
  var count2 = 0;
  var count3 = 0;
  ////SEARCH 1
  var i;
  for (i = 0; i < frConvo.length; i++) {
    if (frConvo[i].indexOf(bt) != -1) {
      count++;
      $('#frLessons .co' + (i + 1)).addClass('foundIt');
    }
  }
  ////TELL USER 1
  if (count > 1) {
    $('#frLessons .cFound').show();
    $('#frLessons .cFound').html(
      '<strong>' +
        $('#searchFr').val() +
        '</strong> found in <strong>' +
        count +
        ' </strong>conversations <b>(show&nbsp;lessons)</b>',
    );
  } else if (count == 1) {
    $('#frLessons .cFound').show();
    $('#frLessons .cFound').html(
      '<strong>' +
        $('#searchFr').val() +
        '</strong> found in <strong>1</strong> conversation <b>(show&nbsp;lesson)</b>',
    );
  }

  ////SEARCH 2
  for (i = 0; i < frBlockBlue.length; i++) {
    if (frBlockBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#frLessons .bl' + (i + 1)).addClass('foundIt2');
    }
  }
  for (i = 0; i < frVerbBlue.length; i++) {
    if (frVerbBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#frLessons .ve' + (i + 1)).addClass('foundIt2');
    }
  }
  for (i = 0; i < frVocabBlue.length; i++) {
    if (frVocabBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#frLessons .vo' + (i + 1)).addClass('foundIt2');
    }
  }

  ////TELL USER 2
  if (count2 >= 1) {
    $('#frLessons .bFound').show();
    $('#frLessons .bFound').html(
      '<strong>' +
        $('#searchFr').val() +
        '</strong> found as a blue word in <strong>' +
        count2 +
        '</strong>&nbsp;lessons <b>(show&nbsp;lessons)</b>',
    );
  } else if (count2 == 1) {
    $('#frLessons .bFound').show();
    $('#frLessons .bFound').html(
      '<strong>' +
        $('#searchFr').val() +
        '</strong> found as a blue word in <strong>1</strong>&nbsp;lesson <b>(show&nbsp;lesson)</b>',
    );
  }

  if ($('#frLessons').height() < 70) {
    $('#frLessons .notFound').show();
  }
}
//French Search END

function spSearch() {
  var bt = strip($('#searchSp').val());
  $('#spLessons .found').hide();
  if (bt.length < 2) {
    return;
  }
  var count = 0;
  var count2 = 0;
  var count3 = 0;
  ////SEARCH 1
  for (i = 0; i < spConvo.length; i++) {
    if (spConvo[i].indexOf(bt) != -1) {
      count++;
      $('#spLessons .co' + (i + 1)).addClass('foundIt');
    }
  }
  ////TELL USER 1
  if (count > 1) {
    $('#spLessons .cFound').show();
    $('#spLessons .cFound').html(
      '<strong>' +
        $('#searchSp').val() +
        '</strong> found in <strong>' +
        count +
        ' </strong>conversations <b>(show&nbsp;lessons)</b>',
    );
  } else if (count == 1) {
    $('#spLessons .cFound').show();
    $('#spLessons .cFound').html(
      '<strong>' +
        $('#searchSp').val() +
        '</strong> found in <strong>1</strong> conversation <b>(show&nbsp;lesson)</b>',
    );
  }

  ////SEARCH 2
  for (i = 0; i < spBlockBlue.length; i++) {
    if (spBlockBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#spLessons .bl' + (i + 1)).addClass('foundIt2');
    }
  }
  for (i = 0; i < spVerbBlue.length; i++) {
    if (spVerbBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#spLessons .ve' + (i + 1)).addClass('foundIt2');
    }
  }
  for (i = 0; i < spVocabBlue.length; i++) {
    if (spVocabBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#spLessons .vo' + (i + 1)).addClass('foundIt2');
    }
  }

  ////TELL USER 2
  if (count2 >= 1) {
    $('#spLessons .bFound').show();
    $('#spLessons .bFound').html(
      '<strong>' +
        $('#searchSp').val() +
        '</strong> found as a blue word in <strong>' +
        count2 +
        '</strong>&nbsp;lessons <b>(show&nbsp;lessons)</b>',
    );
  } else if (count2 == 1) {
    $('#spLessons .bFound').show();
    $('#spLessons .bFound').html(
      '<strong>' +
        $('#searchSp').val() +
        '</strong> found as a blue word in <strong>1</strong>&nbsp;lesson <b>(show&nbsp;lesson)</b>',
    );
  }

  if ($('#spLessons').height() < 70) {
    $('#spLessons .notFound').show();
  }
}
//Spanish Search END

function itSearch() {
  var bt = strip($('#searchIt').val());
  $('#itLessons .found').hide();
  if (bt.length < 2) {
    return;
  }
  var count = 0;
  var count2 = 0;
  var count3 = 0;
  ////SEARCH 1
  for (i = 0; i < itConvo.length; i++) {
    if (itConvo[i].indexOf(bt) != -1) {
      count++;
      $('#itLessons .co' + (i + 1)).addClass('foundIt');
    }
  }
  ////TELL USER 1
  if (count > 1) {
    $('#itLessons .cFound').show();
    $('#itLessons .cFound').html(
      '<strong>' +
        $('#searchIt').val() +
        '</strong> found in <strong>' +
        count +
        ' </strong>conversations <b>(show&nbsp;lessons)</b>',
    );
  } else if (count == 1) {
    $('#itLessons .cFound').show();
    $('#itLessons .cFound').html(
      '<strong>' +
        $('#searchIt').val() +
        '</strong> found in <strong>1</strong> conversation <b>(show&nbsp;lesson)</b>',
    );
  }

  ////SEARCH 2
  for (i = 0; i < itBlockBlue.length; i++) {
    if (itBlockBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#itLessons .bl' + (i + 1)).addClass('foundIt2');
    }
  }
  for (i = 0; i < itVerbBlue.length; i++) {
    if (itVerbBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#itLessons .ve' + (i + 1)).addClass('foundIt2');
    }
  }
  for (i = 0; i < itVocabBlue.length; i++) {
    if (itVocabBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#itLessons .vo' + (i + 1)).addClass('foundIt2');
    }
  }

  ////TELL USER 2
  if (count2 >= 1) {
    $('#itLessons .bFound').show();
    $('#itLessons .bFound').html(
      '<strong>' +
        $('#searchIt').val() +
        '</strong> found as a blue word in <strong>' +
        count2 +
        '</strong>&nbsp;lessons <b>(show&nbsp;lessons)</b>',
    );
  } else if (count2 == 1) {
    $('#itLessons .bFound').show();
    $('#itLessons .bFound').html(
      '<strong>' +
        $('#searchIt').val() +
        '</strong> found as a blue word in <strong>1</strong>&nbsp;lesson <b>(show&nbsp;lesson)</b>',
    );
  }

  if ($('#itLessons').height() < 70) {
    $('#itLessons .notFound').show();
  }
}
//Italian Search END

function geSearch() {
  var bt = strip($('#searchGe').val());
  $('#geLessons .found').hide();
  if (bt.length < 2) {
    return;
  }
  var count = 0;
  var count2 = 0;
  var count3 = 0;
  ////SEARCH 1
  for (i = 0; i < geConvo.length; i++) {
    if (geConvo[i].indexOf(bt) != -1) {
      count++;
      $('#geLessons .co' + (i + 1)).addClass('foundIt');
    }
  }
  ////TELL USER 1
  if (count > 1) {
    $('#geLessons .cFound').show();
    $('#geLessons .cFound').html(
      '<strong>' +
        $('#searchGe').val() +
        '</strong> found in <strong>' +
        count +
        ' </strong>conversations <b>(show&nbsp;lessons)</b>',
    );
  } else if (count == 1) {
    $('#geLessons .cFound').show();
    $('#geLessons .cFound').html(
      '<strong>' +
        $('#searchGe').val() +
        '</strong> found in <strong>1</strong> conversation <b>(show&nbsp;lesson)</b>',
    );
  }

  ////SEARCH 2
  for (i = 0; i < geBlockBlue.length; i++) {
    if (geBlockBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#geLessons .bl' + (i + 1)).addClass('foundIt2');
    }
  }
  for (i = 0; i < geVerbBlue.length; i++) {
    if (geVerbBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#geLessons .ve' + (i + 1)).addClass('foundIt2');
    }
  }
  for (i = 0; i < geVocabBlue.length; i++) {
    if (geVocabBlue[i].indexOf(bt) != -1) {
      count2++;
      $('#geLessons .vo' + (i + 1)).addClass('foundIt2');
    }
  }

  ////TELL USER 2
  if (count2 >= 1) {
    $('#geLessons .bFound').show();
    $('#geLessons .bFound').html(
      '<strong>' +
        $('#searchGe').val() +
        '</strong> found as a blue word in <strong>' +
        count2 +
        '</strong>&nbsp;lessons <b>(show&nbsp;lessons)</b>',
    );
  } else if (count2 == 1) {
    $('#geLessons .bFound').show();
    $('#geLessons .bFound').html(
      '<strong>' +
        $('#searchGe').val() +
        '</strong> found as a blue word in <strong>1</strong>&nbsp;lesson <b>(show&nbsp;lesson)</b>',
    );
  }

  if ($('#geLessons').height() < 70) {
    $('#geLessons .notFound').show();
  }
}
//German Search END

function checkURL(s) {
  var regexp =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(s);
}
