import React, { useState } from 'react';
import { Container, Icon, Title, Label, Left, Right, StyledLink, BulbIcon } from './style';
import Switch from "react-switch";
import image from './icon.png';
import on from './bulbOn.png';
import off from './bulbOff.png';

const Header = ({darkMode, setDarkMode, shouldMonitor}) => {

    const [isCounterOn, setIsCounterOn] = useState(shouldMonitor)

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
        //TODO : MUDAR DE FATO O MODO DARK
    }   

    const handleCounter = () => {
        chrome.storage.local.get(null, function(data){
            chrome.storage.local.set({"shouldMonitor": !isCounterOn, "last_visited": ""}, () => {})
        });
        chrome.runtime.sendMessage({ "newIconPath" : isCounterOn ? "logo192dark.png" : "logo128.png" });
        setIsCounterOn(!isCounterOn);
        
        //TODO : LIGAR OU DESLIGAR O CONTADOR
    }  

    return (
        <Container>
            <Left>
                <Icon src={image}/>
                <Title darkMode={darkMode}>TrackMyTime</Title>
            </Left>
            <Right>
                <StyledLink>
                    <Label darkMode={darkMode}>ON/OFF</Label>
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