import React, { useState } from 'react';
import { StyledApp, Title, Charts } from './style';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import PieChart from '../../components/PieChart';
import Top10 from '../../components/Top10';
import { parseTop10Today, parseTop10LastWeek, parseTop10LastMonth, parseTop10AllPeriod, parseTimeLastWeek } from '../../util';

const App = (props) => {
    const [darkMode, setDarkMode] = useState(true)
    console.log(props);
    const [range, setRange] = useState('all');
    const { data } = props;
    const parser = {
        'today': parseTop10Today,
        'week': parseTop10LastWeek,
        'month': parseTop10LastMonth,
        'all': parseTop10AllPeriod
    }
    return (
        <StyledApp darkMode={darkMode}>
            <Header shouldMonitor={data.shouldMonitor} darkMode={darkMode} setDarkMode={setDarkMode} data={data}/>
            <Title darkMode={darkMode}>Suas estatísticas</Title>
            <Menu darkMode={darkMode} range={range} setRange={setRange}/>
            <Charts>
                <PieChart darkMode={darkMode} data={parser[range](data)}/>
                <Top10 darkMode={darkMode} data={parseTimeLastWeek(data)}/>
            </Charts>
        </StyledApp>
    )
}

export default App;