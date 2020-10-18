import React, { useState } from 'react';
import { Container } from './style';
import { Chart} from "react-google-charts";


const BarChart = () => {
    const [options, setOptions] = useState({
        title: 'Sites mais acessados'
      })
      const [data, setDataBar] = useState([
        ['Sites', 'Acessos'],
        ['Google', 100],
        ['Youtube', 80],
        ['Facebook', 50],
      ])

    return (
        <Container>
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="Bar"
            data={data}
            options={options}
        />
        </Container>
    )
}

export default BarChart;