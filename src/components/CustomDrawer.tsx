import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#F5F6FE' }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: 20,
          }}
        >
          <Image
            source={require('../../assets/images/avatar.png')}
            style={{ width: 55, height: 55, borderRadius: 10 }}
          />
          <View>
            <Text>John Doe</Text>
            <Text>Student</Text>
          </View>
          <FontAwesome5 name="greater-than" size={20} color="black" />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Text>Hellonnn</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
