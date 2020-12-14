import styled from '@emotion/styled';
import LogoFazt from '@Assets/img/logoFazt.svg';
import Menu from '@Assets/img/menu.svg';
import { useState } from 'react';

type SidebarProps = {
  sidebarStatus: boolean;
};
const NavigationStyled = styled.nav`
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.ShadesDark[400]};
  position: fixed;
  padding: 20px 15px;
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    padding: 20px 30px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    padding: 20px 40px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    background-color: #22222e;
  }
  top: 0;
  z-index: ${({ theme }) => theme.Zindex.zFixed};
`;
const NavigationContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavigationOptionsStyled = styled.div`
  display: flex;
  align-items: center;
  span {
    font: normal normal 1rem/19px 'Roboto';
    color: #ffffff;
    margin-right: 2rem;
    &:hover {
      color: ${({ theme }) => theme.Colors.ColorsMain.base};
    }
    &:last-child {
      margin-right: 0;
    }
    cursor: pointer;
    transition: color 0.2s;
  }
  button {
    display: flex;
    background-color: transparent;
    border: none;
    z-index: ${({ theme }) => theme.Zindex.zModal};
    ${({ theme }) => theme.Mediaquery.medium} {
      display: none;
    }
  }
`;
const NavigationOptionsFullStyled = styled.div`
  display: none;
  align-items: center;
  span {
    font: normal normal 1rem/19px 'Roboto';
    color: #ffffff;
    margin-right: 2rem;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    display: flex;
  }
`;

const SideBarStyled = styled.div<SidebarProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${({ theme }) => theme.Colors.ShadesDark[400]};
  top: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 70px;
  visibility: ${(props) => (props.sidebarStatus ? 'visible' : 'none')};
  transition: all 0.3s;
  transform: ${(props) => (props.sidebarStatus ? 'translateY(0)' : 'translateY(-100%)')};
  span {
    font: normal normal 1rem/19px 'Roboto';
    color: #ffffff;
    margin-bottom: 50px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    display: none;
  }
`;

const ComponentNavigation: React.FC = () => {
  const [sideBar, setsideBar] = useState(false);
  return (
    <NavigationStyled>
      <NavigationContainerStyled>
        <LogoFazt />
        <NavigationOptionsStyled>
          <span>Contactos</span>
          <span>Servicios</span>
          <NavigationOptionsFullStyled>
            <span>Blog</span>
            <span>Cursos</span>
            <span>Comunidad</span>
          </NavigationOptionsFullStyled>
          <button type="button" onClick={() => setsideBar(!sideBar)}>
            <Menu />
          </button>
        </NavigationOptionsStyled>
      </NavigationContainerStyled>
      <SideBarStyled sidebarStatus={sideBar}>
        <span>Contactos</span>
        <span>Servicios</span>
        <span>Blog</span>
        <span>Cursos</span>
        <span>Comunidad</span>
      </SideBarStyled>
    </NavigationStyled>
  );
};

export default ComponentNavigation;
