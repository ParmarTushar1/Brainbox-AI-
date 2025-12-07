import React, { useCallback } from 'react';
import { BackHandler, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import BrainboxContainer from '../components/BrainboxContainer';
import Logo from '../assets/images/Svg/Logo.svg';
import PrimaryButton from '../components/PrimaryButton';
import commonStyles from '../utils/commonStyles';
import { logFunction } from '../utils/commonFunctions';

const WelcomeHome = () => {
  const navigation = useNavigation();

  // Disable back button
  useFocusEffect(
    useCallback(() => {
      logFunction('Screen: WelcomeHome');
      const onBackPress = () => true;
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={commonStyles.screenSpaceBetween}
    >
      <View style={commonStyles.centerContainerWithPadding}>
        <Logo width={220} height={220} />
        <Text style={commonStyles.headingText}>Welcome To{'\n'}BrainBox</Text>
        <Text style={commonStyles.headingTextv1}>
          Start chatting with BrainBoxAI now.{'\n'}You can ask me anything.
        </Text>
      </View>

      <View style={commonStyles.bottomButtonContainer}>
        <PrimaryButton
          label="Get started"
          onPress={() => navigation.navigate('BrainboxHome')}
          size="medium"
        />
      </View>
    </BrainboxContainer>
  );
};

export default WelcomeHome;
