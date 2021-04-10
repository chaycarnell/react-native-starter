import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Default guideline sizes are based on standard ~5" screen mobile device
// Suggested to set this based on the design base dimensions or device model
// Note, this approach generally works well with apps fixed to a static screen orientation, i.e. portrait
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
