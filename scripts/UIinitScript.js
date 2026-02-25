if ('pwa' == osType)
  var theWeb,
    deferredPrompt,
    compatible = !1,
    theVersion = '5.0.6';
var longPressTimer,
  f2load = '',
  plusContinue = !1,
  isLongPress = !1,
  homeDelay = 2e3,
  loghref = window.location.href;
function loadScript(e, o) {
  var t = document.createElement('script');
  ((t.src = e), (t.onload = o), document.head.appendChild(t));
}
var isFocused = !1;
function handleFocus() {
  isFocused = !0;
}
function handleBlur() {
  isFocused = !1;
}
localStorage.getItem('layoutSTORE') && localStorage.removeItem('layoutSTORE');
var blurOut,
  resetCode,
  userEmail,
  userEmail2,
  storeInfo,
  tuvm58dj,
  tuvm58dj2,
  fieldToUpdate,
  infoToUpdate,
  currentErrors,
  userInfo,
  verbKind,
  soundRepeated,
  KSblock,
  KSvocab,
  KSconvo,
  KSverb,
  quizScores,
  registerLoaded,
  passwordLoaded,
  viewportHeight,
  viewportWidth,
  audioSprite,
  currentSprite,
  onTimeUpdate,
  playSprite,
  currentSection = 'Building Blocks',
  currentSecShort = 'block',
  currentProgram = 'Complete',
  btnColor = [
    '#22A10F',
    '#2E5603',
    '#D01A1A',
    '#851010',
    '#D79A00',
    '#D74700',
    '#CC00E2',
    '#4A0041',
    '#0C56A8',
    '#062B54',
  ],
  lessonTitle = 'Ouino ' + lessonLanguage + ' Complete',
  generatedInfo = !1,
  userName = '',
  sLengths = [],
  numOfQuiz = [],
  KSpronun = [0, 0, 0, 0, 0, 0],
  tabletMusic = !1,
  fihdsh5 = 3600,
  lessonInit = 'true',
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
  OGXpV = '.com.br',
  loginAppend =
    '<header id="loginCover" class="wrapper"> <div id="loginCenter"> <img class="letterLogo" src="common/letterLogo.svg" style="margin-left: 10px;"> <form autocomplete="off" id="passwordForm" class="allForms"> <h3 id="passwordTitle2" class="loginTitle">Account Password Reset</h3> <input type="email" id="emailFieldReset" required class="loginField" placeholder="Enter your registered email address"/> <div class="backButton hidePasswordBtn">GO BACK</div><input type="submit" class="loginOptions" id="resetBtn" value="SEND RESET EMAIL"> <h5 id="passwordSkipBtn" class="smallUnderline" style="position: absolute; bottom: 0px; right: 0px; padding: 20px;">Already have a reset code? Skip this step.</h5> </form> <form autocomplete="off" id="loginForm" class="allForms"> <h3 class="loginTitle"><span id="loginTitle">Ouino Account Login</span><a name="" id="titleTip" class="tooltip"><img src="common/question2.svg" class="questionMark"/></a></h3> <input type="email" id="emailField" required class="loginField" placeholder="Email Address"/> <input type="password" id="jguyr4" required class="loginField" placeholder="Password"/> <h5 id="loginForgot" class="smallerUnderline" >Forgot password?</h5> <h5 id="loginRemember" class="loginRemember"><img src="common/checkOff.svg" id="rememberCheck" class="rememberCheck"/>Keep me logged in</h5> <input type="submit" class="loginOptions" id="logBtn" value="LOG IN"> </form> </div></header><div id="loginOffline" class="optionsIn gradientColor alignVerticalWin"> <table class="offlineTable"> <tr> <th width="15%"><img class="warningLogo" src="common/warning.svg"></th> <td colspan="2"><h3 class="offlineTitle">CURRENTLY OFFLINE</h3> <p class="offlineWord">You are currently offline. An internet connection is required to sync progress between devices. Your progress will be saved locally for now. Simply restart the program when an internet connection is available in order to sync your progress with the server.</p></td></tr></table> <table class="offlineTable2"> <tr> <td width="60%"><h5 id="offlineRemember" class="loginRemember"><img src="common/checkOff.svg" id="offlineCheck" class="rememberCheck"/>Do not show again.</h5></td><td><input type="submit" class="loginOptions gradientColor2" value="Continue" id="offlineButton"></td></tr></table></div><div id="emailForm"> <form autocomplete="off" class="form" method="post"> <h4>Did you have any questions or comments? We would love to hear from you! Send us a message!</h4> <div class="closeForm">X</div><input class="invForm" id="eForm1" name="info1" type="text" placeholder="name"/> <input class="invForm" id="eForm2" name="info2" type="text" placeholder="email"/> <input class="invForm" id="eForm3" name="info3" type="text" placeholder="language"/> <input class="invForm" id="eForm4" name="info4" type="text" placeholder="userUse"/> <textarea class="emailField" name="info5" placeholder="Type your message..."></textarea> <br><input class="emailBtn" type="submit" value="SEND MESSAGE"/> </form> <div id="thanks">Thank you so much for your message! We will get back to you in no time.</div></div><div id="sprompt"> <div id="spromptIn">Do you wish to go back to the last loaded lesson? <div id="spromptYes">YES</div><div id="spromptNo">NO</div></div></div><div id="like"> <div id="likeIn"> <div class="closeForm">X</div><b>How do you like the program? Please let us know!</b> <div id="likeYes">I love it!</div><div id="likeMay">I like it.</div><div id="likeNo">Meh... :(</div></div></div><div id="review"><div id="reviewIn"><div class="closeForm">X</div><b></b><div id="revTrustpilot">Write Trustpilot Review</div></div></div>',
  emailHTML =
    '<div id="emailForm"> <form autocomplete="off" class="form" method="post"> <h4>Did you have any questions or comments? We would love to hear from you! Send us a message!</h4> <div class="closeForm">X</div><input class="invForm" id="eForm1" name="info1" type="text" placeholder="name"/> <input class="invForm" id="eForm2" name="info2" type="text" placeholder="email"/><input class="invForm" id="eForm3" name="info3" type="text" placeholder="language"/><input class="invForm" id="eForm4" name="info4" type="text" placeholder="userUse"/><textarea class="emailField" name="info5" type="text" placeholder="Type your message..."/> <br><input class="emailBtn" type="submit" value="SEND MESSAGE"/></form><div id="thanks">Thank you so much for your message! We will get back to you in no time.</div></div><div id="sprompt"><div id="spromptIn">Do you wish to go back to the last loaded lesson?<div id="spromptYes">YES</div><div id="spromptNo">NO</div></div></div><div id="like"><div id="likeIn"><div class="closeForm">X</div><b>How do you like the program? Please let us know!</b><div id="likeYes">I love it!</div><div id="likeMay">I like it.</div><div id="likeNo">Meh... :(</div></div></div><div id="review"><div id="reviewIn"><div class="closeForm">X</div><b></b><div id="revTrustpilot">Write Trustpilot Review</div></div></div>',
  mainHTML =
    '<div id="fullWarning" style="display:none; opacity: 0.9; border: 5px solid #FC0; border-radius: 10px; cursor: default; padding: 15px; background: black; z-index: 999999; position: fixed; width: 200px; height: 80px; margin: auto auto; left:0; right: 0; top: 30px; font-size: 18px; font-weight: bold; color: white; text-align: center;"><strong style="color: #FC0; font-size: 22px;">Fullscreen Mode</strong><br>Press the "ESC" key to leave fullscreen mode.</div><div id="topBar"></div><div id="iLoad"><p></p></div><iframe></iframe><div id="loadLogo"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div><div id="userWrap"><div id="userTitle" class="userBtns"></div><div id="userTitle2" class="userBtns"><strong>See All Users</strong> (Admin Only)</div><div id="userTitle4" class="userBtns"><strong>Teacher Interface</strong> (Web)</div><div id="userTitle3" class="userBtns"><strong>Progress Overview</strong></div><div id="userTitle5" class="userBtns"><strong>Account Information</strong></div></div><main id="userMenu2" class="lessonMenus selectOff"><div class="insideMenu inside2"><h1 class="mainTitle" style="padding-bottom: 20px;"><img class="mainLogoImg2" src="common/logoUser.svg">Progress Overview</h1><div id="pMeter1" class="pMeters"></div><div id="pMeter2" class="pMeters"></div><div id="pMeter3" class="pMeters"></div><div id="pMeter11" class="pMeters"></div><div id="pMeter6" class="pMeters"></div><div id="pMeter5" class="pMeters"></div><div id="pMeter10" class="pMeters"></div><div id="pMeter8" class="pMeters"></div><div id="pMeter9" class="pMeters" style="padding-top: 30px;"></div></div></main><main id="userMenu" class="lessonMenus selectOff"><div class="insideMenu inside2"><h1 class="mainTitle"><img class="mainLogoImg2" src="common/logoUser.svg">User Administration</h1><div class="adminWarn1">Trying to connect...</div><div id="usersCont"></div><div id="usersBack">GO BACK</div><div id="usersCont2" style="display:none;"></div></div></main><main id="tutorialMenu" class="lessonMenus selectOff"><div class="insideMenu" style="max-width: 1000px; cursor: default; padding-bottom: 50px;"><h1 class="mainTitle" style="padding-bottom: 10px;"><img class="mainLogoImg2" src="common/question.svg">Tutorials</h1><section class="tutWrap" style="max-width: 700px; margin: 0 auto; padding: 10px;"><img class="bannerSite" id="siteTips" src="extra/images/tips.png"><img class="bannerSite" id="siteGuide" src="extra/images/guide.png"></section><section class="tutWrap"><h2 class="mainTitle">Building Blocks</h2><img id="tutBlock" class="tutImg"></section><section class="tutWrap"><h2 class="mainTitle">Vocabulary</h2><img id="tutVocab" class="tutImg"></section><section class="tutWrap"><h2 class="mainTitle">Conversations</h2><img id="tutConvo" class="tutImg"></section><section class="tutWrap"><h2 class="mainTitle">Pronunciation</h2><img id="tutPronun" class="tutImg"></section><section class="tutWrap"><h2 class="mainTitle">Verbs</h2><img id="tutVerb" class="tutImg"></section><section class="tutWrap" style="margin-bottom: 90px;"><h2 class="mainTitle">Endings</h2><img id="tutEndings" class="tutImg"></section></div></main><main id="progMenu1" class="progMenublock progMenus progStored"><div class="progTitle">BUILDING BLOCKS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum"></b> / <b class="starTotal"></b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top:  10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu2" class="progMenuvocab progMenus progStored"><div class="progTitle">VOCABULARY PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu3" class="progMenuconvo progMenus progStored"><div class="progTitle">CONVERSATIONS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu6" class="progMenukey progMenus progStored"><div class="progTitle">KEY VERBS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu10" class="progMenuextra progMenus progStored"><div class="progTitle">EXPRESS VERBS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu5" class="progMenuindi progMenus progStored"><div class="progTitle">INDIVIDUAL VERBS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu8" class="progMenuendings progMenus progStored"><div class="progTitle">VERB ENDINGS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu9" class="progMenuAll progMenus progStored"><div class="progTitle">PROGRAM PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><div id="fontPreload1"></div><div id="fontPreload2"></div><div class="instructions"><img class="redArrowImage" src="common/redArrow.svg"><b id="arrowLabel"></b></div><div class="menuBar"><img src="common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><span class="menuTitleContainer alignVerticalItem"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="searchBtn" src="search/common/search2.png" class="smallIcon" /><img id="tutorialBtn" src="common/logoTut.svg" class="smallIcon" /><img id="userBtn" src="common/logoUser.svg" class="smallIcon" /><img id="optionBtn" src="common/gear.svg" class="smallIcon"/><img id="backBtn" src="common/back.svg" class="smallIcon"/></span></div><audio id="mainMusic" loop src=""></audio><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div id="musicOnOff"></div><audio id="mainSound"></audio>',
  imageArray = [];
function playMusic() {
  (document
    .getElementById('mainMusic')
    .removeEventListener('canplay', playMusic),
    (document.getElementById('mainMusic').volume =
      0.6 * document.getElementById('mainSound').volume),
    $('#mainMusic').trigger('play'));
}
if (-1 != osType.indexOf('droid')) {
  var meta = document.createElement('meta');
  ((meta.httpEquiv = 'Content-Security-Policy'),
    (meta.content =
      "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'"),
    document.head.appendChild(meta));
}
var brColor = document.createElement('meta');
(brColor.setAttribute('name', 'theme-color'),
  (brColor.content = '#202020'),
  document.getElementsByTagName('head')[0].appendChild(brColor));
var appSuspended = !1;
if ('iOS' == osType || -1 != osType.indexOf('droid')) {
  var phoneG = document.createElement('script');
  (phoneG.setAttribute('src', 'cordova.js'), document.head.appendChild(phoneG));
}
function onDeviceReady() {
  if ('pwa' != osType || 'mobile' != currentDevice) {
    if (
      (('iOS' != osType && -1 == osType.indexOf('droid')) ||
        (($('html').innerWidth() < 590 || $('html').innerHeight() < 590) &&
          screen.orientation.lock('portrait')),
      'iOS' == osType &&
        ($('html').innerWidth() < 500 || $('html').innerHeight() < 500) &&
        $('.menuTitleContainer').addClass('forceHide'),
      ('iOS' != osType && -1 == osType.indexOf('droid')) ||
        (window.MobileAccessibility &&
          (window.MobileAccessibility.usePreferredTextZoom(!1),
          StatusBar.hide()),
        (window.open = cordova.InAppBrowser.open),
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
      'iOS' == osType)
    ) {
      var e = '';
      if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        e = parseInt(o[1], 10);
      }
      (12 != e && 11 != e) ||
        $(document).on('blur', 'input, textarea', function () {
          setTimeout(function () {
            window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
          }, 10);
        });
    }
    initiate();
  } else mobilePopup();
}
function onResume() {
  if (
    !sessionStorage.getItem('userEmailSTORE') &&
    !$('#loginCover').is(':visible')
  )
    return (
      sessionStorage.clear(),
      localStorage.removeItem(lessonLanguage + 'timeClosed'),
      $('#loadLogo').show(),
      void setTimeout(function () {
        (sessionStorage.clear(), (window.location = 'index.html'));
      }, 100)
    );
  if (localStorage[lessonLanguage + 'timeClosed']) {
    var e = Date.now() - localStorage[lessonLanguage + 'timeClosed'];
    if ((localStorage.removeItem(lessonLanguage + 'timeClosed'), e > 36e5))
      return (
        sessionStorage.clear(),
        $('#loadLogo').show(),
        void setTimeout(function () {
          (sessionStorage.clear(), (window.location = 'index.html'));
        }, 100)
      );
  }
  ((appSuspended = !1), null != storeInfo && toggleMusic3());
}
function onPause() {
  ((localStorage[lessonLanguage + 'timeClosed'] = Date.now()),
    (appSuspended = !0),
    mainMusic && mainMusic.pause());
}
function onMenubutton(e) {
  (e.preventDefault(), navigator.app.exitApp());
}
function onBackbutton(e) {
  (e.preventDefault(),
    $('#loadLogo').is(':visible') ? homeMenu() : navigator.app.exitApp());
}
function verbMenu() {
  ($('.gradientColor').css({
    background:
      'url(common/black.svg), radial-gradient(' +
      btnColor[8] +
      ',' +
      btnColor[9] +
      ')',
  }),
    $('.gradientColor2').css({
      background: 'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
    }),
    $('.gradientColor3').css({
      background:
        'url(common/black.svg), radial-gradient(' +
        btnColor[8] +
        ',' +
        btnColor[9] +
        ')',
    }),
    $('iframe, #iLoad').hide(),
    $('iframe').attr('src', ''),
    $('#musicOnOff').show(),
    'mobile' != currentDevice && playSprite('transition'),
    $(
      '#redArrowImg, #mainLogoImg, .lessonMenus, #optionWrap, #userWrap, #loginOffline, .progMenus,.lessonBacks, #newVerb',
    ).hide(),
    $('#optionBtn').show(),
    $('.progMenus').css({ visibility: 'visible' }),
    setTimeout(function () {
      $('#redArrowImg, #mainLogoImg, .lessonMenus, .lessonBacks').hide();
    }, 500),
    $('.lessonBacks').css({ opacity: 0 }),
    $('.lessonMenus').css({ x: '200%' }),
    $('.menuCenterImg').css({ y: '100%' }),
    (sessionStorage.menuType = 'home'),
    $('#newVerb').fadeIn(),
    $('#loadLogo').css({ opacity: 0.02 }));
}
function mobileClick() {
  ($('.quizItems').addClass('mobileClick'),
    setTimeout(function () {
      $('.quizItems').removeClass('mobileClick');
    }, 200));
}
function loadButtonsMain() {
  ($('.lessonMenus').css({ x: '200%' }),
    'iOS' == osType && $('.sectionTitle').addClass('absolute'),
    $('.lessonMenus').scroll(function () {
      var e = $(this).attr('id').replace('lessonMenu', ''),
        o = $(this).children('.insideMenu').height(),
        t = $(this).children('.insideMenu').offset();
      ((t = t.top),
        '7' == e && (e = '5'),
        $('html').height() - (o + t) - 200 > 1
          ? $('#progMenu' + e).removeClass('progStored')
          : $('#progMenu' + e).hasClass('progStored') ||
            $('#progMenu' + e).addClass('progStored'));
    }),
    $('.Lstars').on('click', function (e) {
      var o,
        t,
        s = $(this).offset(),
        n = e.pageX - s.left,
        i =
          '.' +
          $(this)
            .attr('class')
            .replace(' LstarsHOVER', '')
            .replace('Lstars ', '');
      n < 20 &&
        (1 == (t = (t = $(this).css('background-image')).charAt(t.length - 6))
          ? ($(i).css({ 'background-image': 'url(common/star0.png)' }), (o = 0))
          : ($(i).css({ 'background-image': 'url(common/star1.png)' }),
            (o = 1)));
      n >= 21 &&
        n < 40 &&
        (2 == (t = (t = $(this).css('background-image')).charAt(t.length - 6))
          ? ($(i).css({ 'background-image': 'url(common/star0.png)' }), (o = 0))
          : ($(i).css({ 'background-image': 'url(common/star2.png)' }),
            (o = 2)));
      n >= 41 &&
        n < 60 &&
        (3 == (t = (t = $(this).css('background-image')).charAt(t.length - 6))
          ? ($(i).css({ 'background-image': 'url(common/star0.png)' }), (o = 0))
          : ($(i).css({ 'background-image': 'url(common/star3.png)' }),
            (o = 3)));
      n >= 61 &&
        (4 == (t = (t = $(this).css('background-image')).charAt(t.length - 6))
          ? ($(i).css({ 'background-image': 'url(common/star0.png)' }), (o = 0))
          : ($(i).css({ 'background-image': 'url(common/star4.png)' }),
            (o = 4)));
      var a = $(this)
          .attr('class')
          .split('Lstars ')
          .join('')
          .split(' LstarsHOVER')
          .join('')
          .split('Star'),
        r = a[1];
      ((currentSecShort = a[0]),
        (window['KS' + currentSecShort][r - 1] = o),
        (infoToUpdate = window['KS' + currentSecShort]
          .toString()
          .split(',')
          .join(':')),
        (localStorage[storeInfo + 'starSTORE' + currentSecShort] =
          infoToUpdate),
        (fieldToUpdate = currentSecShort + 'Stars'),
        updateDatabase(),
        updateStars());
    }),
    $('#userTitle').on('click', function () {
      (localStorage.removeItem('STAYLOGGEDIN'),
        localStorage.removeItem('userEmailSTORE'),
        localStorage.removeItem('tuvm58djSTORE'),
        sessionStorage.clear(),
        $('#loadLogo').show(),
        setTimeout(function () {
          (sessionStorage.clear(),
            -1 != loghref.indexOf('/home')
              ? (window.location = 'init.html')
              : location.reload());
        }, 100));
    }),
    $('#siteTips').on('click', function () {
      openLink('https://www.ouinolanguages.com/tips/');
    }),
    $('#siteGuide').on('click', function () {
      openLink('https://www.ouinolanguages.com/guide/');
    }),
    'pwa' == osType
      ? ($('#blockSection, #blockSectionB').on('click', function (e) {
          $(e.target).hasClass('webBtn2') || blockSection();
        }),
        $('#vocabSection, #vocabSectionB').on('click', function (e) {
          $(e.target).hasClass('webBtn2') || vocabSection();
        }),
        $('#convoSection, #convoSectionB').on('click', function (e) {
          $(e.target).hasClass('webBtn2') || convoSection();
        }),
        $('#pronunSection, #pronunSectionB').on('click', function (e) {
          $(e.target).hasClass('webBtn2') || pronunSection();
        }),
        $('#verbSectionB').on('click', function (e) {
          $(e.target).hasClass('webBtn2') ||
            ($('.ouinoContentB').hide(), $('#newVerb').fadeIn());
        }))
      : ($('#blockSection, #blockSectionB').on('click', blockSection),
        $('#vocabSection, #vocabSectionB').on('click', vocabSection),
        $('#convoSection, #convoSectionB').on('click', convoSection),
        $('#pronunSection, #pronunSectionB').on('click', pronunSection),
        $('#verbSectionB').on('click', function () {
          var e = $(window).scrollTop() || $('body').scrollTop();
          (localStorage.setItem('menuOuinoPos2', e),
            window.scrollTo(0, 0),
            $('.ouinoContentB').hide(),
            $('#newVerb').fadeIn());
        })),
    $('#verbSection5B').on('click', verbSection),
    $('.vLoad').on('click', function () {
      ($('.ouinoContentB').hide(), $(window).scrollTop(0), verbMenu());
    }),
    $('.indiLoad').on('click', function () {
      ($('iframe, #iLoad, .progMenus').hide(),
        $('iframe').attr('src', ''),
        $('.lessonMenus').css({ x: '200%' }),
        verbSection3());
    }),
    $('.verbB').on('click', function () {
      $('#newVerb').hide();
    }),
    $('#verbSection1, #verbSection1B').on('click', verbSection1),
    $('#lessonMenu5 .mainTitle, #lessonMenu5 .sectionLang').on(
      'click',
      function () {
        ($('iframe, #iLoad').hide(),
          $('iframe').attr('src', ''),
          $('.lessonMenus').css({ x: '200%' }),
          verbSection3());
      },
    ),
    $('#lessonMenu7 .mainTitle, #lessonMenu7 .sectionLang').on(
      'click',
      function () {
        ($('iframe, #iLoad').hide(),
          $('iframe').attr('src', ''),
          $('.lessonMenus').css({ x: '200%' }),
          verbSection1());
      },
    ),
    $('#verbSection2, #verbSection2B').on('click', verbSection2),
    $('#verbSection3, #verbSection3B').on('click', verbSection5),
    $('#spromptYes').on('click', function () {
      ($('#loadLogo').show(),
        setTimeout(function () {
          window.location.href = localStorage.getItem(storeInfo + 'saved');
        }, 100));
    }),
    $('#spromptNo').on('click', function () {
      ($('#sprompt').hide(),
        $('#loadLogo').show(),
        setTimeout(function () {
          homeMenu();
        }, 200),
        localStorage.removeItem(storeInfo + 'saved'),
        setTimeout(function () {
          savePosition();
        }, 3e3));
    }),
    $('#verbSection4, #verbSection4B').on('click', verbSection4),
    $('#guidedSection, #guidedSectionB').on('click', guidedSection),
    $('#userTitle4').on('click', function () {
      openLink('https://www.ouinolanguages.com/teach/?account=' + userEmail);
    }),
    $('#userTitle5').on('click', function () {
      openLink('https://www.ouinolanguages.com/login/?account=' + userEmail);
    }),
    $('#extraSection, #extraSectionB').on('click', function () {
      extraSection();
    }),
    $('#userSection, #userSectionB').on('click', function () {
      userSection();
    }),
    setTimeout(function () {
      var e;
      for (
        $('#searchBtn').on('click', function () {
          ($('#redArrowImg').is(':visible') &&
            ($(
              '#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn',
            ).removeClass('disabled'),
            $('#redArrowImg, #mainLogoImg').hide()),
            $('.ouinoContentB').hide(),
            $('body').append(
              '<iframe id="searchFrame" src="search/index.html"></iframe><div id="searchFrame2"><div>X</div></div>',
            ),
            $('#searchFrame2').on('click', function () {
              ($('.ouinoContentB').show(),
                $('#searchFrame2, #searchFrame').remove());
            }));
        }),
          'mobile' != currentDevice &&
            $('#searchBtn').hover(function () {
              ($('#arrowLabel').text('SEARCH WITH KEYWORD'),
                $('.instructions').toggleClass('showDiv'));
            }),
          $('.extraBlock').on('click', function () {
            window.location.href = 'block/0/index.html';
          }),
          e = 0;
        e < $('.Lsection').length;
        e++
      ) {
        var o = $('.Lsection').eq(e).children('.lessonItems');
        0 != $('.Lsection').eq(e).children('.Lsection').length &&
          (o = $('.Lsection')
            .eq(e)
            .children('.Lsection')
            .children('.lessonItems'));
        var t,
          s = o.length,
          n = 0,
          i = 0,
          a = 0;
        for (t = 0; t < s; t++) {
          var r = o.eq(t).attr('class');
          -1 != r.indexOf('verb') && -1 == r.indexOf('noQuiz')
            ? ((r = (r = r.split('verb'))[1].split(' quizOnly').join('')),
              0 == $('#lessonMenu8 .Lverb' + r).length && n++)
            : -1 != r.indexOf('vocab') && -1 == r.indexOf('noQuiz')
              ? a++
              : -1 != r.indexOf('block') && -1 == r.indexOf('noQuiz') && i++;
        }
        0 ==
          $('.Lsection').eq(e).children('.sectionTitle').children('.gq')
            .length &&
          (i > 1 || a > 1 || n > 1) &&
          $('.Lsection')
            .eq(e)
            .children('.sectionTitle')
            .append('<div class="gq"></div>');
      }
      for (e = 0; e < $('.gq').length; e++) {
        1 ==
          $('.gq')
            .eq(e)
            .parent('.Lsection')
            .children('.Lsection')
            .children('.gq').length &&
          $('.gq')
            .eq(e - 1)
            .hide();
      }
      if ('pwa' == osType) {
        ($('.lessonItems').append('<div class="webBtn"></div'),
          $('.sectionBtnsB').append('<div class="webBtn2"></div'),
          $('.quizOnly .webBtn').remove());
        var l = !1;
        (-1 != navigator.userAgent.indexOf('Opera') ||
        -1 != navigator.userAgent.indexOf('OPR')
          ? (l = !1)
          : -1 != navigator.userAgent.indexOf('MSIE')
            ? (alert(
                'NOT COMPATIBLE WITH INTERNET EXPLORER, PLEASE UPDATE YOUR BROWSER',
              ),
              (l = !1))
            : -1 != navigator.userAgent.indexOf('Edg')
              ? (l = !0)
              : -1 != navigator.userAgent.indexOf('Safari') &&
                  -1 == navigator.userAgent.indexOf('Chrome')
                ? (l = !1)
                : (-1 != navigator.userAgent.indexOf('Firefox') ||
                    -1 != navigator.userAgent.indexOf('Chrome')) &&
                  (l = !0),
          l || $('.webBtn, .webBtn2').addClass('disabled2'),
          setTimeout(updateCache, 100),
          $('.webBtn, .webBtn2').on('click', function () {
            ($('.webBtn, .webBtn2').addClass('downloadDisabled'),
              $(this).removeClass('downloadError'),
              $(this).hasClass('downloading') ||
                ($(this).hasClass('downloaded')
                  ? ($(this).hasClass('webBtn') &&
                      $(this).removeClass('downloaded'),
                    (theWeb = $(this)),
                    (removeFile = !0),
                    urlFinder())
                  : ((theWeb = $(this)), (removeFile = !1), urlFinder())));
          }),
          'mobile' != currentDevice &&
            ($('.webBtn').on('mouseenter', function () {
              $('#arrowLabel').text('DOWNLOAD LESSON FOR OFFLINE USE');
            }),
            $('.webBtn2').on('mouseenter', function () {
              $('#arrowLabel').text('DOWNLOAD MODULE FOR OFFLINE USE');
            }),
            $('.webBtn, .webBtn2').hover(function () {
              ($('.instructions').toggleClass('showDiv'),
                $(this).toggleClass('fullOpacity'));
            })));
      }
      ('mobile' != currentDevice &&
        ($('.gq').on('mouseenter', function () {}),
        $('.gq').hover(function () {
          ($('#arrowLabel').text('RANDOM QUESTIONS FROM THE CATEGORY'),
            $('.instructions').toggleClass('showDiv'));
        })),
        $('.gq').on('click', function () {
          var e = $(this),
            o = $(this).parent().parent().children('.lessonItems'),
            t = [],
            s = [],
            n = [],
            i = $(this).attr('class').split('gq').join('').split(' ').join('');
          if (-1 != i.indexOf('-')) {
            var a = (i = i.split('-')).shift();
            if (
              ('block' == a ? (s = i) : 'verb' == a && (t = i), !plusContinue)
            ) {
              var r =
                  '#' + $(this).parent().parent().parent().parent().attr('id'),
                l = [],
                c = $(r + ' .L' + a + i[0])
                  .parent()
                  .children('.sectionTitle')
                  .text();
              c = -1 != c.indexOf(': ') ? (c = c.split(': '))[0] + ': ' : '';
              for (let e = 0; e <= i.length; e++) {
                var u = $(r + ' .L' + a + i[e])
                  .parent()
                  .children('.sectionTitle')
                  .text()
                  .split(c)
                  .join('');
                -1 == l.indexOf(u) &&
                  u.length > 2 &&
                  l.push(
                    '<strong>' + u.split(' ').join('&nbsp;') + '</strong>',
                  );
              }
              let o;
              if (
                ((l[0] = '<strong>' + c + '</strong>' + l[0]), 0 === l.length)
              )
                o = '';
              else if (1 === l.length) o = l[0];
              else {
                let e = l.pop();
                o = l.join(', ') + ' and ' + e;
              }
              return (
                0 == $('#customConfirm').length &&
                  ($('body').append(
                    '<div id="customConfirm" class="custom-confirm"><div class="custom-confirm-content"><p></p><div id="confirmYes">Yes</div><div id="confirmNo">No</div></div></div>',
                  ),
                  $('#confirmYes').click(function () {
                    ($('#customConfirm').hide(),
                      (plusContinue = !0),
                      e.trigger('click'));
                  }),
                  $('#confirmNo').click(function () {
                    ($('#customConfirm').hide(), (plusContinue = !1));
                  })),
                o.length < 5
                  ? ((plusContinue = !0), void e.trigger('click'))
                  : ($('#customConfirm p').html(
                      'This will load exercises for ' +
                        o +
                        '. Do you wish to continue?',
                    ),
                    void $('#customConfirm').show())
              );
            }
          } else {
            0 != $(this).parent().children('.Lsection').length &&
              (o = $(this)
                .parent()
                .children('.Lsection')
                .children('.lessonItems'));
            var d,
              m = o.length;
            for (d = 0; d < m; d++) {
              var p = o.eq(d).attr('class');
              -1 != p.indexOf('verb') && -1 == p.indexOf('noQuiz')
                ? ((p = (p = p.split('verb'))[1].split(' quizOnly').join('')),
                  0 == $('#lessonMenu8 .Lverb' + p).length && t.push(p))
                : -1 != p.indexOf('vocab') && -1 == p.indexOf('noQuiz')
                  ? ((p = (p = p.split('vocab'))[1]
                      .split(' quizOnly')
                      .join('')),
                    n.push(p))
                  : -1 != p.indexOf('block') &&
                    -1 == p.indexOf('noQuiz') &&
                    ((p = (p = p.split('block'))[1]
                      .split(' quizOnly')
                      .join('')),
                    s.push(p));
            }
          }
          t.length > n.length && t.length > s.length
            ? (window.location.href =
                'verb/0/index.html?lessons=' + t.join('-'))
            : n.length > t.length && n.length > s.length
              ? (window.location.href =
                  'vocab/0/index.html?lessons=' + n.join('-'))
              : s.length > t.length && s.length > n.length
                ? (window.location.href =
                    'block/0/index.html?lessons=' + s.join('-'))
                : n.length > 1
                  ? (window.location.href =
                      'vocab/0/index.html?lessons=' + n.join('-'))
                  : s.length > 1
                    ? (window.location.href =
                        'block/0/index.html?lessons=' + s.join('-'))
                    : t.length > 1 &&
                      (window.location.href =
                        'verb/0/index.html?lessons=' + t.join('-'));
        }));
    }, 1e3),
    'desktop' == currentDevice
      ? ($('#keyboardBtn').addClass('forceHide'),
        $('#volDiv').slider({
          orientation: 'horizontal',
          value: mainSound.volume,
          min: 0,
          max: 1,
          range: 'min',
          animate: !0,
          step: 0.1,
          slide: function (e, o) {
            ((mainSound.volume = o.value),
              (mainMusic.volume = 0.5 * o.value),
              (sfxSprite.volume = o.value),
              (localStorage.programVolume = o.value));
          },
        }),
        null != localStorage.programVolume &&
          ((mainSound.volume = localStorage.programVolume),
          (mainMusic.volume = 0.6 * localStorage.programVolume),
          (sfxSprite.volume = localStorage.programVolume),
          $('#volDiv').slider('value', localStorage.programVolume)))
      : $('#volDiv').addClass('forceHide'),
    $('#usersBack').on('click', function () {
      ($('#usersCont2, #usersBack').hide(),
        $('#usersCont').show(),
        $('.adminWarn1').hide(),
        $('#userMenu .mainTitle').html(
          '<img class="mainLogoImg2" src="common/logoUser.svg">User Administration',
        ));
    }),
    $('#userTitle3').on('click', function () {
      (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        setTimeout(function () {
          window.location.href = 'goals/index.html';
        }, 100));
    }),
    $('#userTitle2').on('click', function () {
      (0 == $('.allUsers').length && getUsers(),
        $('#usersCont2').is(':visible')
          ? ($('#usersCont2, #usersBack').hide(),
            $('#usersCont').show(),
            $('.adminWarn1').hide(),
            $('#userMenu .mainTitle').html(
              '<img class="mainLogoImg2" src="common/logoUser.svg">User Administration',
            ))
          : $('#userMenu').is(':visible')
            ? ($('#musicOnOff').show(),
              $('#userMenu').css({ x: '200%' }),
              $('#userMenu, #userWrap').hide())
            : ($('#musicOnOff').hide(),
              $('#tutorialMenu, #userMenu2').css({ x: '200%' }),
              $('#userWrap, #tutorialMenu, #userMenu2').hide(),
              $('#userMenu').show(),
              $('#userMenu').css({ x: '100%' })));
    }),
    $('#tutorialBtn').on('click', function () {
      ($('#redArrowImg').is(':visible') &&
        ($(
          '#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn',
        ).removeClass('disabled'),
        $('#redArrowImg, #mainLogoImg').hide()),
        toggleTutorial());
    }),
    $('#tutorialMenu').on('click', function (e) {
      e.target == this &&
        ($('.ouinoContentB').is(':visible') || $('.ouinoContentB').show(),
        toggleTutorial());
    }),
    $('#userMenu2').on('click', function (e) {
      e.target == this && toggleProgMenu();
    }),
    $('#userMenu').on('click', function (e) {
      e.target == this &&
        ($('#userMenu').css({ x: '200%' }),
        $('#userMenu').hide(),
        $('#musicOnOff').show());
    }),
    $('.lessonItems').on('click', loadLesson),
    $('.extraVocab').on('click', function () {
      (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        setTimeout(function () {
          window.location.href = 'vocab/0/index.html';
        }, 100));
    }),
    $('.extraVerb').on('click', function () {
      (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        setTimeout(function () {
          window.location.href = 'verb/0/index.html';
        }, 100));
    }),
    $('.imgItemBack, .imgItemImages').on('click', function () {
      $('.imgItemBack, .imgItemImages').hide();
    }),
    $('.imageItem1').on('click', function () {
      $('.imgItemBack, #imgItemImage1').show();
    }),
    $('.imageItem2').on('click', function () {
      $('.imgItemBack, #imgItemImage2').show();
    }),
    $('.imageItem3').on('click', function () {
      $('.imgItemBack, #imgItemImage3').show();
    }),
    $('.imageItem4').on('click', function () {
      $('.imgItemBack, #imgItemImage4').show();
    }),
    $('.imageItem5').on('click', function () {
      $('.imgItemBack, #imgItemImage5').show();
    }),
    'iOS' == osType &&
      ($('#loginCenter').append(
        '<div id="purBtn"><div>Not a member?</div>SEE PLANS</div>',
      ),
      $('#purBtn').on('click', function () {
        (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
          setTimeout(function () {
            window.location.href = 'purchase/index.html';
          }, 100));
      })),
    'mobile' == currentDevice
      ? ($('#volDiv').hide(),
        $('#background').on('touchmove', function (e) {
          e.preventDefault();
        }),
        $('.selectOptions').addClass('fullOpacity'),
        $('.wrapper, .wrapper2, .wrapper3').on('click', function (e) {
          e.target == this && $('input').blur();
        }),
        $('#optionWrap').on('click', function (e) {
          e.target == this && toggleOptions();
        }),
        $('.sectionOptions').on('click', toggleOptions),
        $('#optionBtn').on('click', toggleOptions2),
        $('.sectionBtns, .sectionBtns2, .verbSectionBtns').on(
          'click',
          function () {
            (localStorage.removeItem(storeInfo + 'saved'),
              setTimeout(function () {
                savePosition();
              }, 3e3));
          },
        ),
        $('.extraPrac').on('click', function () {
          (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
            setTimeout(function () {
              window.location.href = 'extra/index.html';
            }, 100));
        }),
        $('#menuOptions').on('click', function () {
          (disableTouch(), toggleOptions());
        }),
        $('#userBtn').on('click', toggleUser),
        $('#menuHome').on('click', homeMenu),
        $('#menuMain2').on('touchstart mousedown', function (e) {
          (e.stopPropagation(), homeMenu());
        }),
        $('#background, .lessonMenus').on('click', function () {
          $('#userWrap').is(':visible') && $('#userWrap').hide();
        }),
        'mobile' == currentDevice
          ? $('.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo')
              .on('touchstart', function () {
                $(this).addClass('fullOpacity');
              })
              .on('touchend touchcancel', function () {
                $(this).removeClass('fullOpacity');
              })
          : $('.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo')
              .on('mouseover', function () {
                $(this).addClass('fullOpacity');
              })
              .on('mouseout mouseleave', function () {
                $(this).removeClass('fullOpacity');
              }))
      : ($('.progMenus').on('click', function () {
          $(this).toggleClass('progStored');
        }),
        $('.lessonItems')
          .on('mouseover mouseenter', function (e) {
            $(e.target).hasClass('Lstars') ||
              $(this).addClass('lessonItemsHOVER');
          })
          .on('mouseout mouseleave', function () {
            $(this).removeClass('lessonItemsHOVER');
          }),
        $('.imageItems, .extras')
          .on('mouseover mouseenter', function () {
            $(this).addClass('lessonItemsHOVER');
          })
          .on('mouseout mouseleave', function () {
            $(this).removeClass('lessonItemsHOVER');
          }),
        $('.Lstars').hover(function () {
          $(this).toggleClass('LstarsHOVER');
        }),
        $('#optionWrap').on('click', function (e) {
          e.target == this && toggleOptions();
        }),
        $('.sectionOptions').on('click', toggleOptions),
        $('.sectionOptions').hover(function () {
          ($('#arrowLabel').text('SETTINGS'),
            $('.instructions').toggleClass('showDiv'),
            $(this).toggleClass('fullOpacity'));
        }),
        $('#optionBtn').on('click', toggleOptions2),
        $('#optionBtn').hover(function () {
          ($('#arrowLabel').text('SETTINGS'),
            $('.instructions').toggleClass('showDiv'));
        }),
        $('.sectionLang').hover(function () {
          ($('#arrowLabel').text('CHANGE ORDER'),
            $('.instructions').toggleClass('showDiv'),
            $(this).toggleClass('fullOpacity'));
        }),
        $('.sectionLang').on('mouseenter', function () {}),
        $('.sectionBtns, .sectionBtns2, .verbSectionBtns').on(
          'click',
          function () {
            (localStorage.removeItem(storeInfo + 'saved'),
              setTimeout(function () {
                savePosition();
              }, 3e3));
          },
        ),
        $('.extraPrac').hover(function () {
          $(this).toggleClass('fullOpacity');
        }),
        $('.extraPrac').on('click', function () {
          window.location.href = 'extra/index.html';
        }),
        $('.extraPrac').on('mouseenter', function () {}),
        $('#menuOptions').on('click', toggleOptions),
        $('#menuHome, #menuMain2').on('click', function () {
          homeMenu();
        }),
        $('#menuMain2').hover(function () {
          ($('#arrowLabel').text('HOME MENU'),
            $('.instructions').toggleClass('showDiv'));
        }),
        $('.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo').hover(
          function () {
            $(this).toggleClass('fullOpacity');
          },
        ),
        $('.selectOptions').hover(function () {
          $(this).toggleClass('fullOpacity');
        }),
        $('.selectOptions, .starSelect, .knowledgeBox, .sectionOptions').on(
          'mouseenter',
          function () {},
        ),
        $('#userBtn').on('click', toggleUser),
        $('#background, .lessonMenus').on('click', function () {
          $('#userWrap').is(':visible') && $('#userWrap').hide();
        }),
        $('.userBtns').hover(function () {
          $(this).toggleClass('userBtnsHOVER');
        }),
        $('#userBtn').hover(function () {
          ($('#arrowLabel').text('USER MENU'),
            $('.instructions').toggleClass('showDiv'));
        }),
        $('#tutorialBtn').hover(function () {
          ($('#arrowLabel').text('TUTORIALS (HOW TO USE THE PROGRAM)'),
            $('.instructions').toggleClass('showDiv'));
        }),
        $('.sectionBtns, .sectionBtns2, .verbSectionBtns').hover(function () {
          $(this).toggleClass('theBtnHover');
        }),
        $(
          '.smallIcon, #menuMain2, .lessonItems, .sectionBtns ,.sectionBtns2, .verbSectionBtns, .userBtns, .imageItems, .extras, .sectionBtnsB, .sectionBtnsB2',
        ).on('mouseenter', function () {})));
}
function loadLesson(e) {
  if ('pwa' == osType) {
    if ($(e.target).hasClass('webBtn')) return;
    if ($(e.target).children().hasClass('downloadDisabled'))
      return void warningPopup();
    if (
      $(e.target).children().hasClass('downloadOffline') &&
      !$(e.target).children().hasClass('downloaded')
    )
      return void offlinePopup();
  }
  if (!$(e.target).hasClass('Lstars')) {
    if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var o = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      if (11 == o.length)
        for (var t = 0; t < 11; t++)
          if ($('#lessonMenu' + (t + 1)).is(':visible')) {
            var s = document.getElementById('lessonMenu' + (t + 1)),
              n = s.scrollTop;
            sessionStorage.setItem(storeInfo + 'scrollTemp', n);
            var i = n / (s.scrollHeight - s.clientHeight);
            ((i = parseFloat(i.toFixed(3))), (o[t] = i));
          }
      localStorage.setItem(storeInfo + 'scrollPercent', o.join('|'));
    } else
      localStorage.setItem(
        storeInfo + 'scrollPercent',
        '0|0|0|0|0|0|0|0|0|0|0',
      );
    var a,
      r = $(this)
        .attr('class')
        .replace('tItems ', '')
        .replace('lessonItems L', '')
        .replace('lessonItems L', '')
        .replace(' noQuiz', '')
        .replace(' quizOnly', '')
        .replace(' lessonItemsHOVER', '');
    (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
      setTimeout(function () {
        'c' == r.charAt(3)
          ? ((a = r.replace('block', '')),
            (window.location.href = 'block/' + a + '/index.html'))
          : 'v' == r.charAt(3)
            ? ((a = r.replace('convo', '')),
              (window.location.href = 'convo/' + a + '/index.html'))
            : 'a' == r.charAt(3)
              ? ((a = r.replace('vocab', '')),
                (window.location.href = 'vocab/' + a + '/index.html'))
              : 'b' == r.charAt(3)
                ? ((a = r.replace('verb', '')),
                  (window.location.href = 'verb/' + a + '/index.html'))
                : r.charAt(3);
      }, 100));
  }
}
function shuffle(e) {
  for (
    var o, t, s = e.length;
    s;
    o = Math.floor(Math.random() * s), t = e[--s], e[s] = e[o], e[o] = t
  );
  return e;
}
function changeColor() {
  ($('.sectionTitle').show(),
    'block' == currentSecShort
      ? ($('.gradientColor').css({
          background:
            'url(common/black.svg), radial-gradient(' +
            btnColor[0] +
            ',' +
            btnColor[1] +
            ')',
        }),
        $('.gradientColor2').css({
          background:
            'radial-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
        }),
        $('.gradientColor3').css({
          background:
            'url(../../common/black.svg), radial-gradient(' +
            btnColor[0] +
            ',' +
            btnColor[1] +
            ')',
        }))
      : 'vocab' == currentSecShort
        ? ($('.gradientColor').css({
            background:
              'url(common/black.svg), radial-gradient(' +
              btnColor[2] +
              ',' +
              btnColor[3] +
              ')',
          }),
          $('.gradientColor2').css({
            background:
              'radial-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
          }),
          $('.gradientColor3').css({
            background:
              'url(../../common/black.svg), radial-gradient(' +
              btnColor[2] +
              ',' +
              btnColor[3] +
              ')',
          }))
        : 'convo' == currentSecShort
          ? ($('.gradientColor').css({
              background:
                'url(common/black.svg), radial-gradient(' +
                btnColor[4] +
                ',' +
                btnColor[5] +
                ')',
            }),
            $('.gradientColor2').css({
              background:
                'radial-gradient(' + btnColor[4] + ',' + btnColor[5] + ')',
            }),
            $('.gradientColor3').css({
              background:
                'url(../../common/black.svg), radial-gradient(' +
                btnColor[4] +
                ',' +
                btnColor[5] +
                ')',
            }))
          : 'pronun' == currentSecShort
            ? ($('.gradientColor').css({
                background:
                  'url(common/black.svg), radial-gradient(' +
                  btnColor[6] +
                  ',' +
                  btnColor[7] +
                  ')',
              }),
              $('.gradientColor2').css({
                background:
                  'radial-gradient(' + btnColor[6] + ',' + btnColor[7] + ')',
              }),
              $('.gradientColor3').css({
                background:
                  'url(../../common/black.svg), radial-gradient(' +
                  btnColor[6] +
                  ',' +
                  btnColor[7] +
                  ')',
              }))
            : 'verb' == currentSecShort &&
              ($('.gradientColor').css({
                background:
                  'url(common/black.svg), radial-gradient(' +
                  btnColor[8] +
                  ',' +
                  btnColor[9] +
                  ')',
              }),
              $('.gradientColor2').css({
                background:
                  'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
              }),
              $('.gradientColor3').css({
                background:
                  'url(common/black.svg), radial-gradient(' +
                  btnColor[8] +
                  ',' +
                  btnColor[9] +
                  ')',
              })));
}
function extraSection() {
  if (!menusLoaded)
    return (
      (f2load = 'extraSection'),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
      void setTimeout(function () {
        (localStorageInit(), updateMenus());
      }, 100)
    );
  (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
    setTimeout(function () {
      window.location.href = 'extra/index.html';
    }, 100));
}
function userSection() {
  if (!menusLoaded)
    return (
      (f2load = 'userSection'),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
      void setTimeout(function () {
        (localStorageInit(), updateMenus());
      }, 100)
    );
  (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
    setTimeout(function () {
      window.location.href = 'goals/index.html';
    }, 100));
}
function blockSection() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'blockSection'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = $(window).scrollTop() || $('body').scrollTop();
    (localStorage.setItem('menuOuinoPos2', e), $('.ouinoContentB').hide());
    var o = 0;
    if (
      ($('#lessonBack1, #lessonMenu1').css({ opacity: 0 }),
      $('#lessonMenu1').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      o = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var t = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      o =
        document.getElementById('lessonMenu1').scrollHeight *
        parseFloat(t[0]) *
        0.94;
    }
    ($('#lessonMenu1').scrollTop(o),
      $('#lessonBack1, #lessonMenu1').animate({ opacity: 1 }, 500, function () {
        ($('#loadLogo').hide(), $('#progMenu1').fadeIn());
      }),
      $('#musicOnOff').hide(),
      $('#lessonMenu1, #lessonBack1').show(),
      $('#lessonMenu1').css({ x: '100%' }),
      (sessionStorage.menuType = 'blockSection'),
      (currentSection = 'Building Blocks'),
      (currentSecShort = 'block'),
      changeColor(),
      generatedInfo || generateInfo());
  }
}
function vocabSection() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'vocabSection'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = $(window).scrollTop() || $('body').scrollTop();
    (localStorage.setItem('menuOuinoPos2', e), $('.ouinoContentB').hide());
    var o = 0;
    if (
      ($('#lessonBack2, #lessonMenu2').css({ opacity: 0 }),
      $('#lessonMenu2').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      o = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var t = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      o =
        document.getElementById('lessonMenu2').scrollHeight *
        parseFloat(t[1]) *
        0.94;
    }
    ($('#lessonMenu2').scrollTop(o),
      $('#lessonBack2, #lessonMenu2').animate({ opacity: 1 }, 500, function () {
        ($('#loadLogo').hide(), $('#progMenu2').fadeIn());
      }),
      $('#musicOnOff').hide(),
      $('#lessonMenu2, #lessonBack2').show(),
      $('#lessonMenu2').css({ x: '100%' }),
      (sessionStorage.menuType = 'vocabSection'),
      (currentSection = 'Vocabulary'),
      (currentSecShort = 'vocab'),
      changeColor(),
      generatedInfo || generateInfo());
  }
}
function convoSection() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'convoSection'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = $(window).scrollTop() || $('body').scrollTop();
    (localStorage.setItem('menuOuinoPos2', e), $('.ouinoContentB').hide());
    var o = 0;
    if (
      ($('#lessonBack3, #lessonMenu3').css({ opacity: 0 }),
      $('#lessonMenu3').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      o = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var t = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      o =
        document.getElementById('lessonMenu3').scrollHeight *
        parseFloat(t[2]) *
        0.94;
    }
    ($('#lessonMenu3').scrollTop(o),
      $('#lessonBack3, #lessonMenu3').animate({ opacity: 1 }, 500, function () {
        ($('#loadLogo').hide(), $('#progMenu3').fadeIn());
      }),
      $('#musicOnOff').hide(),
      $('#lessonMenu3, #lessonBack3').show(),
      $('#lessonMenu3').css({ x: '100%' }),
      (sessionStorage.menuType = 'convoSection'),
      (currentSection = 'Conversations'),
      (currentSecShort = 'convo'),
      changeColor(),
      generatedInfo || generateInfo());
  }
}
function pronunSection() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'pronunSection'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    0 == $('#startCover').is(':visible') && $('#loadLogo').show();
    var e = $(window).scrollTop() || $('body').scrollTop();
    (localStorage.setItem('menuOuinoPos2', e),
      $('.ouinoContentB').hide(),
      setTimeout(function () {
        ((sessionStorage.menuType = 'home'),
          (currentSection = 'Pronunciation'),
          (currentSecShort = 'pronun'));
        var e = [1, 2, 3, 4];
        (shuffle(e),
          (e = e[0]),
          (sessionStorage.pronunTheme = e),
          (window.location.href = 'pronun/index.html'));
      }, 100));
  }
}
function verbSection1() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'verbSection1'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = 0;
    if (
      ($('#lessonBack5, #lessonMenu5').css({ opacity: 0 }),
      $('#lessonMenu5').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      e = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var o = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      e =
        document.getElementById('lessonMenu5').scrollHeight *
        parseFloat(o[4]) *
        0.94;
    }
    ($('#lessonMenu5').scrollTop(e),
      $('#lessonBack5, #lessonMenu5').animate({ opacity: 1 }, 500, function () {
        ($('#loadLogo').hide(), $('#progMenu5').fadeIn());
      }),
      $('#musicOnOff').hide(),
      $('#lessonMenu5, #lessonBack5').show(),
      $('#lessonMenu5').css({ x: '100%' }),
      (sessionStorage.menuType = 'verbSection1'),
      (currentSection = 'Verbs'),
      (currentSecShort = 'verb'),
      (verbKind = 'indi'),
      changeColor(),
      generatedInfo || generateInfo());
  }
}
function verbSection2() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'verbSection2'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = 0;
    if (
      ($('#lessonBack5, #lessonMenu6').css({ opacity: 0 }),
      $('#lessonMenu6').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      e = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var o = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      e =
        document.getElementById('lessonMenu6').scrollHeight *
        parseFloat(o[5]) *
        0.94;
    }
    ($('#lessonMenu6').scrollTop(e),
      $('#lessonBack5, #lessonMenu6').animate({ opacity: 1 }, 500, function () {
        ($('#loadLogo').hide(), $('#progMenu6').fadeIn());
      }),
      $('#musicOnOff').hide(),
      $('#lessonMenu6, #lessonBack5').show(),
      $('#lessonMenu6').css({ x: '100%' }),
      (sessionStorage.menuType = 'verbSection2'),
      (currentSection = 'Verbs'),
      (currentSecShort = 'verb'),
      (verbKind = 'key'),
      changeColor(),
      generatedInfo || generateInfo());
  }
}
function verbSection3() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'verbSection3'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = 0;
    if (
      ($('#lessonBack5, #lessonMenu7').css({ opacity: 0 }),
      $('#lessonMenu7').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      e = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var o = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      e =
        document.getElementById('lessonMenu7').scrollHeight *
        parseFloat(o[6]) *
        0.94;
    }
    ($('#lessonMenu7').scrollTop(e),
      $('#lessonBack5, #lessonMenu7').animate({ opacity: 1 }, 500, function () {
        ($('#loadLogo').hide(), $('#progMenu5').fadeIn());
      }),
      $('#musicOnOff').hide(),
      $('#lessonMenu7, #lessonBack5').show(),
      $('#lessonMenu7').css({ x: '100%' }),
      (sessionStorage.menuType = 'verbSection3'),
      (currentSection = 'Verbs'),
      (currentSecShort = 'verb'),
      (verbKind = 'indi'),
      changeColor(),
      generatedInfo || generateInfo());
  }
}
function verbSection4() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'verbSection4'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = 0;
    if (
      ($('#lessonBack5, #lessonMenu8').css({ opacity: 0 }),
      $('#lessonMenu8').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      e = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var o = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      e =
        document.getElementById('lessonMenu8').scrollHeight *
        parseFloat(o[7]) *
        0.94;
    }
    ($('#lessonMenu8').scrollTop(e),
      $('#lessonBack5, #lessonMenu8').animate({ opacity: 1 }, 500, function () {
        ($('#loadLogo').hide(), $('#progMenu8').fadeIn());
      }),
      $('#musicOnOff').hide(),
      $('#lessonMenu8, #lessonBack5').show(),
      $('#lessonMenu8').css({ x: '100%' }),
      (sessionStorage.menuType = 'verbSection4'),
      (currentSection = 'Verbs'),
      (currentSecShort = 'verb'),
      (verbKind = 'endings'),
      changeColor(),
      generatedInfo || generateInfo());
  }
}
function verbSection5() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'verbSection5'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = 0;
    if (
      ($('#lessonBack5, #lessonMenu10').css({ opacity: 0 }),
      $('#lessonMenu10').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      e = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var o = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      e =
        document.getElementById('lessonMenu10').scrollHeight *
        parseFloat(o[9]) *
        0.94;
    }
    ($('#lessonMenu10').scrollTop(e),
      $('#lessonBack5, #lessonMenu10').animate(
        { opacity: 1 },
        500,
        function () {
          ($('#loadLogo').hide(), $('#progMenu10').fadeIn());
        },
      ),
      $('#musicOnOff').hide(),
      $('#lessonMenu10, #lessonBack5').show(),
      $('#lessonMenu10').css({ x: '100%' }),
      (sessionStorage.menuType = 'verbSection5'),
      (currentSection = 'Verbs'),
      (currentSecShort = 'verb'),
      (verbKind = 'express'),
      changeColor(),
      generatedInfo || generateInfo());
  }
}
function verbSection() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'verbSection'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = 0;
    if (
      ($('#lessonBack5, #lessonMenu11').css({ opacity: 0 }),
      $('#lessonMenu11').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      e = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var o = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      e =
        document.getElementById('lessonMenu11').scrollHeight *
        parseFloat(o[10]) *
        0.94;
    }
    ($('#lessonMenu11').scrollTop(e),
      $('#lessonBack5, #lessonMenu11').animate(
        { opacity: 1 },
        500,
        function () {
          ($('#loadLogo').hide(), $('#progMenu11').fadeIn());
        },
      ),
      $('#musicOnOff').hide(),
      $('#lessonMenu11, #lessonBack5').show(),
      $('#lessonMenu11').css({ x: '100%' }),
      (sessionStorage.menuType = 'verbSection'),
      (currentSection = 'Verbs'),
      (currentSecShort = 'verb'),
      (verbKind = 'all'),
      changeColor(),
      generatedInfo || generateInfo());
  }
}
function guidedSection() {
  if (!($(this).children('.telaGot4:visible').length >= 1)) {
    if (!menusLoaded)
      return (
        (f2load = 'guidedSection'),
        0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
        void setTimeout(function () {
          (localStorageInit(), updateMenus());
        }, 100)
      );
    ($('.lessonMenus').hide(),
      0 == $('#startCover').is(':visible') && $('#loadLogo').show());
    var e = $(window).scrollTop() || $('body').scrollTop();
    (localStorage.setItem('menuOuinoPos2', e), $('.ouinoContentB').hide());
    var o = 0;
    if (
      ($('#lessonBack4, #lessonMenu9').css({ opacity: 0 }),
      $('#lessonMenu9').show(),
      sectionScroll(),
      sessionStorage.getItem(storeInfo + 'scrollTemp'))
    )
      o = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
    else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
      var t = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
      o =
        document.getElementById('lessonMenu9').scrollHeight *
        parseFloat(t[8]) *
        0.94;
    }
    ($('#lessonMenu9').scrollTop(o),
      $('#lessonBack4, #lessonMenu9').animate({ opacity: 1 }, 500, function () {
        ($('#loadLogo').hide(), $('#progMenu9').fadeIn());
      }),
      $('#musicOnOff').hide(),
      $('#lessonMenu9, #lessonBack4').show(),
      $('#lessonMenu9').css({ x: '100%' }),
      (sessionStorage.menuType = 'guidedSection'),
      (currentSecShort = 'all'),
      generatedInfo || generateInfo());
  }
}
((window.onload = function () {
  'iOS' == osType || -1 != osType.indexOf('droid')
    ? document.addEventListener('deviceready', onDeviceReady, !1)
    : onDeviceReady();
}),
  $(document).ready(function () {
    if ('iOS' != osType) {
      var e = document.querySelector('meta[name=viewport]');
      $('html').innerWidth() < 350 || $('html').innerHeight() < 350
        ? e.setAttribute(
            'content',
            'initial-scale=1.1,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.7,minimum-scale=0.7,viewport-fit=cover',
          )
        : $('html').innerWidth() < 470 || $('html').innerHeight() < 470
          ? $('html').innerWidth() > 760 || $('html').innerHeight() > 760
            ? (e.setAttribute(
                'content',
                'initial-scale=1.1,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.9,minimum-scale=0.9,viewport-fit=cover',
              ),
              -1 != osType.indexOf('droid') && $('body').addClass('android'))
            : e.setAttribute(
                'content',
                'initial-scale=1.1,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.8,minimum-scale=0.8,viewport-fit=cover',
              )
          : e.setAttribute(
              'content',
              'initial-scale=1.1,height=device-height,user-scalable=no, width=device-width,maximum-scale=1,minimum-scale=1,viewport-fit=cover',
            );
    }
    if (
      ('mobile' != currentDevice
        ? $('body').addClass('desktop')
        : $('html').innerWidth() > 600 && $('html').innerHeight() > 600
          ? ($('body').addClass('tablet'), $('body').addClass('mobile'))
          : $('body').addClass('mobile'),
      'mac' == osType &&
        document.addEventListener('keydown', function (e) {
          if ('Space' === e.code && 0 == isFocused)
            return (toggleFullscreen(), e.preventDefault(), !1);
        }),
      $('#background').css({
        'background-image': 'url(common/background.jpg)',
      }),
      loginAppend.length > fihdsh5)
    ) {
      if (
        ($('body').append(mainHTML),
        $('#sectionTitle2').text(lessonLanguage + ' Verbs and Conjugation'),
        $('#theLang').text(lessonLanguage),
        $('#foreignText').text(lessonLanguage),
        null == sessionStorage.LOGGEDIN && loadLogIn(),
        localStorage.getItem(lessonLanguage + 'legacyPath') &&
          localStorage.removeItem(lessonLanguage + 'legacyPath'),
        'pwa' == osType)
      ) {
        if (
          !localStorage.getItem(lessonLanguage + 'InitialDownload' + theVersion)
        ) {
          $('body').append(
            '<div id="dPrompt2"><div class="off1"><h2 class="off2">Downloading v' +
              theVersion +
              ' ... Please wait.</h2><p class="off3">The files required for this web application are currently downloading. This is only required the first time you open the application or after an update.</p><div class="off9 off8"> 0%</div><div class="webBtn3 downloading off8"></div></div></div>',
          );
          var o = 0;
          perLoad = setInterval(function () {
            ($('#dPrompt2 .off9').text(' ' + o + '%'),
              o < 100
                ? o++
                : setTimeout(function () {
                    ($('#dPrompt2').remove(),
                      localStorage.setItem(
                        lessonLanguage + 'InitialDownload' + theVersion,
                        'Done',
                      ),
                      clearInterval(perLoad));
                  }, 1e3));
          }, 390);
        }
        (-1 != navigator.userAgent.indexOf('Opera') ||
          -1 != navigator.userAgent.indexOf('OPR') ||
          -1 != navigator.userAgent.indexOf('Firefox') ||
          (-1 != navigator.userAgent.indexOf('MSIE')
            ? alert(
                'NOT COMPATIBLE WITH INTERNET EXPLORER, PLEASE UPDATE YOUR BROWSER',
              )
            : -1 != navigator.userAgent.indexOf('Edg')
              ? (compatible = !0)
              : (-1 != navigator.userAgent.indexOf('Safari') &&
                  -1 == navigator.userAgent.indexOf('Chrome')) ||
                (-1 != navigator.userAgent.indexOf('Chrome') &&
                  (compatible = !0))),
          window.matchMedia('(display-mode: standalone)').matches ||
            localStorage.getItem(lessonLanguage + 'installedApp') ||
            !compatible ||
            ($('.menuBtnContainer').prepend(
              '<img id="install_button2" src="common/install.svg" class="smallIcon">',
            ),
            $('#install_button2').hover(function () {
              ($('#arrowLabel').text('ADD WEB APP TO HOME SCREEN'),
                $('.instructions').toggleClass('showDiv'));
            }),
            localStorage.getItem(lessonLanguage + 'refusedInstall') ||
              ($('body').append(
                '<div id="install_bar"><p>ADD APP TO HOME SCREEN?</p><div id="install_button">ADD</div><div id="install_no">NO</div></div>',
              ),
              $('#install_no').on('click', function () {
                ($('#install_bar').fadeOut(),
                  localStorage.setItem(
                    lessonLanguage + 'refusedInstall',
                    'true',
                  ));
              })),
            window.addEventListener('beforeinstallprompt', function (e) {
              (e.preventDefault(),
                (deferredPrompt = e),
                setTimeout(function () {
                  $('#install_button2').fadeIn();
                }, 5e3),
                localStorage.getItem(lessonLanguage + 'refusedInstall') ||
                  setTimeout(function () {
                    $('#install_bar, #install_button2').fadeIn();
                  }, 5e3),
                $('#install_button, #install_button2').on('click', installApp));
            })));
      }
      ((audioSprite = document.getElementById('sfxSprite')).addEventListener(
        'timeupdate',
        onTimeUpdate,
        !1,
      ),
        $('.menuTitleContainer').text(lessonTitle),
        loadButtonsMain(),
        $('html').innerWidth() < 550
          ? $('body').addClass('notch')
          : $('body').removeClass('notch'),
        $(window).resize(function () {
          $('html').innerWidth() < 550
            ? $('body').addClass('notch')
            : $('body').removeClass('notch');
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
        $('.gradientColor').css({
          background:
            'url(common/black.svg), radial-gradient(' +
            btnColor[8] +
            ',' +
            btnColor[9] +
            ')',
        }),
        $('.gradientColor2').css({
          background:
            'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
        }),
        $('.gradientColor3').css({
          background:
            'url(common/black.svg), radial-gradient(' +
            btnColor[8] +
            ',' +
            btnColor[9] +
            ')',
        }),
        $('#sectionP1B').text(
          'Discover how to create your own ' +
            lessonLanguage +
            ' sentences by learning structure and grammar.',
        ),
        $('#sectionP2B').text(
          'Learn essential ' +
            lessonLanguage +
            ' words and phrases used extensively in everyday speech.',
        ),
        $('#sectionP3B').text(
          'Learn ' +
            lessonLanguage +
            ' expressions and practice your comprehension of native ' +
            lessonLanguage +
            ' dialogue.',
        ),
        $('#sectionP4B').text(
          'Improve your pronunciation by comparing yourself with native ' +
            lessonLanguage +
            ' speakers.',
        ),
        $('#unitTitle5').text('Individual Verbs'),
        $('#sectionP5B').text('Learn single verbs in multiple tenses/moods.'),
        $('#sectionP6B').text('An in-depth look at the most important verbs.'),
        $('#unitTitle7').text('Express Verbs'),
        $('#sectionP7B').text('Discover verbs through different tenses/moods.'),
        $('#backBtn').on('click', function () {
          -1 != sessionStorage.menuType.indexOf('verb') && 'ON' != layout
            ? verbMenu()
            : homeMenu();
        }),
        'mobile' != currentDevice &&
          $('#backBtn').hover(function () {
            ($('#arrowLabel').text('GO BACK'),
              $('.instructions').toggleClass('showDiv'));
          }),
        (window.onkeyup = function (e) {
          8 != (e.keyCode ? e.keyCode : e.which) ||
            $('#emailForm').is(':visible') ||
            $('#loginCover').is(':visible') ||
            homeMenu();
        }),
        $('#emailForm').off(),
        $('#emailForm .closeForm').off(),
        $('#emailForm .closeForm').on('click', function () {
          ($('#emailForm form').hide(),
            $('#thanks').text(
              "Okay, we'll talk later! Know that you can always contact us on our website. We love to hear from our users.",
            ),
            $('#thanks').show(),
            setTimeout(function () {
              ($('#emailForm').fadeOut(), homeMenu());
            }, 4500));
        }),
        $('#emailForm').on('click', function (e) {
          $('#emailForm form').is(':visible')
            ? e.target == this &&
              ($('#emailForm form').hide(),
              $('#thanks').text(
                "Okay, we'll talk later! Know that you can always contact us on our website. We love to hear from our users.",
              ),
              $('#thanks').show(),
              setTimeout(function () {
                ($('#emailForm').fadeOut(), homeMenu());
              }, 4500))
            : ($('#emailForm').hide(), homeMenu());
        }),
        $('#sectionP8, #sectionP8B').text(
          'Understand how ' + lessonLanguage + ' conjugation truly works. ',
        ),
        $('#tutorialMenu, #userWrap, #userMenu, #userMenu2').hide(),
        'mac' == osType &&
          $('input, textarea').on('focus', handleFocus).on('blur', handleBlur));
    } else $('body').html('Error');
  }));
var layout,
  teacher,
  menusLoaded = !1;
function savePosition() {
  var e = '0',
    o = '0',
    t = '0|0|0|0|0|0|0|0|0|0|0';
  (localStorage.getItem(storeInfo + 'leftOff') &&
    (e = localStorage.getItem(storeInfo + 'leftOff')),
    localStorage.getItem(storeInfo + 'saved') &&
      (o = localStorage.getItem(storeInfo + 'saved')),
    localStorage.getItem(storeInfo + 'scrollPercent') &&
      (t = localStorage.getItem(storeInfo + 'scrollPercent')),
    (infoToUpdate = e + ':' + t + ':' + o),
    (fieldToUpdate = 'leftoff'),
    updateDatabase());
}
function disableTouch() {
  ($('body').addClass('disableTouch'),
    setTimeout(function () {
      $('body').removeClass('disableTouch');
    }, 500));
}
function toggleMusic3() {
  var e;
  ('off' == localStorage[storeInfo + 'musicSTOREvocab']
    ? (localStorage[storeInfo + 'musicSTOREprogram'] = 'OFF')
    : (localStorage[storeInfo + 'musicSTOREprogram'] = 'ON'),
    'OFF' == localStorage[storeInfo + 'musicSTOREprogram']
      ? ($('#musicOnOff').html('MUSIC <b>OFF</b>'), (e = 'OFF'))
      : ($('#musicOnOff').html('MUSIC <b>ON</b>'), (e = 'ON')),
    $('#musicOnOff').show(),
    'ON' == e
      ? ($('#mainMusic').trigger('pause'),
        $('#mainMusic').attr('src', 'common/programMusic' + soundType),
        document.getElementById('mainMusic').load(),
        document
          .getElementById('mainMusic')
          .addEventListener('canplay', playMusic))
      : $('#mainMusic').trigger('pause'));
}
function toggleMusic2() {
  var e = $('#musicOnOff').text().replace('MUSIC ', '');
  ('ON' == e
    ? ($('#musicOnOff').html('MUSIC <b>OFF</b>'), (e = 'OFF'))
    : ($('#musicOnOff').html('MUSIC <b>ON</b>'), (e = 'ON')),
    (localStorage[storeInfo + 'musicSTOREprogram'] = e),
    'ON' == e
      ? ((localStorage[storeInfo + 'musicSTOREblock'] = 'on'),
        (localStorage[storeInfo + 'musicSTOREvocab'] = 'on'),
        (localStorage[storeInfo + 'musicSTOREconvo'] = 'on'),
        (localStorage[storeInfo + 'musicSTOREverb'] = 'on'),
        updateAllOptions2(),
        $('#mainMusic').trigger('pause'),
        $('#mainMusic').attr('src', 'common/programMusic' + soundType),
        document.getElementById('mainMusic').load(),
        document
          .getElementById('mainMusic')
          .addEventListener('canplay', playMusic))
      : ($('#mainMusic').trigger('pause'),
        (localStorage[storeInfo + 'musicSTOREblock'] = 'off'),
        (localStorage[storeInfo + 'musicSTOREvocab'] = 'off'),
        (localStorage[storeInfo + 'musicSTOREconvo'] = 'off'),
        (localStorage[storeInfo + 'musicSTOREverb'] = 'off'),
        updateAllOptions2()));
}
function toggleMusic() {
  if (-1 == $('#foreignText2').text().indexOf('GLOBAL'))
    ((localStorage[storeInfo + 'musicSTORE' + currentSecShort] =
      $('#selectSound').val()),
      updateOptions());
  else {
    ((localStorage[storeInfo + 'musicSTOREblock'] = $('#selectSound').val()),
      (localStorage[storeInfo + 'musicSTOREvocab'] = $('#selectSound').val()),
      (localStorage[storeInfo + 'musicSTOREconvo'] = $('#selectSound').val()),
      (localStorage[storeInfo + 'musicSTOREverb'] = $('#selectSound').val()));
    var e = $('#musicOnOff').text().replace('MUSIC ', '');
    ('on' == $('#selectSound').val()
      ? ($('#musicOnOff').html('MUSIC <b>ON</b>'),
        (e = 'ON'),
        $('#mainMusic').trigger('pause'),
        $('#mainMusic').attr('src', 'common/programMusic' + soundType),
        document.getElementById('mainMusic').load(),
        document
          .getElementById('mainMusic')
          .addEventListener('canplay', playMusic))
      : ($('#musicOnOff').html('MUSIC <b>OFF</b>'),
        (e = 'OFF'),
        $('#mainMusic').trigger('pause')),
      (localStorage[storeInfo + 'musicSTOREprogram'] = e),
      updateAllOptions());
  }
}
function initiate() {
  (null == sessionStorage.LOGGEDIN
    ? (null != localStorage.userEmailSTORE
        ? ($('#emailField').val(localStorage.userEmailSTORE),
          (userEmail = localStorage.userEmailSTORE),
          (storeInfo = langShort + userEmail),
          $('#rememberCheck').attr('src', 'common/checkOn.svg'))
        : $('#emailField').val(''),
      null != localStorage.tuvm58djSTORE
        ? ($('#jguyr4').val(localStorage.tuvm58djSTORE),
          (tuvm58dj = localStorage.tuvm58djSTORE))
        : ($('#jguyr4').val(''), $('#emailField').val('')),
      null != localStorage.STAYLOGGEDIN && null != tuvm58dj && null != userEmail
        ? databaseInit()
        : $('#loginCenter').show())
    : ((userEmail = sessionStorage.userEmailSTORE),
      (storeInfo = langShort + userEmail),
      localStorage.removeItem(storeInfo + 'saved'),
      setTimeout(function () {
        savePosition();
      }, 3e3),
      (tuvm58dj = sessionStorage.tuvm58djSTORE),
      $('#loginCover').hide()),
    $('.menuBar').css({ visibility: 'visible' }),
    'mobile' != currentDevice && $('.menuBar').css({ 'min-width': '400px' }),
    null == sessionStorage.menuType &&
      ($('#mainLogoImg, #redArrowImg').show(),
      $('#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn').addClass(
        'disabled',
      )),
    null != sessionStorage.menuType &&
      'mobile' == currentDevice &&
      toggleMusic3(),
    -1 == loghref.indexOf('/init') &&
      setTimeout(function () {
        $('#startCover').hide();
      }, 1e3),
    'home' == sessionStorage.menuType || sessionStorage.getItem('wasInit')
      ? (sessionStorage.removeItem('wasInit'), homeMenu())
      : null != sessionStorage.menuType &&
        (window[sessionStorage.menuType](),
        'mobile' != currentDevice &&
          0 == tabletMusic &&
          (toggleMusic3(), (tabletMusic = !0))));
}
function toggleOptions() {
  0 == $('#optionWrap').is(':visible')
    ? (localStorageInit(),
      changeColor(),
      $('#userWrap').hide(),
      $('#optionWrap').show(),
      $('#foreignText2').text(currentSection.toUpperCase() + ' SETTINGS'))
    : $('#optionWrap').hide();
}
function toggleOptions2() {
  0 == $('#optionWrap').is(':visible')
    ? (localStorageInit(),
      $('#userWrap').hide(),
      $('.gradientColor').css({
        background:
          'url(common/black.svg), radial-gradient(' +
          btnColor[8] +
          ',' +
          btnColor[9] +
          ')',
      }),
      $('.gradientColor2').css({
        background: 'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
      }),
      $('.gradientColor3').css({
        background:
          'url(common/black.svg), radial-gradient(' +
          btnColor[8] +
          ',' +
          btnColor[9] +
          ')',
      }),
      'mobile' != currentDevice
        ? (playSprite('transition'),
          $('#foreignText2').html(
            'GLOBAL SETTINGS  <em>(updates all modules)</em>',
          ),
          $('#optionWrap').slideDown())
        : ($('#optionWrap').show(),
          $('#foreignText2').html(
            'GLOBAL SETTINGS  <em>(updates all modules)</em>',
          ),
          playSprite('transition')))
    : 'mobile' != currentDevice
      ? $('#optionWrap').slideUp()
      : $('#optionWrap').hide();
}
function toggleRememberCheck() {
  'common/checkOff.svg' == $('#rememberCheck').attr('src')
    ? ($('#rememberCheck, #rememberCheck2').attr('src', 'common/checkOn.svg'),
      (localStorage.STAYLOGGEDIN = 'true'))
    : ($('#rememberCheck, #rememberCheck2').attr('src', 'common/checkOff.svg'),
      localStorage.removeItem('STAYLOGGEDIN'));
}
function toggleOfflineCheck() {
  'common/checkOff.svg' == $('#offlineCheck').attr('src')
    ? ($('#offlineCheck').attr('src', 'common/checkOn.svg'),
      (localStorage[storeInfo + 'offlineCheckSTORE'] = 'true'))
    : ($('#offlineCheck').attr('src', 'common/checkOff.svg'),
      localStorage.removeItem('offlineCheckSTORE'));
}
function togglePlayback() {
  -1 == $('#foreignText2').text().indexOf('GLOBAL')
    ? ((localStorage[storeInfo + 'playbackSTORE' + currentSecShort] =
        $('#selectPlayback').val()),
      updateOptions())
    : ((localStorage[storeInfo + 'playbackSTOREblock'] =
        $('#selectPlayback').val()),
      (localStorage[storeInfo + 'playbackSTOREvocab'] =
        $('#selectPlayback').val()),
      (localStorage[storeInfo + 'playbackSTOREconvo'] =
        $('#selectPlayback').val()),
      (localStorage[storeInfo + 'playbackSTOREverb'] =
        $('#selectPlayback').val()),
      updateAllOptions());
}
function toggleInterval() {
  if (-1 == $('#foreignText2').text().indexOf('GLOBAL')) {
    localStorage[storeInfo + 'intervalSTORE' + currentSecShort] =
      $('#selectInterval').val();
    var e = $('#selectInterval').val();
    ((timerLength = 1e3 * e), updateOptions());
  } else {
    ((localStorage[storeInfo + 'intervalSTOREblock'] =
      $('#selectInterval').val()),
      (localStorage[storeInfo + 'intervalSTOREvocab'] =
        $('#selectInterval').val()),
      (localStorage[storeInfo + 'intervalSTOREconvo'] =
        $('#selectInterval').val()),
      (localStorage[storeInfo + 'intervalSTOREverb'] =
        $('#selectInterval').val()));
    var o = $('#selectInterval').val();
    ((timerLength = 1e3 * o), updateAllOptions());
  }
}
function toggleText() {
  -1 == $('#foreignText2').text().indexOf('GLOBAL')
    ? ((localStorage[storeInfo + 'textSTORE' + currentSecShort] =
        $('#selectText').val()),
      updateOptions())
    : ((localStorage[storeInfo + 'textSTOREblock'] = $('#selectText').val()),
      (localStorage[storeInfo + 'textSTOREvocab'] = $('#selectText').val()),
      (localStorage[storeInfo + 'textSTOREconvo'] = $('#selectText').val()),
      (localStorage[storeInfo + 'textSTOREverb'] = $('#selectText').val()),
      updateAllOptions());
}
function toggleText2() {
  ((localStorage[storeInfo + 'textSTORE' + currentSecShort] =
    $('#selectText').val()),
    updateOptions());
}
function toggleFullscreen() {
  if (
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  ) {
    var e = document.documentElement;
    e.requestFullscreen
      ? e.requestFullscreen()
      : e.webkitRequestFullscreen
        ? e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
        : e.mozRequestFullScreen
          ? e.mozRequestFullScreen()
          : e.msRequestFullscreen && e.msRequestFullscreen();
  }
}
function homeMenu() {
  if (!$('#sprompt').is(':visible') && !$('.tipCont').is(':visible')) {
    if (
      (sessionStorage.removeItem(storeInfo + 'scrollTemp'),
      -1 == loghref.indexOf('/init'))
    )
      return (
        $('.gradientColor').css({
          background:
            'url(common/black.svg), radial-gradient(' +
            btnColor[8] +
            ',' +
            btnColor[9] +
            ')',
        }),
        $('.gradientColor2').css({
          background:
            'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
        }),
        $('.gradientColor3').css({
          background:
            'url(common/black.svg), radial-gradient(' +
            btnColor[8] +
            ',' +
            btnColor[9] +
            ')',
        }),
        $('iframe, #iLoad, #loadLogo').hide(),
        $('iframe').attr('src', ''),
        'pwa' == osType &&
          null == sessionStorage.menuType &&
          -1 != navigator.appVersion.indexOf('Win') &&
          (document.fullscreenElement ||
            document.webkitFullscreenElement ||
            ($('#fullWarning').html(
              '<strong style="color: #ffbd3b; font-size: 22px;">Fullscreen Mode?</strong><br>Press the "F11" key to enter fullscreen mode.',
            ),
            setTimeout(function () {
              ($('#fullWarning').fadeIn(),
                setTimeout(function () {
                  $('#fullWarning').fadeOut();
                }, 3e3));
            }, 500))),
        'mac' == osType &&
          null == sessionStorage.menuType &&
          (document.fullscreenElement ||
            document.webkitFullscreenElement ||
            ($('#fullWarning').html(
              '<strong style="color: #ffbd3b; font-size: 22px;">Fullscreen Mode?</strong><br>Press the <strong style="color: #ffbd3b;">spacebar</strong> now to go fullscreen.',
            ),
            setTimeout(function () {
              ($('#fullWarning').fadeIn(),
                (isFocused = !1),
                window.focus(),
                setTimeout(function () {
                  $('#fullWarning').fadeOut();
                }, 4e3));
            }, 500))),
        $('#loadLogo').css({ opacity: 1 }),
        0 == tabletMusic &&
          ('mobile' != currentDevice
            ? (toggleMusic3(), (tabletMusic = !0))
            : null == sessionStorage.menuType &&
              ((tabletMusic = !0), toggleMusic3())),
        $('#musicOnOff').show(),
        $(
          '#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn',
        ).removeClass('disabled'),
        $(
          '#redArrowImg, #mainLogoImg, .lessonMenus, #optionWrap, #userWrap, #loginOffline, .progMenus,.lessonBacks, #newVerb',
        ).hide(),
        $('#optionBtn').show(),
        $('.progMenus').css({ visibility: 'visible' }),
        setTimeout(function () {
          $('#redArrowImg, #mainLogoImg, .lessonMenus, .lessonBacks').hide();
        }, 500),
        $('.lessonBacks').css({ opacity: 0 }),
        $('.lessonMenus').css({ x: '200%' }),
        $('.menuCenterImg').css({ y: '100%' }),
        (sessionStorage.menuType = 'home'),
        $('.ouinoContentB').fadeIn(),
        localStorage.getItem('menuOuinoPos2') &&
          window.scrollTo(0, parseInt(localStorage.getItem('menuOuinoPos2'))),
        generatedInfo || generateInfo(),
        menusLoaded || 'mobile' == currentDevice
          ? void 0
          : (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
            void setTimeout(function () {
              (localStorageInit(), updateMenus());
            }, 500))
      );
    sessionStorage.getItem('userEmailSTORE') &&
      (sessionStorage.setItem('wasInit', 'true'),
      setTimeout(function () {
        window.location.href = 'home.html';
      }, homeDelay));
  }
}
function generateInfo() {
  var e, o;
  'teach' == localStorage.getItem(storeInfo + 'filterSTORE2')
    ? ($('#sectionP9B').text(
        'This learning path is custom-made by your teacher. It follows an order of lessons that your teacher handpicked to help you succeed.',
      ),
      $('#guidedSectionB .unitTitlesB2').html('Teacher Learning Path'))
    : ($('#sectionP9B').text(
        'Although Ouino teaches using a free-style approach, you can choose this option if you prefer to be guided through a recommended order of lessons.',
      ),
      $('#guidedSectionB .unitTitlesB2').html('Recommended Learning Path'));
  var t = localStorage[storeInfo + 'musicSTORE' + currentSecShort];
  null == t || 'null' == t
    ? $('#selectSound').prop('selectedIndex', 0)
    : ((e = '#selectSound option[value="' + t + '"]'),
      (o = $(e).index()),
      $('#selectSound').prop('selectedIndex', o));
  var s = localStorage[storeInfo + 'playbackSTORE' + currentSecShort];
  null == s || 'null' == s
    ? $('#selectPlayback').prop('selectedIndex', 0)
    : ((e = '#selectPlayback option[value="' + s + '"]'),
      (o = $(e).index()),
      $('#selectPlayback').prop('selectedIndex', o));
  var n = localStorage[storeInfo + 'intervalSTORE' + currentSecShort];
  null == n || 'null' == n
    ? $('#selectInterval').prop('selectedIndex', 3)
    : ((e = '#selectInterval option[value="' + n + '"]'),
      (o = $(e).index()),
      $('#selectInterval').prop('selectedIndex', o));
  var i,
    a = localStorage[storeInfo + 'textSTORE' + currentSecShort];
  (null == a || 'null' == a
    ? $('#selectText').prop('selectedIndex', 0)
    : ((e = '#selectText option[value="' + a + '"]'),
      (o = $(e).index()),
      $('#selectText').prop('selectedIndex', o)),
    null != localStorage[storeInfo + 'adminSTORE'] &&
      (i = localStorage[storeInfo + 'adminSTORE']),
    'no' == i && $('#userTitle2, #userTitle4, #userTitle5').hide(),
    null != localStorage[storeInfo + 'nameSTORE'] &&
      (userName = localStorage[storeInfo + 'nameSTORE']),
    $('#userTitle').html('<strong> ' + userName + ' </strong>- Log out'),
    (generatedInfo = !0));
}
function localStorageInit() {
  if (
    (localStorage.getItem(lessonLanguage + 'deviceLoad') ||
      (localStorage.setItem(lessonLanguage + 'deviceLoad', 'true'),
      deviceInfo()),
    localStorage[storeInfo + 'recommendPath2020'] &&
      -1 == localStorage[storeInfo + 'recommendPath2020'].indexOf('convo67|') &&
      (localStorage.removeItem(storeInfo + 'recommendPath2020'),
      $(
        '<section class="Lsection pathPrompt" style="position: relative; cursor: pointer; opacity: 0.95 !important; background: #1aa260; margin-top: -30px; margin-bottom: 40px; max-width: 450px; padding-bottom:25px !important;"><div class="sectionTitle" style="margin-bottom: 10px !important; text-align: center;">NEW LESSONS ADDED!</div>We have added new conversations throughout our Recommended Learning Path and at the end of the Conversations module.<div style="position: absolute; top: 0px; right: 10px; font-size: 25px;">X</div></section>',
      ).insertBefore(
        '#lessonMenu9 .insideMenu .mainTitle, #lessonMenu3 .insideMenu .mainTitle',
      ),
      $('.pathPrompt').on('click', function () {
        (localStorage.setItem(lessonLanguage + 'PathChanged2', 'true'),
          $('.pathPrompt').remove());
      })),
    !localStorage[storeInfo + 'recommendPath2020'])
  ) {
    for (
      var e = $('#lessonMenu9 .lessonItems').length,
        o = $('#lessonMenu9 .lessonItems:eq(0)')
          .attr('class')
          .split('lessonItems L')
          .join('')
          .split(' noQuiz')
          .join('')
          .split(' quizOnly')
          .join(''),
        t = 1;
      t < e;
      t++
    )
      o =
        o +
        '|' +
        $('#lessonMenu9 .lessonItems:eq(' + t + ')')
          .attr('class')
          .split('lessonItems L')
          .join('')
          .split(' noQuiz')
          .join('')
          .split(' quizOnly')
          .join('');
    localStorage[storeInfo + 'recommendPath2020'] = o;
  }
  if (!localStorage[storeInfo + 'recommendVerb2020']) {
    for (
      e = $('#lessonMenu11 .lessonItems').length,
        o = $('#lessonMenu11 .lessonItems:eq(0)')
          .attr('class')
          .split('lessonItems L')
          .join('')
          .split(' noQuiz')
          .join('')
          .split(' quizOnly')
          .join(''),
        t = 1;
      t < e;
      t++
    )
      o =
        o +
        '|' +
        $('#lessonMenu11 .lessonItems:eq(' + t + ')')
          .attr('class')
          .split('lessonItems L')
          .join('')
          .split(' noQuiz')
          .join('')
          .split(' quizOnly')
          .join('');
    localStorage[storeInfo + 'recommendVerb2020'] = o;
  }
  if (
    localStorage.getItem(lessonLanguage + 'legacyPath') &&
    !localStorage[storeInfo + 'recommendPath2018']
  ) {
    for (
      e = $('#lessonMenu9 .lessonItems').length,
        o = $('#lessonMenu9 .lessonItems:eq(0)')
          .attr('class')
          .split('lessonItems L')
          .join('')
          .split(' noQuiz')
          .join('')
          .split(' quizOnly')
          .join(''),
        t = 1;
      t < e;
      t++
    )
      o =
        o +
        '|' +
        $('#lessonMenu9 .lessonItems:eq(' + t + ')')
          .attr('class')
          .split('lessonItems L')
          .join('')
          .split(' noQuiz')
          .join('')
          .split(' quizOnly')
          .join('');
    localStorage[storeInfo + 'recommendPath2018'] = o;
  }
  if (
    ((teacher = localStorage[storeInfo + 'teacherSTORE']).length > 16 &&
    !localStorage.getItem(storeInfo + 'tOverwrite')
      ? localStorage.setItem(storeInfo + 'filterSTORE2', 'teach')
      : localStorage.getItem(storeInfo + 'filterSTORE2') ||
        localStorage.setItem(storeInfo + 'filterSTORE2', '0'),
    (teacher = teacher
      ? teacher
          .split('|!w')
          .join('|.Lblock')
          .split('|!x')
          .join('|.Lvocab')
          .split('|!y')
          .join('|.Lconvo')
          .split('|!z')
          .join('|.Lverb')
          .split('|')
      : ''),
    localStorage[storeInfo + 'piracySTORE'])
  )
    if ('exp' == localStorage[storeInfo + 'piracySTORE']) {
      $('.smallIcon, #volDiv, #menuMain2').hide();
      var s = 0;
      ('windows' == osType && (s = 45),
        'iOS' != osType
          ? $('body').append(
              "<div style='position:fixed; width: 100%; top: " +
                s +
                "px; height: 100%; z-index:99999; background: rgba(20,20,20,1);'><div style='position:absolute; width: 90%; max-width:800px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your subscription has expired. Please subscribe again to continue using the program. If you'd like to upgrade to the lifetime access at a discounted rate, simply follow this link:<br><br> <div id='upgradeLink2' style='font-weight: bold; color: #F4B400; cursor: pointer; font-size: 1.1em;' onclick='upgradeAccess()'>ouinolanguages.com/upgrade/" +
                lessonLanguage.toLowerCase() +
                '/</div><br><br>With the lifetime access, there are no reoccurring fees or extra costs. Plus, there are free lifetime upgrades. And when we say lifetime, we really mean it. We have never charged a customer to upgrade their program even several years after purchasing the program.</div></div>',
            )
          : $('body').append(
              "<div style='position:fixed; width: 100%; top: " +
                s +
                "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your subscription has expired. Please subscribe again to continue using the program.</div></div>",
            ));
    } else
      'ref' == localStorage[storeInfo + 'piracySTORE']
        ? ($('.smallIcon, #volDiv, #menuMain2').hide(),
          $('body').append(
            "<div style='position:fixed; width: 100%; top: " +
              s +
              "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your account has been disabled because we have refunded your purchase.</div></div>",
          ))
        : 'yes' == localStorage[storeInfo + 'piracySTORE']
          ? ($('.smallIcon, #volDiv, #menuMain2').hide(),
            $('body').append(
              "<div style='position:fixed; width: 100%; top: " +
                s +
                "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>" +
                localStorage[storeInfo + 'piracyNOTE']
                  .split('ZZZZ')
                  .join(', ') +
                '</div></div>',
            ))
          : 'leg' == localStorage[storeInfo + 'piracySTORE'] &&
            $('.insideMenu').addClass('classic');
  var n = localStorage[storeInfo + 'productSTORE'];
  -1 == n.indexOf('Complete') &&
    ($('.sectionBtns, .verbSectionBtns, .sectionBtnsB, .sectionBtnsB2').append(
      '<div class="telaGot4"><div>',
    ),
    (lessonTitle = 'Ouino ' + lessonLanguage),
    resizeTitle(),
    -1 != n.indexOf('Building Blocks') &&
      $('#blockSection .telaGot4, #blockSectionB .telaGot4').hide(),
    -1 != n.indexOf('Vocabulary') &&
      $('#vocabSection .telaGot4, #vocabSectionB .telaGot4').hide(),
    -1 != n.indexOf('Verbs') &&
      $('.verbSectionBtns .telaGot4, #verbSectionB .telaGot4').hide(),
    -1 != n.indexOf('Conversations') &&
      $('#convoSection .telaGot4, #convoSectionB .telaGot4').hide(),
    -1 != n.indexOf('Pronunciation') &&
      $('#pronunSection .telaGot4, #pronunSectionB .telaGot4').hide(),
    $(
      '#userSectionB .telaGot4, #extraSectionB .telaGot4, .verbB .telaGot4',
    ).hide());
}
function changeStars(e) {
  var o,
    t,
    s = $(this).offset(),
    n = e.pageX - s.left,
    i =
      '.' +
      $(this).attr('class').replace(' LstarsHOVER', '').replace('Lstars ', '');
  n < 20 &&
    (1 == (t = (t = $(this).css('background-image')).charAt(t.length - 6))
      ? ($(i).css({ 'background-image': 'url(common/star0.png)' }), (o = 0))
      : ($(i).css({ 'background-image': 'url(common/star1.png)' }), (o = 1)));
  n >= 21 &&
    n < 40 &&
    (2 == (t = (t = $(this).css('background-image')).charAt(t.length - 6))
      ? ($(i).css({ 'background-image': 'url(common/star0.png)' }), (o = 0))
      : ($(i).css({ 'background-image': 'url(common/star2.png)' }), (o = 2)));
  n >= 41 &&
    n < 60 &&
    (3 == (t = (t = $(this).css('background-image')).charAt(t.length - 6))
      ? ($(i).css({ 'background-image': 'url(common/star0.png)' }), (o = 0))
      : ($(i).css({ 'background-image': 'url(common/star3.png)' }), (o = 3)));
  n >= 61 &&
    (4 == (t = (t = $(this).css('background-image')).charAt(t.length - 6))
      ? ($(i).css({ 'background-image': 'url(common/star0.png)' }), (o = 0))
      : ($(i).css({ 'background-image': 'url(common/star4.png)' }), (o = 4)));
  var a = $(this)
      .attr('class')
      .split('Lstars ')
      .join('')
      .split(' LstarsHOVER')
      .join('')
      .split('Star'),
    r = a[1];
  ((currentSecShort = a[0]),
    (window['KS' + currentSecShort][r - 1] = o),
    (infoToUpdate = window['KS' + currentSecShort]
      .toString()
      .split(',')
      .join(':')),
    (localStorage[storeInfo + 'starSTORE' + currentSecShort] = infoToUpdate),
    (fieldToUpdate = currentSecShort + 'Stars'),
    updateDatabase(),
    updateStars());
}
localStorage.getItem('layoutSTORE') &&
  (layout = localStorage.getItem('layoutSTORE'));
var tLoaded = !1;
function filterLessons() {
  var e = $('.selectFilter').val(),
    o = $('.selectFilter2').val();
  if (
    (0 == teacher.length && $('.selectFilter2').hide(),
    'all' == e || '0' == e
      ? ($('.lessonItems').show(),
        $('.comb, .extraPrac, .mainWarning, .Lsection').show(),
        $('#lessonMenu9 .sectionTitle').show(),
        $('.tItems .tTitles, .filterWarn').hide())
      : ($('.lessonItems').hide(),
        $('.filterWarn').show(),
        $('body').addClass('filterOn')),
    'teach' === o)
  )
    if (
      (('all' != e && '0' != e) ||
        ($('.lessonItems').show(),
        $('.comb, .extraPrac, .mainWarning, .Lsection').show()),
      $('#lessonMenu9 .lessonItems').hide(),
      $(
        '#lessonMenu9 .comb, #lessonMenu9 .extraPrac, #lessonMenu9 .mainWarning, #lessonMenu9 .Lsection',
      ).hide(),
      tLoaded)
    )
      $('.tItems').show();
    else {
      var t = '',
        s = !1;
      for (xx = 0; xx < teacher.length; xx++) {
        0 == xx
          ? $('#lessonMenu9 .mainTitle').html(
              '<h1 class="mainTitle">' + teacher[xx] + '</h1>',
            )
          : '.' === teacher[xx].charAt(0)
            ? 0 != $('#lessonMenu9 ' + teacher[xx]).length
              ? (t += $('#lessonMenu9 ' + teacher[xx])
                  .prop('outerHTML')
                  .split('lessonItems')
                  .join('lessonItems tItems'))
              : 0 != $('#lessonMenu7 ' + teacher[xx]).length &&
                (t += $('#lessonMenu7 ' + teacher[xx])
                  .prop('outerHTML')
                  .split('lessonItems')
                  .join('lessonItems tItems'))
            : '@' === teacher[xx].charAt(0)
              ? ((t =
                  t +
                  '<br><section class="Lsection tTitles"><img class="linkLogo" src="common/link.png"><div class="teachLink">' +
                  teacher[xx].slice(1) +
                  '</div>'),
                (t += '</section><br>'),
                (s = !1))
              : '%' === teacher[xx].charAt(0)
                ? ((t =
                    t +
                    '<br><section class="Lsection tTitles"><img class="linkLogo" src="common/note.png"><div class="teacherNote"><strong>Note: </strong>' +
                    teacher[xx].slice(1) +
                    '</div>'),
                  (t += '</section><br>'),
                  (s = !1))
                : ((t =
                    t +
                    '<section class="Lsection tTitles"><div class="sectionTitle">' +
                    teacher[xx] +
                    '</div>'),
                  (s = !0));
        var n = '';
        (teacher[xx + 1] && (n = teacher[xx + 1]),
          ((xx === teacher.length - 1 && !0 === s) ||
            ('.' !== n.charAt(0) && !0 === s)) &&
            ((t += '</section>'), (s = !1)));
      }
      ($('#lessonMenu9 .insideMenu').append(t),
        $('.tItems')
          .on('mouseover mouseenter', function (e) {
            $(e.target).hasClass('Lstars') ||
              $(this).addClass('lessonItemsHOVER');
          })
          .on('mouseout mouseleave', function () {
            $(this).removeClass('lessonItemsHOVER');
          }),
        $('.tItems').on('click', loadLesson),
        $('.tItems .Lstars').on('click', changeStars),
        'iOS' == osType && $('.sectionTitle').addClass('absolute'),
        $('.teachLink').on('click', function () {
          openLink($(this).children('b').html());
        }),
        $('.tItems').show(),
        (tLoaded = !0));
    }
  else
    (('all' != e && '0' != e) ||
      ($('#lessonMenu9 .lessonItems').show(),
      $(
        '#lessonMenu9 .comb, #lessonMenu9 .extraPrac, #lessonMenu9 .mainWarning, #lessonMenu9 .Lsection',
      ).show(),
      $('#lessonMenu9 .sectionTitle').show()),
      $('.tItems .tTitles').hide());
  if ('all' != e && '0' != e) {
    $('.tItems').css('opacity', '0.2');
    var a = $('.lessonItems').length;
    for (i = 0; i < a; i++)
      if (-1 != e.indexOf('star')) {
        var r = $('.lessonItems:eq(' + i + ') .Lstars').css('background-image');
        r &&
          ((r = (r = r.split('star'))[1].charAt(0)),
          '0star' == e
            ? '0' == r &&
              ($('.lessonItems').eq(i).show(),
              'teach' === o && $('.lessonItems').eq(i).css('opacity', '0.9'))
            : '1star' == e
              ? '1' == r &&
                ($('.lessonItems').eq(i).show(),
                'teach' === o && $('.lessonItems').eq(i).css('opacity', '0.9'))
              : '2star' == e
                ? ('2' != r && '1' != r) ||
                  ($('.lessonItems').eq(i).show(),
                  'teach' === o &&
                    $('.lessonItems').eq(i).css('opacity', '0.9'))
                : '3star' == e
                  ? ('3' != r && '2' != r && '1' != r) ||
                    ($('.lessonItems').eq(i).show(),
                    'teach' === o &&
                      $('.lessonItems').eq(i).css('opacity', '0.9'))
                  : '4star' == e &&
                    (('4' != r && '3' != r && '2' != r && '1' != r) ||
                      ($('.lessonItems').eq(i).show(),
                      'teach' === o &&
                        $('.lessonItems').eq(i).css('opacity', '0.9'))));
      } else if (-1 != e.indexOf('score')) {
        (c = $('.lessonItems:eq(' + i + ') h4').text()) &&
          ((c = parseInt(c.split('%').join(''))),
          '90score' == e
            ? c < 90 &&
              ($('.lessonItems').eq(i).show(),
              'teach' === o && $('.lessonItems').eq(i).css('opacity', '0.9'))
            : '80score' == e
              ? c < 80 &&
                ($('.lessonItems').eq(i).show(),
                'teach' === o && $('.lessonItems').eq(i).css('opacity', '0.9'))
              : '70score' == e
                ? c < 70 &&
                  ($('.lessonItems').eq(i).show(),
                  'teach' === o &&
                    $('.lessonItems').eq(i).css('opacity', '0.9'))
                : '60score' == e &&
                  c < 60 &&
                  ($('.lessonItems').eq(i).show(),
                  'teach' === o &&
                    $('.lessonItems').eq(i).css('opacity', '0.9')));
      }
    if (-1 != e.indexOf('score')) {
      $('.noQuiz').hide();
      var l = $('.quizOnly').length;
      for (i = 0; i < l - 1; i++) {
        var c = $('.quizOnly:eq(' + i + ') h4').text(),
          u = $('.quizOnly:eq(' + i + ')').parent();
        c &&
          ((c = parseInt(c.split('%').join(''))),
          '90score' == e
            ? c < 90 &&
              ($(u).children('.lessonItems').show(),
              'teach' === o &&
                $(u).children('.lessonItems').css('opacity', '0.9'))
            : '80score' == e
              ? c < 80 &&
                ($(u).children('.lessonItems').show(),
                'teach' === o &&
                  $(u).children('.lessonItems').css('opacity', '0.9'))
              : '70score' == e
                ? c < 70 &&
                  ($(u).children('.lessonItems').show(),
                  'teach' === o &&
                    $(u).children('.lessonItems').css('opacity', '0.9'))
                : '60score' == e &&
                  c < 60 &&
                  ($(u).children('.lessonItems').show(),
                  'teach' === o &&
                    $(u).children('.lessonItems').css('opacity', '0.9')));
      }
    }
    ($('#lessonMenu9 .sectionTitle').show(),
      'teach' === o &&
        ($('#lessonMenu9 .lessonItems').hide(),
        $('#lessonMenu9 .tItems').show()),
      $('.Lsection').show());
    var d = $('.Lsection').length;
    for (ii = 0; ii < d; ii++)
      $('.Lsection').eq(ii).height() < 100 && $('.Lsection').eq(ii).hide();
    for (iii = 0; iii < d - 1; iii++)
      $('.Lsection').eq(iii).height() < 100 && $('.Lsection').eq(iii).hide();
    $('.comb, .extraPrac, .mainWarning').hide();
  }
  if (
    ('teach' === o
      ? ($('#lessonMenu9 .sectionTitle, #lessonMenu9 .tTitles').show(),
        $('#progMenu9').css({ opacity: '0' }),
        $('body').addClass('teacherOn'),
        $('#sectionP9B').text(
          'This learning path is custom-made by your teacher. It follows an order of lessons that your teacher handpicked to help you succeed.',
        ),
        $('#guidedSectionB .unitTitlesB2').html('Teacher Learning Path'))
      : ($('.tItems .tTitles').hide(),
        $('#lessonMenu9 .mainTitle').html(
          '<h1 class="mainTitle">RECOMMENDED LEARNING&nbsp;PATH</h1>',
        ),
        $('#sectionP9B').text(
          'Although Ouino teaches using a free-style approach, you can choose this option if you prefer to be guided through a recommended order of lessons.',
        ),
        $('#guidedSectionB .unitTitlesB2').html('Recommended Learning Path')),
    'mobile' != currentDevice)
  )
    for (var m = 0; m < $('.Lsection').length; m++) {
      var p = $('.Lsection').eq(m).children('.lessonItems').length;
      $('.Lsection')
        .eq(m)
        .addClass('line' + p);
    }
  else if ($('html').innerWidth() > 600 && $('html').innerHeight() > 600)
    for (m = 0; m < $('.Lsection').length; m++) {
      p = $('.Lsection').eq(m).children('.lessonItems').length;
      $('.Lsection')
        .eq(m)
        .addClass('line' + p);
    }
  else
    $('.Lsection').scroll(function () {
      $(this).children('.lessonItems').length > 2 &&
        localStorage.setItem(
          langShort + 'eS_' + $(this).index('.Lsection'),
          parseInt($(this).scrollLeft()),
        );
    });
  ((menusLoaded = !0),
    '' != f2load && window[f2load](),
    $('#loadLogo').fadeOut());
}
function updateMenus() {
  var e,
    o,
    t,
    s,
    n,
    i = [],
    a = [],
    r = [],
    l = [],
    c = [0, 0, 0, 0, 0],
    u = [0, 0, 0, 0, 0],
    d = [0, 0, 0, 0, 0],
    m = [0, 0, 0, 0, 0],
    p = [0, 0, 0, 0, 0],
    g = [0, 0, 0, 0, 0],
    f = [0, 0, 0, 0, 0],
    v = [0, 0, 0, 0, 0];
  ((numOfQuiz[0] =
    3 * ($('#lessonMenu1 .Lscores').length - $('#lessonMenu1 .noQuiz').length)),
    (sLengths[0] = $('#lessonMenu1 .lessonItems').length),
    (numOfQuiz[1] =
      4 *
      ($('#lessonMenu2 .Lscores').length - $('#lessonMenu2 .noQuiz').length)),
    (sLengths[1] = $('#lessonMenu2 .lessonItems').length),
    (numOfQuiz[2] =
      2 *
      ($('#lessonMenu3 .Lscores').length - $('#lessonMenu3 .noQuiz').length)),
    (sLengths[2] = $('#lessonMenu3 .lessonItems').length),
    (numOfQuiz[3] =
      3 *
      ($('#lessonMenu6 .Lscores').length - $('#lessonMenu6 .noQuiz').length)),
    (numOfQuiz[4] =
      4 *
      ($('#lessonMenu5 .Lscores').length - $('#lessonMenu5 .noQuiz').length)),
    (numOfQuiz[5] =
      2 *
      ($('#lessonMenu8 .Lscores').length - $('#lessonMenu8 .noQuiz').length)),
    (numOfQuiz[6] =
      3 *
      ($('#lessonMenu10 .Lscores').length - $('#lessonMenu10 .noQuiz').length)),
    'Spanish' != lessonLanguage
      ? (sLengths[3] = $('#lessonMenu6 .lessonItems').length)
      : (sLengths[3] = 22),
    (sLengths[4] = $('#lessonMenu5 .lessonItems').length + sLengths[3]),
    (sLengths[5] = $('#lessonMenu8 .lessonItems').length + sLengths[4]),
    (sLengths[6] = $('#lessonMenu10 .lessonItems').length + sLengths[5]),
    'Spanish' == lessonLanguage && (sLengths[6] = sLengths[6] + 3),
    null != localStorage[storeInfo + 'starSTOREblock'] &&
      (KSblock = localStorage[storeInfo + 'starSTOREblock'].split(':')),
    null != localStorage[storeInfo + 'scoreSTOREblock'] &&
      (e = localStorage[storeInfo + 'scoreSTOREblock'].split(':')));
  for (var h = 1; h <= sLengths[0]; h++) {
    if ('0' != e[h - 1]) {
      for (var b = e[h - 1].split('|'), I = 0, T = 0; T < b.length; T++)
        I += parseInt(b[T]);
      ((I = Math.round(I / 3)),
        $('.blockScore' + h).text(I + '%'),
        I >= 100
          ? $('.blockMedal' + h).css({
              'background-image': 'url(common/medal4.png)',
              'background-size': 'contain',
            })
          : I < 100 && I >= 85
            ? $('.blockMedal' + h).css({
                'background-image': 'url(common/medal3.png)',
                'background-size': 'contain',
              })
            : I < 85 && I >= 70
              ? $('.blockMedal' + h).css({
                  'background-image': 'url(common/medal2.png)',
                  'background-size': 'contain',
                })
              : I < 70 &&
                I >= 55 &&
                $('.blockMedal' + h).css({
                  'background-image': 'url(common/medal1.png)',
                  'background-size': 'contain',
                }));
    }
    '0' != KSblock[h - 1] &&
      $('.blockStar' + h).css({
        'background-image': 'url(common/star' + KSblock[h - 1] + '.png)',
        'background-size': 'contain',
      });
  }
  (null != localStorage[storeInfo + 'starSTOREvocab'] &&
    (KSvocab = localStorage[storeInfo + 'starSTOREvocab'].split(':')),
    null != localStorage[storeInfo + 'scoreSTOREvocab'] &&
      (o = localStorage[storeInfo + 'scoreSTOREvocab'].split(':')));
  for (h = 1; h <= sLengths[1]; h++) {
    if ('0' != o[h - 1]) {
      for (b = o[h - 1].split('|'), I = 0, T = 0; T < b.length; T++)
        I += parseInt(b[T]);
      ((I = Math.round(I / 4)),
        $('.vocabScore' + h).text(I + '%'),
        I >= 100
          ? $('.vocabMedal' + h).css({
              'background-image': 'url(common/medal4.png)',
              'background-size': 'contain',
            })
          : I < 100 && I >= 85
            ? $('.vocabMedal' + h).css({
                'background-image': 'url(common/medal3.png)',
                'background-size': 'contain',
              })
            : I < 85 && I >= 70
              ? $('.vocabMedal' + h).css({
                  'background-image': 'url(common/medal2.png)',
                  'background-size': 'contain',
                })
              : I < 70 &&
                I >= 55 &&
                $('.vocabMedal' + h).css({
                  'background-image': 'url(common/medal1.png)',
                  'background-size': 'contain',
                }));
    }
    '0' != KSvocab[h - 1] &&
      $('.vocabStar' + h).css({
        'background-image': 'url(common/star' + KSvocab[h - 1] + '.png)',
        'background-size': 'contain',
      });
  }
  (null != localStorage[storeInfo + 'starSTOREconvo'] &&
    (KSconvo = localStorage[storeInfo + 'starSTOREconvo'].split(':')),
    null != localStorage[storeInfo + 'scoreSTOREconvo'] &&
      (t = localStorage[storeInfo + 'scoreSTOREconvo'].split(':')));
  for (h = 1; h <= sLengths[2]; h++) {
    if ('0' != t[h - 1]) {
      ((b = t[h - 1].split('|')), (I = 0));
      ((I = parseInt(b[0]) + parseInt(b[1])),
        (I = Math.round(I / 2)),
        $('.convoScore' + h).text(I + '%'),
        I >= 100
          ? $('.convoMedal' + h).css({
              'background-image': 'url(common/medal4.png)',
              'background-size': 'contain',
            })
          : I < 100 && I >= 85
            ? $('.convoMedal' + h).css({
                'background-image': 'url(common/medal3.png)',
                'background-size': 'contain',
              })
            : I < 85 && I >= 70
              ? $('.convoMedal' + h).css({
                  'background-image': 'url(common/medal2.png)',
                  'background-size': 'contain',
                })
              : I < 70 &&
                I >= 55 &&
                $('.convoMedal' + h).css({
                  'background-image': 'url(common/medal1.png)',
                  'background-size': 'contain',
                }));
    }
    '0' != KSconvo[h - 1] &&
      $('.convoStar' + h).css({
        'background-image': 'url(common/star' + KSconvo[h - 1] + '.png)',
        'background-size': 'contain',
      });
  }
  if (
    (null != localStorage[storeInfo + 'starSTOREverb'] &&
      (KSverb = localStorage[storeInfo + 'starSTOREverb'].split(':')),
    null != localStorage[storeInfo + 'scoreSTOREverb'] &&
      (s = localStorage[storeInfo + 'scoreSTOREverb'].split(':')),
    'Spanish' == lessonLanguage)
  ) {
    for (h = 1; h <= 22; h++) {
      if ('0' == s[h - 1]) i.push(s[h - 1]);
      else if ('0' != s[h - 1]) {
        (((b = s[h - 1].split('|'))[2] = '0'), i.push(b.join('|')));
        I = 0;
        ((I = parseInt(b[0]) + parseInt(b[1]) + parseInt(b[3])),
          (I = Math.round(I / 3)),
          $('.verbScore' + h).text(I + '%'),
          I >= 100
            ? $('.verbMedal' + h).css({
                'background-image': 'url(common/medal4.png)',
                'background-size': 'contain',
              })
            : I < 100 && I >= 85
              ? $('.verbMedal' + h).css({
                  'background-image': 'url(common/medal3.png)',
                  'background-size': 'contain',
                })
              : I < 85 && I >= 70
                ? $('.verbMedal' + h).css({
                    'background-image': 'url(common/medal2.png)',
                    'background-size': 'contain',
                  })
                : I < 70 &&
                  I >= 55 &&
                  $('.verbMedal' + h).css({
                    'background-image': 'url(common/medal1.png)',
                    'background-size': 'contain',
                  }));
      }
      '0' != KSverb[h - 1] &&
        $('.verbStar' + h).css({
          'background-image': 'url(common/star' + KSverb[h - 1] + '.png)',
          'background-size': 'contain',
        });
    }
    for (h = 167; h <= 169; h++) {
      if ('0' == s[h - 1]) i.push(s[h - 1]);
      else if ('0' != s[h - 1]) {
        (((b = s[h - 1].split('|'))[2] = '0'), i.push(b.join('|')));
        I = 0;
        ((I = parseInt(b[0]) + parseInt(b[1]) + parseInt(b[3])),
          (I = Math.round(I / 3)),
          $('.verbScore' + h).text(I + '%'),
          I >= 100
            ? $('.verbMedal' + h).css({
                'background-image': 'url(common/medal4.png)',
                'background-size': 'contain',
              })
            : I < 100 && I >= 85
              ? $('.verbMedal' + h).css({
                  'background-image': 'url(common/medal3.png)',
                  'background-size': 'contain',
                })
              : I < 85 && I >= 70
                ? $('.verbMedal' + h).css({
                    'background-image': 'url(common/medal2.png)',
                    'background-size': 'contain',
                  })
                : I < 70 &&
                  I >= 55 &&
                  $('.verbMedal' + h).css({
                    'background-image': 'url(common/medal1.png)',
                    'background-size': 'contain',
                  }));
      }
      '0' != KSverb[h - 1] &&
        $('.verbStar' + h).css({
          'background-image': 'url(common/star' + KSverb[h - 1] + '.png)',
          'background-size': 'contain',
        });
    }
  } else
    for (h = 1; h <= sLengths[3]; h++) {
      if ('0' == s[h - 1]) i.push(s[h - 1]);
      else if ('0' != s[h - 1]) {
        (((b = s[h - 1].split('|'))[2] = '0'), i.push(b.join('|')));
        I = 0;
        ((I = parseInt(b[0]) + parseInt(b[1]) + parseInt(b[3])),
          (I = Math.round(I / 3)),
          $('.verbScore' + h).text(I + '%'),
          I >= 100
            ? $('.verbMedal' + h).css({
                'background-image': 'url(common/medal4.png)',
                'background-size': 'contain',
              })
            : I < 100 && I >= 85
              ? $('.verbMedal' + h).css({
                  'background-image': 'url(common/medal3.png)',
                  'background-size': 'contain',
                })
              : I < 85 && I >= 70
                ? $('.verbMedal' + h).css({
                    'background-image': 'url(common/medal2.png)',
                    'background-size': 'contain',
                  })
                : I < 70 &&
                  I >= 55 &&
                  $('.verbMedal' + h).css({
                    'background-image': 'url(common/medal1.png)',
                    'background-size': 'contain',
                  }));
      }
      '0' != KSverb[h - 1] &&
        $('.verbStar' + h).css({
          'background-image': 'url(common/star' + KSverb[h - 1] + '.png)',
          'background-size': 'contain',
        });
    }
  for (h = sLengths[5] + 1; h <= sLengths[6]; h++) {
    if ('Spanish' == lessonLanguage && h < 170 && h >= 167);
    else if ('0' == s[h - 1]) a.push(s[h - 1]);
    else if ('0' != s[h - 1]) {
      (((b = s[h - 1].split('|'))[2] = '0'), a.push(b.join('|')));
      I = 0;
      ((I = parseInt(b[0]) + parseInt(b[1]) + parseInt(b[3])),
        (I = Math.round(I / 3)),
        $('.verbScore' + h).text(I + '%'),
        I >= 100
          ? $('.verbMedal' + h).css({
              'background-image': 'url(common/medal4.png)',
              'background-size': 'contain',
            })
          : I < 100 && I >= 85
            ? $('.verbMedal' + h).css({
                'background-image': 'url(common/medal3.png)',
                'background-size': 'contain',
              })
            : I < 85 && I >= 70
              ? $('.verbMedal' + h).css({
                  'background-image': 'url(common/medal2.png)',
                  'background-size': 'contain',
                })
              : I < 70 &&
                I >= 55 &&
                $('.verbMedal' + h).css({
                  'background-image': 'url(common/medal1.png)',
                  'background-size': 'contain',
                }));
    }
    '0' != KSverb[h - 1] &&
      $('.verbStar' + h).css({
        'background-image': 'url(common/star' + KSverb[h - 1] + '.png)',
        'background-size': 'contain',
      });
  }
  for (h = sLengths[3] + 1; h <= sLengths[4]; h++) {
    if ((r.push(s[h - 1]), '0' != s[h - 1])) {
      for (b = s[h - 1].split('|'), I = 0, T = 0; T < b.length; T++)
        I += parseInt(b[T]);
      ((I = Math.round(I / 4)),
        $('.verbScore' + h).text(I + '%'),
        I >= 100
          ? $('.verbMedal' + h).css({
              'background-image': 'url(common/medal4.png)',
              'background-size': 'contain',
            })
          : I < 100 && I >= 85
            ? $('.verbMedal' + h).css({
                'background-image': 'url(common/medal3.png)',
                'background-size': 'contain',
              })
            : I < 85 && I >= 70
              ? $('.verbMedal' + h).css({
                  'background-image': 'url(common/medal2.png)',
                  'background-size': 'contain',
                })
              : I < 70 &&
                I >= 55 &&
                $('.verbMedal' + h).css({
                  'background-image': 'url(common/medal1.png)',
                  'background-size': 'contain',
                }));
    }
    '0' != KSverb[h - 1] &&
      $('.verbStar' + h).css({
        'background-image': 'url(common/star' + KSverb[h - 1] + '.png)',
        'background-size': 'contain',
      });
  }
  for (h = sLengths[4] + 1; h <= sLengths[5]; h++) {
    if ('0' == s[h - 1]) l.push(s[h - 1]);
    else if ('0' != s[h - 1]) {
      (((b = s[h - 1].split('|'))[0] = '0'), l.push(b.join('|')));
      I = 0;
      (b.length > 0 && (I = parseInt(b[1]) + parseInt(b[2])),
        (I = Math.round(I / 2)),
        $('.verbScore' + h).text(I + '%'),
        I >= 100
          ? $('.verbMedal' + h).css({
              'background-image': 'url(common/medal4.png)',
              'background-size': 'contain',
            })
          : I < 100 && I >= 85
            ? $('.verbMedal' + h).css({
                'background-image': 'url(common/medal3.png)',
                'background-size': 'contain',
              })
            : I < 85 && I >= 70
              ? $('.verbMedal' + h).css({
                  'background-image': 'url(common/medal2.png)',
                  'background-size': 'contain',
                })
              : I < 70 &&
                I >= 55 &&
                $('.verbMedal' + h).css({
                  'background-image': 'url(common/medal1.png)',
                  'background-size': 'contain',
                }));
    }
    '0' != KSverb[h - 1] &&
      $('.verbStar' + h).css({
        'background-image': 'url(common/star' + KSverb[h - 1] + '.png)',
        'background-size': 'contain',
      });
  }
  var S = 0,
    x = 0;
  n = e.join('|').split('|');
  for (var O = 0; O < n.length; O++) {
    ((S += w = parseInt(n[O])),
      100 == w
        ? c[3]++
        : w >= 90 && w < 100
          ? c[2]++
          : w >= 80 && w < 90
            ? c[1]++
            : w >= 70 && w < 80 && c[0]++);
  }
  ((c[2] = c[2] + c[3]),
    (c[1] = c[1] + c[2]),
    (c[0] = c[0] + c[1]),
    (c[4] = Math.round(S / numOfQuiz[0])),
    (x += S),
    (S = 0),
    (n = o.join('|').split('|')));
  for (O = 0; O < n.length; O++) {
    ((S += w = parseInt(n[O])),
      100 == w
        ? u[3]++
        : w >= 90 && w < 100
          ? u[2]++
          : w >= 80 && w < 90
            ? u[1]++
            : w >= 70 && w < 80 && u[0]++);
  }
  ((u[2] = u[2] + u[3]),
    (u[1] = u[1] + u[2]),
    (u[0] = u[0] + u[1]),
    (u[4] = Math.round(S / numOfQuiz[1])),
    (x += S),
    (S = 0),
    (n = t.join('|').split('|')));
  for (O = 0; O < n.length; O++) {
    ((S += w = parseInt(n[O])),
      100 == w
        ? d[3]++
        : w >= 90 && w < 100
          ? d[2]++
          : w >= 80 && w < 90
            ? d[1]++
            : w >= 70 && w < 80 && d[0]++);
  }
  ((d[2] = d[2] + d[3]),
    (d[1] = d[1] + d[2]),
    (d[0] = d[0] + d[1]),
    (d[4] = Math.round(S / numOfQuiz[2])),
    (x += S),
    (S = 0),
    (n = i.join('|').split('|')));
  for (O = 0; O < n.length; O++) {
    ((S += w = parseInt(n[O])),
      100 == w
        ? m[3]++
        : w >= 90 && w < 100
          ? m[2]++
          : w >= 80 && w < 90
            ? m[1]++
            : w >= 70 && w < 80 && m[0]++);
  }
  ((m[2] = m[2] + m[3]),
    (m[1] = m[1] + m[2]),
    (m[0] = m[0] + m[1]),
    (m[4] = Math.round(S / numOfQuiz[3])),
    (x += S),
    (S = 0),
    (n = a.join('|').split('|')));
  for (O = 0; O < n.length; O++) {
    ((S += w = parseInt(n[O])),
      100 == w
        ? p[3]++
        : w >= 90 && w < 100
          ? p[2]++
          : w >= 80 && w < 90
            ? p[1]++
            : w >= 70 && w < 80 && p[0]++);
  }
  ((p[2] = p[2] + p[3]),
    (p[1] = p[1] + p[2]),
    (p[0] = p[0] + p[1]),
    (p[4] = Math.round(S / numOfQuiz[6])),
    (x += S),
    (S = 0),
    (n = r.join('|').split('|')));
  for (O = 0; O < n.length; O++) {
    ((S += w = parseInt(n[O])),
      100 == w
        ? g[3]++
        : w >= 90 && w < 100
          ? g[2]++
          : w >= 80 && w < 90
            ? g[1]++
            : w >= 70 && w < 80 && g[0]++);
  }
  ((g[2] = g[2] + g[3]),
    (g[1] = g[1] + g[2]),
    (g[0] = g[0] + g[1]),
    (g[4] = Math.round(S / numOfQuiz[4])),
    (x += S),
    (S = 0),
    (n = l.join('|').split('|')));
  for (O = 0; O < n.length; O++) {
    var w;
    ((S += w = parseInt(n[O])),
      100 == w
        ? f[3]++
        : w >= 90 && w < 100
          ? f[2]++
          : w >= 80 && w < 90
            ? f[1]++
            : w >= 70 && w < 80 && f[0]++);
  }
  ((f[2] = f[2] + f[3]),
    (f[1] = f[1] + f[2]),
    (f[0] = f[0] + f[1]),
    (f[4] = Math.round(S / numOfQuiz[5])),
    (x += S),
    (numOfQuiz[7] =
      numOfQuiz[0] +
      numOfQuiz[1] +
      numOfQuiz[2] +
      numOfQuiz[3] +
      numOfQuiz[4] +
      numOfQuiz[5] +
      numOfQuiz[6]),
    (v[0] = c[0] + u[0] + d[0] + m[0] + g[0] + f[0] + p[0]),
    (v[1] = c[1] + u[1] + d[1] + m[1] + g[1] + f[1] + p[1]),
    (v[2] = c[2] + u[2] + d[2] + m[2] + g[2] + f[2] + p[2]),
    (v[3] = c[3] + u[3] + d[3] + m[3] + g[3] + f[3] + p[3]),
    (v[4] = Math.round(x / numOfQuiz[7])),
    $('.progMenublock .medalNum0').text(c[0]),
    $('.progMenublock .medalNum1').text(c[1]),
    $('.progMenublock .medalNum2').text(c[2]),
    $('.progMenublock .medalNum3').text(c[3]),
    $('.progMenublock .scoreNum').text(c[4]),
    $('.progMenublock .medalTotal').text(numOfQuiz[0]),
    $('.progMenublock .scoreMeter').css({ width: c[4] + '%' }),
    $('.progMenuvocab .medalNum0').text(u[0]),
    $('.progMenuvocab .medalNum1').text(u[1]),
    $('.progMenuvocab .medalNum2').text(u[2]),
    $('.progMenuvocab .medalNum3').text(u[3]),
    $('.progMenuvocab .scoreNum').text(u[4]),
    $('.progMenuvocab .medalTotal').text(numOfQuiz[1]),
    $('.progMenuvocab .scoreMeter').css({ width: u[4] + '%' }),
    $('.progMenuconvo .medalNum0').text(d[0]),
    $('.progMenuconvo .medalNum1').text(d[1]),
    $('.progMenuconvo .medalNum2').text(d[2]),
    $('.progMenuconvo .medalNum3').text(d[3]),
    $('.progMenuconvo .scoreNum').text(d[4]),
    $('.progMenuconvo .medalTotal').text(numOfQuiz[2]),
    $('.progMenuconvo .scoreMeter').css({ width: d[4] + '%' }),
    $('.progMenukey .medalNum0').text(m[0]),
    $('.progMenukey .medalNum1').text(m[1]),
    $('.progMenukey .medalNum2').text(m[2]),
    $('.progMenukey .medalNum3').text(m[3]),
    $('.progMenukey .scoreNum').text(m[4]),
    $('.progMenukey .medalTotal').text(numOfQuiz[3]),
    $('.progMenukey .scoreMeter').css({ width: m[4] + '%' }),
    $('.progMenuindi .medalNum0').text(g[0]),
    $('.progMenuindi .medalNum1').text(g[1]),
    $('.progMenuindi .medalNum2').text(g[2]),
    $('.progMenuindi .medalNum3').text(g[3]),
    $('.progMenuindi .scoreNum').text(g[4]),
    $('.progMenuindi .medalTotal').text(numOfQuiz[4]),
    $('.progMenuindi .scoreMeter').css({ width: g[4] + '%' }),
    $('.progMenuextra .medalNum0').text(p[0]),
    $('.progMenuextra .medalNum1').text(p[1]),
    $('.progMenuextra .medalNum2').text(p[2]),
    $('.progMenuextra .medalNum3').text(p[3]),
    $('.progMenuextra .scoreNum').text(p[4]),
    $('.progMenuextra .medalTotal').text(numOfQuiz[6]),
    $('.progMenuextra .scoreMeter').css({ width: p[4] + '%' }),
    localStorage.getItem(lessonLanguage + 'PathChanged') ||
      !localStorage.getItem(storeInfo + 'recommendPath2018') ||
      localStorage.getItem(lessonLanguage + 'legacyPath') ||
      ($(
        '<section id="pathPrompt" class="Lsection" style="position: relative; cursor: pointer; opacity: 0.95 !important; background: #a31e10; margin-top: -30px; margin-bottom: 40px; max-width: 450px; padding-bottom:25px !important;"><div class="sectionTitle" style="margin-bottom: 10px !important; text-align: center;">OUR RECOMMENDED PATH HAS CHANGED</div>In version 4.0, we have optimized our recommended lesson plan. If you would like to go back to the legacy lesson plan used in version 3.0, please change the dial on the top-right corner of this menu.<div style="position: absolute; top: 0px; right: 10px; font-size: 25px;">X</div></section>',
      ).insertBefore('#lessonMenu9 .insideMenu .mainTitle'),
      $('#pathPrompt').on('click', function () {
        (localStorage.setItem(lessonLanguage + 'PathChanged', 'true'),
          $('#pathPrompt').remove());
      })));
  var M = [];
  ((numOfQuiz[8] = numOfQuiz[3] + numOfQuiz[4] + numOfQuiz[5] + numOfQuiz[6]),
    (M[0] = m[0] + g[0] + p[0] + f[0]),
    (M[1] = m[1] + g[1] + p[1] + f[1]),
    (M[2] = m[2] + g[2] + p[2] + f[2]),
    (M[3] = m[3] + g[3] + p[3] + f[3]),
    (M[4] = Math.round((M[0] / numOfQuiz[8]) * 100)),
    $('.progMenuverbs .medalNum0').text(M[0]),
    $('.progMenuverbs .medalNum1').text(M[1]),
    $('.progMenuverbs .medalNum2').text(M[2]),
    $('.progMenuverbs .medalNum3').text(M[3]),
    $('.progMenuverbs .scoreNum').text(M[4]),
    $('.progMenuverbs .medalTotal').text(numOfQuiz[8]),
    $('.progMenuverbs .scoreMeter').css({ width: M[4] + '%' }),
    $('.progMenuendings .medalNum0').text(f[0]),
    $('.progMenuendings .medalNum1').text(f[1]),
    $('.progMenuendings .medalNum2').text(f[2]),
    $('.progMenuendings .medalNum3').text(f[3]),
    $('.progMenuendings .scoreNum').text(f[4]),
    $('.progMenuendings .medalTotal').text(numOfQuiz[5]),
    $('.progMenuendings .scoreMeter').css({ width: f[4] + '%' }),
    $('.progMenuAll .medalNum0').text(v[0]),
    $('.progMenuAll .medalNum1').text(v[1]),
    $('.progMenuAll .medalNum2').text(v[2]),
    $('.progMenuAll .medalNum3').text(v[3]),
    $('.progMenuAll .scoreNum').text(v[4]),
    $('.progMenuAll .medalTotal').text(numOfQuiz[7]),
    $('.progMenuAll .scoreMeter').css({ width: v[4] + '%' }));
  var k = [
    'Block',
    c[0],
    c[1],
    c[2],
    c[3],
    c[4],
    numOfQuiz[0],
    'Vocab',
    u[0],
    u[1],
    u[2],
    u[3],
    u[4],
    numOfQuiz[1],
    'Convo',
    d[0],
    d[1],
    d[2],
    d[3],
    d[4],
    numOfQuiz[2],
    'Indi',
    g[0],
    g[1],
    g[2],
    g[3],
    g[4],
    numOfQuiz[4],
    'Key',
    m[0],
    m[1],
    m[2],
    m[3],
    m[4],
    numOfQuiz[3],
    'Endings',
    f[0],
    f[1],
    f[2],
    f[3],
    f[4],
    numOfQuiz[5],
    'All',
    v[0],
    v[1],
    v[2],
    v[3],
    v[4],
    numOfQuiz[7],
    'Extra',
    p[0],
    p[1],
    p[2],
    p[3],
    p[4],
    numOfQuiz[6],
    'AllVerb',
    M[0],
    M[1],
    M[2],
    M[3],
    M[4],
    numOfQuiz[8],
  ];
  (localStorage.setItem(storeInfo + 'scoreGoalSTORE', k.join(':')),
    updateStars());
  ($('.insideMenu').append(
    '<select class="selectFilter"><option value="0">Filter Lessons ▼</option><option value="all">Show All</option><option value="1star">1 Star Only</option><option value="2star">1-2 Stars</option><option value="3star">1-3 Stars</option><option value="4star">1-4 Stars</option><option value="90score">Exercises 90% & Lower</option><option value="80score">Exercises 80% & Lower</option><option value="70score">Exercises 70% & Lower</option><option value="60score">Exercises 60% & Lower</option></select><div class="filterWarn">Showing Filtered Lessons Only (Show All)</div>',
  ),
    $('#lessonMenu9 .insideMenu').append(
      '<select class="selectFilter2"><option value="0">Choose Lesson Plan ▼</option><option value="ouino">Chosen by OUINO</option><option value="teach" id="selTeach">Chosen by Teacher</option></select>',
    ),
    $('.filterWarn').on('click', function () {
      (localStorage.setItem(storeInfo + 'filterSTORE', 'all'),
        location.reload());
    }),
    localStorage.getItem(storeInfo + 'filterSTORE') &&
      $('.selectFilter').val(localStorage.getItem(storeInfo + 'filterSTORE')),
    $('.selectFilter').change(function () {
      ($('.selectFilter').val($(this).val()),
        localStorage.setItem(storeInfo + 'filterSTORE', $(this).val()),
        location.reload());
    }),
    localStorage.getItem(storeInfo + 'filterSTORE2') &&
      $('.selectFilter2').val(localStorage.getItem(storeInfo + 'filterSTORE2')),
    $('.selectFilter2').change(function () {
      ('ouino3' == $(this).val()
        ? localStorage.setItem(lessonLanguage + 'legacyPath', 'true')
        : localStorage.removeItem(lessonLanguage + 'legacyPath'),
        'teach' != $(this).val()
          ? localStorage.setItem(storeInfo + 'tOverwrite', 'true')
          : localStorage.removeItem(storeInfo + 'tOverwrite'),
        localStorage.setItem(storeInfo + 'filterSTORE2', $(this).val()),
        location.reload());
    }),
    filterLessons());
}
function getUsers() {
  var e = new XMLHttpRequest(),
    o = setTimeout(function () {
      (e.abort(),
        $('.adminWarn1').text(
          "Couldn't connect to the server. Please try again when a connection is available.",
        ),
        $('.adminWarn1').show());
    }, 8e3),
    t = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + FUE4B + cWbBT,
    s =
      'email=' +
      userEmail +
      '&password=' +
      tuvm58dj +
      userEmail.substring(1, 3) +
      '&lessonLang=' +
      lessonLanguage;
  (e.open('POST', t, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        if ('pwa' == osType && -1 != e.responseURL.indexOf('offline'))
          return (
            $('.adminWarn1').text(
              "Couldn't connect to the server. Please try again when a connection is available.",
            ),
            void $('.adminWarn1').show()
          );
        if (
          (clearTimeout(o),
          'false' != e.responseText && e.responseText.length > 10)
        ) {
          $('.adminWarn1').hide();
          for (
            var t = e.responseText.split(','),
              s = t[1].split(':'),
              n = t[2].split(':'),
              i = t[3].split(':'),
              a = t[4].split(':'),
              r = [],
              l = 0;
            l < a.length;
            l++
          )
            r.push(parseInt(a[l]));
          r.sort();
          for (var c = [], u = 0; u < a.length; u++)
            c.push(a.indexOf(r[u].toString()));
          for (
            var d = [
                '#c0392b',
                '#d35400',
                '#f39c12',
                '#27ae60',
                '#16a085',
                '#3498db',
                '#9b59b6',
              ],
              m = 0,
              p = 1;
            p <= s.length;
            p++
          ) {
            var g = d[m];
            m < d.length - 1 ? m++ : (m = 0);
            var f =
              '<div id="allUser' +
              p +
              '" class="allUsers"><div class="allUsersLogo" style="background: ' +
              g +
              ';"><img src="common/logoUser.svg" class="userImg"></div><div class="vLine"></div><div class="userInfo"><p>USER ' +
              p +
              '</p>Name: ' +
              s[c[p - 1]] +
              '<br>Email: ' +
              n[c[p - 1]] +
              '</div><div class="adminInfo">ADMIN<br>' +
              i[c[p - 1]] +
              '</div></div>';
            $('#usersCont').append(f);
          }
          (1 == s.length &&
            $('#usersCont').append(
              '<div class="adminWarn2">You are currently the only user active on your license.</div>',
            ),
            $('.allUsers').on('click', allUsersActions),
            $('.adminInfo').on('click', adminActions),
            'mobile' != currentDevice &&
              ($('.allUsers')
                .on('mouseover mouseenter', function (e) {
                  $(e.target).hasClass('adminInfo') ||
                    $(this).addClass('allUsersHover');
                })
                .on('mouseout mouseleave', function () {
                  $(this).removeClass('allUsersHover');
                }),
              $('.adminInfo').hover(function () {
                ($(this).toggleClass('adminInfoHOVER'),
                  $(this).parent('.allUsers').removeClass('allUsersHover'));
              })));
        } else
          ($('.adminWarn1').text(
            "Couldn't connect to the server. Please try again when a connection is available.",
          ),
            $('.adminWarn1').show());
      }
    }));
  try {
    e.send(s);
  } catch (e) {
    ($('.adminWarn1').text(
      "Couldn't connect to the server. Please try again when a connection is available.",
    ),
      $('.adminWarn1').show());
  }
}
function yifzq67(e) {
  var o = e.replace(/[a-z]/gi, function (e) {
    return (
      ('{' == (e = String.fromCharCode(e.charCodeAt(0) + 1)) || '[' == e) &&
        (e = 'a'),
      /[aeiuo]/.test(e) && (e = e.toUpperCase()),
      e
    );
  });
  return o
    .replace('0', 'a')
    .replace('1', 'b')
    .replace('2', 'c')
    .replace('3', 'd')
    .replace('4', 'e')
    .replace('5', 'f')
    .replace('6', 'g')
    .replace('7', 'h')
    .replace('8', 'i')
    .replace('9', 'j');
}
function checkConnection() {
  var e = new XMLHttpRequest(),
    o = setTimeout(function () {
      (e.abort(),
        null != localStorage[storeInfo + 'activationSTORE']
          ? offlineMessage()
          : ($('#loginTitle').addClass('loginTitleHover'),
            $('#loginTitle').text(
              'Error: Offline profile not found on this computer.',
            ),
            $('#loadLogo').hide()));
    }, 6e3),
    t = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + jGWFQ + cWbBT;
  (e.open('POST', t, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        if ('pwa' == osType && -1 != e.responseURL.indexOf('offline'))
          return (
            $('#loginTitle').addClass('loginTitleHover'),
            $('#loginTitle').text(
              'Error: Offline profile not found on this computer.',
            ),
            void $('#loadLogo').hide()
          );
        (clearTimeout(o),
          'false' != e.responseText && e.responseText.length > 500
            ? ($('#loginCenter').show(),
              localStorage.removeItem('STAYLOGGEDIN'),
              localStorage.removeItem('activationSTORE'),
              $('#loginTitle').addClass('loginTitleHover'),
              $('#loginTitle').text('Invalid email and/or password.'),
              $('#loadLogo').hide(),
              localStorage.removeItem('userEmailSTORE'),
              localStorage.removeItem('tuvm58djSTORE'),
              localStorage.removeItem(storeInfo + 'activationSTORE'),
              localStorage.removeItem(storeInfo + 'userEmailSTORE'),
              localStorage.removeItem(storeInfo + 'tuvm58djSTORE'),
              $('#emailField').val(''),
              $('#jguyr4').val(''))
            : null != localStorage[storeInfo + 'activationSTORE']
              ? offlineMessage()
              : ($('#loginTitle').addClass('loginTitleHover'),
                $('#loginTitle').text('Internet required on first use.'),
                $('#loadLogo').hide()));
      }
    }));
  try {
    e.send('email=test@ouino.com&password=test&product=test');
  } catch (e) {
    null != localStorage[storeInfo + 'activationSTORE']
      ? offlineMessage()
      : ($('#loginTitle').addClass('loginTitleHover'),
        $('#loginTitle').text('Error: Internet required on first use.'),
        $('#loadLogo').hide());
  }
}
function databaseInit() {
  if (
    (null != localStorage.STAYLOGGEDIN
      ? ((localStorage.userEmailSTORE = userEmail),
        (localStorage.tuvm58djSTORE = tuvm58dj))
      : (localStorage.removeItem('userEmailSTORE'),
        localStorage.removeItem('tuvm58djSTORE')),
    'pwa' == osType && sessionStorage.getItem('offlineLoad'))
  )
    return (offlineMessage(), void sessionStorage.removeItem('offlineLoad'));
  var e = new XMLHttpRequest(),
    o = 7e3;
  (0 == $('#startCover').is(':visible') && $('#loadLogo').show(),
    ('iOS' != osType && -1 == osType.indexOf('droid')) || (o = 9e3));
  var t = setTimeout(function () {
      (e.abort(),
        null != localStorage[storeInfo + 'activationSTORE']
          ? offlineMessage()
          : ($('#loginTitle').addClass('loginTitleHover'),
            $('#loginTitle').text('Error: Internet required on first use.'),
            $('#loadLogo').hide()));
    }, o),
    s = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + jGWFQ + cWbBT,
    n =
      'email=' +
      userEmail +
      '&password=' +
      tuvm58dj +
      userEmail.substring(1, 3) +
      '&product=' +
      lessonLanguage +
      '&version=5.1';
  (e.open('POST', s, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        if ('pwa' == osType && -1 != e.responseURL.indexOf('offline'))
          return (
            offlineMessage(),
            void sessionStorage.removeItem('offlineLoad')
          );
        (clearTimeout(t),
          'false' != e.responseText && e.responseText.length > 500
            ? ($('#loginCover').hide(),
              $('#loadLogo').fadeOut(),
              (localStorage[storeInfo + 'activationSTORE'] = 'activated'),
              (localStorage[storeInfo + 'userEmailSTORE'] = userEmail),
              (localStorage[storeInfo + 'tuvm58djSTORE'] = tuvm58dj),
              (sessionStorage.userEmailSTORE = userEmail),
              (sessionStorage.tuvm58djSTORE = tuvm58dj),
              (sessionStorage.LOGGEDIN = 'User logged in'),
              (userInfo = e.responseText.split(', ').join('ZZZZ').split(',')),
              localStorage.setItem(storeInfo + 'deviceSTORE', userInfo[3]),
              null == localStorage[storeInfo + 'wasOfflineSTORE']
                ? initUpdateFROMdb()
                : initUpdateTOdb())
            : checkConnection());
      }
    }));
  try {
    e.send(n);
  } catch (e) {
    null != localStorage[storeInfo + 'activationSTORE']
      ? offlineMessage()
      : ($('#loginTitle').addClass('loginTitleHover'),
        $('#loginTitle').text('Error: Internet required on first use.'),
        $('#loadLogo').hide());
  }
}
function updateDatabase() {
  (':' == infoToUpdate.charAt(infoToUpdate.length - 1) && (infoToUpdate += '0'),
    ':' == infoToUpdate.charAt(0) && (infoToUpdate = '0' + infoToUpdate),
    (infoToUpdate = infoToUpdate.split('::').join(':0:')));
  var e = new XMLHttpRequest(),
    o = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + cWbBT,
    t =
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
  (e.open('POST', o, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'));
  try {
    e.send(t);
  } catch (e) {
    offlineMessage();
  }
}
function updateGroup() {
  var e = new XMLHttpRequest(),
    o = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + 'Group' + cWbBT,
    t =
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
  (e.open('POST', o, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'));
  try {
    e.send(t);
  } catch (e) {
    offlineMessage();
  }
}
function offlineMessage() {
  ('pwa' == osType &&
    (sessionStorage.setItem('offlineSession', 'true'), offlineActions()),
    $('#loadLogo').hide(),
    tuvm58dj == localStorage[storeInfo + 'tuvm58djSTORE']
      ? ((sessionStorage.userEmailSTORE = userEmail),
        (sessionStorage.tuvm58djSTORE = tuvm58dj),
        (sessionStorage.LOGGEDIN = 'User logged in'),
        (localStorage[storeInfo + 'numUseSTORE'] =
          parseInt(localStorage[storeInfo + 'numUseSTORE']) + 1),
        (localStorage[storeInfo + 'wasOfflineSTORE'] = 'true'),
        null == sessionStorage.OFFLINEWARNING &&
        null == localStorage[storeInfo + 'offlineCheckSTORE']
          ? ((sessionStorage.OFFLINEWARNING = 'warned'),
            $('#loginCover').hide(),
            $('#loginOffline').show(),
            $('.loader').hide(),
            $('#loadLogo').hide())
          : $('#loginCover').hide())
      : ($('#loginTitle').addClass('loginTitleHover'),
        $('#loginTitle').text('Error: Internet required on first use.'),
        $('#loadLogo').hide(),
        $('#jguyr4').val('')));
}
function updateOptions() {
  ((infoToUpdate =
    $('#selectSound').val() +
    ':' +
    $('#selectPlayback').val() +
    ':' +
    $('#selectInterval').val() +
    ':' +
    $('#selectText').val()),
    (fieldToUpdate = currentSecShort + 'Options'),
    updateDatabase());
}
function updateAllOptions() {
  ((infoToUpdate =
    $('#selectSound').val() +
    ':' +
    $('#selectPlayback').val() +
    ':' +
    $('#selectInterval').val() +
    ':' +
    $('#selectText').val()),
    (fieldToUpdate = 'blockOptions'),
    updateDatabase(),
    (fieldToUpdate = 'vocabOptions'),
    updateDatabase(),
    (fieldToUpdate = 'convoOptions'),
    updateDatabase(),
    (fieldToUpdate = 'verbOptions'),
    updateDatabase());
}
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
function updateStars() {
  var e,
    o,
    t,
    s,
    n = [];
  ((e =
    4 *
    ($('#lessonMenu1 .Lstars').length - $('#lessonMenu1 .quizOnly').length)),
    (o = KSblock.join('|').split('|')));
  for (var i = 0; i < o.length; i++) o[i] = parseInt(o[i]);
  ((t = 0),
    $.each(o, function () {
      t += this;
    }),
    (s = Math.round((t / e) * 100)),
    $('.progMenublock .starNum').text(t),
    $('.progMenublock .starTotal').text(e),
    $('.progMenublock .starMeter').css({ width: s + '%' }),
    n.push('Block'),
    n.push(t),
    n.push(e),
    n.push(s),
    (e =
      4 *
      ($('#lessonMenu2 .Lstars').length - $('#lessonMenu2 .quizOnly').length)),
    (o = KSvocab.join('|').split('|')));
  for (i = 0; i < o.length; i++) o[i] = parseInt(o[i]);
  ((t = 0),
    $.each(o, function () {
      t += this;
    }),
    (s = Math.round((t / e) * 100)),
    $('.progMenuvocab .starNum').text(t),
    $('.progMenuvocab .starTotal').text(e),
    $('.progMenuvocab .starMeter').css({ width: s + '%' }),
    n.push('Vocab'),
    n.push(t),
    n.push(e),
    n.push(s),
    (e =
      4 *
      ($('#lessonMenu3 .Lstars').length - $('#lessonMenu3 .quizOnly').length)),
    (o = KSconvo.join('|').split('|')));
  for (i = 0; i < o.length; i++) o[i] = parseInt(o[i]);
  ((t = 0),
    $.each(o, function () {
      t += this;
    }),
    (s = Math.round((t / e) * 100)),
    $('.progMenuconvo .starNum').text(t),
    $('.progMenuconvo .starTotal').text(e),
    $('.progMenuconvo .starMeter').css({ width: s + '%' }),
    n.push('Convo'),
    n.push(t),
    n.push(e),
    n.push(s),
    (e =
      4 *
      ($('#lessonMenu5 .Lstars').length - $('#lessonMenu5 .quizOnly').length)));
  for (var a = [], r = sLengths[3] + 1; r <= sLengths[4]; r++)
    a.push(KSverb[r - 1]);
  o = a.join('|').split('|');
  for (i = 0; i < o.length; i++) o[i] = parseInt(o[i]);
  ((t = 0),
    $.each(o, function () {
      t += this;
    }),
    (s = Math.round((t / e) * 100)),
    $('.progMenuindi .starNum').text(t),
    $('.progMenuindi .starTotal').text(e),
    $('.progMenuindi .starMeter').css({ width: s + '%' }),
    n.push('Indi'),
    n.push(t),
    n.push(e),
    n.push(s),
    (e =
      4 *
      ($('#lessonMenu6 .Lstars').length - $('#lessonMenu6 .quizOnly').length)));
  var l = [];
  if ('Spanish' == lessonLanguage) {
    for (r = 1; r <= 22; r++) l.push(KSverb[r - 1]);
    for (r = 167; r <= 169; r++) l.push(KSverb[r - 1]);
  } else for (r = 1; r <= sLengths[3]; r++) l.push(KSverb[r - 1]);
  o = l.join('|').split('|');
  for (i = 0; i < o.length; i++) o[i] = parseInt(o[i]);
  ((t = 0),
    $.each(o, function () {
      t += this;
    }),
    (s = Math.round((t / e) * 100)),
    $('.progMenukey .starNum').text(t),
    $('.progMenukey .starTotal').text(e),
    $('.progMenukey .starMeter').css({ width: s + '%' }),
    n.push('Key'),
    n.push(t),
    n.push(e),
    n.push(s),
    (e =
      4 *
      ($('#lessonMenu8 .Lstars').length - $('#lessonMenu8 .quizOnly').length)));
  var c = [];
  for (r = sLengths[4] + 1; r <= sLengths[5]; r++) c.push(KSverb[r - 1]);
  o = c.join('|').split('|');
  for (i = 0; i < o.length; i++) o[i] = parseInt(o[i]);
  ((t = 0),
    $.each(o, function () {
      t += this;
    }),
    (s = Math.round((t / e) * 100)),
    $('.progMenuendings .starNum').text(t),
    $('.progMenuendings .starTotal').text(e),
    $('.progMenuendings .starMeter').css({ width: s + '%' }),
    n.push('Endings'),
    n.push(t),
    n.push(e),
    n.push(s),
    n.push('All'),
    n.push(''),
    n.push(''),
    n.push(''),
    (e =
      4 *
      ($('#lessonMenu10 .Lstars').length -
        $('#lessonMenu10 .quizOnly').length)));
  var u = [];
  for (r = sLengths[5] + 1; r <= sLengths[6]; r++)
    ('Spanish' == lessonLanguage && r < 170 && r >= 167) ||
      u.push(KSverb[r - 1]);
  o = u.join('|').split('|');
  for (i = 0; i < o.length; i++) o[i] = parseInt(o[i]);
  ((t = 0),
    $.each(o, function () {
      t += this;
    }),
    (s = Math.round((t / e) * 100)),
    $('.progMenuextra .starNum').text(t),
    $('.progMenuextra .starTotal').text(e),
    $('.progMenuextra .starMeter').css({ width: s + '%' }),
    n.push('Extra'),
    n.push(t),
    n.push(e),
    n.push(s),
    (t = n[1] + n[5] + n[9] + n[13] + n[17] + n[21] + n[29]),
    (e = n[2] + n[6] + n[10] + n[14] + n[18] + n[22] + n[30]),
    (s = Math.round((t / e) * 100)),
    $('.progMenuAll .starNum').text(t),
    $('.progMenuAll .starTotal').text(e),
    $('.progMenuAll .starMeter').css({ width: s + '%' }),
    (n[25] = t),
    (n[26] = e),
    (n[27] = s),
    (t = n[13] + n[17] + n[21] + n[29]),
    (e = n[14] + n[18] + n[22] + n[30]),
    (s = Math.round((t / e) * 100)),
    $('.progMenuverbs .starNum').text(t),
    $('.progMenuverbs .starTotal').text(e),
    $('.progMenuverbs .starMeter').css({ width: s + '%' }),
    n.push('AllVerb'),
    n.push(t),
    n.push(e),
    n.push(s),
    localStorage.setItem(storeInfo + 'starGoalSTORE', n.join(':')),
    'pwa' == osType && updateCache());
}
function initUpdateFROMdb() {
  ((userInfo[5].match(/:/g) || []).length < 107 &&
    ((userInfo[5] =
      userInfo[5] +
      ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0'),
    (userInfo[5] = userInfo[5].split('::').join(':0:')),
    (infoToUpdate = userInfo[5]),
    (fieldToUpdate = 'vocabStars'),
    updateDatabase()),
    (userInfo[6].match(/:/g) || []).length < 107 &&
      ((userInfo[6] =
        userInfo[6] +
        ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0'),
      (userInfo[6] = userInfo[6].split('::').join(':0:')),
      (infoToUpdate = userInfo[6]),
      (fieldToUpdate = 'vocabScores'),
      updateDatabase()),
    (userInfo[8].match(/:/g) || []).length < 79 &&
      ((userInfo[8] =
        userInfo[8] +
        ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0'),
      (userInfo[8] = userInfo[8].split(':').slice(0, 85).join(':')),
      (userInfo[8] = userInfo[8].split('::').join(':0:')),
      (infoToUpdate = userInfo[8]),
      (fieldToUpdate = 'convoStars'),
      updateDatabase()),
    (userInfo[9].match(/:/g) || []).length < 79 &&
      ((userInfo[9] =
        userInfo[9] +
        ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0'),
      (userInfo[9] = userInfo[9].split('::').join(':0:')),
      (infoToUpdate = userInfo[9]),
      (fieldToUpdate = 'convoScores'),
      updateDatabase()),
    (userInfo[11].match(/:/g) || []).length < 210 &&
      ((userInfo[11] =
        userInfo[11] +
        ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0'),
      (userInfo[11] = userInfo[11].split(':').slice(0, 220).join(':')),
      (userInfo[11] = userInfo[11].split('::').join(':0:')),
      (infoToUpdate = userInfo[11]),
      (fieldToUpdate = 'verbStars'),
      updateDatabase()),
    (userInfo[12].match(/:/g) || []).length < 210 &&
      ((userInfo[12] =
        userInfo[12] +
        ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0'),
      (userInfo[12] = userInfo[12].split(':').slice(0, 220).join(':')),
      (userInfo[12] = userInfo[12].split('::').join(':0:')),
      (infoToUpdate = userInfo[12]),
      (fieldToUpdate = 'verbScores'),
      updateDatabase()),
    (userInfo[14].match(/:/g) || []).length < 110 &&
      ((userInfo[14] =
        userInfo[14] + ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0'),
      (userInfo[14] = userInfo[14].split('::').join(':0:')),
      (infoToUpdate = userInfo[14]),
      (fieldToUpdate = 'blockStars'),
      updateDatabase()),
    (userInfo[15].match(/:/g) || []).length < 110 &&
      ((userInfo[15] =
        userInfo[15] + ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0'),
      (userInfo[15] = userInfo[15].split('::').join(':0:')),
      (infoToUpdate = userInfo[15]),
      (fieldToUpdate = 'blockScores'),
      updateDatabase()),
    (userInfo[24].match(/:/g) || []).length < 15 &&
      ((userInfo[24] = userInfo[24] + ':0:0:0'),
      (userInfo[24] = userInfo[24].split('::').join(':0:')),
      (infoToUpdate = userInfo[24]),
      (fieldToUpdate = 'extraScores'),
      updateDatabase()));
  var e = ':500000';
  -1 == userInfo[24].indexOf(e) &&
    ((infoToUpdate =
      userInfo[24]
        .split(':300011')
        .join('')
        .split(':300000')
        .join('')
        .split(':400000')
        .join('') + e),
    (fieldToUpdate = 'extraScores'),
    updateDatabase());
  var o = userInfo[4].split(':');
  ((localStorage[storeInfo + 'musicSTOREvocab'] = o[0]),
    (localStorage[storeInfo + 'playbackSTOREvocab'] = o[1]),
    (localStorage[storeInfo + 'intervalSTOREvocab'] = o[2]),
    (localStorage[storeInfo + 'textSTOREvocab'] = o[3]),
    (localStorage[storeInfo + 'starSTOREvocab'] = userInfo[5]),
    (localStorage[storeInfo + 'scoreSTOREvocab'] = userInfo[6]),
    (o = userInfo[7].split(':')),
    (localStorage[storeInfo + 'musicSTOREconvo'] = o[0]),
    (localStorage[storeInfo + 'playbackSTOREconvo'] = o[1]),
    (localStorage[storeInfo + 'intervalSTOREconvo'] = o[2]),
    (localStorage[storeInfo + 'textSTOREconvo'] = o[3]),
    (localStorage[storeInfo + 'starSTOREconvo'] = userInfo[8]),
    (localStorage[storeInfo + 'scoreSTOREconvo'] = userInfo[9]),
    (o = userInfo[10].split(':')),
    (localStorage[storeInfo + 'musicSTOREverb'] = o[0]),
    (localStorage[storeInfo + 'playbackSTOREverb'] = o[1]),
    (localStorage[storeInfo + 'intervalSTOREverb'] = o[2]),
    (localStorage[storeInfo + 'textSTOREverb'] = o[3]),
    (localStorage[storeInfo + 'starSTOREverb'] = userInfo[11]),
    (localStorage[storeInfo + 'scoreSTOREverb'] = userInfo[12]),
    (o = userInfo[13].split(':')),
    (localStorage[storeInfo + 'musicSTOREblock'] = o[0]),
    (localStorage[storeInfo + 'playbackSTOREblock'] = o[1]),
    (localStorage[storeInfo + 'intervalSTOREblock'] = o[2]),
    (localStorage[storeInfo + 'textSTOREblock'] = o[3]),
    (localStorage[storeInfo + 'starSTOREblock'] = userInfo[14]),
    (localStorage[storeInfo + 'scoreSTOREblock'] = userInfo[15]),
    (localStorage[storeInfo + 'starSTOREpronun'] = userInfo[16]));
  var t = 0;
  if (
    ('windows' == osType && (t = 45),
    'exp' == userInfo[17]
      ? ($('.smallIcon, #volDiv, #menuMain2').hide(),
        'iOS' != osType
          ? $('body').append(
              "<div style='position:fixed; width: 100%; top: " +
                t +
                "px; height: 100%; z-index:99999; background: rgba(20,20,20,1);'><div style='position:absolute; width: 90%; max-width:800px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your subscription has expired. Please subscribe again to continue using the program. If you'd like to upgrade to the lifetime access at a discounted rate, simply follow this link:<br><br> <div id='upgradeLink2' style='font-weight: bold; color: #F4B400; cursor: pointer; font-size: 1.1em;' onclick='upgradeAccess()'>ouinolanguages.com/upgrade/" +
                lessonLanguage.toLowerCase() +
                '/</div><br><br>With the lifetime access, there are no reoccurring fees or extra costs. Plus, there are free lifetime upgrades. And when we say lifetime, we really mean it. We have never charged a customer to upgrade their program even several years after purchasing the program.</div></div>',
            )
          : $('body').append(
              "<div style='position:fixed; width: 100%; top: " +
                t +
                "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your subscription has expired. Please subscribe again to continue using the program.</div></div>",
            ),
        localStorage.removeItem('userEmailSTORE'),
        localStorage.removeItem('tuvm58djSTORE'))
      : 'ref' == userInfo[17]
        ? ($('.smallIcon, #volDiv, #menuMain2').hide(),
          $('body').append(
            "<div style='position:fixed; width: 100%; top: " +
              t +
              "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your account has been disabled because we have refunded your purchase.</div></div>",
          ),
          localStorage.removeItem('userEmailSTORE'),
          localStorage.removeItem('tuvm58djSTORE'))
        : 'yes' == userInfo[17] &&
          ($('.smallIcon, #volDiv, #menuMain2').hide(),
          $('body').append(
            "<div style='position:fixed; width: 100%; top: " +
              t +
              "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>" +
              userInfo[18].split('ZZZZ').join(', ') +
              '</div></div>',
          ),
          localStorage.removeItem('userEmailSTORE'),
          localStorage.removeItem('tuvm58djSTORE')),
    (localStorage[storeInfo + 'piracySTORE'] = userInfo[17]),
    (localStorage[storeInfo + 'piracyNOTE'] = userInfo[18]),
    (localStorage[storeInfo + 'nameSTORE'] = userInfo[19]),
    (localStorage[storeInfo + 'adminSTORE'] = userInfo[20]),
    (localStorage[storeInfo + 'productSTORE'] = userInfo[21]),
    (localStorage[storeInfo + 'goalsSTORE'] = userInfo[23]),
    (localStorage[storeInfo + 'slideInfo'] = userInfo[22]),
    (localStorage[storeInfo + 'extraScoresSTORE'] = userInfo[24]),
    userInfo[27].length > 20)
  ) {
    var s = userInfo[27].split(':'),
      n = s.pop();
    -1 == n.indexOf('/')
      ? localStorage.removeItem(storeInfo + 'saved')
      : localStorage.setItem(storeInfo + 'saved', n);
    var i = s.pop();
    (-1 == i.indexOf('|') && (i = '0|0|0|0|0|0|0|0|0|0|0'),
      localStorage.setItem(storeInfo + 'scrollPercent', i),
      -1 == (s = s.join(':')).indexOf('|')
        ? localStorage.removeItem(storeInfo + 'leftOff')
        : localStorage.setItem(storeInfo + 'leftOff', s));
  } else
    (localStorage.removeItem(storeInfo + 'saved'),
      localStorage.removeItem(storeInfo + 'leftOff'),
      localStorage.setItem(
        storeInfo + 'scrollPercent',
        '0|0|0|0|0|0|0|0|0|0|0',
      ));
  ((localStorage[storeInfo + 'teacherSTORE'] = userInfo[25]
    .split('ZZZZ')
    .join(', ')),
    (teacher = userInfo[25]).length > 16 &&
    !localStorage.getItem(storeInfo + 'tOverwrite')
      ? localStorage.setItem(storeInfo + 'filterSTORE2', 'teach')
      : localStorage.getItem(storeInfo + 'filterSTORE2') ||
        localStorage.setItem(storeInfo + 'filterSTORE2', '0'),
    teacher.length < 17 &&
      (localStorage.removeItem(storeInfo + 'filterSTORE2'),
      localStorage.setItem(storeInfo + 'teacherSTORE', '')),
    (teacher = teacher
      .split('|!w')
      .join('|.Lblock')
      .split('|!x')
      .join('|.Lvocab')
      .split('|!y')
      .join('|.Lconvo')
      .split('|!z')
      .join('|.Lverb')
      .split('|')),
    (localStorage[storeInfo + 'cardsSTORE'] = userInfo[26]),
    (localStorage[storeInfo + 'numUseSTORE'] = userInfo[0]),
    (infoToUpdate = (infoToUpdate = parseInt(userInfo[0]) + 1).toString()),
    (fieldToUpdate = 'userUse'),
    updateDatabase());
  var a = parseInt(userInfo[0]) + 1;
  ((homeDelay = 100),
    $('#eForm1').val(userInfo[19]),
    $('#eForm2').val(userEmail),
    $('#eForm3').val(lessonLanguage),
    $('#eForm4').val(a),
    -1 != osType.indexOf('droid') && $('#startCover').show(),
    $('#likeNo').on('click', function () {
      ($('#emailForm h4').text(
        'Hello' +
          r +
          '. We really strive to make all our users happy. Please let us know what we could improve in the message box below. We will get back to you and address your concerns one by one. Thank you for giving us the chance to make this right.',
      ),
        $('#emailForm').show(),
        $('#startCover').hide(),
        $('#like').hide());
    }),
    $('#likeMay').on('click', function () {
      ($('#emailForm h4').text(
        "We're glad to hear you like it" +
          r +
          '! We are always gathering user comments and suggestions and we are always looking for ways to improve! Please let us know how we can make it even better! We will get back to you.',
      ),
        $('#emailForm').show(),
        $('#startCover').hide(),
        $('#like').hide());
    }),
    $('#likeYes').on('click', function () {
      ($('#review').show(), $('#like').hide());
    }),
    $('#revTrustpilot').on('click', function () {
      (openLink('https://www.trustpilot.com/evaluate/www.ouinolanguages.com'),
        setTimeout(function () {
          ($('#review').hide(), homeMenu());
        }, 1e3));
    }),
    $('#emailForm form').submit(function (e) {
      (e.preventDefault(),
        $('#emailForm form').hide(),
        $('#thanks').show(),
        setTimeout(function () {
          ($('#emailForm').fadeOut(), homeMenu());
        }, 2e3),
        $.ajax({
          url: 'https://www.eliseunogueira.com.br/php/prompt.php',
          type: 'post',
          data: $('#emailForm form').serialize(),
        }));
    }));
  var r = '';
  (-1 != userInfo[19].indexOf(' ') &&
    (r = ' ' + (r = userInfo[19].split(' '))[0]),
    5 != a || sessionStorage.OFFLINEWARNING
      ? 13 != a || sessionStorage.OFFLINEWARNING
        ? 50 != a || sessionStorage.OFFLINEWARNING
          ? 100 != a || sessionStorage.OFFLINEWARNING
            ? 2 == a
              ? ($('body').append(
                  '<div class="tipCont"><img src="common/tips2.png" class="tipImages"></div>',
                ),
                $('#startCover').hide(),
                $('.tipCont').on('click', function () {
                  if (-1 != loghref.indexOf('/init')) {
                    if ($('#sprompt').is(':visible'))
                      return void $('.tipCont').hide();
                    ($('.tipCont, #background').hide(),
                      $('#loadLogo').show(),
                      homeMenu());
                  } else
                    ($('.tipCont').fadeOut(500),
                      setTimeout(function () {
                        ($('.tipCont').remove(), homeMenu());
                      }, 500));
                }))
              : 3 == a
                ? ($('body').append(
                    '<div class="tipCont"><img src="common/tips3.png" class="tipImages"></div>',
                  ),
                  $('#startCover').hide(),
                  $('.tipCont').on('click', function () {
                    if (-1 != loghref.indexOf('/init')) {
                      if ($('#sprompt').is(':visible'))
                        return void $('.tipCont').hide();
                      ($('.tipCont, #background').hide(),
                        $('#loadLogo').show(),
                        homeMenu());
                    } else
                      ($('.tipCont').fadeOut(500),
                        setTimeout(function () {
                          ($('.tipCont').remove(), homeMenu());
                        }, 500));
                  }))
                : 4 == a
                  ? ($('body').append(
                      '<div class="tipCont"><img src="common/tips4.png" class="tipImages"></div>',
                    ),
                    $('#startCover').hide(),
                    $('.tipCont').on('click', function () {
                      if (-1 != loghref.indexOf('/init')) {
                        if ($('#sprompt').is(':visible'))
                          return void $('.tipCont').hide();
                        ($('.tipCont, #background').hide(),
                          $('#loadLogo').show(),
                          homeMenu());
                      } else
                        ($('.tipCont').fadeOut(500),
                          setTimeout(function () {
                            ($('.tipCont').remove(), homeMenu());
                          }, 500));
                    }))
                  : 6 == a
                    ? ($('body').append(
                        '<div class="tipCont"><img src="common/tips6.png" class="tipImages"></div>',
                      ),
                      $('#startCover').hide(),
                      $('.tipCont').on('click', function () {
                        if (-1 != loghref.indexOf('/init')) {
                          if ($('#sprompt').is(':visible'))
                            return void $('.tipCont').hide();
                          ($('.tipCont, #background').hide(),
                            $('#loadLogo').show(),
                            homeMenu());
                        } else
                          ($('.tipCont').fadeOut(500),
                            setTimeout(function () {
                              ($('.tipCont').remove(), homeMenu());
                            }, 500));
                      }))
                    : 7 == a
                      ? ($('body').append(
                          '<div class="tipCont"><img src="common/tips7.png" class="tipImages"></div>',
                        ),
                        $('#startCover').hide(),
                        $('.tipCont').on('click', function () {
                          if (-1 != loghref.indexOf('/init')) {
                            if ($('#sprompt').is(':visible'))
                              return void $('.tipCont').hide();
                            ($('.tipCont, #background').hide(),
                              $('#loadLogo').show(),
                              homeMenu());
                          } else
                            ($('.tipCont').fadeOut(500),
                              setTimeout(function () {
                                ($('.tipCont').remove(), homeMenu());
                              }, 500));
                        }))
                      : 8 == a
                        ? ($('body').append(
                            '<div class="tipCont"><img src="common/tips8.png" class="tipImages"></div>',
                          ),
                          $('#startCover').hide(),
                          $('.tipCont').on('click', function () {
                            if (-1 != loghref.indexOf('/init')) {
                              if ($('#sprompt').is(':visible'))
                                return void $('.tipCont').hide();
                              ($('.tipCont, #background').hide(),
                                $('#loadLogo').show(),
                                homeMenu());
                            } else
                              ($('.tipCont').fadeOut(500),
                                setTimeout(function () {
                                  ($('.tipCont').remove(), homeMenu());
                                }, 500));
                          }))
                        : 9 == a
                          ? ($('body').append(
                              '<div class="tipCont"><img src="common/tips9.png" class="tipImages"></div>',
                            ),
                            $('#startCover').hide(),
                            $('.tipCont').on('click', function () {
                              if (-1 != loghref.indexOf('/init')) {
                                if ($('#sprompt').is(':visible'))
                                  return void $('.tipCont').hide();
                                ($('.tipCont, #background').hide(),
                                  $('#loadLogo').show(),
                                  homeMenu());
                              } else
                                ($('.tipCont').fadeOut(500),
                                  setTimeout(function () {
                                    ($('.tipCont').remove(), homeMenu());
                                  }, 500));
                            }))
                          : 10 == a &&
                            ($('body').append(
                              '<div class="tipCont"><img src="common/tips10.png" class="tipImages"></div>',
                            ),
                            $('#startCover').hide(),
                            $('.tipCont').on('click', function () {
                              if (-1 != loghref.indexOf('/init')) {
                                if ($('#sprompt').is(':visible'))
                                  return void $('.tipCont').hide();
                                ($('.tipCont, #background').hide(),
                                  $('#loadLogo').show(),
                                  homeMenu());
                              } else
                                ($('.tipCont').fadeOut(500),
                                  setTimeout(function () {
                                    ($('.tipCont').remove(), homeMenu());
                                  }, 500));
                            }))
            : ($('#emailForm h4').text(
                'Awesome' +
                  r +
                  "! You've used the program 100 times! You must be getting pretty good! :) We would love to hear what you think so far! Send us a message. We will get back to you.",
              ),
              $('#emailForm').show(),
              $('#startCover').hide())
          : ($('#emailForm h4').text(
              'Very nice' +
                r +
                "! You've used the program 50 times! You're on the right track! We would love to hear what you think so far! Send us a message. We will get back to you.",
            ),
            $('#emailForm').show(),
            $('#startCover').hide())
        : ($('#likeIn b').text(
            'Hello' + r + '! How do you like the program so far?',
          ),
          $('#reviewIn b').text(
            "That's awesome" +
              r +
              "! If you are enjoying the program, we have a huge favor to ask you. It would mean the world to us if you could take a few minutes to write a review. We are a small family of language lovers and most of our success depends on positive reviews. Posting a review on Trustpilot would be amazingly helpful! We know it's a lot to ask, but it would really help us out. Thank you so much!",
          ),
          $('#like').show(),
          $('#startCover').hide())
      : ($('#emailForm h4').text(
          'Hello' +
            r +
            '! Just to let you know that we are here to help. Did you have any questions? Send us a message. We will get back to you.',
        ),
        $('#emailForm').show(),
        $('#startCover').hide()),
    $('#like').on('click', function (e) {
      e.target == this && ($('#like').hide(), homeMenu());
    }),
    $('#likeIn .closeForm').on('click', function () {
      ($('#like').hide(), homeMenu());
    }),
    $('#review').on('click', function (e) {
      e.target == this && ($('#review').hide(), homeMenu());
    }),
    $('#reviewIn .closeForm').on('click', function () {
      ($('#review').hide(), homeMenu());
    }));
  var l = localStorage.getItem(storeInfo + 'saved');
  l
    ? -1 != l.indexOf('index') &&
      ($('#sprompt').show(), $('#loadLogo, #startCover').hide())
    : 0 == $('.tipCont').length &&
      $('#emailForm').is(':hidden') &&
      $('#like').is(':hidden') &&
      ($('#startCover').is(':visible') && $('#loadLogo').hide(),
      setTimeout(function () {
        ((homeDelay = 1500), homeMenu());
      }, 100));
}
function deviceInfo() {
  if (null !== localStorage.getItem(storeInfo + 'deviceSTORE')) {
    var e = localStorage.getItem(storeInfo + 'deviceSTORE'),
      o = screen.height + 'x' + screen.width;
    if ('iOS' == osType || -1 != osType.indexOf('droid')) {
      var t = device.uuid;
      if (localStorage.getItem(storeInfo + 'deviceID') != t) {
        localStorage.setItem(storeInfo + 'deviceID', t);
        var s = e.split(' / '),
          n = osType + o + ': (' + t + ')';
        (s.push(n), s.sort(), '' == (s = unique(s))[0] && s.shift());
        var i = s.length;
        ((s = unique(s).join(' / ')),
          (infoToUpdate = i),
          (fieldToUpdate = 'deviceNum'),
          updateGroup(),
          (infoToUpdate = s),
          (fieldToUpdate = 'deviceIDs'),
          updateGroup());
      }
    } else if ('mac' == osType || 'pwa' == osType)
      loadScript('fingerprint2.js', function () {
        new Fingerprint2().get(function (t, s) {
          var n = t;
          if (localStorage.getItem(storeInfo + 'deviceID') != n) {
            localStorage.setItem(storeInfo + 'deviceID', n);
            var i = e.split(' / '),
              a = osType + o + ': (' + n + ')';
            (i.push(a), i.sort(), '' == (i = unique(i))[0] && i.shift());
            var r = i.length;
            ((i = unique(i).join(' / ')),
              (infoToUpdate = r),
              (fieldToUpdate = 'deviceNum'),
              updateGroup(),
              (infoToUpdate = i),
              (fieldToUpdate = 'deviceIDs'),
              updateGroup());
          }
        });
      });
    else if ('windows' == osType) {
      var a;
      try {
        a = require('getmac');
      } catch (e) {
        return void console.error('Error: getmac module is not installed.');
      }
      a.getMac(function (t, s) {
        if (t) throw t;
        var n = s;
        if (localStorage.getItem(storeInfo + 'deviceID') !== n) {
          localStorage.setItem(storeInfo + 'deviceID', n);
          var i = e.split(' / '),
            a = osType + o + ': (' + n + ')';
          (i.push(a), i.sort(), '' === (i = unique(i))[0] && i.shift());
          var r = i.length;
          ((i = unique(i).join(' / ')),
            (infoToUpdate = r),
            (fieldToUpdate = 'deviceNum'),
            updateGroup(),
            (infoToUpdate = i),
            (fieldToUpdate = 'deviceIDs'),
            updateGroup());
        }
      });
    }
  }
}
function initUpdateTOdb() {
  var e,
    o,
    t,
    s = userInfo[0].split(':'),
    n = userInfo[5].split(':'),
    a = userInfo[6].split(':'),
    r = userInfo[8].split(':'),
    l = userInfo[9].split(':'),
    c = userInfo[11].split(':'),
    u = userInfo[12].split(':'),
    d = userInfo[14].split(':'),
    m = userInfo[15].split(':'),
    p = userInfo[16].split(':'),
    g = userInfo[23],
    f = userInfo[24].split(':'),
    v = [],
    h = [];
  for (
    localStorage.removeItem(storeInfo + 'wasOfflineSTORE'),
      infoToUpdate = parseInt(localStorage[storeInfo + 'numUseSTORE']) + 1,
      t = parseInt(s),
      infoToUpdate >= t &&
        ((infoToUpdate = infoToUpdate.toString()),
        (fieldToUpdate = 'userUse'),
        updateDatabase()),
      infoToUpdate =
        localStorage[storeInfo + 'musicSTOREvocab'] +
        ':' +
        localStorage[storeInfo + 'playbackSTOREvocab'] +
        ':' +
        localStorage[storeInfo + 'intervalSTOREvocab'] +
        ':' +
        localStorage[storeInfo + 'textSTOREvocab'],
      fieldToUpdate = 'vocabOptions',
      setTimeout(updateDatabase, 100),
      t = n,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'starSTOREvocab']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    parseInt(infoToUpdate[i]) >= parseInt(t[i])
      ? v.push(infoToUpdate[i])
      : v.push(t[i]);
  for (
    infoToUpdate = v.join(':'),
      localStorage[storeInfo + 'starSTOREvocab'] = infoToUpdate,
      fieldToUpdate = 'vocabStars',
      setTimeout(updateDatabase, 200),
      t = a,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'scoreSTOREvocab']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    if (-1 != infoToUpdate[i].indexOf('|') && -1 == t[i].indexOf('|'))
      v.push(infoToUpdate[i]);
    else if (-1 == infoToUpdate[i].indexOf('|') && -1 != t[i].indexOf('|'))
      v.push(t[i]);
    else if (-1 == infoToUpdate[i].indexOf('|') && -1 == t[i].indexOf('|'))
      v.push(infoToUpdate[i]);
    else if (-1 != infoToUpdate[i].indexOf('|') && -1 != t[i].indexOf('|')) {
      for (
        o = t[i].split('|'), e = infoToUpdate[i].split('|'), h = [], xx = 0;
        xx < e.length;
        xx++
      )
        parseInt(e[xx]) >= parseInt(o[xx]) ? h.push(e[xx]) : h.push(o[xx]);
      v.push(h.join('|'));
    }
  for (
    infoToUpdate = v.join(':'),
      localStorage[storeInfo + 'scoreSTOREvocab'] = infoToUpdate,
      fieldToUpdate = 'vocabScores',
      setTimeout(updateDatabase, 300),
      infoToUpdate =
        localStorage[storeInfo + 'musicSTOREconvo'] +
        ':' +
        localStorage[storeInfo + 'playbackSTOREconvo'] +
        ':' +
        localStorage[storeInfo + 'intervalSTOREconvo'] +
        ':' +
        localStorage[storeInfo + 'textSTOREconvo'],
      fieldToUpdate = 'convoOptions',
      setTimeout(updateDatabase, 400),
      t = r,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'starSTOREconvo']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    parseInt(infoToUpdate[i]) >= parseInt(t[i])
      ? v.push(infoToUpdate[i])
      : v.push(t[i]);
  for (
    infoToUpdate = v.join(':'),
      localStorage[storeInfo + 'starSTOREconvo'] = infoToUpdate,
      fieldToUpdate = 'convoStars',
      setTimeout(updateDatabase, 500),
      t = l,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'scoreSTOREconvo']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    if (-1 != infoToUpdate[i].indexOf('|') && -1 == t[i].indexOf('|'))
      v.push(infoToUpdate[i]);
    else if (-1 == infoToUpdate[i].indexOf('|') && -1 != t[i].indexOf('|'))
      v.push(t[i]);
    else if (-1 == infoToUpdate[i].indexOf('|') && -1 == t[i].indexOf('|'))
      v.push(infoToUpdate[i]);
    else if (-1 != infoToUpdate[i].indexOf('|') && -1 != t[i].indexOf('|')) {
      for (
        o = t[i].split('|'), e = infoToUpdate[i].split('|'), h = [], xx = 0;
        xx < e.length;
        xx++
      )
        parseInt(e[xx]) >= parseInt(o[xx]) ? h.push(e[xx]) : h.push(o[xx]);
      v.push(h.join('|'));
    }
  for (
    infoToUpdate = v.join(':'),
      localStorage[storeInfo + 'scoreSTOREconvo'] = infoToUpdate,
      fieldToUpdate = 'convoScores',
      setTimeout(updateDatabase, 600),
      infoToUpdate =
        localStorage[storeInfo + 'musicSTOREverb'] +
        ':' +
        localStorage[storeInfo + 'playbackSTOREverb'] +
        ':' +
        localStorage[storeInfo + 'intervalSTOREverb'] +
        ':' +
        localStorage[storeInfo + 'textSTOREverb'],
      fieldToUpdate = 'verbOptions',
      setTimeout(updateDatabase, 700),
      t = c,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'starSTOREverb']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    parseInt(infoToUpdate[i]) >= parseInt(t[i])
      ? v.push(infoToUpdate[i])
      : v.push(t[i]);
  for (
    infoToUpdate = v.join(':'),
      localStorage[storeInfo + 'starSTOREverb'] = infoToUpdate,
      fieldToUpdate = 'verbStars',
      setTimeout(updateDatabase, 800),
      t = u,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'scoreSTOREverb']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    if (-1 != infoToUpdate[i].indexOf('|') && -1 == t[i].indexOf('|'))
      v.push(infoToUpdate[i]);
    else if (-1 == infoToUpdate[i].indexOf('|') && -1 != t[i].indexOf('|'))
      v.push(t[i]);
    else if (-1 == infoToUpdate[i].indexOf('|') && -1 == t[i].indexOf('|'))
      v.push(infoToUpdate[i]);
    else if (-1 != infoToUpdate[i].indexOf('|') && -1 != t[i].indexOf('|')) {
      for (
        o = t[i].split('|'), e = infoToUpdate[i].split('|'), h = [], xx = 0;
        xx < e.length;
        xx++
      )
        parseInt(e[xx]) >= parseInt(o[xx]) ? h.push(e[xx]) : h.push(o[xx]);
      v.push(h.join('|'));
    }
  for (
    infoToUpdate = v.join(':'),
      localStorage[storeInfo + 'scoreSTOREverb'] = infoToUpdate,
      fieldToUpdate = 'verbScores',
      setTimeout(updateDatabase, 900),
      infoToUpdate =
        localStorage[storeInfo + 'musicSTOREblock'] +
        ':' +
        localStorage[storeInfo + 'playbackSTOREblock'] +
        ':' +
        localStorage[storeInfo + 'intervalSTOREblock'] +
        ':' +
        localStorage[storeInfo + 'textSTOREblock'],
      fieldToUpdate = 'blockOptions',
      setTimeout(updateDatabase, 1e3),
      t = d,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'starSTOREblock']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    parseInt(infoToUpdate[i]) >= parseInt(t[i])
      ? v.push(infoToUpdate[i])
      : v.push(t[i]);
  for (
    infoToUpdate = v.join(':'),
      localStorage[storeInfo + 'starSTOREblock'] = infoToUpdate,
      fieldToUpdate = 'blockStars',
      setTimeout(updateDatabase, 1100),
      t = m,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'scoreSTOREblock']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    if (-1 != infoToUpdate[i].indexOf('|') && -1 == t[i].indexOf('|'))
      v.push(infoToUpdate[i]);
    else if (-1 == infoToUpdate[i].indexOf('|') && -1 != t[i].indexOf('|'))
      v.push(t[i]);
    else if (-1 == infoToUpdate[i].indexOf('|') && -1 == t[i].indexOf('|'))
      v.push(infoToUpdate[i]);
    else if (-1 != infoToUpdate[i].indexOf('|') && -1 != t[i].indexOf('|')) {
      for (
        o = t[i].split('|'), e = infoToUpdate[i].split('|'), h = [], xx = 0;
        xx < e.length;
        xx++
      )
        parseInt(e[xx]) >= parseInt(o[xx]) ? h.push(e[xx]) : h.push(o[xx]);
      v.push(h.join('|'));
    }
  for (
    infoToUpdate = v.join(':'),
      localStorage[storeInfo + 'scoreSTOREblock'] = infoToUpdate,
      fieldToUpdate = 'blockScores',
      setTimeout(updateDatabase, 1200),
      t = p,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'starSTOREpronun']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    parseInt(infoToUpdate[i]) >= parseInt(t[i])
      ? v.push(infoToUpdate[i])
      : v.push(t[i]);
  if (
    ((infoToUpdate = v.join(':')),
    (localStorage[storeInfo + 'starSTOREpronun'] = infoToUpdate),
    (fieldToUpdate = 'pronunStars'),
    setTimeout(updateDatabase, 1300),
    -1 != (infoToUpdate = localStorage[storeInfo + 'goalsSTORE']).indexOf(':'))
  ) {
    var $;
    for (
      -1 == (t = g).indexOf(':') && (t = infoToUpdate),
        infoToUpdate = infoToUpdate.split(':'),
        t = t.split(':'),
        v = infoToUpdate,
        $ = 0;
      $ < t.length;
      $++
    ) {
      if (-1 == v.indexOf(t[$])) for (yy = 0; yy < 7; yy++) v.push(t[$ + yy]);
      $ += 6;
    }
    ((infoToUpdate = v.join(':')),
      (localStorage[storeInfo + 'goalsSTORE'] = infoToUpdate),
      (fieldToUpdate = 'goals'),
      setTimeout(updateDatabase, 1400));
  }
  for (
    t = f,
      v = [],
      infoToUpdate = (infoToUpdate =
        localStorage[storeInfo + 'extraScoresSTORE']).split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  )
    parseInt(infoToUpdate[i]) >= parseInt(t[i])
      ? v.push(infoToUpdate[i])
      : v.push(t[i]);
  for (
    infoToUpdate = v.join(':'),
      localStorage[storeInfo + 'extraScoresSTORE'] = infoToUpdate,
      fieldToUpdate = 'extraScores',
      setTimeout(updateDatabase, 1500),
      infoToUpdate = localStorage[storeInfo + 'cardsSTORE'],
      t = userInfo[26].split(':'),
      v = [],
      infoToUpdate = infoToUpdate.split(':'),
      i = 0;
    i < infoToUpdate.length;
    i++
  ) {
    var b = infoToUpdate[i].split('|');
    (4 == b.length && b.pop(), (b = b.join('|')));
    var I = !1;
    for (xx = 0; xx < t.length; xx++) -1 != t[xx].indexOf(b) && (I = !0);
    I || v.push(infoToUpdate[i]);
  }
  ((v = v.concat(t)),
    (infoToUpdate = v.join(':')),
    (localStorage[storeInfo + 'cardsSTORE'] = infoToUpdate),
    (fieldToUpdate = 'cards'),
    setTimeout(updateDatabase, 1600),
    setTimeout(homeMenu, 2600));
}
function addRegisterData() {
  ($('#activationField').val(''),
    $('#nameFieldSet').val(''),
    $('#emailFieldSet').val(''),
    $('#emailFieldSet2').val(''),
    $('#jguyr4Set').val(''),
    $('#jguyr4Set2').val(''),
    (registerLoaded = 'true'),
    'mobile' == currentDevice
      ? ($('#doneLogInBtn').on('click', function () {
          (disableTouch(),
            $('#loginCover').hide(),
            $('#loadLogo').fadeOut(),
            $('#registerCover').hide(),
            $('#warningBox').hide(),
            databaseInit());
        }),
        $('.hidePasswordBtn2').on('click', function () {
          (disableTouch(),
            $('.allForms').hide(),
            $('#accountCreateText').removeClass('loginTitleHover'),
            $('#accountCreateText').text('Create your login information.'),
            $('#activationText').removeClass('loginTitleHover'),
            $('#activationText').text('Enter your activation key.'),
            $('#registerForm').show());
        }))
      : ($('#doneLogInBtn').on('click', function () {
          ($('#loginCover').hide(),
            $('#loadLogo').fadeOut(),
            $('#registerCover').hide(),
            $('#warningBox').hide(),
            databaseInit());
        }),
        $('.hidePasswordBtn2').on('click', function () {
          ($('.allForms').hide(),
            $('#activationText').removeClass('loginTitleHover'),
            $('#activationText').text('Enter your activation key.'),
            $('#registerForm').show());
        })),
    $('#activationField').focus(function () {
      ($('#activationText').removeClass('loginTitleHover'),
        $('#activationText').text('Enter your activation key.'));
    }),
    $(
      '#jguyr4Set, #jguyr4Set2, #emailFieldSet, #emailFieldSet2, #nameFieldSet',
    ).focus(function () {
      ($('#activationText').removeClass('loginTitleHover'),
        $('#activationText').text('Enter your activation key.'),
        $('#accountCreateText').removeClass('loginTitleHover'),
        $('#accountCreateText').text('Create your login information.'));
    }),
    $('#registerForm').submit(function (e) {
      (e.preventDefault(),
        (userActivation = $('#activationField').val().split(' ').join('')),
        (userName = $('#nameFieldSet').val()),
        (userEmail = $('#emailFieldSet').val().split(' ').join('')),
        (storeInfo = langShort + userEmail),
        (userEmailVerify = $('#emailFieldSet2').val().split(' ').join('')),
        (tuvm58dj = yifzq67($('#jguyr4Set').val().split(' ').join(''))),
        (tuvm58djVerify = yifzq67($('#jguyr4Set2').val().split(' ').join(''))),
        tuvm58dj == tuvm58djVerify &&
        userEmail == userEmailVerify &&
        '' != userName &&
        '' != userEmail &&
        '' != tuvm58dj
          ? ($('#activationText').text('Looking on server, please wait...'),
            setTimeout(registerInit, 50))
          : userEmail != userEmailVerify
            ? ($('#activationText').removeClass('loginTitleHover'),
              $('#activationText').text('Enter your activation key.'),
              $('#accountCreateText').addClass('loginTitleHover'),
              $('#accountCreateText').text("Error: Emails don't match."))
            : tuvm58dj != tuvm58djVerify
              ? ($('#activationText').removeClass('loginTitleHover'),
                $('#activationText').text('Enter your activation key.'),
                $('#accountCreateText').addClass('loginTitleHover'),
                $('#accountCreateText').text("Error: Passwords don't match."))
              : ($('#activationText').removeClass('loginTitleHover'),
                $('#activationText').text('Enter your activation key.'),
                $('#accountCreateText').addClass('loginTitleHover'),
                $('#accountCreateText').text('Error: All fields required.')));
    }));
}
function addPasswordData() {
  ((passwordLoaded = 'true'),
    $(
      '#resetCodeField, #emailFieldReset,#jguyr4Reset, #jguyr4Reset2, #resetCodeField',
    ).focus(function () {
      ($('#passwordTitle2, #passwordTitle').removeClass('loginTitleHover'),
        $('#passwordTitle2, #passwordTitle').text('Account Password Reset'));
    }),
    $('#emailFieldReset').val(''),
    $('#resetCodeField').val(''),
    $('#jguyr4Reset').val(''),
    $('#jguyr4Reset2').val(''),
    'mobile' == currentDevice
      ? ($('.hidePasswordBtn').on('click', function () {
          (disableTouch(), $('.allForms').hide(), $('#loginForm').show());
        }),
        $('#passwordSkipBtn').on('click', function () {
          (disableTouch(),
            $('#passwordTitle').text('Account Password Reset'),
            $('.allForms').hide(),
            $('#passwordForm2').show());
        }))
      : ($('.hidePasswordBtn').on('click', function () {
          ($('.allForms').hide(), $('#loginForm').show());
        }),
        $('#passwordSkipBtn').on('click', function () {
          ($('.allForms').hide(),
            $('#passwordTitle').text('Account Password Reset'),
            $('#passwordForm2').show());
        })),
    $('#passwordForm').submit(function (e) {
      (e.preventDefault(),
        (userEmail2 = $('#emailFieldReset').val().split(' ').join('')),
        (localStorage.userEmail2 = userEmail2),
        $('#passwordTitle2').text('Looking on server, please wait...'),
        setTimeout(sendResetCode, 50));
    }),
    $('#passwordForm2').submit(function (e) {
      (e.preventDefault(),
        (tuvm58dj2 = yifzq67($('#jguyr4Reset').val().split(' ').join(''))),
        (tuvm58dj2Verify = yifzq67(
          $('#jguyr4Reset2').val().split(' ').join(''),
        )),
        (resetCode = $('#resetCodeField').val().split(' ').join('')),
        tuvm58dj2 == tuvm58dj2Verify
          ? ($('#passwordTitle').text('Looking on server, please wait...'),
            setTimeout(resetPassword, 50))
          : ($('#passwordTitle').addClass('loginTitleHover'),
            $('#passwordTitle').text("Error: Passwords don't match.")));
    }));
}
function sendResetCode() {
  var e = new XMLHttpRequest(),
    o = setTimeout(function () {
      navigator.onLine
        ? (e.abort(),
          $('#passwordTitle2').text('Email Sent! Please check your messages.'),
          setTimeout(function () {
            ($('.allForms').hide(), $('#loginForm').show());
          }, 6e3))
        : (e.abort(),
          $('#passwordTitle2').addClass('loginTitleHover'),
          $('#passwordTitle2').text('OFFLINE: Internet required'));
    }, 6e3),
    t = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + QjSKe + '2' + cWbBT,
    s = 'email=' + userEmail2;
  (e.open('POST', t, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        if ('pwa' == osType && -1 != e.responseURL.indexOf('offline'))
          return (
            $('#passwordTitle2').addClass('loginTitleHover'),
            void $('#passwordTitle2').text('OFFLINE: Internet required')
          );
        (clearTimeout(o),
          0 != e.responseText.split(',')[0]
            ? ($('#passwordTitle2').text(
                'Email Sent! Please check your messages.',
              ),
              setTimeout(function () {
                ($('.allForms').hide(), $('#loginForm').show());
              }, 6e3))
            : ($('#passwordTitle2').addClass('loginTitleHover'),
              $('#passwordTitle2').text(
                'ERROR: Ouino ' + lessonLanguage + ' Account not found.',
              )));
      }
    }));
  try {
    e.send(s);
  } catch (e) {
    ($('#passwordTitle2').addClass('loginTitleHover'),
      $('#passwordTitle2').text('OFFLINE: Internet required'));
  }
}
function resetPassword() {
  if (null == (userEmail2 = localStorage.userEmail2))
    return (
      $('#passwordTitle').addClass('loginTitleHover'),
      void $('#passwordTitle').text(
        'ERROR: Reset code not valid on this computer.',
      )
    );
  var e = new XMLHttpRequest(),
    o = setTimeout(function () {
      navigator.onLine
        ? (e.abort(), $('.allForms').hide(), $('#warningBox2').show())
        : (e.abort(),
          $('#passwordTitle').addClass('loginTitleHover'),
          $('#passwordTitle').text('OFFLINE: Internet required'));
    }, 6e3),
    t = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + MJhei + cWbBT,
    s =
      'resetCode=' +
      resetCode +
      '&password=' +
      tuvm58dj2 +
      userEmail2.substring(1, 3) +
      '&email=' +
      userEmail2;
  (e.open('POST', t, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        if ('pwa' == osType && -1 != e.responseURL.indexOf('offline'))
          return (
            $('#passwordTitle').addClass('loginTitleHover'),
            void $('#passwordTitle').text('OFFLINE: Internet required')
          );
        (clearTimeout(o),
          0 != e.responseText.split(',')[0]
            ? ($('.allForms').hide(), $('#warningBox2').show())
            : ($('#passwordTitle').addClass('loginTitleHover'),
              $('#passwordTitle').text('ERROR: Code not found.')));
      }
    }));
  try {
    e.send(s);
  } catch (e) {
    ($('#passwordTitle').addClass('loginTitleHover'),
      $('#passwordTitle').text('OFFLINE: Internet required'));
  }
}
function registerInit() {
  ($('#rememberCheck, #rememberCheck2').attr('src', 'common/checkOff.svg'),
    localStorage.removeItem('STAYLOGGEDIN'));
  var e = new XMLHttpRequest(),
    o = setTimeout(function () {
      navigator.onLine
        ? (e.abort(),
          'common/checkOn.svg' == $('#rememberCheck').attr('src') &&
            $('#rememberCheck2').attr('src', 'common/checkOn.svg'),
          $('.messageTitle').html(
            '<img class="messageCheck" src="common/success.svg">Account Created!',
          ),
          $('#accountsLeft').text('Thank you for creating your account.'),
          $('#accountsText').html(
            'Your&nbsp;account&nbsp;was&nbsp;created&nbsp;successfully<br>and&nbsp;a&nbsp;confirmation&nbsp;email&nbsp;was&nbsp;sent&nbsp;to<br>"' +
              userEmail +
              '".',
          ),
          $('.allForms').hide(),
          $('#warningBox').show())
        : (e.abort(),
          $('#activationText, #accountCreateText').addClass('loginTitleHover'),
          $('#activationText, #accountCreateText').text(
            'OFFLINE: Internet required',
          ));
    }, 6e3),
    t = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + PbWjZ + cWbBT,
    s =
      'activation=' +
      userActivation +
      '&name=' +
      userName +
      '&email=' +
      userEmail +
      '&password=' +
      tuvm58dj +
      userEmail.substring(1, 3);
  (e.open('POST', t, !0),
    e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
    (e.onreadystatechange = function () {
      if (4 == e.readyState && 200 == e.status) {
        if ('pwa' == osType && -1 != e.responseURL.indexOf('offline'))
          return (
            $('#activationText').addClass('loginTitleHover'),
            void $('#activationText').text('OFFLINE: Internet required')
          );
        clearTimeout(o);
        var t = e.responseText.split(',');
        'ACCOUNT NOT CREATED' == t[1]
          ? ($('#activationText').addClass('loginTitleHover'),
            $('#activationText').text('Activation Key not Found.'))
          : 'ACCOUNT EXISTS' == t[1]
            ? ($('#accountCreateText').addClass('loginTitleHover'),
              $('#accountCreateText').text(
                'Account Already Exists. Simply Log in.',
              ),
              $('#activationText').removeClass('loginTitleHover'),
              $('#activationText').text('Enter your activation key.'))
            : 'NO ACCOUNTS LEFT' == t[1]
              ? ($('#loginRemember2').hide(),
                $('.messageTitle').html(
                  '<img class="messageCheck" src="common/fail.svg">Failed Creation...',
                ),
                $('#accountsLeft').text('No account creations remaining.'),
                $('#accountsText').html(
                  'Unfortunately,&nbsp;you&nbsp;do&nbsp;not&nbsp;have&nbsp;any&nbsp;account creations&nbsp;left&nbsp;with&nbsp;your&nbsp;matching&nbsp;activation&nbsp;key, please&nbsp;contact&nbsp;us&nbsp;to&nbsp;upgrade&nbsp;your&nbsp;license.',
                ),
                $('#doneLogInBtn').hide(),
                $('.allForms').hide(),
                $('#warningBox').show())
              : ('common/checkOn.svg' == $('#rememberCheck').attr('src') &&
                  $('#rememberCheck2').attr('src', 'common/checkOn.svg'),
                $('.messageTitle').html(
                  '<img class="messageCheck" src="common/success.svg">Account Created!',
                ),
                $('#accountsLeft').text('Thank you for creating your account.'),
                $('#accountsText').html(
                  'Your&nbsp;account&nbsp;was&nbsp;created&nbsp;successfully<br>and&nbsp;a&nbsp;confirmation&nbsp;email&nbsp;was&nbsp;sent&nbsp;to<br>"' +
                    userEmail +
                    '".',
                ),
                $('.allForms').hide(),
                $('#warningBox').show());
      }
    }));
  try {
    e.send(s);
  } catch (e) {
    ($('#activationText').addClass('loginTitleHover'),
      $('#activationText').text('OFFLINE: Internet required'));
  }
}
function loadLogIn() {
  if (
    (0 != $('#loginCover').length && $('#loginCover').remove(),
    $('body').append(loginAppend),
    'mac' == osType || 'windows' == osType)
  ) {
    var e;
    ($('#usersCont2').append(
      "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
    ),
      $('.adminWarn1').show(),
      $('#loginCenter').append(
        '<div id="context-menu" class="context-menu"><button id="cut">Cut</button><button id="copy">Copy</button><button id="paste">Paste</button></div>',
      ),
      $('input').on('contextmenu', function (o) {
        ((e = '#' + o.target.id),
          isLongPress ||
            'touchend' === o.type ||
            ($('#context-menu').show(), o.preventDefault()));
      }),
      $('input')
        .on('touchstart', function (o) {
          ((e = '#' + o.target.id),
            (isLongPress = !1),
            (longPressTimer = setTimeout(function () {
              ((isLongPress = !0), $('#context-menu').show());
            }, 1e3)));
        })
        .on('touchmove', function () {
          clearTimeout(longPressTimer);
        })
        .on(
          'touchend',
          function (e) {
            (clearTimeout(longPressTimer), isLongPress && e.preventDefault());
          },
          { passive: !1 },
        ),
      $(document).on('click', function () {
        $('#context-menu').hide();
      }),
      $('#cut').on('click', function () {
        (document.execCommand('cut'), $('#context-menu').hide());
      }),
      $('#copy').on('click', function () {
        (document.execCommand('copy'), $('#context-menu').hide());
      }),
      $('#paste').on('click', function () {
        (!(async function () {
          try {
            if (!document.execCommand('paste'))
              throw new Error('document.execCommand("paste") failed');
          } catch (t) {
            try {
              var o = await navigator.clipboard.readText();
              $(e).val(o);
            } catch (e) {
              console.error(e);
            }
          }
        })(),
          $('#context-menu').hide());
      }));
  }
  ($('#loginTitle').text('Ouino ' + lessonLanguage + ' Account Login'),
    $('#titleTip').attr(
      'name',
      'If you have purchased the program but have not yet created your Ouino ' +
        lessonLanguage +
        ' account, please create your account before using this app. You can log in while offline, but you need to log in with an internet connection at least once.',
    ),
    $('#loginForm').submit(function (e) {
      (e.preventDefault(),
        (userEmail = $('#emailField').val().split(' ').join('')),
        (storeInfo = langShort + userEmail),
        (tuvm58dj = yifzq67($('#jguyr4').val().split(' ').join(''))),
        $('#loginTitle').text('Looking on server, please wait...'),
        setTimeout(databaseInit, 50));
    }),
    $('#jguyr4, #emailField').focus(function () {
      $('#loginTitle').hasClass('loginTitleHover') &&
        ($('#loginTitle').removeClass('loginTitleHover'),
        $('#loginTitle').text('Ouino ' + lessonLanguage + ' Account Login'));
    }),
    -1 != osType.indexOf('droid') &&
      ($('#jguyr4').on('focus', function () {
        (clearTimeout(blurOut),
          $('#loginCenter').hasClass('topMove') ||
            ($('#loginCenter').addClass('topMove'),
            $('#startCover').hide(),
            setTimeout(function () {
              ($('#emailField').focus(), $('#jguyr4').focus());
            }, 200)));
      }),
      $('#emailField').on('focus', function () {
        (clearTimeout(blurOut),
          $('#loginCenter').hasClass('topMove') ||
            ($('#loginCenter').addClass('topMove'),
            $('#startCover').hide(),
            setTimeout(function () {
              ($('#jguyr4').focus(), $('#emailField').focus());
            }, 200)));
      }),
      $('#emailFieldReset').on('focus', function () {
        (clearTimeout(blurOut),
          $('#loginCenter').hasClass('topMove') ||
            ($('#loginCenter').addClass('topMove'),
            $('#startCover').hide(),
            setTimeout(function () {
              ($('#jguyr4').focus(), $('#emailFieldReset').focus());
            }, 200)));
      }),
      $('#jguyr4, #emailField, #emailFieldReset').on('blur', function () {
        (clearTimeout(blurOut),
          (blurOut = setTimeout(function () {
            $('#loginCenter').removeClass('topMove');
          }, 300)));
      })),
    $('#loginRemember, #loginRemember2').on(
      'touchstart mousedown',
      function (e) {
        (e.preventDefault(), toggleRememberCheck());
      },
    ),
    'mobile' == currentDevice
      ? ($('#offlineRemember').on('click', toggleOfflineCheck),
        $('#offlineButton').on('click', function () {
          ($('#loginOffline').hide(),
            (homeDelay = 100),
            $('#loadLogo').show(),
            setTimeout(function () {
              homeMenu();
            }, 500));
        }),
        $('.tooltip').on('click', function () {
          $(this).toggleClass('tooltipHover');
        }),
        $('#loginTab1').on('click', function () {
          (disableTouch(),
            $('#loginTab2').removeClass('loginTabOn'),
            $('#loginTab1').addClass('loginTabOn'),
            $('.allForms').hide(),
            $('#registerForm').show(),
            'true' != registerLoaded && addRegisterData());
        }),
        $('#loginTab2').on('click', function () {
          (disableTouch(),
            $('#loginTab1').removeClass('loginTabOn'),
            $('#loginTab2').addClass('loginTabOn'),
            $('.allForms').hide(),
            $('#loginForm').show());
        }),
        $('#loginForgot').on('click', function () {
          (disableTouch(),
            $('#passwordTitle2').removeClass('loginTitleHover'),
            $('#passwordTitle2').text('Account Password Reset'),
            $('.allForms').hide(),
            $('#passwordForm').show(),
            'true' != passwordLoaded && addPasswordData());
        }))
      : ($('#offlineRemember').on('click', toggleOfflineCheck),
        $('#offlineButton').on('click', function () {
          ($('#loginOffline').hide(),
            (homeDelay = 100),
            $('#loadLogo').show(),
            setTimeout(function () {
              homeMenu();
            }, 500));
        }),
        $('.smallMedal').hover(function () {
          $(this).toggleClass('smallMedalHover');
        }),
        $('.tooltip').hover(function () {
          $(this).toggleClass('tooltipHover');
        }),
        $('#loginTab1').on('click', function () {
          ($('#loginTab2').removeClass('loginTabOn'),
            $('#loginTab1').addClass('loginTabOn'),
            $('.allForms').hide(),
            $('#registerForm').show(),
            'true' != registerLoaded && addRegisterData());
        }),
        $('#loginTab2').on('click', function () {
          ($('#loginTab1').removeClass('loginTabOn'),
            $('#loginTab2').addClass('loginTabOn'),
            $('.allForms').hide(),
            $('#loginForm').show());
        }),
        $('#loginForgot').on('click', function () {
          ($('.allForms').hide(),
            $('#passwordTitle2').removeClass('loginTitleHover'),
            $('#passwordTitle2').text('Account Password Reset'),
            $('#passwordForm').show(),
            'true' != passwordLoaded && addPasswordData());
        })));
}
function toggleUser() {
  ($('#redArrowImg').is(':visible') &&
    ($('#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn').removeClass(
      'disabled',
    ),
    $('#redArrowImg').hide()),
    0 == $('#userWrap').is(':visible')
      ? ($('#optionWrap').hide(), $('#userWrap').show())
      : $('#userWrap').hide());
}
function upgradeAccess() {
  openLink(
    'https://www.ouinolanguages.com/upgrade/' +
      lessonLanguage.toLowerCase() +
      '/',
  );
}
function toggleProgMenu() {
  0 == $('#userMenu2').is(':visible')
    ? ($('#optionWrap').hide(),
      $('#musicOnOff').hide(),
      $('.progMenus').css({ visibility: 'hidden' }),
      $('#tutorialMenu, #userMenu').css({ x: '200%' }),
      $('#userWrap, #tutorialMenu, #userMenu').hide(),
      $('#pMeter1').html(
        '<img class="progLogo" src="common/logoOuino1.png">' +
          $('#progMenu1').html(),
      ),
      $('#pMeter2').html(
        '<img class="progLogo" src="common/logoOuino2.png">' +
          $('#progMenu2').html(),
      ),
      $('#pMeter3').html(
        '<img class="progLogo" src="common/logoOuino3.png">' +
          $('#progMenu3').html(),
      ),
      $('#pMeter5').html(
        '<img class="progLogo" src="common/logoOuino5.png">' +
          $('#progMenu5').html(),
      ),
      $('#pMeter6').html(
        '<img class="progLogo" src="common/logoOuino6.png">' +
          $('#progMenu6').html(),
      ),
      $('#pMeter8').html(
        '<img class="progLogo" src="common/logoOuino8.png">' +
          $('#progMenu8').html(),
      ),
      $('#pMeter9').html(
        '<img class="progLogo" src="common/logoOuino9.png">' +
          $('#progMenu9').html(),
      ),
      $('#pMeter10').html(
        '<img class="progLogo" src="common/logoOuino10.png">' +
          $('#progMenu10').html(),
      ),
      $('#pMeter11').html(
        '<img class="progLogo" src="common/logoOuino5.png"><img class="progLogo" src="common/logoOuino6.png">' +
          $('#progMenu11').html(),
      ),
      $('#userMenu2').show(),
      $('#userMenu2').css({ x: '100%' }))
    : ($('#musicOnOff').show(),
      $('#userMenu2').css({ x: '200%' }),
      $('#userMenu2, #userWrap').hide(),
      $('.progMenus').css({ visibility: 'visible' }));
}
function toggleTutorial() {
  0 == $('#tutorialMenu').is(':visible')
    ? ($('.tutWrap').hide(),
      $('#optionWrap').hide(),
      $('#musicOnOff').hide(),
      $('#userMenu, #userMenu2').css({ x: '200%' }),
      $('#userWrap, #userMenu, #userMenu2').hide(),
      $('#tutorialMenu').show(),
      $('.ouinoContentB').hide(),
      $('#tutorialMenu').css({ x: '100%' }),
      $('html').innerWidth() < 600 || $('html').innerHeight() < 600
        ? ($('#tutVocab').attr('src', 'common/tutVocab2.png'),
          $('#tutBlock').attr('src', 'common/tutBlock2.png'),
          $('#tutVerb').attr('src', 'common/tutVerb2.png'),
          $('#tutEndings').attr('src', 'common/tutEndings2.png'),
          $('#tutConvo').attr('src', 'common/tutConvo2.png'),
          $('#tutPronun').attr('src', 'common/tutPronun2.png'),
          $('#tutExtra').attr('src', 'common/tutExtra2.png'),
          $('#tutFlash').attr('src', 'common/tutFlash2.png'))
        : ($('#tutVocab').attr('src', 'common/tutVocab.png'),
          $('#tutBlock').attr('src', 'common/tutBlock.png'),
          $('#tutVerb').attr('src', 'common/tutVerb.png'),
          $('#tutEndings').attr('src', 'common/tutEndings.png'),
          $('#tutConvo').attr('src', 'common/tutConvo.png'),
          $('#tutPronun').attr('src', 'common/tutPronun.png'),
          $('#tutExtra').attr('src', 'common/tutExtra.png'),
          $('#tutFlash').attr('src', 'common/tutFlash.png')),
      setTimeout(function () {
        $('.tutWrap').fadeIn();
      }, 200))
    : ($('#musicOnOff').show(),
      $('#tutorialMenu').css({ x: '200%' }),
      $('#tutorialMenu, #userWrap').hide(),
      $('.ouinoContentB').show());
}
function adminActions() {
  var e = $(this)
      .parent('.allUsers')
      .text()
      .split('Name: ')
      .join('ZZZ')
      .split('Email: ')
      .join('ZZZ')
      .split('ADMIN')
      .join('ZZZ')
      .split('ZZZ'),
    o = e[2],
    t = e[3];
  ('yes' == t
    ? ($(this).html('ADMIN<br>no'), (t = 'no'))
    : ($(this).html('ADMIN<br>yes'), (t = 'yes')),
    (fieldToUpdate = 'admin'),
    (infoToUpdate = t));
  var s = new XMLHttpRequest(),
    n = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + '2' + cWbBT,
    i =
      'email=' +
      o +
      '&fieldToUpdate=' +
      fieldToUpdate +
      '&infoToUpdate=' +
      infoToUpdate +
      '&lessonLang=' +
      lessonLanguage;
  (s.open('POST', n, !0),
    s.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'));
  try {
    s.send(i);
  } catch (e) {
    offlineMessage();
  }
}
function allUsersActions(e) {
  if (!$(e.target).hasClass('adminInfo')) {
    var o = $(this)
        .text()
        .split('Name: ')
        .join('ZZZ')
        .split('Email: ')
        .join('ZZZ')
        .split('ADMIN')
        .join('ZZZ')
        .split('ZZZISTRATOR')
        .join('')
        .split('ZZZ'),
      t = o[1],
      s = o[2];
    ($('#userMenu .mainTitle').html(
      '<img class="mainLogoImg2" src="common/logoUser.svg">' + t,
    ),
      $('#usersCont2, #usersBack').show(),
      $('#usersCont').hide(),
      $('#usersCont2').html(''));
    var n = new XMLHttpRequest(),
      i = setTimeout(function () {
        (n.abort(),
          $('#usersCont2').append(
            "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
          ),
          $('.adminWarn1').show());
      }, 8e3),
      a = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + jGWFQ + '2' + cWbBT,
      r = 'email=' + s + '&product=' + lessonLanguage;
    (n.open('POST', a, !0),
      n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      (n.onreadystatechange = function () {
        if (4 == n.readyState && 200 == n.status) {
          if ('pwa' == osType && -1 != n.responseURL.indexOf('offline'))
            return (
              $('#usersCont2').append(
                "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
              ),
              void $('.adminWarn1').show()
            );
          if (
            (clearTimeout(i),
            $('.adminWarn1').hide(),
            'false' != n.responseText && n.responseText.length > 500)
          ) {
            seekInfo = n.responseText.split(',');
            var e,
              o = seekInfo[0].split(':'),
              t = seekInfo[1].split(':'),
              s = seekInfo[2].split(':'),
              a = seekInfo[3].split(':');
            e =
              '<br><div class="seekUser1"><strong>BUILDING BLOCKS<span class="sp1">QUIZ 1</span><span class="sp2">QUIZ 2</span><span class="sp3">QUIZ 3</span></strong></div>';
            for (var r = 1; r <= sLengths[0]; r++) {
              ((u = $('#lessonMenu9 .Lblock' + r + ' h1')
                .text()
                .split('<br>')
                .join(' - ')).length > 43 && (u = u.slice(0, 43) + '...'),
                (l = r % 2 == 0 ? 1 : 2),
                (c =
                  '0' == a[r - 1] ? ['0', '0', '0', '0'] : a[r - 1].split('|')),
                (e = $('#lessonMenu9 .Lblock' + r).hasClass('noQuiz')
                  ? e +
                    '<div class="seekUser' +
                    l +
                    '">' +
                    u +
                    '<span class="sp1">-</span><span class="sp2">-</span><span class="sp3">-</span></div>'
                  : $('#lessonMenu9 .Lblock' + r).hasClass('quizOnly')
                    ? e +
                      '<div class="seekUser' +
                      l +
                      '"><strong>Category Quiz<span class="sp1">' +
                      c[0] +
                      '%</span><span class="sp2">' +
                      c[1] +
                      '%</span><span class="sp3">' +
                      c[2] +
                      '%</span></strong></div>'
                    : e +
                      '<div class="seekUser' +
                      l +
                      '">' +
                      u +
                      '<span class="sp1">' +
                      c[0] +
                      '%</span><span class="sp2">' +
                      c[1] +
                      '%</span><span class="sp3">' +
                      c[2] +
                      '%</span></div>'));
            }
            ($('#usersCont2').append(e),
              (e =
                '<br><div class="seekUser1"><strong>VOCABULARY<span class="sp1">QUIZ 1</span><span class="sp2">QUIZ 2</span><span class="sp3">QUIZ 3</span><span class="sp4">QUIZ 4</span></strong></div>'));
            for (r = 1; r <= sLengths[1]; r++) {
              e =
                e +
                '<div class="seekUser' +
                (l = r % 2 == 0 ? 1 : 2) +
                '">' +
                (u = $('#lessonMenu2 .Lvocab' + r + ' h1')
                  .text()
                  .split('<br>')
                  .join(' - ')) +
                '<span class="sp1">' +
                (c =
                  '0' == o[r - 1]
                    ? ['0', '0', '0', '0']
                    : o[r - 1].split('|'))[0] +
                '%</span><span class="sp2">' +
                c[1] +
                '%</span><span class="sp3">' +
                c[2] +
                '%</span><span class="sp4">' +
                c[3] +
                '%</span></div>';
            }
            ($('#usersCont2').append(e),
              (e =
                '<br><div class="seekUser1"><strong>CONVERSATIONS<span class="sp1">QUIZ 1</span><span class="sp2">QUIZ 2</span></strong></div>'));
            for (r = 1; r <= sLengths[2]; r++) {
              e =
                e +
                '<div class="seekUser' +
                (l = r % 2 == 0 ? 1 : 2) +
                '">' +
                (u = $('#lessonMenu3 .Lconvo' + r + ' h1')
                  .text()
                  .split('<br>')
                  .join(' - ')) +
                '<span class="sp1">' +
                (c =
                  '0' == t[r - 1]
                    ? ['0', '0', '0', '0']
                    : t[r - 1].split('|'))[0] +
                '%</span><span class="sp2">' +
                c[1] +
                '%</span></div>';
            }
            ($('#usersCont2').append(e),
              (e =
                '<br><div class="seekUser1"><strong>VERBS & CONJUGATION<span class="sp1">QUIZ 1</span><span class="sp2">QUIZ 2</span><span class="sp3">QUIZ 3</span><span class="sp4">QUIZ 4</span></strong></div>'));
            for (r = 1; r <= sLengths[3]; r++) {
              (null != (u = $('#lessonMenu9 .Lverb' + r + ' h1').html()) &&
                (u = u.split('<br>').join(' - ')),
                (e =
                  e +
                  '<div class="seekUser' +
                  (l = r % 2 == 0 ? 1 : 2) +
                  '">' +
                  u +
                  '<span class="sp1">' +
                  (c =
                    '0' == s[r - 1]
                      ? ['0', '0', '0', '0']
                      : s[r - 1].split('|'))[0] +
                  '%</span><span class="sp2">' +
                  c[1] +
                  '%</span><span class="sp3">' +
                  c[2] +
                  '%</span><span class="sp4">-</span></div>'));
            }
            for (r = sLengths[3] + 1; r <= sLengths[4]; r++) {
              e =
                e +
                '<div class="seekUser' +
                (l = r % 2 == 0 ? 1 : 2) +
                '">' +
                (u = $('#lessonMenu9 .Lverb' + r + ' h1')
                  .html()
                  .split('<br>')
                  .join(' - ')) +
                '<span class="sp1">' +
                (c =
                  '0' == s[r - 1]
                    ? ['0', '0', '0', '0']
                    : s[r - 1].split('|'))[0] +
                '%</span><span class="sp2">' +
                c[1] +
                '%</span><span class="sp3">' +
                c[2] +
                '%</span><span class="sp4">' +
                c[3] +
                '%</span></div>';
            }
            for (r = sLengths[4] + 1; r <= sLengths[5]; r++) {
              var l,
                c,
                u = $('#lessonMenu9 .Lverb' + r + ' h1')
                  .html()
                  .split('<br>')
                  .join(' - ');
              ((l = r % 2 == 0 ? 1 : 2),
                (c =
                  '0' == s[r - 1] ? ['0', '0', '0', '0'] : s[r - 1].split('|')),
                (e = $('#lessonMenu9 .Lverb' + r).hasClass('noQuiz')
                  ? e +
                    '<div class="seekUser' +
                    l +
                    '">' +
                    u +
                    '<span class="sp1">-</span><span class="sp2">-</span><span class="sp3">-</span><span class="sp4">-</span></div>'
                  : e +
                    '<div class="seekUser' +
                    l +
                    '">' +
                    u +
                    '<span class="sp1">' +
                    c[1] +
                    '%</span><span class="sp2">' +
                    c[2] +
                    '%</span><span class="sp3">-</span><span class="sp4">-</span></div>'));
            }
            $('#usersCont2').append(e);
          } else
            ($('#usersCont2').append(
              "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
            ),
              $('.adminWarn1').show());
        }
      }));
    try {
      n.send(r);
    } catch (e) {
      ($('#usersCont2').append(
        "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
      ),
        $('.adminWarn1').show());
    }
  }
}
var unique = function (e) {
  var o,
    t,
    s,
    n = [],
    i = e.length;
  for (t = 0; i > t; t++) {
    for (o = void 0, s = 0; s < n.length; s++)
      if (e[t] === n[s]) {
        o = !0;
        break;
      }
    o || n.push(e[t]);
  }
  return n;
};
function randomInt(e, o) {
  return Math.floor(Math.random() * (o - e + 1) + e);
}
function sectionScroll() {
  $('html').innerWidth() < 550 &&
    ($('.Lsection').addClass('disableTouch'),
    setTimeout(function () {
      for (var e = 0; e < $('.Lsection').length; e++)
        if ($('.Lsection').eq(e).is(':visible')) {
          var o = $('.Lsection').eq(e).children('.lessonItems').length;
          if (
            (o <= 2 &&
              ($('.Lsection')
                .eq(e)
                .addClass('line' + o),
              1 == o &&
                $('.Lsection')
                  .eq(e)
                  .children('.sectionTitle')
                  .addClass('splitTitle2')),
            $('.Lsection').eq(e).children('.sectionTitle').width() > 300 &&
              $('.Lsection')
                .eq(e)
                .children('.sectionTitle')
                .addClass('splitTitle'),
            o > 2)
          ) {
            var t = $('.Lsection').eq(e);
            if (t.prop('scrollWidth') > t.prop('clientWidth')) {
              var s = localStorage.getItem(langShort + 'eS_' + e);
              null !== s && t.animate({ scrollLeft: parseInt(s) }, 1);
            }
          }
        }
    }, 200),
    setTimeout(function () {
      $('.Lsection').removeClass('disableTouch');
    }, 1e3));
}
function hexToRgb(e) {
  var o = parseInt(e, 16);
  return ((o >> 16) & 255) + ',' + ((o >> 8) & 255) + ',' + (255 & o);
}
function colorBrightness(e, o) {
  ((e = String(e).replace(/[^0-9a-f]/gi, '')).length < 6 &&
    (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
    (o = o || 0));
  var t,
    s,
    n = '#';
  for (s = 0; 3 > s; s++)
    ((t = parseInt(e.substr(2 * s, 2), 16)),
      (n += (
        '00' +
        (t = Math.round(Math.min(Math.max(0, t + t * o), 255)).toString(16))
      ).substr(t.length)));
  return n;
}
function playSprite(e) {
  ($('#sfxSprite').attr('src', 'common/' + e + soundType),
    document.getElementById('sfxSprite').load(),
    document.getElementById('sfxSprite').addEventListener('canplay', playSFX));
}
function playSFX() {
  (document.getElementById('sfxSprite').removeEventListener('canplay', playSFX),
    $('#sfxSprite').trigger('play'));
}
function openLink(e) {
  if ('pwa' != osType || 'true' != sessionStorage.getItem('offlineSession'))
    if ('iOS' == osType) window.open(e, '_system');
    else {
      if (-1 != osType.indexOf('droid'))
        return (cordova.InAppBrowser.open(e, '_system'), !1);
      'windows' == osType
        ? gui
          ? gui.Shell.openExternal(e)
          : window.open(e, '_blank')
        : 'mac' == osType
          ? (exitfullscreen(),
            setTimeout(function () {
              window.open(e, '_blank');
            }, 1e3))
          : window.open(e, '_blank');
    }
  else offlinePopup();
}
function exitfullscreen() {
  var e =
    (document.fullscreenElement && null !== document.fullscreenElement) ||
    (document.webkitFullscreenElement &&
      null !== document.webkitFullscreenElement) ||
    (document.mozFullScreenElement && null !== document.mozFullScreenElement) ||
    (document.msFullscreenElement && null !== document.msFullscreenElement);
  document.documentElement;
  e &&
    (document.exitFullscreen
      ? document.exitFullscreen()
      : document.webkitExitFullscreen
        ? document.webkitExitFullscreen()
        : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.msExitFullscreen && document.msExitFullscreen());
}
(btnColor.push('rgba(' + hexToRgb(btnColor[0].replace(/\#/g, '')) + ',.9)'),
  btnColor.push('rgb(' + hexToRgb(btnColor[1].replace(/\#/g, '')) + ')'),
  btnColor.push(colorBrightness(btnColor[0], -0.4)),
  btnColor.push(colorBrightness(btnColor[1], 0.2)));
