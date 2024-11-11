import {BaseStyles, TITLE_SPACING} from './BaseStyle';
import {Appearance, Dimensions} from 'react-native';
import {FontFamily, FontSize, FontWeight} from './FontSize';
import {Color} from './Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const isDark = Appearance.getColorScheme() === 'dark';
const {height, width} = Dimensions.get('screen');

export {
  wp,
  hp,
  isDark,
  FontFamily,
  FontSize,
  FontWeight,
  Color,
  height,
  width,
  BaseStyles,
  TITLE_SPACING,
};
