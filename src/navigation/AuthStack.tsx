import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';

const Auth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Auth.Screen name="StartScreen" component={StartScreen} />
      <Auth.Screen name="Register" component={RegisterScreen} />
      <Auth.Screen name="Login" component={LoginScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
