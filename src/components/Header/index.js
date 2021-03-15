import React, { useState } from 'react';
import { Container, Icon, Title, Label, Left, Right, StyledLink, BulbIcon } from './style';
import Switch from "react-switch";
import image from './icon.png';
import on from './bulbOn.png';
import off from './bulbOff.png';

const Header = () => {

    const [darkMode, setDarkMode] = useState(true)
    const [isCounterOn, setIsCounterOn] = useState(true)

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
        //TODO : MUDAR DE FATO O MODO NEGRO
    }   

    const handleCounter = () => {
        setIsCounterOn(!isCounterOn);
        //TODO : LIGAR OU DESLIGAR O CONTADOR
    }  

    return (
        <Container>
            <Left>
                <Icon src={image}/>
                <Title>TrackMyTime</Title>
            </Left>
            <Right>
                <StyledLink>
                    <Label>ON/OFF</Label>
                    <Switch 
                        height={20} 
                        width={45} 
                        checkedHandleIcon={null} 
                        uncheckedHandleIcon={null} 
                        checkedIcon={null} 
                        uncheckedIcon={null} 
                        onChange={handleCounter} checked={isCounterOn} 
                    />
                </StyledLink>
                {darkMode ? <BulbIcon src={on} onClick={handleDarkMode}/> : <BulbIcon src={off} onClick={handleDarkMode}/> }    
            </Right>
        </Container>
    )
}

export default Header;