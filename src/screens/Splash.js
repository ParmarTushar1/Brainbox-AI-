import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import Logo from '../assets/images/Svg/Logo.svg';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainboxColor from '../utils/Colors';
import commonStyles from '../utils/commonStyles';

const Splash = ({ navigation }) => {
  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(0);
  const textTranslateY = useSharedValue(0);
  const textOpacity = useSharedValue(1);

  useEffect(() => {
    // Start entrance animation
    scale.value = withTiming(1, {
      duration: 3000,
      easing: Easing.out(Easing.exp),
    });

    opacity.value = withTiming(1, {
      duration: 3000,
      easing: Easing.out(Easing.ease),
    });

    // Start exit animation after 5 seconds
    const timeout = setTimeout(() => {
      // Text slides down and fades out
      textTranslateY.value = withTiming(30, { duration: 500 });
      textOpacity.value = withTiming(0, { duration: 500 });

      // Logo scales down and fades out
      scale.value = withTiming(0.5, {
        duration: 450,
        easing: Easing.in(Easing.exp),
      });

      opacity.value = withTiming(0, {
        duration: 450,
        easing: Easing.in(Easing.ease),
      }, (finished) => {
        if (finished) {
          runOnJS(navigation.replace)('Splash_two');
        }
      });
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  const animatedTextStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: textTranslateY.value }],
    opacity: textOpacity.value,
  }));

  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={commonStyles.screenWithPadding}
    >
      <View style={commonStyles.centerContainer}>
        <Animated.View style={animatedLogoStyle}>
          <Logo width={120} height={120} />
        </Animated.View>
        <Animated.View style={[commonStyles.footer, animatedTextStyle]}>
          <Text style={commonStyles.footerText}>Brainbox AI</Text>
          <Text style={commonStyles.footerTextTwo}>Version 0.1</Text>
        </Animated.View>
      </View>
    </BrainboxContainer>
  );
};

export default Splash;
