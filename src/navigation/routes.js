import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Splash_two from '../screens/Splash_two';
import WelcomeLogin from '../screens/WelcomeLogin';
import loginScreen from '../screens/loginScreen';
import PhoneNumbe from '../screens/PhoneNumber';
import OtpVerify from '../screens/OtpVerify';
import WelcomeHome from '../screens/WelcomeHome';
import LoginAccount from '../screens/LoginAccount';
import ForgetPassword from '../screens/ForgetPassword';
import DrawerNavigator from '../screens/DrawerNavigator';
import ResetPassword from '../screens/ResetPassword';
import ChatInputBar from '../screens/ChatInputBar';
import UserProfile from '../components/UserProfile';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen 
        name="Splash" 
        component={Splash} 
        options={{ headerShown: false }} />
      <Stack.Screen 
          name="Splash_two" 
          component={Splash_two} 
          options={{ 
            headerShown: false,
            presentation: 'modal', 
            animation: 'slide_from_right'
          }} 
        />
        <Stack.Screen 
        name="WelcomeLogin" 
        component={WelcomeLogin} 
        options={{ headerShown: false,
        presentation: 'modal', 
        animation: 'slide_from_right'
         }}
       />
       <Stack.Screen 
          name="LoginAccount" 
          component={LoginAccount} 
          options={{ 
            headerShown: false,
            presentation: 'modal', 
            animation: 'slide_from_right'
          }} 
        />
        <Stack.Screen 
          name="ForgetPassword" 
          component={ForgetPassword} 
          options={{ 
            headerShown: false,
            presentation: 'modal', 
            animation: 'slide_from_right'
          }} 
        />
       <Stack.Screen 
        name="loginScreenv1" 
        component={loginScreen} 
        options={{ headerShown: false,
        presentation: 'modal', 
        animation: 'slide_from_right'
         }}
       />
       <Stack.Screen 
          name="PhoneNumbe" 
          component={PhoneNumbe} 
          options={{ 
            headerShown: false,
            presentation: 'modal', 
            animation: 'slide_from_right'
          }} 
        />
        <Stack.Screen 
          name="OtpVerify" 
          component={OtpVerify} 
          options={{ 
            headerShown: false,
            presentation: 'modal', 
            animation: 'slide_from_right'
          }} 
        />
        <Stack.Screen 
          name="WelcomeHome" 
          component={WelcomeHome} 
          options={{ 
            headerShown: false,
            presentation: 'modal', 
            animation: 'slide_from_right'
          }} 
        />
        <Stack.Screen 
          name="BrainboxHome" 
          component={DrawerNavigator} 
          options={{ 
            headerShown: false,
            presentation: 'modal', 
            animation: 'slide_from_right'
          }} 
        />
        <Stack.Screen 
        name="MainApp" 
        component={DrawerNavigator} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPassword} 
          options={{ 
            headerShown: false,
            presentation: 'modal', 
            animation: 'slide_from_right'
          }} 
        />
        <Stack.Screen 
        name="ChatInputBar" 
        component={ChatInputBar} 
        options={{ headerShown: false }} 
        />
        <Stack.Screen 
        name="UserProfile" 
        component={UserProfile} 
        options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

