import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { convertTimeUnitToWord } from '../helpers/unitConverters';

function EffectSummary(props) {
  const { effect, category, amount, name, unit, time } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{effect}</Text>
      <Text style={styles.text}>{category}</Text>
      <Text style={styles.text}>
        {amount}
        {unit}
      </Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{convertTimeUnitToWord(time)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 5,
    padding: 5,
  },
  text: {
    fontSize: 15,
  },
});

export default EffectSummary;
