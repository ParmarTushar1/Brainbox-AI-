import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import BrainboxContainer from '../components/BrainboxContainer';
import BrainBoxOtp from '../components/BrainBoxOtp';
import BrainBoxHeader from '../components/BrainBoxHeader';
import BrainboxColor from '../utils/Colors';
import { wp } from '../utils/responsive';
import BrainboxBottomsheet from '../components/BrainboxBottomsheet';
import PrimaryButton from '../components/PrimaryButton';

const OtpVerify = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSheetClose = (visible) => {
    setSheetVisible(visible);
    if (!visible) {
      navigation.goBack();
    }
  };

  const handleResend = () => {
    console.log('Resend Pressed');
    setTimer(60); // Reset timer
  };

  // Countdown logic
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Auto-navigate when OTP is correct
  useEffect(() => {
    if (otp === '8888') {
      navigation.navigate('WelcomeHome');
    }
  }, [otp]);

   useFocusEffect(
  useCallback(() => {
    setSheetVisible(true); 
    return () => {
      setSheetVisible(false);
    };
  }, [])
);

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={styles.screen}
    >
      <BrainBoxHeader showMenu={false} backAction={handleBackPress} />

      <BrainboxBottomsheet
        visible={sheetVisible}
        setVisible={handleSheetClose}
        title={
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>Verify Phone Number</Text>
          </View>
        }
        outsideTab={true}
      >
        <Text style={styles.subtitle}>
          We Have Sent Code To Your Phone Number
        </Text>

        <View style={styles.otpWrapper}>
          <BrainBoxOtp
            otpLength={4}
            onOtpChange={setOtp}
            successText={otp.length === 4 ? 'Looks good!' : ''}
            errorText={otp.length === 4 && otp !== '8888' ? 'Incorrect code' : ''}
          />

          <Text style={styles.timerText}>
            {timer > 0
              ? `Resend code in 00:${timer < 10 ? `0${timer}` : timer}`
              : 'You can resend the code now.'}
          </Text>

          <View style={styles.socialButtonRow}>
            {/* You can keep this if you still want manual verify */}
            <PrimaryButton
              label="Verify"
              onPress={() => {}}
              size="medium"
            />
            <PrimaryButton
              label="Resend Code"
              onPress={handleResend}
              size="medium"
              disabled={timer > 0}
            />
          </View>
        </View>
      </BrainboxBottomsheet>
    </BrainboxContainer>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BrainboxColor.Black,
    flex: 1,
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    color: BrainboxColor.secondary,
    textAlign: 'center',
  },
  subtitle: {
    color: BrainboxColor.Graysteel,
    fontSize: 14,
    marginTop: 12,
    textAlign: 'center',
  },
  otpWrapper: {
    alignSelf: 'stretch',
    marginBottom: 24,
  },
  timerText: {
    textAlign: 'center',
    color: BrainboxColor.Graysteel,
    marginVertical: 8,
    fontSize: 13,
  },
  socialButtonRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: wp(4),
  },
});

