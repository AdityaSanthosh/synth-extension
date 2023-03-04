const api = "https://synthbackend-1-c0058910.deta.app/"

function savePage(file, sender){
  // post_body = {
  //   captured_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false }),
  //   user_id: 1,
  //   page_content: file,
  //   tab_id: sender.tab.id
  // }
  fetch(api+'savepage', {
    method: "POST",
    mode: "cors",
    contentType: false,
    processData: false,
    body: file
  }).then(response => console.log(response.json()))
    .then(data => {
      // Send the result back to the content script
      chrome.tabs.sendMessage(sender.tab.id, {data: data});
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "InsertData") {
      chrome.pageCapture.saveAsMHTML({tabId: sender.tab.id}, function(mhtmlData) {
        var file = new File([mhtmlData], "webpage.html", {type: "text/html", lastModified: Date.now()});
        savePage(file,sender);
     });
    }
});
