import React from 'react';
import {
  Platform,
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import BrainboxColor from '../utils/Colors';

const BrainboxContainer = ({
  testID,
  statusBarHidden = false,
  statusBarStyle = 'light-content',
  statusBarColor = 'transparent',
  style: customStyle,
  children,
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={statusBarStyle}
        hidden={statusBarHidden}
      />

      <View
        testID={testID}
        style={[
          styles.container,
          {
            backgroundColor: customStyle?.backgroundColor || 'black',
          },
          customStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default BrainboxContainer;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
