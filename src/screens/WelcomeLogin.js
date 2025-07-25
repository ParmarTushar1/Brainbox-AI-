import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BrainboxContainer from '../components/BrainboxContainer';
import Logo from '../assets/images/Svg/Logo.svg';
import { SCREEN_HEIGHT, wp, hp } from '../utils/responsive';
import BrainboxColor from '../utils/Colors';
import StandardButton from '../components/StandardButton';
import PrimaryBoxButton from '../components/PrimaryBoxButton';
import { useNavigation } from '@react-navigation/native';

const WelcomeLogin = () => {
  const navigation = useNavigation(); 

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={styles.screen}
    >
      {/* Logo & Heading */}
      <View style={styles.headerContainer}>
        <Logo width={wp(35)} height={hp(30)} />
        <Text style={styles.headingText}>Welcome To{'\n'}BrainBox</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonWrapper}>
        <StandardButton label="Log in" onPress={() => navigation.navigate('LoginAccount')}/>
        <StandardButton label="Sign up"  onPress={() => navigation.navigate('loginScreenv1')}/>

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
    </BrainboxContainer>
  );
};

export default WelcomeLogin;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    padding: 0,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: 'ExtraBold',
    fontWeight: '800',
    fontSize: 45,
    color: BrainboxColor.secondary,
    textAlign: 'center',
    marginTop: hp(2),
  },
  buttonWrapper: {
    alignItems: 'center',
    gap: hp(2),
    marginBottom: SCREEN_HEIGHT * 0.05,
  },
  orText: {
    fontSize: 14,
    color: BrainboxColor.Graysteel,
    marginVertical: hp(1.5),
    fontFamily: 'Medium',
    top:SCREEN_HEIGHT *0.012
  },
  socialButtonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(4),
  },
});
