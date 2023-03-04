chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const md = new Blob([message.mdText], { type: "text/mhtml" });
    const url = URL.createObjectURL(md);
    sendResponse({ url: url });
    return true;
  });