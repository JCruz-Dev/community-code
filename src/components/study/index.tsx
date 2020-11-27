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
    ${({ theme }) => theme.Mediaquery.medium} {
      max-width: 1300px;
    }
    height: 400px;
    background-color: #1d1d1d;
    position: absolute;
    bottom: -120px;
    border-radius: 10px;
    transform: skewY(-10deg);
    z-index: 0;
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
    padding: 80px 30px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    padding: 60px 40px;
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
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 149.2%;
    text-align: center;
    max-width: 320px;
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
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 149.2%;
    text-align: center;
    color: #ffffff;
    max-width: 320px;
    margin-bottom: 32px;
    ${({ theme }) => theme.Mediaquery.medium} {
      text-align: left;
      font-size: 20px;
      line-height: 149.2%;
      max-width: 550px;
    }
  }
`;

const VideoContainerStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
              <ButtonShared>Conoce lo que hacemos</ButtonShared>
            </TitleContainerStyled>
            <StudtyImg />
          </TitleContainerFullStyled>
          <VideoContainerStyled>
            <ThumbVideo />
            <ThumbVideo />
            <ThumbVideo />
          </VideoContainerStyled>
        </StudyContainerStyled>
      </StudyContainerColorStyled>
    </StudyStyled>
  );
};

export default ComponentStudy;
