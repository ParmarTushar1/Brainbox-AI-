import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainboxColor from '../utils/Colors';
import BrainBoxHeader from '../components/BrainBoxHeader';
import { hp, SCREEN_WIDTH, wp } from '../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import BrainBoxInput from '../components/BrainBoxInput';
import EmailIcon from '../assets/images/Svg/Email Icon.svg';
import LockIcon from '../assets/images/Svg/Lock Icon.svg';
import EyeOffIcon from '../assets/images/Svg/Eye Off Icon.svg';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryBoxButton from '../components/PrimaryBoxButton';
import CheckIcon from '../assets/images/Svg/check-symbol-4794.svg';
import EyeOnIcon from '../assets/images/Svg/Eye-On.svg';

const LoginAccount = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [success, setSuccess] = useState({ email: false, password: false });

  const handleValidation = () => {
    let valid = true;
    const tempErrors = { email: '', password: '' };
    const tempSuccess = { email: false, password: false };

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Please enter a valid email address';
      valid = false;
    } else {
      tempSuccess.email = true;
    }

    if (!password || password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      valid = false;
    } else {
      tempSuccess.password = true;
    }

    setErrors(tempErrors);
    setSuccess(tempSuccess);
    return valid;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      setTimeout(() => {
        navigation.navigate('OtpVerify'); // ✅ Navigates to OTP screen
      }, 500);
    }
  };

  const handleSignInPress = () => {
    navigation.goBack();
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgetPassword');
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
        <Text style={styles.titleLineOne}>Login Your</Text>
        <Text style={styles.titleLineTwo}>Account</Text>
      </View>

      <View style={styles.inputContainer}>
        <BrainBoxInput
          placeholder="Enter Your Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
            if (success.email) setSuccess((prev) => ({ ...prev, email: false }));
          }}
          keyboardType="email-address"
          errorText={errors.email}
          leftSvgIcon={<EmailIcon width={20} height={20} />}
          rightSvgIcon={success.email && <CheckIcon width={18} height={18} />}
          successText={
            success.email && (
              <View style={styles.successRow}>
                <Text style={styles.successText}>Email verified successfully!</Text>
              </View>
            )
          }
        />

        <BrainBoxInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
            if (success.password) setSuccess((prev) => ({ ...prev, password: false }));
          }}
          secureTextEntry={!showPassword}
          errorText={errors.password}
          leftSvgIcon={<LockIcon width={20} height={20} />}
          rightSvgIcon={
          success.password ? (
            <CheckIcon width={18} height={18} />
          ) : showPassword ? (
            <EyeOnIcon width={20} height={20} />
          ) : (
            <EyeOffIcon width={20} height={20} />
          )
        }
          onClickRightIcon={() => setShowPassword(!showPassword)}
          successText={
            success.password && (
              <View style={styles.successRow}>
                <Text style={styles.successText}>Password looks good!</Text>
              </View>
            )
          }
        />

        <View style={styles.forgotContainer}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonSpacing} />
        <PrimaryButton label="Login" onPress={handleSubmit} size="medium" />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Create New Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialContainer}>
          <View style={styles.sectionLine} />
          <Text style={styles.orText}>Continue With Accounts</Text>
          <View style={styles.socialButtonRow}>
            <PrimaryBoxButton
              label="GOOGLE"
              backgroundColor={BrainboxColor.PersianPlum}
              onPress={() => console.log('Google login')}
            />
            <PrimaryBoxButton
              label="FACEBOOK"
              backgroundColor={BrainboxColor.CharcoalBlue}
              onPress={() => console.log('Facebook login')}
            />
          </View>
        </View>
      </View>
    </BrainboxContainer>
  );
};

export default LoginAccount;

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
  titleLineTwo: {
    fontSize: 34,
    fontWeight: '700',
    color: BrainboxColor.secondary,
  },
  inputContainer: {
    paddingHorizontal: 20,
    marginTop: hp(2),
  },
  buttonSpacing: {
    marginTop: hp(3),
  },
  forgotContainer: {
    alignItems: 'flex-end',
  },
  forgotText: {
    color: BrainboxColor.Silver,
    fontSize: 14,
    fontWeight: '400',
  },
  signupContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: BrainboxColor.Silver,
    fontSize: 14,
  },
  signupLink: {
    color: BrainboxColor.secondary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: BrainboxColor.Graysteel,
    fontWeight: '500',
  },
  socialContainer: {
    alignItems: 'center',
    marginTop: hp(9),
    gap: hp(2),
  },
  socialButtonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(4),
  },
  sectionLine: {
    height: 1,
    width: SCREEN_WIDTH * 0.9,
    backgroundColor:BrainboxColor.Silver,
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  successRow: {
    marginTop: 5,
  },
  successText: {
    color: 'green',
    fontSize: 12,
    fontWeight: '500',
  },
});
