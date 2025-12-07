import { Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainboxColor from '../utils/Colors';
import BrainBoxHeader from '../components/BrainBoxHeader';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT } from '../utils/responsive';
import EmailIcon from '../assets/images/Svg/Email.svg';
import PhoneIcon from '../assets/images/Svg/Vector.svg';
import PrimaryButton from '../components/PrimaryButton';
import commonStyles from '../utils/commonStyles';

const ForgetPassword = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null); 

  const handleSignInPress = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (!selectedOption) {
      console.log('Please select an option first');
      return;
    }

    // Navigate to OTP screen with method passed as param
    navigation.navigate('OtpVerify', { method: selectedOption });
  };

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={commonStyles.screen}
    >
      <BrainBoxHeader showMenu={false} backAction={handleSignInPress} />

      <View style={commonStyles.headerContainer}>
        <Text style={commonStyles.titleLineOne}>Forget Password</Text>
        <Text style={commonStyles.headingTextv1Graysteel}>
          Select which contact details should we use to reset your password
        </Text>
      </View>

      <View style={commonStyles.selectionContainer}>
        <TouchableOpacity
          style={[
            commonStyles.card,
            selectedOption === 'email' && commonStyles.cardSelected,
          ]}
          onPress={() => setSelectedOption('email')}
        >
          <View style={commonStyles.iconTextRow}>
            <EmailIcon width={24} height={24} />
            <View style={commonStyles.textContainer}>
              <Text style={commonStyles.cardTitle}>Email</Text>
              <Text style={commonStyles.cardSubtitle}>Code sent to your email</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            commonStyles.card,
            selectedOption === 'phone' && commonStyles.cardSelected,
          ]}
          onPress={() => setSelectedOption('phone')}
        >
          <View style={commonStyles.iconTextRow}>
            <PhoneIcon width={24} height={24} />
            <View style={commonStyles.textContainer}>
              <Text style={commonStyles.cardTitle}>Phone</Text>
              <Text style={commonStyles.cardSubtitle}>Code sent to your sms</Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ marginTop: SCREEN_HEIGHT * 0.1 }}>
          <PrimaryButton
            label="Next"
            onPress={handleNext}
            size="medium"
            disabled={!selectedOption} // Disable until selected
          />
        </View>
      </View>
    </BrainboxContainer>
  );
};

export default ForgetPassword;
