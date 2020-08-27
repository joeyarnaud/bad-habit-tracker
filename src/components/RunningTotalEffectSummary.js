import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { convertTimeUnitToWord } from '../helpers/unitConverters';

function EffectSummary(props) {
  const { effect, category, amount, name, unit, time, date } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {Math.round(Number(amount) * moment().diff(moment(date), time, true))}
        {unit}
      </Text>
      <Text style={styles.text}>{name}</Text>
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
