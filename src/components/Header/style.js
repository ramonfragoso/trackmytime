import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;    
    justify-content:center;
    padding-top: 20px;
    margin-bottom: 20px;
`;

export const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`;

export const Title = styled.div`
    font-size: 200%;
    color: ${props => props.darkMode ? "white" : "#151924"};
`;
