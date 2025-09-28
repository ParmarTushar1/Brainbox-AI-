import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BrainboxHome from '../screens/BrainboxHome';
import CustomDrawerContent from '../components/CustomDrawerContent'; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} 
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#ccc',
        drawerStyle: {
          backgroundColor: '#121212',
        },
        sceneContainerStyle: {
          backgroundColor: '#000',
        },
      }}
    >
      <Drawer.Screen name="Home" component={BrainboxHome} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
