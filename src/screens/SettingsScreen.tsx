import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import PageContainer from '../components/PageContainer';
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { useNavigation } from '../types/react-navigation';

const SettingsScreen = () => {
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
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.generalSection}>
        <Text style={styles.generalText}>General</Text>
        <View style={styles.generalSectionSub}>
          <Pressable
            style={styles.generalSectionSubItem}
            onPress={() => console.log('Pressed')}
          >
            <MaterialIcons name="tonality" size={21} color="black" />
            <Text style={styles.generalSectionSubItemText}>Themes</Text>
          </Pressable>
          <Pressable
            style={styles.generalSectionSubItem}
            onPress={() => navigation.navigate('Notifications')}
          >
            <Ionicons name="notifications" size={21} color="black" />
            <Text style={styles.generalSectionSubItemText}>Notifications</Text>
          </Pressable>
          <Pressable
            style={styles.generalSectionSubItem}
            onPress={() => navigation.navigate('Data and Storage')}
          >
            <MaterialIcons name="storage" size={21} color="black" />
            <Text style={styles.generalSectionSubItemText}>
              Data and Storage
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.generalSection}>
        <Text style={styles.generalText}>Main</Text>
        <View style={styles.generalSectionSub}>
          <Pressable
            style={styles.generalSectionSubItem}
            onPress={() => navigation.navigate('Account')}
          >
            <MaterialCommunityIcons
              name="account-circle"
              size={20}
              color="black"
            />
            <Text style={styles.generalSectionSubItemText}>Account</Text>
          </Pressable>
          <Pressable
            style={styles.generalSectionSubItem}
            onPress={() => navigation.navigate('Messaging and Calling')}
          >
            <MaterialIcons name="contact-phone" size={21} color="black" />
            <Text style={styles.generalSectionSubItemText}>
              Messaging and Calling
            </Text>
          </Pressable>
          <Pressable
            style={styles.generalSectionSubItem}
            onPress={() => navigation.navigate('App Permission')}
          >
            <MaterialIcons
              name="settings-applications"
              size={21}
              color="black"
            />
            <Text style={styles.generalSectionSubItemText}>
              App and Permission
            </Text>
          </Pressable>
          <Pressable
            style={styles.generalSectionSubItem}
            onPress={() => navigation.navigate('About')}
          >
            <MaterialIcons name="storage" size={21} color="black" />
            <Text style={styles.generalSectionSubItemText}>About</Text>
          </Pressable>
        </View>
      </View>
    </PageContainer>
  );
};

export default SettingsScreen;

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
  generalSection: {
    marginTop: 20,
  },
  generalText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  generalSectionSub: {
    marginLeft: 8,
    gap: 30,
  },
  generalSectionSubItem: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  generalSectionSubItemText: {
    fontSize: 13,
  },
});
