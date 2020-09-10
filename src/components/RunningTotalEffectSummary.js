import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { convertTimeUnitToWord } from '../helpers/unitConverters';
import { formatUnit } from '../helpers/unitFormatter';

function EffectSummary(props) {
  const { effect, category, amount, name, unit, time, date } = props;

  return (
    <View style={styles.container}>
      {unit.includes('$') ? (
        <View style={styles.row}>
          {formatUnit(unit)}
          <Text>
            {Math.round(
              Number(amount) * moment().diff(moment(date), time, true) * 10
            ) / 10}
          </Text>
        </View>
      ) : (
        <View style={styles.row}>
          <Text>
            {Math.round(
              Number(amount) * moment().diff(moment(date), time, true) * 10
            ) / 10}
          </Text>
          {formatUnit(unit)}
        </View>
      )}

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
  row: {
    flexDirection: 'row',
  },
});

export default EffectSummary;

// <Text style={styles.text}>
//         {Math.round(Number(amount) * moment().diff(moment(date), time, true))}
//         {unit}
//       </Text>
