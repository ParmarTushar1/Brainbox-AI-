import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import BrainboxHome from '../screens/BrainboxHome';
import CustomDrawerContent from '../components/CustomDrawerContent';
import BrainboxColor from '../utils/Colors'; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} 
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerActiveTintColor: BrainboxColor.secondary,
        drawerInactiveTintColor: BrainboxColor.LightGray,
        drawerStyle: {
          backgroundColor: BrainboxColor.DarkGray5,
          width: 280,
        },
        sceneContainerStyle: {
          backgroundColor: BrainboxColor.Black,
        },
        overlayColor: 'rgba(0, 0, 0, 0.5)', // Keep rgba for overlay transparency
        swipeEnabled: true,
        gestureHandlerProps: {
          enableTrackpadTwoFingerGesture: true,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={BrainboxHome}
        options={{
          gestureEnabled: true,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
