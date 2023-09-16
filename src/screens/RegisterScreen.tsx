import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { AntDesign } from '@expo/vector-icons';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';

import { FIREBASE_AUTH, FIRESTORE_DB } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '../types/react-navigation';

const RegisterScreen = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [validationMessage, setValidationMessage] = useState<string>('');

  const navigation = useNavigation();

  // Function to validate email using regex
  const validateEmail = (email: string) => {
    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(email);
  };

  const handleSignup = async () => {
    setIsLoading(true);
    // Reset validation errors
    setValidationMessage('');

    // Check if any input field is empty
    if (!username && !email && !password && !confirmPassword) {
      setValidationMessage('All fields are required');
      setIsLoading(false);
      return;
    }

    // Check if any input field is empty
    if (!username) {
      setValidationMessage('Username field is required');
      setIsLoading(false);
      return;
    }
    if (!email) {
      setValidationMessage('Email field is required');
      setIsLoading(false);
      return;
    }
    if (!password) {
      setValidationMessage('Password field is required');
      setIsLoading(false);
      return;
    }
    if (!confirmPassword) {
      setValidationMessage('Confirm password is required');
      setIsLoading(false);
      return;
    }

    // Validate the email
    if (!validateEmail(email)) {
      setValidationMessage('Invalid email format');
      setIsLoading(false);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setValidationMessage('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email.trim(),
        password,
      );
      const user = userCredential.user;
      setIsLoading(false);
      await setDoc(doc(FIRESTORE_DB, 'users', user.uid), {
        Name: username,
        Email: email,
        CreatedAt: new Date().toUTCString(),
      });
      alert('Account created successfully 🎉');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'height' : undefined}
      // keyboardVerticalOffset={30}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.cancelBtn}>Cancel</Text>
        </Pressable>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTxt}>Hey! Welcome</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign Up</Text>
        </View>
        <Text style={styles.connectText}>Connect using social networks</Text>
        <View style={styles.socialIcons}>
          <AntDesign name="facebook-square" size={35} color="#4267B2" />
          <Image
            source={require('../../assets/images/google.png')}
            style={styles.googleIcon}
          />
        </View>
        <Text style={styles.orText}>or continue with</Text>
        <Input
          placeholder="Full Name"
          iconName={'user'}
          value={username}
          onChangeText={(text) => {
            setValidationMessage('');
            setUsername(text);
          }}
        />
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
        <Input
          placeholder="Confirm Password"
          iconName={'lock'}
          value={confirmPassword}
          onChangeText={(text) => {
            setValidationMessage('');
            setConfirmPassword(text);
          }}
        />
        {validationMessage !== '' && (
          <Text style={styles.validationMessage}>{validationMessage}</Text>
        )}
        <CustomButton onPress={handleSignup} />
        <View style={styles.linkContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  cancelBtn: {
    color: '#740505',
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#000000',
    alignSelf: 'center',
    paddingVertical: 10,
    marginTop: 17,
    padding: 10,
  },
  headerTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    borderBottomColor: '#C21B1B',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#020202',
    marginTop: 30,
  },
  connectText: {
    fontSize: 15,
    marginTop: 9,
    textAlign: 'center',
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
