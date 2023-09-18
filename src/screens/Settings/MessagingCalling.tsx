import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import PageContainer from '../../components/PageContainer';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '../../types/react-navigation';

const MessagingCalling = () => {
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
        <Text style={styles.headerText}>Messaging and Calling</Text>
      </View>
      <Text>NotificationScreen</Text>
    </PageContainer>
  );
};

export default MessagingCalling;

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
});
