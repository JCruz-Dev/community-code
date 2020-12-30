import styled from '@emotion/styled';

const FollowersItemsContainer = styled.div`
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 21px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  ${({ theme }) => theme.Mediaquery.extralarge} {
    margin-bottom: 3.5rem;
  }
`;
export default FollowersItemsContainer;
