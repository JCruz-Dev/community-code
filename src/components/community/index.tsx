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
    flex-direction: row;
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
  width: 100%;
  max-width: 375px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :root {
    --circle-color: #393939;
  }
  .circle-container {
    background-color: #393939;
    display: grid;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    position: relative;
    text-align: center;
  }
  .circle {
    width: 76px;
    height: 76px;
    border-radius: 50%;
  }
  .circle {
    border: 1px solid #e4e4e4;
    position: relative;
  }
  [class^='sub-circle'] {
    background: #4ca9ff;
    width: 38px;
    height: 38px;
    position: absolute;
  }
  .sub-circle-1 {
    top: 0;
    left: 0;
    border-top-left-radius: 50px;
  }
  .sub-circle-2 {
    right: 0;
    border-top-right-radius: 50px;
    background: #393939;
  }
  .sub-circle-3 {
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 50px;
    background: #393939;
  }
  .sub-circle-4 {
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 50px;
    background: #393939;
  }
  [class*='s0-'] {
    background: #393939;
  }
  [class*='s1-'] {
    background: #393939;
  }
  [class*='s2-'] {
    background: #393939;
  }
  .s0-b,
  .s0-a {
    background: #4ca9ff;
  }
  .s1-a,
  .s1-b,
  .s1-c {
    background: #4ca9ff;
  }
  .s2-a,
  .s2-b,
  .s2-c,
  .s2-d {
    background: #4ca9ff;
  }
  .container {
    display: grid;
    height: auto;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(209px, 209px));
    grid-auto-rows: minmax(90px, auto);
    grid-auto-flow: dense;
    grid-gap: 1.5rem;
    justify-content: center;
    margin-top: 4rem;
  }
  .circle-container:nth-child(1) {
    grid-column: 1;
    grid-row: span 3;
  }
  .circle-container:nth-child(2) {
    grid-column: 2;
    grid-row: span 2;
  }
  .circle-container:nth-child(3) {
    grid-column: 1;
    grid-row: span 2;
  }
  .circle-container:nth-child(4) {
    grid-column: 2;
    grid-row: 3 / span 3;
  }
  @media screen and (max-width: 991px) {
    .container {
      grid-template-columns: repeat(auto-fill, minmax(48%, 1fr));
      grid-auto-rows: minmax(auto, auto);
    }
    .circle-container {
      padding: 4rem;
      grid-column: unset !important;
      grid-row: unset !important;
    }
  }
  p {
    position: relative;
    margin-bottom: 0;
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
          <div className="container">
            <div className="circle-container">
              <div className="circle">
                <div className="sub-circle-1" />
                <div className="sub-circle-2" />
                <div className="sub-circle-3" />
                <div className="sub-circle-4" />
              </div>
            </div>
            <div className="circle-container">
              <div className="circle">
                <div className="sub-circle-1 s0-a" />
                <div className="sub-circle-2 s0-b" />
                <div className="sub-circle-3 s0-c" />
                <div className="sub-circle-4 s0-d" />
              </div>
            </div>
            <div className="circle-container">
              <div className="circle">
                <div className="sub-circle-1 s1-a" />
                <div className="sub-circle-2 s1-b" />
                <div className="sub-circle-3 s1-c" />
                <div className="sub-circle-4 s1-d" />
              </div>
            </div>
            <div className="circle-container">
              <div className="circle">
                <div className="sub-circle-1 s2-a" />
                <div className="sub-circle-2 s2-b" />
                <div className="sub-circle-3 s2-c" />
                <div className="sub-circle-4 s2-d" />
              </div>
            </div>
          </div>
        </ContentContainerStyled>
      </CommunityContainerStyled>
    </CommunityStyled>
  );
};

export default ComponentCommunity;
