chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ 'url': 'moz-extension//' + be.runtime.id });
});
