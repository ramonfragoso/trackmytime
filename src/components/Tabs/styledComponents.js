import styled from 'styled-components';

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
`

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => {
    if(props.darkMode) return props.active ? 'white' : '#D1D1D1';
    return props.active ? '#151924' : '#252a36';
  }};
  font-weight: normal;
  transition: ease-in-out .2s;
  font-size: 15px;
  marginTop: 20px;
  user-select: none;
  border-bottom: 2px solid ${props => {
    if(props.darkMode) return props.active ? 'white' : '#D1D1D1';
    return props.active ? '#151924' : '#252a36';
  }};
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
    color: white;
  }
`

export const Buttons = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
export const Content = styled.div`
  display: flex;
  aling-items: flex-start;
`