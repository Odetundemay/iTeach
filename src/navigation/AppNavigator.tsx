import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../screens/Dashboard';
import AuthStack from './AuthStack';

import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../config/firebase';
import AppStack from './AppStack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{ headerShown: false }}
      >
        {user ? (
          <Stack.Screen name="Dashboard" component={AppStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
