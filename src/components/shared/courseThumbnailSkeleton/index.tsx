import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const CourseThumbContainer = styled.div`
  width: 305px;
  height: 205px;
  margin: 20px 20px;
  border-radius: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.Colors.ShadesDark[100]};
  ${({ theme }) => theme.Mediaquery.small} {
    width: 280px;
    height: 180px;
  }
`;
const animateLoader = keyframes`
    0% {
    background-position: -280px 0;
  }
  100%{
     background-position: 280px 0;
  }`;
const CourseThumbLoader = styled.div`
  position: absolute;
  top: 1rem;
  background-color: #656871;
  background-image: linear-gradient(to right, #656871 0%, #888b94 20%, #656871 40%, #656871 100%);
  background-repeat: no-repeat;
  animation: 1s infinite linear ${animateLoader};
  height: 172px;
  ${({ theme }) => theme.Mediaquery.mini} {
    width: 260px;
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    width: 310px;
    left: -16px;
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
`;
const CourseThumbSkeleton: React.FC = () => {
  return (
    <CourseThumbContainer>
      <CourseThumbLoader />
    </CourseThumbContainer>
  );
};
export default CourseThumbSkeleton;
