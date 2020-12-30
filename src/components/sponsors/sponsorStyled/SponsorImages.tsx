import styled from '@emotion/styled';

const SponsorImages = styled.div`
  margin-top: 2rem;
  max-width: 455px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1.5rem;
  justify-items: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
  ${({ theme }) => theme.Mediaquery.extralarge} {
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 4rem;
  }
`;
export default SponsorImages;
