import styled from '@emotion/styled';

const MainContent = styled.div`
  min-height: 100vh;
  max-width: 1123px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  ${({ theme }) => theme.Mediaquery.mini} {
    padding-top: 2rem;
    padding-left: 16px;
    padding-right: 16px;
  }
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    padding-left: 30px;
    padding-right: 30px;
  }
  ${({ theme }) => theme.Mediaquery.extralarge} {
    padding-top: 0;
  }
`;
export default MainContent;
