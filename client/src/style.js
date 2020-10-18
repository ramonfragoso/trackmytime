import styled from 'styled-components';
import theme from './theme';

export const StyledApp = styled.div`
    height: 100%;
    width: 75%;
    color: ${theme.colors.text};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    font-weight: 900;

    @media (max-width: 1366px) {
        width: 85%;
    }
`;

export const Title = styled.div`
    font-size: 300%;
    font-weight: 900;
    padding: 40px 0px 0px 0px;
    color: white;
`;

export const Charts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 20px;
`;