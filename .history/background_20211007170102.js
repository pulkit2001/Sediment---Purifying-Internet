browser.browserAction.onClicked.addListener(function(tab) {
    browser.tabs.create({ 'url': 'moz-extension://' + browser.runtime.id+'/options.html' });
});
