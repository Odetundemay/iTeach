import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import PageContainer from '../../components/PageContainer';

import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '../../types/react-navigation';
import SwitchComponent from '../../components/SwitchComponent';

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
      <Text style={[styles.head, { marginTop: 30, marginBottom: 10 }]}>
        Messaging
      </Text>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <View>
          <Text style={[styles.subText, { marginBottom: 5 }]}>Chat</Text>
          <Text style={styles.head}>Read Receipts</Text>
          <Text style={[styles.subText, { marginTop: 5 }]}>
            Show receipts for messanges you send and receive.
          </Text>
        </View>
        <SwitchComponent />
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Text style={styles.head}>Show channel in chat list</Text>
        <SwitchComponent />
      </View>
      <View style={styles.blockContainer}>
        <Text style={styles.head}>Calling</Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View>
            <Text style={[styles.subText, { marginBottom: 5 }]}>
              Block Calls
            </Text>
            <Text style={styles.head}>Block calls with no caller ID</Text>
          </View>
          <SwitchComponent />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.head}>Block Contacts</Text>
        <AntDesign
          name="right"
          size={20}
          color="black"
          onPress={() =>
            navigation.navigate('Messaging and Calling, Block contacts')
          }
        />
      </View>
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
  head: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 8,
    color: '#9D9393',
  },
  blockContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderTopColor: '#000000',
    paddingVertical: 20,
    gap: 5,
    marginBottom: 15,
    marginTop: 15,
  },
});
