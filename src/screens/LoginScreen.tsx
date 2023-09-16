import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { AntDesign } from '@expo/vector-icons';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

import { FIREBASE_AUTH } from '../config/firebase';
import { useNavigation } from '../types/react-navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation();

  // Function to validate email using regex
  const validateEmail = (email: string) => {
    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(email);
  };

  const handleSignin = async () => {
    setIsLoading(true);
    setValidationMessage('');

    // Check if any input field is empty
    if (!email && !password) {
      setValidationMessage('All fields are required');
      setIsLoading(false);
      return;
    }

    if (!email) {
      setValidationMessage('Email field is required');
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setValidationMessage('Invalid email format');
      setIsLoading(false);
      return;
    }

    if (!password) {
      setValidationMessage('Password field is required');
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email.trim(),
        password,
      );
      const user = userCredential.user;
      setIsLoading(false);
      alert('Account Login successfully 🎉');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        setValidationMessage('User does not exist. Please sign up.');
      } else if (error.code === 'auth/wrong-password') {
        setValidationMessage('Wrong password. Please try again.');
      } else {
        // Handle other Firebase authentication errors here
        alert(error.message);
      }
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.cancelBtn}>Cancel</Text>
      </Pressable>
      <PageContainer style={{ justifyContent: 'center', paddingTop: 0 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTxt}>Hey! Welcome</Text>
        </View>
        <View
          style={{
            borderBottomColor: '#C21B1B',
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#020202',
              marginTop: 30,
            }}
          >
            Sign In
          </Text>
        </View>
        <Text style={{ fontSize: 15, marginTop: 9, textAlign: 'center' }}>
          Connect using social networks
        </Text>
        <View style={styles.socialIcons}>
          <AntDesign name="facebook-square" size={35} color="#4267B2" />
          <Image
            source={require('../../assets/images/google.png')}
            style={styles.googleIcon}
          />
        </View>
        <Text style={styles.orText}>or continue with</Text>
        <Input
          placeholder="Email"
          iconName={'mail'}
          value={email}
          onChangeText={(text) => {
            setValidationMessage('');
            setEmail(text);
          }}
        />
        <Input
          placeholder="Password"
          iconName={'lock'}
          value={password}
          onChangeText={(text) => {
            setValidationMessage('');
            setPassword(text);
          }}
        />

        {validationMessage !== '' && (
          <Text style={styles.validationMessage}>{validationMessage}</Text>
        )}
        <CustomButton onPress={handleSignin} />

        <View style={styles.linkContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.linkText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </PageContainer>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  cancelBtn: {
    color: '#740505',
    fontSize: 15,
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#000000',
    alignSelf: 'center', // Horizontally center the view within its parent
    paddingVertical: 10,
    marginTop: 17,
  },
  headerTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  googleIcon: {
    width: 35,
    height: 35,
    marginLeft: 20,
  },
  orText: {
    marginVertical: 10,
    color: '#777',
    textAlign: 'center',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  linkText: {
    color: '#20B708',
    marginLeft: 5,
  },
  validationMessage: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});
