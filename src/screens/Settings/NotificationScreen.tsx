import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import PageContainer from '../../components/PageContainer';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '../../types/react-navigation';
import SwitchComponent from '../../components/SwitchComponent';

const NotificationScreen = () => {
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
        <Text style={styles.headerText}>Notification</Text>
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Sound</Text>
        <SwitchComponent />
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Vibrate</Text>
        <SwitchComponent />
      </View>
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>New promo available</Text>
        <SwitchComponent />
      </View>
      <View style={[styles.notificationContainer, { borderBottomWidth: 0 }]}>
        <Text style={styles.notificationText}>New service available</Text>
        <SwitchComponent />
      </View>
    </PageContainer>
  );
};

export default NotificationScreen;

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
  notificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 15,
    borderBottomColor: '#837E7E',
  },
  notificationText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
