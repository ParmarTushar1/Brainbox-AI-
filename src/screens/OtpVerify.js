import React, { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import BrainboxContainer from '../components/BrainboxContainer';
import BrainBoxOtp from '../components/BrainBoxOtp';
import BrainBoxHeader from '../components/BrainBoxHeader';
import { wp } from '../utils/responsive';
import BrainboxBottomsheet from '../components/BrainboxBottomsheet';
import PrimaryButton from '../components/PrimaryButton';
import commonStyles from '../utils/commonStyles';

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
      style={commonStyles.screen}
    >
      <BrainBoxHeader showMenu={false} backAction={handleBackPress} />

      <BrainboxBottomsheet
        visible={sheetVisible}
        setVisible={handleSheetClose}
        title={
          <View style={commonStyles.titleWrapper}>
            <Text style={commonStyles.titleText}>Verify Phone Number</Text>
          </View>
        }
        outsideTab={true}
      >
        <Text style={commonStyles.subtitle}>
          We Have Sent Code To Your Phone Number
        </Text>

        <View style={commonStyles.otpWrapper}>
          <BrainBoxOtp
            otpLength={4}
            onOtpChange={setOtp}
            successText={otp.length === 4 ? 'Looks good!' : ''}
            errorText={otp.length === 4 && otp !== '8888' ? 'Incorrect code' : ''}
          />

          <Text style={commonStyles.timerText}>
            {timer > 0
              ? `Resend code in 00:${timer < 10 ? `0${timer}` : timer}`
              : 'You can resend the code now.'}
          </Text>

          <View style={commonStyles.socialButtonRowColumn}>
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

