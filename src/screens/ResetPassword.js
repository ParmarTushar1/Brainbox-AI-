import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-gesture-handler';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainBoxHeader from '../components/BrainBoxHeader';
import BrainBoxInput from '../components/BrainBoxInput';
import PrimaryButton from '../components/PrimaryButton';
import BrainboxBottomsheet from '../components/BrainboxBottomsheet';
import commonStyles from '../utils/commonStyles';
import BrainboxColor from '../utils/Colors';

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
      style={commonStyles.screen}
    >
      <BrainBoxHeader showMenu={false} backAction={handleGoBack} />

      <View style={commonStyles.headerContainer}>
        <Text style={commonStyles.titleLineOne}>Reset Your</Text>
        <Text style={commonStyles.titleLineTwo}>Password</Text>
      </View>

      <View style={commonStyles.inputContainer}>
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
    <Text style={{ color: BrainboxColor.secondary, fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
      🎉 Password Reset Successful!
    </Text>
    <Text style={{ color: BrainboxColor.LightGray2, marginTop: 8, textAlign: 'center' }}>
      Your password has been updated.
    </Text>
    <Text style={{ color: BrainboxColor.LightGray2, textAlign: 'center' }}>
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
