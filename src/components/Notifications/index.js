import React, { useState } from 'react';
import { Website, Hours, Minutes, NotificationsList, Notification, Button, Container, Input, Select, TimeContainer, Time } from './style';
import {BsFillTrashFill} from 'react-icons/bs';

export const Notifications = props => {
  const { darkMode } = props
  const [notificationList, setNotificationList] = useState(props.data.notifications)
  const [website, setWebsite] = useState('')
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)

  const handleSubmit = (website, hour, minute) => {
    if(hasInvalidValues()) return
    const seconds = (hour*60*60) + (minute*60)
    const date = new Date()
    setNotificationList([{ website, hour, minute, seconds, createdAt: new Date(), notified: false }, ...notificationList])
    chrome.storage.local.set({notifications: [{ website, hour, minute, seconds, createdAt: date.toJSON(), notified: false }, ...notificationList]}, function() {
      console.log('Value is set to ' + notificationList.toString());
    });
  }

  const hasInvalidValues = () => {
    return website.trim()==='' || (hour===0 && minute===0)
  }

  
  const removeNotification = (index) => {
    let cur = [...notificationList];
    cur.splice(index, 1);
    setNotificationList(cur);
    chrome.storage.local.set({notifications: [...cur]}, function() {
      console.log('Value is set to ' + notificationList.toString());
    });
  }

  return (
    <Container>
      <Input darkMode={darkMode} onChange={e => setWebsite(e.target.value)} placeholder='Insira uma URL'/>

      <TimeContainer>
        <Select value={hour} darkMode={darkMode} onChange={option => setHour(option.target.value)} >
          {[...Array(24)].map((hour, index) => <option value={index}>{index + ' horas'}</option>)}
        </Select>
        <Select value={minute} darkMode={darkMode} onChange={option => setMinute(option.target.value)} >
          {[...Array(60)].map((minute, index) => <option value={index}>{index + ' minutos'}</option>)}
        </Select>
      </TimeContainer>
      <Button onClick={() => handleSubmit(website, hour, minute)}>Criar notificação</Button>

      <NotificationsList>
        {notificationList && notificationList.map((notification, index) => 
          <Notification darkMode={darkMode}>
            <Website>{notification.website}</Website>
            <Time>
              <Hours>{notification.hour + ' horas'}</Hours>
              <Minutes>{notification.minute + ' minutos'}</Minutes>
            </Time>
            <div style={{paddingRight: "10px", cursor: "pointer"}} onClick={() => {removeNotification(index)}}><BsFillTrashFill/></div>
          </Notification>
        )}
      </NotificationsList>
    </Container>
  )
}