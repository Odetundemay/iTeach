import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { FIREBASE_AUTH } from '../config/firebase';

const CustomDrawer = (props: any) => {
  const handleSignout = async (): Promise<void> => {
    try {
      await FIREBASE_AUTH.signOut();
    } catch (error) {
      console.log('Error is: ', error);
    }
  };
  return (
    <View style={{ backgroundColor: '#F5F6FE', flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ gap: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 20,
            marginBottom: 30,
          }}
        >
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{ width: 60, height: 60, borderRadius: 10, marginRight: 20 }}
          />
          <View>
            <Text>John Doe</Text>
            <Text>Student</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
        <View
          style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}
        >
          <TouchableOpacity
            onPress={handleSignout}
            style={{ paddingVertical: 15 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                }}
              >
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
