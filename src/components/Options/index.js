import React, { useState } from 'react'
import { Notifications } from '../Notifications'
import { Button, ButtonGroup, CSVButton } from './style'

export const Options = ({darkMode, setDarkMode, shouldMonitor, data}) => {

  const [isCounterOn, setIsCounterOn] = useState(shouldMonitor)
  const [openCreateNotification, setOpenCreateNotification] = useState(false);

  
  const handleDarkMode = () => {
      setDarkMode(!darkMode);
  }   

  const handleCounter = () => {
      console.log("@");
      chrome.storage.local.get(null, function(data){
          chrome.storage.local.set({"shouldMonitor": !isCounterOn, "last_visited": ""}, () => {})
      });
      chrome.runtime.sendMessage({ "newIconPath" : isCounterOn ? "logo192dark.png" : "logo128.png" });
      setIsCounterOn(!isCounterOn);
  }  

  const exportCsv = () => {
    const content = []

    Object.keys(data.data).map(day => {
        Object.keys(data.data[day]).map(website => {
            data.data[day][website].map(access => {
                const seconds = ((new Date(access['finish']) - new Date(access['start'])) / 60)
                const row = [day, website, seconds]
                content.push(row)
                return access
            })
            return website
        })
        return day
    })  
    return content;
  }

  const csvreport = {
    data: exportCsv(),
    headers: ["DIA", "WEBSITE", "TEMPO (SEGUNDOS)"],
    filename: 'TrackedTime.csv'
  }

  return (
    <ButtonGroup>
      <Button onClick={handleDarkMode}>{darkMode ? 'Desativar' : 'Ativar'} modo escuro</Button>      
      <Button onClick={handleCounter}>{isCounterOn ? 'Desativar' : 'Ativar'} contador</Button>      
      <CSVButton {...csvreport}>Exportar CSV</CSVButton>


      <Button onClick={() => setOpenCreateNotification(!openCreateNotification)}>Criar notificação</Button>
      {openCreateNotification && <Notifications data={data} darkMode={darkMode}/>}
    </ButtonGroup>
  )
}