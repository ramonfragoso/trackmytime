chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.get(details.tabId, function(tab) {
        console.log("Last page visited: " + tab.url);
        chrome.storage.sync.set({last_visited: tab.url}, () => {})
    });
});

chrome.tabs.onActivated.addListener(function(info){
    chrome.tabs.get(info.tabId, function(tab) {
        console.log("Last page visited: " + tab.url);
        chrome.storage.sync.set({last_visited: tab.url}, () => {})
    });
})

