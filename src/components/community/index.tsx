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
  ${({ theme }) => theme.Mediaquery.mini} {
    padding-bottom: 4rem;
  }
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    padding-bottom: 0;
  }
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
    padding-bottom: 230px;
  }
  ${({ theme }) => theme.Mediaquery.extralarge} {
    padding: 80px 40px;
    padding-bottom: 280px;
    flex-direction: row-reverse;
  }
`;

const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  ${({ theme }) => theme.Mediaquery.mini} {
    padding-right: 0;
    padding-left: 0;
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
    margin-bottom: 16px;
    ${({ theme }) => theme.Mediaquery.mini} {
      padding-top: 3rem;
    }
    ${({ theme }) => theme.Mediaquery.extrasmall} {
      padding-top: 0;
    }
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
    ${({ theme }) => theme.Mediaquery.extralarge} {
      text-align: left;
    }
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 149.2%;
    text-align: center;
    color: #e6e5e5;
    width: 320px;
    margin-bottom: 32px;
    ${({ theme }) => theme.Mediaquery.small} {
      width: 536px;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      font-size: 20px;
      line-height: 149.2%;
    }
    ${({ theme }) => theme.Mediaquery.extralarge} {
      text-align: left;
    }
  }
`;
const ContentIconContainerStyled = styled.div`
  width: 100%;
  max-width: 375px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.Mediaquery.extralarge} {
    margin-right: auto;
  }
`;
const ContentIconItem = styled.div`
  position: relative;
  background: #1d1d1d;
  border-radius: 4px;
  width: 50px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    transition: all 0.3s;
    background-color: #4ca9ff;
    svg {
      color: #1d1d1d;
    }
    .users-number {
      opacity: 1;
      top: -5rem;
    }
  }
  svg {
    color: #b5b3b3;
    path {
      fill: currentColor;
    }
  }
  .users-number {
    position: absolute;
    top: -4.5rem;
    background-color: #282d2f;
    width: 108px;
    height: 54.64px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-family: 'Roboto';
    font-weight: 700;
    border-radius: 10px;
    padding: 0.5rem;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.25s, top 0.25s;
    color: #ffff;
    :after {
      position: absolute;
      content: '';
      bottom: -10px;
      display: block;
      width: 20px;
      height: 20px;
      background-color: #282d2f;
      transform: rotate(45deg);
    }
  }
`;
const ContentContainerStyled = styled.div`
  height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  ${({ theme }) => theme.Mediaquery.small} {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 1rem;
    align-items: flex-start;
  }
`;

const CircleContainerStyled1 = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;

  ${({ theme }) => theme.Mediaquery.mini} {
    margin-bottom: 30px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    width: 200px;
    height: 300px;
    margin-bottom: 0;
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
  background: red;
  ${({ theme }) => theme.Mediaquery.small} {
    width: 200px;
    height: 300px;
    margin-top: -100px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    width: 200px;
    height: 250px;
    margin-top: -50px;
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
            <ContentIconItem>
              <a href="https://discord.io/fazttech" target="_blank" rel="noreferrer">
                <IconDiscord />
              </a>
              <div className="users-number">+19k usuarios</div>
            </ContentIconItem>
            <ContentIconItem>
              <a href="https://www.linkedin.com/groups/12455671/" target="_blank" rel="noreferrer">
                <IconLinkedin />
                <div className="users-number">+10k usuarios</div>
              </a>
            </ContentIconItem>
            <ContentIconItem>
              <a href="https://t.me/fazttech" target="_blank" rel="noreferrer">
                <IconTelegram />
              </a>
              <div className="users-number">+1k usuarios</div>
            </ContentIconItem>
            <ContentIconItem>
              <a href="https://web.facebook.com/groups/faztcommunity" target="_blank" rel="noreferrer">
                <IconFacebook />
                <div className="users-number">+15k usuarios</div>
              </a>
            </ContentIconItem>
            <ContentIconItem>
              <a href="https://faztweb.com" target="_blank" rel="noreferrer">
                <IconWeb />
                <div className="users-number">Página web</div>
              </a>
            </ContentIconItem>
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
