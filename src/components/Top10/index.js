import React from 'react';
import { Container } from './style';
import { HorizontalBar } from 'react-chartjs-2'

const data = {
    labels: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sábado',
    ],    
    datasets: [
      {
        data: [12, 19, 3, 5, 4, 3,6,4,4,4],
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
  }

const Top10 = () => {

    return (
        <Container>    
            <h2>Quanto tempo você passou em cada dia:</h2>
            <HorizontalBar data={data} options={options} />
        </Container>
    )
}

export default Top10;