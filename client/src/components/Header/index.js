import React from 'react';
import { Container, Icon, Title, Left, Right, StyledLink } from './style';

const Header = () => {

    return (
        <Container>
            <Left>
                <Icon src={require("../../assets/icon.png")}/>
                <Title>TrackMyTime</Title>
            </Left>
            <Right>
                <StyledLink>Contato</StyledLink>
                <StyledLink>Apoie-nos</StyledLink>
                <StyledLink>Equipe</StyledLink>
                <StyledLink>FAQ</StyledLink>
            </Right>
        </Container>
    )
}

export default Header;