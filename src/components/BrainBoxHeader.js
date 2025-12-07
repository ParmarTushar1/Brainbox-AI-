import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import BackIcon from '../assets/images/Svg/BackIcon.svg';
import MenuIcon from '../assets/images/Svg/MenuIcon.svg';
import { SCREEN_HEIGHT } from '../utils/responsive';
import commonStyles from '../utils/commonStyles';
import BrainboxColor from '../utils/Colors';

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
    ? colors?.secondaryDark?.secondaryDark3 || BrainboxColor.Black
    : colors?.primaryLight?.primaryLight1 || BrainboxColor.secondary;

  const textColor = isDark
    ? colors?.neutralLight?.neutralLight5 || BrainboxColor.secondary
    : colors?.neutralDark?.neutralDark5 || BrainboxColor.Black;

  const dividerColor = isDark
    ? colors?.primaryDark?.primaryDark3
    : colors?.primaryLight?.primaryLight5;

  return (
    <View style={[{ backgroundColor: bgColor, width: '100%' }, style]}>
      {showNavBar && (
        <View style={[styles.headerBar]}>
          {/* Left Icon */}
          <TouchableOpacity
            style={[commonStyles.iconWrapper, backArrorContainerStyle]}
            onPress={backAction}
          >
            <View style={commonStyles.iconBackground}>
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
            <TouchableOpacity style={commonStyles.iconWrapper}>
              <View>
                {rightIcon ? rightIcon : <MenuIcon />}
              </View>
            </TouchableOpacity>
          ) : (
            <View style={commonStyles.iconWrapper} />
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
