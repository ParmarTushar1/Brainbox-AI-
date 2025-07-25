import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Export screen dimensions
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

// Width percentage
export const wp = (percentage) => {
  const value = (percentage / 100) * width;
  return Math.round(value);
};

// Height percentage
export const hp = (percentage) => {
  const value = (percentage / 100) * height;
  return Math.round(value);
};
