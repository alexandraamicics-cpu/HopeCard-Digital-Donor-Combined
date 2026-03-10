import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ForgotPasswordStep1 from './src/screens/ForgotPasswordStep1';
import ForgotPasswordOTP from './src/screens/ForgotPasswordOTP';
import ForgotPasswordReset from './src/screens/ForgotPasswordReset';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ForgotPasswordStep1" component={ForgotPasswordStep1} />
        <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} />
        <Stack.Screen name="ForgotPasswordReset" component={ForgotPasswordReset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
