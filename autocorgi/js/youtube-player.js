// Used to insert the youtube_hax script into Youtube
var s = document.createElement('script');
s.src = chrome.extension.getURL('js/youtube_hax.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};