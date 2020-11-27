import styled from '@emotion/styled';
import ButtonShared from '@Shared/button';
import ThumBlogShared from '../shared/thumblog';

const KnowledgeStyled = styled.div`
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
    transform: skewY(10deg);
    z-index: 0;
  }
`;

const KnowledgeContainerColorStyled = styled.div`
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

const KnowledgeContainerStyled = styled.div`
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
      max-width: 666px;
      margin: 0px 0px;
      margin-bottom: 32px;
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
      max-width: 582px;
    }
  }
`;

const VideoContainerStyled = styled.div`
  display: flex;
  width: 100%;
  height: max-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.Mediaquery.small} {
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    width: 500px;
    height: 350px;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const ComponentKnowledge: React.FC = () => {
  return (
    <KnowledgeStyled>
      <KnowledgeContainerColorStyled>
        <KnowledgeContainerStyled>
          <TitleContainerStyled>
            <h1>Compartir conocimiento es algo que todos debemos hacer.</h1>
            <p>
              Encuentra en nuestro blog articulos sobre tecnología, diseño, progamación, bases de datos y
              mucho más. Compartimos articulos para que te ayududen reforzar tus conocimientos en la creación
              de tus aplicaciones.
            </p>
            <ButtonShared color="accent">Ver el blog completo</ButtonShared>
          </TitleContainerStyled>
          <VideoContainerStyled>
            <ThumBlogShared />
            <ThumBlogShared />
            <ThumBlogShared />
          </VideoContainerStyled>
        </KnowledgeContainerStyled>
      </KnowledgeContainerColorStyled>
    </KnowledgeStyled>
  );
};

export default ComponentKnowledge;
