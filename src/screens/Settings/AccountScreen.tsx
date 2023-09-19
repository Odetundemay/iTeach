import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import PageContainer from '../../components/PageContainer';

import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '../../types/react-navigation';

const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <PageContainer>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Account</Text>
      </View>
      <View style={styles.avatarContainer}>
        <View style={styles.avatarImageContainer}>
          <Image
            source={require('../../../assets/images/avatar2.png')}
            // style={styles.avatarImage}
          />
          <View style={styles.overlayIcon}>
            <TouchableOpacity onPress={() => console.log('Pressed')}>
              <MaterialCommunityIcons
                name="file-image-plus"
                size={30}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.changeTxt}>Change Picture</Text>
      <View style={styles.containerContact}>
        <Text style={styles.contactTxt}>Email:</Text>
        <Text style={styles.contactTxtsub}>sample@gmail.com</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 10,
          gap: 10,
          marginBottom: 10,
        }}
      >
        <Text style={styles.contactTxt}>Contact Number:</Text>
        <Text style={styles.contactTxtsub}>0998 - 765 - 4321</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          paddingBottom: 10,
          gap: 10,
          marginBottom: 10,
        }}
      >
        <Text style={styles.contactTxt}>Account Information</Text>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <MaterialIcons name="add-box" size={24} color="black" />
          <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Join: 2023</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <MaterialIcons name="place" size={24} color="black" />
          <Text style={{ fontWeight: 'bold', fontSize: 10 }}>
            From: Lagos, Nigeria
          </Text>
        </View>
      </View>
    </PageContainer>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
    backgroundColor: 'rgba(48, 79, 254, 0.1)',
    borderRadius: 10,
    marginRight: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatarImageContainer: {
    position: 'relative',
  },
  avatarImage: {
    width: 110,
    height: 110,
  },
  overlayIcon: {
    position: 'absolute',
    bottom: -7,
    right: -15,
    padding: 4,
    // borderRadius: 4,
  },
  changeTxt: {
    textAlign: 'center',
    marginVertical: 10,
    textDecorationLine: 'underline',
    fontSize: 10,
  },
  containerContact: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginVertical: 10,
    gap: 10,
    paddingVertical: 10,
  },
  contactTxt: {
    color: '#9D9393',
    fontSize: 10,
    fontWeight: 'bold',
  },
  contactTxtsub: {
    color: '#3579DF',
    fontWeight: 'bold',
    fontSize: 10,
  },
});
