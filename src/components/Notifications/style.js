import styled from 'styled-components'
import theme from '../../views/Popup/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 10px;
`

export const Input = styled.input`
  padding: 10px;
  font-size: 110%;
  border-radius: 10px;
  border: none;
  width: 300px;
  background: ${props => props.darkMode ? '#151424' : 'white'};
  font-family: 'Montserrat';
  margin: 10px 0px;
  color: ${props => props.darkMode ? 'white' : '#151424'};
`

export const Button = styled.a`
  border-radius: 8px;
  padding: 9px;
  color: white;
  font-size: 95%;
  font-weight: normal;
  background-color: ${theme.colors.buttonColor};
  opacity: 0.7;
  transition: ease-in-out .1s;
  user-select: none;
  text-decoration: none;    
  width: 250px;
  text-align: center;
  margin: 20px 0px;
  &:hover {
      cursor: pointer;
      opacity: 1;
  }
`

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
`

export const Select = styled.select`
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin: 0px 5px;
  font-family: 'Montserrat';
  background: ${props => props.darkMode ? '#151424' : 'white'};
  color: ${props => props.darkMode ? 'white' : '#151424'};
`

export const NotificationsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  font-weight: normal;
  font-size: 130%;
  margin-bottom: 50px;
`
export const Notification = styled.div`  
  display: flex;
  flex-direction: row; 
  justify-content: space-between;    
  padding: 10px 0px;
  width: 330px;
  border: 1px solid;
  color: ${props => props.darkMode ? 'white' : '#151424'};

`

export const Time = styled.div`  
  display: flex;
  flex-direction: row; 
  justify-content: flex-end;
`

export const Website = styled.div`
  padding: 0px 7px;
`

export const Hours = styled.div`
  padding: 0px 7px;

`

export const Minutes = styled.div`
  padding: 0px 7px;
`
