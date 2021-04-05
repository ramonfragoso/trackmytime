import React, { useState } from 'react';
import { Website, Hours, Minutes, NotificationsList, Notification, Button, Container, Input, Select, TimeContainer, Time } from './style';

export const Notifications = props => {
  const { darkMode } = props
  const [notificationList, setNotificationList] = useState([])
  const [website, setWebsite] = useState('')
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)

  const handleSubmit = (website, hour, minute) => {
    if(hasInvalidValues()) return
    const seconds = (hour*60*60) + (minute*60)
    setNotificationList([...notificationList, { website, hour, minute, seconds }])
  }

  const hasInvalidValues = () => {
    return website.trim()==='' || (hour===0 && minute===0)
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
        {notificationList.map(notification => 
          <Notification darkMode={darkMode}>
            <Website>{notification.website}</Website>
            <Time>
              <Hours>{notification.hour + ' horas'}</Hours>
              <Minutes>{notification.minute + ' minutos'}</Minutes>
            </Time>
          </Notification>
        )}
      </NotificationsList>
    </Container>
  )
}