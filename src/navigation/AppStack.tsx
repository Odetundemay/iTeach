import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import InstructorScreen from '../screens/InstructorScreen';
import SchedulesScreen from '../screens/SchedulesScreen';
import CustomDrawer from '../components/CustomDrawer';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#97C93F',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} /> // Return the Icon component here
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} /> // Return the Icon component here
          ),
        }}
      />
      <Drawer.Screen
        name="Instructors"
        component={InstructorScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="people" size={24} color={color} /> // Return the Icon component here
          ),
        }}
      />
      <Drawer.Screen
        name="Schedules"
        component={SchedulesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color={color} /> // Return the Icon component here
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
