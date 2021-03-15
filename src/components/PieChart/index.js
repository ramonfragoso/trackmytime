import React from 'react';
import { Container } from './style';
import { Pie } from 'react-chartjs-2'
import {randomCssRgba} from "../../util";

const websiteNames = (data) => {
    let names = []
    for(let website of data){
        names.push(website.name)
    }
    return names;
}

const websiteTimes = (data) => {
    let times = []
    for(let website of data){
        times.push(website.timeSpent)
    }
    return times;
}

const generateRandomColors = (data) => {
    let times = 0;
    let backgroundColors = []
    let borderColors = []
    if(data.length >= 10){
        times = 10;
    }
    else times = data.length;
    for(let i = 0; i < times; i++){
        let color = randomCssRgba('0.7');
        backgroundColors.push(color);
        borderColors.push(color.replace("0.7", "1"));
    } 
    return {borderColors, backgroundColors}
}

const createData = (data) => {
    const colors = generateRandomColors(data);
    return {
        labels: websiteNames(data),
        datasets: [
          {
            label: 'Tempo decorrido: ',
            data: websiteTimes(data),
            backgroundColor: colors.backgroundColors,
            borderColor: colors.borderColors,
            borderWidth: 1,
          },
        ],
    }
}
  




const PieChart = ({data, darkMode}) => {
    const options = {
        legend: {
            position: 'left',
            labels: {
                fontColor: darkMode ? 'white' : "#151924"
            }
        },
        tooltips: { 
            callbacks: {
                    label: function(tooltipItem, data) {
                        var timestamp = data['datasets'][0]['data'][tooltipItem['index']]
                        var hours = Math.floor(timestamp / 60 / 60);
                        var minutes = Math.floor(timestamp / 60) - (hours * 60);
                        var seconds = timestamp % 60;
    
                        return hours + 'h' + minutes + 'm' + seconds + 's'
                    },
                    title: function(tooltipItem, data) {
                        return data['labels'][tooltipItem[0]['index']];
                    },
                }
        }
    }
    const chartData = createData(data);
    return (
        <Container>
            <h2 style={{color: darkMode ? "white" : "#151924"}}>Top 10 sites mais acessados (segundos)</h2>
            <div style={{width: '100%', height: '100%'}}>
                <Pie style={{border: 'solid green'}} data={chartData} options={options}/> 
            </div>
        </Container>
    )
}

export default PieChart;