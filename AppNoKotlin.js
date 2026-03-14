import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import ForgotPasswordStep1 from './screens/ForgotPasswordStep1';
import ForgotPasswordOTP from './screens/ForgotPasswordOTP';
import ForgotPasswordReset from './screens/ForgotPasswordReset';

const Stack = createStackNavigator();

/**
 * React Native-only app entry.
 * Use this file as your JS entrypoint when you want to run only the RN flow
 * (without depending on native Kotlin screen navigation logic).
 */
export default function AppNoKotlin() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} />
        <Stack.Screen name="ForgotPasswordStep1" component={ForgotPasswordStep1} />
        <Stack.Screen name="ForgotPasswordOTP" component={ForgotPasswordOTP} />
        <Stack.Screen name="ForgotPasswordReset" component={ForgotPasswordReset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
