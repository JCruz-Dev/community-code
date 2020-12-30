import styled from '@emotion/styled';

const MainHeaderContainer = styled.header`
  height: max-content;
  width: 100%;
  position: relative;
  background-color: #2a3b46;
  position: relative;
  ${({ theme }) => theme.Mediaquery.extralarge} {
    padding-top: 47px;
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    width: 100vw;
    height: 400px;
    bottom: -135px;
    left: 0;
    right: 0;
    transform: skewY(10deg);
    z-index: 0;
    background-color: #2a3b46;
    ${({ theme }) => theme.Mediaquery.small} {
      bottom: -80px;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      bottom: -140px;
    }
    @media screen and (min-width: 1680px) {
      transform: skewY(8deg);
    }
    @media screen and (min-width: 1920px) {
      transform: skewY(5deg);
    }
  }
`;
export default MainHeaderContainer;
