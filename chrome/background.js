chrome.tabs.onUpdated.addListener(
    function (tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete' && tab.url.indexOf('github') > -1) {
            console.log('url changed:', changeInfo, tab.url, tab)
            chrome.tabs.sendMessage(tabId, {
                message: 'url changed',
                url: tab.url
            })
        }
    }
);
