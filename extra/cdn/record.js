

/////////////////////////////////////
var gui = require('nw.gui');
var win = gui.Window.get();


/////////////FULLSCREEN TOGGLE CODE
function toggleFullScreen() {
	
if (win.isFullscreen) {win.leaveFullscreen();$('#fullToggle').attr('src', "../common/max.svg");} 
else {win.enterFullscreen(); $('#fullToggle').attr('src', "../common/min.svg");}

}

$( document ).ready(function() {
///APPLY PROGRAM BUTTONS
$('body').append('<div id="consoleLoad" style="position: fixed; z-index: 999999; bottom: 0; left: 0; width: 10px; height:10px;"></div>');
$('.menuBtnContainer').append('<img id="minimizeBtn" src="../common/minimize.svg" class="smallIcon2" /><img id="fullToggle" src="../common/min.svg" class="smallIcon2" /><img id="closeWinBtn" src="../common/close.svg" class="smallIcon2" />');
///BUTTONS ACTIONS
win.title = lessonTitle;
$(".menuBar").css({"-webkit-user-select": "none", "-webkit-app-region": "drag"});
$(".smallIcon, .smallIcon2, #menuMain2, #verbBanner").css({"-webkit-app-region": "no-drag"});
if($("#tutorialBtn:visible").length == 0){$(".menuTitleContainer").css({"-webkit-app-region": "no-drag"});}
$("#consoleLoad").dblclick(function() {if (win.isDevToolsOpen()) {win.closeDevTools();} else {win.showDevTools();}});
$("#fullToggle").on('click', toggleFullScreen);
$(document).keyup(function(e) {if (e.keyCode == 27 && win.isFullscreen){win.leaveFullscreen(); $('#fullToggle').attr('src', "../common/max.svg");}});
$("#closeWinBtn").on('click', function () {win.close();});
$("#minimizeBtn").on('click', function () {win.minimize();});
////BUTTONS HOVER
if(currentDevice != "mobile"){
$(".smallIcon2").on('mouseenter', function(){playSprite('rollover');});
$(".smallIcon2").hover(function () {$(this).toggleClass('fullOpacity');});

$("#fullToggle").hover(function () {$("#arrowLabel").text("FULLSCREEN ON / OFF"); $(".instructions").toggleClass("showDiv");});
$("#closeWinBtn").hover(function () {$("#arrowLabel").text("CLOSE PROGRAM"); $(".instructions").toggleClass("showDiv");});
$("#minimizeBtn").hover(function () {$("#arrowLabel").text("MINIMIZE"); $(".instructions").toggleClass("showDiv");});
}
///INITIATE
});

