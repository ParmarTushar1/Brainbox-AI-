import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Splash_two from './src/screens/Splash_two';
import WelcomeLogin from './src/screens/WelcomeLogin';
import loginScreen from './src/screens/loginScreen';
import PhoneNumbe from './src/screens/PhoneNumber';
import OtpVerify from './src/screens/OtpVerify';
import WelcomeHome from './src/screens/WelcomeHome';
import LoginAccount from './src/screens/LoginAccount';
import ForgetPassword from './src/screens/ForgetPassword';
import DrawerNavigator from './src/screens/DrawerNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
