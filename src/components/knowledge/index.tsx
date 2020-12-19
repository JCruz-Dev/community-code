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
  ::after,
  ::before {
    content: '';
    display: flex;
    width: 100%;
    height: 400px;
    background-color: #1d1d1d;
    position: absolute;
    bottom: -160px;
    transform: skewY(12deg);
    z-index: 0;
  }
  ::after {
    border-radius: 10px;
    @media screen and (min-width: 834px) {
      max-width: 780px;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      max-width: 1300px;
    }
  }
  :before {
    width: 100vw;
    bottom: -130px;
    left: 0;
    right: 0;
    transform: skewY(10deg);
    z-index: 0;
    background-color: #2a3b46;
    @media screen and (min-width: 1920px) {
      display: none;
    }
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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  ${({ theme }) => theme.Mediaquery.small} {
    margin-top: 52px;
  }
  @media screen and (min-width: 834px) {
    max-width: 780px;
  }
  ${({ theme }) => theme.Mediaquery.large} {
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
    padding: 0 30px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
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
    color: #ffffff;
    margin: 0px 10px;
    margin-bottom: 16px;
    ${({ theme }) => theme.Mediaquery.mini} {
      width: 320px;
      padding-top: 4rem;
    }
    ${({ theme }) => theme.Mediaquery.small} {
      padding-top: 0;
      font-size: 25px;
      line-height: 149.2%;
      width: 557px;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      text-align: left;
      font-size: 39.06px;
      line-height: 59px;
      max-width: 666px;
      margin: 0px 0px;
      margin-bottom: 1rem;
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
    width: 320px;
    margin-bottom: 32px;
    ${({ theme }) => theme.Mediaquery.small} {
      font-size: 20px;
      line-height: 149.2%;
      width: 582px;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      text-align: left;
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
    margin-left: 2rem;
  }
  @media screen and (min-width: 834px) {
    margin-left: 0;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    width: 500px;
    height: 350px;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .thumblog-item {
    margin-bottom: 2rem;
    :nth-of-type(2) {
      margin-right: 0;
      @media screen and (min-width: 834px) {
        margin-left: 2rem;
      }
      ${({ theme }) => theme.Mediaquery.large} {
        margin-right: 0;
      }
    }
    :nth-of-type(3) {
      margin-right: 0;
    }
    ${({ theme }) => theme.Mediaquery.small} {
      margin-right: 2rem;
    }
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
            <div className="thumblog-item">
              <ThumBlogShared
                link="https://blog.faztweb.com/2020/02/nuevos-logos-2020-fazttech-y-faztcode.html"
                thumbnail="https://lh6.googleusercontent.com/proxy/FgtjqfY5cDerKU1eNKQ_zAoEWghJMxLdshm3LoLWH1YzlZbxoMoSuGHMj1cPAGKEKH8wkeuJ9u9IImr4=w1200-h630-n-k-no-nu"
              />
            </div>
            <div className="thumblog-item">
              <ThumBlogShared
                link="https://blog.faztweb.com/2018/05/desarrollo-web-en-visual-studio-code.html"
                thumbnail="https://1.bp.blogspot.com/-EW9IYLNiqDA/Wv4r4sOGveI/AAAAAAAABUg/lL0B1cIEfCkrVROQXiApi92D6brGMLUPQCLcBGAs/w1200-h630-p-k-no-nu/visual-studio-code.jpg"
              />
            </div>
            <div className="thumblog-item">
              <ThumBlogShared
                link="https://blog.faztweb.com/2018/05/como-ser-un-hacker-por-eric-s-raymond.html"
                thumbnail="https://lh4.googleusercontent.com/proxy/k9P-RqZY2bbkH831r5i7t10e5AyHhebuU1NxFRiUNqNapj_P8BtKw676kFW9v0U2BvzdP8XJWBY-R4hQxpxAv6pq5ALJb-VT0218x91g4cl7DQeFwGo9lQqqkwv96Acnw-2hj-0mx2Se_ks=w1200-h630-p-k-no-nu"
              />
            </div>
          </VideoContainerStyled>
        </KnowledgeContainerStyled>
      </KnowledgeContainerColorStyled>
    </KnowledgeStyled>
  );
};

export default ComponentKnowledge;
