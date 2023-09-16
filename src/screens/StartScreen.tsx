import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.image}
        />
        <Text style={styles.logoTxt}>TAKING YOU FORWARD</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => console.log('Click here')}>
            <Text style={styles.linkText}>Click here.</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03111E',
    padding: 20,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
  },
  logoTxt: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  linkText: {
    color: '#20B708',
    fontSize: 15,
  },
  buttonContainer: {
    backgroundColor: '#FFC34E',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default StartScreen;
