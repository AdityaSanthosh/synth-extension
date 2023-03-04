const api = "http://127.0.0.1:8000/"

function savePage(formData){
  // post_body = {
  //   captured_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false }),
  //   user_id: 1,
  //   page_content: file,
  //   tab_id: sender.tab.id
  // }
  fetch(api+'savepage', {
    method: "POST",
    mode: "cors",
    contentType: "multipart/form-data",
    body: formData
  }).then(response => console.log(response.json()))
    .then(data => {
      // Send the result back to the content script
      // chrome.tabs.sendMessage(sender.tab.id, {data: data});
    });
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "InsertData") {
      chrome.offscreen.createDocument({
        url: chrome.runtime.getURL("offscreen.html"),
        reasons: ["BLOBS"],
        justification: "justification is required.",
      });
      const tab_id = sender.tab.id;
      chrome.pageCapture.saveAsMHTML({ tabId: tab_id }, async (md) => {
        const mdText = await md.text();
        var formData = new FormData()
        formData.append("file",md);
        savePage(formData);
        chrome.runtime.sendMessage({ mdText: mdText }, (response) => {
          const url = response.url;
          chrome.downloads.download({
            url: url,
            filename: "page.mhtml",
            method: 'GET',
          }).then( (downloadId) => console.log('Download completed', downloadId) );
        });
      });
    }
});
