///OS START
var osType = 'pwa';
var externalKeyboard = true;
var soundType = '.ogg';
var currentDevice = 'desktop';
//OS END
if (
  /Android|webOS|iPhone|touch|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )
) {
  currentDevice = 'mobile';
  externalKeyboard = false;
} else if (
  navigator.maxTouchPoints &&
  navigator.maxTouchPoints > 2 &&
  /MacIntel/.test(navigator.platform)
) {
  currentDevice = 'mobile';
  externalKeyboard = false;
}
var lessonLanguage = 'Spanish';
var langShort = 'SP';
var numberOfLessons = 109;
