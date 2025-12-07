import React from 'react';
import { Text, View } from 'react-native';
import BrainboxContainer from '../components/BrainboxContainer';
import Logo from '../assets/images/Svg/Logo.svg';
import { wp, hp } from '../utils/responsive';
import BrainboxColor from '../utils/Colors';
import StandardButton from '../components/StandardButton';
import PrimaryBoxButton from '../components/PrimaryBoxButton';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../utils/commonStyles';

const WelcomeLogin = () => {
  const navigation = useNavigation(); 

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={commonStyles.screenWithPadding}
    >
      {/* Logo & Heading */}
      <View style={commonStyles.headerContainerCentered}>
        <Logo width={wp(35)} height={hp(30)} />
        <Text style={commonStyles.headingText}>Welcome To{'\n'}BrainBox</Text>
      </View>

      {/* Buttons Section */}
      <View style={commonStyles.buttonWrapper}>
        <StandardButton label="Log in" onPress={() => navigation.navigate('LoginAccount')}/>
        <StandardButton label="Sign up"  onPress={() => navigation.navigate('loginScreenv1')}/>

        <Text style={commonStyles.orTextTop}>Continue With Accounts</Text>

        <View style={commonStyles.socialButtonRow}>
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
