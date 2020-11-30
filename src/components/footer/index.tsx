import styled from '@emotion/styled';
import LogoFazt from '@Assets/img/logoFazt.svg';
import IconInstagram from '@Assets/img/iconInstagram.svg';
import IconLinkedin from '@Assets/img/iconLinkedin.svg';
import IconFacebook from '@Assets/img/iconFacebook.svg';
import IconGithub from '@Assets/img/iconGithub.svg';
import IconYoutube from '@Assets/img/iconYoutube.svg';
import NewsletterShared from '../shared/newsletter';

const FooterStyled = styled.nav`
  height: max-content;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.ShadesDark[400]};
  padding-bottom: 150px;
  position: relative;
  ${({ theme }) => theme.Mediaquery.small} {
    padding-top: 150px;
  }
`;
const FooterContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.Mediaquery.medium} {
    width: 720px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
const FooterContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  ${({ theme }) => theme.Mediaquery.medium} {
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const FooterTitleStyled = styled.h5`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #fff;
  margin-bottom: 40px;
`;
const FooterSubTitleStyled = styled.a`
  text-decoration: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #e6e5e5;
  margin-bottom: 36px;
`;
const FaztTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h5 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #fff;
  }
  svg {
    margin-right: 10px;
  }
`;
const FaztFollowDesc = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #e6e5e5;
  max-width: 274px;
  margin-top: 30px;
  ${({ theme }) => theme.Mediaquery.medium} {
    text-align: left;
  }
`;
const FaztSocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  width: 250px;
`;

const FaztReservedDesc = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: #e6e5e5;
`;

const ComponentFooter: React.FC = () => {
  return (
    <FooterStyled>
      <FooterContainerStyled>
        <NewsletterShared />
        <FooterContentStyled>
          <FooterTitleStyled>Nosotros</FooterTitleStyled>
          <FooterSubTitleStyled href="/#">Blog</FooterSubTitleStyled>
          <FooterSubTitleStyled href="/#">Enterprise</FooterSubTitleStyled>
          <FooterSubTitleStyled href="/#">Bootcamp</FooterSubTitleStyled>
          <FooterSubTitleStyled href="/#">Cursos</FooterSubTitleStyled>
        </FooterContentStyled>
        <FooterContentStyled>
          <FooterTitleStyled>Contacto</FooterTitleStyled>
          <FooterSubTitleStyled href="/#">Parthers</FooterSubTitleStyled>
          <FooterSubTitleStyled href="/#">Afiliados</FooterSubTitleStyled>
        </FooterContentStyled>
        <FooterContentStyled>
          <FaztTitle>
            <LogoFazt />
            <h5> Fazt Tech</h5>
          </FaztTitle>
          <FaztFollowDesc>
            Siguenos en nuestras redes sociales para mantenerte informado de todas las novedades.
          </FaztFollowDesc>
          <FaztSocialContainer>
            <FooterSubTitleStyled href="/#">
              <IconInstagram />
            </FooterSubTitleStyled>
            <FooterSubTitleStyled href="/#">
              <IconLinkedin />
            </FooterSubTitleStyled>
            <FooterSubTitleStyled href="/#">
              <IconFacebook />
            </FooterSubTitleStyled>
            <FooterSubTitleStyled href="/#">
              <IconGithub />
            </FooterSubTitleStyled>
            <FooterSubTitleStyled href="/#">
              <IconYoutube />
            </FooterSubTitleStyled>
          </FaztSocialContainer>
          <FaztReservedDesc>© Fazt Tech 2021. All rights reserved.</FaztReservedDesc>
        </FooterContentStyled>
      </FooterContainerStyled>
    </FooterStyled>
  );
};

export default ComponentFooter;
