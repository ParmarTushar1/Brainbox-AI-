import React, { useCallback } from 'react';
import { BackHandler, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import BrainboxContainer from '../components/BrainboxContainer';
import BrainboxColor from '../utils/Colors';
import Logo from '../assets/images/Svg/Logo.svg';
import { hp, SCREEN_HEIGHT, wp } from '../utils/responsive';
import PrimaryButton from '../components/PrimaryButton';

const WelcomeHome = () => {
  // Disable back button
  useFocusEffect(
    useCallback(() => {
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
      style={styles.screen}
    >
      <View style={styles.center}>
        <Logo width={220} height={220} />
        <Text style={styles.headingText}>Welcome To{'\n'}BrainBox</Text>
        <Text style={styles.headingTextv1}>
          Start chatting with BrainBoxAI now.{'\n'}You can ask me anything.
        </Text>
      </View>

      <View style={styles.bottomButtonContainer}>
        <PrimaryButton
          label="Get started"
          onPress={() => {}}
          size="medium"
        />
      </View>
    </BrainboxContainer>
  );
};

export default WelcomeHome;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BrainboxColor.Black,
    flex: 1,
    justifyContent: 'space-between',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  headingText: {
    fontFamily: 'ExtraBold',
    fontWeight: '800',
    fontSize: 45,
    color: BrainboxColor.secondary,
    textAlign: 'center',
    marginTop: hp(2),
  },
  headingTextv1: {
    fontWeight: '600',
    fontFamily: 'SemiBold',
    fontSize: 16.5,
    color: BrainboxColor.Silver,
    marginTop: 15,
    textAlign: 'center',
  },
  bottomButtonContainer: {
    paddingHorizontal: 24,
    paddingBottom: hp(4),
  },
});
