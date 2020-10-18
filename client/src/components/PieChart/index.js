import React from 'react';
import { Container } from './style';
import { Chart} from "react-google-charts";


const PieChart = () => {
    const [options, setOptions] = React.useState({
        title: 'Sites mais acessados'
      })
      const [data, setData] = React.useState([
        ['Linguagens', 'Quantidade'],
        ['Google', 100],
        ['Youtube', 80],
        ['Facebook', 50],
      ])
    
    return (
    <Container>
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={data}
            options={options}
        />
    </Container>   
      );
}

export default PieChart;