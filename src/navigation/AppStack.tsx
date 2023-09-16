import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import SettingsScreen from '../screens/SettingsScreen';
import InstructorScreen from '../screens/InstructorScreen';
import SchedulesScreen from '../screens/SchedulesScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Instructors" component={InstructorScreen} />
      <Drawer.Screen name="Schedules" component={SchedulesScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
