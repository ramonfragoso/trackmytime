import { CSVLink } from 'react-csv';
import styled from 'styled-components';
import theme from '../../views/Popup/theme';

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  min-height: 75vh;
`

export const Button = styled.a`
  border-radius: 8px;
  padding: 15px;
  color: white;
  font-size: 120%;
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

export const CSVButton = styled(CSVLink)`
  border-radius: 8px;
  padding: 15px;
  color: white;
  font-size: 120%;
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