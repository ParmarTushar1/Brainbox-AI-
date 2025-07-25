import React, { useEffect } from 'react';
import {
  StatusBar,
  SafeAreaView,
  Platform,
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import { useTheme } from '@react-navigation/native';
import BrainboxColor from '../utils/Colors';
import { hp } from '../utils/responsive';

const BrainBoxScrollContainer = ({
  testID,
  statusBarColor = 'transparent',
  statusBarHidden = false,
  statusBarStyle = 'dark-content',
  statusBarTransition = 'slide',
  showStatusBar = true,
  style: customStyle,
  contentContainerStyle = {},
  children,
  enableKeyboardAvoid = true,
  keyboardVerticalOffset = hp(5),
  ...restProps
}) => {
  const { colors } = useTheme();

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(statusBarColor);
    }
  }, [statusBarColor]);

  const Wrapper = enableKeyboardAvoid ? KeyboardAvoidingView : View;

  return (
    <>
      {showStatusBar && (
        <StatusBar
          animated
          translucent
          backgroundColor={statusBarColor}
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={statusBarHidden}
        />
      )}

      <SafeAreaView style={[styles.safeArea, { backgroundColor: statusBarColor }]}>
        <Wrapper
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.flex}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <ScrollView
            testID={testID}
            contentContainerStyle={[
              {
                // paddingHorizontal: 24,
                // paddingBottom: hp(2),
                backgroundColor: colors?.neutralLight?.neutralLight5 || BrainboxColor.Black,
              },
              contentContainerStyle,
            ]}
            style={[styles.scrollView, customStyle]}
            keyboardShouldPersistTaps="handled"
            {...restProps}
          >
            {children}
          </ScrollView>
        </Wrapper>
      </SafeAreaView>
    </>
  );
};

export default BrainBoxScrollContainer;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});
