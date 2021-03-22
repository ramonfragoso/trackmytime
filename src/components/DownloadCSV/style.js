import styled from 'styled-components'
import theme from '../../views/Popup/theme'
import { CSVLink } from 'react-csv'
import { ReactComponent as DownloadIcon } from './download.svg' 

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

export const Button = styled(CSVLink)`
    border-radius: 15px;
    padding: 10px;
    color: white;
    font-size: 80%;
    margin-right: 15px;
    background-color: ${theme.colors.buttonColor};
    opacity: ${props => props.isSelected ? 1: 0.7};
    transition: ease-in-out .1s;
    user-select: none;
    text-decoration: none;
    font-weight: normal;
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`;

export const Icon = styled(DownloadIcon)`
    width: 11px;
    height: 11px;
`