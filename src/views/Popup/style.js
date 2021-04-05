import styled from 'styled-components';
import theme from './theme';

export const StyledApp = styled.div`
    height: 100%;
    width: 500px;
    color: ${theme.colors.text};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    font-weight: 900;
    background: ${(props) => props.darkMode ? "#151924" : "eee"};
    padding: 0px 20px;
    transition: ease-in-out .2s;
`;

export const Title = styled.div`
    font-size: 300%;
    font-weight: 900;
    padding: 5px 0px 0px 0px;
    color: ${props => props.darkMode ? "white": "#151924"};
`;

export const Charts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    margin-top: 20px;
`;