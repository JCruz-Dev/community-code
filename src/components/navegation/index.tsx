import styled from '@emotion/styled';
import LogoFazt from '@Assets/img/logoFazt.svg';
import Menu from '@Assets/img/menu.svg';
import { useState } from 'react';

type NavigationTypes = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent';
};

const NavigationStyled = styled.nav<NavigationTypes>`
  height: 90px;
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
  top: 0;
  z-index: ${({ theme }) => theme.Zindex.zFixed};
`;
const NavigationContainerStyled = styled.div<NavigationTypes>`
  height: 100%;
  width: 100%;
  max-width: 1140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavigationOptionsStyled = styled.div<NavigationTypes>`
  display: flex;
  align-items: center;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
    font-size: 16px;
    line-height: 19px;
    margin-right: 20px;
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
const NavigationOptionsFullStyled = styled.div<NavigationTypes>`
  display: none;
  align-items: center;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
    font-size: 16px;
    line-height: 19px;
    margin-right: 20px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    display: flex;
  }
`;

const SideBarStyled = styled.div<NavigationTypes>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${({ theme }) => theme.Colors.ShadesDark[400]};
  top: 0;
  width: 100vw;
  height: 100vh;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #ffffff;
    font-size: 25px;
    line-height: 31px;
    margin-bottom: 50px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    display: none;
  }
`;

const ComponentNavigation: React.FC<NavigationTypes> = () => {
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
      {sideBar && (
        <SideBarStyled>
          <span>Contactos</span>
          <span>Servicios</span>
          <span>Blog</span>
          <span>Cursos</span>
          <span>Comunidad</span>
        </SideBarStyled>
      )}
    </NavigationStyled>
  );
};

export default ComponentNavigation;
