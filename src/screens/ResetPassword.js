import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-gesture-handler';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainboxColor from '../utils/Colors';
import BrainBoxHeader from '../components/BrainBoxHeader';
import { hp } from '../utils/responsive';
import BrainBoxInput from '../components/BrainBoxInput';
import PrimaryButton from '../components/PrimaryButton';
import BrainboxBottomsheet from '../components/BrainboxBottomsheet';

// SVG Icons
import CheckIcon from '../assets/images/Svg/check-symbol-4794.svg';
import LockIcon from '../assets/images/Svg/Lock Icon.svg';

const ResetPassword = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
  const [success, setSuccess] = useState({ password: false, confirmPassword: false });
  const [showSuccessSheet, setShowSuccessSheet] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const validatePasswords = () => {
    let valid = true;
    let newErrors = { password: '', confirmPassword: '' };

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }
    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validatePasswords()) {
      setShowSuccessSheet(true);
    }
  };

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={styles.screen}
    >
      <BrainBoxHeader showMenu={false} backAction={handleGoBack} />

      <View style={styles.headerContainer}>
        <Text style={styles.titleLineOne}>Reset Your</Text>
        <Text style={styles.titleLineTwo}>Password</Text>
      </View>

      <View style={styles.inputContainer}>
        {/* New Password */}
        <BrainBoxInput
          placeholder="New Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
            setSuccess((prev) => ({ ...prev, password: text.length >= 6 }));
          }}
          secureTextEntry={true}
          errorText={errors.password}
          successText={success.password && !errors.password ? 'Password looks good!' : ''}
          leftSvgIcon={<LockIcon width={20} height={20} />}
          rightSvgIcon={
            success.password && !errors.password ? (
              <CheckIcon width={20} height={20} />
            ) : null
          }
        />

        {/* Confirm Password */}
        <BrainBoxInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: '' }));
            setSuccess((prev) => ({
              ...prev,
              confirmPassword: text === password && text.length >= 6,
            }));
          }}
          secureTextEntry={true}
          errorText={errors.confirmPassword}
          successText={success.confirmPassword && !errors.confirmPassword ? 'Passwords match!' : ''}
          leftSvgIcon={<LockIcon width={20} height={20} />}
          rightSvgIcon={
            success.confirmPassword && !errors.confirmPassword ? (
              <CheckIcon width={20} height={20} />
            ) : null
          }
        />

        <PrimaryButton label="Reset Password" size="medium" onPress={handleSubmit} />
      </View>

<BrainboxBottomsheet
  visible={showSuccessSheet}
  setVisible={setShowSuccessSheet}
  showTitle={false}
  showCrossIcon={true}
  onClickCross={() => setShowSuccessSheet(false)}
  maxHeight={300}
>
  <View style={{ alignItems: 'center', paddingVertical: 20 }}>
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
      🎉 Password Reset Successful!
    </Text>
    <Text style={{ color: '#aaa', marginTop: 8, textAlign: 'center' }}>
      Your password has been updated.
    </Text>
    <Text style={{ color: '#aaa', textAlign: 'center' }}>
      You can now log in with your new credentials.
    </Text>

    <PrimaryButton
      label="Go to Login"
      size="medium"
      onPress={() => {
        setShowSuccessSheet(false);
        navigation.navigate('Login');
      }}
      style={{ marginTop: 20 }}
    />
  </View>
</BrainboxBottomsheet>

    </BrainboxContainer>
  );
};

export default ResetPassword;

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
});
