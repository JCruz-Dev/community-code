import '@emotion/react';

declare module '@emotion/react' {
  interface IColorsMain {
    base: string;
    dark: string;
    accent: string;
  }
  interface IShadesWhite {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
  }
  interface IShadesDark {
    100: string;
    200: string;
    300: string;
    400: string;
  }
  interface IShadesBlue {
    100: string;
    200: string;
    300: string;
  }
  interface IShadesRed {
    100: string;
    200: string;
  }

  interface IColors {
    ColorsMain: IColorsMain;
    ShadesWhite: IShadesWhite;
    ShadesDark: IShadesDark;
    ShadesBlue: IShadesBlue;
    ShadesRed: IShadesRed;
  }
  interface ISizeTextProperties {
    FontSize: string;
    LineHeight: string;
  }
  interface IThemeText {
    Small: ISizeTextProperties;
    Normal: ISizeTextProperties;
    SemiMedium: ISizeTextProperties;
    Medium: ISizeTextProperties;
    Big: ISizeTextProperties;
    Bigger: ISizeTextProperties;
  }

  interface ISpace {
    xxl: string;
    xl: string;
    l: string;
    m: string;
    s: string;
    xs: string;
  }

  interface IZindex {
    zBack: string;
    zNormal: string;
    zTooltip: string;
    zFixed: string;
    zModal: string;
  }

  interface IMediaQuery {
    mini: string;
    extrasmall: string;
    small: string;
    medium: string;
    large: string;
    extralarge: string;
  }

  export interface Theme {
    Colors: IColors;
    Texts: IThemeText;
    Fontfamily: string;
    Spaces: ISpace;
    Borders: string;
    Zindex: IZindex;
    Mediaquery: IMediaQuery;
  }
}
