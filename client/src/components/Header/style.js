import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;    
    justify-content:space-between;
    padding-top: 10px;
    height: 80px;
`;

export const Icon = styled.img`
    width: 78px;
    height: 78px;
    margin-right: 20px;
`;

export const Title = styled.div`
    font-size: 200%;
    color: white;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100%;
`;

export const StyledLink = styled.div`
    user-select: none;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 120%;
    margin: 0px 20px;
    transition: ease-in-out .1s;
    height: 100%;
    &:hover {
        cursor: pointer;
        color: white;
    }
`; 