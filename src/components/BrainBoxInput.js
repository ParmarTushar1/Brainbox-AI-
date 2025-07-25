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
      ? '#ff4d4f'
      : isFocused
      ? '#fff'
      : successText
      ? 'limegreen'
      : '#888',
    fontSize: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 13],
    }),
    top: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 6],
    }),
    fontFamily: 'Medium',
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
    backgroundColor: '#1c1c1e',
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
    color: '#fff',
    paddingVertical: 0,
    fontFamily: 'Medium',
  },
  defaultBorder: {
    borderColor: '#444',
  },
  focusBorder: {
    borderColor: '#fff',
    shadowColor: '#ffffffaa',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  errorBorder: {
    borderColor: '#ff4d4f',
    shadowColor: '#ff4d4faa',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 5,
  },
  successBorder: {
    borderColor: 'limegreen',
    shadowColor: 'limegreen',
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
    color: '#ff4d4f',
    fontSize: 12,
    marginLeft: 4,
    fontFamily: 'Medium',
    height: hp(2.2),
  },
  successRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 4,
  },
  successText: {
    color: 'limegreen',
    fontSize: 12,
    marginLeft: 4,
    fontFamily: 'Medium',
    height: hp(2.2),
  },
});
