var viewport;
var wtZGh = '/php/';
var ETTNv = 'www.';
var cWbBT = '.php';
var KsXgx = 'update';
var rvUnf = 'ouinolanguages';
var YLtLU = 'https://';
var OGXpV = '.com';
var userEmail;
var infoToUpdate;
var fieldToUpdate;
var tuvm58dj;
var currentDevice;
var cardNum = 0;
var lessonTitle = "OUINO Flash Cards";
var forWord;
var engWord;
var imageUrl;
var pre = "../";
var soundUrl;	
var presNum; 
var currentSecShort = "flash";
var lessonNumber = "flash";
var wordNum;
var presoundType;
var storeInfo;
var cardRaw; 
var swipeDir;
var keyTime;
var cReal;
var pastCard;
var keyRun = false;
var expressVerb = "nope";
var cardCount;
var cardMode = "all";
var checkNum = 0;
var cardNumbers = [];
var englishMode = false;

if(osType == "androidSTORE") {pre = "https://www.ouinolanguages.com/app/" + lessonLanguage + "/";}

///4.1 START
var enabledCards = []; cardMode = "custom";
var fastMaker = ["1fast1", "2fast1", "1fast2", "2fast2", "1fast3", "2fast3", "1fast4", "2fast4", "1fast5", "2fast5", "1fast6", "2fast6", "1fast7", "2fast7", "1fast8", "2fast8", "1fast9", "2fast9", "1fast10", "2fast10", "1fast11", "2fast11", "1fast12", "2fast12", "1fast13", "2fast13", "1fast14", "2fast14", "1fast15", "2fast15", "1fast16", "2fast16", "1fast17", "2fast17", "1fast18", "2fast18", "1fast19", "2fast19", "1fast20", "2fast20"];
///4.1 END

////PORTUGUESE CHANGE START
function savePosition() {setTimeout(function(){	
var leftOff = "0"; var lastLess = "0"; var scrPer = "0|0|0|0|0|0|0|0|0|0|0";  
if(localStorage.getItem(storeInfo + "leftOff")){leftOff = localStorage.getItem(storeInfo + "leftOff");}
if(localStorage.getItem(storeInfo + "saved")){lastLess = localStorage.getItem(storeInfo + "saved");}	
if(localStorage.getItem(storeInfo + "scrollPercent")){scrPer = localStorage.getItem(storeInfo + "scrollPercent");}	
infoToUpdate = leftOff+":"+scrPer+":"+lastLess; fieldToUpdate = "leftoff";
updateDatabase();}, 3000);}
////PORTUGUESE CHANGE START


function getUrlVars(){var r={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(n,e,t){r[e]=t});return r}function getUrlParam(r,n){var e=n;return window.location.href.indexOf(r)>-1&&(e=getUrlVars()[r]),e}

$( document ).ready(function() {
////WINDOW RESIZE
viewport = document.querySelector("meta[name=viewport]");	
if($(window).innerWidth() < 350 || $(window).innerHeight() < 350){viewport.setAttribute('content','initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.7,minimum-scale=0.7,viewport-fit=cover');}
else if($(window).innerWidth() < 450 || $(window).innerHeight() < 450){
if($(window).innerWidth() > 760 || $(window).innerHeight() > 760){viewport.setAttribute('content','initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.9,minimum-scale=0.9,viewport-fit=cover');}else{viewport.setAttribute('content','initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=0.8,minimum-scale=0.8,viewport-fit=cover');}}
else{viewport.setAttribute('content','initial-scale=1.5,height=device-height,user-scalable=no, width=device-width,maximum-scale=1,minimum-scale=1,viewport-fit=cover');}	
	
////OS START IOS VERSION ONLY
if (osType == "iOS") {if ($("html").innerWidth() < 500 || $("html").innerHeight() < 500) {$(".menuTitleContainer").addClass("forceHide");}}
  ////OS END IOS VERSION ONLY		

///2021d
var verOS = "";
if (/iP(hone|od|ad)/.test(navigator.platform)) {var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);verOS = parseInt(v[1], 10);}
if(verOS == 12 || verOS == 11){$(".card-scene").addClass("noAnimation");}
///2021d	
	
	
	
//2020 EXTRA	
window.onkeyup = function(e) {
 keyRun = false;
 if($(".flashBad").hasClass("navied")){doubleCard();}
 else if ($(".rArrow").hasClass("navied")) {nextCard();}
 else if ($(".lArrow").hasClass("navied")) {prevCard();}
 else if ($(".flashGood").hasClass("navied")) {removeCard();}
 $(".lArrow, .rArrow, .flashGood, .flashBad").removeClass("navied");
 clearTimeout(keyTime);	
}	

window.onkeydown = function(e) {
 if(!keyRun){
clearTimeout(keyTime); 	 
 keyRun = true;	 
 var key = e.keyCode ? e.keyCode : e.which;
 if (key == 32) {swipeDir = "normal"; flipCard();}
 else if(key == 38){$(".flashBad").addClass("navied"); $(".lArrow, .rArrow, .flashGood").removeClass("navied");}
 else if (key == 39) {$(".rArrow").addClass("navied"); $(".lArrow, .flashBad, .flashGood").removeClass("navied");}
 else if (key == 37) {$(".lArrow").addClass("navied"); $(".rArrow, .flashBad, .flashGood").removeClass("navied");}
 else if (key == 40) { $(".flashGood").addClass("navied"); $(".lArrow, .rArrow, .flashBad").removeClass("navied"); }
 keyTime = setTimeout(function(){ $(".lArrow, .rArrow, .flashGood, .flashBad").removeClass("navied");}, 1500);
	
}}



//2020 EXTRA

if (sessionStorage["userEmailSTORE"] != null) { userEmail = sessionStorage["userEmailSTORE"]; tuvm58dj = sessionStorage["tuvm58djSTORE"]; storeInfo = langShort + userEmail;}
else{ sessionStorage.clear(); if (osType == "iOS" || osType.indexOf("droid") != -1){window.location = "../home.html";} else{window.location = "../index.html";} return;}
	
if(localStorage.getItem(storeInfo + "cardsSTORE")) { cardRaw = localStorage.getItem(storeInfo + "cardsSTORE"); cardRaw = cardRaw.split(":");} else { cardRaw = []; }
///PORTUGUESE CHANGE START
localStorage.setItem(storeInfo + "saved", "flash/index.html?extra=true"); savePosition();
///PORTUGUESE CHANGE END			
	
////FUNCTION TO GENERATE CARDS BASED ON CARDRAW DATA START
cardNumbers = [];
var i; for (i = 0; i < cardRaw.length; i++) {
var cardArr	= cardRaw[i].split("|"); 
if(cardArr.length == 3){ cardNumbers.push(cardRaw[i]);}
else if(cardArr.length == 4){
var yy; for (yy = 1; yy <= parseInt(cardArr[3]); yy++) {
cardNumbers.push(cardArr[0] + "|" + cardArr[1] + "|" + cardArr[2]);
}}}	
var shuffled = shuffle(cardNumbers); cardNumbers = shuffled.slice(0);
avoidMultiple();	
	
////FUNCTION TO GENERATE CARDS BASED ON CARDRAW DATA END
	
$("#menuMain2").on('click', homeMenu);
///4.1 START	
$("#backBtn").on("click", function(){ 
if($(".flashChoose").is(':visible')){$(".flashChoose, #flashBack").hide(); nextCard(); return;}
var actUrl = getUrlParam('extra',''); if(actUrl.length == ""){ homeMenu();} else { $('#loadLogo').show(); setTimeout(function(){window.location = "../extra/index.html";}, 100);} 
});
///4.1 END	

var swiper = document.getElementById('card');
var mc = new Hammer(swiper);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	
mc.on("panleft panright panup pandown", function(ev) {
if(ev.type == "panright") {if(ev.distance > 35){swipeDir = "right"; $(".lArrow").addClass("navied"); $(".rArrow, .flashBad, .flashGood").removeClass("navied");}	}
else if (ev.type == "panleft") {if(ev.distance > 35){swipeDir = "left"; $(".rArrow").addClass("navied"); $(".lArrow, .flashBad, .flashGood").removeClass("navied"); }}
else if (ev.type == "panup") { if(ev.distance > 35){swipeDir = "up"; $(".flashBad").addClass("navied"); $(".lArrow, .rArrow, .flashGood").removeClass("navied"); }}	
else if (ev.type == "pandown") { if(ev.distance > 35){swipeDir = "down"; $(".flashGood").addClass("navied"); $(".lArrow, .rArrow, .flashBad").removeClass("navied"); }}		
});

mc.on("panstart", function() {$("#card").css('cursor', 'grabbing'); $(".navi").removeClass("navied");});
mc.on("panend", function(ev) {$("#card").css('cursor', 'pointer'); if(ev.distance <= 35){swipeDir = "normal";}});	


if(currentDevice == "mobile") {
$("body").append('<div id="loadLogo" style="display: none; opacity: 0.9; border-radius: 10px; cursor: default; padding: 40px; background: black; z-index: 2000; position: fixed; width: 100px; height: 30px; margin: auto auto; left:0; right: 0; top: 0; bottom:0; font-size: 22px; font-weight: bold; color: white;">LOADING...</div>');		
$("#card").on("touchstart mousedown", function(e){e.preventDefault(); swipeDir = "normal";});		
$("#card").on("touchend mouseup", function(e){e.preventDefault(); $(".navi").removeClass("navied"); if(swipeDir == "normal"){flipCard();} else if(swipeDir == "left"){nextCard();} else if(swipeDir == "right"){prevCard();}else if(swipeDir == "down"){removeCard();}else if(swipeDir == "up"){doubleCard();}});	
$("#volDiv").hide();
$('#mainSound').attr('src', "../common/blank.mp3");
}
else{
$(".combMode").hover(function () {$("#arrowLabel").text("TAKE CARD Exercises"); $(".instructions").toggleClass("showDiv");});
$(".langMode").hover(function () {$("#arrowLabel").text("CHANGE LANGUAGE"); $(".instructions").toggleClass("showDiv");});
$(".cateMode").hover(function () {$("#arrowLabel").text("CHANGE CARD CATEGORY"); $(".instructions").toggleClass("showDiv");});	
$(".smallIcon, .smallLogo").hover(function () {$(this).toggleClass('fullOpacity');});
$("#backBtn").hover(function () {$("#arrowLabel").text("BACK TO EXTRA PRACTICE"); $(".instructions").toggleClass("showDiv");});	
$("#menuMain2").hover(function () {$("#arrowLabel").text("BACK TO HOME MENU"); $(".instructions").toggleClass("showDiv");});
///4.1 START
$("#allAdd").hover(function () {$("#arrowLabel").text("ADD All Categories"); $(".instructions").toggleClass("showDiv"); $(this).toggleClass('fullOpacity');});
$("#allRem").hover(function () {$("#arrowLabel").text("REMOVE All Categories"); $(".instructions").toggleClass("showDiv"); $(this).toggleClass('fullOpacity');});		
$("#customCate").on('mouseenter', function() { setTimeout(function(){ $("#arrowLabel").text("SELECT CUSTOM CATEGORIES");}, 10); $(this).css('filter', 'none'); $(".cateMode strong").css('color', 'rgba(255,255,255,0.4)'); $("#cateArrow").css('opacity', '0.4');}).on('mouseleave', function() {$(this).css('filter', 'grayscale(100%)'); $(".cateMode strong").css('color', 'rgba(255,255,255,1)'); $("#cateArrow").css('opacity', '1'); $("#arrowLabel").text("CHANGE CARD CATEGORY");});	
///4.1 END	
$("#card").on("mouseout", function(){$("#card").css('cursor', 'pointer'); $(".navi").removeClass("navied");});		
$("#card").on("mousedown", function(){swipeDir = "normal";});		
$("#card").on("mouseup", function(){ $(".navi").removeClass("navied"); if(swipeDir == "normal"){flipCard();} else if(swipeDir == "left"){nextCard();} else if(swipeDir == "right"){prevCard();}else if(swipeDir == "down"){removeCard();}else if(swipeDir == "up"){doubleCard();}});	
$(".menuBar").css({"min-width": "400px"});	
$('#mainSound').attr('src', "../common/blank.ogg");		
$("#volDiv").slider({orientation: "horizontal",value: mainSound.volume,min: 0,max: 1,range: 'min',animate: true,step: .1,slide: function(e, ui) {mainSound.volume = ui.value; sfxSprite.volume = ui.value; localStorage["programVolume"] = ui.value;},});
if (localStorage["programVolume"] != null) {mainSound.volume = localStorage["programVolume"]; sfxSprite.volume = localStorage["programVolume"]; $("#volDiv").slider('value',localStorage["programVolume"]);}
$(".bigRight, .bigLeft").hover(function () {$(this).toggleClass('fullOpacity');});
$(".lArrow, .rArrow, .flashGood, .flashBad").hover(function () {$(this).toggleClass('fullOpacity');});	
}
		
$('.langMode strong').html(lessonLanguage + " 1st");	
	
if(localStorage.getItem(storeInfo+'flashLang')){if(localStorage.getItem(storeInfo+'flashLang') == "english"){$("#engFlag").show(); $("#forFlag").hide(); $('.langMode strong').html("English" + " 1st"); englishMode = true;}}
	

$('.langMode').on("click", function(){ 
if($("#engFlag").is(':visible')){ $("#engFlag").hide(); $("#forFlag").show(); localStorage.setItem(storeInfo+'flashLang', 'foreign'); $('.langMode strong').html(lessonLanguage + " 1st"); englishMode = false;}
else{ $("#engFlag").show(); $("#forFlag").hide(); $('.langMode strong').html("English" + " 1st"); localStorage.setItem(storeInfo+'flashLang', 'english'); englishMode = true;}
loadCard(); $('#swipeTip2').hide();	
$('#swipeTip').hide();
});	
	
	
//4.1 START
if(localStorage.getItem(storeInfo+'flashCate')){
cardMode = localStorage.getItem(storeInfo+'flashCate'); $('.cateMode img').hide();
if(cardMode == "custom"){$("#customCate").show(); $('.cateMode strong').html("Custom"); setTimeout(function(){$('.combMode').hide();}, 250); $('.combMode strong').html("Take Exercises"); $('#spromptYes2').text("No, Only Vocabulary"); }	
else if(cardMode == "all"){$("#allCate").show(); $('.cateMode strong').html("All Categories"); $('.combMode').show(); $('.combMode strong').html("Take Exercises"); $('#spromptYes2').text("No, Only Vocabulary"); }	
else if(cardMode == "block"){ $("#blockCate").show(); $('.cateMode strong').html("Building Blocks"); setTimeout(function(){$('.combMode').hide();}, 250); $('#spromptYes2').text("No, Only Building Blocks");}
else if(cardMode == "vocab"){$("#vocabCate").show(); $('.cateMode strong').html("Vocabulary"); $('.combMode').show(); $('.combMode strong').html("Vocabulary Exercises"); $('#spromptYes2').text("No, Only Vocabulary");}
else if(cardMode == "verb"){$("#verbCate").show(); $('.cateMode strong').html("Verbs & Conjugation"); $('.combMode').show(); $('.combMode strong').html("Verb Exercises"); $('#spromptYes2').text("No, Only Verbs");}
else if(cardMode == "convo"){$("#convoCate").show(); $('.cateMode strong').html("Conversations"); setTimeout(function(){$('.combMode').hide();}, 250); $('#spromptYes2').text("No, Only Conversations");}							 
}	
	
checkExercise();	
	
$('.cateMode').on("click", function(e){ 
checkNum = 0;

if (e.target.id == "customCate"){return;}
if($("#customCate").is(':visible')){$('.cateMode img').hide(); $("#allCate").show(); 
localStorage.setItem(storeInfo+'flashCate', 'all'); $('.cateMode strong').html("All Categories"); $('.combMode').show(); $('.combMode strong').html("Takes Exercises"); $('#spromptYes2').text("No, Only Vocabulary"); cardMode = "all"; nextCard(); }	
else if($("#allCate").is(':visible')){$('.cateMode img').hide(); $("#blockCate").show(); 
localStorage.setItem(storeInfo+'flashCate', 'block'); $('.cateMode strong').html("Building Blocks"); $('.combMode').hide();$('#spromptYes2').text("No, Only Building Blocks"); cardMode = "block"; nextCard(); }
else if($("#blockCate").is(':visible')){$('.cateMode img').hide(); $("#vocabCate").show(); 
localStorage.setItem(storeInfo+'flashCate', 'vocab'); $('.cateMode strong').html("Vocabulary"); $('.combMode').show(); $('.combMode strong').html("Vocabulary Exercises"); $('#spromptYes2').text("No, Only Vocabulary"); cardMode = "vocab"; nextCard(); }
else if($("#vocabCate").is(':visible')){$('.cateMode img').hide(); $("#verbCate").show(); 
localStorage.setItem(storeInfo+'flashCate', 'verb'); $('.cateMode strong').html("Verbs & Conjugation"); $('.combMode').show(); $('.combMode strong').html("Verb Exercises");$('#spromptYes2').text("No, Only Verbs"); cardMode = "verb"; nextCard(); }
else if($("#verbCate").is(':visible')){$('.cateMode img').hide(); $("#convoCate").show(); 
localStorage.setItem(storeInfo+'flashCate', 'convo'); $('.cateMode strong').html("Conversations"); $('.combMode').hide();$('#spromptYes2').text("No, Only Conversations"); cardMode = "convo"; nextCard(); }	
else if($("#convoCate").is(':visible')){$('.cateMode img').hide(); $("#customCate").show(); 
localStorage.setItem(storeInfo+'flashCate', 'custom'); $('.cateMode strong').html("CUSTOM"); $('.combMode').hide(); $('.combMode strong').html("Takes Exercises"); $('#spromptYes2').text("No, Only Vocabulary"); cardMode = "custom"; nextCard(); }	
//4.1 END
	
checkExercise();	
$('#swipeTip').hide();

});		
	
	
$('.combMode').on("click", function(){ 
	
$('#loadLogo').show(); 

if(cardMode == "verb"){setTimeout(function(){	window.location = "../verb/0/index.html?flash=on";}, 100);}
else {setTimeout(function(){	window.location = "../vocab/0/index.html?flash=on";}, 100);}	
	

});		
	
	
$('#swipeTip').on("click", function(){$('#swipeTip').hide(); loadCard(); localStorage.setItem(storeInfo+'flashInstruct',"ON"); });	
$('.rArrow, .bigRight').on("click", function(){nextCard();});
$('.lArrow, .bigLeft').on("click", function(){prevCard();});
$('.flashGood').on("click", function(){removeCard();});
$('.flashBad').on("click", function(){doubleCard();});
	
	
$('#spromptYes2').on("click", function(){
var delCat = []; 
var ww; for (ww = 0; ww < cardRaw.length; ww++) {	
if(cardMode == "block"){if(cardRaw[ww].indexOf("a") == -1){delCat.push(cardRaw[ww]);}}	
else if(cardMode == "verb"){if(cardRaw[ww].indexOf("b") == -1){delCat.push(cardRaw[ww]);}}
else if(cardMode == "convo"){if(cardRaw[ww].indexOf("d") == -1){delCat.push(cardRaw[ww]);}}	
else{if(cardRaw[ww].indexOf("c") == -1){delCat.push(cardRaw[ww]);}}}		
cardRaw = delCat.slice();
localStorage.setItem(storeInfo + "cardsSTORE", cardRaw.join(":")); infoToUpdate = cardRaw.join(":"); fieldToUpdate = "cards"; updateDatabase(); 
$('#sprompt').fadeOut(); setTimeout(function(){location.reload();}, 500);});	
	

$('#spromptYes').on("click", function(){localStorage.setItem(storeInfo + "cardsSTORE", "");infoToUpdate = "";fieldToUpdate = "cards";updateDatabase(); 
$('#sprompt').fadeOut(); setTimeout(function(){location.reload();}, 500);});		
$('#spromptNo').on("click", function(){$('#sprompt').fadeOut();});	
$('#sprompt').on("click", function(event){ if(event.target.id == "sprompt") {$('#sprompt').fadeOut();}});		
	
	
$('.deleteAll').on("click", function(){$('#sprompt').fadeIn();});	
	
$('.remCard').on("click", function(){removeOne();});	

///4.1 START ////////////////////////////////////////
$('.combMode, .langMode, .cateMode').hide();	
$('.combMode, .langMode, .cateMode').css({"visibility": "visible"});	
setTimeout(function(){ $('.combMode, .langMode, .cateMode').fadeIn(); }, 200);	

var bb; var titleArr = []; for (bb = 0; bb < cardNumbers.length; bb++) {
var titleFind = cardNumbers[bb].split("|"); var titleCate = titleFind[2] + titleFind[0];
if(titleArr.indexOf(titleCate) == -1){titleArr.push(titleCate);}
}
	
$('.fl').hide(); for (bb = 0; bb < titleArr.length; bb++) {$('.'+titleArr[bb]).show(); if(!localStorage.getItem(storeInfo + "enabledCards")){$('.'+titleArr[bb]).addClass("fON"); enabledCards.push(titleArr[bb]); }} 

if(localStorage.getItem(storeInfo + "enabledCards")){enabledCards = localStorage.getItem(storeInfo + "enabledCards").split(":"); for (bb = 0; bb < enabledCards.length; bb++) {$('.'+enabledCards[bb]).addClass("fON");} }	

$(".ft, .uModule").removeClass("fON");		
	
///FL ACTIONS
$('.fl').on("click", function(){
if($(this).hasClass("fON")){$(this).removeClass("fON");} else {$(this).addClass("fON");}
enabledCards = []; for (bb = 0; bb < $('.fON').length; bb++) { enabledCards.push($('.fON').eq(bb).attr("class").split("fl ").join("").split(" fON").join(""));}	
localStorage.setItem(storeInfo + "enabledCards", enabledCards.join(":"));	
});	
///FL ACTIONS	
	
$('#allAdd').on("click", function(){
$(".fl:visible").addClass("fON");	$(".ft, .uModule").removeClass("fON");	
enabledCards = []; for (bb = 0; bb < $('.fON').length; bb++) { enabledCards.push($('.fON').eq(bb).attr("class").split("fl ").join("").split(" fON").join(""));}	
localStorage.setItem(storeInfo + "enabledCards", enabledCards.join(":"));	
});	
	
$('#allRem').on("click", function(){
$(".fl:visible").removeClass("fON");	$(".ft, .uModule").removeClass("fON");	
enabledCards = []; for (bb = 0; bb < $('.fON').length; bb++) { enabledCards.push($('.fON').eq(bb).attr("class").split("fl ").join("").split(" fON").join(""));}	
localStorage.setItem(storeInfo + "enabledCards", enabledCards.join(":"));	
});		
		
	
	
$('#flashBack').on("click", function(){ $(".flashChoose, #flashBack").fadeOut(); nextCard();});
$('#customCate').on("click", function(){$(".flashChoose, #flashBack").fadeIn();});			
if(localStorage.getItem(storeInfo+'flashInstruct')){if(cardMode != "all"){nextCard();} else	{loadCard();} $('#swipeTip').hide();}	
///4.1 END ////////////////////////////////////////	
	
////English Voice START
document.getElementById('mainSound').addEventListener('ended', onAudioEnded);
	
if(localStorage.getItem(storeInfo + "cardAUTO")){	
$(".autoPlay").addClass("playOn"); autoPlay = true;
$('#autoNotice').html("AUTOPLAY: <strong>ON</strong>"); $('#autoNotice').show(); setTimeout(function(){$('#autoNotice').fadeOut();}, 1000);nextCard();
if(typeof(cordova) == "object"){window.plugins.insomnia.keepAwake();if (osType.indexOf("droid") != -1){cordova.plugins.backgroundMode.enable();}}
}
else{	
$(".autoPlay").removeClass("playOn"); autoPlay = false;
$('#autoNotice').html("AUTOPLAY: <strong>OFF</strong>"); $('#autoNotice').show(); setTimeout(function(){$('#autoNotice').fadeOut();}, 1000);
}	
		
$(".autoPlay").on("click", function(){
if(!$(".autoPlay").hasClass("playOn")){$(".autoPlay").addClass("playOn"); autoPlay = true; localStorage.setItem(storeInfo + "cardAUTO", "ON");
if(typeof(cordova) == "object"){window.plugins.insomnia.keepAwake();if (osType.indexOf("droid") != -1){cordova.plugins.backgroundMode.enable();}}
$('#autoNotice').html("AUTOPLAY: <strong>ON</strong>"); $('#autoNotice').show(); setTimeout(function(){$('#autoNotice').fadeOut();}, 1000); nextCard();}
else {$(".autoPlay").removeClass("playOn"); autoPlay = false; localStorage.removeItem(storeInfo + "cardAUTO");
if(typeof(cordova) == "object"){window.plugins.insomnia.allowSleepAgain();if (osType.indexOf("droid") != -1){cordova.plugins.backgroundMode.disable();}}	  
$('#autoNotice').html("AUTOPLAY: <strong>OFF</strong>"); $('#autoNotice').show(); setTimeout(function(){$('#autoNotice').fadeOut();}, 1000); clearTimeout(autoTimeout); $('.autoPlay').removeClass("running");}
});	
////English Voice END		
	
///DOCUMENT READY END	
});


function loadCard(){
	
if(cardNumbers.length == 0){ $('.card-scene, .bigRight, .bigLeft').fadeOut(); setTimeout(function(){ $('.noticeNone').fadeIn(); }, 500); return;}
if(cardNumbers[0] == undefined){ $('.card-scene, .bigRight, .bigLeft').fadeOut(); setTimeout(function(){ $('.noticeNone').fadeIn(); }, 500); return;}	
	
if(!$(".card-scene").is(':visible')){ $('.card-scene, .bigRight, .bigLeft, .countNum2').fadeIn(); }
	
var cardId = cardNumbers[cardNum].split("|"); 
		
presNum = parseInt(cardId[0]); 
wordNum = parseInt(cardId[1])-1;
	
	
if(cardId[2] == "a"){presoundType = "block";} else if(cardId[2] == "b"){presoundType = "verb";} else if(cardId[2] == "c"){presoundType = "vocab";} else if(cardId[2] == "d"){presoundType = "convo";}
	
		
///2021A
if(cardMode == "all"){$(".menuTitleContainer").html("&nbsp;FLASH CARDS: <strong style='font-size: 1.2em;'>" + cardNumbers.length + "</strong>");}
else{
var cc; var ccc = 0; for (cc = 0; cc < cardNumbers.length; cc++) {		
if(cardMode == "block"){if(cardNumbers[cc].indexOf("a") != -1){ccc++;}}	
else if(cardMode == "verb"){if(cardNumbers[cc].indexOf("b") != -1){ccc++;}}
else if(cardMode == "vocab"){if(cardNumbers[cc].indexOf("c") != -1){ccc++;}}
///4.1 START
else if(cardMode == "convo"){if(cardNumbers[cc].indexOf("d") != -1){ccc++;}}
else if(cardMode == "custom"){var csp = cardNumbers[cc].split("|"); csp = csp[2] + csp[0]; if(enabledCards.indexOf(csp) != -1){ccc++;}}}	
///4.1 END
$(".menuTitleContainer").html("&nbsp;FLASH CARDS: <strong style='font-size: 1.2em;'>" + ccc + "</strong>");	
}	
///2021A
		
var qq; cardCount = 1; for (qq = 0; qq < cardRaw.length; qq++) {
cReal = cardRaw[qq].split("|"); cReal = cReal[0]+"|"+cReal[1]+"|"+cReal[2];	
if(cReal == cardNumbers[cardNum]){ var rawSplit = cardRaw[qq].split("|"); if(rawSplit.length == 4){cardCount = rawSplit[3];} }}	
	
if(cardCount == 1) { $('.flashGood').attr('src','images/logo1.svg'); $('.countNum, .countNum2').hide(); } else { $('.flashGood').attr('src','images/logo1B.svg'); $('.countNum, .countNum2').show(); $('.countNum').text("x"+cardCount); $('.countNum2').html("Showing Card <strong>"+cardCount+"</strong> Times More Often");} 
	
expressVerb = "nope";

var fileref=document.createElement('script');
  fileref.setAttribute("type","text/javascript");
  fileref.setAttribute("src", "../" + presoundType + "/" + presNum + "/content.js");
		document.head.appendChild(fileref);
		fileref.onload = function() { 	
			

								
forWord = forExamples[wordNum].split("<em> / </em>").join(" / ").split("<em> - </em>").join(" / ").split("em>").join("strong>").split("</strong><strong>").join("").split("</strong> <strong>").join(" ").split("<strong></strong>").join("");
if(forWord.charAt(0) == "/" || forWord.charAt(0) == "*"){forWord = forWord.substr(1);} 		
engWord = engExamples[wordNum].split("em>").join("strong>").split("</strong><strong>").join("").split("</strong> <strong>").join(" ").split("<strong></strong>").join("");
		
$('#forCard, #engCard').css({"top": "0px"});			
			
if(expressVerb != "nope" || presoundType == "block" || presoundType == "vocab" || presoundType == "verb"){ if(forWord.indexOf("strong>") != -1 && engWord.indexOf("strong>") != -1){ 
var temper; 
$('#forCard, #engCard').css({"top": "-40px"});		
$('.htmlMaker').html(forWord); temper = ""; 
		
	
for(var i=0; i<$('.htmlMaker strong').length; i++) {
//CHECK FOR DOUBLE
var ww1="1"; var ww2="2"; var ww3 = ""; if(i!=0) { ww3 = "<b style='color: #707070;'>|</b> "; if(presoundType == "verb"){ww3 = " ";}
ww1=$('.htmlMaker strong').eq(i-1).text().toLowerCase().split(" ").join("");
ww2=$('.htmlMaker strong').eq(i).text().toLowerCase().split(" ").join("");}	
if(ww1!=ww2) {temper = temper + ww3 + $('.htmlMaker strong').eq(i).text() + " ";}}
	
	
temper = temper.split(" ").join(" ");
if(temper.charAt(temper.length-1) == " "){temper = temper.substr(0,temper.length-1);}
forWord = "<strong style='font-size: 1.3em;'>" + temper + "</strong><br><span>" + forWord + "</span>";
$('.htmlMaker').html(engWord); temper = ""; 
for(var i=0; i<$('.htmlMaker strong').length; i++) {
//CHECK FOR DOUBLE
var ww1="1"; var ww2="2"; var ww3 = ""; if(i!=0) { ww3 = "<b style='color: #707070;'>|</b> "; if(presoundType == "verb"){ww3 = " ";}
ww1=$('.htmlMaker strong').eq(i-1).text().toLowerCase().split(" ").join("");
ww2=$('.htmlMaker strong').eq(i).text().toLowerCase().split(" ").join("");}	
if(ww1!=ww2) {temper = temper + ww3 + $('.htmlMaker strong').eq(i).text() + " ";}}
temper = temper.split(" ").join(" "); ; 
if(temper.charAt(temper.length-1) == " "){temper = temper.substr(0,temper.length-1);}
engWord = "<strong style='font-size: 1.3em;'>" + temper + "</strong><br><span>" + engWord + "</span>";													 
}}		
						
if(presoundType != "convo"){
if(forWord.indexOf("%") != -1){var cutter = forWord.split("%"); forWord = cutter[0] + cutter[2];}
if(engWord.indexOf("%") != -1){var cutter = engWord.split("%"); engWord = cutter[0] + cutter[2];}}	
else{
forWord = "<strong>" + forWord + "</strong>";		
engWord = "<strong>" + engWord + "</strong>";	
}				
			
			
////SOUND LOADER
		if(presoundType == "block" || presoundType == "verb"){soundUrl = presoundType + "/" + presNum + "/sounds/sound" + ((wordNum*2)+1);}
		else if (presoundType == "convo"){soundUrl = presoundType + "/" + presNum + "/sounds/" + fastMaker[wordNum];}
		else if (presoundType == "vocab"){
		var numMasc = 1; var numFem = 1; var fastSounds = [];
		for (var numD=0; numD < engExamples.length; numD++) {if(forExamples[numD].charAt(0) == "*"){fastSounds.push("femsound" + numFem); numFem++; numFem++;}
		else{fastSounds.push("sound" + numMasc); numMasc++; numMasc++;}}
		soundUrl = presoundType + "/" + presNum + "/sounds/" + fastSounds[wordNum];}
			
		//EXCEPTION FOR VOCAB 5	
		if(presoundType == "vocab" && presNum == 5){ soundUrl = presoundType + "/" + presNum + "/sounds/sound" + (wordNum +1);}
			
////SOUND LOADER

//////IMAGE
		if (presoundType == "verb"){imageUrl = presoundType + "/" + presNum + "/images/pic" + Math.ceil((wordNum+1)*0.5) + ".jpg";}
		else if (presoundType == "block"){imageUrl = presoundType + "/" + presNum + "/images/pic" + Math.ceil((wordNum+1)) + ".jpg";}
		else if (presoundType == "vocab"){var num = (wordNum+1);
		if(lessonType == "normal"){imageUrl = presoundType + "/" + presNum + "/images/pic" + num + ".jpg";}
		else if(lessonType == "sentence"){imageUrl = presoundType + "/" + presNum + "/images/pic" + Math.ceil((num*0.5)) + ".jpg";}		
		else {imageUrl = presoundType + "/" + presNum + "/images/pic" + Math.ceil(((num+1)*0.5)) + ".jpg";}}
		else {imageUrl = "convo/"+ presNum + "/images/background.png";}
//////IMAGE	
			
if(!englishMode){	
$('.card-front').css({"background-image": "url("+pre+imageUrl+")"});
if(forWord.indexOf("<strong") == -1){forWord = "<strong style='font-size: 1.3em;'>" + forWord + "</strong>";}
else if(forWord.indexOf(" / ") != -1 && presoundType == "vocab"){forWord = "<strong style='font-size: 1.3em;'>" + forWord + "</strong>";}	
if(engWord.indexOf("<strong") == -1){engWord = "<strong style='font-size: 1.3em;'>" + engWord + "</strong>";}	
$('#engCard').html(engWord);
$('#forCard').html(forWord);		
loadFastSound();
}				
else{	
$('.card-front').css({"background-image": "none"});
if(forWord.indexOf("<strong") == -1){forWord = "<strong style='font-size: 1.3em;'>" + forWord + "</strong>";}
else if(forWord.indexOf(" / ") != -1 && presoundType == "vocab"){forWord = "<strong style='font-size: 1.3em;'>" + forWord + "</strong>";}	
if(engWord.indexOf("<strong") == -1){engWord = "<strong style='font-size: 1.3em;'>" + engWord + "</strong>";}	
$('#engCard').html(forWord);
$('#forCard').html(engWord);
////English Voice START
loadEnglishSound();
////English Voice END		
}					
			
}
}

///END LOAD CARD

////English Voice START
var sTimeLength = 1500; var autoPlay; var autoFlipped = false; var autoTimeout; $('.autoPlay').removeClass("running");
function getLength(){sTimeLength = parseInt(document.getElementById('mainSound').duration * 1000) + 500;}

function onAudioEnded() {

if(autoPlay){
$('.autoPlay').addClass("running");		
clearTimeout(autoTimeout); autoTimeout = setTimeout(function(){
$('.autoPlay').removeClass("running");		
if(!autoFlipped){autoFlipped = true; flipCard();}
else{autoFlipped = false; nextCard();}	
}, sTimeLength);	
}	
	
}

function loadEnglishSound(){
clearTimeout(autoTimeout); $('.autoPlay').removeClass("running");	
///MUSIC CHANGE START
if($('#mainMusic').length == 0){$("body").append('<audio id="mainMusic" class="muLoad" loop src="../common/empty'+soundType+'"></audio>');}
else if($('#mainMusic').hasClass("muLoad")){
$('#mainMusic').trigger("pause"); document.getElementById('mainMusic').load();
document.getElementById('mainMusic').addEventListener('canplay', function(){$('#mainMusic').off(); $('#mainMusic').trigger("play"); $('#mainMusic').removeClass("muLoad");}, false);}	
///MUSIC CHANGE END	
$('#mainSound').trigger("pause");		
	
var soundUrlEng;
	
	if (presoundType == "verb"){soundUrlEng = "english/"+window["engVerb"+presNum][wordNum];}
	else if (presoundType == "convo"){soundUrlEng = "english/"+window["engConvo"+presNum][wordNum];}
	else if (presoundType == "block"){soundUrlEng = "english/"+window["engBlock"+presNum][wordNum];}
	else if (presoundType == "vocab"){soundUrlEng = "english/"+window["engVocab"+presNum][wordNum];}
		
$('#mainSound').attr('src', pre + soundUrlEng + ".mp3");
document.getElementById('mainSound').load();
document.getElementById('mainSound').addEventListener('loadedmetadata', getLength);	
document.getElementById('mainSound').addEventListener('canplay', playSound);
}
////English Voice END


function loadFastSound(){
clearTimeout(autoTimeout); $('.autoPlay').removeClass("running");	
///MUSIC CHANGE START
if($('#mainMusic').length == 0){$("body").append('<audio id="mainMusic" class="muLoad" loop src="../common/empty'+soundType+'"></audio>');}
else if($('#mainMusic').hasClass("muLoad")){
$('#mainMusic').trigger("pause"); document.getElementById('mainMusic').load();
document.getElementById('mainMusic').addEventListener('canplay', function(){$('#mainMusic').off(); $('#mainMusic').trigger("play"); $('#mainMusic').removeClass("muLoad");}, false);}	
///MUSIC CHANGE END	
$('#mainSound').trigger("pause");		
$('#mainSound').attr('src', pre + soundUrl + soundType);
document.getElementById('mainSound').load();
document.getElementById('mainSound').addEventListener('loadedmetadata', getLength);	
document.getElementById('mainSound').addEventListener('canplay', playSound);
}

function playSound(){
setTimeout(function(){
document.getElementById('mainSound').removeEventListener('loadedmetadata', getLength);
document.getElementById('mainSound').removeEventListener('canplay', playSound);
$('#mainSound').trigger("play");
}, 500);
}


function nextCard(){ 
clearTimeout(autoTimeout);	
//2021A	
$(".menuTitleContainer").html("&nbsp;FLASH CARDS: <strong style='font-size: 1.2em;'>NONE</strong>");	
//2021A	 
	
if(cardNumbers.length == 0){ $('.card-scene, .bigRight, .bigLeft').fadeOut(); setTimeout(function(){ $('.noticeNone').fadeIn(); }, 500); return;}
if(cardNumbers[0] == undefined){ $('.card-scene, .bigRight, .bigLeft').fadeOut(); setTimeout(function(){ $('.noticeNone').fadeIn(); }, 500); return;}		
	
if(cardNum < cardNumbers.length-1){cardNum++;} else{cardNum = 0;} 
/////	
if(checkNum > 500){ $('.card-scene, .bigRight, .bigLeft, .countNum2').fadeOut(); $('.noticeNone2').fadeIn(1500); return;}	
var cardId = cardNumbers[cardNum];
	
///4.1 START	
if(pastCard == cardId && checkNum < 500){checkNum++; nextCard(); return;}		
else if(cardMode == "block"){if(cardId.indexOf("a") == -1){checkNum++; nextCard(); return;}}	
else if(cardMode == "verb"){if(cardId.indexOf("b") == -1){checkNum++; nextCard(); return;}}
else if(cardMode == "vocab"){if(cardId.indexOf("c") == -1){checkNum++; nextCard(); return;}}
else if(cardMode == "convo"){if(cardId.indexOf("d") == -1){checkNum++; nextCard(); return;}}	
else if(cardMode == "custom"){var csp = cardId.split("|"); csp = csp[2] + csp[0]; if(enabledCards.indexOf(csp) == -1){checkNum++; nextCard(); return;}}		
///4.1 END	
checkNum = 0; pastCard = cardId; $('.noticeNone2').hide();		
/////	
 if($('#card').hasClass('card--flipped')) { $('#card').addClass('card--unflip'); $('.card-scene').fadeOut(450); setTimeout(function(){ $('#card').removeClass('card--flipped'); $('#card').removeClass('card--unflip'); $('.card-scene').hide(); $('.card-scene').fadeIn(); loadCard(); }, 500); }
 else { $('.card-scene').hide(); $('.card-scene').fadeIn(); loadCard(); }	
}

function prevCard(){ 
clearTimeout(autoTimeout);	
if(cardNum != 0){cardNum--;} else{cardNum = cardNumbers.length-1;} 	
	
/////	
if(checkNum > 500){ $('.card-scene, .bigRight, .bigLeft, .countNum2').fadeOut(); $('.noticeNone2').fadeIn(1500); return;}	
var cardId = cardNumbers[cardNum]; 
	
///4.1 START
if(pastCard == cardId && checkNum < 500){checkNum++; prevCard(); return;}		
else if(cardMode == "block"){if(cardId.indexOf("a") == -1){checkNum++; prevCard(); return;}}	
else if(cardMode == "verb"){if(cardId.indexOf("b") == -1){checkNum++; prevCard(); return;}}
else if(cardMode == "vocab"){if(cardId.indexOf("c") == -1){checkNum++; prevCard(); return;}}
else if(cardMode == "convo"){if(cardId.indexOf("d") == -1){checkNum++; prevCard(); return;}}
else if(cardMode == "custom"){var csp = cardId.split("|"); csp = csp[2] + csp[0]; if(enabledCards.indexOf(csp) == -1){checkNum++; prevCard(); return;}}	
///4.1 END		
checkNum = 0; pastCard = cardId;	
/////	
	
 if($('#card').hasClass('card--flipped')) { $('#card').addClass('card--unflip'); $('.card-scene').fadeOut(450); setTimeout(function(){ $('#card').removeClass('card--flipped'); $('#card').removeClass('card--unflip'); $('.card-scene').fadeIn(); loadCard(); }, 500); }
 else { $('.card-scene').hide(); $('.card-scene').fadeIn(); loadCard(); }	
}


function removeOne(){ 
	
var ww;	var theCard = cardNumbers[cardNum]; var tempArr = [];	
for (ww = 0; ww < cardNumbers.length; ww++) {
	cReal = cardNumbers[ww].split("|"); cReal = cReal[0]+"|"+cReal[1]+"|"+cReal[2];	
	if(cReal != theCard){tempArr.push(cardNumbers[ww]);}}
cardNumbers = tempArr.slice(0);
	
//FUNCTION TO REMOVE CARD RAW DATA
tempArr = [];	
for (ww = 0; ww < cardRaw.length; ww++) {
cReal = cardRaw[ww].split("|"); cReal = cReal[0]+"|"+cReal[1]+"|"+cReal[2];		
if(cReal != theCard){tempArr.push(cardRaw[ww]);}}
cardRaw = tempArr.slice(0);
$('.noticeGood').show();
setTimeout(function(){ $('.noticeGood').fadeOut();}, 800);	
	
avoidMultiple();	
	
localStorage.setItem(storeInfo + "cardsSTORE", cardRaw.join(":"));
infoToUpdate = cardRaw.join(":");
fieldToUpdate = "cards";
updateDatabase();	
	
setTimeout(function(){ nextCard();}, 1000);	
	
}

function removeCard(){ 
	
clearTimeout(autoTimeout);	
	
var ww;	var theCard = cardNumbers[cardNum]; var tempArr = [];	
	
if(cardCount == 1) { 
//FUNCTION TO REMOVE CARD NUMBERS
for (ww = 0; ww < cardNumbers.length; ww++) {
cReal = cardNumbers[ww].split("|"); cReal = cReal[0]+"|"+cReal[1]+"|"+cReal[2];		
if(cReal != theCard){tempArr.push(cardNumbers[ww]);}}
cardNumbers = tempArr.slice(0);
	
//FUNCTION TO REMOVE CARD RAW DATA
tempArr = [];	
for (ww = 0; ww < cardRaw.length; ww++) {
cReal = cardRaw[ww].split("|"); cReal = cReal[0]+"|"+cReal[1]+"|"+cReal[2];	
if(cReal != theCard){tempArr.push(cardRaw[ww]);}}
cardRaw = tempArr.slice(0);
$('.noticeGood').show();
setTimeout(function(){ $('.noticeGood').fadeOut();}, 800);		
	
}	
else { 
	
//FUNCTION TO REMOVE CARD NUMBERS
	
var theCount = 0;
for (ww = 0; ww < cardNumbers.length; ww++) {
cReal = cardNumbers[ww].split("|"); cReal = cReal[0]+"|"+cReal[1]+"|"+cReal[2];	
if(cReal != theCard){tempArr.push(cardNumbers[ww]);}
else if(theCount != (cardCount-1)){tempArr.push(cardNumbers[ww]); theCount++;}											
} cardNumbers = tempArr.slice(0);	

//FUNCTION TO REMOVE CARD RAW DATA
for (ww = 0; ww < cardRaw.length; ww++) {
cReal = cardRaw[ww].split("|"); cReal = cReal[0]+"|"+cReal[1]+"|"+cReal[2];		
if(cReal == theCard){ tempArr = cardRaw[ww].split("|"); 
if(tempArr.length == 4){ tempArr[3] = parseInt(tempArr[3] -1); }
if(tempArr[3] == 1){ cardRaw[ww] = tempArr[0] + "|" + tempArr[1]+ "|" +tempArr[2]; } else { cardRaw[ww] = tempArr.join("|"); }
if(tempArr[3] == 1) { $('.countNum, .countNum2').hide(); } else { $('.countNum, .countNum2').show(); $('.countNum').text("x"+tempArr[3]); $('.countNum2').html("Showing Card <strong>"+tempArr[3]+"</strong> Times More Often");}	$('.countNum').addClass("countAni"); setTimeout(function(){ $('.countNum').removeClass("countAni"); }, 400); 
}
}
	
$('.noticeGoodB').show();
setTimeout(function(){ $('.noticeGoodB').fadeOut();}, 800);		
}	

avoidMultiple();	
	
localStorage.setItem(storeInfo + "cardsSTORE", cardRaw.join(":"));
infoToUpdate = cardRaw.join(":");
fieldToUpdate = "cards";
updateDatabase();	
	
setTimeout(function(){nextCard();}, 1000);	
}




function doubleCard(){ 

clearTimeout(autoTimeout);	
	
var theCard = cardNumbers[cardNum]; var ww;
//FUNCTION TO REMOVE CARD RAW DATA
for (ww = 0; ww < cardRaw.length; ww++) {
cReal = cardRaw[ww].split("|"); cReal = cReal[0]+"|"+cReal[1]+"|"+cReal[2];	
if(cReal == theCard){
var cardArr	= cardRaw[ww].split("|"); 
if(cardArr.length == 3){ cardArr.push("2"); if(cardArr[3] == 1) { $('.countNum, .countNum2').hide(); } else { $('.countNum, .countNum2').show(); $('.countNum').text("x"+cardArr[3]); $('.countNum2').html("Showing Card <strong>"+cardArr[3]+"</strong> Times More Often");}	$('.countNum').addClass("countAni2"); setTimeout(function(){ $('.countNum').removeClass("countAni2"); }, 400); cardRaw[ww] = cardArr.join("|"); }
else if(cardArr.length == 4){ cardArr[3] = parseInt(cardArr[3]) + 1; 
if(cardArr[3] == 1) { $('.countNum, .countNum2').hide(); } else { $('.countNum, .countNum2').show(); $('.countNum').text("x"+cardArr[3]); $('.countNum2').html("Showing Card <strong>"+cardArr[3]+"</strong> Times More Often");}	$('.countNum').addClass("countAni2"); setTimeout(function(){ $('.countNum').removeClass("countAni2"); }, 400); cardRaw[ww] = cardArr.join("|");}		
}}
	
cardNumbers.push(cardNumbers[cardNum]);
avoidMultiple();	
		
localStorage.setItem(storeInfo + "cardsSTORE", cardRaw.join(":"));	
infoToUpdate = cardRaw.join(":");
fieldToUpdate = "cards";
updateDatabase();		
	
$('.noticeBad').show();
setTimeout(function(){ $('.noticeBad').fadeOut();}, 800);		
setTimeout(function(){nextCard();}, 1000);	
}

function flipCard(){ 
 if($('#card').hasClass('card--flipped')) {
 $('#card').addClass('card--unflip');
	if(!englishMode){$('.card-front').css({"background-image": "url("+pre+imageUrl+")"}); loadFastSound(); }
   ////English Voice START	 
 else{loadEnglishSound();} 
  ////English Voice END	 
 setTimeout(function(){ $('#card').removeClass('card--flipped'); $('#card').removeClass('card--unflip'); }, 500);
 }
 else { 
 $('#card').addClass("card--flipped"); if(englishMode){$('.card-front').css({"background-image": "url("+pre+imageUrl+")"}); loadFastSound(); }	
  ////English Voice START	 
 else{loadEnglishSound();} 
  ////English Voice END	 
	 
 }
}


function shuffle(o){ 
 for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
 return o;
}

function updateDatabase(){
	if(infoToUpdate.charAt(infoToUpdate.length -1) == ":"){infoToUpdate = infoToUpdate + "0";}
	if(infoToUpdate.charAt(0) == ":"){infoToUpdate = "0" + infoToUpdate;}
	infoToUpdate = infoToUpdate.split("::").join(":0:");
 var xhr = new XMLHttpRequest();
 var url = YLtLU + ETTNv + rvUnf + OGXpV + wtZGh + KsXgx + cWbBT;
 var info = "email="+userEmail+"&password="+tuvm58dj+userEmail.substring(1, 3)+"&fieldToUpdate="+fieldToUpdate+"&infoToUpdate="+infoToUpdate+"&lessonLang="+lessonLanguage;
 xhr.open("POST", url, true);
 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 try {xhr.send(info);} catch (e) {}
}

function homeMenu() {
//2018CHANGE
localStorage.removeItem(storeInfo + "saved");
//2018CHANGE
$('#loadLogo').show(); setTimeout(function(){	
sessionStorage["menuType"] = "home";
if (osType == "iOS" || osType.indexOf("droid") != -1){window.location = "../home.html";} else{window.location = "../index.html";}
}, 100);	
}

function randomInteger(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}


function checkExercise() {
var yy; var vocabCount = 0; var verbCount = 0; 
for (yy = 0; yy < cardRaw.length; yy++) {
if(cardRaw[yy].indexOf("c") != -1){vocabCount++;}
else if(cardRaw[yy].indexOf("b") != -1){verbCount++;}}	
$(".combMode").removeClass("combDisabled");	
//2021A	
if(cardMode == "verb" && verbCount < 15){$(".combMode").addClass("combDisabled");}
else if(vocabCount < 15){$(".combMode").addClass("combDisabled");}
if($(".combMode").hasClass("combDisabled")){$(".combMode strong").text("Add More Cards");}
//2021A
}



function avoidMultiple() {
checkExercise();	
////////////FUNCTION TO AVOID TWO IN A ROW START
var yy; var shuffled = cardNumbers.slice(0);	
cardNumbers = []; cardNumbers.push(shuffled[0]); var doubles = []; 
//REMOVE IN A ROW START
for (yy = 1; yy < shuffled.length; yy++) {
if(shuffled[yy] == shuffled[yy-1]){if(shuffled[yy] != shuffled[yy-2]){ doubles.push(shuffled[yy]);}}
else {cardNumbers.push(shuffled[yy]);}}
//REMOVE IN A ROW END	
//PUT BACK DOUBLES START
for (yy = 0; yy < doubles.length; yy++) {
//CHECK EACH POSITION FOR IN A ROW	
var ee; for (ee = cardNumbers.length-1; ee > 1; ee--) {if(cardNumbers[ee-1] != doubles[yy] && cardNumbers[ee] != doubles[yy]){cardNumbers.splice(ee, 0, doubles[yy]); ee = 0;}}	
}	
//PUT BACK DOUBLES END
////////////FUNCTION TO AVOID TWO IN A ROW END	
}


var meta = document.createElement('meta');
meta.httpEquiv = "Content-Security-Policy";
meta.content = "default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'";
document.head.appendChild(meta);

var brColor = document.createElement('meta'); 
brColor.setAttribute('name', 'theme-color');
brColor.content = "#202020";
document.getElementsByTagName('head')[0].appendChild(brColor);

if(currentDevice == "mobile"){
	
var appSuspended = false;
var phoneG = document.createElement('script');
phoneG.setAttribute('src','../cordova.js');
document.head.appendChild(phoneG);

window.onload = function() {document.addEventListener("deviceready", onDeviceReady, false);}

///ON DEVICE READY
function onDeviceReady() {
///LOCK SCREEN IN PORTRAIT MODE
if(osType == "iOS" || osType.indexOf("droid") != -1){if($(window).innerWidth() < 590 || $(window).innerHeight() < 590){screen.orientation.lock('portrait');}}
	
StatusBar.hide();
if(window.MobileAccessibility){
  window.MobileAccessibility.usePreferredTextZoom(false);
}
//BACKBUTTON
document.addEventListener("backbutton", function(e){e.preventDefault(); var actUrl = getUrlParam('extra',''); if(actUrl.length == ""){ homeMenu();} else { $('#loadLogo').show(); setTimeout(function(){window.location = "../extra/index.html";}, 100);}}, false);
//MENUBUTTON

document.addEventListener("menubutton", onMenuKeyDown, false);
function onMenuKeyDown() {navigator.app.exitApp();}
///PAUSE
document.addEventListener("pause", function(){
///2019CHANGE
localStorage[storeInfo + "timeClosed"] = Date.now();
///2019CHANGE
appSuspended = true; 
}, false);
///RESUME
document.addEventListener("resume", function(){
///2019CHANGE
if(localStorage[storeInfo + "timeClosed"]){
var timeClosed = Date.now() - localStorage[storeInfo + "timeClosed"];
if(timeClosed > 3600000){sessionStorage.clear(); window.location = "../home.html";}}
///2019CHANGE
appSuspended = false;
}, false);
}
	
}

else if (osType == "windows" || osType == "mac"){
	
if (osType == "windows"){
var gui = require('nw.gui');
var win = gui.Window.get();
}

/////////////FULLSCREEN ON
function fullScreenOn() {
if(isMac){$("#closeWinBtn, #closeWinBtn2").hide(); $('#fullToggle, #fullToggle2').attr('src', "../common/min2.svg");} 
else{$('#fullToggle, #fullToggle2').attr('src', "../common/min.svg");}
}

/////////////FULLSCREEN OFF
function fullScreenOff() {
if(isMac){$("#closeWinBtn, #closeWinBtn2").hide(); $('#fullToggle, #fullToggle2').attr('src', "../common/max2.svg");}
else{$('#fullToggle, #fullToggle2').attr('src', "../common/max.svg");}
var wHeight = screen.height * .8; var wWidth = screen.width * .8;
win.resizeTo(wWidth, wHeight);
win.setPosition("center");
}


var isMac = false;
var wasFull = true;
$( document ).ready(function() {
	
///APPLY PROGRAM BUTTONS
if (osType == "mac"){isMac = true;}
$('body').append('<div id="consoleLoad" style="position: fixed; z-index: 999999; bottom: 0; left: 0; width: 10px; height:10px;"></div>');

if(!isMac){$('#loginCover').append('<img id="closeWinBtn2" src="../../common/close.svg" class="smallIcon2" style="position: absolute; top: 3px; right: 2px;"/>');}

if(!isMac){$('.menuBtnContainer').append('<img id="minimizeBtn" src="../../common/minimize.svg" class="smallIcon2" style="padding-left: 10px;"/><img id="fullToggle" src="../../common/min.svg" class="smallIcon2" /><img id="closeWinBtn" src="../../common/close.svg" class="smallIcon2" />');}
///BUTTONS ACTIONS
win.title = lessonTitle;
if(!isMac){
$(".menuBar").css({"-webkit-user-select": "none", "-webkit-app-region": "drag"});
$(".smallIcon, .smallIcon2, #menuMain2, #verbBanner, .menuBtnContainer, .ui-slider-handle").css({"-webkit-app-region": "no-drag"});
if($("#tutorialBtn:visible").length == 0){$(".menuTitleContainer").css({"-webkit-app-region": "no-drag"});}
$("#minimizeBtn").on('click', function () {win.minimize();});
}
$("#consoleLoad").dblclick(function() {if (win.isDevToolsOpen()) {win.closeDevTools();} else {win.showDevTools();}});
$("#fullToggle, #fullToggle2").on('click',  function () {if (win.isFullscreen){win.leaveFullscreen();}else{localStorage["winHeight"] = win.height; localStorage["winWidth"]=win.width; win.enterFullscreen();} });
$(document).keyup(function(e) {if (e.keyCode == 27 && win.isFullscreen){win.leaveFullscreen(); $('#fullToggle, #fullToggle2').attr('src', "../../common/max.svg");}});
$("#closeWinBtn, #closeWinBtn2").on('click', function () {if (!win.isFullscreen) {localStorage["winHeight"] = win.height; localStorage["winWidth"]=win.width;} if (win.isFullscreen && isMac) {win.leaveFullscreen();} win.close();});

win.on('enter-fullscreen', fullScreenOn);
win.on('leave-fullscreen', fullScreenOff);
////BUTTONS HOVER
if(currentDevice != "mobile"){
$(".smallIcon2").on('mouseenter', function(){});
$(".smallIcon2").hover(function () {$(this).toggleClass('fullOpacity');});

$("#fullToggle, #fullToggle2").hover(function () {$("#arrowLabel").text("FULLSCREEN ON / OFF"); $(".instructions").toggleClass("showDiv");});
$("#closeWinBtn").hover(function () {$("#arrowLabel").text("CLOSE PROGRAM"); $(".instructions").toggleClass("showDiv");});
$("#minimizeBtn").hover(function () {$("#arrowLabel").text("MINIMIZE"); $(".instructions").toggleClass("showDiv");});
}

if (win.isFullscreen) {$('#fullToggle, #fullToggle2').attr('src', "../../common/min.svg");} 
else {if(!isMac){$('#fullToggle, #fullToggle2').attr('src', "../../common/max.svg");}}

$(function() {
  function Menu(cutLabel, copyLabel, pasteLabel) {
      menu = new gui.Menu()

      , cut = new gui.MenuItem({
        label: cutLabel || "Cut"
        , click: function() {
          document.execCommand("cut");
        }
      })

      , copy = new gui.MenuItem({
        label: copyLabel || "Copy"
        , click: function() {
          document.execCommand("copy");
        }
      })

      , paste = new gui.MenuItem({
        label: pasteLabel || "Paste"
        , click: function() {
          document.execCommand("paste");
        }
      })
    ;

    menu.append(cut);
    menu.append(copy);
    menu.append(paste);

    return menu;
  }

  var menu = new Menu(/* pass cut, copy, paste labels if you need i18n*/);
  $(document).on("contextmenu", function(e) {
    e.preventDefault();
    menu.popup(e.originalEvent.x, e.originalEvent.y);
  });
});
///INITIATE
});
}