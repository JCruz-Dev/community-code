import styled from '@emotion/styled';
import ButtonShared from '@Shared/button';
import ThumbVideo from '@Shared/thumbvideo';
import StudtyImg from '@Assets/img/studyImg.svg';

const StudyStyled = styled.div`
  height: max-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  background-color: #2a3b46;
  ::after {
    content: '';
    display: flex;
    width: 100%;
    max-width: 720px;
    @media screen and (min-width: 834px) {
      max-width: 780px;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      max-width: 1300px;
    }
    height: 350px;
    background-color: #1d1d1d;
    position: absolute;
    bottom: -120px;
    border-radius: 10px;
    transform: skewY(-10deg);
    z-index: 0;
  }
  ${({ theme }) => theme.Mediaquery.extralarge} {
    padding-top: 1rem;
  }
`;

const StudyContainerColorStyled = styled.div`
  height: 100%;
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  z-index: 1;
  ${({ theme }) => theme.Mediaquery.small} {
    margin-top: 100px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  @media screen and (min-width: 834px) {
    max-width: 780px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    max-width: 1300px;
  }
`;

const StudyContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1140px;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    padding: 4rem 0;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    padding: 60px 16px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    padding: 80px 40px;
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
  ${({ theme }) => theme.Mediaquery.medium} {
    align-items: flex-start;
  }
  h1 {
    font: normal 500 25px/149.2% 'Roboto';
    text-align: center;
    color: #ffffff;
    margin-bottom: 24px;
    ${({ theme }) => theme.Mediaquery.mini} {
      padding-top: 2rem;
    }
    ${({ theme }) => theme.Mediaquery.extrasmall} {
      padding-top: 0;
      margin-bottom: 32px;
    }
    ${({ theme }) => theme.Mediaquery.small} {
      text-align: left;
      font-size: 25px;
      line-height: 149.2%;
      max-width: 347px;
      margin-right: 0;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      text-align: left;
      font-size: 39.06px;
      line-height: 59px;
      max-width: 550px;
    }
  }
  p {
    font: normal 400 1rem/149.2% 'Roboto';
    text-align: center;
    color: #e6e5e5;
    max-width: 320px;
    margin-bottom: 32px;
    ${({ theme }) => theme.Mediaquery.mini} {
      line-height: 1.5rem;
    }
    ${({ theme }) => theme.Mediaquery.small} {
      max-width: 532px;
    }

    ${({ theme }) => theme.Mediaquery.medium} {
      text-align: left;
      font-size: 20px;
      line-height: 149.2%;
    }
    ${({ theme }) => theme.Mediaquery.large} {
      max-width: 551px;
    }
  }
`;

const VideoContainerStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  ${({ theme }) => theme.Mediaquery.large} {
    justify-content: flex-start;
  }
`;

const TitleContainerFullStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.Mediaquery.medium} {
    justify-content: space-between;
  }
  svg {
    display: none;
    align-self: flex-start;
    ${({ theme }) => theme.Mediaquery.medium} {
      display: flex;
    }
  }
`;

const ComponentStudy: React.FC = () => {
  return (
    <StudyStyled>
      <StudyContainerColorStyled>
        <StudyContainerStyled>
          <TitleContainerFullStyled>
            <TitleContainerStyled>
              <h1>El estudio constante no es un capricho, sino una necesidad.</h1>
              <p>
                Como profesionales, debemos estar en un ciclo constante de aprendizaje. Por eso, hemos creado
                distintos cursos con temas diferentes para lo que requieras en tu carrera y compartir lo
                aprendido con la comunidad.
              </p>
              <ButtonShared>Ver todos los cursos</ButtonShared>
            </TitleContainerStyled>
            <StudtyImg />
          </TitleContainerFullStyled>
          <VideoContainerStyled>
            <ThumbVideo
              link="https://www.youtube.com/watch?v=chPhlsHoEPo"
              thumbnail="http://i3.ytimg.com/vi/chPhlsHoEPo/maxresdefault.jpg"
            />
            <ThumbVideo
              link="https://www.youtube.com/watch?v=rbuYtrNUxg4"
              thumbnail="http://i3.ytimg.com/vi/rbuYtrNUxg4/maxresdefault.jpg"
            />
            <ThumbVideo
              link="https://www.youtube.com/watch?v=k3YsT7IZb6w"
              thumbnail="http://i3.ytimg.com/vi/k3YsT7IZb6w/maxresdefault.jpg"
            />
          </VideoContainerStyled>
        </StudyContainerStyled>
      </StudyContainerColorStyled>
    </StudyStyled>
  );
};

export default ComponentStudy;
