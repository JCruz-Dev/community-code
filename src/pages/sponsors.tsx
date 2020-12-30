import MainTemplate from '@Src/components/template/mainTemplate';
import UnitedImg from '@Assets/img/united.svg';
import styled from '@emotion/styled';

import ButtonShared from '@Shared/button';
import FollowersItem from '@Src/components/sponsors/sponsorStyled/FollowersItem';
import Sponsor1 from '@Assets/img/sponsor1.svg';
import Sponsor2 from '@Assets/img/sponsor2.svg';
import Sponsor3 from '@Assets/img/sponsor3.svg';
import Sponsor4 from '@Assets/img/sponsor4.svg';
import Sponsor5 from '@Assets/img/sponsor5.svg';
import Sponsor6 from '@Assets/img/sponsor6.svg';
import ContentLimit from '@Src/components/sponsors/sponsorStyled/ContentLimit';
import FollowersItemsContainer from '@Src/components/sponsors/sponsorStyled/FollowersItemsContainer';
import MainContent from '@Src/components/sponsors/sponsorStyled/MainContent';
import FormContainer from '@Src/components/sponsors/sponsorStyled/FormContainer';
import HeaderContent from '@Src/components/sponsors/sponsorStyled/HeaderContent';
import MainHeaderContainer from '@Src/components/sponsors/sponsorStyled/MainHeaderContainer';
import SponsorContainer from '@Src/components/sponsors/sponsorStyled/SponsorContainer';
import SponsorImages from '@Src/components/sponsors/sponsorStyled/SponsorImages';
import { useForm } from 'react-hook-form';

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #22222e;
  h1,
  h2,
  h3 {
    color: white;
    font-weight: 500;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 1.5625rem;
    ${({ theme }) => theme.Mediaquery.small} {
      max-width: 55%;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (min-width: 834px) {
      font-size: ${({ theme }) => theme.Texts.Big.FontSize};
    }
    ${({ theme }) => theme.Mediaquery.extralarge} {
      margin-left: initial;
      margin-right: initial;
      font-size: 39.06px;
      max-width: 653px;
    }
  }
  h2,
  h3 {
    font-size: 1.25rem;
  }
  h2 {
    margin-bottom: 1rem;
    @media screen and (min-width: 834px) {
      font-size: ${({ theme }) => theme.Texts.Medium.FontSize};
    }
    ${({ theme }) => theme.Mediaquery.extralarge} {
      font-size: ${({ theme }) => theme.Texts.Big.FontSize};
      padding-top: 4rem;
    }
  }
  h3 {
    ${({ theme }) => theme.Mediaquery.extralarge} {
      font-size: ${({ theme }) => theme.Texts.Medium.FontSize};
    }
  }
  p {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.Colors.ShadesWhite[300]};
    ${({ theme }) => theme.Mediaquery.small} {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (min-width: 834px) {
      font-size: ${({ theme }) => theme.Texts.SemiMedium.FontSize};
    }
    ${({ theme }) => theme.Mediaquery.extralarge} {
      max-width: 650px;
      font-size: ${({ theme }) => theme.Texts.SemiMedium.FontSize};
    }
  }
  ${({ theme }) => theme.Mediaquery.extralarge} {
    padding-bottom: 10rem;
  }
`;
const IndexPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <MainTemplate>
      <Content>
        <MainHeaderContainer>
          <HeaderContent>
            <ContentLimit>
              <div>
                <h1>Con tu ayuda, podemos llevar la educación a más lugares...</h1>
                <p>
                  Creemos que la educación debe de ser libre y accesible para todo el mundo. Al unirte estas
                  colaborando a lograr nuestro objetivo. Además, podrás compartir tus productos o servicios en
                  la comunidad Fazt Tech. Te estamos esperando.
                </p>
                <ButtonShared color="primary">Unirme Fazt Tech</ButtonShared>
              </div>
              <UnitedImg />
            </ContentLimit>
          </HeaderContent>
        </MainHeaderContainer>
        <MainContent>
          <h2>Fazt Tech esta creciendo cada dia</h2>
          <p>
            Gracias a la ayuda de muchas marcas, hemos formado una de las comunidades más grandes de
            diseñadores y programadores, apasionados de la tecnología en latinoamérica.
          </p>
          <FollowersItemsContainer>
            <FollowersItem name="Youtube" followers="300k +" social="youtube" />
            <FollowersItem name="Facebook" followers="15k +" social="facebook" />
            <FollowersItem name="Discord" followers="19k +" social="discord" />
            <FollowersItem name="Linkedin" followers="10k +" social="linkedin" />
            <FollowersItem name="Instagram" followers="10k +" social="instagram" />
            <FollowersItem name="Twitch" followers="2k +" social="twitch" />
          </FollowersItemsContainer>
          <SponsorContainer>
            <h3>Ellos ya son parte de Fazt Tech</h3>
            <SponsorImages>
              <Sponsor1 />
              <Sponsor2 />
              <Sponsor3 />
              <Sponsor4 />
              <Sponsor5 />
              <Sponsor6 />
            </SponsorImages>
          </SponsorContainer>
          <FormContainer />
        </MainContent>
      </Content>
    </MainTemplate>
  );
};

export default IndexPage;
