var langMode = "foreign";
if(localStorage.getItem("englishTranslation")){langMode = "english";}


///PORTUGUESE CHANGE START
function forTrans() {$("#searchBox").attr("placeholder", "Translate "+ lessonLanguage +" into English...");$(".mode span").text(lessonLanguage + " to English");  langMode = "english"; $(".mode img").eq(0).attr("src", "../common/flagIcon.svg"); $(".mode img").eq(1).attr("src", "../common/flagIcon2.svg");  localStorage.setItem("englishTranslation", "ON");
$("form").submit();};

function engTrans() {$("#searchBox").attr("placeholder", "Translate English into "+ lessonLanguage +"...");$(".mode span").text("English to "+lessonLanguage); langMode = "foreign"; $(".mode img").eq(1).attr("src", "../common/flagIcon.svg"); $(".mode img").eq(0).attr("src", "../common/flagIcon2.svg"); localStorage.removeItem("englishTranslation");
$("form").submit();};	
///PORTUGUESE CHANGE END


$( document ).ready(function() {
if(langMode == "foreign"){$("#searchBox").attr("placeholder", "Translate English into "+ lessonLanguage +"...");$(".mode span").text("English to "+lessonLanguage); langMode = "foreign"; $(".mode img").eq(1).attr("src", "../common/flagIcon.svg"); $(".mode img").eq(0).attr("src", "../common/flagIcon2.svg");
	} else {$("#searchBox").attr("placeholder", "Translate "+ lessonLanguage +" into English...");$(".mode span").text(lessonLanguage + " to English");  langMode = "english"; $(".mode img").eq(0).attr("src", "../common/flagIcon.svg"); $(".mode img").eq(1).attr("src", "../common/flagIcon2.svg");  } 

$(".mode").on('click', function(){
if(langMode == "foreign"){ $("#searchBox").attr("placeholder", "Translate "+ lessonLanguage +" into English...");$(".mode span").text(lessonLanguage + " to English");  langMode = "english"; $(".mode img").eq(0).attr("src", "../common/flagIcon.svg"); $(".mode img").eq(1).attr("src", "../common/flagIcon2.svg");  localStorage.setItem("englishTranslation", "ON");   } 
else {$("#searchBox").attr("placeholder", "Translate English into "+ lessonLanguage +"...");$(".mode span").text("English to "+lessonLanguage); langMode = "foreign"; $(".mode img").eq(1).attr("src", "../common/flagIcon.svg"); $(".mode img").eq(0).attr("src", "../common/flagIcon2.svg"); localStorage.removeItem("englishTranslation"); }
	
});	
	
$("form").submit(function(ev){ev.preventDefault(); var theText = document.getElementById("searchBox").value;	
if(langMode == "foreign"){forTranslate(theText);} else {engTranslate(theText);} $(".result, .result2").fadeIn();
});	

});


async function forTranslate(texter) {

var twoLang; 
if(lessonLanguage == "French"){twoLang = "fr";} 
else if(lessonLanguage == "Spanish"){twoLang = "es";} 
else if(lessonLanguage == "Italian"){twoLang = "it";}
else if(lessonLanguage == "German"){twoLang = "de";}
///PORTUGUESE CHANGE START	
else if(lessonLanguage == "Portuguese"){twoLang = "pt";}	
///PORTUGUESE CHANGE END	

var translation;	
	
try {
translation = await translate(texter, { to: twoLang });
}
catch(err) {
translation	= "Oops. Could not connect to web server.";
texter = "Please try again when you have a stable internet connection.";
}
	
$(".result span").html(translation+"<br><hr><em>"+texter+"</em>");	

};	

async function engTranslate(texter) {

var twoLang; 
if(lessonLanguage == "French"){twoLang = "fr";} 
else if(lessonLanguage == "Spanish"){twoLang = "es";} 
else if(lessonLanguage == "Italian"){twoLang = "it";}
else if(lessonLanguage == "German"){twoLang = "de";}
///PORTUGUESE CHANGE START	
else if(lessonLanguage == "Portuguese"){twoLang = "pt";}	
///PORTUGUESE CHANGE END	

var translation;	
	
try {
translation = await translate(texter, { from: twoLang });
}
catch(err) {
translation	= "Oops. Could not connect to web server.";
texter = "Please try again when you have a stable internet connection.";
}
	
$(".result span").html(translation+"<br><hr><em>"+texter+"</em>");	

};


translate.engine = 'google';
translate.key = organic + "-" + search;

