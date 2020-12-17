import styled from '@emotion/styled';

type ThumbVideoTypes = {
  link?: string;
  thumbnail?: string;
};

const ThumbVideoStyled = styled.div<ThumbVideoTypes>`
  background-color: #454545;
  position: relative;
  width: 310px;
  height: 205px;
  margin: 20px 20px;
  border-radius: 10px;
  ${({ theme }) => theme.Mediaquery.small} {
    width: 280px;
    height: 180px;
  }
`;
const ThumbnailImageStyled = styled.img<ThumbVideoTypes>`
  position: absolute;
  top: 16px;
  height: 172px;
  ${({ theme }) => theme.Mediaquery.mini} {
    width: 260px;
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    width: 310px;
    left: -20px;
    object-fit: cover;
    border-radius: 10px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    width: 280px;
    height: 150px;
  }
  filter: drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.25));
  :hover {
    cursor: pointer;
  }
  animation: all 0.5s ease;
`;

const ThumbVideoShared: React.FC<ThumbVideoTypes> = ({ thumbnail, link }) => {
  return (
    <ThumbVideoStyled link={link} thumbnail={thumbnail}>
      <a href={link || 'https://www.youtube.com/watch?v=8B9r8eOje_k'}>
        <ThumbnailImageStyled src={thumbnail || 'http://i3.ytimg.com/vi/8B9r8eOje_k/maxresdefault.jpg'} />
      </a>
    </ThumbVideoStyled>
  );
};

export default ThumbVideoShared;
