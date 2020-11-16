import React from 'react';
import { Container, Title, ButtonGroup, Button } from './style';

const Menu = ({range, setRange}) => {

    return (
        <Container>
            <Title>Selecione o período de tempo que você deseja visualizar seus dados:</Title> 
            <ButtonGroup>
                <Button isSelected={range==='today'} onClick={() => setRange('today')}>Hoje</Button>
                <Button isSelected={range==='week'} onClick={() => setRange('week')}>Há uma semana</Button>
                <Button isSelected={range==='month'} onClick={() => setRange('month')}>Há um mês</Button>
                <Button isSelected={range==='all'} onClick={() => setRange('all')}>Todo o período</Button>
            </ButtonGroup>
        </Container>
    )
}

export default Menu;