import {
  Text,
  View,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState, useRef } from 'react';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainBoxHeader from '../components/BrainBoxHeader';
import { useNavigation } from '@react-navigation/native';
import BrainBoxInput from '../components/BrainBoxInput';
import Phone from '../assets/images/Svg/Phone.svg';
import CheckIcon from '../assets/images/Svg/check-symbol-4794.svg';
import PrimaryButton from '../components/PrimaryButton';
import commonStyles from '../utils/commonStyles';

const PhoneNumber = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePhoneChange = (text) => {
    const digitsOnly = text.replace(/[^0-9]/g, '');

    if (digitsOnly.length <= 10) {
      setPhone(digitsOnly);
      setSuccess(false);

      if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: '' }));
      }

      // Automatically blur (hide keyboard) when 10 digits reached
      if (digitsOnly.length === 10 && inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  const validatePhone = () => {
    const newErrors = {};

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVerifyPress = () => {
    const isValid = validatePhone();
      navigation.navigate('OtpVerify');

    if (isValid) {
      setSuccess(true);
      Keyboard.dismiss(); 
      console.log('Phone submitted:', `+91${phone}`);
      // navigation.navigate('VerifyOTP', { phone: `+91${phone}` });
    } else {
      setSuccess(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={commonStyles.wrapper}>
        <BrainboxContainer
          statusBarColor="transparent"
          statusBarStyle="light-content"
          statusBarHidden={false}
          style={commonStyles.screen}
        >
          <BrainBoxHeader showMenu={false} backAction={handleBackPress} />

          <View style={commonStyles.headerContainer}>
            <Text style={commonStyles.titleLineOne}>Enter Your Phone</Text>
            <Text style={commonStyles.titleLineTwo}>Number</Text>
          </View>

          <View style={commonStyles.inputContainerWithGap}>
            <BrainBoxInput
              ref={inputRef}
              placeholder="Phone Number"
              value={phone}
              onChangeText={handlePhoneChange}
              keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'phone-pad'}
              errorText={errors.phone}
              leftSvgIcon={<Phone width={20} height={20} />}
              leftPrefix="+91"
              editable={phone.length < 10}
              rightSvgIcon={success && <CheckIcon width={18} height={18} />}
              successText = {success && (
              <View style={commonStyles.successRow}>
                <Text style={commonStyles.successTextLime}>
                  Phone number verified successfully!
                </Text>
              </View>
            )}
            />
            <PrimaryButton
              label="Verify"
              onPress={handleVerifyPress}
              size="medium"
            />
          </View>
        </BrainboxContainer>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PhoneNumber;
