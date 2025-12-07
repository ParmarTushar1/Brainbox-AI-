import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Animated,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Keyboard,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import CrossIcon from '../assets/images/Svg/cross.svg';
import BrainboxModal from './BrainboxModal';
import { SCREEN_HEIGHT } from '../utils/responsive';
import BrainboxColor from '../utils/Colors';

const BrainboxBottomsheet = ({
  children,
  visible,
  setVisible = () => {},
  onRequestClose = () => {},
  onDismiss = () => {},
  showCrossIcon = false,
  showTitle = true,
  title = '',
  titleColor = BrainboxColor.secondary,
  titleViewStyle,
  onClickCross = () => {},
  maxHeight = 540,
  showAboveLine = false,
  showBelowLine = false,
  outsideTab = false,
  style: customStyles = {},
}) => {
  const { colors } = useTheme();
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [isMounted, setIsMounted] = useState(visible);

  const animateIn = () => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const animateOut = (callback) => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      callback?.();
      setIsMounted(false);
    });
  };

  const closeModal = () => {
    Keyboard.dismiss();
    animateOut(() => {
      onClickCross();
      setVisible(false);
    });
  };

  useEffect(() => {
    if (visible) {
      setIsMounted(true);
      slideAnim.setValue(0); // reset before animating
      animateIn();
    } else if (isMounted) {
      animateOut();
    }
  }, [visible]);

  if (!isMounted) return null;

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0],
  });

  const BottomSheetContent = (
    <Animated.View
      style={[
        styles.bottomSheet,
        { transform: [{ translateY }] },
        customStyles,
      ]}
    >
      <TouchableWithoutFeedback>
        <View style={[{ padding: 24, maxHeight }, titleViewStyle]}>
          <View style={styles.header}>
            {showTitle && (
              <Text style={[styles.title, { color: titleColor }]}>
                {title}
              </Text>
            )}
            {showCrossIcon && (
              <Pressable onPress={closeModal} style={styles.crossButton}>
                <CrossIcon height={24} width={24} fill={colors.text} />
              </Pressable>
            )}
          </View>

          {showAboveLine && <View style={styles.divider} />}
          {children}
          {showBelowLine && <View style={styles.divider} />}
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );

  return (
    <BrainboxModal
      visible={isMounted}
      transparent
      onRequestClose={onRequestClose}
      onDismiss={onDismiss}
    >
      <TouchableWithoutFeedback onPress={outsideTab ? closeModal : null}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 20}
          style={styles.overlay}
        >
          {outsideTab ? BottomSheetContent : (
            <TouchableWithoutFeedback>{BottomSheetContent}</TouchableWithoutFeedback>
          )}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </BrainboxModal>
  );
};

export default BrainboxBottomsheet;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  bottomSheet: {
    backgroundColor: BrainboxColor.Onyx,
    borderRadius: 20,
    paddingBottom: Platform.OS === 'ios' ? 32 : 16,
    overflow: 'hidden',
    alignSelf: 'center',
    width: '89%',
    maxWidth: 500,
    marginBottom: SCREEN_HEIGHT * 0.020,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  crossButton: {
    height: 44,
    width: 44,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: BrainboxColor.LightGray3,
    marginVertical: 12,
  },
});
