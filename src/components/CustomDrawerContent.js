import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Animated, Easing } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

import LogoIcon from '../assets/images/Svg/Logo.svg';
import CrossIcon from '../assets/images/Svg/cross.svg';
import EditIcon from '../assets/images/Svg/edit-svgrepo-com.svg';
import SearchIcon from '../assets/images/Svg/search-svgrepo-com.svg';
import ImageIcon from '../assets/images/Svg/image-svgrepo-com.svg';
import UserIcon from '../assets/images/Svg/Ellipse_user.svg';
import { SCREEN_HEIGHT } from '../utils/responsive';
import BrainboxColor from '../utils/Colors';

const CustomDrawerContent = (props) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Smooth infinite rotation
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 4000,       // 4 seconds for one full rotation
        easing: Easing.linear, // linear easing for smooth rotation
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Header with spinning Logo */}
      <View style={styles.header}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <LogoIcon width={65} height={65} />
        </Animated.View>

        <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={styles.crossButton}>
          <CrossIcon width={25} height={25} />
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.closeDrawer()}>
          <EditIcon width={20} height={20} />
          <Text style={styles.menuText}>New Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('SearchChats')}>
          <SearchIcon width={20} height={20} />
          <Text style={styles.menuText}>Search Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('Library')}>
          <ImageIcon width={20} height={20} />
          <Text style={styles.menuText}>Library</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.closeDrawer()}>
          <Text style={styles.menuTextv1}>Chats</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable onPress={() => props.navigation.navigate('Profile')} style={styles.profileRow}>
          <View style={styles.userIconContainer}>
            <UserIcon width={50} height={50} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.username}>Tushar Parmar</Text>
            <Text style={styles.plan}>Free</Text>
          </View>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BrainboxColor.DarkGray5,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  crossButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuText: {
    color: BrainboxColor.secondary,
    fontSize: 16,
    marginLeft: 10,
  },
  menuTextv1: {
    color: BrainboxColor.secondary,
    fontSize: 16,
    marginLeft: 10,
    marginTop: SCREEN_HEIGHT * 0.05,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: BrainboxColor.MediumGray2,
    paddingTop: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userIconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  profileInfo: {
    flexDirection: 'column',
  },
  username: {
    color: BrainboxColor.secondary,
    fontWeight: 'bold',
  },
  plan: {
    color: BrainboxColor.MediumGray4,
  },
});

export default CustomDrawerContent;
