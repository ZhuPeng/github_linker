chrome.tabs.onUpdated.addListener(
    function (tabId, changeInfo, tab) {
        if (changeInfo.url) {
            console.log(tabId, changeInfo, tab)
            chrome.tabs.sendMessage(tabId, {
                message: 'url changed',
                url: changeInfo.url
            })
        }
    }
);
