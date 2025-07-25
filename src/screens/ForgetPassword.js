import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainboxColor from '../utils/Colors';
import BrainBoxHeader from '../components/BrainBoxHeader';
import { useNavigation } from '@react-navigation/native';
import { hp, SCREEN_HEIGHT } from '../utils/responsive';
import EmailIcon from '../assets/images/Svg/Email.svg';
import PhoneIcon from '../assets/images/Svg/Vector.svg';
import PrimaryButton from '../components/PrimaryButton';

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
      style={styles.screen}
    >
      <BrainBoxHeader showMenu={false} backAction={handleSignInPress} />

      <View style={styles.headerContainer}>
        <Text style={styles.titleLineOne}>Forget Password</Text>
        <Text style={styles.headingTextv1}>
          Select which contact details should we use to reset your password
        </Text>
      </View>

      <View style={styles.selectionContainer}>
        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === 'email' && styles.cardSelected,
          ]}
          onPress={() => setSelectedOption('email')}
        >
          <View style={styles.iconTextRow}>
            <EmailIcon width={24} height={24} />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Email</Text>
              <Text style={styles.cardSubtitle}>Code sent to your email</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            selectedOption === 'phone' && styles.cardSelected,
          ]}
          onPress={() => setSelectedOption('phone')}
        >
          <View style={styles.iconTextRow}>
            <PhoneIcon width={24} height={24} />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Phone</Text>
              <Text style={styles.cardSubtitle}>Code sent to your sms</Text>
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

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BrainboxColor.Black,
    flex: 1,
  },
  headerContainer: {
    marginTop: hp(2),
    paddingHorizontal: 20,
  },
  titleLineOne: {
    fontSize: 34,
    fontWeight: '700',
    color: BrainboxColor.secondary,
  },
  headingTextv1: {
    fontWeight: '600',
    fontFamily: 'SemiBold',
    fontSize: 16,
    color: BrainboxColor.Silver,
    marginTop: 15,
  },
  selectionContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  card: {
    backgroundColor:BrainboxColor.Onyx,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  cardSelected: {
    borderWidth: 1.5,
    borderColor: BrainboxColor.secondary,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 12,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: BrainboxColor.gray,
    fontSize: 14,
    marginTop: 4,
  },
});
