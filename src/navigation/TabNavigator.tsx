import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Dashboard';
import CourseScreen from '../screens/CourseScreen';
import AssignmentsScreen from '../screens/AssignmentsScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import DataStorageScreen from '../screens/Settings/DataStorageScreen';
import AccountScreen from '../screens/Settings/AccountScreen';
import NotificationScreen from '../screens/Settings/NotificationScreen';
import MessagingCalling from '../screens/Settings/MessagingCalling';
import AboutScreen from '../screens/Settings/AboutScreen';
import AppPermission from '../screens/Settings/AppPermission';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings3" component={SettingsScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Data and Storage" component={DataStorageScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messaging and Calling" component={MessagingCalling} />
      <Stack.Screen name="App Permission" component={AppPermission} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#97C93F',
        tabBarInactiveTintColor: '#808080',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="home" size={24} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CourseScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="bookshelf"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Assignments"
        component={AssignmentsScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="calendar" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="inbox" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings2"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="settings" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
