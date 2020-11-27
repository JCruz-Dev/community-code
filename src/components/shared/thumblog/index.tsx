import styled from '@emotion/styled';

type ThumBlogTypes = {
  link?: string;
  thumbnail?: string;
};

const ThumBlogStyled = styled.div<ThumBlogTypes>`
  background-color: #454545;
  position: relative;
  width: 190px;
  height: 140px;
  margin: 10px 10px;
  border-radius: 10px;
  ${({ theme }) => theme.Mediaquery.small} {
    width: 190px;
    height: 140px;
  }
`;
const ThumbnailImageStyled = styled.img<ThumBlogTypes>`
  width: 196px;
  height: 118px;
  ${({ theme }) => theme.Mediaquery.small} {
    width: 196px;
    height: 118px;
  }
  position: absolute;
  left: -15px;
  top: 10px;
  object-fit: cover;
  filter: drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
  animation: all 0.5s ease;
`;

const ThumBlogShared: React.FC<ThumBlogTypes> = ({ thumbnail, link }) => {
  return (
    <ThumBlogStyled link={link} thumbnail={thumbnail}>
      <a href={link || 'https://www.youtube.com/watch?v=8B9r8eOje_k'}>
        <ThumbnailImageStyled src={thumbnail || 'http://i3.ytimg.com/vi/8B9r8eOje_k/maxresdefault.jpg'} />
      </a>
    </ThumBlogStyled>
  );
};

export default ThumBlogShared;
