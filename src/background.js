/* global chrome */
/* global storage */
import {formatDate} from './util';

function helper(url){
    let arr = url.split('/')
    if(arr.length >= 2 && arr[0] == "https:"){
        return arr[2];
    }
    return "";
}

chrome.runtime.onInstalled.addListener(function(details){
    chrome.storage.local.set({
        shouldMonitor: true,
        data: {
        },
        last_visited: "" 
    })
    /*
    'shouldMonitor': false,
    'data': {
        '10-10-2020': {
            'youtube.com': [{
                'start': '123123123',
                'finish': '123123126',
            }]
        }
    }
    */ 
})

function handler(details) {
    chrome.storage.local.get(['shouldMonitor'], function(data){
        if(data.shouldMonitor){
            chrome.tabs.get(details.tabId, function(tab) {
                chrome.storage.local.get(['last_visited'], function(data){
                    let last_visited = helper(data.last_visited);
                    if(last_visited){
                        chrome.storage.local.get(['data'], function(result){
                            let data = result.data;
                            let date = Date.now();
                            let formattedDate = formatDate(date);
                            if(data[formattedDate] && data[formattedDate][last_visited]){
                                let size = data[formattedDate][last_visited].length
                                data[formattedDate][last_visited][size-1]['finish'] = date;
                                data[formattedDate][last_visited].push({'finish': '', 'start': ''});
                            }
                            chrome.storage.local.set({last_visited: tab.url}, function(){
                                let last_visited = helper(tab.url)
                                if(last_visited){

                                    if(!data[formattedDate]){
                                        data[formattedDate] = {}
                                    }
        
                                    if(!data[formattedDate][last_visited]){
                                        data[formattedDate][last_visited] = [{'start': date, 'finish': ''}] 
                                    }
                                    
                                    let size = data[formattedDate][last_visited].length
                                    data[formattedDate][last_visited][size-1]['start'] = date;
        
        
                                    chrome.storage.local.set({data: data}, () => {})
                                }
                            })
                        })
                    }
                    else{
                        chrome.storage.local.set({last_visited: tab.url}, () => {})
                    }
                })                
            });
        }
    })
}

chrome.webNavigation.onCompleted.addListener(function(details) {
    handler(details);
});

chrome.tabs.onActivated.addListener(function(details){
    handler(details);
})

