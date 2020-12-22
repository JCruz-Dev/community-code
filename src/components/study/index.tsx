import React from 'react';
import ButtonShared from '@Shared/button';
import ThumbVideo from '@Shared/thumbvideo';
import StudtyImg from '@Assets/img/studyImg.svg';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import getCoursesData from '@Src/utils/api';
import CourseThumbSkeleton from '@Shared/courseThumbnailSkeleton';
import {
  StudyStyled,
  StudyContainerStyled,
  StudyContainerColorStyled,
  TitleContainerStyled,
  TitleContainerFullStyled,
  VideoContainerStyled
} from './StudyStyled';

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('courses-home', getCoursesData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
}
const ComponentStudy: React.FC = () => {
  const { data, isLoading } = useQuery('courses-home', getCoursesData);
  return (
    <StudyStyled>
      <StudyContainerColorStyled>
        <StudyContainerStyled>
          <TitleContainerFullStyled>
            <TitleContainerStyled>
              <h1>El estudio constante no es un capricho, sino una necesidad.</h1>
              <p>
                Como profesionales, debemos estar en un ciclo constante de aprendizaje. Por eso, hemos creado
                distintos cursos con temas diferentes para lo que requieras en tu carrera y compartir lo
                aprendido con la comunidad.
              </p>
              <ButtonShared color="secondary">Ver todos los cursos</ButtonShared>
            </TitleContainerStyled>
            <StudtyImg />
          </TitleContainerFullStyled>
          <VideoContainerStyled>
            {isLoading ? (
              <>
                {[...Array(3)].map((value: undefined, index: number) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <CourseThumbSkeleton key={index} />
                ))}
              </>
            ) : (
              data.courses.map((response) => (
                <ThumbVideo key={response.title} link={response.link} thumbnail={response.imgPath} />
              ))
            )}
          </VideoContainerStyled>
        </StudyContainerStyled>
      </StudyContainerColorStyled>
    </StudyStyled>
  );
};

export default React.memo(ComponentStudy);
