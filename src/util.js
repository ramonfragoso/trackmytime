import {SECOND_IN_MILLIS, DAY_IN_MILLIS} from "./constants";

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomByte = () => randomNumber(0, 255)
const randomCssRgba = (opacity) => `rgba(${[randomByte(), randomByte(), randomByte(), opacity].join(',')})`

const sortComparator = (a, b) => {
    return b['timeSpent'] - a['timeSpent'];
}

const sortAndSlice = (ans) =>{
    let aux = ans.sort(sortComparator);
    if(aux.length > 10){
        return aux.slice(0,10);
    }
    return aux;
}

const getLastNDays = (days) => {
    let date = Date.now();
    let dates = [];
    for(let i = 0; i < days; i++){
        dates.push(formatDate(date));
        date -= DAY_IN_MILLIS;
    }
    return dates;
}


const getIndex = (data, query) => {
    for(let i = 0; i < data.length; i++){
        if(data[i].name == query) return i;
    }
    return -1;
}

const pluckWebsiteObject = (main, aditional) => {
    for(let website of aditional){
        let index = getIndex(main, website.name);
        if(index >= 0){
            main[index].timeSpent += website.timeSpent;
        }
        else{
            main.push(website)
        }
    }
    return main;
}

const parseDayInfo = (data, day) => {
    if(data[day]){
        let websites = [];
        for(let key of Object.keys(data[day+""])){
            let logs = data[day+""][key];
            let timeSpentInMillis = 0;
            for(let log of logs){
                if(typeof(log["finish"]) == "number" && typeof(log["start"]) == "number"){
                    timeSpentInMillis += log["finish"] - log["start"]
                }
            }
            let timeSpentInSeconds =  parseInt(timeSpentInMillis / SECOND_IN_MILLIS);
            websites.push({name: key, timeSpent: timeSpentInSeconds})
        }
        return(websites);
    }
    return [];
}

const totalTimeSpentOnDate = (data, day) =>{
    const info = parseDayInfo(data, day);
    let time = 0;
    for(let log of info){
        time += log.timeSpent;
    }
    return time;
}

const parseTop10Today = (info) => {
    console.log("today");
    const data = info.data;
    const today = formatDate(Date.now());
    if(data[today]){
        let websites = [];
        for(let key of Object.keys(data[today+""])){
            let logs = data[today+""][key];
            let timeSpentInMillis = 0;
            for(let log of logs){
                if(typeof(log["finish"]) == "number" && typeof(log["start"]) == "number"){
                    timeSpentInMillis += log["finish"] - log["start"]
                }
            }
            let timeSpentInSeconds =  parseInt(timeSpentInMillis / SECOND_IN_MILLIS);
            websites.push({name: key, timeSpent: timeSpentInSeconds})
        }
        return(sortAndSlice(websites));
    }
    return [];
}

const parseTop10LastWeek = (info) => {
    console.log("last week");
    const data = info.data;
    const dates = getLastNDays(7);
    let ans = [];
    for(let date of dates){
        ans = pluckWebsiteObject(ans, parseDayInfo(data, date));
    }
    return sortAndSlice(ans);
}

const parseTop10LastMonth = (info) => {
    console.log("last month");
    const data = info.data;
    const dates = getLastNDays(30);
    let ans = [];
    for(let date of dates){
        ans = pluckWebsiteObject(ans, parseDayInfo(data, date));
    }
    return sortAndSlice(ans);
}

const parseTop10AllPeriod = (info) => {
    console.log("all time");
    const data = info.data;
    const dates = Object.keys(data);
    let ans = [];
    for(let date of dates){
        ans = pluckWebsiteObject(ans, parseDayInfo(data, date));
    }
    return sortAndSlice(ans);
}

const parseTimeLastWeek = (info) => {
    const data = info.data;
    const dates = getLastNDays(7);
    let ans = [];
    for(let date of dates){
        ans.push({date: date, timeSpent: totalTimeSpentOnDate(data, date)})
    }
    return ans;
}


export {formatDate, randomCssRgba, parseTop10Today, parseTop10LastWeek, parseTop10LastMonth, parseTop10AllPeriod, parseTimeLastWeek};