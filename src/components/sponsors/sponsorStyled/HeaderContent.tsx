import styled from '@emotion/styled';

const HeaderContent = styled.div`
  background-color: #1d1d1d;
  max-width: 1300px;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12rem;
  ${({ theme }) => theme.Mediaquery.extralarge} {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    margin-bottom: 15rem;
  }
  z-index: 1;
  position: relative;
  ::after {
    content: '';
    display: block;
    width: 100vw;
    height: inherit;
    background-color: #1d1d1d;
    position: absolute;
    bottom: -160px;
    z-index: -1;
    transform: skewY(10deg);
    border-radius: 10px;
    ${({ theme }) => theme.Mediaquery.small} {
      bottom: -100px;
      max-width: 768px;
    }
    @media screen and (min-width: 834px) {
      max-width: 100%;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      bottom: -160px;
      max-width: 1300px;
    }
    @media screen and (min-width: 1680px) {
      transform: skewY(10deg);
    }
    @media screen and (min-width: 1920px) {
      transform: skewY(6deg);
    }
  }
  svg {
    display: none;
    ${({ theme }) => theme.Mediaquery.extralarge} {
      display: block;
    }
  }
`;
export default HeaderContent;
