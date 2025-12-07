import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import {
  View,
  TextInput,
  Animated,
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import ErrorIcon from '../assets/images/Svg/ErrorIcon.svg';
import CheckIcon from '../assets/images/Svg/check-symbol-4794.svg';
import { hp } from '../utils/responsive';
import BrainboxColor from '../utils/Colors';

const BrainBoxInput = forwardRef(({
  value = '',
  placeholder = '',
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  onClickRightIcon,
  rightSvgIcon = null,
  leftSvgIcon = null,
  disabled = false,
  maxLength,
  customTextInputStyle = {},
  showRightIcons = true,
  onFocusTextInput = () => {},
  onPressTextInput = () => {},
  errorText = '',
  successText = '',
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const animation = useRef(new Animated.Value(value ? 1 : 0)).current;
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    clear: () => {
      inputRef.current?.clear();
    },
    // Add more methods if needed
  }));

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current?.focus();
    onFocusTextInput();
  };

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute',
    left: leftSvgIcon ? 48 : 16,
    color: errorText
      ? BrainboxColor.ErrorRed2
      : isFocused
      ? BrainboxColor.secondary
      : successText
      ? BrainboxColor.SuccessGreen2
      : BrainboxColor.MediumGray4,
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 13],
    }),
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 6],
    }),
    fontFamily: 'Manrope-Medium',
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleFocus}
        style={[
          styles.inputWrapper,
          errorText
            ? styles.errorBorder
            : successText
            ? styles.successBorder
            : isFocused
            ? styles.focusBorder
            : styles.defaultBorder,
        ]}
      >
        <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>

        {leftSvgIcon && <View style={styles.leftIcon}>{leftSvgIcon}</View>}

        <View style={styles.flex1}>
          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            onFocus={() => {
              setIsFocused(true);
              onFocusTextInput();
            }}
            onBlur={() => setIsFocused(false)}
            maxLength={maxLength}
            editable={!disabled}
            style={[styles.textInput, customTextInputStyle]}
            placeholder=""
          />
        </View>

        {showRightIcons && rightSvgIcon && (
          <Pressable onPress={onClickRightIcon} style={styles.rightIcon}>
            {rightSvgIcon}
          </Pressable>
        )}
      </Pressable>

      {errorText ? (
        <View style={styles.errorRow}>
          <ErrorIcon width={14} height={14} />
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      ) : null}

      {!errorText && successText ? (
        <View style={styles.successRow}>
          <CheckIcon width={14} height={14} />
          <Text style={styles.successText}>{successText}</Text>
        </View>
      ) : null}
    </View>
  );
});

export default BrainBoxInput;


const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  inputWrapper: {
    height: 66,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: BrainboxColor.DarkGray4,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
  },
  leftIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  textInput: {
    fontSize: 16,
    color: BrainboxColor.secondary,
    paddingVertical: 0,
    fontFamily: 'Manrope-Medium',
  },
  defaultBorder: {
    borderColor: BrainboxColor.MediumGray,
  },
  focusBorder: {
    borderColor: BrainboxColor.secondary,
    shadowColor: BrainboxColor.WhiteOpacity,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  errorBorder: {
    borderColor: BrainboxColor.ErrorRed2,
    shadowColor: BrainboxColor.RedOpacity,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  successBorder: {
    borderColor: BrainboxColor.SuccessGreen2,
    shadowColor: BrainboxColor.SuccessGreen2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  errorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 4,
  },
  errorText: {
    color: BrainboxColor.ErrorRed2,
    fontSize: 12,
    marginLeft: 4,
    fontFamily: 'Manrope-Medium',
    height: hp(2.2),
  },
  successRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 4,
  },
  successText: {
    color: BrainboxColor.SuccessGreen2,
    fontSize: 12,
    marginLeft: 4,
    fontFamily: 'Manrope-Medium',
    height: hp(2.2),
  },
});
