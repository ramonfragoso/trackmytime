import React from 'react';
import { Container } from './style';
import { Pie } from 'react-chartjs-2'

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

const options = {
    legend: {
        position: 'left',
        labels: {
            fontColor: 'white'
        }
    }
}

const PieChart = () => {

    return (
        <Container>
            <h2>Top 10 sites mais acessados</h2>
            <div style={{width: '100%', height: '100%'}}>
                <Pie style={{border: 'solid green'}} data={data} options={options}/> 
            </div>
        </Container>
    )
}

export default PieChart;