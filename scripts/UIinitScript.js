if (osType == 'pwa') {
  var theWeb;
  var deferredPrompt;
  var compatible = false;
  var theVersion = '5.0.6';
}

var f2load = '';
var plusContinue = false;
var longPressTimer;
var isLongPress = false;
var homeDelay = 2000;
var loghref = window.location.href;

function loadScript(url, onLoad) {
  var script = document.createElement('script');
  script.src = url;
  script.onload = onLoad;
  document.head.appendChild(script);
}

var isFocused = false;
function handleFocus() {
  isFocused = true;
}
function handleBlur() {
  isFocused = false;
}

//DO NOT MODIFY
if (localStorage.getItem('layoutSTORE')) {
  localStorage.removeItem('layoutSTORE');
}
var currentSection = 'Building Blocks';
var currentSecShort = 'block';
var currentProgram = 'Complete';
///2018CHANGE
var btnColor = [
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
];
///2018CHANGE
var lessonTitle = 'Ouino ' + lessonLanguage + ' Complete';
var blurOut;
var generatedInfo = false;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VOCABULARY RESIZE

///////////////////////////START CHANGE TITLE LENGTH DEPENDING ON SIZE

var userName = '';
var sLengths = [];
var numOfQuiz = [];
var resetCode;
var userEmail;
var userEmail2;
var storeInfo;
var tuvm58dj;
var tuvm58dj2;
var fieldToUpdate;
var infoToUpdate;
var currentErrors;
var userInfo;
var verbKind;
var soundRepeated;
var KSblock;
var KSvocab;
var KSconvo;
var KSverb;
var KSpronun = [0, 0, 0, 0, 0, 0];
var quizScores;
var registerLoaded;
var passwordLoaded;
var viewportHeight;
var viewportWidth;
var audioSprite;
var tabletMusic = false;
var currentSprite;
var onTimeUpdate;
var playSprite;
var fihdsh5 = 3600;
var lessonInit = 'true';
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

////////////////////////////////////////////////HTML CODE
var loginAppend =
  '<header id="loginCover" class="wrapper"> <div id="loginCenter"> <img class="letterLogo" src="common/letterLogo.svg" style="margin-left: 10px;"> <form autocomplete="off" id="passwordForm" class="allForms"> <h3 id="passwordTitle2" class="loginTitle">Account Password Reset</h3> <input type="email" id="emailFieldReset" required class="loginField" placeholder="Enter your registered email address"/> <div class="backButton hidePasswordBtn">GO BACK</div><input type="submit" class="loginOptions" id="resetBtn" value="SEND RESET EMAIL"> <h5 id="passwordSkipBtn" class="smallUnderline" style="position: absolute; bottom: 0px; right: 0px; padding: 20px;">Already have a reset code? Skip this step.</h5> </form> <form autocomplete="off" id="loginForm" class="allForms"> <h3 class="loginTitle"><span id="loginTitle">Ouino Account Login</span><a name="" id="titleTip" class="tooltip"><img src="common/question2.svg" class="questionMark"/></a></h3> <input type="email" id="emailField" required class="loginField" placeholder="Email Address"/> <input type="password" id="jguyr4" required class="loginField" placeholder="Password"/> <h5 id="loginForgot" class="smallerUnderline" >Forgot password?</h5> <h5 id="loginRemember" class="loginRemember"><img src="common/checkOff.svg" id="rememberCheck" class="rememberCheck"/>Keep me logged in</h5> <input type="submit" class="loginOptions" id="logBtn" value="LOG IN"> </form> </div></header><div id="loginOffline" class="optionsIn gradientColor alignVerticalWin"> <table class="offlineTable"> <tr> <th width="15%"><img class="warningLogo" src="common/warning.svg"></th> <td colspan="2"><h3 class="offlineTitle">CURRENTLY OFFLINE</h3> <p class="offlineWord">You are currently offline. An internet connection is required to sync progress between devices. Your progress will be saved locally for now. Simply restart the program when an internet connection is available in order to sync your progress with the server.</p></td></tr></table> <table class="offlineTable2"> <tr> <td width="60%"><h5 id="offlineRemember" class="loginRemember"><img src="common/checkOff.svg" id="offlineCheck" class="rememberCheck"/>Do not show again.</h5></td><td><input type="submit" class="loginOptions gradientColor2" value="Continue" id="offlineButton"></td></tr></table></div><div id="emailForm"> <form autocomplete="off" class="form" method="post"> <h4>Did you have any questions or comments? We would love to hear from you! Send us a message!</h4> <div class="closeForm">X</div><input class="invForm" id="eForm1" name="info1" type="text" placeholder="name"/> <input class="invForm" id="eForm2" name="info2" type="text" placeholder="email"/> <input class="invForm" id="eForm3" name="info3" type="text" placeholder="language"/> <input class="invForm" id="eForm4" name="info4" type="text" placeholder="userUse"/> <textarea class="emailField" name="info5" placeholder="Type your message..."></textarea> <br><input class="emailBtn" type="submit" value="SEND MESSAGE"/> </form> <div id="thanks">Thank you so much for your message! We will get back to you in no time.</div></div><div id="sprompt"> <div id="spromptIn">Do you wish to go back to the last loaded lesson? <div id="spromptYes">YES</div><div id="spromptNo">NO</div></div></div><div id="like"> <div id="likeIn"> <div class="closeForm">X</div><b>How do you like the program? Please let us know!</b> <div id="likeYes">I love it!</div><div id="likeMay">I like it.</div><div id="likeNo">Meh... :(</div></div></div><div id="review"><div id="reviewIn"><div class="closeForm">X</div><b></b><div id="revTrustpilot">Write Trustpilot Review</div></div></div>';

var emailHTML =
  '<div id="emailForm"> <form autocomplete="off" class="form" method="post"> <h4>Did you have any questions or comments? We would love to hear from you! Send us a message!</h4> <div class="closeForm">X</div><input class="invForm" id="eForm1" name="info1" type="text" placeholder="name"/> <input class="invForm" id="eForm2" name="info2" type="text" placeholder="email"/><input class="invForm" id="eForm3" name="info3" type="text" placeholder="language"/><input class="invForm" id="eForm4" name="info4" type="text" placeholder="userUse"/><textarea class="emailField" name="info5" type="text" placeholder="Type your message..."/> <br><input class="emailBtn" type="submit" value="SEND MESSAGE"/></form><div id="thanks">Thank you so much for your message! We will get back to you in no time.</div></div><div id="sprompt"><div id="spromptIn">Do you wish to go back to the last loaded lesson?<div id="spromptYes">YES</div><div id="spromptNo">NO</div></div></div><div id="like"><div id="likeIn"><div class="closeForm">X</div><b>How do you like the program? Please let us know!</b><div id="likeYes">I love it!</div><div id="likeMay">I like it.</div><div id="likeNo">Meh... :(</div></div></div><div id="review"><div id="reviewIn"><div class="closeForm">X</div><b></b><div id="revTrustpilot">Write Trustpilot Review</div></div></div>';

///2019 COPY TEACHER
var mainHTML =
  '<div id="fullWarning" style="display:none; opacity: 0.9; border: 5px solid #FC0; border-radius: 10px; cursor: default; padding: 15px; background: black; z-index: 999999; position: fixed; width: 200px; height: 80px; margin: auto auto; left:0; right: 0; top: 30px; font-size: 18px; font-weight: bold; color: white; text-align: center;"><strong style="color: #FC0; font-size: 22px;">Fullscreen Mode</strong><br>Press the "ESC" key to leave fullscreen mode.</div><div id="topBar"></div><div id="iLoad"><p></p></div><iframe></iframe><div id="loadLogo"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div><div id="userWrap"><div id="userTitle" class="userBtns"></div><div id="userTitle2" class="userBtns"><strong>See All Users</strong> (Admin Only)</div><div id="userTitle4" class="userBtns"><strong>Teacher Interface</strong> (Web)</div><div id="userTitle3" class="userBtns"><strong>Progress Overview</strong></div><div id="userTitle5" class="userBtns"><strong>Account Information</strong></div></div><main id="userMenu2" class="lessonMenus selectOff"><div class="insideMenu inside2"><h1 class="mainTitle" style="padding-bottom: 20px;"><img class="mainLogoImg2" src="common/logoUser.svg">Progress Overview</h1><div id="pMeter1" class="pMeters"></div><div id="pMeter2" class="pMeters"></div><div id="pMeter3" class="pMeters"></div><div id="pMeter11" class="pMeters"></div><div id="pMeter6" class="pMeters"></div><div id="pMeter5" class="pMeters"></div><div id="pMeter10" class="pMeters"></div><div id="pMeter8" class="pMeters"></div><div id="pMeter9" class="pMeters" style="padding-top: 30px;"></div></div></main><main id="userMenu" class="lessonMenus selectOff"><div class="insideMenu inside2"><h1 class="mainTitle"><img class="mainLogoImg2" src="common/logoUser.svg">User Administration</h1><div class="adminWarn1">Trying to connect...</div><div id="usersCont"></div><div id="usersBack">GO BACK</div><div id="usersCont2" style="display:none;"></div></div></main><main id="tutorialMenu" class="lessonMenus selectOff"><div class="insideMenu" style="max-width: 1000px; cursor: default; padding-bottom: 50px;"><h1 class="mainTitle" style="padding-bottom: 10px;"><img class="mainLogoImg2" src="common/question.svg">Tutorials</h1><section class="tutWrap" style="max-width: 700px; margin: 0 auto; padding: 10px;"><img class="bannerSite" id="siteTips" src="extra/images/tips.png"><img class="bannerSite" id="siteGuide" src="extra/images/guide.png"></section><section class="tutWrap"><h2 class="mainTitle">Building Blocks</h2><img id="tutBlock" class="tutImg"></section><section class="tutWrap"><h2 class="mainTitle">Vocabulary</h2><img id="tutVocab" class="tutImg"></section><section class="tutWrap"><h2 class="mainTitle">Conversations</h2><img id="tutConvo" class="tutImg"></section><section class="tutWrap"><h2 class="mainTitle">Pronunciation</h2><img id="tutPronun" class="tutImg"></section><section class="tutWrap"><h2 class="mainTitle">Verbs</h2><img id="tutVerb" class="tutImg"></section><section class="tutWrap" style="margin-bottom: 90px;"><h2 class="mainTitle">Endings</h2><img id="tutEndings" class="tutImg"></section></div></main><main id="progMenu1" class="progMenublock progMenus progStored"><div class="progTitle">BUILDING BLOCKS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum"></b> / <b class="starTotal"></b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu2" class="progMenuvocab progMenus progStored"><div class="progTitle">VOCABULARY PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu3" class="progMenuconvo progMenus progStored"><div class="progTitle">CONVERSATIONS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu6" class="progMenukey progMenus progStored"><div class="progTitle">KEY VERBS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu10" class="progMenuextra progMenus progStored"><div class="progTitle">EXPRESS VERBS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu5" class="progMenuindi progMenus progStored"><div class="progTitle">INDIVIDUAL VERBS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu8" class="progMenuendings progMenus progStored"><div class="progTitle">VERB ENDINGS PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><main id="progMenu9" class="progMenuAll progMenus progStored"><div class="progTitle">PROGRAM PROGRESS</div><div class="progText"><span><strong>Knowledge Level</strong> (self evaluation)</span><p class="progDiv"><img class="progIcons" src="common/star.svg"><b class="starNum">26</b> / <b class="starTotal">143</b></p></div><div class="progMeter"><div class="starMeter"></div></div><div class="progText" style="margin-top: 10px;"><span><strong>Awards</strong></span><p class="progDiv"><img class="progIcons" src="common/medalIcon5.svg"><b class="scoreNum"></b>%</p><p class="progDiv"><img class="progIcons" src="common/medalIcon1.svg"><sup class="medalNum0"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon2.svg"><sup class="medalNum1"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon3.svg"><sup class="medalNum2"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p><p class="progDiv"><img class="progIcons" src="common/medalIcon4.svg"><sup class="medalNum3"></sup><i>&frasl;&nbsp;</i><b class="medalTotal"></b></p></div><div class="progMeter"><div class="scoreMeter"></div></div></main><div id="fontPreload1"></div><div id="fontPreload2"></div><div class="instructions"><img class="redArrowImage" src="common/redArrow.svg"><b id="arrowLabel"></b></div><div class="menuBar"><img src="common/logo.svg" id="menuMain2" class="smallLogo alignVerticalItem"/><span class="menuTitleContainer alignVerticalItem"><div class="lessonTitle"></div></span><span class="menuBtnContainer"><div id="volDiv"><div id="sliderTrack"></div><div id="sliderText">Volume</div></div><img id="searchBtn" src="search/common/search2.png" class="smallIcon" /><img id="tutorialBtn" src="common/logoTut.svg" class="smallIcon" /><img id="userBtn" src="common/logoUser.svg" class="smallIcon" /><img id="optionBtn" src="common/gear.svg" class="smallIcon"/><img id="backBtn" src="common/back.svg" class="smallIcon"/></span></div><audio id="mainMusic" loop src=""></audio><div id="optionWrap" class="wrapper3"><div  id="menuPad" class="optionsIn gradientColor alignVerticalWin"><img src="common/menuIcon7.svg" class="menuLogo"/><table class="settingTable"><tr><td colspan="2"><h2 id="foreignText2" class="menuTitle"></h2></td></tr><tr id="musCol"><td class="leftMenuItems"><h3 class="menuItem">Music options</h3><h5 class="menuItemDescription">Turn the music On / Off.</h5></td><td class="rightMenuItems"><select id="selectSound" class="selectOptions gradientColor2"><option value="on">ON</option><option value="off">OFF</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Playback options</h3><h5 class="menuItemDescription">Select the pronunciation speed.</h5></td><td class="rightMenuItems" ><select id="selectPlayback" class="selectOptions gradientColor2"><option value="fastFirst">Fast first</option><option value="slowFirst">Slow first</option><option value="fastOnly">Fast only</option><option value="slowOnly">Slow only</option><option value="fastTwice">Fast Twice</option><option value="fastTwicePlus">Fast 2x + Slow</option><option value="fastSlowFast">Fast+Slow+Fast</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Example time interval</h3><h5 class="menuItemDescription">Select time between examples.</h5></td><td class="rightMenuItems"><select id="selectInterval" class="selectOptions gradientColor2"><option value="1">1 second</option><option value="2">2 seconds</option><option value="3">3 seconds</option><option value="4">4 seconds</option><option value="5">5 seconds</option><option value="6">6 seconds</option><option value="7">7 seconds</option><option value="8">8 seconds</option><option value="9">9 seconds</option><option value="1000000">Off</option></select></td></tr><tr><td class="leftMenuItems"><h3 class="menuItem">Text & subtitle display</h3><h5 class="menuItemDescription">Select text shown in the lesson.</h5></td><td class="rightMenuItems"><select id="selectText" class="selectOptions gradientColor2"><option value="both">Both</option><option id="foreignText" value="foreign"></option><option value="english">English</option><option value="none">None</option></select></td></tr></table></div></div><div id="musicOnOff"></div><audio id="mainSound"></audio>';

//////////////CREATE IMAGE ARRAY
//////////////CREATE IMAGE ARRAY
var imageArray = [];
////PlayMusic
function playMusic() {
  document
    .getElementById('mainMusic')
    .removeEventListener('canplay', playMusic);
  document.getElementById('mainMusic').volume =
    document.getElementById('mainSound').volume * 0.6;
  $('#mainMusic').trigger('play');
}

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

var appSuspended = false;

if (osType == 'iOS' || osType.indexOf('droid') != -1) {
  var phoneG = document.createElement('script');
  phoneG.setAttribute('src', 'cordova.js');
  document.head.appendChild(phoneG);
}
window.onload = function () {
  if (osType == 'iOS' || osType.indexOf('droid') != -1) {
    document.addEventListener('deviceready', onDeviceReady, false);
  } else {
    onDeviceReady();
  }
};

//////START INIT OPTIONS/////////////////////////////////////////////////////////////////

///ON DEVICE READY
function onDeviceReady() {
  if (osType == 'pwa') {
    if (currentDevice == 'mobile') {
      mobilePopup();
      return;
    }
  }

  ///LOCK SCREEN IN PORTRAIT MODE
  if (osType == 'iOS' || osType.indexOf('droid') != -1) {
    if ($('html').innerWidth() < 590 || $('html').innerHeight() < 590) {
      screen.orientation.lock('portrait');
    }
  }

  ////OS START IOS VERSION ONLY
  if (osType == 'iOS') {
    if ($('html').innerWidth() < 500 || $('html').innerHeight() < 500) {
      $('.menuTitleContainer').addClass('forceHide');
    }
  }
  ////OS END IOS VERSION ONLY

  if (osType == 'iOS' || osType.indexOf('droid') != -1) {
    if (window.MobileAccessibility) {
      window.MobileAccessibility.usePreferredTextZoom(false);
      StatusBar.hide();
    }
    window.open = cordova.InAppBrowser.open;

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

  if (osType == 'iOS') {
    var verOS = '';
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
      var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      verOS = parseInt(v[1], 10);
    }
    if (verOS == 12 || verOS == 11) {
      $(document).on('blur', 'input, textarea', function () {
        setTimeout(function () {
          window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
        }, 10);
      });
    }
  }

  initiate();
}
///////END LOAD OPTIONS

function onResume() {
  if (
    !sessionStorage.getItem('userEmailSTORE') &&
    !$('#loginCover').is(':visible')
  ) {
    sessionStorage.clear();
    localStorage.removeItem(lessonLanguage + 'timeClosed');
    $('#loadLogo').show();
    setTimeout(function () {
      sessionStorage.clear();
      window.location = 'index.html';
    }, 100);
    return;
  }
  if (localStorage[lessonLanguage + 'timeClosed']) {
    var timeClosed = Date.now() - localStorage[lessonLanguage + 'timeClosed'];
    localStorage.removeItem(lessonLanguage + 'timeClosed');
    if (timeClosed > 3600000) {
      sessionStorage.clear();
      $('#loadLogo').show();
      setTimeout(function () {
        sessionStorage.clear();
        window.location = 'index.html';
      }, 100);
      return;
    }
  }
  appSuspended = false;
  if (storeInfo != undefined) {
    toggleMusic3();
  }
}
function onPause() {
  localStorage[lessonLanguage + 'timeClosed'] = Date.now();
  appSuspended = true;
  if (mainMusic) {
    mainMusic.pause();
  }
}
function onMenubutton(e) {
  e.preventDefault();
  navigator.app.exitApp();
}
function onBackbutton(e) {
  e.preventDefault();
  if ($('#loadLogo').is(':visible')) {
    homeMenu();
  } else {
    navigator.app.exitApp();
  }
}

//////START INIT OPTIONS/////////////////////////////////////////////////////////////////
$(document).ready(function () {
  if (osType != 'iOS') {
    var viewport = document.querySelector('meta[name=viewport]');
    if ($('html').innerWidth() < 350 || $('html').innerHeight() < 350) {
      viewport.setAttribute(
        'content',
        'initial-scale=1.1,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.7,minimum-scale=0.7,viewport-fit=cover',
      );
    } else if ($('html').innerWidth() < 470 || $('html').innerHeight() < 470) {
      if ($('html').innerWidth() > 760 || $('html').innerHeight() > 760) {
        viewport.setAttribute(
          'content',
          'initial-scale=1.1,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.9,minimum-scale=0.9,viewport-fit=cover',
        );
        if (osType.indexOf('droid') != -1) {
          $('body').addClass('android');
        }
      } else {
        viewport.setAttribute(
          'content',
          'initial-scale=1.1,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.8,minimum-scale=0.8,viewport-fit=cover',
        );
      }
    } else {
      viewport.setAttribute(
        'content',
        'initial-scale=1.1,height=device-height,user-scalable=no, width=device-width,maximum-scale=1,minimum-scale=1,viewport-fit=cover',
      );
    }
  }

  if (currentDevice != 'mobile') {
    $('body').addClass('desktop');
  } else if ($('html').innerWidth() > 600 && $('html').innerHeight() > 600) {
    $('body').addClass('tablet');
    $('body').addClass('mobile');
  } else {
    $('body').addClass('mobile');
  }

  if (osType == 'mac') {
    document.addEventListener('keydown', function (event) {
      if (event.code === 'Space' && isFocused == false) {
        toggleFullscreen();
        event.preventDefault();
        return false;
      }
    });
  }
  ///BACKGROUND
  //2020 EXTRA START
  $('#background').css({
    'background-image': 'url(common/background.jpg)',
  });
  //2020 EXTRA END

  if (loginAppend.length > fihdsh5) {
    $('body').append(mainHTML);
  } else {
    $('body').html('Error');
    return;
  }
  $('#sectionTitle2').text(lessonLanguage + ' Verbs and Conjugation');
  $('#theLang').text(lessonLanguage);
  $('#foreignText').text(lessonLanguage);

  //////LOAD LOG IN
  ///PORTUGUESE CHANGE START
  if (sessionStorage['LOGGEDIN'] == null) {
    loadLogIn();
  }
  if (localStorage.getItem(lessonLanguage + 'legacyPath')) {
    localStorage.removeItem(lessonLanguage + 'legacyPath');
  }
  ///PORTUGUESE CHANGE END

  if (osType == 'pwa') {
    if (
      !localStorage.getItem(lessonLanguage + 'InitialDownload' + theVersion)
    ) {
      $('body').append(
        '<div id="dPrompt2"><div class="off1"><h2 class="off2">Downloading v' +
          theVersion +
          ' ... Please wait.</h2><p class="off3">The files required for this web application are currently downloading. This is only required the first time you open the application or after an update.</p><div class="off9 off8"> 0%</div><div class="webBtn3 downloading off8"></div></div></div>',
      );
      var perLoadNum = 0;
      perLoad = setInterval(function () {
        $('#dPrompt2 .off9').text(' ' + perLoadNum + '%');
        if (perLoadNum < 100) {
          perLoadNum++;
        } else {
          setTimeout(function () {
            $('#dPrompt2').remove();
            localStorage.setItem(
              lessonLanguage + 'InitialDownload' + theVersion,
              'Done',
            );
            clearInterval(perLoad);
          }, 1000);
        }
      }, 390);
    }
    if (
      navigator.userAgent.indexOf('Opera') != -1 ||
      navigator.userAgent.indexOf('OPR') != -1
    ) {
    } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    } else if (navigator.userAgent.indexOf('MSIE') != -1) {
      alert(
        'NOT COMPATIBLE WITH INTERNET EXPLORER, PLEASE UPDATE YOUR BROWSER',
      );
    } else if (navigator.userAgent.indexOf('Edg') != -1) {
      compatible = true;
    } else if (
      navigator.userAgent.indexOf('Safari') != -1 &&
      navigator.userAgent.indexOf('Chrome') == -1
    ) {
    } else if (navigator.userAgent.indexOf('Chrome') != -1) {
      compatible = true;
    }
    if (
      'BeforeInstallPromptEvent' &&
      !window.matchMedia('(display-mode: standalone)').matches &&
      !localStorage.getItem(lessonLanguage + 'installedApp') &&
      compatible
    ) {
      $('.menuBtnContainer').prepend(
        '<img id="install_button2" src="common/install.svg" class="smallIcon">',
      );
      $('#install_button2').hover(function () {
        $('#arrowLabel').text('ADD WEB APP TO HOME SCREEN');
        $('.instructions').toggleClass('showDiv');
      });
      if (!localStorage.getItem(lessonLanguage + 'refusedInstall')) {
        $('body').append(
          '<div id="install_bar"><p>ADD APP TO HOME SCREEN?</p><div id="install_button">ADD</div><div id="install_no">NO</div></div>',
        );
        $('#install_no').on('click', function () {
          $('#install_bar').fadeOut();
          localStorage.setItem(lessonLanguage + 'refusedInstall', 'true');
        });
      }
      window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferredPrompt = e;
        setTimeout(function () {
          $('#install_button2').fadeIn();
        }, 5000);
        if (!localStorage.getItem(lessonLanguage + 'refusedInstall')) {
          setTimeout(function () {
            $('#install_bar, #install_button2').fadeIn();
          }, 5000);
        }
        $('#install_button, #install_button2').on('click', installApp);
      });
    }
  }

  /////LOAD SOUND SPRITE
  audioSprite = document.getElementById('sfxSprite');
  audioSprite.addEventListener('timeupdate', onTimeUpdate, false);

  $('.menuTitleContainer').text(lessonTitle);
  loadButtonsMain();
  if ($('html').innerWidth() < 550) {
    $('body').addClass('notch');
  } else {
    $('body').removeClass('notch');
  }
  $(window).resize(function () {
    if ($('html').innerWidth() < 550) {
      $('body').addClass('notch');
    } else {
      $('body').removeClass('notch');
    }
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
  $('.gradientColor').css({
    background:
      'url(common/black.svg), radial-gradient(' +
      btnColor[8] +
      ',' +
      btnColor[9] +
      ')',
  });
  $('.gradientColor2').css({
    background: 'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
  });
  $('.gradientColor3').css({
    background:
      'url(common/black.svg), radial-gradient(' +
      btnColor[8] +
      ',' +
      btnColor[9] +
      ')',
  });
  ///////Ipad Keyboard Scroll Issue Fix

  ////2019 CHANGE
  $('#sectionP1B').text(
    'Discover how to create your own ' +
      lessonLanguage +
      ' sentences by learning structure and grammar.',
  );
  $('#sectionP2B').text(
    'Learn essential ' +
      lessonLanguage +
      ' words and phrases used extensively in everyday speech.',
  );
  $('#sectionP3B').text(
    'Learn ' +
      lessonLanguage +
      ' expressions and practice your comprehension of native ' +
      lessonLanguage +
      ' dialogue.',
  );
  $('#sectionP4B').text(
    'Improve your pronunciation by comparing yourself with native ' +
      lessonLanguage +
      ' speakers.',
  );
  $('#unitTitle5').text('Individual Verbs');
  //2020 EXTRA START
  $('#sectionP5B').text('Learn single verbs in multiple tenses/moods.');
  //2020 EXTRA END
  $('#sectionP6B').text('An in-depth look at the most important verbs.');
  $('#unitTitle7').text('Express Verbs');
  $('#sectionP7B').text('Discover verbs through different tenses/moods.');

  ////2019NEW
  $('#backBtn').on('click', function () {
    if (sessionStorage['menuType'].indexOf('verb') != -1 && layout != 'ON') {
      verbMenu();
    } else {
      homeMenu();
    }
  });
  ////2019NEW

  if (currentDevice != 'mobile') {
    $('#backBtn').hover(function () {
      $('#arrowLabel').text('GO BACK');
      $('.instructions').toggleClass('showDiv');
    });
  }
  window.onkeyup = function (e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (
      key == 8 &&
      !$('#emailForm').is(':visible') &&
      !$('#loginCover').is(':visible')
    ) {
      homeMenu();
    }
  };

  $('#emailForm').off();
  $('#emailForm .closeForm').off();

  $('#emailForm .closeForm').on('click', function () {
    $('#emailForm form').hide();
    $('#thanks').text(
      "Okay, we'll talk later! Know that you can always contact us on our website. We love to hear from our users.",
    );
    $('#thanks').show();
    setTimeout(function () {
      $('#emailForm').fadeOut();
      homeMenu();
    }, 4500);
  });

  $('#emailForm').on('click', function (e) {
    if (!$('#emailForm form').is(':visible')) {
      $('#emailForm').hide();
      homeMenu();
    } else if (e.target == this) {
      $('#emailForm form').hide();
      $('#thanks').text(
        "Okay, we'll talk later! Know that you can always contact us on our website. We love to hear from our users.",
      );
      $('#thanks').show();
      setTimeout(function () {
        $('#emailForm').fadeOut();
        homeMenu();
      }, 4500);
    }
  });

  $('#sectionP8, #sectionP8B').text(
    'Understand how ' + lessonLanguage + ' conjugation truly works. ',
  );
  ////2019 CHANGE
  $('#tutorialMenu, #userWrap, #userMenu, #userMenu2').hide();

  if (osType == 'mac') {
    $('input, textarea').on('focus', handleFocus).on('blur', handleBlur);
  }
});
////////////////////////////////////////////////////////////////////////////END INIT OPTIONS
////2019NEW
function verbMenu() {
  $('.gradientColor').css({
    background:
      'url(common/black.svg), radial-gradient(' +
      btnColor[8] +
      ',' +
      btnColor[9] +
      ')',
  });
  $('.gradientColor2').css({
    background: 'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
  });
  $('.gradientColor3').css({
    background:
      'url(common/black.svg), radial-gradient(' +
      btnColor[8] +
      ',' +
      btnColor[9] +
      ')',
  });
  $('iframe, #iLoad').hide();
  $('iframe').attr('src', '');
  $('#musicOnOff').show();
  if (currentDevice != 'mobile') {
    playSprite('transition');
  }
  $(
    '#redArrowImg, #mainLogoImg, .lessonMenus, #optionWrap, #userWrap, #loginOffline, .progMenus,.lessonBacks, #newVerb',
  ).hide();
  $('#optionBtn').show();
  $('.progMenus').css({
    visibility: 'visible',
  });
  setTimeout(function () {
    $('#redArrowImg, #mainLogoImg, .lessonMenus, .lessonBacks').hide();
  }, 500);
  $('.lessonBacks').css({
    opacity: 0,
  });
  $('.lessonMenus').css({
    x: '200%',
  });
  $('.menuCenterImg').css({
    y: '100%',
  });
  sessionStorage['menuType'] = 'home';
  $('#newVerb').fadeIn();
  ///2019NEWER
  $('#loadLogo').css({
    opacity: 0.02,
  });
  ///2019NEWER
}
////2019NEW

function mobileClick() {
  $('.quizItems').addClass('mobileClick');
  setTimeout(function () {
    $('.quizItems').removeClass('mobileClick');
  }, 200);
}

/////////////////////////LOAD BUTTON LISTENERS
function loadButtonsMain() {
  $('.lessonMenus').css({
    x: '200%',
  });

  if (osType == 'iOS') {
    $('.sectionTitle').addClass('absolute');
  }

  $('.lessonMenus').scroll(function () {
    var menuNum = $(this).attr('id').replace('lessonMenu', '');
    var scrollHeight = $(this).children('.insideMenu').height();
    var scrollPos = $(this).children('.insideMenu').offset();
    scrollPos = scrollPos.top;
    var newScroll = $('html').height() - (scrollHeight + scrollPos) - 200;
    if (menuNum == '7') {
      menuNum = '5';
    }
    if (newScroll > 1) {
      $('#progMenu' + menuNum).removeClass('progStored');
    } else if (!$('#progMenu' + menuNum).hasClass('progStored')) {
      $('#progMenu' + menuNum).addClass('progStored');
    }
  });

  ////////////CHANGE STAR ONCLICK START
  $('.Lstars').on('click', function (e) {
    var offset = $(this).offset();
    var starPos = e.pageX - offset.left;
    var theStarNum;
    var thisClass =
      '.' +
      $(this).attr('class').replace(' LstarsHOVER', '').replace('Lstars ', '');
    if (starPos < 20) {
      var currBack = $(this).css('background-image');
      currBack = currBack.charAt(currBack.length - 6);
      if (currBack == 1) {
        $(thisClass).css({
          'background-image': 'url(common/star0.png)',
        });
        theStarNum = 0;
      } else {
        $(thisClass).css({
          'background-image': 'url(common/star1.png)',
        });
        theStarNum = 1;
      }
    }
    if (starPos >= 21 && starPos < 40) {
      var currBack = $(this).css('background-image');
      currBack = currBack.charAt(currBack.length - 6);
      if (currBack == 2) {
        $(thisClass).css({
          'background-image': 'url(common/star0.png)',
        });
        theStarNum = 0;
      } else {
        $(thisClass).css({
          'background-image': 'url(common/star2.png)',
        });
        theStarNum = 2;
      }
    }
    if (starPos >= 41 && starPos < 60) {
      var currBack = $(this).css('background-image');
      currBack = currBack.charAt(currBack.length - 6);
      if (currBack == 3) {
        $(thisClass).css({
          'background-image': 'url(common/star0.png)',
        });
        theStarNum = 0;
      } else {
        $(thisClass).css({
          'background-image': 'url(common/star3.png)',
        });
        theStarNum = 3;
      }
    }
    if (starPos >= 61) {
      var currBack = $(this).css('background-image');
      currBack = currBack.charAt(currBack.length - 6);
      if (currBack == 4) {
        $(thisClass).css({
          'background-image': 'url(common/star0.png)',
        });
        theStarNum = 0;
      } else {
        $(thisClass).css({
          'background-image': 'url(common/star4.png)',
        });
        theStarNum = 4;
      }
    }
    var starNum = $(this)
      .attr('class')
      .split('Lstars ')
      .join('')
      .split(' LstarsHOVER')
      .join('')
      .split('Star');
    var theLessonNum = starNum[1];
    currentSecShort = starNum[0];
    window['KS' + currentSecShort][theLessonNum - 1] = theStarNum;
    ///UPDATE TO DATABASE
    infoToUpdate = window['KS' + currentSecShort]
      .toString()
      .split(',')
      .join(':');
    localStorage[storeInfo + 'starSTORE' + currentSecShort] = infoToUpdate;
    fieldToUpdate = currentSecShort + 'Stars';
    updateDatabase();
    ///END UPDATE TO DB
    updateStars();
  });
  ////////////CHANGE STAR ONCLICK END
  $('#userTitle').on('click', function () {
    localStorage.removeItem('STAYLOGGEDIN');
    localStorage.removeItem('userEmailSTORE');
    localStorage.removeItem('tuvm58djSTORE');
    sessionStorage.clear();
    $('#loadLogo').show();
    setTimeout(function () {
      sessionStorage.clear();
      if (loghref.indexOf('/home') != -1) {
        window.location = 'init.html';
      } else {
        location.reload();
      }
    }, 100);
  });

  $('#siteTips').on('click', function () {
    openLink('https://www.ouinolanguages.com/tips/');
  });
  $('#siteGuide').on('click', function () {
    openLink('https://www.ouinolanguages.com/guide/');
  });

  if (osType == 'pwa') {
    $('#blockSection, #blockSectionB').on('click', function (e) {
      if ($(e.target).hasClass('webBtn2')) {
        return;
      }
      blockSection();
    });
    $('#vocabSection, #vocabSectionB').on('click', function (e) {
      if ($(e.target).hasClass('webBtn2')) {
        return;
      }
      vocabSection();
    });
    $('#convoSection, #convoSectionB').on('click', function (e) {
      if ($(e.target).hasClass('webBtn2')) {
        return;
      }
      convoSection();
    });
    $('#pronunSection, #pronunSectionB').on('click', function (e) {
      if ($(e.target).hasClass('webBtn2')) {
        return;
      }
      pronunSection();
    });
    $('#verbSectionB').on('click', function (e) {
      if ($(e.target).hasClass('webBtn2')) {
        return;
      }
      $('.ouinoContentB').hide();
      $('#newVerb').fadeIn();
    });
  } else {
    $('#blockSection, #blockSectionB').on('click', blockSection);
    $('#vocabSection, #vocabSectionB').on('click', vocabSection);
    $('#convoSection, #convoSectionB').on('click', convoSection);
    $('#pronunSection, #pronunSectionB').on('click', pronunSection);
    $('#verbSectionB').on('click', function () {
      var menuOuinoPos2 = $(window).scrollTop() || $('body').scrollTop();
      localStorage.setItem('menuOuinoPos2', menuOuinoPos2);
      window.scrollTo(0, 0);
      $('.ouinoContentB').hide();
      $('#newVerb').fadeIn();
    });
  }

  ///2020 EXTRA START
  $('#verbSection5B').on('click', verbSection);
  $('.vLoad').on('click', function () {
    $('.ouinoContentB').hide();
    $(window).scrollTop(0);
    verbMenu();
  });
  $('.indiLoad').on('click', function () {
    $('iframe, #iLoad, .progMenus').hide();
    $('iframe').attr('src', '');
    $('.lessonMenus').css({
      x: '200%',
    });
    verbSection3();
  });
  ///2020 EXTRA END

  $('.verbB').on('click', function () {
    $('#newVerb').hide();
  });

  $('#verbSection1, #verbSection1B').on('click', verbSection1);
  $('#lessonMenu5 .mainTitle, #lessonMenu5 .sectionLang').on(
    'click',
    function () {
      $('iframe, #iLoad').hide();
      $('iframe').attr('src', '');
      $('.lessonMenus').css({
        x: '200%',
      });
      verbSection3();
    },
  );
  $('#lessonMenu7 .mainTitle, #lessonMenu7 .sectionLang').on(
    'click',
    function () {
      $('iframe, #iLoad').hide();
      $('iframe').attr('src', '');
      $('.lessonMenus').css({
        x: '200%',
      });
      verbSection1();
    },
  );
  $('#verbSection2, #verbSection2B').on('click', verbSection2);
  $('#verbSection3, #verbSection3B').on('click', verbSection5);
  $('#spromptYes').on('click', function () {
    $('#loadLogo').show();
    setTimeout(function () {
      window.location.href = localStorage.getItem(storeInfo + 'saved');
    }, 100);
  });
  ///PORTUGUESE CHANGE START
  $('#spromptNo').on('click', function () {
    $('#sprompt').hide();
    $('#loadLogo').show();
    setTimeout(function () {
      homeMenu();
    }, 200);
    localStorage.removeItem(storeInfo + 'saved');
    setTimeout(function () {
      savePosition();
    }, 3000);
  });
  ///PORTUGUESE CHANGE END
  $('#verbSection4, #verbSection4B').on('click', verbSection4);
  $('#guidedSection, #guidedSectionB').on('click', guidedSection);
  ///CHECK FOR DIFFERENT VERSIONS
  $('#userTitle4').on('click', function () {
    openLink('https://www.ouinolanguages.com/teach/?account=' + userEmail);
  });

  $('#userTitle5').on('click', function () {
    openLink('https://www.ouinolanguages.com/login/?account=' + userEmail);
  });
  ///2020 EXTRA
  ///2020 EXTRA
  ///2019 CHANGE

  $('#extraSection, #extraSectionB').on('click', function () {
    extraSection();
  });
  $('#userSection, #userSectionB').on('click', function () {
    userSection();
  });

  /////2020 EXTRA START	////////////////////////////////////////////////////////////
  setTimeout(function () {
    $('#searchBtn').on('click', function () {
      if ($('#redArrowImg').is(':visible')) {
        $(
          '#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn',
        ).removeClass('disabled');
        $('#redArrowImg, #mainLogoImg').hide();
      }
      $('.ouinoContentB').hide();
      $('body').append(
        '<iframe id="searchFrame" src="search/index.html"></iframe><div id="searchFrame2"><div>X</div></div>',
      );
      $('#searchFrame2').on('click', function () {
        $('.ouinoContentB').show();
        $('#searchFrame2, #searchFrame').remove();
      });
    });
    if (currentDevice != 'mobile') {
      $('#searchBtn').hover(function () {
        $('#arrowLabel').text('SEARCH WITH KEYWORD');
        $('.instructions').toggleClass('showDiv');
      });
    }
    $('.extraBlock').on('click', function () {
      window.location.href = 'block/0/index.html';
    });

    var bb;
    for (bb = 0; bb < $('.Lsection').length; bb++) {
      var gqElement = $('.Lsection').eq(bb).children('.lessonItems');
      if ($('.Lsection').eq(bb).children('.Lsection').length != 0) {
        gqElement = $('.Lsection')
          .eq(bb)
          .children('.Lsection')
          .children('.lessonItems');
      }
      var gqLength = gqElement.length;
      var gqVerb = 0;
      var gqBlock = 0;
      var gqVocab = 0;
      var uu;
      for (uu = 0; uu < gqLength; uu++) {
        var gqClass = gqElement.eq(uu).attr('class');
        if (gqClass.indexOf('verb') != -1 && gqClass.indexOf('noQuiz') == -1) {
          gqClass = gqClass.split('verb');
          gqClass = gqClass[1].split(' quizOnly').join('');
          if ($('#lessonMenu8 .Lverb' + gqClass).length == 0) {
            gqVerb++;
          }
        } else if (
          gqClass.indexOf('vocab') != -1 &&
          gqClass.indexOf('noQuiz') == -1
        ) {
          gqVocab++;
        } else if (
          gqClass.indexOf('block') != -1 &&
          gqClass.indexOf('noQuiz') == -1
        ) {
          gqBlock++;
        }
      }
      ///2023 START REPLACE

      if (
        $('.Lsection').eq(bb).children('.sectionTitle').children('.gq')
          .length == 0
      ) {
        if (gqBlock > 1 || gqVocab > 1 || gqVerb > 1) {
          $('.Lsection')
            .eq(bb)
            .children('.sectionTitle')
            .append('<div class="gq"></div>');
        }
      }
      ///2023 END
    }

    //2021A
    for (bb = 0; bb < $('.gq').length; bb++) {
      var gqCount = $('.gq')
        .eq(bb)
        .parent('.Lsection')
        .children('.Lsection')
        .children('.gq').length;
      if (gqCount == 1) {
        $('.gq')
          .eq(bb - 1)
          .hide();
      }
    }
    //2021A

    if (osType == 'pwa') {
      $('.lessonItems').append('<div class="webBtn"></div');
      $('.sectionBtnsB').append('<div class="webBtn2"></div');
      $('.quizOnly .webBtn').remove();
      var dCompat = false;
      if (
        navigator.userAgent.indexOf('Opera') != -1 ||
        navigator.userAgent.indexOf('OPR') != -1
      ) {
        dCompat = false;
      } else if (navigator.userAgent.indexOf('MSIE') != -1) {
        alert(
          'NOT COMPATIBLE WITH INTERNET EXPLORER, PLEASE UPDATE YOUR BROWSER',
        );
        dCompat = false;
      } else if (navigator.userAgent.indexOf('Edg') != -1) {
        dCompat = true;
      } else if (
        navigator.userAgent.indexOf('Safari') != -1 &&
        navigator.userAgent.indexOf('Chrome') == -1
      ) {
        dCompat = false;
      } else if (navigator.userAgent.indexOf('Firefox') != -1) {
        dCompat = true;
      } else if (navigator.userAgent.indexOf('Chrome') != -1) {
        dCompat = true;
      }
      if (!dCompat) {
        $('.webBtn, .webBtn2').addClass('disabled2');
      }
      setTimeout(updateCache, 100);
      $('.webBtn, .webBtn2').on('click', function () {
        $('.webBtn, .webBtn2').addClass('downloadDisabled');
        $(this).removeClass('downloadError');
        if ($(this).hasClass('downloading')) {
          return;
        } else if ($(this).hasClass('downloaded')) {
          if ($(this).hasClass('webBtn')) {
            $(this).removeClass('downloaded');
          }
          theWeb = $(this);
          removeFile = true;
          urlFinder();
        } else {
          theWeb = $(this);
          removeFile = false;
          urlFinder();
        }
      });
      if (currentDevice != 'mobile') {
        $('.webBtn').on('mouseenter', function () {
          $('#arrowLabel').text('DOWNLOAD LESSON FOR OFFLINE USE');
        });
        $('.webBtn2').on('mouseenter', function () {
          $('#arrowLabel').text('DOWNLOAD MODULE FOR OFFLINE USE');
        });
        $('.webBtn, .webBtn2').hover(function () {
          $('.instructions').toggleClass('showDiv');
          $(this).toggleClass('fullOpacity');
        });
      }
    }

    //group quiz
    if (currentDevice != 'mobile') {
      $('.gq').on('mouseenter', function () {});
      $('.gq').hover(function () {
        $('#arrowLabel').text('RANDOM QUESTIONS FROM THE CATEGORY');
        $('.instructions').toggleClass('showDiv');
      });
    }
    $('.gq').on('click', function () {
      var theElement = $(this);
      ///2023 START REPLACE
      var gqElement = $(this).parent().parent().children('.lessonItems');
      var gqVerb = [];
      var gqBlock = [];
      var gqVocab = [];

      var bGroup = $(this)
        .attr('class')
        .split('gq')
        .join('')
        .split(' ')
        .join('');

      if (bGroup.indexOf('-') != -1) {
        //CUSTOM GROUP START
        bGroup = bGroup.split('-');
        var bModule = bGroup.shift();
        if (bModule == 'block') {
          gqBlock = bGroup;
        } else if (bModule == 'verb') {
          gqVerb = bGroup;
        }

        if (!plusContinue) {
          var plusModule =
            '#' + $(this).parent().parent().parent().parent().attr('id');
          var plusTitles = [];

          var plusCat = $(plusModule + ' .L' + bModule + bGroup[0])
            .parent()
            .children('.sectionTitle')
            .text();
          if (plusCat.indexOf(': ') != -1) {
            plusCat = plusCat.split(': ');
            plusCat = plusCat[0] + ': ';
          } else {
            plusCat = '';
          }
          for (let i = 0; i <= bGroup.length; i++) {
            var plusTitle = $(plusModule + ' .L' + bModule + bGroup[i])
              .parent()
              .children('.sectionTitle')
              .text()
              .split(plusCat)
              .join('');
            if (plusTitles.indexOf(plusTitle) == -1 && plusTitle.length > 2) {
              plusTitles.push(
                '<strong>' + plusTitle.split(' ').join('&nbsp;') + '</strong>',
              );
            }
          }

          let plusArr;

          plusTitles[0] = '<strong>' + plusCat + '</strong>' + plusTitles[0];

          if (plusTitles.length === 0) {
            plusArr = '';
          } else if (plusTitles.length === 1) {
            plusArr = plusTitles[0];
          } else {
            let last = plusTitles.pop();
            plusArr = plusTitles.join(', ') + ' and ' + last;
          }

          if ($('#customConfirm').length == 0) {
            $('body').append(
              '<div id="customConfirm" class="custom-confirm"><div class="custom-confirm-content"><p></p><div id="confirmYes">Yes</div><div id="confirmNo">No</div></div></div>',
            );
            $('#confirmYes').click(function () {
              $('#customConfirm').hide();
              plusContinue = true;
              theElement.trigger('click');
            });
            $('#confirmNo').click(function () {
              $('#customConfirm').hide();
              plusContinue = false;
              return;
            });
          }

          if (plusArr.length < 5) {
            plusContinue = true;
            theElement.trigger('click');
            return;
          }
          $('#customConfirm p').html(
            'This will load exercises for ' +
              plusArr +
              '. Do you wish to continue?',
          );
          $('#customConfirm').show();
          return;
        }

        //CUSTOM GROUP START
      } else {
        ///NORMAL START
        if ($(this).parent().children('.Lsection').length != 0) {
          gqElement = $(this)
            .parent()
            .children('.Lsection')
            .children('.lessonItems');
        }
        var gqLength = gqElement.length;

        var uu;
        for (uu = 0; uu < gqLength; uu++) {
          var gqClass = gqElement.eq(uu).attr('class');
          if (
            gqClass.indexOf('verb') != -1 &&
            gqClass.indexOf('noQuiz') == -1
          ) {
            gqClass = gqClass.split('verb');
            gqClass = gqClass[1].split(' quizOnly').join('');
            if ($('#lessonMenu8 .Lverb' + gqClass).length == 0) {
              gqVerb.push(gqClass);
            }
          } else if (
            gqClass.indexOf('vocab') != -1 &&
            gqClass.indexOf('noQuiz') == -1
          ) {
            gqClass = gqClass.split('vocab');
            gqClass = gqClass[1].split(' quizOnly').join('');
            gqVocab.push(gqClass);
          } else if (
            gqClass.indexOf('block') != -1 &&
            gqClass.indexOf('noQuiz') == -1
          ) {
            gqClass = gqClass.split('block');
            gqClass = gqClass[1].split(' quizOnly').join('');
            gqBlock.push(gqClass);
          }
        }
        ///NORMAL END
      }

      if (gqVerb.length > gqVocab.length && gqVerb.length > gqBlock.length) {
        window.location.href = 'verb/0/index.html?lessons=' + gqVerb.join('-');
      } else if (
        gqVocab.length > gqVerb.length &&
        gqVocab.length > gqBlock.length
      ) {
        window.location.href =
          'vocab/0/index.html?lessons=' + gqVocab.join('-');
      } else if (
        gqBlock.length > gqVerb.length &&
        gqBlock.length > gqVocab.length
      ) {
        window.location.href =
          'block/0/index.html?lessons=' + gqBlock.join('-');
      } else if (gqVocab.length > 1) {
        window.location.href =
          'vocab/0/index.html?lessons=' + gqVocab.join('-');
      } else if (gqBlock.length > 1) {
        window.location.href =
          'block/0/index.html?lessons=' + gqBlock.join('-');
      } else if (gqVerb.length > 1) {
        window.location.href = 'verb/0/index.html?lessons=' + gqVerb.join('-');
      }
    });
    //group quiz
  }, 1000);
  /////2020 EXTRA END		////////////////////////////////////////////////////////////

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
        mainMusic.volume = ui.value * 0.5;
        sfxSprite.volume = ui.value;
        localStorage['programVolume'] = ui.value;
      },
    });
    if (localStorage['programVolume'] != null) {
      mainSound.volume = localStorage['programVolume'];
      mainMusic.volume = localStorage['programVolume'] * 0.6;
      sfxSprite.volume = localStorage['programVolume'];
      $('#volDiv').slider('value', localStorage['programVolume']);
    }
  } else {
    $('#volDiv').addClass('forceHide');
  }
  ///OS END

  $('#usersBack').on('click', function () {
    $('#usersCont2, #usersBack').hide();
    $('#usersCont').show();
    $('.adminWarn1').hide();
    $('#userMenu .mainTitle').html(
      '<img class="mainLogoImg2" src="common/logoUser.svg">User Administration',
    );
  });
  $('#userTitle3').on('click', function () {
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      window.location.href = 'goals/index.html';
    }, 100);
  });
  $('#userTitle2').on('click', function () {
    if ($('.allUsers').length == 0) {
      getUsers();
    }
    if ($('#usersCont2').is(':visible')) {
      $('#usersCont2, #usersBack').hide();
      $('#usersCont').show();
      $('.adminWarn1').hide();
      $('#userMenu .mainTitle').html(
        '<img class="mainLogoImg2" src="common/logoUser.svg">User Administration',
      );
    } else if ($('#userMenu').is(':visible')) {
      $('#musicOnOff').show();
      $('#userMenu').css({
        x: '200%',
      });
      $('#userMenu, #userWrap').hide();
    } else {
      $('#musicOnOff').hide();
      $('#tutorialMenu, #userMenu2').css({
        x: '200%',
      });
      $('#userWrap, #tutorialMenu, #userMenu2').hide();
      $('#userMenu').show();
      $('#userMenu').css({
        x: '100%',
      });
    }
  });
  $('#tutorialBtn').on('click', function () {
    if ($('#redArrowImg').is(':visible')) {
      $('#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn').removeClass(
        'disabled',
      );
      $('#redArrowImg, #mainLogoImg').hide();
    }
    toggleTutorial();
  });
  $('#tutorialMenu').on('click', function (e) {
    if (e.target == this) {
      if (!$('.ouinoContentB').is(':visible')) {
        $('.ouinoContentB').show();
      }
      toggleTutorial();
    }
  });
  $('#userMenu2').on('click', function (e) {
    if (e.target == this) {
      toggleProgMenu();
    }
  });
  $('#userMenu').on('click', function (e) {
    if (e.target == this) {
      $('#userMenu').css({
        x: '200%',
      });
      $('#userMenu').hide();
      $('#musicOnOff').show();
    }
  });
  $('.lessonItems').on('click', loadLesson);

  $('.extraVocab').on('click', function () {
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      window.location.href = 'vocab/0/index.html';
    }, 100);
  });
  $('.extraVerb').on('click', function () {
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      window.location.href = 'verb/0/index.html';
    }, 100);
  });

  //ADD GERMAN HERE
  $('.imgItemBack, .imgItemImages').on('click', function () {
    $('.imgItemBack, .imgItemImages').hide();
  });
  $('.imageItem1').on('click', function () {
    $('.imgItemBack, #imgItemImage1').show();
  });
  $('.imageItem2').on('click', function () {
    $('.imgItemBack, #imgItemImage2').show();
  });
  $('.imageItem3').on('click', function () {
    $('.imgItemBack, #imgItemImage3').show();
  });
  $('.imageItem4').on('click', function () {
    $('.imgItemBack, #imgItemImage4').show();
  });
  $('.imageItem5').on('click', function () {
    $('.imgItemBack, #imgItemImage5').show();
  });

  if (osType == 'iOS') {
    $('#loginCenter').append(
      '<div id="purBtn"><div>Not a member?</div>SEE PLANS</div>',
    );
    $('#purBtn').on('click', function () {
      if ($('#startCover').is(':visible') == false) {
        $('#loadLogo').show();
      }
      setTimeout(function () {
        window.location.href = 'purchase/index.html';
      }, 100);
    });
  }

  if (currentDevice == 'mobile') {
    ///MOBILE OPTIONS
    $('#volDiv').hide();
    $('#background').on('touchmove', function (e) {
      e.preventDefault();
    });
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
    $('.sectionOptions').on('click', toggleOptions);
    //2018CHANGE
    $('#optionBtn').on('click', toggleOptions2);
    ///PORTUGUESE CHANGE START
    $('.sectionBtns, .sectionBtns2, .verbSectionBtns').on('click', function () {
      localStorage.removeItem(storeInfo + 'saved');
      setTimeout(function () {
        savePosition();
      }, 3000);
    });
    ///PORTUGUESE CHANGE END
    $('.extraPrac').on('click', function () {
      if ($('#startCover').is(':visible') == false) {
        $('#loadLogo').show();
      }
      setTimeout(function () {
        window.location.href = 'extra/index.html';
      }, 100);
    });
    //2018CHANGE
    $('#menuOptions').on('click', function () {
      disableTouch();
      toggleOptions();
    });
    $('#userBtn').on('click', toggleUser);
    $('#menuHome').on('click', homeMenu);

    ///2023 START ADD
    $('#menuMain2').on('touchstart mousedown', function (event) {
      event.stopPropagation();
      homeMenu();
    });
    $('#background, .lessonMenus').on('click', function () {
      if ($('#userWrap').is(':visible')) {
        $('#userWrap').hide();
      }
    });

    if (currentDevice == 'mobile') {
      $('.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo')
        .on('touchstart', function () {
          $(this).addClass('fullOpacity');
        })
        .on('touchend touchcancel', function () {
          $(this).removeClass('fullOpacity');
        });
    } else {
      $('.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo')
        .on('mouseover', function () {
          $(this).addClass('fullOpacity');
        })
        .on('mouseout mouseleave', function () {
          $(this).removeClass('fullOpacity');
        });
    }

    ///2023 END
  } else {
    ///////DESKTOP BUTTON MOUSE OPTIONS
    $('.progMenus').on('click', function () {
      $(this).toggleClass('progStored');
    });
    $('.lessonItems')
      .on('mouseover mouseenter', function (e) {
        if (!$(e.target).hasClass('Lstars')) {
          $(this).addClass('lessonItemsHOVER');
        }
      })
      .on('mouseout mouseleave', function () {
        $(this).removeClass('lessonItemsHOVER');
      });
    $('.imageItems, .extras')
      .on('mouseover mouseenter', function () {
        $(this).addClass('lessonItemsHOVER');
      })
      .on('mouseout mouseleave', function () {
        $(this).removeClass('lessonItemsHOVER');
      });
    $('.Lstars').hover(function () {
      $(this).toggleClass('LstarsHOVER');
    });
    $('#optionWrap').on('click', function (e) {
      if (e.target == this) {
        toggleOptions();
      }
    });
    $('.sectionOptions').on('click', toggleOptions);
    $('.sectionOptions').hover(function () {
      $('#arrowLabel').text('SETTINGS');
      $('.instructions').toggleClass('showDiv');
      $(this).toggleClass('fullOpacity');
    });
    //2018CHANGE
    $('#optionBtn').on('click', toggleOptions2);
    $('#optionBtn').hover(function () {
      $('#arrowLabel').text('SETTINGS');
      $('.instructions').toggleClass('showDiv');
    });
    $('.sectionLang').hover(function () {
      $('#arrowLabel').text('CHANGE ORDER');
      $('.instructions').toggleClass('showDiv');
      $(this).toggleClass('fullOpacity');
    });
    $('.sectionLang').on('mouseenter', function () {});
    ///PORTUGUESE CHANGE START
    $('.sectionBtns, .sectionBtns2, .verbSectionBtns').on('click', function () {
      localStorage.removeItem(storeInfo + 'saved');
      setTimeout(function () {
        savePosition();
      }, 3000);
    });
    ///PORTUGUESE CHANGE END
    $('.extraPrac').hover(function () {
      $(this).toggleClass('fullOpacity');
    });
    $('.extraPrac').on('click', function () {
      window.location.href = 'extra/index.html';
    });
    $('.extraPrac').on('mouseenter', function () {});
    //2018CHANGE
    $('#menuOptions').on('click', toggleOptions);
    $('#menuHome, #menuMain2').on('click', function () {
      homeMenu();
    });
    $('#menuMain2').hover(function () {
      $('#arrowLabel').text('HOME MENU');
      $('.instructions').toggleClass('showDiv');
    });
    $('.smallIcon, .smallUnderline, .smallerUnderline, .smallLogo').hover(
      function () {
        $(this).toggleClass('fullOpacity');
      },
    );
    $('.selectOptions').hover(function () {
      $(this).toggleClass('fullOpacity');
    });
    $('.selectOptions, .starSelect, .knowledgeBox, .sectionOptions').on(
      'mouseenter',
      function () {},
    );
    $('#userBtn').on('click', toggleUser);
    $('#background, .lessonMenus').on('click', function () {
      if ($('#userWrap').is(':visible')) {
        $('#userWrap').hide();
      }
    });
    $('.userBtns').hover(function () {
      $(this).toggleClass('userBtnsHOVER');
    });
    $('#userBtn').hover(function () {
      $('#arrowLabel').text('USER MENU');
      $('.instructions').toggleClass('showDiv');
    });
    $('#tutorialBtn').hover(function () {
      $('#arrowLabel').text('TUTORIALS (HOW TO USE THE PROGRAM)');
      $('.instructions').toggleClass('showDiv');
    });
    $('.sectionBtns, .sectionBtns2, .verbSectionBtns').hover(function () {
      $(this).toggleClass('theBtnHover');
    });
    $(
      '.smallIcon, #menuMain2, .lessonItems, .sectionBtns ,.sectionBtns2, .verbSectionBtns, .userBtns, .imageItems, .extras, .sectionBtnsB, .sectionBtnsB2',
    ).on('mouseenter', function () {});
    /////END DESKTOP BUTTONS
  }
}

////////////SHUFFLE STUFF
function loadLesson(e) {
  if (osType == 'pwa') {
    if ($(e.target).hasClass('webBtn')) {
      return;
    }

    if ($(e.target).children().hasClass('downloadDisabled')) {
      warningPopup();
      return;
    }

    if (
      $(e.target).children().hasClass('downloadOffline') &&
      !$(e.target).children().hasClass('downloaded')
    ) {
      offlinePopup();
      return;
    }
  }

  if ($(e.target).hasClass('Lstars')) {
    return;
  }

  ///PORTUGUESE CHANGE START////////////
  ///STORE MENU POSITIONS
  if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var scrArr = localStorage.getItem(storeInfo + 'scrollPercent').split('|');
    if (scrArr.length == 11) {
      for (var i = 0; i < 11; i++) {
        //////////

        if ($('#lessonMenu' + (i + 1)).is(':visible')) {
          var element2 = document.getElementById('lessonMenu' + (i + 1));
          var scrollTop2 = element2.scrollTop;
          sessionStorage.setItem(storeInfo + 'scrollTemp', scrollTop2);
          var scrollHeight2 = element2.scrollHeight;
          var clientHeight2 = element2.clientHeight;
          var sC = scrollTop2 / (scrollHeight2 - clientHeight2);
          sC = parseFloat(sC.toFixed(3));
          scrArr[i] = sC;
        }
        ////////
      }
    }

    localStorage.setItem(storeInfo + 'scrollPercent', scrArr.join('|'));
  } else {
    localStorage.setItem(storeInfo + 'scrollPercent', '0|0|0|0|0|0|0|0|0|0|0');
  }

  ///SAVE MENU POSITIONS

  ///PORTUGUESE CHANGE END////////////////

  var lesClick = $(this)
    .attr('class')
    .replace('tItems ', '')
    .replace('lessonItems L', '')
    .replace('lessonItems L', '')
    .replace(' noQuiz', '')
    .replace(' quizOnly', '')
    .replace(' lessonItemsHOVER', '');
  var numClick;
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }
  setTimeout(function () {
    if (lesClick.charAt(3) == 'c') {
      numClick = lesClick.replace('block', '');
      window.location.href = 'block/' + numClick + '/index.html';
    } else if (lesClick.charAt(3) == 'v') {
      numClick = lesClick.replace('convo', '');
      window.location.href = 'convo/' + numClick + '/index.html';
    } else if (lesClick.charAt(3) == 'a') {
      numClick = lesClick.replace('vocab', '');
      window.location.href = 'vocab/' + numClick + '/index.html';
    } else if (lesClick.charAt(3) == 'b') {
      numClick = lesClick.replace('verb', '');
      window.location.href = 'verb/' + numClick + '/index.html';
    }
    //2018CHANGE
    else if (lesClick.charAt(3) == 'n') {
    }
    //2018CHANGE
  }, 100);
}
///END SHUFFLE

////////////SHUFFLE STUFF
function shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

function changeColor() {
  $('.sectionTitle').show();
  if (currentSecShort == 'block') {
    $('.gradientColor').css({
      background:
        'url(common/black.svg), radial-gradient(' +
        btnColor[0] +
        ',' +
        btnColor[1] +
        ')',
    });
    $('.gradientColor2').css({
      background: 'radial-gradient(' + btnColor[0] + ',' + btnColor[1] + ')',
    });
    $('.gradientColor3').css({
      background:
        'url(../../common/black.svg), radial-gradient(' +
        btnColor[0] +
        ',' +
        btnColor[1] +
        ')',
    });
  } else if (currentSecShort == 'vocab') {
    $('.gradientColor').css({
      background:
        'url(common/black.svg), radial-gradient(' +
        btnColor[2] +
        ',' +
        btnColor[3] +
        ')',
    });
    $('.gradientColor2').css({
      background: 'radial-gradient(' + btnColor[2] + ',' + btnColor[3] + ')',
    });
    $('.gradientColor3').css({
      background:
        'url(../../common/black.svg), radial-gradient(' +
        btnColor[2] +
        ',' +
        btnColor[3] +
        ')',
    });
  } else if (currentSecShort == 'convo') {
    $('.gradientColor').css({
      background:
        'url(common/black.svg), radial-gradient(' +
        btnColor[4] +
        ',' +
        btnColor[5] +
        ')',
    });
    $('.gradientColor2').css({
      background: 'radial-gradient(' + btnColor[4] + ',' + btnColor[5] + ')',
    });
    $('.gradientColor3').css({
      background:
        'url(../../common/black.svg), radial-gradient(' +
        btnColor[4] +
        ',' +
        btnColor[5] +
        ')',
    });
  } else if (currentSecShort == 'pronun') {
    $('.gradientColor').css({
      background:
        'url(common/black.svg), radial-gradient(' +
        btnColor[6] +
        ',' +
        btnColor[7] +
        ')',
    });
    $('.gradientColor2').css({
      background: 'radial-gradient(' + btnColor[6] + ',' + btnColor[7] + ')',
    });
    $('.gradientColor3').css({
      background:
        'url(../../common/black.svg), radial-gradient(' +
        btnColor[6] +
        ',' +
        btnColor[7] +
        ')',
    });
  } else if (currentSecShort == 'verb') {
    $('.gradientColor').css({
      background:
        'url(common/black.svg), radial-gradient(' +
        btnColor[8] +
        ',' +
        btnColor[9] +
        ')',
    });
    $('.gradientColor2').css({
      background: 'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
    });
    $('.gradientColor3').css({
      background:
        'url(common/black.svg), radial-gradient(' +
        btnColor[8] +
        ',' +
        btnColor[9] +
        ')',
    });
  }
}

function extraSection() {
  if (!menusLoaded) {
    f2load = 'extraSection';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }
  setTimeout(function () {
    window.location.href = 'extra/index.html';
  }, 100);
}

function userSection() {
  if (!menusLoaded) {
    f2load = 'userSection';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }
  setTimeout(function () {
    window.location.href = 'goals/index.html';
  }, 100);
}

function blockSection() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'blockSection';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }
  var menuOuinoPos2 = $(window).scrollTop() || $('body').scrollTop();
  localStorage.setItem('menuOuinoPos2', menuOuinoPos2);
  $('.ouinoContentB').hide();

  var scPos = 0;
  $('#lessonBack1, #lessonMenu1').css({
    opacity: 0,
  });
  $('#lessonMenu1').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 1;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu1').scrollTop(scPos);
  $('#lessonBack1, #lessonMenu1').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu1').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu1, #lessonBack1').show();
  $('#lessonMenu1').css({
    x: '100%',
  });
  sessionStorage['menuType'] = 'blockSection';
  currentSection = 'Building Blocks';
  currentSecShort = 'block';
  changeColor();
  if (!generatedInfo) {
    generateInfo();
  }
}

function vocabSection() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'vocabSection';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }
  var menuOuinoPos2 = $(window).scrollTop() || $('body').scrollTop();
  localStorage.setItem('menuOuinoPos2', menuOuinoPos2);
  $('.ouinoContentB').hide();

  var scPos = 0;
  $('#lessonBack2, #lessonMenu2').css({ opacity: 0 });
  $('#lessonMenu2').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 2;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu2').scrollTop(scPos);
  $('#lessonBack2, #lessonMenu2').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu2').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu2, #lessonBack2').show();
  $('#lessonMenu2').css({
    x: '100%',
  });

  sessionStorage['menuType'] = 'vocabSection';
  currentSection = 'Vocabulary';
  currentSecShort = 'vocab';
  changeColor();
  if (!generatedInfo) {
    generateInfo();
  }
}

function convoSection() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'convoSection';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }
  var menuOuinoPos2 = $(window).scrollTop() || $('body').scrollTop();
  localStorage.setItem('menuOuinoPos2', menuOuinoPos2);

  $('.ouinoContentB').hide();

  var scPos = 0;
  $('#lessonBack3, #lessonMenu3').css({ opacity: 0 });
  $('#lessonMenu3').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 3;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu3').scrollTop(scPos);
  $('#lessonBack3, #lessonMenu3').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu3').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu3, #lessonBack3').show();
  $('#lessonMenu3').css({
    x: '100%',
  });

  sessionStorage['menuType'] = 'convoSection';
  currentSection = 'Conversations';
  currentSecShort = 'convo';
  changeColor();
  if (!generatedInfo) {
    generateInfo();
  }
}

///2018CHANGE
function pronunSection() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'pronunSection';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }
  var menuOuinoPos2 = $(window).scrollTop() || $('body').scrollTop();
  localStorage.setItem('menuOuinoPos2', menuOuinoPos2);
  $('.ouinoContentB').hide();
  setTimeout(function () {
    sessionStorage['menuType'] = 'home';
    currentSection = 'Pronunciation';
    currentSecShort = 'pronun';
    var rand4 = [1, 2, 3, 4];
    shuffle(rand4);
    rand4 = rand4[0];
    sessionStorage['pronunTheme'] = rand4;
    window.location.href = 'pronun/index.html';
  }, 100);
}
///2018CHANGE

function verbSection1() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'verbSection1';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }

  var scPos = 0;
  $('#lessonBack5, #lessonMenu5').css({ opacity: 0 });
  $('#lessonMenu5').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 5;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu5').scrollTop(scPos);
  $('#lessonBack5, #lessonMenu5').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu5').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu5, #lessonBack5').show();
  $('#lessonMenu5').css({
    x: '100%',
  });

  sessionStorage['menuType'] = 'verbSection1';
  currentSection = 'Verbs';
  currentSecShort = 'verb';
  verbKind = 'indi';
  changeColor();
  if (!generatedInfo) {
    generateInfo();
  }
}

function verbSection2() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'verbSection2';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }

  var scPos = 0;
  $('#lessonBack5, #lessonMenu6').css({ opacity: 0 });
  $('#lessonMenu6').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 6;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu6').scrollTop(scPos);
  $('#lessonBack5, #lessonMenu6').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu6').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu6, #lessonBack5').show();
  $('#lessonMenu6').css({
    x: '100%',
  });

  sessionStorage['menuType'] = 'verbSection2';
  currentSection = 'Verbs';
  currentSecShort = 'verb';
  verbKind = 'key';
  changeColor();
  if (!generatedInfo) {
    generateInfo();
  }
}

function verbSection3() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'verbSection3';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }

  var scPos = 0;
  $('#lessonBack5, #lessonMenu7').css({ opacity: 0 });
  $('#lessonMenu7').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 7;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu7').scrollTop(scPos);
  $('#lessonBack5, #lessonMenu7').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu5').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu7, #lessonBack5').show();
  $('#lessonMenu7').css({
    x: '100%',
  });

  sessionStorage['menuType'] = 'verbSection3';
  currentSection = 'Verbs';
  currentSecShort = 'verb';
  verbKind = 'indi';
  changeColor();
  if (!generatedInfo) {
    generateInfo();
  }
}

function verbSection4() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'verbSection4';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }

  var scPos = 0;
  $('#lessonBack5, #lessonMenu8').css({ opacity: 0 });
  $('#lessonMenu8').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 8;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu8').scrollTop(scPos);
  $('#lessonBack5, #lessonMenu8').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu8').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu8, #lessonBack5').show();
  $('#lessonMenu8').css({
    x: '100%',
  });

  sessionStorage['menuType'] = 'verbSection4';
  currentSection = 'Verbs';
  currentSecShort = 'verb';
  verbKind = 'endings';
  changeColor();
  if (!generatedInfo) {
    generateInfo();
  }
}

function verbSection5() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'verbSection5';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }

  var scPos = 0;
  $('#lessonBack5, #lessonMenu10').css({ opacity: 0 });
  $('#lessonMenu10').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 10;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu10').scrollTop(scPos);
  $('#lessonBack5, #lessonMenu10').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu10').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu10, #lessonBack5').show();
  $('#lessonMenu10').css({
    x: '100%',
  });

  sessionStorage['menuType'] = 'verbSection5';
  currentSection = 'Verbs';
  currentSecShort = 'verb';
  verbKind = 'express';
  changeColor();
  if (!generatedInfo) {
    generateInfo();
  }
}

///2020 EXTRA START WARNING: NOT THE SAME FOR EVERY DEVICE
function verbSection() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'verbSection';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }

  var scPos = 0;
  $('#lessonBack5, #lessonMenu11').css({ opacity: 0 });
  $('#lessonMenu11').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 11;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu11').scrollTop(scPos);
  $('#lessonBack5, #lessonMenu11').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu11').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu11, #lessonBack5').show();
  $('#lessonMenu11').css({
    x: '100%',
  });

  sessionStorage['menuType'] = 'verbSection';
  currentSection = 'Verbs';
  currentSecShort = 'verb';
  verbKind = 'all';
  changeColor();
  if (!generatedInfo) {
    generateInfo();
  }
}
///2020 EXTRA END

function guidedSection() {
  if ($(this).children('.telaGot4:visible').length >= 1) {
    return;
  }

  if (!menusLoaded) {
    f2load = 'guidedSection';
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 100);
    return;
  }

  $('.lessonMenus').hide();
  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }
  var menuOuinoPos2 = $(window).scrollTop() || $('body').scrollTop();
  localStorage.setItem('menuOuinoPos2', menuOuinoPos2);
  $('.ouinoContentB').hide();

  var scPos = 0;
  $('#lessonBack4, #lessonMenu9').css({ opacity: 0 });
  $('#lessonMenu9').show();

  sectionScroll();

  if (sessionStorage.getItem(storeInfo + 'scrollTemp')) {
    scPos = parseInt(sessionStorage.getItem(storeInfo + 'scrollTemp'));
  } else if (localStorage.getItem(storeInfo + 'scrollPercent')) {
    var lMenuNum = 9;
    var scrollPer = localStorage
      .getItem(storeInfo + 'scrollPercent')
      .split('|');
    var scrollHeight2 = document.getElementById(
      'lessonMenu' + lMenuNum,
    ).scrollHeight;
    scPos = scrollHeight2 * parseFloat(scrollPer[lMenuNum - 1]) * 0.94;
  }

  $('#lessonMenu9').scrollTop(scPos);
  $('#lessonBack4, #lessonMenu9').animate(
    {
      opacity: 1,
    },
    500,
    function () {
      $('#loadLogo').hide();
      $('#progMenu9').fadeIn();
    },
  );
  $('#musicOnOff').hide();
  $('#lessonMenu9, #lessonBack4').show();
  $('#lessonMenu9').css({
    x: '100%',
  });

  sessionStorage['menuType'] = 'guidedSection';
  currentSecShort = 'all';
  if (!generatedInfo) {
    generateInfo();
  }
}

var menusLoaded = false;
////PORTUGUESE CHANGE START
function savePosition() {
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
}
////PORTUGUESE CHANGE START

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TEMPORARY TOUCH DISABLE
function disableTouch() {
  $('body').addClass('disableTouch');
  setTimeout(function () {
    $('body').removeClass('disableTouch');
  }, 500);
}

function toggleMusic3() {
  ///2020 EXTRA START
  if (localStorage[storeInfo + 'musicSTOREvocab'] == 'off') {
    localStorage[storeInfo + 'musicSTOREprogram'] = 'OFF';
  } else {
    localStorage[storeInfo + 'musicSTOREprogram'] = 'ON';
  }
  ///2020 EXTRA END

  var musicVar;
  if (localStorage[storeInfo + 'musicSTOREprogram'] == 'OFF') {
    $('#musicOnOff').html('MUSIC <b>OFF</b>');
    musicVar = 'OFF';
  } else {
    $('#musicOnOff').html('MUSIC <b>ON</b>');
    musicVar = 'ON';
  }
  $('#musicOnOff').show();

  if (musicVar == 'ON') {
    $('#mainMusic').trigger('pause');
    $('#mainMusic').attr('src', 'common/programMusic' + soundType);
    document.getElementById('mainMusic').load();
    document.getElementById('mainMusic').addEventListener('canplay', playMusic);
  } else {
    $('#mainMusic').trigger('pause');
  }
}

//2020 EXTRA START
function toggleMusic2() {
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
    localStorage[storeInfo + 'musicSTOREblock'] = 'on';
    localStorage[storeInfo + 'musicSTOREvocab'] = 'on';
    localStorage[storeInfo + 'musicSTOREconvo'] = 'on';
    localStorage[storeInfo + 'musicSTOREverb'] = 'on';
    updateAllOptions2();
    $('#mainMusic').trigger('pause');
    $('#mainMusic').attr('src', 'common/programMusic' + soundType);
    document.getElementById('mainMusic').load();
    document.getElementById('mainMusic').addEventListener('canplay', playMusic);
  } else {
    $('#mainMusic').trigger('pause');
    localStorage[storeInfo + 'musicSTOREblock'] = 'off';
    localStorage[storeInfo + 'musicSTOREvocab'] = 'off';
    localStorage[storeInfo + 'musicSTOREconvo'] = 'off';
    localStorage[storeInfo + 'musicSTOREverb'] = 'off';
    updateAllOptions2();
  }
}
//2020 EXTRA END

///////////////////////////////////////////////////////////////////////TOGGLE MUSIC
///2018CHANGE
function toggleMusic() {
  ///MODULE SETTINGS
  if ($('#foreignText2').text().indexOf('GLOBAL') == -1) {
    localStorage[storeInfo + 'musicSTORE' + currentSecShort] =
      $('#selectSound').val();
    updateOptions();
  }
  ///GLOBAL SETTINGS
  else {
    localStorage[storeInfo + 'musicSTOREblock'] = $('#selectSound').val();
    localStorage[storeInfo + 'musicSTOREvocab'] = $('#selectSound').val();
    localStorage[storeInfo + 'musicSTOREconvo'] = $('#selectSound').val();
    localStorage[storeInfo + 'musicSTOREverb'] = $('#selectSound').val();
    var musicVar = $('#musicOnOff').text().replace('MUSIC ', '');
    if ($('#selectSound').val() == 'on') {
      $('#musicOnOff').html('MUSIC <b>ON</b>');
      musicVar = 'ON';
      $('#mainMusic').trigger('pause');
      $('#mainMusic').attr('src', 'common/programMusic' + soundType);
      document.getElementById('mainMusic').load();
      document
        .getElementById('mainMusic')
        .addEventListener('canplay', playMusic);
    } else {
      $('#musicOnOff').html('MUSIC <b>OFF</b>');
      musicVar = 'OFF';
      $('#mainMusic').trigger('pause');
    }
    localStorage[storeInfo + 'musicSTOREprogram'] = musicVar;
    updateAllOptions();
  }
  ///END GLOBAL
}
///2018CHANGE

//////////////START WHEN LOADED OPTIONS
function initiate() {
  if (sessionStorage['LOGGEDIN'] == null) {
    ///////////////////fill login details
    if (localStorage['userEmailSTORE'] != null) {
      $('#emailField').val(localStorage['userEmailSTORE']);
      userEmail = localStorage['userEmailSTORE'];
      storeInfo = langShort + userEmail;
      $('#rememberCheck').attr('src', 'common/checkOn.svg');
    } else {
      $('#emailField').val('');
    }
    if (localStorage['tuvm58djSTORE'] != null) {
      $('#jguyr4').val(localStorage['tuvm58djSTORE']);
      tuvm58dj = localStorage['tuvm58djSTORE'];
    } else {
      $('#jguyr4').val('');
      $('#emailField').val('');
    }
    if (
      localStorage['STAYLOGGEDIN'] != null &&
      tuvm58dj != null &&
      userEmail != null
    ) {
      databaseInit();
    }
    //2021 bug NEW
    else {
      $('#loginCenter').show();
    }
    //2021 bug NEW
  } else {
    userEmail = sessionStorage['userEmailSTORE'];
    storeInfo = langShort + userEmail;

    localStorage.removeItem(storeInfo + 'saved');
    setTimeout(function () {
      savePosition();
    }, 3000);

    tuvm58dj = sessionStorage['tuvm58djSTORE'];
    $('#loginCover').hide();
  }
  //////////////////////////////////////////
  $('.menuBar').css({ visibility: 'visible' });
  if (currentDevice != 'mobile') {
    $('.menuBar').css({ 'min-width': '400px' });
  }

  if (sessionStorage['menuType'] == null) {
    $('#mainLogoImg, #redArrowImg').show();
    $('#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn').addClass(
      'disabled',
    );
  }
  if (sessionStorage['menuType'] != null && currentDevice == 'mobile') {
    toggleMusic3();
  }

  if (loghref.indexOf('/init') == -1) {
    setTimeout(function () {
      $('#startCover').hide();
    }, 1000);
  }

  if (
    sessionStorage['menuType'] == 'home' ||
    sessionStorage.getItem('wasInit')
  ) {
    sessionStorage.removeItem('wasInit');
    homeMenu();
  } else if (sessionStorage['menuType'] != null) {
    window[sessionStorage['menuType']]();
    if (currentDevice != 'mobile' && tabletMusic == false) {
      toggleMusic3();
      tabletMusic = true;
    }
  }
}
///////END WHEN LOADED OPTIONS

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TOGGLE MENU OPTIONS//
function toggleOptions() {
  if ($('#optionWrap').is(':visible') == false) {
    localStorageInit();
    changeColor();
    $('#userWrap').hide();
    $('#optionWrap').show();
    $('#foreignText2').text(currentSection.toUpperCase() + ' SETTINGS');
  } else {
    $('#optionWrap').hide();
  }
}
//2018CHANGE
function toggleOptions2() {
  if ($('#optionWrap').is(':visible') == false) {
    localStorageInit();
    $('#userWrap').hide();
    $('.gradientColor').css({
      background:
        'url(common/black.svg), radial-gradient(' +
        btnColor[8] +
        ',' +
        btnColor[9] +
        ')',
    });
    $('.gradientColor2').css({
      background: 'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
    });
    $('.gradientColor3').css({
      background:
        'url(common/black.svg), radial-gradient(' +
        btnColor[8] +
        ',' +
        btnColor[9] +
        ')',
    });
    if (currentDevice != 'mobile') {
      playSprite('transition');
      $('#foreignText2').html(
        'GLOBAL SETTINGS  <em>(updates all modules)</em>',
      );
      $('#optionWrap').slideDown();
    } else {
      $('#optionWrap').show();
      $('#foreignText2').html(
        'GLOBAL SETTINGS  <em>(updates all modules)</em>',
      );
      playSprite('transition');
    }
  } else {
    if (currentDevice != 'mobile') {
      $('#optionWrap').slideUp();
    } else {
      $('#optionWrap').hide();
    }
  }
}
//2018CHANGE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TOGGLE REMEMBER CHECK
function toggleRememberCheck() {
  if ($('#rememberCheck').attr('src') == 'common/checkOff.svg') {
    $('#rememberCheck, #rememberCheck2').attr('src', 'common/checkOn.svg');
    localStorage['STAYLOGGEDIN'] = 'true';
  } else {
    $('#rememberCheck, #rememberCheck2').attr('src', 'common/checkOff.svg');
    localStorage.removeItem('STAYLOGGEDIN');
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TOGGLE OFFLINE CHECK
function toggleOfflineCheck() {
  if ($('#offlineCheck').attr('src') == 'common/checkOff.svg') {
    $('#offlineCheck').attr('src', 'common/checkOn.svg');
    localStorage[storeInfo + 'offlineCheckSTORE'] = 'true';
  } else {
    $('#offlineCheck').attr('src', 'common/checkOff.svg');
    localStorage.removeItem('offlineCheckSTORE');
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TOGGLE PLAYBACK
///2018CHANGE
function togglePlayback() {
  ///MODULE SETTINGS
  if ($('#foreignText2').text().indexOf('GLOBAL') == -1) {
    localStorage[storeInfo + 'playbackSTORE' + currentSecShort] =
      $('#selectPlayback').val();
    updateOptions();
  }
  ///GLOBAL SETTINGS
  else {
    localStorage[storeInfo + 'playbackSTOREblock'] = $('#selectPlayback').val();
    localStorage[storeInfo + 'playbackSTOREvocab'] = $('#selectPlayback').val();
    localStorage[storeInfo + 'playbackSTOREconvo'] = $('#selectPlayback').val();
    localStorage[storeInfo + 'playbackSTOREverb'] = $('#selectPlayback').val();
    updateAllOptions();
  }
  ///END GLOBAL
}
///2018CHANGE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////SELECT INTERVAL
///2018CHANGE
function toggleInterval() {
  ///MODULE SETTINGS
  if ($('#foreignText2').text().indexOf('GLOBAL') == -1) {
    localStorage[storeInfo + 'intervalSTORE' + currentSecShort] =
      $('#selectInterval').val();
    var selectedInterval = $('#selectInterval').val();
    timerLength = selectedInterval * 1000;
    updateOptions();
  }
  ///GLOBAL SETTINGS
  else {
    localStorage[storeInfo + 'intervalSTOREblock'] = $('#selectInterval').val();
    localStorage[storeInfo + 'intervalSTOREvocab'] = $('#selectInterval').val();
    localStorage[storeInfo + 'intervalSTOREconvo'] = $('#selectInterval').val();
    localStorage[storeInfo + 'intervalSTOREverb'] = $('#selectInterval').val();
    var selectedInterval2 = $('#selectInterval').val();
    timerLength = selectedInterval2 * 1000;
    updateAllOptions();
  }
  ///END GLOBAL
}
///2018CHANGE

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////SELECT TEXT

///2018CHANGE
function toggleText() {
  ///MODULE SETTINGS
  if ($('#foreignText2').text().indexOf('GLOBAL') == -1) {
    localStorage[storeInfo + 'textSTORE' + currentSecShort] =
      $('#selectText').val();
    updateOptions();
  }
  ///GLOBAL SETTINGS
  else {
    localStorage[storeInfo + 'textSTOREblock'] = $('#selectText').val();
    localStorage[storeInfo + 'textSTOREvocab'] = $('#selectText').val();
    localStorage[storeInfo + 'textSTOREconvo'] = $('#selectText').val();
    localStorage[storeInfo + 'textSTOREverb'] = $('#selectText').val();
    updateAllOptions();
  }
  ///END GLOBAL
}
///2018CHANGE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////SELECT TEXT2
function toggleText2() {
  localStorage[storeInfo + 'textSTORE' + currentSecShort] =
    $('#selectText').val();
  updateOptions();
}

function toggleFullscreen() {
  // Check if fullscreen API is available
  if (
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled
  ) {
    var element = document.documentElement; // Fullscreen the whole document
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////HOME MENU
function homeMenu() {
  if ($('#sprompt').is(':visible') || $('.tipCont').is(':visible')) {
    return;
  }

  sessionStorage.removeItem(storeInfo + 'scrollTemp');

  if (loghref.indexOf('/init') != -1) {
    if (sessionStorage.getItem('userEmailSTORE')) {
      sessionStorage.setItem('wasInit', 'true');
      setTimeout(function () {
        window.location.href = 'home.html';
      }, homeDelay);
    }
    return;
  }

  $('.gradientColor').css({
    background:
      'url(common/black.svg), radial-gradient(' +
      btnColor[8] +
      ',' +
      btnColor[9] +
      ')',
  });
  $('.gradientColor2').css({
    background: 'radial-gradient(' + btnColor[8] + ',' + btnColor[9] + ')',
  });
  $('.gradientColor3').css({
    background:
      'url(common/black.svg), radial-gradient(' +
      btnColor[8] +
      ',' +
      btnColor[9] +
      ')',
  });
  $('iframe, #iLoad, #loadLogo').hide();
  $('iframe').attr('src', '');

  if (osType == 'pwa') {
    if (
      sessionStorage['menuType'] == null &&
      navigator.appVersion.indexOf('Win') != -1
    ) {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        $('#fullWarning').html(
          '<strong style="color: #ffbd3b; font-size: 22px;">Fullscreen Mode?</strong><br>Press the "F11" key to enter fullscreen mode.',
        );
        setTimeout(function () {
          $('#fullWarning').fadeIn();
          setTimeout(function () {
            $('#fullWarning').fadeOut();
          }, 3000);
        }, 500);
      }
    }
  }

  if (osType == 'mac') {
    if (sessionStorage['menuType'] == null) {
      if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        $('#fullWarning').html(
          '<strong style="color: #ffbd3b; font-size: 22px;">Fullscreen Mode?</strong><br>Press the <strong style="color: #ffbd3b;">spacebar</strong> now to go fullscreen.',
        );
        setTimeout(function () {
          $('#fullWarning').fadeIn();
          isFocused = false;
          window.focus();
          setTimeout(function () {
            $('#fullWarning').fadeOut();
          }, 4000);
        }, 500);
      }
    }
  }

  ///2019NEWER
  $('#loadLogo').css({ opacity: 1 });
  ///2019NEWER

  if (tabletMusic == false) {
    if (currentDevice != 'mobile') {
      toggleMusic3();
      tabletMusic = true;
    } else if (sessionStorage['menuType'] == null) {
      tabletMusic = true;
      toggleMusic3();
    }
  }

  $('#musicOnOff').show();
  $('#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn').removeClass(
    'disabled',
  );

  //2018CHANGE
  $(
    '#redArrowImg, #mainLogoImg, .lessonMenus, #optionWrap, #userWrap, #loginOffline, .progMenus,.lessonBacks, #newVerb',
  ).hide();
  $('#optionBtn').show();
  $('.progMenus').css({ visibility: 'visible' });
  setTimeout(function () {
    $('#redArrowImg, #mainLogoImg, .lessonMenus, .lessonBacks').hide();
  }, 500);
  //2018CHANGE

  $('.lessonBacks').css({ opacity: 0 });
  $('.lessonMenus').css({ x: '200%' });
  $('.menuCenterImg').css({ y: '100%' });
  sessionStorage['menuType'] = 'home';

  $('.ouinoContentB').fadeIn();

  if (localStorage.getItem('menuOuinoPos2')) {
    window.scrollTo(0, parseInt(localStorage.getItem('menuOuinoPos2')));
  }

  if (!generatedInfo) {
    generateInfo();
  }
  if (!menusLoaded && currentDevice != 'mobile') {
    if ($('#startCover').is(':visible') == false) {
      $('#loadLogo').show();
    }
    setTimeout(function () {
      localStorageInit();
      updateMenus();
    }, 500);
    return;
  }
}

function generateInfo() {
  ////2019 START END
  if (localStorage.getItem(storeInfo + 'filterSTORE2') == 'teach') {
    $('#sectionP9B').text(
      'This learning path is custom-made by your teacher. It follows an order of lessons that your teacher handpicked to help you succeed.',
    );
    $('#guidedSectionB .unitTitlesB2').html('Teacher Learning Path');
  } else {
    $('#sectionP9B').text(
      'Although Ouino teaches using a free-style approach, you can choose this option if you prefer to be guided through a recommended order of lessons.',
    );
    $('#guidedSectionB .unitTitlesB2').html('Recommended Learning Path');
  }

  var valueSelected;
  var valueIndex;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////MUSIC STORAGE
  var musicStorage = localStorage[storeInfo + 'musicSTORE' + currentSecShort];
  if (musicStorage == null || musicStorage == 'null') {
    $('#selectSound').prop('selectedIndex', 0);
  } else {
    valueSelected = '#selectSound option[value="' + musicStorage + '"]';
    valueIndex = $(valueSelected).index();
    $('#selectSound').prop('selectedIndex', valueIndex);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////PLAYBACK STORAGE
  var playbackStorage =
    localStorage[storeInfo + 'playbackSTORE' + currentSecShort];
  if (playbackStorage == null || playbackStorage == 'null') {
    $('#selectPlayback').prop('selectedIndex', 0);
  } else {
    valueSelected = '#selectPlayback option[value="' + playbackStorage + '"]';
    valueIndex = $(valueSelected).index();
    $('#selectPlayback').prop('selectedIndex', valueIndex);
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////INTERVAL STORAGE
  var intervalStorage =
    localStorage[storeInfo + 'intervalSTORE' + currentSecShort];
  if (intervalStorage == null || intervalStorage == 'null') {
    $('#selectInterval').prop('selectedIndex', 3);
  } else {
    valueSelected = '#selectInterval option[value="' + intervalStorage + '"]';
    valueIndex = $(valueSelected).index();
    $('#selectInterval').prop('selectedIndex', valueIndex);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TEXT STORAGE
  var textStorage = localStorage[storeInfo + 'textSTORE' + currentSecShort];
  if (textStorage == null || textStorage == 'null') {
    $('#selectText').prop('selectedIndex', 0);
  } else {
    valueSelected = '#selectText option[value="' + textStorage + '"]';
    valueIndex = $(valueSelected).index();
    $('#selectText').prop('selectedIndex', valueIndex);
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADMIN STORAGE
  var isAdmin;
  if (localStorage[storeInfo + 'adminSTORE'] != null) {
    isAdmin = localStorage[storeInfo + 'adminSTORE'];
  }
  if (isAdmin == 'no') {
    $('#userTitle2, #userTitle4, #userTitle5').hide();
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NAME STORAGE
  if (localStorage[storeInfo + 'nameSTORE'] != null) {
    userName = localStorage[storeInfo + 'nameSTORE'];
  }
  $('#userTitle').html('<strong> ' + userName + ' </strong>- Log out');

  generatedInfo = true;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////STORAGE CODE
function localStorageInit() {
  if (!localStorage.getItem(lessonLanguage + 'deviceLoad')) {
    localStorage.setItem(lessonLanguage + 'deviceLoad', 'true');
    deviceInfo();
  }

  ///4.1 START
  if (localStorage[storeInfo + 'recommendPath2020']) {
    if (
      localStorage[storeInfo + 'recommendPath2020'].indexOf('convo67|') == -1
    ) {
      localStorage.removeItem(storeInfo + 'recommendPath2020');
      $(
        '<section class="Lsection pathPrompt" style="position: relative; cursor: pointer; opacity: 0.95 !important; background: #1aa260; margin-top: -30px; margin-bottom: 40px; max-width: 450px; padding-bottom:25px !important;"><div class="sectionTitle" style="margin-bottom: 10px !important; text-align: center;">NEW LESSONS ADDED!</div>We have added new conversations throughout our Recommended Learning Path and at the end of the Conversations module.<div style="position: absolute; top: 0px; right: 10px; font-size: 25px;">X</div></section>',
      ).insertBefore(
        '#lessonMenu9 .insideMenu .mainTitle, #lessonMenu3 .insideMenu .mainTitle',
      );
      $('.pathPrompt').on('click', function () {
        localStorage.setItem(lessonLanguage + 'PathChanged2', 'true');
        $('.pathPrompt').remove();
      });
    }
  }
  ///4.1 END

  if (!localStorage[storeInfo + 'recommendPath2020']) {
    var recoNum = $('#lessonMenu9 .lessonItems').length;
    var recoOrder = $('#lessonMenu9 .lessonItems:eq(0)')
      .attr('class')
      .split('lessonItems L')
      .join('')
      .split(' noQuiz')
      .join('')
      .split(' quizOnly')
      .join('');
    for (var zzz = 1; zzz < recoNum; zzz++) {
      recoOrder =
        recoOrder +
        '|' +
        $('#lessonMenu9 .lessonItems:eq(' + zzz + ')')
          .attr('class')
          .split('lessonItems L')
          .join('')
          .split(' noQuiz')
          .join('')
          .split(' quizOnly')
          .join('');
    }
    localStorage[storeInfo + 'recommendPath2020'] = recoOrder;
  }

  if (!localStorage[storeInfo + 'recommendVerb2020']) {
    var recoNum = $('#lessonMenu11 .lessonItems').length;
    var recoOrder = $('#lessonMenu11 .lessonItems:eq(0)')
      .attr('class')
      .split('lessonItems L')
      .join('')
      .split(' noQuiz')
      .join('')
      .split(' quizOnly')
      .join('');
    for (var zzz = 1; zzz < recoNum; zzz++) {
      recoOrder =
        recoOrder +
        '|' +
        $('#lessonMenu11 .lessonItems:eq(' + zzz + ')')
          .attr('class')
          .split('lessonItems L')
          .join('')
          .split(' noQuiz')
          .join('')
          .split(' quizOnly')
          .join('');
    }
    localStorage[storeInfo + 'recommendVerb2020'] = recoOrder;
  }

  if (localStorage.getItem(lessonLanguage + 'legacyPath')) {
    if (!localStorage[storeInfo + 'recommendPath2018']) {
      var recoNum = $('#lessonMenu9 .lessonItems').length;
      var recoOrder = $('#lessonMenu9 .lessonItems:eq(0)')
        .attr('class')
        .split('lessonItems L')
        .join('')
        .split(' noQuiz')
        .join('')
        .split(' quizOnly')
        .join('');
      for (var zzz = 1; zzz < recoNum; zzz++) {
        recoOrder =
          recoOrder +
          '|' +
          $('#lessonMenu9 .lessonItems:eq(' + zzz + ')')
            .attr('class')
            .split('lessonItems L')
            .join('')
            .split(' noQuiz')
            .join('')
            .split(' quizOnly')
            .join('');
      }
      localStorage[storeInfo + 'recommendPath2018'] = recoOrder;
    }
  }

  ////2021 bug end

  ////2019 START
  teacher = localStorage[storeInfo + 'teacherSTORE'];
  //2020 EXTRA START
  if (teacher.length > 16 && !localStorage.getItem(storeInfo + 'tOverwrite')) {
    localStorage.setItem(storeInfo + 'filterSTORE2', 'teach');
  } else if (!localStorage.getItem(storeInfo + 'filterSTORE2')) {
    localStorage.setItem(storeInfo + 'filterSTORE2', '0');
  }
  //2020 EXTRA END
  if (teacher) {
    teacher = teacher
      .split('|!w')
      .join('|.Lblock')
      .split('|!x')
      .join('|.Lvocab')
      .split('|!y')
      .join('|.Lconvo')
      .split('|!z')
      .join('|.Lverb')
      .split('|');
  } else {
    teacher = '';
  }

  //2020 EXTRA //2020 EXTRA
  //CHECK FOR PIRACY
  if (localStorage[storeInfo + 'piracySTORE']) {
    if (localStorage[storeInfo + 'piracySTORE'] == 'exp') {
      $('.smallIcon, #volDiv, #menuMain2').hide();

      var topWarn = 0;
      if (osType == 'windows') {
        topWarn = 45;
      }

      if (osType != 'iOS') {
        $('body').append(
          "<div style='position:fixed; width: 100%; top: " +
            topWarn +
            "px; height: 100%; z-index:99999; background: rgba(20,20,20,1);'><div style='position:absolute; width: 90%; max-width:800px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your subscription has expired. Please subscribe again to continue using the program. If you'd like to upgrade to the lifetime access at a discounted rate, simply follow this link:<br><br> <div id='upgradeLink2' style='font-weight: bold; color: #F4B400; cursor: pointer; font-size: 1.1em;' onclick='upgradeAccess()'>ouinolanguages.com/upgrade/" +
            lessonLanguage.toLowerCase() +
            '/</div><br><br>With the lifetime access, there are no reoccurring fees or extra costs. Plus, there are free lifetime upgrades. And when we say lifetime, we really mean it. We have never charged a customer to upgrade their program even several years after purchasing the program.</div></div>',
        );
      } else {
        $('body').append(
          "<div style='position:fixed; width: 100%; top: " +
            topWarn +
            "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your subscription has expired. Please subscribe again to continue using the program.</div></div>",
        );
      }
    } else if (localStorage[storeInfo + 'piracySTORE'] == 'ref') {
      $('.smallIcon, #volDiv, #menuMain2').hide();
      $('body').append(
        "<div style='position:fixed; width: 100%; top: " +
          topWarn +
          "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your account has been disabled because we have refunded your purchase.</div></div>",
      );
    } else if (localStorage[storeInfo + 'piracySTORE'] == 'yes') {
      $('.smallIcon, #volDiv, #menuMain2').hide();
      $('body').append(
        "<div style='position:fixed; width: 100%; top: " +
          topWarn +
          "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>" +
          localStorage[storeInfo + 'piracyNOTE'].split('ZZZZ').join(', ') +
          '</div></div>',
      );
    } else if (localStorage[storeInfo + 'piracySTORE'] == 'leg') {
      $('.insideMenu').addClass('classic');
    }
  }
  //CHECK FOR PIRACY

  ///PRODUCTS
  var userProd = localStorage[storeInfo + 'productSTORE'];
  ///IF NOT COMPLETE
  ///2019 CHANGE
  if (userProd.indexOf('Complete') == -1) {
    $('.sectionBtns, .verbSectionBtns, .sectionBtnsB, .sectionBtnsB2').append(
      '<div class="telaGot4"><div>',
    );
    lessonTitle = 'Ouino ' + lessonLanguage;
    resizeTitle();
    if (userProd.indexOf('Building Blocks') != -1) {
      $('#blockSection .telaGot4, #blockSectionB .telaGot4').hide();
    }
    if (userProd.indexOf('Vocabulary') != -1) {
      $('#vocabSection .telaGot4, #vocabSectionB .telaGot4').hide();
    }
    if (userProd.indexOf('Verbs') != -1) {
      $('.verbSectionBtns .telaGot4, #verbSectionB .telaGot4').hide();
    }
    if (userProd.indexOf('Conversations') != -1) {
      $('#convoSection .telaGot4, #convoSectionB .telaGot4').hide();
    }
    if (userProd.indexOf('Pronunciation') != -1) {
      $('#pronunSection .telaGot4, #pronunSectionB .telaGot4').hide();
    }
    $(
      '#userSectionB .telaGot4, #extraSectionB .telaGot4, .verbB .telaGot4',
    ).hide();
  }
}
///2019

function changeStars(e) {
  var offset = $(this).offset();
  var starPos = e.pageX - offset.left;
  var theStarNum;
  var thisClass =
    '.' +
    $(this).attr('class').replace(' LstarsHOVER', '').replace('Lstars ', '');
  if (starPos < 20) {
    var currBack = $(this).css('background-image');
    currBack = currBack.charAt(currBack.length - 6);
    if (currBack == 1) {
      $(thisClass).css({ 'background-image': 'url(common/star0.png)' });
      theStarNum = 0;
    } else {
      $(thisClass).css({ 'background-image': 'url(common/star1.png)' });
      theStarNum = 1;
    }
  }
  if (starPos >= 21 && starPos < 40) {
    var currBack = $(this).css('background-image');
    currBack = currBack.charAt(currBack.length - 6);
    if (currBack == 2) {
      $(thisClass).css({ 'background-image': 'url(common/star0.png)' });
      theStarNum = 0;
    } else {
      $(thisClass).css({ 'background-image': 'url(common/star2.png)' });
      theStarNum = 2;
    }
  }
  if (starPos >= 41 && starPos < 60) {
    var currBack = $(this).css('background-image');
    currBack = currBack.charAt(currBack.length - 6);
    if (currBack == 3) {
      $(thisClass).css({ 'background-image': 'url(common/star0.png)' });
      theStarNum = 0;
    } else {
      $(thisClass).css({ 'background-image': 'url(common/star3.png)' });
      theStarNum = 3;
    }
  }
  if (starPos >= 61) {
    var currBack = $(this).css('background-image');
    currBack = currBack.charAt(currBack.length - 6);
    if (currBack == 4) {
      $(thisClass).css({ 'background-image': 'url(common/star0.png)' });
      theStarNum = 0;
    } else {
      $(thisClass).css({ 'background-image': 'url(common/star4.png)' });
      theStarNum = 4;
    }
  }
  var starNum = $(this)
    .attr('class')
    .split('Lstars ')
    .join('')
    .split(' LstarsHOVER')
    .join('')
    .split('Star');
  var theLessonNum = starNum[1];
  currentSecShort = starNum[0];
  window['KS' + currentSecShort][theLessonNum - 1] = theStarNum;
  ///UPDATE TO DATABASE
  infoToUpdate = window['KS' + currentSecShort].toString().split(',').join(':');
  localStorage[storeInfo + 'starSTORE' + currentSecShort] = infoToUpdate;
  fieldToUpdate = currentSecShort + 'Stars';
  updateDatabase();
  ///END UPDATE TO DB
  updateStars();
}

var layout;
if (localStorage.getItem('layoutSTORE')) {
  layout = localStorage.getItem('layoutSTORE');
}
var teacher;
var tLoaded = false;

////FILTER FUNCTION
function filterLessons() {
  ///GET FILTER VALUE
  var filter = $('.selectFilter').val();
  var filter2 = $('.selectFilter2').val();

  ///PORTUGUESE CHANGE START
  if (teacher.length == 0) {
    $('.selectFilter2').hide();
  }
  ///PORTUGUESE CHANGE END
  //FILTER SET UP
  ///2019NEW
  if (filter == 'all' || filter == '0') {
    $('.lessonItems').show();
    $('.comb, .extraPrac, .mainWarning, .Lsection').show();
    $('#lessonMenu9 .sectionTitle').show();
    $('.tItems .tTitles, .filterWarn').hide();
  } else {
    $('.lessonItems').hide();
    $('.filterWarn').show();
    $('body').addClass('filterOn');
  }
  ///2019NEW
  ///HIDE ALL LESSONS

  ///FILTER TEACHER/////////////////////////////////////////////////////////////
  if (filter2 === 'teach') {
    ///FILTER
    if (filter == 'all' || filter == '0') {
      $('.lessonItems').show();
      $('.comb, .extraPrac, .mainWarning, .Lsection').show();
    }
    ///FILTER
    $('#lessonMenu9 .lessonItems').hide();
    $(
      '#lessonMenu9 .comb, #lessonMenu9 .extraPrac, #lessonMenu9 .mainWarning, #lessonMenu9 .Lsection',
    ).hide();

    if (!tLoaded) {
      var tl = '';
      var secOpen = false;
      ////INSERT
      for (xx = 0; xx < teacher.length; xx++) {
        if (xx == 0) {
          $('#lessonMenu9 .mainTitle').html(
            '<h1 class="mainTitle">' + teacher[xx] + '</h1>',
          );
        } else if (teacher[xx].charAt(0) === '.') {
          if ($('#lessonMenu9 ' + teacher[xx]).length != 0) {
            tl =
              tl +
              $('#lessonMenu9 ' + teacher[xx])
                .prop('outerHTML')
                .split('lessonItems')
                .join('lessonItems tItems');
          } else if ($('#lessonMenu7 ' + teacher[xx]).length != 0) {
            tl =
              tl +
              $('#lessonMenu7 ' + teacher[xx])
                .prop('outerHTML')
                .split('lessonItems')
                .join('lessonItems tItems');
          }
        }
        //2020 EXTRA END REPLACE
        else if (teacher[xx].charAt(0) === '@') {
          tl =
            tl +
            '<br><section class="Lsection tTitles"><img class="linkLogo" src="common/link.png"><div class="teachLink">' +
            teacher[xx].slice(1) +
            '</div>';
          tl = tl + '</section><br>';
          secOpen = false;
        } else if (teacher[xx].charAt(0) === '%') {
          tl =
            tl +
            '<br><section class="Lsection tTitles"><img class="linkLogo" src="common/note.png"><div class="teacherNote"><strong>Note: </strong>' +
            teacher[xx].slice(1) +
            '</div>';
          tl = tl + '</section><br>';
          secOpen = false;
        } else {
          tl =
            tl +
            '<section class="Lsection tTitles"><div class="sectionTitle">' +
            teacher[xx] +
            '</div>';
          secOpen = true;
        }
        var nexC = '';
        if (teacher[xx + 1]) {
          nexC = teacher[xx + 1];
        }
        if (xx === teacher.length - 1 && secOpen === true) {
          tl = tl + '</section>';
          secOpen = false;
        } else if (nexC.charAt(0) !== '.' && secOpen === true) {
          tl = tl + '</section>';
          secOpen = false;
        }
      }
      ////INSERT
      $('#lessonMenu9 .insideMenu').append(tl);
      $('.tItems')
        .on('mouseover mouseenter', function (e) {
          if (!$(e.target).hasClass('Lstars')) {
            $(this).addClass('lessonItemsHOVER');
          }
        })
        .on('mouseout mouseleave', function () {
          $(this).removeClass('lessonItemsHOVER');
        });
      $('.tItems').on('click', loadLesson);
      $('.tItems .Lstars').on('click', changeStars);
      if (osType == 'iOS') {
        $('.sectionTitle').addClass('absolute');
      }
      ///check this/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHECK THIS FOR DIFFERENT DEVICES!!!
      $('.teachLink').on('click', function () {
        var theSite = $(this).children('b').html();
        openLink(theSite);
      });
      ///check this/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHECK THIS FOR DIFFERENT DEVICES!!!
      $('.tItems').show();
      tLoaded = true;
    }
    ///IF ALREADY LOADED
    else {
      $('.tItems').show();
    }
  }
  ///IF OUINO IS SELECTED
  else {
    if (filter == 'all' || filter == '0') {
      $('#lessonMenu9 .lessonItems').show();
      $(
        '#lessonMenu9 .comb, #lessonMenu9 .extraPrac, #lessonMenu9 .mainWarning, #lessonMenu9 .Lsection',
      ).show();
      $('#lessonMenu9 .sectionTitle').show();
    }
    $('.tItems .tTitles').hide();
  }
  ///FILTER TEACHER////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (filter != 'all' && filter != '0') {
    $('.tItems').css('opacity', '0.2');
    var lessonAmount = $('.lessonItems').length;
    //FILTER SET UP

    ///FIND ONE BY ONE
    for (i = 0; i < lessonAmount; i++) {
      ///FILTER STARS
      if (filter.indexOf('star') != -1) {
        var starFilter = $('.lessonItems:eq(' + i + ') .Lstars').css(
          'background-image',
        );
        if (starFilter) {
          starFilter = starFilter.split('star');
          starFilter = starFilter[1].charAt(0);
          if (filter == '0star') {
            if (starFilter == '0') {
              $('.lessonItems').eq(i).show();
              if (filter2 === 'teach') {
                $('.lessonItems').eq(i).css('opacity', '0.9');
              }
            }
          } else if (filter == '1star') {
            if (starFilter == '1') {
              $('.lessonItems').eq(i).show();
              if (filter2 === 'teach') {
                $('.lessonItems').eq(i).css('opacity', '0.9');
              }
            }
          } else if (filter == '2star') {
            if (starFilter == '2' || starFilter == '1') {
              $('.lessonItems').eq(i).show();
              if (filter2 === 'teach') {
                $('.lessonItems').eq(i).css('opacity', '0.9');
              }
            }
          } else if (filter == '3star') {
            if (starFilter == '3' || starFilter == '2' || starFilter == '1') {
              $('.lessonItems').eq(i).show();
              if (filter2 === 'teach') {
                $('.lessonItems').eq(i).css('opacity', '0.9');
              }
            }
          } else if (filter == '4star') {
            if (
              starFilter == '4' ||
              starFilter == '3' ||
              starFilter == '2' ||
              starFilter == '1'
            ) {
              $('.lessonItems').eq(i).show();
              if (filter2 === 'teach') {
                $('.lessonItems').eq(i).css('opacity', '0.9');
              }
            }
          }
        }
      }
      ///FILTER STARS
      ///FILTER SCORES
      else if (filter.indexOf('score') != -1) {
        var scoreFilter = $('.lessonItems:eq(' + i + ') h4').text();
        if (scoreFilter) {
          scoreFilter = parseInt(scoreFilter.split('%').join(''));
          if (filter == '90score') {
            if (scoreFilter < 90) {
              $('.lessonItems').eq(i).show();
              if (filter2 === 'teach') {
                $('.lessonItems').eq(i).css('opacity', '0.9');
              }
            }
          } else if (filter == '80score') {
            if (scoreFilter < 80) {
              $('.lessonItems').eq(i).show();
              if (filter2 === 'teach') {
                $('.lessonItems').eq(i).css('opacity', '0.9');
              }
            }
          } else if (filter == '70score') {
            if (scoreFilter < 70) {
              $('.lessonItems').eq(i).show();
              if (filter2 === 'teach') {
                $('.lessonItems').eq(i).css('opacity', '0.9');
              }
            }
          } else if (filter == '60score') {
            if (scoreFilter < 60) {
              $('.lessonItems').eq(i).show();
              if (filter2 === 'teach') {
                $('.lessonItems').eq(i).css('opacity', '0.9');
              }
            }
          }
        }
      }
    }

    ///CHECK QUIZ
    if (filter.indexOf('score') != -1) {
      $('.noQuiz').hide();
      var quizAmount = $('.quizOnly').length;
      for (i = 0; i < quizAmount - 1; i++) {
        var scoreFilter = $('.quizOnly:eq(' + i + ') h4').text();
        var parentName = $('.quizOnly:eq(' + i + ')').parent();
        if (scoreFilter) {
          scoreFilter = parseInt(scoreFilter.split('%').join(''));
          if (filter == '90score') {
            if (scoreFilter < 90) {
              $(parentName).children('.lessonItems').show();
              if (filter2 === 'teach') {
                $(parentName).children('.lessonItems').css('opacity', '0.9');
              }
            }
          } else if (filter == '80score') {
            if (scoreFilter < 80) {
              $(parentName).children('.lessonItems').show();
              if (filter2 === 'teach') {
                $(parentName).children('.lessonItems').css('opacity', '0.9');
              }
            }
          } else if (filter == '70score') {
            if (scoreFilter < 70) {
              $(parentName).children('.lessonItems').show();
              if (filter2 === 'teach') {
                $(parentName).children('.lessonItems').css('opacity', '0.9');
              }
            }
          } else if (filter == '60score') {
            if (scoreFilter < 60) {
              $(parentName).children('.lessonItems').show();
              if (filter2 === 'teach') {
                $(parentName).children('.lessonItems').css('opacity', '0.9');
              }
            }
          }
        }
      }
    }
    ///CHECK QUIZ

    ///FIND ONE BY ONE

    $('#lessonMenu9 .sectionTitle').show();

    if (filter2 === 'teach') {
      $('#lessonMenu9 .lessonItems').hide();
      $('#lessonMenu9 .tItems').show();
    }

    ////LSECTION
    $('.Lsection').show();
    var sectionAmount = $('.Lsection').length;
    ///FIND ONE BY ONE
    for (ii = 0; ii < sectionAmount; ii++) {
      if ($('.Lsection').eq(ii).height() < 100) {
        $('.Lsection').eq(ii).hide();
      }
    }
    for (iii = 0; iii < sectionAmount - 1; iii++) {
      if ($('.Lsection').eq(iii).height() < 100) {
        $('.Lsection').eq(iii).hide();
      }
    }

    $('.comb, .extraPrac, .mainWarning').hide();
    ///FIND ONE BY ONE
    ////LSECTION
  }
  ///FILTER LESSONS////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///FILTER LESSONS//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if (filter2 === 'teach') {
    $('#lessonMenu9 .sectionTitle, #lessonMenu9 .tTitles').show();
    $('#progMenu9').css({ opacity: '0' });
    $('body').addClass('teacherOn');
    $('#sectionP9B').text(
      'This learning path is custom-made by your teacher. It follows an order of lessons that your teacher handpicked to help you succeed.',
    );
    $('#guidedSectionB .unitTitlesB2').html('Teacher Learning Path');
  } else {
    $('.tItems .tTitles').hide();
    $('#lessonMenu9 .mainTitle').html(
      '<h1 class="mainTitle">RECOMMENDED LEARNING&nbsp;PATH</h1>',
    );
    $('#sectionP9B').text(
      'Although Ouino teaches using a free-style approach, you can choose this option if you prefer to be guided through a recommended order of lessons.',
    );
    $('#guidedSectionB .unitTitlesB2').html('Recommended Learning Path');
  }

  /////////////////////
  if (currentDevice != 'mobile') {
    for (var v = 0; v < $('.Lsection').length; v++) {
      var cLength = $('.Lsection').eq(v).children('.lessonItems').length;
      $('.Lsection')
        .eq(v)
        .addClass('line' + cLength);
    }
  } else if ($('html').innerWidth() > 600 && $('html').innerHeight() > 600) {
    for (var v = 0; v < $('.Lsection').length; v++) {
      var cLength = $('.Lsection').eq(v).children('.lessonItems').length;
      $('.Lsection')
        .eq(v)
        .addClass('line' + cLength);
    }
  } else {
    $('.Lsection').scroll(function () {
      if ($(this).children('.lessonItems').length > 2) {
        localStorage.setItem(
          langShort + 'eS_' + $(this).index('.Lsection'),
          parseInt($(this).scrollLeft()),
        );
      }
    });
  }

  /////////////////////////////////

  menusLoaded = true;

  if (f2load != '') {
    window[f2load]();
  }

  $('#loadLogo').fadeOut();
}

////////////////FUNCTION TO UPDATE MENUS
function updateMenus() {
  var SCblock;
  var SCvocab;
  var SCconvo;
  var SCverb;
  var SCkey = [];
  var SCextra = [];
  var SCindi = [];
  var SCendings = [];

  var medalBlock = [0, 0, 0, 0, 0];
  var medalVocab = [0, 0, 0, 0, 0];
  var medalConvo = [0, 0, 0, 0, 0];
  var medalKey = [0, 0, 0, 0, 0];
  var medalExtra = [0, 0, 0, 0, 0];
  var medalIndi = [0, 0, 0, 0, 0];
  var medalEndings = [0, 0, 0, 0, 0];
  var medalAll = [0, 0, 0, 0, 0];
  var scoresArray;

  ///CALCULATE NUMBER OF QUIZZES
  numOfQuiz[0] =
    ($('#lessonMenu1 .Lscores').length - $('#lessonMenu1 .noQuiz').length) * 3;
  sLengths[0] = $('#lessonMenu1 .lessonItems').length;
  numOfQuiz[1] =
    ($('#lessonMenu2 .Lscores').length - $('#lessonMenu2 .noQuiz').length) * 4;
  sLengths[1] = $('#lessonMenu2 .lessonItems').length;
  numOfQuiz[2] =
    ($('#lessonMenu3 .Lscores').length - $('#lessonMenu3 .noQuiz').length) * 2;
  sLengths[2] = $('#lessonMenu3 .lessonItems').length;

  numOfQuiz[3] =
    ($('#lessonMenu6 .Lscores').length - $('#lessonMenu6 .noQuiz').length) * 3;
  numOfQuiz[4] =
    ($('#lessonMenu5 .Lscores').length - $('#lessonMenu5 .noQuiz').length) * 4;
  numOfQuiz[5] =
    ($('#lessonMenu8 .Lscores').length - $('#lessonMenu8 .noQuiz').length) * 2;
  numOfQuiz[6] =
    ($('#lessonMenu10 .Lscores').length - $('#lessonMenu10 .noQuiz').length) *
    3;

  ///THIS HERE IS A CHANGE FOR SPANISH BECAUSE IT CONTAIN 3 KEY VERB LESSONS HIGHER
  if (lessonLanguage != 'Spanish') {
    sLengths[3] = $('#lessonMenu6 .lessonItems').length;
  } else {
    sLengths[3] = 22;
  }
  sLengths[4] = $('#lessonMenu5 .lessonItems').length + sLengths[3];
  sLengths[5] = $('#lessonMenu8 .lessonItems').length + sLengths[4];
  sLengths[6] = $('#lessonMenu10 .lessonItems').length + sLengths[5];

  //2021ma START
  if (lessonLanguage == 'Spanish') {
    sLengths[6] = sLengths[6] + 3;
  }
  //2021ma END

  ///2018CHANGE/////////BIG CHANGE//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///GET block INFO
  if (localStorage[storeInfo + 'starSTOREblock'] != null) {
    KSblock = localStorage[storeInfo + 'starSTOREblock'].split(':');
  }
  if (localStorage[storeInfo + 'scoreSTOREblock'] != null) {
    SCblock = localStorage[storeInfo + 'scoreSTOREblock'].split(':');
  }
  //APPLY block CHANGES
  for (var num = 1; num <= sLengths[0]; num++) {
    if (SCblock[num - 1] != '0') {
      var myQuizCalc = SCblock[num - 1].split('|');
      var myQuizScore = 0;
      for (var ii = 0; ii < myQuizCalc.length; ii++) {
        myQuizScore = myQuizScore + parseInt(myQuizCalc[ii]);
      }
      myQuizScore = Math.round(myQuizScore / 3);
      $('.blockScore' + num).text(myQuizScore + '%');
      if (myQuizScore >= 100) {
        $('.blockMedal' + num).css({
          'background-image': 'url(common/medal4.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 100 && myQuizScore >= 85) {
        $('.blockMedal' + num).css({
          'background-image': 'url(common/medal3.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 85 && myQuizScore >= 70) {
        $('.blockMedal' + num).css({
          'background-image': 'url(common/medal2.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 70 && myQuizScore >= 55) {
        $('.blockMedal' + num).css({
          'background-image': 'url(common/medal1.png)',
          'background-size': 'contain',
        });
      }
    }
    ///FOR FUNCTION END
    if (KSblock[num - 1] != '0') {
      $('.blockStar' + num).css({
        'background-image': 'url(common/star' + KSblock[num - 1] + '.png)',
        'background-size': 'contain',
      });
    }
  }
  ////END block FUNCTION

  ///GET VOCAB INFO
  if (localStorage[storeInfo + 'starSTOREvocab'] != null) {
    KSvocab = localStorage[storeInfo + 'starSTOREvocab'].split(':');
  }
  if (localStorage[storeInfo + 'scoreSTOREvocab'] != null) {
    SCvocab = localStorage[storeInfo + 'scoreSTOREvocab'].split(':');
  }
  //APPLY VOCAB CHANGES
  for (var num = 1; num <= sLengths[1]; num++) {
    if (SCvocab[num - 1] != '0') {
      var myQuizCalc = SCvocab[num - 1].split('|');
      var myQuizScore = 0;
      for (var ii = 0; ii < myQuizCalc.length; ii++) {
        myQuizScore = myQuizScore + parseInt(myQuizCalc[ii]);
      }
      myQuizScore = Math.round(myQuizScore / 4);
      $('.vocabScore' + num).text(myQuizScore + '%');
      if (myQuizScore >= 100) {
        $('.vocabMedal' + num).css({
          'background-image': 'url(common/medal4.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 100 && myQuizScore >= 85) {
        $('.vocabMedal' + num).css({
          'background-image': 'url(common/medal3.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 85 && myQuizScore >= 70) {
        $('.vocabMedal' + num).css({
          'background-image': 'url(common/medal2.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 70 && myQuizScore >= 55) {
        $('.vocabMedal' + num).css({
          'background-image': 'url(common/medal1.png)',
          'background-size': 'contain',
        });
      }
    }
    ///FOR FUNCTION END
    if (KSvocab[num - 1] != '0') {
      $('.vocabStar' + num).css({
        'background-image': 'url(common/star' + KSvocab[num - 1] + '.png)',
        'background-size': 'contain',
      });
    }
  }
  ////END VOCAB FUNCTION

  ///GET convo INFO
  if (localStorage[storeInfo + 'starSTOREconvo'] != null) {
    KSconvo = localStorage[storeInfo + 'starSTOREconvo'].split(':');
  }
  if (localStorage[storeInfo + 'scoreSTOREconvo'] != null) {
    SCconvo = localStorage[storeInfo + 'scoreSTOREconvo'].split(':');
  }

  //APPLY convo CHANGES
  for (var num = 1; num <= sLengths[2]; num++) {
    if (SCconvo[num - 1] != '0') {
      var myQuizCalc = SCconvo[num - 1].split('|');
      var myQuizScore = 0;
      myQuizScore = parseInt(myQuizCalc[0]) + parseInt(myQuizCalc[1]);
      myQuizScore = Math.round(myQuizScore / 2);
      $('.convoScore' + num).text(myQuizScore + '%');
      if (myQuizScore >= 100) {
        $('.convoMedal' + num).css({
          'background-image': 'url(common/medal4.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 100 && myQuizScore >= 85) {
        $('.convoMedal' + num).css({
          'background-image': 'url(common/medal3.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 85 && myQuizScore >= 70) {
        $('.convoMedal' + num).css({
          'background-image': 'url(common/medal2.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 70 && myQuizScore >= 55) {
        $('.convoMedal' + num).css({
          'background-image': 'url(common/medal1.png)',
          'background-size': 'contain',
        });
      }
    }
    ///FOR FUNCTION END
    if (KSconvo[num - 1] != '0') {
      $('.convoStar' + num).css({
        'background-image': 'url(common/star' + KSconvo[num - 1] + '.png)',
        'background-size': 'contain',
      });
    }
  }
  ////END Convo FUNCTION

  ///GET convo INFO
  if (localStorage[storeInfo + 'starSTOREverb'] != null) {
    KSverb = localStorage[storeInfo + 'starSTOREverb'].split(':');
  }
  if (localStorage[storeInfo + 'scoreSTOREverb'] != null) {
    SCverb = localStorage[storeInfo + 'scoreSTOREverb'].split(':');
  }

  //////////////////2018CHANGE BIG CHANGE////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //MODIFY NUMBER HERE IF SPANISH VERB LESSONS CHANGE THE NUMBERS CORRESPOND TO THE LESSONS IN KEY VERBS
  if (lessonLanguage == 'Spanish') {
    //////CHANGES FOR 22 first KEY PRESENTATION IN SPANISH/////////////////////
    for (var num = 1; num <= 22; num++) {
      if (SCverb[num - 1] == '0') {
        SCkey.push(SCverb[num - 1]);
      } else if (SCverb[num - 1] != '0') {
        var myQuizCalc = SCverb[num - 1].split('|');
        myQuizCalc[2] = '0';
        SCkey.push(myQuizCalc.join('|'));
        var myQuizScore = 0;
        myQuizScore =
          parseInt(myQuizCalc[0]) +
          parseInt(myQuizCalc[1]) +
          parseInt(myQuizCalc[3]);
        myQuizScore = Math.round(myQuizScore / 3);
        $('.verbScore' + num).text(myQuizScore + '%');
        if (myQuizScore >= 100) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal4.png)',
            'background-size': 'contain',
          });
        } else if (myQuizScore < 100 && myQuizScore >= 85) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal3.png)',
            'background-size': 'contain',
          });
        } else if (myQuizScore < 85 && myQuizScore >= 70) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal2.png)',
            'background-size': 'contain',
          });
        } else if (myQuizScore < 70 && myQuizScore >= 55) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal1.png)',
            'background-size': 'contain',
          });
        }
      }
      ///FOR FUNCTION END
      if (KSverb[num - 1] != '0') {
        $('.verbStar' + num).css({
          'background-image': 'url(common/star' + KSverb[num - 1] + '.png)',
          'background-size': 'contain',
        });
      }
    }
    //////CHANGES FOR 22 first KEY PRESENTATION IN SPANISH/////////////////////
    //////CHANGES FOR 3 LAST KEY PRESENTATION IN SPANISH/////////////////////
    for (var num = 167; num <= 169; num++) {
      if (SCverb[num - 1] == '0') {
        SCkey.push(SCverb[num - 1]);
      } else if (SCverb[num - 1] != '0') {
        var myQuizCalc = SCverb[num - 1].split('|');
        myQuizCalc[2] = '0';
        SCkey.push(myQuizCalc.join('|'));
        var myQuizScore = 0;
        myQuizScore =
          parseInt(myQuizCalc[0]) +
          parseInt(myQuizCalc[1]) +
          parseInt(myQuizCalc[3]);
        myQuizScore = Math.round(myQuizScore / 3);
        $('.verbScore' + num).text(myQuizScore + '%');
        if (myQuizScore >= 100) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal4.png)',
            'background-size': 'contain',
          });
        } else if (myQuizScore < 100 && myQuizScore >= 85) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal3.png)',
            'background-size': 'contain',
          });
        } else if (myQuizScore < 85 && myQuizScore >= 70) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal2.png)',
            'background-size': 'contain',
          });
        } else if (myQuizScore < 70 && myQuizScore >= 55) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal1.png)',
            'background-size': 'contain',
          });
        }
      }
      ///FOR FUNCTION END
      if (KSverb[num - 1] != '0') {
        $('.verbStar' + num).css({
          'background-image': 'url(common/star' + KSverb[num - 1] + '.png)',
          'background-size': 'contain',
        });
      }
    }
    //////CHANGES FOR 3 LAST KEY PRESENTATION IN SPANISH/////////////////////
  } else {
    //////CHANGES FOR KEY PRESENTATIONS IN OTHER LANGUAGES/////////////////////
    for (var num = 1; num <= sLengths[3]; num++) {
      if (SCverb[num - 1] == '0') {
        SCkey.push(SCverb[num - 1]);
      } else if (SCverb[num - 1] != '0') {
        var myQuizCalc = SCverb[num - 1].split('|');
        myQuizCalc[2] = '0';
        SCkey.push(myQuizCalc.join('|'));
        var myQuizScore = 0;
        myQuizScore =
          parseInt(myQuizCalc[0]) +
          parseInt(myQuizCalc[1]) +
          parseInt(myQuizCalc[3]);
        myQuizScore = Math.round(myQuizScore / 3);
        $('.verbScore' + num).text(myQuizScore + '%');
        if (myQuizScore >= 100) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal4.png)',
            'background-size': 'contain',
          });
        } else if (myQuizScore < 100 && myQuizScore >= 85) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal3.png)',
            'background-size': 'contain',
          });
        } else if (myQuizScore < 85 && myQuizScore >= 70) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal2.png)',
            'background-size': 'contain',
          });
        } else if (myQuizScore < 70 && myQuizScore >= 55) {
          $('.verbMedal' + num).css({
            'background-image': 'url(common/medal1.png)',
            'background-size': 'contain',
          });
        }
      }
      ///FOR FUNCTION END
      if (KSverb[num - 1] != '0') {
        $('.verbStar' + num).css({
          'background-image': 'url(common/star' + KSverb[num - 1] + '.png)',
          'background-size': 'contain',
        });
      }
    }
    //////CHANGES FOR KEY PRESENTATIONS IN OTHER LANGUAGES/////////////////////
  }

  //APPLY express verb CHANGES
  for (var num = sLengths[5] + 1; num <= sLengths[6]; num++) {
    //2020 EXTRA START REPLACE FIRST LINE
    if (lessonLanguage == 'Spanish' && num < 170 && num >= 167) {
    } else if (SCverb[num - 1] == '0') {
      //2020 EXTRA END
      SCextra.push(SCverb[num - 1]);
    } else if (SCverb[num - 1] != '0') {
      var myQuizCalc = SCverb[num - 1].split('|');
      myQuizCalc[2] = '0';
      SCextra.push(myQuizCalc.join('|'));
      var myQuizScore = 0;
      myQuizScore =
        parseInt(myQuizCalc[0]) +
        parseInt(myQuizCalc[1]) +
        parseInt(myQuizCalc[3]);
      myQuizScore = Math.round(myQuizScore / 3);
      $('.verbScore' + num).text(myQuizScore + '%');
      if (myQuizScore >= 100) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal4.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 100 && myQuizScore >= 85) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal3.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 85 && myQuizScore >= 70) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal2.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 70 && myQuizScore >= 55) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal1.png)',
          'background-size': 'contain',
        });
      }
    }
    ///FOR FUNCTION END
    if (KSverb[num - 1] != '0') {
      $('.verbStar' + num).css({
        'background-image': 'url(common/star' + KSverb[num - 1] + '.png)',
        'background-size': 'contain',
      });
    }
  }
  //APPLY express verb CHANGES

  //////////////////2018CHANGE BIG CHANGE////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //APPLY individual verb CHANGES
  for (var num = sLengths[3] + 1; num <= sLengths[4]; num++) {
    SCindi.push(SCverb[num - 1]);
    if (SCverb[num - 1] != '0') {
      var myQuizCalc = SCverb[num - 1].split('|');
      var myQuizScore = 0;
      for (var ii = 0; ii < myQuizCalc.length; ii++) {
        myQuizScore = myQuizScore + parseInt(myQuizCalc[ii]);
      }
      myQuizScore = Math.round(myQuizScore / 4);
      $('.verbScore' + num).text(myQuizScore + '%');
      if (myQuizScore >= 100) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal4.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 100 && myQuizScore >= 85) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal3.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 85 && myQuizScore >= 70) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal2.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 70 && myQuizScore >= 55) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal1.png)',
          'background-size': 'contain',
        });
      }
    }
    ///FOR FUNCTION END
    if (KSverb[num - 1] != '0') {
      $('.verbStar' + num).css({
        'background-image': 'url(common/star' + KSverb[num - 1] + '.png)',
        'background-size': 'contain',
      });
    }
  }
  ////END individual verb FUNCTION

  //APPLY verb endings CHANGES
  for (var num = sLengths[4] + 1; num <= sLengths[5]; num++) {
    if (SCverb[num - 1] == '0') {
      SCendings.push(SCverb[num - 1]);
    } else if (SCverb[num - 1] != '0') {
      var myQuizCalc = SCverb[num - 1].split('|');
      myQuizCalc[0] = '0';
      SCendings.push(myQuizCalc.join('|'));
      var myQuizScore = 0;
      if (myQuizCalc.length > 0) {
        myQuizScore = parseInt(myQuizCalc[1]) + parseInt(myQuizCalc[2]);
      }
      myQuizScore = Math.round(myQuizScore / 2);
      $('.verbScore' + num).text(myQuizScore + '%');
      if (myQuizScore >= 100) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal4.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 100 && myQuizScore >= 85) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal3.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 85 && myQuizScore >= 70) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal2.png)',
          'background-size': 'contain',
        });
      } else if (myQuizScore < 70 && myQuizScore >= 55) {
        $('.verbMedal' + num).css({
          'background-image': 'url(common/medal1.png)',
          'background-size': 'contain',
        });
      }
    }
    ///FOR FUNCTION END
    if (KSverb[num - 1] != '0') {
      $('.verbStar' + num).css({
        'background-image': 'url(common/star' + KSverb[num - 1] + '.png)',
        'background-size': 'contain',
      });
    }
  }
  ////END verb endings FUNCTION

  /////////CALCULATE QUIZ MEDALS FOR BLOCK
  var perCalc = 0;
  var perAll = 0;
  scoresArray = SCblock.join('|').split('|');
  for (var i = 0; i < scoresArray.length; i++) {
    var theQS = parseInt(scoresArray[i]);
    perCalc = perCalc + theQS;
    if (theQS == 100) {
      medalBlock[3]++;
    } else if (theQS >= 90 && theQS < 100) {
      medalBlock[2]++;
    } else if (theQS >= 80 && theQS < 90) {
      medalBlock[1]++;
    } else if (theQS >= 70 && theQS < 80) {
      medalBlock[0]++;
    }
  }
  medalBlock[2] = medalBlock[2] + medalBlock[3];
  medalBlock[1] = medalBlock[1] + medalBlock[2];
  medalBlock[0] = medalBlock[0] + medalBlock[1];
  medalBlock[4] = Math.round(perCalc / numOfQuiz[0]);
  ///END CALCULATE FOR BLOCK
  perAll = perAll + perCalc;
  /////////CALCULATE QUIZ MEDALS FOR Vocab
  perCalc = 0;
  scoresArray = SCvocab.join('|').split('|');
  for (var i = 0; i < scoresArray.length; i++) {
    var theQS = parseInt(scoresArray[i]);
    perCalc = perCalc + theQS;
    if (theQS == 100) {
      medalVocab[3]++;
    } else if (theQS >= 90 && theQS < 100) {
      medalVocab[2]++;
    } else if (theQS >= 80 && theQS < 90) {
      medalVocab[1]++;
    } else if (theQS >= 70 && theQS < 80) {
      medalVocab[0]++;
    }
  }
  medalVocab[2] = medalVocab[2] + medalVocab[3];
  medalVocab[1] = medalVocab[1] + medalVocab[2];
  medalVocab[0] = medalVocab[0] + medalVocab[1];
  medalVocab[4] = Math.round(perCalc / numOfQuiz[1]);
  ///END CALCULATE FOR Vocab/////
  perAll = perAll + perCalc;
  ////CALCULATE QUIZ MEDALS FOR Convo
  perCalc = 0;
  scoresArray = SCconvo.join('|').split('|');
  for (var i = 0; i < scoresArray.length; i++) {
    var theQS = parseInt(scoresArray[i]);
    perCalc = perCalc + theQS;
    if (theQS == 100) {
      medalConvo[3]++;
    } else if (theQS >= 90 && theQS < 100) {
      medalConvo[2]++;
    } else if (theQS >= 80 && theQS < 90) {
      medalConvo[1]++;
    } else if (theQS >= 70 && theQS < 80) {
      medalConvo[0]++;
    }
  }
  medalConvo[2] = medalConvo[2] + medalConvo[3];
  medalConvo[1] = medalConvo[1] + medalConvo[2];
  medalConvo[0] = medalConvo[0] + medalConvo[1];
  medalConvo[4] = Math.round(perCalc / numOfQuiz[2]);
  ///END CALCULATE FOR Convo
  perAll = perAll + perCalc;
  ////CALCULATE QUIZ MEDALS FOR key
  perCalc = 0;
  scoresArray = SCkey.join('|').split('|');
  for (var i = 0; i < scoresArray.length; i++) {
    var theQS = parseInt(scoresArray[i]);
    perCalc = perCalc + theQS;
    if (theQS == 100) {
      medalKey[3]++;
    } else if (theQS >= 90 && theQS < 100) {
      medalKey[2]++;
    } else if (theQS >= 80 && theQS < 90) {
      medalKey[1]++;
    } else if (theQS >= 70 && theQS < 80) {
      medalKey[0]++;
    }
  }
  medalKey[2] = medalKey[2] + medalKey[3];
  medalKey[1] = medalKey[1] + medalKey[2];
  medalKey[0] = medalKey[0] + medalKey[1];
  medalKey[4] = Math.round(perCalc / numOfQuiz[3]);
  ///END CALCULATE FOR key
  perAll = perAll + perCalc;

  //2018CHANGE/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////CALCULATE QUIZ MEDALS FOR extra
  perCalc = 0;
  scoresArray = SCextra.join('|').split('|');
  for (var i = 0; i < scoresArray.length; i++) {
    var theQS = parseInt(scoresArray[i]);
    perCalc = perCalc + theQS;
    if (theQS == 100) {
      medalExtra[3]++;
    } else if (theQS >= 90 && theQS < 100) {
      medalExtra[2]++;
    } else if (theQS >= 80 && theQS < 90) {
      medalExtra[1]++;
    } else if (theQS >= 70 && theQS < 80) {
      medalExtra[0]++;
    }
  }
  medalExtra[2] = medalExtra[2] + medalExtra[3];
  medalExtra[1] = medalExtra[1] + medalExtra[2];
  medalExtra[0] = medalExtra[0] + medalExtra[1];
  medalExtra[4] = Math.round(perCalc / numOfQuiz[6]);
  ///END CALCULATE FOR extra
  perAll = perAll + perCalc;
  //2018CHANGE/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////CALCULATE QUIZ MEDALS FOR indi
  perCalc = 0;
  scoresArray = SCindi.join('|').split('|');
  for (var i = 0; i < scoresArray.length; i++) {
    var theQS = parseInt(scoresArray[i]);
    perCalc = perCalc + theQS;
    if (theQS == 100) {
      medalIndi[3]++;
    } else if (theQS >= 90 && theQS < 100) {
      medalIndi[2]++;
    } else if (theQS >= 80 && theQS < 90) {
      medalIndi[1]++;
    } else if (theQS >= 70 && theQS < 80) {
      medalIndi[0]++;
    }
  }
  medalIndi[2] = medalIndi[2] + medalIndi[3];
  medalIndi[1] = medalIndi[1] + medalIndi[2];
  medalIndi[0] = medalIndi[0] + medalIndi[1];
  medalIndi[4] = Math.round(perCalc / numOfQuiz[4]);
  ///END CALCULATE FOR Indi
  perAll = perAll + perCalc;
  ////CALCULATE QUIZ MEDALS FOR endings
  perCalc = 0;
  scoresArray = SCendings.join('|').split('|');
  for (var i = 0; i < scoresArray.length; i++) {
    var theQS = parseInt(scoresArray[i]);
    perCalc = perCalc + theQS;
    if (theQS == 100) {
      medalEndings[3]++;
    } else if (theQS >= 90 && theQS < 100) {
      medalEndings[2]++;
    } else if (theQS >= 80 && theQS < 90) {
      medalEndings[1]++;
    } else if (theQS >= 70 && theQS < 80) {
      medalEndings[0]++;
    }
  }
  medalEndings[2] = medalEndings[2] + medalEndings[3];
  medalEndings[1] = medalEndings[1] + medalEndings[2];
  medalEndings[0] = medalEndings[0] + medalEndings[1];
  medalEndings[4] = Math.round(perCalc / numOfQuiz[5]);
  ///END CALCULATE FOR endings
  perAll = perAll + perCalc;

  ///CALCULATE QUIZ SCORES FOR ALL
  ///2018CHANGE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  numOfQuiz[7] =
    numOfQuiz[0] +
    numOfQuiz[1] +
    numOfQuiz[2] +
    numOfQuiz[3] +
    numOfQuiz[4] +
    numOfQuiz[5] +
    numOfQuiz[6];
  ///CALCULATE QUIZ MEDALS FOR ALL
  medalAll[0] =
    medalBlock[0] +
    medalVocab[0] +
    medalConvo[0] +
    medalKey[0] +
    medalIndi[0] +
    medalEndings[0] +
    medalExtra[0];
  medalAll[1] =
    medalBlock[1] +
    medalVocab[1] +
    medalConvo[1] +
    medalKey[1] +
    medalIndi[1] +
    medalEndings[1] +
    medalExtra[1];
  medalAll[2] =
    medalBlock[2] +
    medalVocab[2] +
    medalConvo[2] +
    medalKey[2] +
    medalIndi[2] +
    medalEndings[2] +
    medalExtra[2];
  medalAll[3] =
    medalBlock[3] +
    medalVocab[3] +
    medalConvo[3] +
    medalKey[3] +
    medalIndi[3] +
    medalEndings[3] +
    medalExtra[3];
  medalAll[4] = Math.round(perAll / numOfQuiz[7]);
  ///2018CHANGE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///UPDATE ELEMENTS
  $('.progMenublock .medalNum0').text(medalBlock[0]);
  $('.progMenublock .medalNum1').text(medalBlock[1]);
  $('.progMenublock .medalNum2').text(medalBlock[2]);
  $('.progMenublock .medalNum3').text(medalBlock[3]);
  $('.progMenublock .scoreNum').text(medalBlock[4]);
  $('.progMenublock .medalTotal').text(numOfQuiz[0]);
  $('.progMenublock .scoreMeter').css({ width: medalBlock[4] + '%' });

  $('.progMenuvocab .medalNum0').text(medalVocab[0]);
  $('.progMenuvocab .medalNum1').text(medalVocab[1]);
  $('.progMenuvocab .medalNum2').text(medalVocab[2]);
  $('.progMenuvocab .medalNum3').text(medalVocab[3]);
  $('.progMenuvocab .scoreNum').text(medalVocab[4]);
  $('.progMenuvocab .medalTotal').text(numOfQuiz[1]);
  $('.progMenuvocab .scoreMeter').css({ width: medalVocab[4] + '%' });

  $('.progMenuconvo .medalNum0').text(medalConvo[0]);
  $('.progMenuconvo .medalNum1').text(medalConvo[1]);
  $('.progMenuconvo .medalNum2').text(medalConvo[2]);
  $('.progMenuconvo .medalNum3').text(medalConvo[3]);
  $('.progMenuconvo .scoreNum').text(medalConvo[4]);
  $('.progMenuconvo .medalTotal').text(numOfQuiz[2]);
  $('.progMenuconvo .scoreMeter').css({ width: medalConvo[4] + '%' });

  $('.progMenukey .medalNum0').text(medalKey[0]);
  $('.progMenukey .medalNum1').text(medalKey[1]);
  $('.progMenukey .medalNum2').text(medalKey[2]);
  $('.progMenukey .medalNum3').text(medalKey[3]);
  $('.progMenukey .scoreNum').text(medalKey[4]);
  $('.progMenukey .medalTotal').text(numOfQuiz[3]);
  $('.progMenukey .scoreMeter').css({ width: medalKey[4] + '%' });

  $('.progMenuindi .medalNum0').text(medalIndi[0]);
  $('.progMenuindi .medalNum1').text(medalIndi[1]);
  $('.progMenuindi .medalNum2').text(medalIndi[2]);
  $('.progMenuindi .medalNum3').text(medalIndi[3]);
  $('.progMenuindi .scoreNum').text(medalIndi[4]);
  $('.progMenuindi .medalTotal').text(numOfQuiz[4]);
  $('.progMenuindi .scoreMeter').css({ width: medalIndi[4] + '%' });

  ///2018CHANGE///////////////////////////////////////////////////////////////////////////////////////////
  $('.progMenuextra .medalNum0').text(medalExtra[0]);
  $('.progMenuextra .medalNum1').text(medalExtra[1]);
  $('.progMenuextra .medalNum2').text(medalExtra[2]);
  $('.progMenuextra .medalNum3').text(medalExtra[3]);
  $('.progMenuextra .scoreNum').text(medalExtra[4]);
  $('.progMenuextra .medalTotal').text(numOfQuiz[6]);
  $('.progMenuextra .scoreMeter').css({ width: medalExtra[4] + '%' });

  //2020 EXTRA START/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (
    !localStorage.getItem(lessonLanguage + 'PathChanged') &&
    localStorage.getItem(storeInfo + 'recommendPath2018') &&
    !localStorage.getItem(lessonLanguage + 'legacyPath')
  ) {
    $(
      '<section id="pathPrompt" class="Lsection" style="position: relative; cursor: pointer; opacity: 0.95 !important; background: #a31e10; margin-top: -30px; margin-bottom: 40px; max-width: 450px; padding-bottom:25px !important;"><div class="sectionTitle" style="margin-bottom: 10px !important; text-align: center;">OUR RECOMMENDED PATH HAS CHANGED</div>In version 4.0, we have optimized our recommended lesson plan. If you would like to go back to the legacy lesson plan used in version 3.0, please change the dial on the top-right corner of this menu.<div style="position: absolute; top: 0px; right: 10px; font-size: 25px;">X</div></section>',
    ).insertBefore('#lessonMenu9 .insideMenu .mainTitle');
    $('#pathPrompt').on('click', function () {
      localStorage.setItem(lessonLanguage + 'PathChanged', 'true');
      $('#pathPrompt').remove();
    });
  }

  var medalAllVerbs = [];
  numOfQuiz[8] = numOfQuiz[3] + numOfQuiz[4] + numOfQuiz[5] + numOfQuiz[6];
  medalAllVerbs[0] =
    medalKey[0] + medalIndi[0] + medalExtra[0] + medalEndings[0];
  medalAllVerbs[1] =
    medalKey[1] + medalIndi[1] + medalExtra[1] + medalEndings[1];
  medalAllVerbs[2] =
    medalKey[2] + medalIndi[2] + medalExtra[2] + medalEndings[2];
  medalAllVerbs[3] =
    medalKey[3] + medalIndi[3] + medalExtra[3] + medalEndings[3];
  medalAllVerbs[4] = Math.round((medalAllVerbs[0] / numOfQuiz[8]) * 100);

  $('.progMenuverbs .medalNum0').text(medalAllVerbs[0]);
  $('.progMenuverbs .medalNum1').text(medalAllVerbs[1]);
  $('.progMenuverbs .medalNum2').text(medalAllVerbs[2]);
  $('.progMenuverbs .medalNum3').text(medalAllVerbs[3]);
  $('.progMenuverbs .scoreNum').text(medalAllVerbs[4]);
  $('.progMenuverbs .medalTotal').text(numOfQuiz[8]);
  $('.progMenuverbs .scoreMeter').css({ width: medalAllVerbs[4] + '%' });
  //2020 EXTRA END //////////////////////////////////////////////////////////////////////////////

  $('.progMenuendings .medalNum0').text(medalEndings[0]);
  $('.progMenuendings .medalNum1').text(medalEndings[1]);
  $('.progMenuendings .medalNum2').text(medalEndings[2]);
  $('.progMenuendings .medalNum3').text(medalEndings[3]);
  $('.progMenuendings .scoreNum').text(medalEndings[4]);
  $('.progMenuendings .medalTotal').text(numOfQuiz[5]);
  $('.progMenuendings .scoreMeter').css({ width: medalEndings[4] + '%' });

  $('.progMenuAll .medalNum0').text(medalAll[0]);
  $('.progMenuAll .medalNum1').text(medalAll[1]);
  $('.progMenuAll .medalNum2').text(medalAll[2]);
  $('.progMenuAll .medalNum3').text(medalAll[3]);
  $('.progMenuAll .scoreNum').text(medalAll[4]);
  $('.progMenuAll .medalTotal').text(numOfQuiz[7]);
  $('.progMenuAll .scoreMeter').css({ width: medalAll[4] + '%' });

  //2020 EXTRA START/////////////////////////////////////////////////////////////////////////////////
  var scoreInfo = [
    'Block',
    medalBlock[0],
    medalBlock[1],
    medalBlock[2],
    medalBlock[3],
    medalBlock[4],
    numOfQuiz[0],
    'Vocab',
    medalVocab[0],
    medalVocab[1],
    medalVocab[2],
    medalVocab[3],
    medalVocab[4],
    numOfQuiz[1],
    'Convo',
    medalConvo[0],
    medalConvo[1],
    medalConvo[2],
    medalConvo[3],
    medalConvo[4],
    numOfQuiz[2],
    'Indi',
    medalIndi[0],
    medalIndi[1],
    medalIndi[2],
    medalIndi[3],
    medalIndi[4],
    numOfQuiz[4],
    'Key',
    medalKey[0],
    medalKey[1],
    medalKey[2],
    medalKey[3],
    medalKey[4],
    numOfQuiz[3],
    'Endings',
    medalEndings[0],
    medalEndings[1],
    medalEndings[2],
    medalEndings[3],
    medalEndings[4],
    numOfQuiz[5],
    'All',
    medalAll[0],
    medalAll[1],
    medalAll[2],
    medalAll[3],
    medalAll[4],
    numOfQuiz[7],
    'Extra',
    medalExtra[0],
    medalExtra[1],
    medalExtra[2],
    medalExtra[3],
    medalExtra[4],
    numOfQuiz[6],
    'AllVerb',
    medalAllVerbs[0],
    medalAllVerbs[1],
    medalAllVerbs[2],
    medalAllVerbs[3],
    medalAllVerbs[4],
    numOfQuiz[8],
  ];

  localStorage.setItem(storeInfo + 'scoreGoalSTORE', scoreInfo.join(':'));
  updateStars();

  var filterIt =
    '<select class="selectFilter"><option value="0">Filter Lessons ▼</option><option value="all">Show All</option><option value="1star">1 Star Only</option><option value="2star">1-2 Stars</option><option value="3star">1-3 Stars</option><option value="4star">1-4 Stars</option><option value="90score">Exercises 90% & Lower</option><option value="80score">Exercises 80% & Lower</option><option value="70score">Exercises 70% & Lower</option><option value="60score">Exercises 60% & Lower</option></select><div class="filterWarn">Showing Filtered Lessons Only (Show All)</div>';

  var filterIt2 =
    '<select class="selectFilter2"><option value="0">Choose Lesson Plan ▼</option><option value="ouino">Chosen by OUINO</option><option value="teach" id="selTeach">Chosen by Teacher</option></select>';

  $('.insideMenu').append(filterIt);
  $('#lessonMenu9 .insideMenu').append(filterIt2);
  $('.filterWarn').on('click', function () {
    localStorage.setItem(storeInfo + 'filterSTORE', 'all');
    location.reload();
  });

  if (localStorage.getItem(storeInfo + 'filterSTORE')) {
    $('.selectFilter').val(localStorage.getItem(storeInfo + 'filterSTORE'));
  }
  $('.selectFilter').change(function () {
    $('.selectFilter').val($(this).val());
    localStorage.setItem(storeInfo + 'filterSTORE', $(this).val());
    location.reload();
  });
  if (localStorage.getItem(storeInfo + 'filterSTORE2')) {
    $('.selectFilter2').val(localStorage.getItem(storeInfo + 'filterSTORE2'));
  }

  $('.selectFilter2').change(function () {
    if ($(this).val() == 'ouino3') {
      localStorage.setItem(lessonLanguage + 'legacyPath', 'true');
    } else {
      localStorage.removeItem(lessonLanguage + 'legacyPath');
    }
    if ($(this).val() != 'teach') {
      localStorage.setItem(storeInfo + 'tOverwrite', 'true');
    } else {
      localStorage.removeItem(storeInfo + 'tOverwrite');
    }
    localStorage.setItem(storeInfo + 'filterSTORE2', $(this).val());
    location.reload();
  });

  //2020 EXTRA END /////////////////////////////////////////////////////////////////////////////////////////////////

  filterLessons();
  ///2019
}
/////////////////END UPDATE MENUS
///FETCH DIFFERENT USERS

function getUsers() {
  var xhr = new XMLHttpRequest();
  var requestTimer = setTimeout(function () {
    xhr.abort();
    $('.adminWarn1').text(
      "Couldn't connect to the server. Please try again when a connection is available.",
    );
    $('.adminWarn1').show();
  }, 8000);
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + FUE4B + cWbBT;
  var info =
    'email=' +
    userEmail +
    '&password=' +
    tuvm58dj +
    userEmail.substring(1, 3) +
    '&lessonLang=' +
    lessonLanguage;
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (osType == 'pwa' && xhr.responseURL.indexOf('offline') != -1) {
        $('.adminWarn1').text(
          "Couldn't connect to the server. Please try again when a connection is available.",
        );
        $('.adminWarn1').show();
        return;
      }

      clearTimeout(requestTimer);
      if (xhr.responseText != 'false' && xhr.responseText.length > 10) {
        ///START GET USER ACTIONS
        $('.adminWarn1').hide();
        var usersInfo = xhr.responseText.split(',');
        var usersNames = usersInfo[1].split(':');
        var usersEmails = usersInfo[2].split(':');
        var usersAdmins = usersInfo[3].split(':');
        var usersIDs = usersInfo[4].split(':');
        var usersNum = [];
        for (var numI = 0; numI < usersIDs.length; numI++) {
          usersNum.push(parseInt(usersIDs[numI]));
        }
        usersNum.sort();
        var usersOrder = [];
        for (var numE = 0; numE < usersIDs.length; numE++) {
          usersOrder.push(usersIDs.indexOf(usersNum[numE].toString()));
        }
        //START LOOP
        var colorArr = [
          '#c0392b',
          '#d35400',
          '#f39c12',
          '#27ae60',
          '#16a085',
          '#3498db',
          '#9b59b6',
        ];
        var colorNum = 0;
        for (var num = 1; num <= usersNames.length; num++) {
          var cirColor = colorArr[colorNum];
          if (colorNum < colorArr.length - 1) {
            colorNum++;
          } else {
            colorNum = 0;
          }
          var userDivs =
            '<div id="allUser' +
            num +
            '" class="allUsers"><div class="allUsersLogo" style="background: ' +
            cirColor +
            ';"><img src="common/logoUser.svg" class="userImg"></div><div class="vLine"></div><div class="userInfo"><p>USER ' +
            num +
            '</p>Name: ' +
            usersNames[usersOrder[num - 1]] +
            '<br>Email: ' +
            usersEmails[usersOrder[num - 1]] +
            '</div><div class="adminInfo">ADMIN<br>' +
            usersAdmins[usersOrder[num - 1]] +
            '</div></div>';
          $('#usersCont').append(userDivs);
        }

        if (usersNames.length == 1) {
          $('#usersCont').append(
            '<div class="adminWarn2">You are currently the only user active on your license.</div>',
          );
        }
        ///END LOOP
        $('.allUsers').on('click', allUsersActions);
        $('.adminInfo').on('click', adminActions);
        if (currentDevice != 'mobile') {
          $('.allUsers')
            .on('mouseover mouseenter', function (e) {
              if (!$(e.target).hasClass('adminInfo')) {
                $(this).addClass('allUsersHover');
              }
            })
            .on('mouseout mouseleave', function () {
              $(this).removeClass('allUsersHover');
            });
          $('.adminInfo').hover(function () {
            $(this).toggleClass('adminInfoHOVER');
            $(this).parent('.allUsers').removeClass('allUsersHover');
          });
        }
        ////STOP GET USER ACTIONS
      } else {
        $('.adminWarn1').text(
          "Couldn't connect to the server. Please try again when a connection is available.",
        );
        $('.adminWarn1').show();
      }
    }
  };

  try {
    xhr.send(info);
  } catch (e) {
    $('.adminWarn1').text(
      "Couldn't connect to the server. Please try again when a connection is available.",
    );
    $('.adminWarn1').show();
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////DATABASE INITIALIZE
function yifzq67(a) {
  var b = a.replace(/[a-z]/gi, function (a) {
    return (
      (a = String.fromCharCode(a.charCodeAt(0) + 1)),
      ('{' == a || '[' == a) && (a = 'a'),
      /[aeiuo]/.test(a) && (a = a.toUpperCase()),
      a
    );
  });
  return (b = b
    .replace('0', 'a')
    .replace('1', 'b')
    .replace('2', 'c')
    .replace('3', 'd')
    .replace('4', 'e')
    .replace('5', 'f')
    .replace('6', 'g')
    .replace('7', 'h')
    .replace('8', 'i')
    .replace('9', 'j'));
}

/////START CHECK CONNECTION
function checkConnection() {
  var xhr = new XMLHttpRequest();
  var requestTimer = setTimeout(function () {
    xhr.abort();
    if (localStorage[storeInfo + 'activationSTORE'] != null) {
      offlineMessage();
    } else {
      $('#loginTitle').addClass('loginTitleHover');
      $('#loginTitle').text(
        'Error: Offline profile not found on this computer.',
      );
      $('#loadLogo').hide();
    }
  }, 6000);
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + jGWFQ + cWbBT;
  var info = 'email=test@ouino.com&password=test&product=test';
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      ///WEB START
      if (osType == 'pwa' && xhr.responseURL.indexOf('offline') != -1) {
        $('#loginTitle').addClass('loginTitleHover');
        $('#loginTitle').text(
          'Error: Offline profile not found on this computer.',
        );
        $('#loadLogo').hide();
        return;
      }
      ///WEB END

      clearTimeout(requestTimer);
      if (xhr.responseText != 'false' && xhr.responseText.length > 500) {
        $('#loginCenter').show();
        localStorage.removeItem('STAYLOGGEDIN');
        localStorage.removeItem('activationSTORE');
        $('#loginTitle').addClass('loginTitleHover');
        $('#loginTitle').text('Invalid email and/or password.');
        $('#loadLogo').hide();
        localStorage.removeItem('userEmailSTORE');
        localStorage.removeItem('tuvm58djSTORE');
        localStorage.removeItem(storeInfo + 'activationSTORE');
        localStorage.removeItem(storeInfo + 'userEmailSTORE');
        localStorage.removeItem(storeInfo + 'tuvm58djSTORE');
        $('#emailField').val('');
        $('#jguyr4').val('');
      } else {
        if (localStorage[storeInfo + 'activationSTORE'] != null) {
          offlineMessage();
        } else {
          $('#loginTitle').addClass('loginTitleHover');
          $('#loginTitle').text('Internet required on first use.');
          $('#loadLogo').hide();
        }
      }
    }
  };

  try {
    xhr.send(info);
  } catch (e) {
    if (localStorage[storeInfo + 'activationSTORE'] != null) {
      offlineMessage();
    } else {
      $('#loginTitle').addClass('loginTitleHover');
      $('#loginTitle').text('Error: Internet required on first use.');
      $('#loadLogo').hide();
    }
  }
}
//////END CHECK CONNECTION
////////
function databaseInit() {
  if (localStorage['STAYLOGGEDIN'] != null) {
    localStorage['userEmailSTORE'] = userEmail;
    localStorage['tuvm58djSTORE'] = tuvm58dj;
  } else {
    localStorage.removeItem('userEmailSTORE');
    localStorage.removeItem('tuvm58djSTORE');
  }

  ///WEB START
  if (osType == 'pwa' && sessionStorage.getItem('offlineLoad')) {
    offlineMessage();
    sessionStorage.removeItem('offlineLoad');
    return;
  }
  ///WEB END

  var xhr = new XMLHttpRequest();

  var delayTime = 7000;

  if ($('#startCover').is(':visible') == false) {
    $('#loadLogo').show();
  }

  if (osType == 'iOS' || osType.indexOf('droid') != -1) {
    delayTime = 9000;
  }

  var requestTimer = setTimeout(function () {
    xhr.abort();
    if (localStorage[storeInfo + 'activationSTORE'] != null) {
      offlineMessage();
    } else {
      $('#loginTitle').addClass('loginTitleHover');
      $('#loginTitle').text('Error: Internet required on first use.');
      $('#loadLogo').hide();
    }
  }, delayTime);
  ///2021 bug END
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + jGWFQ + cWbBT;
  var info =
    'email=' +
    userEmail +
    '&password=' +
    tuvm58dj +
    userEmail.substring(1, 3) +
    '&product=' +
    lessonLanguage +
    '&version=5.1';
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      ///WEB START
      if (osType == 'pwa' && xhr.responseURL.indexOf('offline') != -1) {
        offlineMessage();
        sessionStorage.removeItem('offlineLoad');
        return;
      }
      ///WEB END

      clearTimeout(requestTimer);
      if (xhr.responseText != 'false' && xhr.responseText.length > 500) {
        $('#loginCover').hide();
        $('#loadLogo').fadeOut();

        ///2021 BUG NEW
        localStorage[storeInfo + 'activationSTORE'] = 'activated';
        localStorage[storeInfo + 'userEmailSTORE'] = userEmail;
        localStorage[storeInfo + 'tuvm58djSTORE'] = tuvm58dj;
        sessionStorage['userEmailSTORE'] = userEmail;
        sessionStorage['tuvm58djSTORE'] = tuvm58dj;
        sessionStorage['LOGGEDIN'] = 'User logged in';
        userInfo = xhr.responseText.split(', ').join('ZZZZ').split(',');
        localStorage.setItem(storeInfo + 'deviceSTORE', userInfo[3]);
        if (localStorage[storeInfo + 'wasOfflineSTORE'] == null) {
          initUpdateFROMdb();
        } else {
          initUpdateTOdb();
        }
      } else {
        checkConnection();
      }
    }
  };

  try {
    xhr.send(info);
  } catch (e) {
    if (localStorage[storeInfo + 'activationSTORE'] != null) {
      offlineMessage();
    } else {
      $('#loginTitle').addClass('loginTitleHover');
      $('#loginTitle').text('Error: Internet required on first use.');
      $('#loadLogo').hide();
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UPDATE DATABASE
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
  } catch (e) {
    offlineMessage();
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UPDATE DATABASE FOR ENTIRE GROUP
function updateGroup() {
  var xhr = new XMLHttpRequest();
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + 'Group' + cWbBT;
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
    offlineMessage();
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OFFLINE MESSAGE
function offlineMessage() {
  if (osType == 'pwa') {
    sessionStorage.setItem('offlineSession', 'true');
    offlineActions();
  }

  $('#loadLogo').hide();
  if (tuvm58dj == localStorage[storeInfo + 'tuvm58djSTORE']) {
    sessionStorage['userEmailSTORE'] = userEmail;
    sessionStorage['tuvm58djSTORE'] = tuvm58dj;
    sessionStorage['LOGGEDIN'] = 'User logged in';
    localStorage[storeInfo + 'numUseSTORE'] =
      parseInt(localStorage[storeInfo + 'numUseSTORE']) + 1;
    localStorage[storeInfo + 'wasOfflineSTORE'] = 'true';
    if (
      sessionStorage['OFFLINEWARNING'] == null &&
      localStorage[storeInfo + 'offlineCheckSTORE'] == null
    ) {
      sessionStorage['OFFLINEWARNING'] = 'warned';
      $('#loginCover').hide();
      $('#loginOffline').show();
      $('.loader').hide();
      $('#loadLogo').hide();
    } else {
      $('#loginCover').hide();
    }
  } else {
    $('#loginTitle').addClass('loginTitleHover');
    $('#loginTitle').text('Error: Internet required on first use.');
    $('#loadLogo').hide();
    $('#jguyr4').val('');
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UPDATE Options
function updateOptions() {
  infoToUpdate =
    $('#selectSound').val() +
    ':' +
    $('#selectPlayback').val() +
    ':' +
    $('#selectInterval').val() +
    ':' +
    $('#selectText').val();
  fieldToUpdate = currentSecShort + 'Options';
  updateDatabase();
}

///2018CHANGE
function updateAllOptions() {
  infoToUpdate =
    $('#selectSound').val() +
    ':' +
    $('#selectPlayback').val() +
    ':' +
    $('#selectInterval').val() +
    ':' +
    $('#selectText').val();
  fieldToUpdate = 'blockOptions';
  updateDatabase();
  fieldToUpdate = 'vocabOptions';
  updateDatabase();
  fieldToUpdate = 'convoOptions';
  updateDatabase();
  fieldToUpdate = 'verbOptions';
  updateDatabase();
}
///2018CHANGE
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

///////////////////////////////UPDATE STARS
function updateStars() {
  ///UPDATE STARS
  var numOfStars;
  var starsArray;
  var starTotal;
  var starPercent;
  var starInfo = [];

  numOfStars =
    ($('#lessonMenu1 .Lstars').length - $('#lessonMenu1 .quizOnly').length) * 4;

  starsArray = KSblock.join('|').split('|');
  for (var i = 0; i < starsArray.length; i++) {
    starsArray[i] = parseInt(starsArray[i]);
  }
  starTotal = 0;
  $.each(starsArray, function () {
    starTotal += this;
  });
  starPercent = Math.round((starTotal / numOfStars) * 100);
  $('.progMenublock .starNum').text(starTotal);
  $('.progMenublock .starTotal').text(numOfStars);
  $('.progMenublock .starMeter').css({ width: starPercent + '%' });
  starInfo.push('Block');
  starInfo.push(starTotal);
  starInfo.push(numOfStars);
  starInfo.push(starPercent);

  numOfStars =
    ($('#lessonMenu2 .Lstars').length - $('#lessonMenu2 .quizOnly').length) * 4;
  starsArray = KSvocab.join('|').split('|');
  for (var i = 0; i < starsArray.length; i++) {
    starsArray[i] = parseInt(starsArray[i]);
  }
  starTotal = 0;
  $.each(starsArray, function () {
    starTotal += this;
  });
  starPercent = Math.round((starTotal / numOfStars) * 100);
  $('.progMenuvocab .starNum').text(starTotal);
  $('.progMenuvocab .starTotal').text(numOfStars);
  $('.progMenuvocab .starMeter').css({ width: starPercent + '%' });
  starInfo.push('Vocab');
  starInfo.push(starTotal);
  starInfo.push(numOfStars);
  starInfo.push(starPercent);

  numOfStars =
    ($('#lessonMenu3 .Lstars').length - $('#lessonMenu3 .quizOnly').length) * 4;
  starsArray = KSconvo.join('|').split('|');
  for (var i = 0; i < starsArray.length; i++) {
    starsArray[i] = parseInt(starsArray[i]);
  }
  starTotal = 0;
  $.each(starsArray, function () {
    starTotal += this;
  });
  starPercent = Math.round((starTotal / numOfStars) * 100);
  $('.progMenuconvo .starNum').text(starTotal);
  $('.progMenuconvo .starTotal').text(numOfStars);
  $('.progMenuconvo .starMeter').css({ width: starPercent + '%' });
  starInfo.push('Convo');
  starInfo.push(starTotal);
  starInfo.push(numOfStars);
  starInfo.push(starPercent);

  numOfStars =
    ($('#lessonMenu5 .Lstars').length - $('#lessonMenu5 .quizOnly').length) * 4;
  var KSindi = [];
  for (var num = sLengths[3] + 1; num <= sLengths[4]; num++) {
    KSindi.push(KSverb[num - 1]);
  }
  starsArray = KSindi.join('|').split('|');
  for (var i = 0; i < starsArray.length; i++) {
    starsArray[i] = parseInt(starsArray[i]);
  }
  starTotal = 0;
  $.each(starsArray, function () {
    starTotal += this;
  });
  starPercent = Math.round((starTotal / numOfStars) * 100);
  $('.progMenuindi .starNum').text(starTotal);
  $('.progMenuindi .starTotal').text(numOfStars);
  $('.progMenuindi .starMeter').css({ width: starPercent + '%' });
  starInfo.push('Indi');
  starInfo.push(starTotal);
  starInfo.push(numOfStars);
  starInfo.push(starPercent);

  ///2018CHANGE BIG CHANGE///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  numOfStars =
    ($('#lessonMenu6 .Lstars').length - $('#lessonMenu6 .quizOnly').length) * 4;
  var KSkey = [];
  //MODIFY NUMBER HERE IF SPANISH VERB LESSONS CHANGE
  if (lessonLanguage == 'Spanish') {
    for (var num = 1; num <= 22; num++) {
      KSkey.push(KSverb[num - 1]);
    }
    for (var num = 167; num <= 169; num++) {
      KSkey.push(KSverb[num - 1]);
    }
  } else {
    for (var num = 1; num <= sLengths[3]; num++) {
      KSkey.push(KSverb[num - 1]);
    }
  }
  //MODIFY NUMBER HERE
  starsArray = KSkey.join('|').split('|');
  for (var i = 0; i < starsArray.length; i++) {
    starsArray[i] = parseInt(starsArray[i]);
  }
  starTotal = 0;
  $.each(starsArray, function () {
    starTotal += this;
  });
  starPercent = Math.round((starTotal / numOfStars) * 100);
  $('.progMenukey .starNum').text(starTotal);
  $('.progMenukey .starTotal').text(numOfStars);
  $('.progMenukey .starMeter').css({ width: starPercent + '%' });
  starInfo.push('Key');
  starInfo.push(starTotal);
  starInfo.push(numOfStars);
  starInfo.push(starPercent);

  numOfStars =
    ($('#lessonMenu8 .Lstars').length - $('#lessonMenu8 .quizOnly').length) * 4;
  var KSendings = [];
  for (var num = sLengths[4] + 1; num <= sLengths[5]; num++) {
    KSendings.push(KSverb[num - 1]);
  }
  starsArray = KSendings.join('|').split('|');
  for (var i = 0; i < starsArray.length; i++) {
    starsArray[i] = parseInt(starsArray[i]);
  }
  starTotal = 0;
  $.each(starsArray, function () {
    starTotal += this;
  });
  starPercent = Math.round((starTotal / numOfStars) * 100);
  $('.progMenuendings .starNum').text(starTotal);
  $('.progMenuendings .starTotal').text(numOfStars);
  $('.progMenuendings .starMeter').css({ width: starPercent + '%' });
  starInfo.push('Endings');
  starInfo.push(starTotal);
  starInfo.push(numOfStars);
  starInfo.push(starPercent);

  //2020 EXTRA START BIG CHANGE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  starInfo.push('All');
  starInfo.push('');
  starInfo.push('');
  starInfo.push('');

  numOfStars =
    ($('#lessonMenu10 .Lstars').length - $('#lessonMenu10 .quizOnly').length) *
    4;
  var KSextra = [];
  for (var num = sLengths[5] + 1; num <= sLengths[6]; num++) {
    if (lessonLanguage == 'Spanish' && num < 170 && num >= 167) {
    } else {
      KSextra.push(KSverb[num - 1]);
    }
  }
  starsArray = KSextra.join('|').split('|');
  for (var i = 0; i < starsArray.length; i++) {
    starsArray[i] = parseInt(starsArray[i]);
  }
  starTotal = 0;
  $.each(starsArray, function () {
    starTotal += this;
  });
  starPercent = Math.round((starTotal / numOfStars) * 100);
  $('.progMenuextra .starNum').text(starTotal);
  $('.progMenuextra .starTotal').text(numOfStars);
  $('.progMenuextra .starMeter').css({ width: starPercent + '%' });
  starInfo.push('Extra');
  starInfo.push(starTotal);
  starInfo.push(numOfStars);
  starInfo.push(starPercent);

  starTotal =
    starInfo[1] +
    starInfo[5] +
    starInfo[9] +
    starInfo[13] +
    starInfo[17] +
    starInfo[21] +
    starInfo[29];
  numOfStars =
    starInfo[2] +
    starInfo[6] +
    starInfo[10] +
    starInfo[14] +
    starInfo[18] +
    starInfo[22] +
    starInfo[30];
  starPercent = Math.round((starTotal / numOfStars) * 100);
  $('.progMenuAll .starNum').text(starTotal);
  $('.progMenuAll .starTotal').text(numOfStars);
  $('.progMenuAll .starMeter').css({ width: starPercent + '%' });
  starInfo[25] = starTotal;
  starInfo[26] = numOfStars;
  starInfo[27] = starPercent;

  starTotal = starInfo[13] + starInfo[17] + starInfo[21] + starInfo[29];
  numOfStars = starInfo[14] + starInfo[18] + starInfo[22] + starInfo[30];
  starPercent = Math.round((starTotal / numOfStars) * 100);
  $('.progMenuverbs .starNum').text(starTotal);
  $('.progMenuverbs .starTotal').text(numOfStars);
  $('.progMenuverbs .starMeter').css({ width: starPercent + '%' });
  starInfo.push('AllVerb');
  starInfo.push(starTotal);
  starInfo.push(numOfStars);
  starInfo.push(starPercent);

  //2020 EXTRA END BIG CHANGE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///2018CHANGE BIG CHANGE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  localStorage.setItem(storeInfo + 'starGoalSTORE', starInfo.join(':'));

  if (osType == 'pwa') {
    updateCache();
  }
}

/////////////////END UPDATE STARS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UPDATE FROM DATABASE WHEN WAS OFFLINE
function initUpdateFROMdb() {
  //2018CHANGE
  var countDot;
  ///VOCAB STARS
  countDot = (userInfo[5].match(/:/g) || []).length;
  if (countDot < 107) {
    userInfo[5] =
      userInfo[5] +
      ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0';
    userInfo[5] = userInfo[5].split('::').join(':0:');
    infoToUpdate = userInfo[5];
    fieldToUpdate = 'vocabStars';
    updateDatabase();
  }
  ///VOCAB SCORES
  countDot = (userInfo[6].match(/:/g) || []).length;
  if (countDot < 107) {
    userInfo[6] =
      userInfo[6] +
      ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0';
    userInfo[6] = userInfo[6].split('::').join(':0:');
    infoToUpdate = userInfo[6];
    fieldToUpdate = 'vocabScores';
    updateDatabase();
  }
  ///////////4.1 START
  ///CONVO STARS
  countDot = (userInfo[8].match(/:/g) || []).length;
  if (countDot < 79) {
    userInfo[8] =
      userInfo[8] +
      ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0';
    userInfo[8] = userInfo[8].split(':').slice(0, 85).join(':');
    userInfo[8] = userInfo[8].split('::').join(':0:');
    infoToUpdate = userInfo[8];
    fieldToUpdate = 'convoStars';
    updateDatabase();
  }
  ///CONVO SCORES
  countDot = (userInfo[9].match(/:/g) || []).length;
  if (countDot < 79) {
    userInfo[9] =
      userInfo[9] +
      ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0';
    userInfo[9] = userInfo[9].split('::').join(':0:');
    infoToUpdate = userInfo[9];
    fieldToUpdate = 'convoScores';
    updateDatabase();
  }
  ///////4.1 END
  //////2020 EXTRA START REPLACE
  ///VERB STARS
  countDot = (userInfo[11].match(/:/g) || []).length;
  if (countDot < 210) {
    userInfo[11] =
      userInfo[11] +
      ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0';
    userInfo[11] = userInfo[11].split(':').slice(0, 220).join(':');
    userInfo[11] = userInfo[11].split('::').join(':0:');
    infoToUpdate = userInfo[11];
    fieldToUpdate = 'verbStars';
    updateDatabase();
  }
  ///VERB SCORES
  countDot = (userInfo[12].match(/:/g) || []).length;
  if (countDot < 210) {
    userInfo[12] =
      userInfo[12] +
      ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0';
    userInfo[12] = userInfo[12].split(':').slice(0, 220).join(':');
    userInfo[12] = userInfo[12].split('::').join(':0:');
    infoToUpdate = userInfo[12];
    fieldToUpdate = 'verbScores';
    updateDatabase();
  }
  //////2020 EXTRA END REPLACE
  ///BLOCK STARS
  countDot = (userInfo[14].match(/:/g) || []).length;
  if (countDot < 110) {
    userInfo[14] =
      userInfo[14] + ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0';
    userInfo[14] = userInfo[14].split('::').join(':0:');
    infoToUpdate = userInfo[14];
    fieldToUpdate = 'blockStars';
    updateDatabase();
  }
  ///BLOCK SCORES
  countDot = (userInfo[15].match(/:/g) || []).length;
  if (countDot < 110) {
    userInfo[15] =
      userInfo[15] + ':0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0:0';
    userInfo[15] = userInfo[15].split('::').join(':0:');
    infoToUpdate = userInfo[15];
    fieldToUpdate = 'blockScores';
    updateDatabase();
  }
  ///EXTRASCORES
  countDot = (userInfo[24].match(/:/g) || []).length;
  if (countDot < 15) {
    userInfo[24] = userInfo[24] + ':0:0:0';
    userInfo[24] = userInfo[24].split('::').join(':0:');
    infoToUpdate = userInfo[24];
    fieldToUpdate = 'extraScores';
    updateDatabase();
  }
  ///VERSIONCHECK

  ///2019

  ///2020 EXTRA START

  var currentVersion = ':500000';

  if (userInfo[24].indexOf(currentVersion) == -1) {
    infoToUpdate =
      userInfo[24]
        .split(':300011')
        .join('')
        .split(':300000')
        .join('')
        .split(':400000')
        .join('') + currentVersion;
    fieldToUpdate = 'extraScores';
    updateDatabase();
  }

  ////VOCAB OPTIONS

  var dbOptions = userInfo[4].split(':');
  localStorage[storeInfo + 'musicSTOREvocab'] = dbOptions[0];
  localStorage[storeInfo + 'playbackSTOREvocab'] = dbOptions[1];
  localStorage[storeInfo + 'intervalSTOREvocab'] = dbOptions[2];
  localStorage[storeInfo + 'textSTOREvocab'] = dbOptions[3];
  ///VOCAB STARS
  localStorage[storeInfo + 'starSTOREvocab'] = userInfo[5];
  ///VOCAB SCORES
  localStorage[storeInfo + 'scoreSTOREvocab'] = userInfo[6];

  ////CONVO OPTIONS
  dbOptions = userInfo[7].split(':');
  localStorage[storeInfo + 'musicSTOREconvo'] = dbOptions[0];
  localStorage[storeInfo + 'playbackSTOREconvo'] = dbOptions[1];
  localStorage[storeInfo + 'intervalSTOREconvo'] = dbOptions[2];
  localStorage[storeInfo + 'textSTOREconvo'] = dbOptions[3];
  ///CONVO STARS
  localStorage[storeInfo + 'starSTOREconvo'] = userInfo[8];
  ///CONVO SCORES
  localStorage[storeInfo + 'scoreSTOREconvo'] = userInfo[9];

  ////VERB OPTIONS
  dbOptions = userInfo[10].split(':');
  localStorage[storeInfo + 'musicSTOREverb'] = dbOptions[0];
  localStorage[storeInfo + 'playbackSTOREverb'] = dbOptions[1];
  localStorage[storeInfo + 'intervalSTOREverb'] = dbOptions[2];
  localStorage[storeInfo + 'textSTOREverb'] = dbOptions[3];
  ///VERB STARS
  localStorage[storeInfo + 'starSTOREverb'] = userInfo[11];
  ///VERB SCORES
  localStorage[storeInfo + 'scoreSTOREverb'] = userInfo[12];

  ////BLOCK OPTIONS
  dbOptions = userInfo[13].split(':');
  localStorage[storeInfo + 'musicSTOREblock'] = dbOptions[0];
  localStorage[storeInfo + 'playbackSTOREblock'] = dbOptions[1];
  localStorage[storeInfo + 'intervalSTOREblock'] = dbOptions[2];
  localStorage[storeInfo + 'textSTOREblock'] = dbOptions[3];
  ///BLOCK STARS
  localStorage[storeInfo + 'starSTOREblock'] = userInfo[14];
  ///BLOCK SCORES
  localStorage[storeInfo + 'scoreSTOREblock'] = userInfo[15];

  ///PRONUN STARS
  localStorage[storeInfo + 'starSTOREpronun'] = userInfo[16];

  var topWarn = 0;
  if (osType == 'windows') {
    topWarn = 45;
  }

  if (userInfo[17] == 'exp') {
    $('.smallIcon, #volDiv, #menuMain2').hide();
    if (osType != 'iOS') {
      $('body').append(
        "<div style='position:fixed; width: 100%; top: " +
          topWarn +
          "px; height: 100%; z-index:99999; background: rgba(20,20,20,1);'><div style='position:absolute; width: 90%; max-width:800px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your subscription has expired. Please subscribe again to continue using the program. If you'd like to upgrade to the lifetime access at a discounted rate, simply follow this link:<br><br> <div id='upgradeLink2' style='font-weight: bold; color: #F4B400; cursor: pointer; font-size: 1.1em;' onclick='upgradeAccess()'>ouinolanguages.com/upgrade/" +
          lessonLanguage.toLowerCase() +
          '/</div><br><br>With the lifetime access, there are no reoccurring fees or extra costs. Plus, there are free lifetime upgrades. And when we say lifetime, we really mean it. We have never charged a customer to upgrade their program even several years after purchasing the program.</div></div>',
      );
    } else {
      $('body').append(
        "<div style='position:fixed; width: 100%; top: " +
          topWarn +
          "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your subscription has expired. Please subscribe again to continue using the program.</div></div>",
      );
    }
    localStorage.removeItem('userEmailSTORE');
    localStorage.removeItem('tuvm58djSTORE');
  } else if (userInfo[17] == 'ref') {
    $('.smallIcon, #volDiv, #menuMain2').hide();
    $('body').append(
      "<div style='position:fixed; width: 100%; top: " +
        topWarn +
        "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>Your account has been disabled because we have refunded your purchase.</div></div>",
    );
    localStorage.removeItem('userEmailSTORE');
    localStorage.removeItem('tuvm58djSTORE');
  } else if (userInfo[17] == 'yes') {
    $('.smallIcon, #volDiv, #menuMain2').hide();
    $('body').append(
      "<div style='position:fixed; width: 100%; top: " +
        topWarn +
        "px; height: 100%; z-index:99999; background: rgba(0,0,0,0.95);'><div style='position:absolute; width: 90%; max-width:500px; height: 200px; top: -100px; right: 0; bottom: 0; left:0; margin: auto auto; text-align:center; color: white; font-size: 18px;'>" +
        userInfo[18].split('ZZZZ').join(', ') +
        '</div></div>',
    );
    localStorage.removeItem('userEmailSTORE');
    localStorage.removeItem('tuvm58djSTORE');
  }
  localStorage[storeInfo + 'piracySTORE'] = userInfo[17];
  localStorage[storeInfo + 'piracyNOTE'] = userInfo[18];
  ////2019

  ///USER NAME
  localStorage[storeInfo + 'nameSTORE'] = userInfo[19];

  ///ADMIN
  localStorage[storeInfo + 'adminSTORE'] = userInfo[20];

  ///PRODUCTS
  localStorage[storeInfo + 'productSTORE'] = userInfo[21];

  ///GOALS
  localStorage[storeInfo + 'goalsSTORE'] = userInfo[23];

  ///Slides
  localStorage[storeInfo + 'slideInfo'] = userInfo[22];

  ///EXTRASCORES
  localStorage[storeInfo + 'extraScoresSTORE'] = userInfo[24];

  ///PORTUGUESE CHANGE START////////////////////////////////////////////////////////////////////////
  ////FIND WHERE USER LEFT OFF ON SERVER
  if (userInfo[27].length > 20) {
    //LOAD LAST LESSON
    var leftoff = userInfo[27].split(':');
    var leftLess = leftoff.pop();
    if (leftLess.indexOf('/') == -1) {
      localStorage.removeItem(storeInfo + 'saved');
    } else {
      localStorage.setItem(storeInfo + 'saved', leftLess);
    }
    //LOAD SCROLL POSITION
    var scrPer = leftoff.pop();
    if (scrPer.indexOf('|') == -1) {
      scrPer = '0|0|0|0|0|0|0|0|0|0|0';
    }
    localStorage.setItem(storeInfo + 'scrollPercent', scrPer);
    ///LOAD LESSON POSITIONS
    leftoff = leftoff.join(':');
    if (leftoff.indexOf('|') == -1) {
      localStorage.removeItem(storeInfo + 'leftOff');
    } else {
      localStorage.setItem(storeInfo + 'leftOff', leftoff);
    }
  } else {
    localStorage.removeItem(storeInfo + 'saved');
    localStorage.removeItem(storeInfo + 'leftOff');
    localStorage.setItem(storeInfo + 'scrollPercent', '0|0|0|0|0|0|0|0|0|0|0');
  }
  ///PORTUGUESE CHANGE END///////////////////////////////////////////////////////////////////////////

  /////2019
  localStorage[storeInfo + 'teacherSTORE'] = userInfo[25]
    .split('ZZZZ')
    .join(', ');
  teacher = userInfo[25];
  /////2020 EXTRA START REPLACE
  if (teacher.length > 16 && !localStorage.getItem(storeInfo + 'tOverwrite')) {
    localStorage.setItem(storeInfo + 'filterSTORE2', 'teach');
  } else if (!localStorage.getItem(storeInfo + 'filterSTORE2')) {
    localStorage.setItem(storeInfo + 'filterSTORE2', '0');
  }
  if (teacher.length < 17) {
    localStorage.removeItem(storeInfo + 'filterSTORE2');
    localStorage.setItem(storeInfo + 'teacherSTORE', '');
  }
  teacher = teacher
    .split('|!w')
    .join('|.Lblock')
    .split('|!x')
    .join('|.Lvocab')
    .split('|!y')
    .join('|.Lconvo')
    .split('|!z')
    .join('|.Lverb')
    .split('|');
  localStorage[storeInfo + 'cardsSTORE'] = userInfo[26];
  /////2020 EXTRA END

  localStorage[storeInfo + 'numUseSTORE'] = userInfo[0];
  infoToUpdate = parseInt(userInfo[0]) + 1;
  infoToUpdate = infoToUpdate.toString();
  fieldToUpdate = 'userUse';
  updateDatabase();
  var userUse = parseInt(userInfo[0]) + 1;
  homeDelay = 100;

  $('#eForm1').val(userInfo[19]);
  $('#eForm2').val(userEmail);
  $('#eForm3').val(lessonLanguage);
  $('#eForm4').val(userUse);

  if (osType.indexOf('droid') != -1) {
    $('#startCover').show();
  }

  $('#likeNo').on('click', function () {
    $('#emailForm h4').text(
      'Hello' +
        findName +
        '. We really strive to make all our users happy. Please let us know what we could improve in the message box below. We will get back to you and address your concerns one by one. Thank you for giving us the chance to make this right.',
    );
    $('#emailForm').show();
    $('#startCover').hide();
    $('#like').hide();
  });
  $('#likeMay').on('click', function () {
    $('#emailForm h4').text(
      "We're glad to hear you like it" +
        findName +
        '! We are always gathering user comments and suggestions and we are always looking for ways to improve! Please let us know how we can make it even better! We will get back to you.',
    );
    $('#emailForm').show();
    $('#startCover').hide();
    $('#like').hide();
  });
  $('#likeYes').on('click', function () {
    $('#review').show();
    $('#like').hide();
  });
  $('#revTrustpilot').on('click', function () {
    openLink('https://www.trustpilot.com/evaluate/www.ouinolanguages.com');
    setTimeout(function () {
      $('#review').hide();
      homeMenu();
    }, 1000);
  });
  $('#emailForm form').submit(function (ev) {
    ev.preventDefault();
    $('#emailForm form').hide();
    $('#thanks').show();
    setTimeout(function () {
      $('#emailForm').fadeOut();
      homeMenu();
    }, 2000);
    $.ajax({
      url: 'https://www.ouinolanguages.com/php/prompt.php',
      type: 'post',
      data: $('#emailForm form').serialize(),
    });
  });
  var findName = '';
  if (userInfo[19].indexOf(' ') != -1) {
    findName = userInfo[19].split(' ');
    findName = ' ' + findName[0];
  }
  if (userUse == 5 && !sessionStorage['OFFLINEWARNING']) {
    $('#emailForm h4').text(
      'Hello' +
        findName +
        '! Just to let you know that we are here to help. Did you have any questions? Send us a message. We will get back to you.',
    );
    $('#emailForm').show();
    $('#startCover').hide();
  }
  ///4.1 START
  else if (userUse == 13 && !sessionStorage['OFFLINEWARNING']) {
    $('#likeIn b').text(
      'Hello' + findName + '! How do you like the program so far?',
    );
    $('#reviewIn b').text(
      "That's awesome" +
        findName +
        "! If you are enjoying the program, we have a huge favor to ask you. It would mean the world to us if you could take a few minutes to write a review. We are a small family of language lovers and most of our success depends on positive reviews. Posting a review on Trustpilot would be amazingly helpful! We know it's a lot to ask, but it would really help us out. Thank you so much!",
    );
    $('#like').show();
    $('#startCover').hide();
  }
  ///4.1 END
  else if (userUse == 50 && !sessionStorage['OFFLINEWARNING']) {
    $('#emailForm h4').text(
      'Very nice' +
        findName +
        "! You've used the program 50 times! You're on the right track! We would love to hear what you think so far! Send us a message. We will get back to you.",
    );
    $('#emailForm').show();
    $('#startCover').hide();
  } else if (userUse == 100 && !sessionStorage['OFFLINEWARNING']) {
    $('#emailForm h4').text(
      'Awesome' +
        findName +
        "! You've used the program 100 times! You must be getting pretty good! :) We would love to hear what you think so far! Send us a message. We will get back to you.",
    );
    $('#emailForm').show();
    $('#startCover').hide();
  }
  ///2020 EXTRA
  else if (userUse == 2) {
    $('body').append(
      '<div class="tipCont"><img src="common/tips2.png" class="tipImages"></div>',
    );
    $('#startCover').hide();
    $('.tipCont').on('click', function () {
      if (loghref.indexOf('/init') != -1) {
        if ($('#sprompt').is(':visible')) {
          $('.tipCont').hide();
          return;
        }
        $('.tipCont, #background').hide();
        $('#loadLogo').show();
        homeMenu();
      } else {
        $('.tipCont').fadeOut(500);
        setTimeout(function () {
          $('.tipCont').remove();
          homeMenu();
        }, 500);
      }
    });
  } else if (userUse == 3) {
    $('body').append(
      '<div class="tipCont"><img src="common/tips3.png" class="tipImages"></div>',
    );
    $('#startCover').hide();
    $('.tipCont').on('click', function () {
      if (loghref.indexOf('/init') != -1) {
        if ($('#sprompt').is(':visible')) {
          $('.tipCont').hide();
          return;
        }
        $('.tipCont, #background').hide();
        $('#loadLogo').show();
        homeMenu();
      } else {
        $('.tipCont').fadeOut(500);
        setTimeout(function () {
          $('.tipCont').remove();
          homeMenu();
        }, 500);
      }
    });
  } else if (userUse == 4) {
    $('body').append(
      '<div class="tipCont"><img src="common/tips4.png" class="tipImages"></div>',
    );
    $('#startCover').hide();
    $('.tipCont').on('click', function () {
      if (loghref.indexOf('/init') != -1) {
        if ($('#sprompt').is(':visible')) {
          $('.tipCont').hide();
          return;
        }
        $('.tipCont, #background').hide();
        $('#loadLogo').show();
        homeMenu();
      } else {
        $('.tipCont').fadeOut(500);
        setTimeout(function () {
          $('.tipCont').remove();
          homeMenu();
        }, 500);
      }
    });
  } else if (userUse == 6) {
    $('body').append(
      '<div class="tipCont"><img src="common/tips6.png" class="tipImages"></div>',
    );
    $('#startCover').hide();
    $('.tipCont').on('click', function () {
      if (loghref.indexOf('/init') != -1) {
        if ($('#sprompt').is(':visible')) {
          $('.tipCont').hide();
          return;
        }
        $('.tipCont, #background').hide();
        $('#loadLogo').show();
        homeMenu();
      } else {
        $('.tipCont').fadeOut(500);
        setTimeout(function () {
          $('.tipCont').remove();
          homeMenu();
        }, 500);
      }
    });
  } else if (userUse == 7) {
    $('body').append(
      '<div class="tipCont"><img src="common/tips7.png" class="tipImages"></div>',
    );
    $('#startCover').hide();
    $('.tipCont').on('click', function () {
      if (loghref.indexOf('/init') != -1) {
        if ($('#sprompt').is(':visible')) {
          $('.tipCont').hide();
          return;
        }
        $('.tipCont, #background').hide();
        $('#loadLogo').show();
        homeMenu();
      } else {
        $('.tipCont').fadeOut(500);
        setTimeout(function () {
          $('.tipCont').remove();
          homeMenu();
        }, 500);
      }
    });
  } else if (userUse == 8) {
    $('body').append(
      '<div class="tipCont"><img src="common/tips8.png" class="tipImages"></div>',
    );
    $('#startCover').hide();
    $('.tipCont').on('click', function () {
      if (loghref.indexOf('/init') != -1) {
        if ($('#sprompt').is(':visible')) {
          $('.tipCont').hide();
          return;
        }
        $('.tipCont, #background').hide();
        $('#loadLogo').show();
        homeMenu();
      } else {
        $('.tipCont').fadeOut(500);
        setTimeout(function () {
          $('.tipCont').remove();
          homeMenu();
        }, 500);
      }
    });
  } else if (userUse == 9) {
    $('body').append(
      '<div class="tipCont"><img src="common/tips9.png" class="tipImages"></div>',
    );
    $('#startCover').hide();
    $('.tipCont').on('click', function () {
      if (loghref.indexOf('/init') != -1) {
        if ($('#sprompt').is(':visible')) {
          $('.tipCont').hide();
          return;
        }
        $('.tipCont, #background').hide();
        $('#loadLogo').show();
        homeMenu();
      } else {
        $('.tipCont').fadeOut(500);
        setTimeout(function () {
          $('.tipCont').remove();
          homeMenu();
        }, 500);
      }
    });
  } else if (userUse == 10) {
    $('body').append(
      '<div class="tipCont"><img src="common/tips10.png" class="tipImages"></div>',
    );
    $('#startCover').hide();
    $('.tipCont').on('click', function () {
      if (loghref.indexOf('/init') != -1) {
        if ($('#sprompt').is(':visible')) {
          $('.tipCont').hide();
          return;
        }
        $('.tipCont, #background').hide();
        $('#loadLogo').show();
        homeMenu();
      } else {
        $('.tipCont').fadeOut(500);
        setTimeout(function () {
          $('.tipCont').remove();
          homeMenu();
        }, 500);
      }
    });
  }
  ///2020 EXTRA

  $('#like').on('click', function (e) {
    if (e.target == this) {
      $('#like').hide();
      homeMenu();
    }
  });
  $('#likeIn .closeForm').on('click', function () {
    $('#like').hide();
    homeMenu();
  });
  $('#review').on('click', function (e) {
    if (e.target == this) {
      $('#review').hide();
      homeMenu();
    }
  });
  $('#reviewIn .closeForm').on('click', function () {
    $('#review').hide();
    homeMenu();
  });
  var savedProg = localStorage.getItem(storeInfo + 'saved');
  if (savedProg) {
    if (savedProg.indexOf('index') != -1) {
      $('#sprompt').show();
      $('#loadLogo, #startCover').hide();
    }
  } else if (
    $('.tipCont').length == 0 &&
    $('#emailForm').is(':hidden') &&
    $('#like').is(':hidden')
  ) {
    if ($('#startCover').is(':visible')) {
      $('#loadLogo').hide();
    }
    setTimeout(function () {
      homeDelay = 1500;
      homeMenu();
    }, 100);
  }
  ///2018CHANGE
}

function deviceInfo() {
  if (localStorage.getItem(storeInfo + 'deviceSTORE') === null) {
    return;
  }

  var deviceINFO = localStorage.getItem(storeInfo + 'deviceSTORE');
  var deviceScreen = screen.height + 'x' + screen.width;

  if (osType == 'iOS' || osType.indexOf('droid') != -1) {
    var uniqueID = device.uuid;
    if (localStorage.getItem(storeInfo + 'deviceID') != uniqueID) {
      localStorage.setItem(storeInfo + 'deviceID', uniqueID);
      var uniqueIDList = deviceINFO.split(' / ');
      var compId = osType + deviceScreen + ': (' + uniqueID + ')';
      uniqueIDList.push(compId);
      uniqueIDList.sort();
      uniqueIDList = unique(uniqueIDList);
      if (uniqueIDList[0] == '') {
        uniqueIDList.shift();
      }
      var deviceNum = uniqueIDList.length;
      uniqueIDList = unique(uniqueIDList).join(' / ');
      infoToUpdate = deviceNum;
      fieldToUpdate = 'deviceNum';
      updateGroup();
      infoToUpdate = uniqueIDList;
      fieldToUpdate = 'deviceIDs';
      updateGroup();
    }
  } else if (osType == 'mac' || osType == 'pwa') {
    loadScript('fingerprint2.js', function () {
      new Fingerprint2().get(function (result, components) {
        var uniqueID = result;
        if (localStorage.getItem(storeInfo + 'deviceID') != uniqueID) {
          localStorage.setItem(storeInfo + 'deviceID', uniqueID);
          var uniqueIDList = deviceINFO.split(' / ');
          var compId = osType + deviceScreen + ': (' + uniqueID + ')';
          uniqueIDList.push(compId);
          uniqueIDList.sort();
          uniqueIDList = unique(uniqueIDList);
          if (uniqueIDList[0] == '') {
            uniqueIDList.shift();
          }
          var deviceNum = uniqueIDList.length;
          uniqueIDList = unique(uniqueIDList).join(' / ');
          infoToUpdate = deviceNum;
          fieldToUpdate = 'deviceNum';
          updateGroup();
          infoToUpdate = uniqueIDList;
          fieldToUpdate = 'deviceIDs';
          updateGroup();
        }
      });
    });
  } else if (osType == 'windows') {
    var getmac;
    try {
      getmac = require('getmac');
    } catch (error) {
      console.error('Error: getmac module is not installed.');
      return; // or handle the error in an appropriate way
    }

    getmac.getMac(function (err, macAddress) {
      if (err) throw err;

      var uniqueID = macAddress;

      if (localStorage.getItem(storeInfo + 'deviceID') !== uniqueID) {
        localStorage.setItem(storeInfo + 'deviceID', uniqueID);

        var uniqueIDList = deviceINFO.split(' / ');
        var compId = osType + deviceScreen + ': (' + uniqueID + ')';
        uniqueIDList.push(compId);
        uniqueIDList.sort();
        uniqueIDList = unique(uniqueIDList);

        if (uniqueIDList[0] === '') {
          uniqueIDList.shift();
        }

        var deviceNum = uniqueIDList.length;
        uniqueIDList = unique(uniqueIDList).join(' / ');

        infoToUpdate = deviceNum;
        fieldToUpdate = 'deviceNum';
        updateGroup();

        infoToUpdate = uniqueIDList;
        fieldToUpdate = 'deviceIDs';
        updateGroup();
      }
    });
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////UPDATE DATABASE WHEN WAS OFFLINE
function initUpdateTOdb() {
  //2018CHANGE HUGE CHANGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  var userUse2 = userInfo[0].split(':');
  var vocabStars2 = userInfo[5].split(':');
  var vocabScores2 = userInfo[6].split(':');
  var convoStars2 = userInfo[8].split(':');
  var convoScores2 = userInfo[9].split(':');
  var verbStars2 = userInfo[11].split(':');
  var verbScores2 = userInfo[12].split(':');
  var blockStars2 = userInfo[14].split(':');
  var blockScores2 = userInfo[15].split(':');
  var pronunStars2 = userInfo[16].split(':');
  var goals2 = userInfo[23];
  var extraScores2 = userInfo[24].split(':');
  var newArray = [];
  var inArray = [];
  var newSC;
  var oldSC;
  var oldInfo;

  localStorage.removeItem(storeInfo + 'wasOfflineSTORE');
  ////UPDATE USE NUMBER
  infoToUpdate = parseInt(localStorage[storeInfo + 'numUseSTORE']) + 1;
  //CHANGE
  oldInfo = parseInt(userUse2);
  if (infoToUpdate >= oldInfo) {
    infoToUpdate = infoToUpdate.toString();
    fieldToUpdate = 'userUse';
    updateDatabase();
  }
  //CHANGE
  ////UPDATE VOCAB OPTIONS
  infoToUpdate =
    localStorage[storeInfo + 'musicSTOREvocab'] +
    ':' +
    localStorage[storeInfo + 'playbackSTOREvocab'] +
    ':' +
    localStorage[storeInfo + 'intervalSTOREvocab'] +
    ':' +
    localStorage[storeInfo + 'textSTOREvocab'];
  fieldToUpdate = 'vocabOptions';
  setTimeout(updateDatabase, 100);
  ////UPDATE VOCAB STARS
  infoToUpdate = localStorage[storeInfo + 'starSTOREvocab'];
  //CHANGE
  oldInfo = vocabStars2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  for (i = 0; i < infoToUpdate.length; i++) {
    if (parseInt(infoToUpdate[i]) >= parseInt(oldInfo[i])) {
      newArray.push(infoToUpdate[i]);
    } else {
      newArray.push(oldInfo[i]);
    }
  }
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'starSTOREvocab'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'vocabStars';
  setTimeout(updateDatabase, 200);
  ////UPDATE VOCAB OPTIONS
  infoToUpdate = localStorage[storeInfo + 'scoreSTOREvocab'];
  //CHANGE
  oldInfo = vocabScores2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  //NEW SCORE CALC
  for (i = 0; i < infoToUpdate.length; i++) {
    if (infoToUpdate[i].indexOf('|') != -1 && oldInfo[i].indexOf('|') == -1) {
      newArray.push(infoToUpdate[i]);
    } else if (
      infoToUpdate[i].indexOf('|') == -1 &&
      oldInfo[i].indexOf('|') != -1
    ) {
      newArray.push(oldInfo[i]);
    } else if (
      infoToUpdate[i].indexOf('|') == -1 &&
      oldInfo[i].indexOf('|') == -1
    ) {
      newArray.push(infoToUpdate[i]);
    } else if (
      infoToUpdate[i].indexOf('|') != -1 &&
      oldInfo[i].indexOf('|') != -1
    ) {
      oldSC = oldInfo[i].split('|');
      newSC = infoToUpdate[i].split('|');
      inArray = [];
      for (xx = 0; xx < newSC.length; xx++) {
        if (parseInt(newSC[xx]) >= parseInt(oldSC[xx])) {
          inArray.push(newSC[xx]);
        } else {
          inArray.push(oldSC[xx]);
        }
      }
      newArray.push(inArray.join('|'));
    }
  }
  //NEW SCORE CALC
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'scoreSTOREvocab'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'vocabScores';
  setTimeout(updateDatabase, 300);
  ////UPDATE convo OPTIONS
  infoToUpdate =
    localStorage[storeInfo + 'musicSTOREconvo'] +
    ':' +
    localStorage[storeInfo + 'playbackSTOREconvo'] +
    ':' +
    localStorage[storeInfo + 'intervalSTOREconvo'] +
    ':' +
    localStorage[storeInfo + 'textSTOREconvo'];
  fieldToUpdate = 'convoOptions';
  setTimeout(updateDatabase, 400);
  ////UPDATE convo STARS
  infoToUpdate = localStorage[storeInfo + 'starSTOREconvo'];
  //CHANGE
  oldInfo = convoStars2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  for (i = 0; i < infoToUpdate.length; i++) {
    if (parseInt(infoToUpdate[i]) >= parseInt(oldInfo[i])) {
      newArray.push(infoToUpdate[i]);
    } else {
      newArray.push(oldInfo[i]);
    }
  }
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'starSTOREconvo'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'convoStars';
  setTimeout(updateDatabase, 500);
  ////UPDATE convo OPTIONS
  infoToUpdate = localStorage[storeInfo + 'scoreSTOREconvo'];
  //CHANGE
  oldInfo = convoScores2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  //NEW SCORE CALC
  for (i = 0; i < infoToUpdate.length; i++) {
    if (infoToUpdate[i].indexOf('|') != -1 && oldInfo[i].indexOf('|') == -1) {
      newArray.push(infoToUpdate[i]);
    } else if (
      infoToUpdate[i].indexOf('|') == -1 &&
      oldInfo[i].indexOf('|') != -1
    ) {
      newArray.push(oldInfo[i]);
    } else if (
      infoToUpdate[i].indexOf('|') == -1 &&
      oldInfo[i].indexOf('|') == -1
    ) {
      newArray.push(infoToUpdate[i]);
    } else if (
      infoToUpdate[i].indexOf('|') != -1 &&
      oldInfo[i].indexOf('|') != -1
    ) {
      oldSC = oldInfo[i].split('|');
      newSC = infoToUpdate[i].split('|');
      inArray = [];
      for (xx = 0; xx < newSC.length; xx++) {
        if (parseInt(newSC[xx]) >= parseInt(oldSC[xx])) {
          inArray.push(newSC[xx]);
        } else {
          inArray.push(oldSC[xx]);
        }
      }
      newArray.push(inArray.join('|'));
    }
  }
  //NEW SCORE CALC
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'scoreSTOREconvo'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'convoScores';
  setTimeout(updateDatabase, 600);
  ////UPDATE verb OPTIONS
  infoToUpdate =
    localStorage[storeInfo + 'musicSTOREverb'] +
    ':' +
    localStorage[storeInfo + 'playbackSTOREverb'] +
    ':' +
    localStorage[storeInfo + 'intervalSTOREverb'] +
    ':' +
    localStorage[storeInfo + 'textSTOREverb'];
  fieldToUpdate = 'verbOptions';
  setTimeout(updateDatabase, 700);
  ////UPDATE verb STARS
  infoToUpdate = localStorage[storeInfo + 'starSTOREverb'];
  //CHANGE
  oldInfo = verbStars2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  for (i = 0; i < infoToUpdate.length; i++) {
    if (parseInt(infoToUpdate[i]) >= parseInt(oldInfo[i])) {
      newArray.push(infoToUpdate[i]);
    } else {
      newArray.push(oldInfo[i]);
    }
  }
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'starSTOREverb'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'verbStars';
  setTimeout(updateDatabase, 800);
  ////UPDATE verb OPTIONS
  infoToUpdate = localStorage[storeInfo + 'scoreSTOREverb'];
  //CHANGE
  oldInfo = verbScores2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  //NEW SCORE CALC
  for (i = 0; i < infoToUpdate.length; i++) {
    if (infoToUpdate[i].indexOf('|') != -1 && oldInfo[i].indexOf('|') == -1) {
      newArray.push(infoToUpdate[i]);
    } else if (
      infoToUpdate[i].indexOf('|') == -1 &&
      oldInfo[i].indexOf('|') != -1
    ) {
      newArray.push(oldInfo[i]);
    } else if (
      infoToUpdate[i].indexOf('|') == -1 &&
      oldInfo[i].indexOf('|') == -1
    ) {
      newArray.push(infoToUpdate[i]);
    } else if (
      infoToUpdate[i].indexOf('|') != -1 &&
      oldInfo[i].indexOf('|') != -1
    ) {
      oldSC = oldInfo[i].split('|');
      newSC = infoToUpdate[i].split('|');
      inArray = [];
      for (xx = 0; xx < newSC.length; xx++) {
        if (parseInt(newSC[xx]) >= parseInt(oldSC[xx])) {
          inArray.push(newSC[xx]);
        } else {
          inArray.push(oldSC[xx]);
        }
      }
      newArray.push(inArray.join('|'));
    }
  }
  //NEW SCORE CALC
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'scoreSTOREverb'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'verbScores';
  setTimeout(updateDatabase, 900);
  ////UPDATE block OPTIONS
  infoToUpdate =
    localStorage[storeInfo + 'musicSTOREblock'] +
    ':' +
    localStorage[storeInfo + 'playbackSTOREblock'] +
    ':' +
    localStorage[storeInfo + 'intervalSTOREblock'] +
    ':' +
    localStorage[storeInfo + 'textSTOREblock'];
  fieldToUpdate = 'blockOptions';
  setTimeout(updateDatabase, 1000);
  ////UPDATE block STARS
  infoToUpdate = localStorage[storeInfo + 'starSTOREblock'];
  //CHANGE
  oldInfo = blockStars2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  for (i = 0; i < infoToUpdate.length; i++) {
    if (parseInt(infoToUpdate[i]) >= parseInt(oldInfo[i])) {
      newArray.push(infoToUpdate[i]);
    } else {
      newArray.push(oldInfo[i]);
    }
  }
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'starSTOREblock'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'blockStars';
  setTimeout(updateDatabase, 1100);
  ////UPDATE block OPTIONS
  infoToUpdate = localStorage[storeInfo + 'scoreSTOREblock'];
  //CHANGE
  oldInfo = blockScores2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  //NEW SCORE CALC
  for (i = 0; i < infoToUpdate.length; i++) {
    if (infoToUpdate[i].indexOf('|') != -1 && oldInfo[i].indexOf('|') == -1) {
      newArray.push(infoToUpdate[i]);
    } else if (
      infoToUpdate[i].indexOf('|') == -1 &&
      oldInfo[i].indexOf('|') != -1
    ) {
      newArray.push(oldInfo[i]);
    } else if (
      infoToUpdate[i].indexOf('|') == -1 &&
      oldInfo[i].indexOf('|') == -1
    ) {
      newArray.push(infoToUpdate[i]);
    } else if (
      infoToUpdate[i].indexOf('|') != -1 &&
      oldInfo[i].indexOf('|') != -1
    ) {
      oldSC = oldInfo[i].split('|');
      newSC = infoToUpdate[i].split('|');
      inArray = [];
      for (xx = 0; xx < newSC.length; xx++) {
        if (parseInt(newSC[xx]) >= parseInt(oldSC[xx])) {
          inArray.push(newSC[xx]);
        } else {
          inArray.push(oldSC[xx]);
        }
      }
      newArray.push(inArray.join('|'));
    }
  }
  //NEW SCORE CALC
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'scoreSTOREblock'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'blockScores';
  setTimeout(updateDatabase, 1200);
  ////UPDATE pronun STARS
  infoToUpdate = localStorage[storeInfo + 'starSTOREpronun'];
  //CHANGE
  oldInfo = pronunStars2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  for (i = 0; i < infoToUpdate.length; i++) {
    if (parseInt(infoToUpdate[i]) >= parseInt(oldInfo[i])) {
      newArray.push(infoToUpdate[i]);
    } else {
      newArray.push(oldInfo[i]);
    }
  }
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'starSTOREpronun'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'pronunStars';
  setTimeout(updateDatabase, 1300);
  ///GOALS
  infoToUpdate = localStorage[storeInfo + 'goalsSTORE'];
  //CHANGE
  if (infoToUpdate.indexOf(':') != -1) {
    oldInfo = goals2;
    if (oldInfo.indexOf(':') == -1) {
      oldInfo = infoToUpdate;
    }
    infoToUpdate = infoToUpdate.split(':');
    oldInfo = oldInfo.split(':');
    //2021ma START/////////////////////////////
    newArray = infoToUpdate;
    var ff;
    for (ff = 0; ff < oldInfo.length; ff++) {
      if (newArray.indexOf(oldInfo[ff]) == -1) {
        for (yy = 0; yy < 7; yy++) {
          newArray.push(oldInfo[ff + yy]);
        }
      }
      ff = ff + 6;
    }
    //2021ma END///////////////////////////
    infoToUpdate = newArray.join(':');
    localStorage[storeInfo + 'goalsSTORE'] = infoToUpdate;
    fieldToUpdate = 'goals';
    setTimeout(updateDatabase, 1400);
  }
  //CHANGE
  ///EXTRASCORES
  infoToUpdate = localStorage[storeInfo + 'extraScoresSTORE'];
  //CHANGE
  oldInfo = extraScores2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  for (i = 0; i < infoToUpdate.length; i++) {
    if (parseInt(infoToUpdate[i]) >= parseInt(oldInfo[i])) {
      newArray.push(infoToUpdate[i]);
    } else {
      newArray.push(oldInfo[i]);
    }
  }
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'extraScoresSTORE'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'extraScores';
  setTimeout(updateDatabase, 1500);

  /////2020 EXTRA START
  infoToUpdate = localStorage[storeInfo + 'cardsSTORE'];
  var cards2 = userInfo[26].split(':');
  //CHANGE
  oldInfo = cards2;
  newArray = [];
  infoToUpdate = infoToUpdate.split(':');
  for (i = 0; i < infoToUpdate.length; i++) {
    var cardArr = infoToUpdate[i].split('|');
    if (cardArr.length == 4) {
      cardArr.pop();
    }
    cardArr = cardArr.join('|');
    var oldC = false;
    for (xx = 0; xx < oldInfo.length; xx++) {
      if (oldInfo[xx].indexOf(cardArr) != -1) {
        oldC = true;
      }
    }
    if (!oldC) {
      newArray.push(infoToUpdate[i]);
    }
  }
  newArray = newArray.concat(oldInfo);
  infoToUpdate = newArray.join(':');
  localStorage[storeInfo + 'cardsSTORE'] = infoToUpdate;
  //CHANGE
  fieldToUpdate = 'cards';
  setTimeout(updateDatabase, 1600);
  /////2020 EXTRA END

  setTimeout(homeMenu, 2600);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADD REGISTER LISTENERS
function addRegisterData() {
  $('#activationField').val('');
  $('#nameFieldSet').val('');
  $('#emailFieldSet').val('');
  $('#emailFieldSet2').val('');
  $('#jguyr4Set').val('');
  $('#jguyr4Set2').val('');

  registerLoaded = 'true';
  if (currentDevice == 'mobile') {
    $('#doneLogInBtn').on('click', function () {
      disableTouch();
      $('#loginCover').hide();
      $('#loadLogo').fadeOut();
      $('#registerCover').hide();
      $('#warningBox').hide();
      databaseInit();
    });
    $('.hidePasswordBtn2').on('click', function () {
      disableTouch();
      $('.allForms').hide();
      $('#accountCreateText').removeClass('loginTitleHover');
      $('#accountCreateText').text('Create your login information.');
      $('#activationText').removeClass('loginTitleHover');
      $('#activationText').text('Enter your activation key.');
      $('#registerForm').show();
    });
  } else {
    $('#doneLogInBtn').on('click', function () {
      $('#loginCover').hide();
      $('#loadLogo').fadeOut();
      $('#registerCover').hide();
      $('#warningBox').hide();
      databaseInit();
    });
    $('.hidePasswordBtn2').on('click', function () {
      $('.allForms').hide();
      $('#activationText').removeClass('loginTitleHover');
      $('#activationText').text('Enter your activation key.');
      $('#registerForm').show();
    });
  }
  $('#activationField').focus(function () {
    $('#activationText').removeClass('loginTitleHover');
    $('#activationText').text('Enter your activation key.');
  });

  $(
    '#jguyr4Set, #jguyr4Set2, #emailFieldSet, #emailFieldSet2, #nameFieldSet',
  ).focus(function () {
    $('#activationText').removeClass('loginTitleHover');
    $('#activationText').text('Enter your activation key.');
    $('#accountCreateText').removeClass('loginTitleHover');
    $('#accountCreateText').text('Create your login information.');
  });
  //////////////////////////
  $('#registerForm').submit(function (ev) {
    ev.preventDefault();
    userActivation = $('#activationField').val().split(' ').join('');
    userName = $('#nameFieldSet').val();
    userEmail = $('#emailFieldSet').val().split(' ').join('');
    storeInfo = langShort + userEmail;
    userEmailVerify = $('#emailFieldSet2').val().split(' ').join('');
    tuvm58dj = yifzq67($('#jguyr4Set').val().split(' ').join(''));
    tuvm58djVerify = yifzq67($('#jguyr4Set2').val().split(' ').join(''));
    if (
      tuvm58dj == tuvm58djVerify &&
      userEmail == userEmailVerify &&
      userName != '' &&
      userEmail != '' &&
      tuvm58dj != ''
    ) {
      $('#activationText').text('Looking on server, please wait...');
      setTimeout(registerInit, 50);
    } else if (userEmail != userEmailVerify) {
      $('#activationText').removeClass('loginTitleHover');
      $('#activationText').text('Enter your activation key.');
      $('#accountCreateText').addClass('loginTitleHover');
      $('#accountCreateText').text("Error: Emails don't match.");
    } else if (tuvm58dj != tuvm58djVerify) {
      $('#activationText').removeClass('loginTitleHover');
      $('#activationText').text('Enter your activation key.');
      $('#accountCreateText').addClass('loginTitleHover');
      $('#accountCreateText').text("Error: Passwords don't match.");
    } else {
      $('#activationText').removeClass('loginTitleHover');
      $('#activationText').text('Enter your activation key.');
      $('#accountCreateText').addClass('loginTitleHover');
      $('#accountCreateText').text('Error: All fields required.');
    }
  });
  ////////////////////////////////////
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADD PASSWORD  LISTENERS
function addPasswordData() {
  passwordLoaded = 'true';
  $(
    '#resetCodeField, #emailFieldReset,#jguyr4Reset, #jguyr4Reset2, #resetCodeField',
  ).focus(function () {
    $('#passwordTitle2, #passwordTitle').removeClass('loginTitleHover');
    $('#passwordTitle2, #passwordTitle').text('Account Password Reset');
  });
  $('#emailFieldReset').val('');
  $('#resetCodeField').val('');
  $('#jguyr4Reset').val('');
  $('#jguyr4Reset2').val('');

  if (currentDevice == 'mobile') {
    $('.hidePasswordBtn').on('click', function () {
      disableTouch();
      $('.allForms').hide();
      $('#loginForm').show();
    });
    $('#passwordSkipBtn').on('click', function () {
      disableTouch();
      $('#passwordTitle').text('Account Password Reset');
      $('.allForms').hide();
      $('#passwordForm2').show();
    });
  } else {
    $('.hidePasswordBtn').on('click', function () {
      $('.allForms').hide();
      $('#loginForm').show();
    });
    $('#passwordSkipBtn').on('click', function () {
      $('.allForms').hide();
      $('#passwordTitle').text('Account Password Reset');
      $('#passwordForm2').show();
    });
  }

  $('#passwordForm').submit(function (ev) {
    ev.preventDefault();
    userEmail2 = $('#emailFieldReset').val().split(' ').join('');
    localStorage['userEmail2'] = userEmail2;
    $('#passwordTitle2').text('Looking on server, please wait...');
    setTimeout(sendResetCode, 50);
  });
  ///////////////////////////////////
  $('#passwordForm2').submit(function (ev) {
    ev.preventDefault();
    tuvm58dj2 = yifzq67($('#jguyr4Reset').val().split(' ').join(''));
    tuvm58dj2Verify = yifzq67($('#jguyr4Reset2').val().split(' ').join(''));
    resetCode = $('#resetCodeField').val().split(' ').join('');
    if (tuvm58dj2 == tuvm58dj2Verify) {
      $('#passwordTitle').text('Looking on server, please wait...');
      setTimeout(resetPassword, 50);
    } else {
      $('#passwordTitle').addClass('loginTitleHover');
      $('#passwordTitle').text("Error: Passwords don't match.");
    }
  });

  ///////////////////////////////////////////
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////SEND RESET CODE
function sendResetCode() {
  var xhr = new XMLHttpRequest();
  var requestTimer = setTimeout(function () {
    if (navigator.onLine) {
      xhr.abort();
      //PORTUGUESE CHANGE START
      $('#passwordTitle2').text('Email Sent! Please check your messages.');
      setTimeout(function () {
        $('.allForms').hide();
        $('#loginForm').show();
      }, 6000);
    } else {
      xhr.abort();
      $('#passwordTitle2').addClass('loginTitleHover');
      $('#passwordTitle2').text('OFFLINE: Internet required');
    }
  }, 6000);
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + QjSKe + '2' + cWbBT;
  var info = 'email=' + userEmail2;
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      ///WEB START
      if (osType == 'pwa' && xhr.responseURL.indexOf('offline') != -1) {
        $('#passwordTitle2').addClass('loginTitleHover');
        $('#passwordTitle2').text('OFFLINE: Internet required');
        return;
      }
      ///WEB END

      clearTimeout(requestTimer);
      var responseArray = xhr.responseText.split(',');
      var emailExists = responseArray[0];
      if (emailExists != 0) {
        $('#passwordTitle2').text('Email Sent! Please check your messages.');
        setTimeout(function () {
          $('.allForms').hide();
          $('#loginForm').show();
        }, 6000);
      }
      //PORTUGUESE CHANGE END
      else {
        $('#passwordTitle2').addClass('loginTitleHover');
        $('#passwordTitle2').text(
          'ERROR: Ouino ' + lessonLanguage + ' Account not found.',
        );
      }
    }
  };
  try {
    xhr.send(info);
  } catch (e) {
    $('#passwordTitle2').addClass('loginTitleHover');
    $('#passwordTitle2').text('OFFLINE: Internet required');
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////RESET PASSWORD
function resetPassword() {
  userEmail2 = localStorage['userEmail2'];
  if (userEmail2 == null) {
    $('#passwordTitle').addClass('loginTitleHover');
    $('#passwordTitle').text('ERROR: Reset code not valid on this computer.');
    return;
  }
  var xhr = new XMLHttpRequest();
  var requestTimer = setTimeout(function () {
    if (navigator.onLine) {
      xhr.abort();
      $('.allForms').hide();
      $('#warningBox2').show();
    } else {
      xhr.abort();
      $('#passwordTitle').addClass('loginTitleHover');
      $('#passwordTitle').text('OFFLINE: Internet required');
    }
  }, 6000);
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + MJhei + cWbBT;
  var info =
    'resetCode=' +
    resetCode +
    '&password=' +
    tuvm58dj2 +
    userEmail2.substring(1, 3) +
    '&email=' +
    userEmail2;
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      ///WEB START
      if (osType == 'pwa' && xhr.responseURL.indexOf('offline') != -1) {
        $('#passwordTitle').addClass('loginTitleHover');
        $('#passwordTitle').text('OFFLINE: Internet required');
        return;
      }
      ///WEB END

      clearTimeout(requestTimer);
      var responseArray = xhr.responseText.split(',');
      var emailExists = responseArray[0];
      if (emailExists != 0) {
        $('.allForms').hide();
        $('#warningBox2').show();
      } else {
        $('#passwordTitle').addClass('loginTitleHover');
        $('#passwordTitle').text('ERROR: Code not found.');
      }
    }
  };
  try {
    xhr.send(info);
  } catch (e) {
    $('#passwordTitle').addClass('loginTitleHover');
    $('#passwordTitle').text('OFFLINE: Internet required');
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////REGISTER CODE
function registerInit() {
  $('#rememberCheck, #rememberCheck2').attr('src', 'common/checkOff.svg');
  localStorage.removeItem('STAYLOGGEDIN');
  var xhr = new XMLHttpRequest();
  var requestTimer = setTimeout(function () {
    if (navigator.onLine) {
      xhr.abort();
      if ($('#rememberCheck').attr('src') == 'common/checkOn.svg') {
        $('#rememberCheck2').attr('src', 'common/checkOn.svg');
      }
      $('.messageTitle').html(
        '<img class="messageCheck" src="common/success.svg">Account Created!',
      );
      $('#accountsLeft').text('Thank you for creating your account.');
      $('#accountsText').html(
        'Your&nbsp;account&nbsp;was&nbsp;created&nbsp;successfully<br>and&nbsp;a&nbsp;confirmation&nbsp;email&nbsp;was&nbsp;sent&nbsp;to<br>"' +
          userEmail +
          '".',
      );
      $('.allForms').hide();
      $('#warningBox').show();
    } else {
      xhr.abort();
      $('#activationText, #accountCreateText').addClass('loginTitleHover');
      $('#activationText, #accountCreateText').text(
        'OFFLINE: Internet required',
      );
    }
  }, 6000);
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + PbWjZ + cWbBT;
  var info =
    'activation=' +
    userActivation +
    '&name=' +
    userName +
    '&email=' +
    userEmail +
    '&password=' +
    tuvm58dj +
    userEmail.substring(1, 3);
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      ///WEB START
      if (osType == 'pwa' && xhr.responseURL.indexOf('offline') != -1) {
        $('#activationText').addClass('loginTitleHover');
        $('#activationText').text('OFFLINE: Internet required');
        return;
      }
      ///WEB END

      clearTimeout(requestTimer);
      var responseArray = xhr.responseText.split(',');
      if (responseArray[1] == 'ACCOUNT NOT CREATED') {
        $('#activationText').addClass('loginTitleHover');
        $('#activationText').text('Activation Key not Found.');
      } else if (responseArray[1] == 'ACCOUNT EXISTS') {
        $('#accountCreateText').addClass('loginTitleHover');
        $('#accountCreateText').text('Account Already Exists. Simply Log in.');
        $('#activationText').removeClass('loginTitleHover');
        $('#activationText').text('Enter your activation key.');
      } else if (responseArray[1] == 'NO ACCOUNTS LEFT') {
        $('#loginRemember2').hide();
        $('.messageTitle').html(
          '<img class="messageCheck" src="common/fail.svg">Failed Creation...',
        );
        $('#accountsLeft').text('No account creations remaining.');
        $('#accountsText').html(
          'Unfortunately,&nbsp;you&nbsp;do&nbsp;not&nbsp;have&nbsp;any&nbsp;account creations&nbsp;left&nbsp;with&nbsp;your&nbsp;matching&nbsp;activation&nbsp;key, please&nbsp;contact&nbsp;us&nbsp;to&nbsp;upgrade&nbsp;your&nbsp;license.',
        );
        $('#doneLogInBtn').hide();
        $('.allForms').hide();
        $('#warningBox').show();
      } else {
        if ($('#rememberCheck').attr('src') == 'common/checkOn.svg') {
          $('#rememberCheck2').attr('src', 'common/checkOn.svg');
        }
        $('.messageTitle').html(
          '<img class="messageCheck" src="common/success.svg">Account Created!',
        );
        $('#accountsLeft').text('Thank you for creating your account.');
        $('#accountsText').html(
          'Your&nbsp;account&nbsp;was&nbsp;created&nbsp;successfully<br>and&nbsp;a&nbsp;confirmation&nbsp;email&nbsp;was&nbsp;sent&nbsp;to<br>"' +
            userEmail +
            '".',
        );
        $('.allForms').hide();
        $('#warningBox').show();
      }
    }
  };
  try {
    xhr.send(info);
  } catch (e) {
    $('#activationText').addClass('loginTitleHover');
    $('#activationText').text('OFFLINE: Internet required');
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////LOAD LOGIN INFOMATION
function loadLogIn() {
  if ($('#loginCover').length != 0) {
    $('#loginCover').remove();
  }

  $('body').append(loginAppend);

  ////5.0.6
  if (osType == 'mac' || osType == 'windows') {
    $('#usersCont2').append(
      "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
    );
    $('.adminWarn1').show();

    $('#loginCenter').append(
      '<div id="context-menu" class="context-menu"><button id="cut">Cut</button><button id="copy">Copy</button><button id="paste">Paste</button></div>',
    );

    var clickedElement;

    $('input').on('contextmenu', function (e) {
      clickedElement = '#' + e.target.id;
      if (!isLongPress && e.type !== 'touchend') {
        // For desktop
        $('#context-menu').show();
        e.preventDefault();
      }
    });

    $('input')
      .on('touchstart', function (e) {
        clickedElement = '#' + e.target.id;
        isLongPress = false;
        longPressTimer = setTimeout(function () {
          isLongPress = true;
          $('#context-menu').show();
        }, 1000);
      })
      .on('touchmove', function () {
        clearTimeout(longPressTimer);
      })
      .on(
        'touchend',
        function (e) {
          clearTimeout(longPressTimer);
          if (isLongPress) {
            e.preventDefault();
          }
        },
        { passive: false },
      );

    $(document).on('click', function () {
      $('#context-menu').hide();
    });

    $('#cut').on('click', function () {
      document.execCommand('cut');
      $('#context-menu').hide();
    });

    $('#copy').on('click', function () {
      document.execCommand('copy');
      $('#context-menu').hide();
    });

    $('#paste').on('click', function () {
      getPasteData();
      $('#context-menu').hide();
    });

    async function getPasteData() {
      try {
        let successful = document.execCommand('paste');
        if (!successful) {
          throw new Error('document.execCommand("paste") failed');
        }
      } catch (error) {
        try {
          var pasteData = await navigator.clipboard.readText();
          $(clickedElement).val(pasteData);
        } catch (clipboardError) {
          console.error(clipboardError);
        }
      }
    }
  }

  $('#loginTitle').text('Ouino ' + lessonLanguage + ' Account Login');
  $('#titleTip').attr(
    'name',
    'If you have purchased the program but have not yet created your Ouino ' +
      lessonLanguage +
      ' account, please create your account before using this app. You can log in while offline, but you need to log in with an internet connection at least once.',
  );
  //////////////////////////
  $('#loginForm').submit(function (ev) {
    ev.preventDefault();
    userEmail = $('#emailField').val().split(' ').join('');
    storeInfo = langShort + userEmail;
    tuvm58dj = yifzq67($('#jguyr4').val().split(' ').join(''));
    $('#loginTitle').text('Looking on server, please wait...');
    setTimeout(databaseInit, 50);
  });
  //////////////////
  $('#jguyr4, #emailField').focus(function () {
    if ($('#loginTitle').hasClass('loginTitleHover')) {
      $('#loginTitle').removeClass('loginTitleHover');
      $('#loginTitle').text('Ouino ' + lessonLanguage + ' Account Login');
    }
  });

  if (osType.indexOf('droid') != -1) {
    $('#jguyr4').on('focus', function () {
      clearTimeout(blurOut);
      if (!$('#loginCenter').hasClass('topMove')) {
        $('#loginCenter').addClass('topMove');
        $('#startCover').hide();
        setTimeout(function () {
          $('#emailField').focus();
          $('#jguyr4').focus();
        }, 200);
      }
    });
    $('#emailField').on('focus', function () {
      clearTimeout(blurOut);
      if (!$('#loginCenter').hasClass('topMove')) {
        $('#loginCenter').addClass('topMove');
        $('#startCover').hide();
        setTimeout(function () {
          $('#jguyr4').focus();
          $('#emailField').focus();
        }, 200);
      }
    });
    $('#emailFieldReset').on('focus', function () {
      clearTimeout(blurOut);
      if (!$('#loginCenter').hasClass('topMove')) {
        $('#loginCenter').addClass('topMove');
        $('#startCover').hide();
        setTimeout(function () {
          $('#jguyr4').focus();
          $('#emailFieldReset').focus();
        }, 200);
      }
    });
    $('#jguyr4, #emailField, #emailFieldReset').on('blur', function () {
      clearTimeout(blurOut);
      blurOut = setTimeout(function () {
        $('#loginCenter').removeClass('topMove');
      }, 300);
    });
  }

  $('#loginRemember, #loginRemember2').on(
    'touchstart mousedown',
    function (ev) {
      ev.preventDefault();
      toggleRememberCheck();
    },
  );
  ///2021B

  /////////////////////////
  if (currentDevice == 'mobile') {
    $('#offlineRemember').on('click', toggleOfflineCheck);
    //2021 bug start
    $('#offlineButton').on('click', function () {
      $('#loginOffline').hide();
      homeDelay = 100;
      $('#loadLogo').show();
      setTimeout(function () {
        homeMenu();
      }, 500);
    });
    //2021 bug end
    $('.tooltip').on('click', function () {
      $(this).toggleClass('tooltipHover');
    });
    $('#loginTab1').on('click', function () {
      disableTouch();
      $('#loginTab2').removeClass('loginTabOn');
      $('#loginTab1').addClass('loginTabOn');
      $('.allForms').hide();
      $('#registerForm').show();
      if (registerLoaded != 'true') {
        addRegisterData();
      }
    });
    $('#loginTab2').on('click', function () {
      disableTouch();
      $('#loginTab1').removeClass('loginTabOn');
      $('#loginTab2').addClass('loginTabOn');
      $('.allForms').hide();
      $('#loginForm').show();
    });
    $('#loginForgot').on('click', function () {
      disableTouch();
      $('#passwordTitle2').removeClass('loginTitleHover');
      $('#passwordTitle2').text('Account Password Reset');
      $('.allForms').hide();
      $('#passwordForm').show();
      if (passwordLoaded != 'true') {
        addPasswordData();
      }
    });
  } else {
    $('#offlineRemember').on('click', toggleOfflineCheck);
    $('#offlineButton').on('click', function () {
      $('#loginOffline').hide();
      homeDelay = 100;
      $('#loadLogo').show();
      setTimeout(function () {
        homeMenu();
      }, 500);
    });
    $('.smallMedal').hover(function () {
      $(this).toggleClass('smallMedalHover');
    });
    $('.tooltip').hover(function () {
      $(this).toggleClass('tooltipHover');
    });
    $('#loginTab1').on('click', function () {
      $('#loginTab2').removeClass('loginTabOn');
      $('#loginTab1').addClass('loginTabOn');
      $('.allForms').hide();
      $('#registerForm').show();
      if (registerLoaded != 'true') {
        addRegisterData();
      }
    });
    $('#loginTab2').on('click', function () {
      $('#loginTab1').removeClass('loginTabOn');
      $('#loginTab2').addClass('loginTabOn');
      $('.allForms').hide();
      $('#loginForm').show();
    });
    $('#loginForgot').on('click', function () {
      $('.allForms').hide();
      $('#passwordTitle2').removeClass('loginTitleHover');
      $('#passwordTitle2').text('Account Password Reset');
      $('#passwordForm').show();
      if (passwordLoaded != 'true') {
        addPasswordData();
      }
    });
  }
}

function toggleUser() {
  if ($('#redArrowImg').is(':visible')) {
    $('#searchBtn, #tutorialBtn, #userBtn, #optionBtn, #backBtn').removeClass(
      'disabled',
    );
    $('#redArrowImg').hide();
  }
  if ($('#userWrap').is(':visible') == false) {
    $('#optionWrap').hide();
    $('#userWrap').show();
  } else {
    $('#userWrap').hide();
  }
}

function upgradeAccess() {
  openLink(
    'https://www.ouinolanguages.com/upgrade/' +
      lessonLanguage.toLowerCase() +
      '/',
  );
}

function toggleProgMenu() {
  if ($('#userMenu2').is(':visible') == false) {
    $('#optionWrap').hide();
    $('#musicOnOff').hide();
    $('.progMenus').css({ visibility: 'hidden' });
    $('#tutorialMenu, #userMenu').css({ x: '200%' });
    $('#userWrap, #tutorialMenu, #userMenu').hide();

    $('#pMeter1').html(
      '<img class="progLogo" src="common/logoOuino1.png">' +
        $('#progMenu1').html(),
    );
    $('#pMeter2').html(
      '<img class="progLogo" src="common/logoOuino2.png">' +
        $('#progMenu2').html(),
    );
    $('#pMeter3').html(
      '<img class="progLogo" src="common/logoOuino3.png">' +
        $('#progMenu3').html(),
    );
    $('#pMeter5').html(
      '<img class="progLogo" src="common/logoOuino5.png">' +
        $('#progMenu5').html(),
    );
    $('#pMeter6').html(
      '<img class="progLogo" src="common/logoOuino6.png">' +
        $('#progMenu6').html(),
    );
    $('#pMeter8').html(
      '<img class="progLogo" src="common/logoOuino8.png">' +
        $('#progMenu8').html(),
    );
    $('#pMeter9').html(
      '<img class="progLogo" src="common/logoOuino9.png">' +
        $('#progMenu9').html(),
    );
    ///2018CHANGE
    $('#pMeter10').html(
      '<img class="progLogo" src="common/logoOuino10.png">' +
        $('#progMenu10').html(),
    );
    ///2018CHANGE
    ///2020 EXTRA START
    $('#pMeter11').html(
      '<img class="progLogo" src="common/logoOuino5.png"><img class="progLogo" src="common/logoOuino6.png">' +
        $('#progMenu11').html(),
    );
    ///2020 EXTRA END
    $('#userMenu2').show();
    $('#userMenu2').css({ x: '100%' });
  } else {
    $('#musicOnOff').show();
    $('#userMenu2').css({ x: '200%' });
    $('#userMenu2, #userWrap').hide();
    $('.progMenus').css({ visibility: 'visible' });
  }
}

function toggleTutorial() {
  if ($('#tutorialMenu').is(':visible') == false) {
    $('.tutWrap').hide();

    $('#optionWrap').hide();
    $('#musicOnOff').hide();
    $('#userMenu, #userMenu2').css({ x: '200%' });
    $('#userWrap, #userMenu, #userMenu2').hide();
    $('#tutorialMenu').show();
    $('.ouinoContentB').hide();
    $('#tutorialMenu').css({ x: '100%' });

    if ($('html').innerWidth() < 600 || $('html').innerHeight() < 600) {
      $('#tutVocab').attr('src', 'common/tutVocab2.png');
      $('#tutBlock').attr('src', 'common/tutBlock2.png');
      $('#tutVerb').attr('src', 'common/tutVerb2.png');
      $('#tutEndings').attr('src', 'common/tutEndings2.png');
      $('#tutConvo').attr('src', 'common/tutConvo2.png');
      $('#tutPronun').attr('src', 'common/tutPronun2.png');
      $('#tutExtra').attr('src', 'common/tutExtra2.png');
      $('#tutFlash').attr('src', 'common/tutFlash2.png');
    } else {
      $('#tutVocab').attr('src', 'common/tutVocab.png');
      $('#tutBlock').attr('src', 'common/tutBlock.png');
      $('#tutVerb').attr('src', 'common/tutVerb.png');
      $('#tutEndings').attr('src', 'common/tutEndings.png');
      $('#tutConvo').attr('src', 'common/tutConvo.png');
      $('#tutPronun').attr('src', 'common/tutPronun.png');
      $('#tutExtra').attr('src', 'common/tutExtra.png');
      $('#tutFlash').attr('src', 'common/tutFlash.png');
    }

    setTimeout(function () {
      $('.tutWrap').fadeIn();
    }, 200);
  } else {
    $('#musicOnOff').show();
    $('#tutorialMenu').css({ x: '200%' });
    $('#tutorialMenu, #userWrap').hide();
    $('.ouinoContentB').show();
  }
}

function adminActions() {
  var adminStr = $(this)
    .parent('.allUsers')
    .text()
    .split('Name: ')
    .join('ZZZ')
    .split('Email: ')
    .join('ZZZ')
    .split('ADMIN')
    .join('ZZZ')
    .split('ZZZ');
  var adminEmail = adminStr[2];
  var adminCheck = adminStr[3];

  if (adminCheck == 'yes') {
    $(this).html('ADMIN<br>no');
    adminCheck = 'no';
  } else {
    $(this).html('ADMIN<br>yes');
    adminCheck = 'yes';
  }

  fieldToUpdate = 'admin';
  infoToUpdate = adminCheck;

  var xhr = new XMLHttpRequest();
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + '2' + cWbBT;
  var info =
    'email=' +
    adminEmail +
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
    offlineMessage();
  }
}
////END ADMIN ACTIONS

function allUsersActions(e) {
  if ($(e.target).hasClass('adminInfo')) {
    return;
  }

  var adminStr = $(this)
    .text()
    .split('Name: ')
    .join('ZZZ')
    .split('Email: ')
    .join('ZZZ')
    .split('ADMIN')
    .join('ZZZ')
    .split('ZZZISTRATOR')
    .join('')
    .split('ZZZ');
  var adminName = adminStr[1];
  var adminEmail = adminStr[2];
  $('#userMenu .mainTitle').html(
    '<img class="mainLogoImg2" src="common/logoUser.svg">' + adminName,
  );
  $('#usersCont2, #usersBack').show();
  $('#usersCont').hide();
  $('#usersCont2').html('');

  var xhr = new XMLHttpRequest();
  var requestTimer = setTimeout(function () {
    xhr.abort();
    $('#usersCont2').append(
      "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
    );
    $('.adminWarn1').show();
  }, 8000);
  var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + jGWFQ + '2' + cWbBT;
  var info = 'email=' + adminEmail + '&product=' + lessonLanguage;
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      ///WEB START
      if (osType == 'pwa' && xhr.responseURL.indexOf('offline') != -1) {
        $('#usersCont2').append(
          "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
        );
        $('.adminWarn1').show();
        return;
      }
      ///WEB END

      clearTimeout(requestTimer);
      $('.adminWarn1').hide();
      if (xhr.responseText != 'false' && xhr.responseText.length > 500) {
        ///SEEK USER INFO
        seekInfo = xhr.responseText.split(',');
        var seekVocab = seekInfo[0].split(':');
        var seekConvo = seekInfo[1].split(':');
        var seekVerb = seekInfo[2].split(':');
        var seekBlock = seekInfo[3].split(':');
        var seekContent;

        ///BLOCK INFORMATION
        seekContent =
          '<br><div class="seekUser1"><strong>BUILDING BLOCKS<span class="sp1">QUIZ 1</span><span class="sp2">QUIZ 2</span><span class="sp3">QUIZ 3</span></strong></div>';
        for (var num = 1; num <= sLengths[0]; num++) {
          var lessonName = $('#lessonMenu9 .Lblock' + num + ' h1')
            .text()
            .split('<br>')
            .join(' - ');
          if (lessonName.length > 43) {
            lessonName = lessonName.slice(0, 43) + '...';
          }
          var rowCo;
          if (num % 2 == 0) {
            rowCo = 1;
          } else {
            rowCo = 2;
          }
          var theSC;
          if (seekBlock[num - 1] == '0') {
            theSC = ['0', '0', '0', '0'];
          } else {
            theSC = seekBlock[num - 1].split('|');
          }
          if ($('#lessonMenu9 .Lblock' + num).hasClass('noQuiz')) {
            seekContent =
              seekContent +
              '<div class="seekUser' +
              rowCo +
              '">' +
              lessonName +
              '<span class="sp1">-</span><span class="sp2">-</span><span class="sp3">-</span></div>';
          } else if ($('#lessonMenu9 .Lblock' + num).hasClass('quizOnly')) {
            seekContent =
              seekContent +
              '<div class="seekUser' +
              rowCo +
              '"><strong>Category Quiz<span class="sp1">' +
              theSC[0] +
              '%</span><span class="sp2">' +
              theSC[1] +
              '%</span><span class="sp3">' +
              theSC[2] +
              '%</span></strong></div>';
          } else {
            seekContent =
              seekContent +
              '<div class="seekUser' +
              rowCo +
              '">' +
              lessonName +
              '<span class="sp1">' +
              theSC[0] +
              '%</span><span class="sp2">' +
              theSC[1] +
              '%</span><span class="sp3">' +
              theSC[2] +
              '%</span></div>';
          }
        }
        $('#usersCont2').append(seekContent);

        ///VOCAB INFORMATION
        seekContent =
          '<br><div class="seekUser1"><strong>VOCABULARY<span class="sp1">QUIZ 1</span><span class="sp2">QUIZ 2</span><span class="sp3">QUIZ 3</span><span class="sp4">QUIZ 4</span></strong></div>';
        for (var num = 1; num <= sLengths[1]; num++) {
          var lessonName = $('#lessonMenu2 .Lvocab' + num + ' h1')
            .text()
            .split('<br>')
            .join(' - ');
          var rowCo;
          if (num % 2 == 0) {
            rowCo = 1;
          } else {
            rowCo = 2;
          }
          var theSC;
          if (seekVocab[num - 1] == '0') {
            theSC = ['0', '0', '0', '0'];
          } else {
            theSC = seekVocab[num - 1].split('|');
          }
          seekContent =
            seekContent +
            '<div class="seekUser' +
            rowCo +
            '">' +
            lessonName +
            '<span class="sp1">' +
            theSC[0] +
            '%</span><span class="sp2">' +
            theSC[1] +
            '%</span><span class="sp3">' +
            theSC[2] +
            '%</span><span class="sp4">' +
            theSC[3] +
            '%</span></div>';
        }
        $('#usersCont2').append(seekContent);

        ///convo INFORMATION
        seekContent =
          '<br><div class="seekUser1"><strong>CONVERSATIONS<span class="sp1">QUIZ 1</span><span class="sp2">QUIZ 2</span></strong></div>';
        for (var num = 1; num <= sLengths[2]; num++) {
          var lessonName = $('#lessonMenu3 .Lconvo' + num + ' h1')
            .text()
            .split('<br>')
            .join(' - ');
          var rowCo;
          if (num % 2 == 0) {
            rowCo = 1;
          } else {
            rowCo = 2;
          }
          var theSC;
          if (seekConvo[num - 1] == '0') {
            theSC = ['0', '0', '0', '0'];
          } else {
            theSC = seekConvo[num - 1].split('|');
          }
          seekContent =
            seekContent +
            '<div class="seekUser' +
            rowCo +
            '">' +
            lessonName +
            '<span class="sp1">' +
            theSC[0] +
            '%</span><span class="sp2">' +
            theSC[1] +
            '%</span></div>';
        }
        $('#usersCont2').append(seekContent);

        ///Verb INFORMATION
        seekContent =
          '<br><div class="seekUser1"><strong>VERBS & CONJUGATION<span class="sp1">QUIZ 1</span><span class="sp2">QUIZ 2</span><span class="sp3">QUIZ 3</span><span class="sp4">QUIZ 4</span></strong></div>';

        for (var num = 1; num <= sLengths[3]; num++) {
          var lessonName = $('#lessonMenu9 .Lverb' + num + ' h1').html();
          if (lessonName != null) {
            lessonName = lessonName.split('<br>').join(' - ');
          }
          var rowCo;
          if (num % 2 == 0) {
            rowCo = 1;
          } else {
            rowCo = 2;
          }
          var theSC;
          if (seekVerb[num - 1] == '0') {
            theSC = ['0', '0', '0', '0'];
          } else {
            theSC = seekVerb[num - 1].split('|');
          }
          seekContent =
            seekContent +
            '<div class="seekUser' +
            rowCo +
            '">' +
            lessonName +
            '<span class="sp1">' +
            theSC[0] +
            '%</span><span class="sp2">' +
            theSC[1] +
            '%</span><span class="sp3">' +
            theSC[2] +
            '%</span><span class="sp4">-</span></div>';
        }

        for (var num = sLengths[3] + 1; num <= sLengths[4]; num++) {
          var lessonName = $('#lessonMenu9 .Lverb' + num + ' h1')
            .html()
            .split('<br>')
            .join(' - ');
          var rowCo;
          if (num % 2 == 0) {
            rowCo = 1;
          } else {
            rowCo = 2;
          }
          var theSC;
          if (seekVerb[num - 1] == '0') {
            theSC = ['0', '0', '0', '0'];
          } else {
            theSC = seekVerb[num - 1].split('|');
          }
          seekContent =
            seekContent +
            '<div class="seekUser' +
            rowCo +
            '">' +
            lessonName +
            '<span class="sp1">' +
            theSC[0] +
            '%</span><span class="sp2">' +
            theSC[1] +
            '%</span><span class="sp3">' +
            theSC[2] +
            '%</span><span class="sp4">' +
            theSC[3] +
            '%</span></div>';
        }

        for (var num = sLengths[4] + 1; num <= sLengths[5]; num++) {
          var lessonName = $('#lessonMenu9 .Lverb' + num + ' h1')
            .html()
            .split('<br>')
            .join(' - ');
          var rowCo;
          if (num % 2 == 0) {
            rowCo = 1;
          } else {
            rowCo = 2;
          }
          var theSC;
          if (seekVerb[num - 1] == '0') {
            theSC = ['0', '0', '0', '0'];
          } else {
            theSC = seekVerb[num - 1].split('|');
          }
          if ($('#lessonMenu9 .Lverb' + num).hasClass('noQuiz')) {
            seekContent =
              seekContent +
              '<div class="seekUser' +
              rowCo +
              '">' +
              lessonName +
              '<span class="sp1">-</span><span class="sp2">-</span><span class="sp3">-</span><span class="sp4">-</span></div>';
          } else {
            seekContent =
              seekContent +
              '<div class="seekUser' +
              rowCo +
              '">' +
              lessonName +
              '<span class="sp1">' +
              theSC[1] +
              '%</span><span class="sp2">' +
              theSC[2] +
              '%</span><span class="sp3">-</span><span class="sp4">-</span></div>';
          }
        }

        $('#usersCont2').append(seekContent);
      } else {
        $('#usersCont2').append(
          "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
        );
        $('.adminWarn1').show();
      }
    }
  };

  try {
    xhr.send(info);
  } catch (e) {
    $('#usersCont2').append(
      "<div class='adminWarn1'>Couldn't connect to the server. Please try again when a connection is available.</div>",
    );
    $('.adminWarn1').show();
  }
}
///END SEEK USER INFO

/////MAKE ARRAY UNIQUE
var unique = function (a) {
  var d,
    e,
    f,
    b = [],
    c = a.length;
  for (e = 0; c > e; e++) {
    for (d = void 0, f = 0; f < b.length; f++)
      if (a[e] === b[f]) {
        d = !0;
        break;
      }
    d || b.push(a[e]);
  }
  return b;
};
/////GET RANDOM NUMBER
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sectionScroll() {
  if ($('html').innerWidth() < 550) {
    $('.Lsection').addClass('disableTouch');

    setTimeout(function () {
      for (var v = 0; v < $('.Lsection').length; v++) {
        if ($('.Lsection').eq(v).is(':visible')) {
          var cLength = $('.Lsection').eq(v).children('.lessonItems').length;
          if (cLength <= 2) {
            $('.Lsection')
              .eq(v)
              .addClass('line' + cLength);
            if (cLength == 1) {
              $('.Lsection')
                .eq(v)
                .children('.sectionTitle')
                .addClass('splitTitle2');
            }
          }
          if ($('.Lsection').eq(v).children('.sectionTitle').width() > 300) {
            $('.Lsection')
              .eq(v)
              .children('.sectionTitle')
              .addClass('splitTitle');
          }
          if (cLength > 2) {
            var cEle = $('.Lsection').eq(v);
            if (cEle.prop('scrollWidth') > cEle.prop('clientWidth')) {
              var eScroll = localStorage.getItem(langShort + 'eS_' + v);
              if (eScroll !== null) {
                cEle.animate({ scrollLeft: parseInt(eScroll) }, 1);
              }
            }
          }
        }
      }
    }, 200);

    setTimeout(function () {
      $('.Lsection').removeClass('disableTouch');
    }, 1000);
  }
}

/////FIND QUIZ BACKGROUND COLOR BACKGROUND
btnColor.push('rgba(' + hexToRgb(btnColor[0].replace(/\#/g, '')) + ',.9)');
btnColor.push('rgb(' + hexToRgb(btnColor[1].replace(/\#/g, '')) + ')');
btnColor.push(colorBrightness(btnColor[0], -0.4));
btnColor.push(colorBrightness(btnColor[1], 0.2));
function hexToRgb(hex) {
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;
  return r + ',' + g + ',' + b;
}
function colorBrightness(a, b) {
  ((a = String(a).replace(/[^0-9a-f]/gi, '')),
    a.length < 6 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]),
    (b = b || 0));
  var d,
    e,
    c = '#';
  for (e = 0; 3 > e; e++)
    ((d = parseInt(a.substr(2 * e, 2), 16)),
      (d = Math.round(Math.min(Math.max(0, d + d * b), 255)).toString(16)),
      (c += ('00' + d).substr(d.length)));
  return c;
}

///////AUDIO SPRITE STUFF
function playSprite(src) {
  $('#sfxSprite').attr('src', 'common/' + src + soundType);
  document.getElementById('sfxSprite').load();
  document.getElementById('sfxSprite').addEventListener('canplay', playSFX);
}

function playSFX() {
  document.getElementById('sfxSprite').removeEventListener('canplay', playSFX);
  $('#sfxSprite').trigger('play');
}

function openLink(src) {
  if (osType == 'pwa' && sessionStorage.getItem('offlineSession') == 'true') {
    offlinePopup();
    return;
  }

  if (osType == 'iOS') {
    window.open(src, '_system');
  } else if (osType.indexOf('droid') != -1) {
    cordova.InAppBrowser.open(src, '_system');
    return false;
  } else if (osType == 'windows') {
    if (gui) {
      gui.Shell.openExternal(src);
    } else {
      window.open(src, '_blank');
    }
  } else if (osType == 'mac') {
    exitfullscreen();
    setTimeout(function () {
      window.open(src, '_blank');
    }, 1000);
  } else {
    window.open(src, '_blank');
  }
}

function exitfullscreen() {
  var isInFullScreen =
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement &&
      document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

  var docElm = document.documentElement;
  if (isInFullScreen) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
