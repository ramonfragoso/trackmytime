import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;    
    justify-content:space-between;
    padding-top: 20px;
`;

export const Icon = styled.img`
    width: 65px;
    height: 65px;
    margin-right: 20px;
`;

export const BulbIcon = styled.img`
    width: 50px;
    height: 50px;
`;

export const Label = styled.div`
    margin: 10px 0px;
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
    justify-content: center;
    flex-direction: column;
    font-weight: 400;
    font-size: 120%;
    margin: 0px 20px;
    transition: ease-in-out .1s;
    height: 100%;
    color: white;
    &:hover {
        cursor: pointer;
    }
`; 