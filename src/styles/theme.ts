import { Theme } from './styled';
import ThemeColors from './themes/themeColors';
import ThemeText from './themes/themeTexts';
import ThemeSpaces from './themes/themeSpaces';
import ThemeZindex from './themes/themeZIndex';
import ThemeMediaQuery from './themes/themeMediaQuery';

const theme: Theme = {
  Colors: ThemeColors,
  Texts: ThemeText,
  Fontfamily: 'Roboto',
  Spaces: ThemeSpaces,
  Borders: '4px',
  Zindex: ThemeZindex,
  Mediaquery: ThemeMediaQuery
};

export default theme;
