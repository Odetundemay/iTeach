import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import PageContainer from '../../components/PageContainer';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '../../types/react-navigation';

const AboutScreen = () => {
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
        <Text style={styles.headerText}>About</Text>
      </View>
      <View style={styles.aboutContainer}>
        <Image source={require('../../../assets/images/logo2.png')} />
        <Image source={require('../../../assets/images/logoTxt.png')} />
      </View>
    </PageContainer>
  );
};

export default AboutScreen;

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
  aboutContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
});
