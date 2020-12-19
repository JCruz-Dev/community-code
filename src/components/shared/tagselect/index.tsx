import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';

interface IData {
  title: string;
  desc1: string;
  desc2: string;
  img: string;
}

type TagSelectTypes = {
  id?: number;
  title?: string;
  background?: string;
  select?: {
    fakedata: {
      title: string;
      desc1: string;
      desc2: string;
      img: string;
    }[];
    setoptionSelect: Dispatch<SetStateAction<IData>>;
  };
};

const TagSelectStyled = styled.button<TagSelectTypes>`
  height: 119px;
  /* margin: 0px 15px; */
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  ${({ background }) => background && { backgroundImage: `url(/img/${background}.jpg)` }}
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  ${({ theme }) => theme.Mediaquery.mini} {
    width: 112px;
  }
  ${({ theme }) => theme.Mediaquery.extrasmall} {
    width: 150px;
  }
  ${({ theme }) => theme.Mediaquery.small} {
    width: 155px;
  }
  :focus {
    border: 3px solid ${({ theme }) => theme.Colors.ShadesBlue[200]};
  }
`;
const TagSelectContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(23, 5, 5, 0.74);
  border-radius: 10px;
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 149.2%;
    color: #ffffff;
  }
`;

const ComponentTagSelect: React.FC<TagSelectTypes> = ({ title, background, id, select }) => {
  return (
    <TagSelectStyled
      background={background}
      onClick={() => {
        select.setoptionSelect(select.fakedata[id]);
      }}
    >
      <TagSelectContainerStyled>
        <span>{title || 'some text'}</span>
      </TagSelectContainerStyled>
    </TagSelectStyled>
  );
};

export default ComponentTagSelect;
