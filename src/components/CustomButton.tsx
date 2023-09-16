import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

type CustomButtonProps = {
  onPress: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
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
