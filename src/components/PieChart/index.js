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

const data = {
    labels: [
        'http://facebook.com',
        'http://web.whatsapp.com',
        'http://instagram.com',
        'http://atcoder.jp',
        'http://classroom.google.com',
        'http://codeforces.com',
        'http://trackmytime.com',
        'http://youtube.com',
        'http://incodde.com',
        'http://duuo.club',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 5, 34, 54, 23],
        backgroundColor: [
            'rgba(255, 192, 127, 0.7)',
            'rgba(122, 84, 46, 0.7)',
            'rgba(129, 108, 97, 0.7)',
            'rgba(34, 116, 165, 0.7)',
            'rgba(4, 114, 77, 0.7)',
            'rgba(116, 139, 117, 0.7)',
            'rgba(229, 99, 153, 0.7)',
            'rgba(244, 211, 94, 0.7)',
            'rgba(191, 215, 234, 0.7)',
            'rgba(254, 206, 233, 0.7)',
        ],
        borderColor: [
          'rgba(255, 192, 127, 1)',
          'rgba(122, 84, 46, 1)',
          'rgba(129, 108, 97, 1)',
          'rgba(34, 116, 165, 1)',
          'rgba(4, 114, 77, 1)',
          'rgba(116, 139, 117, 1)',
          'rgba(229, 99, 153, 1)',
          'rgba(244, 211, 94, 1)',
          'rgba(191, 215, 234, 1)',
          'rgba(254, 206, 233, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

const createData = (data) => {
    const colors = generateRandomColors(data);
    return {
        labels: websiteNames(data),
        datasets: [
          {
            label: '# of Votes',
            data: websiteTimes(data),
            backgroundColor: colors.backgroundColors,
            borderColor: colors.borderColors,
            borderWidth: 1,
          },
        ],
    }
}
  

const options = {
    legend: {
        position: 'left',
        labels: {
            fontColor: 'white'
        }
    }
}


const PieChart = ({data}) => {
    const chartData = createData(data);
    return (
        <Container>
            <h2>Top 10 sites mais acessados (segundos)</h2>
            <div style={{width: '100%', height: '100%'}}>
                <Pie style={{border: 'solid green'}} data={chartData} options={options}/> 
            </div>
        </Container>
    )
}

export default PieChart;