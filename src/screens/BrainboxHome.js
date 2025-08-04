import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BrainboxContainer from '../components/BrainboxContainer';
import BrainboxColor from '../utils/Colors';
import BrainBoxHeader from '../components/BrainBoxHeader';
import { useNavigation } from '@react-navigation/native';
import DrawerMenuIcon from '../assets/images/Svg/drawer-app-menu.svg';

const BrainboxHome = () => {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
    if (navigation?.openDrawer) {
      navigation.openDrawer(); 
    }
  };
  return (
    <BrainboxContainer
      statusBarColor="transparent"
      statusBarStyle="light-content"
      statusBarHidden={false}
      style={styles.screen}
    >
      <BrainBoxHeader 
        showMenu={true} 
        leftIcon={<DrawerMenuIcon width={24} height={24} />}
        backAction={handleOpenDrawer} 
      />
    </BrainboxContainer>
  );
};

export default BrainboxHome;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: BrainboxColor.Black,
    flex: 1,
  },
});
