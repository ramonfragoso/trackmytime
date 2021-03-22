import styled from 'styled-components';
import theme from '../../views/Popup/theme';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    padding-top: 10px;
    font-weight: 500;
`;

export const ButtonGroup = styled.div`
    padding-top: 20px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
`;

export const Button = styled.div`
    border-radius: 15px;
    padding: 10px;
    color: white;
    font-size: 80%;
    margin-right: 15px;
    background-color: ${theme.colors.buttonColor};
    opacity: ${props => props.isSelected ? 1: 0.7};
    transition: ease-in-out .1s;
    user-select: none;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }

`;