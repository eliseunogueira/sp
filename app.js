if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) { 
	  console.log("ServiceWorker Activated");
	   caches.delete('SpanishOuinoCache5.0.0');
       caches.delete('SpanishOuinoDynamic5.0.0');		
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}