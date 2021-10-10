browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.create({ 'url': browser.runtime.openOptionsPage() });
});
