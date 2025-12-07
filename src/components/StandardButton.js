import React, { useState, useMemo, useCallback } from 'react';
import { Pressable, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
import BrainboxColor from '../utils/Colors';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const wp = (percentage) => (SCREEN_WIDTH * percentage) / 100;
const hp = (percentage) => (SCREEN_HEIGHT * percentage) / 100;

const buttonHoc = (Component) => (props) => <Component {...props} />;

const StandardButton = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  const {
    testID,
    label,
    disabled,
    onPress,
    size = 'medium',
    style: customStyles,
    leftSvgIcon = null,
    leftImage = null,
    rightSvgIcon = null,
    rightImage = null,
  } = props;

  const { colors } = useTheme();

  const onPressIn = useCallback(() => {
    setIsPressed(true);
  }, []);

  const onPressOut = useCallback(() => {
    setIsPressed(false);
  }, []);

  // Container style by size
  const containerStyle = useMemo(() => {
    if (size === 'small') return styles.smallContainer;
    if (size === 'large') return styles.largeContainer;
    return styles.mediumContainer;
  }, [size]);

  // Label text style by size
  const buttonLabelStyle = useMemo(() => {
    if (size === 'small') return styles.smallButtonLabel;
    if (size === 'large') return styles.largeButtonLabel;
    return styles.mediumButtonLabel;
  }, [size]);

  // Background color logic
  const buttonBgColor = useMemo(() => {
    if (disabled) return styles.secondaryDisabledContainer.backgroundColor;
    return isPressed
      ? styles.pressedContainer.backgroundColor
      : styles.secondaryContainer.backgroundColor;
  }, [disabled, isPressed]);

  return (
    <Pressable
      testID={testID}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      onPress={onPress}
      style={[
        containerStyle,
        { backgroundColor: buttonBgColor },
        customStyles,
      ]}
    >
      {leftSvgIcon}
      {leftImage && <Image source={leftImage} style={styles.btnImg} />}
      <Text style={[buttonLabelStyle, disabled && styles.disabledText]}>
        {label}
      </Text>
      {rightSvgIcon}
      {rightImage && <Image source={rightImage} style={styles.btnImg} />}
    </Pressable>
  );
};

export default buttonHoc(StandardButton);

const styles = StyleSheet.create({
  smallContainer: {
    width: wp(85),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    flexDirection: 'row',
  },
  mediumContainer: {
    width: wp(85),
    height: hp(6.5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    flexDirection: 'row',
  },
  largeContainer: {
    width: wp(85),
    height: hp(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    flexDirection: 'row',
  },

  smallButtonLabel: {
    fontSize: 15,
    fontWeight: '600',
    color:BrainboxColor.secondary,
  },
  mediumButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color:BrainboxColor.secondary,
  },
  largeButtonLabel: {
    fontSize: 18,
    fontWeight: '600',
    color:BrainboxColor.secondary,
  },

  disabledText: {
    color: BrainboxColor.MediumGray5,
  },

  secondaryContainer: {
    backgroundColor: BrainboxColor.DarkGray6, 
  },
  secondaryDisabledContainer: {
    backgroundColor: BrainboxColor.DarkGray7, 
  },
  pressedContainer: {
    backgroundColor: BrainboxColor.MediumGray3,
  },

  btnImg: {
    width: wp(5),
    height: wp(5),
    marginRight: wp(2),
  },
});
