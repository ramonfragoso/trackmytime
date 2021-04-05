import React from 'react';
import { Container, Icon, Title } from './style';
import image from './icon.png';

const Header = ({darkMode}) => {
    return (
        <Container>
                <Icon src={image}/>
                <Title darkMode={darkMode}>TrackMyTime</Title>
        </Container>
    )
}

export default Header;