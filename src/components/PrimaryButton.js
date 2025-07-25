import React, { useState, useMemo, useCallback } from 'react';
import { Pressable, Text, Image, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { wp, hp } from '../utils/responsive';

const PrimaryButton = ({
  testID,
  label,
  disabled = false,
  onPress,
  size = 'small',
  style: customStyles,
  leftSvgIcon = null,
  leftImage = null,
  rightSvgIcon = null,
  rightImage = null,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const { colors } = useTheme();

  const onPressIn = useCallback(() => setIsPressed(true), []);
  const onPressOut = useCallback(() => setIsPressed(false), []);

  const buttonBgColor = useMemo(() => {
    return disabled
      ? colors.primaryLight?.primaryLight4 || '#444'
      : !isPressed
      ? '#1C1E1F' // consistent with dark background in screenshot
      : '#333';   // pressed state
  }, [disabled, isPressed, colors]);

  const containerStyle = useMemo(() => {
    if (size === 'medium') return styles.mediumContainer;
    if (size === 'large') return styles.largeContainer;
    return styles.smallContainer;
  }, [size]);

  const buttonLabelStyle = useMemo(() => {
    if (size === 'medium') return styles.mediumButtonLabel;
    if (size === 'large') return styles.largeButtonLabel;
    return styles.smallButtonLabel;
  }, [size]);

  return (
    <Pressable
      testID={testID}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      disabled={disabled}
      style={[
        containerStyle,
        {
          backgroundColor: buttonBgColor,
          opacity: disabled ? 0.6 : 1,
        },
        customStyles,
      ]}
    >
      {leftSvgIcon}
      {leftImage && <Image source={leftImage} style={styles.btnImg} />}
      <Text style={buttonLabelStyle}>{label}</Text>
      {rightSvgIcon}
      {rightImage && <Image source={rightImage} style={styles.btnImg} />}
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  smallContainer: {
    width: wp(70),
    height: hp(6.5),
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#1C1E1F',
  },
  mediumContainer: {
    width: wp(80),
    height: hp(7),
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1C1E1F',
  },
  largeContainer: {
    width: wp(95),
    height: hp(7.5),
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#1C1E1F',
  },
  smallButtonLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Medium',
    letterSpacing: 0.5,
  },
  mediumButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Medium',
    letterSpacing: 0.5,
  },
  largeButtonLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#fff',
    fontFamily: 'Medium',
    letterSpacing: 0.8,
  },
  btnImg: {
    width: 20,
    height: 20,
    marginHorizontal: 6,
    resizeMode: 'contain',
  },
});
