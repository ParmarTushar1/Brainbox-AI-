import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { wp, hp } from '../utils/responsive';
import BrainboxColor from '../utils/Colors';

const PrimaryBoxButton = ({ label, onPress, backgroundColor = BrainboxColor.MediumGray2, textColor = BrainboxColor.secondary }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: backgroundColor, opacity: pressed ? 0.8 : 1 },
      ]}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryBoxButton;

const styles = StyleSheet.create({
  button: {
    width: wp(40),
    height: hp(6.5),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
    fontFamily: 'Manrope-Medium',
    textTransform: 'uppercase',
  },
});
