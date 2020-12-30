import styled from '@emotion/styled';

const ContentLimit = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.Mediaquery.mini} {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 2rem;
  }
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    padding-left: 30px;
    padding-right: 30px;
    max-width: 1123px;
    padding-top: 4rem;
  }
  ${({ theme }) => theme.Mediaquery.extralarge} {
    display: flex;
    justify-content: space-between;
  }
  div {
    ${({ theme }) => theme.Mediaquery.mini} {
      text-align: center;
    }
    ${({ theme }) => theme.Mediaquery.extralarge} {
      text-align: left;
    }
  }
`;
export default ContentLimit;
