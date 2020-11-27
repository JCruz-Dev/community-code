import styled from '@emotion/styled';

const WeDoStyled = styled.div`
  height: max-content;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #22222e;
  padding-top: 200px;
`;
const WeDoContainerStyled = styled.div`
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
    padding: 60px 40px;
    padding-bottom: 100px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    padding: 80px 40px;
    padding-bottom: 100px;
  }
`;

const TitleContainerStyled = styled.div`
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
      font-size: 25px;
      line-height: 149.2%;
      max-width: 347px;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
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
      font-size: 20px;
      line-height: 149.2%;
      max-width: 550px;
    }
  }
`;
const ContentContainerStyled = styled.div`
  width: 100%;
`;

const ComponentWeDo: React.FC = () => {
  return (
    <WeDoStyled>
      <WeDoContainerStyled>
        <TitleContainerStyled>
          <h1>Esto es lo que hacemos . . .</h1>
          <p>
            Fazt Tech es más grande de lo que piensas. Estas son las áreas en las que trabajamos con mucho
            esfuerzo para que puedas lograr tus objetivos.
          </p>
        </TitleContainerStyled>
        <ContentContainerStyled>
          <span>hola</span>
        </ContentContainerStyled>
      </WeDoContainerStyled>
    </WeDoStyled>
  );
};

export default ComponentWeDo;
