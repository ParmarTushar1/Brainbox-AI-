import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

// Import SVGs
import LogoIcon from '../assets/images/Svg/Logo.svg';
import CrossIcon from '../assets/images/Svg/cross.svg';
import EditIcon from '../assets/images/Svg/edit-svgrepo-com.svg';
import SearchIcon from '../assets/images/Svg/search-svgrepo-com.svg';
import ImageIcon from '../assets/images/Svg/image-svgrepo-com.svg';
import UserIcon from '../assets/images/Svg/Ellipse_user.svg';
import { SCREEN_HEIGHT } from '../utils/responsive';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Header with Logo and Close */}
      <View style={styles.header}>
        <LogoIcon width={65} height={65} />
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <CrossIcon width={25} height={25} />
        </TouchableOpacity>
      </View>

      {/* Drawer Items */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => props.navigation.navigate('NewChat')}>
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
      <UserIcon width={50} height={50} />
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
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
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
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
    menuTextv1: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
    marginTop: SCREEN_HEIGHT * 0.05, 
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingTop: 16,
  },
  username: {
    color: '#fff',
    fontWeight: 'bold',
  },
  plan: {
    color: '#888',
  },
  profileImage: {
  marginBottom: 10,
  alignSelf: 'flex-start',
  },
  profileRow: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12, 
  },
  profileInfo: {
  flexDirection: 'column',
  },
  });

export default CustomDrawerContent;
