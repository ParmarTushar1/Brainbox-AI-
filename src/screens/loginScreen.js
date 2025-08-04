import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import BrainboxContainer from '../components/BrainboxContainer';
import BrainBoxHeader from '../components/BrainBoxHeader';
import { hp, SCREEN_HEIGHT, SCREEN_WIDTH, wp } from '../utils/responsive';
import BrainboxColor from '../utils/Colors';
import UserIcon from '../assets/images/Svg/User Icon.svg';
import EmailIcon from '../assets/images/Svg/Email Icon.svg';
import LockIcon from '../assets/images/Svg/Lock Icon.svg';
import EyeOffIcon from '../assets/images/Svg/Eye Off Icon.svg';
import BrainBoxInput from '../components/BrainBoxInput';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryBoxButton from '../components/PrimaryBoxButton';
import BrainBoxScrollContainer from '../components/BrainBoxScrollContainer';
import { useNavigation } from '@react-navigation/native';
import EyeOnIcon from '../assets/images/Svg/Eye-On.svg';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is not valid';
    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      navigation.navigate('PhoneNumbe');
      console.log('Submitting:', { fullName, email, password });
    }
  };

  const handleSignInPress = () => {
    navigation.navigate('WelcomeLogin');
  };

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={styles.screen}
    >
      <BrainBoxScrollContainer
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        enableKeyboardAvoid={true}
        keyboardVerticalOffset={hp(5)}
       >
        <BrainBoxHeader showMenu={false} backAction={handleSignInPress} />

        <View style={styles.headerContainer}>
          <Text style={styles.titleLineOne}>Create your</Text>
          <Text style={styles.titleLineTwo}>Account</Text>
        </View>

        <View style={styles.inputContainer}>
          <BrainBoxInput
            placeholder="Full Name"
            value={fullName}
            onChangeText={(text) => {
              setFullName(text);
              if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
            }}
            errorText={errors.fullName}
            leftSvgIcon={<UserIcon width={20} height={20} />}
          />
          <BrainBoxInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
            }}
            keyboardType="email-address"
            errorText={errors.email}
            leftSvgIcon={<EmailIcon width={20} height={20} />}
          />
          <BrainBoxInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
            }}
            secureTextEntry={!showPassword}
            errorText={errors.password}
            leftSvgIcon={<LockIcon width={20} height={20} />}
            rightSvgIcon={
            showPassword ? (
              <EyeOnIcon width={20} height={20} />
            ) : (
              <EyeOffIcon width={20} height={20} />
            )
            }
            onClickRightIcon={() => setShowPassword(!showPassword)}
          />

          <PrimaryButton
            label="Register"
            onPress={handleSubmit}
            size="medium"
          />

          {/* Sign In Option */}
          <View style={styles.signInRow}>
            <Text style={styles.greyText}>Already Have An Account? </Text>
            <TouchableOpacity onPress={handleSignInPress}>
              <Text style={styles.whiteText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Fixed-position-like Social Login Section */}
        <View style={styles.SectionLine} />
        <View style={styles.socialContainer}>
          <Text style={styles.orText}>Continue With Accounts</Text>
          <View style={styles.socialButtonRow}>
            <PrimaryBoxButton
              label="Google"
              backgroundColor={BrainboxColor.PersianPlum}
              onPress={() => console.log('Google login')}
            />
            <PrimaryBoxButton
              label="Facebook"
              backgroundColor={BrainboxColor.CharcoalBlue}
              onPress={() => console.log('Facebook login')}
            />
          </View>
        </View>
          </BrainBoxScrollContainer>
    </BrainboxContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BrainboxColor.Black,
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingBottom: SCREEN_HEIGHT * 0.05,
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
  titleLineTwo: {
    fontSize: 34,
    fontWeight: '700',
    color: BrainboxColor.secondary,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: hp(2),
  },
  signInRow: {
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  greyText: {
    color: BrainboxColor.gray,
    fontSize: 14,
    fontFamily: 'Medium',
  },
  whiteText: {
    color: BrainboxColor.secondary,
    fontSize: 14,
    fontFamily: 'Medium',
  },
  orText: {
    fontSize: 14,
    color: BrainboxColor.Graysteel,
    fontFamily: 'Medium',
  },
  socialContainer: {
    alignItems: 'center',
    gap: wp(5),
    marginBottom:24,
    top:SCREEN_HEIGHT*0.045

  },
  socialButtonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(4),
  },
   SectionLine: {
    height: hp('0.1'),
    backgroundColor: BrainboxColor.Silver,
    marginVertical: 20,
    width: SCREEN_WIDTH * 0.9,
    top:SCREEN_HEIGHT*0.045
  },
});
