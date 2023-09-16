import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

type InputProps = {
  iconName: any;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
};

const Input: React.FC<InputProps> = ({
  iconName,
  placeholder,
  value,
  onChangeText,
  onBlur,
}) => {
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={24} color="black" />
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#888"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onBlur={onBlur}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#3F3D3D',
    flex: 0.8,
    fontSize: 15,
    paddingVertical: 10,
  },
});
