import React, { useState } from 'react';
import { TabsContainer, Tab, Buttons, Content } from './styledComponents';

export const Tabs = props => {
  const [activeTab, setActiveTab] = useState(1);
  const {tab1, tab2, darkMode} = props;

  return (
    <TabsContainer>
      <Buttons>
        <Tab active={activeTab===1} onClick={() => setActiveTab(1)} darkMode={darkMode}>Opções</Tab>
        <Tab active={activeTab===2} onClick={() => setActiveTab(2)} darkMode={darkMode}>Gráficos</Tab>
      </Buttons>
      {activeTab===1 ?
        <Content>
          {tab1}
        </Content>      
      :
        <Content>
          {tab2}
        </Content>
      }
    </TabsContainer>
  )
}