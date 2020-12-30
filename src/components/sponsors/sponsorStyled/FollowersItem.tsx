import React from 'react';
import styled from '@emotion/styled';

interface IfollowersProps {
  name: string;
  followers: string;
  social: string;
}
type FollowerItemsProps = {
  social: string;
};
function renderColorBorder(color) {
  switch (color) {
    case 'youtube':
      return '#ff4343';
    case 'facebook':
      return '#30B2FF';
    case 'discord':
      return '#8A43FF';
    case 'instagram':
      return '#E15688';
    case 'linkedin':
      return '#2B7ACA';
    case 'twitch':
      return '#AF8FE3';
    default:
      return '#ffff';
  }
}
const FollowersItemStyled = styled.div<FollowerItemsProps>`
  background-color: #282d2f;
  width: 100%;
  height: 149px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
  border-radius: 10px;
  h3 {
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    ${({ theme }) => theme.Mediaquery.extrasmall} {
      font-size: 25px;
    }
  }
  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.Colors.ShadesWhite[300]};
    ${({ theme }) => theme.Mediaquery.extralarge} {
      font-size: 1rem;
    }
  }
  :hover {
    border: 3px solid ${({ social }) => renderColorBorder(social)};
  }
`;
const FollowersItem: React.FC<IfollowersProps> = ({ name, followers, social }) => {
  return (
    <FollowersItemStyled social={social}>
      <h3>{followers}</h3>
      <span>{name}</span>
    </FollowersItemStyled>
  );
};
export default FollowersItem;
