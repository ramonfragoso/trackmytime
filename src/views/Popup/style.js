import styled from 'styled-components';
import theme from './theme';

export const StyledApp = styled.div`
    height: 100%;
    width: 100%;
    color: ${theme.colors.text};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    font-weight: 900;
    background: #151924;
    padding: 0px 20px;
`;

export const Title = styled.div`
    font-size: 300%;
    font-weight: 900;
    padding: 40px 0px 0px 0px;
    color: white;
`;

export const Charts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 20px;
`;