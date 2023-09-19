import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import PageContainer from '../../components/PageContainer';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '../../types/react-navigation';
import SwitchComponent from '../../components/SwitchComponent';
import AccordionItem from '../../components/AccordionItem';

const DataStorageScreen = () => {
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
        <Text style={styles.headerText}>Data and Storage</Text>
      </View>
      <View
        style={{
          gap: 8,
          paddingVertical: 8,
          borderBottomWidth: 1,
          marginTop: 20,
        }}
      >
        <Text style={styles.subText}>Offline files</Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: 'bold', width: '50%' }}>
              Use mobile data for Offline Files
            </Text>
            <SwitchComponent />
          </View>
        </View>
        <Text style={styles.subText}>Download over WI-FI only</Text>
      </View>
      <View style={{ gap: 8, paddingVertical: 15, borderBottomWidth: 1 }}>
        <Text style={styles.subText}>Storage</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#A79A26' }}>
          Clear app data
        </Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#A79A26' }}>
          Clear temporary filess
        </Text>
      </View>
      <View style={{ gap: 8, paddingVertical: 15, borderBottomWidth: 1 }}>
        <Text style={styles.subText}>Search</Text>
        <View>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Show history</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{ fontSize: 12, fontWeight: 'bold', color: '#A79A26' }}
            >
              Clear history
            </Text>
            <SwitchComponent />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: '#9D9393', fontSize: 10 }}>Media</Text>
        <AccordionItem title="Fast refresh" />
      </View>
    </PageContainer>
  );
};

export default DataStorageScreen;

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
  subText: {
    fontSize: 10,
    fontWeight: '300',
  },
});
