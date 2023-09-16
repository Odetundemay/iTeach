import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../config/firebase';

import { doc, getDoc } from 'firebase/firestore';
import PageContainer from '../components/PageContainer';
const Dashboard = () => {
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        <PageContainer>
          <View>
            <Text>Good morning,</Text>
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
