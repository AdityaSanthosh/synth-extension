// send message to background.js
chrome.runtime.sendMessage({action: "InsertData"}, function(response) {
   console.log(response);
 });
 