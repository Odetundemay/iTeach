import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import PageContainer from '../../components/PageContainer';

import { Ionicons, AntDesign } from '@expo/vector-icons';
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
        <Text style={styles.versionTxt}>Version: 01.01.20.20</Text>
        <Text style={styles.corporationTxt}>Odetunde Codes</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: '300' }}>Copyright</Text>
          <AntDesign name="copyright" size={13} color="black" />
          <Text style={{ fontSize: 10, fontWeight: '300' }}>2023</Text>
        </View>
      </View>
      <View style={styles.privacyContainer}>
        <Text style={styles.privacy}>Privacy & Cookies</Text>
        <Text style={styles.privacy}>Terms of Use</Text>
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
  versionTxt: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 12,
  },
  corporationTxt: {
    marginTop: 8,
    fontWeight: '300',
    fontSize: 12,
  },
  privacyContainer: {
    borderTopWidth: 1,
    marginTop: 30,
    gap: 20,
    paddingLeft: 8,
  },
  privacy: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 12,
  },
});
