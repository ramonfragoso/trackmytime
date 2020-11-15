import React, { useState } from 'react';
import { StyledApp, Title, Charts } from './style';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PieChart from '../../components/PieChart';
import Top10 from '../../components/Top10';

const App = (props) => {

    const [range, setRange] = useState('all');
    const { data } = props;
    return (
        <StyledApp>
            <Header/> 
            <Title>Suas estatísticas</Title>
            <Menu range={range} setRange={setRange}/>
            <Charts>
                <PieChart data={data}/>
                <Top10 data={data}/>
            </Charts>
        </StyledApp>
    )
}

export default App;