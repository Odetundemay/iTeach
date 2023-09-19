import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import PageContainer from '../../components/PageContainer';

import { Ionicons, MaterialIcons, Foundation } from '@expo/vector-icons';
import { useNavigation } from '../../types/react-navigation';
import SwitchComponent from '../../components/SwitchComponent';

const AppPermission = () => {
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
        <Text style={styles.headerText}>App Permission</Text>
      </View>
      <View style={styles.permissionContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="photo-camera" size={20} color="black" />
          <Text style={styles.iconText}>Camera</Text>
        </View>
        <SwitchComponent />
      </View>
      <View style={styles.permissionContainer}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="mic" size={20} color="black" />
          <Text style={styles.iconText}>Microphone</Text>
        </View>
        <SwitchComponent />
      </View>
      <View style={styles.permissionContainer}>
        <View style={styles.iconContainer}>
          <Foundation name="folder" size={20} color="black" />
          <Text style={styles.iconText}>Storage</Text>
        </View>
        <SwitchComponent />
      </View>
    </PageContainer>
  );
};

export default AppPermission;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  permissionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
