import styled from '@emotion/styled';

const SponsorContainer = styled.div`
  ${({ theme }) => theme.Mediaquery.mini} {
    margin-top: 4rem;
  }
  ${({ theme }) => theme.Mediaquery.extralarge} {
    width: max-content;
    height: max-content;
    margin-left: auto;
    margin-right: auto;
  }
`;
export default SponsorContainer;
