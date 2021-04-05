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


const notifyMe = (data) => {
    var timestamp = new Date().getTime();
    var id = 'trackmytime' + timestamp;
    console.log(data)
    chrome.notifications.create(id, {title: "Alerta de tempo", type: "basic", iconUrl: "logo128.png", message: `Você passou ${data.hour} hora(s) e ${data.minute} minuto(s) em ${data.website}!`}, (notificationId) => {
        console.log(notificationId)
        console.log("Last error:", chrome.runtime.lastError); 
    })
}

const getWebsiteIndex = (lastVisited, notifications) => {
    for(let i = 0; i < notifications.length; i++){
        if(notifications[i].website === lastVisited){
            return i;
        }
    }
    return -1;
}

const checkNotification = () => {
    chrome.storage.local.get(['notifications', 'last_visited'], function(data){
        console.log(data);
        const lastVisited = data.last_visited.split("://")[1].split("/")[0];
        const websiteIndex = getWebsiteIndex(lastVisited, data.notifications);
        if(websiteIndex != "-1"){
            let cur = [...data.notifications];
            cur[websiteIndex] = {...cur[websiteIndex], seconds: cur[websiteIndex].seconds - 1};
            if(cur[websiteIndex].seconds == 0){
                let notifyWebsite = cur.splice(websiteIndex, 1)[0]
                notifyMe(notifyWebsite);
            }
            chrome.storage.local.set({'notifications': cur}, function() {
                console.log('Value is set to ' + cur);
              });
        }
        console.log(lastVisited);
        console.log(data.notifications);
        console.log(websiteIndex);
    })
}

const initBackgroundInterval = () => {
    setInterval(() => {
        checkNotification();
    }, 1000);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.browserAction.setIcon({
            path: request.newIconPath
        });
    });

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

initBackgroundInterval();