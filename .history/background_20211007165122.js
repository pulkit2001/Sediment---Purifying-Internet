browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.create({ 'url': 'moz-extension//' + .runtime.id });
});
