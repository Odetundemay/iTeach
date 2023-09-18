import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../config/firebase';

import { doc, getDoc } from 'firebase/firestore';
import PageContainer from '../components/PageContainer';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string>(''); // Add a state for the greeting message

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const user = FIREBASE_AUTH.currentUser;

        if (user) {
          const userDoc = await getDoc(doc(FIRESTORE_DB, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserInfo(userData);
          } else {
            setError('User not found in Firestore');
          }
        } else {
          setError('User is not authenticated');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('Error fetching user details');
        setLoading(false);
      }
    };

    getUserDetails();

    // Calculate the greeting message based on the current time
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours < 12) {
      setGreeting('Good morning');
    } else if (hours < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {loading ? <Text>Loading...</Text> : null}
      {error ? (
        <View>
          <Text>Error: {error}</Text>
        </View>
      ) : (
        <PageContainer>
          <View>
            <Text>{greeting},</Text>
            <Text>Welcome {userInfo?.Name}</Text>
          </View>
        </PageContainer>
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
