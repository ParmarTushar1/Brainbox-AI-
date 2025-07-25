import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import BackIcon from '../assets/images/Svg/BackIcon.svg';
import MenuIcon from '../assets/images/Svg/MenuIcon.svg';
import { SCREEN_HEIGHT } from '../utils/responsive';

const BrainBoxHeader = ({
  title = '',
  titleTextTestID,
  backAction,
  showNavBar = true,
  isDark = true,
  titleStyle,
  style,
  backArrorContainerStyle,
  showMenu = true,
  leftIcon,
  rightIcon,
  showDivider = false,
  bottomBarStyle,
}) => {
  const { colors } = useTheme();

  const bgColor = isDark
    ? colors?.secondaryDark?.secondaryDark3 || '#000'
    : colors?.primaryLight?.primaryLight1 || '#fff';

  const textColor = isDark
    ? colors?.neutralLight?.neutralLight5 || '#fff'
    : colors?.neutralDark?.neutralDark5 || '#000';

  const dividerColor = isDark
    ? colors?.primaryDark?.primaryDark3
    : colors?.primaryLight?.primaryLight5;

  return (
    <View style={[{ backgroundColor: bgColor, width: '100%' }, style]}>
      {showNavBar && (
        <View style={styles.headerBar}>
          {/* Left Icon */}
          <TouchableOpacity
            style={[styles.iconWrapper, backArrorContainerStyle]}
            onPress={backAction}
          >
            <View style={styles.iconBackground}>
              {leftIcon ? leftIcon : <BackIcon />}
            </View>
          </TouchableOpacity>

          {/* Title */}
          <Text
            testID={titleTextTestID}
            style={[styles.title, { color: textColor }, titleStyle]}
          >
            {title}
          </Text>

          {/* Right Icon */}
          {showMenu ? (
            <TouchableOpacity style={styles.iconWrapper}>
              <View>
                {rightIcon ? rightIcon : <MenuIcon />}
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.iconWrapper} />
          )}
        </View>
      )}

      {/* Optional bottom divider */}
      {showDivider && (
        <View
          style={[
            styles.bottomDivider,
            { borderBottomColor: dividerColor },
            bottomBarStyle,
          ]}
        />
      )}
    </View>
  );
};

export default BrainBoxHeader;


const styles = StyleSheet.create({
  headerBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: SCREEN_HEIGHT *0.045,
  },
  iconWrapper: {
    padding: 4,
    zIndex: 2,
  },
  iconBackground: {
  backgroundColor: '#2A2A2C',
  width: 40,                 
  height: 40,               
  borderRadius: 12,           
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 4,
  left: -4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 1,
  },
  bottomDivider: {
    borderBottomWidth: 1,
    width: '100%',
  },
});
