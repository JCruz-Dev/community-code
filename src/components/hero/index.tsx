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
  ${({ theme }) => theme.Mediaquery.mini} {
    padding-top: 1.5rem;
  }
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    padding: 36px 30px 80px 30px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    flex-direction: row;
    justify-content: center;
    padding: 43px 40px 200px 40px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    padding: 40px 25px 150px 40px;
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
    font-weight: 500;
    font-size: ${({ theme }) => theme.Texts.Big.FontSize};
    line-height: 149.2%;
    text-align: center;
    max-width: 320px;
    color: #ffffff;
    margin-bottom: 32px;
    ${({ theme }) => theme.Mediaquery.small} {
      text-align: left;
      font-size: ${({ theme }) => theme.Texts.Medium.FontSize};
      line-height: 149.2%;
      max-width: 347px;
      margin-top: 0;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      text-align: left;
      font-size: ${({ theme }) => theme.Texts.Bigger.FontSize};
      line-height: 59px;
      max-width: 550px;
    }
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
    border-radius: 10px;
    ${({ theme }) => theme.Mediaquery.medium} {
      width: 540px;
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
      font: italic 300 20px/23px 'Roboto';
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
  width: 94%;
  z-index: 1;
  ${({ theme }) => theme.Mediaquery.mini} {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  ${({ theme }) => theme.Mediaquery.extrasmall} {
  }
  ${({ theme }) => theme.Mediaquery.small} {
    position: absolute;
    bottom: -107px;
    align-self: center;
    justify-self: center;
    background: #1c1e24;
    border-radius: 4px;
    padding: 20px 20px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    margin-top: 70px;
  }
  p {
    font: normal 300 1rem/29px 'Roboto';
    text-align: center;
    color: #ffffff;
    a {
      margin-left: 5px;
      font-weight: bold;
      color: #4ca9ff;
      text-decoration: none;
    }
  }
  .sponsor-images {
    ${({ theme }) => theme.Mediaquery.mini} {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      justify-items: center;
      align-items: center;
      grid-gap: 1.75rem;
    }
    ${({ theme }) => theme.Mediaquery.small} {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
    ${({ theme }) => theme.Mediaquery.large} {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
  }
`;

const ComponentHero: React.FC = () => {
  return (
    <HeroStyled>
      <HeroContainerStyled>
        <TitleContainerStyled>
          <h1>Creamos educación libre y accesible para que nunca dejes de aprender.</h1>
          <ButtonShared color="secondary">Conoce lo que hacemos</ButtonShared>
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
          <div className="sponsor-images">
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
