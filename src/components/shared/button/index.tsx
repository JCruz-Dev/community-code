import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ButtonTypes = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'accent';
};

const ButtonStyled = styled.button<ButtonTypes>`
  background-color: ${({ theme }) => theme.Colors.ColorsMain.dark};
  background-color: ${({ theme, color }) => color === 'secondary' && theme.Colors.ColorsMain.dark};
  background-color: ${({ theme, color }) => color === 'accent' && theme.Colors.ColorsMain.accent};
  height: max-content;
  width: 250px;
  border: none;
  border-radius: ${({ theme }) => theme.Borders};
  color: ${({ theme }) => theme.Colors.ShadesWhite[200]};
  font-family: ${({ theme }) => theme.Fontfamily};
  font-weight: 500;
  font-size: ${({ theme }) => theme.Texts.Normal.FontSize};
  line-height: ${({ theme }) => theme.Texts.Normal.LineHeight};
  padding: 24px 16px;
  ${({ theme }) => theme.Mediaquery.medium} {
    padding: 24px 32px;
  }
  cursor: pointer;
  ${({ size }) =>
    size === 'small' &&
    css`
      border-radius: 8px;
      padding: 16px 24px;
    `};
  transition: all 0.5s ease;
`;

const ButtonShared: React.FC<ButtonTypes> = ({ size, color, children }) => {
  return (
    <ButtonStyled color={color} size={size}>
      {children}
    </ButtonStyled>
  );
};

export default ButtonShared;
