import React, { useState } from 'react';
import { StyledApp, Title, Charts } from './style';
import Header from './components/Header';
import Menu from './components/Menu';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import Top10 from './components/Top10';
const App = () => {

    const [range, setRange] = useState('all');

    return (
        <StyledApp>
            <Header/>
            <Title>Suas estatísticas</Title>
            <Menu range={range} setRange={setRange}/>
            <Charts>
                <PieChart/>
                <BarChart/>
            </Charts>
            <Top10/>
        </StyledApp>
    )
}

export default App;