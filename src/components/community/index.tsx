import styled from '@emotion/styled';
import IconDiscord from '@Assets/img/iconDiscord.svg';
import IconLinkedin from '@Assets/img/iconLinkedin.svg';
import IconTelegram from '@Assets/img/iconTelegram.svg';
import IconFacebook from '@Assets/img/iconFacebook.svg';
import IconWeb from '@Assets/img/iconWeb.svg';

const CommunityStyled = styled.div`
  height: max-content;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #22222e;
  padding-top: 200px;
`;
const CommunityContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    padding: 80px 30px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    padding: 60px 40px;
    padding-bottom: 180px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    padding: 80px 40px;
    padding-bottom: 150px;
    flex-direction: row-reverse;
  }
`;

const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 149.2%;
    text-align: center;
    max-width: 320px;
    color: #ffffff;
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
const ContentIconContainerStyled = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ContentContainerStyled = styled.div`
  width: 430px;
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #393939;
    span {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 149.19%;
      color: #ffffff;
      margin-bottom: 16px;
    }
  }
`;

const CircleContainerStyled1 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  ${({ theme }) => theme.Mediaquery.small} {
    width: 200px;
    height: 300px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    width: 200px;
    height: 250px;
  }
`;
const CircleContainerStyled2 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;
const CircleContainerStyled3 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-top: 30px;
  ${({ theme }) => theme.Mediaquery.small} {
    margin-top: 0;
  }
`;
const CircleContainerStyled4 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-top: 30px;
  ${({ theme }) => theme.Mediaquery.small} {
    width: 200px;
    height: 300px;
    margin-top: 0;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    width: 200px;
    height: 250px;
    margin-top: 0;
  }
`;

const CircleStyled = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: solid 1px #ffffff33;
  position: relative;

  .sub-circle-1 {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateZ(-90deg);
    width: 50%;
    height: 50%;
    background-color: #4ca9ff;
    -moz-border-radius: 0 100% 0 0;
    -webkit-border-radius: 0 100% 0 0;
    border-radius: 0 100% 0 0;
  }
  .sub-circle-2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #4ca9ff;
    -moz-border-radius: 100px 100px 0 0;
    -webkit-border-radius: 100px 100px 0 0;
    border-radius: 100px 100px 0 0;
  }
  .sub-circle-3 {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateZ(-44deg);
    background-color: transparent;
    border-right: 39px solid transparent;
    border-top: 39px solid #4ca9ff;
    border-left: 39px solid #4ca9ff;
    border-bottom: 39px solid #4ca9ff;
    -moz-border-radius: 100%;
    -webkit-border-radius: 100%;
    border-radius: 100%;
  }
  .sub-circle-4 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #4ca9ff;
    border-radius: 100%;
  }
`;

const ComponentCommunity: React.FC = () => {
  return (
    <CommunityStyled>
      <CommunityContainerStyled>
        <TitleContainerStyled>
          <h1>La comunidad de Fazt Tech sigue creciendo día a día.</h1>
          <p>
            Fazt community es una espacio donde se reúnen desarrolladores y diseñadores de habla hispana. Un
            lugar donde puedes aprender, pasarla bien y mejorar tus habilidades.
          </p>
          <p>Únete a nosotros y forma parte de esta gran comunidad.</p>
          <ContentIconContainerStyled>
            <IconDiscord />
            <IconLinkedin />
            <IconTelegram />
            <IconFacebook />
            <IconWeb />
          </ContentIconContainerStyled>
        </TitleContainerStyled>
        <ContentContainerStyled>
          <CircleContainerStyled1>
            <span>Conoce</span>
            <CircleStyled className="circle">
              <div className="sub-circle-1" />
            </CircleStyled>
          </CircleContainerStyled1>
          <CircleContainerStyled2>
            <span>Aprende</span>
            <CircleStyled className="circle">
              <div className="sub-circle-2" />
            </CircleStyled>
          </CircleContainerStyled2>
          <CircleContainerStyled3>
            <span>Crece</span>
            <CircleStyled className="circle">
              <div className="sub-circle-3" />
            </CircleStyled>
          </CircleContainerStyled3>
          <CircleContainerStyled4>
            <span>Comparte</span>
            <CircleStyled className="circle">
              <div className="sub-circle-4" />
            </CircleStyled>
          </CircleContainerStyled4>
        </ContentContainerStyled>
      </CommunityContainerStyled>
    </CommunityStyled>
  );
};

export default ComponentCommunity;
