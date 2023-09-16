import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { doc, getDoc } from 'firebase/firestore';
const Dashboard = () => {
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleSignout = async (): Promise<void> => {
    try {
      await FIREBASE_AUTH.signOut();
    } catch (error) {
      setError('Error signing out');
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const user = FIREBASE_AUTH.currentUser;
        console.log('User:', user?.uid);

        if (user) {
          console.log('Fetching user details...');
          // Fetch user details from Firestore using the user's UID
          const userDoc = await getDoc(doc(FIRESTORE_DB, 'users', user.uid));
          // setLoading(false);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('User data:', JSON.stringify(userData, null, 2));
            setUserInfo(userData);
            setLoading(false);
          } else {
            setError('User not found in Firestore');
            setLoading(false);
          }
          // Rest of your code
        } else {
          console.log('User is not authenticated');
          setError('User is not authenticated');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('Error fetching user details');
        setLoading(false);
      }
    };

    getUserDetails();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loading ? <Text>Loading...</Text> : null}
      {error ? (
        <View>
          <Text>Error: {error}</Text>
        </View>
      ) : (
        <View>
          <Text>Dashboard</Text>
          <View>
            <Text>Welcome {userInfo?.Name}</Text>
            <Text>Email: {userInfo?.Email}</Text>
            <TouchableOpacity style={styles.button} onPress={handleSignout}>
              <Text style={{ color: '#ffff', fontSize: 20 }}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    marginTop: 30,
  },
});
