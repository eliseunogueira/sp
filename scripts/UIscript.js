document.addEventListener("DOMContentLoaded", function() {
    var scriptUI = document.createElement("script");
    scriptUI.src = "scripts/UIinitScript.js";
    scriptUI.onload = function() {	
		
	if(osType == "windows" || osType == "pwa" || osType == "mac"){	
	var scriptUI2 = document.createElement("script");
    scriptUI2.src = "scripts/NWscript.js";	
	document.head.appendChild(scriptUI2);}	
		
	var linkBack = document.createElement("link");
    linkBack.rel = "stylesheet";
    linkBack.type = "text/css";
    linkBack.href = "scripts/zBack.css";
	setTimeout(function() {document.getElementsByTagName("head")[0].appendChild(linkBack);}, 1000);	
		
    };
    scriptUI.onerror = function() {
        console.error("Error loading the script.");
    };
    document.head.appendChild(scriptUI);
});