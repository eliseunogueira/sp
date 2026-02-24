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
      $('#fullToggle').attr('src', 'common/min2.svg');
    } else {
      $('#fullToggle').attr('src', 'common/min.svg');
    }
  }

  /////////////FULLSCREEN OFF
  function fullScreenOff() {
    if (isMac) {
      $('#closeWinBtn, #closeWinBtn2').hide();
      $('#fullToggle').attr('src', 'common/max2.svg');
    } else {
      $('#fullToggle').attr('src', 'common/max.svg');
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
      '<img id="closeWinBtn2" src="common/close.svg" class="smallIcon2" style="position: absolute; top: 3px; right: 2px;"/>',
    );
    if (!isMac) {
      $('.menuBtnContainer').append(
        '<img id="minimizeBtn" src="common/minimize.svg" class="smallIcon2" style="padding-left: 10px;"/><img id="fullToggle" src="common/min.svg" class="smallIcon2" /><img id="closeWinBtn" src="common/close.svg" class="smallIcon2" />',
      );
    } else {
      $('.menuBtnContainer').append(
        '<img id="fullToggle" src="common/min2.svg" class="smallIcon2" style="padding-left: 10px;"/><img id="closeWinBtn" src="common/close.svg" class="smallIcon2" />',
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
        $('#fullToggle').attr('src', 'common/max.svg');
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
      $('#fullToggle').attr('src', 'common/min.svg');
      if (isMac) {
        $('#fullToggle').attr('src', 'common/min2.svg');
      }
    } else {
      if (isMac) {
        $('#fullToggle').attr('src', 'common/max2.svg');
        $('#closeWinBtn, #closeWinBtn2').hide();
      } else {
        $('#fullToggle').attr('src', 'common/max.svg');
      }
    }

    ///INITIATE
  });
}
