import React from 'react';
import { Container } from './style';
import { HorizontalBar } from 'react-chartjs-2'
import {randomCssRgba} from "../../util";

const logDates = (data) => {
  let dates = []
  for(let log of data){
      dates.push(log.date)
  }
  return dates;
}

const logTimeSpent = (data) => {
  let times = []
  for(let log of data){
      times.push(log.timeSpent)
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
    labels: logDates(data),
    datasets: [
      {
        data: logTimeSpent(data),
        backgroundColor: colors.backgroundColors,
        borderColor: colors.borderColors,
        borderWidth: 1,
      },
    ],
  }
}

  
  const options = {
    legend: {
        display: false,
        labels: {
            fontColor: 'white'
        }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
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
          }
  }
  }

const Top10 = ({data, darkMode}) => {
  
  const options = {
    legend: {
        display: false,
        labels: {
            fontColor: darkMode ? 'white' : "#151924"
        }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
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
          }
  }
  }
    return (
        <Container>    
            <h2 style={{color: darkMode ? "white" : "#151924"}}>Quanto tempo você passou em cada dia:</h2>
            <HorizontalBar darkMode={darkMode} data={createData(data)} options={options} />
        </Container>
    )
}

export default Top10;