chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 'url': 'moz-extension' + chrome.runtime.id });
});
