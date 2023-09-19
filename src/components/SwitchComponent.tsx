import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const SwitchComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <Switch
        trackColor={{ false: '#9499B0', true: '#304FFE' }}
        thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
        ios_backgroundColor="#9499B0"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SwitchComponent;
