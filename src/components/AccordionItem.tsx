import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

type RadioProps = {
  label: string;
  selected: boolean;
  onSelect: () => void;
};

const Radio = ({ label, selected, onSelect }: RadioProps) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={selected ? 'radio-button-checked' : 'radio-button-unchecked'}
          size={20}
          color="#bbb"
        />
        <Text style={{ marginLeft: 8 }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

type AccordionItemProps = {
  title: string;
};

const AccordionItem = ({ title }: AccordionItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleOption = (label: string) => {
    if (selectedOption === label) {
      setSelectedOption(null); // Unselect the option if it's already selected
    } else {
      setSelectedOption(label); // Select the option if it's not selected
    }
  };

  const toggleItem = () => {
    setExpanded(!expanded);
  };

  const body = (
    <View style={styles.accordBody}>
      {['High', 'Medium', 'Low', 'Ask Any Time'].map((label, index) => (
        <Radio
          key={index}
          label={label}
          selected={selectedOption === label}
          onSelect={() => toggleOption(label)}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.accordContainer}>
      <TouchableOpacity
        style={styles.accordHeader}
        onPress={() => toggleItem()}
      >
        <Text style={styles.accordTitle}>{title}</Text>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={20}
          color="#bbb"
        />
      </TouchableOpacity>
      {expanded ? (
        body
      ) : (
        <Text style={styles.selectedValues}>{selectedOption}</Text>
      )}
    </View>
  );
};

export default AccordionItem;

const styles = StyleSheet.create({
  accordContainer: {
    marginBottom: 10,
  },
  accordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  accordTitle: {
    fontSize: 18,
  },
  accordBody: {
    padding: 10,
    backgroundColor: '#F5F6FE',
  },
  selectedValues: {
    fontSize: 10,
    color: '#9D9393', // Adjust the color to your preference
  },
});
