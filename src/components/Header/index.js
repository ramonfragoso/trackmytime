import React from 'react';
import { Container, Icon, Title, Left, Right, StyledLink } from './style';
import image from './icon.png';

const Header = () => {

    return (
        <Container>
            <Left>
                <Icon src={image}/>
                <Title>TrackMyTime</Title>
            </Left>
            <Right>
                <StyledLink>Contato</StyledLink>
                <StyledLink>Equipe</StyledLink>
            </Right>
        </Container>
    )
}

export default Header;