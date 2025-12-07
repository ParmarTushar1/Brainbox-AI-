import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  Text,
} from 'react-native';

import ErrorIcon from '../assets/images/Svg/ErrorIcon.svg';
import CheckIcon from '../assets/images/Svg/check-symbol-4794.svg';
import { hp, SCREEN_WIDTH } from '../utils/responsive';
import BrainboxColor from '../utils/Colors';

const BrainBoxOtp = ({
  otpLength = 6,
  placeholder = 'Enter OTP',
  onOtpChange = () => {},
  errorText = '',
  successText = '',
  disabled = false,
  containerStyle = {},
  customInputStyle = {},
}) => {
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  const [isFocused, setIsFocused] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const inputsRef = useRef([]);

  const otpValue = otp.join('');

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isFocused || otpValue ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isFocused, otpValue]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    onOtpChange(newOtp.join(''));

    if (text && index < otpLength - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const hasError = !!errorText;
  const hasSuccess = !hasError && !!successText;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.otpContainer}>
        {Array(otpLength)
          .fill('')
          .map((_, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              value={otp[index]}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              editable={!disabled}
              style={[
                styles.otpInput,
                customInputStyle,
                hasError
                  ? styles.errorBorder
                  : hasSuccess
                  ? styles.successBorder
                  : styles.defaultBorder,
              ]}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              returnKeyType="done"
              textAlign="center"
              placeholder=""
            />
          ))}
      </View>

      <View style={styles.messageWrapper}>
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
    </View>
  );
};

export default BrainBoxOtp;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 12,
    borderWidth: 1.5,
    marginHorizontal: 6,
    fontSize: 20,
    fontFamily: 'Manrope-Medium',
    color:BrainboxColor.secondary,
    backgroundColor: 'transparent',
  },
  defaultBorder: {
    borderColor: BrainboxColor.LightGray,
  },
  errorBorder: {
    borderColor: BrainboxColor.ErrorRed2,
  },
  successBorder: {
    borderColor: BrainboxColor.SuccessGreen2,
  },
  messageWrapper: {
    alignSelf: 'flex-start',
    marginLeft: SCREEN_WIDTH*0.1, 
  },
  errorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
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
  },
  successText: {
    color: 'limegreen',
    fontSize: 12,
    marginLeft: 4,
    fontFamily: 'Manrope-Medium',
    height: hp(2.2),
  },
});
