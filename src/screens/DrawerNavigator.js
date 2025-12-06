import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import BrainboxHome from '../screens/BrainboxHome';
import CustomDrawerContent from '../components/CustomDrawerContent'; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} 
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#ccc',
        drawerStyle: {
          backgroundColor: '#121212',
          width: 280,
        },
        sceneContainerStyle: {
          backgroundColor: '#000',
        },
        overlayColor: 'rgba(0, 0, 0, 0.5)',
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
