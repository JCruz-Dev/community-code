import styled from '@emotion/styled';
import { useState } from 'react';
import ButtonShared from '../shared/button';
import ComponentTagSelect from '../shared/tagselect';

const WeDoStyled = styled.div`
  height: max-content;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #22222e;
  padding-top: 200px;
`;
const WeDoContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    padding: 80px 30px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    padding: 60px 40px;
    padding-bottom: 100px;
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    padding: 80px 40px;
    padding-bottom: 100px;
  }
`;

const TitleContainerStyled = styled.div`
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 149.2%;
    text-align: center;
    max-width: 320px;
    color: #ffffff;
    margin: 0px 10px;
    margin-bottom: 32px;
    ${({ theme }) => theme.Mediaquery.small} {
      font-size: 25px;
      line-height: 149.2%;
      max-width: 347px;
    }
    ${({ theme }) => theme.Mediaquery.medium} {
      font-size: 39.06px;
      line-height: 59px;
      max-width: 550px;
    }
  }
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 149.2%;
    text-align: center;
    color: #ffffff;
    max-width: 320px;
    margin-bottom: 32px;
    ${({ theme }) => theme.Mediaquery.medium} {
      font-size: 20px;
      line-height: 149.2%;
      max-width: 550px;
    }
  }
`;
const ContentContainerStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  ${({ theme }) => theme.Mediaquery.small} {
    grid-template-columns: 1fr 1fr;
  }
`;
const ContentSelectContainerStyled = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.Mediaquery.small} {
    justify-self: flex-start;
  }
  h4 {
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
    line-height: 59px;
    display: flex;
    align-items: center;
    color: #e6e5e5;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    justify-self: flex-start;
    align-items: flex-start;
    span {
      text-align: left;
    }
  }
`;

const TagSelectContainerStyled = styled.div`
  display: flex;
  ${({ theme }) => theme.Mediaquery.small} {
    margin-bottom: 20px;
  }
`;
const ImageSelectContainerStyled = styled.img`
  display: flex;
  width: 341px;
  max-width: 330px;
  height: 205px;
  border-radius: 20px;
  margin: 32px 0px;
  object-fit: cover;
  ${({ theme }) => theme.Mediaquery.small} {
    width: 100%;
    height: 90%;
    grid-column: 2 / 4;
    grid-row: 1 / 3;
  }
`;
const TitleSelectContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 59px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 149.2%;
    text-align: center;
    color: #e6e5e5;
    margin-bottom: 16px;
    max-width: 400px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    justify-self: flex-start;
    align-items: flex-start;
    h3 {
      text-align: left;
    }
    span {
      text-align: left;
    }
  }
  ${({ theme }) => theme.Mediaquery.medium} {
    h3 {
      font-size: 39.06px;
      line-height: 59px;
    }
    span {
      font-size: 20px;
      line-height: 149.19%;
      max-width: 518px;
    }
  }
`;

const ComponentWeDo: React.FC = () => {
  const fakedata = [
    {
      title: 'Bootcamp de Desarrollo Web',
      desc1:
        'Este Bootcamp fue creado para las personas que desean aprender de manera exponencial sus conocmientos.',
      desc2:
        'Durante 6 meses domina las tecnologías más utilizadas  en el mundo del desarrollo web convirtiendo tus ideas en proyectos reales. Encuentra tu propio camino en el mundo profesional con nosotros.',
      img: 'image1.jpg'
    },
    {
      title: 'Enterprise',
      desc1:
        'Este Bootcamp fue creado para las personas que desean aprender de manera exponencial sus conocmientos.',
      desc2:
        'Durante 6 meses domina las tecnologías más utilizadas  en el mundo del desarrollo web convirtiendo tus ideas en proyectos reales. Encuentra tu propio camino en el mundo profesional con nosotros.',
      img: 'image2.jpg'
    }
  ];
  const [optionSelect, setoptionSelect] = useState(fakedata[0]);
  return (
    <WeDoStyled>
      <WeDoContainerStyled>
        <TitleContainerStyled>
          <h1>Esto es lo que hacemos . . .</h1>
          <p>
            Fazt Tech es más grande de lo que piensas. Estas son las áreas en las que trabajamos con mucho
            esfuerzo para que puedas lograr tus objetivos.
          </p>
        </TitleContainerStyled>
        <ContentContainerStyled>
          <ContentSelectContainerStyled>
            <h4>Haz click en las imagenes para ver los servicios</h4>
            <TagSelectContainerStyled>
              <ComponentTagSelect
                background="image1"
                title="Bootcamp"
                id={0}
                select={{ fakedata, setoptionSelect }}
              />
              <ComponentTagSelect
                background="image2"
                title="Enterprise"
                id={1}
                select={{ fakedata, setoptionSelect }}
              />
            </TagSelectContainerStyled>
          </ContentSelectContainerStyled>
          <ImageSelectContainerStyled src={`/img/${optionSelect.img}`} alt="" />
          <TitleSelectContainerStyled>
            <h3>{optionSelect.title}</h3>
            <span>{optionSelect.desc1}</span>
            <span>{optionSelect.desc2}</span>
            <ButtonShared color="accent">Empezar hoy</ButtonShared>
          </TitleSelectContainerStyled>
        </ContentContainerStyled>
      </WeDoContainerStyled>
    </WeDoStyled>
  );
};

export default ComponentWeDo;
