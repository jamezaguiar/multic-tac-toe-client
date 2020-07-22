import React from 'react';
import logo from '../../assets/logo.svg';
import { Container, LogoContainer } from './styles';

const Header: React.FC = ({ children }) => (
  <Container>
    <LogoContainer>
      <img src={logo} alt="Logo" />
    </LogoContainer>
    {children}
  </Container>
);

export default Header;
