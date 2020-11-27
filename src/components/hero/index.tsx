import styled from '@emotion/styled';
import ButtonShared from '@Shared/button';
import ArrowUp from '@Assets/img/arrowUp.svg';
import Sponsor1 from '@Assets/img/sponsor1.svg';
import Sponsor2 from '@Assets/img/sponsor2.svg';
import Sponsor3 from '@Assets/img/sponsor3.svg';
import Sponsor4 from '@Assets/img/sponsor4.svg';
import Sponsor5 from '@Assets/img/sponsor5.svg';
import Sponsor6 from '@Assets/img/sponsor6.svg';

const HeroStyled = styled.div`
  height: max-content;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #22222e;
`;
const HeroContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    padding: 80px 30px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    flex-direction: row;
    justify-content: center;
    padding: 60px 40px;
    padding-bottom: 100px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    padding: 80px 40px;
    padding-bottom: 100px;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const TitleContainerStyled = styled.div`
  height: max-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 31.25px;
    line-height: 149.2%;
    text-align: center;
    max-width: 343px;
    color: #ffffff;
    margin: 0px 10px;
    margin-bottom: 32px;
    ${({ theme }) => theme.Mediaquery.small} {
      text-align: left;
      font-size: 25px;
      line-height: 149.2%;
      max-width: 347px;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      text-align: left;
      font-size: 39.06px;
      line-height: 59px;
      max-width: 550px;
    }
  }
  ${({ theme }) => theme.Mediaquery.small} {
    align-items: flex-start;
  }
  button {
    ${({ theme }) => theme.Mediaquery.small} {
      align-self: flex-start;
      margin-left: 10px;
    }
  }
`;

const VideoContainerStyled = styled.div`
  height: max-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  iframe {
    width: 100%;
    ${({ theme }) => theme.Mediaquery.medium} {
      width: 500px;
      height: 300px;
    }
  }
  p {
    margin-top: 16px;
    display: flex;
    svg {
      margin-left: 15px;
    }
    span {
      font-family: Roboto;
      font-style: italic;
      font-weight: 300;
      font-size: 20px;
      line-height: 23px;
      display: flex;
      align-items: center;

      color: #ffffff;
    }
    ${({ theme }) => theme.Mediaquery.small} {
      align-self: flex-start;
      margin-left: 10px;
      font-size: 16px;
      line-height: 19px;
    }
  }
`;

const SponsorsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 70px;
  ${({ theme }) => theme.Mediaquery.small} {
    position: absolute;
    bottom: -70px;
    align-self: center;
    justify-self: center;
    background: #1c1e24;
    border-radius: 4px;
    padding: 20px 20px;
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 29px;
    text-align: center;
    color: #ffffff;
    a {
      margin-left: 5px;
      font-weight: bold;
      color: #4ca9ff;
      text-decoration: none;
    }
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 15px;
    svg {
      margin: 0px 15px;
    }
  }
`;

const ComponentHero: React.FC = () => {
  return (
    <HeroStyled>
      <HeroContainerStyled>
        <TitleContainerStyled>
          <h1>Creamos educación libre y accesible para que nunca dejes de aprender.</h1>
          <ButtonShared>Conoce lo que hacemos</ButtonShared>
        </TitleContainerStyled>
        <VideoContainerStyled>
          <iframe
            title="Presentation"
            height="209"
            src="https://www.youtube.com/embed/B-xexrR-tEo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>
            <span>Un mensaje para ti</span>
            <ArrowUp />
          </p>
        </VideoContainerStyled>
        <SponsorsContainerStyled>
          <p>
            Ellos son parte de Fazt tech
            <a href="http://">¿Quieres unirte?</a>
          </p>
          <div>
            <Sponsor1 />
            <Sponsor2 />
            <Sponsor3 />
            <Sponsor4 />
            <Sponsor5 />
            <Sponsor6 />
          </div>
        </SponsorsContainerStyled>
      </HeroContainerStyled>
    </HeroStyled>
  );
};

export default ComponentHero;
